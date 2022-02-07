goog.provide('demo.core');
demo.core.dev_setup = (function demo$core$dev_setup(){
if(demo.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
demo.core.mount_root = (function demo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.views.main_panel], null),root_el);
});
demo.core.init = (function demo$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","initialize-db","demo.events/initialize-db",390106396)], null));

demo.core.dev_setup();

return demo.core.mount_root();
});

//# sourceMappingURL=demo.core.js.map
