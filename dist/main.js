(()=>{"use strict";!function(){function e(e){e.preventDefault();let r=e.target.closest(".apple-tv-card");r.classList.add("hover");const n=window.matchMedia("(prefers-reduced-motion: reduce)");if(!r.querySelector(".reflection")&&n&&!n.matches){const e=document.createElement("span");e.classList.add("reflection"),r.prepend(e)}let s,a;if("touchmove"===e.type||"touchstart"===e.type){const n=e.touches[0],o=r.getBoundingClientRect();s=n.pageX-o.left,a=n.pageY-o.top;const c=document.elementFromPoint(n.pageX,n.pageY);if(!c||r!==c.closest(".apple-tv-card"))return void t(e)}else s=e.offsetX,a=e.offsetY;const o=r.clientWidth,c=r.clientHeight,l=(o/2-s)/o*10,d=-1*(c/2-a)/c*10,p=-1*(o/2-s)/o*10,i=-1*(c/2-a)/c*10,u=Math.max(o,c);!n||n.matches?r.style.transform="perspective("+2.5*u+"px) translateZ(4rem)":r.style.transform="perspective("+2.5*u+"px) translateZ(4rem) rotateY("+l+"deg) rotateX("+d+"deg) translateX("+p+"px) translateY("+i+"px)";const m=r.querySelector(".paralax-content");m&&n&&!n.matches&&(m.style.transform="translateX("+-.65*p+"px) translateY("+-.65*i+"px)");const f=r.querySelector(".reflection");f&&n&&!n.matches&&(f.style.width=1.5*u+"px",f.style.height=1.5*u+"px",f.style.margin=-.75*u+"px 0 0 "+-.75*u+"px",f.style.transform="translateY("+(a-c/2)+"px) translateX("+(.1*o+.8*s)+"px)")}function t(e){let t=e.target.closest(".apple-tv-card");t.classList.remove("hover"),t.style.transform=null;const r=t.querySelector(".paralax-content");r&&(r.style.transform=null);const n=t.querySelector(".reflection");n&&(n.style.transform=null)}document.querySelectorAll(".apple-tv-card").forEach((r=>{r.addEventListener("mouseenter",e),r.addEventListener("touchstart",e),r.addEventListener("mousemove",e),r.addEventListener("touchmove",e),r.addEventListener("mouseleave",t),r.addEventListener("touchend",t),r.addEventListener("touchcancel",t)}))}()})();