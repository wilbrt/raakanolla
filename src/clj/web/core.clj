(ns web.core
  (:require
    [compojure.core :refer :all]
    [ring.middleware.params :as params]
    [compojure.route :as route]
    [aleph.http :as http]
    [byte-streams :as bs]
    [manifold.stream :as s]
    [manifold.deferred :as d]
    [manifold.bus :as bus]
    [clojure.java.io :as io]
    [clojure.core.async :as a]
    [web.gamelogic :as logic])
  (:gen-class))

(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

(def games (bus/event-bus))

(def gamestate (atom {}))

(defn search []
  (let [m (some #(if (= 0 (:status (second %)))
                (subs (str (first %)) 1)) @gamestate)]
   (if m
        m
     (str (gensym "Room-")))))

(defn game-handler
  [req]
  (d/let-flow [conn (d/catch
                      (http/websocket-connection req)
                      (fn [_] nil))
               turnc (atom {:c 0})]
    (if-not conn
      ;; if it wasn't a valid websocket handshake, return an error
      non-websocket-request
      ;; otherwise, take the first two messages, which give us the chatroom and name
      (d/let-flow [room (search)]
        ;; take all messages from the chatroom, and feed them to the client
        (s/connect
          (bus/subscribe games room)
          conn)

        (if-not ((keyword room) @gamestate)
          (do (swap! gamestate logic/newroom room)
              (swap! turnc setstate "X" inc)
              (s/put! conn (str {:msg "Waiting for opponent..."})))
          (do (swap! gamestate (fn [current]
                             (update-in current [(keyword room) :status] inc)))
              (swap! turnc setstate "O" dec)
              (bus/publish! games room (str {:msg "Let the game begin!"}))))

      (s/consume
        #(if  (and (= (get-in @gamestate [(keyword room) :turn]) (:c @turnc))
                  (not (get-in @gamestate [(keyword room) :game (keyword %)])))
            (do (swap! gamestate logic/gameloop (keyword room) (keyword %) (str (:symbol @turnc)))
                (if (logic/win? (get-in @gamestate [(keyword room) :game]) (str (:symbol @turnc)))
                       (bus/publish! games room (str (:symbol @turnc) "'s WIN!"))
                       (bus/publish! games room (str ((keyword room) @gamestate))))))

           (->> conn
              (s/map #(str %))
              (s/buffer 100)))
        ;; Compojure expects some sort of HTTP response, so just give it `nil`
        {:body "Compojure http response"}))))


(defn index-handler [_]
  {:body
    (slurp (io/resource "public/index.html"))})

(defroutes resources-routes
    (route/resources "/"))

(def handler
  (params/wrap-params
    (routes
      resources-routes
      (GET "/" [] (index-handler "asd"))
      (GET "/game" [] game-handler)
      (route/not-found "No such page."))))

(defn -main
  [& args]
  (http/start-server handler {:port  8080 #_(Integer/parseInt (System/getenv "PORT"))}))
