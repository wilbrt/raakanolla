goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__31770 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31771 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31771);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___31901 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___31901)){
var new_db_31902 = temp__5753__auto___31901;
var fexpr__31787_31903 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31787_31903.cljs$core$IFn$_invoke$arity$1 ? fexpr__31787_31903.cljs$core$IFn$_invoke$arity$1(new_db_31902) : fexpr__31787_31903.call(null,new_db_31902));
} else {
}

var seq__31791 = cljs.core.seq(effects_without_db);
var chunk__31792 = null;
var count__31794 = (0);
var i__31795 = (0);
while(true){
if((i__31795 < count__31794)){
var vec__31811 = chunk__31792.cljs$core$IIndexed$_nth$arity$2(null,i__31795);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31811,(1),null);
var temp__5751__auto___31904 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31904)){
var effect_fn_31905 = temp__5751__auto___31904;
(effect_fn_31905.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31905.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31905.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31906 = seq__31791;
var G__31907 = chunk__31792;
var G__31908 = count__31794;
var G__31909 = (i__31795 + (1));
seq__31791 = G__31906;
chunk__31792 = G__31907;
count__31794 = G__31908;
i__31795 = G__31909;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31791);
if(temp__5753__auto__){
var seq__31791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31791__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31791__$1);
var G__31910 = cljs.core.chunk_rest(seq__31791__$1);
var G__31911 = c__4679__auto__;
var G__31912 = cljs.core.count(c__4679__auto__);
var G__31913 = (0);
seq__31791 = G__31910;
chunk__31792 = G__31911;
count__31794 = G__31912;
i__31795 = G__31913;
continue;
} else {
var vec__31817 = cljs.core.first(seq__31791__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31817,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31817,(1),null);
var temp__5751__auto___31914 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31914)){
var effect_fn_31915 = temp__5751__auto___31914;
(effect_fn_31915.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31915.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31915.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31916 = cljs.core.next(seq__31791__$1);
var G__31917 = null;
var G__31918 = (0);
var G__31919 = (0);
seq__31791 = G__31916;
chunk__31792 = G__31917;
count__31794 = G__31918;
i__31795 = G__31919;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31462__auto___31920 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31463__auto___31921 = (end__31462__auto___31920 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31463__auto___31921,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31462__auto___31920);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31770);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___31922 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___31922)){
var new_db_31923 = temp__5753__auto___31922;
var fexpr__31822_31924 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31822_31924.cljs$core$IFn$_invoke$arity$1 ? fexpr__31822_31924.cljs$core$IFn$_invoke$arity$1(new_db_31923) : fexpr__31822_31924.call(null,new_db_31923));
} else {
}

