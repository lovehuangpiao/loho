(function(window){var svgSprite='<svg><symbol id="icon-xiangshangjiantou" viewBox="0 0 1024 1024"><path d="M511.768733 434.512185c4.173043 5.278213 6.15007 8.363482 8.677637 10.893094 79.849606 79.888492 159.791309 159.678746 239.588727 239.614309 11.828396 11.847839 25.365714 18.319228 42.275849 16.040325 18.47477-2.488681 31.322379-12.634762 38.1069-29.892821 6.692423-17.008372 3.479241-32.766264-7.623631-47.004547-2.40477-3.079128-5.321192-5.776563-8.098445-8.552793-91.454922-91.429339-182.91803-182.852538-274.392394-274.268574-25.4046-25.38618-51.420113-25.326828-76.93523 0.169869-91.939969 91.873454-183.820586 183.808306-275.845489 275.590686-13.739932 13.70207-20.760836 29.182646-15.848966 48.687886 8.715499 34.593889 50.548256 47.517223 77.216639 23.74889 7.080256-6.306636 13.543458-13.301957 20.264533-20.007683 74.80573-74.747401 149.613506-149.489686 224.361931-224.296439 2.521426-2.521426 4.406356-5.678326 8.250918-10.721179l0 0L511.768733 434.512185 511.768733 434.512185z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)