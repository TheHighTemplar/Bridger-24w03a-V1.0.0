"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{70636:(t,e,i)=>{i(44645),i(96934),i(14840),i(57260),i(13002),i(73921);var n=i(27034);i(51941),i(88309),i(40987),i(33491),i(88823),window.IncludeFragmentElement.prototype.fetch=t=>(t.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(t)),i(3793);var s=i(76006);function r(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}let a=class GitCloneHelpElement extends HTMLElement{updateURL(t){let e=t.currentTarget,i=e.getAttribute("data-url")||"";if(this.helpField.value=i,e.matches(".js-git-protocol-clone-url"))for(let t of this.helpTexts)t.textContent=i;for(let t of this.cloneURLButtons)t.classList.remove("selected");e.classList.add("selected")}};function l(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function o(t,e){var i=l(t,e,"get");return i.get?i.get.call(t):i.value}function u(t,e,i){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,i)}function d(t,e,i){var n=l(t,e,"set");return!function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,n,i),i}r([s.fA],a.prototype,"helpField",void 0),r([s.GO],a.prototype,"helpTexts",void 0),r([s.GO],a.prototype,"cloneURLButtons",void 0),a=r([s.Ih],a);var h=new WeakMap,c=new WeakMap,p=new WeakMap,m=new WeakMap;let f=class MarkedTextElement extends HTMLElement{get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(t){this.setAttribute("query",t)}get ownerInput(){let t=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return t instanceof HTMLInputElement?t:null}connectedCallback(){this.handleEvent(),this.ownerInput?.addEventListener("input",this),d(this,p,new MutationObserver(()=>this.handleEvent()))}handleEvent(){o(this,m)&&cancelAnimationFrame(o(this,m)),d(this,m,requestAnimationFrame(()=>this.mark()))}disconnectedCallback(){this.ownerInput?.removeEventListener("input",this),o(this,p).disconnect()}mark(){let t=this.textContent||"",e=this.query;if(t===o(this,h)&&e===o(this,c))return;d(this,h,t),d(this,c,e),o(this,p).disconnect();let i=0,n=document.createDocumentFragment();for(let s of(this.positions||function(t,e){let i=[],n=0;for(let s=0;s<t.length;s++){let r=t[s],a=e.indexOf(r,n);if(-1===a)break;n=a+1,i.push(a)}return i})(e,t)){if(Number(s)!==s||s<i||s>t.length)continue;""!==t.slice(i,s)&&n.appendChild(document.createTextNode(t.slice(i,s))),i=s+1;let e=document.createElement("mark");e.textContent=t[s],n.appendChild(e)}n.appendChild(document.createTextNode(t.slice(i))),this.replaceChildren(n),o(this,p).observe(this,{attributes:!0,childList:!0,subtree:!0})}constructor(...t){super(...t),u(this,h,{writable:!0,value:void 0}),u(this,c,{writable:!0,value:void 0}),u(this,p,{writable:!0,value:void 0}),u(this,m,{writable:!0,value:void 0}),d(this,h,""),d(this,c,"")}};f.observedAttributes=["query","data-owner-input"],window.customElements.get("marked-text")||(window.MarkedTextElement=f,window.customElements.define("marked-text",f));var g=i(21278);let v=class PasswordStrengthElement extends HTMLElement{connectedCallback(){this.addEventListener("input",b)}disconnectedCallback(){this.removeEventListener("input",b)}};function b(t){let e=t.currentTarget;if(!(e instanceof v))return;let i=t.target;if(!(i instanceof HTMLInputElement))return;let n=i.form;if(!(n instanceof HTMLFormElement))return;let s=function(t,e){let i={valid:!1,hasMinimumCharacterCount:t.length>=e.minimumCharacterCount,hasMinimumPassphraseLength:0!==e.passphraseLength&&t.length>=e.passphraseLength,hasLowerCase:/[a-z]/.test(t),hasNumber:/\d/.test(t)};return i.valid=i.hasMinimumPassphraseLength||i.hasMinimumCharacterCount&&i.hasLowerCase&&i.hasNumber,i}(i.value,{minimumCharacterCount:Number(e.getAttribute("minimum-character-count")),passphraseLength:Number(e.getAttribute("passphrase-length"))});if(s.valid){i.setCustomValidity("");let t=e.querySelector("dl.form-group");t&&(t.classList.remove("errored"),t.classList.add("successed"))}else"true"!==e.getAttribute("skip-custom-validity")&&i.setCustomValidity(e.getAttribute("invalid-message")||"Invalid");(function(t,e){let i=t.querySelector("[data-more-than-n-chars]"),n=t.querySelector("[data-min-chars]"),s=t.querySelector("[data-number-requirement]"),r=t.querySelector("[data-letter-requirement]"),a=t.getAttribute("error-class")?.split(" ").filter(t=>t.length>0)||[],l=t.getAttribute("pass-class")?.split(" ").filter(t=>t.length>0)||[];for(let t of[i,n,s,r])t?.classList.remove(...a,...l);if(e.hasMinimumPassphraseLength&&i)i.classList.add(...l);else if(e.valid)n.classList.add(...l),s.classList.add(...l),r.classList.add(...l);else{let t=e.hasMinimumCharacterCount?l:a,o=e.hasNumber?l:a,u=e.hasLowerCase?l:a;i?.classList.add(...a),n.classList.add(...t),s.classList.add(...o),r.classList.add(...u)}})(e,s),(0,g.G)(n)}function w(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}window.customElements.get("password-strength")||(window.PasswordStrengthElement=v,window.customElements.define("password-strength",v)),i(85657);let y=class PollIncludeFragmentElement extends n.Z{async fetch(t,e){let i=await super.fetch(t),n=e||this.intervalMilliseconds;(!n||isNaN(n))&&(n=1e3);let s=isNaN(this.backoffMultiplier)?1.5:this.backoffMultiplier;return 202===i.status?(await new Promise(t=>{this.pollingTimeout=setTimeout(t,n)}),this.fetch(t,n*s)):i}refetch(){return this.cancelPolling(),super.refetch()}connectedCallback(){super.connectedCallback(),this.retryButton&&this.retryButton.addEventListener("click",()=>{this.refetch()})}disconnectedCallback(){this.cancelPolling()}cancelPolling(){this.pollingTimeout&&clearTimeout(this.pollingTimeout)}constructor(...t){super(...t),this.intervalMilliseconds=1e3,this.backoffMultiplier=1.5,this.pollingTimeout=null}};w([s.fA],y.prototype,"retryButton",void 0),w([s.Lj],y.prototype,"intervalMilliseconds",void 0),w([s.Lj],y.prototype,"backoffMultiplier",void 0),y=w([s.Ih],y);var E=i(10160);let x=t=>void 0===t||/\n/.test(t),C=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],_=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],k=new WeakMap,L=new WeakMap,M=class SlashCommandExpander{destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(t,e){this.input===document.activeElement&&this.setMenu(t,e)}deactivate(){let t=this.menu,e=this.combobox;return!!t&&!!e&&(this.menu=null,this.combobox=null,t.removeEventListener("combobox-commit",this.oncommit),t.removeEventListener("mousedown",this.onmousedown),e.destroy(),t.remove(),!0)}setMenu(t,e){this.deactivate(),this.menu=e,e.id||(e.id=`text-expander-${Math.floor(1e5*Math.random()).toString()}`),this.expander.append(e);let i=e.querySelector(".js-command-list-container");i?this.combobox=new E.Z(this.input,i):this.combobox=new E.Z(this.input,e);let{top:n,left:s}=function(t,e=t.selectionEnd){let{mirror:i,marker:n}=function(t,e){let i,n;let s=t.nodeName.toLowerCase();if("textarea"!==s&&"input"!==s)throw Error("expected textField to a textarea or input");let r=k.get(t);if(r&&r.parentElement===t.parentElement)r.textContent="";else{r=document.createElement("div"),k.set(t,r);let e=window.getComputedStyle(t),i=C.slice(0);"textarea"===s?i.push("white-space:pre-wrap;"):i.push("white-space:nowrap;");for(let t=0,n=_.length;t<n;t++){let n=_[t];i.push(`${n}:${e.getPropertyValue(n)};`)}r.style.cssText=i.join(" ")}let a=document.createElement("span");if(a.style.cssText="position: absolute;",a.textContent="\xa0","number"==typeof e){let s=t.value.substring(0,e);s&&(i=document.createTextNode(s)),(s=t.value.substring(e))&&(n=document.createTextNode(s))}else{let e=t.value;e&&(i=document.createTextNode(e))}if(i&&r.appendChild(i),r.appendChild(a),n&&r.appendChild(n),!r.parentElement){if(!t.parentElement)throw Error("textField must have a parentElement to mirror");t.parentElement.insertBefore(r,t)}return r.scrollTop=t.scrollTop,r.scrollLeft=t.scrollLeft,{mirror:r,marker:a}}(t,e),s=i.getBoundingClientRect(),r=n.getBoundingClientRect();return setTimeout(()=>{i.remove()},5e3),{top:r.top-s.top,left:r.left-s.left}}(this.input,t.position),r=parseInt(window.getComputedStyle(this.input).fontSize);e.style.top=`${n+r}px`,e.style.left=`${s}px`,this.combobox.start(),e.addEventListener("combobox-commit",this.oncommit),e.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(t){if(null==t)return;let e=this.match;if(!e)return;let{cursor:i,value:n}=this.replaceCursorMark(t);n=n?.length===0?n:`${n} `;let s=e.position-e.key.length,r=e.position+e.text.length;this.input.focus();let a=!1;try{this.input.setSelectionRange(s,r),a=document.execCommand("insertText",!1,n)}catch(t){a=!1}if(!a){let t=this.input.value.substring(0,e.position-e.key.length),i=this.input.value.substring(e.position+e.text.length);this.input.value=t+n+i}this.deactivate(),i=s+(i||n.length),this.input.selectionStart=i,this.input.selectionEnd=i}replaceCursorMark(t){let e=/%cursor%/gm,i=e.exec(t);return i?{cursor:i.index,value:t.replace(e,"")}:{cursor:null,value:t}}async onCommit({target:t}){if(!(t instanceof HTMLElement)||!this.combobox)return;let e=this.match;if(!e)return;let n={item:t,key:e.key,value:null},s=new CustomEvent("text-expander-value",{cancelable:!0,detail:n}),r=!this.expander.dispatchEvent(s),{onValue:a}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,19038));await a(this.expander,e.key,t),!r&&n.value&&this.setValue(n.value)}onBlur(){if(this.interactingWithMenu){this.interactingWithMenu=!1;return}this.deactivate()}onPaste(){this.justPasted=!0}async delay(t){return new Promise(e=>setTimeout(e,t))}async onInput(){if(this.justPasted){this.justPasted=!1;return}let t=this.findMatch();if(t){if(this.match=t,await this.delay(this.appropriateDelay()),this.match!==t)return;let e=await this.notifyProviders(t);if(!this.match)return;e?this.activate(t,e):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(){return 250}findMatch(){let t=this.input.selectionEnd,e=this.input.value;for(let i of this.expander.keys){let n=function(t,e,i){let n=t.lastIndexOf(e,i-1);if(-1===n||t.lastIndexOf(" ",i-1)>n||t.lastIndexOf("\n",i-1)>n)return;let s=t[n-1];if(!s||"\n"===s)return{word:t.substring(n+e.length,i),position:n+e.length,beginningOfLine:x(s)}}(e,i,t);if(n)return{text:n.word,key:i,position:n.position,beginningOfLine:n.beginningOfLine}}}async notifyProviders(t){let e=[],n=t=>e.push(t),s=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:n,text:t.text,key:t.key}});if(!this.expander.dispatchEvent(s))return;let{onChange:r}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,19038));return r(this.expander,t.key,n,t.text),(await Promise.all(e)).filter(t=>t.matched).map(t=>t.fragment)[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(t){"Escape"===t.key&&this.deactivate()&&(t.stopImmediatePropagation(),t.preventDefault())}constructor(t,e){this.expander=t,this.input=e,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,e.addEventListener("paste",this.onpaste),e.addEventListener("input",this.oninput),e.addEventListener("keydown",this.onkeydown),e.addEventListener("blur",this.onblur)}},A=class SlashCommandExpanderElement extends HTMLElement{get keys(){let t=this.getAttribute("keys");return t?t.split(" "):[]}connectedCallback(){let t=this.querySelector('input[type="text"], textarea');if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;let e=new M(this,t);L.set(this,e)}disconnectedCallback(){let t=L.get(this);t&&(t.destroy(),L.delete(this))}setValue(t){let e=L.get(this);e&&e.setValue(t)}setMenu(t,e=!1){let i=L.get(this);i&&i.match&&(e&&(i.interactingWithMenu=!0),i.setMenu(i.match,t))}closeMenu(){let t=L.get(this);t&&t.setValue("")}isLoading(){let t=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(t){let e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}showError(){let t=this.getElementsByClassName("js-slash-command-expander-error")[0];if(t){let e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}};function T(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=A,window.customElements.define("slash-command-expander",A));let q=class TextSuggesterElement extends HTMLElement{acceptSuggestion(){this.suggestion?.textContent&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}};function S(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function I(t,e){var i=S(t,e,"get");return i.get?i.get.call(t):i.value}function j(t,e,i){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,i)}function z(t,e,i){var n=S(t,e,"set");return!function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,n,i),i}T([s.fA],q.prototype,"input",void 0),T([s.fA],q.prototype,"suggestionContainer",void 0),T([s.fA],q.prototype,"suggestion",void 0),q=T([s.Ih],q);var N=new WeakMap,P=new WeakMap,R=new WeakMap,W=new WeakMap,F=new WeakMap,H=new WeakMap;let O=class VirtualFilterInputElement extends HTMLElement{static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(I(this,H))return I(this,H);if(this.hasAttribute("aria-owns")){let t=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");t&&(t instanceof Set||t&&"object"==typeof t&&"size"in t&&"add"in t&&"delete"in t&&"clear"in t)&&z(this,H,t)}return z(this,H,I(this,H)||new Set)}set filtered(t){z(this,H,t)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(t){this.setAttribute("src",t)}get loading(){return"lazy"===this.getAttribute("loading")?"lazy":"eager"}set loading(t){this.setAttribute("loading",t)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",t)}get property(){return this.getAttribute("data-property")||""}set property(t){this.setAttribute("data-property",t)}reset(){this.filtered.clear(),z(this,F,new Set)}clear(){this.input&&(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(t,e,i){let n=this.isConnected&&this.src,s="eager"===this.loading,r=e!==i;("src"===t||"data-property"===t)&&r&&(z(this,R,null),I(this,W)&&clearTimeout(I(this,W))),n&&s&&("src"===t||"loading"===t||"accept"===t||"data-property"===t)&&r?(cancelAnimationFrame(I(this,P)),z(this,P,requestAnimationFrame(()=>this.load()))):"aria-owns"===t&&z(this,H,null)}connectedCallback(){this.src&&"eager"===this.loading&&(cancelAnimationFrame(I(this,P)),z(this,P,requestAnimationFrame(()=>this.load())));let t=this.input;if(!t)return;let e=this.getAttribute("aria-owns");null!==e&&this.attributeChangedCallback("aria-owns","",e),t.setAttribute("autocomplete","off"),t.setAttribute("spellcheck","false"),this.src&&"lazy"===this.loading&&(document.activeElement===t?this.load():t.addEventListener("focus",()=>{this.load()},{once:!0})),t.addEventListener("input",this)}disconnectedCallback(){this.input?.removeEventListener("input",this)}handleEvent(t){"input"===t.type&&(I(this,W)&&clearTimeout(I(this,W)),z(this,W,window.setTimeout(()=>this.filterItems(),(this.input?.value?.length,300))))}async load(){I(this,N)?.abort(),z(this,N,new AbortController);let{signal:t}=I(this,N);if(!this.src)throw Error("missing src");if(await new Promise(t=>setTimeout(t,0)),!t.aborted){this.dispatchEvent(new Event("loadstart"));try{let e=await this.fetch(this.request(),{signal:t,headers:{"X-Requested-With":"XMLHttpRequest"}});if(location.origin+this.src!==e.url)return;if(!e.ok)throw Error(`Failed to load resource: the server responded with a status of ${e.status}`);z(this,F,new Set((await e.json())[this.property])),z(this,R,null),this.dispatchEvent(new Event("loadend"))}catch(e){if(t.aborted){this.dispatchEvent(new Event("loadend"));return}throw(async()=>{this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))})(),e}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(t,e){return fetch(t,e)}filterItems(){let t;let e=this.input?.value.trim()??"",i=I(this,R);if(z(this,R,e),e!==i){for(let n of(this.dispatchEvent(new CustomEvent("virtual-filter-input-filter")),i&&e.includes(i)?t=this.filtered:(t=I(this,F),this.filtered.clear()),t))this.filter(n,e)?this.filtered.add(n):this.filtered.delete(n);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}}constructor(...t){super(...t),j(this,N,{writable:!0,value:void 0}),j(this,P,{writable:!0,value:void 0}),j(this,R,{writable:!0,value:void 0}),j(this,W,{writable:!0,value:void 0}),j(this,F,{writable:!0,value:void 0}),j(this,H,{writable:!0,value:void 0}),z(this,P,0),z(this,R,null),z(this,F,new Set),z(this,H,null),this.filter=(t,e)=>String(t).includes(e)}};function V(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function B(t,e){var i=V(t,e,"get");return i.get?i.get.call(t):i.value}function D(t,e,i){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,i)}function $(t,e,i){var n=V(t,e,"set");return!function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,n,i),i}window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=O,window.customElements.define("virtual-filter-input",O));let G=new IntersectionObserver(t=>{for(let e of t)e.isIntersecting&&e.target instanceof te&&"eager"===e.target.updating&&e.target.update()});var Z=new WeakMap,X=new WeakMap,U=new WeakMap,K=new WeakMap,J=new WeakMap,Q=new WeakMap,Y=new WeakMap;let tt=Symbol.iterator,te=class VirtualListElement extends HTMLElement{static get observedAttributes(){return["data-updating","aria-activedescendant"]}get updating(){return"lazy"===this.getAttribute("data-updating")?"lazy":"eager"}set updating(t){this.setAttribute("data-updating",t)}get size(){return B(this,X).size}get range(){let t=this.getBoundingClientRect().height,{scrollTop:e}=this,i=`${e}-${t}`;if(B(this,J).has(i))return B(this,J).get(i);let n=0,s=0,r=0,a=0,l=B(this,U);for(let i of B(this,X)){let o=l.get(i)||B(this,K);if(r+o<e)r+=o,n+=1,s+=1;else if(a-o<t)a+=o,s+=1;else if(a>=t)break}return[n,s]}get list(){let t=this.querySelector("ul, ol, tbody");if(!t)throw Error("virtual-list must have a container element inside: any of <ul>, <ol>, <tbody>");return t}attributeChangedCallback(t,e,i){if(e===i||!this.isConnected)return;let n="data-updating"===t&&"eager"===i,s="data-sorted"===t&&this.hasAttribute("data-sorted");if((n||s)&&this.update(),"aria-activedescendant"===t){let t=this.getIndexByElementId(i);this.dispatchEvent(new ActiveDescendantChangedEvent(t,i)),"eager"===this.updating&&this.update()}}connectedCallback(){this.addEventListener("scroll",()=>this.update()),this.updateSync=this.updateSync.bind(this),G.observe(this)}update(){B(this,Y)&&cancelAnimationFrame(B(this,Y)),!B(this,Z)&&this.hasAttribute("data-sorted")?$(this,Y,requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()})):$(this,Y,requestAnimationFrame(this.updateSync))}renderItem(t){let e={item:t,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:e})),e.fragment.children[0]}recalculateHeights(t){let e=this.list;if(!e)return;let i=this.renderItem(t);if(!i)return;e.append(i);let n=e.children[0].getBoundingClientRect().height;e.replaceChildren(),n&&($(this,K,n),B(this,U).set(t,n))}getIndexByElementId(t){if(!t)return -1;let e=0;for(let[,i]of B(this,Q)){if(i.id===t||i.querySelector(`#${t}`))return e;e++}return -1}updateSync(){let t=this.list,[e,i]=this.range;if(i<e||!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0})))return;let n=new Map,s=B(this,Q),r=-1,a=!0,l=0,o=0,u=0;for(let t of B(this,X)){if(-1!==r||Number.isFinite(B(this,K))&&0!==B(this,K)||this.recalculateHeights(t),r+=1,u=B(this,U).get(t)||B(this,K),r<e){l+=u,o=l;continue}if(r>i){a=!1;break}let d=null;if(s.has(t))d=s.get(t);else{if(!(d=this.renderItem(t)))continue;d.querySelector("[aria-setsize]")?.setAttribute("aria-setsize",B(this,X).size.toString()),d.querySelector("[aria-posinset]")?.setAttribute("aria-posinset",(r+1).toString()),s.set(t,d)}d.querySelector("[tabindex]")?.setAttribute("data-scrolltop",o.toString()),o+=u,n.set(t,d)}t.replaceChildren(...n.values()),t.style.paddingTop=`${l}px`;let d=this.size*B(this,K);t.style.height=`${d||0}px`;let h=!1,c=this.getBoundingClientRect().bottom;for(let[t,e]of n){let{height:i,bottom:n}=e.getBoundingClientRect();h=h||n>=c,B(this,U).set(t,i)}if(!a&&this.size>n.size&&!h)return B(this,J).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new RenderedEvent(s)),this.dispatchEvent(new CustomEvent("virtual-list-updated"))}resetRenderCache(){$(this,Q,new Map)}has(t){return B(this,X).has(t)}add(t){return B(this,X).add(t),$(this,Z,!1),Number.isFinite(B(this,K))||this.recalculateHeights(t),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}delete(t){let e=B(this,X).delete(t);return $(this,Z,!1),B(this,U).delete(t),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),e}clear(){B(this,X).clear(),B(this,U).clear(),$(this,K,1/0),$(this,Z,!0),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update()}forEach(t,e){for(let i of this)t.call(e,i,i,this)}entries(){return B(this,X).entries()}values(){return B(this,X).values()}keys(){return B(this,X).keys()}[tt](){return B(this,X)[Symbol.iterator]()}sort(t){return $(this,X,new Set(Array.from(this).sort(t))),$(this,Z,!0),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}constructor(...t){super(...t),D(this,Z,{writable:!0,value:void 0}),D(this,X,{writable:!0,value:void 0}),D(this,U,{writable:!0,value:void 0}),D(this,K,{writable:!0,value:void 0}),D(this,J,{writable:!0,value:void 0}),D(this,Q,{writable:!0,value:void 0}),D(this,Y,{writable:!0,value:void 0}),$(this,Z,!1),$(this,X,new Set),$(this,U,new Map),$(this,K,1/0),$(this,J,new Map),$(this,Q,new Map),$(this,Y,0)}};let ActiveDescendantChangedEvent=class ActiveDescendantChangedEvent extends Event{constructor(t,e){super("virtual-list-activedescendant-changed"),this.index=t,this.id=e}};let RenderedEvent=class RenderedEvent extends Event{constructor(t){super("virtual-list-rendered"),this.rowsCache=t}};window.customElements.get("virtual-list")||(window.VirtualListElement=te,window.customElements.define("virtual-list",te));var ti=i(72282),tn=i(78657);let ts="include-fragment-element-no-op",tr=ti.ZO.createPolicy(ts,{createHTML:t=>tn.O.apply({policy:()=>t,policyName:ts,fallback:t,fallbackOnError:!0})});window.IncludeFragmentElement.setCSPTrustedTypesPolicy(tr)},21278:(t,e,i)=>{i.d(e,{G:()=>o});var n=i(80636),s=i(36071),r=i(59753);function a(t){let e=t.getAttribute("data-required-value"),i=t.getAttribute("data-required-value-prefix");if(t.value===e)t.setCustomValidity("");else{let n=e;i&&(n=i+n),t.setCustomValidity(n)}}(0,n.q6)("[data-required-value]",function(t){a(t.currentTarget)}),(0,r.on)("change","[data-required-value]",function(t){let e=t.currentTarget;a(e),o(e.form)}),(0,n.q6)("[data-required-trimmed]",function(t){let e=t.currentTarget;""===e.value.trim()?e.setCustomValidity(e.getAttribute("data-required-trimmed")):e.setCustomValidity("")}),(0,r.on)("change","[data-required-trimmed]",function(t){let e=t.currentTarget;""===e.value.trim()?e.setCustomValidity(e.getAttribute("data-required-trimmed")):e.setCustomValidity(""),o(e.form)}),(0,n.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",t=>{let e=t.checkValidity();function i(){let i=t.checkValidity();i!==e&&t.form&&o(t.form),e=i}t.addEventListener("input",i),t.addEventListener("blur",function e(){t.removeEventListener("input",i),t.removeEventListener("blur",e)})});let l=new WeakMap;function o(t){let e=t.checkValidity();for(let i of t.querySelectorAll("button[data-disable-invalid]"))i.disabled=!e}(0,s.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(t){let e=t.form;e&&(l.get(e)||(e.addEventListener("change",()=>o(e)),l.set(e,!0)),t.disabled=!e.checkValidity())}}),(0,s.N7)("input[data-required-change], textarea[data-required-change]",function(t){let e="radio"===t.type&&t.form?t.form.elements.namedItem(t.name).value:null;function i(i){let n=t.form;if(i&&"radio"===t.type&&n&&e)for(let i of n.elements.namedItem(t.name))i instanceof HTMLInputElement&&i.setCustomValidity(t.value===e?"unchanged":"");else t.setCustomValidity(t.value===(e||t.defaultValue)?"unchanged":"")}t.addEventListener("input",i),t.addEventListener("change",i),i(),t.form&&o(t.form)}),document.addEventListener("reset",function(t){if(t.target instanceof HTMLFormElement){let e=t.target;setTimeout(()=>o(e))}})},3793:(t,e,i)=>{i.d(e,{Z:()=>h});var n=i(47142);let s=(t,e,i)=>{if(!(0,n.CD)(t,e))return-1/0;let s=(0,n.Gs)(t,e);return s<i?-1/0:s},r=(t,e,i)=>{t.textContent="";let s=0;for(let r of(0,n.m7)(e,i)){""!==i.slice(s,r)&&t.appendChild(document.createTextNode(i.slice(s,r))),s=r+1;let e=document.createElement("mark");e.textContent=i[r],t.appendChild(e)}t.appendChild(document.createTextNode(i.slice(s)))},a=new WeakMap,l=new WeakMap,o=new WeakMap,u=t=>{if(!o.has(t)&&t instanceof HTMLElement){let e=(t.getAttribute("data-value")||t.textContent||"").trim();return o.set(t,e),e}return o.get(t)||""},d=class FuzzyListElement extends HTMLElement{connectedCallback(){let t=this.querySelector("ul");if(!t)return;let e=new Set(t.querySelectorAll("li")),i=this.querySelector("input");i instanceof HTMLInputElement&&i.addEventListener("input",()=>{this.value=i.value});let s=new MutationObserver(t=>{let i=!1;for(let s of t)if("childList"===s.type&&s.addedNodes.length){for(let t of s.addedNodes)if(t instanceof HTMLLIElement&&!e.has(t)){let s=u(t);i=i||(0,n.CD)(this.value,s),e.add(t)}}i&&this.sort()});s.observe(t,{childList:!0});let r={handler:s,items:e,lazyItems:new Map,timer:null};l.set(this,r)}disconnectedCallback(){let t=l.get(this);t&&(t.handler.disconnect(),l.delete(this))}addLazyItems(t,e){let i=l.get(this);if(!i)return;let{lazyItems:s}=i,{value:r}=this,a=!1;for(let i of t)s.set(i,e),a=a||!!r&&(0,n.CD)(r,i);a&&this.sort()}sort(){let t=a.get(this);t&&(t.aborted=!0);let e={aborted:!1};a.set(this,e);let{minScore:i,markSelector:n,maxMatches:d,value:h}=this,c=l.get(this);if(!c||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:h})))return;let{items:p,lazyItems:m}=c,f=this.hasAttribute("mark-selector"),g=this.querySelector("ul");if(!g)return;let v=[];if(h){for(let t of p){let e=s(h,u(t),i);e!==-1/0&&v.push({item:t,score:e})}for(let[t,e]of m){let n=s(h,t,i);n!==-1/0&&v.push({text:t,render:e,score:n})}v.sort((t,e)=>e.score-t.score).splice(d)}else{let t=v.length;for(let e of p){if(t>=d)break;v.push({item:e,score:1}),t+=1}for(let[e,i]of m){if(t>=d)break;v.push({text:e,render:i,score:1}),t+=1}}requestAnimationFrame(()=>{if(e.aborted)return;let t=g.querySelector('input[type="radio"]:checked');g.textContent="";let i=0,s=()=>{if(e.aborted)return;let a=Math.min(v.length,i+100),l=document.createDocumentFragment();for(let t=i;t<a;t+=1){let e=v[t],i=null;if("render"in e&&"text"in e){let{render:t,text:n}=e;i=t(n),p.add(i),o.set(i,n),m.delete(n)}else"item"in e&&(i=e.item);i instanceof HTMLElement&&(f&&r(n&&i.querySelector(n)||i,f?h:"",u(i)),l.appendChild(i))}i=a;let d=!1;if(t instanceof HTMLInputElement)for(let e of l.querySelectorAll('input[type="radio"]:checked'))e instanceof HTMLInputElement&&e.value!==t.value&&(e.checked=!1,d=!0);if(this.getAttribute("data-tab-only-first")){let t=this.querySelectorAll("button.js-emoji-button");for(let e of t)e.setAttribute("tabindex","-1");t.item(0)?.setAttribute("tabindex","0")}else for(let t of l.querySelectorAll('button[tabindex="-1"]'))t.setAttribute("tabindex","0");if(g.appendChild(l),t&&d&&t.dispatchEvent(new Event("change",{bubbles:!0})),a<v.length)requestAnimationFrame(s);else{g.hidden=0===v.length;let t=this.querySelector("[data-fuzzy-list-show-on-empty]");t&&(t.hidden=v.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:v.length}))}};s()})}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(t){t?this.setAttribute("mark-selector",t):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(t){Number.isNaN(t)||this.setAttribute("min-score",String(t))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(t){Number.isNaN(t)||this.setAttribute("max-matches",String(t))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(t,e,i){if(e===i)return;let n=l.get(this);n&&(n.timer&&window.clearTimeout(n.timer),n.timer=window.setTimeout(()=>this.sort(),100))}},h=d;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=d,window.customElements.define("fuzzy-list",d))},85657:(t,e,i)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}i.d(e,{X:()=>n}),(0,i(36071).N7)(".js-remove-unless-platform",function(t){!function(t){let e=(t.getAttribute("data-platforms")||"").split(","),i=n();return!!(i&&e.includes(i))}(t)&&t.remove()})}},t=>{var e=e=>t(t.s=e);t.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_markdown-toolbar-e-820fc0","vendors-node_modules_oddbird_popover-polyfill_dist_popover_js","vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_details-d-ed9a97","vendors-node_modules_github_text-expander-element_dist_index_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-3efda3","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b7d8f4","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_clipboard-copy-element_-782ca5","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-3959a9","app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316"],()=>e(70636)),t.O()}]);
//# sourceMappingURL=github-elements-52b298b7fc09.js.map