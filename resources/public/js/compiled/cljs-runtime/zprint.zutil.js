goog.provide('zprint.zutil');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.insert_right_STAR_ = clojure.zip.insert_right;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__38258 = arguments.length;
switch (G__38258) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.right,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(f,zprint.zutil.whitespace_QMARK_,zloc) : zprint.zutil.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc));
}));

(zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2);

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__38271 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.re_find(/^#:/,(rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)));
}
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5751__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5751__auto__)){
var first_loc = temp__5751__auto__;
var temp__5751__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5751__auto____$1)){
var nloc = temp__5751__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond_no_comment = (function zprint$zutil$zsecond_no_comment(zloc){
var temp__5751__auto__ = zprint.zutil.zfirst_no_comment(zloc);
if(cljs.core.truth_(temp__5751__auto__)){
var first_loc = temp__5751__auto__;
var temp__5751__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5751__auto____$1)){
var nloc = temp__5751__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__38295 = zprint.zutil.zfirst(zloc);
var G__38295__$1 = (((G__38295 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38295) : zprint.zutil.right_STAR_.call(null,G__38295)));
var G__38295__$2 = (((G__38295__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38295__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38295__$1)));
var G__38295__$3 = (((G__38295__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38295__$2) : zprint.zutil.right_STAR_.call(null,G__38295__$2)));
if((G__38295__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38295__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38295__$3));
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird_no_comment = (function zprint$zutil$zthird_no_comment(zloc){
var G__38296 = zprint.zutil.zfirst_no_comment(zloc);
var G__38296__$1 = (((G__38296 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38296) : zprint.zutil.right_STAR_.call(null,G__38296)));
var G__38296__$2 = (((G__38296__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__38296__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__38296__$1)));
var G__38296__$3 = (((G__38296__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38296__$2) : zprint.zutil.right_STAR_.call(null,G__38296__$2)));
if((G__38296__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__38296__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__38296__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__38298 = zprint.zutil.zfirst(zloc);
var G__38298__$1 = (((G__38298 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38298) : zprint.zutil.right_STAR_.call(null,G__38298)));
var G__38298__$2 = (((G__38298__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$1)));
var G__38298__$3 = (((G__38298__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38298__$2) : zprint.zutil.right_STAR_.call(null,G__38298__$2)));
var G__38298__$4 = (((G__38298__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$3)));
var G__38298__$5 = (((G__38298__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__38298__$4) : zprint.zutil.right_STAR_.call(null,G__38298__$4)));
if((G__38298__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__38298__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5751__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5751__auto__)){
var nloc = temp__5751__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5751__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5751__auto__)){
var nloc = temp__5751__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__38941 = zprint.zutil.zrightnws(nloc);
var G__38942 = nloc;
nloc = G__38941;
ploc = G__38942;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5751__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5751__auto__)){
var nloc = temp__5751__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__38944 = zprint.zutil.zleftnws(nloc);
var G__38945 = nloc;
nloc = G__38944;
ploc = G__38945;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5751__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5751__auto__)){
var ploc = temp__5751__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__38970 = zprint.zutil.zrightnws(nloc);
var G__38971 = (i - (1));
nloc = G__38970;
i = G__38971;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__38972 = zprint.zutil.zrightnws(nloc);
var G__38973 = (i + (1));
nloc = G__38972;
i = G__38973;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zutil.znl = (function zprint$zutil$znl(){

var G__38345 = rewrite_clj.parser.parse_string("\n");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38345) : zprint.zutil.edn_STAR_.call(null,G__38345));
});
/**
 * Return a sequence of zloc newlines.
 */
zprint.zutil.multi_nl = (function zprint$zutil$multi_nl(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,zprint.zutil.znl()));
});
/**
 * Given a zloc which is a comment, replace it with a zloc which is the
 *   same comment with no newline, and a newline that follows it.  This is
 *   done in the zipper so that later navigation in this area remains
 *   continues to work.
 */
zprint.zutil.split_newline_from_comment = (function zprint$zutil$split_newline_from_comment(zloc){
var comment_no_nl = rewrite_clj.parser.parse_string(clojure.string.replace_first((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),"\n",""));
var new_comment = (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(zloc,comment_no_nl) : zprint.zutil.replace_STAR_.call(null,zloc,comment_no_nl));
var new_comment__$1 = (function (){var G__38351 = new_comment;
var G__38352 = rewrite_clj.parser.parse_string("\n");
return (zprint.zutil.insert_right_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.insert_right_STAR_.cljs$core$IFn$_invoke$arity$2(G__38351,G__38352) : zprint.zutil.insert_right_STAR_.call(null,G__38351,G__38352));
})();
return new_comment__$1;
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including two newlines
 *   for every blank line encountered.  Note that a truly blank line
 *   will show up as one zloc with two newlines in it.  It will have
 *   (= (z/tag nloc) :newline), but it will have both newlines.  To
 *   ease handling of these multi-line newlines, this routine will
 *   split them up into multiple individual newlines.
 */
zprint.zutil.zmap_w_bl = (function zprint$zutil$zmap_w_bl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var blank_QMARK_ = false;
var previous_was_nl_QMARK_ = false;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var ws_QMARK_ = zprint.zutil.whitespace_QMARK_(nloc);
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) > (1)):null);
var emit_nl_QMARK_ = (function (){var or__4253__auto__ = ((blank_QMARK_) && (nl_QMARK_));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return multi_nl_QMARK_;
}
})();
var nl_to_emit = (cljs.core.truth_(emit_nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl((((function (){var or__4253__auto__ = previous_was_nl_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (!(blank_QMARK_));
}
})())?nl_len:(nl_len + (1))))):(cljs.core.truth_(previous_was_nl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)),(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))], null)
)):null);
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__4253__auto__ = (!(ws_QMARK_));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = nl_QMARK_;
if(and__4251__auto__){
return previous_comment_QMARK_;
} else {
return and__4251__auto__;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var G__38978 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__38979 = ((blank_QMARK_)?((ws_QMARK_) || (nl_QMARK_)):nl_QMARK_);
var G__38980 = (cljs.core.truth_((function (){var or__4253__auto__ = result;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nl_to_emit;
}
})())?(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = nl_QMARK_;
if(and__4251__auto__){
return previous_comment_QMARK_;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return emit_nl_QMARK_;
}
})():previous_was_nl_QMARK_);
var G__38981 = comment_QMARK_;
var G__38982 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__38978;
blank_QMARK_ = G__38979;
previous_was_nl_QMARK_ = G__38980;
previous_comment_QMARK_ = G__38981;
out = G__38982;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment. The
 *   comment split actually changes the zipper for the rest of the
 *   sequence, where the newline splits do not.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((!(zprint.zutil.whitespace_QMARK_(nloc__$1))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1))], null)):null);
