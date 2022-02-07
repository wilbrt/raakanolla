goog.provide('wscljs.spec');
wscljs.spec.not_nil_QMARK_ = (function wscljs$spec$not_nil_QMARK_(x){
return (!((x == null)));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("wscljs.spec","websocket-open","wscljs.spec/websocket-open",1725893736),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("wscljs.spec","not-nil?","wscljs.spec/not-nil?",-1214298972,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29102#","p1__29102#",1765423181,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-readyState",".-readyState",-120458075,null),new cljs.core.Symbol(null,"p1__29102#","p1__29102#",1765423181,null))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("wscljs.spec","not-nil?","wscljs.spec/not-nil?",-1214298972,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-readyState",".-readyState",-120458075,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wscljs.spec.not_nil_QMARK_,(function (p1__29102_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),p1__29102_SHARP_.readyState);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("wscljs.spec","on-message","wscljs.spec/on-message",674028229),new cljs.core.Symbol("wscljs.spec","not-nil?","wscljs.spec/not-nil?",-1214298972,null),wscljs.spec.not_nil_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("wscljs.spec","websocket-handler-map","wscljs.spec/websocket-handler-map",524425359),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-message","wscljs.spec/on-message",674028229)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-open","wscljs.spec/on-open",-472218246),new cljs.core.Keyword("wscljs.spec","on-close","wscljs.spec/on-close",-1649120945),new cljs.core.Keyword("wscljs.spec","on-error","wscljs.spec/on-error",-1139833213)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-message","wscljs.spec/on-message",674028229)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-open","wscljs.spec/on-open",-472218246),new cljs.core.Keyword("wscljs.spec","on-close","wscljs.spec/on-close",-1649120945),new cljs.core.Keyword("wscljs.spec","on-error","wscljs.spec/on-error",-1139833213)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29147){
return cljs.core.map_QMARK_(G__29147);
}),(function (G__29147){
return cljs.core.contains_QMARK_(G__29147,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
})], null),(function (G__29147){
return ((cljs.core.map_QMARK_(G__29147)) && (cljs.core.contains_QMARK_(G__29147,new cljs.core.Keyword(null,"on-message","on-message",1662987808))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-message","wscljs.spec/on-message",674028229)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-message","on-message",1662987808)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wscljs.spec","on-open","wscljs.spec/on-open",-472218246),new cljs.core.Keyword("wscljs.spec","on-close","wscljs.spec/on-close",-1649120945),new cljs.core.Keyword("wscljs.spec","on-error","wscljs.spec/on-error",-1139833213)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-message","on-message",1662987808)))], null),null])));

//# sourceMappingURL=wscljs.spec.js.map
