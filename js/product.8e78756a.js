(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{bd21:function(t,r,c){"use strict";var o=c("cd3a"),d=c.n(o);d.a},cd3a:function(t,r,c){},d2f1:function(t,r,c){"use strict";c.r(r);var o=function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{attrs:{id:"product"}},[c("div",{staticClass:"flex row",attrs:{id:"container"}},[c("div",{staticClass:"col-12 col-md-6",attrs:{id:"productsrc"}},[c("b-img",{attrs:{src:t.product.productsrc,fluid:""}})],1),c("div",{staticClass:"text-left col-12 col-md-6",attrs:{id:"productName"}},[c("div",{attrs:{id:"123"}}),c("h4",[t._v(t._s(t.product.sortName))]),c("h1",[t._v(t._s(t.product.productName))]),c("br"),c("p",[t._v("NT$"+t._s(t.product.productPrice))]),t.product.productStock>0?c("b-button",{staticClass:"cartStock",attrs:{variant:"dark"},on:{click:function(r){return t.addCart(t.product)}}},[c("b-icon",{staticClass:"text-warning",attrs:{icon:"cart-plus","font-scale":"1.5"}}),c("span",{staticClass:"ml-1"},[t._v(" Add To Cart")])],1):c("b-button",{attrs:{variant:"dark",disabled:""},on:{click:function(r){return t.addCart(t.product)}}},[c("span",{staticClass:"ml-1"},[t._v(" Sold Out")])]),c("hr"),c("br"),c("p",[t._v(t._s(t.product.productDescription))]),c("br"),c("p",[t._v("🔺採用德國軟陶，環保材質")]),c("p",[t._v("🔺低溫烘烤、無毒無味")]),c("p",[t._v("🔺防水不掉色、堅固有彈性")]),c("p",[t._v("🔺925純銀耳針/耳夾可選擇")]),c("br"),c("p",[t._v("⚠️商品為手工製作，表面有些微手紋壓痕 、烘烤出的小泡泡，屬正常現象，高標準者勿下單。")]),c("p",[t._v("⚠️在配戴的過程中請輕巧配戴，避免碰撞，並且盡量避免於洗澡、游泳、泡溫泉時配戴。")])],1)])])},d=[],u={data:function(){return{product:{sortName:"",productName:"",productPrice:"",productDescription:"",productStock:"",productsrc:"",productid:""},count:""}},computed:{id:function(){return this.$route.params.id}},mounted:function(){var t=this;this.axios.get("https://zuzucreationshop.herokuapp.com/productDetail/"+this.id).then((function(r){var c=r.data;c.success?(t.product.sortName=c.result.sortName,t.product.productName=c.result.productName,t.product.productPrice=c.result.productPrice,t.product.productDescription=c.result.productDescription,t.product.productStock=c.result.productStock,t.product.productsrc="https://zuzucreationshop.herokuapp.com/product/"+c.result.productsrc,t.product.productid=c.result._id):alert(c.message)})).catch((function(t){console.log(t),alert("發生錯誤")}))},methods:{addCart:function(t){this.product.productStock=t.productStock-1,this.$store.commit("addCart",t)}}},s=u,a=(c("bd21"),c("2877")),p=Object(a["a"])(s,o,d,!1,null,null,null);r["default"]=p.exports}}]);
//# sourceMappingURL=product.8e78756a.js.map