var G__38985 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__38986 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__38985;
out = G__38986;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),",")))));
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((((!(zprint.zutil.whitespace_QMARK_(nloc__$1)))) || (comma_QMARK_)))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1))], null)):null);
var G__38988 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__38989 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__38988;
out = G__38989;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__4253__auto__ = (!(zprint.zutil.whitespace_QMARK_(nloc__$1)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = nl_QMARK_;
if(and__4251__auto__){
return previous_comment_QMARK_;
} else {
return and__4251__auto__;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var G__38991 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__38992 = comment_QMARK_;
var G__38993 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):out);
nloc = G__38991;
previous_comment_QMARK_ = G__38992;
out = G__38993;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_alt = (function zprint$zutil$zmap_alt(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__38994 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__38995 = (function (){var temp__5751__auto__ = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5751__auto__)){
var result = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__38994;
out = G__38995;
continue;
}
break;
}
});
/**
 * Return the count of non-whitespace elements in zloc.  Comments are
 *   counted as one thing, commas are ignored as whitespace.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if(cljs.core.not(nloc)){
return i;
} else {
var G__38996 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__38997 = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(i + (1)):i);
nloc = G__38996;
i = G__38997;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__38999 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__39000 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__38999;
out = G__39000;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   only newlines that start and end blank lines.
 */
