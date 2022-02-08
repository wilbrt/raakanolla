(ns demo.events
  (:require
   [re-frame.core :as re-frame]
   [demo.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [wscljs.client :as ws]
   [wscljs.format :as fmt]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(defn address []
  (-> (.. js/window -location -href)
      (.split "/")
      (nth 2)))

(re-frame/reg-event-db
 ::connect-websocket
 (fn [db _]
   (assoc db :socket (ws/create (str "wss://" (address) "/game")
                                {:on-message #(re-frame/dispatch [::update-handler %])}))))
(re-frame/reg-event-db
 ::open-con
 (fn [db _]
   (assoc db :in-game true)))

(re-frame/reg-event-db
 ::update-handler
 (fn [db [_ msg]]
  (let [val (cljs.reader/read-string (.-data msg))]
    (if (:status val)
        (assoc db :gamemarkers val)
        (if (:msg val)
            (if (= (:msg val) "Let the game begin!")
                (-> db
                    (assoc :in-game true)
                    (dissoc :result))
                (assoc db :result (:msg val)))
          (-> db
            (assoc :result (str val " WIN!!!"))
            (dissoc :socket)
            (dissoc :gamemarkers)
            (assoc :in-game false)))))))

(re-frame/reg-event-db
 ::update-name
 (fn [db [_ val]]
   (assoc db :name (rest (.split (.. js/window -location -href) "/")))))

(re-frame/reg-event-db
 ::search-field
 (fn [db [_ val]]
   (assoc db :field val)))

(re-frame/reg-event-fx
 ::shoot
 (fn [{:keys [db]} [_ pos]]
   (ws/send (:socket db) pos)))
