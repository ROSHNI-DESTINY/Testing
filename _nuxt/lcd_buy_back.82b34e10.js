import{f as T,G as A,aa as D,p as w,i as t,t as r,q as _,F as n,R as N,o as s,D as j,j as e,s as u,x as k,A as o,T as x}from"./entry.e849d55d.js";import{l as S}from"./layout3.de1198b3.js";import"./mobileMenu.c46e92c0.js";import"./image-not-found.6e11aec0.js";import"./logo.bbc6aa26.js";const V={components:{layout3:S},data(){return{value:0}},computed:{...A(D,{menuList:"data",LcdList:"LcdData"})},head(){return{title:"Cart"}},methods:{async changeTable(c){this.value=c}}},F={class:"lcdbb-table section-b-space"},H={class:"container"},M={class:"row"},$={class:"col-sm-12 d-flex justify-content-center"},q={class:"row"},z={class:"col-md-6 d-flex d-flex justify-content-between"},E=["onClick"],G={class:"col-sm-12"},R={class:"table-responsive mt-4"},I={class:"table cart-table"},J=e("thead",null,[e("tr",{class:"table-head"},[e("th",{scope:"col"},"Model"),e("th",{scope:"col"},"A grade"),e("th",{scope:"col"},"B grade"),e("th",{scope:"col"},"C grade")])],-1),K={key:0},O={key:1},P={key:2},Q={key:3},U={key:4},W={key:5};function X(c,Y,Z,ee,i,f){const L=x,v=N,B=w("layout3");return s(),t(n,null,[r(v,null,{default:_(()=>[r(L,null,{default:_(()=>[j("Lcd Buy Back")]),_:1})]),_:1}),r(B,{pageName:"LCD Buy Back",parent:"LCD Buy Back",breadcrumb:!1},{default:_(()=>[e("section",F,[e("div",H,[e("div",M,[e("div",$,[e("div",q,[e("div",z,[(s(!0),t(n,null,u(c.LcdList.brand,(d,l)=>(s(),t("ul",{key:l},[e("li",{onClick:a=>f.changeTable(l),class:k(["m-2 main",i.value==l?"custome-style":"default-style"])},o(d.getcategories.name),11,E)]))),128))])])])]),(s(!0),t(n,null,u(c.LcdList.brand,(d,l)=>(s(),t("div",{class:k(["row",i.value==l?"":"d-none"]),key:l},[e("div",G,[e("div",R,[e("table",I,[J,e("tbody",null,[(s(!0),t(n,null,u(d.buy_back,(a,C)=>{var h,y,p,b,m,g;return s(),t("tr",{key:C},[e("td",null,o(a.model),1),a.grade_A.length>0?(s(),t("td",K,o((y=(h=c.LcdList)==null?void 0:h.currency)==null?void 0:y.symbol)+o(a.grade_A),1)):(s(),t("td",O,o(a.grade_A),1)),a.grade_B.length>0?(s(),t("td",P,o((b=(p=c.LcdList)==null?void 0:p.currency)==null?void 0:b.symbol)+o(a.grade_B),1)):(s(),t("td",Q,o(a.grade_B),1)),a.grade_C.length>0?(s(),t("td",U,o((g=(m=c.LcdList)==null?void 0:m.currency)==null?void 0:g.symbol)+o(a.grade_C),1)):(s(),t("td",W,o(a.grade_C),1))])}),128))])])])])],2))),128))])])]),_:1})],64)}const le=T(V,[["render",X]]);export{le as default};
