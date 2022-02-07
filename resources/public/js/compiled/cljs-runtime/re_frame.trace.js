goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34817){
var map__34818 = p__34817;
var map__34818__$1 = cljs.core.__destructure_map(map__34818);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__34819_34905 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__34820_34906 = null;
var count__34821_34907 = (0);
var i__34822_34908 = (0);
while(true){
if((i__34822_34908 < count__34821_34907)){
var vec__34837_34909 = chunk__34820_34906.cljs$core$IIndexed$_nth$arity$2(null,i__34822_34908);
var k_34910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837_34909,(0),null);
var cb_34911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837_34909,(1),null);
try{var G__34841_34912 = cljs.core.deref(re_frame.trace.traces);
(cb_34911.cljs$core$IFn$_invoke$arity$1 ? cb_34911.cljs$core$IFn$_invoke$arity$1(G__34841_34912) : cb_34911.call(null,G__34841_34912));
}catch (e34840){var e_34913 = e34840;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34910,"while storing",cljs.core.deref(re_frame.trace.traces),e_34913], 0));
}

var G__34916 = seq__34819_34905;
var G__34917 = chunk__34820_34906;
var G__34918 = count__34821_34907;
var G__34919 = (i__34822_34908 + (1));
seq__34819_34905 = G__34916;
chunk__34820_34906 = G__34917;
count__34821_34907 = G__34918;
i__34822_34908 = G__34919;
continue;
} else {
var temp__5753__auto___34920 = cljs.core.seq(seq__34819_34905);
if(temp__5753__auto___34920){
var seq__34819_34921__$1 = temp__5753__auto___34920;
if(cljs.core.chunked_seq_QMARK_(seq__34819_34921__$1)){
var c__4679__auto___34922 = cljs.core.chunk_first(seq__34819_34921__$1);
var G__34923 = cljs.core.chunk_rest(seq__34819_34921__$1);
var G__34924 = c__4679__auto___34922;
var G__34925 = cljs.core.count(c__4679__auto___34922);
var G__34926 = (0);
seq__34819_34905 = G__34923;
chunk__34820_34906 = G__34924;
count__34821_34907 = G__34925;
i__34822_34908 = G__34926;
continue;
} else {
var vec__34842_34927 = cljs.core.first(seq__34819_34921__$1);
var k_34928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842_34927,(0),null);
var cb_34929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842_34927,(1),null);
try{var G__34846_34930 = cljs.core.deref(re_frame.trace.traces);
(cb_34929.cljs$core$IFn$_invoke$arity$1 ? cb_34929.cljs$core$IFn$_invoke$arity$1(G__34846_34930) : cb_34929.call(null,G__34846_34930));
}catch (e34845){var e_34931 = e34845;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34928,"while storing",cljs.core.deref(re_frame.trace.traces),e_34931], 0));
}

var G__34932 = cljs.core.next(seq__34819_34921__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__34819_34905 = G__34932;
chunk__34820_34906 = G__34933;
count__34821_34907 = G__34934;
i__34822_34908 = G__34935;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
