(function(){function h(){u.removeAttribute("data-mode");t.setAttribute("hidden","");n.setAttribute("hidden","");e.setAttribute("hidden","");i.removeAttribute("hidden");f.removeAttribute("hidden")}const r=document.querySelector(".topbar-header-content > button:nth-child(2)"),c=document.querySelector(".topbar-header-content > button:nth-child(3)"),u=document.querySelector(".topbar-header"),n=document.querySelector(".topbar-back-arrow"),i=document.querySelector(".topbar-header-endpoint"),f=document.querySelector(".topbar-header-content"),e=document.querySelector(".searchbox"),t=document.querySelector("c3-overlay"),o=document.querySelector(".menu-container"),s=document.querySelector(".menu-container c3-overlay");c.addEventListener("click",n=>{n.stopPropagation(),o.removeAttribute("hidden")});s&&s.addEventListener("click",n=>{n.stopPropagation(),o.setAttribute("hidden","")});t&&t.addEventListener("click",n=>{n.stopPropagation(),h()});r&&r.addEventListener("click",r=>{r.stopPropagation(),u.setAttribute("data-mode","searching"),i.setAttribute("hidden",""),f.setAttribute("hidden",""),t.removeAttribute("hidden"),n.removeAttribute("hidden"),e.removeAttribute("hidden")});n&&n.addEventListener("click",n=>{n.stopPropagation(),h()});i.addEventListener("click",n=>{n.stopPropagation(),window.location.href="/"});const l=document.querySelector(".topbar-title");l.addEventListener("click",n=>{n.stopPropagation(),window.location.href="/"})})(),function(){function t(n){var t=n.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}const i=new IntersectionObserver(n=>{Array.prototype.forEach.call(n,function(n){n.isIntersecting&&(i.unobserve(n.target),n.target.src=n.target.dataset.src)})}),n=document.querySelectorAll("img.cover");addEventListener("DOMContentLoaded",()=>{n.forEach(n=>{t(n)&&n.dataset.src&&(n.src=n.dataset.src)})},!1);n.forEach(n=>{n.dataset.src&&(n.src=n.dataset.src)})}()