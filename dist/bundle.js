(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e,t,n,o;e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),n=document.querySelectorAll(".callback-btn"),o=document.querySelector(".modal-close"),n.forEach((function(n){n.addEventListener("click",(function(){e.style.display="block",t.style.display="block"}))})),o.addEventListener("click",(function(){e.style.display="none",t.style.display="none"})),t.addEventListener("click",(function(n){n.target===t&&(e.style.display="none",t.style.display="none")})),function(){for(var e=document.querySelectorAll(".smooth-scroll"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){e.preventDefault();var t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}),console.log()}));var n=document.querySelector(".isBtn");window.onscroll=function(){window.scrollY>550?n.classList.remove("isBtn_hide"):window.scrollY<550&&n.classList.add("isBtn_hide")}}()}))})();