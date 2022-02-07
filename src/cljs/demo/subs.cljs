(ns demo.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::field
 (fn [db]
   (:field db)))

(re-frame/reg-sub
 ::gamemarkers
 (fn [db]
   (:gamemarkers db)))

(re-frame/reg-sub
 ::in-game
 (fn [db]
   (:in-game db)))

(re-frame/reg-sub
 ::result
 (fn [db]
   (:result db)))
