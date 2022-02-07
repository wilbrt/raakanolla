goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48108 = arguments.length;
var i__4865__auto___48109 = (0);
while(true){
if((i__4865__auto___48109 < len__4864__auto___48108)){
args__4870__auto__.push((arguments[i__4865__auto___48109]));

var G__48110 = (i__4865__auto___48109 + (1));
i__4865__auto___48109 = G__48110;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47648){
var G__47649 = cljs.core.first(seq47648);
var seq47648__$1 = cljs.core.next(seq47648);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47649,seq47648__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47650 = cljs.core.seq(sources);
var chunk__47651 = null;
var count__47652 = (0);
var i__47653 = (0);
while(true){
if((i__47653 < count__47652)){
var map__47666 = chunk__47651.cljs$core$IIndexed$_nth$arity$2(null,i__47653);
var map__47666__$1 = cljs.core.__destructure_map(map__47666);
var src = map__47666__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47666__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47666__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47666__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47666__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47668){var e_48111 = e47668;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48111);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48111.message)].join('')));
}

var G__48112 = seq__47650;
var G__48113 = chunk__47651;
var G__48114 = count__47652;
var G__48115 = (i__47653 + (1));
seq__47650 = G__48112;
chunk__47651 = G__48113;
count__47652 = G__48114;
i__47653 = G__48115;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47650);
if(temp__5753__auto__){
var seq__47650__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47650__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47650__$1);
var G__48116 = cljs.core.chunk_rest(seq__47650__$1);
var G__48117 = c__4679__auto__;
var G__48118 = cljs.core.count(c__4679__auto__);
var G__48119 = (0);
seq__47650 = G__48116;
chunk__47651 = G__48117;
count__47652 = G__48118;
i__47653 = G__48119;
continue;
} else {
var map__47670 = cljs.core.first(seq__47650__$1);
var map__47670__$1 = cljs.core.__destructure_map(map__47670);
var src = map__47670__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47671){var e_48123 = e47671;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48123);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48123.message)].join('')));
}

var G__48124 = cljs.core.next(seq__47650__$1);
var G__48125 = null;
var G__48126 = (0);
var G__48127 = (0);
seq__47650 = G__48124;
chunk__47651 = G__48125;
count__47652 = G__48126;
i__47653 = G__48127;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47677 = cljs.core.seq(js_requires);
var chunk__47678 = null;
var count__47679 = (0);
var i__47680 = (0);
while(true){
if((i__47680 < count__47679)){
var js_ns = chunk__47678.cljs$core$IIndexed$_nth$arity$2(null,i__47680);
var require_str_48128 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48128);


var G__48129 = seq__47677;
var G__48130 = chunk__47678;
var G__48131 = count__47679;
var G__48132 = (i__47680 + (1));
seq__47677 = G__48129;
chunk__47678 = G__48130;
count__47679 = G__48131;
i__47680 = G__48132;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47677);
if(temp__5753__auto__){
var seq__47677__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47677__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47677__$1);
var G__48133 = cljs.core.chunk_rest(seq__47677__$1);
var G__48134 = c__4679__auto__;
var G__48135 = cljs.core.count(c__4679__auto__);
var G__48136 = (0);
seq__47677 = G__48133;
chunk__47678 = G__48134;
count__47679 = G__48135;
i__47680 = G__48136;
continue;
} else {
var js_ns = cljs.core.first(seq__47677__$1);
var require_str_48137 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48137);


