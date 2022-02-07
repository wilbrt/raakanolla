(ns demo.views
  (:require
   [re-frame.core :as re-frame]
   [demo.subs :as subs]
   [demo.events :as events]
   ))

(defn cell [row col]
 (let [state (re-frame/subscribe [::subs/gamemarkers])]
  [:td.cell {
             :on-click #(re-frame/dispatch [::events/shoot (str row "." col)])
             :key (gensym "cell_")}
                            (get-in @state [:game (keyword (str row "." col))])]))

(defn row [n max]
  [:div {:key (gensym "row_")}
   (doall (map #(cell n %) (range max)))])

(defn game []
(doall (map #(row % 20) (range 20))))

(defn findmatch []
  [:button {:on-click #(re-frame/dispatch [::events/connect-websocket])} "Find Match!"])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        game (re-frame/subscribe [::subs/in-game])
        result (re-frame/subscribe [::subs/result])]
    [:div {:align "center"}
     [:h1 "Raaka Ristinolla"]
     [:h2 (when-not @game (str @result))]
     (if-not @game (do (findmatch)))
     (when @game (doall (map #(row % 20) (range 20))))]))
