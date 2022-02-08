goog.provide('demo.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","initialize-db","demo.events/initialize-db",390106396),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__29532__auto__ = demo.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29532__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29532__auto__;
}catch (e29779){var e = e29779;
throw e;
}}):(function (_,___$1){
return demo.db.default_db;
})));
demo.events.address = (function demo$events$address(){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(window.location.href.split("/"),(2));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","connect-websocket","demo.events/connect-websocket",-1095086621),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"socket","socket",59137063),wscljs.client.create(["wss://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.events.address()),"/game"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (p1__29780_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","update-handler","demo.events/update-handler",1029429918),p1__29780_SHARP_], null));
})], null)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","open-con","demo.events/open-con",-1399569539),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"in-game","in-game",-1908519607),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","update-handler","demo.events/update-handler",1029429918),(function (db,p__29781){
var vec__29782 = p__29781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29782,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29782,(1),null);
var val = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(msg.data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(val))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"gamemarkers","gamemarkers",-1783153503),val);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(val))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(val),"Let the game begin!")){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"in-game","in-game",-1908519607),true),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(val));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"result","result",1415092211),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," WIN!!!"].join('')),new cljs.core.Keyword(null,"socket","socket",59137063)),new cljs.core.Keyword(null,"gamemarkers","gamemarkers",-1783153503)),new cljs.core.Keyword(null,"in-game","in-game",-1908519607),false);
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","update-name","demo.events/update-name",-2093053412),(function (db,p__29785){
var vec__29786 = p__29785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.rest(window.location.href.split("/")));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","search-field","demo.events/search-field",118840563),(function (db,p__29789){
var vec__29790 = p__29789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"field","field",-1302436500),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("demo.events","shoot","demo.events/shoot",1811613795),(function (p__29793,p__29794){
var map__29795 = p__29793;
var map__29795__$1 = cljs.core.__destructure_map(map__29795);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29795__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29796 = p__29794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(1),null);
return wscljs.client.send.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(db),pos);
}));

//# sourceMappingURL=demo.events.js.map