var G__48142 = cljs.core.next(seq__47677__$1);
var G__48143 = null;
var G__48144 = (0);
var G__48145 = (0);
seq__47677 = G__48142;
chunk__47678 = G__48143;
count__47679 = G__48144;
i__47680 = G__48145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47684){
var map__47685 = p__47684;
var map__47685__$1 = cljs.core.__destructure_map(map__47685);
var msg = map__47685__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47686(s__47687){
return (new cljs.core.LazySeq(null,(function (){
var s__47687__$1 = s__47687;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47687__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47692 = cljs.core.first(xs__6308__auto__);
var map__47692__$1 = cljs.core.__destructure_map(map__47692);
var src = map__47692__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47692__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__47687__$1,map__47692,map__47692__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47685,map__47685__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47686_$_iter__47688(s__47689){
return (new cljs.core.LazySeq(null,((function (s__47687__$1,map__47692,map__47692__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47685,map__47685__$1,msg,info,reload_info){
return (function (){
var s__47689__$1 = s__47689;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47689__$1);
if(temp__5753__auto____$1){
var s__47689__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47689__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__47689__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__47691 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__47690 = (0);
while(true){
if((i__47690 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__47690);
cljs.core.chunk_append(b__47691,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48149 = (i__47690 + (1));
i__47690 = G__48149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47691),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47686_$_iter__47688(cljs.core.chunk_rest(s__47689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47691),null);
}
} else {
var warning = cljs.core.first(s__47689__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47686_$_iter__47688(cljs.core.rest(s__47689__$2)));
}
} else {
return null;
}
break;
}
});})(s__47687__$1,map__47692,map__47692__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47685,map__47685__$1,msg,info,reload_info))
,null,null));
});})(s__47687__$1,map__47692,map__47692__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47685,map__47685__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47686(cljs.core.rest(s__47687__$1)));
} else {
var G__48152 = cljs.core.rest(s__47687__$1);
s__47687__$1 = G__48152;
continue;
}
} else {
var G__48153 = cljs.core.rest(s__47687__$1);
s__47687__$1 = G__48153;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47696_48158 = cljs.core.seq(warnings);
var chunk__47697_48159 = null;
var count__47698_48160 = (0);
var i__47699_48161 = (0);
while(true){
if((i__47699_48161 < count__47698_48160)){
var map__47702_48162 = chunk__47697_48159.cljs$core$IIndexed$_nth$arity$2(null,i__47699_48161);
var map__47702_48163__$1 = cljs.core.__destructure_map(map__47702_48162);
var w_48164 = map__47702_48163__$1;
var msg_48165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702_48163__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702_48163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702_48163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702_48163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48168)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48166),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48167),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48165__$1)].join(''));


var G__48175 = seq__47696_48158;
var G__48176 = chunk__47697_48159;
var G__48177 = count__47698_48160;
var G__48178 = (i__47699_48161 + (1));
seq__47696_48158 = G__48175;
chunk__47697_48159 = G__48176;
count__47698_48160 = G__48177;
i__47699_48161 = G__48178;
continue;
} else {
var temp__5753__auto___48179 = cljs.core.seq(seq__47696_48158);
if(temp__5753__auto___48179){
var seq__47696_48180__$1 = temp__5753__auto___48179;
if(cljs.core.chunked_seq_QMARK_(seq__47696_48180__$1)){
var c__4679__auto___48185 = cljs.core.chunk_first(seq__47696_48180__$1);
var G__48186 = cljs.core.chunk_rest(seq__47696_48180__$1);
var G__48187 = c__4679__auto___48185;
var G__48188 = cljs.core.count(c__4679__auto___48185);
var G__48189 = (0);
seq__47696_48158 = G__48186;
chunk__47697_48159 = G__48187;
count__47698_48160 = G__48188;
i__47699_48161 = G__48189;
continue;
} else {
var map__47703_48190 = cljs.core.first(seq__47696_48180__$1);
var map__47703_48191__$1 = cljs.core.__destructure_map(map__47703_48190);
var w_48192 = map__47703_48191__$1;
var msg_48193__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47703_48191__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47703_48191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47703_48191__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47703_48191__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48196)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48194),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48195),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48193__$1)].join(''));


