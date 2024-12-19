var Se=Object.defineProperty,Ee=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Y=(r,n,e)=>n in r?Se(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,_=(r,n)=>{for(var e in n||={})Te.call(n,e)&&Y(r,e,n[e]);if(G)for(var e of G(n))De.call(n,e)&&Y(r,e,n[e]);return r},W=(r,n)=>Ee(r,Me(n));import*as a from"@angular/core";import{\u0275global as f,\u0275RuntimeError as g,InjectionToken as D,APP_ID as K,CSP_NONCE as te,PLATFORM_ID as O,Optional as Re,ViewEncapsulation as C,RendererStyleFlags2 as b,\u0275internalCreateApplication as ne,ErrorHandler as re,\u0275setDocument as Ce,PLATFORM_INITIALIZER as be,createPlatformFactory as Ae,platformCore as Ie,\u0275TESTABILITY_GETTER as N,\u0275TESTABILITY as Oe,Testability as L,NgZone as j,TestabilityRegistry as q,\u0275INJECTOR_SCOPE as _e,RendererFactory2 as Ne,ApplicationModule as Le,\u0275\u0275inject as oe,ApplicationRef as Pe,\u0275Console as He,SecurityContext as y,\u0275allowSanitizationBypassAndThrow as v,\u0275unwrapSafeValue as w,\u0275_sanitizeUrl as ke,\u0275_sanitizeHtml as je,\u0275bypassSanitizationTrustHtml as xe,\u0275bypassSanitizationTrustStyle as Fe,\u0275bypassSanitizationTrustScript as Ue,\u0275bypassSanitizationTrustUrl as Be,\u0275bypassSanitizationTrustResourceUrl as Ve,Injector as $e,ENVIRONMENT_INITIALIZER as jt,inject as xt,\u0275formatRuntimeError as Ft,makeEnvironmentProviders as ze,\u0275withDomHydration as Ke,Version as Ze,makeStateKey as Ge,TransferState as Ye}from"@angular/core";import{\u0275DomAdapter as We,\u0275setRootDomAdapter as qe,\u0275parseCookieValue as Xe,\u0275getDOM as R,isPlatformServer as se,DOCUMENT as d,\u0275PLATFORM_BROWSER_ID as Je,XhrFactory as Qe,CommonModule as et}from"@angular/common";import{\u0275getDOM as on}from"@angular/common";import{\u0275withHttpTransferCache as ie}from"@angular/common/http";var x=class extends We{constructor(){super(...arguments),this.supportsDOMEvents=!0}},F=class r extends x{static makeCurrent(){qe(new r)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=tt();return e==null?null:nt(e)}resetBaseElement(){S=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Xe(document.cookie,n)}},S=null;function tt(){return S=S||document.querySelector("base"),S?S.getAttribute("href"):null}function nt(r){return new URL(r,document.baseURI).pathname}var U=class{addToWindow(n){f.getAngularTestability=(t,o=!0)=>{let s=n.findTestabilityInTree(t,o);if(s==null)throw new g(5103,!1);return s},f.getAllAngularTestabilities=()=>n.getAllTestabilities(),f.getAllAngularRootElements=()=>n.getAllRootElements();let e=t=>{let o=f.getAllAngularTestabilities(),s=o.length,i=!1,c=function(u){i=i||u,s--,s==0&&t(i)};o.forEach(u=>{u.whenStable(c)})};f.frameworkStabilizers||(f.frameworkStabilizers=[]),f.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,t){if(e==null)return null;let o=n.getTestability(e);return o??(t?R().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},rt=(()=>{class r{build(){return new XMLHttpRequest}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),A=new D("EventManagerPlugins"),ae=(()=>{class r{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new g(5101,!1);return this._eventNameToPlugin.set(e,t),t}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(A),a.\u0275\u0275inject(a.NgZone))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),E=class{constructor(n){this._doc=n}},P="ng-app-id",ce=(()=>{class r{constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=se(s),this.resetHostNodes()}addStyles(e){for(let t of e)this.changeUsageCount(t,1)===1&&this.onStyleAdded(t)}removeStyles(e){for(let t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(let t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){let t=this.styleRef;t.get(e)?.elements?.forEach(o=>o.remove()),t.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${P}="${this.appId}"]`);if(e?.length){let t=new Map;return e.forEach(o=>{o.textContent!=null&&t.set(o.textContent,o)}),t}return null}changeUsageCount(e,t){let o=this.styleRef;if(o.has(e)){let s=o.get(e);return s.usage+=t,s.usage}return o.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){let o=this.styleNodesInDOM,s=o?.get(t);if(s?.parentNode===e)return o.delete(t),s.removeAttribute(P),s;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=t,this.platformIsServer&&i.setAttribute(P,this.appId),e.appendChild(i),i}}addStyleToHost(e,t){let o=this.getStyleElement(e,t),s=this.styleRef,i=s.get(t)?.elements;i?i.push(o):s.set(t,{elements:[o],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d),a.\u0275\u0275inject(K),a.\u0275\u0275inject(te,8),a.\u0275\u0275inject(O))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),H={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Z=/%COMP%/g,ue="%COMP%",ot=`_nghost-${ue}`,st=`_ngcontent-${ue}`,it=!0,at=new D("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>it});function ct(r){return st.replace(Z,r)}function ut(r){return ot.replace(Z,r)}function de(r,n){return n.map(e=>e.replace(Z,r))}var X=(()=>{class r{constructor(e,t,o,s,i,c,u,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=c,this.ngZone=u,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=se(c),this.defaultRenderer=new M(e,i,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===C.ShadowDom&&(t=W(_({},t),{encapsulation:C.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof I?o.applyToHost(e):o instanceof T&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let i=this.doc,c=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(t.encapsulation){case C.Emulated:s=new I(u,l,t,this.appId,p,i,c,m);break;case C.ShadowDom:return new B(u,l,e,t,i,c,this.nonce,m);default:s=new T(u,l,t,p,i,c,m);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(ae),a.\u0275\u0275inject(ce),a.\u0275\u0275inject(K),a.\u0275\u0275inject(at),a.\u0275\u0275inject(d),a.\u0275\u0275inject(O),a.\u0275\u0275inject(a.NgZone),a.\u0275\u0275inject(te))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),M=class{constructor(n,e,t,o){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,e){return e?this.doc.createElementNS(H[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(J(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(J(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new g(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let s=H[o];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=H[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(b.DashCase|b.Important)?n.style.setProperty(e,t,o&b.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&b.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t){if(typeof n=="string"&&(n=R().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function J(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var B=class extends M{constructor(n,e,t,o,s,i,c,u){super(n,s,i,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=de(o.id,o.styles);for(let p of l){let m=document.createElement("style");c&&m.setAttribute("nonce",c),m.textContent=p,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},T=class extends M{constructor(n,e,t,o,s,i,c,u){super(n,s,i,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=u?de(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},I=class extends T{constructor(n,e,t,o,s,i,c,u){let l=o+"-"+t.id;super(n,e,t,s,i,c,u,l),this.contentAttr=ct(l),this.hostAttr=ut(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},dt=(()=>{class r extends E{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),Q=["alt","control","meta","shift"],lt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ft={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},ht=(()=>{class r extends E{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,t,o){let s=r.parseEventName(t),i=r.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>R().onAndCancel(e,s.domEventName,i))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(t.pop()),i="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),i="code."),Q.forEach(l=>{let p=t.indexOf(l);p>-1&&(t.splice(p,1),i+=l+".")}),i+=s,t.length!=0||s.length===0)return null;let u={};return u.domEventName=o,u.fullKey=i,u}static matchEventFullKeyCode(e,t){let o=lt[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Q.forEach(i=>{if(i!==o){let c=ft[i];c(e)&&(s+=i+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})();function Vt(r,n){return ne(_({rootComponent:r},le(n)))}function $t(r){return ne(le(r))}function le(r){return{appProviders:[...pe,...r?.providers??[]],platformProviders:fe}}function zt(){return[...he]}function pt(){F.makeCurrent()}function mt(){return new re}function yt(){return Ce(document),document}var fe=[{provide:O,useValue:Je},{provide:be,useValue:pt,multi:!0},{provide:d,useFactory:yt,deps:[]}],Kt=Ae(Ie,"browser",fe),gt=new D(""),he=[{provide:N,useClass:U,deps:[]},{provide:Oe,useClass:L,deps:[j,q,N]},{provide:L,useClass:L,deps:[j,q,N]}],pe=[{provide:_e,useValue:"root"},{provide:re,useFactory:mt,deps:[]},{provide:A,useClass:dt,multi:!0,deps:[d,j,O]},{provide:A,useClass:ht,multi:!0,deps:[d]},X,ce,ae,{provide:Ne,useExisting:X},{provide:Qe,useClass:rt,deps:[]},[]],Zt=(()=>{class r{constructor(e){}static withServerTransition(e){return{ngModule:r,providers:[{provide:K,useValue:e.appId}]}}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(gt,12))}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:r})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[...pe,...he],imports:[et,Le]})}}return r})();function vt(){return new wt(oe(d))}var wt=(()=>{class r{constructor(e){this._doc=e,this._dom=R()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((o,s)=>(s&&o.push(this._getOrCreateElement(s,t)),o),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);let o=this.getTag(t);return o?this._setMetaElementAttributes(e,o):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){let i=this._parseSelector(e),c=this.getTags(i).filter(u=>this._containsAttributes(e,u))[0];if(c!==void 0)return c}let o=this._dom.createElement("meta");return this._setMetaElementAttributes(e,o),this._doc.getElementsByTagName("head")[0].appendChild(o),o}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(o=>t.setAttribute(this._getMetaKeyMap(o),e[o])),t}_parseSelector(e){let t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(o=>t.getAttribute(this._getMetaKeyMap(o))===e[o])}_getMetaKeyMap(e){return St[e]||e}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:function(t){let o=null;return t?o=new t:o=vt(),o},providedIn:"root"})}}return r})(),St={httpEquiv:"http-equiv"};function Et(){return new Mt(oe(d))}var Mt=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:function(t){let o=null;return t?o=new t:o=Et(),o},providedIn:"root"})}}return r})();function me(r,n){if(typeof COMPILED>"u"||!COMPILED){let e=f.ng=f.ng||{};e[r]=n}}var h=typeof window<"u"&&window||{},V=class{constructor(n,e){this.msPerTick=n,this.numTicks=e}},$=class{constructor(n){this.appRef=n.injector.get(Pe)}timeChangeDetection(n){let e=n&&n.record,t="Change Detection",o=h.console.profile!=null;e&&o&&h.console.profile(t);let s=k(),i=0;for(;i<5||k()-s<500;)this.appRef.tick(),i++;let c=k();e&&o&&h.console.profileEnd(t);let u=(c-s)/i;return h.console.log(`ran ${i} change detection cycles`),h.console.log(`${u.toFixed(2)} ms per check`),new V(u,i)}};function k(){return h.performance&&h.performance.now?h.performance.now():new Date().getTime()}var ye="profiler";function Gt(r){return me(ye,new $(r)),r}function Yt(){me(ye,null)}var ee=class{static all(){return()=>!0}static css(n){return e=>e.nativeElement!=null?Tt(e.nativeElement,n):!1}static directive(n){return e=>e.providerTokens.indexOf(n)!==-1}};function Tt(r,n){return R().isElementNode(r)?r.matches&&r.matches(n)||r.msMatchesSelector&&r.msMatchesSelector(n)||r.webkitMatchesSelector&&r.webkitMatchesSelector(n):!1}var Dt={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},z=new D("HammerGestureConfig"),ge=new D("HammerLoader"),Rt=(()=>{class r{constructor(){this.events=[],this.overrides={}}buildHammer(e){let t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(let o in this.overrides)t.get(o).set(this.overrides[o]);return t}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),Ct=(()=>{class r extends E{constructor(e,t,o,s){super(e),this._config=t,this.console=o,this.loader=s,this._loaderPromise=null}supports(e){return!(!Dt.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,o){let s=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||s.runOutsideAngular(()=>this.loader());let i=!1,c=()=>{i=!0};return s.runOutsideAngular(()=>this._loaderPromise.then(()=>{if(!window.Hammer){c=()=>{};return}i||(c=this.addEventListener(e,t,o))}).catch(()=>{c=()=>{}})),()=>{c()}}return s.runOutsideAngular(()=>{let i=this._config.buildHammer(e),c=function(u){s.runGuarded(function(){o(u)})};return i.on(t,c),()=>{i.off(t,c),typeof i.destroy=="function"&&i.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d),a.\u0275\u0275inject(z),a.\u0275\u0275inject(a.\u0275Console),a.\u0275\u0275inject(ge,8))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}return r})(),Wt=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:r})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[{provide:A,useClass:Ct,multi:!0,deps:[d,z,He,[new Re,ge]]},{provide:z,useClass:Rt,deps:[]}]})}}return r})(),bt=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:function(t){let o=null;return t?o=new(t||r):o=a.\u0275\u0275inject(ve),o},providedIn:"root"})}}return r})();function At(r){return new ve(r.get(d))}var ve=(()=>{class r extends bt{constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case y.NONE:return t;case y.HTML:return v(t,"HTML")?w(t):je(this._doc,String(t)).toString();case y.STYLE:return v(t,"Style")?w(t):t;case y.SCRIPT:if(v(t,"Script"))return w(t);throw new g(5200,!1);case y.URL:return v(t,"URL")?w(t):ke(String(t));case y.RESOURCE_URL:if(v(t,"ResourceURL"))return w(t);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(e){return xe(e)}bypassSecurityTrustStyle(e){return Fe(e)}bypassSecurityTrustScript(e){return Ue(e)}bypassSecurityTrustUrl(e){return Be(e)}bypassSecurityTrustResourceUrl(e){return Ve(e)}static{this.\u0275fac=function(t){return new(t||r)(a.\u0275\u0275inject(d))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:function(t){let o=null;return t?o=new t:o=At(a.\u0275\u0275inject($e)),o},providedIn:"root"})}}return r})();function we(r,n=[],e={}){return{\u0275kind:r,\u0275providers:n}}function qt(){return we(0)}function Xt(r){return we(1,ie(r))}function Jt(...r){let n=[],e=new Set,t=e.has(1);for(let{\u0275providers:o,\u0275kind:s}of r)e.add(s),o.length&&n.push(o);return ze([[],Ke(),e.has(0)||t?[]:ie({}),n])}var Qt=new Ze("17.0.7"),en=Ge,tn=Ye;export{Zt as BrowserModule,ee as By,bt as DomSanitizer,A as EVENT_MANAGER_PLUGINS,ae as EventManager,E as EventManagerPlugin,z as HAMMER_GESTURE_CONFIG,ge as HAMMER_LOADER,Rt as HammerGestureConfig,Wt as HammerModule,wt as Meta,at as REMOVE_STYLES_ON_COMPONENT_DESTROY,Mt as Title,tn as TransferState,Qt as VERSION,Vt as bootstrapApplication,$t as createApplication,Yt as disableDebugTools,Gt as enableDebugTools,en as makeStateKey,Kt as platformBrowser,Jt as provideClientHydration,zt as provideProtractorTestingSupport,Xt as withHttpTransferCacheOptions,qt as withNoHttpTransferCache,F as \u0275BrowserDomAdapter,U as \u0275BrowserGetTestability,dt as \u0275DomEventsPlugin,X as \u0275DomRendererFactory2,ve as \u0275DomSanitizerImpl,Ct as \u0275HammerGesturesPlugin,fe as \u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS,ht as \u0275KeyEventsPlugin,ce as \u0275SharedStylesHost,on as \u0275getDOM,pt as \u0275initDomAdapter};
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v17.0.7
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
