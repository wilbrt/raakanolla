goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k32930,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__32940 = k32930;
var G__32940__$1 = (((G__32940 instanceof cljs.core.Keyword))?G__32940.fqn:null);
switch (G__32940__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32930,else__4505__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__32943){
var vec__32944 = p__32943;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.color.CSSColor{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32929){
var self__ = this;
var G__32929__$1 = this;
return (new cljs.core.RecordIter((0),G__32929__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (223869596 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32931,other32932){
var self__ = this;
var this32931__$1 = this;
return (((!((other32932 == null)))) && ((((this32931__$1.constructor === other32932.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.red,other32932.red)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.green,other32932.green)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.blue,other32932.blue)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.hue,other32932.hue)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.saturation,other32932.saturation)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.lightness,other32932.lightness)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.alpha,other32932.alpha)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32931__$1.__extmap,other32932.__extmap)))))))))))))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k32930){
var self__ = this;
var this__4509__auto____$1 = this;
var G__32951 = k32930;
var G__32951__$1 = (((G__32951 instanceof cljs.core.Keyword))?G__32951.fqn:null);
switch (G__32951__$1) {
case "red":
case "green":
case "blue":
case "hue":
case "saturation":
case "lightness":
case "alpha":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32930);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__32929){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__32952 = cljs.core.keyword_identical_QMARK_;
var expr__32953 = k__4511__auto__;
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"red","red",-969428204),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(G__32929,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"green","green",-945526839),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,G__32929,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blue","blue",-622100620),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,G__32929,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hue","hue",-508078848),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__32929,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__32929,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__32929,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32952.cljs$core$IFn$_invoke$arity$2 ? pred__32952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__32953) : pred__32952.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__32953)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__32929,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__32929),null));
}
}
}
}
}
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"red","red",-969428204),self__.red,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"green","green",-945526839),self__.green,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__32929){
var self__ = this;
var this__4501__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__32929,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.call = (function() {
var G__33173 = null;
var G__33173__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__33173__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__33173__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
});
G__33173 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__33173__1.call(this,self__);
case 2:
return G__33173__2.call(this,self__,k);
case 3:
return G__33173__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__33173.cljs$core$IFn$_invoke$arity$1 = G__33173__1;
G__33173.cljs$core$IFn$_invoke$arity$2 = G__33173__2;
G__33173.cljs$core$IFn$_invoke$arity$3 = G__33173__3;
return G__33173;
})()
);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.apply = (function (self__,args32939){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32939)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.color/CSSColor",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.color/CSSColor");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.color/CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.color/CSSColor, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.map__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$map__GT_CSSColor(G__32933){
var extmap__4542__auto__ = (function (){var G__32959 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32933,new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], 0));
if(cljs.core.record_QMARK_(G__32933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32959);
} else {
return G__32959;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__32933),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgb(var_args){
var G__32962 = arguments.length;
switch (G__32962) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__32963){
var vec__32964 = p__32963;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(2),null);
var vs = vec__32964;
if(cljs.core.every_QMARK_((function (p1__32960_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_(p1__32960_SHARP_,(0),(255));
}),vs)){
var G__32967 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__32967) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__32967));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$lang$maxFixedArity = 3);

