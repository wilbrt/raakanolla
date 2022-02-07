goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42970 = arguments.length;
switch (G__42970) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42974 = (function (f,blockable,meta42975){
this.f = f;
this.blockable = blockable;
this.meta42975 = meta42975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42976,meta42975__$1){
var self__ = this;
var _42976__$1 = this;
return (new cljs.core.async.t_cljs$core$async42974(self__.f,self__.blockable,meta42975__$1));
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42976){
var self__ = this;
var _42976__$1 = this;
return self__.meta42975;
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42975","meta42975",1134621572,null)], null);
}));

(cljs.core.async.t_cljs$core$async42974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42974");

(cljs.core.async.t_cljs$core$async42974.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42974.
 */
cljs.core.async.__GT_t_cljs$core$async42974 = (function cljs$core$async$__GT_t_cljs$core$async42974(f__$1,blockable__$1,meta42975){
return (new cljs.core.async.t_cljs$core$async42974(f__$1,blockable__$1,meta42975));
});

}

return (new cljs.core.async.t_cljs$core$async42974(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42992 = arguments.length;
switch (G__42992) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42994 = arguments.length;
switch (G__42994) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43001 = arguments.length;
switch (G__43001) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45259 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45259) : fn1.call(null,val_45259));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45259) : fn1.call(null,val_45259));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43007 = arguments.length;
switch (G__43007) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___45262 = n;
var x_45263 = (0);
while(true){
if((x_45263 < n__4741__auto___45262)){
(a[x_45263] = x_45263);

var G__45264 = (x_45263 + (1));
x_45263 = G__45264;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43009 = (function (flag,meta43010){
this.flag = flag;
this.meta43010 = meta43010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43011,meta43010__$1){
var self__ = this;
var _43011__$1 = this;
return (new cljs.core.async.t_cljs$core$async43009(self__.flag,meta43010__$1));
}));

(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43011){
var self__ = this;
var _43011__$1 = this;
return self__.meta43010;
}));

(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43010","meta43010",1593342159,null)], null);
}));

(cljs.core.async.t_cljs$core$async43009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43009");

(cljs.core.async.t_cljs$core$async43009.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43009.
 */
cljs.core.async.__GT_t_cljs$core$async43009 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43009(flag__$1,meta43010){
return (new cljs.core.async.t_cljs$core$async43009(flag__$1,meta43010));
});

}

return (new cljs.core.async.t_cljs$core$async43009(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43037 = (function (flag,cb,meta43038){
this.flag = flag;
this.cb = cb;
this.meta43038 = meta43038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43039,meta43038__$1){
var self__ = this;
var _43039__$1 = this;
return (new cljs.core.async.t_cljs$core$async43037(self__.flag,self__.cb,meta43038__$1));
}));

(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43039){
var self__ = this;
var _43039__$1 = this;
return self__.meta43038;
}));

(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43038","meta43038",1850521867,null)], null);
}));

(cljs.core.async.t_cljs$core$async43037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43037");

(cljs.core.async.t_cljs$core$async43037.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43037.
 */
cljs.core.async.__GT_t_cljs$core$async43037 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43037(flag__$1,cb__$1,meta43038){
return (new cljs.core.async.t_cljs$core$async43037(flag__$1,cb__$1,meta43038));
});

}

