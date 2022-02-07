goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35209 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35210 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35210);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35306 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35306)){
var new_db_35307 = temp__5753__auto___35306;
var fexpr__35211_35308 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35211_35308.cljs$core$IFn$_invoke$arity$1 ? fexpr__35211_35308.cljs$core$IFn$_invoke$arity$1(new_db_35307) : fexpr__35211_35308.call(null,new_db_35307));
} else {
}

var seq__35216 = cljs.core.seq(effects_without_db);
var chunk__35217 = null;
var count__35218 = (0);
var i__35219 = (0);
while(true){
if((i__35219 < count__35218)){
var vec__35234 = chunk__35217.cljs$core$IIndexed$_nth$arity$2(null,i__35219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(1),null);
var temp__5751__auto___35309 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35309)){
var effect_fn_35311 = temp__5751__auto___35309;
(effect_fn_35311.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35311.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35311.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35312 = seq__35216;
var G__35313 = chunk__35217;
var G__35314 = count__35218;
var G__35315 = (i__35219 + (1));
seq__35216 = G__35312;
chunk__35217 = G__35313;
count__35218 = G__35314;
i__35219 = G__35315;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35216);
if(temp__5753__auto__){
var seq__35216__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35216__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35216__$1);
var G__35316 = cljs.core.chunk_rest(seq__35216__$1);
var G__35317 = c__4679__auto__;
var G__35318 = cljs.core.count(c__4679__auto__);
var G__35319 = (0);
seq__35216 = G__35316;
chunk__35217 = G__35317;
count__35218 = G__35318;
i__35219 = G__35319;
continue;
} else {
var vec__35240 = cljs.core.first(seq__35216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,(1),null);
var temp__5751__auto___35320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35320)){
var effect_fn_35321 = temp__5751__auto___35320;
(effect_fn_35321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35321.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35322 = cljs.core.next(seq__35216__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__35216 = G__35322;
chunk__35217 = G__35323;
count__35218 = G__35324;
i__35219 = G__35325;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__34789__auto___35326 = re_frame.interop.now();
var duration__34790__auto___35327 = (end__34789__auto___35326 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34790__auto___35327,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__34789__auto___35326);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35209);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35329 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35329)){
var new_db_35330 = temp__5753__auto___35329;
var fexpr__35244_35331 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35244_35331.cljs$core$IFn$_invoke$arity$1 ? fexpr__35244_35331.cljs$core$IFn$_invoke$arity$1(new_db_35330) : fexpr__35244_35331.call(null,new_db_35330));
} else {
}

