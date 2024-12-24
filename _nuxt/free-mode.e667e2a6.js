import{a as k,aF as D,ag as O,aG as E,e as C}from"./entry.e849d55d.js";function L({swiper:e,extendParams:y,on:c}){y({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let M=!1,x=!1;e.thumbs={swiper:null};function g(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,l=t.clickedSlide;if(l&&l.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let a;t.params.loop?a=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=s,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function h(){const{thumbs:t}=e.params;if(M)return!1;M=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(D(t.swiper)){const l=Object.assign({},t.swiper);Object.assign(l,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(l),x=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function r(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const l=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let a=1;const i=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),s.slides.forEach(o=>o.classList.remove(i)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let o=0;o<a;o+=1)O(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+o}"]`).forEach(u=>{u.classList.add(i)});else for(let o=0;o<a;o+=1)s.slides[e.realIndex+o]&&s.slides[e.realIndex+o].classList.add(i);const f=e.params.thumbs.autoScrollOffset,b=f&&!s.params.loop;if(e.realIndex!==s.realIndex||b){const o=s.activeIndex;let u,n;if(s.params.loop){const v=s.slides.filter(T=>T.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];u=s.slides.indexOf(v),n=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,n=u>e.previousIndex?"next":"prev";b&&(u+=n==="next"?f:-1*f),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(u)<0&&(s.params.centeredSlides?u>o?u=u-Math.floor(l/2)+1:u=u+Math.floor(l/2)-1:u>o&&s.params.slidesPerGroup,s.slideTo(u,t?0:void 0))}}c("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const s=k(),l=()=>{const i=typeof t.swiper=="string"?s.querySelector(t.swiper):t.swiper;if(i&&i.swiper)t.swiper=i.swiper,h(),r(!0);else if(i){const f=b=>{t.swiper=b.detail[0],i.removeEventListener("init",f),h(),r(!0),t.swiper.update(),e.update()};i.addEventListener("init",f)}return i},a=()=>{if(e.destroyed)return;l()||requestAnimationFrame(a)};requestAnimationFrame(a)}else h(),r(!0)}),c("slideChange update resize observerUpdate",()=>{r()}),c("setTransition",(t,s)=>{const l=e.thumbs.swiper;!l||l.destroyed||l.setTransition(s)}),c("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||x&&t.destroy()}),Object.assign(e.thumbs,{init:h,update:r})}function V({swiper:e,extendParams:y,emit:c,once:M}){y({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function x(){if(e.params.cssMode)return;const r=e.getTranslate();e.setTranslate(r),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function g(){if(e.params.cssMode)return;const{touchEventsData:r,touches:t}=e;r.velocities.length===0&&r.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:r.touchStartTime}),r.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:E()})}function h({currentPos:r}){if(e.params.cssMode)return;const{params:t,wrapperEl:s,rtlTranslate:l,snapGrid:a,touchEventsData:i}=e,b=E()-i.touchStartTime;if(r<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(r>-e.maxTranslate()){e.slides.length<a.length?e.slideTo(a.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(i.velocities.length>1){const d=i.velocities.pop(),m=i.velocities.pop(),A=d.position-m.position,P=d.time-m.time;e.velocity=A/P,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(P>150||E()-d.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,i.velocities.length=0;let o=1e3*t.freeMode.momentumRatio;const u=e.velocity*o;let n=e.translate+u;l&&(n=-n);let v=!1,T;const S=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let I;if(n<e.maxTranslate())t.freeMode.momentumBounce?(n+e.maxTranslate()<-S&&(n=e.maxTranslate()-S),T=e.maxTranslate(),v=!0,i.allowMomentumBounce=!0):n=e.maxTranslate(),t.loop&&t.centeredSlides&&(I=!0);else if(n>e.minTranslate())t.freeMode.momentumBounce?(n-e.minTranslate()>S&&(n=e.minTranslate()+S),T=e.minTranslate(),v=!0,i.allowMomentumBounce=!0):n=e.minTranslate(),t.loop&&t.centeredSlides&&(I=!0);else if(t.freeMode.sticky){let d;for(let m=0;m<a.length;m+=1)if(a[m]>-n){d=m;break}Math.abs(a[d]-n)<Math.abs(a[d-1]-n)||e.swipeDirection==="next"?n=a[d]:n=a[d-1],n=-n}if(I&&M("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(l?o=Math.abs((-n-e.translate)/e.velocity):o=Math.abs((n-e.translate)/e.velocity),t.freeMode.sticky){const d=Math.abs((l?-n:n)-e.translate),m=e.slidesSizesGrid[e.activeIndex];d<m?o=t.speed:d<2*m?o=t.speed*1.5:o=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&v?(e.updateProgress(T),e.setTransition(o),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating=!0,C(s,()=>{!e||e.destroyed||!i.allowMomentumBounce||(c("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(T),C(s,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(c("_freeModeNoMomentumRelease"),e.updateProgress(n),e.setTransition(o),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,C(s,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(n),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&c("_freeModeNoMomentumRelease");(!t.freeMode.momentum||b>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:x,onTouchMove:g,onTouchEnd:h}})}export{L as T,V as f};
