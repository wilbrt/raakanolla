(defproject TicTac "0.1.0-SNAPSHOT"
  :source-paths ["src" "src/clj"]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring "1.9.5"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [metosin/muuntaja "0.6.8"]
                 [compojure "1.6.2"]
                 [ring/ring-json "0.5.1"]
                 [day8.re-frame/http-fx "0.2.3"]
                 [clj-http "3.12.3"]
                 [manifold "0.2.3"]
                 [cheshire "5.10.1"]
                 [aleph "0.4.6"]
                 [proto-repl "0.3.1"]
                 [mount "0.1.16"]
                 [com.taoensso/sente "1.16.2"]]
  :main ^:skip-aot web.core
  :uberjar-name "TicTac-standalone.jar"
  :min-lein-version "2.0.0"
  :ring {:handler web.core/app}
  :plugins [[lein-ring "0.12.6"]]
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}
             :uberjar {:aot :all}})