var seq__35245 = cljs.core.seq(effects_without_db);
var chunk__35246 = null;
var count__35247 = (0);
var i__35248 = (0);
while(true){
if((i__35248 < count__35247)){
var vec__35259 = chunk__35246.cljs$core$IIndexed$_nth$arity$2(null,i__35248);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(1),null);
var temp__5751__auto___35332 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35332)){
var effect_fn_35333 = temp__5751__auto___35332;
(effect_fn_35333.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35333.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35333.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35334 = seq__35245;
var G__35335 = chunk__35246;
var G__35336 = count__35247;
var G__35337 = (i__35248 + (1));
seq__35245 = G__35334;
chunk__35246 = G__35335;
count__35247 = G__35336;
i__35248 = G__35337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35245);
if(temp__5753__auto__){
var seq__35245__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35245__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35245__$1);
var G__35338 = cljs.core.chunk_rest(seq__35245__$1);
var G__35339 = c__4679__auto__;
var G__35340 = cljs.core.count(c__4679__auto__);
var G__35341 = (0);
seq__35245 = G__35338;
chunk__35246 = G__35339;
count__35247 = G__35340;
i__35248 = G__35341;
continue;
} else {
var vec__35263 = cljs.core.first(seq__35245__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(1),null);
var temp__5751__auto___35342 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35342)){
var effect_fn_35343 = temp__5751__auto___35342;
(effect_fn_35343.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35343.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35343.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35344 = cljs.core.next(seq__35245__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__35245 = G__35344;
chunk__35246 = G__35345;
count__35247 = G__35346;
i__35248 = G__35347;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35266){
var map__35267 = p__35266;
var map__35267__$1 = cljs.core.__destructure_map(map__35267);
var effect = map__35267__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35268 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35269 = null;
var count__35270 = (0);
var i__35271 = (0);
while(true){
if((i__35271 < count__35270)){
var effect = chunk__35269.cljs$core$IIndexed$_nth$arity$2(null,i__35271);
re_frame.fx.dispatch_later(effect);


var G__35350 = seq__35268;
var G__35351 = chunk__35269;
var G__35352 = count__35270;
var G__35353 = (i__35271 + (1));
seq__35268 = G__35350;
chunk__35269 = G__35351;
count__35270 = G__35352;
i__35271 = G__35353;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35268);
if(temp__5753__auto__){
var seq__35268__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35268__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35268__$1);
var G__35354 = cljs.core.chunk_rest(seq__35268__$1);
var G__35355 = c__4679__auto__;
var G__35356 = cljs.core.count(c__4679__auto__);
var G__35357 = (0);
seq__35268 = G__35354;
chunk__35269 = G__35355;
count__35270 = G__35356;
i__35271 = G__35357;
continue;
} else {
var effect = cljs.core.first(seq__35268__$1);
re_frame.fx.dispatch_later(effect);


var G__35358 = cljs.core.next(seq__35268__$1);
var G__35359 = null;
var G__35360 = (0);
var G__35361 = (0);
seq__35268 = G__35358;
chunk__35269 = G__35359;
count__35270 = G__35360;
i__35271 = G__35361;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35272 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35273 = null;
var count__35274 = (0);
var i__35275 = (0);
while(true){
if((i__35275 < count__35274)){
var vec__35282 = chunk__35273.cljs$core$IIndexed$_nth$arity$2(null,i__35275);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35362 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35362)){
var effect_fn_35363 = temp__5751__auto___35362;
(effect_fn_35363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35363.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35364 = seq__35272;
var G__35365 = chunk__35273;
var G__35366 = count__35274;
var G__35367 = (i__35275 + (1));
seq__35272 = G__35364;
chunk__35273 = G__35365;
count__35274 = G__35366;
i__35275 = G__35367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35272);
if(temp__5753__auto__){
var seq__35272__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35272__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35272__$1);
var G__35368 = cljs.core.chunk_rest(seq__35272__$1);
var G__35369 = c__4679__auto__;
var G__35370 = cljs.core.count(c__4679__auto__);
var G__35371 = (0);
seq__35272 = G__35368;
chunk__35273 = G__35369;
count__35274 = G__35370;
i__35275 = G__35371;
continue;
} else {
var vec__35286 = cljs.core.first(seq__35272__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35286,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35372 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35372)){
var effect_fn_35373 = temp__5751__auto___35372;
(effect_fn_35373.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35373.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35373.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35374 = cljs.core.next(seq__35272__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__35272 = G__35374;
chunk__35273 = G__35375;
count__35274 = G__35376;
i__35275 = G__35377;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35294 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35295 = null;
var count__35296 = (0);
var i__35297 = (0);
while(true){
if((i__35297 < count__35296)){
var event = chunk__35295.cljs$core$IIndexed$_nth$arity$2(null,i__35297);
re_frame.router.dispatch(event);


var G__35381 = seq__35294;
var G__35382 = chunk__35295;
var G__35383 = count__35296;
var G__35384 = (i__35297 + (1));
seq__35294 = G__35381;
chunk__35295 = G__35382;
count__35296 = G__35383;
i__35297 = G__35384;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35294);
if(temp__5753__auto__){
var seq__35294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35294__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35294__$1);
var G__35385 = cljs.core.chunk_rest(seq__35294__$1);
var G__35386 = c__4679__auto__;
var G__35387 = cljs.core.count(c__4679__auto__);
var G__35388 = (0);
seq__35294 = G__35385;
chunk__35295 = G__35386;
count__35296 = G__35387;
i__35297 = G__35388;
continue;
} else {
var event = cljs.core.first(seq__35294__$1);
re_frame.router.dispatch(event);


var G__35389 = cljs.core.next(seq__35294__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__35294 = G__35389;
chunk__35295 = G__35390;
count__35296 = G__35391;
i__35297 = G__35392;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35302 = cljs.core.seq(value);
var chunk__35303 = null;
var count__35304 = (0);
var i__35305 = (0);
while(true){
if((i__35305 < count__35304)){
var event = chunk__35303.cljs$core$IIndexed$_nth$arity$2(null,i__35305);
clear_event(event);


var G__35393 = seq__35302;
var G__35394 = chunk__35303;
var G__35395 = count__35304;
var G__35396 = (i__35305 + (1));
seq__35302 = G__35393;
chunk__35303 = G__35394;
count__35304 = G__35395;
i__35305 = G__35396;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35302);
if(temp__5753__auto__){
var seq__35302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35302__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35302__$1);
var G__35397 = cljs.core.chunk_rest(seq__35302__$1);
var G__35398 = c__4679__auto__;
var G__35399 = cljs.core.count(c__4679__auto__);
var G__35400 = (0);
seq__35302 = G__35397;
chunk__35303 = G__35398;
count__35304 = G__35399;
i__35305 = G__35400;
continue;
} else {
var event = cljs.core.first(seq__35302__$1);
clear_event(event);


var G__35401 = cljs.core.next(seq__35302__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__35302 = G__35401;
chunk__35303 = G__35402;
count__35304 = G__35403;
i__35305 = G__35404;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
