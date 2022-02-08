(ns web.gamelogic)

(defn newroom [current room]
      (assoc current (keyword room) {:turn 1
                                     :status 0}))

(defn turn [x] (* -1 x))

(defn setstate [state symbol fun]
  (-> state
      (update :c fun)
      (assoc :symbol symbol)))

(defn gameloop [current room pos symbol]
  (-> current
      (assoc-in [room :game]
                (merge
                 (get-in current [room :game])
                 {pos symbol}))
      (update-in [room :turn] turn)))


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
