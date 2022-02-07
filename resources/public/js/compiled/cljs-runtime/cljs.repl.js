goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43170){
var map__43174 = p__43170;
var map__43174__$1 = cljs.core.__destructure_map(map__43174);
var m = map__43174__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43174__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43177_43471 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43178_43472 = null;
var count__43179_43473 = (0);
var i__43180_43474 = (0);
while(true){
if((i__43180_43474 < count__43179_43473)){
var f_43476 = chunk__43178_43472.cljs$core$IIndexed$_nth$arity$2(null,i__43180_43474);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43476], 0));


var G__43477 = seq__43177_43471;
var G__43478 = chunk__43178_43472;
var G__43479 = count__43179_43473;
var G__43480 = (i__43180_43474 + (1));
seq__43177_43471 = G__43477;
chunk__43178_43472 = G__43478;
count__43179_43473 = G__43479;
i__43180_43474 = G__43480;
continue;
} else {
var temp__5753__auto___43481 = cljs.core.seq(seq__43177_43471);
if(temp__5753__auto___43481){
var seq__43177_43482__$1 = temp__5753__auto___43481;
if(cljs.core.chunked_seq_QMARK_(seq__43177_43482__$1)){
var c__4679__auto___43484 = cljs.core.chunk_first(seq__43177_43482__$1);
var G__43485 = cljs.core.chunk_rest(seq__43177_43482__$1);
var G__43486 = c__4679__auto___43484;
var G__43487 = cljs.core.count(c__4679__auto___43484);
var G__43488 = (0);
seq__43177_43471 = G__43485;
chunk__43178_43472 = G__43486;
count__43179_43473 = G__43487;
i__43180_43474 = G__43488;
continue;
} else {
var f_43489 = cljs.core.first(seq__43177_43482__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43489], 0));


var G__43490 = cljs.core.next(seq__43177_43482__$1);
var G__43491 = null;
var G__43492 = (0);
var G__43493 = (0);
seq__43177_43471 = G__43490;
chunk__43178_43472 = G__43491;
count__43179_43473 = G__43492;
i__43180_43474 = G__43493;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43494 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43494], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43494)))?cljs.core.second(arglists_43494):arglists_43494)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43193_43504 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43194_43505 = null;
var count__43195_43506 = (0);
var i__43196_43507 = (0);
while(true){
if((i__43196_43507 < count__43195_43506)){
var vec__43216_43508 = chunk__43194_43505.cljs$core$IIndexed$_nth$arity$2(null,i__43196_43507);
var name_43509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43216_43508,(0),null);
var map__43219_43510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43216_43508,(1),null);
var map__43219_43511__$1 = cljs.core.__destructure_map(map__43219_43510);
var doc_43512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43219_43511__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43219_43511__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43509], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43513], 0));

if(cljs.core.truth_(doc_43512)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43512], 0));
} else {
}


var G__43514 = seq__43193_43504;
var G__43515 = chunk__43194_43505;
var G__43516 = count__43195_43506;
var G__43517 = (i__43196_43507 + (1));
seq__43193_43504 = G__43514;
chunk__43194_43505 = G__43515;
count__43195_43506 = G__43516;
i__43196_43507 = G__43517;
continue;
} else {
var temp__5753__auto___43519 = cljs.core.seq(seq__43193_43504);
if(temp__5753__auto___43519){
var seq__43193_43520__$1 = temp__5753__auto___43519;
if(cljs.core.chunked_seq_QMARK_(seq__43193_43520__$1)){
var c__4679__auto___43521 = cljs.core.chunk_first(seq__43193_43520__$1);
var G__43522 = cljs.core.chunk_rest(seq__43193_43520__$1);
var G__43523 = c__4679__auto___43521;
var G__43524 = cljs.core.count(c__4679__auto___43521);
var G__43525 = (0);
seq__43193_43504 = G__43522;
chunk__43194_43505 = G__43523;
count__43195_43506 = G__43524;
i__43196_43507 = G__43525;
continue;
} else {
var vec__43225_43526 = cljs.core.first(seq__43193_43520__$1);
var name_43527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225_43526,(0),null);
var map__43228_43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225_43526,(1),null);
var map__43228_43529__$1 = cljs.core.__destructure_map(map__43228_43528);
var doc_43530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43228_43529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43228_43529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43527], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43531], 0));

if(cljs.core.truth_(doc_43530)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43530], 0));
} else {
}


var G__43538 = cljs.core.next(seq__43193_43520__$1);
var G__43539 = null;
var G__43540 = (0);
var G__43541 = (0);
seq__43193_43504 = G__43538;
chunk__43194_43505 = G__43539;
count__43195_43506 = G__43540;
i__43196_43507 = G__43541;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43239 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43240 = null;
var count__43241 = (0);
var i__43242 = (0);
while(true){
if((i__43242 < count__43241)){
var role = chunk__43240.cljs$core$IIndexed$_nth$arity$2(null,i__43242);
var temp__5753__auto___43555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43555__$1)){
var spec_43558 = temp__5753__auto___43555__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43558)], 0));
} else {
}


