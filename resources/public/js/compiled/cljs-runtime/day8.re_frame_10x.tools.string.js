goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39481 = arguments.length;
var i__4865__auto___39482 = (0);
while(true){
if((i__4865__auto___39482 < len__4864__auto___39481)){
args__4870__auto__.push((arguments[i__4865__auto___39482]));

var G__39483 = (i__4865__auto___39482 + (1));
i__4865__auto___39482 = G__39483;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39467){
var vec__39468 = p__39467;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39468,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq39464){
var G__39465 = cljs.core.first(seq39464);
var seq39464__$1 = cljs.core.next(seq39464);
var G__39466 = cljs.core.first(seq39464__$1);
var seq39464__$2 = cljs.core.next(seq39464__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39465,G__39466,seq39464__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39484 = arguments.length;
var i__4865__auto___39485 = (0);
while(true){
if((i__4865__auto___39485 < len__4864__auto___39484)){
args__4870__auto__.push((arguments[i__4865__auto___39485]));

var G__39486 = (i__4865__auto___39485 + (1));
i__4865__auto___39485 = G__39486;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39476){
var vec__39477 = p__39476;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39477,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq39471){
var G__39472 = cljs.core.first(seq39471);
var seq39471__$1 = cljs.core.next(seq39471);
var G__39473 = cljs.core.first(seq39471__$1);
var seq39471__$2 = cljs.core.next(seq39471__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39472,G__39473,seq39471__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
