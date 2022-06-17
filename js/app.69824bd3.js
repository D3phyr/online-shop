(function(){var t={848:function(t,e,r){"use strict";var a=r(963),n=r(252);const o={id:"app"};function c(t,e,r,a,c,i){const u=(0,n.up)("v-main-page");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(u)])}const i={class:"v-main-page"};function u(t,e,r,a,o,c){const u=(0,n.up)("v-catalog"),s=(0,n.up)("v-cart");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(u),t.CART.length?((0,n.wg)(),(0,n.j4)(s,{key:0,cart_data:t.CART},null,8,["cart_data"])):(0,n.kq)("",!0)])}const s={class:"v-catalog"},d=(0,n._)("h1",null,"Catalog",-1),l={class:"v-catalog__list"};function p(t,e,r,a,o,c){const i=(0,n.up)("v-catalog-item");return(0,n.wg)(),(0,n.iD)("div",s,[d,(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.PRODUCTS,(t=>((0,n.wg)(),(0,n.j4)(i,{key:t.article,product_data:t,onAddToCart:c.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}var _=r(577);const m={class:"v-catalog-item"},v=["src"],f={class:"v-catalog-item__name"},g={class:"v-catalog-item__price"};function T(t,e,a,o,c,i){return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("img",{class:"v-catalog-item__image",src:r(990)("./"+a.product_data.image),alt:""},null,8,v),(0,n._)("p",f,(0,_.zw)(a.product_data.name),1),(0,n._)("p",g,(0,_.zw)(a.product_data.price)+" P",1),(0,n._)("button",{class:"v-catalog-item__btn",onClick:e[0]||(e[0]=(...t)=>i.addToCart&&i.addToCart(...t))},"Add to card")])}var C={name:"v-catalog-item",components:{},props:{product_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{addToCart(){this.$emit("addToCart",this.product_data)}},watch:{},mounted(){}},h=r(744);const O=(0,h.Z)(C,[["render",T]]);var R=O,w=r(907),D={name:"v-catalog",components:{vCatalogItem:R},props:{},data(){return{}},computed:{...(0,w.Se)(["PRODUCTS"])},methods:{...(0,w.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t)}},mounted(){this.GET_PRODUCTS_FROM_API()},watch:{}};const A=(0,h.Z)(D,[["render",p]]);var j=A;const E={class:"v-cart"},y=(0,n._)("h1",null,"Cart",-1);function b(t,e,r,a,o,c){const i=(0,n.up)("v-cart-item");return(0,n.wg)(),(0,n.iD)("div",E,[y,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.cart_data,((t,e)=>((0,n.wg)(),(0,n.j4)(i,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>c.deleteFromCart(e)},null,8,["cart_item_data","onDeleteFromCart"])))),128))])}const F={class:"v-cart-item"},S=["src"],P={class:"v-cart-item__info"},k={class:"v-cart-item__quantity"},x=(0,n._)("p",null,"Quantity:",-1);function M(t,e,a,o,c,i){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("img",{class:"v-cart-item__image",src:r(990)("./"+a.cart_item_data.image),alt:""},null,8,S),(0,n._)("div",P,[(0,n._)("p",null,(0,_.zw)(a.cart_item_data.name),1),(0,n._)("p",null,(0,_.zw)(a.cart_item_data.price),1),(0,n._)("p",null,(0,_.zw)(a.cart_item_data.article),1)]),(0,n._)("div",k,[x,(0,n.Uk)(" "+(0,_.zw)(a.cart_item_data.quantity),1)]),(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>i.deleteFromCart&&i.deleteFromCart(...t))},"Delete")])}var U={name:"v-cart-item",props:{cart_item_data:{type:Object,default(){return{}}}},mounted(){},methods:{deleteFromCart(){this.$emit("deleteFromCart")}}};const Z=(0,h.Z)(U,[["render",M]]);var z=Z,q={name:"v-cart",components:{vCartItem:z},data(){return{}},computed:{},methods:{...(0,w.nv)(["DELETE_FROM_CART"]),deleteFromCart(t){this.DELETE_FROM_CART(t)}},props:{cart_data:{type:Array,default(){return[]}}}};const I=(0,h.Z)(q,[["render",b]]);var G=I,L={name:"v-main-page",components:{vCatalog:j,vCart:G},computed:{...(0,w.Se)(["CART"])}};const N=(0,h.Z)(L,[["render",u]]);var H=N,K={name:"App",components:{vMainPage:H}};const V=(0,h.Z)(K,[["render",c]]);var W=V,Y=r(669),$=r.n(Y);let Q=new w.ZP.Store({state:{products:[],cart:[]},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let r=!1;t.cart.map((function(t){t.article===e.article&&(r=!0,t.quantity++)})),r||t.cart.push(e)}else t.cart.push(e)},REMOVE_FRON_CART:(t,e)=>{t.cart.map((function(t){t.quantity=1})),t.cart.splice(e,1)}},actions:{GET_PRODUCTS_FROM_API({commit:t}){return $()("https://d3phyr.github.io/jsonapi/db.json",{method:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))},ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FRON_CART",e)}},getters:{PRODUCTS(t){return t.products},CART(t){return t.cart}}});var B=Q;(0,a.ri)(W).use(B).mount("#app")},990:function(t,e,r){var a={"./1.jpg":97,"./2.jpg":253,"./3.jpg":672,"./4.jpg":668,"./5.jpg":279,"./6.jpeg":899};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id=990},97:function(t,e,r){"use strict";t.exports=r.p+"img/1.91dbd12e.jpg"},253:function(t,e,r){"use strict";t.exports=r.p+"img/2.cf849a2d.jpg"},672:function(t,e,r){"use strict";t.exports=r.p+"img/3.fade5a54.jpg"},668:function(t,e,r){"use strict";t.exports=r.p+"img/4.e89586de.jpg"},279:function(t,e,r){"use strict";t.exports=r.p+"img/5.a2f663fd.jpg"},899:function(t,e,r){"use strict";t.exports=r.p+"img/6.f38872e4.jpeg"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var c=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],o=t[d][2];for(var i=!0,u=0;u<a.length;u++)(!1&o||c>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[u])}))?a.splice(u--,1):(i=!1,o<c&&(c=o));if(i){t.splice(d--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/online-shop/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,c=a[0],i=a[1],u=a[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var d=u(r)}for(e&&e(a);s<c.length;s++)o=c[s],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},a=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(848)}));a=r.O(a)})();
//# sourceMappingURL=app.69824bd3.js.map