return (new cljs.core.async.t_cljs$core$async43037(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43063_SHARP_){
var G__43095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43063_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43095) : fret.call(null,G__43095));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43064_SHARP_){
var G__43103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43064_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43103) : fret.call(null,G__43103));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45272 = (i + (1));
i = G__45272;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45276 = arguments.length;
var i__4865__auto___45277 = (0);
while(true){
if((i__4865__auto___45277 < len__4864__auto___45276)){
args__4870__auto__.push((arguments[i__4865__auto___45277]));

var G__45278 = (i__4865__auto___45277 + (1));
i__4865__auto___45277 = G__45278;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43112){
var map__43113 = p__43112;
var map__43113__$1 = cljs.core.__destructure_map(map__43113);
var opts = map__43113__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43109){
var G__43110 = cljs.core.first(seq43109);
var seq43109__$1 = cljs.core.next(seq43109);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43110,seq43109__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43131 = arguments.length;
switch (G__43131) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42901__auto___45281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43175){
var state_val_43176 = (state_43175[(1)]);
if((state_val_43176 === (7))){
var inst_43169 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43186_45282 = state_43175__$1;
(statearr_43186_45282[(2)] = inst_43169);

(statearr_43186_45282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (1))){
var state_43175__$1 = state_43175;
var statearr_43187_45283 = state_43175__$1;
(statearr_43187_45283[(2)] = null);

(statearr_43187_45283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (4))){
var inst_43152 = (state_43175[(7)]);
var inst_43152__$1 = (state_43175[(2)]);
var inst_43153 = (inst_43152__$1 == null);
var state_43175__$1 = (function (){var statearr_43188 = state_43175;
(statearr_43188[(7)] = inst_43152__$1);

return statearr_43188;
})();
if(cljs.core.truth_(inst_43153)){
var statearr_43191_45284 = state_43175__$1;
(statearr_43191_45284[(1)] = (5));

} else {
var statearr_43192_45285 = state_43175__$1;
(statearr_43192_45285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (13))){
var state_43175__$1 = state_43175;
var statearr_43197_45286 = state_43175__$1;
(statearr_43197_45286[(2)] = null);

(statearr_43197_45286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (6))){
var inst_43152 = (state_43175[(7)]);
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43175__$1,(11),to,inst_43152);
} else {
if((state_val_43176 === (3))){
var inst_43172 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43175__$1,inst_43172);
} else {
if((state_val_43176 === (12))){
var state_43175__$1 = state_43175;
var statearr_43204_45288 = state_43175__$1;
(statearr_43204_45288[(2)] = null);

(statearr_43204_45288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (2))){
var state_43175__$1 = state_43175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43175__$1,(4),from);
} else {
if((state_val_43176 === (11))){
var inst_43162 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
if(cljs.core.truth_(inst_43162)){
var statearr_43209_45292 = state_43175__$1;
(statearr_43209_45292[(1)] = (12));

} else {
var statearr_43210_45293 = state_43175__$1;
(statearr_43210_45293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (9))){
var state_43175__$1 = state_43175;
var statearr_43213_45294 = state_43175__$1;
(statearr_43213_45294[(2)] = null);

(statearr_43213_45294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (5))){
var state_43175__$1 = state_43175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43220_45295 = state_43175__$1;
(statearr_43220_45295[(1)] = (8));

} else {
var statearr_43221_45296 = state_43175__$1;
(statearr_43221_45296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (14))){
var inst_43167 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43222_45297 = state_43175__$1;
(statearr_43222_45297[(2)] = inst_43167);

(statearr_43222_45297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (10))){
var inst_43159 = (state_43175[(2)]);
var state_43175__$1 = state_43175;
var statearr_43223_45298 = state_43175__$1;
(statearr_43223_45298[(2)] = inst_43159);

(statearr_43223_45298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43176 === (8))){
var inst_43156 = cljs.core.async.close_BANG_(to);
var state_43175__$1 = state_43175;
var statearr_43224_45299 = state_43175__$1;
(statearr_43224_45299[(2)] = inst_43156);

(statearr_43224_45299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_43236 = [null,null,null,null,null,null,null,null];
(statearr_43236[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_43236[(1)] = (1));

return statearr_43236;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_43175){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43175);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43237){var ex__42748__auto__ = e43237;
var statearr_43238_45300 = state_43175;
(statearr_43238_45300[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43175[(4)]))){
var statearr_43243_45301 = state_43175;
(statearr_43243_45301[(1)] = cljs.core.first((state_43175[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45303 = state_43175;
state_43175 = G__45303;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_43175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_43175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43244 = f__42902__auto__();
(statearr_43244[(6)] = c__42901__auto___45281);

return statearr_43244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43247){
var vec__43248 = p__43247;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43248,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43248,(1),null);
var job = vec__43248;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42901__auto___45305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43257){
var state_val_43258 = (state_43257[(1)]);
if((state_val_43258 === (1))){
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43257__$1,(2),res,v);
} else {
if((state_val_43258 === (2))){
var inst_43254 = (state_43257[(2)]);
var inst_43255 = cljs.core.async.close_BANG_(res);
var state_43257__$1 = (function (){var statearr_43261 = state_43257;
(statearr_43261[(7)] = inst_43254);

return statearr_43261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43257__$1,inst_43255);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_43264 = [null,null,null,null,null,null,null,null];
(statearr_43264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__);

(statearr_43264[(1)] = (1));

return statearr_43264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1 = (function (state_43257){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43257);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43265){var ex__42748__auto__ = e43265;
var statearr_43266_45306 = state_43257;
(statearr_43266_45306[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43257[(4)]))){
var statearr_43267_45307 = state_43257;
(statearr_43267_45307[(1)] = cljs.core.first((state_43257[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45308 = state_43257;
state_43257 = G__45308;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = function(state_43257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1.call(this,state_43257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43268 = f__42902__auto__();
(statearr_43268[(6)] = c__42901__auto___45305);

return statearr_43268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43275){
var vec__43276 = p__43275;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(1),null);
var job = vec__43276;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___45311 = n;
var __45312 = (0);
while(true){
if((__45312 < n__4741__auto___45311)){
var G__43282_45313 = type;
var G__43282_45314__$1 = (((G__43282_45313 instanceof cljs.core.Keyword))?G__43282_45313.fqn:null);
switch (G__43282_45314__$1) {
case "compute":
var c__42901__auto___45316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45312,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = ((function (__45312,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function (state_43301){
var state_val_43302 = (state_43301[(1)]);
if((state_val_43302 === (1))){
var state_43301__$1 = state_43301;
var statearr_43307_45318 = state_43301__$1;
(statearr_43307_45318[(2)] = null);

(statearr_43307_45318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43302 === (2))){
var state_43301__$1 = state_43301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43301__$1,(4),jobs);
} else {
if((state_val_43302 === (3))){
var inst_43298 = (state_43301[(2)]);
var state_43301__$1 = state_43301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43301__$1,inst_43298);
} else {
if((state_val_43302 === (4))){
var inst_43290 = (state_43301[(2)]);
var inst_43291 = process(inst_43290);
var state_43301__$1 = state_43301;
if(cljs.core.truth_(inst_43291)){
var statearr_43311_45320 = state_43301__$1;
(statearr_43311_45320[(1)] = (5));

} else {
var statearr_43312_45321 = state_43301__$1;
(statearr_43312_45321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43302 === (5))){
var state_43301__$1 = state_43301;
var statearr_43317_45322 = state_43301__$1;
(statearr_43317_45322[(2)] = null);

(statearr_43317_45322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43302 === (6))){
var state_43301__$1 = state_43301;
var statearr_43318_45323 = state_43301__$1;
(statearr_43318_45323[(2)] = null);

(statearr_43318_45323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43302 === (7))){
var inst_43296 = (state_43301[(2)]);
var state_43301__$1 = state_43301;
var statearr_43319_45324 = state_43301__$1;
(statearr_43319_45324[(2)] = inst_43296);

(statearr_43319_45324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45312,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
;
return ((function (__45312,switch__42744__auto__,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_43323 = [null,null,null,null,null,null,null];
(statearr_43323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__);

(statearr_43323[(1)] = (1));

return statearr_43323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1 = (function (state_43301){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43301);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43325){var ex__42748__auto__ = e43325;
var statearr_43326_45331 = state_43301;
(statearr_43326_45331[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43301[(4)]))){
var statearr_43328_45332 = state_43301;
(statearr_43328_45332[(1)] = cljs.core.first((state_43301[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45333 = state_43301;
state_43301 = G__45333;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = function(state_43301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1.call(this,state_43301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__;
})()
;})(__45312,switch__42744__auto__,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
})();
var state__42903__auto__ = (function (){var statearr_43333 = f__42902__auto__();
(statearr_43333[(6)] = c__42901__auto___45316);

return statearr_43333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
});})(__45312,c__42901__auto___45316,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
);


break;
case "async":
var c__42901__auto___45334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45312,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = ((function (__45312,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function (state_43366){
var state_val_43367 = (state_43366[(1)]);
if((state_val_43367 === (1))){
var state_43366__$1 = state_43366;
var statearr_43370_45339 = state_43366__$1;
(statearr_43370_45339[(2)] = null);

(statearr_43370_45339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (2))){
var state_43366__$1 = state_43366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43366__$1,(4),jobs);
} else {
if((state_val_43367 === (3))){
var inst_43364 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43366__$1,inst_43364);
} else {
if((state_val_43367 === (4))){
var inst_43348 = (state_43366[(2)]);
var inst_43349 = async(inst_43348);
var state_43366__$1 = state_43366;
if(cljs.core.truth_(inst_43349)){
var statearr_43373_45340 = state_43366__$1;
(statearr_43373_45340[(1)] = (5));

} else {
var statearr_43374_45341 = state_43366__$1;
(statearr_43374_45341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (5))){
var state_43366__$1 = state_43366;
var statearr_43375_45343 = state_43366__$1;
(statearr_43375_45343[(2)] = null);

(statearr_43375_45343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (6))){
var state_43366__$1 = state_43366;
var statearr_43376_45344 = state_43366__$1;
(statearr_43376_45344[(2)] = null);

(statearr_43376_45344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (7))){
var inst_43362 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
var statearr_43378_45345 = state_43366__$1;
(statearr_43378_45345[(2)] = inst_43362);

(statearr_43378_45345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45312,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
;
return ((function (__45312,switch__42744__auto__,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_43383 = [null,null,null,null,null,null,null];
(statearr_43383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__);

(statearr_43383[(1)] = (1));

return statearr_43383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1 = (function (state_43366){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43366);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43388){var ex__42748__auto__ = e43388;
var statearr_43389_45346 = state_43366;
(statearr_43389_45346[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43366[(4)]))){
var statearr_43390_45348 = state_43366;
(statearr_43390_45348[(1)] = cljs.core.first((state_43366[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45350 = state_43366;
state_43366 = G__45350;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = function(state_43366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1.call(this,state_43366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__;
})()
;})(__45312,switch__42744__auto__,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
})();
var state__42903__auto__ = (function (){var statearr_43391 = f__42902__auto__();
(statearr_43391[(6)] = c__42901__auto___45334);

return statearr_43391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
});})(__45312,c__42901__auto___45334,G__43282_45313,G__43282_45314__$1,n__4741__auto___45311,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43282_45314__$1)].join('')));

}

var G__45351 = (__45312 + (1));
__45312 = G__45351;
continue;
} else {
}
break;
}

var c__42901__auto___45352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43456){
var state_val_43457 = (state_43456[(1)]);
if((state_val_43457 === (7))){
var inst_43452 = (state_43456[(2)]);
var state_43456__$1 = state_43456;
var statearr_43463_45353 = state_43456__$1;
(statearr_43463_45353[(2)] = inst_43452);

(statearr_43463_45353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (1))){
var state_43456__$1 = state_43456;
var statearr_43464_45354 = state_43456__$1;
(statearr_43464_45354[(2)] = null);

(statearr_43464_45354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (4))){
var inst_43417 = (state_43456[(7)]);
var inst_43417__$1 = (state_43456[(2)]);
var inst_43418 = (inst_43417__$1 == null);
var state_43456__$1 = (function (){var statearr_43465 = state_43456;
(statearr_43465[(7)] = inst_43417__$1);

return statearr_43465;
})();
if(cljs.core.truth_(inst_43418)){
var statearr_43466_45357 = state_43456__$1;
(statearr_43466_45357[(1)] = (5));

} else {
var statearr_43467_45358 = state_43456__$1;
(statearr_43467_45358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (6))){
var inst_43422 = (state_43456[(8)]);
var inst_43417 = (state_43456[(7)]);
var inst_43422__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43444 = [inst_43417,inst_43422__$1];
var inst_43445 = (new cljs.core.PersistentVector(null,2,(5),inst_43431,inst_43444,null));
var state_43456__$1 = (function (){var statearr_43468 = state_43456;
(statearr_43468[(8)] = inst_43422__$1);

return statearr_43468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43456__$1,(8),jobs,inst_43445);
} else {
if((state_val_43457 === (3))){
var inst_43454 = (state_43456[(2)]);
var state_43456__$1 = state_43456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43456__$1,inst_43454);
} else {
if((state_val_43457 === (2))){
var state_43456__$1 = state_43456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43456__$1,(4),from);
} else {
if((state_val_43457 === (9))){
var inst_43449 = (state_43456[(2)]);
var state_43456__$1 = (function (){var statearr_43469 = state_43456;
(statearr_43469[(9)] = inst_43449);

return statearr_43469;
})();
var statearr_43470_45362 = state_43456__$1;
(statearr_43470_45362[(2)] = null);

(statearr_43470_45362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (5))){
var inst_43420 = cljs.core.async.close_BANG_(jobs);
var state_43456__$1 = state_43456;
var statearr_43475_45364 = state_43456__$1;
(statearr_43475_45364[(2)] = inst_43420);

(statearr_43475_45364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (8))){
var inst_43422 = (state_43456[(8)]);
var inst_43447 = (state_43456[(2)]);
var state_43456__$1 = (function (){var statearr_43483 = state_43456;
(statearr_43483[(10)] = inst_43447);

return statearr_43483;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43456__$1,(9),results,inst_43422);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_43495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__);

(statearr_43495[(1)] = (1));

return statearr_43495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1 = (function (state_43456){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43456);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43496){var ex__42748__auto__ = e43496;
var statearr_43501_45365 = state_43456;
(statearr_43501_45365[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43456[(4)]))){
var statearr_43503_45367 = state_43456;
(statearr_43503_45367[(1)] = cljs.core.first((state_43456[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45368 = state_43456;
state_43456 = G__45368;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = function(state_43456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1.call(this,state_43456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43518 = f__42902__auto__();
(statearr_43518[(6)] = c__42901__auto___45352);

return statearr_43518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


var c__42901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43580){
var state_val_43581 = (state_43580[(1)]);
if((state_val_43581 === (7))){
var inst_43576 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43596_45370 = state_43580__$1;
(statearr_43596_45370[(2)] = inst_43576);

(statearr_43596_45370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (20))){
var state_43580__$1 = state_43580;
var statearr_43599_45371 = state_43580__$1;
(statearr_43599_45371[(2)] = null);

(statearr_43599_45371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (1))){
var state_43580__$1 = state_43580;
var statearr_43600_45372 = state_43580__$1;
(statearr_43600_45372[(2)] = null);

(statearr_43600_45372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (4))){
var inst_43534 = (state_43580[(7)]);
var inst_43534__$1 = (state_43580[(2)]);
var inst_43535 = (inst_43534__$1 == null);
var state_43580__$1 = (function (){var statearr_43601 = state_43580;
(statearr_43601[(7)] = inst_43534__$1);

return statearr_43601;
})();
if(cljs.core.truth_(inst_43535)){
var statearr_43602_45373 = state_43580__$1;
(statearr_43602_45373[(1)] = (5));

} else {
var statearr_43603_45374 = state_43580__$1;
(statearr_43603_45374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (15))){
var inst_43552 = (state_43580[(8)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43580__$1,(18),to,inst_43552);
} else {
if((state_val_43581 === (21))){
var inst_43567 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43605_45375 = state_43580__$1;
(statearr_43605_45375[(2)] = inst_43567);

(statearr_43605_45375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (13))){
var inst_43573 = (state_43580[(2)]);
var state_43580__$1 = (function (){var statearr_43606 = state_43580;
(statearr_43606[(9)] = inst_43573);

return statearr_43606;
})();
var statearr_43607_45376 = state_43580__$1;
(statearr_43607_45376[(2)] = null);

(statearr_43607_45376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (6))){
var inst_43534 = (state_43580[(7)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43580__$1,(11),inst_43534);
} else {
if((state_val_43581 === (17))){
var inst_43562 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
if(cljs.core.truth_(inst_43562)){
var statearr_43608_45381 = state_43580__$1;
(statearr_43608_45381[(1)] = (19));

} else {
var statearr_43609_45382 = state_43580__$1;
(statearr_43609_45382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (3))){
var inst_43578 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43580__$1,inst_43578);
} else {
if((state_val_43581 === (12))){
var inst_43549 = (state_43580[(10)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43580__$1,(14),inst_43549);
} else {
if((state_val_43581 === (2))){
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43580__$1,(4),results);
} else {
if((state_val_43581 === (19))){
var state_43580__$1 = state_43580;
var statearr_43614_45383 = state_43580__$1;
(statearr_43614_45383[(2)] = null);

(statearr_43614_45383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (11))){
var inst_43549 = (state_43580[(2)]);
var state_43580__$1 = (function (){var statearr_43615 = state_43580;
(statearr_43615[(10)] = inst_43549);

return statearr_43615;
})();
var statearr_43616_45385 = state_43580__$1;
(statearr_43616_45385[(2)] = null);

(statearr_43616_45385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (9))){
var state_43580__$1 = state_43580;
var statearr_43617_45389 = state_43580__$1;
(statearr_43617_45389[(2)] = null);

(statearr_43617_45389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (5))){
var state_43580__$1 = state_43580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43618_45390 = state_43580__$1;
(statearr_43618_45390[(1)] = (8));

} else {
var statearr_43619_45391 = state_43580__$1;
(statearr_43619_45391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (14))){
var inst_43552 = (state_43580[(8)]);
var inst_43554 = (state_43580[(11)]);
var inst_43552__$1 = (state_43580[(2)]);
var inst_43553 = (inst_43552__$1 == null);
var inst_43554__$1 = cljs.core.not(inst_43553);
var state_43580__$1 = (function (){var statearr_43620 = state_43580;
(statearr_43620[(8)] = inst_43552__$1);

(statearr_43620[(11)] = inst_43554__$1);

return statearr_43620;
})();
if(inst_43554__$1){
var statearr_43621_45392 = state_43580__$1;
(statearr_43621_45392[(1)] = (15));

} else {
var statearr_43622_45393 = state_43580__$1;
(statearr_43622_45393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (16))){
var inst_43554 = (state_43580[(11)]);
var state_43580__$1 = state_43580;
var statearr_43623_45394 = state_43580__$1;
(statearr_43623_45394[(2)] = inst_43554);

(statearr_43623_45394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (10))){
var inst_43546 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43629_45395 = state_43580__$1;
(statearr_43629_45395[(2)] = inst_43546);

(statearr_43629_45395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (18))){
var inst_43559 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43631_45396 = state_43580__$1;
(statearr_43631_45396[(2)] = inst_43559);

(statearr_43631_45396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (8))){
var inst_43543 = cljs.core.async.close_BANG_(to);
var state_43580__$1 = state_43580;
var statearr_43632_45397 = state_43580__$1;
(statearr_43632_45397[(2)] = inst_43543);

(statearr_43632_45397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_43633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__);

(statearr_43633[(1)] = (1));

return statearr_43633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1 = (function (state_43580){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43580);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43634){var ex__42748__auto__ = e43634;
var statearr_43635_45398 = state_43580;
(statearr_43635_45398[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43580[(4)]))){
var statearr_43636_45399 = state_43580;
(statearr_43636_45399[(1)] = cljs.core.first((state_43580[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45400 = state_43580;
state_43580 = G__45400;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__ = function(state_43580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1.call(this,state_43580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43641 = f__42902__auto__();
(statearr_43641[(6)] = c__42901__auto__);

return statearr_43641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

return c__42901__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43643 = arguments.length;
switch (G__43643) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43648 = arguments.length;
switch (G__43648) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43654 = arguments.length;
switch (G__43654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42901__auto___45409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43682){
var state_val_43683 = (state_43682[(1)]);
if((state_val_43683 === (7))){
var inst_43678 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
var statearr_43684_45410 = state_43682__$1;
(statearr_43684_45410[(2)] = inst_43678);

(statearr_43684_45410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (1))){
var state_43682__$1 = state_43682;
var statearr_43685_45411 = state_43682__$1;
(statearr_43685_45411[(2)] = null);

(statearr_43685_45411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (4))){
var inst_43659 = (state_43682[(7)]);
var inst_43659__$1 = (state_43682[(2)]);
var inst_43660 = (inst_43659__$1 == null);
var state_43682__$1 = (function (){var statearr_43686 = state_43682;
(statearr_43686[(7)] = inst_43659__$1);

return statearr_43686;
})();
if(cljs.core.truth_(inst_43660)){
var statearr_43687_45412 = state_43682__$1;
(statearr_43687_45412[(1)] = (5));

} else {
var statearr_43688_45413 = state_43682__$1;
(statearr_43688_45413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (13))){
var state_43682__$1 = state_43682;
var statearr_43689_45415 = state_43682__$1;
(statearr_43689_45415[(2)] = null);

(statearr_43689_45415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (6))){
var inst_43659 = (state_43682[(7)]);
var inst_43665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43659) : p.call(null,inst_43659));
var state_43682__$1 = state_43682;
if(cljs.core.truth_(inst_43665)){
var statearr_43690_45417 = state_43682__$1;
(statearr_43690_45417[(1)] = (9));

} else {
var statearr_43691_45418 = state_43682__$1;
(statearr_43691_45418[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (3))){
var inst_43680 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43682__$1,inst_43680);
} else {
if((state_val_43683 === (12))){
var state_43682__$1 = state_43682;
var statearr_43692_45419 = state_43682__$1;
(statearr_43692_45419[(2)] = null);

(statearr_43692_45419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (2))){
var state_43682__$1 = state_43682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43682__$1,(4),ch);
} else {
if((state_val_43683 === (11))){
var inst_43659 = (state_43682[(7)]);
var inst_43669 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43682__$1,(8),inst_43669,inst_43659);
} else {
if((state_val_43683 === (9))){
var state_43682__$1 = state_43682;
var statearr_43694_45421 = state_43682__$1;
(statearr_43694_45421[(2)] = tc);

(statearr_43694_45421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (5))){
var inst_43662 = cljs.core.async.close_BANG_(tc);
var inst_43663 = cljs.core.async.close_BANG_(fc);
var state_43682__$1 = (function (){var statearr_43696 = state_43682;
(statearr_43696[(8)] = inst_43662);

return statearr_43696;
})();
var statearr_43697_45425 = state_43682__$1;
(statearr_43697_45425[(2)] = inst_43663);

(statearr_43697_45425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (14))){
var inst_43676 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
var statearr_43698_45426 = state_43682__$1;
(statearr_43698_45426[(2)] = inst_43676);

(statearr_43698_45426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (10))){
var state_43682__$1 = state_43682;
var statearr_43699_45427 = state_43682__$1;
(statearr_43699_45427[(2)] = fc);

(statearr_43699_45427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (8))){
var inst_43671 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
if(cljs.core.truth_(inst_43671)){
var statearr_43702_45428 = state_43682__$1;
(statearr_43702_45428[(1)] = (12));

} else {
var statearr_43703_45429 = state_43682__$1;
(statearr_43703_45429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_43706 = [null,null,null,null,null,null,null,null,null];
(statearr_43706[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_43706[(1)] = (1));

return statearr_43706;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_43682){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43682);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43709){var ex__42748__auto__ = e43709;
var statearr_43710_45430 = state_43682;
(statearr_43710_45430[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43682[(4)]))){
var statearr_43711_45431 = state_43682;
(statearr_43711_45431[(1)] = cljs.core.first((state_43682[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45433 = state_43682;
state_43682 = G__45433;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_43682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_43682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43713 = f__42902__auto__();
(statearr_43713[(6)] = c__42901__auto___45409);

return statearr_43713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43742){
var state_val_43743 = (state_43742[(1)]);
if((state_val_43743 === (7))){
var inst_43738 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
var statearr_43744_45437 = state_43742__$1;
(statearr_43744_45437[(2)] = inst_43738);

(statearr_43744_45437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (1))){
var inst_43717 = init;
var inst_43718 = inst_43717;
var state_43742__$1 = (function (){var statearr_43747 = state_43742;
(statearr_43747[(7)] = inst_43718);

return statearr_43747;
})();
var statearr_43748_45438 = state_43742__$1;
(statearr_43748_45438[(2)] = null);

(statearr_43748_45438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (4))){
var inst_43723 = (state_43742[(8)]);
var inst_43723__$1 = (state_43742[(2)]);
var inst_43724 = (inst_43723__$1 == null);
var state_43742__$1 = (function (){var statearr_43751 = state_43742;
(statearr_43751[(8)] = inst_43723__$1);

return statearr_43751;
})();
if(cljs.core.truth_(inst_43724)){
var statearr_43752_45439 = state_43742__$1;
(statearr_43752_45439[(1)] = (5));

} else {
var statearr_43753_45443 = state_43742__$1;
(statearr_43753_45443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (6))){
var inst_43718 = (state_43742[(7)]);
var inst_43727 = (state_43742[(9)]);
var inst_43723 = (state_43742[(8)]);
var inst_43727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43718,inst_43723) : f.call(null,inst_43718,inst_43723));
var inst_43728 = cljs.core.reduced_QMARK_(inst_43727__$1);
var state_43742__$1 = (function (){var statearr_43756 = state_43742;
(statearr_43756[(9)] = inst_43727__$1);

return statearr_43756;
})();
if(inst_43728){
var statearr_43757_45444 = state_43742__$1;
(statearr_43757_45444[(1)] = (8));

} else {
var statearr_43758_45445 = state_43742__$1;
(statearr_43758_45445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (3))){
var inst_43740 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43742__$1,inst_43740);
} else {
if((state_val_43743 === (2))){
var state_43742__$1 = state_43742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43742__$1,(4),ch);
} else {
if((state_val_43743 === (9))){
var inst_43727 = (state_43742[(9)]);
var inst_43718 = inst_43727;
var state_43742__$1 = (function (){var statearr_43759 = state_43742;
(statearr_43759[(7)] = inst_43718);

return statearr_43759;
})();
var statearr_43760_45451 = state_43742__$1;
(statearr_43760_45451[(2)] = null);

(statearr_43760_45451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (5))){
var inst_43718 = (state_43742[(7)]);
var state_43742__$1 = state_43742;
var statearr_43761_45452 = state_43742__$1;
(statearr_43761_45452[(2)] = inst_43718);

(statearr_43761_45452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (10))){
var inst_43736 = (state_43742[(2)]);
var state_43742__$1 = state_43742;
var statearr_43762_45453 = state_43742__$1;
(statearr_43762_45453[(2)] = inst_43736);

(statearr_43762_45453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43743 === (8))){
var inst_43727 = (state_43742[(9)]);
var inst_43732 = cljs.core.deref(inst_43727);
var state_43742__$1 = state_43742;
var statearr_43765_45454 = state_43742__$1;
(statearr_43765_45454[(2)] = inst_43732);

(statearr_43765_45454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42745__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42745__auto____0 = (function (){
var statearr_43769 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43769[(0)] = cljs$core$async$reduce_$_state_machine__42745__auto__);

(statearr_43769[(1)] = (1));

return statearr_43769;
});
var cljs$core$async$reduce_$_state_machine__42745__auto____1 = (function (state_43742){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43742);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43771){var ex__42748__auto__ = e43771;
var statearr_43776_45458 = state_43742;
(statearr_43776_45458[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43742[(4)]))){
var statearr_43777_45459 = state_43742;
(statearr_43777_45459[(1)] = cljs.core.first((state_43742[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45460 = state_43742;
state_43742 = G__45460;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42745__auto__ = function(state_43742){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42745__auto____1.call(this,state_43742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42745__auto____0;
cljs$core$async$reduce_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42745__auto____1;
return cljs$core$async$reduce_$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43778 = f__42902__auto__();
(statearr_43778[(6)] = c__42901__auto__);

return statearr_43778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

return c__42901__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43784){
var state_val_43785 = (state_43784[(1)]);
if((state_val_43785 === (1))){
var inst_43779 = cljs.core.async.reduce(f__$1,init,ch);
var state_43784__$1 = state_43784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43784__$1,(2),inst_43779);
} else {
if((state_val_43785 === (2))){
var inst_43781 = (state_43784[(2)]);
var inst_43782 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43781) : f__$1.call(null,inst_43781));
var state_43784__$1 = state_43784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43784__$1,inst_43782);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42745__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42745__auto____0 = (function (){
var statearr_43788 = [null,null,null,null,null,null,null];
(statearr_43788[(0)] = cljs$core$async$transduce_$_state_machine__42745__auto__);

(statearr_43788[(1)] = (1));

return statearr_43788;
});
var cljs$core$async$transduce_$_state_machine__42745__auto____1 = (function (state_43784){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43784);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43790){var ex__42748__auto__ = e43790;
var statearr_43791_45468 = state_43784;
(statearr_43791_45468[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43784[(4)]))){
var statearr_43792_45469 = state_43784;
(statearr_43792_45469[(1)] = cljs.core.first((state_43784[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45470 = state_43784;
state_43784 = G__45470;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42745__auto__ = function(state_43784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42745__auto____1.call(this,state_43784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42745__auto____0;
cljs$core$async$transduce_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42745__auto____1;
return cljs$core$async$transduce_$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43793 = f__42902__auto__();
(statearr_43793[(6)] = c__42901__auto__);

return statearr_43793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

return c__42901__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43795 = arguments.length;
switch (G__43795) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_43821){
var state_val_43822 = (state_43821[(1)]);
if((state_val_43822 === (7))){
var inst_43802 = (state_43821[(2)]);
var state_43821__$1 = state_43821;
var statearr_43829_45475 = state_43821__$1;
(statearr_43829_45475[(2)] = inst_43802);

(statearr_43829_45475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (1))){
var inst_43796 = cljs.core.seq(coll);
var inst_43797 = inst_43796;
var state_43821__$1 = (function (){var statearr_43830 = state_43821;
(statearr_43830[(7)] = inst_43797);

return statearr_43830;
})();
var statearr_43831_45479 = state_43821__$1;
(statearr_43831_45479[(2)] = null);

(statearr_43831_45479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (4))){
var inst_43797 = (state_43821[(7)]);
var inst_43800 = cljs.core.first(inst_43797);
var state_43821__$1 = state_43821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43821__$1,(7),ch,inst_43800);
} else {
if((state_val_43822 === (13))){
var inst_43814 = (state_43821[(2)]);
var state_43821__$1 = state_43821;
var statearr_43833_45480 = state_43821__$1;
(statearr_43833_45480[(2)] = inst_43814);

(statearr_43833_45480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (6))){
var inst_43805 = (state_43821[(2)]);
var state_43821__$1 = state_43821;
if(cljs.core.truth_(inst_43805)){
var statearr_43834_45481 = state_43821__$1;
(statearr_43834_45481[(1)] = (8));

} else {
var statearr_43835_45482 = state_43821__$1;
(statearr_43835_45482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (3))){
var inst_43818 = (state_43821[(2)]);
var state_43821__$1 = state_43821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43821__$1,inst_43818);
} else {
if((state_val_43822 === (12))){
var state_43821__$1 = state_43821;
var statearr_43836_45484 = state_43821__$1;
(statearr_43836_45484[(2)] = null);

(statearr_43836_45484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (2))){
var inst_43797 = (state_43821[(7)]);
var state_43821__$1 = state_43821;
if(cljs.core.truth_(inst_43797)){
var statearr_43837_45488 = state_43821__$1;
(statearr_43837_45488[(1)] = (4));

} else {
var statearr_43838_45492 = state_43821__$1;
(statearr_43838_45492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (11))){
var inst_43811 = cljs.core.async.close_BANG_(ch);
var state_43821__$1 = state_43821;
var statearr_43840_45493 = state_43821__$1;
(statearr_43840_45493[(2)] = inst_43811);

(statearr_43840_45493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (9))){
var state_43821__$1 = state_43821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43842_45494 = state_43821__$1;
(statearr_43842_45494[(1)] = (11));

} else {
var statearr_43843_45495 = state_43821__$1;
(statearr_43843_45495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (5))){
var inst_43797 = (state_43821[(7)]);
var state_43821__$1 = state_43821;
var statearr_43846_45496 = state_43821__$1;
(statearr_43846_45496[(2)] = inst_43797);

(statearr_43846_45496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (10))){
var inst_43816 = (state_43821[(2)]);
var state_43821__$1 = state_43821;
var statearr_43847_45497 = state_43821__$1;
(statearr_43847_45497[(2)] = inst_43816);

(statearr_43847_45497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43822 === (8))){
var inst_43797 = (state_43821[(7)]);
var inst_43807 = cljs.core.next(inst_43797);
var inst_43797__$1 = inst_43807;
var state_43821__$1 = (function (){var statearr_43850 = state_43821;
(statearr_43850[(7)] = inst_43797__$1);

return statearr_43850;
})();
var statearr_43851_45498 = state_43821__$1;
(statearr_43851_45498[(2)] = null);

(statearr_43851_45498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_43854 = [null,null,null,null,null,null,null,null];
(statearr_43854[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_43854[(1)] = (1));

return statearr_43854;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_43821){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_43821);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e43855){var ex__42748__auto__ = e43855;
var statearr_43856_45499 = state_43821;
(statearr_43856_45499[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_43821[(4)]))){
var statearr_43857_45500 = state_43821;
(statearr_43857_45500[(1)] = cljs.core.first((state_43821[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45501 = state_43821;
state_43821 = G__45501;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_43821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_43821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_43860 = f__42902__auto__();
(statearr_43860[(6)] = c__42901__auto__);

return statearr_43860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

return c__42901__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43866 = arguments.length;
switch (G__43866) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45505 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45505(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45506 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45506(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45507 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45507(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45511 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45511(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43888 = (function (ch,cs,meta43889){
this.ch = ch;
this.cs = cs;
this.meta43889 = meta43889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43890,meta43889__$1){
var self__ = this;
var _43890__$1 = this;
return (new cljs.core.async.t_cljs$core$async43888(self__.ch,self__.cs,meta43889__$1));
}));

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43890){
var self__ = this;
var _43890__$1 = this;
return self__.meta43889;
}));

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43888.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43889","meta43889",-291546466,null)], null);
}));

(cljs.core.async.t_cljs$core$async43888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43888");

(cljs.core.async.t_cljs$core$async43888.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43888.
 */
cljs.core.async.__GT_t_cljs$core$async43888 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43888(ch__$1,cs__$1,meta43889){
return (new cljs.core.async.t_cljs$core$async43888(ch__$1,cs__$1,meta43889));
});

}

return (new cljs.core.async.t_cljs$core$async43888(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42901__auto___45516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44080){
var state_val_44081 = (state_44080[(1)]);
if((state_val_44081 === (7))){
var inst_44076 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44086_45517 = state_44080__$1;
(statearr_44086_45517[(2)] = inst_44076);

(statearr_44086_45517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (20))){
var inst_43944 = (state_44080[(7)]);
var inst_43965 = cljs.core.first(inst_43944);
var inst_43966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43965,(0),null);
var inst_43967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43965,(1),null);
var state_44080__$1 = (function (){var statearr_44089 = state_44080;
(statearr_44089[(8)] = inst_43966);

return statearr_44089;
})();
if(cljs.core.truth_(inst_43967)){
var statearr_44090_45518 = state_44080__$1;
(statearr_44090_45518[(1)] = (22));

} else {
var statearr_44091_45519 = state_44080__$1;
(statearr_44091_45519[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (27))){
var inst_43999 = (state_44080[(9)]);
var inst_43898 = (state_44080[(10)]);
var inst_44013 = (state_44080[(11)]);
var inst_44001 = (state_44080[(12)]);
var inst_44013__$1 = cljs.core._nth(inst_43999,inst_44001);
var inst_44014 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44013__$1,inst_43898,done);
var state_44080__$1 = (function (){var statearr_44092 = state_44080;
(statearr_44092[(11)] = inst_44013__$1);

return statearr_44092;
})();
if(cljs.core.truth_(inst_44014)){
var statearr_44093_45520 = state_44080__$1;
(statearr_44093_45520[(1)] = (30));

} else {
var statearr_44094_45521 = state_44080__$1;
(statearr_44094_45521[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (1))){
var state_44080__$1 = state_44080;
var statearr_44095_45522 = state_44080__$1;
(statearr_44095_45522[(2)] = null);

(statearr_44095_45522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (24))){
var inst_43944 = (state_44080[(7)]);
var inst_43972 = (state_44080[(2)]);
var inst_43973 = cljs.core.next(inst_43944);
var inst_43911 = inst_43973;
var inst_43912 = null;
var inst_43913 = (0);
var inst_43914 = (0);
var state_44080__$1 = (function (){var statearr_44096 = state_44080;
(statearr_44096[(13)] = inst_43914);

(statearr_44096[(14)] = inst_43912);

(statearr_44096[(15)] = inst_43913);

(statearr_44096[(16)] = inst_43972);

(statearr_44096[(17)] = inst_43911);

return statearr_44096;
})();
var statearr_44097_45524 = state_44080__$1;
(statearr_44097_45524[(2)] = null);

(statearr_44097_45524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (39))){
var state_44080__$1 = state_44080;
var statearr_44101_45526 = state_44080__$1;
(statearr_44101_45526[(2)] = null);

(statearr_44101_45526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (4))){
var inst_43898 = (state_44080[(10)]);
var inst_43898__$1 = (state_44080[(2)]);
var inst_43899 = (inst_43898__$1 == null);
var state_44080__$1 = (function (){var statearr_44102 = state_44080;
(statearr_44102[(10)] = inst_43898__$1);

return statearr_44102;
})();
if(cljs.core.truth_(inst_43899)){
var statearr_44103_45527 = state_44080__$1;
(statearr_44103_45527[(1)] = (5));

} else {
var statearr_44111_45528 = state_44080__$1;
(statearr_44111_45528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (15))){
var inst_43914 = (state_44080[(13)]);
var inst_43912 = (state_44080[(14)]);
var inst_43913 = (state_44080[(15)]);
var inst_43911 = (state_44080[(17)]);
var inst_43936 = (state_44080[(2)]);
var inst_43938 = (inst_43914 + (1));
var tmp44098 = inst_43912;
var tmp44099 = inst_43913;
var tmp44100 = inst_43911;
var inst_43911__$1 = tmp44100;
var inst_43912__$1 = tmp44098;
var inst_43913__$1 = tmp44099;
var inst_43914__$1 = inst_43938;
var state_44080__$1 = (function (){var statearr_44120 = state_44080;
(statearr_44120[(13)] = inst_43914__$1);

(statearr_44120[(14)] = inst_43912__$1);

(statearr_44120[(15)] = inst_43913__$1);

(statearr_44120[(17)] = inst_43911__$1);

(statearr_44120[(18)] = inst_43936);

return statearr_44120;
})();
var statearr_44121_45529 = state_44080__$1;
(statearr_44121_45529[(2)] = null);

(statearr_44121_45529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (21))){
var inst_43976 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44125_45530 = state_44080__$1;
(statearr_44125_45530[(2)] = inst_43976);

(statearr_44125_45530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (31))){
var inst_44013 = (state_44080[(11)]);
var inst_44017 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44013);
var state_44080__$1 = state_44080;
var statearr_44126_45531 = state_44080__$1;
(statearr_44126_45531[(2)] = inst_44017);

(statearr_44126_45531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (32))){
var inst_43999 = (state_44080[(9)]);
var inst_43998 = (state_44080[(19)]);
var inst_44000 = (state_44080[(20)]);
var inst_44001 = (state_44080[(12)]);
var inst_44019 = (state_44080[(2)]);
var inst_44020 = (inst_44001 + (1));
var tmp44122 = inst_43999;
var tmp44123 = inst_43998;
var tmp44124 = inst_44000;
var inst_43998__$1 = tmp44123;
var inst_43999__$1 = tmp44122;
var inst_44000__$1 = tmp44124;
var inst_44001__$1 = inst_44020;
var state_44080__$1 = (function (){var statearr_44127 = state_44080;
(statearr_44127[(21)] = inst_44019);

(statearr_44127[(9)] = inst_43999__$1);

(statearr_44127[(19)] = inst_43998__$1);

(statearr_44127[(20)] = inst_44000__$1);

(statearr_44127[(12)] = inst_44001__$1);

return statearr_44127;
})();
var statearr_44128_45532 = state_44080__$1;
(statearr_44128_45532[(2)] = null);

(statearr_44128_45532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (40))){
var inst_44042 = (state_44080[(22)]);
var inst_44050 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44042);
var state_44080__$1 = state_44080;
var statearr_44129_45533 = state_44080__$1;
(statearr_44129_45533[(2)] = inst_44050);

(statearr_44129_45533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (33))){
var inst_44029 = (state_44080[(23)]);
var inst_44034 = cljs.core.chunked_seq_QMARK_(inst_44029);
var state_44080__$1 = state_44080;
if(inst_44034){
var statearr_44130_45534 = state_44080__$1;
(statearr_44130_45534[(1)] = (36));

} else {
var statearr_44131_45535 = state_44080__$1;
(statearr_44131_45535[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (13))){
var inst_43928 = (state_44080[(24)]);
var inst_43933 = cljs.core.async.close_BANG_(inst_43928);
var state_44080__$1 = state_44080;
var statearr_44132_45536 = state_44080__$1;
(statearr_44132_45536[(2)] = inst_43933);

(statearr_44132_45536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (22))){
var inst_43966 = (state_44080[(8)]);
var inst_43969 = cljs.core.async.close_BANG_(inst_43966);
var state_44080__$1 = state_44080;
var statearr_44133_45537 = state_44080__$1;
(statearr_44133_45537[(2)] = inst_43969);

(statearr_44133_45537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (36))){
var inst_44029 = (state_44080[(23)]);
var inst_44036 = cljs.core.chunk_first(inst_44029);
var inst_44037 = cljs.core.chunk_rest(inst_44029);
var inst_44038 = cljs.core.count(inst_44036);
var inst_43998 = inst_44037;
var inst_43999 = inst_44036;
var inst_44000 = inst_44038;
var inst_44001 = (0);
var state_44080__$1 = (function (){var statearr_44134 = state_44080;
(statearr_44134[(9)] = inst_43999);

(statearr_44134[(19)] = inst_43998);

(statearr_44134[(20)] = inst_44000);

(statearr_44134[(12)] = inst_44001);

return statearr_44134;
})();
var statearr_44135_45538 = state_44080__$1;
(statearr_44135_45538[(2)] = null);

(statearr_44135_45538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (41))){
var inst_44029 = (state_44080[(23)]);
var inst_44052 = (state_44080[(2)]);
var inst_44053 = cljs.core.next(inst_44029);
var inst_43998 = inst_44053;
var inst_43999 = null;
var inst_44000 = (0);
var inst_44001 = (0);
var state_44080__$1 = (function (){var statearr_44136 = state_44080;
(statearr_44136[(25)] = inst_44052);

(statearr_44136[(9)] = inst_43999);

(statearr_44136[(19)] = inst_43998);

(statearr_44136[(20)] = inst_44000);

(statearr_44136[(12)] = inst_44001);

return statearr_44136;
})();
var statearr_44137_45541 = state_44080__$1;
(statearr_44137_45541[(2)] = null);

(statearr_44137_45541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (43))){
var state_44080__$1 = state_44080;
var statearr_44138_45545 = state_44080__$1;
(statearr_44138_45545[(2)] = null);

(statearr_44138_45545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (29))){
var inst_44061 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44139_45546 = state_44080__$1;
(statearr_44139_45546[(2)] = inst_44061);

(statearr_44139_45546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (44))){
var inst_44070 = (state_44080[(2)]);
var state_44080__$1 = (function (){var statearr_44140 = state_44080;
(statearr_44140[(26)] = inst_44070);

return statearr_44140;
})();
var statearr_44141_45547 = state_44080__$1;
(statearr_44141_45547[(2)] = null);

(statearr_44141_45547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (6))){
var inst_43986 = (state_44080[(27)]);
var inst_43985 = cljs.core.deref(cs);
var inst_43986__$1 = cljs.core.keys(inst_43985);
var inst_43988 = cljs.core.count(inst_43986__$1);
var inst_43989 = cljs.core.reset_BANG_(dctr,inst_43988);
var inst_43995 = cljs.core.seq(inst_43986__$1);
var inst_43998 = inst_43995;
var inst_43999 = null;
var inst_44000 = (0);
var inst_44001 = (0);
var state_44080__$1 = (function (){var statearr_44142 = state_44080;
(statearr_44142[(9)] = inst_43999);

(statearr_44142[(19)] = inst_43998);

(statearr_44142[(20)] = inst_44000);

(statearr_44142[(27)] = inst_43986__$1);

(statearr_44142[(28)] = inst_43989);

(statearr_44142[(12)] = inst_44001);

return statearr_44142;
})();
var statearr_44143_45549 = state_44080__$1;
(statearr_44143_45549[(2)] = null);

(statearr_44143_45549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (28))){
var inst_44029 = (state_44080[(23)]);
var inst_43998 = (state_44080[(19)]);
var inst_44029__$1 = cljs.core.seq(inst_43998);
var state_44080__$1 = (function (){var statearr_44144 = state_44080;
(statearr_44144[(23)] = inst_44029__$1);

return statearr_44144;
})();
if(inst_44029__$1){
var statearr_44145_45551 = state_44080__$1;
(statearr_44145_45551[(1)] = (33));

} else {
var statearr_44146_45553 = state_44080__$1;
(statearr_44146_45553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (25))){
var inst_44000 = (state_44080[(20)]);
var inst_44001 = (state_44080[(12)]);
var inst_44005 = (inst_44001 < inst_44000);
var inst_44006 = inst_44005;
var state_44080__$1 = state_44080;
if(cljs.core.truth_(inst_44006)){
var statearr_44147_45556 = state_44080__$1;
(statearr_44147_45556[(1)] = (27));

} else {
var statearr_44148_45557 = state_44080__$1;
(statearr_44148_45557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (34))){
var state_44080__$1 = state_44080;
var statearr_44149_45558 = state_44080__$1;
(statearr_44149_45558[(2)] = null);

(statearr_44149_45558[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (17))){
var state_44080__$1 = state_44080;
var statearr_44150_45559 = state_44080__$1;
(statearr_44150_45559[(2)] = null);

(statearr_44150_45559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (3))){
var inst_44078 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44080__$1,inst_44078);
} else {
if((state_val_44081 === (12))){
var inst_43981 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44151_45560 = state_44080__$1;
(statearr_44151_45560[(2)] = inst_43981);

(statearr_44151_45560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (2))){
var state_44080__$1 = state_44080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44080__$1,(4),ch);
} else {
if((state_val_44081 === (23))){
var state_44080__$1 = state_44080;
var statearr_44154_45561 = state_44080__$1;
(statearr_44154_45561[(2)] = null);

(statearr_44154_45561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (35))){
var inst_44059 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44155_45562 = state_44080__$1;
(statearr_44155_45562[(2)] = inst_44059);

(statearr_44155_45562[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (19))){
var inst_43944 = (state_44080[(7)]);
var inst_43952 = cljs.core.chunk_first(inst_43944);
var inst_43953 = cljs.core.chunk_rest(inst_43944);
var inst_43954 = cljs.core.count(inst_43952);
var inst_43911 = inst_43953;
var inst_43912 = inst_43952;
var inst_43913 = inst_43954;
var inst_43914 = (0);
var state_44080__$1 = (function (){var statearr_44156 = state_44080;
(statearr_44156[(13)] = inst_43914);

(statearr_44156[(14)] = inst_43912);

(statearr_44156[(15)] = inst_43913);

(statearr_44156[(17)] = inst_43911);

return statearr_44156;
})();
var statearr_44157_45563 = state_44080__$1;
(statearr_44157_45563[(2)] = null);

(statearr_44157_45563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (11))){
var inst_43911 = (state_44080[(17)]);
var inst_43944 = (state_44080[(7)]);
var inst_43944__$1 = cljs.core.seq(inst_43911);
var state_44080__$1 = (function (){var statearr_44158 = state_44080;
(statearr_44158[(7)] = inst_43944__$1);

return statearr_44158;
})();
if(inst_43944__$1){
var statearr_44160_45566 = state_44080__$1;
(statearr_44160_45566[(1)] = (16));

} else {
var statearr_44162_45567 = state_44080__$1;
(statearr_44162_45567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (9))){
var inst_43983 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44163_45568 = state_44080__$1;
(statearr_44163_45568[(2)] = inst_43983);

(statearr_44163_45568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (5))){
var inst_43907 = cljs.core.deref(cs);
var inst_43908 = cljs.core.seq(inst_43907);
var inst_43911 = inst_43908;
var inst_43912 = null;
var inst_43913 = (0);
var inst_43914 = (0);
var state_44080__$1 = (function (){var statearr_44164 = state_44080;
(statearr_44164[(13)] = inst_43914);

(statearr_44164[(14)] = inst_43912);

(statearr_44164[(15)] = inst_43913);

(statearr_44164[(17)] = inst_43911);

return statearr_44164;
})();
var statearr_44165_45569 = state_44080__$1;
(statearr_44165_45569[(2)] = null);

(statearr_44165_45569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (14))){
var state_44080__$1 = state_44080;
var statearr_44167_45571 = state_44080__$1;
(statearr_44167_45571[(2)] = null);

(statearr_44167_45571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (45))){
var inst_44067 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44168_45575 = state_44080__$1;
(statearr_44168_45575[(2)] = inst_44067);

(statearr_44168_45575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (26))){
var inst_43986 = (state_44080[(27)]);
var inst_44063 = (state_44080[(2)]);
var inst_44064 = cljs.core.seq(inst_43986);
var state_44080__$1 = (function (){var statearr_44169 = state_44080;
(statearr_44169[(29)] = inst_44063);

return statearr_44169;
})();
if(inst_44064){
var statearr_44170_45576 = state_44080__$1;
(statearr_44170_45576[(1)] = (42));

} else {
var statearr_44171_45577 = state_44080__$1;
(statearr_44171_45577[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (16))){
var inst_43944 = (state_44080[(7)]);
var inst_43949 = cljs.core.chunked_seq_QMARK_(inst_43944);
var state_44080__$1 = state_44080;
if(inst_43949){
var statearr_44173_45578 = state_44080__$1;
(statearr_44173_45578[(1)] = (19));

} else {
var statearr_44174_45579 = state_44080__$1;
(statearr_44174_45579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (38))){
var inst_44056 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44175_45582 = state_44080__$1;
(statearr_44175_45582[(2)] = inst_44056);

(statearr_44175_45582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (30))){
var state_44080__$1 = state_44080;
var statearr_44176_45583 = state_44080__$1;
(statearr_44176_45583[(2)] = null);

(statearr_44176_45583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (10))){
var inst_43914 = (state_44080[(13)]);
var inst_43912 = (state_44080[(14)]);
var inst_43926 = cljs.core._nth(inst_43912,inst_43914);
var inst_43928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43926,(0),null);
var inst_43930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43926,(1),null);
var state_44080__$1 = (function (){var statearr_44177 = state_44080;
(statearr_44177[(24)] = inst_43928);

return statearr_44177;
})();
if(cljs.core.truth_(inst_43930)){
var statearr_44178_45586 = state_44080__$1;
(statearr_44178_45586[(1)] = (13));

} else {
var statearr_44179_45587 = state_44080__$1;
(statearr_44179_45587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (18))){
var inst_43979 = (state_44080[(2)]);
var state_44080__$1 = state_44080;
var statearr_44180_45588 = state_44080__$1;
(statearr_44180_45588[(2)] = inst_43979);

(statearr_44180_45588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (42))){
var state_44080__$1 = state_44080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44080__$1,(45),dchan);
} else {
if((state_val_44081 === (37))){
var inst_44029 = (state_44080[(23)]);
var inst_43898 = (state_44080[(10)]);
var inst_44042 = (state_44080[(22)]);
var inst_44042__$1 = cljs.core.first(inst_44029);
var inst_44044 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44042__$1,inst_43898,done);
var state_44080__$1 = (function (){var statearr_44182 = state_44080;
(statearr_44182[(22)] = inst_44042__$1);

return statearr_44182;
})();
if(cljs.core.truth_(inst_44044)){
var statearr_44183_45592 = state_44080__$1;
(statearr_44183_45592[(1)] = (39));

} else {
var statearr_44184_45593 = state_44080__$1;
(statearr_44184_45593[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44081 === (8))){
var inst_43914 = (state_44080[(13)]);
var inst_43913 = (state_44080[(15)]);
var inst_43920 = (inst_43914 < inst_43913);
var inst_43921 = inst_43920;
var state_44080__$1 = state_44080;
if(cljs.core.truth_(inst_43921)){
var statearr_44185_45598 = state_44080__$1;
(statearr_44185_45598[(1)] = (10));

} else {
var statearr_44186_45599 = state_44080__$1;
(statearr_44186_45599[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42745__auto__ = null;
var cljs$core$async$mult_$_state_machine__42745__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$mult_$_state_machine__42745__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$mult_$_state_machine__42745__auto____1 = (function (state_44080){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44080);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44188){var ex__42748__auto__ = e44188;
var statearr_44189_45606 = state_44080;
(statearr_44189_45606[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44080[(4)]))){
var statearr_44190_45607 = state_44080;
(statearr_44190_45607[(1)] = cljs.core.first((state_44080[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45608 = state_44080;
state_44080 = G__45608;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42745__auto__ = function(state_44080){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42745__auto____1.call(this,state_44080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42745__auto____0;
cljs$core$async$mult_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42745__auto____1;
return cljs$core$async$mult_$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44191 = f__42902__auto__();
(statearr_44191[(6)] = c__42901__auto___45516);

return statearr_44191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44196 = arguments.length;
switch (G__44196) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45610 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45610(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45611 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45611(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45612 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45612(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45613 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45613(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45614 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45614(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45615 = arguments.length;
var i__4865__auto___45616 = (0);
while(true){
if((i__4865__auto___45616 < len__4864__auto___45615)){
args__4870__auto__.push((arguments[i__4865__auto___45616]));

var G__45617 = (i__4865__auto___45616 + (1));
i__4865__auto___45616 = G__45617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44226){
var map__44227 = p__44226;
var map__44227__$1 = cljs.core.__destructure_map(map__44227);
var opts = map__44227__$1;
var statearr_44228_45624 = state;
(statearr_44228_45624[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44229_45625 = state;
(statearr_44229_45625[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44230_45626 = state;
(statearr_44230_45626[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44221){
var G__44222 = cljs.core.first(seq44221);
var seq44221__$1 = cljs.core.next(seq44221);
var G__44223 = cljs.core.first(seq44221__$1);
var seq44221__$2 = cljs.core.next(seq44221__$1);
var G__44224 = cljs.core.first(seq44221__$2);
var seq44221__$3 = cljs.core.next(seq44221__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44222,G__44223,G__44224,seq44221__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44237 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44238){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44238 = meta44238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44239,meta44238__$1){
var self__ = this;
var _44239__$1 = this;
return (new cljs.core.async.t_cljs$core$async44237(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44238__$1));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44239){
var self__ = this;
var _44239__$1 = this;
return self__.meta44238;
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44238","meta44238",-711829142,null)], null);
}));

(cljs.core.async.t_cljs$core$async44237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44237");

(cljs.core.async.t_cljs$core$async44237.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44237.
 */
cljs.core.async.__GT_t_cljs$core$async44237 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44238){
return (new cljs.core.async.t_cljs$core$async44237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44238));
});

}

return (new cljs.core.async.t_cljs$core$async44237(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42901__auto___45632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44313){
var state_val_44314 = (state_44313[(1)]);
if((state_val_44314 === (7))){
var inst_44271 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
if(cljs.core.truth_(inst_44271)){
var statearr_44315_45639 = state_44313__$1;
(statearr_44315_45639[(1)] = (8));

} else {
var statearr_44316_45640 = state_44313__$1;
(statearr_44316_45640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (20))){
var inst_44264 = (state_44313[(7)]);
var state_44313__$1 = state_44313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44313__$1,(23),out,inst_44264);
} else {
if((state_val_44314 === (1))){
var inst_44247 = calc_state();
var inst_44248 = cljs.core.__destructure_map(inst_44247);
var inst_44249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44252 = inst_44247;
var state_44313__$1 = (function (){var statearr_44317 = state_44313;
(statearr_44317[(8)] = inst_44249);

(statearr_44317[(9)] = inst_44252);

(statearr_44317[(10)] = inst_44250);

(statearr_44317[(11)] = inst_44251);

return statearr_44317;
})();
var statearr_44318_45641 = state_44313__$1;
(statearr_44318_45641[(2)] = null);

(statearr_44318_45641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (24))){
var inst_44255 = (state_44313[(12)]);
var inst_44252 = inst_44255;
var state_44313__$1 = (function (){var statearr_44320 = state_44313;
(statearr_44320[(9)] = inst_44252);

return statearr_44320;
})();
var statearr_44321_45642 = state_44313__$1;
(statearr_44321_45642[(2)] = null);

(statearr_44321_45642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (4))){
var inst_44264 = (state_44313[(7)]);
var inst_44266 = (state_44313[(13)]);
var inst_44263 = (state_44313[(2)]);
var inst_44264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44263,(0),null);
var inst_44265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44263,(1),null);
var inst_44266__$1 = (inst_44264__$1 == null);
var state_44313__$1 = (function (){var statearr_44325 = state_44313;
(statearr_44325[(14)] = inst_44265);

(statearr_44325[(7)] = inst_44264__$1);

(statearr_44325[(13)] = inst_44266__$1);

return statearr_44325;
})();
if(cljs.core.truth_(inst_44266__$1)){
var statearr_44326_45643 = state_44313__$1;
(statearr_44326_45643[(1)] = (5));

} else {
var statearr_44327_45644 = state_44313__$1;
(statearr_44327_45644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (15))){
var inst_44285 = (state_44313[(15)]);
var inst_44256 = (state_44313[(16)]);
var inst_44285__$1 = cljs.core.empty_QMARK_(inst_44256);
var state_44313__$1 = (function (){var statearr_44328 = state_44313;
(statearr_44328[(15)] = inst_44285__$1);

return statearr_44328;
})();
if(inst_44285__$1){
var statearr_44329_45645 = state_44313__$1;
(statearr_44329_45645[(1)] = (17));

} else {
var statearr_44330_45646 = state_44313__$1;
(statearr_44330_45646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (21))){
var inst_44255 = (state_44313[(12)]);
var inst_44252 = inst_44255;
var state_44313__$1 = (function (){var statearr_44331 = state_44313;
(statearr_44331[(9)] = inst_44252);

return statearr_44331;
})();
var statearr_44332_45647 = state_44313__$1;
(statearr_44332_45647[(2)] = null);

(statearr_44332_45647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (13))){
var inst_44278 = (state_44313[(2)]);
var inst_44279 = calc_state();
var inst_44252 = inst_44279;
var state_44313__$1 = (function (){var statearr_44333 = state_44313;
(statearr_44333[(9)] = inst_44252);

(statearr_44333[(17)] = inst_44278);

return statearr_44333;
})();
var statearr_44334_45648 = state_44313__$1;
(statearr_44334_45648[(2)] = null);

(statearr_44334_45648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (22))){
var inst_44305 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
var statearr_44335_45649 = state_44313__$1;
(statearr_44335_45649[(2)] = inst_44305);

(statearr_44335_45649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (6))){
var inst_44265 = (state_44313[(14)]);
var inst_44269 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44265,change);
var state_44313__$1 = state_44313;
var statearr_44337_45650 = state_44313__$1;
(statearr_44337_45650[(2)] = inst_44269);

(statearr_44337_45650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (25))){
var state_44313__$1 = state_44313;
var statearr_44338_45651 = state_44313__$1;
(statearr_44338_45651[(2)] = null);

(statearr_44338_45651[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (17))){
var inst_44257 = (state_44313[(18)]);
var inst_44265 = (state_44313[(14)]);
var inst_44287 = (inst_44257.cljs$core$IFn$_invoke$arity$1 ? inst_44257.cljs$core$IFn$_invoke$arity$1(inst_44265) : inst_44257.call(null,inst_44265));
var inst_44288 = cljs.core.not(inst_44287);
var state_44313__$1 = state_44313;
var statearr_44340_45653 = state_44313__$1;
(statearr_44340_45653[(2)] = inst_44288);

(statearr_44340_45653[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (3))){
var inst_44310 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44313__$1,inst_44310);
} else {
if((state_val_44314 === (12))){
var state_44313__$1 = state_44313;
var statearr_44343_45655 = state_44313__$1;
(statearr_44343_45655[(2)] = null);

(statearr_44343_45655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (2))){
var inst_44255 = (state_44313[(12)]);
var inst_44252 = (state_44313[(9)]);
var inst_44255__$1 = cljs.core.__destructure_map(inst_44252);
var inst_44256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44255__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44255__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44255__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44313__$1 = (function (){var statearr_44345 = state_44313;
(statearr_44345[(18)] = inst_44257);

(statearr_44345[(12)] = inst_44255__$1);

(statearr_44345[(16)] = inst_44256);

return statearr_44345;
})();
return cljs.core.async.ioc_alts_BANG_(state_44313__$1,(4),inst_44258);
} else {
if((state_val_44314 === (23))){
var inst_44296 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
if(cljs.core.truth_(inst_44296)){
var statearr_44347_45662 = state_44313__$1;
(statearr_44347_45662[(1)] = (24));

} else {
var statearr_44348_45663 = state_44313__$1;
(statearr_44348_45663[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (19))){
var inst_44291 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
var statearr_44349_45664 = state_44313__$1;
(statearr_44349_45664[(2)] = inst_44291);

(statearr_44349_45664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (11))){
var inst_44265 = (state_44313[(14)]);
var inst_44275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44265);
var state_44313__$1 = state_44313;
var statearr_44350_45665 = state_44313__$1;
(statearr_44350_45665[(2)] = inst_44275);

(statearr_44350_45665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (9))){
var inst_44265 = (state_44313[(14)]);
var inst_44282 = (state_44313[(19)]);
var inst_44256 = (state_44313[(16)]);
var inst_44282__$1 = (inst_44256.cljs$core$IFn$_invoke$arity$1 ? inst_44256.cljs$core$IFn$_invoke$arity$1(inst_44265) : inst_44256.call(null,inst_44265));
var state_44313__$1 = (function (){var statearr_44353 = state_44313;
(statearr_44353[(19)] = inst_44282__$1);

return statearr_44353;
})();
if(cljs.core.truth_(inst_44282__$1)){
var statearr_44356_45666 = state_44313__$1;
(statearr_44356_45666[(1)] = (14));

} else {
var statearr_44357_45667 = state_44313__$1;
(statearr_44357_45667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (5))){
var inst_44266 = (state_44313[(13)]);
var state_44313__$1 = state_44313;
var statearr_44358_45668 = state_44313__$1;
(statearr_44358_45668[(2)] = inst_44266);

(statearr_44358_45668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (14))){
var inst_44282 = (state_44313[(19)]);
var state_44313__$1 = state_44313;
var statearr_44360_45669 = state_44313__$1;
(statearr_44360_45669[(2)] = inst_44282);

(statearr_44360_45669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (26))){
var inst_44301 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
var statearr_44362_45670 = state_44313__$1;
(statearr_44362_45670[(2)] = inst_44301);

(statearr_44362_45670[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (16))){
var inst_44293 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
if(cljs.core.truth_(inst_44293)){
var statearr_44363_45671 = state_44313__$1;
(statearr_44363_45671[(1)] = (20));

} else {
var statearr_44364_45672 = state_44313__$1;
(statearr_44364_45672[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (10))){
var inst_44307 = (state_44313[(2)]);
var state_44313__$1 = state_44313;
var statearr_44365_45673 = state_44313__$1;
(statearr_44365_45673[(2)] = inst_44307);

(statearr_44365_45673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (18))){
var inst_44285 = (state_44313[(15)]);
var state_44313__$1 = state_44313;
var statearr_44366_45677 = state_44313__$1;
(statearr_44366_45677[(2)] = inst_44285);

(statearr_44366_45677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44314 === (8))){
var inst_44264 = (state_44313[(7)]);
var inst_44273 = (inst_44264 == null);
var state_44313__$1 = state_44313;
if(cljs.core.truth_(inst_44273)){
var statearr_44367_45678 = state_44313__$1;
(statearr_44367_45678[(1)] = (11));

} else {
var statearr_44368_45679 = state_44313__$1;
(statearr_44368_45679[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42745__auto__ = null;
var cljs$core$async$mix_$_state_machine__42745__auto____0 = (function (){
var statearr_44369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44369[(0)] = cljs$core$async$mix_$_state_machine__42745__auto__);

(statearr_44369[(1)] = (1));

return statearr_44369;
});
var cljs$core$async$mix_$_state_machine__42745__auto____1 = (function (state_44313){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44313);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44372){var ex__42748__auto__ = e44372;
var statearr_44373_45680 = state_44313;
(statearr_44373_45680[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44313[(4)]))){
var statearr_44375_45681 = state_44313;
(statearr_44375_45681[(1)] = cljs.core.first((state_44313[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45682 = state_44313;
state_44313 = G__45682;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42745__auto__ = function(state_44313){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42745__auto____1.call(this,state_44313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42745__auto____0;
cljs$core$async$mix_$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42745__auto____1;
return cljs$core$async$mix_$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44378 = f__42902__auto__();
(statearr_44378[(6)] = c__42901__auto___45632);

return statearr_44378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45685 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45685(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45686 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45686(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45687 = (function() {
var G__45688 = null;
var G__45688__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45688__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45688 = function(p,v){
switch(arguments.length){
case 1:
return G__45688__1.call(this,p);
case 2:
return G__45688__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45688.cljs$core$IFn$_invoke$arity$1 = G__45688__1;
G__45688.cljs$core$IFn$_invoke$arity$2 = G__45688__2;
return G__45688;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44392 = arguments.length;
switch (G__44392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45687(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45687(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44397 = arguments.length;
switch (G__44397) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44394_SHARP_){
if(cljs.core.truth_((p1__44394_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44394_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44394_SHARP_.call(null,topic)))){
return p1__44394_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44394_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44406 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44407){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44407 = meta44407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44408,meta44407__$1){
var self__ = this;
var _44408__$1 = this;
return (new cljs.core.async.t_cljs$core$async44406(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44407__$1));
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44408){
var self__ = this;
var _44408__$1 = this;
return self__.meta44407;
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44407","meta44407",1394751909,null)], null);
}));

(cljs.core.async.t_cljs$core$async44406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44406");

(cljs.core.async.t_cljs$core$async44406.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44406.
 */
cljs.core.async.__GT_t_cljs$core$async44406 = (function cljs$core$async$__GT_t_cljs$core$async44406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44407){
return (new cljs.core.async.t_cljs$core$async44406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44407));
});

}

return (new cljs.core.async.t_cljs$core$async44406(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42901__auto___45706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44482){
var state_val_44483 = (state_44482[(1)]);
if((state_val_44483 === (7))){
var inst_44478 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44484_45707 = state_44482__$1;
(statearr_44484_45707[(2)] = inst_44478);

(statearr_44484_45707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (20))){
var state_44482__$1 = state_44482;
var statearr_44485_45708 = state_44482__$1;
(statearr_44485_45708[(2)] = null);

(statearr_44485_45708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (1))){
var state_44482__$1 = state_44482;
var statearr_44486_45709 = state_44482__$1;
(statearr_44486_45709[(2)] = null);

(statearr_44486_45709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (24))){
var inst_44461 = (state_44482[(7)]);
var inst_44470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44461);
var state_44482__$1 = state_44482;
var statearr_44488_45710 = state_44482__$1;
(statearr_44488_45710[(2)] = inst_44470);

(statearr_44488_45710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (4))){
var inst_44413 = (state_44482[(8)]);
var inst_44413__$1 = (state_44482[(2)]);
var inst_44414 = (inst_44413__$1 == null);
var state_44482__$1 = (function (){var statearr_44489 = state_44482;
(statearr_44489[(8)] = inst_44413__$1);

return statearr_44489;
})();
if(cljs.core.truth_(inst_44414)){
var statearr_44490_45711 = state_44482__$1;
(statearr_44490_45711[(1)] = (5));

} else {
var statearr_44491_45712 = state_44482__$1;
(statearr_44491_45712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (15))){
var inst_44455 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44492_45713 = state_44482__$1;
(statearr_44492_45713[(2)] = inst_44455);

(statearr_44492_45713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (21))){
var inst_44475 = (state_44482[(2)]);
var state_44482__$1 = (function (){var statearr_44493 = state_44482;
(statearr_44493[(9)] = inst_44475);

return statearr_44493;
})();
var statearr_44494_45714 = state_44482__$1;
(statearr_44494_45714[(2)] = null);

(statearr_44494_45714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (13))){
var inst_44437 = (state_44482[(10)]);
var inst_44439 = cljs.core.chunked_seq_QMARK_(inst_44437);
var state_44482__$1 = state_44482;
if(inst_44439){
var statearr_44495_45715 = state_44482__$1;
(statearr_44495_45715[(1)] = (16));

} else {
var statearr_44496_45716 = state_44482__$1;
(statearr_44496_45716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (22))){
var inst_44467 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
if(cljs.core.truth_(inst_44467)){
var statearr_44497_45717 = state_44482__$1;
(statearr_44497_45717[(1)] = (23));

} else {
var statearr_44498_45718 = state_44482__$1;
(statearr_44498_45718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (6))){
var inst_44461 = (state_44482[(7)]);
var inst_44463 = (state_44482[(11)]);
var inst_44413 = (state_44482[(8)]);
var inst_44461__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44413) : topic_fn.call(null,inst_44413));
var inst_44462 = cljs.core.deref(mults);
var inst_44463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44462,inst_44461__$1);
var state_44482__$1 = (function (){var statearr_44501 = state_44482;
(statearr_44501[(7)] = inst_44461__$1);

(statearr_44501[(11)] = inst_44463__$1);

return statearr_44501;
})();
if(cljs.core.truth_(inst_44463__$1)){
var statearr_44502_45723 = state_44482__$1;
(statearr_44502_45723[(1)] = (19));

} else {
var statearr_44503_45724 = state_44482__$1;
(statearr_44503_45724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (25))){
var inst_44472 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44504_45725 = state_44482__$1;
(statearr_44504_45725[(2)] = inst_44472);

(statearr_44504_45725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (17))){
var inst_44437 = (state_44482[(10)]);
var inst_44446 = cljs.core.first(inst_44437);
var inst_44447 = cljs.core.async.muxch_STAR_(inst_44446);
var inst_44448 = cljs.core.async.close_BANG_(inst_44447);
var inst_44449 = cljs.core.next(inst_44437);
var inst_44423 = inst_44449;
var inst_44424 = null;
var inst_44425 = (0);
var inst_44426 = (0);
var state_44482__$1 = (function (){var statearr_44505 = state_44482;
(statearr_44505[(12)] = inst_44426);

(statearr_44505[(13)] = inst_44423);

(statearr_44505[(14)] = inst_44424);

(statearr_44505[(15)] = inst_44448);

(statearr_44505[(16)] = inst_44425);

return statearr_44505;
})();
var statearr_44506_45726 = state_44482__$1;
(statearr_44506_45726[(2)] = null);

(statearr_44506_45726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (3))){
var inst_44480 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44482__$1,inst_44480);
} else {
if((state_val_44483 === (12))){
var inst_44457 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44507_45727 = state_44482__$1;
(statearr_44507_45727[(2)] = inst_44457);

(statearr_44507_45727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (2))){
var state_44482__$1 = state_44482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44482__$1,(4),ch);
} else {
if((state_val_44483 === (23))){
var state_44482__$1 = state_44482;
var statearr_44508_45728 = state_44482__$1;
(statearr_44508_45728[(2)] = null);

(statearr_44508_45728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (19))){
var inst_44463 = (state_44482[(11)]);
var inst_44413 = (state_44482[(8)]);
var inst_44465 = cljs.core.async.muxch_STAR_(inst_44463);
var state_44482__$1 = state_44482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44482__$1,(22),inst_44465,inst_44413);
} else {
if((state_val_44483 === (11))){
var inst_44437 = (state_44482[(10)]);
var inst_44423 = (state_44482[(13)]);
var inst_44437__$1 = cljs.core.seq(inst_44423);
var state_44482__$1 = (function (){var statearr_44509 = state_44482;
(statearr_44509[(10)] = inst_44437__$1);

return statearr_44509;
})();
if(inst_44437__$1){
var statearr_44510_45729 = state_44482__$1;
(statearr_44510_45729[(1)] = (13));

} else {
var statearr_44511_45730 = state_44482__$1;
(statearr_44511_45730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (9))){
var inst_44459 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44512_45731 = state_44482__$1;
(statearr_44512_45731[(2)] = inst_44459);

(statearr_44512_45731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (5))){
var inst_44420 = cljs.core.deref(mults);
var inst_44421 = cljs.core.vals(inst_44420);
var inst_44422 = cljs.core.seq(inst_44421);
var inst_44423 = inst_44422;
var inst_44424 = null;
var inst_44425 = (0);
var inst_44426 = (0);
var state_44482__$1 = (function (){var statearr_44513 = state_44482;
(statearr_44513[(12)] = inst_44426);

(statearr_44513[(13)] = inst_44423);

(statearr_44513[(14)] = inst_44424);

(statearr_44513[(16)] = inst_44425);

return statearr_44513;
})();
var statearr_44514_45732 = state_44482__$1;
(statearr_44514_45732[(2)] = null);

(statearr_44514_45732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (14))){
var state_44482__$1 = state_44482;
var statearr_44518_45733 = state_44482__$1;
(statearr_44518_45733[(2)] = null);

(statearr_44518_45733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (16))){
var inst_44437 = (state_44482[(10)]);
var inst_44441 = cljs.core.chunk_first(inst_44437);
var inst_44442 = cljs.core.chunk_rest(inst_44437);
var inst_44443 = cljs.core.count(inst_44441);
var inst_44423 = inst_44442;
var inst_44424 = inst_44441;
var inst_44425 = inst_44443;
var inst_44426 = (0);
var state_44482__$1 = (function (){var statearr_44519 = state_44482;
(statearr_44519[(12)] = inst_44426);

(statearr_44519[(13)] = inst_44423);

(statearr_44519[(14)] = inst_44424);

(statearr_44519[(16)] = inst_44425);

return statearr_44519;
})();
var statearr_44520_45735 = state_44482__$1;
(statearr_44520_45735[(2)] = null);

(statearr_44520_45735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (10))){
var inst_44426 = (state_44482[(12)]);
var inst_44423 = (state_44482[(13)]);
var inst_44424 = (state_44482[(14)]);
var inst_44425 = (state_44482[(16)]);
var inst_44431 = cljs.core._nth(inst_44424,inst_44426);
var inst_44432 = cljs.core.async.muxch_STAR_(inst_44431);
var inst_44433 = cljs.core.async.close_BANG_(inst_44432);
var inst_44434 = (inst_44426 + (1));
var tmp44515 = inst_44423;
var tmp44516 = inst_44424;
var tmp44517 = inst_44425;
var inst_44423__$1 = tmp44515;
var inst_44424__$1 = tmp44516;
var inst_44425__$1 = tmp44517;
var inst_44426__$1 = inst_44434;
var state_44482__$1 = (function (){var statearr_44521 = state_44482;
(statearr_44521[(12)] = inst_44426__$1);

(statearr_44521[(17)] = inst_44433);

(statearr_44521[(13)] = inst_44423__$1);

(statearr_44521[(14)] = inst_44424__$1);

(statearr_44521[(16)] = inst_44425__$1);

return statearr_44521;
})();
var statearr_44522_45736 = state_44482__$1;
(statearr_44522_45736[(2)] = null);

(statearr_44522_45736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (18))){
var inst_44452 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44523_45737 = state_44482__$1;
(statearr_44523_45737[(2)] = inst_44452);

(statearr_44523_45737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (8))){
var inst_44426 = (state_44482[(12)]);
var inst_44425 = (state_44482[(16)]);
var inst_44428 = (inst_44426 < inst_44425);
var inst_44429 = inst_44428;
var state_44482__$1 = state_44482;
if(cljs.core.truth_(inst_44429)){
var statearr_44524_45738 = state_44482__$1;
(statearr_44524_45738[(1)] = (10));

} else {
var statearr_44525_45739 = state_44482__$1;
(statearr_44525_45739[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_44526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44526[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_44526[(1)] = (1));

return statearr_44526;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_44482){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44482);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44527){var ex__42748__auto__ = e44527;
var statearr_44528_45741 = state_44482;
(statearr_44528_45741[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44482[(4)]))){
var statearr_44529_45742 = state_44482;
(statearr_44529_45742[(1)] = cljs.core.first((state_44482[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45744 = state_44482;
state_44482 = G__45744;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_44482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_44482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44530 = f__42902__auto__();
(statearr_44530[(6)] = c__42901__auto___45706);

return statearr_44530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44532 = arguments.length;
switch (G__44532) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44534 = arguments.length;
switch (G__44534) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44537 = arguments.length;
switch (G__44537) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42901__auto___45752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44583){
var state_val_44584 = (state_44583[(1)]);
if((state_val_44584 === (7))){
var state_44583__$1 = state_44583;
var statearr_44585_45754 = state_44583__$1;
(statearr_44585_45754[(2)] = null);

(statearr_44585_45754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (1))){
var state_44583__$1 = state_44583;
var statearr_44586_45756 = state_44583__$1;
(statearr_44586_45756[(2)] = null);

(statearr_44586_45756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (4))){
var inst_44543 = (state_44583[(7)]);
var inst_44544 = (state_44583[(8)]);
var inst_44546 = (inst_44544 < inst_44543);
var state_44583__$1 = state_44583;
if(cljs.core.truth_(inst_44546)){
var statearr_44587_45757 = state_44583__$1;
(statearr_44587_45757[(1)] = (6));

} else {
var statearr_44588_45758 = state_44583__$1;
(statearr_44588_45758[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (15))){
var inst_44569 = (state_44583[(9)]);
var inst_44574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44569);
var state_44583__$1 = state_44583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44583__$1,(17),out,inst_44574);
} else {
if((state_val_44584 === (13))){
var inst_44569 = (state_44583[(9)]);
var inst_44569__$1 = (state_44583[(2)]);
var inst_44570 = cljs.core.some(cljs.core.nil_QMARK_,inst_44569__$1);
var state_44583__$1 = (function (){var statearr_44589 = state_44583;
(statearr_44589[(9)] = inst_44569__$1);

return statearr_44589;
})();
if(cljs.core.truth_(inst_44570)){
var statearr_44590_45759 = state_44583__$1;
(statearr_44590_45759[(1)] = (14));

} else {
var statearr_44591_45760 = state_44583__$1;
(statearr_44591_45760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (6))){
var state_44583__$1 = state_44583;
var statearr_44592_45761 = state_44583__$1;
(statearr_44592_45761[(2)] = null);

(statearr_44592_45761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (17))){
var inst_44576 = (state_44583[(2)]);
var state_44583__$1 = (function (){var statearr_44594 = state_44583;
(statearr_44594[(10)] = inst_44576);

return statearr_44594;
})();
var statearr_44595_45762 = state_44583__$1;
(statearr_44595_45762[(2)] = null);

(statearr_44595_45762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (3))){
var inst_44581 = (state_44583[(2)]);
var state_44583__$1 = state_44583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44583__$1,inst_44581);
} else {
if((state_val_44584 === (12))){
var _ = (function (){var statearr_44596 = state_44583;
(statearr_44596[(4)] = cljs.core.rest((state_44583[(4)])));

return statearr_44596;
})();
var state_44583__$1 = state_44583;
var ex44593 = (state_44583__$1[(2)]);
var statearr_44597_45767 = state_44583__$1;
(statearr_44597_45767[(5)] = ex44593);


if((ex44593 instanceof Object)){
var statearr_44598_45768 = state_44583__$1;
(statearr_44598_45768[(1)] = (11));

(statearr_44598_45768[(5)] = null);

} else {
throw ex44593;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (2))){
var inst_44541 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44543 = cnt;
var inst_44544 = (0);
var state_44583__$1 = (function (){var statearr_44599 = state_44583;
(statearr_44599[(7)] = inst_44543);

(statearr_44599[(11)] = inst_44541);

(statearr_44599[(8)] = inst_44544);

return statearr_44599;
})();
var statearr_44600_45772 = state_44583__$1;
(statearr_44600_45772[(2)] = null);

(statearr_44600_45772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (11))){
var inst_44548 = (state_44583[(2)]);
var inst_44549 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44583__$1 = (function (){var statearr_44601 = state_44583;
(statearr_44601[(12)] = inst_44548);

return statearr_44601;
})();
var statearr_44602_45773 = state_44583__$1;
(statearr_44602_45773[(2)] = inst_44549);

(statearr_44602_45773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (9))){
var inst_44544 = (state_44583[(8)]);
var _ = (function (){var statearr_44603 = state_44583;
(statearr_44603[(4)] = cljs.core.cons((12),(state_44583[(4)])));

return statearr_44603;
})();
var inst_44555 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44544) : chs__$1.call(null,inst_44544));
var inst_44556 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44544) : done.call(null,inst_44544));
var inst_44557 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44555,inst_44556);
var ___$1 = (function (){var statearr_44604 = state_44583;
(statearr_44604[(4)] = cljs.core.rest((state_44583[(4)])));

return statearr_44604;
})();
var state_44583__$1 = state_44583;
var statearr_44605_45777 = state_44583__$1;
(statearr_44605_45777[(2)] = inst_44557);

(statearr_44605_45777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (5))){
var inst_44567 = (state_44583[(2)]);
var state_44583__$1 = (function (){var statearr_44606 = state_44583;
(statearr_44606[(13)] = inst_44567);

return statearr_44606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44583__$1,(13),dchan);
} else {
if((state_val_44584 === (14))){
var inst_44572 = cljs.core.async.close_BANG_(out);
var state_44583__$1 = state_44583;
var statearr_44607_45778 = state_44583__$1;
(statearr_44607_45778[(2)] = inst_44572);

(statearr_44607_45778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (16))){
var inst_44579 = (state_44583[(2)]);
var state_44583__$1 = state_44583;
var statearr_44608_45782 = state_44583__$1;
(statearr_44608_45782[(2)] = inst_44579);

(statearr_44608_45782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (10))){
var inst_44544 = (state_44583[(8)]);
var inst_44560 = (state_44583[(2)]);
var inst_44561 = (inst_44544 + (1));
var inst_44544__$1 = inst_44561;
var state_44583__$1 = (function (){var statearr_44609 = state_44583;
(statearr_44609[(14)] = inst_44560);

(statearr_44609[(8)] = inst_44544__$1);

return statearr_44609;
})();
var statearr_44610_45783 = state_44583__$1;
(statearr_44610_45783[(2)] = null);

(statearr_44610_45783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44584 === (8))){
var inst_44565 = (state_44583[(2)]);
var state_44583__$1 = state_44583;
var statearr_44611_45784 = state_44583__$1;
(statearr_44611_45784[(2)] = inst_44565);

(statearr_44611_45784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_44612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44612[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_44612[(1)] = (1));

return statearr_44612;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_44583){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44583);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44613){var ex__42748__auto__ = e44613;
var statearr_44614_45788 = state_44583;
(statearr_44614_45788[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44583[(4)]))){
var statearr_44615_45789 = state_44583;
(statearr_44615_45789[(1)] = cljs.core.first((state_44583[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45790 = state_44583;
state_44583 = G__45790;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_44583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_44583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44616 = f__42902__auto__();
(statearr_44616[(6)] = c__42901__auto___45752);

return statearr_44616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44619 = arguments.length;
switch (G__44619) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44653){
var state_val_44654 = (state_44653[(1)]);
if((state_val_44654 === (7))){
var inst_44633 = (state_44653[(7)]);
var inst_44632 = (state_44653[(8)]);
var inst_44632__$1 = (state_44653[(2)]);
var inst_44633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44632__$1,(0),null);
var inst_44634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44632__$1,(1),null);
var inst_44635 = (inst_44633__$1 == null);
var state_44653__$1 = (function (){var statearr_44660 = state_44653;
(statearr_44660[(9)] = inst_44634);

(statearr_44660[(7)] = inst_44633__$1);

(statearr_44660[(8)] = inst_44632__$1);

return statearr_44660;
})();
if(cljs.core.truth_(inst_44635)){
var statearr_44662_45797 = state_44653__$1;
(statearr_44662_45797[(1)] = (8));

} else {
var statearr_44663_45798 = state_44653__$1;
(statearr_44663_45798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (1))){
var inst_44621 = cljs.core.vec(chs);
var inst_44622 = inst_44621;
var state_44653__$1 = (function (){var statearr_44664 = state_44653;
(statearr_44664[(10)] = inst_44622);

return statearr_44664;
})();
var statearr_44665_45799 = state_44653__$1;
(statearr_44665_45799[(2)] = null);

(statearr_44665_45799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (4))){
var inst_44622 = (state_44653[(10)]);
var state_44653__$1 = state_44653;
return cljs.core.async.ioc_alts_BANG_(state_44653__$1,(7),inst_44622);
} else {
if((state_val_44654 === (6))){
var inst_44649 = (state_44653[(2)]);
var state_44653__$1 = state_44653;
var statearr_44666_45800 = state_44653__$1;
(statearr_44666_45800[(2)] = inst_44649);

(statearr_44666_45800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (3))){
var inst_44651 = (state_44653[(2)]);
var state_44653__$1 = state_44653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44653__$1,inst_44651);
} else {
if((state_val_44654 === (2))){
var inst_44622 = (state_44653[(10)]);
var inst_44625 = cljs.core.count(inst_44622);
var inst_44626 = (inst_44625 > (0));
var state_44653__$1 = state_44653;
if(cljs.core.truth_(inst_44626)){
var statearr_44669_45801 = state_44653__$1;
(statearr_44669_45801[(1)] = (4));

} else {
var statearr_44670_45802 = state_44653__$1;
(statearr_44670_45802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (11))){
var inst_44622 = (state_44653[(10)]);
var inst_44642 = (state_44653[(2)]);
var tmp44667 = inst_44622;
var inst_44622__$1 = tmp44667;
var state_44653__$1 = (function (){var statearr_44671 = state_44653;
(statearr_44671[(11)] = inst_44642);

(statearr_44671[(10)] = inst_44622__$1);

return statearr_44671;
})();
var statearr_44673_45803 = state_44653__$1;
(statearr_44673_45803[(2)] = null);

(statearr_44673_45803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (9))){
var inst_44633 = (state_44653[(7)]);
var state_44653__$1 = state_44653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44653__$1,(11),out,inst_44633);
} else {
if((state_val_44654 === (5))){
var inst_44647 = cljs.core.async.close_BANG_(out);
var state_44653__$1 = state_44653;
var statearr_44675_45804 = state_44653__$1;
(statearr_44675_45804[(2)] = inst_44647);

(statearr_44675_45804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (10))){
var inst_44645 = (state_44653[(2)]);
var state_44653__$1 = state_44653;
var statearr_44676_45805 = state_44653__$1;
(statearr_44676_45805[(2)] = inst_44645);

(statearr_44676_45805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44654 === (8))){
var inst_44634 = (state_44653[(9)]);
var inst_44633 = (state_44653[(7)]);
var inst_44622 = (state_44653[(10)]);
var inst_44632 = (state_44653[(8)]);
var inst_44637 = (function (){var cs = inst_44622;
var vec__44628 = inst_44632;
var v = inst_44633;
var c = inst_44634;
return (function (p1__44617_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44617_SHARP_);
});
})();
var inst_44638 = cljs.core.filterv(inst_44637,inst_44622);
var inst_44622__$1 = inst_44638;
var state_44653__$1 = (function (){var statearr_44679 = state_44653;
(statearr_44679[(10)] = inst_44622__$1);

return statearr_44679;
})();
var statearr_44681_45807 = state_44653__$1;
(statearr_44681_45807[(2)] = null);

(statearr_44681_45807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_44684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44684[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_44684[(1)] = (1));

return statearr_44684;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_44653){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44653);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44685){var ex__42748__auto__ = e44685;
var statearr_44686_45809 = state_44653;
(statearr_44686_45809[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44653[(4)]))){
var statearr_44687_45810 = state_44653;
(statearr_44687_45810[(1)] = cljs.core.first((state_44653[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45811 = state_44653;
state_44653 = G__45811;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_44653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_44653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44688 = f__42902__auto__();
(statearr_44688[(6)] = c__42901__auto___45796);

return statearr_44688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44690 = arguments.length;
switch (G__44690) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44714){
var state_val_44715 = (state_44714[(1)]);
if((state_val_44715 === (7))){
var inst_44696 = (state_44714[(7)]);
var inst_44696__$1 = (state_44714[(2)]);
var inst_44697 = (inst_44696__$1 == null);
var inst_44698 = cljs.core.not(inst_44697);
var state_44714__$1 = (function (){var statearr_44716 = state_44714;
(statearr_44716[(7)] = inst_44696__$1);

return statearr_44716;
})();
if(inst_44698){
var statearr_44717_45815 = state_44714__$1;
(statearr_44717_45815[(1)] = (8));

} else {
var statearr_44718_45816 = state_44714__$1;
(statearr_44718_45816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (1))){
var inst_44691 = (0);
var state_44714__$1 = (function (){var statearr_44719 = state_44714;
(statearr_44719[(8)] = inst_44691);

return statearr_44719;
})();
var statearr_44720_45817 = state_44714__$1;
(statearr_44720_45817[(2)] = null);

(statearr_44720_45817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (4))){
var state_44714__$1 = state_44714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44714__$1,(7),ch);
} else {
if((state_val_44715 === (6))){
var inst_44709 = (state_44714[(2)]);
var state_44714__$1 = state_44714;
var statearr_44722_45818 = state_44714__$1;
(statearr_44722_45818[(2)] = inst_44709);

(statearr_44722_45818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (3))){
var inst_44711 = (state_44714[(2)]);
var inst_44712 = cljs.core.async.close_BANG_(out);
var state_44714__$1 = (function (){var statearr_44723 = state_44714;
(statearr_44723[(9)] = inst_44711);

return statearr_44723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44714__$1,inst_44712);
} else {
if((state_val_44715 === (2))){
var inst_44691 = (state_44714[(8)]);
var inst_44693 = (inst_44691 < n);
var state_44714__$1 = state_44714;
if(cljs.core.truth_(inst_44693)){
var statearr_44724_45819 = state_44714__$1;
(statearr_44724_45819[(1)] = (4));

} else {
var statearr_44725_45820 = state_44714__$1;
(statearr_44725_45820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (11))){
var inst_44691 = (state_44714[(8)]);
var inst_44701 = (state_44714[(2)]);
var inst_44702 = (inst_44691 + (1));
var inst_44691__$1 = inst_44702;
var state_44714__$1 = (function (){var statearr_44727 = state_44714;
(statearr_44727[(10)] = inst_44701);

(statearr_44727[(8)] = inst_44691__$1);

return statearr_44727;
})();
var statearr_44728_45821 = state_44714__$1;
(statearr_44728_45821[(2)] = null);

(statearr_44728_45821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (9))){
var state_44714__$1 = state_44714;
var statearr_44729_45822 = state_44714__$1;
(statearr_44729_45822[(2)] = null);

(statearr_44729_45822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (5))){
var state_44714__$1 = state_44714;
var statearr_44731_45823 = state_44714__$1;
(statearr_44731_45823[(2)] = null);

(statearr_44731_45823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (10))){
var inst_44706 = (state_44714[(2)]);
var state_44714__$1 = state_44714;
var statearr_44732_45824 = state_44714__$1;
(statearr_44732_45824[(2)] = inst_44706);

(statearr_44732_45824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44715 === (8))){
var inst_44696 = (state_44714[(7)]);
var state_44714__$1 = state_44714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44714__$1,(11),out,inst_44696);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_44734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44734[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_44734[(1)] = (1));

return statearr_44734;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_44714){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44714);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44735){var ex__42748__auto__ = e44735;
var statearr_44736_45825 = state_44714;
(statearr_44736_45825[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44714[(4)]))){
var statearr_44737_45826 = state_44714;
(statearr_44737_45826[(1)] = cljs.core.first((state_44714[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45827 = state_44714;
state_44714 = G__45827;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_44714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_44714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44738 = f__42902__auto__();
(statearr_44738[(6)] = c__42901__auto___45814);

return statearr_44738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44742 = (function (f,ch,meta44743){
this.f = f;
this.ch = ch;
this.meta44743 = meta44743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44744,meta44743__$1){
var self__ = this;
var _44744__$1 = this;
return (new cljs.core.async.t_cljs$core$async44742(self__.f,self__.ch,meta44743__$1));
}));

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44744){
var self__ = this;
var _44744__$1 = this;
return self__.meta44743;
}));

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44748 = (function (f,ch,meta44743,_,fn1,meta44749){
this.f = f;
this.ch = ch;
this.meta44743 = meta44743;
this._ = _;
this.fn1 = fn1;
this.meta44749 = meta44749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44750,meta44749__$1){
var self__ = this;
var _44750__$1 = this;
return (new cljs.core.async.t_cljs$core$async44748(self__.f,self__.ch,self__.meta44743,self__._,self__.fn1,meta44749__$1));
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44750){
var self__ = this;
var _44750__$1 = this;
return self__.meta44749;
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44739_SHARP_){
var G__44751 = (((p1__44739_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44739_SHARP_) : self__.f.call(null,p1__44739_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44751) : f1.call(null,G__44751));
});
}));

(cljs.core.async.t_cljs$core$async44748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44743","meta44743",709959509,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44742","cljs.core.async/t_cljs$core$async44742",-680573230,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44749","meta44749",-1784819172,null)], null);
}));

(cljs.core.async.t_cljs$core$async44748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44748");

(cljs.core.async.t_cljs$core$async44748.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44748.
 */
cljs.core.async.__GT_t_cljs$core$async44748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44748(f__$1,ch__$1,meta44743__$1,___$2,fn1__$1,meta44749){
return (new cljs.core.async.t_cljs$core$async44748(f__$1,ch__$1,meta44743__$1,___$2,fn1__$1,meta44749));
});

}

return (new cljs.core.async.t_cljs$core$async44748(self__.f,self__.ch,self__.meta44743,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44752 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44752) : self__.f.call(null,G__44752));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44743","meta44743",709959509,null)], null);
}));

(cljs.core.async.t_cljs$core$async44742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44742");

(cljs.core.async.t_cljs$core$async44742.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44742.
 */
cljs.core.async.__GT_t_cljs$core$async44742 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44742(f__$1,ch__$1,meta44743){
return (new cljs.core.async.t_cljs$core$async44742(f__$1,ch__$1,meta44743));
});

}

return (new cljs.core.async.t_cljs$core$async44742(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44753 = (function (f,ch,meta44754){
this.f = f;
this.ch = ch;
this.meta44754 = meta44754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44755,meta44754__$1){
var self__ = this;
var _44755__$1 = this;
return (new cljs.core.async.t_cljs$core$async44753(self__.f,self__.ch,meta44754__$1));
}));

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44755){
var self__ = this;
var _44755__$1 = this;
return self__.meta44754;
}));

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44754","meta44754",-203630727,null)], null);
}));

(cljs.core.async.t_cljs$core$async44753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44753");

(cljs.core.async.t_cljs$core$async44753.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44753.
 */
cljs.core.async.__GT_t_cljs$core$async44753 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44753(f__$1,ch__$1,meta44754){
return (new cljs.core.async.t_cljs$core$async44753(f__$1,ch__$1,meta44754));
});

}

return (new cljs.core.async.t_cljs$core$async44753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44756 = (function (p,ch,meta44757){
this.p = p;
this.ch = ch;
this.meta44757 = meta44757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44758,meta44757__$1){
var self__ = this;
var _44758__$1 = this;
return (new cljs.core.async.t_cljs$core$async44756(self__.p,self__.ch,meta44757__$1));
}));

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44758){
var self__ = this;
var _44758__$1 = this;
return self__.meta44757;
}));

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44757","meta44757",132019081,null)], null);
}));

(cljs.core.async.t_cljs$core$async44756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44756");

(cljs.core.async.t_cljs$core$async44756.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44756.
 */
cljs.core.async.__GT_t_cljs$core$async44756 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44756(p__$1,ch__$1,meta44757){
return (new cljs.core.async.t_cljs$core$async44756(p__$1,ch__$1,meta44757));
});

}

return (new cljs.core.async.t_cljs$core$async44756(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44763 = arguments.length;
switch (G__44763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44784){
var state_val_44785 = (state_44784[(1)]);
if((state_val_44785 === (7))){
var inst_44780 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44786_45842 = state_44784__$1;
(statearr_44786_45842[(2)] = inst_44780);

(statearr_44786_45842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (1))){
var state_44784__$1 = state_44784;
var statearr_44787_45843 = state_44784__$1;
(statearr_44787_45843[(2)] = null);

(statearr_44787_45843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (4))){
var inst_44766 = (state_44784[(7)]);
var inst_44766__$1 = (state_44784[(2)]);
var inst_44767 = (inst_44766__$1 == null);
var state_44784__$1 = (function (){var statearr_44788 = state_44784;
(statearr_44788[(7)] = inst_44766__$1);

return statearr_44788;
})();
if(cljs.core.truth_(inst_44767)){
var statearr_44789_45845 = state_44784__$1;
(statearr_44789_45845[(1)] = (5));

} else {
var statearr_44790_45846 = state_44784__$1;
(statearr_44790_45846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (6))){
var inst_44766 = (state_44784[(7)]);
var inst_44771 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44766) : p.call(null,inst_44766));
var state_44784__$1 = state_44784;
if(cljs.core.truth_(inst_44771)){
var statearr_44791_45847 = state_44784__$1;
(statearr_44791_45847[(1)] = (8));

} else {
var statearr_44792_45848 = state_44784__$1;
(statearr_44792_45848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (3))){
var inst_44782 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44784__$1,inst_44782);
} else {
if((state_val_44785 === (2))){
var state_44784__$1 = state_44784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44784__$1,(4),ch);
} else {
if((state_val_44785 === (11))){
var inst_44774 = (state_44784[(2)]);
var state_44784__$1 = state_44784;
var statearr_44795_45853 = state_44784__$1;
(statearr_44795_45853[(2)] = inst_44774);

(statearr_44795_45853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (9))){
var state_44784__$1 = state_44784;
var statearr_44797_45857 = state_44784__$1;
(statearr_44797_45857[(2)] = null);

(statearr_44797_45857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (5))){
var inst_44769 = cljs.core.async.close_BANG_(out);
var state_44784__$1 = state_44784;
var statearr_44799_45858 = state_44784__$1;
(statearr_44799_45858[(2)] = inst_44769);

(statearr_44799_45858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (10))){
var inst_44777 = (state_44784[(2)]);
var state_44784__$1 = (function (){var statearr_44802 = state_44784;
(statearr_44802[(8)] = inst_44777);

return statearr_44802;
})();
var statearr_44803_45859 = state_44784__$1;
(statearr_44803_45859[(2)] = null);

(statearr_44803_45859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44785 === (8))){
var inst_44766 = (state_44784[(7)]);
var state_44784__$1 = state_44784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44784__$1,(11),out,inst_44766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_44805 = [null,null,null,null,null,null,null,null,null];
(statearr_44805[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_44805[(1)] = (1));

return statearr_44805;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_44784){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44784);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44808){var ex__42748__auto__ = e44808;
var statearr_44810_45860 = state_44784;
(statearr_44810_45860[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44784[(4)]))){
var statearr_44811_45862 = state_44784;
(statearr_44811_45862[(1)] = cljs.core.first((state_44784[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45863 = state_44784;
state_44784 = G__45863;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_44784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_44784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44813 = f__42902__auto__();
(statearr_44813[(6)] = c__42901__auto___45841);

return statearr_44813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44816 = arguments.length;
switch (G__44816) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_44893){
var state_val_44894 = (state_44893[(1)]);
if((state_val_44894 === (7))){
var inst_44888 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
var statearr_44897_45866 = state_44893__$1;
(statearr_44897_45866[(2)] = inst_44888);

(statearr_44897_45866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (20))){
var inst_44854 = (state_44893[(7)]);
var inst_44868 = (state_44893[(2)]);
var inst_44869 = cljs.core.next(inst_44854);
var inst_44840 = inst_44869;
var inst_44841 = null;
var inst_44842 = (0);
var inst_44843 = (0);
var state_44893__$1 = (function (){var statearr_44901 = state_44893;
(statearr_44901[(8)] = inst_44841);

(statearr_44901[(9)] = inst_44868);

(statearr_44901[(10)] = inst_44840);

(statearr_44901[(11)] = inst_44842);

(statearr_44901[(12)] = inst_44843);

return statearr_44901;
})();
var statearr_44902_45867 = state_44893__$1;
(statearr_44902_45867[(2)] = null);

(statearr_44902_45867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (1))){
var state_44893__$1 = state_44893;
var statearr_44904_45868 = state_44893__$1;
(statearr_44904_45868[(2)] = null);

(statearr_44904_45868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (4))){
var inst_44828 = (state_44893[(13)]);
var inst_44828__$1 = (state_44893[(2)]);
var inst_44830 = (inst_44828__$1 == null);
var state_44893__$1 = (function (){var statearr_44909 = state_44893;
(statearr_44909[(13)] = inst_44828__$1);

return statearr_44909;
})();
if(cljs.core.truth_(inst_44830)){
var statearr_44910_45869 = state_44893__$1;
(statearr_44910_45869[(1)] = (5));

} else {
var statearr_44911_45870 = state_44893__$1;
(statearr_44911_45870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (15))){
var state_44893__$1 = state_44893;
var statearr_44916_45871 = state_44893__$1;
(statearr_44916_45871[(2)] = null);

(statearr_44916_45871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (21))){
var state_44893__$1 = state_44893;
var statearr_44921_45872 = state_44893__$1;
(statearr_44921_45872[(2)] = null);

(statearr_44921_45872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (13))){
var inst_44841 = (state_44893[(8)]);
var inst_44840 = (state_44893[(10)]);
var inst_44842 = (state_44893[(11)]);
var inst_44843 = (state_44893[(12)]);
var inst_44850 = (state_44893[(2)]);
var inst_44851 = (inst_44843 + (1));
var tmp44913 = inst_44841;
var tmp44914 = inst_44840;
var tmp44915 = inst_44842;
var inst_44840__$1 = tmp44914;
var inst_44841__$1 = tmp44913;
var inst_44842__$1 = tmp44915;
var inst_44843__$1 = inst_44851;
var state_44893__$1 = (function (){var statearr_44925 = state_44893;
(statearr_44925[(8)] = inst_44841__$1);

(statearr_44925[(10)] = inst_44840__$1);

(statearr_44925[(11)] = inst_44842__$1);

(statearr_44925[(12)] = inst_44843__$1);

(statearr_44925[(14)] = inst_44850);

return statearr_44925;
})();
var statearr_44928_45873 = state_44893__$1;
(statearr_44928_45873[(2)] = null);

(statearr_44928_45873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (22))){
var state_44893__$1 = state_44893;
var statearr_44929_45877 = state_44893__$1;
(statearr_44929_45877[(2)] = null);

(statearr_44929_45877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (6))){
var inst_44828 = (state_44893[(13)]);
var inst_44838 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44828) : f.call(null,inst_44828));
var inst_44839 = cljs.core.seq(inst_44838);
var inst_44840 = inst_44839;
var inst_44841 = null;
var inst_44842 = (0);
var inst_44843 = (0);
var state_44893__$1 = (function (){var statearr_44935 = state_44893;
(statearr_44935[(8)] = inst_44841);

(statearr_44935[(10)] = inst_44840);

(statearr_44935[(11)] = inst_44842);

(statearr_44935[(12)] = inst_44843);

return statearr_44935;
})();
var statearr_44937_45878 = state_44893__$1;
(statearr_44937_45878[(2)] = null);

(statearr_44937_45878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (17))){
var inst_44854 = (state_44893[(7)]);
var inst_44860 = cljs.core.chunk_first(inst_44854);
var inst_44861 = cljs.core.chunk_rest(inst_44854);
var inst_44862 = cljs.core.count(inst_44860);
var inst_44840 = inst_44861;
var inst_44841 = inst_44860;
var inst_44842 = inst_44862;
var inst_44843 = (0);
var state_44893__$1 = (function (){var statearr_44939 = state_44893;
(statearr_44939[(8)] = inst_44841);

(statearr_44939[(10)] = inst_44840);

(statearr_44939[(11)] = inst_44842);

(statearr_44939[(12)] = inst_44843);

return statearr_44939;
})();
var statearr_44940_45879 = state_44893__$1;
(statearr_44940_45879[(2)] = null);

(statearr_44940_45879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (3))){
var inst_44890 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44893__$1,inst_44890);
} else {
if((state_val_44894 === (12))){
var inst_44877 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
var statearr_44945_45880 = state_44893__$1;
(statearr_44945_45880[(2)] = inst_44877);

(statearr_44945_45880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (2))){
var state_44893__$1 = state_44893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44893__$1,(4),in$);
} else {
if((state_val_44894 === (23))){
var inst_44886 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
var statearr_44947_45882 = state_44893__$1;
(statearr_44947_45882[(2)] = inst_44886);

(statearr_44947_45882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (19))){
var inst_44872 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
var statearr_44950_45883 = state_44893__$1;
(statearr_44950_45883[(2)] = inst_44872);

(statearr_44950_45883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (11))){
var inst_44840 = (state_44893[(10)]);
var inst_44854 = (state_44893[(7)]);
var inst_44854__$1 = cljs.core.seq(inst_44840);
var state_44893__$1 = (function (){var statearr_44953 = state_44893;
(statearr_44953[(7)] = inst_44854__$1);

return statearr_44953;
})();
if(inst_44854__$1){
var statearr_44954_45884 = state_44893__$1;
(statearr_44954_45884[(1)] = (14));

} else {
var statearr_44955_45888 = state_44893__$1;
(statearr_44955_45888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (9))){
var inst_44879 = (state_44893[(2)]);
var inst_44881 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44893__$1 = (function (){var statearr_44957 = state_44893;
(statearr_44957[(15)] = inst_44879);

return statearr_44957;
})();
if(cljs.core.truth_(inst_44881)){
var statearr_44959_45889 = state_44893__$1;
(statearr_44959_45889[(1)] = (21));

} else {
var statearr_44961_45890 = state_44893__$1;
(statearr_44961_45890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (5))){
var inst_44832 = cljs.core.async.close_BANG_(out);
var state_44893__$1 = state_44893;
var statearr_44964_45895 = state_44893__$1;
(statearr_44964_45895[(2)] = inst_44832);

(statearr_44964_45895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (14))){
var inst_44854 = (state_44893[(7)]);
var inst_44856 = cljs.core.chunked_seq_QMARK_(inst_44854);
var state_44893__$1 = state_44893;
if(inst_44856){
var statearr_44965_45896 = state_44893__$1;
(statearr_44965_45896[(1)] = (17));

} else {
var statearr_44967_45897 = state_44893__$1;
(statearr_44967_45897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (16))){
var inst_44875 = (state_44893[(2)]);
var state_44893__$1 = state_44893;
var statearr_44968_45898 = state_44893__$1;
(statearr_44968_45898[(2)] = inst_44875);

(statearr_44968_45898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44894 === (10))){
var inst_44841 = (state_44893[(8)]);
var inst_44843 = (state_44893[(12)]);
var inst_44848 = cljs.core._nth(inst_44841,inst_44843);
var state_44893__$1 = state_44893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44893__$1,(13),out,inst_44848);
} else {
if((state_val_44894 === (18))){
var inst_44854 = (state_44893[(7)]);
var inst_44865 = cljs.core.first(inst_44854);
var state_44893__$1 = state_44893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44893__$1,(20),out,inst_44865);
} else {
if((state_val_44894 === (8))){
var inst_44842 = (state_44893[(11)]);
var inst_44843 = (state_44893[(12)]);
var inst_44845 = (inst_44843 < inst_44842);
var inst_44846 = inst_44845;
var state_44893__$1 = state_44893;
if(cljs.core.truth_(inst_44846)){
var statearr_44973_45899 = state_44893__$1;
(statearr_44973_45899[(1)] = (10));

} else {
var statearr_44974_45900 = state_44893__$1;
(statearr_44974_45900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____0 = (function (){
var statearr_44975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44975[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__);

(statearr_44975[(1)] = (1));

return statearr_44975;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____1 = (function (state_44893){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_44893);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e44976){var ex__42748__auto__ = e44976;
var statearr_44977_45901 = state_44893;
(statearr_44977_45901[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_44893[(4)]))){
var statearr_44978_45902 = state_44893;
(statearr_44978_45902[(1)] = cljs.core.first((state_44893[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45903 = state_44893;
state_44893 = G__45903;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__ = function(state_44893){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____1.call(this,state_44893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42745__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_44979 = f__42902__auto__();
(statearr_44979[(6)] = c__42901__auto__);

return statearr_44979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

return c__42901__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44981 = arguments.length;
switch (G__44981) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44983 = arguments.length;
switch (G__44983) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44989 = arguments.length;
switch (G__44989) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_45013){
var state_val_45014 = (state_45013[(1)]);
if((state_val_45014 === (7))){
var inst_45008 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45015_45908 = state_45013__$1;
(statearr_45015_45908[(2)] = inst_45008);

(statearr_45015_45908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (1))){
var inst_44990 = null;
var state_45013__$1 = (function (){var statearr_45017 = state_45013;
(statearr_45017[(7)] = inst_44990);

return statearr_45017;
})();
var statearr_45019_45909 = state_45013__$1;
(statearr_45019_45909[(2)] = null);

(statearr_45019_45909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (4))){
var inst_44993 = (state_45013[(8)]);
var inst_44993__$1 = (state_45013[(2)]);
var inst_44994 = (inst_44993__$1 == null);
var inst_44995 = cljs.core.not(inst_44994);
var state_45013__$1 = (function (){var statearr_45020 = state_45013;
(statearr_45020[(8)] = inst_44993__$1);

return statearr_45020;
})();
if(inst_44995){
var statearr_45021_45911 = state_45013__$1;
(statearr_45021_45911[(1)] = (5));

} else {
var statearr_45022_45912 = state_45013__$1;
(statearr_45022_45912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (6))){
var state_45013__$1 = state_45013;
var statearr_45023_45913 = state_45013__$1;
(statearr_45023_45913[(2)] = null);

(statearr_45023_45913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (3))){
var inst_45010 = (state_45013[(2)]);
var inst_45011 = cljs.core.async.close_BANG_(out);
var state_45013__$1 = (function (){var statearr_45024 = state_45013;
(statearr_45024[(9)] = inst_45010);

return statearr_45024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45013__$1,inst_45011);
} else {
if((state_val_45014 === (2))){
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45013__$1,(4),ch);
} else {
if((state_val_45014 === (11))){
var inst_44993 = (state_45013[(8)]);
var inst_45002 = (state_45013[(2)]);
var inst_44990 = inst_44993;
var state_45013__$1 = (function (){var statearr_45026 = state_45013;
(statearr_45026[(7)] = inst_44990);

(statearr_45026[(10)] = inst_45002);

return statearr_45026;
})();
var statearr_45028_45914 = state_45013__$1;
(statearr_45028_45914[(2)] = null);

(statearr_45028_45914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (9))){
var inst_44993 = (state_45013[(8)]);
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45013__$1,(11),out,inst_44993);
} else {
if((state_val_45014 === (5))){
var inst_44993 = (state_45013[(8)]);
var inst_44990 = (state_45013[(7)]);
var inst_44997 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44993,inst_44990);
var state_45013__$1 = state_45013;
if(inst_44997){
var statearr_45030_45915 = state_45013__$1;
(statearr_45030_45915[(1)] = (8));

} else {
var statearr_45031_45916 = state_45013__$1;
(statearr_45031_45916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (10))){
var inst_45005 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45032_45917 = state_45013__$1;
(statearr_45032_45917[(2)] = inst_45005);

(statearr_45032_45917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (8))){
var inst_44990 = (state_45013[(7)]);
var tmp45029 = inst_44990;
var inst_44990__$1 = tmp45029;
var state_45013__$1 = (function (){var statearr_45037 = state_45013;
(statearr_45037[(7)] = inst_44990__$1);

return statearr_45037;
})();
var statearr_45038_45918 = state_45013__$1;
(statearr_45038_45918[(2)] = null);

(statearr_45038_45918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_45039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45039[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_45039[(1)] = (1));

return statearr_45039;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_45013){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_45013);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e45040){var ex__42748__auto__ = e45040;
var statearr_45041_45923 = state_45013;
(statearr_45041_45923[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_45013[(4)]))){
var statearr_45042_45925 = state_45013;
(statearr_45042_45925[(1)] = cljs.core.first((state_45013[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45926 = state_45013;
state_45013 = G__45926;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_45013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_45013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_45043 = f__42902__auto__();
(statearr_45043[(6)] = c__42901__auto___45907);

return statearr_45043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45052 = arguments.length;
switch (G__45052) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_45099){
var state_val_45100 = (state_45099[(1)]);
if((state_val_45100 === (7))){
var inst_45092 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
var statearr_45101_45930 = state_45099__$1;
(statearr_45101_45930[(2)] = inst_45092);

(statearr_45101_45930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (1))){
var inst_45056 = (new Array(n));
var inst_45057 = inst_45056;
var inst_45058 = (0);
var state_45099__$1 = (function (){var statearr_45102 = state_45099;
(statearr_45102[(7)] = inst_45057);

(statearr_45102[(8)] = inst_45058);

return statearr_45102;
})();
var statearr_45103_45931 = state_45099__$1;
(statearr_45103_45931[(2)] = null);

(statearr_45103_45931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (4))){
var inst_45061 = (state_45099[(9)]);
var inst_45061__$1 = (state_45099[(2)]);
var inst_45065 = (inst_45061__$1 == null);
var inst_45066 = cljs.core.not(inst_45065);
var state_45099__$1 = (function (){var statearr_45104 = state_45099;
(statearr_45104[(9)] = inst_45061__$1);

return statearr_45104;
})();
if(inst_45066){
var statearr_45105_45932 = state_45099__$1;
(statearr_45105_45932[(1)] = (5));

} else {
var statearr_45107_45933 = state_45099__$1;
(statearr_45107_45933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (15))){
var inst_45086 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
var statearr_45108_45934 = state_45099__$1;
(statearr_45108_45934[(2)] = inst_45086);

(statearr_45108_45934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (13))){
var state_45099__$1 = state_45099;
var statearr_45109_45936 = state_45099__$1;
(statearr_45109_45936[(2)] = null);

(statearr_45109_45936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (6))){
var inst_45058 = (state_45099[(8)]);
var inst_45082 = (inst_45058 > (0));
var state_45099__$1 = state_45099;
if(cljs.core.truth_(inst_45082)){
var statearr_45110_45940 = state_45099__$1;
(statearr_45110_45940[(1)] = (12));

} else {
var statearr_45111_45941 = state_45099__$1;
(statearr_45111_45941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (3))){
var inst_45094 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45099__$1,inst_45094);
} else {
if((state_val_45100 === (12))){
var inst_45057 = (state_45099[(7)]);
var inst_45084 = cljs.core.vec(inst_45057);
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45099__$1,(15),out,inst_45084);
} else {
if((state_val_45100 === (2))){
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45099__$1,(4),ch);
} else {
if((state_val_45100 === (11))){
var inst_45076 = (state_45099[(2)]);
var inst_45077 = (new Array(n));
var inst_45057 = inst_45077;
var inst_45058 = (0);
var state_45099__$1 = (function (){var statearr_45112 = state_45099;
(statearr_45112[(10)] = inst_45076);

(statearr_45112[(7)] = inst_45057);

(statearr_45112[(8)] = inst_45058);

return statearr_45112;
})();
var statearr_45113_45942 = state_45099__$1;
(statearr_45113_45942[(2)] = null);

(statearr_45113_45942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (9))){
var inst_45057 = (state_45099[(7)]);
var inst_45074 = cljs.core.vec(inst_45057);
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45099__$1,(11),out,inst_45074);
} else {
if((state_val_45100 === (5))){
var inst_45069 = (state_45099[(11)]);
var inst_45061 = (state_45099[(9)]);
var inst_45057 = (state_45099[(7)]);
var inst_45058 = (state_45099[(8)]);
var inst_45068 = (inst_45057[inst_45058] = inst_45061);
var inst_45069__$1 = (inst_45058 + (1));
var inst_45070 = (inst_45069__$1 < n);
var state_45099__$1 = (function (){var statearr_45116 = state_45099;
(statearr_45116[(11)] = inst_45069__$1);

(statearr_45116[(12)] = inst_45068);

return statearr_45116;
})();
if(cljs.core.truth_(inst_45070)){
var statearr_45117_45943 = state_45099__$1;
(statearr_45117_45943[(1)] = (8));

} else {
var statearr_45118_45944 = state_45099__$1;
(statearr_45118_45944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (14))){
var inst_45089 = (state_45099[(2)]);
var inst_45090 = cljs.core.async.close_BANG_(out);
var state_45099__$1 = (function (){var statearr_45121 = state_45099;
(statearr_45121[(13)] = inst_45089);

return statearr_45121;
})();
var statearr_45123_45945 = state_45099__$1;
(statearr_45123_45945[(2)] = inst_45090);

(statearr_45123_45945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (10))){
var inst_45080 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
var statearr_45124_45946 = state_45099__$1;
(statearr_45124_45946[(2)] = inst_45080);

(statearr_45124_45946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (8))){
var inst_45069 = (state_45099[(11)]);
var inst_45057 = (state_45099[(7)]);
var tmp45119 = inst_45057;
var inst_45057__$1 = tmp45119;
var inst_45058 = inst_45069;
var state_45099__$1 = (function (){var statearr_45125 = state_45099;
(statearr_45125[(7)] = inst_45057__$1);

(statearr_45125[(8)] = inst_45058);

return statearr_45125;
})();
var statearr_45126_45947 = state_45099__$1;
(statearr_45126_45947[(2)] = null);

(statearr_45126_45947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_45127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45127[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_45127[(1)] = (1));

return statearr_45127;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_45099){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_45099);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e45128){var ex__42748__auto__ = e45128;
var statearr_45129_45950 = state_45099;
(statearr_45129_45950[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_45099[(4)]))){
var statearr_45130_45951 = state_45099;
(statearr_45130_45951[(1)] = cljs.core.first((state_45099[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45952 = state_45099;
state_45099 = G__45952;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_45099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_45099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_45131 = f__42902__auto__();
(statearr_45131[(6)] = c__42901__auto___45928);

return statearr_45131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45133 = arguments.length;
switch (G__45133) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42901__auto___45956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_45178){
var state_val_45179 = (state_45178[(1)]);
if((state_val_45179 === (7))){
var inst_45174 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45180_45957 = state_45178__$1;
(statearr_45180_45957[(2)] = inst_45174);

(statearr_45180_45957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (1))){
var inst_45134 = [];
var inst_45135 = inst_45134;
var inst_45136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45178__$1 = (function (){var statearr_45181 = state_45178;
(statearr_45181[(7)] = inst_45135);

(statearr_45181[(8)] = inst_45136);

return statearr_45181;
})();
var statearr_45182_45958 = state_45178__$1;
(statearr_45182_45958[(2)] = null);

(statearr_45182_45958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (4))){
var inst_45139 = (state_45178[(9)]);
var inst_45139__$1 = (state_45178[(2)]);
var inst_45140 = (inst_45139__$1 == null);
var inst_45141 = cljs.core.not(inst_45140);
var state_45178__$1 = (function (){var statearr_45183 = state_45178;
(statearr_45183[(9)] = inst_45139__$1);

return statearr_45183;
})();
if(inst_45141){
var statearr_45184_45960 = state_45178__$1;
(statearr_45184_45960[(1)] = (5));

} else {
var statearr_45185_45961 = state_45178__$1;
(statearr_45185_45961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (15))){
var inst_45135 = (state_45178[(7)]);
var inst_45166 = cljs.core.vec(inst_45135);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45178__$1,(18),out,inst_45166);
} else {
if((state_val_45179 === (13))){
var inst_45161 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45186_45964 = state_45178__$1;
(statearr_45186_45964[(2)] = inst_45161);

(statearr_45186_45964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (6))){
var inst_45135 = (state_45178[(7)]);
var inst_45163 = inst_45135.length;
var inst_45164 = (inst_45163 > (0));
var state_45178__$1 = state_45178;
if(cljs.core.truth_(inst_45164)){
var statearr_45187_45966 = state_45178__$1;
(statearr_45187_45966[(1)] = (15));

} else {
var statearr_45188_45967 = state_45178__$1;
(statearr_45188_45967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (17))){
var inst_45171 = (state_45178[(2)]);
var inst_45172 = cljs.core.async.close_BANG_(out);
var state_45178__$1 = (function (){var statearr_45189 = state_45178;
(statearr_45189[(10)] = inst_45171);

return statearr_45189;
})();
var statearr_45190_45970 = state_45178__$1;
(statearr_45190_45970[(2)] = inst_45172);

(statearr_45190_45970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (3))){
var inst_45176 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45178__$1,inst_45176);
} else {
if((state_val_45179 === (12))){
var inst_45135 = (state_45178[(7)]);
var inst_45154 = cljs.core.vec(inst_45135);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45178__$1,(14),out,inst_45154);
} else {
if((state_val_45179 === (2))){
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45178__$1,(4),ch);
} else {
if((state_val_45179 === (11))){
var inst_45139 = (state_45178[(9)]);
var inst_45135 = (state_45178[(7)]);
var inst_45143 = (state_45178[(11)]);
var inst_45151 = inst_45135.push(inst_45139);
var tmp45191 = inst_45135;
var inst_45135__$1 = tmp45191;
var inst_45136 = inst_45143;
var state_45178__$1 = (function (){var statearr_45192 = state_45178;
(statearr_45192[(7)] = inst_45135__$1);

(statearr_45192[(12)] = inst_45151);

(statearr_45192[(8)] = inst_45136);

return statearr_45192;
})();
var statearr_45193_45974 = state_45178__$1;
(statearr_45193_45974[(2)] = null);

(statearr_45193_45974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (9))){
var inst_45136 = (state_45178[(8)]);
var inst_45147 = cljs.core.keyword_identical_QMARK_(inst_45136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45178__$1 = state_45178;
var statearr_45194_45975 = state_45178__$1;
(statearr_45194_45975[(2)] = inst_45147);

(statearr_45194_45975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (5))){
var inst_45139 = (state_45178[(9)]);
var inst_45144 = (state_45178[(13)]);
var inst_45143 = (state_45178[(11)]);
var inst_45136 = (state_45178[(8)]);
var inst_45143__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45139) : f.call(null,inst_45139));
var inst_45144__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45143__$1,inst_45136);
var state_45178__$1 = (function (){var statearr_45197 = state_45178;
(statearr_45197[(13)] = inst_45144__$1);

(statearr_45197[(11)] = inst_45143__$1);

return statearr_45197;
})();
if(inst_45144__$1){
var statearr_45199_45976 = state_45178__$1;
(statearr_45199_45976[(1)] = (8));

} else {
var statearr_45200_45977 = state_45178__$1;
(statearr_45200_45977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (14))){
var inst_45139 = (state_45178[(9)]);
var inst_45143 = (state_45178[(11)]);
var inst_45156 = (state_45178[(2)]);
var inst_45157 = [];
var inst_45158 = inst_45157.push(inst_45139);
var inst_45135 = inst_45157;
var inst_45136 = inst_45143;
var state_45178__$1 = (function (){var statearr_45201 = state_45178;
(statearr_45201[(14)] = inst_45158);

(statearr_45201[(7)] = inst_45135);

(statearr_45201[(15)] = inst_45156);

(statearr_45201[(8)] = inst_45136);

return statearr_45201;
})();
var statearr_45202_45978 = state_45178__$1;
(statearr_45202_45978[(2)] = null);

(statearr_45202_45978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (16))){
var state_45178__$1 = state_45178;
var statearr_45203_45979 = state_45178__$1;
(statearr_45203_45979[(2)] = null);

(statearr_45203_45979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (10))){
var inst_45149 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
if(cljs.core.truth_(inst_45149)){
var statearr_45204_45980 = state_45178__$1;
(statearr_45204_45980[(1)] = (11));

} else {
var statearr_45205_45981 = state_45178__$1;
(statearr_45205_45981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (18))){
var inst_45168 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45206_45982 = state_45178__$1;
(statearr_45206_45982[(2)] = inst_45168);

(statearr_45206_45982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (8))){
var inst_45144 = (state_45178[(13)]);
var state_45178__$1 = state_45178;
var statearr_45207_45983 = state_45178__$1;
(statearr_45207_45983[(2)] = inst_45144);

(statearr_45207_45983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42745__auto__ = null;
var cljs$core$async$state_machine__42745__auto____0 = (function (){
var statearr_45208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45208[(0)] = cljs$core$async$state_machine__42745__auto__);

(statearr_45208[(1)] = (1));

return statearr_45208;
});
var cljs$core$async$state_machine__42745__auto____1 = (function (state_45178){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_45178);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e45209){var ex__42748__auto__ = e45209;
var statearr_45210_45986 = state_45178;
(statearr_45210_45986[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_45178[(4)]))){
var statearr_45211_45987 = state_45178;
(statearr_45211_45987[(1)] = cljs.core.first((state_45178[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45988 = state_45178;
state_45178 = G__45988;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
cljs$core$async$state_machine__42745__auto__ = function(state_45178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42745__auto____1.call(this,state_45178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42745__auto____0;
cljs$core$async$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42745__auto____1;
return cljs$core$async$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_45212 = f__42902__auto__();
(statearr_45212[(6)] = c__42901__auto___45956);

return statearr_45212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
