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
    [clojure.core.async :as a]))

(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

(defn echo-handler
  [req]
  (->
    (d/let-flow [socket (http/websocket-connection req)]
      (s/connect socket socket))
    (d/catch
      (fn [_]
        non-websocket-request))))

(defn checkloop [list]
       (loop [these list counter 1]
         (if (= these ())
           false
           (if (= counter 5)
              true
              (recur (rest these) (if (= (inc (second (first these)))
                                        (second (first (rest these))))
                                      (inc counter)
                                      1))))))

(defn checkcross [list fun]
    (if (= fun 0)
      (vals (group-by #(+ (first %) (second %)) list))
      (vals (group-by #(- (first %) (second %)) list))))

(defn mapcheck [list]
  (or
    (contains?
         (set (map #(checkloop (sort-by last %)) (checkcross list 0))) true)
    (contains?
         (set (map #(checkloop (sort-by last %)) (checkcross list 1))) true)))

(defn checkline [row list]
  (->> list
       (filter #(= (first %) row))
       (sort-by last)
       (checkloop)))

(defn checkall [list]
  (loop [counter 0]
    (if (checkline counter list)
      true
      (if (= counter 19)
        false
        (recur (inc counter))))))

(defn xchange [[x y]]
  [y x])

(defn checkx [state x]
  (->> state
      (filter #(= (second %) x))
      (map #(str (first %)))
      (map #(subs % 1))
      (map #(clojure.string/split % #"\."))
      (map #(vec (list (Integer/parseInt (first %)) (Integer/parseInt (last %)))))))

(defn win? [state x]
  (let [xs (checkx state x)]
    (or (checkall xs)
        (checkall (map xchange xs))
        (mapcheck xs))))

(defn turn [x] (* -1 x))

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
      (d/let-flow [room #_(search (s/take! conn)) (search)]
        ;; take all messages from the chatroom, and feed them to the client
        (s/connect
          (bus/subscribe games room)
          conn)

        (if-not ((keyword room) @gamestate)
          (do (swap! gamestate (fn [current]
                             (assoc current (keyword room) {:turn 1
                                                            :status 0})))
              (swap! turnc #(update % :c inc))
              (swap! turnc #(assoc % :symbol "X")))
          (do (swap! gamestate (fn [current]
                             (update-in current [(keyword room) :status] inc)))
              (swap! turnc #(update % :c dec))
              (swap! turnc #(assoc % :symbol "O"))))

      (s/consume
        #(if  (and (= (get-in @gamestate [(keyword room) :turn]) (:c @turnc))
                  (not (get-in @gamestate [(keyword room) :game (keyword %)])))
            (do (swap! gamestate (fn [current]
                                 (assoc-in current [(keyword room) :game]
                                          (merge (get-in current [(keyword room) :game]) {(keyword %) (str (:symbol @turnc))}))))
               (swap! gamestate (fn [current]
                                 (update-in current [(keyword room) :turn] turn)))
                (if (win? (get-in @gamestate [(keyword room) :game]) (str (:symbol @turnc)))
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
  (http/start-server handler {:port (Integer/parseInt (System/getenv "PORT"))}))