/**
 * Create an RGBA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgba(var_args){
var G__32969 = arguments.length;
switch (G__32969) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__32970){
var vec__32971 = p__32970;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_(a,(0),(1))){
var G__32974 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__32974) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__32974));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgba.cljs$lang$maxFixedArity = 4);

/**
 * Create an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsl(var_args){
var G__32977 = arguments.length;
switch (G__32977) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__32978){
var vec__32979 = p__32978;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979,(2),null);
var vec__32982 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32975_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__32975_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__32975_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32982,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32982,(1),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32982,(2),null);
if(((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_(s__$1,(0),(100))) && (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_(l__$1,(0),(100))))){
var G__32985 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod(h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__32985) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__32985));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$lang$maxFixedArity = 3);

/**
 * Create an HSLA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsla(var_args){
var G__32994 = arguments.length;
switch (G__32994) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__32998){
var vec__32999 = p__32998;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_(a,(0),(1))){
var G__33002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a);
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__33002) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__33002));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla.cljs$lang$maxFixedArity = 4);

/**
 * Return true if color is an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null))));
});
/**
 * Return true if color is an HSLA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsla_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null))));
});
/**
 * Return true if x is a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$color_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_(x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_(x)));
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hex_QMARK_(x){
return cljs.core.boolean$((function (){var and__4251__auto__ = typeof x === 'string';
if(and__4251__auto__){
return cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_re,x);
} else {
return and__4251__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hex__GT_rgb(s){
var temp__5753__auto__ = cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_re,s);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__33015 = temp__5753__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(1),null);
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(hex)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__33013_SHARP_){
return (new cljs.core.List(null,p1__33013_SHARP_,(new cljs.core.List(null,p1__33013_SHARP_,null,(1),null)),(2),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hex], 0))):hex);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33014_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(p1__33014_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0));
}),cljs.core.re_seq(/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgb__GT_hex(p__33021){
var map__33022 = p__33021;
var map__33022__$1 = cljs.core.__destructure_map(map__33022);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0))], 0))," ","0");
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.trim_one = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rgb__GT_hsl(p__33033){
var map__33034 = p__33033;
var map__33034__$1 = cljs.core.__destructure_map(map__33034);
var color = map__33034__$1;
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33034__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33034__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33034__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_(color)){
return color;
} else {
var vec__33036 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33029_SHARP_){
return (p1__33029_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33036,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33036,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33036,(2),null);
var mx = (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = r;
var y__4337__auto__ = g;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = b;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var mn = (function (){var x__4339__auto__ = (function (){var x__4339__auto__ = r;
var y__4340__auto__ = g;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = b;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__33039 = cljs.core._EQ_;
var expr__33040 = mx;
if(cljs.core.truth_((pred__33039.cljs$core$IFn$_invoke$arity$2 ? pred__33039.cljs$core$IFn$_invoke$arity$2(mn,expr__33040) : pred__33039.call(null,mn,expr__33040)))){
return (0);
} else {
if(cljs.core.truth_((pred__33039.cljs$core$IFn$_invoke$arity$2 ? pred__33039.cljs$core$IFn$_invoke$arity$2(r,expr__33040) : pred__33039.call(null,r,expr__33040)))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_((pred__33039.cljs$core$IFn$_invoke$arity$2 ? pred__33039.cljs$core$IFn$_invoke$arity$2(g,expr__33040) : pred__33039.call(null,g,expr__33040)))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_((pred__33039.cljs$core$IFn$_invoke$arity$2 ? pred__33039.cljs$core$IFn$_invoke$arity$2(b,expr__33040) : pred__33039.call(null,b,expr__33040)))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33040)].join('')));
}
}
}
}
})();
var l = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.trim_one(((mx + mn) / (2)));
var s = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.trim_one(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$3(cljs.core.mod(h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsl__GT_rgb(p__33050){
var map__33051 = p__33050;
var map__33051__$1 = cljs.core.__destructure_map(map__33051);
var color = map__33051__$1;
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_(color)){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__33052 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33049_SHARP_){
return ((0.5 + (p1__33049_SHARP_ * (255))) | (0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33055 = m1;
var G__33056 = m2;
var G__33057 = (h + (1.0 / (3)));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__33055,G__33056,G__33057) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.call(null,G__33055,G__33056,G__33057));
})(),(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(m1,m2,h) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.call(null,m1,m2,h)),(function (){var G__33058 = m1;
var G__33059 = m2;
var G__33060 = (h - (1.0 / (3)));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__33058,G__33059,G__33060) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb.call(null,G__33058,G__33059,G__33060));
})()], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(2),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hsl__GT_hex(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl__GT_rgb(color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hex__GT_hsl(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hsl(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_rgb(color));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip,(0),(100));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.zero_to_one_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip,0.0,1.0);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$as_hex(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hex(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl__GT_hex(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$as_rgb(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl__GT_rgb(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_rgb(x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$as_hsl(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb__GT_hsl(x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_hsl(x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip(x),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip(x)], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Converts a color to HSLA. Assumes an alpha value of 1.00 unless one is
 *   currently set on color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hsla = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$as_hsla(color){
var current_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsla_QMARK_(color)){
return color;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hsl(color),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),current_alpha);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.restrict_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$restrict_rgb(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.make_color_operation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation(op){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb_clip,op);
var a__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb(a));
var b__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb(b));
var G__33089 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__33089) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__33089));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__33199__delegate = function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op,day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2(a,b),more);
};
var G__33199 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__33200__i = 0, G__33200__a = new Array(arguments.length -  2);
while (G__33200__i < G__33200__a.length) {G__33200__a[G__33200__i] = arguments[G__33200__i + 2]; ++G__33200__i;}
  more = new cljs.core.IndexedSeq(G__33200__a,0,null);
} 
return G__33199__delegate.call(this,a,b,more);};
G__33199.cljs$lang$maxFixedArity = 2;
G__33199.cljs$lang$applyTo = (function (arglist__33201){
var a = cljs.core.first(arglist__33201);
arglist__33201 = cljs.core.next(arglist__33201);
var b = cljs.core.first(arglist__33201);
var more = cljs.core.rest(arglist__33201);
return G__33199__delegate(a,b,more);
});
G__33199.cljs$core$IFn$_invoke$arity$variadic = G__33199__delegate;
return G__33199;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__33202 = null;
if (arguments.length > 2) {
var G__33203__i = 0, G__33203__a = new Array(arguments.length -  2);
while (G__33203__i < G__33203__a.length) {G__33203__a[G__33203__i] = arguments[G__33203__i + 2]; ++G__33203__i;}
G__33202 = new cljs.core.IndexedSeq(G__33203__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__33202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__1;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.make_color_operation(cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.make_color_operation(cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.make_color_operation(cljs.core._STAR_);
/**
 * Divide the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.make_color_operation(cljs.core._SLASH_);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$update_hsla_field(color,field,f,v){
var v__$1 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(v,v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hsla(color),field,f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rotate_hue = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$rotate_hue(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33090_SHARP_){
return cljs.core.mod(p1__33090_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.saturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$saturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.desaturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$desaturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.lighten = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$lighten(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.darken = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$darken(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Decreases the alpha value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.transparentize = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$transparentize(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.zero_to_one_clip,cljs.core._),amount);
});
/**
 * Increases the alpha value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.opacify = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$opacify(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.zero_to_one_clip,cljs.core._PLUS_),amount);
});
/**
 * Return the inversion of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.invert = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$invert(color){
var G__33098 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb(color)], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__33098) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__33098));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$mix(var_args){
var G__33103 = arguments.length;
switch (G__33103) {
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___33218 = arguments.length;
var i__4865__auto___33219 = (0);
while(true){
if((i__4865__auto___33219 < len__4864__auto___33218)){
args_arr__4885__auto__.push((arguments[i__4865__auto___33219]));

var G__33220 = (i__4865__auto___33219 + (1));
i__4865__auto___33219 = G__33220;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb(color_1));
var c2 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.restrict_rgb(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_rgb(color_2));
var G__33104 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,c2], 0));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__33104) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_color.call(null,G__33104));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$core$IFn$_invoke$arity$2(color_1,color_2),more);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$lang$applyTo = (function (seq33100){
var G__33101 = cljs.core.first(seq33100);
var seq33100__$1 = cljs.core.next(seq33100);
var G__33102 = cljs.core.first(seq33100__$1);
var seq33100__$2 = cljs.core.next(seq33100__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33101,G__33102,seq33100__$2);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.mix.cljs$lang$maxFixedArity = (2));

/**
 * Return the complement of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$complement(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rotate_hue(color,(180));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hue_rotations(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33221 = arguments.length;
var i__4865__auto___33222 = (0);
while(true){
if((i__4865__auto___33222 < len__4864__auto___33221)){
args__4870__auto__.push((arguments[i__4865__auto___33222]));

var G__33223 = (i__4865__auto___33222 + (1));
i__4865__auto___33222 = G__33223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rotate_hue,color),amounts);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq33105){
var G__33106 = cljs.core.first(seq33105);
var seq33105__$1 = cljs.core.next(seq33105);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33106,seq33105__$1);
}));

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$analogous(var_args){
var G__33108 = arguments.length;
switch (G__33108) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$core$IFn$_invoke$arity$2(color,true);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((30)) : sign.call(null,(30))),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((60)) : sign.call(null,(60)))], 0));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.analogous.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.triad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$triad(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(120),(240)], 0));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$split_complement(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2(color,(130));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip((1),(179),distance_from_complement);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),d,(- d)], 0));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.split_complement.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.abs = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$tetrad(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2(color,(90));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip((1),(90),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.abs(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle)));
var color_2 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rotate_hue(color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rotate_hue(color,(0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.complement(color),color_2,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.complement(color_2)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.tetrad.cljs$lang$maxFixedArity = 2);

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$shades(var_args){
var G__33131 = arguments.length;
switch (G__33131) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$core$IFn$_invoke$arity$2(color,(10));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hsl(color);
var iter__4652__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$iter__33132(s__33133){
return (new cljs.core.LazySeq(null,(function (){
var s__33133__$1 = s__33133;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33133__$1);
if(temp__5753__auto__){
var s__33133__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33133__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__33133__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__33135 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__33134 = (0);
while(true){
if((i__33134 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__33134);
cljs.core.chunk_append(b__33135,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__33231 = (i__33134 + (1));
i__33134 = G__33231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33135),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$iter__33132(cljs.core.chunk_rest(s__33133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33135),null);
}
} else {
var i = cljs.core.first(s__33133__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$iter__33132(cljs.core.rest(s__33133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((100.0 / step) | (0))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.shades.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.ex_info_color_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown color ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set(cljs.core.keys(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_color = cljs.core.memoize((function (k){
return (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1(k) : day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_hex.call(null,k));
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.from_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$from_name(n){
var temp__5751__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.color_name__GT_color(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n));
if(cljs.core.truth_(temp__5751__auto__)){
var h = temp__5751__auto__;
return h;
} else {
throw day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.ex_info_color_name(n);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$scale_color_value(var_args){
var G__33146 = arguments.length;
switch (G__33146) {
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2 = (function (value,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4(value,amount,(0),(100));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4 = (function (value,amount,min_val,max_val){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip(min_val,max_val,(value * ((1) + (amount / (100)))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value.cljs$lang$maxFixedArity = 4);

/**
 * Scales the lightness of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_lightness = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$scale_lightness(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value,amount);
});
/**
 * Scales the saturation of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_saturation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$scale_saturation(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_color_value,amount);
});
/**
 * Scales the alpha of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.scale_alpha = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$scale_alpha(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.update_hsla_field(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(function (p1__33147_SHARP_,p2__33148_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.zero_to_one_clip((p1__33147_SHARP_ * ((1) + (p2__33148_SHARP_ / (100)))));
}),amount);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.decrown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$decrown_hex(hex){
return clojure.string.replace(hex,/^#/,"");
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.crown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find(/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.expand_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$expand_hex(hex){
var _ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.decrown_hex(hex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_,_], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),((_).length))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_long = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$hex__GT_long(hex){
return parseInt(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.expand_hex(clojure.string.replace(hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.long__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.weighted_mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$color$weighted_mix(color_1,color_2,weight){
var vec__33160 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33159_SHARP_){
return (p1__33159_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33160,(0),null);
var weight_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33160,(1),null);
var vec__33163 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hex__GT_long,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(0),null);
var long_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33163,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.crown_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.expand_hex(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.long__GT_hex(((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.js.map