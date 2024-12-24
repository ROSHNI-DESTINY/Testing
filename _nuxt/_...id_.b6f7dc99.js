import{f as D,an as T,o as l,i as n,j as e,A as s,u as c,B as u,F as J,s as L,I as S,v as i,D as r,t as h,q as p,N as P,z as q,Q as B,a1 as j,p as N,R as I,c as C,T as V}from"./entry.e849d55d.js";import{g as A,_ as M}from"./image-not-found.6e11aec0.js";import{l as H}from"./layout3.de1198b3.js";import{b as Q}from"./breadcrumb3.137c6283.js";import"./mobileMenu.c46e92c0.js";import"./logo.bbc6aa26.js";const R={props:["order","country","state","currency"],data(){return{}},methods:{formatDate:T}},U={class:"section-b-space cart-section order-details-table"},Y={class:"container"},z={class:"title title1 title-effect mb-1 title-left"},E={class:"mb-3"},G={class:"row g-4"},K={class:"col-lg-6"},W={class:"table-responsive"},X={class:"table cart-table table-borderless"},Z={key:0,href:"javascript:void(0)"},$=["src"],ee={key:1,href:"javascript:void(0)"},te=e("img",{src:M,class:"img-fluid",alt:""},null,-1),se=[te],oe=e("p",null,"Product Name",-1),re=e("p",null,"Quantity",-1),le=e("p",null,"Price",-1),de={class:"price-od"},ne={key:0},ce=e("p",null,"Total",-1),ae={key:0,class:"table-order"},ie={colspan:"3"},_e={class:"theme-color fw-bold"},ue=e("td",null,null,-1),he={class:"theme-color fw-bold"},pe={key:1,class:"table-order"},me={colspan:"3"},ye={class:"theme-color fw-bold"},be=e("td",null,null,-1),ge={class:"theme-color fw-bold"},fe={class:"table-order"},ve=e("td",{colspan:"3"},[e("h4",{class:"theme-color fw-bold"},"Total Price :")],-1),Fe=e("td",null,null,-1),ke={class:"theme-color fw-bold"},xe={class:"col-lg-6"},Oe={class:"order-success"},Se={class:"row g-4"},Ne={class:"col-sm-6"},De=e("h4",null,"Summary",-1),we={class:"order-details"},Ce=e("div",{class:"col-sm-6"},null,-1),Te={class:"col-sm-6"},Je={class:"order-details"},Pe=e("b",null,"Address :",-1),Ae=e("b",null,"City : ",-1),Le=e("b",null,"State : ",-1),qe=e("b",null,"Country : ",-1),Be=e("b",null,"Contact No : ",-1),je={class:"col-sm-6"},Ie=e("h4",null,"Billing Address",-1),Ve={class:"order-details"},Me=e("b",null,"Address :",-1),He=e("b",null,"City : ",-1),Qe=e("b",null,"State : ",-1),Re=e("b",null,"Country : ",-1),Ue=e("b",null,"Contact No : ",-1),Ye={class:"col-12"},ze={class:"payment-mode"},Ee={class:"col-md-12"},Ge={class:"delivery-sec"};function Ke(_,a,t,w,d,v){var y,F,k,x,O,b,g,f;const m=P;return l(),n("section",U,[e("div",Y,[e("div",z,[e("h2",E,s(c(u)().public.const.OrderDetail),1)]),e("div",G,[e("div",K,[e("div",W,[e("table",X,[e("tbody",null,[(l(!0),n(J,null,L(t.order.orderdetail,o=>(l(),n("tr",{class:"table-order",key:o.id},[e("td",null,[JSON.parse(c(S)(o.products).work_images)!=_.NULL?(l(),n("a",Z,[e("img",{src:c(A)(JSON.parse(c(S)(o.products).work_images)[0].path,!0),class:"img-fluid",alt:""},null,8,$)])):(l(),n("a",ee,se))]),e("td",null,[oe,e("h5",null,s(c(S)(o.products).product_name),1)]),e("td",null,[re,e("h5",null,s(o.quantity),1)]),e("td",null,[le,e("div",de,[e("h5",null,s(t.currency.symbol)+s(parseFloat(o.products.default_price[0].price)<parseFloat(o.price)?parseFloat(o.products.default_price[0].price).toFixed(2):parseFloat(o.price).toFixed(2)),1),o.price&&parseFloat(o.products.default_price[0].price)>parseFloat(o.price)?(l(),n("h5",ne,s(t.currency.symbol)+s(parseFloat(o.products.default_price[0].price).toFixed(2)),1)):i("",!0)])]),e("td",null,[ce,e("h5",null,s(t.currency.symbol)+s(parseFloat(o.quantity*(parseFloat(o.products.default_price[0].price)<parseFloat(o.price)?parseFloat(o.products.default_price[0].price).toFixed(2):parseFloat(o.price).toFixed(2))).toFixed(2)),1)])]))),128))]),e("tfoot",null,[t.order.order_shipment_method?(l(),n("tr",ae,[e("td",ie,[e("h5",_e,"Shipping Method : "+s(t.order.order_shipment_method.shipment_details.name),1)]),ue,e("td",null,[e("h5",he,"+"+s(t.currency.symbol)+s(parseFloat(t.order.order_shipment_method.charge).toFixed(2)),1)])])):i("",!0),t.order.coupon_applied_details?(l(),n("tr",pe,[e("td",me,[e("h5",ye,"Coupon Code : "+s(t.order.coupon_applied_details.gift_code),1)]),be,e("td",null,[e("h5",ge,"-"+s(t.currency.symbol)+s(parseFloat(t.order.coupon_applied_details.used_balance).toFixed(2)),1)])])):i("",!0),e("tr",fe,[ve,Fe,e("td",null,[e("h4",ke,s(t.currency.symbol)+s(parseFloat(t.order.total).toFixed(2)),1)])])])])])]),e("div",xe,[e("div",Oe,[e("div",Se,[e("div",Ne,[De,e("ul",we,[e("li",null,"Order ID: "+s(t.order.uniqueid),1),e("li",null,"Order Date: "+s(v.formatDate(t.order.created_at)),1),e("li",null,"Order Total: "+s(t.currency.symbol)+s(parseFloat(t.order.total).toFixed(2)),1)])]),Ce,e("div",Te,[e("h4",null,s(c(u)().public.const.shippingaddress),1),e("ul",Je,[e("li",null,[Pe,r(" "+s(t.order.order_shipping_address?JSON.parse(t.order.order_shipping_address).addressone:"")+",",1)]),e("li",null,s(t.order.order_shipping_address?JSON.parse(t.order.order_shipping_address).addresstwo:""),1),e("li",null,[Ae,r(s(t.order.order_shipping_address?JSON.parse(t.order.order_shipping_address).city:""),1)]),e("li",null,[Le,r(s((F=(y=t.state)==null?void 0:y.shipping)==null?void 0:F.name),1)]),e("li",null,[qe,r(s((x=(k=t.country)==null?void 0:k.shipping)==null?void 0:x.name),1)]),e("li",null,[Be,r(s(t.order.order_shipping_address?JSON.parse(t.order.order_shipping_address).telephone:""),1)])])]),e("div",je,[Ie,e("ul",Ve,[e("li",null,[Me,r(" "+s(t.order.order_billing_address?JSON.parse(t.order.order_billing_address).addressone:"")+",",1)]),e("li",null,s(t.order.order_billing_address?JSON.parse(t.order.order_billing_address).addresstwo:""),1),e("li",null,[He,r(s(t.order.order_billing_address?JSON.parse(t.order.order_billing_address).city:""),1)]),e("li",null,[Qe,r(s((b=(O=t.state)==null?void 0:O.billing)==null?void 0:b.name),1)]),e("li",null,[Re,r(s((f=(g=t.country)==null?void 0:g.billing)==null?void 0:f.name),1)]),e("li",null,[Ue,r(" "+s(t.order.order_billing_address?JSON.parse(t.order.order_billing_address).telephone:""),1)])])]),e("div",Ye,[e("div",ze,[e("h4",null,s(c(u)().public.const.paymentmethod),1),e("p",null,s(c(u)().public.const.PayonDelivery),1)])]),e("div",Ee,[e("div",Ge,[h(m,{to:`/page/order_tracking/${t.order.id}`},{default:p(()=>[r(s(c(u)().public.const.trackorder),1)]),_:1},8,["to"])])])])])])])])])}const We=D(R,[["render",Ke]]);const Xe={props:["order","currency"],data(){return{}},methods:{formatDate:T}},Ze={class:"section-b-space cart-section order-details-table"},$e={class:"cash-app-od-main"},et={class:"row d-flex justify-content-center"},tt={class:"col-md-8"},st={key:0,class:"cash-app-od"},ot={key:0},rt=["src"],lt={class:"paypal-cls pb-2"},dt={class:"paypal-cls"};function nt(_,a,t,w,d,v){const m=P;return l(),n("section",Ze,[e("div",$e,[e("div",et,[e("div",tt,[t.order!==""?(l(),n("div",st,[t.order.get_payments[0].payments.logo!=null?(l(),n("figure",ot,[e("img",{src:c(A)(t.order.get_payments[0].payments.logo,!0),alt:""},null,8,rt)])):i("",!0),e("p",null,[r(" This is Your Order Number "),e("b",null,"#"+s(t.order.uniqueid),1)]),e("p",null,s(t.order.get_payments[0].payments.description)+" Thank You ",1),e("p",null,[r(" Order Date : "),e("b",null,s(v.formatDate(t.order.created_at)),1),r(" & Order Total : "),e("b",null,s(t.currency.symbol)+s(parseFloat(t.order.total).toFixed(2)),1),r(". ")])])):i("",!0),e("div",lt,[h(m,{class:"btn btn-solid-default mx-1 btn-sm",to:`/page/order_tracking/${t.order.id}`},{default:p(()=>[r(s(c(u)().public.const.trackorder),1)]),_:1},8,["to"])]),e("div",dt,[e("button",{href:"javascript:void(0)",onClick:a[0]||(a[0]=q(y=>_.$router.push("/"),["prevent"])),type:"button",class:"btn btn-solid-default mx-1 btn-sm"},"Continue Shopping")])])])])])}const ct=D(Xe,[["render",nt],["__scopeId","data-v-4021c318"]]),at={data(){return{order:"",isLoading:!1,country:"",state:"",currency:""}},components:{layout3:H,breadcrumb3:Q,AnotherPageOrderSuccessDetails:ct},head(){return{title:"Order Success"}},methods:{getDetails:async function(_){let a=await B("order",{orderid:_});a.success&&(this.order=a.data.order,this.country=a.data.country,this.state=a.data.state,this.currency=a.data.currency,this.isLoading=!0)}},mounted(){this.$route.params.id&&this.getDetails(this.$route.params.id)},beforeMount(){localStorage.getItem("token")!==null&&j().addToCart({flag:"removeallProduct"})}},it={key:0},_t={key:1};function ut(_,a,t,w,d,v){const m=V,y=I,F=N("breadcrumb3"),k=N("AnotherPageOrderSuccessDetails"),x=We,O=N("layout3");return l(),n(J,null,[h(y,null,{default:p(()=>[h(m,null,{default:p(()=>[r("Order Success")]),_:1})]),_:1}),h(O,{breadcrumb:!1,pageName:"Order Success",parent:"Order Success"},{breadcrumb:p(()=>[h(F)]),default:p(()=>{var b,g,f;return[d.isLoading&&((f=(g=(b=d.order)==null?void 0:b.get_payments[0])==null?void 0:g.payments)==null?void 0:f.is_on_popup)==1?(l(),n("div",it,[d.isLoading?(l(),C(k,{key:0,order:d.order,country:d.country,state:d.state,currency:d.currency},null,8,["order","country","state","currency"])):i("",!0)])):(l(),n("div",_t,[d.isLoading?(l(),C(x,{key:0,order:d.order,country:d.country,state:d.state,currency:d.currency},null,8,["order","country","state","currency"])):i("",!0)]))]}),_:1})],64)}const ft=D(at,[["render",ut]]);export{ft as default};