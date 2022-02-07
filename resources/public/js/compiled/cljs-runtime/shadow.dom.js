goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46188 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46188(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46193 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46193(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45265 = coll;
var G__45266 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45265,G__45266) : shadow.dom.lazy_native_coll_seq.call(null,G__45265,G__45266));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45290 = arguments.length;
switch (G__45290) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45304 = arguments.length;
switch (G__45304) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45310 = arguments.length;
switch (G__45310) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45326 = arguments.length;
switch (G__45326) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45349 = arguments.length;
switch (G__45349) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45363 = arguments.length;
switch (G__45363) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45369){if((e45369 instanceof Object)){
var e = e45369;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45369;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45384 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45386 = null;
var count__45387 = (0);
var i__45388 = (0);
while(true){
if((i__45388 < count__45387)){
var el = chunk__45386.cljs$core$IIndexed$_nth$arity$2(null,i__45388);
var handler_46205__$1 = ((function (seq__45384,chunk__45386,count__45387,i__45388,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45384,chunk__45386,count__45387,i__45388,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46205__$1);


var G__46206 = seq__45384;
var G__46207 = chunk__45386;
var G__46208 = count__45387;
var G__46209 = (i__45388 + (1));
seq__45384 = G__46206;
chunk__45386 = G__46207;
count__45387 = G__46208;
i__45388 = G__46209;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45384);
if(temp__5753__auto__){
var seq__45384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45384__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45384__$1);
var G__46210 = cljs.core.chunk_rest(seq__45384__$1);
var G__46211 = c__4679__auto__;
var G__46212 = cljs.core.count(c__4679__auto__);
var G__46213 = (0);
seq__45384 = G__46210;
chunk__45386 = G__46211;
count__45387 = G__46212;
i__45388 = G__46213;
continue;
} else {
var el = cljs.core.first(seq__45384__$1);
var handler_46214__$1 = ((function (seq__45384,chunk__45386,count__45387,i__45388,el,seq__45384__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45384,chunk__45386,count__45387,i__45388,el,seq__45384__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46214__$1);


var G__46215 = cljs.core.next(seq__45384__$1);
var G__46216 = null;
var G__46217 = (0);
var G__46218 = (0);
seq__45384 = G__46215;
chunk__45386 = G__46216;
count__45387 = G__46217;
i__45388 = G__46218;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45407 = arguments.length;
switch (G__45407) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45420 = cljs.core.seq(events);
var chunk__45422 = null;
var count__45423 = (0);
var i__45424 = (0);
while(true){
if((i__45424 < count__45423)){
var vec__45446 = chunk__45422.cljs$core$IIndexed$_nth$arity$2(null,i__45424);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45446,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46220 = seq__45420;
var G__46221 = chunk__45422;
var G__46222 = count__45423;
var G__46223 = (i__45424 + (1));
seq__45420 = G__46220;
chunk__45422 = G__46221;
count__45423 = G__46222;
i__45424 = G__46223;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45420);
if(temp__5753__auto__){
var seq__45420__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45420__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45420__$1);
var G__46224 = cljs.core.chunk_rest(seq__45420__$1);
var G__46225 = c__4679__auto__;
var G__46226 = cljs.core.count(c__4679__auto__);
var G__46227 = (0);
seq__45420 = G__46224;
chunk__45422 = G__46225;
count__45423 = G__46226;
i__45424 = G__46227;
continue;
} else {
var vec__45455 = cljs.core.first(seq__45420__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45455,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46229 = cljs.core.next(seq__45420__$1);
var G__46230 = null;
var G__46231 = (0);
var G__46232 = (0);
seq__45420 = G__46229;
chunk__45422 = G__46230;
count__45423 = G__46231;
i__45424 = G__46232;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45461 = cljs.core.seq(styles);
var chunk__45462 = null;
var count__45463 = (0);
var i__45464 = (0);
while(true){
if((i__45464 < count__45463)){
var vec__45476 = chunk__45462.cljs$core$IIndexed$_nth$arity$2(null,i__45464);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45476,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46234 = seq__45461;
var G__46235 = chunk__45462;
var G__46236 = count__45463;
var G__46237 = (i__45464 + (1));
seq__45461 = G__46234;
chunk__45462 = G__46235;
count__45463 = G__46236;
i__45464 = G__46237;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45461);
if(temp__5753__auto__){
var seq__45461__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45461__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45461__$1);
var G__46238 = cljs.core.chunk_rest(seq__45461__$1);
var G__46239 = c__4679__auto__;
var G__46240 = cljs.core.count(c__4679__auto__);
var G__46241 = (0);
seq__45461 = G__46238;
chunk__45462 = G__46239;
count__45463 = G__46240;
i__45464 = G__46241;
continue;
} else {
var vec__45489 = cljs.core.first(seq__45461__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45489,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46242 = cljs.core.next(seq__45461__$1);
var G__46243 = null;
var G__46244 = (0);
var G__46245 = (0);
seq__45461 = G__46242;
chunk__45462 = G__46243;
count__45463 = G__46244;
i__45464 = G__46245;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45502_46246 = key;
var G__45502_46247__$1 = (((G__45502_46246 instanceof cljs.core.Keyword))?G__45502_46246.fqn:null);
switch (G__45502_46247__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46249 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_46249,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_46249,"aria-");
}
})())){
el.setAttribute(ks_46249,value);
} else {
(el[ks_46249] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45539){
var map__45540 = p__45539;
var map__45540__$1 = cljs.core.__destructure_map(map__45540);
var props = map__45540__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45540__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45542 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45542,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45542,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45542,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45548 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45548,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45548;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45554 = arguments.length;
switch (G__45554) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45570){
var vec__45572 = p__45570;
var seq__45573 = cljs.core.seq(vec__45572);
var first__45574 = cljs.core.first(seq__45573);
var seq__45573__$1 = cljs.core.next(seq__45573);
var nn = first__45574;
var first__45574__$1 = cljs.core.first(seq__45573__$1);
var seq__45573__$2 = cljs.core.next(seq__45573__$1);
var np = first__45574__$1;
var nc = seq__45573__$2;
var node = vec__45572;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45580 = nn;
var G__45581 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45580,G__45581) : create_fn.call(null,G__45580,G__45581));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45584 = nn;
var G__45585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45584,G__45585) : create_fn.call(null,G__45584,G__45585));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45589 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45589,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45589,(1),null);
var seq__45594_46261 = cljs.core.seq(node_children);
var chunk__45595_46262 = null;
var count__45596_46263 = (0);
var i__45597_46264 = (0);
while(true){
if((i__45597_46264 < count__45596_46263)){
var child_struct_46265 = chunk__45595_46262.cljs$core$IIndexed$_nth$arity$2(null,i__45597_46264);
var children_46266 = shadow.dom.dom_node(child_struct_46265);
if(cljs.core.seq_QMARK_(children_46266)){
var seq__45633_46267 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46266));
var chunk__45635_46268 = null;
var count__45636_46269 = (0);
var i__45637_46270 = (0);
while(true){
if((i__45637_46270 < count__45636_46269)){
var child_46272 = chunk__45635_46268.cljs$core$IIndexed$_nth$arity$2(null,i__45637_46270);
if(cljs.core.truth_(child_46272)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46272);


var G__46273 = seq__45633_46267;
var G__46274 = chunk__45635_46268;
var G__46275 = count__45636_46269;
var G__46276 = (i__45637_46270 + (1));
seq__45633_46267 = G__46273;
chunk__45635_46268 = G__46274;
count__45636_46269 = G__46275;
i__45637_46270 = G__46276;
continue;
} else {
var G__46277 = seq__45633_46267;
var G__46278 = chunk__45635_46268;
var G__46279 = count__45636_46269;
var G__46280 = (i__45637_46270 + (1));
seq__45633_46267 = G__46277;
chunk__45635_46268 = G__46278;
count__45636_46269 = G__46279;
i__45637_46270 = G__46280;
continue;
}
} else {
var temp__5753__auto___46281 = cljs.core.seq(seq__45633_46267);
if(temp__5753__auto___46281){
var seq__45633_46282__$1 = temp__5753__auto___46281;
if(cljs.core.chunked_seq_QMARK_(seq__45633_46282__$1)){
var c__4679__auto___46283 = cljs.core.chunk_first(seq__45633_46282__$1);
var G__46284 = cljs.core.chunk_rest(seq__45633_46282__$1);
var G__46285 = c__4679__auto___46283;
var G__46286 = cljs.core.count(c__4679__auto___46283);
var G__46287 = (0);
seq__45633_46267 = G__46284;
chunk__45635_46268 = G__46285;
count__45636_46269 = G__46286;
i__45637_46270 = G__46287;
continue;
} else {
var child_46290 = cljs.core.first(seq__45633_46282__$1);
if(cljs.core.truth_(child_46290)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46290);


var G__46291 = cljs.core.next(seq__45633_46282__$1);
var G__46292 = null;
var G__46293 = (0);
var G__46294 = (0);
seq__45633_46267 = G__46291;
chunk__45635_46268 = G__46292;
count__45636_46269 = G__46293;
i__45637_46270 = G__46294;
continue;
} else {
var G__46297 = cljs.core.next(seq__45633_46282__$1);
var G__46298 = null;
var G__46299 = (0);
var G__46300 = (0);
seq__45633_46267 = G__46297;
chunk__45635_46268 = G__46298;
count__45636_46269 = G__46299;
i__45637_46270 = G__46300;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46266);
}


var G__46301 = seq__45594_46261;
var G__46302 = chunk__45595_46262;
var G__46303 = count__45596_46263;
var G__46304 = (i__45597_46264 + (1));
seq__45594_46261 = G__46301;
chunk__45595_46262 = G__46302;
count__45596_46263 = G__46303;
i__45597_46264 = G__46304;
continue;
} else {
var temp__5753__auto___46305 = cljs.core.seq(seq__45594_46261);
if(temp__5753__auto___46305){
var seq__45594_46306__$1 = temp__5753__auto___46305;
if(cljs.core.chunked_seq_QMARK_(seq__45594_46306__$1)){
var c__4679__auto___46307 = cljs.core.chunk_first(seq__45594_46306__$1);
var G__46308 = cljs.core.chunk_rest(seq__45594_46306__$1);
var G__46309 = c__4679__auto___46307;
var G__46310 = cljs.core.count(c__4679__auto___46307);
var G__46311 = (0);
seq__45594_46261 = G__46308;
chunk__45595_46262 = G__46309;
count__45596_46263 = G__46310;
i__45597_46264 = G__46311;
continue;
} else {
var child_struct_46312 = cljs.core.first(seq__45594_46306__$1);
var children_46313 = shadow.dom.dom_node(child_struct_46312);
if(cljs.core.seq_QMARK_(children_46313)){
var seq__45656_46314 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46313));
var chunk__45658_46315 = null;
var count__45659_46316 = (0);
var i__45660_46317 = (0);
while(true){
if((i__45660_46317 < count__45659_46316)){
var child_46319 = chunk__45658_46315.cljs$core$IIndexed$_nth$arity$2(null,i__45660_46317);
if(cljs.core.truth_(child_46319)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46319);


var G__46320 = seq__45656_46314;
var G__46321 = chunk__45658_46315;
var G__46322 = count__45659_46316;
var G__46323 = (i__45660_46317 + (1));
seq__45656_46314 = G__46320;
chunk__45658_46315 = G__46321;
count__45659_46316 = G__46322;
i__45660_46317 = G__46323;
continue;
} else {
var G__46324 = seq__45656_46314;
var G__46325 = chunk__45658_46315;
var G__46326 = count__45659_46316;
var G__46327 = (i__45660_46317 + (1));
seq__45656_46314 = G__46324;
chunk__45658_46315 = G__46325;
count__45659_46316 = G__46326;
i__45660_46317 = G__46327;
continue;
}
} else {
var temp__5753__auto___46328__$1 = cljs.core.seq(seq__45656_46314);
if(temp__5753__auto___46328__$1){
var seq__45656_46329__$1 = temp__5753__auto___46328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45656_46329__$1)){
var c__4679__auto___46330 = cljs.core.chunk_first(seq__45656_46329__$1);
var G__46331 = cljs.core.chunk_rest(seq__45656_46329__$1);
var G__46332 = c__4679__auto___46330;
var G__46333 = cljs.core.count(c__4679__auto___46330);
var G__46334 = (0);
seq__45656_46314 = G__46331;
chunk__45658_46315 = G__46332;
count__45659_46316 = G__46333;
i__45660_46317 = G__46334;
continue;
} else {
var child_46335 = cljs.core.first(seq__45656_46329__$1);
if(cljs.core.truth_(child_46335)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46335);


var G__46336 = cljs.core.next(seq__45656_46329__$1);
var G__46337 = null;
var G__46338 = (0);
var G__46339 = (0);
seq__45656_46314 = G__46336;
chunk__45658_46315 = G__46337;
count__45659_46316 = G__46338;
i__45660_46317 = G__46339;
continue;
} else {
var G__46341 = cljs.core.next(seq__45656_46329__$1);
var G__46342 = null;
var G__46343 = (0);
var G__46344 = (0);
seq__45656_46314 = G__46341;
chunk__45658_46315 = G__46342;
count__45659_46316 = G__46343;
i__45660_46317 = G__46344;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46313);
}


var G__46346 = cljs.core.next(seq__45594_46306__$1);
var G__46347 = null;
var G__46348 = (0);
var G__46349 = (0);
seq__45594_46261 = G__46346;
chunk__45595_46262 = G__46347;
count__45596_46263 = G__46348;
i__45597_46264 = G__46349;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45690 = cljs.core.seq(node);
var chunk__45691 = null;
var count__45692 = (0);
var i__45693 = (0);
while(true){
if((i__45693 < count__45692)){
var n = chunk__45691.cljs$core$IIndexed$_nth$arity$2(null,i__45693);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46353 = seq__45690;
var G__46354 = chunk__45691;
var G__46355 = count__45692;
var G__46356 = (i__45693 + (1));
seq__45690 = G__46353;
chunk__45691 = G__46354;
count__45692 = G__46355;
i__45693 = G__46356;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45690);
if(temp__5753__auto__){
var seq__45690__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45690__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45690__$1);
var G__46357 = cljs.core.chunk_rest(seq__45690__$1);
var G__46358 = c__4679__auto__;
var G__46359 = cljs.core.count(c__4679__auto__);
var G__46360 = (0);
seq__45690 = G__46357;
chunk__45691 = G__46358;
count__45692 = G__46359;
i__45693 = G__46360;
continue;
} else {
var n = cljs.core.first(seq__45690__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46361 = cljs.core.next(seq__45690__$1);
var G__46362 = null;
var G__46363 = (0);
var G__46364 = (0);
seq__45690 = G__46361;
chunk__45691 = G__46362;
count__45692 = G__46363;
i__45693 = G__46364;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45699 = arguments.length;
switch (G__45699) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45705 = arguments.length;
switch (G__45705) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45721 = arguments.length;
switch (G__45721) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46383 = arguments.length;
var i__4865__auto___46384 = (0);
while(true){
if((i__4865__auto___46384 < len__4864__auto___46383)){
args__4870__auto__.push((arguments[i__4865__auto___46384]));

var G__46385 = (i__4865__auto___46384 + (1));
i__4865__auto___46384 = G__46385;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45746_46386 = cljs.core.seq(nodes);
var chunk__45747_46387 = null;
var count__45748_46388 = (0);
var i__45749_46389 = (0);
while(true){
if((i__45749_46389 < count__45748_46388)){
var node_46390 = chunk__45747_46387.cljs$core$IIndexed$_nth$arity$2(null,i__45749_46389);
fragment.appendChild(shadow.dom._to_dom(node_46390));


var G__46391 = seq__45746_46386;
var G__46392 = chunk__45747_46387;
var G__46393 = count__45748_46388;
var G__46394 = (i__45749_46389 + (1));
seq__45746_46386 = G__46391;
chunk__45747_46387 = G__46392;
count__45748_46388 = G__46393;
i__45749_46389 = G__46394;
continue;
} else {
var temp__5753__auto___46397 = cljs.core.seq(seq__45746_46386);
if(temp__5753__auto___46397){
var seq__45746_46398__$1 = temp__5753__auto___46397;
if(cljs.core.chunked_seq_QMARK_(seq__45746_46398__$1)){
var c__4679__auto___46399 = cljs.core.chunk_first(seq__45746_46398__$1);
var G__46400 = cljs.core.chunk_rest(seq__45746_46398__$1);
var G__46401 = c__4679__auto___46399;
var G__46402 = cljs.core.count(c__4679__auto___46399);
var G__46403 = (0);
seq__45746_46386 = G__46400;
chunk__45747_46387 = G__46401;
count__45748_46388 = G__46402;
i__45749_46389 = G__46403;
continue;
} else {
var node_46404 = cljs.core.first(seq__45746_46398__$1);
fragment.appendChild(shadow.dom._to_dom(node_46404));


var G__46405 = cljs.core.next(seq__45746_46398__$1);
var G__46406 = null;
var G__46407 = (0);
var G__46408 = (0);
seq__45746_46386 = G__46405;
chunk__45747_46387 = G__46406;
count__45748_46388 = G__46407;
i__45749_46389 = G__46408;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45740){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45740));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45763_46409 = cljs.core.seq(scripts);
var chunk__45764_46410 = null;
var count__45765_46411 = (0);
var i__45766_46412 = (0);
while(true){
if((i__45766_46412 < count__45765_46411)){
var vec__45779_46413 = chunk__45764_46410.cljs$core$IIndexed$_nth$arity$2(null,i__45766_46412);
var script_tag_46414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45779_46413,(0),null);
var script_body_46415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45779_46413,(1),null);
eval(script_body_46415);


var G__46416 = seq__45763_46409;
var G__46417 = chunk__45764_46410;
var G__46418 = count__45765_46411;
var G__46419 = (i__45766_46412 + (1));
seq__45763_46409 = G__46416;
chunk__45764_46410 = G__46417;
count__45765_46411 = G__46418;
i__45766_46412 = G__46419;
continue;
} else {
var temp__5753__auto___46420 = cljs.core.seq(seq__45763_46409);
if(temp__5753__auto___46420){
var seq__45763_46421__$1 = temp__5753__auto___46420;
if(cljs.core.chunked_seq_QMARK_(seq__45763_46421__$1)){
var c__4679__auto___46422 = cljs.core.chunk_first(seq__45763_46421__$1);
var G__46423 = cljs.core.chunk_rest(seq__45763_46421__$1);
var G__46424 = c__4679__auto___46422;
var G__46425 = cljs.core.count(c__4679__auto___46422);
var G__46426 = (0);
seq__45763_46409 = G__46423;
chunk__45764_46410 = G__46424;
count__45765_46411 = G__46425;
i__45766_46412 = G__46426;
continue;
} else {
var vec__45785_46430 = cljs.core.first(seq__45763_46421__$1);
var script_tag_46431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45785_46430,(0),null);
var script_body_46432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45785_46430,(1),null);
eval(script_body_46432);


var G__46433 = cljs.core.next(seq__45763_46421__$1);
var G__46434 = null;
var G__46435 = (0);
var G__46436 = (0);
seq__45763_46409 = G__46433;
chunk__45764_46410 = G__46434;
count__45765_46411 = G__46435;
i__45766_46412 = G__46436;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45792){
var vec__45793 = p__45792;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45808 = arguments.length;
switch (G__45808) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45830 = cljs.core.seq(style_keys);
var chunk__45831 = null;
var count__45832 = (0);
var i__45833 = (0);
while(true){
if((i__45833 < count__45832)){
var it = chunk__45831.cljs$core$IIndexed$_nth$arity$2(null,i__45833);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46445 = seq__45830;
var G__46446 = chunk__45831;
var G__46447 = count__45832;
var G__46448 = (i__45833 + (1));
seq__45830 = G__46445;
chunk__45831 = G__46446;
count__45832 = G__46447;
i__45833 = G__46448;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45830);
if(temp__5753__auto__){
var seq__45830__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45830__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45830__$1);
var G__46449 = cljs.core.chunk_rest(seq__45830__$1);
var G__46450 = c__4679__auto__;
var G__46451 = cljs.core.count(c__4679__auto__);
var G__46452 = (0);
seq__45830 = G__46449;
chunk__45831 = G__46450;
count__45832 = G__46451;
i__45833 = G__46452;
continue;
} else {
var it = cljs.core.first(seq__45830__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46454 = cljs.core.next(seq__45830__$1);
var G__46455 = null;
var G__46456 = (0);
var G__46457 = (0);
seq__45830 = G__46454;
chunk__45831 = G__46455;
count__45832 = G__46456;
i__45833 = G__46457;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45836,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45844 = k45836;
var G__45844__$1 = (((G__45844 instanceof cljs.core.Keyword))?G__45844.fqn:null);
switch (G__45844__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45836,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45849){
var vec__45850 = p__45849;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45850,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45850,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45835){
var self__ = this;
var G__45835__$1 = this;
return (new cljs.core.RecordIter((0),G__45835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45837,other45838){
var self__ = this;
var this45837__$1 = this;
return (((!((other45838 == null)))) && ((((this45837__$1.constructor === other45838.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45837__$1.x,other45838.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45837__$1.y,other45838.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45837__$1.__extmap,other45838.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45836){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45881 = k45836;
var G__45881__$1 = (((G__45881 instanceof cljs.core.Keyword))?G__45881.fqn:null);
switch (G__45881__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45836);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45835){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45885 = cljs.core.keyword_identical_QMARK_;
var expr__45886 = k__4511__auto__;
if(cljs.core.truth_((pred__45885.cljs$core$IFn$_invoke$arity$2 ? pred__45885.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45886) : pred__45885.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45886)))){
return (new shadow.dom.Coordinate(G__45835,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45885.cljs$core$IFn$_invoke$arity$2 ? pred__45885.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45886) : pred__45885.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45886)))){
return (new shadow.dom.Coordinate(self__.x,G__45835,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45835),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45835){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45835,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45839){
var extmap__4542__auto__ = (function (){var G__45910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45839,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45839)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45910);
} else {
return G__45910;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45839),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45839),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45920,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45929 = k45920;
var G__45929__$1 = (((G__45929 instanceof cljs.core.Keyword))?G__45929.fqn:null);
switch (G__45929__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45920,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45935){
var vec__45937 = p__45935;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45937,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45937,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45919){
var self__ = this;
var G__45919__$1 = this;
return (new cljs.core.RecordIter((0),G__45919__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45921,other45922){
var self__ = this;
var this45921__$1 = this;
return (((!((other45922 == null)))) && ((((this45921__$1.constructor === other45922.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45921__$1.w,other45922.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45921__$1.h,other45922.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45921__$1.__extmap,other45922.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45920){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45965 = k45920;
var G__45965__$1 = (((G__45965 instanceof cljs.core.Keyword))?G__45965.fqn:null);
switch (G__45965__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45920);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45919){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45971 = cljs.core.keyword_identical_QMARK_;
var expr__45972 = k__4511__auto__;
if(cljs.core.truth_((pred__45971.cljs$core$IFn$_invoke$arity$2 ? pred__45971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45972) : pred__45971.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45972)))){
return (new shadow.dom.Size(G__45919,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45971.cljs$core$IFn$_invoke$arity$2 ? pred__45971.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45972) : pred__45971.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45972)))){
return (new shadow.dom.Size(self__.w,G__45919,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45919),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45919){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45919,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45924){
var extmap__4542__auto__ = (function (){var G__45990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45924,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45924)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45990);
} else {
return G__45990;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45924),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45924),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__46508 = (i + (1));
var G__46509 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46508;
ret = G__46509;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46016){
var vec__46017 = p__46016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46017,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46021 = arguments.length;
switch (G__46021) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46519 = ps;
var G__46520 = (i + (1));
el__$1 = G__46519;
i = G__46520;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46030 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46033_46524 = cljs.core.seq(props);
var chunk__46034_46525 = null;
var count__46035_46526 = (0);
var i__46036_46527 = (0);
while(true){
if((i__46036_46527 < count__46035_46526)){
var vec__46048_46528 = chunk__46034_46525.cljs$core$IIndexed$_nth$arity$2(null,i__46036_46527);
var k_46529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46048_46528,(0),null);
var v_46530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46048_46528,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46529);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46529),v_46530);


var G__46535 = seq__46033_46524;
var G__46536 = chunk__46034_46525;
var G__46537 = count__46035_46526;
var G__46538 = (i__46036_46527 + (1));
seq__46033_46524 = G__46535;
chunk__46034_46525 = G__46536;
count__46035_46526 = G__46537;
i__46036_46527 = G__46538;
continue;
} else {
var temp__5753__auto___46539 = cljs.core.seq(seq__46033_46524);
if(temp__5753__auto___46539){
var seq__46033_46540__$1 = temp__5753__auto___46539;
if(cljs.core.chunked_seq_QMARK_(seq__46033_46540__$1)){
var c__4679__auto___46541 = cljs.core.chunk_first(seq__46033_46540__$1);
var G__46542 = cljs.core.chunk_rest(seq__46033_46540__$1);
var G__46543 = c__4679__auto___46541;
var G__46544 = cljs.core.count(c__4679__auto___46541);
var G__46545 = (0);
seq__46033_46524 = G__46542;
chunk__46034_46525 = G__46543;
count__46035_46526 = G__46544;
i__46036_46527 = G__46545;
continue;
} else {
var vec__46053_46546 = cljs.core.first(seq__46033_46540__$1);
var k_46547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46053_46546,(0),null);
var v_46548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46053_46546,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46547);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46547),v_46548);


var G__46553 = cljs.core.next(seq__46033_46540__$1);
var G__46554 = null;
var G__46555 = (0);
var G__46556 = (0);
seq__46033_46524 = G__46553;
chunk__46034_46525 = G__46554;
count__46035_46526 = G__46555;
i__46036_46527 = G__46556;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46065 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46065,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46065,(1),null);
var seq__46068_46557 = cljs.core.seq(node_children);
var chunk__46070_46558 = null;
var count__46071_46559 = (0);
var i__46072_46560 = (0);
while(true){
if((i__46072_46560 < count__46071_46559)){
var child_struct_46561 = chunk__46070_46558.cljs$core$IIndexed$_nth$arity$2(null,i__46072_46560);
if((!((child_struct_46561 == null)))){
if(typeof child_struct_46561 === 'string'){
var text_46562 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46562),child_struct_46561].join(''));
} else {
var children_46564 = shadow.dom.svg_node(child_struct_46561);
if(cljs.core.seq_QMARK_(children_46564)){
var seq__46106_46565 = cljs.core.seq(children_46564);
var chunk__46108_46566 = null;
var count__46109_46567 = (0);
var i__46110_46568 = (0);
while(true){
if((i__46110_46568 < count__46109_46567)){
var child_46572 = chunk__46108_46566.cljs$core$IIndexed$_nth$arity$2(null,i__46110_46568);
if(cljs.core.truth_(child_46572)){
node.appendChild(child_46572);


var G__46573 = seq__46106_46565;
var G__46574 = chunk__46108_46566;
var G__46575 = count__46109_46567;
var G__46576 = (i__46110_46568 + (1));
seq__46106_46565 = G__46573;
chunk__46108_46566 = G__46574;
count__46109_46567 = G__46575;
i__46110_46568 = G__46576;
continue;
} else {
var G__46577 = seq__46106_46565;
var G__46578 = chunk__46108_46566;
var G__46579 = count__46109_46567;
var G__46580 = (i__46110_46568 + (1));
seq__46106_46565 = G__46577;
chunk__46108_46566 = G__46578;
count__46109_46567 = G__46579;
i__46110_46568 = G__46580;
continue;
}
} else {
var temp__5753__auto___46581 = cljs.core.seq(seq__46106_46565);
if(temp__5753__auto___46581){
var seq__46106_46582__$1 = temp__5753__auto___46581;
if(cljs.core.chunked_seq_QMARK_(seq__46106_46582__$1)){
var c__4679__auto___46585 = cljs.core.chunk_first(seq__46106_46582__$1);
var G__46586 = cljs.core.chunk_rest(seq__46106_46582__$1);
var G__46587 = c__4679__auto___46585;
var G__46588 = cljs.core.count(c__4679__auto___46585);
var G__46589 = (0);
seq__46106_46565 = G__46586;
chunk__46108_46566 = G__46587;
count__46109_46567 = G__46588;
i__46110_46568 = G__46589;
continue;
} else {
var child_46590 = cljs.core.first(seq__46106_46582__$1);
if(cljs.core.truth_(child_46590)){
node.appendChild(child_46590);


var G__46591 = cljs.core.next(seq__46106_46582__$1);
var G__46592 = null;
var G__46593 = (0);
var G__46594 = (0);
seq__46106_46565 = G__46591;
chunk__46108_46566 = G__46592;
count__46109_46567 = G__46593;
i__46110_46568 = G__46594;
continue;
} else {
var G__46595 = cljs.core.next(seq__46106_46582__$1);
var G__46596 = null;
var G__46597 = (0);
var G__46598 = (0);
seq__46106_46565 = G__46595;
chunk__46108_46566 = G__46596;
count__46109_46567 = G__46597;
i__46110_46568 = G__46598;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46564);
}
}


var G__46599 = seq__46068_46557;
var G__46600 = chunk__46070_46558;
var G__46601 = count__46071_46559;
var G__46602 = (i__46072_46560 + (1));
seq__46068_46557 = G__46599;
chunk__46070_46558 = G__46600;
count__46071_46559 = G__46601;
i__46072_46560 = G__46602;
continue;
} else {
var G__46603 = seq__46068_46557;
var G__46604 = chunk__46070_46558;
var G__46605 = count__46071_46559;
var G__46606 = (i__46072_46560 + (1));
seq__46068_46557 = G__46603;
chunk__46070_46558 = G__46604;
count__46071_46559 = G__46605;
i__46072_46560 = G__46606;
continue;
}
} else {
var temp__5753__auto___46609 = cljs.core.seq(seq__46068_46557);
if(temp__5753__auto___46609){
var seq__46068_46610__$1 = temp__5753__auto___46609;
if(cljs.core.chunked_seq_QMARK_(seq__46068_46610__$1)){
var c__4679__auto___46611 = cljs.core.chunk_first(seq__46068_46610__$1);
var G__46612 = cljs.core.chunk_rest(seq__46068_46610__$1);
var G__46613 = c__4679__auto___46611;
var G__46614 = cljs.core.count(c__4679__auto___46611);
var G__46615 = (0);
seq__46068_46557 = G__46612;
chunk__46070_46558 = G__46613;
count__46071_46559 = G__46614;
i__46072_46560 = G__46615;
continue;
} else {
var child_struct_46616 = cljs.core.first(seq__46068_46610__$1);
if((!((child_struct_46616 == null)))){
if(typeof child_struct_46616 === 'string'){
var text_46617 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46617),child_struct_46616].join(''));
} else {
var children_46618 = shadow.dom.svg_node(child_struct_46616);
if(cljs.core.seq_QMARK_(children_46618)){
var seq__46122_46619 = cljs.core.seq(children_46618);
var chunk__46124_46620 = null;
var count__46125_46621 = (0);
var i__46126_46622 = (0);
while(true){
if((i__46126_46622 < count__46125_46621)){
var child_46623 = chunk__46124_46620.cljs$core$IIndexed$_nth$arity$2(null,i__46126_46622);
if(cljs.core.truth_(child_46623)){
node.appendChild(child_46623);


var G__46624 = seq__46122_46619;
var G__46625 = chunk__46124_46620;
var G__46626 = count__46125_46621;
var G__46627 = (i__46126_46622 + (1));
seq__46122_46619 = G__46624;
chunk__46124_46620 = G__46625;
count__46125_46621 = G__46626;
i__46126_46622 = G__46627;
continue;
} else {
var G__46628 = seq__46122_46619;
var G__46629 = chunk__46124_46620;
var G__46630 = count__46125_46621;
var G__46631 = (i__46126_46622 + (1));
seq__46122_46619 = G__46628;
chunk__46124_46620 = G__46629;
count__46125_46621 = G__46630;
i__46126_46622 = G__46631;
continue;
}
} else {
var temp__5753__auto___46638__$1 = cljs.core.seq(seq__46122_46619);
if(temp__5753__auto___46638__$1){
var seq__46122_46639__$1 = temp__5753__auto___46638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46122_46639__$1)){
var c__4679__auto___46640 = cljs.core.chunk_first(seq__46122_46639__$1);
var G__46641 = cljs.core.chunk_rest(seq__46122_46639__$1);
var G__46642 = c__4679__auto___46640;
var G__46643 = cljs.core.count(c__4679__auto___46640);
var G__46644 = (0);
seq__46122_46619 = G__46641;
chunk__46124_46620 = G__46642;
count__46125_46621 = G__46643;
i__46126_46622 = G__46644;
continue;
} else {
var child_46645 = cljs.core.first(seq__46122_46639__$1);
if(cljs.core.truth_(child_46645)){
node.appendChild(child_46645);


var G__46646 = cljs.core.next(seq__46122_46639__$1);
var G__46647 = null;
var G__46648 = (0);
var G__46649 = (0);
seq__46122_46619 = G__46646;
chunk__46124_46620 = G__46647;
count__46125_46621 = G__46648;
i__46126_46622 = G__46649;
continue;
} else {
var G__46650 = cljs.core.next(seq__46122_46639__$1);
var G__46651 = null;
var G__46652 = (0);
var G__46653 = (0);
seq__46122_46619 = G__46650;
chunk__46124_46620 = G__46651;
count__46125_46621 = G__46652;
i__46126_46622 = G__46653;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46618);
}
}


var G__46657 = cljs.core.next(seq__46068_46610__$1);
var G__46658 = null;
var G__46659 = (0);
var G__46660 = (0);
seq__46068_46557 = G__46657;
chunk__46070_46558 = G__46658;
count__46071_46559 = G__46659;
i__46072_46560 = G__46660;
continue;
} else {
var G__46661 = cljs.core.next(seq__46068_46610__$1);
var G__46662 = null;
var G__46663 = (0);
var G__46664 = (0);
seq__46068_46557 = G__46661;
chunk__46070_46558 = G__46662;
count__46071_46559 = G__46663;
i__46072_46560 = G__46664;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46665 = arguments.length;
var i__4865__auto___46666 = (0);
while(true){
if((i__4865__auto___46666 < len__4864__auto___46665)){
args__4870__auto__.push((arguments[i__4865__auto___46666]));

var G__46667 = (i__4865__auto___46666 + (1));
i__4865__auto___46666 = G__46667;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46144){
var G__46145 = cljs.core.first(seq46144);
var seq46144__$1 = cljs.core.next(seq46144);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46145,seq46144__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46152 = arguments.length;
switch (G__46152) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__42901__auto___46676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42902__auto__ = (function (){var switch__42744__auto__ = (function (state_46165){
var state_val_46166 = (state_46165[(1)]);
if((state_val_46166 === (1))){
var state_46165__$1 = state_46165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46165__$1,(2),once_or_cleanup);
} else {
if((state_val_46166 === (2))){
var inst_46162 = (state_46165[(2)]);
var inst_46163 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46165__$1 = (function (){var statearr_46170 = state_46165;
(statearr_46170[(7)] = inst_46162);

return statearr_46170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46165__$1,inst_46163);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42745__auto__ = null;
var shadow$dom$state_machine__42745__auto____0 = (function (){
var statearr_46175 = [null,null,null,null,null,null,null,null];
(statearr_46175[(0)] = shadow$dom$state_machine__42745__auto__);

(statearr_46175[(1)] = (1));

return statearr_46175;
});
var shadow$dom$state_machine__42745__auto____1 = (function (state_46165){
while(true){
var ret_value__42746__auto__ = (function (){try{while(true){
var result__42747__auto__ = switch__42744__auto__(state_46165);
if(cljs.core.keyword_identical_QMARK_(result__42747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42747__auto__;
}
break;
}
}catch (e46176){var ex__42748__auto__ = e46176;
var statearr_46177_46677 = state_46165;
(statearr_46177_46677[(2)] = ex__42748__auto__);


if(cljs.core.seq((state_46165[(4)]))){
var statearr_46178_46681 = state_46165;
(statearr_46178_46681[(1)] = cljs.core.first((state_46165[(4)])));

} else {
throw ex__42748__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46682 = state_46165;
state_46165 = G__46682;
continue;
} else {
return ret_value__42746__auto__;
}
break;
}
});
shadow$dom$state_machine__42745__auto__ = function(state_46165){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42745__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42745__auto____1.call(this,state_46165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42745__auto____0;
shadow$dom$state_machine__42745__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42745__auto____1;
return shadow$dom$state_machine__42745__auto__;
})()
})();
var state__42903__auto__ = (function (){var statearr_46179 = f__42902__auto__();
(statearr_46179[(6)] = c__42901__auto___46676);

return statearr_46179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42903__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
