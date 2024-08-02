"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{51438:(e,t,n)=>{var r=n(78553),o=n(84669);o.iG?.addEventListener("error",e=>{e.error&&r.eK(e.error)}),o.iG?.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){r.eK(e)}}),o.iG?.location.hash==="#b00m"&&setTimeout(()=>{throw Error("b00m")}),n(30523),n(13604);var i=n(72282),a=n(78657);let c="default";i.ZO.createPolicy(c,{createHTML:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!0,fallbackOnError:!0}),createScript:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0}),createScriptURL:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0})});var l=n(39197);(0,n(84700).nn)(),"undefined"!=typeof document&&(()=>{if((0,l.cr)("remove_child_patch")&&"function"==typeof Node&&Node.prototype){let e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){try{return e.apply(this,[t])}catch(e){if(e instanceof Error&&e.stack?.includes("react-lib"))return t;throw e}}}})()},63281:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{S:()=>o})},49608:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},85243:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>o});var r=n(84669);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},78553:(e,t,n)=>{n.d(t,{eK:()=>h});var r=n(82918),o=n(84700),i=n(28382),a=n(63281),c=n(77022),l=n(84669),s=n(39197),u=n(35287);let d=!1,f=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function h(e,t={}){if((0,s.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(_.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(w({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:v(n),catalogService:void 0},t));return}y(e)||g(w(S(e),t))}else y(e)||g(w(S(e),t))}async function g(e){if(!(!E&&!d&&f<10&&(0,o.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>b.test(e.filename)||b.test(e.function))){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function S(e){return{type:e.name,value:e.message,stacktrace:v(e),catalogService:e.catalogService}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}()||void 0,bundler:c.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function v(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let b=/(chrome|moz|safari)-extension:\/\//,E=!1;l.iG?.addEventListener("pageshow",()=>E=!1),l.iG?.addEventListener("pagehide",()=>E=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{h(e.data.error)});let _=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},39197:(e,t,n)=>{n.d(t,{$m:()=>s,KM:()=>c,cr:()=>l});var r=n(15205),o=n(49608);function i(){return new Set((0,o.dU)().featureFlags.map(e=>e.toLowerCase()))}let a=n(84669).W6?i:(0,r.Z)(i);function c(){return Array.from(a())}function l(e){return a().has(e.toLowerCase())}let s={isFeatureEnabled:l}},37055:(e,t,n)=>{let r;n.d(t,{YT:()=>f,qP:()=>m,yM:()=>p});var o=n(88149),i=n(64307),a=n(83376),c=n(49437);let{getItem:l}=(0,a.Z)("localStorage"),s="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function d(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(s)&&(t[e.replace(s,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,c.B)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},77022:(e,t,n)=>{n.d(t,{A:()=>c,k:()=>a});var r=n(15205),o=n(84669);let i=(0,r.Z)(function(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),a=(0,r.Z)(function(){return"enterprise"===i()}),c="webpack-react-next"},83376:(e,t,n)=>{n.d(t,{Z:()=>a,_:()=>c});var r=n(84669),o=n(49437);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function a(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,a=e=>e,c=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:s}=t;function u(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),a(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,c(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(s&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function c(e){return a(e,{throwQuotaErrorsOnSet:!1},r.iG,JSON.parse,JSON.stringify)}},8151:(e,t,n)=>{n.d(t,{LS:()=>o,cl:()=>i,rV:()=>r});let{getItem:r,setItem:o,removeItem:i}=(0,n(83376).Z)("sessionStorage")},35287:(e,t,n)=>{n.d(t,{Ak:()=>S,CI:()=>E,Gj:()=>y,J$:()=>b,Nb:()=>_,Nt:()=>w,OE:()=>h,U6:()=>f,Wl:()=>g,XL:()=>d,jN:()=>o,pS:()=>m,sj:()=>p,vu:()=>T,wG:()=>L,wP:()=>v});var r=n(8151);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",c="soft-nav:referrer",l="soft-nav:marker",s="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,r.LS)(l,"0"),(0,r.cl)(c),(0,r.cl)(i),(0,r.cl)(a),(0,r.cl)(s),(0,r.cl)(u)}function f(e){(0,r.LS)(l,e)}function m(){(0,r.LS)(l,"0")}function p(){let e=(0,r.rV)(l);return e&&"0"!==e}function y(){return(0,r.rV)(l)}function h(){return!!g()}function g(){return(0,r.rV)(i)}function S(e){(0,r.LS)(i,e||o),(0,r.LS)(a,window.location.href)}function w(){(0,r.LS)(c,window.location.href)}function v(){return(0,r.rV)(c)||document.referrer}function b(){let e=_();e?(0,r.LS)(s,e):(0,r.cl)(s)}function E(){return(0,r.rV)(s)}function _(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function T(e){(0,r.LS)(u,e)}function L(){return(0,r.rV)(u)}},84669:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,n4:()=>o.n4,ssrSafeLocation:()=>o.jX,zu:()=>o.zu});var r=n(92392),o=n(39258)},39258:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>a,n4:()=>r,zu:()=>i});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},92392:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>o,cF:()=>a});var r=n(39258);let o=void 0===r.n4,i=!o;function a(){return!!o||!!r.n4.querySelector('react-app[data-ssr="true"]')}},49437:(e,t,n)=>{n.d(t,{B:()=>m,b:()=>s});var r=n(84669),o=n(85243),i=n(77022),a=n(39197),c=n(46263);let l=[];function s(e,t=!1,n=.5){if(!0!==(0,a.cr)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=i.A,Math.random()<n&&l.push(e),t?f():d()}}let u=null,d=(0,c.P)(async function(){await o.C,null==u&&(u=window.requestIdleCallback(f))},5e3);function f(){if(u=null,!l.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function m(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",f),r.n4?.addEventListener("visibilitychange",f)},78657:(e,t,n)=>{n.d(t,{O:()=>s,d:()=>TrustedTypesPolicyError});var r=n(39197),o=n(49437),i=n(78553),a=n(27856),c=n.n(a),l=n(37055);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let s={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:s,silenceErrorReporting:u=!1}){try{if((0,r.cr)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return s&&new Promise(e=>{let n=window.performance.now(),r=c().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),c=a.stack?.slice(0,1e3),s=i.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:s,stack:c,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},72282:(e,t,n)=>{n.d(t,{ZO:()=>u});var r,o=n(84669),i=n(49437);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let c={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),s=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...c,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(s.createPolicy(e,t));return l.set(e,n),n}}},d=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_oddbird_popover-polyfill_dist_popover_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_smoothscroll-polyfill_di-75db2e"],()=>t(51438)),e.O()}]);
//# sourceMappingURL=environment-83a33d23b31c.js.map