zprint.zutil.zseqnws_w_bl = (function zprint$zutil$zseqnws_w_bl(zloc){
return zprint.zutil.zmap_w_bl(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__39002 = (function (){var G__38526 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__38526) : zprint.zutil.zremove.call(null,G__38526));
})();
nloc = G__39002;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__38527 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__38527) : zprint.zutil.up_STAR_.call(null,G__38527));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__39003 = xloc;
var G__39004 = ((zprint.zutil.whitespace_QMARK_(xloc))?index:(index + (1)));
nloc = G__39003;
index = G__39004;
continue;
}
break;
}
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38529_SHARP_,p2__38528_SHARP_){
if(cljs.core.truth_((zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1(p2__38528_SHARP_) : zprint.zutil.whitespace_or_comment_QMARK_.call(null,p2__38528_SHARP_)))){
return p1__38529_SHARP_;
} else {
return (p1__38529_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__39037 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__39038 = (0);
var G__39039 = cljs.core.cons(left,out);
nloc = G__39037;
left = G__39038;
out = G__39039;
continue;
}
} else {
var G__39040 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__39041 = (left + (1));
var G__39042 = out;
nloc = G__39040;
left = G__39041;
out = G__39042;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__39043 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__39044 = (0);
var G__39045 = cljs.core.cons(left,out);
nloc = G__39043;
left = G__39044;
out = G__39045;
continue;
}
} else {
var G__39049 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__39050 = ((zprint.zutil.whitespace_QMARK_(nloc))?left:(left + (1)));
var G__39051 = out;
nloc = G__39049;
left = G__39050;
out = G__39051;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__39053 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__39053;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__39054 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__39055 = (remaining_right - (1));
nloc = G__39054;
remaining_right = G__39055;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4251__auto__ = zloc;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__38556 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__38556) : rewrite_clj.node.printable_only_QMARK_.call(null,G__38556));
})())));
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4251__auto__ = zloc;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4251__auto__ = zloc;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4251__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4251__auto__ = zloc;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4251__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__38558 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__38558) : rewrite_clj.zip.down.call(null,G__38558));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__38559 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__38559) : rewrite_clj.zip.down.call(null,G__38559));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__38564 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38564) : zprint.zutil.edn_STAR_.call(null,G__38564));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))))){
var G__38570 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__38570) : zprint.zutil.zconstant_QMARK_.call(null,G__38570));
} else {
var and__4251__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__4251__auto__){
var or__4253__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (((typeof sexpr === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))))))));
} else {
return null;
}
}
} else {
return and__4251__auto__;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4251__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4251__auto__;
}
})())){
if(typeof (function (){var G__38573 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__38573) : zprint.zutil.sexpr.call(null,G__38573));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__39061 = (function (){var G__38574 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__38574) : rewrite_clj.zip.right.call(null,G__38574));
})();
nloc = G__39061;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__38575 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__38575) : rewrite_clj.zip.string.call(null,G__38575));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__38576 = (function (){var G__38577 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__38577) : rewrite_clj.zip.right.call(null,G__38577));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__38576) : rewrite_clj.zip.right.call(null,G__38576));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__38578 = (function (){var G__38579 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__38579) : rewrite_clj.zip.right.call(null,G__38579));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__38578) : rewrite_clj.zip.down.call(null,G__38578));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5751__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5751__auto__)){
var doc_zloc = temp__5751__auto__;
var new_doc_zloc = (function (){var G__38580 = doc_zloc;
var G__38581 = (function (){var G__38582 = (function (){var G__38583 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38583) : zprint.zutil.edn_STAR_.call(null,G__38583));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__38582) : rewrite_clj.zip.node.call(null,G__38582));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__38580,G__38581) : zprint.zutil.replace_STAR_.call(null,G__38580,G__38581));
})();
var G__38584 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38584) : zprint.zutil.edn_STAR_.call(null,G__38584));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__38585,pair_seq,ns){
var map__38586 = p__38585;
var map__38586__$1 = cljs.core.__destructure_map(map__38586);
var map_options = map__38586__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4251__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4251__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__38595 = cljs.core.first(pair_seq__$1);
var seq__38596 = cljs.core.seq(vec__38595);
var first__38597 = cljs.core.first(seq__38596);
var seq__38596__$1 = cljs.core.next(seq__38596);
var k = first__38597;
var rest_of_pair = seq__38596__$1;
var pair = vec__38595;
var current_ns = (cljs.core.truth_((function (){var and__4251__auto__ = rest_of_pair;
if(and__4251__auto__){
var and__4251__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4251__auto____$1){
var or__4253__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__39065 = ns__$1;
var G__39066 = cljs.core.next(pair_seq__$1);
var G__39067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__38598 = (function (){var G__38599 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__38599) : rewrite_clj.node.token_node.call(null,G__38599));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38598) : zprint.zutil.edn_STAR_.call(null,G__38598));
})(),rest_of_pair));
ns__$1 = G__39065;
pair_seq__$1 = G__39066;
out = G__39067;
continue;
} else {
return null;
}
} else {
var G__39068 = current_ns;
var G__39069 = cljs.core.next(pair_seq__$1);
var G__39070 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__38600 = (function (){var G__38601 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__38601) : rewrite_clj.node.token_node.call(null,G__38601));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38600) : zprint.zutil.edn_STAR_.call(null,G__38600));
})(),rest_of_pair));
ns__$1 = G__39068;
pair_seq__$1 = G__39069;
out = G__39070;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__39072 = ns__$1;
var G__39073 = cljs.core.next(pair_seq__$1);
var G__39074 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__39072;
pair_seq__$1 = G__39073;
out = G__39074;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = ns;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not(lift_ns_QMARK_);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__38610 = cljs.core.first(pair_seq__$1);
var seq__38611 = cljs.core.seq(vec__38610);
var first__38612 = cljs.core.first(seq__38611);
var seq__38611__$1 = cljs.core.next(seq__38611);
var k = first__38612;
var rest_of_pair = seq__38611__$1;
var pair = vec__38610;
var current_ns = (cljs.core.truth_((function (){var and__4251__auto__ = rest_of_pair;
if(and__4251__auto__){
var and__4251__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4251__auto____$1){
var or__4253__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__39078 = cljs.core.next(pair_seq__$1);
var G__39079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
pair_seq__$1 = G__39078;
out = G__39079;
continue;
} else {
var G__39080 = cljs.core.next(pair_seq__$1);
var G__39081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__38613 = (function (){var G__38614 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.name((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)))].join(''));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__38614) : rewrite_clj.node.token_node.call(null,G__38614));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__38613) : zprint.zutil.edn_STAR_.call(null,G__38613));
})(),rest_of_pair));
pair_seq__$1 = G__39080;
out = G__39081;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__38615 = zprint.zfns.zstring;
var znumstr_orig_val__38616 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__38617 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__38618 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__38619 = zprint.zfns.zsexpr;
var zseqnws_orig_val__38620 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__38621 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__38622 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__38623 = zprint.zfns.zfocus_style;
var zstart_orig_val__38624 = zprint.zfns.zstart;
var zfirst_orig_val__38625 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__38626 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__38627 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__38628 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__38629 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__38630 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__38631 = zprint.zfns.zfourth;
var znextnws_orig_val__38632 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__38633 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__38634 = zprint.zfns.znthnext;
var zcount_orig_val__38635 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__38636 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__38637 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__38638 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__38639 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__38640 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__38641 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__38642 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__38643 = zprint.zfns.zfocus;
var zfind_path_orig_val__38644 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__38645 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__38646 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__38647 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__38648 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__38649 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__38650 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__38651 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__38652 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__38653 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__38654 = zprint.zfns.ztag;
var zlast_orig_val__38655 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__38656 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__38657 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__38658 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__38659 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__38660 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__38661 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__38662 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__38663 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__38664 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__38665 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__38666 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__38667 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__38668 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__38669 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__38670 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__38671 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__38672 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__38673 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__38674 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__38675 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__38676 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__38677 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__38678 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__38679 = zprint.zfns.zlift_ns;
var zfind_orig_val__38680 = zprint.zfns.zfind;
var ztake_append_orig_val__38681 = zprint.zfns.ztake_append;
var zstring_temp_val__38682 = rewrite_clj.zip.string;
var znumstr_temp_val__38683 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__38684 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__38685 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__38686 = zprint.zutil.sexpr;
var zseqnws_temp_val__38687 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__38688 = zprint.zutil.zseqnws_w_nl;
var zseqnws_w_bl_temp_val__38689 = zprint.zutil.zseqnws_w_bl;
var zfocus_style_temp_val__38690 = zprint.zutil.zfocus_style;
var zstart_temp_val__38691 = zprint.zutil.zstart;
var zfirst_temp_val__38692 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__38693 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__38694 = zprint.zutil.zsecond;
var zsecond_no_comment_temp_val__38695 = zprint.zutil.zsecond_no_comment;
var zthird_temp_val__38696 = zprint.zutil.zthird;
var zthird_no_comment_temp_val__38697 = zprint.zutil.zthird_no_comment;
var zfourth_temp_val__38698 = zprint.zutil.zfourth;
var znextnws_temp_val__38699 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__38700 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__38701 = zprint.zutil.znthnext;
var zcount_temp_val__38702 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__38703 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__38704 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__38705 = zprint.zutil.zmap_w_nl;
var zmap_w_bl_temp_val__38706 = zprint.zutil.zmap_w_bl;
var zmap_w_nl_comma_temp_val__38707 = zprint.zutil.zmap_w_nl_comma;
var zanonfn_QMARK__temp_val__38708 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__38709 = cljs.core.constantly(false);
var zfocus_temp_val__38710 = zprint.zutil.zfocus;
var zfind_path_temp_val__38711 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__38712 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__38713 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__38714 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__38715 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__38716 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__38717 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__38718 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__38719 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__38720 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__38721 = zprint.zutil.ztag;
var zlast_temp_val__38722 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__38723 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__38724 = cljs.core.constantly(false);
var zderef_temp_val__38725 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__38726 = cljs.core.constantly(false);
var zns_QMARK__temp_val__38727 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__38728 = cljs.core.constantly(null);
var zexpandarray_temp_val__38729 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__38730 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__38731 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__38732 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__38733 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__38734 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__38735 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__38736 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__38737 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__38738 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__38739 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__38740 = cljs.core.constantly(null);
var zdotdotdot_temp_val__38741 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__38742 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__38743 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__38744 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__38745 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__38746 = zprint.zutil.zlift_ns;
var zfind_temp_val__38747 = zprint.zutil.zfind;
var ztake_append_temp_val__38748 = zprint.zutil.ztake_append;
(zprint.zfns.zstring = zstring_temp_val__38682);

