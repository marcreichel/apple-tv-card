(()=>{"use strict";!function(){function e(e){let t=e.target.closest(".apple-tv-card");const n=t.clientWidth,c=t.clientHeight,r=Math.max(n,c),a=t.closest(".apple-tv-card-container");a&&(a.style.perspective=2.5*r+"px")}function t(e){a(e.target.closest(".apple-tv-card"))}function n(e){let t=e.target.closest(".apple-tv-card");t.querySelector(".content").focus(),t.classList.add("hover"),c(e)}function c(e){e.preventDefault();let t=e.target.closest(".apple-tv-card");if(!t.classList.contains("hover"))return;const n=window.matchMedia("(prefers-reduced-motion: reduce)");if(!t.querySelector(".reflection")&&n&&!n.matches){const e=document.createElement("span");e.classList.add("reflection"),t.prepend(e)}let c,a;if("touchmove"===e.type||"touchstart"===e.type){const n=e.touches[0],s=t.getBoundingClientRect();c=n.pageX-s.left,a=n.pageY-s.top;const o=document.elementFromPoint(n.pageX,n.pageY);if(!o||t!==o.closest(".apple-tv-card"))return void r(e)}else c=e.offsetX,a=e.offsetY;const s=t.clientWidth,o=t.clientHeight,l=(s/2-c)/s*10,i=-1*(o/2-a)/o*10,d=-1*(s/2-c)/s*10,p=-1*(o/2-a)/o*10,u=Math.max(s,o),f=t.closest(".apple-tv-card-container");f&&(f.style.perspective=2.5*u+"px"),n&&!n.matches&&(t.style.transform="translateZ(4rem) rotateY("+l+"deg) rotateX("+i+"deg) translateX("+d+"px) translateY("+p+"px)");const v=t.querySelector(".parallax-content");v&&n&&!n.matches&&(v.style.transform="translateX("+-.65*d+"px) translateY("+-.65*p+"px)");const h=t.querySelector(".reflection");h&&n&&!n.matches&&(h.style.width=1.5*u+"px",h.style.height=1.5*u+"px",h.style.margin=-.75*u+"px 0 0 "+-.75*u+"px",h.style.transform="translateY("+(a-o/2)+"px) translateX("+(.1*s+.8*c)+"px)")}function r(e){let t=e.target.closest(".apple-tv-card");t.querySelector(".content").blur(),a(t)}function a(e){e.classList.remove("hover"),e.style.transform=null;const t=e.querySelector(".parallax-content");t&&(t.style.transform=null);const n=e.querySelector(".reflection");n&&(n.style.transform=null)}document.querySelectorAll(".apple-tv-card").forEach((a=>{const s=a.closest(".apple-tv-card-container");s.querySelector(".apple-tv-card-title")||s.classList.add("no-title");const o=Math.max(a.clientWidth,a.clientHeight);a.style.fontSize=o/3.5+"px";const l=a.querySelector(".content");l.setAttribute("tabindex","0"),l.addEventListener("focus",e),l.addEventListener("blur",t),a.addEventListener("mouseenter",n),a.addEventListener("touchstart",n),a.addEventListener("mousemove",c),a.addEventListener("touchmove",c),a.addEventListener("mouseleave",r),a.addEventListener("touchend",r),a.addEventListener("touchcancel",r)})),window.addEventListener("resize",(function(){document.querySelectorAll(".apple-tv-card").forEach((e=>{const t=Math.max(e.clientWidth,e.clientHeight);e.style.fontSize=t/3.5+"px"}))}))}()})();