var seq__31823 = cljs.core.seq(effects_without_db);
var chunk__31824 = null;
var count__31825 = (0);
var i__31826 = (0);
while(true){
if((i__31826 < count__31825)){
var vec__31833 = chunk__31824.cljs$core$IIndexed$_nth$arity$2(null,i__31826);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833,(1),null);
var temp__5751__auto___31925 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31925)){
var effect_fn_31926 = temp__5751__auto___31925;
(effect_fn_31926.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31926.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31926.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31927 = seq__31823;
var G__31928 = chunk__31824;
var G__31929 = count__31825;
var G__31930 = (i__31826 + (1));
seq__31823 = G__31927;
chunk__31824 = G__31928;
count__31825 = G__31929;
i__31826 = G__31930;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31823);
if(temp__5753__auto__){
var seq__31823__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31823__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31823__$1);
var G__31932 = cljs.core.chunk_rest(seq__31823__$1);
var G__31933 = c__4679__auto__;
var G__31934 = cljs.core.count(c__4679__auto__);
var G__31935 = (0);
seq__31823 = G__31932;
chunk__31824 = G__31933;
count__31825 = G__31934;
i__31826 = G__31935;
continue;
} else {
var vec__31837 = cljs.core.first(seq__31823__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837,(1),null);
var temp__5751__auto___31939 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31939)){
var effect_fn_31940 = temp__5751__auto___31939;
(effect_fn_31940.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31940.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31940.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31941 = cljs.core.next(seq__31823__$1);
var G__31942 = null;
var G__31943 = (0);
var G__31944 = (0);
seq__31823 = G__31941;
chunk__31824 = G__31942;
count__31825 = G__31943;
i__31826 = G__31944;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__31844){
var map__31845 = p__31844;
var map__31845__$1 = cljs.core.__destructure_map(map__31845);
var effect = map__31845__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31845__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31845__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__31846 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31847 = null;
var count__31848 = (0);
var i__31849 = (0);
while(true){
if((i__31849 < count__31848)){
var effect = chunk__31847.cljs$core$IIndexed$_nth$arity$2(null,i__31849);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__31946 = seq__31846;
var G__31947 = chunk__31847;
var G__31948 = count__31848;
var G__31949 = (i__31849 + (1));
seq__31846 = G__31946;
chunk__31847 = G__31947;
count__31848 = G__31948;
i__31849 = G__31949;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31846);
if(temp__5753__auto__){
var seq__31846__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31846__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31846__$1);
var G__31971 = cljs.core.chunk_rest(seq__31846__$1);
var G__31972 = c__4679__auto__;
var G__31973 = cljs.core.count(c__4679__auto__);
var G__31974 = (0);
seq__31846 = G__31971;
chunk__31847 = G__31972;
count__31848 = G__31973;
i__31849 = G__31974;
continue;
} else {
var effect = cljs.core.first(seq__31846__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__31976 = cljs.core.next(seq__31846__$1);
var G__31977 = null;
var G__31978 = (0);
var G__31979 = (0);
seq__31846 = G__31976;
chunk__31847 = G__31977;
count__31848 = G__31978;
i__31849 = G__31979;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__31851 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31852 = null;
var count__31853 = (0);
var i__31854 = (0);
while(true){
if((i__31854 < count__31853)){
var vec__31864 = chunk__31852.cljs$core$IIndexed$_nth$arity$2(null,i__31854);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___31981 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31981)){
var effect_fn_31982 = temp__5751__auto___31981;
(effect_fn_31982.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31982.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31982.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31983 = seq__31851;
var G__31984 = chunk__31852;
var G__31985 = count__31853;
var G__31986 = (i__31854 + (1));
seq__31851 = G__31983;
chunk__31852 = G__31984;
count__31853 = G__31985;
i__31854 = G__31986;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31851);
if(temp__5753__auto__){
var seq__31851__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31851__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31851__$1);
var G__31987 = cljs.core.chunk_rest(seq__31851__$1);
var G__31988 = c__4679__auto__;
var G__31989 = cljs.core.count(c__4679__auto__);
var G__31990 = (0);
seq__31851 = G__31987;
chunk__31852 = G__31988;
count__31853 = G__31989;
i__31854 = G__31990;
continue;
} else {
var vec__31871 = cljs.core.first(seq__31851__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31871,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___31992 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___31992)){
var effect_fn_31994 = temp__5751__auto___31992;
(effect_fn_31994.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31994.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31994.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31996 = cljs.core.next(seq__31851__$1);
var G__31997 = null;
var G__31998 = (0);
var G__31999 = (0);
seq__31851 = G__31996;
chunk__31852 = G__31997;
count__31853 = G__31998;
i__31854 = G__31999;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__31882 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31883 = null;
var count__31884 = (0);
var i__31885 = (0);
while(true){
if((i__31885 < count__31884)){
var event = chunk__31883.cljs$core$IIndexed$_nth$arity$2(null,i__31885);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32000 = seq__31882;
var G__32001 = chunk__31883;
var G__32002 = count__31884;
var G__32003 = (i__31885 + (1));
seq__31882 = G__32000;
chunk__31883 = G__32001;
count__31884 = G__32002;
i__31885 = G__32003;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31882);
if(temp__5753__auto__){
var seq__31882__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31882__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31882__$1);
var G__32005 = cljs.core.chunk_rest(seq__31882__$1);
var G__32006 = c__4679__auto__;
var G__32007 = cljs.core.count(c__4679__auto__);
var G__32008 = (0);
seq__31882 = G__32005;
chunk__31883 = G__32006;
count__31884 = G__32007;
i__31885 = G__32008;
continue;
} else {
var event = cljs.core.first(seq__31882__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32009 = cljs.core.next(seq__31882__$1);
var G__32010 = null;
var G__32011 = (0);
var G__32012 = (0);
seq__31882 = G__32009;
chunk__31883 = G__32010;
count__31884 = G__32011;
i__31885 = G__32012;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__31886 = cljs.core.seq(value);
var chunk__31887 = null;
var count__31888 = (0);
var i__31889 = (0);
while(true){
if((i__31889 < count__31888)){
var event = chunk__31887.cljs$core$IIndexed$_nth$arity$2(null,i__31889);
clear_event(event);


var G__32018 = seq__31886;
var G__32019 = chunk__31887;
var G__32020 = count__31888;
var G__32021 = (i__31889 + (1));
seq__31886 = G__32018;
chunk__31887 = G__32019;
count__31888 = G__32020;
i__31889 = G__32021;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31886);
if(temp__5753__auto__){
var seq__31886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31886__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31886__$1);
var G__32024 = cljs.core.chunk_rest(seq__31886__$1);
var G__32025 = c__4679__auto__;
var G__32026 = cljs.core.count(c__4679__auto__);
var G__32027 = (0);
seq__31886 = G__32024;
chunk__31887 = G__32025;
count__31888 = G__32026;
i__31889 = G__32027;
continue;
} else {
var event = cljs.core.first(seq__31886__$1);
clear_event(event);


var G__32028 = cljs.core.next(seq__31886__$1);
var G__32029 = null;
var G__32030 = (0);
var G__32031 = (0);
seq__31886 = G__32028;
chunk__31887 = G__32029;
count__31888 = G__32030;
i__31889 = G__32031;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
