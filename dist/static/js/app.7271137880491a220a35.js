webpackJsonp([16],{"2sCs":function(o,e,t){o.exports=t("49fU")(13)},"49fU":function(o,e){o.exports=vendor_library},"9rMa":function(o,e,t){o.exports=t("49fU")(33)},LcRu:function(o,e,t){const s=t("cLQA");s.mock("/api/bannerdata",(o,e)=>({data:[{id:"1",img:"./static/img/goods/swipe_3.jpg"},{id:"2",img:"./static/img/goods/swipe_2.jpg"},{id:"3",img:"./static/img/goods/swipe_1.jpg"}]})),s.mock("/api/homedata",(o,e)=>({data:[{Category:{Id:"1",TopText:"休闲零食",TopNum:"one"},SalesProduct:[{CategoryId:"1",GoodsName:"坚果夹心海苔",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_1.jpg"},{CategoryId:"2",GoodsName:"卤汁牛肉",GoodsPrice:32,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_2.jpg"}]},{Category:{Id:"2",TopText:"糖果·巧克力",TopNum:"two"},SalesProduct:[{CategoryId:"1",GoodsName:"乐奈牛奶燕麦巧克力 ",GoodsPrice:78,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_1.jpg"},{CategoryId:"2",GoodsName:"牛轧糖",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_2.jpg"}]},{Category:{Id:"3",TopText:"饼干·糕点",TopNum:"three"},SalesProduct:[{CategoryId:"1",GoodsName:"苏打饼干 ",GoodsPrice:61,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_three_1.jpg"},{CategoryId:"2",GoodsName:"可可威化饼干",GoodsPrice:"22",GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_three_2.jpg"}]},{Category:{Id:"4",TopText:"果冻·布丁",TopNum:"four"},SalesProduct:[{CategoryId:"1",GoodsName:"粒粒鲜果冻 ",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_four_1.jpg"},{CategoryId:"2",GoodsName:"葡萄果汁软糖",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_four_2.jpg"}]},{Category:{Id:"5",TopText:"坚果·炒货",TopNum:"five"},SalesProduct:[{CategoryId:"1",GoodsName:"夏威夷果",GoodsPrice:189,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_five_1.jpg"},{CategoryId:"2",GoodsName:"坚果混合",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_five_2.jpg"}]},{Category:{Id:"6",TopText:"膨化·薯片",TopNum:"six"},SalesProduct:[{CategoryId:"1",GoodsName:"风味虾片 ",GoodsPrice:199,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_six_1.jpg"},{CategoryId:"2",GoodsName:"大胡子烧烤味薯片",GoodsPrice:28,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_six_2.jpg"}]}]})),s.mock("/api/menudata",(o,e)=>({data:[{cat_name:"休闲零食"},{cat_name:"糖果·巧克力"},{cat_name:"饼干·糕点"},{cat_name:"果冻·布丁"},{cat_name:"坚果·炒货"},{cat_name:"膨化·薯片"}]})),s.mock("/api/categorydata",(o,e)=>({data:[{busines:{business_id:1,business_name:"休闲零食"},cart:[{CategoryId:"1",GoodsName:"坚果夹心海苔",GoodsPrice:66,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_1.jpg"},{CategoryId:"2",GoodsName:"卤汁牛肉",GoodsPrice:88,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_2.jpg"},{CategoryId:"3",GoodsName:"青豌豆",GoodsPrice:8,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_3.jpg"},{CategoryId:"4",GoodsName:"薯条脆",GoodsPrice:12,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_4.jpg"},{CategoryId:"5",GoodsName:"小米锅巴",GoodsPrice:50,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_5.jpg"},{CategoryId:"6",GoodsName:"碳烤牛肉",GoodsPrice:80,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_one_6.jpg"}]},{busines:{business_id:2,business_name:"糖果巧克力"},cart:[{CategoryId:"1",GoodsName:"乐奈牛奶燕麦巧克力 ",GoodsPrice:78,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_1.jpg"},{CategoryId:"2",GoodsName:"牛轧糖",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_2.jpg"},{CategoryId:"3",GoodsName:"冲绳黑糖",GoodsPrice:18,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_3.jpg"},{CategoryId:"4",GoodsName:"牛奶抹茶糖",GoodsPrice:22,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_4.jpg"},{CategoryId:"5",GoodsName:"苹果味糖果",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_5.jpg"},{CategoryId:"6",GoodsName:"松露巧克力",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_two_6.jpg"}]},{busines:{business_id:1,business_name:"饼干糕点"},cart:[{CategoryId:"1",GoodsName:"苏打饼干 ",GoodsInfo:"单果重约150g-180g 新鲜水果",GoodsPrice:61,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_three_1.jpg"},{CategoryId:"2",GoodsName:"可可威化饼干",GoodsInfo:"12个 约80mm 总重约2.6kg 新鲜水果 ",GoodsPrice:"22",GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_three_2.jpg"}]},{busines:{business_id:1,business_name:"果冻布丁"},cart:[{CategoryId:"1",GoodsName:"粒粒鲜果冻 ",GoodsInfo:"一整箱送女友礼盒 74包休闲麻辣零食礼包美味小吃 粉girl1320g",GoodsPrice:59,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_four_1.jpg"},{CategoryId:"2",GoodsName:"葡萄果汁软糖",GoodsInfo:"特产约辣辣条200g/盒 ",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_four_2.jpg"}]},{busines:{business_id:1,business_name:"坚果炒货"},cart:[{CategoryId:"1",GoodsName:"夏威夷果",GoodsInfo:"微压蒸汽阀 24小时智能预约 黄晶内胆3L电饭锅MB-WFS3018Q 11.11好货提前抢",GoodsPrice:189,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_five_1.jpg"},{CategoryId:"2",GoodsName:"坚果混合",GoodsInfo:"坚果混合",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_five_2.jpg"}]},{busines:{business_id:1,business_name:"膨化薯片"},cart:[{CategoryId:"1",GoodsName:"风味虾片 ",GoodsInfo:"爽肤水乳液眼霜面霜 (补水保湿鲜活水嫩 护肤化妆品女护肤套装） ",GoodsPrice:199,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_six_1.jpg"},{CategoryId:"2",GoodsName:"大胡子烧烤味薯片",GoodsInfo:"大胡子烧烤味薯片",GoodsPrice:28,GoodsNum:1,GoodsImage:"./static/img/goods/home_floor_six_2.jpg"}]}]}))},MVMM:function(o,e,t){o.exports=t("49fU")(10)},NHnr:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};t.d(s,"goods",function(){return h}),t.d(s,"carts",function(){return I}),t.d(s,"orders",function(){return N}),t.d(s,"pays",function(){return P}),t.d(s,"address",function(){return b}),t.d(s,"chooseaddress",function(){return y}),t.d(s,"ischoose",function(){return C}),t.d(s,"tabindex",function(){return S}),t.d(s,"comname",function(){return j}),t.d(s,"ordercur",function(){return v}),t.d(s,"ordertab",function(){return x});var n=t("MVMM"),d=t("9rMa"),a=t("3cXf"),i=t.n(a),r=t("aA9S"),m=t.n(r),c=(t("kNAH"),{name:"app",created:function(){var o=this;localStorage.getItem("userMsg")&&this.$store.replaceState(m()(this.$store.state,JSON.parse(localStorage.getItem("userMsg")))),window.addEventListener("beforeunload",function(){localStorage.setItem("userMsg",i()(o.$store.state))})}}),u={render:function(){var o=this.$createElement,e=this._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var g=t("vSla")(c,u,!1,function(o){t("XJt8")},null,null).exports,f=t("zO6J");n.default.use(f.default);var l,p=function(o){Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"42Hy")).then(function(e){o(e)})},G=new f.default({routes:[{path:"/",component:p},{path:"/index",component:p},{path:"/category",component:function(o){Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"jgxu")).then(function(e){o(e)})}},{path:"/cart",component:function(o){Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"2vAq")).then(function(e){o(e)})}},{path:"/member",component:function(o){Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"KskE")).then(function(e){o(e)})}},{path:"/info",component:function(o){Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"pQAE")).then(function(e){o(e)})}},{path:"/order",component:function(o){Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"3J/j")).then(function(e){o(e)})}},{path:"/address",component:function(o){Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"RtdA")).then(function(e){o(e)})}},{path:"/addaddress",component:function(o){Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"23aH")).then(function(e){o(e)})}},{path:"/detail",component:function(o){Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"MIom")).then(function(e){o(e)})}},{path:"/orderwait",component:function(o){Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"NWtr")).then(function(e){o(e)})}},{path:"/waitpay",component:function(o){Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"WxFB")).then(function(e){o(e)})}},{path:"/waitdeliver",component:function(o){Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"69UQ")).then(function(e){o(e)})}},{path:"/waitreceive",component:function(o){Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"sylV")).then(function(e){o(e)})}},{path:"/orderdown",component:function(o){Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"ZOPs")).then(function(e){o(e)})}}]}),_=t("mUbh"),h=function(o){return o.goods},I=function(o){return o.carts},N=function(o){return o.orders},P=function(o){return o.pays},b=function(o){return o.address},y=function(o){return o.chooseaddress},C=function(o){return o.ischoose},S=function(o){return o.tabindex},j=function(o){return o.comname},v=function(o){return o.ordercur},x=function(o){return o.ordertab},T={address:["广东省深圳市 南山区"],carts:[{CategoryId:"1",GoodsName:"默认商品",GoodsPrice:9,GoodsNum:1,GoodsImage:"./static/img/github.png"}],comname:"index",ordercur:1},w=t("a3Yh"),E=t.n(w),A=[],M=[],O=(l={},E()(l,"SET_GOODS",function(o,e){o.goods=e}),E()(l,"SET_CARTS",function(o,e){A.push(e),o.carts=A}),E()(l,"SET_ORDERS",function(o,e){o.orders=e}),E()(l,"SET_PAYS",function(o,e){o.pays=e}),E()(l,"SET_ADDRESS",function(o,e){M.push(e),o.address=M}),E()(l,"SET_CHOOSEADDRESS",function(o,e){o.chooseaddress=e}),E()(l,"SET_ISCHOOSE",function(o,e){o.ischoose=e}),E()(l,"SET_TABINDEX",function(o,e){o.tabindex=e}),E()(l,"SET_COMNAME",function(o,e){o.comname=e}),E()(l,"SET_ORDERCUR",function(o,e){o.ordercur=e}),E()(l,"SET_ORDERTAB",function(o,e){o.ordertab=e}),l);t("6LYt");n.default.use(d.default);var R=new d.default.Store({actions:_,getters:s,state:T,mutations:O,strice:!1,plugins:[]}),D=(t("DMPO"),t("2sCs")),k=t.n(D),U=t("zdS3"),H=t.n(U),L=t("iDdd"),J=t.n(L),z=t("hn2z"),$=new(t.n(z).a),B=(e.default=$,t("GTOL"));t("LcRu"),J.a.attach(document.body),n.default.use(d.default),n.default.prototype.$http=k.a,n.default.use(B,{name:"v-touch"}),B.config.swipe={direction:"horizontal",threshold:200},n.default.config.productionTip=!1;n.default.config.debug=!1,n.default.config.devtools=!1,n.default.config.productionTip=!1,n.default.use(H.a,{preLoad:1.3,error:"./static/img/github.png",loading:"./static/img/github.png"}),new n.default({el:"#app",router:G,store:R,template:"<App/>",components:{App:g}})},XJt8:function(o,e){},kNAH:function(o,e){!function(o){function e(s){if(t[s])return t[s].exports;var n=t[s]={exports:{},id:s,loaded:!1};return o[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};e.m=o,e.c=t,e.p="",e(0)}([function(o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=window;e.default=t.flex=function(o,e){var s=o||100,n=e||1,d=t.document,a=navigator.userAgent,i=a.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),r=a.match(/U3\/((\d+|\.){5,})/i),m=r&&parseInt(r[1].split(".").join(""),10)>=80,c=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),u=t.devicePixelRatio||1;c||i&&i[1]>534||m||(u=1);var g=1/u,f=d.querySelector('meta[name="viewport"]');f||((f=d.createElement("meta")).setAttribute("name","viewport"),d.head.appendChild(f)),f.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+g+",maximum-scale="+g+",minimum-scale="+g),d.documentElement.style.fontSize=s/2*u*n+"px"},o.exports=e.default}]),flex(100,1)},mUbh:function(o,e){},zO6J:function(o,e,t){o.exports=t("49fU")(32)}},["NHnr"]);