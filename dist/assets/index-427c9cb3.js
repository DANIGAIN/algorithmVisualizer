function Bg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yd={exports:{}},Io={},Gd={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Hg=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),Kg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Gg=Symbol.for("react.context"),Qg=Symbol.for("react.forward_ref"),Xg=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),Jg=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Zg(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xd=Object.assign,qd={};function pr(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Qd}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jd(){}Jd.prototype=pr.prototype;function su(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Qd}var lu=su.prototype=new Jd;lu.constructor=su;Xd(lu,pr.prototype);lu.isPureReactComponent=!0;var Nc=Array.isArray,Zd=Object.prototype.hasOwnProperty,uu={current:null},eh={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Zd.call(t,r)&&!eh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Pi,type:e,key:a,ref:o,props:i,_owner:uu.current}}function ev(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function tv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rc=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tv(""+e.key):t.toString(36)}function ka(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pi:case Wg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+es(o,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(Rc,"$&/")+"/"),ka(i,t,n,"",function(u){return u})):i!=null&&(cu(i)&&(i=ev(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Nc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+es(a,s);o+=ka(a,t,n,l,i)}else if(l=Zg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+es(a,s++),o+=ka(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Gi(e,t,n){if(e==null)return e;var r=[],i=0;return ka(e,r,"","",function(a){return t.call(n,a,i++)}),r}function nv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Ea={transition:null},rv={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:uu};U.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=pr;U.Fragment=Hg;U.Profiler=Kg;U.PureComponent=su;U.StrictMode=Vg;U.Suspense=Xg;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Zd.call(t,l)&&!eh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pi,type:e.type,key:i,ref:a,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:Gg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yg,_context:e},e.Consumer=e};U.createElement=th;U.createFactory=function(e){var t=th.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Qg,render:e}};U.isValidElement=cu;U.lazy=function(e){return{$$typeof:Jg,_payload:{_status:-1,_result:e},_init:nv}};U.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return we.current.useCallback(e,t)};U.useContext=function(e){return we.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return we.current.useDeferredValue(e)};U.useEffect=function(e,t){return we.current.useEffect(e,t)};U.useId=function(){return we.current.useId()};U.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return we.current.useMemo(e,t)};U.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};U.useRef=function(e){return we.current.useRef(e)};U.useState=function(e){return we.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return we.current.useTransition()};U.version="18.2.0";Gd.exports=U;var I=Gd.exports;const fu=Kd(I),Bs=Bg({__proto__:null,default:fu},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=I,av=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,lv=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uv={key:!0,ref:!0,__self:!0,__source:!0};function nh(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)sv.call(t,r)&&!uv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:av,type:e,key:a,ref:o,props:i,_owner:lv.current}}Io.Fragment=ov;Io.jsx=nh;Io.jsxs=nh;Yd.exports=Io;var E=Yd.exports,Ws={},rh={exports:{}},Ne={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var D=P.length;P.push(A);e:for(;0<D;){var Z=D-1>>>1,oe=P[Z];if(0<i(oe,A))P[Z]=A,P[D]=oe,D=Z;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],D=P.pop();if(D!==A){P[0]=D;e:for(var Z=0,oe=P.length,Ki=oe>>>1;Z<Ki;){var rn=2*(Z+1)-1,Zo=P[rn],an=rn+1,Yi=P[an];if(0>i(Zo,D))an<oe&&0>i(Yi,Zo)?(P[Z]=Yi,P[an]=D,Z=an):(P[Z]=Zo,P[rn]=D,Z=rn);else if(an<oe&&0>i(Yi,D))P[Z]=Yi,P[an]=D,Z=an;else break e}}return A}function i(P,A){var D=P.sortIndex-A.sortIndex;return D!==0?D:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,g=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function y(P){if(v=!1,m(P),!w)if(n(l)!==null)w=!0,qo(k);else{var A=n(u);A!==null&&Jo(y,A.startTime-P)}}function k(P,A){w=!1,v&&(v=!1,h(R),R=-1),g=!0;var D=p;try{for(m(A),d=n(l);d!==null&&(!(d.expirationTime>A)||P&&!ze());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,p=d.priorityLevel;var oe=Z(d.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&r(l),m(A)}else r(l);d=n(l)}if(d!==null)var Ki=!0;else{var rn=n(u);rn!==null&&Jo(y,rn.startTime-A),Ki=!1}return Ki}finally{d=null,p=D,g=!1}}var C=!1,b=null,R=-1,j=5,L=-1;function ze(){return!(e.unstable_now()-L<j)}function Sr(){if(b!==null){var P=e.unstable_now();L=P;var A=!0;try{A=b(!0,P)}finally{A?Ir():(C=!1,b=null)}}else C=!1}var Ir;if(typeof f=="function")Ir=function(){f(Sr)};else if(typeof MessageChannel<"u"){var Tc=new MessageChannel,$g=Tc.port2;Tc.port1.onmessage=Sr,Ir=function(){$g.postMessage(null)}}else Ir=function(){S(Sr,0)};function qo(P){b=P,C||(C=!0,Ir())}function Jo(P,A){R=S(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,qo(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var D=p;p=A;try{return P()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=p;p=P;try{return A()}finally{p=D}},e.unstable_scheduleCallback=function(P,A,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,P){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,P={id:c++,callback:A,priorityLevel:P,startTime:D,expirationTime:oe,sortIndex:-1},D>Z?(P.sortIndex=D,t(u,P),n(l)===null&&P===n(u)&&(v?(h(R),R=-1):v=!0,Jo(y,D-Z))):(P.sortIndex=oe,t(l,P),w||g||(w=!0,qo(k))),P},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(P){var A=p;return function(){var D=p;p=A;try{return P.apply(this,arguments)}finally{p=D}}}})(ah);ih.exports=ah;var cv=ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=I,Pe=cv;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sh=new Set,ni={};function Tn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(ni[e]=t,e=0;e<t.length;e++)sh.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oc={},Ac={};function dv(e){return Hs.call(Ac,e)?!0:Hs.call(Oc,e)?!1:fv.test(e)?Ac[e]=!0:(Oc[e]=!0,!1)}function hv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pv(e,t,n,r){if(t===null||typeof t>"u"||hv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var du=/[\-:]([a-z])/g;function hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(du,hu);fe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(du,hu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(du,hu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function pu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pv(t,n,i,r)&&(n=null),r||i===null?dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),On=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),Vs=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),uh=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),ch=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ts;function Dr(e){if(ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ts=t&&t[1]||""}return`
`+ts+e}var ns=!1;function rs(e,t){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function mv(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=rs(e.type,!1),e;case 11:return e=rs(e.type.render,!1),e;case 1:return e=rs(e.type,!0),e;default:return""}}function Gs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case On:return"Portal";case Vs:return"Profiler";case mu:return"StrictMode";case Ks:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uh:return(e.displayName||"Context")+".Consumer";case lh:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Gs(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Gs(e(t))}catch{}}return null}function gv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gs(t);case 8:return t===mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vv(e){var t=fh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=vv(e))}function dh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qs(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&pu(e,"checked",t,!1)}function Xs(e,t){hh(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qs(e,t.type,n):t.hasOwnProperty("defaultValue")&&qs(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qs(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Mr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function ph(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,gh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function vh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function yh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wv=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(wv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,Qn=null,Xn=null;function zc(e){if(e=Oi(e)){if(typeof rl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Po(t),rl(e.stateNode,e.type,t))}}function wh(e){Qn?Xn?Xn.push(e):Xn=[e]:Qn=e}function _h(){if(Qn){var e=Qn,t=Xn;if(Xn=Qn=null,zc(e),t)for(e=0;e<t.length;e++)zc(t[e])}}function kh(e,t){return e(t)}function Eh(){}var is=!1;function Sh(e,t,n){if(is)return e(t,n);is=!0;try{return kh(e,t,n)}finally{is=!1,(Qn!==null||Xn!==null)&&(Eh(),_h())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var il=!1;if(ct)try{var br={};Object.defineProperty(br,"passive",{get:function(){il=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{il=!1}function _v(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Hr=!1,Fa=null,$a=!1,al=null,kv={onError:function(e){Hr=!0,Fa=e}};function Ev(e,t,n,r,i,a,o,s,l){Hr=!1,Fa=null,_v.apply(kv,arguments)}function Sv(e,t,n,r,i,a,o,s,l){if(Ev.apply(this,arguments),Hr){if(Hr){var u=Fa;Hr=!1,Fa=null}else throw Error(_(198));$a||($a=!0,al=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ih(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(Pn(e)!==e)throw Error(_(188))}function Iv(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Fc(i),e;if(a===r)return Fc(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ch(e){return e=Iv(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var xh=Pe.unstable_scheduleCallback,$c=Pe.unstable_cancelCallback,Cv=Pe.unstable_shouldYield,bv=Pe.unstable_requestPaint,ee=Pe.unstable_now,xv=Pe.unstable_getCurrentPriorityLevel,wu=Pe.unstable_ImmediatePriority,Th=Pe.unstable_UserBlockingPriority,Ba=Pe.unstable_NormalPriority,Tv=Pe.unstable_LowPriority,Ph=Pe.unstable_IdlePriority,Co=null,Ze=null;function Pv(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Ov,Nv=Math.log,Rv=Math.LN2;function Ov(e){return e>>>=0,e===0?32:31-(Nv(e)/Rv|0)|0}var Ji=64,Zi=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Ur(s):(a&=o,a!==0&&(r=Ur(a)))}else o=n&~i,o!==0?r=Ur(o):a!==0&&(r=Ur(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function Av(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Av(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nh(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function as(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Dv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function _u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oh,ku,Ah,Lh,Dh,sl=!1,ea=[],Ut=null,jt=null,zt=null,ai=new Map,oi=new Map,xt=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bc(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function xr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Oi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Uv(e,t,n,r,i){switch(t){case"focusin":return Ut=xr(Ut,e,t,n,r,i),!0;case"dragenter":return jt=xr(jt,e,t,n,r,i),!0;case"mouseover":return zt=xr(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ai.set(a,xr(ai.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,oi.set(a,xr(oi.get(a)||null,e,t,n,r,i)),!0}return!1}function Mh(e){var t=un(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ih(n),t!==null){e.blockedOn=t,Dh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=Oi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){Sa(e)&&n.delete(t)}function jv(){sl=!1,Ut!==null&&Sa(Ut)&&(Ut=null),jt!==null&&Sa(jt)&&(jt=null),zt!==null&&Sa(zt)&&(zt=null),ai.forEach(Wc),oi.forEach(Wc)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,jv)))}function si(e){function t(i){return Tr(i,e)}if(0<ea.length){Tr(ea[0],e);for(var n=1;n<ea.length;n++){var r=ea[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Tr(Ut,e),jt!==null&&Tr(jt,e),zt!==null&&Tr(zt,e),ai.forEach(t),oi.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Mh(n),n.blockedOn===null&&xt.shift()}var qn=yt.ReactCurrentBatchConfig,Ha=!0;function zv(e,t,n,r){var i=F,a=qn.transition;qn.transition=null;try{F=1,Eu(e,t,n,r)}finally{F=i,qn.transition=a}}function Fv(e,t,n,r){var i=F,a=qn.transition;qn.transition=null;try{F=4,Eu(e,t,n,r)}finally{F=i,qn.transition=a}}function Eu(e,t,n,r){if(Ha){var i=ll(e,t,n,r);if(i===null)ms(e,t,r,Va,n),Bc(e,r);else if(Uv(i,e,t,n,r))r.stopPropagation();else if(Bc(e,r),t&4&&-1<Mv.indexOf(e)){for(;i!==null;){var a=Oi(i);if(a!==null&&Oh(a),a=ll(e,t,n,r),a===null&&ms(e,t,r,Va,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ms(e,t,r,null,n)}}var Va=null;function ll(e,t,n,r){if(Va=null,e=yu(r),e=un(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ih(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Va=e,null}function Uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xv()){case wu:return 1;case Th:return 4;case Ba:case Tv:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var At=null,Su=null,Ia=null;function jh(){if(Ia)return Ia;var e,t=Su,n=t.length,r,i="value"in At?At.value:At.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ia=i.slice(e,1<r?1-r:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function Hc(){return!1}function Re(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ta:Hc,this.isPropagationStopped=Hc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Re(mr),Ri=X({},mr,{view:0,detail:0}),$v=Re(Ri),os,ss,Pr,bo=X({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(os=e.screenX-Pr.screenX,ss=e.screenY-Pr.screenY):ss=os=0,Pr=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Vc=Re(bo),Bv=X({},bo,{dataTransfer:0}),Wv=Re(Bv),Hv=X({},Ri,{relatedTarget:0}),ls=Re(Hv),Vv=X({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Re(Vv),Yv=X({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=Re(Yv),Qv=X({},mr,{data:0}),Kc=Re(Qv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jv[e])?!!t[e]:!1}function Cu(){return Zv}var ey=X({},Ri,{key:function(e){if(e.key){var t=Xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ty=Re(ey),ny=X({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Re(ny),ry=X({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),iy=Re(ry),ay=X({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Re(ay),sy=X({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Re(sy),uy=[9,13,27,32],bu=ct&&"CompositionEvent"in window,Vr=null;ct&&"documentMode"in document&&(Vr=document.documentMode);var cy=ct&&"TextEvent"in window&&!Vr,zh=ct&&(!bu||Vr&&8<Vr&&11>=Vr),Gc=String.fromCharCode(32),Qc=!1;function Fh(e,t){switch(e){case"keyup":return uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function fy(e,t){switch(e){case"compositionend":return $h(t);case"keypress":return t.which!==32?null:(Qc=!0,Gc);case"textInput":return e=t.data,e===Gc&&Qc?null:e;default:return null}}function dy(e,t){if(Ln)return e==="compositionend"||!bu&&Fh(e,t)?(e=jh(),Ia=Su=At=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zh&&t.locale!=="ko"?null:t.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hy[e.type]:t==="textarea"}function Bh(e,t,n,r){wh(r),t=Ka(t,"onChange"),0<t.length&&(n=new Iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,li=null;function py(e){Zh(e,0)}function xo(e){var t=Un(e);if(dh(t))return e}function my(e,t){if(e==="change")return t}var Wh=!1;if(ct){var us;if(ct){var cs="oninput"in document;if(!cs){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),cs=typeof qc.oninput=="function"}us=cs}else us=!1;Wh=us&&(!document.documentMode||9<document.documentMode)}function Jc(){Kr&&(Kr.detachEvent("onpropertychange",Hh),li=Kr=null)}function Hh(e){if(e.propertyName==="value"&&xo(li)){var t=[];Bh(t,li,e,yu(e)),Sh(py,t)}}function gy(e,t,n){e==="focusin"?(Jc(),Kr=t,li=n,Kr.attachEvent("onpropertychange",Hh)):e==="focusout"&&Jc()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(li)}function yy(e,t){if(e==="click")return xo(t)}function wy(e,t){if(e==="input"||e==="change")return xo(t)}function _y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:_y;function ui(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hs.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kh(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ky(e){var t=Kh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vh(n.ownerDocument.documentElement,n)){if(r!==null&&xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ef(n,a);var o=ef(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ey=ct&&"documentMode"in document&&11>=document.documentMode,Dn=null,ul=null,Yr=null,cl=!1;function tf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||Dn==null||Dn!==za(r)||(r=Dn,"selectionStart"in r&&xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ui(Yr,r)||(Yr=r,r=Ka(ul,"onSelect"),0<r.length&&(t=new Iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},fs={},Yh={};ct&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function To(e){if(fs[e])return fs[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yh)return fs[e]=t[n];return e}var Gh=To("animationend"),Qh=To("animationiteration"),Xh=To("animationstart"),qh=To("transitionend"),Jh=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Jh.set(e,t),Tn(t,[e])}for(var ds=0;ds<nf.length;ds++){var hs=nf[ds],Sy=hs.toLowerCase(),Iy=hs[0].toUpperCase()+hs.slice(1);Zt(Sy,"on"+Iy)}Zt(Gh,"onAnimationEnd");Zt(Qh,"onAnimationIteration");Zt(Xh,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(qh,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function rf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sv(r,t,void 0,e),e.currentTarget=null}function Zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;rf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;rf(i,s,u),a=l}}}if($a)throw e=al,$a=!1,al=null,e}function W(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var r=e+"__bubble";n.has(r)||(ep(t,e,2,!1),n.add(r))}function ps(e,t,n){var r=0;t&&(r|=4),ep(n,e,r,t)}var ra="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[ra]){e[ra]=!0,sh.forEach(function(n){n!=="selectionchange"&&(Cy.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ra]||(t[ra]=!0,ps("selectionchange",!1,t))}}function ep(e,t,n,r){switch(Uh(t)){case 1:var i=zv;break;case 4:i=Fv;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ms(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=un(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Sh(function(){var u=a,c=yu(n),d=[];e:{var p=Jh.get(e);if(p!==void 0){var g=Iu,w=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":g=ty;break;case"focusin":w="focus",g=ls;break;case"focusout":w="blur",g=ls;break;case"beforeblur":case"afterblur":g=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iy;break;case Gh:case Qh:case Xh:g=Kv;break;case qh:g=oy;break;case"scroll":g=$v;break;case"wheel":g=ly;break;case"copy":case"cut":case"paste":g=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yc}var v=(t&4)!==0,S=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=ii(f,h),y!=null&&v.push(fi(f,y,m)))),S)break;f=f.return}0<v.length&&(p=new g(p,w,null,n,c),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==nl&&(w=n.relatedTarget||n.fromElement)&&(un(w)||w[ft]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?un(w):null,w!==null&&(S=Pn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=Vc,y="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Yc,y="onPointerLeave",h="onPointerEnter",f="pointer"),S=g==null?p:Un(g),m=w==null?p:Un(w),p=new v(y,f+"leave",g,n,c),p.target=S,p.relatedTarget=m,y=null,un(c)===u&&(v=new v(h,f+"enter",w,n,c),v.target=m,v.relatedTarget=S,y=v),S=y,g&&w)t:{for(v=g,h=w,f=0,m=v;m;m=Rn(m))f++;for(m=0,y=h;y;y=Rn(y))m++;for(;0<f-m;)v=Rn(v),f--;for(;0<m-f;)h=Rn(h),m--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=Rn(v),h=Rn(h)}v=null}else v=null;g!==null&&af(d,p,g,v,!1),w!==null&&S!==null&&af(d,S,w,v,!0)}}e:{if(p=u?Un(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=my;else if(Xc(p))if(Wh)k=wy;else{k=vy;var C=gy}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=yy);if(k&&(k=k(e,u))){Bh(d,k,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&qs(p,"number",p.value)}switch(C=u?Un(u):window,e){case"focusin":(Xc(C)||C.contentEditable==="true")&&(Dn=C,ul=u,Yr=null);break;case"focusout":Yr=ul=Dn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,tf(d,n,c);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":tf(d,n,c)}var b;if(bu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ln?Fh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(zh&&n.locale!=="ko"&&(Ln||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ln&&(b=jh()):(At=c,Su="value"in At?At.value:At.textContent,Ln=!0)),C=Ka(u,R),0<C.length&&(R=new Kc(R,e,null,n,c),d.push({event:R,listeners:C}),b?R.data=b:(b=$h(n),b!==null&&(R.data=b)))),(b=cy?fy(e,n):dy(e,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new Kc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Zh(d,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ii(e,n),a!=null&&r.unshift(fi(e,a,i)),a=ii(e,t),a!=null&&r.push(fi(e,a,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ii(n,a),l!=null&&o.unshift(fi(n,l,s))):i||(l=ii(n,a),l!=null&&o.push(fi(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var by=/\r\n?/g,xy=/\u0000|\uFFFD/g;function of(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(xy,"")}function ia(e,t,n){if(t=of(t),of(e)!==t&&n)throw Error(_(425))}function Ya(){}var fl=null,dl=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(e){return sf.resolve(null).then(e).catch(Ny)}:pl;function Ny(e){setTimeout(function(){throw e})}function gs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);si(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),qe="__reactFiber$"+gr,di="__reactProps$"+gr,ft="__reactContainer$"+gr,ml="__reactEvents$"+gr,Ry="__reactListeners$"+gr,Oy="__reactHandles$"+gr;function un(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lf(e);e!==null;){if(n=e[qe])return n;e=lf(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[qe]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Po(e){return e[di]||null}var gl=[],jn=-1;function en(e){return{current:e}}function V(e){0>jn||(e.current=gl[jn],gl[jn]=null,jn--)}function B(e,t){jn++,gl[jn]=e.current,e.current=t}var Qt={},me=en(Qt),Se=en(!1),vn=Qt;function ar(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function Ga(){V(Se),V(me)}function uf(e,t,n){if(me.current!==Qt)throw Error(_(168));B(me,t),B(Se,n)}function tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,gv(e)||"Unknown",i));return X({},n,r)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,vn=me.current,B(me,e),B(Se,Se.current),!0}function cf(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=tp(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(me),B(me,e)):V(Se),B(Se,n)}var it=null,No=!1,vs=!1;function np(e){it===null?it=[e]:it.push(e)}function Ay(e){No=!0,np(e)}function tn(){if(!vs&&it!==null){vs=!0;var e=0,t=F;try{var n=it;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,No=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),xh(wu,tn),i}finally{F=t,vs=!1}}return null}var zn=[],Fn=0,Xa=null,qa=0,Ae=[],Le=0,yn=null,at=1,ot="";function on(e,t){zn[Fn++]=qa,zn[Fn++]=Xa,Xa=e,qa=t}function rp(e,t,n){Ae[Le++]=at,Ae[Le++]=ot,Ae[Le++]=yn,yn=e;var r=at;e=ot;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,at=1<<32-Ve(t)+i|n<<i|r,ot=a+e}else at=1<<a|n<<i|r,ot=e}function Tu(e){e.return!==null&&(on(e,1),rp(e,1,0))}function Pu(e){for(;e===Xa;)Xa=zn[--Fn],zn[Fn]=null,qa=zn[--Fn],zn[Fn]=null;for(;e===yn;)yn=Ae[--Le],Ae[Le]=null,ot=Ae[--Le],Ae[Le]=null,at=Ae[--Le],Ae[Le]=null}var Te=null,xe=null,Y=!1,We=null;function ip(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ff(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,xe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:at,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,xe=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(Y){var t=xe;if(t){var n=t;if(!ff(e,t)){if(vl(e))throw Error(_(418));t=Ft(n.nextSibling);var r=Te;t&&ff(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(vl(e))throw Error(_(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function df(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function aa(e){if(e!==Te)return!1;if(!Y)return df(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=xe)){if(vl(e))throw ap(),Error(_(418));for(;t;)ip(e,t),t=Ft(t.nextSibling)}if(df(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Te?Ft(e.stateNode.nextSibling):null;return!0}function ap(){for(var e=xe;e;)e=Ft(e.nextSibling)}function or(){xe=Te=null,Y=!1}function Nu(e){We===null?We=[e]:We.push(e)}var Ly=yt.ReactCurrentBatchConfig;function $e(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ja=en(null),Za=null,$n=null,Ru=null;function Ou(){Ru=$n=Za=null}function Au(e){var t=Ja.current;V(Ja),e._currentValue=t}function wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Za=e,Ru=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(Za===null)throw Error(_(308));$n=e,Za.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var cn=null;function Lu(e){cn===null?cn=[e]:cn.push(e)}function op(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}function hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Ct=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(p=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(g,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(g,d,p):w,p==null)break e;d=X({},d,p);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=d}}function pf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var lp=new oh.Component().refs;function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Wt(e),a=ut(r,i);a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,i),t!==null&&(Ke(t,e,i,r),ba(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Wt(e),a=ut(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,i),t!==null&&(Ke(t,e,i,r),ba(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Wt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,r),t!==null&&(Ke(t,e,r,n),ba(t,e,r))}};function mf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,a):!0}function up(e,t,n){var r=!1,i=Qt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ue(a):(i=Ie(t)?vn:me.current,r=t.contextTypes,a=(r=r!=null)?ar(e,i):Qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function gf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lp,Du(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ue(a):(a=Ie(t)?vn:me.current,i.context=ar(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_l(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===lp&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vf(e){var t=e._init;return t(e._payload)}function cp(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Ht(h,f),h.index=0,h.sibling=null,h}function a(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,y){return f===null||f.tag!==6?(f=Is(m,h.mode,y),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,y){var k=m.type;return k===An?c(h,f,m.props.children,y,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&vf(k)===f.type)?(y=i(f,m.props),y.ref=Nr(h,f,m),y.return=h,y):(y=Oa(m.type,m.key,m.props,null,h.mode,y),y.ref=Nr(h,f,m),y.return=h,y)}function u(h,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Cs(m,h.mode,y),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,y,k){return f===null||f.tag!==7?(f=mn(m,h.mode,y,k),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Is(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qi:return m=Oa(f.type,f.key,f.props,null,h.mode,m),m.ref=Nr(h,null,f),m.return=h,m;case On:return f=Cs(f,h.mode,m),f.return=h,f;case It:var y=f._init;return d(h,y(f._payload),m)}if(Mr(f)||Cr(f))return f=mn(f,h.mode,m,null),f.return=h,f;oa(h,f)}return null}function p(h,f,m,y){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(h,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:return m.key===k?l(h,f,m,y):null;case On:return m.key===k?u(h,f,m,y):null;case It:return k=m._init,p(h,f,k(m._payload),y)}if(Mr(m)||Cr(m))return k!==null?null:c(h,f,m,y,null);oa(h,m)}return null}function g(h,f,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,s(f,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qi:return h=h.get(y.key===null?m:y.key)||null,l(f,h,y,k);case On:return h=h.get(y.key===null?m:y.key)||null,u(f,h,y,k);case It:var C=y._init;return g(h,f,m,C(y._payload),k)}if(Mr(y)||Cr(y))return h=h.get(m)||null,c(f,h,y,k,null);oa(f,y)}return null}function w(h,f,m,y){for(var k=null,C=null,b=f,R=f=0,j=null;b!==null&&R<m.length;R++){b.index>R?(j=b,b=null):j=b.sibling;var L=p(h,b,m[R],y);if(L===null){b===null&&(b=j);break}e&&b&&L.alternate===null&&t(h,b),f=a(L,f,R),C===null?k=L:C.sibling=L,C=L,b=j}if(R===m.length)return n(h,b),Y&&on(h,R),k;if(b===null){for(;R<m.length;R++)b=d(h,m[R],y),b!==null&&(f=a(b,f,R),C===null?k=b:C.sibling=b,C=b);return Y&&on(h,R),k}for(b=r(h,b);R<m.length;R++)j=g(b,h,R,m[R],y),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?R:j.key),f=a(j,f,R),C===null?k=j:C.sibling=j,C=j);return e&&b.forEach(function(ze){return t(h,ze)}),Y&&on(h,R),k}function v(h,f,m,y){var k=Cr(m);if(typeof k!="function")throw Error(_(150));if(m=k.call(m),m==null)throw Error(_(151));for(var C=k=null,b=f,R=f=0,j=null,L=m.next();b!==null&&!L.done;R++,L=m.next()){b.index>R?(j=b,b=null):j=b.sibling;var ze=p(h,b,L.value,y);if(ze===null){b===null&&(b=j);break}e&&b&&ze.alternate===null&&t(h,b),f=a(ze,f,R),C===null?k=ze:C.sibling=ze,C=ze,b=j}if(L.done)return n(h,b),Y&&on(h,R),k;if(b===null){for(;!L.done;R++,L=m.next())L=d(h,L.value,y),L!==null&&(f=a(L,f,R),C===null?k=L:C.sibling=L,C=L);return Y&&on(h,R),k}for(b=r(h,b);!L.done;R++,L=m.next())L=g(b,h,R,L.value,y),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?R:L.key),f=a(L,f,R),C===null?k=L:C.sibling=L,C=L);return e&&b.forEach(function(Sr){return t(h,Sr)}),Y&&on(h,R),k}function S(h,f,m,y){if(typeof m=="object"&&m!==null&&m.type===An&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:e:{for(var k=m.key,C=f;C!==null;){if(C.key===k){if(k=m.type,k===An){if(C.tag===7){n(h,C.sibling),f=i(C,m.props.children),f.return=h,h=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&vf(k)===C.type){n(h,C.sibling),f=i(C,m.props),f.ref=Nr(h,C,m),f.return=h,h=f;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===An?(f=mn(m.props.children,h.mode,y,m.key),f.return=h,h=f):(y=Oa(m.type,m.key,m.props,null,h.mode,y),y.ref=Nr(h,f,m),y.return=h,h=y)}return o(h);case On:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Cs(m,h.mode,y),f.return=h,h=f}return o(h);case It:return C=m._init,S(h,f,C(m._payload),y)}if(Mr(m))return w(h,f,m,y);if(Cr(m))return v(h,f,m,y);oa(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Is(m,h.mode,y),f.return=h,h=f),o(h)):n(h,f)}return S}var sr=cp(!0),fp=cp(!1),Ai={},et=en(Ai),hi=en(Ai),pi=en(Ai);function fn(e){if(e===Ai)throw Error(_(174));return e}function Mu(e,t){switch(B(pi,t),B(hi,e),B(et,Ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}V(et),B(et,t)}function lr(){V(et),V(hi),V(pi)}function dp(e){fn(pi.current);var t=fn(et.current),n=Zs(t,e.type);t!==n&&(B(hi,e),B(et,n))}function Uu(e){hi.current===e&&(V(et),V(hi))}var G=en(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=[];function ju(){for(var e=0;e<ys.length;e++)ys[e]._workInProgressVersionPrimary=null;ys.length=0}var xa=yt.ReactCurrentDispatcher,ws=yt.ReactCurrentBatchConfig,wn=0,Q=null,ne=null,se=null,no=!1,Gr=!1,mi=0,Dy=0;function de(){throw Error(_(321))}function zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Fu(e,t,n,r,i,a){if(wn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?zy:Fy,e=n(r,i),Gr){a=0;do{if(Gr=!1,mi=0,25<=a)throw Error(_(301));a+=1,se=ne=null,t.updateQueue=null,xa.current=$y,e=n(r,i)}while(Gr)}if(xa.current=ro,t=ne!==null&&ne.next!==null,wn=0,se=ne=Q=null,no=!1,t)throw Error(_(300));return e}function $u(){var e=mi!==0;return mi=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Q.memoizedState=se=e:se=se.next=e,se}function je(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=se===null?Q.memoizedState:se.next;if(t!==null)se=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?Q.memoizedState=se=e:se=se.next=e}return se}function gi(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((wn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,Q.lanes|=c,_n|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ye(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,_n|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ks(e){var t=je(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ye(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function hp(){}function pp(e,t){var n=Q,r=je(),i=t(),a=!Ye(r.memoizedState,i);if(a&&(r.memoizedState=i,Ee=!0),r=r.queue,Bu(vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,vi(9,gp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(_(349));wn&30||mp(n,t,i)}return i}function mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&wp(e)}function vp(e,t,n){return n(function(){yp(t)&&wp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function wp(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function yf(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:e},t.queue=e,e=e.dispatch=jy.bind(null,Q,e),[t.memoizedState,e]}function vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _p(){return je().memoizedState}function Ta(e,t,n,r){var i=Xe();Q.flags|=e,i.memoizedState=vi(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=je();r=r===void 0?null:r;var a=void 0;if(ne!==null){var o=ne.memoizedState;if(a=o.destroy,r!==null&&zu(r,o.deps)){i.memoizedState=vi(t,n,a,r);return}}Q.flags|=e,i.memoizedState=vi(1|t,n,a,r)}function wf(e,t){return Ta(8390656,8,e,t)}function Bu(e,t){return Oo(2048,8,e,t)}function kp(e,t){return Oo(4,2,e,t)}function Ep(e,t){return Oo(4,4,e,t)}function Sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ip(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Sp.bind(null,t,e),n)}function Wu(){}function Cp(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bp(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xp(e,t,n){return wn&21?(Ye(n,t)||(n=Nh(),Q.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function My(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ws.transition;ws.transition={};try{e(!1),t()}finally{F=n,ws.transition=r}}function Tp(){return je().memoizedState}function Uy(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pp(e))Np(t,n);else if(n=op(e,t,n,r),n!==null){var i=ye();Ke(n,e,r,i),Rp(n,t,r)}}function jy(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))Np(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ye(s,o)){var l=t.interleaved;l===null?(i.next=i,Lu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=op(e,t,i,r),n!==null&&(i=ye(),Ke(n,e,r,i),Rp(n,t,r))}}function Pp(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Np(e,t){Gr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}var ro={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},zy={readContext:Ue,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:wf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Uy.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:yf,useDebugValue:Wu,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=yf(!1),t=e[0];return e=My.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Xe();if(Y){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),le===null)throw Error(_(349));wn&30||mp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,wf(vp.bind(null,r,a,e),[e]),r.flags|=2048,vi(9,gp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xe(),t=le.identifierPrefix;if(Y){var n=ot,r=at;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fy={readContext:Ue,useCallback:Cp,useContext:Ue,useEffect:Bu,useImperativeHandle:Ip,useInsertionEffect:kp,useLayoutEffect:Ep,useMemo:bp,useReducer:_s,useRef:_p,useState:function(){return _s(gi)},useDebugValue:Wu,useDeferredValue:function(e){var t=je();return xp(t,ne.memoizedState,e)},useTransition:function(){var e=_s(gi)[0],t=je().memoizedState;return[e,t]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1},$y={readContext:Ue,useCallback:Cp,useContext:Ue,useEffect:Bu,useImperativeHandle:Ip,useInsertionEffect:kp,useLayoutEffect:Ep,useMemo:bp,useReducer:ks,useRef:_p,useState:function(){return ks(gi)},useDebugValue:Wu,useDeferredValue:function(e){var t=je();return ne===null?t.memoizedState=e:xp(t,ne.memoizedState,e)},useTransition:function(){var e=ks(gi)[0],t=je().memoizedState;return[e,t]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",r=t;do n+=mv(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var By=typeof WeakMap=="function"?WeakMap:Map;function Op(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ao||(ao=!0,Ol=r),El(e,t)},n}function Ap(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _f(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new By;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=n0.bind(null,e,t,n),t.then(e,e))}function kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ef(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var Wy=yt.ReactCurrentOwner,Ee=!1;function ve(e,t,n,r){t.child=e===null?fp(t,null,n,r):sr(t,e.child,n,r)}function Sf(e,t,n,r,i){n=n.render;var a=t.ref;return Jn(t,i),r=Fu(e,t,n,r,a,i),n=$u(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(Y&&n&&Tu(t),t.flags|=1,ve(e,t,r,i),t.child)}function If(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!qu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lp(e,t,a,r,i)):(e=Oa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(o,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=Ht(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ui(a,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,ht(e,t,i)}return Sl(e,t,n,r,i)}function Dp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Wn,be),be|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Wn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(Wn,be),be|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Wn,be),be|=r;return ve(e,t,i,n),t.child}function Mp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,i){var a=Ie(n)?vn:me.current;return a=ar(t,a),Jn(t,i),n=Fu(e,t,n,r,a,i),r=$u(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(Y&&r&&Tu(t),t.flags|=1,ve(e,t,n,i),t.child)}function Cf(e,t,n,r,i){if(Ie(n)){var a=!0;Qa(t)}else a=!1;if(Jn(t,i),t.stateNode===null)Pa(e,t),up(t,n,r),kl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ie(n)?vn:me.current,u=ar(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&gf(t,o,r,u),Ct=!1;var p=t.memoizedState;o.state=p,eo(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Se.current||Ct?(typeof c=="function"&&(_l(t,n,c,r),l=t.memoizedState),(s=Ct||mf(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,sp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:$e(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Ie(n)?vn:me.current,l=ar(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&gf(t,o,r,l),Ct=!1,p=t.memoizedState,o.state=p,eo(t,r,o,i);var w=t.memoizedState;s!==d||p!==w||Se.current||Ct?(typeof g=="function"&&(_l(t,n,g,r),w=t.memoizedState),(u=Ct||mf(t,n,u,r,p,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,a,i)}function Il(e,t,n,r,i,a){Mp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&cf(t,n,!1),ht(e,t,a);r=t.stateNode,Wy.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=sr(t,e.child,null,a),t.child=sr(t,null,s,a)):ve(e,t,s,a),t.memoizedState=r.state,i&&cf(t,n,!0),t.child}function Up(e){var t=e.stateNode;t.pendingContext?uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uf(e,t.context,!1),Mu(e,t.containerInfo)}function bf(e,t,n,r,i){return or(),Nu(i),t.flags|=256,ve(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function jp(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Do(o,r,0,null),e=mn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=bl(n),t.memoizedState=Cl,e):Hu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Hy(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ht(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Ht(s,a):(a=mn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?bl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return a=e.child,e=a.sibling,r=Ht(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hu(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,n,r){return r!==null&&Nu(r),sr(t,e.child,null,n),e=Hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hy(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Es(Error(_(422))),sa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),a=mn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&sr(t,e.child,null,o),t.child.memoizedState=bl(o),t.memoizedState=Cl,a);if(!(t.mode&1))return sa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(_(419)),r=Es(a,r,void 0),sa(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,dt(e,i),Ke(r,e,i,-1))}return Xu(),r=Es(Error(_(421))),sa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=r0.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xe=Ft(i.nextSibling),Te=t,Y=!0,We=null,e!==null&&(Ae[Le++]=at,Ae[Le++]=ot,Ae[Le++]=yn,at=e.id,ot=e.overflow,yn=t),t=Hu(t,r.children),t.flags|=4096,t)}function xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wl(e.return,t,n)}function Ss(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function zp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ss(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ss(t,!0,n,null,a);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vy(e,t,n){switch(t.tag){case 3:Up(t),or();break;case 5:dp(t);break;case 1:Ie(t.type)&&Qa(t);break;case 4:Mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?jp(e,t,n):(B(G,G.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,n)}return ht(e,t,n)}var Fp,xl,$p,Bp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xl=function(){};$p=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(et.current);var a=null;switch(n){case"input":i=Qs(e,i),r=Qs(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=Js(e,i),r=Js(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ya)}el(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ky(e,t,n){var r=t.pendingProps;switch(Pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ie(t.type)&&Ga(),he(t),null;case 3:return r=t.stateNode,lr(),V(Se),V(me),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Dl(We),We=null))),xl(e,t),he(t),null;case 5:Uu(t);var i=fn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return he(t),null}if(e=fn(et.current),aa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[qe]=t,r[di]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)W(jr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Dc(r,a),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},W("invalid",r);break;case"textarea":Uc(r,a),W("invalid",r)}el(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ia(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ia(r.textContent,s,e),i=["children",""+s]):ni.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Xi(r),Mc(r,a,!0);break;case"textarea":Xi(r),jc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[di]=r,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(o=tl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)W(jr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Dc(e,r),i=Qs(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":Uc(e,r),i=Js(e,r),W("invalid",e);break;default:i=r}el(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?yh(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gh(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(e,l):typeof l=="number"&&ri(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ni.hasOwnProperty(a)?l!=null&&a==="onScroll"&&W("scroll",e):l!=null&&pu(e,a,l,o))}switch(n){case"input":Xi(e),Mc(e,r,!1);break;case"textarea":Xi(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Gn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=fn(pi.current),fn(et.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(a=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ia(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return he(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&xe!==null&&t.mode&1&&!(t.flags&128))ap(),or(),t.flags|=98560,a=!1;else if(a=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[qe]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else We!==null&&(Dl(We),We=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Xu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return lr(),xl(e,t),e===null&&ci(t.stateNode.containerInfo),he(t),null;case 10:return Au(t.type._context),he(t),null;case 17:return Ie(t.type)&&Ga(),he(t),null;case 19:if(V(G),a=t.memoizedState,a===null)return he(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Rr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=to(e),o!==null){for(t.flags|=128,Rr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>cr&&(t.flags|=128,r=!0,Rr(a,!1),t.lanes=4194304)}else{if(!r)if(e=to(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return he(t),null}else 2*ee()-a.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Yy(e,t){switch(Pu(t),t.tag){case 1:return Ie(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),V(Se),V(me),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uu(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return lr(),null;case 10:return Au(t.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var la=!1,pe=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,T=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){q(e,t,r)}}var Tf=!1;function Qy(e,t){if(fl=Ha,e=Kh(),xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dl={focusedElem:e,selectionRange:n},Ha=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:$e(t.type,v),S);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Tf,Tf=!1,w}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Tl(t,n,a)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[di],delete t[ml],delete t[Ry],delete t[Oy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hp(e){return e.tag===5||e.tag===3||e.tag===4}function Pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ya));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var ue=null,Be=!1;function kt(e,t,n){for(n=n.child;n!==null;)Vp(e,t,n),n=n.sibling}function Vp(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:pe||Bn(n,t);case 6:var r=ue,i=Be;ue=null,kt(e,t,n),ue=r,Be=i,ue!==null&&(Be?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Be?(e=ue,n=n.stateNode,e.nodeType===8?gs(e.parentNode,n):e.nodeType===1&&gs(e,n),si(e)):gs(ue,n.stateNode));break;case 4:r=ue,i=Be,ue=n.stateNode.containerInfo,Be=!0,kt(e,t,n),ue=r,Be=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Tl(n,t,o),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!pe&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,kt(e,t,n),pe=r):kt(e,t,n);break;default:kt(e,t,n)}}function Nf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gy),t.forEach(function(r){var i=i0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Be=!1;break e;case 3:ue=s.stateNode.containerInfo,Be=!0;break e;case 4:ue=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ue===null)throw Error(_(160));Vp(a,o,i),ue=null,Be=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kp(t,e),t=t.sibling}function Kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Qe(e),r&4){try{Qr(3,e,e.return),Ao(3,e)}catch(v){q(e,e.return,v)}try{Qr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:Fe(t,e),Qe(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Fe(t,e),Qe(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(v){q(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&hh(i,a),tl(s,o);var u=tl(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?yh(i,d):c==="dangerouslySetInnerHTML"?gh(i,d):c==="children"?ri(i,d):pu(i,c,d,u)}switch(s){case"input":Xs(i,a);break;case"textarea":ph(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Gn(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Gn(i,!!a.multiple,a.defaultValue,!0):Gn(i,!!a.multiple,a.multiple?[]:"",!1))}i[di]=a}catch(v){q(e,e.return,v)}}break;case 6:if(Fe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){q(e,e.return,v)}}break;case 3:if(Fe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:Fe(t,e),Qe(e);break;case 13:Fe(t,e),Qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=ee())),r&4&&Nf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||c,Fe(t,e),pe=u):Fe(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(p=T,g=p.child,p.tag){case 0:case 11:case 14:case 15:Qr(4,p,p.return);break;case 1:Bn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){q(r,n,v)}}break;case 5:Bn(p,p.return);break;case 22:if(p.memoizedState!==null){Of(d);continue}}g!==null?(g.return=p,T=g):Of(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=vh("display",o))}catch(v){q(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){q(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fe(t,e),Qe(e),r&4&&Nf(e);break;case 21:break;default:Fe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var a=Pf(e);Rl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Pf(e);Nl(e,s,o);break;default:throw Error(_(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xy(e,t,n){T=e,Yp(e)}function Yp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||la;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||pe;s=la;var u=pe;if(la=o,(pe=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Af(i):l!==null?(l.return=o,T=l):Af(i);for(;a!==null;)T=a,Yp(a),a=a.sibling;T=i,la=s,pe=u}Rf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):Rf(e)}}function Rf(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&si(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}pe||t.flags&512&&Pl(t)}catch(p){q(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Of(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Af(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var a=t.return;try{Pl(t)}catch(l){q(t,a,l)}break;case 5:var o=t.return;try{Pl(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var qy=Math.ceil,io=yt.ReactCurrentDispatcher,Vu=yt.ReactCurrentOwner,Me=yt.ReactCurrentBatchConfig,z=0,le=null,te=null,ce=0,be=0,Wn=en(0),re=0,yi=null,_n=0,Lo=0,Ku=0,Xr=null,ke=null,Yu=0,cr=1/0,rt=null,ao=!1,Ol=null,Bt=null,ua=!1,Lt=null,oo=0,qr=0,Al=null,Na=-1,Ra=0;function ye(){return z&6?ee():Na!==-1?Na:Na=ee()}function Wt(e){return e.mode&1?z&2&&ce!==0?ce&-ce:Ly.transition!==null?(Ra===0&&(Ra=Nh()),Ra):(e=F,e!==0||(e=window.event,e=e===void 0?16:Uh(e.type)),e):1}function Ke(e,t,n,r){if(50<qr)throw qr=0,Al=null,Error(_(185));Ni(e,n,r),(!(z&2)||e!==le)&&(e===le&&(!(z&2)&&(Lo|=n),re===4&&Tt(e,ce)),Ce(e,r),n===1&&z===0&&!(t.mode&1)&&(cr=ee()+500,No&&tn()))}function Ce(e,t){var n=e.callbackNode;Lv(e,t);var r=Wa(e,e===le?ce:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?Ay(Lf.bind(null,e)):np(Lf.bind(null,e)),Py(function(){!(z&6)&&tn()}),n=null;else{switch(Rh(r)){case 1:n=wu;break;case 4:n=Th;break;case 16:n=Ba;break;case 536870912:n=Ph;break;default:n=Ba}n=tm(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(Na=-1,Ra=0,z&6)throw Error(_(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=Wa(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=z;z|=2;var a=Xp();(le!==e||ce!==t)&&(rt=null,cr=ee()+500,pn(e,t));do try{e0();break}catch(s){Qp(e,s)}while(1);Ou(),io.current=a,z=i,te!==null?t=0:(le=null,ce=0,t=re)}if(t!==0){if(t===2&&(i=ol(e),i!==0&&(r=i,t=Ll(e,i))),t===1)throw n=yi,pn(e,0),Tt(e,r),Ce(e,ee()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jy(i)&&(t=so(e,r),t===2&&(a=ol(e),a!==0&&(r=a,t=Ll(e,a))),t===1))throw n=yi,pn(e,0),Tt(e,r),Ce(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:sn(e,ke,rt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Yu+500-ee(),10<t)){if(Wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pl(sn.bind(null,e,ke,rt),t);break}sn(e,ke,rt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qy(r/1960))-r,10<r){e.timeoutHandle=pl(sn.bind(null,e,ke,rt),r);break}sn(e,ke,rt);break;case 5:sn(e,ke,rt);break;default:throw Error(_(329))}}}return Ce(e,ee()),e.callbackNode===n?Gp.bind(null,e):null}function Ll(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=so(e,t),e!==2&&(t=ke,ke=n,t!==null&&Dl(t)),e}function Dl(e){ke===null?ke=e:ke.push.apply(ke,e)}function Jy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ye(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ku,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Lf(e){if(z&6)throw Error(_(327));Zn();var t=Wa(e,0);if(!(t&1))return Ce(e,ee()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=ol(e);r!==0&&(t=r,n=Ll(e,r))}if(n===1)throw n=yi,pn(e,0),Tt(e,t),Ce(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,ke,rt),Ce(e,ee()),null}function Gu(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(cr=ee()+500,No&&tn())}}function kn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&Zn();var t=z;z|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,z=t,!(z&6)&&tn()}}function Qu(){be=Wn.current,V(Wn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ty(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:lr(),V(Se),V(me),ju();break;case 5:Uu(r);break;case 4:lr();break;case 13:V(G);break;case 19:V(G);break;case 10:Au(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(le=e,te=e=Ht(e.current,null),ce=be=t,re=0,yi=null,Ku=Lo=_n=0,ke=Xr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}cn=null}return e}function Qp(e,t){do{var n=te;try{if(Ou(),xa.current=ro,no){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(wn=0,se=ne=Q=null,Gr=!1,mi=0,Vu.current=null,n===null||n.return===null){re=1,yi=t,te=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ce,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=kf(o);if(g!==null){g.flags&=-257,Ef(g,o,s,a,t),g.mode&1&&_f(a,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){_f(a,u,t),Xu();break e}l=Error(_(426))}}else if(Y&&s.mode&1){var S=kf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ef(S,o,s,a,t),Nu(ur(l,s));break e}}a=l=ur(l,s),re!==4&&(re=2),Xr===null?Xr=[a]:Xr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Op(a,l,t);hf(a,h);break e;case 1:s=l;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Ap(a,s,t);hf(a,y);break e}}a=a.return}while(a!==null)}Jp(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Xp(){var e=io.current;return io.current=ro,e===null?ro:e}function Xu(){(re===0||re===3||re===2)&&(re=4),le===null||!(_n&268435455)&&!(Lo&268435455)||Tt(le,ce)}function so(e,t){var n=z;z|=2;var r=Xp();(le!==e||ce!==t)&&(rt=null,pn(e,t));do try{Zy();break}catch(i){Qp(e,i)}while(1);if(Ou(),z=n,io.current=r,te!==null)throw Error(_(261));return le=null,ce=0,re}function Zy(){for(;te!==null;)qp(te)}function e0(){for(;te!==null&&!Cv();)qp(te)}function qp(e){var t=em(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Jp(e):te=t,Vu.current=null}function Jp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yy(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Ky(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function sn(e,t,n){var r=F,i=Me.transition;try{Me.transition=null,F=1,t0(e,t,n,r)}finally{Me.transition=i,F=r}return null}function t0(e,t,n,r){do Zn();while(Lt!==null);if(z&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Dv(e,a),e===le&&(te=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,tm(Ba,function(){return Zn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var o=F;F=1;var s=z;z|=4,Vu.current=null,Qy(e,n),Kp(n,e),ky(dl),Ha=!!fl,dl=fl=null,e.current=n,Xy(n),bv(),z=s,F=o,Me.transition=a}else e.current=n;if(ua&&(ua=!1,Lt=e,oo=i),a=e.pendingLanes,a===0&&(Bt=null),Pv(n.stateNode),Ce(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ao)throw ao=!1,e=Ol,Ol=null,e;return oo&1&&e.tag!==0&&Zn(),a=e.pendingLanes,a&1?e===Al?qr++:(qr=0,Al=e):qr=0,tn(),null}function Zn(){if(Lt!==null){var e=Rh(oo),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,oo=0,z&6)throw Error(_(331));var i=z;for(z|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Qr(8,c,a)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var p=c.sibling,g=c.return;if(Wp(c),c===u){T=null;break}if(p!==null){p.return=g,T=p;break}T=g}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var f=e.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ao(9,s)}}catch(k){q(s,s.return,k)}if(s===o){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(z=i,tn(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function Df(e,t,n){t=ur(n,t),t=Op(e,t,1),e=$t(e,t,1),t=ye(),e!==null&&(Ni(e,1,t),Ce(e,t))}function q(e,t,n){if(e.tag===3)Df(e,e,n);else for(;t!==null;){if(t.tag===3){Df(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=ur(n,e),e=Ap(t,e,1),t=$t(t,e,1),e=ye(),t!==null&&(Ni(t,1,e),Ce(t,e));break}}t=t.return}}function n0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(re===4||re===3&&(ce&130023424)===ce&&500>ee()-Yu?pn(e,0):Ku|=n),Ce(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(Ni(e,t,n),Ce(e,n))}function r0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function i0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Zp(e,n)}var em;em=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,Vy(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,Y&&t.flags&1048576&&rp(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pa(e,t),e=t.pendingProps;var i=ar(t,me.current);Jn(t,n),i=Fu(null,t,r,e,i,n);var a=$u();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(a=!0,Qa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Du(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,kl(t,r,e,n),t=Il(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Tu(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=o0(r),e=$e(r,e),i){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=Cf(null,t,r,e,n);break e;case 11:t=Sf(null,t,r,e,n);break e;case 14:t=If(null,t,r,$e(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Cf(e,t,r,i,n);case 3:e:{if(Up(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,sp(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ur(Error(_(423)),t),t=bf(e,t,r,n,i);break e}else if(r!==i){i=ur(Error(_(424)),t),t=bf(e,t,r,n,i);break e}else for(xe=Ft(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,We=null,n=fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===i){t=ht(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&yl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,hl(r,i)?o=null:a!==null&&hl(r,a)&&(t.flags|=32),Mp(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&yl(t),null;case 13:return jp(e,t,n);case 4:return Mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Sf(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(Ja,r._currentValue),r._currentValue=o,a!==null)if(Ye(a.value,o)){if(a.children===i.children&&!Se.current){t=ht(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ut(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),wl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),wl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=Ue(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=$e(r,t.pendingProps),i=$e(r.type,i),If(e,t,r,i,n);case 15:return Lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Pa(e,t),t.tag=1,Ie(r)?(e=!0,Qa(t)):e=!1,Jn(t,n),up(t,r,i),kl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return zp(e,t,n);case 22:return Dp(e,t,n)}throw Error(_(156,t.tag))};function tm(e,t){return xh(e,t)}function a0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new a0(e,t,n,r)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o0(e){if(typeof e=="function")return qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gu)return 11;if(e===vu)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")qu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case An:return mn(n.children,i,a,t);case mu:o=8,i|=8;break;case Vs:return e=De(12,n,t,i|2),e.elementType=Vs,e.lanes=a,e;case Ks:return e=De(13,n,t,i),e.elementType=Ks,e.lanes=a,e;case Ys:return e=De(19,n,t,i),e.elementType=Ys,e.lanes=a,e;case ch:return Do(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lh:o=10;break e;case uh:o=9;break e;case gu:o=11;break e;case vu:o=14;break e;case It:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=De(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function mn(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=De(22,e,r,t),e.elementType=ch,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=as(0),this.expirationTimes=as(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,i,a,o,s,l){return e=new s0(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=De(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(a),e}function l0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nm(e){if(!e)return Qt;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ie(n))return tp(e,n,t)}return t}function rm(e,t,n,r,i,a,o,s,l){return e=Ju(n,r,!0,e,i,a,o,s,l),e.context=nm(null),n=e.current,r=ye(),i=Wt(n),a=ut(r,i),a.callback=t??null,$t(n,a,i),e.current.lanes=i,Ni(e,i,r),Ce(e,r),e}function Mo(e,t,n,r){var i=t.current,a=ye(),o=Wt(i);return n=nm(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(i,t,o),e!==null&&(Ke(e,i,o,a),ba(e,i,o)),o}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zu(e,t){Mf(e,t),(e=e.alternate)&&Mf(e,t)}function u0(){return null}var im=typeof reportError=="function"?reportError:function(e){console.error(e)};function ec(e){this._internalRoot=e}Uo.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Mo(e,t,null,null)};Uo.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){Mo(null,e,null,null)}),t[ft]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Mh(e)}};function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function c0(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=lo(o);a.call(u)}}var o=rm(t,r,e,0,null,!1,!1,"",Uf);return e._reactRootContainer=o,e[ft]=o.current,ci(e.nodeType===8?e.parentNode:e),kn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=lo(l);s.call(u)}}var l=Ju(e,0,!1,null,null,!1,!1,"",Uf);return e._reactRootContainer=l,e[ft]=l.current,ci(e.nodeType===8?e.parentNode:e),kn(function(){Mo(t,l,n,r)}),l}function zo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=lo(o);s.call(l)}}Mo(t,o,e,i)}else o=c0(n,t,e,i,r);return lo(o)}Oh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(_u(t,n|1),Ce(t,ee()),!(z&6)&&(cr=ee()+500,tn()))}break;case 13:kn(function(){var r=dt(e,1);if(r!==null){var i=ye();Ke(r,e,1,i)}}),Zu(e,1)}};ku=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}Zu(e,134217728)}};Ah=function(e){if(e.tag===13){var t=Wt(e),n=dt(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}Zu(e,t)}};Lh=function(){return F};Dh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};rl=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(_(90));dh(r),Xs(r,i)}}}break;case"textarea":ph(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};kh=Gu;Eh=kn;var f0={usingClientEntryPoint:!1,Events:[Oi,Un,Po,wh,_h,Gu]},Or={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},d0={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||u0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Co=ca.inject(d0),Ze=ca}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(t))throw Error(_(200));return l0(e,t,null,n)};Ne.createRoot=function(e,t){if(!tc(e))throw Error(_(299));var n=!1,r="",i=im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ju(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,ci(e.nodeType===8?e.parentNode:e),new ec(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return kn(e)};Ne.hydrate=function(e,t,n){if(!jo(t))throw Error(_(200));return zo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!tc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rm(t,null,e,1,n??null,i,!1,a,o),e[ft]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};Ne.render=function(e,t,n){if(!jo(t))throw Error(_(200));return zo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!jo(e))throw Error(_(40));return e._reactRootContainer?(kn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Ne.unstable_batchedUpdates=Gu;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return zo(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)}catch(e){console.error(e)}}am(),rh.exports=Ne;var h0=rh.exports,jf=h0;Ws.createRoot=jf.createRoot,Ws.hydrateRoot=jf.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const zf="popstate";function p0(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Ml("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uo(i)}return g0(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m0(){return Math.random().toString(36).substr(2,8)}function Ff(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,n,r){return n===void 0&&(n=null),wi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vr(t):t,{state:n,key:t&&t.key||r||m0()})}function uo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Dt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(wi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=Dt.Pop;let S=c(),h=S==null?null:S-u;u=S,l&&l({action:s,location:v.location,delta:h})}function p(S,h){s=Dt.Push;let f=Ml(v.location,S,h);n&&n(f,S),u=c()+1;let m=Ff(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch{i.location.assign(y)}a&&l&&l({action:s,location:v.location,delta:1})}function g(S,h){s=Dt.Replace;let f=Ml(v.location,S,h);n&&n(f,S),u=c();let m=Ff(f,u),y=v.createHref(f);o.replaceState(m,"",y),a&&l&&l({action:s,location:v.location,delta:0})}function w(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:uo(S);return ie(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let v={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zf,d),l=S,()=>{i.removeEventListener(zf,d),l=null}},createHref(S){return t(i,S)},createURL:w,encodeLocation(S){let h=w(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(S){return o.go(S)}};return v}var $f;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($f||($f={}));function v0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vr(t):t,i=rc(r.pathname||"/",n);if(i==null)return null;let a=om(e);y0(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=x0(a[s],N0(i));return o}function om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(ie(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),om(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:C0(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of sm(a.path))i(a,o,l)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=sm(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function y0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:b0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w0=/^:\w+$/,_0=3,k0=2,E0=1,S0=10,I0=-2,Bf=e=>e==="*";function C0(e,t){let n=e.split("/"),r=n.length;return n.some(Bf)&&(r+=I0),t&&(r+=k0),n.filter(i=>!Bf(i)).reduce((i,a)=>i+(w0.test(a)?_0:a===""?E0:S0),r)}function b0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function x0(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=T0({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Vt([i,c.pathname]),pathnameBase:L0(Vt([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Vt([i,c.pathnameBase]))}return a}function T0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=R0(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function P0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function N0(e){try{return decodeURI(e)}catch(t){return nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function R0(e,t){try{return decodeURIComponent(e)}catch(n){return nc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function rc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function O0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vr(e):e;return{pathname:n?n.startsWith("/")?n:A0(n,t):t,search:D0(r),hash:M0(i)}}function A0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function um(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vr(e):(i=wi({},e),ie(!i.pathname||!i.pathname.includes("?"),bs("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),bs("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),bs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=O0(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),L0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,M0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function U0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const j0=["get",...cm];new Set(j0);/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const F0=typeof Object.is=="function"?Object.is:z0,{useState:$0,useEffect:B0,useLayoutEffect:W0,useDebugValue:H0}=Bs;function V0(e,t,n){const r=t(),[{inst:i},a]=$0({inst:{value:r,getSnapshot:t}});return W0(()=>{i.value=r,i.getSnapshot=t,xs(i)&&a({inst:i})},[e,r,t]),B0(()=>(xs(i)&&a({inst:i}),e(()=>{xs(i)&&a({inst:i})})),[e]),H0(r),r}function xs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!F0(n,r)}catch{return!0}}function K0(e,t,n){return t()}const Y0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G0=!Y0,Q0=G0?K0:V0;"useSyncExternalStore"in Bs&&(e=>e.useSyncExternalStore)(Bs);const fm=I.createContext(null),dm=I.createContext(null),Li=I.createContext(null),Fo=I.createContext(null),yr=I.createContext({outlet:null,matches:[]}),hm=I.createContext(null);function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}function X0(e,t){let{relative:n}=t===void 0?{}:t;Di()||ie(!1);let{basename:r,navigator:i}=I.useContext(Li),{hash:a,pathname:o,search:s}=pm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Di(){return I.useContext(Fo)!=null}function $o(){return Di()||ie(!1),I.useContext(Fo).location}function Bo(){Di()||ie(!1);let{basename:e,navigator:t}=I.useContext(Li),{matches:n}=I.useContext(yr),{pathname:r}=$o(),i=JSON.stringify(lm(n).map(s=>s.pathnameBase)),a=I.useRef(!1);return I.useEffect(()=>{a.current=!0}),I.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=um(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Vt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function pm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(yr),{pathname:i}=$o(),a=JSON.stringify(lm(r).map(o=>o.pathnameBase));return I.useMemo(()=>um(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function q0(e,t){Di()||ie(!1);let{navigator:n}=I.useContext(Li),r=I.useContext(dm),{matches:i}=I.useContext(yr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=$o(),u;if(t){var c;let v=typeof t=="string"?vr(t):t;s==="/"||(c=v.pathname)!=null&&c.startsWith(s)||ie(!1),u=v}else u=l;let d=u.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",g=v0(e,{pathname:p}),w=t1(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Vt([s,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:Vt([s,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?I.createElement(Fo.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dt.Pop}},w):w}function J0(){let e=a1(),t=U0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,a)}class Z0 extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(yr.Provider,{value:this.props.routeContext},I.createElement(hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e1(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(fm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(yr.Provider,{value:t},r)}function t1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||ie(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=I.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=I.createElement(J0,null));let c=t.concat(r.slice(0,s+1)),d=()=>{let p=a;return l?p=u:o.route.Component?p=I.createElement(o.route.Component,null):o.route.element&&(p=o.route.element),I.createElement(e1,{match:o,routeContext:{outlet:a,matches:c},children:p})};return n&&(o.route.ErrorBoundary||o.route.errorElement||s===0)?I.createElement(Z0,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Wf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Wf||(Wf={}));var co;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(co||(co={}));function n1(e){let t=I.useContext(dm);return t||ie(!1),t}function r1(e){let t=I.useContext(yr);return t||ie(!1),t}function i1(e){let t=r1(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function a1(){var e;let t=I.useContext(hm),n=n1(co.UseRouteError),r=i1(co.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zr(e){ie(!1)}function o1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dt.Pop,navigator:a,static:o=!1}=e;Di()&&ie(!1);let s=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:g="default"}=r,w=I.useMemo(()=>{let v=rc(u,s);return v==null?null:{location:{pathname:v,search:c,hash:d,state:p,key:g},navigationType:i}},[s,u,c,d,p,g,i]);return w==null?null:I.createElement(Li.Provider,{value:l},I.createElement(Fo.Provider,{children:n,value:w}))}function s1(e){let{children:t,location:n}=e,r=I.useContext(fm),i=r&&!t?r.router.routes:jl(t);return q0(i,n)}var Hf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Hf||(Hf={}));new Promise(()=>{});function jl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let a=[...t,i];if(r.type===I.Fragment){n.push.apply(n,jl(r.props.children,a));return}r.type!==zr&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jl(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zl.apply(this,arguments)}function l1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c1(e,t){return e.button===0&&(!t||t==="_self")&&!u1(e)}const f1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function d1(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=p0({window:r,v5Compat:!0}));let a=i.current,[o,s]=I.useState({action:a.action,location:a.location});return I.useLayoutEffect(()=>a.listen(s),[a]),I.createElement(o1,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const h1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bt=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=l1(t,f1),{basename:p}=I.useContext(Li),g,w=!1;if(typeof u=="string"&&p1.test(u)&&(g=u,h1)){let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),y=rc(m.pathname,p);m.origin===f.origin&&y!=null?u=y+m.search+m.hash:w=!0}let v=X0(u,{relative:i}),S=m1(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function h(f){r&&r(f),f.defaultPrevented||S(f)}return I.createElement("a",zl({},d,{href:g||v,onClick:w||a?r:h,ref:n,target:l}))});var Vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Vf||(Vf={}));var Kf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kf||(Kf={}));function m1(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=Bo(),l=$o(),u=pm(e,{relative:o});return I.useCallback(c=>{if(c1(c,n)){c.preventDefault();let d=r!==void 0?r:uo(l)===uo(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}function mm({newArray:e,newClick:t,speed:n}){n=1e3-n*10;async function r(){const s=document.getElementsByClassName("array-bar");for(let l=0;l<s.length;l++){for(let u=0;u<s.length-l-1;u++){s[u].style.backgroundColor="red",s[u+1].style.backgroundColor="red";let c=parseInt(s[u].style.height),d=parseInt(s[u+1].style.height);if(c>d){await new Promise(g=>setTimeout(()=>{g()},n));let p=s[u].style.height;s[u].style.height=s[u+1].style.height,s[u+1].style.height=p}s[u].style.backgroundColor="cyan",s[u+1].style.backgroundColor="cyan"}s[s.length-l-1].style.backgroundColor="green"}}async function i(){const s=document.getElementsByClassName("array-bar");for(let l=0;l<s.length;l++){let u=l;s[l].style.backgroundColor="blue";for(let c=l+1;c<s.length;c++){s[c].style.backgroundColor="red",await new Promise(g=>setTimeout(()=>{g()},n));let d=parseInt(s[c].style.height),p=parseInt(s[u].style.height);d<p?(u!==l&&(s[u].style.backgroundColor="cyan"),u=c):s[c].style.backgroundColor="cyan"}if(u!==l){let c=s[l].style.height;s[l].style.height=s[u].style.height,s[u].style.height=c}await new Promise(c=>setTimeout(()=>{c()},n)),s[u].style.backgroundColor="cyan",s[l].style.backgroundColor="green"}}async function a(s,l,u){const c=document.getElementsByClassName("array-bar"),d=l-s+1,p=u-l;let g=new Array(d),w=new Array(p);for(let f=0;f<d;f++)await new Promise(m=>setTimeout(()=>{m()},n)),c[s+f].style.backgroundColor="orange",g[f]=c[s+f].style.height;for(let f=0;f<p;f++)await new Promise(m=>setTimeout(()=>{m()},n)),c[l+f+1].style.backgroundColor="yellow",w[f]=c[l+f+1].style.height;await new Promise(f=>setTimeout(()=>{f()},n));let v=0,S=0,h=s;for(;v<d&&S<p;)await new Promise(f=>setTimeout(()=>{f()},n)),parseInt(g[v])<=parseInt(w[S])?(d+p===c.length?c[h].style.backgroundColor="green":c[h].style.backgroundColor="lightgreen",c[h].style.height=g[v],v++,h++):(d+p===c.length?c[h].style.backgroundColor="green":c[h].style.backgroundColor="lightgreen",c[h].style.height=w[S],S++,h++);for(;v<d;)await new Promise(f=>setTimeout(()=>{f()},n)),d+p===c.length?c[h].style.backgroundColor="green":c[h].style.backgroundColor="lightgreen",c[h].style.height=g[v],v++,h++;for(;S<p;)await new Promise(f=>setTimeout(()=>{f()},n)),d+p===c.length?c[h].style.backgroundColor="green":c[h].style.backgroundColor="lightgreen",c[h].style.height=w[S],S++,h++}async function o(s,l,u){if(l>=u)return;const c=l+Math.floor((u-l)/2);await o(s,l,c),await o(s,c+1,u),await a(l,c,u)}t=="bubble"?r():t=="marge"?o(e,0,34):t=="selection"&&i()}function g1({newArray:e,newClick:t,speed:n}){n=1e3-n*10;const[r,i]=I.useState(10);I.useEffect(()=>()=>{i(()=>prompt("Please Enter any number 0 to 500"))},[t=="binary",t=="linear"]);async function a(){const o=document.getElementsByClassName("array-bar");for(let s=0;s<o.length;s++)o[s].style.backgroundColor="blue",parseInt(o[s].style.height)===parseInt(r)&&(o[s].style.backgroundColor="green",s=o.length),await new Promise(l=>setTimeout(l,n))}return t=="linear"&&(a(),console.log(e)),E.jsx(E.Fragment,{children:E.jsx("div",{className:"array-container",children:e.map((o,s)=>E.jsx("div",{className:"array-bar",style:{height:`${o}px`}},s))})})}var Yf={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},v1={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};function Gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gf(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fo(e){return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function y1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w1(e,t,n){return t&&Qf(e.prototype,t),n&&Qf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ic(e,t){return k1(e)||S1(e,t)||gm(e,t)||C1()}function Mi(e){return _1(e)||E1(e)||gm(e)||I1()}function _1(e){if(Array.isArray(e))return Fl(e)}function k1(e){if(Array.isArray(e))return e}function E1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function gm(e,t){if(e){if(typeof e=="string")return Fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fl(e,t)}}function Fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xf=function(){},ac={},vm={},ym=null,wm={mark:Xf,measure:Xf};try{typeof window<"u"&&(ac=window),typeof document<"u"&&(vm=document),typeof MutationObserver<"u"&&(ym=MutationObserver),typeof performance<"u"&&(wm=performance)}catch{}var b1=ac.navigator||{},qf=b1.userAgent,Jf=qf===void 0?"":qf,Xt=ac,K=vm,Zf=ym,fa=wm;Xt.document;var wt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",_m=~Jf.indexOf("MSIE")||~Jf.indexOf("Trident/"),da,ha,pa,ma,ga,pt="___FONT_AWESOME___",$l=16,km="fa",Em="svg-inline--fa",En="data-fa-i2svg",Bl="data-fa-pseudo-element",x1="data-fa-pseudo-element-pending",oc="data-prefix",sc="data-icon",ed="fontawesome-i2svg",T1="async",P1=["HTML","HEAD","STYLE","SCRIPT"],Sm=function(){try{return!0}catch{return!1}}(),H="classic",J="sharp",lc=[H,J];function Ui(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[H]}})}var _i=Ui((da={},ae(da,H,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(da,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),da)),ki=Ui((ha={},ae(ha,H,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(ha,J,{solid:"fass",regular:"fasr",light:"fasl"}),ha)),Ei=Ui((pa={},ae(pa,H,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(pa,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pa)),N1=Ui((ma={},ae(ma,H,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(ma,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ma)),R1=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Im="fa-layers-text",O1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,A1=Ui((ga={},ae(ga,H,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(ga,J,{900:"fass",400:"fasr",300:"fasl"}),ga)),Cm=[1,2,3,4,5,6,7,8,9,10],L1=Cm.concat([11,12,13,14,15,16,17,18,19,20]),D1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Si=new Set;Object.keys(ki[H]).map(Si.add.bind(Si));Object.keys(ki[J]).map(Si.add.bind(Si));var M1=[].concat(lc,Mi(Si),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dn.GROUP,dn.SWAP_OPACITY,dn.PRIMARY,dn.SECONDARY]).concat(Cm.map(function(e){return"".concat(e,"x")})).concat(L1.map(function(e){return"w-".concat(e)})),Jr=Xt.FontAwesomeConfig||{};function U1(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function j1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var z1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];z1.forEach(function(e){var t=ic(e,2),n=t[0],r=t[1],i=j1(U1(n));i!=null&&(Jr[r]=i)})}var bm={styleDefault:"solid",familyDefault:"classic",cssPrefix:km,replacementClass:Em,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jr.familyPrefix&&(Jr.cssPrefix=Jr.familyPrefix);var fr=x(x({},bm),Jr);fr.autoReplaceSvg||(fr.observeMutations=!1);var N={};Object.keys(bm).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){fr[e]=n,Zr.forEach(function(r){return r(N)})},get:function(){return fr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){fr.cssPrefix=t,Zr.forEach(function(n){return n(N)})},get:function(){return fr.cssPrefix}});Xt.FontAwesomeConfig=N;var Zr=[];function F1(e){return Zr.push(e),function(){Zr.splice(Zr.indexOf(e),1)}}var Et=$l,Je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $1(e){if(!(!e||!wt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var B1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ii(){for(var e=12,t="";e-- >0;)t+=B1[Math.random()*62|0];return t}function wr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function uc(e){return e.classList?wr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(xm(e[n]),'" ')},"").trim()}function Wo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function cc(e){return e.size!==Je.size||e.x!==Je.x||e.y!==Je.y||e.rotate!==Je.rotate||e.flipX||e.flipY}function H1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function V1(e){var t=e.transform,n=e.width,r=n===void 0?$l:n,i=e.height,a=i===void 0?$l:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&_m?l+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):l+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),l+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var K1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tm(){var e=km,t=Em,n=N.cssPrefix,r=N.replacementClass,i=K1;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var td=!1;function Ts(){N.autoAddCss&&!td&&($1(Tm()),td=!0)}var Y1={mixout:function(){return{dom:{css:Tm,insertCss:Ts}}},hooks:function(){return{beforeDOMElementCreation:function(){Ts()},beforeI2svg:function(){Ts()}}}},mt=Xt||{};mt[pt]||(mt[pt]={});mt[pt].styles||(mt[pt].styles={});mt[pt].hooks||(mt[pt].hooks={});mt[pt].shims||(mt[pt].shims=[]);var He=mt[pt],Pm=[],G1=function e(){K.removeEventListener("DOMContentLoaded",e),ho=1,Pm.map(function(t){return t()})},ho=!1;wt&&(ho=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),ho||K.addEventListener("DOMContentLoaded",G1));function Q1(e){wt&&(ho?setTimeout(e,0):Pm.push(e))}function ji(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?xm(e):"<".concat(t," ").concat(W1(r),">").concat(a.map(ji).join(""),"</").concat(t,">")}function nd(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var X1=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Ps=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?X1(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function q1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Wl(e){var t=q1(e);return t.length===1?t[0].toString(16):null}function J1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=rd(t);typeof He.hooks.addPack=="function"&&!i?He.hooks.addPack(e,rd(t)):He.styles[e]=x(x({},He.styles[e]||{}),a),e==="fas"&&Hl("fa",t)}var va,ya,wa,Hn=He.styles,Z1=He.shims,ew=(va={},ae(va,H,Object.values(Ei[H])),ae(va,J,Object.values(Ei[J])),va),fc=null,Nm={},Rm={},Om={},Am={},Lm={},tw=(ya={},ae(ya,H,Object.keys(_i[H])),ae(ya,J,Object.keys(_i[J])),ya);function nw(e){return~M1.indexOf(e)}function rw(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!nw(i)?i:null}var Dm=function(){var t=function(a){return Ps(Hn,function(o,s,l){return o[l]=Ps(s,a,{}),o},{})};Nm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Rm=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Lm=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Hn||N.autoFetchSvg,r=Ps(Z1,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Om=r.names,Am=r.unicodes,fc=Ho(N.styleDefault,{family:N.familyDefault})};F1(function(e){fc=Ho(e.styleDefault,{family:N.familyDefault})});Dm();function dc(e,t){return(Nm[e]||{})[t]}function iw(e,t){return(Rm[e]||{})[t]}function hn(e,t){return(Lm[e]||{})[t]}function Mm(e){return Om[e]||{prefix:null,iconName:null}}function aw(e){var t=Am[e],n=dc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return fc}var hc=function(){return{prefix:null,iconName:null,rest:[]}};function Ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?H:n,i=_i[r][e],a=ki[r][e]||ki[r][i],o=e in He.styles?e:null;return a||o||null}var id=(wa={},ae(wa,H,Object.keys(Ei[H])),ae(wa,J,Object.keys(Ei[J])),wa);function Vo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ae(t,H,"".concat(N.cssPrefix,"-").concat(H)),ae(t,J,"".concat(N.cssPrefix,"-").concat(J)),t),o=null,s=H;(e.includes(a[H])||e.some(function(u){return id[H].includes(u)}))&&(s=H),(e.includes(a[J])||e.some(function(u){return id[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var d=rw(N.cssPrefix,c);if(Hn[c]?(c=ew[s].includes(c)?N1[s][c]:c,o=c,u.prefix=c):tw[s].indexOf(c)>-1?(o=c,u.prefix=Ho(c,{family:s})):d?u.iconName=d:c!==N.replacementClass&&c!==a[H]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?Mm(u.iconName):{},g=hn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Hn.far&&Hn.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},hc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(Hn.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=hn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qt()||"fas"),l}var ow=function(){function e(){y1(this,e),this.definitions={}}return w1(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),Hl(s,o[s]);var l=Ei[H][s];l&&Hl(l,o[s]),Dm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),ad=[],Vn={},er={},sw=Object.keys(er);function lw(e,t){var n=t.mixoutsTo;return ad=e,Vn={},Object.keys(er).forEach(function(r){sw.indexOf(r)===-1&&delete er[r]}),ad.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),fo(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Vn[o]||(Vn[o]=[]),Vn[o].push(a[o])})}r.provides&&r.provides(er)}),n}function Vl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Vn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Sn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vn[e]||[];i.forEach(function(a){a.apply(null,n)})}function gt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return er[e]?er[e].apply(null,t):void 0}function Kl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||qt();if(t)return t=hn(n,t)||t,nd(Um.definitions,n,t)||nd(He.styles,n,t)}var Um=new ow,uw=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Sn("noAuto")},cw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wt?(Sn("beforeI2svg",t),gt("pseudoElements2svg",t),gt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Q1(function(){dw({autoReplaceSvgRoot:n}),Sn("watch",t)})}},fw={icon:function(t){if(t===null)return null;if(fo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:hn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ho(t[0]);return{prefix:r,iconName:hn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(R1))){var i=Vo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||qt(),iconName:hn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=qt();return{prefix:a,iconName:hn(a,t)||t}}}},Oe={noAuto:uw,config:N,dom:cw,parse:fw,library:Um,findIconDefinition:Kl,toHtml:ji},dw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(He.styles).length>0||N.autoFetchSvg)&&wt&&N.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ko(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ji(r)})}}),Object.defineProperty(e,"node",{get:function(){if(wt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hw(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(cc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Wo(x(x({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function pw(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function pc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,w=r.found?r:n,v=w.width,S=w.height,h=i==="fak",f=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),m={children:[],attributes:x(x({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},y=h&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};g&&(m.attributes[En]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ii())},children:[l]}),delete m.attributes.title);var k=x(x({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:x(x({},y),d.styles)}),C=r.found&&n.found?gt("generateAbstractMask",k)||{children:[],attributes:{}}:gt("generateAbstractIcon",k)||{children:[],attributes:{}},b=C.children,R=C.attributes;return k.children=b,k.attributes=R,s?pw(k):hw(k)}function od(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[En]="");var c=x({},o.styles);cc(i)&&(c.transform=V1({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Wo(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function mw(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Wo(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ns=He.styles;function Yl(e){var t=e[0],n=e[1],r=e.slice(4),i=ic(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(dn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(dn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var gw={found:!1,width:512,height:512};function vw(e,t){!Sm&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gl(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=qt()),new Promise(function(r,i){if(gt("missingIconAbstract"),n==="fa"){var a=Mm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ns[t]&&Ns[t][e]){var o=Ns[t][e];return r(Yl(o))}vw(e,t),r(x(x({},gw),{},{icon:N.showMissingIcons&&e?gt("missingIconAbstract")||{}:{}}))})}var sd=function(){},Ql=N.measurePerformance&&fa&&fa.mark&&fa.measure?fa:{mark:sd,measure:sd},Fr='FA "6.4.0"',yw=function(t){return Ql.mark("".concat(Fr," ").concat(t," begins")),function(){return jm(t)}},jm=function(t){Ql.mark("".concat(Fr," ").concat(t," ends")),Ql.measure("".concat(Fr," ").concat(t),"".concat(Fr," ").concat(t," begins"),"".concat(Fr," ").concat(t," ends"))},mc={begin:yw,end:jm},Aa=function(){};function ld(e){var t=e.getAttribute?e.getAttribute(En):null;return typeof t=="string"}function ww(e){var t=e.getAttribute?e.getAttribute(oc):null,n=e.getAttribute?e.getAttribute(sc):null;return t&&n}function _w(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function kw(){if(N.autoReplaceSvg===!0)return La.replace;var e=La[N.autoReplaceSvg];return e||La.replace}function Ew(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function Sw(e){return K.createElement(e)}function zm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ew:Sw:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(zm(o,{ceFn:r}))}),i}function Iw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var La={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(zm(i),n)}),n.getAttribute(En)===null&&N.keepOriginalSource){var r=K.createComment(Iw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~uc(n).indexOf(N.replacementClass))return La.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ji(s)}).join(`
`);n.setAttribute(En,""),n.innerHTML=o}};function ud(e){e()}function Fm(e,t){var n=typeof t=="function"?t:Aa;if(e.length===0)n();else{var r=ud;N.mutateApproach===T1&&(r=Xt.requestAnimationFrame||ud),r(function(){var i=kw(),a=mc.begin("mutate");e.map(i),a(),n()})}}var gc=!1;function $m(){gc=!0}function Xl(){gc=!1}var po=null;function cd(e){if(Zf&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Aa:t,r=e.nodeCallback,i=r===void 0?Aa:r,a=e.pseudoElementsCallback,o=a===void 0?Aa:a,s=e.observeMutationsRoot,l=s===void 0?K:s;po=new Zf(function(u){if(!gc){var c=qt();wr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ld(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ld(d.target)&&~D1.indexOf(d.attributeName))if(d.attributeName==="class"&&ww(d.target)){var p=Vo(uc(d.target)),g=p.prefix,w=p.iconName;d.target.setAttribute(oc,g||c),w&&d.target.setAttribute(sc,w)}else _w(d.target)&&i(d.target)})}}),wt&&po.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cw(){po&&po.disconnect()}function bw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function xw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Vo(uc(e));return i.prefix||(i.prefix=qt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=iw(i.prefix,e.innerText)||dc(i.prefix,Wl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Tw(e){var t=wr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ii()):(t["aria-hidden"]="true",t.focusable="false")),t}function Pw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xw(e),r=n.iconName,i=n.prefix,a=n.rest,o=Tw(e),s=Vl("parseNodeAttributes",{},e),l=t.styleParser?bw(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Nw=He.styles;function Bm(e){var t=N.autoReplaceSvg==="nest"?fd(e,{styleParser:!1}):fd(e);return~t.extra.classes.indexOf(Im)?gt("generateLayersText",e,t):gt("generateSvgReplacementMutation",e,t)}var Jt=new Set;lc.map(function(e){Jt.add("fa-".concat(e))});Object.keys(_i[H]).map(Jt.add.bind(Jt));Object.keys(_i[J]).map(Jt.add.bind(Jt));Jt=Mi(Jt);function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wt)return Promise.resolve();var n=K.documentElement.classList,r=function(d){return n.add("".concat(ed,"-").concat(d))},i=function(d){return n.remove("".concat(ed,"-").concat(d))},a=N.autoFetchSvg?Jt:lc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Nw));a.includes("fa")||a.push("fa");var o=[".".concat(Im,":not([").concat(En,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(En,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=wr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=mc.begin("onTree"),u=s.reduce(function(c,d){try{var p=Bm(d);p&&c.push(p)}catch(g){Sm||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Fm(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Rw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bm(e).then(function(n){n&&Fm([n],t)})}function Ow(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Kl(i||{})),e(r,x(x({},n),{},{mask:i}))}}var Aw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Je:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,g=n.titleId,w=g===void 0?null:g,v=n.classes,S=v===void 0?[]:v,h=n.attributes,f=h===void 0?{}:h,m=n.styles,y=m===void 0?{}:m;if(t){var k=t.prefix,C=t.iconName,b=t.icon;return Ko(x({type:"icon"},t),function(){return Sn("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?f["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(w||Ii()):(f["aria-hidden"]="true",f.focusable="false")),pc({icons:{main:Yl(b),mask:l?Yl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:x(x({},Je),i),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:f,styles:y,classes:S}})})}},Lw={mixout:function(){return{icon:Ow(Aw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dd,n.nodeCallback=Rw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return dd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,w){Promise.all([Gl(i,s),c.iconName?Gl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=ic(v,2),h=S[0],f=S[1];g([n,pc({icons:{main:h,mask:f},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Wo(s);l.length>0&&(i.style=l);var u;return cc(o)&&(u=gt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Dw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ko({type:"layer"},function(){Sn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Mi(a)).join(" ")},children:o}]})}}}},Mw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ko({type:"counter",content:n},function(){return Sn("beforeDOMElementCreation",{content:n,params:r}),mw({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Mi(s))}})})}}}},Uw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Je:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Ko({type:"text",content:n},function(){return Sn("beforeDOMElementCreation",{content:n,params:r}),od({content:n,transform:x(x({},Je),a),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Mi(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(_m){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,od({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},jw=new RegExp('"',"ug"),hd=[1105920,1112319];function zw(e){var t=e.replace(jw,""),n=J1(t,0),r=n>=hd[0]&&n<=hd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Wl(i?t[0]:t),isSecondary:r||i}}function pd(e,t){var n="".concat(x1).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=wr(e.children),o=a.filter(function(b){return b.getAttribute(Bl)===t})[0],s=Xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(O1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?J:H,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ki[p][l[2].toLowerCase()]:A1[p][u],w=zw(d),v=w.value,S=w.isSecondary,h=l[0].startsWith("FontAwesome"),f=dc(g,v),m=f;if(h){var y=aw(v);y.iconName&&y.prefix&&(f=y.iconName,g=y.prefix)}if(f&&!S&&(!o||o.getAttribute(oc)!==g||o.getAttribute(sc)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=Pw(),C=k.extra;C.attributes[Bl]=t,Gl(f,g).then(function(b){var R=pc(x(x({},k),{},{icons:{main:b,mask:hc()},prefix:g,iconName:m,extra:C,watchable:!0})),j=K.createElement("svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=R.map(function(L){return ji(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Fw(e){return Promise.all([pd(e,"::before"),pd(e,"::after")])}function $w(e){return e.parentNode!==document.head&&!~P1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Bl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function md(e){if(wt)return new Promise(function(t,n){var r=wr(e.querySelectorAll("*")).filter($w).map(Fw),i=mc.begin("searchPseudoElements");$m(),Promise.all(r).then(function(){i(),Xl(),t()}).catch(function(){i(),Xl(),n()})})}var Bw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=md,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;N.searchPseudoElements&&md(i)}}},gd=!1,Ww={mixout:function(){return{dom:{unwatch:function(){$m(),gd=!0}}}},hooks:function(){return{bootstrap:function(){cd(Vl("mutationObserverCallbacks",{}))},noAuto:function(){Cw()},watch:function(n){var r=n.observeMutationsRoot;gd?Xl():cd(Vl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hw={mixout:function(){return{parse:{transform:function(n){return vd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:x({},g.outer),children:[{tag:"g",attributes:x({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),g.path)}]}]}}}},Rs={x:0,y:0,width:"100%",height:"100%"};function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vw(e){return e.tag==="g"?e.children:[e]}var Kw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Vo(i.split(" ").map(function(o){return o.trim()})):hc();return a.prefix||(a.prefix=qt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,p=o.icon,g=H1({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:x(x({},Rs),{},{fill:"white"})},v=c.children?{children:c.children.map(yd)}:{},S={tag:"g",attributes:x({},g.inner),children:[yd(x({tag:c.tag,attributes:x(x({},c.attributes),g.path)},v))]},h={tag:"g",attributes:x({},g.outer),children:[S]},f="mask-".concat(s||Ii()),m="clip-".concat(s||Ii()),y={tag:"mask",attributes:x(x({},Rs),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Vw(p)},y]};return r.push(k,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Rs)}),{children:r,attributes:i}}}},Yw={provides:function(t){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Qw=[Y1,Lw,Dw,Mw,Uw,Bw,Ww,Hw,Kw,Yw,Gw];lw(Qw,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;var ql=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Xw=Oe.icon;Oe.layer;Oe.text;Oe.counter;var Wm={exports:{}},qw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jw=qw,Zw=Jw;function Hm(){}function Vm(){}Vm.resetWarningCache=Hm;var e_=function(){function e(r,i,a,o,s,l){if(l!==Zw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vm,resetWarningCache:Hm};return n.PropTypes=n,n};Wm.exports=e_();var t_=Wm.exports;const M=Kd(t_);function wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wd(Object(n),!0).forEach(function(r){Kn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mo(e){return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mo(e)}function Kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function r_(e,t){if(e==null)return{};var n=n_(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jl(e){return i_(e)||a_(e)||o_(e)||s_()}function i_(e){if(Array.isArray(e))return Zl(e)}function a_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function o_(e,t){if(e){if(typeof e=="string")return Zl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zl(e,t)}}function Zl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,w=e.border,v=e.listItem,S=e.flip,h=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":w,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Kn(t,"fa-".concat(h),typeof h<"u"&&h!==null),Kn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Kn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Kn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function u_(e){return e=e-0,e===e}function Km(e){return u_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var c_=["style"];function f_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Km(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[f_(i)]=a:t[i]=a,t},{})}function Ym(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ym(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=d_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Km(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=r_(n,c_);return i.attrs.style=Mt(Mt({},i.attrs.style),o),e.apply(void 0,[t.tag,Mt(Mt({},i.attrs),s)].concat(Jl(r)))}var Gm=!1;try{Gm=!0}catch{}function h_(){if(!Gm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _d(e){if(e&&mo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ql.icon)return ql.icon(e);if(e===null)return null;if(e&&mo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Os(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kn({},e,t):{}}var In=fu.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=_d(n),c=Os("classes",[].concat(Jl(l_(e)),Jl(a.split(" ")))),d=Os("transform",typeof e.transform=="string"?ql.transform(e.transform):e.transform),p=Os("mask",_d(r)),g=Xw(u,Mt(Mt(Mt(Mt({},c),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return h_("Could not find icon",u),null;var w=g.abstract,v={ref:t};return Object.keys(e).forEach(function(S){In.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),p_(w[0],v)});In.displayName="FontAwesomeIcon";In.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};In.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var p_=Ym.bind(null,fu.createElement);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},m_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[d],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):m_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new g_;const p=a<<2|s>>4;if(r.push(p),u!==64){const g=s<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class g_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v_=function(e){const t=Qm(e);return Xm.encodeByteArray(t,!0)},qm=function(e){return v_(e).replace(/\./g,"")},Jm=function(e){try{return Xm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=()=>y_().__FIREBASE_DEFAULTS__,__=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},k_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jm(e[1]);return t&&JSON.parse(t)},vc=()=>{try{return w_()||__()||k_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},E_=e=>{var t,n;return(n=(t=vc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},S_=()=>{var e;return(e=vc())===null||e===void 0?void 0:e.config},Zm=e=>{var t;return(t=vc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function C_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function b_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T_(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function P_(){try{return typeof indexedDB=="object"}catch{return!1}}function N_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="FirebaseError";class nn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=R_,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?O_(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new nn(i,s,r)}}function O_(e,t){return e.replace(A_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const A_=/\{\$([^}]+)}/g;function L_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function go(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(kd(a)&&kd(o)){if(!go(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $r(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Br(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function D_(e,t){const n=new M_(e,t);return n.subscribe.bind(n)}class M_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");U_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=As),i.error===void 0&&(i.error=As),i.complete===void 0&&(i.complete=As);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function As(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return e&&e._delegate?e._delegate:e}class dr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new I_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(F_(t))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=ln){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ln){return this.instances.has(t)}getOptions(t=ln){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:z_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ln){return this.component?this.component.multipleInstances?t:ln:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z_(e){return e===ln?void 0:e}function F_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new j_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const B_={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},W_=$.INFO,H_={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},V_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=H_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eg{constructor(t){this.name=t,this._logLevel=W_,this._logHandler=V_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?B_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const K_=(e,t)=>t.some(n=>e instanceof n);let Ed,Sd;function Y_(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G_(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,eu=new WeakMap,ng=new WeakMap,Ls=new WeakMap,yc=new WeakMap;function Q_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Kt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&tg.set(n,e)}).catch(()=>{}),yc.set(t,e),t}function X_(e){if(eu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});eu.set(e,t)}let tu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ng.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function q_(e){tu=e(tu)}function J_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ds(this),t,...n);return ng.set(r,t.sort?t.sort():[t]),Kt(r)}:G_().includes(e)?function(...t){return e.apply(Ds(this),t),Kt(tg.get(this))}:function(...t){return Kt(e.apply(Ds(this),t))}}function Z_(e){return typeof e=="function"?J_(e):(e instanceof IDBTransaction&&X_(e),K_(e,Y_())?new Proxy(e,tu):e)}function Kt(e){if(e instanceof IDBRequest)return Q_(e);if(Ls.has(e))return Ls.get(e);const t=Z_(e);return t!==e&&(Ls.set(e,t),yc.set(t,e)),t}const Ds=e=>yc.get(e);function ek(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Kt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const tk=["get","getKey","getAll","getAllKeys","count"],nk=["put","add","delete","clear"],Ms=new Map;function Id(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ms.get(t))return Ms.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=nk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tk.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Ms.set(t,a),a}q_(e=>({...e,get:(t,n,r)=>Id(t,n)||e.get(t,n,r),has:(t,n)=>!!Id(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ik(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ik(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nu="@firebase/app",Cd="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new eg("@firebase/app"),ak="@firebase/app-compat",ok="@firebase/analytics-compat",sk="@firebase/analytics",lk="@firebase/app-check-compat",uk="@firebase/app-check",ck="@firebase/auth",fk="@firebase/auth-compat",dk="@firebase/database",hk="@firebase/database-compat",pk="@firebase/functions",mk="@firebase/functions-compat",gk="@firebase/installations",vk="@firebase/installations-compat",yk="@firebase/messaging",wk="@firebase/messaging-compat",_k="@firebase/performance",kk="@firebase/performance-compat",Ek="@firebase/remote-config",Sk="@firebase/remote-config-compat",Ik="@firebase/storage",Ck="@firebase/storage-compat",bk="@firebase/firestore",xk="@firebase/firestore-compat",Tk="firebase",Pk="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",Nk={[nu]:"fire-core",[ak]:"fire-core-compat",[sk]:"fire-analytics",[ok]:"fire-analytics-compat",[uk]:"fire-app-check",[lk]:"fire-app-check-compat",[ck]:"fire-auth",[fk]:"fire-auth-compat",[dk]:"fire-rtdb",[hk]:"fire-rtdb-compat",[pk]:"fire-fn",[mk]:"fire-fn-compat",[gk]:"fire-iid",[vk]:"fire-iid-compat",[yk]:"fire-fcm",[wk]:"fire-fcm-compat",[_k]:"fire-perf",[kk]:"fire-perf-compat",[Ek]:"fire-rc",[Sk]:"fire-rc-compat",[Ik]:"fire-gcs",[Ck]:"fire-gcs-compat",[bk]:"fire-fst",[xk]:"fire-fst-compat","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,iu=new Map;function Rk(e,t){try{e.container.addComponent(t)}catch(n){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ci(e){const t=e.name;if(iu.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;iu.set(t,e);for(const n of vo.values())Rk(n,e);return!0}function rg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new zi("app","Firebase",Ok);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=Pk;function ig(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(n||(n=S_()),!n)throw Yt.create("no-options");const a=vo.get(i);if(a){if(go(n,a.options)&&go(r,a.config))return a;throw Yt.create("duplicate-app",{appName:i})}const o=new $_(i);for(const l of iu.values())o.addComponent(l);const s=new Ak(n,r,o);return vo.set(i,s),s}function Lk(e=ru){const t=vo.get(e);if(!t&&e===ru)return ig();if(!t)throw Yt.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let i=(r=Nk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cn.warn(s.join(" "));return}Ci(new dr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="firebase-heartbeat-database",Mk=1,bi="firebase-heartbeat-store";let Us=null;function ag(){return Us||(Us=ek(Dk,Mk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bi)}}}).catch(e=>{throw Yt.create("idb-open",{originalErrorMessage:e.message})})),Us}async function Uk(e){try{return(await ag()).transaction(bi).objectStore(bi).get(og(e))}catch(t){if(t instanceof nn)Cn.warn(t.message);else{const n=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(n.message)}}}async function bd(e,t){try{const r=(await ag()).transaction(bi,"readwrite");return await r.objectStore(bi).put(t,og(e)),r.done}catch(n){if(n instanceof nn)Cn.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function og(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=1024,zk=30*24*60*60*1e3;class Fk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=zk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xd(),{heartbeatsToSend:n,unsentEntries:r}=$k(this._heartbeatsCache.heartbeats),i=qm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xd(){return new Date().toISOString().substring(0,10)}function $k(e,t=jk){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Td(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Td(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bk{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P_()?N_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Td(e){return qm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(e){Ci(new dr("platform-logger",t=>new rk(t),"PRIVATE")),Ci(new dr("heartbeat",t=>new Fk(t),"PRIVATE")),tr(nu,Cd,e),tr(nu,Cd,"esm2017"),tr("fire-js","")}Wk("");function wc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function sg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hk=sg,lg=new zi("auth","Firebase",sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new eg("@firebase/auth");function Vk(e,...t){yo.logLevel<=$.WARN&&yo.warn(`Auth (${$i}): ${e}`,...t)}function Da(e,...t){yo.logLevel<=$.ERROR&&yo.error(`Auth (${$i}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e,...t){throw _c(e,...t)}function tt(e,...t){return _c(e,...t)}function Kk(e,t,n){const r=Object.assign(Object.assign({},Hk()),{[t]:n});return new zi("auth","Firebase",r).create(t,{appName:e.name})}function _c(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return lg.create(e,...t)}function O(e,t,...n){if(!e)throw _c(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Da(t),new Error(t)}function vt(e,t){e||st(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Yk(){return Pd()==="http:"||Pd()==="https:"}function Pd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yk()||b_()||"connection"in navigator)?navigator.onLine:!0}function Qk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this.shortDelay=t,this.longDelay=n,vt(n>t,"Short delay should be less than long delay!"),this.isMobile=C_()||x_()}get(){return Gk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e,t){vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new Bi(3e4,6e4);function _r(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nn(e,t,n,r,i={}){return cg(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Fi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ug.fetch()(fg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function cg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xk),t);try{const i=new Jk(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw _a(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kk(e,c,u);Ge(e,c)}}catch(i){if(i instanceof nn)throw i;Ge(e,"network-request-failed",{message:String(i)})}}async function Wi(e,t,n,r,i={}){const a=await Nn(e,t,n,r,i);return"mfaPendingCredential"in a&&Ge(e,"multi-factor-auth-required",{_serverResponse:a}),a}function fg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kc(e.config,i):`${e.config.apiScheme}://${i}`}class Jk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),qk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(e,t){return Nn(e,"POST","/v1/accounts:delete",t)}async function eE(e,t){return Nn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function tE(e,t=!1){const n=_t(e),r=await n.getIdToken(t),i=Ec(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ei(js(i.auth_time)),issuedAtTime:ei(js(i.iat)),expirationTime:ei(js(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function js(e){return Number(e)*1e3}function Ec(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jm(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nE(e){const t=Ec(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof nn&&rE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function rE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hr(e,eE(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?sE(a.providerUserInfo):[],s=oE(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new dg(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function aE(e){const t=_t(e);await wo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function sE(e){return e.map(t=>{var{providerId:n}=t,r=wc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(e,t){const n=await cg(e,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=fg(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ug.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await lE(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new xi;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(O(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=wc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new dg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await hr(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return tE(this,t)}reload(){return aE(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new gn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hr(this,Zk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:C,stsTokenManager:b}=n;O(m&&b,t,"internal-error");const R=xi.fromJSON(this.name,b);O(typeof m=="string",t,"internal-error"),St(d,t.name),St(p,t.name),O(typeof y=="boolean",t,"internal-error"),O(typeof k=="boolean",t,"internal-error"),St(g,t.name),St(w,t.name),St(v,t.name),St(S,t.name),St(h,t.name),St(f,t.name);const j=new gn({uid:m,auth:t,email:p,emailVerified:y,displayName:d,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:v,stsTokenManager:R,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(j.providerData=C.map(L=>Object.assign({},L))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new xi;i.updateFromServerResponse(n);const a=new gn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await wo(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;function lt(e){vt(e instanceof Function,"Expected a class definition");let t=Nd.get(e);return t?(vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hg.type="NONE";const Rd=hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e,t,n){return`firebase:${e}:${t}:${n}`}class nr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ma(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ma("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?gn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new nr(lt(Rd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||lt(Rd);const o=Ma(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=gn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new nr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new nr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yg(t))return"Blackberry";if(wg(t))return"Webos";if(Sc(t))return"Safari";if((t.includes("chrome/")||mg(t))&&!t.includes("edge/"))return"Chrome";if(vg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pg(e=ge()){return/firefox\//i.test(e)}function Sc(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mg(e=ge()){return/crios\//i.test(e)}function gg(e=ge()){return/iemobile/i.test(e)}function vg(e=ge()){return/android/i.test(e)}function yg(e=ge()){return/blackberry/i.test(e)}function wg(e=ge()){return/webos/i.test(e)}function Yo(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function uE(e=ge()){var t;return Yo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function cE(){return T_()&&document.documentMode===10}function _g(e=ge()){return Yo(e)||vg(e)||wg(e)||yg(e)||/windows phone/i.test(e)||gg(e)}function fE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e,t=[]){let n;switch(e){case"Browser":n=Od(ge());break;case"Worker":n=`${Od(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}async function Eg(e,t){return Nn(e,"GET","/v2/recaptchaConfig",_r(e,t))}function Ad(e){return e!==void 0&&e.enterprise!==void 0}class Sg{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ig(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=tt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",dE().appendChild(r)})}function hE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const pE="https://www.google.com/recaptcha/enterprise.js?render=",mE="recaptcha-enterprise";class Cg{constructor(t){this.type=mE,this.auth=kr(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{Eg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sg(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;Ad(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(u=>{s(u)})}catch(u){s(u)}}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&Ad(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ig(pE+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function _o(e,t,n,r=!1){const i=new Cg(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ld(this),this.idTokenSubscription=new Ld(this),this.beforeStateQueue=new gE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await wo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?_t(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(t))})}async initializeRecaptchaConfig(){const t=await Eg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Sg(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Cg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&lt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Vk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kr(e){return _t(e)}class Ld{constructor(t){this.auth=t,this.observer=null,this.addObserver=D_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(e,t){const n=rg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(go(a,t??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:t})}function wE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function _E(e,t,n){const r=kr(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=bg(t),{host:o,port:s}=kE(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EE()}function bg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function kE(e){const t=bg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Dd(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Dd(o)}}}function Dd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function EE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function SE(e,t){return Nn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(e,t){return Wi(e,"POST","/v1/accounts:signInWithPassword",_r(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(e,t){return Wi(e,"POST","/v1/accounts:signInWithEmailLink",_r(e,t))}async function CE(e,t){return Wi(e,"POST","/v1/accounts:signInWithEmailLink",_r(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Ic{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ti(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ti(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await _o(t,r,"signInWithPassword");return zs(t,i)}else return zs(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await _o(t,r,"signInWithPassword");return zs(t,a)}else return Promise.reject(i)});case"emailLink":return IE(t,{email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return SE(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CE(t,{idToken:n,email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(e,t){return Wi(e,"POST","/v1/accounts:signInWithIdp",_r(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="http://localhost";class bn extends Ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,rr(t,n)}buildRequest(){const t={requestUri:bE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Fi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TE(e){const t=$r(Br(e)).link,n=t?$r(Br(t)).deep_link_id:null,r=$r(Br(e)).deep_link_id;return(r?$r(Br(r)).link:null)||r||n||t||e}class Cc{constructor(t){var n,r,i,a,o,s;const l=$r(Br(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=xE((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=TE(t);try{return new Cc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.providerId=Er.PROVIDER_ID}static credential(t,n){return Ti._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Cc.parseLink(n);return O(r,"argument-error"),Ti._fromEmailAndCode(t,r.code,r.tenantId)}}Er.PROVIDER_ID="password";Er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends xg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Hi{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Hi{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Hi{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(e,t){return Wi(e,"POST","/v1/accounts:signUp",_r(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await gn._fromIdTokenResponse(t,r,i),o=Md(r);return new xn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Md(r);return new xn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Md(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends nn{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ko(t,n,r,i)}}function Tg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(e,a,t,r):a})}async function PE(e,t,n=!1){const r=await hr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await hr(e,Tg(r,i,t,e),n);O(a.idToken,r,"internal-error");const o=Ec(a.idToken);O(o,r,"internal-error");const{sub:s}=o;return O(e.uid===s,r,"user-mismatch"),xn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(e,t,n=!1){const r="signIn",i=await Tg(e,r,t),a=await xn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function RE(e,t){return Pg(kr(e),t)}async function OE(e,t,n){var r;const i=kr(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await _o(i,a,"signUpPassword");o=Fs(i,u)}else o=Fs(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await _o(i,a,"signUpPassword");return Fs(i,c)}else return Promise.reject(u)});const s=await o.catch(u=>Promise.reject(u)),l=await xn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function AE(e,t,n){return RE(_t(e),Er.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(e,t){return Nn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=_t(e),a={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await hr(r,LE(r.auth,a));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const s=r.providerData.find(({providerId:l})=>l==="password");s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ME(e,t,n,r){return _t(e).onIdTokenChanged(t,n,r)}function UE(e,t,n){return _t(e).beforeAuthStateChanged(t,n)}function jE(e){return _t(e).signOut()}const Eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){const e=ge();return Sc(e)||Yo(e)}const FE=1e3,$E=10;class Rg extends Ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zE()&&fE(),this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);cE()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,$E):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rg.type="LOCAL";const BE=Rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends Ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Og.type="SESSION";const Ag=Og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await WE(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=bc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function VE(e){nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function KE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function GE(){return Lg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebaseLocalStorageDb",QE=1,So="firebaseLocalStorage",Mg="fbase_key";class Vi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(e,t){return e.transaction([So],t?"readwrite":"readonly").objectStore(So)}function XE(){const e=indexedDB.deleteDatabase(Dg);return new Vi(e).toPromise()}function ou(){const e=indexedDB.open(Dg,QE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(So,{keyPath:Mg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(So)?t(r):(r.close(),await XE(),t(await ou()))})})}async function Ud(e,t,n){const r=Qo(e,!0).put({[Mg]:t,value:n});return new Vi(r).toPromise()}async function qE(e,t){const n=Qo(e,!1).get(t),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function jd(e,t){const n=Qo(e,!0).delete(t);return new Vi(n).toPromise()}const JE=800,ZE=3;class Ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ou(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ZE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(GE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await KE(),!this.activeServiceWorker)return;this.sender=new HE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||YE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ou();return await Ud(t,Eo,"1"),await jd(t,Eo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>qE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Qo(i,!1).getAll();return new Vi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ug.type="LOCAL";const eS=Ug;new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e,t){return t?lt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Ic{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function nS(e){return Pg(e.auth,new xc(e),e.bypassAuthState)}function rS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),NE(n,new xc(e),e.bypassAuthState)}async function iS(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),PE(n,new xc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nS;case"linkViaPopup":case"linkViaRedirect":return iS;case"reauthViaPopup":case"reauthViaRedirect":return rS;default:Ge(this.auth,"internal-error")}}resolve(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Bi(2e3,1e4);class Yn extends jg{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const t=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,aS.get())};t()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="pendingRedirect",Ua=new Map;class sS extends jg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ua.get(this.auth._key());if(!t){try{const r=await lS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ua.set(this.auth._key(),t)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lS(e,t){const n=fS(t),r=cS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uS(e,t){Ua.set(e._key(),t)}function cS(e){return lt(e._redirectPersistence)}function fS(e){return Ma(oS,e.config.apiKey,e.name)}async function dS(e,t,n=!1){const r=kr(e),i=tS(r,t),o=await new sS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=10*60*1e3;class pS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!mS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hS&&this.cachedEventUids.clear(),this.cachedEventUids.has(zd(t))}saveEventToCache(t){this.cachedEventUids.add(zd(t)),this.lastProcessedEventTime=Date.now()}}function zd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function mS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(e,t={}){return Nn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yS=/^https?/;async function wS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gS(e);for(const n of t)try{if(_S(n))return}catch{}Ge(e,"unauthorized-domain")}function _S(e){const t=au(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yS.test(n))return!1;if(vS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new Bi(3e4,6e4);function Fd(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ES(e){return new Promise((t,n)=>{var r,i,a;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(tt(e,"network-request-failed"))},timeout:kS.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=nt().gapi)===null||a===void 0)&&a.load)o();else{const s=hE("iframefcb");return nt()[s]=()=>{gapi.load?o():n(tt(e,"network-request-failed"))},Ig(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw ja=null,t})}let ja=null;function SS(e){return ja=ja||ES(e),ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new Bi(5e3,15e3),CS="__/auth/iframe",bS="emulator/auth/iframe",xS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PS(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kc(t,bS):`https://${e.config.authDomain}/${CS}`,r={apiKey:t.apiKey,appName:e.name,v:$i},i=TS.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Fi(r).slice(1)}`}async function NS(e){const t=await SS(e),n=nt().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:PS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xS,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=tt(e,"network-request-failed"),s=nt().setTimeout(()=>{a(o)},IS.get());function l(){nt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OS=500,AS=600,LS="_blank",DS="http://localhost";class $d{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MS(e,t,n,r=OS,i=AS){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},RS),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ge().toLowerCase();n&&(s=mg(u)?LS:n),pg(u)&&(t=t||DS,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(uE(u)&&s!=="_self")return US(t||"",s),new $d(null);const d=window.open(t||"",s,c);O(d,e,"popup-blocked");try{d.focus()}catch{}return new $d(d)}function US(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="__/auth/handler",zS="emulator/auth/handler",FS=encodeURIComponent("fac");async function Bd(e,t,n,r,i,a){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(t instanceof xg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",L_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(a||{}))o[c]=d}if(t instanceof Hi){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${FS}=${encodeURIComponent(l)}`:"";return`${$S(e)}?${Fi(s).slice(1)}${u}`}function $S({config:e}){return e.emulator?kc(e,zS):`https://${e.authDomain}/${jS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="webStorageSupport";class BS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=dS,this._overrideRedirectResult=uS}async _openPopup(t,n,r,i){var a;vt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Bd(t,n,r,au(),i);return MS(t,o,bc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await Bd(t,n,r,au(),i);return VE(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(vt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await NS(t),r=new pS(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($s,{type:$s},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[$s];o!==void 0&&n(!!o),Ge(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||Sc()||Yo()}}const WS=BS;var Wd="@firebase/auth",Hd="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KS(e){Ci(new dr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),O(!(s!=null&&s.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(e)},u=new vE(r,i,a,l);return wE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ci(new dr("auth-internal",t=>{const n=kr(t.getProvider("auth").getImmediate());return(r=>new HS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Wd,Hd,VS(e)),tr(Wd,Hd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=5*60,GS=Zm("authIdTokenMaxAge")||YS;let Vd=null;const QS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GS)return;const i=n==null?void 0:n.token;Vd!==i&&(Vd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fg(e=Lk()){const t=rg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yE(e,{popupRedirectResolver:WS,persistence:[eS,BE,Ag]}),r=Zm("authTokenSyncURL");if(r){const a=QS(r);UE(n,a,()=>a(n.currentUser)),ME(n,o=>a(o))}const i=E_("auth");return i&&_E(n,`http://${i}`),n}KS("Browser");var XS="firebase",qS="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(XS,qS,"app");const JS={apiKey:"AIzaSyDYczeJob4d3BjxmO4dE0G3zKobOaZFksA",authDomain:"algorithmvisualizer-a25eb.firebaseapp.com",projectId:"algorithmvisualizer-a25eb",storageBucket:"algorithmvisualizer-a25eb.appspot.com",messagingSenderId:"498666630867",appId:"1:498666630867:web:9a5cd8db38d6fffca42e26",measurementId:"G-1LZ96EJW3M"};ig(JS);const Xo=Fg();function ZS(e){const{name:t,dispatch:n,speed:r}=e,i=Bo();I.useState(10);function a(){jE(Xo).then(()=>{i("/login")}).catch(s=>{})}const o=s=>{n({type:"UPDATE_INPUT",payload:s.target.value})};return E.jsx(E.Fragment,{children:E.jsxs("div",{className:"header",children:[E.jsxs("div",{className:"slider",children:[E.jsx("p",{id:"rangeName",children:"Speed"}),E.jsx("input",{type:"range",min:"10",max:"50",value:r,onChange:o}),E.jsx("p",{id:"rangeValue",children:r})]}),E.jsx("button",{className:"btn1 btn2",onClick:a,children:"Log out"}),E.jsxs("h1",{children:[E.jsx(In,{icon:v1,className:"ubtn"}),t]})]})})}function eI({dispatch:e,ArrayBar:t}){const n=I.useRef(null),r=I.useRef(null);let i=(a,o)=>{o.current.nextElementSibling.classList.toggle("sub-menu"),o.current.querySelector(".dropdown").classList.toggle("fa-rotate-90")};return E.jsx(E.Fragment,{children:E.jsxs("div",{className:"side-bar",children:[E.jsxs("div",{id:"title",children:[E.jsx("h2",{children:"Welcome to"}),E.jsx("h1",{children:"Algorithm Vizualizer"})]}),E.jsxs("div",{className:"menu",children:[E.jsx("div",{className:"item",children:E.jsx(bt,{className:"sub-item",name:"newArray",onClick:()=>e({type:"newArray",payload:t}),children:" generate new array "})}),E.jsxs("div",{className:"item",children:[E.jsxs("a",{className:"sub-btn",ref:n,onClick:a=>i(a,n),children:["Sorting",E.jsx(In,{icon:Yf,className:"fas dropdown"})]}),E.jsxs("div",{className:"sub-menu",children:[E.jsx(bt,{className:"sub-item",name:"marge",onClick:()=>e({type:"marge",payload:!0}),children:" margeSort "}),E.jsx(bt,{className:"sub-item",name:"bubble",onClick:()=>e({type:"bubble",payload:!0}),children:" bouble sort "}),E.jsx(bt,{className:"sub-item",name:"selection",onClick:()=>e({type:"selection",payload:!0}),children:"selection sort "})]})]}),E.jsxs("div",{className:"item",children:[E.jsxs("a",{className:"sub-btn",ref:r,onClick:a=>i(a,r),children:["Searching",E.jsx(In,{icon:Yf,className:"fas dropdown"})]}),E.jsxs("div",{className:"sub-menu",children:[E.jsx(bt,{className:"sub-item",name:"binary",onClick:()=>e({type:"binary",value:!0}),children:"binary search"}),E.jsx(bt,{className:"sub-item",name:"linear",onClick:()=>e({type:"linear",value:!0}),children:"linear search"})]})]})]})]})})}function tI(){return E.jsx("div",{className:"responsive",children:" "})}Fg();const nI={animationSpeed:10,click:"",randomArray:[],NumberOfArrayBar:35};let rI=function(e,t){switch(t.type){case"newArray":const n=[];for(let r=0;r<e.NumberOfArrayBar;r++)n.push(Math.floor(Math.random()*500));return{...e,randomArray:n};case"marge":return{...e,click:"marge"};case"bubble":return{...e,click:"bubble"};case"selection":return{...e,click:"selection"};case"binary":return{...e,click:"binary"};case"linear":return{...e,click:"linear"};case"UPDATE_INPUT":return{...e,animationSpeed:t.payload}}};function iI(e){const[t,n]=I.useReducer(rI,nI);return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"header",children:E.jsx(ZS,{name:e.name,dispatch:n,speed:t.animationSpeed})}),E.jsxs("div",{className:"main",children:[E.jsx(tI,{}),E.jsx(g1,{speed:t.animationSpeed,newClick:t.click,newArray:t.randomArray}),E.jsx(mm,{speed:t.animationSpeed,newClick:t.click,newArray:t.randomArray})]}),E.jsx("div",{className:"Sidebar",children:E.jsx(eI,{dispatch:n,ArrayBar:t.NumberOfArrayBar})})]})}const aI="_container_8m24e_2",oI="_innerBox_8m24e_13",sI="_heading_8m24e_26",lI="_footer_8m24e_29",uI="_error_8m24e_36",Ar={container:aI,innerBox:oI,heading:sI,footer:lI,error:uI},cI="_container_9abtc_1",fI={container:cI};function ti(e){return E.jsx("div",{className:fI.container,children:E.jsx("input",{type:"text",...e})})}function dI(){const e=Bo(),[t,n]=I.useState({email:"",pass:""}),[r,i]=I.useState(""),a=()=>{if(!t.email||!t.pass){i("Fill all fields");return}i(""),AE(Xo,t.email,t.pass).then(async o=>{e("/")}).catch(o=>{i(o.message)})};return E.jsx("div",{className:Ar.container,children:E.jsxs("div",{className:Ar.innerBox,children:[E.jsx("h1",{className:Ar.heading,children:"Login"}),E.jsx(ti,{label:"Email",placeholder:"Enter email address",onChange:o=>{n(s=>({...s,email:o.target.value}))}}),E.jsx(ti,{label:"Password",placeholder:"Enter Password",onChange:o=>{n(s=>({...s,pass:o.target.value}))}}),E.jsxs("div",{className:Ar.footer,children:[E.jsx("b",{className:Ar.error,children:r}),E.jsx("button",{onClick:a,children:"Login"}),E.jsxs("p",{children:["Please sign up?",E.jsx("span",{children:E.jsx(bt,{to:"../signup",children:"signup"})})]})]})]})})}const hI="_container_11mxe_2",pI="_innerBox_11mxe_13",mI="_heading_11mxe_26",gI="_footer_11mxe_29",vI="_error_11mxe_36",Lr={container:hI,innerBox:pI,heading:mI,footer:gI,error:vI};function yI(){const e=Bo(),[t,n]=I.useState({name:"",email:"",pass:""}),[r,i]=I.useState(""),a=()=>{if(!t.name||!t.email||!t.pass){i("Fill all fields");return}i(""),OE(Xo,t.email,t.pass).then(async o=>{const s=o.user;await DE(s,{displayName:t.name}),e("/")}).catch(o=>{i(o.message)})};return E.jsx("div",{className:Lr.container,children:E.jsxs("div",{className:Lr.innerBox,children:[E.jsx("h1",{className:Lr.heading,children:"Sign up"}),E.jsx(ti,{label:"Name",placeholder:"Enter full Name",onChange:o=>n(s=>({...s,name:o.target.value}))}),E.jsx(ti,{label:"Email",placeholder:"Enter email address",onChange:o=>n(s=>({...s,email:o.target.value}))}),E.jsx(ti,{label:"Password",placeholder:"Enter Password",onChange:o=>n(s=>({...s,pass:o.target.value}))}),E.jsxs("div",{className:Lr.footer,children:[E.jsx("b",{className:Lr.error,children:r}),E.jsx("button",{onClick:a,children:"Sign Up"}),E.jsxs("p",{children:["Alrady have an account?",E.jsx("span",{children:E.jsx(bt,{to:"../login",children:"login"})})]})]})]})})}function wI(){const[e,t]=I.useState("");return I.useEffect(()=>{Xo.onAuthStateChanged(n=>{t(n?n.displayName:"")})},[]),E.jsx("div",{className:"App",children:E.jsx(d1,{children:E.jsxs(s1,{children:[E.jsx(zr,{path:"/",element:E.jsx(iI,{name:e}),children:"Home"}),E.jsx(zr,{path:"/login",element:E.jsx(dI,{}),children:"Home"}),E.jsx(zr,{path:"/signup",element:E.jsx(yI,{}),children:"Home"}),E.jsx(zr,{path:"/sortingVisualizer",element:E.jsx(mm,{})})]})})})}Ws.createRoot(document.getElementById("root")).render(E.jsx(wI,{}));