var G__48197 = cljs.core.next(seq__47696_48180__$1);
var G__48198 = null;
var G__48199 = (0);
var G__48200 = (0);
seq__47696_48158 = G__48197;
chunk__47697_48159 = G__48198;
count__47698_48160 = G__48199;
i__47699_48161 = G__48200;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47683_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47683_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47704){
var map__47705 = p__47704;
var map__47705__$1 = cljs.core.__destructure_map(map__47705);
var msg = map__47705__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47705__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47705__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47706 = cljs.core.seq(updates);
var chunk__47708 = null;
var count__47709 = (0);
var i__47710 = (0);
while(true){
if((i__47710 < count__47709)){
var path = chunk__47708.cljs$core$IIndexed$_nth$arity$2(null,i__47710);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47881_48201 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47885_48202 = null;
var count__47886_48203 = (0);
var i__47887_48204 = (0);
while(true){
if((i__47887_48204 < count__47886_48203)){
var node_48205 = chunk__47885_48202.cljs$core$IIndexed$_nth$arity$2(null,i__47887_48204);
if(cljs.core.not(node_48205.shadow$old)){
var path_match_48206 = shadow.cljs.devtools.client.browser.match_paths(node_48205.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48206)){
var new_link_48207 = (function (){var G__47922 = node_48205.cloneNode(true);
G__47922.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48206),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47922;
})();
(node_48205.shadow$old = true);

(new_link_48207.onload = ((function (seq__47881_48201,chunk__47885_48202,count__47886_48203,i__47887_48204,seq__47706,chunk__47708,count__47709,i__47710,new_link_48207,path_match_48206,node_48205,path,map__47705,map__47705__$1,msg,updates,reload_info){
return (function (e){
var seq__47923_48208 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47925_48209 = null;
var count__47926_48210 = (0);
var i__47927_48211 = (0);
while(true){
if((i__47927_48211 < count__47926_48210)){
var map__47931_48212 = chunk__47925_48209.cljs$core$IIndexed$_nth$arity$2(null,i__47927_48211);
var map__47931_48213__$1 = cljs.core.__destructure_map(map__47931_48212);
var task_48214 = map__47931_48213__$1;
var fn_str_48215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47931_48213__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47931_48213__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48217 = goog.getObjectByName(fn_str_48215,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48216)].join(''));

(fn_obj_48217.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48217.cljs$core$IFn$_invoke$arity$2(path,new_link_48207) : fn_obj_48217.call(null,path,new_link_48207));


var G__48218 = seq__47923_48208;
var G__48219 = chunk__47925_48209;
var G__48220 = count__47926_48210;
var G__48221 = (i__47927_48211 + (1));
seq__47923_48208 = G__48218;
chunk__47925_48209 = G__48219;
count__47926_48210 = G__48220;
i__47927_48211 = G__48221;
continue;
} else {
var temp__5753__auto___48222 = cljs.core.seq(seq__47923_48208);
if(temp__5753__auto___48222){
var seq__47923_48223__$1 = temp__5753__auto___48222;
if(cljs.core.chunked_seq_QMARK_(seq__47923_48223__$1)){
var c__4679__auto___48224 = cljs.core.chunk_first(seq__47923_48223__$1);
var G__48225 = cljs.core.chunk_rest(seq__47923_48223__$1);
var G__48226 = c__4679__auto___48224;
var G__48227 = cljs.core.count(c__4679__auto___48224);
var G__48228 = (0);
seq__47923_48208 = G__48225;
chunk__47925_48209 = G__48226;
count__47926_48210 = G__48227;
i__47927_48211 = G__48228;
continue;
} else {
var map__47932_48229 = cljs.core.first(seq__47923_48223__$1);
var map__47932_48230__$1 = cljs.core.__destructure_map(map__47932_48229);
var task_48231 = map__47932_48230__$1;
var fn_str_48232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47932_48230__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47932_48230__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48234 = goog.getObjectByName(fn_str_48232,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48233)].join(''));

(fn_obj_48234.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48234.cljs$core$IFn$_invoke$arity$2(path,new_link_48207) : fn_obj_48234.call(null,path,new_link_48207));


var G__48235 = cljs.core.next(seq__47923_48223__$1);
var G__48236 = null;
var G__48237 = (0);
var G__48238 = (0);
seq__47923_48208 = G__48235;
chunk__47925_48209 = G__48236;
count__47926_48210 = G__48237;
i__47927_48211 = G__48238;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48205);
});})(seq__47881_48201,chunk__47885_48202,count__47886_48203,i__47887_48204,seq__47706,chunk__47708,count__47709,i__47710,new_link_48207,path_match_48206,node_48205,path,map__47705,map__47705__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48206], 0));

goog.dom.insertSiblingAfter(new_link_48207,node_48205);


var G__48239 = seq__47881_48201;
var G__48240 = chunk__47885_48202;
var G__48241 = count__47886_48203;
var G__48242 = (i__47887_48204 + (1));
seq__47881_48201 = G__48239;
chunk__47885_48202 = G__48240;
count__47886_48203 = G__48241;
i__47887_48204 = G__48242;
continue;
} else {
var G__48243 = seq__47881_48201;
var G__48244 = chunk__47885_48202;
var G__48245 = count__47886_48203;
var G__48246 = (i__47887_48204 + (1));
seq__47881_48201 = G__48243;
chunk__47885_48202 = G__48244;
count__47886_48203 = G__48245;
i__47887_48204 = G__48246;
continue;
}
} else {
var G__48247 = seq__47881_48201;
var G__48248 = chunk__47885_48202;
var G__48249 = count__47886_48203;
var G__48250 = (i__47887_48204 + (1));
seq__47881_48201 = G__48247;
chunk__47885_48202 = G__48248;
count__47886_48203 = G__48249;
i__47887_48204 = G__48250;
continue;
}
} else {
var temp__5753__auto___48251 = cljs.core.seq(seq__47881_48201);
if(temp__5753__auto___48251){
var seq__47881_48252__$1 = temp__5753__auto___48251;
if(cljs.core.chunked_seq_QMARK_(seq__47881_48252__$1)){
var c__4679__auto___48253 = cljs.core.chunk_first(seq__47881_48252__$1);
var G__48254 = cljs.core.chunk_rest(seq__47881_48252__$1);
var G__48255 = c__4679__auto___48253;
var G__48256 = cljs.core.count(c__4679__auto___48253);
var G__48257 = (0);
seq__47881_48201 = G__48254;
chunk__47885_48202 = G__48255;
count__47886_48203 = G__48256;
i__47887_48204 = G__48257;
continue;
} else {
var node_48258 = cljs.core.first(seq__47881_48252__$1);
if(cljs.core.not(node_48258.shadow$old)){
var path_match_48259 = shadow.cljs.devtools.client.browser.match_paths(node_48258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48259)){
var new_link_48260 = (function (){var G__47933 = node_48258.cloneNode(true);
G__47933.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47933;
})();
(node_48258.shadow$old = true);

(new_link_48260.onload = ((function (seq__47881_48201,chunk__47885_48202,count__47886_48203,i__47887_48204,seq__47706,chunk__47708,count__47709,i__47710,new_link_48260,path_match_48259,node_48258,seq__47881_48252__$1,temp__5753__auto___48251,path,map__47705,map__47705__$1,msg,updates,reload_info){
return (function (e){
var seq__47934_48261 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47936_48262 = null;
var count__47937_48263 = (0);
var i__47938_48264 = (0);
while(true){
if((i__47938_48264 < count__47937_48263)){
var map__47943_48265 = chunk__47936_48262.cljs$core$IIndexed$_nth$arity$2(null,i__47938_48264);
var map__47943_48266__$1 = cljs.core.__destructure_map(map__47943_48265);
var task_48267 = map__47943_48266__$1;
var fn_str_48268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47943_48266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47943_48266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48270 = goog.getObjectByName(fn_str_48268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48269)].join(''));

(fn_obj_48270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48270.cljs$core$IFn$_invoke$arity$2(path,new_link_48260) : fn_obj_48270.call(null,path,new_link_48260));


var G__48271 = seq__47934_48261;
var G__48272 = chunk__47936_48262;
var G__48273 = count__47937_48263;
var G__48274 = (i__47938_48264 + (1));
seq__47934_48261 = G__48271;
chunk__47936_48262 = G__48272;
count__47937_48263 = G__48273;
i__47938_48264 = G__48274;
continue;
} else {
var temp__5753__auto___48275__$1 = cljs.core.seq(seq__47934_48261);
if(temp__5753__auto___48275__$1){
var seq__47934_48276__$1 = temp__5753__auto___48275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47934_48276__$1)){
var c__4679__auto___48277 = cljs.core.chunk_first(seq__47934_48276__$1);
var G__48278 = cljs.core.chunk_rest(seq__47934_48276__$1);
var G__48279 = c__4679__auto___48277;
var G__48280 = cljs.core.count(c__4679__auto___48277);
var G__48281 = (0);
seq__47934_48261 = G__48278;
chunk__47936_48262 = G__48279;
count__47937_48263 = G__48280;
i__47938_48264 = G__48281;
continue;
} else {
var map__47946_48282 = cljs.core.first(seq__47934_48276__$1);
var map__47946_48283__$1 = cljs.core.__destructure_map(map__47946_48282);
var task_48284 = map__47946_48283__$1;
var fn_str_48285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47946_48283__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47946_48283__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48288 = goog.getObjectByName(fn_str_48285,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48286)].join(''));

(fn_obj_48288.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48288.cljs$core$IFn$_invoke$arity$2(path,new_link_48260) : fn_obj_48288.call(null,path,new_link_48260));


var G__48289 = cljs.core.next(seq__47934_48276__$1);
var G__48290 = null;
var G__48291 = (0);
var G__48292 = (0);
seq__47934_48261 = G__48289;
chunk__47936_48262 = G__48290;
count__47937_48263 = G__48291;
i__47938_48264 = G__48292;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48258);
});})(seq__47881_48201,chunk__47885_48202,count__47886_48203,i__47887_48204,seq__47706,chunk__47708,count__47709,i__47710,new_link_48260,path_match_48259,node_48258,seq__47881_48252__$1,temp__5753__auto___48251,path,map__47705,map__47705__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48259], 0));

goog.dom.insertSiblingAfter(new_link_48260,node_48258);


var G__48293 = cljs.core.next(seq__47881_48252__$1);
var G__48294 = null;
var G__48295 = (0);
var G__48296 = (0);
seq__47881_48201 = G__48293;
chunk__47885_48202 = G__48294;
count__47886_48203 = G__48295;
i__47887_48204 = G__48296;
continue;
} else {
var G__48297 = cljs.core.next(seq__47881_48252__$1);
var G__48298 = null;
var G__48299 = (0);
var G__48300 = (0);
seq__47881_48201 = G__48297;
chunk__47885_48202 = G__48298;
count__47886_48203 = G__48299;
i__47887_48204 = G__48300;
continue;
}
} else {
var G__48301 = cljs.core.next(seq__47881_48252__$1);
var G__48302 = null;
var G__48303 = (0);
var G__48304 = (0);
seq__47881_48201 = G__48301;
chunk__47885_48202 = G__48302;
count__47886_48203 = G__48303;
i__47887_48204 = G__48304;
continue;
}
}
} else {
}
}
break;
}


