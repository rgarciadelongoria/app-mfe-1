var Xe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var oe=(s,t,e)=>t in s?Xe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,$=(s,t)=>{for(var e in t||={})ie.call(t,e)&&oe(s,e,t[e]);if(U)for(var e of U(t))ae.call(t,e)&&oe(s,e,t[e]);return s};var ce=(s,t)=>{var e={};for(var n in s)ie.call(s,n)&&t.indexOf(n)<0&&(e[n]=s[n]);if(s!=null&&U)for(var n of U(s))t.indexOf(n)<0&&ae.call(s,n)&&(e[n]=s[n]);return e};var W=(s,t,e)=>new Promise((n,r)=>{var i=a=>{try{c(e.next(a))}catch(u){r(u)}},o=a=>{try{c(e.throw(a))}catch(u){r(u)}},c=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,o);c((e=e.apply(s,t)).next())});import*as d from"@angular/core";import{inject as w,NgZone as Je,runInInjectionContext as te,InjectionToken as P,\u0275InitialRenderPendingTasks as Se,PLATFORM_ID as Ve,\u0275formatRuntimeError as _t,\u0275RuntimeError as $e,makeEnvironmentProviders as We,TransferState as Ne,makeStateKey as Ke,\u0275performanceMarkFeature as Ge,APP_BOOTSTRAP_LISTENER as Ye,ApplicationRef as Ze,\u0275whenStable as Qe,\u0275truncateMiddle as Bt}from"@angular/core";import{of as se,Observable as ne,from as qe}from"rxjs";import{concatMap as et,filter as tt,map as H,finalize as Oe,switchMap as st,tap as nt}from"rxjs/operators";import*as Ie from"@angular/common";import{DOCUMENT as Ae,\u0275parseCookieValue as rt}from"@angular/common";var D=class{},x=class{},b=class s{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),i=r.toLowerCase(),o=e.slice(n+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof s?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new s;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof s?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let i=t.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(c=>i.indexOf(c)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(i=>i.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Z=class{encodeKey(t){return de(t)}encodeValue(t){return de(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function ot(s,t){let e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(r=>{let i=r.indexOf("="),[o,c]=i==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],a=e.get(o)||[];a.push(c),e.set(o,a)}),e}var it=/%(\d[a-f0-9])/gi,at={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function de(s){return encodeURIComponent(s).replace(it,(t,e)=>at[e]??t)}function B(s){return`${s}`}var R=class s{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Z,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ot(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],r=Array.isArray(n)?n.map(B):[B(n)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new s({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(B(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(B(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}},le=class{constructor(t){this.defaultValue=t}},Q=class{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function ct(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ue(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function he(s){return typeof Blob<"u"&&s instanceof Blob}function fe(s){return typeof FormData<"u"&&s instanceof FormData}function dt(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}var j=class s{constructor(t,e,n,r){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let i;if(ct(this.method)||r?(this.body=n!==void 0?n:null,i=r):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers||(this.headers=new b),this.context||(this.context=new Q),!this.params)this.params=new R,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:ue(this.body)||he(this.body)||fe(this.body)||dt(this.body)||typeof this.body=="string"?this.body:this.body instanceof R?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||fe(this.body)?null:he(this.body)?this.body.type||null:ue(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof R?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,i=t.body!==void 0?t.body:this.body,o=t.withCredentials!==void 0?t.withCredentials:this.withCredentials,c=t.reportProgress!==void 0?t.reportProgress:this.reportProgress,a=t.headers||this.headers,u=t.params||this.params,p=t.context??this.context;return t.setHeaders!==void 0&&(a=Object.keys(t.setHeaders).reduce((l,m)=>l.set(m,t.setHeaders[m]),a)),t.setParams&&(u=Object.keys(t.setParams).reduce((l,m)=>l.set(m,t.setParams[m]),u)),new s(e,n,i,{params:u,headers:a,context:p,reportProgress:c,responseType:r,withCredentials:o})}},v=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(v||{}),F=class{constructor(t,e=200,n="OK"){this.headers=t.headers||new b,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},X=class s extends F{constructor(t={}){super(t),this.type=v.ResponseHeader}clone(t={}){return new s({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},S=class s extends F{constructor(t={}){super(t),this.type=v.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new s({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},E=class extends F{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}};function K(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials,transferCache:s.transferCache}}var lt=(()=>{class s{constructor(e){this.handler=e}request(e,n,r={}){let i;if(e instanceof j)i=e;else{let a;r.headers instanceof b?a=r.headers:a=new b(r.headers);let u;r.params&&(r.params instanceof R?u=r.params:u=new R({fromObject:r.params})),i=new j(e,n,r.body!==void 0?r.body:null,{headers:a,context:r.context,params:u,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=se(i).pipe(et(a=>this.handler.handle(a)));if(e instanceof j||r.observe==="events")return o;let c=o.pipe(tt(a=>a instanceof S));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(H(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(H(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(H(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(H(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new R().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,K(r,n))}post(e,n,r={}){return this.request("POST",e,K(r,n))}put(e,n,r={}){return this.request("PUT",e,K(r,n))}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(D))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),ut=/^\)\]\}',?\n/,ht="X-Request-URL";function pe(s){if(s.url)return s.url;let t=ht.toLocaleLowerCase();return s.headers.get(t)}var G=(()=>{class s{constructor(){this.fetchImpl=w(q,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=w(Je)}handle(e){return new ne(n=>{let r=new AbortController;return this.doRequest(e,r.signal,n).then(ee,i=>n.error(new E({error:i}))),()=>r.abort()})}doRequest(e,n,r){return W(this,null,function*(){let i=this.createRequestInit(e),o;try{let g=this.fetchImpl(e.urlWithParams,$({signal:n},i));ft(g),r.next({type:v.Sent}),o=yield g}catch(g){r.error(new E({error:g,status:g.status??0,statusText:g.statusText,url:e.urlWithParams,headers:g.headers}));return}let c=new b(o.headers),a=o.statusText,u=pe(o)??e.urlWithParams,p=o.status,l=null;if(e.reportProgress&&r.next(new X({headers:c,status:p,statusText:a,url:u})),o.body){let g=o.headers.get("content-length"),O=[],h=o.body.getReader(),f=0,T,C,y=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>W(this,null,function*(){for(;;){let{done:I,value:k}=yield h.read();if(I)break;if(O.push(k),f+=k.length,e.reportProgress){C=e.responseType==="text"?(C??"")+(T??=new TextDecoder).decode(k,{stream:!0}):void 0;let re=()=>r.next({type:v.DownloadProgress,total:g?+g:void 0,loaded:f,partialText:C});y?y.run(re):re()}}}));let M=this.concatChunks(O,f);try{let I=o.headers.get("Content-Type")??"";l=this.parseBody(e,M,I)}catch(I){r.error(new E({error:I,headers:new b(o.headers),status:o.status,statusText:o.statusText,url:pe(o)??e.urlWithParams}));return}}p===0&&(p=l?200:0),p>=200&&p<300?(r.next(new S({body:l,headers:c,status:p,statusText:a,url:u})),r.complete()):r.error(new E({error:l,headers:c,status:p,statusText:a,url:u}))})}parseBody(e,n,r){switch(e.responseType){case"json":let i=new TextDecoder().decode(n).replace(ut,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:r});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},r=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>n[i]=o.join(",")),n.Accept??="application/json, text/plain, */*",!n["Content-Type"]){let i=e.detectContentTypeHeader();i!==null&&(n["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:r}}concatChunks(e,n){let r=new Uint8Array(n),i=0;for(let o of e)r.set(o,i),i+=o.length;return r}static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),q=class{};function ee(){}function ft(s){s.then(ee,ee)}function De(s,t){return t(s)}function pt(s,t){return(e,n)=>t.intercept(e,{handle:r=>s(r,n)})}function yt(s,t,e){return(n,r)=>te(e,()=>t(n,i=>s(i,r)))}var xe=new P(""),_=new P(""),Me=new P(""),ke=new P("");function mt(){let s=null;return(t,e)=>{s===null&&(s=(w(xe,{optional:!0})??[]).reduceRight(pt,De));let n=w(Se),r=n.add();return s(t,e).pipe(Oe(()=>n.remove(r)))}}var ye=(()=>{class s extends D{constructor(e,n){super(),this.backend=e,this.injector=n,this.chain=null,this.pendingTasks=w(Se);let r=w(ke,{optional:!0});this.backend=r??e}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(_),...this.injector.get(Me,[])]));this.chain=r.reduceRight((i,o)=>yt(i,o,this.injector),De)}let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Oe(()=>this.pendingTasks.remove(n)))}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(x),d.\u0275\u0275inject(d.EnvironmentInjector))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),gt=0,Y,wt="JSONP injected script did not invoke callback.",Tt="JSONP requests must use JSONP request method.",Et="JSONP requests must use Json response type.",bt="JSONP requests do not support headers.",J=class{};function vt(){return typeof window=="object"?window:{}}var je=(()=>{class s{constructor(e,n){this.callbackMap=e,this.document=n,this.resolvedPromise=Promise.resolve()}nextCallback(){return`ng_jsonp_callback_${gt++}`}handle(e){if(e.method!=="JSONP")throw new Error(Tt);if(e.responseType!=="json")throw new Error(Et);if(e.headers.keys().length>0)throw new Error(bt);return new ne(n=>{let r=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),o=this.document.createElement("script");o.src=i;let c=null,a=!1;this.callbackMap[r]=m=>{delete this.callbackMap[r],c=m,a=!0};let u=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[r]},p=m=>{this.resolvedPromise.then(()=>{if(u(),!a){n.error(new E({url:i,status:0,statusText:"JSONP Error",error:new Error(wt)}));return}n.next(new S({body:c,status:200,statusText:"OK",url:i})),n.complete()})},l=m=>{u(),n.error(new E({error:m,status:0,statusText:"JSONP Error",url:i}))};return o.addEventListener("load",p),o.addEventListener("error",l),this.document.body.appendChild(o),n.next({type:v.Sent}),()=>{a||this.removeListeners(o),u()}})}removeListeners(e){Y||(Y=this.document.implementation.createHTMLDocument()),Y.adoptNode(e)}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(J),d.\u0275\u0275inject(Ae))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})();function Fe(s,t){return s.method==="JSONP"?w(je).handle(s):t(s)}var $t=(()=>{class s{constructor(e){this.injector=e}intercept(e,n){return te(this.injector,()=>Fe(e,r=>n.handle(r)))}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(d.EnvironmentInjector))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),Pt=/^\)\]\}',?\n/;function Ct(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}var me=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new $e(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?qe(n.\u0275loadImpl()):se(null)).pipe(st(()=>new ne(i=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((h,f)=>o.setRequestHeader(h,f.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let h=e.detectContentTypeHeader();h!==null&&o.setRequestHeader("Content-Type",h)}if(e.responseType){let h=e.responseType.toLowerCase();o.responseType=h!=="json"?h:"text"}let c=e.serializeBody(),a=null,u=()=>{if(a!==null)return a;let h=o.statusText||"OK",f=new b(o.getAllResponseHeaders()),T=Ct(o)||e.url;return a=new X({headers:f,status:o.status,statusText:h,url:T}),a},p=()=>{let{headers:h,status:f,statusText:T,url:C}=u(),y=null;f!==204&&(y=typeof o.response>"u"?o.responseText:o.response),f===0&&(f=y?200:0);let M=f>=200&&f<300;if(e.responseType==="json"&&typeof y=="string"){let I=y;y=y.replace(Pt,"");try{y=y!==""?JSON.parse(y):null}catch(k){y=I,M&&(M=!1,y={error:k,text:y})}}M?(i.next(new S({body:y,headers:h,status:f,statusText:T,url:C||void 0})),i.complete()):i.error(new E({error:y,headers:h,status:f,statusText:T,url:C||void 0}))},l=h=>{let{url:f}=u(),T=new E({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:f||void 0});i.error(T)},m=!1,g=h=>{m||(i.next(u()),m=!0);let f={type:v.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),e.responseType==="text"&&o.responseText&&(f.partialText=o.responseText),i.next(f)},O=h=>{let f={type:v.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),i.next(f)};return o.addEventListener("load",p),o.addEventListener("error",l),o.addEventListener("timeout",l),o.addEventListener("abort",l),e.reportProgress&&(o.addEventListener("progress",g),c!==null&&o.upload&&o.upload.addEventListener("progress",O)),o.send(c),i.next({type:v.Sent}),()=>{o.removeEventListener("error",l),o.removeEventListener("abort",l),o.removeEventListener("load",p),o.removeEventListener("timeout",l),e.reportProgress&&(o.removeEventListener("progress",g),c!==null&&o.upload&&o.upload.removeEventListener("progress",O)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(Ie.XhrFactory))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),V=new P("XSRF_ENABLED"),Le="XSRF-TOKEN",_e=new P("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Le}),Ue="X-XSRF-TOKEN",He=new P("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>Ue}),L=class{},Be=(()=>{class s{constructor(e,n,r){this.doc=e,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=rt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(Ae),d.\u0275\u0275inject(Ve),d.\u0275\u0275inject(_e))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})();function ze(s,t){let e=s.url.toLowerCase();if(!w(V)||s.method==="GET"||s.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(s);let n=w(L).getToken(),r=w(He);return n!=null&&!s.headers.has(r)&&(s=s.clone({headers:s.headers.set(r,n)})),t(s)}var ge=(()=>{class s{constructor(e){this.injector=e}intercept(e,n){return te(this.injector,()=>ze(e,r=>n.handle(r)))}static{this.\u0275fac=function(n){return new(n||s)(d.\u0275\u0275inject(d.EnvironmentInjector))}}static{this.\u0275prov=d.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}return s})(),N=function(s){return s[s.Interceptors=0]="Interceptors",s[s.LegacyInterceptors=1]="LegacyInterceptors",s[s.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",s[s.NoXsrfProtection=3]="NoXsrfProtection",s[s.JsonpSupport=4]="JsonpSupport",s[s.RequestsMadeViaParent=5]="RequestsMadeViaParent",s[s.Fetch=6]="Fetch",s}(N||{});function A(s,t){return{\u0275kind:s,\u0275providers:t}}function Rt(...s){let t=[lt,me,ye,{provide:D,useExisting:ye},{provide:x,useExisting:me},{provide:_,useValue:ze,multi:!0},{provide:V,useValue:!0},{provide:L,useClass:Be}];for(let e of s)t.push(...e.\u0275providers);return We(t)}function Wt(s){return A(N.Interceptors,s.map(t=>({provide:_,useValue:t,multi:!0})))}var we=new P("LEGACY_INTERCEPTOR_FN");function St(){return A(N.LegacyInterceptors,[{provide:we,useFactory:mt},{provide:_,useExisting:we,multi:!0}])}function Te({cookieName:s,headerName:t}){let e=[];return s!==void 0&&e.push({provide:_e,useValue:s}),t!==void 0&&e.push({provide:He,useValue:t}),A(N.CustomXsrfConfiguration,e)}function Nt(){return A(N.NoXsrfProtection,[{provide:V,useValue:!1}])}function Ot(){return A(N.JsonpSupport,[je,{provide:J,useFactory:vt},{provide:_,useValue:Fe,multi:!0}])}function Kt(){return A(N.RequestsMadeViaParent,[{provide:x,useFactory:()=>w(D,{skipSelf:!0,optional:!0})}])}function Gt(){return A(N.Fetch,[G,{provide:x,useExisting:G},{provide:ke,useExisting:G}])}var Yt=(()=>{class s{static disable(){return{ngModule:s,providers:[Nt().\u0275providers]}}static withOptions(e={}){return{ngModule:s,providers:Te(e).\u0275providers}}static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=d.\u0275\u0275defineNgModule({type:s})}static{this.\u0275inj=d.\u0275\u0275defineInjector({providers:[ge,{provide:xe,useExisting:ge,multi:!0},{provide:L,useClass:Be},Te({cookieName:Le,headerName:Ue}).\u0275providers,{provide:V,useValue:!0}]})}}return s})(),Zt=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=d.\u0275\u0275defineNgModule({type:s})}static{this.\u0275inj=d.\u0275\u0275defineInjector({providers:[Rt(St())]})}}return s})(),Qt=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=d.\u0275\u0275defineNgModule({type:s})}static{this.\u0275inj=d.\u0275\u0275defineInjector({providers:[Ot().\u0275providers]})}}return s})(),Ee="b",be="h",ve="s",Pe="st",Ce="u",Re="rt",z=new P(""),It=["GET","HEAD"];function At(s,t){let p=w(z),{isCacheActive:e}=p,n=ce(p,["isCacheActive"]),{transferCache:r,method:i}=s;if(!e||i==="POST"&&!n.includePostRequests&&!r||i!=="POST"&&!It.includes(i)||r===!1||n.filter?.(s)===!1)return t(s);let o=w(Ne),c=xt(s),a=o.get(c,null),u=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(u=r.includeHeaders),a){let{[Ee]:l,[Re]:m,[be]:g,[ve]:O,[Pe]:h,[Ce]:f}=a,T=l;switch(m){case"arraybuffer":T=new TextEncoder().encode(l).buffer;break;case"blob":T=new Blob([l]);break}let C=new b(g);return se(new S({body:T,headers:C,status:O,statusText:h,url:f}))}return t(s).pipe(nt(l=>{l instanceof S&&o.set(c,{[Ee]:l.body,[be]:Dt(l.headers,u),[ve]:l.status,[Pe]:l.statusText,[Ce]:l.url||"",[Re]:s.responseType})}))}function Dt(s,t){if(!t)return{};let e={};for(let n of t){let r=s.getAll(n);r!==null&&(e[n]=r)}return e}function xt(s){let{params:t,method:e,responseType:n,url:r}=s,i=t.keys().sort().map(a=>`${a}=${t.getAll(a)}`).join("&"),o=e+"."+n+"."+r+"?"+i,c=Mt(o);return Ke(c)}function Mt(s){let t=0;for(let e of s)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function qt(s){return[{provide:z,useFactory:()=>(Ge("NgHttpTransferCache"),$({isCacheActive:!0},s))},{provide:Me,useValue:At,multi:!0,deps:[Ne,z]},{provide:Ye,multi:!0,useFactory:()=>{let t=w(Ze),e=w(z);return()=>{Qe(t).then(()=>{e.isCacheActive=!1})}}}]}export{G as FetchBackend,xe as HTTP_INTERCEPTORS,x as HttpBackend,lt as HttpClient,Qt as HttpClientJsonpModule,Zt as HttpClientModule,Yt as HttpClientXsrfModule,Q as HttpContext,le as HttpContextToken,E as HttpErrorResponse,v as HttpEventType,N as HttpFeatureKind,D as HttpHandler,X as HttpHeaderResponse,b as HttpHeaders,R as HttpParams,j as HttpRequest,S as HttpResponse,F as HttpResponseBase,Z as HttpUrlEncodingCodec,me as HttpXhrBackend,L as HttpXsrfTokenExtractor,je as JsonpClientBackend,$t as JsonpInterceptor,Rt as provideHttpClient,Gt as withFetch,Wt as withInterceptors,St as withInterceptorsFromDi,Ot as withJsonpSupport,Nt as withNoXsrfProtection,Kt as withRequestsMadeViaParent,Te as withXsrfConfiguration,Me as \u0275HTTP_ROOT_INTERCEPTOR_FNS,ye as \u0275HttpInterceptingHandler,ye as \u0275HttpInterceptorHandler,ke as \u0275PRIMARY_HTTP_BACKEND,qt as \u0275withHttpTransferCache};
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v17.0.7
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/