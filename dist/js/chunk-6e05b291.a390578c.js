(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e05b291"],{"053b":function(t,e,r){var n=r("1e2c"),o=r("d910").f,i=Function.prototype,s=i.toString,a=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},"0a51":function(t,e,r){"use strict";var n=r("1c8b"),o=r("1e2c"),i=r("d890"),s=r("faa8"),a=r("a719"),c=r("d910").f,l=r("c69d"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var h=f.prototype=u.prototype;h.constructor=f;var p=h.toString,m="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(d,t))return"";var r=m?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},"14d9":function(t,e,r){},"1a69":function(t,e,r){},"1c2e":function(t,e,r){"use strict";var n=r("1944"),o=r("857c"),i=r("efe2"),s=r("99ad"),a="toString",c=RegExp.prototype,l=c[a],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=a;(u||d)&&n(RegExp.prototype,a,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?s.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},2041:function(t,e,r){},"22cb":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},3266:function(t,e,r){"use strict";var n=r("8378"),o=r.n(n);o.a},"400c":function(t,e,r){"use strict";var n=r("48f0"),o=r.n(n);o.a},4550:function(t,e,r){"use strict";var n=r("b5cd"),o=r.n(n);o.a},"48f0":function(t,e,r){},"549b":function(t,e,r){"use strict";var n=r("5db0"),o=r.n(n);o.a},"5db0":function(t,e,r){},"77ad":function(t,e,r){"use strict";var n=r("1c8b"),o=r("a719"),i=r("74e7"),s=r("e1d6"),a=r("d88d"),c=r("da10"),l=r("1bbd"),u=r("90fb"),d=r("1ea7"),f=r("ff9c"),h=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),v=[].slice,A=Math.max;n({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var r,n,u,d=c(this),f=a(d.length),h=s(t,f),p=s(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,h,p);for(n=new(void 0===r?Array:r)(A(p-h,0)),u=0;h<p;h++,u++)h in d&&l(n,u,d[h]);return n.length=u,n}})},"828b":function(t,e,r){"use strict";var n=r("e365"),o=r.n(n);o.a},8378:function(t,e,r){},"95d6":function(t,e){t.exports="data:image/png;base64,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"},"96db":function(t,e,r){"use strict";var n=r("f62c").charAt,o=r("b702"),i=r("99ee"),s="String Iterator",a=o.set,c=o.getterFor(s);i(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"98e0f":function(t,e,r){var n=r("1c8b"),o=r("e62b"),i=r("f471"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:o})},"9b11":function(t,e,r){var n=r("6d51");n("iterator")},"9bd0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.ctitles,(function(e,n){return r("div",{key:e,staticClass:"tab-control-item",on:{click:function(e){return t.tabItemClick(n)}}},[r("span",{class:{active:n===t.currentIndex}},[t._v(t._s(e))])])})),0)},o=[],i={name:"TabControl",props:{ctitles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{tabItemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},s=i,a=(r("400c"),r("4023")),c=Object(a["a"])(s,n,o,!1,null,"1ae05351",null);e["a"]=c.exports},a3e0:function(t,e,r){"use strict";var n=r("d3a7"),o=r.n(n);o.a},af86:function(t,e,r){var n=r("d890"),o=r("064b"),i=r("a133"),s=r("0fc1"),a=r("90fb"),c=a("iterator"),l=a("toStringTag"),u=i.values;for(var d in o){var f=n[d],h=f&&f.prototype;if(h){if(h[c]!==u)try{s(h,c,u)}catch(m){h[c]=u}if(h[l]||s(h,l,d),o[d])for(var p in i)if(h[p]!==i[p])try{s(h,p,i[p])}catch(m){h[p]=i[p]}}}},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTapFixed,expression:"isTapFixed"}],ref:"tabControl1",staticClass:"home-tab-control",attrs:{ctitles:["流行","新款","精选"]},on:{tabClick:t.pTabClick}}),r("scroller",{ref:"scroller",staticClass:"home-scroller",attrs:{"probe-type":3,pullUpload:!0},on:{scroll:t.getPostion,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{cbanners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("home-recommend",{attrs:{cproducts:t.recommends}}),r("home-feature-view"),r("tab-control",{ref:"tabControl2",attrs:{ctitles:["流行","新款","精选"]},on:{tabClick:t.pTabClick}}),r("goods-list",{attrs:{cgoods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTopClick(e)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return i(t)}r("f3dd"),r("0a51"),r("9b11"),r("98e0f"),r("a133"),r("e18c"),r("96db"),r("af86");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("77ad"),r("053b"),r("1c2e");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||a(t)||c(t)||l()}var d=r("a7ac"),f=r("1bab");function h(){return Object(f["a"])({url:"home/multidata"})}function p(t,e){return Object(f["a"])({url:"/home/data",params:{type:t,page:e}})}var m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",{staticClass:"home-swiper"},t._l(t.cbanners,(function(e){return r("swiper-item",{key:e.image},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.imgload}})])])})),1)},v=[],A=r("dc2c"),b={name:"HomeSwiper",props:{cbanners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:A["a"],SwiperItem:A["b"]},methods:{imgload:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},g=b,y=r("4023"),w=Object(y["a"])(g,m,v,!1,null,"7a76f5db",null),C=w.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-recommend"},t._l(t.filterT4(t.cproducts),(function(e){return r("div",{key:e.image,staticClass:"home-recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("p",{domProps:{textContent:t._s(e.title)}})])])})),0)},x=[],D={name:"HomeRecommend",props:{cproducts:{type:Array,default:function(){return[]}}},methods:{filterT4:function(){return this.cproducts.slice(0,4)}}},k=D,I=(r("e6fb"),Object(y["a"])(k,T,x,!1,null,"d0e50c7a",null)),S=I.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-feature"},[n("a",{attrs:{href:"http://adi-v3.dev"}},[n("img",{attrs:{src:r("22cb"),alt:""}})])])}],E={name:"HomeFeatureView"},j=E,z=(r("a3e0"),Object(y["a"])(j,P,H,!1,null,"487f911c",null)),O=z.exports,W=r("9bd0"),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"good-list"},t._l(t.cgoods,(function(t){return r("good-list-item",{key:t.show.img,attrs:{"good-item":t}})})),1)},L=[],U=r("e334"),F={name:"GoodsList",props:{cgoods:{type:Array,default:function(){return[]}}},components:{GoodListItem:U["a"]}},G=F,B=(r("defd"),Object(y["a"])(G,q,L,!1,null,"e47f64a4",null)),N=B.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"wrapper"},[r("div",[t._t("default")],2)])},R=[],M=(r("513c"),r("ecd2")),_={name:"scroller",data:function(){return{scroller:{type:Object,default:function(){return{}}}}},props:{probeType:{type:Number,default:0},pullUpload:{type:Boolean,default:!1}},mounted:function(){var t=this;this.scroller=new M["a"](this.$refs.wrapper,{probeType:this.probeType,click:!0,pullUpload:this.pullUpload}),this.scroller.on("scroll",(function(e){t.$emit("scroll",e)})),this.scroller.on("pullingUp",(function(){t.$emit("pullingUp")}))},methods:{scrollTo:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.scroller&&this.scroller.scrollTo(t,e,r)},finishPullUp:function(){this.scroller&&this.scroller.finishPullUp()},refresh:function(){this.scroller&&this.scroller.refresh()},getScrollY:function(){return this.scroller?this.scroller.y:0}}},V=_,Y=Object(y["a"])(V,X,R,!1,null,"58f410ba",null),Z=Y.exports,J=r("fdd6"),K={name:"Home",components:{NavBar:d["a"],HomeSwiper:C,HomeRecommend:S,HomeFeatureView:O,TabControl:W["a"],GoodsList:N,Scroller:Z,BackTop:J["a"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,taboffsetTop:0,isTapFixed:!1,saveY:0}},created:function(){this.getHomeData(),this.getHomeGoodsData("pop"),this.getHomeGoodsData("new"),this.getHomeGoodsData("sell")},mounted:function(){var t=this.debounce(this.$refs.scroller.refresh,200);this.$bus.$on("imageload",(function(){t()}))},methods:{getHomeData:function(){var t=this;h().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoodsData:function(t){var e=this,r=this.goods[t].page+1;p(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,u(r.data.list)),e.goods[t].page=r.data.page,e.$refs.scroller.finishPullUp()}))},backTopClick:function(){this.$refs.scroller.scrollTo(0,0,500)},pTabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},getPostion:function(t){this.isShowBackTop=-t.y>1e3,this.isTapFixed=-t.y>this.taboffsetTop},loadMore:function(){this.getHomeGoodsData(this.currentType)},debounce:function(t,e){var r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];r&&clearTimeout(r),r=setTimeout((function(){t.apply(n,i)}),e)}},swiperImageLoad:function(){this.taboffsetTop=this.$refs.tabControl2.$el.offsetTop}},computed:{showGoods:function(){return this.goods[this.currentType].list}},destroyed:function(){console.log("home")},activated:function(){this.$refs.scroller.scrollTo(0,this.saveY,0),this.$refs.scroller.refresh()},deactivated:function(){this.saveY=this.$refs.scroller.getScrollY()}},Q=K,$=(r("4550"),Object(y["a"])(Q,n,o,!1,null,"e35cd08c",null));e["default"]=$.exports},b5cd:function(t,e,r){},d3a7:function(t,e,r){},dc2c:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"hy-swiper"}},[r("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),r("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,n){return r("div",{key:n,staticClass:"indi-item",class:{active:n===t.currentIndex-1}})}))):t._e()],2)],2)},o=[],i=(r("513c"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),200)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var r=e[0].cloneNode(!0),n=e[this.slideCount-1].cloneNode(!0);t.insertBefore(n,e[0]),t.appendChild(r),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,r=this.distance+e;this.setTransform(r)},touchEnd:function(){var t=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,a=(r("3266"),r("4023")),c=Object(a["a"])(s,n,o,!1,null,"e7ecc25c",null),l=c.exports,u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slide"},[t._t("default")],2)},d=[],f={name:"Slide"},h=f,p=(r("828b"),Object(a["a"])(h,u,d,!1,null,"4d154875",null)),m=p.exports},defd:function(t,e,r){"use strict";var n=r("14d9"),o=r.n(n);o.a},e334:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-item",on:{click:t.itemClick}},[r("img",{attrs:{src:t.goodItem.show.img,alt:""},on:{load:t.imageload}}),r("div",{staticClass:"goods-info"},[r("p",[t._v(t._s(t.goodItem.title))]),r("span",{staticClass:"price"},[t._v(t._s(t.goodItem.price))]),r("span",{staticClass:"collect"},[t._v(t._s(t.goodItem.sale))])])])},o=[],i={name:"GoodListItem",props:{goodItem:{type:Object,default:function(){return{}}}},methods:{imageload:function(){this.$bus.$emit("imageload")},itemClick:function(){this.$router.push("/detail/"+this.goodItem.iid)}}},s=i,a=(r("549b"),r("4023")),c=Object(a["a"])(s,n,o,!1,null,"513d160e",null);e["a"]=c.exports},e365:function(t,e,r){},e62b:function(t,e,r){"use strict";var n=r("e349"),o=r("3553"),i=r("69c5"),s=r("98a9"),a=r("d88d"),c=r("1bbd"),l=r("b60f");t.exports=function(t){var e,r,u,d,f,h,p=o(t),m="function"==typeof this?this:Array,v=arguments.length,A=v>1?arguments[1]:void 0,b=void 0!==A,g=l(p),y=0;if(b&&(A=n(A,v>2?arguments[2]:void 0,2)),void 0==g||m==Array&&s(g))for(e=a(p.length),r=new m(e);e>y;y++)h=b?A(p[y],y):p[y],c(r,y,h);else for(d=g.call(p),f=d.next,r=new m;!(u=f.call(d)).done;y++)h=b?i(d,A,[u.value,y],!0):u.value,c(r,y,h);return r.length=y,r}},e6fb:function(t,e,r){"use strict";var n=r("2041"),o=r.n(n);o.a},fdd6:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-top"},[n("img",{attrs:{src:r("95d6"),alt:""}})])}],i={name:"BackTop"},s=i,a=(r("ffd9"),r("4023")),c=Object(a["a"])(s,n,o,!1,null,"52372da6",null);e["a"]=c.exports},ffd9:function(t,e,r){"use strict";var n=r("1a69"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-6e05b291.a390578c.js.map