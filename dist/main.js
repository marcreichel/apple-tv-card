(()=>{"use strict";!function(){function e(e){e.target.closest(".apple-tv-card").classList.add("hover"),t(e)}function t(e){e.preventDefault();let t=e.target.closest(".apple-tv-card");const s=window.matchMedia("(prefers-reduced-motion: reduce)");if(!t.querySelector(".reflection")&&s&&!s.matches){const e=document.createElement("span");e.classList.add("reflection"),t.prepend(e)}let r,n;if("touchmove"===e.type||"touchstart"===e.type){const s=e.touches[0],c=t.getBoundingClientRect();r=s.pageX-c.left,n=s.pageY-c.top;const l=document.elementFromPoint(s.pageX,s.pageY);if(!l||t!==l.closest(".apple-tv-card"))return void a(e)}else r=e.offsetX,n=e.offsetY;const c=t.clientWidth,l=t.clientHeight,o=(c/2-r)/c*10,d=-1*(l/2-n)/l*10,p=-1*(c/2-r)/c*10,i=-1*(l/2-n)/l*10,u=Math.max(c,l),m=t.closest(".apple-tv-card-container");m&&(m.style.perspective=2.5*u+"px"),s&&!s.matches&&(t.style.transform="translateZ(4rem) rotateY("+o+"deg) rotateX("+d+"deg) translateX("+p+"px) translateY("+i+"px)");const f=t.querySelector(".parallax-content");f&&s&&!s.matches&&(f.style.transform="translateX("+-.65*p+"px) translateY("+-.65*i+"px)");const v=t.querySelector(".reflection");v&&s&&!s.matches&&(v.style.width=1.5*u+"px",v.style.height=1.5*u+"px",v.style.margin=-.75*u+"px 0 0 "+-.75*u+"px",v.style.transform="translateY("+(n-l/2)+"px) translateX("+(.1*c+.8*r)+"px)")}function a(e){let t=e.target.closest(".apple-tv-card");t.classList.remove("hover"),t.style.transform=null;const a=t.querySelector(".parallax-content");a&&(a.style.transform=null);const s=t.querySelector(".reflection");s&&(s.style.transform=null)}document.querySelectorAll(".apple-tv-card").forEach((s=>{const r=s.closest(".apple-tv-card-container");r.querySelector(".apple-tv-card-title")&&r.classList.add("has-title"),s.addEventListener("mouseenter",e),s.addEventListener("touchstart",e),s.addEventListener("mousemove",t),s.addEventListener("touchmove",t),s.addEventListener("mouseleave",a),s.addEventListener("touchend",a),s.addEventListener("touchcancel",a)}))}()})();