var G__48305 = seq__47706;
var G__48306 = chunk__47708;
var G__48307 = count__47709;
var G__48308 = (i__47710 + (1));
seq__47706 = G__48305;
chunk__47708 = G__48306;
count__47709 = G__48307;
i__47710 = G__48308;
continue;
} else {
var G__48309 = seq__47706;
var G__48310 = chunk__47708;
var G__48311 = count__47709;
var G__48312 = (i__47710 + (1));
seq__47706 = G__48309;
chunk__47708 = G__48310;
count__47709 = G__48311;
i__47710 = G__48312;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47706);
if(temp__5753__auto__){
var seq__47706__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47706__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47706__$1);
var G__48313 = cljs.core.chunk_rest(seq__47706__$1);
var G__48314 = c__4679__auto__;
var G__48315 = cljs.core.count(c__4679__auto__);
var G__48316 = (0);
seq__47706 = G__48313;
chunk__47708 = G__48314;
count__47709 = G__48315;
i__47710 = G__48316;
continue;
} else {
var path = cljs.core.first(seq__47706__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47989_48317 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47993_48318 = null;
var count__47994_48319 = (0);
var i__47995_48320 = (0);
while(true){
if((i__47995_48320 < count__47994_48319)){
var node_48321 = chunk__47993_48318.cljs$core$IIndexed$_nth$arity$2(null,i__47995_48320);
if(cljs.core.not(node_48321.shadow$old)){
var path_match_48322 = shadow.cljs.devtools.client.browser.match_paths(node_48321.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48322)){
var new_link_48325 = (function (){var G__48032 = node_48321.cloneNode(true);
G__48032.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48322),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48032;
})();
(node_48321.shadow$old = true);

(new_link_48325.onload = ((function (seq__47989_48317,chunk__47993_48318,count__47994_48319,i__47995_48320,seq__47706,chunk__47708,count__47709,i__47710,new_link_48325,path_match_48322,node_48321,path,seq__47706__$1,temp__5753__auto__,map__47705,map__47705__$1,msg,updates,reload_info){
return (function (e){
var seq__48033_48328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48035_48329 = null;
var count__48036_48330 = (0);
var i__48037_48331 = (0);
while(true){
if((i__48037_48331 < count__48036_48330)){
var map__48043_48332 = chunk__48035_48329.cljs$core$IIndexed$_nth$arity$2(null,i__48037_48331);
var map__48043_48333__$1 = cljs.core.__destructure_map(map__48043_48332);
var task_48334 = map__48043_48333__$1;
var fn_str_48335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48043_48333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48043_48333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48337 = goog.getObjectByName(fn_str_48335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48336)].join(''));

(fn_obj_48337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48337.cljs$core$IFn$_invoke$arity$2(path,new_link_48325) : fn_obj_48337.call(null,path,new_link_48325));


var G__48338 = seq__48033_48328;
var G__48339 = chunk__48035_48329;
var G__48340 = count__48036_48330;
var G__48341 = (i__48037_48331 + (1));
seq__48033_48328 = G__48338;
chunk__48035_48329 = G__48339;
count__48036_48330 = G__48340;
i__48037_48331 = G__48341;
continue;
} else {
var temp__5753__auto___48342__$1 = cljs.core.seq(seq__48033_48328);
if(temp__5753__auto___48342__$1){
var seq__48033_48343__$1 = temp__5753__auto___48342__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48033_48343__$1)){
var c__4679__auto___48344 = cljs.core.chunk_first(seq__48033_48343__$1);
var G__48345 = cljs.core.chunk_rest(seq__48033_48343__$1);
var G__48346 = c__4679__auto___48344;
var G__48347 = cljs.core.count(c__4679__auto___48344);
var G__48348 = (0);
seq__48033_48328 = G__48345;
chunk__48035_48329 = G__48346;
count__48036_48330 = G__48347;
i__48037_48331 = G__48348;
continue;
} else {
var map__48045_48349 = cljs.core.first(seq__48033_48343__$1);
var map__48045_48350__$1 = cljs.core.__destructure_map(map__48045_48349);
var task_48351 = map__48045_48350__$1;
var fn_str_48352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045_48350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045_48350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48354 = goog.getObjectByName(fn_str_48352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48353)].join(''));

(fn_obj_48354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48354.cljs$core$IFn$_invoke$arity$2(path,new_link_48325) : fn_obj_48354.call(null,path,new_link_48325));


var G__48355 = cljs.core.next(seq__48033_48343__$1);
var G__48356 = null;
var G__48357 = (0);
var G__48358 = (0);
seq__48033_48328 = G__48355;
chunk__48035_48329 = G__48356;
count__48036_48330 = G__48357;
i__48037_48331 = G__48358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48321);
});})(seq__47989_48317,chunk__47993_48318,count__47994_48319,i__47995_48320,seq__47706,chunk__47708,count__47709,i__47710,new_link_48325,path_match_48322,node_48321,path,seq__47706__$1,temp__5753__auto__,map__47705,map__47705__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48322], 0));

goog.dom.insertSiblingAfter(new_link_48325,node_48321);


var G__48359 = seq__47989_48317;
var G__48360 = chunk__47993_48318;
var G__48361 = count__47994_48319;
var G__48362 = (i__47995_48320 + (1));
seq__47989_48317 = G__48359;
chunk__47993_48318 = G__48360;
count__47994_48319 = G__48361;
i__47995_48320 = G__48362;
continue;
} else {
var G__48363 = seq__47989_48317;
var G__48364 = chunk__47993_48318;
var G__48365 = count__47994_48319;
var G__48366 = (i__47995_48320 + (1));
seq__47989_48317 = G__48363;
chunk__47993_48318 = G__48364;
count__47994_48319 = G__48365;
i__47995_48320 = G__48366;
continue;
}
} else {
var G__48367 = seq__47989_48317;
var G__48368 = chunk__47993_48318;
var G__48369 = count__47994_48319;
var G__48370 = (i__47995_48320 + (1));
seq__47989_48317 = G__48367;
chunk__47993_48318 = G__48368;
count__47994_48319 = G__48369;
i__47995_48320 = G__48370;
continue;
}
} else {
var temp__5753__auto___48371__$1 = cljs.core.seq(seq__47989_48317);
if(temp__5753__auto___48371__$1){
var seq__47989_48372__$1 = temp__5753__auto___48371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47989_48372__$1)){
var c__4679__auto___48373 = cljs.core.chunk_first(seq__47989_48372__$1);
var G__48374 = cljs.core.chunk_rest(seq__47989_48372__$1);
var G__48375 = c__4679__auto___48373;
var G__48376 = cljs.core.count(c__4679__auto___48373);
var G__48377 = (0);
seq__47989_48317 = G__48374;
chunk__47993_48318 = G__48375;
count__47994_48319 = G__48376;
i__47995_48320 = G__48377;
continue;
} else {
var node_48378 = cljs.core.first(seq__47989_48372__$1);
if(cljs.core.not(node_48378.shadow$old)){
var path_match_48379 = shadow.cljs.devtools.client.browser.match_paths(node_48378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48379)){
var new_link_48380 = (function (){var G__48058 = node_48378.cloneNode(true);
G__48058.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48058;
})();
(node_48378.shadow$old = true);

(new_link_48380.onload = ((function (seq__47989_48317,chunk__47993_48318,count__47994_48319,i__47995_48320,seq__47706,chunk__47708,count__47709,i__47710,new_link_48380,path_match_48379,node_48378,seq__47989_48372__$1,temp__5753__auto___48371__$1,path,seq__47706__$1,temp__5753__auto__,map__47705,map__47705__$1,msg,updates,reload_info){
return (function (e){
var seq__48060_48381 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48062_48382 = null;
var count__48063_48383 = (0);
var i__48064_48384 = (0);
while(true){
if((i__48064_48384 < count__48063_48383)){
var map__48069_48385 = chunk__48062_48382.cljs$core$IIndexed$_nth$arity$2(null,i__48064_48384);
var map__48069_48386__$1 = cljs.core.__destructure_map(map__48069_48385);
var task_48387 = map__48069_48386__$1;
var fn_str_48388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48069_48386__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48069_48386__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48390 = goog.getObjectByName(fn_str_48388,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48389)].join(''));

(fn_obj_48390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48390.cljs$core$IFn$_invoke$arity$2(path,new_link_48380) : fn_obj_48390.call(null,path,new_link_48380));


var G__48391 = seq__48060_48381;
var G__48392 = chunk__48062_48382;
var G__48393 = count__48063_48383;
var G__48394 = (i__48064_48384 + (1));
seq__48060_48381 = G__48391;
chunk__48062_48382 = G__48392;
count__48063_48383 = G__48393;
i__48064_48384 = G__48394;
continue;
} else {
var temp__5753__auto___48395__$2 = cljs.core.seq(seq__48060_48381);
if(temp__5753__auto___48395__$2){
var seq__48060_48396__$1 = temp__5753__auto___48395__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48060_48396__$1)){
var c__4679__auto___48397 = cljs.core.chunk_first(seq__48060_48396__$1);
var G__48398 = cljs.core.chunk_rest(seq__48060_48396__$1);
var G__48399 = c__4679__auto___48397;
var G__48400 = cljs.core.count(c__4679__auto___48397);
var G__48401 = (0);
seq__48060_48381 = G__48398;
chunk__48062_48382 = G__48399;
count__48063_48383 = G__48400;
i__48064_48384 = G__48401;
continue;
} else {
var map__48070_48402 = cljs.core.first(seq__48060_48396__$1);
var map__48070_48403__$1 = cljs.core.__destructure_map(map__48070_48402);
var task_48404 = map__48070_48403__$1;
var fn_str_48405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48070_48403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48070_48403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48407 = goog.getObjectByName(fn_str_48405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48406)].join(''));

(fn_obj_48407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48407.cljs$core$IFn$_invoke$arity$2(path,new_link_48380) : fn_obj_48407.call(null,path,new_link_48380));


var G__48408 = cljs.core.next(seq__48060_48396__$1);
var G__48409 = null;
var G__48410 = (0);
var G__48411 = (0);
seq__48060_48381 = G__48408;
chunk__48062_48382 = G__48409;
count__48063_48383 = G__48410;
i__48064_48384 = G__48411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48378);
});})(seq__47989_48317,chunk__47993_48318,count__47994_48319,i__47995_48320,seq__47706,chunk__47708,count__47709,i__47710,new_link_48380,path_match_48379,node_48378,seq__47989_48372__$1,temp__5753__auto___48371__$1,path,seq__47706__$1,temp__5753__auto__,map__47705,map__47705__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48379], 0));

