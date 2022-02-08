goog.provide('demo.views');
demo.views.cell = (function demo$views$cell(row,col){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","gamemarkers","demo.subs/gamemarkers",-923404545)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","shoot","demo.events/shoot",1811613795),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null));
}),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("cell_")], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''))], null))], null);
});
demo.views.row = (function demo$views$row(n,max){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("row_")], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29799_SHARP_){
return demo.views.cell(n,p1__29799_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(max)))], null);
});
demo.views.game = (function demo$views$game(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29800_SHARP_){
return demo.views.row(p1__29800_SHARP_,(20));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
});
demo.views.findmatch = (function demo$views$findmatch(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","connect-websocket","demo.events/connect-websocket",-1095086621)], null));
})], null),"Find Match!"], null);
});
demo.views.main_panel = (function demo$views$main_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","name","demo.subs/name",-1180320885)], null));
var game = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","in-game","demo.subs/in-game",1123798703)], null));
var result = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","result","demo.subs/result",-2129125999)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Raaka Ristinolla"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result))], null),((cljs.core.not(cljs.core.deref(game)))?demo.views.findmatch():null),(cljs.core.truth_(cljs.core.deref(game))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29801_SHARP_){
return demo.views.row(p1__29801_SHARP_,(20));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)))):null)], null);
});

//# sourceMappingURL=demo.views.js.map