(zprint.zfns.znumstr = znumstr_temp_val__38683);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__38684);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__38685);

(zprint.zfns.zsexpr = zsexpr_temp_val__38686);

(zprint.zfns.zseqnws = zseqnws_temp_val__38687);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__38688);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__38689);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__38690);

(zprint.zfns.zstart = zstart_temp_val__38691);

(zprint.zfns.zfirst = zfirst_temp_val__38692);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__38693);

(zprint.zfns.zsecond = zsecond_temp_val__38694);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__38695);

(zprint.zfns.zthird = zthird_temp_val__38696);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__38697);

(zprint.zfns.zfourth = zfourth_temp_val__38698);

(zprint.zfns.znextnws = znextnws_temp_val__38699);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__38700);

(zprint.zfns.znthnext = znthnext_temp_val__38701);

(zprint.zfns.zcount = zcount_temp_val__38702);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__38703);

(zprint.zfns.zmap = zmap_temp_val__38704);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__38705);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__38706);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__38707);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__38708);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__38709);

(zprint.zfns.zfocus = zfocus_temp_val__38710);

(zprint.zfns.zfind_path = zfind_path_temp_val__38711);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__38712);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__38713);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__38714);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__38715);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__38716);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__38717);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__38718);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__38719);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__38720);

(zprint.zfns.ztag = ztag_temp_val__38721);

