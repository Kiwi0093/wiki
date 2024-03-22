/**!
 * lightgallery.js | 0.0.2 | August 4th 2016
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Lightgallery=e()}}((function(){return function e(t,s,l){function i(d,r){if(!s[d]){if(!t[d]){var a="function"==typeof require&&require;if(!r&&a)return a(d,!0);if(o)return o(d,!0);var n=new Error("Cannot find module '"+d+"'");throw n.code="MODULE_NOT_FOUND",n}var u=s[d]={exports:{}};t[d][0].call(u.exports,(function(e){var s=t[d][1][e];return i(s||e)}),u,u.exports,e,t,s,l)}return s[d].exports}for(var o="function"==typeof require&&require,d=0;d<l.length;d++)i(l[d]);return i}({1:[function(e,t,s){!function(e,t){if(void 0!==s)t(s);else{var l={exports:{}};t(l.exports),e.lgUtils=l.exports}}(this,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.getAttribute=function(e){return window[e]},window.setAttribute=function(e,t){window[e]=t},document.getAttribute=function(e){return document[e]},document.setAttribute=function(e,t){document[e]=t};var t={wrap:function(e,t){if(e){var s=document.createElement("div");s.className=t,e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e),s.appendChild(e)}},addClass:function(e,t){e&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setVendor:function(e,t,s){e&&(e.style[t.charAt(0).toLowerCase()+t.slice(1)]=s,e.style["webkit"+t]=s,e.style["moz"+t]=s,e.style["ms"+t]=s,e.style["o"+t]=s)},trigger:function(e,t){if(e){var s=new CustomEvent(t,{detail:arguments.length<=2||void 0===arguments[2]?null:arguments[2]});e.dispatchEvent(s)}},Listener:{uid:0},on:function(e,s,l){e&&s.split(" ").forEach((function(s){var i=e.getAttribute("lg-event-uid")||"";t.Listener.uid++,i+="&"+t.Listener.uid,e.setAttribute("lg-event-uid",i),t.Listener[s+t.Listener.uid]=l,e.addEventListener(s.split(".")[0],l,!1)}))},off:function(e,s){if(e){var l=e.getAttribute("lg-event-uid");if(l){l=l.split("&");for(var i=0;i<l.length;i++)if(l[i]){var o=s+l[i];if("."===o.substring(0,1))for(var d in t.Listener)t.Listener.hasOwnProperty(d)&&d.split(".").indexOf(o.split(".")[1])>-1&&(e.removeEventListener(d.split(".")[0],t.Listener[d]),e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+l[i],"")),delete t.Listener[d]);else e.removeEventListener(o.split(".")[0],t.Listener[o]),e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+l[i],"")),delete t.Listener[o]}}}},param:function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}};e.default=t}))},{}],2:[function(e,t,s){!function(t,l){if(void 0!==s)l(e("./lg-utils"));else{l(t.lgUtils),t.lightgallery={}}}(this,(function(e){"use strict";var t,s=(t=e)&&t.__esModule?t:{default:t};var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e};!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e}(),window.utils=s.default,window.lgData={uid:0},window.lgModules={};var i={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};function o(e,t){if(this.el=e,this.s=l({},i,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}o.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),s.default.addClass(document.body,"lg-from-hash"),s.default.hasClass(document.body,"lg-on")||(s.default.addClass(document.body,"lg-on"),setTimeout((function(){e.build(e.index)})))),e.s.dynamic)s.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,s.default.hasClass(document.body,"lg-on")||(s.default.addClass(document.body,"lg-on"),setTimeout((function(){e.build(e.index)})));else for(var l=0;l<e.items.length;l++)!function(t){s.default.on(e.items[t],"click.lgcustom",(function(l){l.preventDefault(),s.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,s.default.hasClass(document.body,"lg-on")||(e.build(e.index),s.default.addClass(document.body,"lg-on"))}))}(l)},o.prototype.build=function(e){var t=this;for(var l in t.structure(),window.lgModules)t.modules[l]=new window.lgModules[l](t.el);t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout((function(){t.enableDrag(),t.enableSwipe()}),50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),s.default.trigger(t.el,"onAfterOpen"),s.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",(function(){s.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout((function(){s.default.addClass(t.outer,"lg-hide-items")}),t.s.hideBarsDelay)}))},o.prototype.structure=function(){var e,t="",l="",i=0,o="",d=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),s.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),i=0;i<this.items.length;i++)t+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(l='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div class="lg-sub-html"></div>'),e='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+l+o+"</div></div>",document.body.insertAdjacentHTML("beforeend",e),this.outer=document.querySelector(".lg-outer"),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(s.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):s.default.addClass(this.outer,"lg-use-css3"),d.setTop(),s.default.on(window,"resize.lg orientationchange.lg",(function(){setTimeout((function(){d.setTop()}),100)})),s.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?s.default.addClass(this.outer,"lg-css3"):(s.default.addClass(this.outer,"lg-css"),this.s.speed=0),s.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&s.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&s.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var r=this.outer.querySelector(".lg-inner");s.default.setVendor(r,"TransitionTimingFunction",this.s.cssEasing),s.default.setVendor(r,"TransitionDuration",this.s.speed+"ms")}s.default.addClass(document.querySelector(".lg-backdrop"),"in"),setTimeout((function(){s.default.addClass(d.outer,"lg-visible")}),this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},o.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,s=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?s.style.top=t+"px":s.style.top="0px"}},o.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},o.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&s)return{html5:!0};var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),d=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return l?{youtube:l}:i?{vimeo:i}:o?{dailymotion:o}:d?{vk:d}:void 0},o.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},o.prototype.addHtml=function(e){var t,l=null;if(this.s.dynamic?l=this.s.dynamicEl[e].subHtml:(l=(t=this.items[e]).getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!l&&(l=t.getAttribute("title"))&&t.querySelector("img")&&(l=t.querySelector("img").getAttribute("alt"))),null!=l){var i=l.substring(0,1);"."!==i&&"#"!==i||(l=this.s.subHtmlSelectorRelative&&!this.s.dynamic?t.querySelector(l).innerHTML:document.querySelector(l).innerHTML)}else l="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=l:this.___slide[e].insertAdjacentHTML("beforeend",l),null!=l&&(""===l?s.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):s.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),s.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},o.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},o.prototype.loadContent=function(e,t,l){var i,o,d,r,a,n,u=this,c=!1,g=function(e){for(var t=[],s=[],l=0;l<e.length;l++){var i=e[l].split(" ");""===i[0]&&i.splice(0,1),s.push(i[0]),t.push(i[1])}for(var d=window.innerWidth,r=0;r<t.length;r++)if(parseInt(t[r],10)>d){o=s[r];break}};if(u.s.dynamic){if(u.s.dynamicEl[e].poster&&(c=!0,d=u.s.dynamicEl[e].poster),n=u.s.dynamicEl[e].html,o=u.s.dynamicEl[e].src,u.s.dynamicEl[e].responsive)g(u.s.dynamicEl[e].responsive.split(","));r=u.s.dynamicEl[e].srcset,a=u.s.dynamicEl[e].sizes}else{if(u.items[e].getAttribute("data-poster")&&(c=!0,d=u.items[e].getAttribute("data-poster")),n=u.items[e].getAttribute("data-html"),o=u.items[e].getAttribute("href")||u.items[e].getAttribute("data-src"),u.items[e].getAttribute("data-responsive"))g(u.items[e].getAttribute("data-responsive").split(","));r=u.items[e].getAttribute("data-srcset"),a=u.items[e].getAttribute("data-sizes")}var f=!1;u.s.dynamic?u.s.dynamicEl[e].iframe&&(f=!0):"true"===u.items[e].getAttribute("data-iframe")&&(f=!0);var h=u.isVideo(o,e);if(!s.default.hasClass(u.___slide[e],"lg-loaded")){if(f)u.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+u.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var m="";m=h&&h.youtube?"lg-has-youtube":h&&h.vimeo?"lg-has-vimeo":"lg-has-html5",u.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+m+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+d+'" /></div></div>')}else h?(u.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),s.default.trigger(u.el,"hasVideo",{index:e,src:o,html:n})):u.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+o+'" /></div>');if(s.default.trigger(u.el,"onAferAppendSlide",{index:e}),i=u.___slide[e].querySelector(".lg-object"),a&&i.setAttribute("sizes",a),r){i.setAttribute("srcset",r);try{picturefill({elements:[i[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&u.addHtml(e),s.default.addClass(u.___slide[e],"lg-loaded")}s.default.on(u.___slide[e].querySelector(".lg-object"),"load.lg error.lg",(function(){var t=0;l&&!s.default.hasClass(document.body,"lg-from-hash")&&(t=l),setTimeout((function(){s.default.addClass(u.___slide[e],"lg-complete"),s.default.trigger(u.el,"onSlideItemLoad",{index:e,delay:l||0})}),t)})),h&&h.html5&&!c&&s.default.addClass(u.___slide[e],"lg-complete"),!0===t&&(s.default.hasClass(u.___slide[e],"lg-complete")?u.preload(e):s.default.on(u.___slide[e].querySelector(".lg-object"),"load.lg error.lg",(function(){u.preload(e)})))},o.prototype.slide=function(e,t,l){for(var i=0,o=0;o<this.___slide.length;o++)if(s.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var d=this;if(!d.lGalleryOn||i!==e){var r=this.___slide.length,a=d.lGalleryOn?this.s.speed:0,n=!1,u=!1;if(!d.lgBusy){var c;if(this.s.download)(c=d.s.dynamic?!1!==d.s.dynamicEl[e].downloadUrl&&(d.s.dynamicEl[e].downloadUrl||d.s.dynamicEl[e].src):"false"!==d.items[e].getAttribute("data-download-url")&&(d.items[e].getAttribute("data-download-url")||d.items[e].getAttribute("href")||d.items[e].getAttribute("data-src")))?(document.getElementById("lg-download").setAttribute("href",c),s.default.removeClass(d.outer,"lg-hide-download")):s.default.addClass(d.outer,"lg-hide-download");if(s.default.trigger(d.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l}),d.lgBusy=!0,clearTimeout(d.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout((function(){d.addHtml(e)}),a),this.arrowDisable(e),t){var g=e-1,f=e+1;(0===e&&i===r-1||e===r-1&&0===i)&&(f=0,g=r-1),s.default.removeClass(d.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),s.default.removeClass(d.outer.querySelector(".lg-current"),"lg-current"),s.default.removeClass(d.outer.querySelector(".lg-next-slide"),"lg-next-slide"),s.default.addClass(d.___slide[g],"lg-prev-slide"),s.default.addClass(d.___slide[f],"lg-next-slide"),s.default.addClass(d.___slide[e],"lg-current")}else{s.default.addClass(d.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)s.default.removeClass(this.___slide[h],"lg-prev-slide"),s.default.removeClass(this.___slide[h],"lg-next-slide");e<i?(u=!0,0!==e||i!==r-1||l||(u=!1,n=!0)):e>i&&(n=!0,e!==r-1||0!==i||l||(u=!0,n=!1)),u?(s.default.addClass(this.___slide[e],"lg-prev-slide"),s.default.addClass(this.___slide[i],"lg-next-slide")):n&&(s.default.addClass(this.___slide[e],"lg-next-slide"),s.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout((function(){s.default.removeClass(d.outer.querySelector(".lg-current"),"lg-current"),s.default.addClass(d.___slide[e],"lg-current"),s.default.removeClass(d.outer,"lg-no-trans")}),50)}d.lGalleryOn?(setTimeout((function(){d.loadContent(e,!0,0)}),this.s.speed+50),setTimeout((function(){d.lgBusy=!1,s.default.trigger(d.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l})}),this.s.speed)):(d.loadContent(e,!0,d.s.backdropDuration),d.lgBusy=!1,s.default.trigger(d.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l})),d.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},o.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,s.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,s.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(s.default.addClass(t.outer,"lg-right-end"),setTimeout((function(){s.default.removeClass(t.outer,"lg-right-end")}),400)))},o.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,s.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,s.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(s.default.addClass(t.outer,"lg-left-end"),setTimeout((function(){s.default.removeClass(t.outer,"lg-left-end")}),400)))},o.prototype.keyPress=function(){var e=this;this.items.length>1&&s.default.on(window,"keyup.lg",(function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))})),s.default.on(window,"keydown.lg",(function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),s.default.hasClass(e.outer,"lg-thumb-open")?s.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())}))},o.prototype.arrow=function(){var e=this;s.default.on(this.outer.querySelector(".lg-prev"),"click.lg",(function(){e.goToPrevSlide()})),s.default.on(this.outer.querySelector(".lg-next"),"click.lg",(function(){e.goToNextSlide()}))},o.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),l=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),s.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),s.default.addClass(t,"disabled")),e>0?(l.removeAttribute("disabled"),s.default.removeClass(l,"disabled")):(t.setAttribute("disabled","disabled"),s.default.addClass(t,"disabled"))}},o.prototype.setTranslate=function(e,t,l){this.s.useLeft?e.style.left=t:s.default.setVendor(e,"Transform","translate3d("+t+"px, "+l+"px, 0px)")},o.prototype.touchMove=function(e,t){var l=t-e;Math.abs(l)>15&&(s.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],l,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+l,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+l,0))},o.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&s.default.addClass(t.outer,"lg-slide");for(var l=0;l<this.___slide.length;l++)s.default.hasClass(this.___slide[l],"lg-current")||s.default.hasClass(this.___slide[l],"lg-prev-slide")||s.default.hasClass(this.___slide[l],"lg-next-slide")||(this.___slide[l].style.opacity="0");setTimeout((function(){s.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&s.default.trigger(t.el,"onSlideClick");for(var l=0;l<t.___slide.length;l++)t.___slide[l].removeAttribute("style")})),setTimeout((function(){s.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||s.default.removeClass(t.outer,"lg-slide")}),t.s.speed+100)},o.prototype.enableSwipe=function(){var e=this,t=0,l=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)s.default.on(e.___slide[o],"touchstart.lg",(function(l){s.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(l.preventDefault(),e.manageSwipeClass(),t=l.targetTouches[0].pageX)}));for(var d=0;d<e.___slide.length;d++)s.default.on(e.___slide[d],"touchmove.lg",(function(o){s.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),l=o.targetTouches[0].pageX,e.touchMove(t,l),i=!0)}));for(var r=0;r<e.___slide.length;r++)s.default.on(e.___slide[r],"touchend.lg",(function(){s.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(l-t)):s.default.trigger(e.el,"onSlideClick"))}))}},o.prototype.enableDrag=function(){var e=this,t=0,l=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var d=0;d<e.___slide.length;d++)s.default.on(e.___slide[d],"mousedown.lg",(function(l){s.default.hasClass(e.outer,"lg-zoomed")||(s.default.hasClass(l.target,"lg-object")||s.default.hasClass(l.target,"lg-video-play"))&&(l.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=l.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,s.default.removeClass(e.outer,"lg-grab"),s.default.addClass(e.outer,"lg-grabbing"),s.default.trigger(e.el,"onDragstart")))}));s.default.on(window,"mousemove.lg",(function(d){i&&(o=!0,l=d.pageX,e.touchMove(t,l),s.default.trigger(e.el,"onDragmove"))})),s.default.on(window,"mouseup.lg",(function(d){o?(o=!1,e.touchEnd(l-t),s.default.trigger(e.el,"onDragend")):(s.default.hasClass(d.target,"lg-object")||s.default.hasClass(d.target,"lg-video-play"))&&s.default.trigger(e.el,"onSlideClick"),i&&(i=!1,s.default.removeClass(e.outer,"lg-grabbing"),s.default.addClass(e.outer,"lg-grab"))}))}},o.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,l=this.___slide.length;this.s.loop&&(0===this.index?t=l-1:this.index===l-1&&(e=0));for(var i=0;i<this.___slide.length;i++)s.default.removeClass(this.___slide[i],"lg-next-slide"),s.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&s.default.addClass(this.___slide[t],"lg-prev-slide"),s.default.addClass(this.___slide[e],"lg-next-slide")},o.prototype.mousewheel=function(){var e=this;s.default.on(e.outer,"mousewheel.lg",(function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())}))},o.prototype.closeGallery=function(){var e=this,t=!1;s.default.on(this.outer.querySelector(".lg-close"),"click.lg",(function(){e.destroy()})),e.s.closable&&(s.default.on(e.outer,"mousedown.lg",(function(e){t=!!(s.default.hasClass(e.target,"lg-outer")||s.default.hasClass(e.target,"lg-item")||s.default.hasClass(e.target,"lg-img-wrap"))})),s.default.on(e.outer,"mouseup.lg",(function(l){(s.default.hasClass(l.target,"lg-outer")||s.default.hasClass(l.target,"lg-item")||s.default.hasClass(l.target,"lg-img-wrap")&&t)&&(s.default.hasClass(e.outer,"lg-dragging")||e.destroy())})))},o.prototype.destroy=function(e){var t=this;if(e||s.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var l=0;l<this.items.length;l++)s.default.off(this.items[l],".lg"),s.default.off(this.items[l],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}for(var o in s.default.off(this.el,".lgtm"),window.lgModules)t.modules[o]&&t.modules[o].destroy();this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,s.default.off(window,".lg"),s.default.removeClass(document.body,"lg-on"),s.default.removeClass(document.body,"lg-from-hash"),t.outer&&s.default.removeClass(t.outer,"lg-visible"),s.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout((function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||s.default.trigger(t.el,"onCloseAfter")}catch(e){}}),t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(e){console.error("lightGallery has not initiated properly")}else{var s="lg"+window.lgData.uid++;window.lgData[s]=new o(e,t),e.setAttribute("lg-uid",s)}}catch(e){console.error("lightGallery has not initiated properly")}}}))},{"./lg-utils":1}]},{},[2])(2)}));