(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notice"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),b=n("7c73"),p=n("241c").f,d=n("06cf").f,I=n("9bf2").f,v=n("58a8").trim,h="Number",N=a[h],g=N.prototype,x=c(b(g))==h,w=function(t){var e,n,r,a,i,s,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,r)}return+u};if(i(h,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var E,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?f((function(){g.valueOf.call(n)})):c(n)!=h)?u(new N(w(e)),n,_):w(e)},y=r?p(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;y.length>A;A++)o(N,E=y[A])&&!o(_,E)&&I(_,E,d(N,E));_.prototype=g,g.constructor=_,s(a,h,_)}},c9d4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notice"}},[n("div",{attrs:{id:"container"}},[n("b-card",{staticStyle:{background:"rgba(255,255,255,0.5)"},attrs:{"no-body":""}},[n("b-tabs",{staticStyle:{"min-height":"60vh"},attrs:{pills:"",card:"",vertical:t.tabsRWD()},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.tabs,(function(e,r){return n("b-tab",{attrs:{title:e.title,"title-link-class":t.linkClass(r)}},t._l(e.contents,(function(e,a){return n("b-card-text",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r+a,expression:"'accordion-'+index+i"}],staticClass:"text-left",attrs:{block:"",variant:"light"}},[t._v("Q"+t._s(a+1)+"."+t._s(e.question))]),n("b-collapse",{attrs:{id:"accordion-"+r+a}},[n("b-card-text",{staticClass:"text-left p-2",domProps:{innerHTML:t._s(e.answer)}})],1)],1)})),1)})),1)],1)],1)])},a=[],i=(n("a9e3"),{data:function(){return{tabIndex:0,vertical:!1,tabs:[{title:"會員問題",contents:[{question:"該如何加入會員呢？",answer:"<p>請您點選右上角「登入/註冊」，可選擇「手機號碼驗證註冊」或「使用Facebook快速註冊」。</p>"},{question:"忘記密碼怎麼辦？",answer:"若您忘記密碼，請您先「會員登入」後，點選「忘記密碼」 再輸入註冊的電子郵件/手機號碼，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。"},{question:"忘記登入的會員帳號？",answer:"煩請直接與客服中心聯繫。"}]},{title:"購物問題",contents:[{question:"目前提供哪些付款方式？",answer:"目前提供付款方式有：<br>1.『超商取貨付款』，提供取貨付款的超商通路包括：7-11、全家、萊爾富、OK <br>2.宅配貨到付款（限台灣本島）"},{question:"如何查詢目前訂單的處理情況？",answer:"請您先「會員登入」後至「訂單查詢」，即可查詢該訂單的處理狀態。"}]},{title:"配送取貨",contents:[{question:"可以選擇的配送方式有哪些？",answer:"貨到付款"},{question:"請問運費如何計算？",answer:"<p>以下結帳方式之免運費標準，請依網站不定期公告之行銷活動為依據（唯訂單金額恕無法合併計算）。<br>1. 7-11、全家、萊爾富、OK超商取貨付款訂單，單筆購物滿1000元，即享有免運費優惠。純商品金額購物未滿1000元(999元以下)，單筆訂單將酌收50元物流費。<br>2. 宅配訂單(付款方式：信用卡、貨到付款、LINE Pay及 Apple Pay)，單筆訂單將酌收60元物流費。</p>"},{question:"台灣外島地區可以寄送嗎？",answer:"您可以選擇『超商取貨付款』或『信用卡/LINE Pay/Apple Pay付款』；若您採信用卡方式付款，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。"},{question:"訂購商品後需幾天的時間才可以收到商品呢？",answer:"常態的出貨時間為：今天下單，明天取貨。"}]}]}},props:{screenWidth:Number},methods:{linkClass:function(t){return this.tabIndex===t?["bg-info","text-light"]:["text-info"]},tabsRWD:function(){return this.screenWidth<768?this.vertical:""}}}),s=i,o=n("2877"),c=Object(o["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=notice.80c883cf.js.map