goog.dom.insertSiblingAfter(new_link_48380,node_48378);


var G__48412 = cljs.core.next(seq__47989_48372__$1);
var G__48413 = null;
var G__48414 = (0);
var G__48415 = (0);
seq__47989_48317 = G__48412;
chunk__47993_48318 = G__48413;
count__47994_48319 = G__48414;
i__47995_48320 = G__48415;
continue;
} else {
var G__48416 = cljs.core.next(seq__47989_48372__$1);
var G__48417 = null;
var G__48418 = (0);
var G__48419 = (0);
seq__47989_48317 = G__48416;
chunk__47993_48318 = G__48417;
count__47994_48319 = G__48418;
i__47995_48320 = G__48419;
continue;
}
} else {
var G__48420 = cljs.core.next(seq__47989_48372__$1);
var G__48421 = null;
var G__48422 = (0);
var G__48423 = (0);
seq__47989_48317 = G__48420;
chunk__47993_48318 = G__48421;
count__47994_48319 = G__48422;
i__47995_48320 = G__48423;
continue;
}
}
} else {
}
}
break;
}


var G__48424 = cljs.core.next(seq__47706__$1);
var G__48425 = null;
var G__48426 = (0);
var G__48427 = (0);
seq__47706 = G__48424;
chunk__47708 = G__48425;
count__47709 = G__48426;
i__47710 = G__48427;
continue;
} else {
var G__48428 = cljs.core.next(seq__47706__$1);
var G__48429 = null;
var G__48430 = (0);
var G__48431 = (0);
seq__47706 = G__48428;
chunk__47708 = G__48429;
count__47709 = G__48430;
i__47710 = G__48431;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48072){
var map__48073 = p__48072;
var map__48073__$1 = cljs.core.__destructure_map(map__48073);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48073__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48076){
var map__48077 = p__48076;
var map__48077__$1 = cljs.core.__destructure_map(map__48077);
var _ = map__48077__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48081,done,error){
var map__48083 = p__48081;
var map__48083__$1 = cljs.core.__destructure_map(map__48083);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48083__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48084,done,error){
var map__48086 = p__48084;
var map__48086__$1 = cljs.core.__destructure_map(map__48086);
var msg = map__48086__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48087){
var map__48088 = p__48087;
var map__48088__$1 = cljs.core.__destructure_map(map__48088);
var src = map__48088__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48089 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48089) : done.call(null,G__48089));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48094){
var map__48095 = p__48094;
var map__48095__$1 = cljs.core.__destructure_map(map__48095);
var msg__$1 = map__48095__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48095__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48096){var ex = e48096;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48098){
var map__48099 = p__48098;
var map__48099__$1 = cljs.core.__destructure_map(map__48099);
var env = map__48099__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48099__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48102){
var map__48103 = p__48102;
var map__48103__$1 = cljs.core.__destructure_map(map__48103);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48104){
var map__48105 = p__48104;
var map__48105__$1 = cljs.core.__destructure_map(map__48105);
var svc = map__48105__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
