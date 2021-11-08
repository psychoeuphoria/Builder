(function(){function h(){u.removeAttribute("data-mode");t.setAttribute("hidden","");n.setAttribute("hidden","");e.setAttribute("hidden","");i.removeAttribute("hidden");f.removeAttribute("hidden")}const r=document.querySelector(".topbar-header-content > button:nth-child(2)"),c=document.querySelector(".topbar-header-content > button:nth-child(3)"),u=document.querySelector(".topbar-header"),n=document.querySelector(".topbar-back-arrow"),i=document.querySelector(".topbar-header-endpoint"),f=document.querySelector(".topbar-header-content"),e=document.querySelector(".searchbox"),t=document.querySelector("c3-overlay"),o=document.querySelector(".menu-container"),s=document.querySelector(".menu-container c3-overlay");c.addEventListener("click",n=>{n.stopPropagation(),o.removeAttribute("hidden")});s&&s.addEventListener("click",n=>{n.stopPropagation(),o.setAttribute("hidden","")});t&&t.addEventListener("click",n=>{n.stopPropagation(),h()});r&&r.addEventListener("click",r=>{r.stopPropagation(),u.setAttribute("data-mode","searching"),i.setAttribute("hidden",""),f.setAttribute("hidden",""),t.removeAttribute("hidden"),n.removeAttribute("hidden"),e.removeAttribute("hidden")});n&&n.addEventListener("click",n=>{n.stopPropagation(),h()});i.addEventListener("click",n=>{n.stopPropagation(),window.location.href="/"});const l=document.querySelector(".topbar-title");l.addEventListener("click",n=>{n.stopPropagation(),window.location.href="/"})})();class CustomToast extends HTMLElement{static get observedAttributes(){return["message"]}constructor(){super();this.root=this.attachShadow({mode:"open"});const r=document.createElement("style");r.textContent=CustomToast.getStyle();this.root.appendChild(r);const n=document.createElement("DIV");n.setAttribute("class","c3-toast");const t=document.createElement("DIV");t.setAttribute("class","notification-action-renderer");const i=document.createElement("DIV");i.setAttribute("class","notification-action-response-text");t.appendChild(i);n.appendChild(t);this.root.appendChild(n);this.c3Toast=n;this.notificationActionResponseText=i;this.messages=[];this.timer=0}connectedCallback(){}disconnectedCallback(){}showMessage(){if(this.messages.length&&!this.showing){const n=this.messages.shift();this.notificationActionResponseText.textContent=n;this.c3Toast.setAttribute("dir","in");this.showing=!0;this.timer&&clearTimeout(this.timer);this.timer=setTimeout(()=>{this.c3Toast.setAttribute("dir","out"),setTimeout(()=>{this.showing=!1,this.showMessage()},195)},3e3)}}attributeChangedCallback(n,t,i){n==="message"&&(this.messages.push(i),this.showMessage())}adoptedCallback(){}static getTemplate(n){return`
        ${CustomToast.getStyle()}
        <div>
            ${n}
        </div>
        `}static getStyle(){return`
        .c3-toast[dir="in"] {
            transition: margin 225ms cubic-bezier(0.0, 0.0, 0.2, 1);
            margin-bottom: 0;
        }
        
        .c3-toast[dir="out"] {
            transition: margin 195ms cubic-bezier(0.4, 0.0, 1, 1);
        }
        
        .c3-toast {
            display: block;
            position: fixed;
            z-index: 4;
            left: 0;
            right: 0;
            bottom: 0;
            box-sizing: border-box;
            padding: 14px 24px;
            font-size: 1.4rem;
            color: #ffffff;
            background: hsl(0, 0%, 20%);
            will-change: transform;
            margin-bottom: -100%;
        }
        
        .notification-action-renderer {
            display: flex;
            align-items: center;
        }
        
        .notification-action-response-text {
            flex-grow: 1;
            padding-right: 1rem;
            font-size:14px;
        }
        
        `}}customElements.define("custom-toast",CustomToast)