import{f as b,Q as y,an as v,a1 as g,p as d,i,t as a,q as n,F as S,R as x,o as l,D as r,j as e,A as c,v as O,z as T,T as C,O as D,P as N}from"./entry.e849d55d.js";import{l as k}from"./layout3.de1198b3.js";import{b as w}from"./breadcrumb3.137c6283.js";import{_ as I}from"./mobileMenu.c46e92c0.js";import"./image-not-found.6e11aec0.js";import"./logo.bbc6aa26.js";const F={data(){return{order:"",isLoading:!1,country:"",state:"",currency:""}},components:{layout3:k,breadcrumb3:w},head(){return{title:"Order Success"}},methods:{getDetails:async function(o){let t=await y("order",{orderid:o});t.success&&(this.order=t.data.order,this.country=t.data.country,this.state=t.data.state,this.currency=t.data.currency,this.isLoading=!0)},formatDate:v},mounted(){this.$route.params.id&&this.getDetails(this.$route.params.id)},beforeMount(){localStorage.getItem("token")!==null&&g().addToCart({flag:"removeallProduct"})}},u=o=>(D("data-v-47e6aa77"),o=o(),N(),o),M={class:"cash-app-od-main"},V={class:"row d-flex justify-content-center"},j={class:"col-md-8"},q={key:0,class:"cash-app-od"},B=u(()=>e("figure",null,[e("img",{src:I,alt:""})],-1)),P=u(()=>e("p",null," Please Mention your Order Number in the Zelle Memo before sending your invoice amount. Thank You ",-1)),H={class:"paypal-cls"};function L(o,t,Y,$,s,_){const p=C,m=x,f=d("breadcrumb3"),h=d("layout3");return l(),i(S,null,[a(m,null,{default:n(()=>[a(p,null,{default:n(()=>[r("Order Success")]),_:1})]),_:1}),a(h,{breadcrumb:!1,pageName:"Order Success",parent:"Order Success"},{breadcrumb:n(()=>[a(f)]),default:n(()=>[e("div",M,[e("div",V,[e("div",j,[s.order!==""?(l(),i("div",q,[B,e("p",null,[r(" This is Your Order Number "),e("b",null,"#"+c(s.order.uniqueid),1)]),P,e("p",null,[r(" Order Date : "),e("b",null,c(_.formatDate(s.order.created_at)),1),r(" & Order Total : "),e("b",null,c(s.currency.symbol)+c(parseFloat(s.order.total).toFixed(2)),1),r(". ")])])):O("",!0),e("div",H,[e("button",{href:"javascript:void(0)",onClick:t[0]||(t[0]=T(z=>o.$router.push("/"),["prevent"])),type:"button",class:"btn btn-solid-default mx-1 btn-sm"},"Continue Shopping")])])])])]),_:1})],64)}const J=b(F,[["render",L],["__scopeId","data-v-47e6aa77"]]);export{J as default};