(zprint.zfns.zlast = zlast_temp_val__38722);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__38723);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__38724);

(zprint.zfns.zderef = zderef_temp_val__38725);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__38726);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__38727);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__38728);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__38729);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__38730);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__38731);

(zprint.zfns.zmap_all = zmap_all_temp_val__38732);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__38733);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__38734);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__38735);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__38736);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__38737);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__38738);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__38739);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__38740);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__38741);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__38742);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__38743);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__38744);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__38745);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__38746);

(zprint.zfns.zfind = zfind_temp_val__38747);

(zprint.zfns.ztake_append = ztake_append_temp_val__38748);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__38681);

(zprint.zfns.zfind = zfind_orig_val__38680);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__38679);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__38678);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__38677);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__38676);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__38675);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__38674);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__38673);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__38672);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__38671);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__38670);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__38669);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__38668);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__38667);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__38666);

(zprint.zfns.zmap_all = zmap_all_orig_val__38665);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__38664);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__38663);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__38662);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__38661);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__38660);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__38659);

(zprint.zfns.zderef = zderef_orig_val__38658);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__38657);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__38656);

(zprint.zfns.zlast = zlast_orig_val__38655);

(zprint.zfns.ztag = ztag_orig_val__38654);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__38653);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__38652);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__38651);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__38650);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__38649);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__38648);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__38647);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__38646);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__38645);

(zprint.zfns.zfind_path = zfind_path_orig_val__38644);

(zprint.zfns.zfocus = zfocus_orig_val__38643);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__38642);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__38641);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__38640);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__38639);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__38638);

(zprint.zfns.zmap = zmap_orig_val__38637);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__38636);

(zprint.zfns.zcount = zcount_orig_val__38635);

(zprint.zfns.znthnext = znthnext_orig_val__38634);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__38633);

(zprint.zfns.znextnws = znextnws_orig_val__38632);

(zprint.zfns.zfourth = zfourth_orig_val__38631);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__38630);

(zprint.zfns.zthird = zthird_orig_val__38629);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__38628);

(zprint.zfns.zsecond = zsecond_orig_val__38627);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__38626);

(zprint.zfns.zfirst = zfirst_orig_val__38625);

(zprint.zfns.zstart = zstart_orig_val__38624);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__38623);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__38622);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__38621);

(zprint.zfns.zseqnws = zseqnws_orig_val__38620);

(zprint.zfns.zsexpr = zsexpr_orig_val__38619);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__38618);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__38617);

(zprint.zfns.znumstr = znumstr_orig_val__38616);

(zprint.zfns.zstring = zstring_orig_val__38615);
}});

//# sourceMappingURL=zprint.zutil.js.map