var G__43569 = seq__43239;
var G__43570 = chunk__43240;
var G__43571 = count__43241;
var G__43572 = (i__43242 + (1));
seq__43239 = G__43569;
chunk__43240 = G__43570;
count__43241 = G__43571;
i__43242 = G__43572;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43239);
if(temp__5753__auto____$1){
var seq__43239__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43239__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43239__$1);
var G__43582 = cljs.core.chunk_rest(seq__43239__$1);
var G__43583 = c__4679__auto__;
var G__43584 = cljs.core.count(c__4679__auto__);
var G__43585 = (0);
seq__43239 = G__43582;
chunk__43240 = G__43583;
count__43241 = G__43584;
i__43242 = G__43585;
continue;
} else {
var role = cljs.core.first(seq__43239__$1);
var temp__5753__auto___43587__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43587__$2)){
var spec_43591 = temp__5753__auto___43587__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43591)], 0));
} else {
}


var G__43592 = cljs.core.next(seq__43239__$1);
var G__43593 = null;
var G__43594 = (0);
var G__43595 = (0);
seq__43239 = G__43592;
chunk__43240 = G__43593;
count__43241 = G__43594;
i__43242 = G__43595;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43597 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43598 = cljs.core.ex_cause(t);
via = G__43597;
t = G__43598;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43283 = datafied_throwable;
var map__43283__$1 = cljs.core.__destructure_map(map__43283);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43283__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43284 = cljs.core.last(via);
var map__43284__$1 = cljs.core.__destructure_map(map__43284);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43285 = data;
var map__43285__$1 = cljs.core.__destructure_map(map__43285);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43286 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43286__$1 = cljs.core.__destructure_map(map__43286);
var top_data = map__43286__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43300 = phase;
var G__43300__$1 = (((G__43300 instanceof cljs.core.Keyword))?G__43300.fqn:null);
switch (G__43300__$1) {
case "read-source":
var map__43303 = data;
var map__43303__$1 = cljs.core.__destructure_map(map__43303);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43303__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43303__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43305 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43305__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43305);
var G__43305__$2 = (cljs.core.truth_((function (){var fexpr__43306 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43306.cljs$core$IFn$_invoke$arity$1 ? fexpr__43306.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43306.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43305__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43305__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43308 = top_data;
var G__43308__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43308,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43308);
var G__43308__$2 = (cljs.core.truth_((function (){var fexpr__43310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43310.cljs$core$IFn$_invoke$arity$1 ? fexpr__43310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43308__$1);
var G__43308__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43308__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43308__$2);
var G__43308__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43308__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43308__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43308__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43308__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43313 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43313,(3),null);
var G__43316 = top_data;
var G__43316__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43316,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43316);
var G__43316__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43316__$1);
var G__43316__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43316__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43316__$2);
var G__43316__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43316__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43316__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43316__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43316__$4;
}

break;
case "execution":
var vec__43320 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43320,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43320,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43320,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43320,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43281_SHARP_){
var or__4253__auto__ = (p1__43281_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__43327 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43327.cljs$core$IFn$_invoke$arity$1 ? fexpr__43327.cljs$core$IFn$_invoke$arity$1(p1__43281_SHARP_) : fexpr__43327.call(null,p1__43281_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__43329 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43329__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43329,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43329);
var G__43329__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43329__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43329__$1);
var G__43329__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43329__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43329__$2);
var G__43329__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43329__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43329__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43329__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43329__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43300__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43371){
var map__43372 = p__43371;
var map__43372__$1 = cljs.core.__destructure_map(map__43372);
var triage_data = map__43372__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43377 = phase;
var G__43377__$1 = (((G__43377 instanceof cljs.core.Keyword))?G__43377.fqn:null);
switch (G__43377__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43379 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43380 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43381 = loc;
var G__43382 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43384_43625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43385_43626 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43386_43627 = true;
var _STAR_print_fn_STAR__temp_val__43387_43628 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43386_43627);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43387_43628);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43368_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43368_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43385_43626);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43384_43625);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43379,G__43380,G__43381,G__43382) : format.call(null,G__43379,G__43380,G__43381,G__43382));

break;
case "macroexpansion":
var G__43392 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43393 = cause_type;
var G__43394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43395 = loc;
var G__43396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43392,G__43393,G__43394,G__43395,G__43396) : format.call(null,G__43392,G__43393,G__43394,G__43395,G__43396));

break;
case "compile-syntax-check":
var G__43397 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43398 = cause_type;
var G__43399 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43400 = loc;
var G__43401 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43397,G__43398,G__43399,G__43400,G__43401) : format.call(null,G__43397,G__43398,G__43399,G__43400,G__43401));

break;
case "compilation":
var G__43402 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43403 = cause_type;
var G__43404 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43405 = loc;
var G__43406 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43402,G__43403,G__43404,G__43405,G__43406) : format.call(null,G__43402,G__43403,G__43404,G__43405,G__43406));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43423 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43428 = symbol;
var G__43429 = loc;
var G__43430 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43436_43637 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43437_43638 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43438_43639 = true;
var _STAR_print_fn_STAR__temp_val__43439_43640 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43438_43639);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43439_43640);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43369_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43369_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43437_43638);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43436_43637);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43423,G__43428,G__43429,G__43430) : format.call(null,G__43423,G__43428,G__43429,G__43430));
} else {
var G__43458 = "Execution error%s at %s(%s).\n%s\n";
var G__43459 = cause_type;
var G__43460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43461 = loc;
var G__43462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43458,G__43459,G__43460,G__43461,G__43462) : format.call(null,G__43458,G__43459,G__43460,G__43461,G__43462));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43377__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
