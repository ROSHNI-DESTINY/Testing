import{a as K,b as de,e as be,f as k,h as q,o,i as r,j as t,u as S,k as J,S as $e,l as we,r as X,w as ke,m as Se,p as g,c as C,q as v,F as $,s as w,t as b,v as W,x as E,y as Z,z as P,A as m,B as D,C as G,D as O,E as Ce,G as xe,H as Te,I as le,J as Ee,K as ue,L as Be,M as z,N as Pe,O as Ie,P as Le,Q as H,R as De,T as Oe,U as Ve}from"./entry.e849d55d.js";import{g as N,_ as Me}from"./image-not-found.6e11aec0.js";/* empty css                       */import{N as ee}from"./navigation.6010e303.js";import{P as j}from"./productBox1_skeletonLoader.73dcfe2c.js";import{l as Ue}from"./layout3.de1198b3.js";import{u as ce}from"./banners.a63ee639.js";import{u as Ne}from"./information.f944bb88.js";import{p as _e}from"./product-box2.0031a1a5.js";import{V as je}from"./SliderSettingsData.54fd4365.js";import{a as pe,f as Ae}from"./mobileMenu.c46e92c0.js";import"./create-element-if-not-defined.c42d80dc.js";import"./logo.bbc6aa26.js";function me({swiper:e,extendParams:a,on:s,emit:d,params:_}){e.autoplay={running:!1,paused:!1,timeLeft:0},a({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,n,l=_&&_.autoplay?_.autoplay.delay:3e3,c=_&&_.autoplay?_.autoplay.delay:3e3,u,p=new Date().getTime,y,f,x,A,Y,I;function te(h){!e||e.destroyed||!e.wrapperEl||h.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",te),L())}const se=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?y=!0:y&&(c=u,y=!1);const h=e.autoplay.paused?u:p+c-new Date().getTime();e.autoplay.timeLeft=h,d("autoplayTimeLeft",h,h/l),n=requestAnimationFrame(()=>{se()})},he=()=>{let h;return e.virtual&&e.params.virtual.enabled?h=e.slides.filter(T=>T.classList.contains("swiper-slide-active"))[0]:h=e.slides[e.activeIndex],h?parseInt(h.getAttribute("data-swiper-autoplay"),10):void 0},F=h=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(n),se();let B=typeof h>"u"?e.params.autoplay.delay:h;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const T=he();!Number.isNaN(T)&&T>0&&typeof h>"u"&&(B=T,l=T,c=T),u=B;const U=e.params.speed,re=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(U,!0,!0),d("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,U,!0,!0),d("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(U,!0,!0),d("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,U,!0,!0),d("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{F()})))};return B>0?(clearTimeout(i),i=setTimeout(()=>{re()},B)):requestAnimationFrame(()=>{re()}),B},ne=()=>{e.autoplay.running=!0,F(),d("autoplayStart")},R=()=>{e.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(n),d("autoplayStop")},M=(h,B)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(i),h||(I=!0);const T=()=>{d("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",te):L()};if(e.autoplay.paused=!0,B){Y&&(u=e.params.autoplay.delay),Y=!1,T();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),T())},L=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),I?(I=!1,F(u)):F(),e.autoplay.paused=!1,d("autoplayResume"))},oe=()=>{if(e.destroyed||!e.autoplay.running)return;const h=K();h.visibilityState==="hidden"&&(I=!0,M(!0)),h.visibilityState==="visible"&&L()},ae=h=>{h.pointerType==="mouse"&&(I=!0,M(!0))},ie=h=>{h.pointerType==="mouse"&&e.autoplay.paused&&L()},fe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",ae),e.el.addEventListener("pointerleave",ie))},ge=()=>{e.el.removeEventListener("pointerenter",ae),e.el.removeEventListener("pointerleave",ie)},ve=()=>{K().addEventListener("visibilitychange",oe)},ye=()=>{K().removeEventListener("visibilitychange",oe)};s("init",()=>{e.params.autoplay.enabled&&(fe(),ve(),p=new Date().getTime(),ne())}),s("destroy",()=>{ge(),ye(),e.autoplay.running&&R()}),s("beforeTransitionStart",(h,B,T)=>{e.destroyed||!e.autoplay.running||(T||!e.params.autoplay.disableOnInteraction?M(!0,!0):R())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){R();return}f=!0,x=!1,I=!1,A=setTimeout(()=>{I=!0,x=!0,M(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(A),clearTimeout(i),e.params.autoplay.disableOnInteraction){x=!1,f=!1;return}x&&e.params.cssMode&&L(),x=!1,f=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(Y=!0)}),Object.assign(e.autoplay,{start:ne,stop:R,pause:M,resume:L})}function Fe(e){const{effect:a,swiper:s,on:d,setTranslate:_,setTransition:i,overwriteParams:n,perspective:l,recreateShadows:c,getEffectParams:u}=e;d("beforeInit",()=>{if(s.params.effect!==a)return;s.classNames.push(`${s.params.containerModifierClass}${a}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const y=n?n():{};Object.assign(s.params,y),Object.assign(s.originalParams,y)}),d("setTranslate",()=>{s.params.effect===a&&_()}),d("setTransition",(y,f)=>{s.params.effect===a&&i(f)}),d("transitionEnd",()=>{if(s.params.effect===a&&c){if(!u||!u().slideShadows)return;s.slides.forEach(y=>{y.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),c()}});let p;d("virtualUpdate",()=>{s.params.effect===a&&(s.slides.length||(p=!0),requestAnimationFrame(()=>{p&&s.slides&&s.slides.length&&(_(),p=!1)}))})}function Re(e,a){const s=de(a);return s!==a&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function ze({swiper:e,duration:a,transformElements:s,allSlides:d}){const{activeIndex:_}=e,i=n=>n.parentElement?n.parentElement:e.slides.filter(c=>c.shadowEl&&c.shadowEl===n.parentNode)[0];if(e.params.virtualTranslate&&a!==0){let n=!1,l;d?l=s:l=s.filter(c=>{const u=c.classList.contains("swiper-slide-transform")?i(c):c;return e.getSlideIndex(u)===_}),l.forEach(c=>{be(c,()=>{if(n||!e||e.destroyed)return;n=!0,e.animating=!1;const u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(u)})})}}function He({swiper:e,extendParams:a,on:s}){a({fadeEffect:{crossFade:!1}}),Fe({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:i}=e,n=e.params.fadeEffect;for(let l=0;l<i.length;l+=1){const c=e.slides[l];let p=-c.swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let y=0;e.isHorizontal()||(y=p,p=0);const f=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),x=Re(n,c);x.style.opacity=f,x.style.transform=`translate3d(${p}px, ${y}px, 0px)`}},setTransition:i=>{const n=e.slides.map(l=>de(l));n.forEach(l=>{l.style.transitionDuration=`${i}ms`}),ze({swiper:e,duration:i,transformElements:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const qe={props:["slide"],computed:{currencySymbol(){return q().selectedCurrencySymbol},currencymultiple(){return q().currencyConversionMultiple}}},Je=["href"],We=["src"];function Ge(e,a,s,d,_,i){return o(),r("a",{href:s.slide.redirect_url,target:"_blank",class:"home-slider sliderBackground bg-size",style:J({"background-image":`url(${S(N)(s.slide.image,!0)})`})},[t("img",{src:S(N)(s.slide.image,!0),class:"bg-img d-none",alt:""},null,8,We)],12,Je)}const Q=k(qe,[["render",Ge]]);const Qe={components:{Swiper:$e,SwiperSlide:we,HomeSlide:Q},props:["slides"],setup(e){const a=X(null),s=X(null),d=X(null),_={delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},i={clickable:!0},n=(l,c,u)=>{c>0?(a.value&&a.value.style.setProperty("--progress",1-u),s.value&&(s.value.textContent=`${Math.ceil(c/2e3)}s`)):s.value&&(s.value.textContent="0s")};return ke(()=>e.slides,l=>{l.length&&d.value&&Se(()=>{d.value.swiper.on("autoplayTimeLeft",n)})},{immediate:!0}),{modules:[me,j,ee],autoplayConfig:_,paginationConfig:i,onAutoplayTimeLeft:n,progressCircle:a,progressContent:s,mySwiper:d}}},Ye={ref:"progressContent",class:"progress-content"};function Ke(e,a,s,d,_,i){const n=Q,l=g("swiper-slide"),c=g("swiper");return o(),r("div",null,[s.slides.length?(o(),C(c,{key:0,ref:"mySwiper",spaceBetween:30,centeredSlides:!0,autoplay:d.autoplayConfig,pagination:d.paginationConfig,navigation:!0,modules:d.modules,class:"mySwiper"},{default:v(()=>[(o(!0),r($,null,w(s.slides,(u,p)=>(o(),C(l,{key:p},{default:v(()=>[b(n,{slide:u},null,8,["slide"])]),_:2},1024))),128))]),_:1},8,["autoplay","pagination","modules"])):W("",!0),t("div",Ye,null,512)])}const Xe=k(Qe,[["render",Ke],["__scopeId","data-v-8b03db7f"]]),Ze={props:["slides"]};function et(e,a,s,d,_,i){const n=Q,l=g("swiper-slide"),c=g("swiper");return o(),C(c,{dir:"rtl",navigation:!1,modules:e.modules,effect:"fade",slidesPerView:e.auto},{default:v(()=>[(o(!0),r($,null,w(s.slides,(u,p)=>(o(),C(l,{key:p},{default:v(()=>[b(n,{slide:u},null,8,["slide"])]),_:2},1024))),128))]),_:1},8,["modules","slidesPerView"])}const tt=k(Ze,[["render",et]]);const st={props:["slides"],data(){return{modules:[ee,He]}},components:{homeSlide:Q},computed:{layoutDirection(){return q().layoutType}}},nt={key:0,class:"container-fluid"},ot={class:"classic-arrow"},at={key:1};function it(e,a,s,d,_,i){const n=Xe,l=tt;return o(),r("section",{class:E([{"banner-placeholder":!s.slides.length},"home-section home-section-1"])},[s.slides.length?(o(),r("div",nt,[t("div",ot,[i.layoutDirection==="ltr"?(o(),C(n,{key:0,slides:s.slides},null,8,["slides"])):(o(),C(l,{key:1,slides:s.slides},null,8,["slides"]))])])):(o(),r("span",at))],2)}const rt=k(st,[["render",it]]),lt={props:["cookieBarClasses"],data(){return{show:!0}},methods:{setCookie(){this.show=!1,Z("cookieSet").value=!0}},created(){Z("cookieSet").value&&(this.show=!1)}},ct=["src"],dt={class:"content"},ut=t("h3",null,"Cookies Consent",-1),_t=t("p",{class:"font-light"}," This website use cookies to ensure you get the best experience on our website. ",-1),pt={class:"cookie-buttons"},mt={href:"javascript:void(0)",class:"btn default-light1"};function ht(e,a,s,d,_,i){return o(),r("div",{class:E(["cookie-bar-section",[{hide:!_.show},s.cookieBarClasses]])},[t("img",{src:S(N)("cookie.png"),alt:""},null,8,ct),t("div",dt,[ut,_t,t("div",pt,[t("button",{class:"btn btn-solid-default",id:"button",onClick:a[0]||(a[0]=P((...n)=>i.setCookie&&i.setCookie(...n),["prevent"]))}," I understand "),t("a",mt,m(S(D)().public.const.LearnMore),1)])])],2)}const ft=k(lt,[["render",ht]]);const gt={props:["serviceClasses"],data(){return{customerSvg:"#customer"}},computed:{services(){return Ne().data.filter(e=>e.type==="customerServices")[0].children}}},vt={class:"container"},yt={class:"row g-4 g-sm-3"},bt={class:"service-wrap"},$t={class:"service-icon"},wt=["xlink:href"],kt={class:"service-content"},St={class:"mb-2"},Ct={class:"font-light"};function xt(e,a,s,d,_,i){return o(),r("section",{class:E(["service-section",s.serviceClasses])},[t("div",vt,[t("div",yt,[(o(!0),r($,null,w(i.services,(n,l)=>(o(),r("div",{class:"col-xl-3 col-sm-6 customer-services",key:l},[t("div",bt,[t("div",$t,[(o(),r("svg",null,[t("use",{"xlink:href":"/svg/icons.svg"+n.svg},null,8,wt)]))]),t("div",kt,[t("h3",St,m(n.service),1),t("span",Ct,m(n.description),1)])])]))),128))])])],2)}const Tt=k(gt,[["render",xt]]);const Et={props:["products"],components:{productBox_2:_e},data(){return{swiperOption:{modules:[j],freeMode:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0},breakpoints:{1630:{slidesPerView:6,spaceBetween:24},1200:{slidesPerView:5,spaceBetween:24},992:{slidesPerView:4,spaceBetween:24},705:{slidesPerView:3,spaceBetween:24},575:{slidesPerView:2,spaceBetween:12},0:{spaceBetween:12,slidesPerView:2}}}}}},Bt={key:0,class:"ratio_asos service-slider"},Pt={class:"container-fluid"},It={class:"row"},Lt={class:"col-sm-12"},Dt=t("div",{class:"title text-center"},[t("h2",null,"Featured Products")],-1),Ot={key:0,class:"product-wrapper product-style-2 p-0 slide-6"},Vt=t("div",{class:"swiper-button-next"},null,-1),Mt=t("div",{class:"swiper-button-prev"},null,-1);function Ut(e,a,s,d,_,i){const n=g("productBox_2"),l=g("swiper-slide"),c=g("swiper");return s.products.length!=0?(o(),r("section",Bt,[t("div",Pt,[t("div",It,[t("div",Lt,[Dt,t("div",{class:E({"featured-placeholder":!s.products.length})},[s.products.length?(o(),r("div",Ot,[b(c,G(_.swiperOption,{class:"swiper-wrapper"}),{default:v(()=>[(o(!0),r($,null,w(s.products.slice(0,7),(u,p)=>(o(),C(l,{key:p,class:"swiper-slide"},{default:v(()=>[b(n,{product:u},null,8,["product"])]),_:2},1024))),128)),Vt,Mt]),_:1},16)])):W("",!0)],2)])])])])):W("",!0)}const Nt=k(Et,[["render",Ut]]);const jt={props:["products"],components:{productBox_2:_e},data(){return{swiperOption:{modules:[j],freeMode:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0},breakpoints:{1630:{slidesPerView:6,spaceBetween:24},1200:{slidesPerView:5,spaceBetween:24},992:{slidesPerView:4,spaceBetween:24},705:{slidesPerView:3,spaceBetween:24},575:{slidesPerView:2,spaceBetween:12},0:{spaceBetween:12,slidesPerView:2}}}}}},At={key:0,class:"ratio_asos"},Ft={class:"container-fluid"},Rt={class:"row"},zt={class:"col-sm-12"},Ht=t("div",{class:"title text-center"},[t("h2",null,"Top Selling Products")],-1),qt={key:0,class:"product-wrapper product-style-2 p-0 slide-6"},Jt=t("div",{class:"swiper-button-next"},null,-1),Wt=t("div",{class:"swiper-button-prev"},null,-1),Gt={key:1};function Qt(e,a,s,d,_,i){const n=g("productBox_2"),l=g("swiper-slide"),c=g("swiper");return s.products.length!=0?(o(),r("section",At,[t("div",Ft,[t("div",Rt,[t("div",zt,[Ht,t("div",{class:E({"topselling-placeholder":!s.products.length})},[s.products.length?(o(),r("div",qt,[b(c,G(_.swiperOption,{class:"swiper-wrapper"}),{default:v(()=>[(o(!0),r($,null,w(s.products,(u,p)=>(o(),C(l,{key:p,class:"swiper-slide"},{default:v(()=>[b(n,{product:u},null,8,["product"])]),_:2},1024))),128)),Jt,Wt]),_:1},16)])):(o(),r("span",Gt))],2)])])])])):W("",!0)}const Yt=k(jt,[["render",Qt]]),Kt={props:["banner"],data(){return{days:0,hours:0,minutes:0,seconds:0}},created(){var e=1e3,a=e*60,s=a*60,d=s*24,_=new Date("Aug 21, 2023 00:00:00").getTime();setInterval(()=>{var i=new Date().getTime();this.days=Math.floor((_-i)/d),this.hours=Math.floor((_-i)%d/s),this.minutes=Math.floor((_-i)%s/a),this.seconds=Math.floor((_-i)%a/e)},e)},methods:{getImageUrl(e){return"/images/"+e}}},Xt={class:"ratio2_1"},Zt={class:"container"},es={class:"row gy-3"},ts={class:"col-xl-9 col-lg-8"},ss=["src"],ns=t("div",{class:"coupon-code theme-color"},"DGR548548",-1),os={class:"discount-offer"},as={class:"theme-color"},is=t("i",{class:"fas fa-heart"},null,-1),rs=[is],ls={class:"banner-btn-group"},cs={class:"social-media"},ds=["src"],us={class:"col-xl-3 col-lg-4 small-banner"},_s=["src"],ps={class:"collection-contain"},ms={class:"theme-color mb-2"},hs={class:"mt-2 mb-0 font-light"},fs={class:"font-light mb-0"};function gs(e,a,s,d,_,i){return o(),r("section",Xt,[t("div",Zt,[t("div",es,[t("div",ts,[t("div",{class:"timer-banner text-center sliderBackground bg-size",style:J({"background-image":`url(${i.getImageUrl("/electronics/home/product-banner-1.jpg")})`})},[t("img",{src:i.getImageUrl("/electronics/home/product-banner-1.jpg"),class:"bg-img d-none",alt:""},null,8,ss),ns,t("div",os,[t("h5",null,[O(m(s.banner.lefttext)+" ",1),t("span",as,[O(m(s.banner.discount)+"% OFF ",1),t("a",{onClick:a[0]||(a[0]=P(n=>e.$router.push("/page/wishlist"),["prevent"])),class:"wishlist-icon mt-2"},rs)])])]),t("div",ls,[t("button",{href:"javascript:void(0)",onClick:a[1]||(a[1]=P(n=>e.$router.push("/shop/shop_left_sidebar"),["prevent"])),type:"button",class:"btn btn-solid-default"},m(S(D)().public.const.ShopNow),1)]),t("div",cs,[(o(!0),r($,null,w(s.banner.socialmedia,(n,l)=>(o(),r("div",{class:"social-icon",key:l},[t("img",{src:i.getImageUrl(n.image),class:"img-fluid",alt:""},null,8,ds),t("h6",null,m(n.title),1)]))),128))])],4)]),t("div",us,[t("div",{class:"collection-banner text-center collection-center sliderBackground bg-size",style:J({"background-image":`url(${i.getImageUrl(s.banner.rightbackgroundimage)})`})},[t("img",{src:i.getImageUrl(s.banner.rightbackgroundimage),class:"bg-img d-none",alt:""},null,8,_s),t("div",ps,[t("h6",ms,m(s.banner.rightsmallheading),1),t("h2",null,m(s.banner.rightheadingtop),1),t("h2",null,m(s.banner.rightheadingbottom),1),t("p",hs,m(s.banner.bottomsmalltop),1),t("p",fs,m(s.banner.bottomsmallbottom),1),t("button",{href:"javascript:void(0)",onClick:a[2]||(a[2]=P(n=>e.$router.push("/shop/shop_left_sidebar"),["prevent"])),type:"button",class:"btn btn-solid-default mt-lg-4 mt-2"}," Shop now ")])],4)])])])])}const vs=k(Kt,[["render",gs]]);Ce.use([ee,j]);const ys={props:["products","category_product"],computed:{selectedCurrencySymbol(){return q().selectedCurrencySymbol},...xe(Te,{userData:"user"})},methods:{async addToWishlist(e){let a={productid:e,flag:!1,add:!0,image:JSON.parse(le(e).work_images)!=null?JSON.parse(le(e).work_images)[0].path:"/images/image-not-found.png"};Ee().addToWishList(a)},async togglecontactus(e){ue().pricecontactus("",e)},pageRedirect(e,a){localStorage.getItem("category-redirect")!=""&&localStorage.removeItem("category-redirect");let s={name:e,slug:a};localStorage.setItem("category-redirect",JSON.stringify(s)),this.$router.push({path:"/shop/"+Be(a)})}},setup(){return{swiperOption:je}},mounted(){}},V=e=>(Ie("data-v-f340cd2f"),e=e(),Le(),e),bs={class:"ratio_asos pt-0 mt-5"},$s={class:"container-fluid-lg"},ws={class:"row"},ks=V(()=>t("div",{class:"col-12"},[t("div",{class:"title text-center"},[t("h2",null,"Shop By Brand")])],-1)),Ss={class:"d-flex justify-content-between align-items-center"},Cs={class:""},xs={class:"title mb-3"},Ts={class:"text-uppercase"},Es={class:""},Bs={class:"view-all"},Ps={class:"col-md-12 mt-3 pb-2"},Is={class:"product-wrapper slide-7 product-style-1"},Ls={class:"product-box"},Ds={class:"img-wrapper"},Os={key:0,class:"top-wishlist"},Vs=["onClick"],Ms=V(()=>t("i",{class:"far fa-heart"},null,-1)),Us=[Ms],Ns={key:1,class:"top-wishlist"},js=["src"],As=V(()=>t("img",{src:Me,class:"img-fluid w-100 image_zoom_cls-0",alt:""},null,-1)),Fs={class:"product-details text-center"},Rs={key:0,class:"theme-color"},zs={key:1,class:"product-buttons"},Hs=["onClick"],qs=V(()=>t("span",null,"Contact Us",-1)),Js=[qs],Ws=V(()=>t("div",{class:"swiper-button-next"},null,-1)),Gs=V(()=>t("div",{class:"swiper-button-prev"},null,-1));function Qs(e,a,s,d,_,i){const n=Pe,l=g("swiper-slide"),c=g("swiper");return o(),r("section",bs,[t("div",$s,[t("div",ws,[ks,(o(!0),r($,null,w(s.category_product,(u,p,y)=>(o(),r("div",{class:"col-12",key:p},[t("div",{class:E((y!=0?"pt-5":"")+(u.length>0?"":" d-none"))},[t("div",Ss,[t("div",Cs,[t("div",xs,[t("h3",Ts,m(p),1)])]),t("div",Es,[t("div",Bs,[b(n,{class:"btn btn-solid-default mx-1 btn-sm",to:"/shop/"+p},{default:v(()=>[O("VIEW ALL")]),_:2},1032,["to"])])])]),t("div",Ps,[t("div",Is,[b(c,G(d.swiperOption,{class:"mySwiper"}),{default:v(()=>[(o(!0),r($,null,w(u,(f,x)=>(o(),C(l,{key:x},{default:v(()=>[t("div",Ls,[t("div",Ds,[S(z)(f,1,e.userData).price!=0?(o(),r("div",Os,[t("a",{class:"heart-wishlist wishlist",onClick:P(A=>i.addToWishlist(f),["prevent"])},Us,8,Vs)])):(o(),r("div",Ns,"\xA0")),JSON.parse(f.work_images)!=e.NULL?(o(),C(n,{key:2,to:"/product/"+f.slug,class:"text-center"},{default:v(()=>[t("img",{src:S(N)(JSON.parse(f.work_images)[0].path.replace("compress","featured"),!0),class:"img-fluid",alt:""},null,8,js)]),_:2},1032,["to"])):(o(),C(n,{key:3,to:"/product/"+f.slug,class:"text-center"},{default:v(()=>[As]),_:2},1032,["to"]))]),t("div",Fs,[S(z)(f,1,e.userData).price!=0?(o(),r("h3",Rs,m(S(z)(f,1,e.userData).currency)+m(S(z)(f,1,e.userData).price),1)):(o(),r("div",zs,[t("a",{href:"javascript:void(0)",id:"cartEffect","data-bs-toggle":"modal","data-bs-target":"#contact_us",onClick:A=>i.togglecontactus(f.id),class:"btn btn-solid hover-solid btn-animation price-color con-btn"},Js,8,Hs)]))])])]),_:2},1024))),128)),Ws,Gs]),_:2},1040)])])],2)]))),128))])])])}const Ys=k(ys,[["render",Qs],["__scopeId","data-v-f340cd2f"]]),Ks={},Xs={class:"p-0"},Zs={class:"container-fluid-lg"},en={class:"row mb-5"},tn={class:"col-lg-12"},sn=["src"];function nn(e,a,s,d,_,i){return o(),r("section",Xs,[t("div",Zs,[t("div",en,[t("div",tn,[t("img",{src:S(N)("bottomBanner/footer_image.jpg"),class:"w-100"},null,8,sn)])])])])}const on=k(Ks,[["render",nn]]),an={components:{buttonAnimated:pe},props:["banner"],methods:{getImageUrl(e){return"/images/"+e}}},rn={class:"product-box"},ln={class:"img-wrapper"},cn={class:"top-wishlist product-color"},dn=t("i",{class:"far fa-heart"},null,-1),un=[dn],_n={class:"share share-box share-opacity"},pn=t("span",{class:"share-plus share-plus-color"},"+",-1),mn=["src"],hn={class:"insta-hover insta-spacing text-center"},fn={class:"text-hide"},gn=t("i",{class:"fas fa-chevron-right ms-2"},null,-1);function vn(e,a,s,d,_,i){const n=g("buttonAnimated");return o(),r("div",null,[t("div",rn,[t("div",ln,[t("div",cn,[t("a",{href:"javascript:void(0)",onClick:a[0]||(a[0]=P(l=>e.$router.push("/page/wishlist"),["prevent"])),class:"heart-wishlist heart-color ms-auto"},un)]),t("div",_n,[pn,t("span",null,m(s.banner.share),1)]),t("a",{href:"javascript:void(0)",class:"text-center sliderBackground bg-size",style:J({"background-image":`url(${i.getImageUrl(s.banner.image)})`})},[t("img",{src:i.getImageUrl(s.banner.image),class:"bg-img d-none",alt:""},null,8,mn)],4)]),t("div",hn,[t("div",null,[t("h5",null,m(s.banner.discount),1),t("h3",fn,m(s.banner.title),1),b(n,{headerLocation:"/shop/shop_left_sidebar",buttonClasses:"btn btn-light-white",buttonContent:"Shop Now"},{default:v(()=>[gn]),_:1})])])])])}const yn=k(an,[["render",vn]]),bn={props:["banners"],components:{buttonAnimated:pe,instagramShopCard:yn},setup(){return{swiperOption:{modules:[j],pagination:{clickable:!0},slidesPerView:5,breakpoints:{1630:{slidesPerView:5,spaceBetween:24},1200:{slidesPerView:4,spaceBetween:24},900:{slidesPerView:3,spaceBetween:24},0:{slidesPerView:2,spaceBetween:24}}}}}},$n={class:"ratio_square"},wn={class:"container-fluid"},kn={class:"row"},Sn={class:"col"},Cn={class:"title title-2 text-center"},xn={class:"text-color"},Tn={class:"product-style-1 instagram-2 product-wrapper"},En={class:"insta-slider instagram-wrap"};function Bn(e,a,s,d,_,i){const n=g("instagramShopCard"),l=g("swiper-slide"),c=g("swiper");return o(),r("div",null,[t("section",$n,[t("div",wn,[t("div",kn,[t("div",Sn,[t("div",Cn,[t("h2",null,m(S(D)().public.const.InstagramShop),1),t("h5",xn,m(S(D)().public.const.NewCollection),1)]),t("div",Tn,[t("div",En,[b(c,G(d.swiperOption,{loop:"true",class:"swiper-wrapper"}),{default:v(()=>[(o(!0),r($,null,w(s.banners,(u,p)=>(o(),C(l,{key:p},{default:v(()=>[b(n,{banner:u},null,8,["banner"])]),_:2},1024))),128))]),_:1},16)])])])])])])])}const Pn=k(bn,[["render",Bn]]),In={props:["tab","productBoxClasses"],methods:{getSectionClasses(e){return e.childtype==="middlebanner"?"order-lg-0 order-1":"col-md-6"},getImageUrl(e){return"/images/"+e}}},Ln=["id"],Dn={class:"offer-wrap product-style-1"},On={class:"row g-xl-4 g-3"},Vn={key:0,class:"product-banner product-banner-circle"},Mn={class:"img-wrapper"},Un={class:"label-block"},Nn={class:"label label-black"},jn={class:"label label-theme"},An=["src"],Fn={class:"offer-end offer-end-demo4"},Rn={class:"product-details text-center"},zn={class:"theme-color"},Hn={class:"font-light ms-2"},qn={href:"javascript:void(0)",class:"font-default",tabindex:"-1"},Jn={class:"main-title"},Wn={class:"rating rating-2"},Gn={key:1,class:"product-list"},Qn={class:"img-wrapper"},Yn=["src"],Kn=t("div",{class:"circle-shape"},null,-1),Xn={class:"product-details"},Zn={class:"theme-color"},eo={class:"font-light ms-2"},to={class:"rating"},so=t("i",{class:"fas fa-star theme-color"},null,-1),no=[so],oo=t("i",{class:"fas fa-star"},null,-1),ao=[oo];function io(e,a,s,d,_,i){return o(),r("div",{class:E(["tab-pane fade",s.tab.active?"show active":""]),id:s.tab.name,role:"tabpanel"},[t("div",Dn,[t("div",On,[(o(!0),r($,null,w(s.tab.children,(n,l)=>(o(),r("div",{class:E(["col-lg-4",i.getSectionClasses(n)]),key:l},[n.childtype==="middlebanner"?(o(),r("div",Vn,[t("div",{class:E(["product-box",s.productBoxClasses])},[t("div",Mn,[t("div",Un,[t("span",Nn,m(n.lefttag),1),t("span",jn,m(n.righttag),1)]),t("a",{href:"javascript:void(0)",onClick:a[0]||(a[0]=P(c=>e.$router.push("/product"),["prevent"]))},[t("img",{src:i.getImageUrl(n.image),class:"img-fluid",alt:""},null,8,An)]),t("div",Fn,[t("h3",null,m(n.heading),1),t("h6",null,m(n.subheading),1)])]),t("div",Rn,[t("h3",zn,[O(m(n.price),1),t("span",Hn,m(n.mrp),1)]),t("a",qn,[t("h5",Jn,m(n.title),1)]),t("ul",Wn,[t("li",null,[(o(!0),r($,null,w(n.ratingstars,(c,u)=>(o(),r("i",{class:"fas fa-star theme-color",key:"a"+u}))),128))]),t("li",null,[(o(!0),r($,null,w(5-n.ratingstars,(c,u)=>(o(),r("i",{class:"fas fa-star",key:"b"+u}))),128))])])])],2)])):(o(),r("div",Gn,[(o(!0),r($,null,w(n.banners,(c,u)=>(o(),r("div",{class:E(["product-box",s.productBoxClasses]),key:"c"+u},[t("div",Qn,[t("a",{href:"javascript:void(0)",onClick:a[1]||(a[1]=P(p=>e.$router.push("/product"),["prevent"])),class:"text-center"},[t("img",{src:i.getImageUrl(c.image),class:"img-fluid",alt:""},null,8,Yn)]),Kn]),t("div",Xn,[t("h3",Zn,[O(m(c.price),1),t("span",eo,m(c.mrp),1)]),t("a",{href:"javascript:void(0)",onClick:a[2]||(a[2]=P(p=>e.$router.push("/product"),["prevent"])),class:"font-default"},[t("h5",null,m(c.title),1)]),t("ul",to,[(o(!0),r($,null,w(c.ratingstars,(p,y)=>(o(),r("li",{key:"d"+y},no))),128)),(o(!0),r($,null,w(5-c.ratingstars,(p,y)=>(o(),r("li",{key:"e"+y},ao))),128))])])],2))),128))]))],2))),128))])])],10,Ln)}const ro=k(In,[["render",io]]),lo={props:["tabList"],components:{hurryUpCard:ro},methods:{setActive(e){for(var a=0;a<this.tabList.length;a++)e===this.tabList[a].name?this.tabList[a].active=!0:this.tabList[a].active=!1}}},co={class:"tab-section"},uo={class:"container"},_o={class:"row"},po={class:"col"},mo={class:"title text-center"},ho={class:"tab-wrap"},fo={class:"nav nav-tabs",id:"myTab"},go=["onClick"],vo=["id","data-bs-target"],yo={class:"tab-content",id:"myTabContent"};function bo(e,a,s,d,_,i){const n=g("hurryUpCard");return o(),r("section",co,[t("div",uo,[t("div",_o,[t("div",po,[t("div",mo,[t("h5",null,m(S(D)().public.const.SpecialOffer),1),t("h2",null,m(S(D)().public.const.HurryUp),1)]),t("div",ho,[t("ul",fo,[(o(!0),r($,null,w(s.tabList,(l,c)=>(o(),r("li",{class:"nav-item",key:c,onClick:u=>i.setActive(l.name)},[t("button",{class:E(["nav-link",l.active?"active":""]),id:l.linkId,"data-bs-toggle":"tab","data-bs-target":l.target,type:"button"},m(l.displayTitle),11,vo)],8,go))),128))]),t("div",yo,[(o(!0),r($,null,w(s.tabList,(l,c)=>(o(),C(n,{key:c,tab:l},null,8,["tab"]))),128))])])])])])])}const $o=k(lo,[["render",bo]]),wo={data(){return{images:["brand/1.png","brand/2.png","brand/3.png","brand/4.png","brand/5.png","brand/6.png","brand/4.png"]}},methods:{getImageUrl(e){return"/images/"+e}},setup(){return{modules:[me]}}},ko={class:"section-b-space"},So={class:"container"},Co={class:"row"},xo={class:"col"},To={class:"brand-slider"},Eo={class:"brand-image"},Bo=["src"];function Po(e,a,s,d,_,i){const n=g("swiper-slide"),l=g("swiper");return o(),r("section",ko,[t("div",So,[t("div",Co,[t("div",xo,[t("div",To,[b(l,{spaceBetween:30,slidesPerView:6,autoplay:{delay:2500,disableOnInteraction:!1},modules:d.modules,class:"mySwiper"},{default:v(()=>[(o(!0),r($,null,w(_.images,(c,u)=>(o(),C(n,{key:u},{default:v(()=>[t("div",Eo,[t("img",{src:i.getImageUrl(c),class:"img-fluid",alt:"brand logo"},null,8,Bo)])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])])}const Io=k(wo,[["render",Po]]);const Lo={head(){return{title:"Electronic Store",link:[{rel:"icon",type:"image/x-icon",href:"1.png"}]}},components:{layout3:Ue,cookieBar1:ft,customerServices:Tt,ourCollectionCarousel:Nt,bannerWithTimer:vs,vrCollectionCarousel:Ys,hurryUpBanner:$o,instagramShop:Pn,brandCarousel:Io,footerRight1:Ae,topSellingProducts:Yt,BrandBanner:on},data(){return{offerCode:"DEF4526",themeCss:"/voxo/css/demo1.css",banners:[],fetured_products:{},topSellignProducts:{},category_product:[],isProduct:!1,isCategory:!1,isTestimonial:!1}},computed:{productsList(){return ue().data.filter(e=>e.type==="electronic")},hurryUpBannersList(){return ce().tabsBanners.filter(e=>e.type==="electronic")},bannersList(){return ce().data.filter(e=>e.type==="electronic")}},created(){(Z("layoutType").value||"light")==="dark"?this.themeCss="/voxo/css/demo1_dark.css":this.themeCss="/voxo/css/demo1.css"},mounted(){},methods:{loadZendeskScript(){let e=document.createElement("script");e.id="ze-snippet",e.src="https://static.zdassets.com/ekr/snippet.js?key=e2d8356f-bbec-4f36-bc5d-394275e2e17d",document.body.appendChild(e)},sendInitialMessage(){fetch("https://txparts786.zendesk.com/api/v2/channels/chat/messages",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("tim@txparts.com/token:NBhJl1iYQRuHgrzbodUyNXv3B76sTQdYODptRweD")}}).then(e=>{if(!e.ok)throw new Error("Failed to send initial message");console.log("Initial message sent successfully")}).catch(e=>{console.error("Error sending initial message:",e)})},endChat(){window.zE("webWidget","chat:away")},async getBanner(){const e=await H("banners",{});this.banners=e.data.banner},async getProduct(){const e=await H("multi-product",{length:"7"});e.success&&(this.isProduct=!0),this.fetured_products=e.data.products},async topSellProducts(){const e=await H("top-selling-product",{length:"7"});e.success&&(this.topSellignProducts=e.data.products)},async checkType(){let e=localStorage.getItem("user-data");e!=null?(this.userdata=JSON.parse(e),this.usertype=this.userdata.type):this.usertype="0"},async testimonial(){let e=await H("testimonials",{});e.success&&(this.testimonialsData=e.data.Testimonials,this.isTestimonial=!0)}},beforeMount(){this.getBanner(),this.getProduct(),this.topSellProducts(),this.testimonial()}};function Do(e,a,s,d,_,i){const n=Oe,l=Ve,c=De,u=rt,p=g("ourCollectionCarousel"),y=g("topSellingProducts"),f=g("footerRight1"),x=g("layout3");return o(),r($,null,[b(c,null,{default:v(()=>[b(n,null,{default:v(()=>[O("TxParts")]),_:1}),b(l,{rel:"icon",href:"/favicons/1.ico"})]),_:1}),b(x,{offerCode:_.offerCode,breadcrumb:!1},{footerRight:v(()=>[b(f)]),default:v(()=>[b(u,{slides:_.banners},null,8,["slides"]),b(p,{products:_.fetured_products},null,8,["products"]),b(y,{products:_.topSellignProducts},null,8,["products"])]),_:1},8,["offerCode"])],64)}const Wo=k(Lo,[["render",Do]]);export{Wo as default};