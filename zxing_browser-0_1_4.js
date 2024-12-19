import{BarcodeFormat as rt}from"@zxing/library";import{IllegalArgumentException as q,InvertedLuminanceSource as Z,LuminanceSource as z}from"@zxing/library";var Q=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),F=function(n){Q(t,n);function t(e){var r=n.call(this,e.width,e.height)||this;return r.canvas=e,r.tempCanvasElement=null,r.buffer=t.makeBufferFromCanvasImageData(e),r}return t.makeBufferFromCanvasImageData=function(e){var r=e.getContext("2d");if(!r)throw new Error("Couldn't get canvas context.");var o=r.getImageData(0,0,e.width,e.height);return t.toGrayscaleBuffer(o.data,e.width,e.height)},t.toGrayscaleBuffer=function(e,r,o){for(var i=new Uint8ClampedArray(r*o),a=0,c=0,u=e.length;a<u;a+=4,c++){var s=void 0,d=e[a+3];if(d===0)s=255;else{var l=e[a],f=e[a+1],w=e[a+2];s=306*l+601*f+117*w+512>>10}i[c]=s}return i},t.prototype.getRow=function(e,r){if(e<0||e>=this.getHeight())throw new q("Requested row is outside the image: "+e);var o=this.getWidth(),i=e*o;return r===null?r=this.buffer.slice(i,i+o):(r.length<o&&(r=new Uint8ClampedArray(o)),r.set(this.buffer.slice(i,i+o))),r},t.prototype.getMatrix=function(){return this.buffer},t.prototype.isCropSupported=function(){return!0},t.prototype.crop=function(e,r,o,i){return n.prototype.crop.call(this,e,r,o,i),this},t.prototype.isRotateSupported=function(){return!0},t.prototype.rotateCounterClockwise=function(){return this.rotate(-90),this},t.prototype.rotateCounterClockwise45=function(){return this.rotate(-45),this},t.prototype.invert=function(){return new Z(this)},t.prototype.getTempCanvasElement=function(){if(this.tempCanvasElement===null){var e=this.canvas.ownerDocument.createElement("canvas");e.width=this.canvas.width,e.height=this.canvas.height,this.tempCanvasElement=e}return this.tempCanvasElement},t.prototype.rotate=function(e){var r=this.getTempCanvasElement();if(!r)throw new Error("Could not create a Canvas element.");var o=e*t.DEGREE_TO_RADIANS,i=this.canvas.width,a=this.canvas.height,c=Math.ceil(Math.abs(Math.cos(o))*i+Math.abs(Math.sin(o))*a),u=Math.ceil(Math.abs(Math.sin(o))*i+Math.abs(Math.cos(o))*a);r.width=c,r.height=u;var s=r.getContext("2d");if(!s)throw new Error("Could not create a Canvas Context element.");return s.translate(c/2,u/2),s.rotate(o),s.drawImage(this.canvas,i/-2,a/-2),this.buffer=t.makeBufferFromCanvasImageData(r),this},t.DEGREE_TO_RADIANS=Math.PI/180,t}(z);import{AztecCodeReader as te}from"@zxing/library";import{ArgumentException as x,BinaryBitmap as K,ChecksumException as P,DecodeHintType as $,FormatException as N,HybridBinarizer as Y,NotFoundException as k}from"@zxing/library";function V(){return typeof navigator<"u"}function J(){return V()&&!!navigator.mediaDevices}function D(){return!!(J()&&navigator.mediaDevices.enumerateDevices)}var R=function(){return R=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},R.apply(this,arguments)},p=function(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function c(d){try{s(r.next(d))}catch(l){a(l)}}function u(d){try{s(r.throw(d))}catch(l){a(l)}}function s(d){d.done?i(d.value):o(d.value).then(c,u)}s((r=r.apply(n,t||[])).next())})},v=function(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(s){return function(d){return u([s,d])}}function u(s){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=s[0]&2?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,o=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){e.label=s[1];break}if(s[0]===6&&e.label<i[1]){e.label=i[1],i=s;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(s);break}i[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(n,e)}catch(d){s=[6,d],o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},B=function(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},X={delayBetweenScanAttempts:500,delayBetweenScanSuccess:500,tryPlayVideoTimeout:5e3},S=function(){function n(t,e,r){e===void 0&&(e=new Map),r===void 0&&(r={}),this.reader=t,this.hints=e,this.options=R(R({},X),r)}return Object.defineProperty(n.prototype,"possibleFormats",{set:function(t){this.hints.set($.POSSIBLE_FORMATS,t)},enumerable:!1,configurable:!0}),n.addVideoSource=function(t,e){try{t.srcObject=e}catch{console.error("got interrupted by new loading request")}},n.mediaStreamSetTorch=function(t,e){return p(this,void 0,void 0,function(){return v(this,function(r){switch(r.label){case 0:return[4,t.applyConstraints({advanced:[{fillLightMode:e?"flash":"off",torch:!!e}]})];case 1:return r.sent(),[2]}})})},n.mediaStreamIsTorchCompatible=function(t){var e,r,o=t.getVideoTracks();try{for(var i=B(o),a=i.next();!a.done;a=i.next()){var c=a.value;if(n.mediaStreamIsTorchCompatibleTrack(c))return!0}}catch(u){e={error:u}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return!1},n.mediaStreamIsTorchCompatibleTrack=function(t){try{var e=t.getCapabilities();return"torch"in e}catch(r){return console.error(r),console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."),!1}},n.isVideoPlaying=function(t){return t.currentTime>0&&!t.paused&&t.readyState>2},n.getMediaElement=function(t,e){var r=document.getElementById(t);if(!r)throw new x("element with id '".concat(t,"' not found"));if(r.nodeName.toLowerCase()!==e.toLowerCase())throw new x("element with id '".concat(t,"' must be an ").concat(e," element"));return r},n.createVideoElement=function(t){if(t instanceof HTMLVideoElement)return t;if(typeof t=="string")return n.getMediaElement(t,"video");if(!t&&typeof document<"u"){var e=document.createElement("video");return e.width=200,e.height=200,e}throw new Error("Couldn't get videoElement from videoSource!")},n.prepareImageElement=function(t){if(t instanceof HTMLImageElement)return t;if(typeof t=="string")return n.getMediaElement(t,"img");if(typeof t>"u"){var e=document.createElement("img");return e.width=200,e.height=200,e}throw new Error("Couldn't get imageElement from imageSource!")},n.prepareVideoElement=function(t){var e=n.createVideoElement(t);return e.setAttribute("autoplay","true"),e.setAttribute("muted","true"),e.setAttribute("playsinline","true"),e},n.isImageLoaded=function(t){return!(!t.complete||t.naturalWidth===0)},n.createBinaryBitmapFromCanvas=function(t){var e=new F(t),r=new Y(e);return new K(r)},n.drawImageOnCanvas=function(t,e){t.drawImage(e,0,0)},n.getMediaElementDimensions=function(t){if(t instanceof HTMLVideoElement)return{height:t.videoHeight,width:t.videoWidth};if(t instanceof HTMLImageElement)return{height:t.naturalHeight||t.height,width:t.naturalWidth||t.width};throw new Error("Couldn't find the Source's dimensions!")},n.createCaptureCanvas=function(t){if(!t)throw new x("Cannot create a capture canvas without a media element.");if(typeof document>"u")throw new Error(`The page "Document" is undefined, make sure you're running in a browser.`);var e=document.createElement("canvas"),r=n.getMediaElementDimensions(t),o=r.width,i=r.height;return e.style.width=o+"px",e.style.height=i+"px",e.width=o,e.height=i,e},n.tryPlayVideo=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:if(t?.ended)return console.error("Trying to play video that has ended."),[2,!1];if(n.isVideoPlaying(t))return console.warn("Trying to play video that is already playing."),[2,!0];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.play()];case 2:return r.sent(),[2,!0];case 3:return e=r.sent(),console.warn("It was not possible to play the video.",e),[2,!1];case 4:return[2]}})})},n.createCanvasFromMediaElement=function(t){var e=n.createCaptureCanvas(t),r=e.getContext("2d");if(!r)throw new Error("Couldn't find Canvas 2D Context.");return n.drawImageOnCanvas(r,t),e},n.createBinaryBitmapFromMediaElem=function(t){var e=n.createCanvasFromMediaElement(t);return n.createBinaryBitmapFromCanvas(e)},n.destroyImageElement=function(t){t.src="",t.removeAttribute("src"),t=void 0},n.listVideoInputDevices=function(){return p(this,void 0,void 0,function(){var t,e,r,o,i,a,c,u,s,d,l,f;return v(this,function(w){switch(w.label){case 0:if(!V())throw new Error("Can't enumerate devices, navigator is not present.");if(!D())throw new Error("Can't enumerate devices, method not supported.");return[4,navigator.mediaDevices.enumerateDevices()];case 1:t=w.sent(),e=[];try{for(r=B(t),o=r.next();!o.done;o=r.next())i=o.value,a=i.kind==="video"?"videoinput":i.kind,a==="videoinput"&&(c=i.deviceId||i.id,u=i.label||"Video device ".concat(e.length+1),s=i.groupId,d={deviceId:c,label:u,kind:a,groupId:s},e.push(d))}catch(E){l={error:E}}finally{try{o&&!o.done&&(f=r.return)&&f.call(r)}finally{if(l)throw l.error}}return[2,e]}})})},n.findDeviceById=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:return[4,n.listVideoInputDevices()];case 1:return e=r.sent(),e?[2,e.find(function(o){return o.deviceId===t})]:[2]}})})},n.cleanVideoSource=function(t){if(t){try{t.srcObject=null}catch{t.src=""}t&&t.removeAttribute("src")}},n.releaseAllStreams=function(){n.streamTracker.length!==0&&n.streamTracker.forEach(function(t){t.getTracks().forEach(function(e){return e.stop()})}),n.streamTracker=[]},n.playVideoOnLoadAsync=function(t,e){return p(this,void 0,void 0,function(){var r;return v(this,function(o){switch(o.label){case 0:return[4,n.tryPlayVideo(t)];case 1:return r=o.sent(),r?[2,!0]:[2,new Promise(function(i,a){var c=setTimeout(function(){n.isVideoPlaying(t)||(a(!1),t.removeEventListener("canplay",u))},e),u=function(){n.tryPlayVideo(t).then(function(s){clearTimeout(c),t.removeEventListener("canplay",u),i(s)})};t.addEventListener("canplay",u)})]}})})},n.attachStreamToVideo=function(t,e,r){return r===void 0&&(r=5e3),p(this,void 0,void 0,function(){var o;return v(this,function(i){switch(i.label){case 0:return o=n.prepareVideoElement(e),n.addVideoSource(o,t),[4,n.playVideoOnLoadAsync(o,r)];case 1:return i.sent(),[2,o]}})})},n._waitImageLoad=function(t){return new Promise(function(e,r){var o=1e4,i=setTimeout(function(){n.isImageLoaded(t)||(t.removeEventListener("load",a),r())},o),a=function(){clearTimeout(i),t.removeEventListener("load",a),e()};t.addEventListener("load",a)})},n.checkCallbackFnOrThrow=function(t){if(!t)throw new x("`callbackFn` is a required parameter, you cannot capture results without it.")},n.disposeMediaStream=function(t){t.getVideoTracks().forEach(function(e){return e.stop()}),t=void 0},n.prototype.decode=function(t){var e=n.createCanvasFromMediaElement(t);return this.decodeFromCanvas(e)},n.prototype.decodeBitmap=function(t){return this.reader.decode(t,this.hints)},n.prototype.decodeFromCanvas=function(t){var e=n.createBinaryBitmapFromCanvas(t);return this.decodeBitmap(e)},n.prototype.decodeFromImageElement=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:if(!t)throw new x("An image element must be provided.");return e=n.prepareImageElement(t),[4,this._decodeOnLoadImage(e)];case 1:return[2,r.sent()]}})})},n.prototype.decodeFromImageUrl=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:if(!t)throw new x("An URL must be provided.");e=n.prepareImageElement(),e.src=t,r.label=1;case 1:return r.trys.push([1,,3,4]),[4,this.decodeFromImageElement(e)];case 2:return[2,r.sent()];case 3:return n.destroyImageElement(e),[7];case 4:return[2]}})})},n.prototype.decodeFromConstraints=function(t,e,r){return p(this,void 0,void 0,function(){var o,i;return v(this,function(a){switch(a.label){case 0:return n.checkCallbackFnOrThrow(r),[4,this.getUserMedia(t)];case 1:o=a.sent(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.decodeFromStream(o,e,r)];case 3:return[2,a.sent()];case 4:throw i=a.sent(),n.disposeMediaStream(o),i;case 5:return[2]}})})},n.prototype.decodeFromStream=function(t,e,r){return p(this,void 0,void 0,function(){var o,i,a,c,u,s,d,l,f,w=this;return v(this,function(E){switch(E.label){case 0:return n.checkCallbackFnOrThrow(r),o=this.options.tryPlayVideoTimeout,[4,n.attachStreamToVideo(t,e,o)];case 1:return i=E.sent(),a=function(){n.disposeMediaStream(t),n.cleanVideoSource(i)},c=this.scan(i,r,a),u=t.getVideoTracks(),s=R(R({},c),{stop:function(){c.stop()},streamVideoConstraintsApply:function(h,y){return p(this,void 0,void 0,function(){var m,C,g,O,T,A,L;return v(this,function(b){switch(b.label){case 0:m=y?u.filter(y):u,b.label=1;case 1:b.trys.push([1,6,7,8]),C=B(m),g=C.next(),b.label=2;case 2:return g.done?[3,5]:(O=g.value,[4,O.applyConstraints(h)]);case 3:b.sent(),b.label=4;case 4:return g=C.next(),[3,2];case 5:return[3,8];case 6:return T=b.sent(),A={error:T},[3,8];case 7:try{g&&!g.done&&(L=C.return)&&L.call(C)}finally{if(A)throw A.error}return[7];case 8:return[2]}})})},streamVideoConstraintsGet:function(h){return u.find(h).getConstraints()},streamVideoSettingsGet:function(h){return u.find(h).getSettings()},streamVideoCapabilitiesGet:function(h){return u.find(h).getCapabilities()}}),d=n.mediaStreamIsTorchCompatible(t),d&&(l=u?.find(function(h){return n.mediaStreamIsTorchCompatibleTrack(h)}),f=function(h){return p(w,void 0,void 0,function(){return v(this,function(y){switch(y.label){case 0:return[4,n.mediaStreamSetTorch(l,h)];case 1:return y.sent(),[2]}})})},s.switchTorch=f,s.stop=function(){return p(w,void 0,void 0,function(){return v(this,function(h){switch(h.label){case 0:return c.stop(),[4,f(!1)];case 1:return h.sent(),[2]}})})}),[2,s]}})})},n.prototype.decodeFromVideoDevice=function(t,e,r){return p(this,void 0,void 0,function(){var o,i;return v(this,function(a){switch(a.label){case 0:return n.checkCallbackFnOrThrow(r),t?o={deviceId:{exact:t}}:o={facingMode:"environment"},i={video:o},[4,this.decodeFromConstraints(i,e,r)];case 1:return[2,a.sent()]}})})},n.prototype.decodeFromVideoElement=function(t,e){return p(this,void 0,void 0,function(){var r,o;return v(this,function(i){switch(i.label){case 0:if(n.checkCallbackFnOrThrow(e),!t)throw new x("A video element must be provided.");return r=n.prepareVideoElement(t),o=this.options.tryPlayVideoTimeout,[4,n.playVideoOnLoadAsync(r,o)];case 1:return i.sent(),[2,this.scan(r,e)]}})})},n.prototype.decodeFromVideoUrl=function(t,e){return p(this,void 0,void 0,function(){var r,o,i,a;return v(this,function(c){switch(c.label){case 0:if(n.checkCallbackFnOrThrow(e),!t)throw new x("An URL must be provided.");return r=n.prepareVideoElement(),r.src=t,o=function(){n.cleanVideoSource(r)},i=this.options.tryPlayVideoTimeout,[4,n.playVideoOnLoadAsync(r,i)];case 1:return c.sent(),a=this.scan(r,e,o),[2,a]}})})},n.prototype.decodeOnceFromConstraints=function(t,e){return p(this,void 0,void 0,function(){var r;return v(this,function(o){switch(o.label){case 0:return[4,this.getUserMedia(t)];case 1:return r=o.sent(),[4,this.decodeOnceFromStream(r,e)];case 2:return[2,o.sent()]}})})},n.prototype.decodeOnceFromStream=function(t,e){return p(this,void 0,void 0,function(){var r,o,i;return v(this,function(a){switch(a.label){case 0:return r=!!e,[4,n.attachStreamToVideo(t,e)];case 1:o=a.sent(),a.label=2;case 2:return a.trys.push([2,,4,5]),[4,this.scanOneResult(o)];case 3:return i=a.sent(),[2,i];case 4:return r||n.cleanVideoSource(o),[7];case 5:return[2]}})})},n.prototype.decodeOnceFromVideoDevice=function(t,e){return p(this,void 0,void 0,function(){var r,o;return v(this,function(i){switch(i.label){case 0:return t?r={deviceId:{exact:t}}:r={facingMode:"environment"},o={video:r},[4,this.decodeOnceFromConstraints(o,e)];case 1:return[2,i.sent()]}})})},n.prototype.decodeOnceFromVideoElement=function(t){return p(this,void 0,void 0,function(){var e,r;return v(this,function(o){switch(o.label){case 0:if(!t)throw new x("A video element must be provided.");return e=n.prepareVideoElement(t),r=this.options.tryPlayVideoTimeout,[4,n.playVideoOnLoadAsync(e,r)];case 1:return o.sent(),[4,this.scanOneResult(e)];case 2:return[2,o.sent()]}})})},n.prototype.decodeOnceFromVideoUrl=function(t){return p(this,void 0,void 0,function(){var e,r;return v(this,function(o){switch(o.label){case 0:if(!t)throw new x("An URL must be provided.");e=n.prepareVideoElement(),e.src=t,r=this.decodeOnceFromVideoElement(e),o.label=1;case 1:return o.trys.push([1,,3,4]),[4,r];case 2:return[2,o.sent()];case 3:return n.cleanVideoSource(e),[7];case 4:return[2]}})})},n.prototype.scanOneResult=function(t,e,r,o){var i=this;return e===void 0&&(e=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),new Promise(function(a,c){i.scan(t,function(u,s,d){if(u){a(u),d.stop();return}if(s){if(s instanceof k&&e||s instanceof P&&r||s instanceof N&&o)return;d.stop(),c(s)}})})},n.prototype.scan=function(t,e,r){var o=this;n.checkCallbackFnOrThrow(e);var i=n.createCaptureCanvas(t),a=i.getContext("2d");if(!a)throw new Error("Couldn't create canvas for visual element scan.");var c=function(){a=void 0,i=void 0},u=!1,s,d=function(){u=!0,clearTimeout(s),c(),r&&r()},l={stop:d},f=function(){if(!u)try{n.drawImageOnCanvas(a,t);var w=o.decodeFromCanvas(i);e(w,void 0,l),s=setTimeout(f,o.options.delayBetweenScanSuccess)}catch(m){e(void 0,m,l);var E=m instanceof P,h=m instanceof N,y=m instanceof k;if(E||h||y){s=setTimeout(f,o.options.delayBetweenScanAttempts);return}c(),r&&r(m)}};return f(),l},n.prototype._decodeOnLoadImage=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:return e=n.isImageLoaded(t),e?[3,2]:[4,n._waitImageLoad(t)];case 1:r.sent(),r.label=2;case 2:return[2,this.decode(t)]}})})},n.prototype.getUserMedia=function(t){return p(this,void 0,void 0,function(){var e;return v(this,function(r){switch(r.label){case 0:return[4,navigator.mediaDevices.getUserMedia(t)];case 1:return e=r.sent(),n.streamTracker.push(e),[2,e]}})})},n.streamTracker=[],n}();var ee=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),be=function(n){ee(t,n);function t(e,r){return n.call(this,new te,e,r)||this}return t}(S);import{MultiFormatOneDReader as ne}from"@zxing/library";var re=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Ie=function(n){re(t,n);function t(e,r){return n.call(this,new ne(e),e,r)||this}return t}(S);import{DataMatrixReader as ie}from"@zxing/library";var oe=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Le=function(n){oe(t,n);function t(e,r){return n.call(this,new ie,e,r)||this}return t}(S);import{DecodeHintType as se,MultiFormatReader as ce}from"@zxing/library";var ae=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Ne=function(n){ae(t,n);function t(e,r){var o=this,i=new ce;return i.setHints(e),o=n.call(this,i,e,r)||this,o.reader=i,o}return Object.defineProperty(t.prototype,"possibleFormats",{set:function(e){this.hints.set(se.POSSIBLE_FORMATS,e),this.reader.setHints(this.hints)},enumerable:!1,configurable:!0}),t.prototype.decodeBitmap=function(e){return this.reader.decodeWithState(e)},t.prototype.setHints=function(e){this.hints=e,this.reader.setHints(this.hints)},t}(S);import{PDF417Reader as de}from"@zxing/library";var ue=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),Ge=function(n){ue(t,n);function t(e,r){return n.call(this,new de,e,r)||this}return t}(S);import{QRCodeReader as le}from"@zxing/library";var fe=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}(),qe=function(n){fe(t,n);function t(e,r){return n.call(this,new le,e,r)||this}return t}(S);import{EncodeHintType as M,IllegalArgumentException as H,IllegalStateException as he,QRCodeDecoderErrorCorrectionLevel as j,QRCodeEncoder as pe}from"@zxing/library";var _="http://www.w3.org/2000/svg",Je=function(){function n(t){if(typeof t=="string"){var e=document.getElementById(t);if(!e)throw new Error("Could not find a Container element with '".concat(t,"'."));this.containerElement=e}else this.containerElement=t}return n.prototype.write=function(t,e,r,o){if(t.length===0)throw new H("Found empty contents");if(e<0||r<0)throw new H("Requested dimensions are too small: "+e+"x"+r);var i=o&&o.get(M.MARGIN)!==void 0?Number.parseInt(o.get(M.MARGIN).toString(),10):n.QUIET_ZONE_SIZE,a=this.encode(o,t);return this.renderResult(a,e,r,i)},n.prototype.createSVGElement=function(t,e){var r=document.createElementNS(n.SVG_NS,"svg");return r.setAttributeNS(_,"width",e.toString()),r.setAttributeNS(_,"height",t.toString()),r},n.prototype.createSvgPathPlaceholderElement=function(t,e){var r=document.createElementNS(n.SVG_NS,"path");return r.setAttributeNS(_,"d","M0 0h".concat(t,"v").concat(e,"H0z")),r.setAttributeNS(_,"fill","none"),r},n.prototype.createSvgRectElement=function(t,e,r,o){var i=document.createElementNS(n.SVG_NS,"rect");return i.setAttributeNS(_,"x",t.toString()),i.setAttributeNS(_,"y",e.toString()),i.setAttributeNS(_,"height",r.toString()),i.setAttributeNS(_,"width",o.toString()),i.setAttributeNS(_,"fill","#000000"),i},n.prototype.encode=function(t,e){var r=j.L;if(t&&t.get(M.ERROR_CORRECTION)!==void 0){var o=t.get(M.ERROR_CORRECTION).toString();r=j.fromString(o)}var i=pe.encode(e,r,t);return i},n.prototype.renderResult=function(t,e,r,o){var i=t.getMatrix();if(i===null)throw new he;var a=i.getWidth(),c=i.getHeight(),u=a+o*2,s=c+o*2,d=Math.max(e,u),l=Math.max(r,s),f=Math.min(Math.floor(d/u),Math.floor(l/s)),w=Math.floor((d-a*f)/2),E=Math.floor((l-c*f)/2),h=this.createSVGElement(d,l),y=this.createSvgPathPlaceholderElement(e,r);h.appendChild(y),this.containerElement.appendChild(h);for(var m=0,C=E;m<c;m++,C+=f)for(var g=0,O=w;g<a;g++,O+=f)if(i.get(g,m)===1){var T=this.createSvgRectElement(O,C,f,f);h.appendChild(T)}return h},n.QUIET_ZONE_SIZE=4,n.SVG_NS="http://www.w3.org/2000/svg",n}();import{EncodeHintType as I,IllegalArgumentException as G,IllegalStateException as ve,QRCodeDecoderErrorCorrectionLevel as W,QRCodeEncoder as me}from"@zxing/library";var U="http://www.w3.org/2000/svg",Ye=function(){function n(){}return n.prototype.write=function(t,e,r,o){if(t.length===0)throw new G("Found empty contents");if(e<0||r<0)throw new G("Requested dimensions are too small: "+e+"x"+r);var i=W.L,a=n.QUIET_ZONE_SIZE;if(o){if(o.get(I.ERROR_CORRECTION)!==void 0){var c=o.get(I.ERROR_CORRECTION).toString();i=W.fromString(c)}o.get(I.MARGIN)!==void 0&&(a=Number.parseInt(o.get(I.MARGIN).toString(),10))}var u=me.encode(t,i,o);return this.renderResult(u,e,r,a)},n.prototype.writeToDom=function(t,e,r,o,i){if(typeof t=="string"){var a=document.querySelector(t);if(!a)throw new Error("Could no find the target HTML element.");t=a}var c=this.write(e,r,o,i);t instanceof HTMLElement&&t.appendChild(c)},n.prototype.renderResult=function(t,e,r,o){var i=t.getMatrix();if(i===null)throw new ve;for(var a=i.getWidth(),c=i.getHeight(),u=a+o*2,s=c+o*2,d=Math.max(e,u),l=Math.max(r,s),f=Math.min(Math.floor(d/u),Math.floor(l/s)),w=Math.floor((d-a*f)/2),E=Math.floor((l-c*f)/2),h=this.createSVGElement(d,l),y=0,m=E;y<c;y++,m+=f)for(var C=0,g=w;C<a;C++,g+=f)if(i.get(C,y)===1){var O=this.createSvgRectElement(g,m,f,f);h.appendChild(O)}return h},n.prototype.createSVGElement=function(t,e){var r=document.createElementNS(U,"svg"),o=t.toString(),i=e.toString();return r.setAttribute("height",i),r.setAttribute("width",o),r.setAttribute("viewBox","0 0 "+o+" "+i),r},n.prototype.createSvgRectElement=function(t,e,r,o){var i=document.createElementNS(U,"rect");return i.setAttribute("x",t.toString()),i.setAttribute("y",e.toString()),i.setAttribute("height",r.toString()),i.setAttribute("width",o.toString()),i.setAttribute("fill","#000000"),i},n.QUIET_ZONE_SIZE=4,n}();export{rt as BarcodeFormat,be as BrowserAztecCodeReader,S as BrowserCodeReader,Je as BrowserCodeSvgWriter,Le as BrowserDatamatrixCodeReader,Ie as BrowserMultiFormatOneDReader,Ne as BrowserMultiFormatReader,Ge as BrowserPDF417Reader,qe as BrowserQRCodeReader,Ye as BrowserQRCodeSvgWriter,F as HTMLCanvasElementLuminanceSource};
