(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function so(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},vn=[],ft=()=>{},Kh=()=>!1,Ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),io=t=>t.startsWith("onUpdate:"),be=Object.assign,ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zh=Object.prototype.hasOwnProperty,X=(t,e)=>zh.call(t,e),W=Array.isArray,Cn=t=>Ti(t)==="[object Map]",za=t=>Ti(t)==="[object Set]",V=t=>typeof t=="function",pe=t=>typeof t=="string",$t=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Ya=t=>(ue(t)||V(t))&&V(t.then)&&V(t.catch),Qa=Object.prototype.toString,Ti=t=>Qa.call(t),Yh=t=>Ti(t).slice(8,-1),Xa=t=>Ti(t)==="[object Object]",oo=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zn=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qh=/-(\w)/g,Ye=Ri(t=>t.replace(Qh,(e,n)=>n?n.toUpperCase():"")),Xh=/\B([A-Z])/g,ln=Ri(t=>t.replace(Xh,"-$1").toLowerCase()),xi=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),zi=Ri(t=>t?`on${xi(t)}`:""),Mt=(t,e)=>!Object.is(t,e),Ks=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ja=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let al;const Ni=()=>al||(al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?tf(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(pe(t)||ue(t))return t}const Jh=/;(?![^(]*\))/g,Zh=/:([^]+)/,ef=/\/\*[^]*?\*\//g;function tf(t){const e={};return t.replace(ef,"").split(Jh).forEach(n=>{if(n){const s=n.split(Zh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ds(t){let e="";if(pe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ds(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sf=so(nf);function Za(t){return!!t||t===""}const ec=t=>!!(t&&t.__v_isRef===!0),ps=t=>pe(t)?t:t==null?"":W(t)||ue(t)&&(t.toString===Qa||!V(t.toString))?ec(t)?ps(t.value):JSON.stringify(t,tc,2):String(t),tc=(t,e)=>ec(e)?tc(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Yi(s,r)+" =>"]=i,n),{})}:za(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yi(n))}:$t(e)?Yi(e):ue(e)&&!W(e)&&!Xa(e)?String(e):e,Yi=(t,e="")=>{var n;return $t(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class rf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function of(){return Ve}let oe;const Qi=new WeakSet;class nc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qi.has(this)&&(Qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ic(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cl(this),rc(this);const e=oe,n=tt;oe=this,tt=!0;try{return this.fn()}finally{oc(this),oe=e,tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uo(e);this.deps=this.depsTail=void 0,cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Er(this)&&this.run()}get dirty(){return Er(this)}}let sc=0,es,ts;function ic(t,e=!1){if(t.flags|=8,e){t.next=ts,ts=t;return}t.next=es,es=t}function ao(){sc++}function co(){if(--sc>0)return;if(ts){let e=ts;for(ts=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;es;){let e=es;for(es=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function rc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),uo(s),lf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Er(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_s))return;t.globalVersion=_s;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Er(t)){t.flags&=-3;return}const n=oe,s=tt;oe=t,tt=!0;try{rc(t);const i=t.fn(t._value);(e.version===0||Mt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{oe=n,tt=s,oc(t),t.flags&=-3}}function uo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)uo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let tt=!0;const ac=[];function Wt(){ac.push(tt),tt=!1}function Vt(){const t=ac.pop();tt=t===void 0?!0:t}function cl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=oe;oe=void 0;try{e()}finally{oe=n}}}let _s=0;class af{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ho{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!oe||!tt||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new af(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,cc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=s)}return n}trigger(e){this.version++,_s++,this.notify(e)}notify(e){ao();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{co()}}}function cc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)cc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const br=new WeakMap,Zt=Symbol(""),wr=Symbol(""),gs=Symbol("");function Re(t,e,n){if(tt&&oe){let s=br.get(t);s||br.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ho),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=br.get(t);if(!o){_s++;return}const l=a=>{a&&a.trigger()};if(ao(),e==="clear")o.forEach(l);else{const a=W(t),c=a&&oo(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===gs||!$t(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(gs)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Zt)),Cn(t)&&l(o.get(wr)));break;case"delete":a||(l(o.get(Zt)),Cn(t)&&l(o.get(wr)));break;case"set":Cn(t)&&l(o.get(Zt));break}}co()}function fn(t){const e=Q(t);return e===t?e:(Re(e,"iterate",gs),ze(t)?e:e.map(xe))}function Ai(t){return Re(t=Q(t),"iterate",gs),t}const cf={__proto__:null,[Symbol.iterator](){return Xi(this,Symbol.iterator,xe)},concat(...t){return fn(this).concat(...t.map(e=>W(e)?fn(e):e))},entries(){return Xi(this,"entries",t=>(t[1]=xe(t[1]),t))},every(t,e){return _t(this,"every",t,e,void 0,arguments)},filter(t,e){return _t(this,"filter",t,e,n=>n.map(xe),arguments)},find(t,e){return _t(this,"find",t,e,xe,arguments)},findIndex(t,e){return _t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _t(this,"findLast",t,e,xe,arguments)},findLastIndex(t,e){return _t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _t(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ji(this,"includes",t)},indexOf(...t){return Ji(this,"indexOf",t)},join(t){return fn(this).join(t)},lastIndexOf(...t){return Ji(this,"lastIndexOf",t)},map(t,e){return _t(this,"map",t,e,void 0,arguments)},pop(){return Vn(this,"pop")},push(...t){return Vn(this,"push",t)},reduce(t,...e){return ul(this,"reduce",t,e)},reduceRight(t,...e){return ul(this,"reduceRight",t,e)},shift(){return Vn(this,"shift")},some(t,e){return _t(this,"some",t,e,void 0,arguments)},splice(...t){return Vn(this,"splice",t)},toReversed(){return fn(this).toReversed()},toSorted(t){return fn(this).toSorted(t)},toSpliced(...t){return fn(this).toSpliced(...t)},unshift(...t){return Vn(this,"unshift",t)},values(){return Xi(this,"values",xe)}};function Xi(t,e,n){const s=Ai(t),i=s[e]();return s!==t&&!ze(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const uf=Array.prototype;function _t(t,e,n,s,i,r){const o=Ai(t),l=o!==t&&!ze(t),a=o[e];if(a!==uf[e]){const h=a.apply(t,r);return l?xe(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,xe(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function ul(t,e,n,s){const i=Ai(t);let r=n;return i!==t&&(ze(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,xe(l),a,t)}),i[e](r,...s)}function Ji(t,e,n){const s=Q(t);Re(s,"iterate",gs);const i=s[e](...n);return(i===-1||i===!1)&&_o(n[0])?(n[0]=Q(n[0]),s[e](...n)):i}function Vn(t,e,n=[]){Wt(),ao();const s=Q(t)[e].apply(t,n);return co(),Vt(),s}const hf=so("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($t));function ff(t){$t(t)||(t=String(t));const e=Q(this);return Re(e,"has",t),e.hasOwnProperty(t)}class hc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?bf:_c:r?pc:dc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let a;if(o&&(a=cf[n]))return a;if(n==="hasOwnProperty")return ff}const l=Reflect.get(e,n,Pe(e)?e:s);return($t(n)?uc.has(n):hf(n))||(i||Re(e,"get",n),r)?l:Pe(l)?o&&oo(n)?l:l.value:ue(l)?i?mc(l):Pi(l):l}}class fc extends hc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=en(r);if(!ze(s)&&!en(s)&&(r=Q(r),s=Q(s)),!W(e)&&Pe(r)&&!Pe(s))return a?!1:(r.value=s,!0)}const o=W(e)&&oo(n)?Number(n)<e.length:X(e,n),l=Reflect.set(e,n,s,Pe(e)?e:i);return e===Q(i)&&(o?Mt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!$t(n)||!uc.has(n))&&Re(e,"has",n),s}ownKeys(e){return Re(e,"iterate",W(e)?"length":Zt),Reflect.ownKeys(e)}}class df extends hc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const pf=new fc,_f=new df,gf=new fc(!0);const Sr=t=>t,Ws=t=>Reflect.getPrototypeOf(t);function mf(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=Cn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Sr:e?Ir:xe;return!e&&Re(r,"iterate",a?wr:Zt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Vs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yf(t,e){const n={get(i){const r=this.__v_raw,o=Q(r),l=Q(i);t||(Mt(i,l)&&Re(o,"get",i),Re(o,"get",l));const{has:a}=Ws(o),c=e?Sr:t?Ir:xe;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Re(Q(i),"iterate",Zt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Q(r),l=Q(i);return t||(Mt(i,l)&&Re(o,"has",i),Re(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=Q(l),c=e?Sr:t?Ir:xe;return!t&&Re(a,"iterate",Zt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return be(n,t?{add:Vs("add"),set:Vs("set"),delete:Vs("delete"),clear:Vs("clear")}:{add(i){!e&&!ze(i)&&!en(i)&&(i=Q(i));const r=Q(this);return Ws(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!ze(r)&&!en(r)&&(r=Q(r));const o=Q(this),{has:l,get:a}=Ws(o);let c=l.call(o,i);c||(i=Q(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Mt(r,u)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=Q(this),{has:o,get:l}=Ws(r);let a=o.call(r,i);a||(i=Q(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&yt(r,"delete",i,void 0),c},clear(){const i=Q(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=mf(i,t,e)}),n}function fo(t,e){const n=yf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const vf={get:fo(!1,!1)},Cf={get:fo(!1,!0)},Ef={get:fo(!0,!1)};const dc=new WeakMap,pc=new WeakMap,_c=new WeakMap,bf=new WeakMap;function wf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sf(t){return t.__v_skip||!Object.isExtensible(t)?0:wf(Yh(t))}function Pi(t){return en(t)?t:po(t,!1,pf,vf,dc)}function gc(t){return po(t,!1,gf,Cf,pc)}function mc(t){return po(t,!0,_f,Ef,_c)}function po(t,e,n,s,i){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Sf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function En(t){return en(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function en(t){return!!(t&&t.__v_isReadonly)}function ze(t){return!!(t&&t.__v_isShallow)}function _o(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function If(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Ja(t,"__v_skip",!0),t}const xe=t=>ue(t)?Pi(t):t,Ir=t=>ue(t)?mc(t):t;function Pe(t){return t?t.__v_isRef===!0:!1}function Tf(t){return yc(t,!1)}function Rf(t){return yc(t,!0)}function yc(t,e){return Pe(t)?t:new xf(t,e)}class xf{constructor(e,n){this.dep=new ho,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ze(e)||en(e);e=s?e:Q(e),Mt(e,n)&&(this._rawValue=e,this._value=s?e:xe(e),this.dep.trigger())}}function bn(t){return Pe(t)?t.value:t}const Nf={get:(t,e,n)=>e==="__v_raw"?t:bn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function vc(t){return En(t)?t:new Proxy(t,Nf)}class Af{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ho(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return ic(this,!0),!0}get value(){const e=this.dep.track();return lc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new Af(s,i,n)}const js={},ei=new WeakMap;let zt;function Of(t,e=!1,n=zt){if(n){let s=ei.get(n);s||ei.set(n,s=[]),s.push(t)}}function Df(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=O=>i?O:ze(O)||i===!1||i===0?vt(O,1):vt(O);let u,h,f,_,m=!1,w=!1;if(Pe(t)?(h=()=>t.value,m=ze(t)):En(t)?(h=()=>c(t),m=!0):W(t)?(w=!0,m=t.some(O=>En(O)||ze(O)),h=()=>t.map(O=>{if(Pe(O))return O.value;if(En(O))return c(O);if(V(O))return a?a(O,2):O()})):V(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){Wt();try{f()}finally{Vt()}}const O=zt;zt=u;try{return a?a(t,3,[_]):t(_)}finally{zt=O}}:h=ft,e&&i){const O=h,ne=i===!0?1/0:i;h=()=>vt(O(),ne)}const M=of(),D=()=>{u.stop(),M&&ro(M.effects,u)};if(r&&e){const O=e;e=(...ne)=>{O(...ne),D()}}let P=w?new Array(t.length).fill(js):js;const F=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const ne=u.run();if(i||m||(w?ne.some((we,he)=>Mt(we,P[he])):Mt(ne,P))){f&&f();const we=zt;zt=u;try{const he=[ne,P===js?void 0:w&&P[0]===js?[]:P,_];a?a(e,3,he):e(...he),P=ne}finally{zt=we}}}else u.run()};return l&&l(F),u=new nc(h),u.scheduler=o?()=>o(F,!1):F,_=O=>Of(O,!1,u),f=u.onStop=()=>{const O=ei.get(u);if(O){if(a)a(O,4);else for(const ne of O)ne();ei.delete(u)}},e?s?F(!0):P=u.run():o?o(F.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function vt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pe(t))vt(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(za(t)||Cn(t))t.forEach(s=>{vt(s,e,n)});else if(Xa(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Os(t,e,n,s){try{return s?t(...s):t()}catch(i){Oi(i,e,n)}}function dt(t,e,n,s){if(V(t)){const i=Os(t,e,n,s);return i&&Ya(i)&&i.catch(r=>{Oi(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}}function Oi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Wt(),Os(r,null,10,[t,a,c]),Vt();return}}kf(t,n,i,s,o)}function kf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const De=[];let ut=-1;const wn=[];let Ot=null,pn=0;const Cc=Promise.resolve();let ti=null;function Ec(t){const e=ti||Cc;return t?e.then(this?t.bind(this):t):e}function Mf(t){let e=ut+1,n=De.length;for(;e<n;){const s=e+n>>>1,i=De[s],r=ms(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function go(t){if(!(t.flags&1)){const e=ms(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=ms(n)?De.push(t):De.splice(Mf(e),0,t),t.flags|=1,bc()}}function bc(){ti||(ti=Cc.then(Sc))}function Lf(t){W(t)?wn.push(...t):Ot&&t.id===-1?Ot.splice(pn+1,0,t):t.flags&1||(wn.push(t),t.flags|=1),bc()}function hl(t,e,n=ut+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wc(t){if(wn.length){const e=[...new Set(wn)].sort((n,s)=>ms(n)-ms(s));if(wn.length=0,Ot){Ot.push(...e);return}for(Ot=e,pn=0;pn<Ot.length;pn++){const n=Ot[pn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,pn=0}}const ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sc(t){try{for(ut=0;ut<De.length;ut++){const e=De[ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ut<De.length;ut++){const e=De[ut];e&&(e.flags&=-2)}ut=-1,De.length=0,wc(),ti=null,(De.length||wn.length)&&Sc()}}let je=null,Ic=null;function ni(t){const e=je;return je=t,Ic=t&&t.type.__scopeId||null,e}function zs(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cl(-1);const r=ni(e);let o;try{o=t(...i)}finally{ni(r),s._d&&Cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qn(t,e){if(je===null)return t;const n=Li(je),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=se]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&vt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Wt(),dt(a,n,8,[t.el,l,t,e]),Vt())}}const Ff=Symbol("_vte"),Bf=t=>t.__isTeleport;function mo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tc(t,e){return V(t)?be({name:t.name},e,{setup:t}):t}function Rc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Tr(t,e,n,s,i=!1){if(W(t)){t.forEach((m,w)=>Tr(m,e&&(W(e)?e[w]:e),n,s,i));return}if(ns(s)&&!i)return;const r=s.shapeFlag&4?Li(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState,f=Q(h),_=h===se?()=>!1:m=>X(f,m);if(c!=null&&c!==a&&(pe(c)?(u[c]=null,_(c)&&(h[c]=null)):Pe(c)&&(c.value=null)),V(a))Os(a,l,12,[o,u]);else{const m=pe(a),w=Pe(a);if(m||w){const M=()=>{if(t.f){const D=m?_(a)?h[a]:u[a]:a.value;i?W(D)&&ro(D,r):W(D)?D.includes(r)||D.push(r):m?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,_(a)&&(h[a]=o)):w&&(a.value=o,t.k&&(u[t.k]=o))};o?(M.id=-1,We(M,n)):M()}}}Ni().requestIdleCallback;Ni().cancelIdleCallback;const ns=t=>!!t.type.__asyncLoader,xc=t=>t.type.__isKeepAlive;function Hf(t,e){Nc(t,"a",e)}function Uf(t,e){Nc(t,"da",e)}function Nc(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Di(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xc(i.parent.vnode)&&$f(s,e,n,i),i=i.parent}}function $f(t,e,n,s){const i=Di(e,t,s,!0);Ac(()=>{ro(s[e],i)},n)}function Di(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Wt();const l=Ds(n),a=dt(e,n,t,o);return l(),Vt(),a});return s?i.unshift(r):i.push(r),r}}const Tt=t=>(e,n=Ae)=>{(!vs||t==="sp")&&Di(t,(...s)=>e(...s),n)},Wf=Tt("bm"),Vf=Tt("m"),jf=Tt("bu"),Gf=Tt("u"),qf=Tt("bum"),Ac=Tt("um"),Kf=Tt("sp"),zf=Tt("rtg"),Yf=Tt("rtc");function Qf(t,e=Ae){Di("ec",t,e)}const Xf="components";function Rr(t,e){return Zf(Xf,t,!0,e)||t}const Jf=Symbol.for("v-ndc");function Zf(t,e,n=!0,s=!1){const i=je||Ae;if(i){const r=i.type;{const l=Ud(r,!1);if(l&&(l===e||l===Ye(e)||l===xi(Ye(e))))return r}const o=fl(i[t]||r[t],e)||fl(i.appContext[t],e);return!o&&s?r:o}}function fl(t,e){return t&&(t[e]||t[Ye(e)]||t[xi(Ye(e))])}function xr(t,e,n,s){let i;const r=n,o=W(t);if(o||pe(t)){const l=o&&En(t);let a=!1;l&&(a=!ze(t),t=Ai(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?xe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ue(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Nr=t=>t?Qc(t)?Li(t):Nr(t.parent):null,ss=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nr(t.parent),$root:t=>Nr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yo(t),$forceUpdate:t=>t.f||(t.f=()=>{go(t.update)}),$nextTick:t=>t.n||(t.n=Ec.bind(t.proxy)),$watch:t=>Cd.bind(t)}),Zi=(t,e)=>t!==se&&!t.__isScriptSetup&&X(t,e),ed={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Zi(s,e))return o[e]=1,s[e];if(i!==se&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==se&&X(n,e))return o[e]=4,n[e];Ar&&(o[e]=0)}}const u=ss[e];let h,f;if(u)return e==="$attrs"&&Re(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&X(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Zi(i,e)?(i[e]=n,!0):s!==se&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&X(t,o)||Zi(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(ss,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ar=!0;function td(t){const e=yo(t),n=t.proxy,s=t.ctx;Ar=!1,e.beforeCreate&&pl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:w,deactivated:M,beforeDestroy:D,beforeUnmount:P,destroyed:F,unmounted:O,render:ne,renderTracked:we,renderTriggered:he,errorCaptured:it,serverPrefetch:xt,expose:rt,inheritAttrs:Nt,components:Gt,directives:ot,filters:$n}=e;if(c&&nd(c,s,null),o)for(const te in o){const Y=o[te];V(Y)&&(s[te]=Y.bind(n))}if(i){const te=i.call(n,n);ue(te)&&(t.data=Pi(te))}if(Ar=!0,r)for(const te in r){const Y=r[te],pt=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):ft,At=!V(Y)&&V(Y.set)?Y.set.bind(n):ft,lt=Xe({get:pt,set:At});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>lt.value,set:ke=>lt.value=ke})}if(l)for(const te in l)Pc(l[te],s,n,te);if(a){const te=V(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Y=>{Ys(Y,te[Y])})}u&&pl(u,t,"c");function ge(te,Y){W(Y)?Y.forEach(pt=>te(pt.bind(n))):Y&&te(Y.bind(n))}if(ge(Wf,h),ge(Vf,f),ge(jf,_),ge(Gf,m),ge(Hf,w),ge(Uf,M),ge(Qf,it),ge(Yf,we),ge(zf,he),ge(qf,P),ge(Ac,O),ge(Kf,xt),W(rt))if(rt.length){const te=t.exposed||(t.exposed={});rt.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:pt=>n[Y]=pt})})}else t.exposed||(t.exposed={});ne&&t.render===ft&&(t.render=ne),Nt!=null&&(t.inheritAttrs=Nt),Gt&&(t.components=Gt),ot&&(t.directives=ot),xt&&Rc(t)}function nd(t,e,n=ft){W(t)&&(t=Pr(t));for(const s in t){const i=t[s];let r;ue(i)?"default"in i?r=Et(i.from||s,i.default,!0):r=Et(i.from||s):r=Et(i),Pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pl(t,e,n){dt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pc(t,e,n,s){let i=s.includes(".")?Gc(n,s):()=>n[s];if(pe(t)){const r=e[t];V(r)&&Qs(i,r)}else if(V(t))Qs(i,t.bind(n));else if(ue(t))if(W(t))t.forEach(r=>Pc(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&Qs(i,r,t)}}function yo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>si(a,c,o,!0)),si(a,e,o)),ue(e)&&r.set(e,a),a}function si(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&si(t,r,n,!0),i&&i.forEach(o=>si(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=sd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sd={data:_l,props:gl,emits:gl,methods:Xn,computed:Xn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Xn,directives:Xn,watch:rd,provide:_l,inject:id};function _l(t,e){return e?t?function(){return be(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function id(t,e){return Xn(Pr(t),Pr(e))}function Pr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Xn(t,e){return t?be(Object.create(null),t,e):e}function gl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:be(Object.create(null),dl(t),dl(e??{})):e}function rd(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function Oc(){return{app:null,config:{isNativeTag:Kh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let od=0;function ld(t,e){return function(s,i=null){V(s)||(s=be({},s)),i!=null&&!ue(i)&&(i=null);const r=Oc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:od++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Wd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...h)):V(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const _=c._ceVNode||Ee(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(_,u):t(_,u,f),a=!0,c._container=u,u.__vue_app__=c,Li(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(dt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Sn;Sn=c;try{return u()}finally{Sn=h}}};return c}}let Sn=null;function Ys(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function Et(t,e,n=!1){const s=Ae||je;if(s||Sn){const i=Sn?Sn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const Dc={},kc=()=>Object.create(Dc),Mc=t=>Object.getPrototypeOf(t)===Dc;function ad(t,e,n,s=!1){const i={},r=kc();t.propsDefaults=Object.create(null),Lc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:gc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ki(t.emitsOptions,f))continue;const _=e[f];if(a)if(X(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=Ye(f);i[m]=Or(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Lc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!X(e,h)&&((u=ln(h))===h||!X(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Or(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&yt(t.attrs,"set","")}function Lc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Zn(a))continue;const c=e[a];let u;i&&X(i,u=Ye(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ki(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Q(n),c=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Or(i,a,h,c[h],t,!X(c,h))}}return o}function Or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ds(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===ln(n))&&(s=!0))}return s}const ud=new WeakMap;function Fc(t,e,n=!1){const s=n?ud:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[f,_]=Fc(h,e,!0);be(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ue(t)&&s.set(t,vn),vn;if(W(r))for(let u=0;u<r.length;u++){const h=Ye(r[u]);ml(h)&&(o[h]=se)}else if(r)for(const u in r){const h=Ye(u);if(ml(h)){const f=r[u],_=o[h]=W(f)||V(f)?{type:f}:be({},f),m=_.type;let w=!1,M=!0;if(W(m))for(let D=0;D<m.length;++D){const P=m[D],F=V(P)&&P.name;if(F==="Boolean"){w=!0;break}else F==="String"&&(M=!1)}else w=V(m)&&m.name==="Boolean";_[0]=w,_[1]=M,(w||X(_,"default"))&&l.push(h)}}const c=[o,l];return ue(t)&&s.set(t,c),c}function ml(t){return t[0]!=="$"&&!Zn(t)}const Bc=t=>t[0]==="_"||t==="$stable",vo=t=>W(t)?t.map(ht):[ht(t)],hd=(t,e,n)=>{if(e._n)return e;const s=zs((...i)=>vo(e(...i)),n);return s._c=!1,s},Hc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Bc(i))continue;const r=t[i];if(V(r))e[i]=hd(i,r,s);else if(r!=null){const o=vo(r);e[i]=()=>o}}},Uc=(t,e)=>{const n=vo(e);t.slots.default=()=>n},$c=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},fd=(t,e,n)=>{const s=t.slots=kc();if(t.vnode.shapeFlag&32){const i=e._;i?($c(s,e,n),n&&Ja(s,"_",i,!0)):Hc(e,s)}else e&&Uc(t,e)},dd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:$c(i,e,n):(r=!e.$stable,Hc(e,i)),o=e}else e&&(Uc(t,e),o={default:1});if(r)for(const l in i)!Bc(l)&&o[l]==null&&delete i[l]},We=Rd;function pd(t){return _d(t)}function _d(t,e){const n=Ni();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=ft,insertStaticContent:m}=t,w=(d,p,g,C=null,y=null,E=null,R=void 0,T=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!jn(d,p)&&(C=v(d),ke(d,y,E,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:N}=p;switch(b){case Mi:M(d,p,g,C);break;case tn:D(d,p,g,C);break;case nr:d==null&&P(p,g,C,R);break;case Ke:Gt(d,p,g,C,y,E,R,T,I);break;default:N&1?ne(d,p,g,C,y,E,R,T,I):N&6?ot(d,p,g,C,y,E,R,T,I):(N&64||N&128)&&b.process(d,p,g,C,y,E,R,T,I,k)}B!=null&&y&&Tr(B,d&&d.ref,E,p||d,!p)},M=(d,p,g,C)=>{if(d==null)s(p.el=l(p.children),g,C);else{const y=p.el=d.el;p.children!==d.children&&c(y,p.children)}},D=(d,p,g,C)=>{d==null?s(p.el=a(p.children||""),g,C):p.el=d.el},P=(d,p,g,C)=>{[d.el,d.anchor]=m(d.children,p,g,C,d.el,d.anchor)},F=({el:d,anchor:p},g,C)=>{let y;for(;d&&d!==p;)y=f(d),s(d,g,C),d=y;s(p,g,C)},O=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},ne=(d,p,g,C,y,E,R,T,I)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?we(p,g,C,y,E,R,T,I):xt(d,p,y,E,R,T,I)},we=(d,p,g,C,y,E,R,T)=>{let I,b;const{props:B,shapeFlag:N,transition:L,dirs:$}=d;if(I=d.el=o(d.type,E,B&&B.is,B),N&8?u(I,d.children):N&16&&it(d.children,I,null,C,y,er(d,E),R,T),$&&qt(d,null,C,"created"),he(I,d,d.scopeId,R,C),B){for(const re in B)re!=="value"&&!Zn(re)&&r(I,re,null,B[re],E,C);"value"in B&&r(I,"value",null,B.value,E),(b=B.onVnodeBeforeMount)&&ct(b,C,d)}$&&qt(d,null,C,"beforeMount");const K=gd(y,L);K&&L.beforeEnter(I),s(I,p,g),((b=B&&B.onVnodeMounted)||K||$)&&We(()=>{b&&ct(b,C,d),K&&L.enter(I),$&&qt(d,null,C,"mounted")},y)},he=(d,p,g,C,y)=>{if(g&&_(d,g),C)for(let E=0;E<C.length;E++)_(d,C[E]);if(y){let E=y.subTree;if(p===E||Kc(E.type)&&(E.ssContent===p||E.ssFallback===p)){const R=y.vnode;he(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},it=(d,p,g,C,y,E,R,T,I=0)=>{for(let b=I;b<d.length;b++){const B=d[b]=T?Dt(d[b]):ht(d[b]);w(null,B,p,g,C,y,E,R,T)}},xt=(d,p,g,C,y,E,R)=>{const T=p.el=d.el;let{patchFlag:I,dynamicChildren:b,dirs:B}=p;I|=d.patchFlag&16;const N=d.props||se,L=p.props||se;let $;if(g&&Kt(g,!1),($=L.onVnodeBeforeUpdate)&&ct($,g,p,d),B&&qt(p,d,g,"beforeUpdate"),g&&Kt(g,!0),(N.innerHTML&&L.innerHTML==null||N.textContent&&L.textContent==null)&&u(T,""),b?rt(d.dynamicChildren,b,T,g,C,er(p,y),E):R||Y(d,p,T,null,g,C,er(p,y),E,!1),I>0){if(I&16)Nt(T,N,L,g,y);else if(I&2&&N.class!==L.class&&r(T,"class",null,L.class,y),I&4&&r(T,"style",N.style,L.style,y),I&8){const K=p.dynamicProps;for(let re=0;re<K.length;re++){const Z=K[re],He=N[Z],Te=L[Z];(Te!==He||Z==="value")&&r(T,Z,He,Te,y,g)}}I&1&&d.children!==p.children&&u(T,p.children)}else!R&&b==null&&Nt(T,N,L,g,y);(($=L.onVnodeUpdated)||B)&&We(()=>{$&&ct($,g,p,d),B&&qt(p,d,g,"updated")},C)},rt=(d,p,g,C,y,E,R)=>{for(let T=0;T<p.length;T++){const I=d[T],b=p[T],B=I.el&&(I.type===Ke||!jn(I,b)||I.shapeFlag&70)?h(I.el):g;w(I,b,B,null,C,y,E,R,!0)}},Nt=(d,p,g,C,y)=>{if(p!==g){if(p!==se)for(const E in p)!Zn(E)&&!(E in g)&&r(d,E,p[E],null,y,C);for(const E in g){if(Zn(E))continue;const R=g[E],T=p[E];R!==T&&E!=="value"&&r(d,E,T,R,y,C)}"value"in g&&r(d,"value",p.value,g.value,y)}},Gt=(d,p,g,C,y,E,R,T,I)=>{const b=p.el=d?d.el:l(""),B=p.anchor=d?d.anchor:l("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:$}=p;$&&(T=T?T.concat($):$),d==null?(s(b,g,C),s(B,g,C),it(p.children||[],g,B,y,E,R,T,I)):N>0&&N&64&&L&&d.dynamicChildren?(rt(d.dynamicChildren,L,g,y,E,R,T),(p.key!=null||y&&p===y.subTree)&&Wc(d,p,!0)):Y(d,p,g,B,y,E,R,T,I)},ot=(d,p,g,C,y,E,R,T,I)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?y.ctx.activate(p,g,C,R,I):$n(p,g,C,y,E,R,I):cn(d,p,I)},$n=(d,p,g,C,y,E,R)=>{const T=d.component=Md(d,C,y);if(xc(d)&&(T.ctx.renderer=k),Ld(T,!1,R),T.asyncDep){if(y&&y.registerDep(T,ge,R),!d.el){const I=T.subTree=Ee(tn);D(null,I,p,g)}}else ge(T,d,p,g,y,E,R)},cn=(d,p,g)=>{const C=p.component=d.component;if(Id(d,p,g))if(C.asyncDep&&!C.asyncResolved){te(C,p,g);return}else C.next=p,C.update();else p.el=d.el,C.vnode=p},ge=(d,p,g,C,y,E,R)=>{const T=()=>{if(d.isMounted){let{next:N,bu:L,u:$,parent:K,vnode:re}=d;{const Ue=Vc(d);if(Ue){N&&(N.el=re.el,te(d,N,R)),Ue.asyncDep.then(()=>{d.isUnmounted||T()});return}}let Z=N,He;Kt(d,!1),N?(N.el=re.el,te(d,N,R)):N=re,L&&Ks(L),(He=N.props&&N.props.onVnodeBeforeUpdate)&&ct(He,K,N,re),Kt(d,!0);const Te=tr(d),Qe=d.subTree;d.subTree=Te,w(Qe,Te,h(Qe.el),v(Qe),d,y,E),N.el=Te.el,Z===null&&Td(d,Te.el),$&&We($,y),(He=N.props&&N.props.onVnodeUpdated)&&We(()=>ct(He,K,N,re),y)}else{let N;const{el:L,props:$}=p,{bm:K,m:re,parent:Z,root:He,type:Te}=d,Qe=ns(p);if(Kt(d,!1),K&&Ks(K),!Qe&&(N=$&&$.onVnodeBeforeMount)&&ct(N,Z,p),Kt(d,!0),L&&fe){const Ue=()=>{d.subTree=tr(d),fe(L,d.subTree,d,y,null)};Qe&&Te.__asyncHydrate?Te.__asyncHydrate(L,d,Ue):Ue()}else{He.ce&&He.ce._injectChildStyle(Te);const Ue=d.subTree=tr(d);w(null,Ue,g,C,d,y,E),p.el=Ue.el}if(re&&We(re,y),!Qe&&(N=$&&$.onVnodeMounted)){const Ue=p;We(()=>ct(N,Z,Ue),y)}(p.shapeFlag&256||Z&&ns(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&We(d.a,y),d.isMounted=!0,p=g=C=null}};d.scope.on();const I=d.effect=new nc(T);d.scope.off();const b=d.update=I.run.bind(I),B=d.job=I.runIfDirty.bind(I);B.i=d,B.id=d.uid,I.scheduler=()=>go(B),Kt(d,!0),b()},te=(d,p,g)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,cd(d,p.props,C,g),dd(d,p.children,g),Wt(),hl(d),Vt()},Y=(d,p,g,C,y,E,R,T,I=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){At(b,N,g,C,y,E,R,T,I);return}else if(L&256){pt(b,N,g,C,y,E,R,T,I);return}}$&8?(B&16&&qe(b,y,E),N!==b&&u(g,N)):B&16?$&16?At(b,N,g,C,y,E,R,T,I):qe(b,y,E,!0):(B&8&&u(g,""),$&16&&it(N,g,C,y,E,R,T,I))},pt=(d,p,g,C,y,E,R,T,I)=>{d=d||vn,p=p||vn;const b=d.length,B=p.length,N=Math.min(b,B);let L;for(L=0;L<N;L++){const $=p[L]=I?Dt(p[L]):ht(p[L]);w(d[L],$,g,null,y,E,R,T,I)}b>B?qe(d,y,E,!0,!1,N):it(p,g,C,y,E,R,T,I,N)},At=(d,p,g,C,y,E,R,T,I)=>{let b=0;const B=p.length;let N=d.length-1,L=B-1;for(;b<=N&&b<=L;){const $=d[b],K=p[b]=I?Dt(p[b]):ht(p[b]);if(jn($,K))w($,K,g,null,y,E,R,T,I);else break;b++}for(;b<=N&&b<=L;){const $=d[N],K=p[L]=I?Dt(p[L]):ht(p[L]);if(jn($,K))w($,K,g,null,y,E,R,T,I);else break;N--,L--}if(b>N){if(b<=L){const $=L+1,K=$<B?p[$].el:C;for(;b<=L;)w(null,p[b]=I?Dt(p[b]):ht(p[b]),g,K,y,E,R,T,I),b++}}else if(b>L)for(;b<=N;)ke(d[b],y,E,!0),b++;else{const $=b,K=b,re=new Map;for(b=K;b<=L;b++){const $e=p[b]=I?Dt(p[b]):ht(p[b]);$e.key!=null&&re.set($e.key,b)}let Z,He=0;const Te=L-K+1;let Qe=!1,Ue=0;const Wn=new Array(Te);for(b=0;b<Te;b++)Wn[b]=0;for(b=$;b<=N;b++){const $e=d[b];if(He>=Te){ke($e,y,E,!0);continue}let at;if($e.key!=null)at=re.get($e.key);else for(Z=K;Z<=L;Z++)if(Wn[Z-K]===0&&jn($e,p[Z])){at=Z;break}at===void 0?ke($e,y,E,!0):(Wn[at-K]=b+1,at>=Ue?Ue=at:Qe=!0,w($e,p[at],g,null,y,E,R,T,I),He++)}const ol=Qe?md(Wn):vn;for(Z=ol.length-1,b=Te-1;b>=0;b--){const $e=K+b,at=p[$e],ll=$e+1<B?p[$e+1].el:C;Wn[b]===0?w(null,at,g,ll,y,E,R,T,I):Qe&&(Z<0||b!==ol[Z]?lt(at,g,ll,2):Z--)}}},lt=(d,p,g,C,y=null)=>{const{el:E,type:R,transition:T,children:I,shapeFlag:b}=d;if(b&6){lt(d.component.subTree,p,g,C);return}if(b&128){d.suspense.move(p,g,C);return}if(b&64){R.move(d,p,g,k);return}if(R===Ke){s(E,p,g);for(let N=0;N<I.length;N++)lt(I[N],p,g,C);s(d.anchor,p,g);return}if(R===nr){F(d,p,g);return}if(C!==2&&b&1&&T)if(C===0)T.beforeEnter(E),s(E,p,g),We(()=>T.enter(E),y);else{const{leave:N,delayLeave:L,afterLeave:$}=T,K=()=>s(E,p,g),re=()=>{N(E,()=>{K(),$&&$()})};L?L(E,K,re):re()}else s(E,p,g)},ke=(d,p,g,C=!1,y=!1)=>{const{type:E,props:R,ref:T,children:I,dynamicChildren:b,shapeFlag:B,patchFlag:N,dirs:L,cacheIndex:$}=d;if(N===-2&&(y=!1),T!=null&&Tr(T,null,g,d,!0),$!=null&&(p.renderCache[$]=void 0),B&256){p.ctx.deactivate(d);return}const K=B&1&&L,re=!ns(d);let Z;if(re&&(Z=R&&R.onVnodeBeforeUnmount)&&ct(Z,p,d),B&6)$s(d.component,g,C);else{if(B&128){d.suspense.unmount(g,C);return}K&&qt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,g,k,C):b&&!b.hasOnce&&(E!==Ke||N>0&&N&64)?qe(b,p,g,!1,!0):(E===Ke&&N&384||!y&&B&16)&&qe(I,p,g),C&&un(d)}(re&&(Z=R&&R.onVnodeUnmounted)||K)&&We(()=>{Z&&ct(Z,p,d),K&&qt(d,null,p,"unmounted")},g)},un=d=>{const{type:p,el:g,anchor:C,transition:y}=d;if(p===Ke){hn(g,C);return}if(p===nr){O(d);return}const E=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:T}=y,I=()=>R(g,E);T?T(d.el,E,I):I()}else E()},hn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},$s=(d,p,g)=>{const{bum:C,scope:y,job:E,subTree:R,um:T,m:I,a:b}=d;yl(I),yl(b),C&&Ks(C),y.stop(),E&&(E.flags|=8,ke(R,d,p,g)),T&&We(T,p),We(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(d,p,g,C=!1,y=!1,E=0)=>{for(let R=E;R<d.length;R++)ke(d[R],p,g,C,y)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[Ff];return g?f(g):p};let A=!1;const x=(d,p,g)=>{d==null?p._vnode&&ke(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,g),p._vnode=d,A||(A=!0,hl(),wc(),A=!1)},k={p:w,um:ke,m:lt,r:un,mt:$n,mc:it,pc:Y,pbc:rt,n:v,o:t};let J,fe;return{render:x,hydrate:J,createApp:ld(x,J)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wc(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Dt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Wc(o,l)),l.type===Mi&&(l.el=o.el)}}function md(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Vc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vc(e)}function yl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yd=Symbol.for("v-scx"),vd=()=>Et(yd);function Qs(t,e,n){return jc(t,e,n)}function jc(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=be({},n),a=e&&s||!e&&r!=="post";let c;if(vs){if(r==="sync"){const _=vd();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=ft,_.resume=ft,_.pause=ft,_}}const u=Ae;l.call=(_,m,w)=>dt(_,u,m,w);let h=!1;r==="post"?l.scheduler=_=>{We(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():go(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Df(t,e,l);return vs&&(c?c.push(f):a&&f()),f}function Cd(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Gc(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=Ds(this),l=jc(i,r.bind(s),n);return o(),l}function Gc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ye(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function bd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&Ed(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>pe(u)?u.trim():u)),o.number&&(i=n.map(Cr)));let l,a=s[l=zi(e)]||s[l=zi(Ye(e))];!a&&r&&(a=s[l=zi(ln(e))]),a&&dt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,dt(c,t,6,i)}}function qc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=qc(c,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ue(t)&&s.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):be(o,r),ue(t)&&s.set(t,o),o)}function ki(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,ln(e))||X(t,e))}function tr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:m,inheritAttrs:w}=t,M=ni(t);let D,P;try{if(n.shapeFlag&4){const O=i||s,ne=O;D=ht(c.call(ne,O,u,h,_,f,m)),P=l}else{const O=e;D=ht(O.length>1?O(h,{attrs:l,slots:o,emit:a}):O(h,null)),P=e.props?l:wd(l)}}catch(O){is.length=0,Oi(O,t,1),D=Ee(tn)}let F=D;if(P&&w!==!1){const O=Object.keys(P),{shapeFlag:ne}=F;O.length&&ne&7&&(r&&O.some(io)&&(P=Sd(P,r)),F=Nn(F,P,!1,!0))}return n.dirs&&(F=Nn(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&mo(F,n.transition),D=F,ni(M),D}const wd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},Sd=(t,e)=>{const n={};for(const s in t)(!io(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Id(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?vl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ki(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?vl(s,o,c):!0:!!o;return!1}function vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function Td({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kc=t=>t.__isSuspense;function Rd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Lf(t)}const Ke=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),nr=Symbol.for("v-stc"),is=[];let Ge=null;function ye(t=!1){is.push(Ge=t?null:[])}function xd(){is.pop(),Ge=is[is.length-1]||null}let ys=1;function Cl(t){ys+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function zc(t){return t.dynamicChildren=ys>0?Ge||vn:null,xd(),ys>0&&Ge&&Ge.push(t),t}function Se(t,e,n,s,i,r){return zc(U(t,e,n,s,i,r,!0))}function Nd(t,e,n,s,i){return zc(Ee(t,e,n,s,i,!0))}function ii(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const Yc=({key:t})=>t??null,Xs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||Pe(t)||V(t)?{i:je,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Xs(e),scopeId:Ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return l?(Co(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),ys>0&&!o&&Ge&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ge.push(a),a}const Ee=Ad;function Ad(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jf)&&(t=tn),ii(t)){const l=Nn(t,e,!0);return n&&Co(l,n),ys>0&&!r&&Ge&&(l.shapeFlag&6?Ge[Ge.indexOf(t)]=l:Ge.push(l)),l.patchFlag=-2,l}if($d(t)&&(t=t.__vccOpts),e){e=Pd(e);let{class:l,style:a}=e;l&&!pe(l)&&(e.class=ds(l)),ue(a)&&(_o(a)&&!W(a)&&(a=be({},a)),e.style=lo(a))}const o=pe(t)?1:Kc(t)?128:Bf(t)?64:ue(t)?4:V(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function Pd(t){return t?_o(t)||Mc(t)?be({},t):t:null}function Nn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Od(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Yc(c),ref:e&&e.ref?n&&r?W(r)?r.concat(Xs(e)):[r,Xs(e)]:Xs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nn(t.ssContent),ssFallback:t.ssFallback&&Nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&mo(u,a.clone(u)),u}function rs(t=" ",e=0){return Ee(Mi,null,t,e)}function mn(t="",e=!1){return e?(ye(),Nd(tn,null,t)):Ee(tn,null,t)}function ht(t){return t==null||typeof t=="boolean"?Ee(tn):W(t)?Ee(Ke,null,t.slice()):ii(t)?Dt(t):Ee(Mi,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nn(t)}function Co(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Co(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Mc(e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Od(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ds([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(Ii(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){dt(t,e,7,[n,s])}const Dd=Oc();let kd=0;function Md(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Dd,r={uid:kd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fc(s,i),emitsOptions:qc(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bd.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,ri,Dr;{const t=Ni(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ri=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Dr=e("__VUE_SSR_SETTERS__",n=>vs=n)}const Ds=t=>{const e=Ae;return ri(t),t.scope.on(),()=>{t.scope.off(),ri(e)}},El=()=>{Ae&&Ae.scope.off(),ri(null)};function Qc(t){return t.vnode.shapeFlag&4}let vs=!1;function Ld(t,e=!1,n=!1){e&&Dr(e);const{props:s,children:i}=t.vnode,r=Qc(t);ad(t,s,r,e),fd(t,i,n);const o=r?Fd(t,e):void 0;return e&&Dr(!1),o}function Fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ed);const{setup:s}=n;if(s){Wt();const i=t.setupContext=s.length>1?Hd(t):null,r=Ds(t),o=Os(s,t,0,[t.props,i]),l=Ya(o);if(Vt(),r(),(l||t.sp)&&!ns(t)&&Rc(t),l){if(o.then(El,El),e)return o.then(a=>{bl(t,a,e)}).catch(a=>{Oi(a,t,0)});t.asyncDep=o}else bl(t,o,e)}else Xc(t,e)}function bl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=vc(e)),Xc(t,n)}let wl;function Xc(t,e,n){const s=t.type;if(!t.render){if(!e&&wl&&!s.render){const i=s.template||yo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=be(be({isCustomElement:r,delimiters:l},o),a);s.render=wl(i,c)}}t.render=s.render||ft}{const i=Ds(t);Wt();try{td(t)}finally{Vt(),i()}}}const Bd={get(t,e){return Re(t,"get",""),t[e]}};function Hd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bd),slots:t.slots,emit:t.emit,expose:e}}function Li(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vc(If(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ss)return ss[n](t)},has(e,n){return n in e||n in ss}})):t.proxy}function Ud(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function $d(t){return V(t)&&"__vccOpts"in t}const Xe=(t,e)=>Pf(t,e,vs);function Jc(t,e,n){const s=arguments.length;return s===2?ue(e)&&!W(e)?ii(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ii(n)&&(n=[n]),Ee(t,e,n))}const Wd="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kr;const Sl=typeof window<"u"&&window.trustedTypes;if(Sl)try{kr=Sl.createPolicy("vue",{createHTML:t=>t})}catch{}const Zc=kr?t=>kr.createHTML(t):t=>t,Vd="http://www.w3.org/2000/svg",jd="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Il=mt&&mt.createElement("template"),Gd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?mt.createElementNS(Vd,t):e==="mathml"?mt.createElementNS(jd,t):n?mt.createElement(t,{is:n}):mt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Il.innerHTML=Zc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Il.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qd=Symbol("_vtc");function Kd(t,e,n){const s=t[qd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tl=Symbol("_vod"),zd=Symbol("_vsh"),Yd=Symbol(""),Qd=/(^|;)\s*display\s*:/;function Xd(t,e,n){const s=t.style,i=pe(n);let r=!1;if(n&&!i){if(e)if(pe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Js(s,l,"")}else for(const o in e)n[o]==null&&Js(s,o,"");for(const o in n)o==="display"&&(r=!0),Js(s,o,n[o])}else if(i){if(e!==n){const o=s[Yd];o&&(n+=";"+o),s.cssText=n,r=Qd.test(n)}}else e&&t.removeAttribute("style");Tl in t&&(t[Tl]=r?s.display:"",t[zd]&&(s.display="none"))}const Rl=/\s*!important$/;function Js(t,e,n){if(W(n))n.forEach(s=>Js(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Jd(t,e);Rl.test(n)?t.setProperty(ln(s),n.replace(Rl,""),"important"):t[s]=n}}const xl=["Webkit","Moz","ms"],sr={};function Jd(t,e){const n=sr[e];if(n)return n;let s=Ye(e);if(s!=="filter"&&s in t)return sr[e]=s;s=xi(s);for(let i=0;i<xl.length;i++){const r=xl[i]+s;if(r in t)return sr[e]=r}return e}const Nl="http://www.w3.org/1999/xlink";function Al(t,e,n,s,i,r=sf(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nl,e.slice(6,e.length)):t.setAttributeNS(Nl,e,n):n==null||r&&!Za(n)?t.removeAttribute(e):t.setAttribute(e,r?"":$t(n)?String(n):n)}function Pl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Za(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function _n(t,e,n,s){t.addEventListener(e,n,s)}function Zd(t,e,n,s){t.removeEventListener(e,n,s)}const Ol=Symbol("_vei");function ep(t,e,n,s,i=null){const r=t[Ol]||(t[Ol]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=tp(e);if(s){const c=r[e]=ip(s,i);_n(t,l,c,a)}else o&&(Zd(t,l,o,a),r[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function tp(t){let e;if(Dl.test(t)){e={};let s;for(;s=t.match(Dl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let ir=0;const np=Promise.resolve(),sp=()=>ir||(np.then(()=>ir=0),ir=Date.now());function ip(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(rp(s,n.value),e,5,[s])};return n.value=t,n.attached=sp(),n}function rp(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,op=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Kd(t,s,o):e==="style"?Xd(t,n,s):Ii(e)?io(e)||ep(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lp(t,e,s,o))?(Pl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Al(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!pe(s))?Pl(t,Ye(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Al(t,e,s,o))};function lp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&kl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return kl(e)&&pe(n)?!1:e in t}const Ml=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ks(e,n):e};function ap(t){t.target.composing=!0}function Ll(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rr=Symbol("_assign"),Jn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[rr]=Ml(i);const r=s||i.props&&i.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Cr(l)),t[rr](l)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",ap),_n(t,"compositionend",Ll),_n(t,"change",Ll))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[rr]=Ml(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Cr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},cp=["ctrl","shift","alt","meta"],up={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cp.some(n=>t[`${n}Key`]&&!e.includes(n))},hp=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=up[e[o]];if(l&&l(i,e))return}return t(i,...r)})},fp=be({patchProp:op},Gd);let Fl;function dp(){return Fl||(Fl=pd(fp))}const pp=(...t)=>{const e=dp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gp(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,_p(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function _p(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gp(t){return pe(t)?document.querySelector(t):t}const ks=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},mp={name:"Navbar"},yp={class:"navbar"},vp={class:"nav-links"};function Cp(t,e,n,s,i,r){const o=Rr("router-link");return ye(),Se("nav",yp,[e[3]||(e[3]=U("h1",null,"Character Creator",-1)),U("div",vp,[Ee(o,{to:"/"},{default:zs(()=>e[0]||(e[0]=[rs("Home")])),_:1}),Ee(o,{to:"/add-part"},{default:zs(()=>e[1]||(e[1]=[rs("Add Part")])),_:1}),Ee(o,{to:"/remove-part"},{default:zs(()=>e[2]||(e[2]=[rs("Remove Part")])),_:1})])])}const Ep=ks(mp,[["render",Cp],["__scopeId","data-v-2ae48e0d"]]),bp={components:{Navbar:Ep}};function wp(t,e,n,s,i,r){const o=Rr("Navbar"),l=Rr("router-view");return ye(),Se("div",null,[Ee(o),Ee(l)])}const Sp=ks(bp,[["render",wp],["__scopeId","data-v-67839e4a"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof document<"u";function eu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ip(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eu(t.default)}const ee=Object.assign;function or(t,e){const n={};for(const s in e){const i=e[s];n[s]=st(i)?i.map(t):t(i)}return n}const os=()=>{},st=Array.isArray,tu=/#/g,Tp=/&/g,Rp=/\//g,xp=/=/g,Np=/\?/g,nu=/\+/g,Ap=/%5B/g,Pp=/%5D/g,su=/%5E/g,Op=/%60/g,iu=/%7B/g,Dp=/%7C/g,ru=/%7D/g,kp=/%20/g;function Eo(t){return encodeURI(""+t).replace(Dp,"|").replace(Ap,"[").replace(Pp,"]")}function Mp(t){return Eo(t).replace(iu,"{").replace(ru,"}").replace(su,"^")}function Mr(t){return Eo(t).replace(nu,"%2B").replace(kp,"+").replace(tu,"%23").replace(Tp,"%26").replace(Op,"`").replace(iu,"{").replace(ru,"}").replace(su,"^")}function Lp(t){return Mr(t).replace(xp,"%3D")}function Fp(t){return Eo(t).replace(tu,"%23").replace(Np,"%3F")}function Bp(t){return t==null?"":Fp(t).replace(Rp,"%2F")}function Cs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Hp=/\/$/,Up=t=>t.replace(Hp,"");function lr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=jp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Cs(o)}}function $p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&An(e.matched[s],n.matched[i])&&ou(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ou(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vp(t[n],e[n]))return!1;return!0}function Vp(t,e){return st(t)?Hl(t,e):st(e)?Hl(e,t):t===e}function Hl(t,e){return st(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function jp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Es;(function(t){t.pop="pop",t.push="push"})(Es||(Es={}));var ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ls||(ls={}));function Gp(t){if(!t)if(gn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Up(t)}const qp=/^[^#]+#/;function Kp(t,e){return t.replace(qp,"#")+e}function zp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Fi=()=>({left:window.scrollX,top:window.scrollY});function Yp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ul(t,e){return(history.state?history.state.position-e:-1)+t}const Lr=new Map;function Qp(t,e){Lr.set(t,e)}function Xp(t){const e=Lr.get(t);return Lr.delete(t),e}let Jp=()=>location.protocol+"//"+location.host;function lu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Bl(a,"")}return Bl(n,t)+s+i}function Zp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=lu(t,location),m=n.value,w=e.value;let M=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}M=w?f.position-w.position:0}else s(_);i.forEach(D=>{D(n.value,m,{delta:M,type:Es.pop,direction:M?M>0?ls.forward:ls.back:ls.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ee({},f.state,{scroll:Fi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function $l(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Fi():null}}function e_(t){const{history:e,location:n}=window,s={value:lu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Jp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ee({},e.state,$l(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ee({},i.value,e.state,{forward:a,scroll:Fi()});r(u.current,u,!0);const h=ee({},$l(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function t_(t){t=Gp(t);const e=e_(t),n=Zp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ee({location:"",base:t,go:s,createHref:Kp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function n_(t){return typeof t=="string"||t&&typeof t=="object"}function au(t){return typeof t=="string"||typeof t=="symbol"}const cu=Symbol("");var Wl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wl||(Wl={}));function Pn(t,e){return ee(new Error,{type:t,[cu]:!0},e)}function gt(t,e){return t instanceof Error&&cu in t&&(e==null||!!(t.type&e))}const Vl="[^/]+?",s_={sensitive:!1,strict:!1,start:!0,end:!0},i_=/[.+*?^${}()[\]/\\]/g;function r_(t,e){const n=ee({},s_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(i_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:w,optional:M,regexp:D}=f;r.push({name:m,repeatable:w,optional:M});const P=D||Vl;if(P!==Vl){_+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+O.message)}}let F=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(F=M&&c.length<2?`(?:/${F})`:"/"+F),M&&(F+="?"),i+=F,_+=20,M&&(_+=-8),w&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:M}=_,D=m in c?c[m]:"";if(st(D)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=st(D)?D.join("/"):D;if(!P)if(M)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function o_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uu(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=o_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(jl(s))return 1;if(jl(i))return-1}return i.length-s.length}function jl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const l_={type:0,value:""},a_=/[a-zA-Z0-9_]/;function c_(t){if(!t)return[[]];if(t==="/")return[[l_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:a_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function u_(t,e,n){const s=r_(c_(t.path),n),i=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function h_(t,e){const n=[],s=new Map;e=zl({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,_){const m=!_,w=ql(h);w.aliasOf=_&&_.record;const M=zl(e,h),D=[w];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const ne of O)D.push(ql(ee({},w,{components:_?_.record.components:w.components,path:ne,aliasOf:_?_.record:w})))}let P,F;for(const O of D){const{path:ne}=O;if(f&&ne[0]!=="/"){const we=f.record.path,he=we[we.length-1]==="/"?"":"/";O.path=f.record.path+(ne&&he+ne)}if(P=u_(O,f,M),_?_.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),m&&h.name&&!Kl(P)&&o(h.name)),hu(P)&&a(P),w.children){const we=w.children;for(let he=0;he<we.length;he++)r(we[he],P,_&&_.children[he])}_=_||P}return F?()=>{o(F)}:os}function o(h){if(au(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function a(h){const f=p_(h,n);n.splice(f,0,h),h.record.name&&!Kl(h)&&s.set(h.record.name,h)}function c(h,f){let _,m={},w,M;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Pn(1,{location:h});M=_.record.name,m=ee(Gl(f.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),h.params&&Gl(h.params,_.keys.map(F=>F.name))),w=_.stringify(m)}else if(h.path!=null)w=h.path,_=n.find(F=>F.re.test(w)),_&&(m=_.parse(w),M=_.record.name);else{if(_=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!_)throw Pn(1,{location:h,currentLocation:f});M=_.record.name,m=ee({},f.params,h.params),w=_.stringify(m)}const D=[];let P=_;for(;P;)D.unshift(P.record),P=P.parent;return{name:M,path:w,params:m,matched:D,meta:d_(D)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function Gl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ql(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:f_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function f_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Kl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function d_(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function zl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function p_(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;uu(t,e[r])<0?s=r:n=r+1}const i=__(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function __(t){let e=t;for(;e=e.parent;)if(hu(e)&&uu(t,e)===0)return e}function hu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function g_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nu," "),o=r.indexOf("="),l=Cs(o<0?r:r.slice(0,o)),a=o<0?null:Cs(r.slice(o+1));if(l in e){let c=e[l];st(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Yl(t){let e="";for(let n in t){const s=t[n];if(n=Lp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&Mr(r)):[s&&Mr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function m_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=st(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const y_=Symbol(""),Ql=Symbol(""),bo=Symbol(""),fu=Symbol(""),Fr=Symbol("");function Gn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Pn(4,{from:n,to:e})):f instanceof Error?a(f):n_(f)?a(Pn(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function ar(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(eu(a)){const u=(a.__vccOpts||a)[e];u&&r.push(kt(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const h=Ip(u)?u.default:u;o.mods[l]=u,o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&kt(_,n,s,o,l,i)()}))}}return r}function Xl(t){const e=Et(bo),n=Et(fu),s=Xe(()=>{const a=bn(t.to);return e.resolve(a)}),i=Xe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(An.bind(null,u));if(f>-1)return f;const _=Jl(a[c-2]);return c>1&&Jl(u)===_&&h[h.length-1].path!==_?h.findIndex(An.bind(null,a[c-2])):f}),r=Xe(()=>i.value>-1&&b_(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&ou(n.params,s.value.params));function l(a={}){return E_(a)?e[bn(t.replace)?"replace":"push"](bn(t.to)).catch(os):Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const v_=Tc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xl,setup(t,{slots:e}){const n=Pi(Xl(t)),{options:s}=Et(bo),i=Xe(()=>({[Zl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Zl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),C_=v_;function E_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function b_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!st(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Jl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zl=(t,e,n)=>t??e??n,w_=Tc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Et(Fr),i=Xe(()=>t.route||s.value),r=Et(Ql,0),o=Xe(()=>{let c=bn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Xe(()=>i.value.matched[o.value]);Ys(Ql,Xe(()=>o.value+1)),Ys(y_,l),Ys(Fr,i);const a=Tf();return Qs(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!An(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return ea(n.default,{Component:f,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,M=Jc(f,ee({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ea(n.default,{Component:M,route:c})||M}}});function ea(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const S_=w_;function I_(t){const e=h_(t.routes,t),n=t.parseQuery||g_,s=t.stringifyQuery||Yl,i=t.history,r=Gn(),o=Gn(),l=Gn(),a=Rf(Pt);let c=Pt;gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=or.bind(null,v=>""+v),h=or.bind(null,Bp),f=or.bind(null,Cs);function _(v,A){let x,k;return au(v)?(x=e.getRecordMatcher(v),k=A):k=v,e.addRoute(k,x)}function m(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function w(){return e.getRoutes().map(v=>v.record)}function M(v){return!!e.getRecordMatcher(v)}function D(v,A){if(A=ee({},A||a.value),typeof v=="string"){const p=lr(n,v,A.path),g=e.resolve({path:p.path},A),C=i.createHref(p.fullPath);return ee(p,g,{params:f(g.params),hash:Cs(p.hash),redirectedFrom:void 0,href:C})}let x;if(v.path!=null)x=ee({},v,{path:lr(n,v.path,A.path).path});else{const p=ee({},v.params);for(const g in p)p[g]==null&&delete p[g];x=ee({},v,{params:h(p)}),A.params=h(A.params)}const k=e.resolve(x,A),J=v.hash||"";k.params=u(f(k.params));const fe=$p(s,ee({},v,{hash:Mp(J),path:k.path})),d=i.createHref(fe);return ee({fullPath:fe,hash:J,query:s===Yl?m_(v.query):v.query||{}},k,{redirectedFrom:void 0,href:d})}function P(v){return typeof v=="string"?lr(n,v,a.value.path):ee({},v)}function F(v,A){if(c!==v)return Pn(8,{from:A,to:v})}function O(v){return he(v)}function ne(v){return O(ee(P(v),{replace:!0}))}function we(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:x}=A;let k=typeof x=="function"?x(v):x;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=P(k):{path:k},k.params={}),ee({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function he(v,A){const x=c=D(v),k=a.value,J=v.state,fe=v.force,d=v.replace===!0,p=we(x);if(p)return he(ee(P(p),{state:typeof p=="object"?ee({},J,p.state):J,force:fe,replace:d}),A||x);const g=x;g.redirectedFrom=A;let C;return!fe&&Wp(s,k,x)&&(C=Pn(16,{to:g,from:k}),lt(k,k,!0,!1)),(C?Promise.resolve(C):rt(g,k)).catch(y=>gt(y)?gt(y,2)?y:At(y):Y(y,g,k)).then(y=>{if(y){if(gt(y,2))return he(ee({replace:d},P(y.to),{state:typeof y.to=="object"?ee({},J,y.to.state):J,force:fe}),A||g)}else y=Gt(g,k,!0,d,J);return Nt(g,k,y),y})}function it(v,A){const x=F(v,A);return x?Promise.reject(x):Promise.resolve()}function xt(v){const A=hn.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function rt(v,A){let x;const[k,J,fe]=T_(v,A);x=ar(k.reverse(),"beforeRouteLeave",v,A);for(const p of k)p.leaveGuards.forEach(g=>{x.push(kt(g,v,A))});const d=it.bind(null,v,A);return x.push(d),qe(x).then(()=>{x=[];for(const p of r.list())x.push(kt(p,v,A));return x.push(d),qe(x)}).then(()=>{x=ar(J,"beforeRouteUpdate",v,A);for(const p of J)p.updateGuards.forEach(g=>{x.push(kt(g,v,A))});return x.push(d),qe(x)}).then(()=>{x=[];for(const p of fe)if(p.beforeEnter)if(st(p.beforeEnter))for(const g of p.beforeEnter)x.push(kt(g,v,A));else x.push(kt(p.beforeEnter,v,A));return x.push(d),qe(x)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),x=ar(fe,"beforeRouteEnter",v,A,xt),x.push(d),qe(x))).then(()=>{x=[];for(const p of o.list())x.push(kt(p,v,A));return x.push(d),qe(x)}).catch(p=>gt(p,8)?p:Promise.reject(p))}function Nt(v,A,x){l.list().forEach(k=>xt(()=>k(v,A,x)))}function Gt(v,A,x,k,J){const fe=F(v,A);if(fe)return fe;const d=A===Pt,p=gn?history.state:{};x&&(k||d?i.replace(v.fullPath,ee({scroll:d&&p&&p.scroll},J)):i.push(v.fullPath,J)),a.value=v,lt(v,A,x,d),At()}let ot;function $n(){ot||(ot=i.listen((v,A,x)=>{if(!$s.listening)return;const k=D(v),J=we(k);if(J){he(ee(J,{replace:!0}),k).catch(os);return}c=k;const fe=a.value;gn&&Qp(Ul(fe.fullPath,x.delta),Fi()),rt(k,fe).catch(d=>gt(d,12)?d:gt(d,2)?(he(d.to,k).then(p=>{gt(p,20)&&!x.delta&&x.type===Es.pop&&i.go(-1,!1)}).catch(os),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Y(d,k,fe))).then(d=>{d=d||Gt(k,fe,!1),d&&(x.delta&&!gt(d,8)?i.go(-x.delta,!1):x.type===Es.pop&&gt(d,20)&&i.go(-1,!1)),Nt(k,fe,d)}).catch(os)}))}let cn=Gn(),ge=Gn(),te;function Y(v,A,x){At(v);const k=ge.list();return k.length?k.forEach(J=>J(v,A,x)):console.error(v),Promise.reject(v)}function pt(){return te&&a.value!==Pt?Promise.resolve():new Promise((v,A)=>{cn.add([v,A])})}function At(v){return te||(te=!v,$n(),cn.list().forEach(([A,x])=>v?x(v):A()),cn.reset()),v}function lt(v,A,x,k){const{scrollBehavior:J}=t;if(!gn||!J)return Promise.resolve();const fe=!x&&Xp(Ul(v.fullPath,0))||(k||!x)&&history.state&&history.state.scroll||null;return Ec().then(()=>J(v,A,fe)).then(d=>d&&Yp(d)).catch(d=>Y(d,v,A))}const ke=v=>i.go(v);let un;const hn=new Set,$s={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:w,resolve:D,options:t,push:O,replace:ne,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ge.add,isReady:pt,install(v){const A=this;v.component("RouterLink",C_),v.component("RouterView",S_),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(a)}),gn&&!un&&a.value===Pt&&(un=!0,O(i.location).catch(J=>{}));const x={};for(const J in Pt)Object.defineProperty(x,J,{get:()=>a.value[J],enumerable:!0});v.provide(bo,A),v.provide(fu,gc(x)),v.provide(Fr,a);const k=v.unmount;hn.add(v),v.unmount=function(){hn.delete(v),hn.size<1&&(c=Pt,ot&&ot(),ot=null,a.value=Pt,un=!1,te=!1),k()}}};function qe(v){return v.reduce((A,x)=>A.then(()=>xt(x)),Promise.resolve())}return $s}function T_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>An(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>An(c,a))||i.push(a))}return[n,s,i]}var ta={};/**
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
 */const du={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Ln(e)},Ln=function(t){return new Error("Firebase Database ("+du.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},R_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new x_;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _u=function(t){const e=pu(t);return wo.encodeByteArray(e,!0)},oi=function(t){return _u(t).replace(/\./g,"")},Br=function(t){try{return wo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function N_(t){return gu(void 0,t)}function gu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!A_(n)||(t[n]=gu(t[n],e[n]));return t}function A_(t){return t!=="__proto__"}/**
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
 */function P_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O_=()=>P_().__FIREBASE_DEFAULTS__,D_=()=>{if(typeof process>"u"||typeof ta>"u")return;const t=ta.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},k_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Br(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return O_()||D_()||k_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M_=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L_=t=>{const e=M_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yu=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config};/**
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
 */class Bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function F_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oi(JSON.stringify(n)),oi(JSON.stringify(o)),""].join(".")}/**
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
 */function B_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B_())}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cu(){return du.NODE_ADMIN===!0}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const W_="FirebaseError";class Ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=W_,Object.setPrototypeOf(this,Ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eu.prototype.create)}}class Eu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?V_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ms(i,l,s)}}function V_(t,e){return t.replace(j_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const j_=/\{\$([^}]+)}/g;/**
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
 */function bs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const bu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=bs(Br(r[0])||""),n=bs(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},G_=function(t){const e=bu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},q_=function(t){const e=bu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function On(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function na(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(sa(r)&&sa(o)){if(!Hr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
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
 */function K_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class z_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function So(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Y_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Fn(t){return t&&t._delegate?t._delegate:t}class ws{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Q_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J_(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:X_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X_(t){return t===Yt?void 0:t}function J_(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const eg={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},tg=le.INFO,ng={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},sg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ng[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=tg,this._logHandler=sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const ig=(t,e)=>e.some(n=>t instanceof n);let ia,ra;function rg(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function og(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,Ur=new WeakMap,Iu=new WeakMap,cr=new WeakMap,Io=new WeakMap;function lg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Su.set(n,t)}).catch(()=>{}),Io.set(e,t),e}function ag(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let $r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cg(t){$r=t($r)}function ug(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return Iu.set(s,e.sort?e.sort():[e]),Lt(s)}:og().includes(t)?function(...e){return t.apply(ur(this),e),Lt(Su.get(this))}:function(...e){return Lt(t.apply(ur(this),e))}}function hg(t){return typeof t=="function"?ug(t):(t instanceof IDBTransaction&&ag(t),ig(t,rg())?new Proxy(t,$r):t)}function Lt(t){if(t instanceof IDBRequest)return lg(t);if(cr.has(t))return cr.get(t);const e=hg(t);return e!==t&&(cr.set(t,e),Io.set(e,t)),e}const ur=t=>Io.get(t);function fg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Lt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Lt(o.result),a.oldVersion,a.newVersion,Lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const dg=["get","getKey","getAll","getAllKeys","count"],pg=["put","add","delete","clear"],hr=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=pg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||dg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return hr.set(e,r),r}cg(t=>({...t,get:(e,n,s)=>oa(e,n)||t.get(e,n,s),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));/**
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
 */class _g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",la="0.10.14";/**
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
 */const wt=new wu("@firebase/app"),mg="@firebase/app-compat",yg="@firebase/analytics-compat",vg="@firebase/analytics",Cg="@firebase/app-check-compat",Eg="@firebase/app-check",bg="@firebase/auth",wg="@firebase/auth-compat",Sg="@firebase/database",Ig="@firebase/data-connect",Tg="@firebase/database-compat",Rg="@firebase/functions",xg="@firebase/functions-compat",Ng="@firebase/installations",Ag="@firebase/installations-compat",Pg="@firebase/messaging",Og="@firebase/messaging-compat",Dg="@firebase/performance",kg="@firebase/performance-compat",Mg="@firebase/remote-config",Lg="@firebase/remote-config-compat",Fg="@firebase/storage",Bg="@firebase/storage-compat",Hg="@firebase/firestore",Ug="@firebase/vertexai",$g="@firebase/firestore-compat",Wg="firebase",Vg="11.0.0";/**
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
 */const Vr="[DEFAULT]",jg={[Wr]:"fire-core",[mg]:"fire-core-compat",[vg]:"fire-analytics",[yg]:"fire-analytics-compat",[Eg]:"fire-app-check",[Cg]:"fire-app-check-compat",[bg]:"fire-auth",[wg]:"fire-auth-compat",[Sg]:"fire-rtdb",[Ig]:"fire-data-connect",[Tg]:"fire-rtdb-compat",[Rg]:"fire-fn",[xg]:"fire-fn-compat",[Ng]:"fire-iid",[Ag]:"fire-iid-compat",[Pg]:"fire-fcm",[Og]:"fire-fcm-compat",[Dg]:"fire-perf",[kg]:"fire-perf-compat",[Mg]:"fire-rc",[Lg]:"fire-rc-compat",[Fg]:"fire-gcs",[Bg]:"fire-gcs-compat",[Hg]:"fire-fst",[$g]:"fire-fst-compat",[Ug]:"fire-vertex","fire-js":"fire-js",[Wg]:"fire-js-all"};/**
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
 */const ai=new Map,Gg=new Map,jr=new Map;function aa(t,e){try{t.container.addComponent(e)}catch(n){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(jr.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of ai.values())aa(n,t);for(const n of Gg.values())aa(n,t);return!0}function qg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Eu("app","Firebase",Kg);/**
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
 */class zg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Yg=Vg;function Tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=yu()),!n)throw Ft.create("no-options");const r=ai.get(i);if(r){if(Hr(n,r.options)&&Hr(s,r.config))return r;throw Ft.create("duplicate-app",{appName:i})}const o=new Z_(i);for(const a of jr.values())o.addComponent(a);const l=new zg(n,s,o);return ai.set(i,l),l}function Qg(t=Vr){const e=ai.get(t);if(!e&&t===Vr&&yu())return Tu();if(!e)throw Ft.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=jg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(l.join(" "));return}ci(new ws(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xg="firebase-heartbeat-database",Jg=1,Ss="firebase-heartbeat-store";let fr=null;function Ru(){return fr||(fr=fg(Xg,Jg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),fr}async function Zg(t){try{const n=(await Ru()).transaction(Ss),s=await n.objectStore(Ss).get(xu(t));return await n.done,s}catch(e){if(e instanceof Ms)wt.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(n.message)}}}async function ca(t,e){try{const s=(await Ru()).transaction(Ss,"readwrite");await s.objectStore(Ss).put(e,xu(t)),await s.done}catch(n){if(n instanceof Ms)wt.warn(n.message);else{const s=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wt.warn(s.message)}}}function xu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const em=1024,tm=30*24*60*60*1e3;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new im(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ua();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tm}),this._storage.overwrite(this._heartbeatsCache))}catch(s){wt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ua(),{heartbeatsToSend:s,unsentEntries:i}=sm(this._heartbeatsCache.heartbeats),r=oi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return wt.warn(n),""}}}function ua(){return new Date().toISOString().substring(0,10)}function sm(t,e=em){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ha(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ha(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ha(t){return oi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rm(t){ci(new ws("platform-logger",e=>new _g(e),"PRIVATE")),ci(new ws("heartbeat",e=>new nm(e),"PRIVATE")),In(Wr,la,t),In(Wr,la,"esm2017"),In("fire-js","")}rm("");var fa={};const da="@firebase/database",pa="1.0.9";/**
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
 */let Nu="";function om(t){Nu=t}/**
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
 */class lm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class am{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Au=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lm(e)}}catch{}return new am},Xt=Au("localStorage"),cm=Au("sessionStorage");/**
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
 */const Tn=new wu("@firebase/database"),um=function(){let t=1;return function(){return t++}}(),Pu=function(t){const e=Y_(t),n=new z_;n.update(e);const s=n.digest();return wo.encodeByteArray(s)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ls.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let as=null,_a=!0;const hm=function(t,e){S(!e,"Can't turn on custom loggers persistently."),Tn.logLevel=le.VERBOSE,as=Tn.log.bind(Tn)},Ne=function(...t){if(_a===!0&&(_a=!1,as===null&&cm.get("logging_enabled")===!0&&hm()),as){const e=Ls.apply(null,t);as(e)}},Fs=function(t){return function(...e){Ne(t,...e)}},Gr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);Tn.error(e)},St=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw Tn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ls(...t);Tn.warn(e)},fm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ou=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",nn="[MAX_NAME]",Bn=function(t,e){if(t===e)return 0;if(t===Dn||e===nn)return-1;if(e===Dn||t===nn)return 1;{const n=ga(t),s=ga(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},pm=function(t,e){return t===e?0:t<e?-1:1},qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},To=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=To(t[e[s]]);return n+="}",n},Du=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ku=function(t){S(!Ou(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},_m=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ym=new RegExp("^-?(0*)\\d{1,10}$"),vm=-2147483648,Cm=2147483647,ga=function(t){if(ym.test(t)){const e=Number(t);if(e>=vm&&e<=Cm)return e}return null},Hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Em=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zs.OWNER="owner";/**
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
 */const Ro="5",Mu="v",Lu="s",Fu="r",Bu="f",Hu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uu="ls",$u="p",qr="ac",Wu="websocket",Vu="long_polling";/**
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
 */class ju{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gu(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Wu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sm(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Im{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return N_(this.counters_)}}/**
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
 */const dr={},pr={};function xo(t){const e=t.toString();return dr[e]||(dr[e]=new Im),dr[e]}function Tm(t,e){const n=t.toString();return pr[n]||(pr[n]=e()),pr[n]}/**
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
 */class Rm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ma="start",xm="close",Nm="pLPCommand",Am="pRTLPCB",qu="id",Ku="pw",zu="ser",Pm="cb",Om="seg",Dm="ts",km="d",Mm="dframe",Yu=1870,Qu=30,Lm=Yu-Qu,Fm=25e3,Bm=3e4;class yn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=xo(n),this.urlFn=a=>(this.appCheckToken&&(a[qr]=this.appCheckToken),Gu(n,Vu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Rm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bm)),dm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new No((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ma)this.id=l,this.password=a;else if(o===xm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ma]="t",s[zu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Mu]=Ro,this.transportSessionId&&(s[Lu]=this.transportSessionId),this.lastSessionId&&(s[Uu]=this.lastSessionId),this.applicationId&&(s[$u]=this.applicationId),this.appCheckToken&&(s[qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hu.test(location.hostname)&&(s[Fu]=Bu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yn.forceAllow_=!0}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){return yn.forceAllow_?!0:!yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_m()&&!gm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_u(n),i=Du(s,Lm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Mm]="t",s[qu]=e,s[Ku]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class No{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=um(),window[Nm+this.uniqueCallbackIdentifier]=e,window[Am+this.uniqueCallbackIdentifier]=n,this.myIFrame=No.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qu]=this.myID,e[Ku]=this.myPW,e[zu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qu+s.length<=Yu;){const o=this.pendingSegs.shift();s=s+"&"+Om+i+"="+o.seg+"&"+Dm+i+"="+o.ts+"&"+km+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Fm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Hm=16384,Um=45e3;let ui=null;typeof MozWebSocket<"u"?ui=MozWebSocket:typeof WebSocket<"u"&&(ui=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=xo(n),this.connURL=Je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Mu]=Ro,typeof location<"u"&&location.hostname&&Hu.test(location.hostname)&&(o[Fu]=Bu),n&&(o[Lu]=n),s&&(o[Uu]=s),i&&(o[qr]=i),r&&(o[$u]=r),Gu(e,Wu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let s;Cu(),this.mySock=new ui(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ui!==null&&!Je.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||Xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Du(n,Hm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Um))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
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
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yn,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of Is.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
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
 */const $m=6e4,Wm=5e3,Vm=10*1024,jm=100*1024,_r="t",ya="d",Gm="s",va="r",qm="e",Ca="o",Ea="a",ba="n",wa="p",Km="h";class zm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_r in e){const n=e[_r];n===Ea?this.upgradeIfSecondaryHealthy_():n===va?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ca&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qn("t",e),s=qn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ea,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ba,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qn("t",e),s=qn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qn(_r,e);if(ya in e){const s=e[ya];if(n===Km){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ba){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gm?this.onConnectionShutdown_(s):n===va?this.onReset_(s):n===qm?Gr("Server Error: "+s):n===Ca?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ro!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($m))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ju{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hi extends Ju{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hi}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sa=32,Ia=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new ie("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ht(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Zu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ym(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function th(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return Me(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ao(t,e){if(Ht(t)!==Ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ht(t)>Ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Qm{constructor(e,n){this.errorPrefix_=n,this.parts_=eh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hi(this.parts_[s]);nh(this)}}function Xm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hi(e),nh(t)}function Jm(t){const e=t.parts_.pop();t.byteLength_-=Hi(e),t.parts_.length>0&&(t.byteLength_-=1)}function nh(t){if(t.byteLength_>Ia)throw new Error(t.errorPrefix_+"has a key path longer than "+Ia+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sa+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Po extends Ju{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Po}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Kn=1e3,Zm=60*5*1e3,Ta=30*1e3,ey=1.3,ty=3e4,ny="server_kill",Ra=3;class bt extends Xu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=bt.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kn,this.maxReconnectDelay_=Zm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Cu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Po.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Bi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;bt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const s=On(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||q_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ta)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=G_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ty&&(this.reconnectDelay_=Kn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ey)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new zm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ny)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],na(this.interruptReasons_)&&(this.reconnectDelay_=Kn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>To(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ra&&(this.reconnectDelay_=Ta,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ra&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nu.replace(/\./g,"-")]=1,vu()?e["framework.cordova"]=1:H_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hi.getInstance().currentlyOnline();return na(this.interruptReasons_)&&e}}bt.nextPersistentConnectionId_=0;bt.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class Ui{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Dn,e),i=new G(Dn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Gs;class sh extends Ui{static get __EMPTY_NODE(){return Gs}static set __EMPTY_NODE(e){Gs=e}compare(e,n){return Bn(e.name,n.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(nn,Gs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Gs)}toString(){return".key"}}const Rn=new sh;/**
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
 */class qs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class sy{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new sy;/**
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
 */function iy(t,e){return Bn(t.name,e.name)}function Oo(t,e){return Bn(t,e)}/**
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
 */let Kr;function ry(t){Kr=t}const ih=function(t){return typeof t=="number"?"number:"+ku(t):"string:"+t},rh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else S(t===Kr||t.isEmpty(),"priority of unexpected type.");S(t===Kr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xa;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rh(this.priorityNode_)}static set __childrenNodeConstructor(e){xa=e}static get __childrenNodeConstructor(){return xa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:j(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ih(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ku(this.value_):e+=this.value_,this.lazyHash_=Pu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),r=me.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oh,lh;function oy(t){oh=t}function ly(t){lh=t}class ay extends Ui{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(nn,new me("[PRIORITY-POST]",lh))}makePost(e,n){const s=oh(e);return new G(n,new me("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new ay;/**
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
 */const cy=Math.log(2);class uy{constructor(e){const n=r=>parseInt(Math.log(r)/cy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),w=i(_+1,c);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,m,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,w){const M=h-m,D=h;h-=m;const P=i(M+1,D),F=t[M],O=n?n(F):F;_(new ve(O,F.node,w,null,P))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const w=a.nextBitIsOne(),M=Math.pow(2,a.count-(m+1));w?f(M,ve.BLACK):(f(M,ve.BLACK),f(M,ve.RED))}return u},o=new uy(t.length),l=r(o);return new Le(s||e,l)};/**
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
 */let gr;const dn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(dn&&de,"ChildrenNode.ts has not been loaded"),gr=gr||new Ct({".priority":dn},{".priority":de}),gr}get(e){const n=On(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=fi(s,e.getCompare()):l=dn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Ct(u,c)}addToIndexes(e,n){const s=li(this.indexes_,(i,r)=>{const o=On(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(G.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),fi(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new G(e.name,l))),a.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=li(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
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
 */let zn;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zn||(zn=new H(new Le(Oo),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zn}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zn:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?zn:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{S(j(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ih(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===Rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hy extends H{constructor(){super(new Le(Oo),H.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Bs=new hy;Object.defineProperties(G,{MIN:{value:new G(Dn,H.EMPTY_NODE)},MAX:{value:new G(nn,Bs)}});sh.__EMPTY_NODE=H.EMPTY_NODE;me.__childrenNodeConstructor=H;ry(Bs);ly(Bs);/**
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
 */const fy=!0;function Ie(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,Ie(e))}if(!(t instanceof Array)&&fy){const n=[];let s=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return H.EMPTY_NODE;const r=fi(n,iy,o=>o.name,Oo);if(s){const o=fi(n,de.getCompare());return new H(r,Ie(e),new Ct({".priority":o},{".priority":de}))}else return new H(r,Ie(e),Ct.Default)}else{let n=H.EMPTY_NODE;return Be(t,(s,i)=>{if(Rt(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}oy(Ie);/**
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
 */class dy extends Ui{constructor(e){super(),this.indexPath_=e,S(!q(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new G(nn,e)}toString(){return eh(this.indexPath_,0).join("/")}}/**
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
 */class py extends Ui{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Bn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Ie(e);return new G(n,s)}toString(){return".value"}}const _y=new py;/**
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
 */function ah(t){return{type:"value",snapshotNode:t}}function kn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Do{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(kn(n,s)):o.trackChildChange(Rs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ts(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Rs(i,r,o))}else s.trackChildChange(kn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xs{constructor(e){this.indexedFilter_=new Do(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xs.getStartPost_(e),this.endPost_=xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class my{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new G(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Rs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ts(n,h));const w=l.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(kn(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ts(c.name,c.node)),r.trackChildChange(kn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class ko{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new ko;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yy(t){return t.loadsAllData()?new Do(t.getIndex()):t.hasLimit()?new my(t):new xs(t)}function Na(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===_y?n="$value":t.index_===Rn?n="$key":(S(t.index_ instanceof dy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Aa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class di extends Xu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=di.getListenId_(e,s),l={};this.listens_[o]=l;const a=Na(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),On(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=di.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Na(e._queryParams),s=e._path.toString(),i=new Bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+K_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=bs(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class vy{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function pi(){return{value:null,children:new Map}}function ch(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,pi());const i=t.children.get(s);e=ae(e),ch(i,e,n)}}function zr(t,e,n){t.value!==null?n(e,t.value):Cy(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);zr(i,r,n)})}function Cy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ey{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Pa=10*1e3,by=30*1e3,wy=5*60*1e3;class Sy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ey(e);const s=Pa+(by-Pa)*Math.random();cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&Rt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*wy))}}/**
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
 */var et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(et||(et={}));function uh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _i{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=et.ACK_USER_WRITE,this.source=uh()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new _i(z(),n,this.revert)}}else return S(j(this.path)===e,"operationForChild called for unrelated child."),new _i(ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=et.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ns(this.source,z()):new Ns(this.source,ae(this.path))}}/**
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
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=et.OVERWRITE}operationForChild(e){return q(this.path)?new sn(this.source,z(),this.snap.getImmediateChild(e)):new sn(this.source,ae(this.path),this.snap)}}/**
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
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=et.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new sn(this.source,z(),n.value):new As(this.source,z(),n)}else return S(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Iy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ty(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gy(o.childName,o.snapshotNode))}),Yn(t,i,"child_removed",e,s,n),Yn(t,i,"child_added",e,s,n),Yn(t,i,"child_moved",r,s,n),Yn(t,i,"child_changed",e,s,n),Yn(t,i,"value",e,s,n),i}function Yn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>xy(t,l,a)),o.forEach(l=>{const a=Ry(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ry(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xy(t,e,n){if(e.childName==null||n.childName==null)throw Ln("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function $i(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,s){return $i(new rn(e,n,s),t.serverCache)}function hh(t,e,n,s){return $i(t.eventCache,new rn(e,n,s))}function Yr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let mr;const Ny=()=>(mr||(mr=new Le(pm)),mr);class ce{constructor(e,n=Ny()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Be(e,(s,i)=>{n=n.set(new ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(q(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:_e(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ce(null)}}set(e,n){if(q(e))return new ce(n,this.children);{const s=j(e),r=(this.children.get(s)||new ce(null)).set(ae(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(q(e))return n;{const s=j(e),r=(this.children.get(s)||new ce(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),_e(n,i),s):new ce(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new ce(null))}}function hs(t,e,n){if(q(e))return new nt(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,n),new nt(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new nt(r)}}}function Oa(t,e,n){let s=t;return Be(n,(i,r)=>{s=hs(s,_e(e,i),r)}),s}function Da(t,e){if(q(e))return nt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new nt(n)}}function Qr(t,e){return an(t,e)!=null}function an(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function ka(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Bt(t,e){if(q(e))return t;{const n=an(t,e);return n!=null?new nt(new ce(n)):new nt(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Mn(t,e){return fh(z(),t.writeTree_,e)}function fh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=fh(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function Fo(t,e){return gh(e,t)}function Ay(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=hs(t.visibleWrites,e,n)),t.lastWriteId=s}function Py(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Oy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Dy(l,s.path)?i=!1:Ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ky(t),!0;if(s.snap)t.visibleWrites=Da(t.visibleWrites,s.path);else{const l=s.children;Be(l,a=>{t.visibleWrites=Da(t.visibleWrites,_e(s.path,a))})}return!0}else return!1}function Dy(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(_e(t.path,n),e))return!0;return!1}function ky(t){t.visibleWrites=dh(t.allWrites,My,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function My(t){return t.visible}function dh(t,e,n){let s=nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ze(n,o)?(l=Me(n,o),s=hs(s,l,r.snap)):Ze(o,n)&&(l=Me(o,n),s=hs(s,z(),r.snap.getChild(l)));else if(r.children){if(Ze(n,o))l=Me(n,o),s=Oa(s,l,r.children);else if(Ze(o,n))if(l=Me(o,n),q(l))s=Oa(s,z(),r.children);else{const a=On(r.children,j(l));if(a){const c=a.getChild(ae(l));s=hs(s,z(),c)}}}else throw Ln("WriteRecord should have .snap or .children")}}return s}function ph(t,e,n,s,i){if(!s&&!i){const r=an(t.visibleWrites,e);if(r!=null)return r;{const o=Bt(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,z()))return null;{const l=n||H.EMPTY_NODE;return Mn(o,l)}}}else{const r=Bt(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ze(c.path,e)||Ze(e,c.path))},l=dh(t.allWrites,o,e),a=n||H.EMPTY_NODE;return Mn(l,a)}}}function Ly(t,e,n){let s=H.EMPTY_NODE;const i=an(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bt(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const a=Mn(Bt(r,new ie(o)),l);s=s.updateImmediateChild(o,a)}),ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(t.visibleWrites,e);return ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Fy(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Bt(t.visibleWrites,r);return Xr(o)?i.getChild(n):Mn(o,i.getChild(n))}}function By(t,e,n,s){const i=_e(e,n),r=an(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bt(t.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(n))}else return null}function Hy(t,e){return an(t.visibleWrites,e)}function Uy(t,e,n,s,i,r,o){let l;const a=Bt(t.visibleWrites,e),c=an(a,z());if(c!=null)l=c;else if(n!=null)l=Mn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function $y(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function gi(t,e,n,s){return ph(t.writeTree,t.treePath,e,n,s)}function Bo(t,e){return Ly(t.writeTree,t.treePath,e)}function Ma(t,e,n,s){return Fy(t.writeTree,t.treePath,e,n,s)}function mi(t,e){return Hy(t.writeTree,_e(t.treePath,e))}function Wy(t,e,n,s,i,r){return Uy(t.writeTree,t.treePath,e,n,s,i,r)}function Ho(t,e,n){return By(t.writeTree,t.treePath,e,n)}function _h(t,e){return gh(_e(t.treePath,e),t.writeTree)}function gh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Vy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,kn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rs(s,e.snapshotNode,i.oldSnap));else throw Ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mh=new jy;class Uo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ho(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Wy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Gy(t){return{filter:t}}function qy(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ky(t,e,n,s,i){const r=new Vy;let o,l;if(n.type===et.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=yi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===et.MERGE){const c=n;c.source.fromUser?o=Yy(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===et.ACK_USER_WRITE){const c=n;c.revert?o=Jy(t,e,c.path,s,i,r):o=Qy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===et.LISTEN_COMPLETE)o=Xy(t,e,n.path,s,r);else throw Ln("Unknown operation type: "+n.type);const a=r.getChanges();return zy(e,o,a),{viewCache:o,changes:a}}function zy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ah(Yr(e)))}}function yh(t,e,n,s,i,r){const o=e.eventCache;if(mi(s,n)!=null)return e;{let l,a;if(q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=on(e),u=c instanceof H?c:H.EMPTY_NODE,h=Bo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=gi(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){S(Ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ma(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Ma(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Ho(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return us(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function yi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&Ht(n)>1)return e;const m=ae(n),M=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),M):c=u.updateChild(a.getNode(),_,M,m,mh,null)}const h=hh(e,c,a.isFullyInitialized()||q(n),u.filtersNodes()),f=new Uo(i,h,r);return yh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Uo(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=us(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=us(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ae(n),_=l.getNode().getImmediateChild(h);let m;if(q(f))m=s;else{const w=u.getCompleteChild(h);w!=null?Zu(f)===".priority"&&w.getChild(th(f)).isEmpty()?m=w:m=w.updateChild(f,s):m=H.EMPTY_NODE}if(_.equals(m))a=e;else{const w=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=us(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function La(t,e){return t.eventCache.isCompleteForChild(e)}function Yy(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=_e(n,a);La(e,j(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=_e(n,a);La(e,j(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function Fa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=s:c=new ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Fa(t,_,f);a=yi(t,a,new ie(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=Fa(t,m,f);a=yi(t,a,new ie(h),w,i,r,o,l)}}),a}function Qy(t,e,n,s,i,r,o){if(mi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return yi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(q(n)){let c=new ce(null);return a.getNode().forEachChild(Rn,(u,h)=>{c=c.set(new ie(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ce(null);return s.foreach((u,h)=>{const f=_e(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Zr(t,e,n,c,i,r,l,o)}}function Xy(t,e,n,s,i){const r=e.serverCache,o=hh(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return yh(t,o,n,s,mh,i)}function Jy(t,e,n,s,i,r){let o;if(mi(s,n)!=null)return e;{const l=new Uo(s,e,i),a=e.eventCache.getNode();let c;if(q(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gi(s,on(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=Bo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=j(n);let h=Ho(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ae(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,H.EMPTY_NODE,ae(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gi(s,on(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mi(s,z())!=null,us(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Zy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Do(s.getIndex()),r=yy(s);this.processor_=Gy(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),u=new rn(a,o.isFullyInitialized(),i.filtersNodes()),h=new rn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=$i(h,u),this.eventGenerator_=new Iy(this.query_)}get query(){return this.query_}}function ev(t){return t.viewCache_.serverCache.getNode()}function tv(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Ba(t){return t.eventRegistrations_.length===0}function nv(t,e){t.eventRegistrations_.push(e)}function Ha(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ua(t,e,n,s){e.type===et.MERGE&&e.source.queryId!==null&&(S(on(t.viewCache_),"We should always have a full cache before handling merges"),S(Yr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ky(t.processor_,i,e,n,s);return qy(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,vh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(kn(r,o))}),n.isFullyInitialized()&&s.push(ah(n.getNode())),vh(t,s,n.getNode(),e)}function vh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ty(t.eventGenerator_,e,n,i)}/**
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
 */let vi;class iv{constructor(){this.views=new Map}}function rv(t){S(!vi,"__referenceConstructor has already been defined"),vi=t}function ov(){return S(vi,"Reference.ts has not been loaded"),vi}function lv(t){return t.views.size===0}function $o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),Ua(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ua(o,e,n,s));return r}}function av(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=gi(n,i?s:null),a=!1;l?a=!0:s instanceof H?(l=Bo(n,s),a=!1):(l=H.EMPTY_NODE,a=!1);const c=$i(new rn(l,a,!1),new rn(s,i,!1));return new Zy(e,c)}return o}function cv(t,e,n,s,i,r){const o=av(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nv(o,n),sv(o,n)}function uv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ut(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ha(c,n,s)),Ba(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ha(a,n,s)),Ba(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ut(t)&&r.push(new(ov())(e._repo,e._path)),{removed:r,events:o}}function Ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const s of t.views.values())n=n||tv(s,e);return n}function Eh(t,e){if(e._queryParams.loadsAllData())return Wi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bh(t,e){return Eh(t,e)!=null}function Ut(t){return Wi(t)!=null}function Wi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ci;function hv(t){S(!Ci,"__referenceConstructor has already been defined"),Ci=t}function fv(){return S(Ci,"Reference.ts has not been loaded"),Ci}let dv=1;class $a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=$y(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wh(t,e,n,s,i){return Ay(t.pendingWriteTree_,e,n,s,i),i?Hs(t,new sn(uh(),e,n)):[]}function Jt(t,e,n=!1){const s=Py(t.pendingWriteTree_,e);if(Oy(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(z(),!0):Be(s.children,o=>{r=r.set(new ie(o),!0)}),Hs(t,new _i(s.path,r,n))}else return[]}function Vi(t,e,n){return Hs(t,new sn(Mo(),e,n))}function pv(t,e,n){const s=ce.fromObject(n);return Hs(t,new As(Mo(),e,s))}function _v(t,e){return Hs(t,new Ns(Mo(),e))}function gv(t,e,n){const s=Vo(t,n);if(s){const i=jo(s),r=i.path,o=i.queryId,l=Me(r,e),a=new Ns(Lo(o),l);return Go(t,r,a)}else return[]}function eo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||bh(o,e))){const a=uv(o,e,n,s);lv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Ut(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=vv(f);for(let m=0;m<_.length;++m){const w=_[m],M=w.query,D=Th(t,w);t.listenProvider_.startListening(fs(M),Ei(t,M),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(fs(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(ji(f));t.listenProvider_.stopListening(fs(f),_)}))}Cv(t,c)}return l}function mv(t,e,n,s){const i=Vo(t,s);if(i!=null){const r=jo(i),o=r.path,l=r.queryId,a=Me(o,e),c=new sn(Lo(l),a,n);return Go(t,o,c)}else return[]}function yv(t,e,n,s){const i=Vo(t,s);if(i){const r=jo(i),o=r.path,l=r.queryId,a=Me(o,e),c=ce.fromObject(n),u=new As(Lo(l),a,c);return Go(t,o,u)}else return[]}function Wa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=Me(f,i);r=r||xn(_,m),o=o||Ut(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ut(l),r=r||xn(l,z())):(l=new iv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=xn(m,z());w&&(r=r.updateImmediateChild(_,w))}));const c=bh(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ji(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Ev();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Fo(t.pendingWriteTree_,i);let h=cv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Eh(l,e);h=h.concat(bv(t,e,f))}return h}function Wo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),c=xn(l,a);if(c)return c});return ph(i,e,r,n,!0)}function Hs(t,e){return Sh(e,t.syncPointTree_,null,Fo(t.pendingWriteTree_,z()))}function Sh(t,e,n,s){if(q(t.path))return Ih(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=xn(i,z()));let r=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=_h(s,o);r=r.concat(Sh(l,a,c,u))}return i&&(r=r.concat($o(i,t,s,n))),r}}function Ih(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=xn(i,z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=_h(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ih(u,l,a,c)))}),i&&(r=r.concat($o(i,t,s,n))),r}function Th(t,e){const n=e.query,s=Ei(t,n);return{hashFn:()=>(ev(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?gv(t,n._path,s):_v(t,n._path);{const r=mm(i,n);return eo(t,n,null,r)}}}}function Ei(t,e){const n=ji(e);return t.queryToTagMap.get(n)}function ji(t){return t._path.toString()+"$"+t._queryIdentifier}function Vo(t,e){return t.tagToQueryMap.get(e)}function jo(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Go(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Fo(t.pendingWriteTree_,e);return $o(s,n,i,null)}function vv(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[Wi(n)];{let i=[];return n&&(i=Ch(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fv())(t._repo,t._path):t}function Cv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ev(){return dv++}function bv(t,e,n){const s=e._path,i=Ei(t,e),r=Th(t,n),o=t.listenProvider_.startListening(fs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!q(c)&&u&&Ut(u))return[Wi(u).query];{let f=[];return u&&(f=f.concat(Ch(u).map(_=>_.query))),Be(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(fs(u),Ei(t,u))}}return o}/**
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
 */class qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qo(n)}node(){return this.node_}}class Ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Ko(this.syncTree_,n)}node(){return Wo(this.syncTree_,this.path_)}}const wv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Va=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Sv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Iv(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Sv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Iv=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Tv=function(t,e,n,s){return zo(e,new Ko(n,t),s)},Rh=function(t,e,n){return zo(t,new qo(e),n)};function zo(t,e,n){const s=t.getPriority().val(),i=Va(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Va(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new me(i))),o.forEachChild(de,(l,a)=>{const c=zo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Yo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qo(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=j(n);for(;i!==null;){const r=On(s.node.children,i)||{children:{},childCount:0};s=new Yo(i,s,r),n=ae(n),i=j(n)}return s}function Un(t){return t.node.value}function xh(t,e){t.node.value=e,to(t)}function Nh(t){return t.node.childCount>0}function Rv(t){return Un(t)===void 0&&!Nh(t)}function Gi(t,e){Be(t.node.children,(n,s)=>{e(new Yo(n,t,s))})}function Ah(t,e,n,s){n&&!s&&e(t),Gi(t,i=>{Ah(i,e,!0,s)}),n&&s&&e(t)}function xv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(t){return new ie(t.parent===null?t.name:Us(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&Nv(t.parent,t.name,t)}function Nv(t,e,n){const s=Rv(n),i=Rt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
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
 */const Av=/[\[\].#$\/\u0000-\u001F\u007F]/,Pv=/[\[\].#$\u0000-\u001F\u007F]/,yr=10*1024*1024,Ph=function(t){return typeof t=="string"&&t.length!==0&&!Av.test(t)},Oh=function(t){return typeof t=="string"&&t.length!==0&&!Pv.test(t)},Ov=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oh(t)},Dh=function(t,e,n,s){s&&e===void 0||Xo(So(t,"value"),e,n)},Xo=function(t,e,n){const s=n instanceof ie?new Qm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(Ou(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>yr/3&&Hi(e)>yr)throw new Error(t+"contains a string greater than "+yr+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xm(s,o),Xo(t,l,s),Jm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},kh=function(t,e,n,s){if(!Oh(n))throw new Error(So(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kh(t,e,n)},Jo=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ov(n))throw new Error(So(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Mv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ao(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Mh(t,e,n){Zo(t,n),Lh(t,s=>Ao(s,e))}function It(t,e,n){Zo(t,n),Lh(t,s=>Ze(s,e)||Ze(e,s))}function Lh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Lv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Lv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();as&&Ne("event: "+n.toString()),Hn(s)}}}/**
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
 */const Fv="repo_interrupt",Bv=25;class Hv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Mv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pi(),this.transactionQueueTree_=new Yo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uv(t,e,n){if(t.stats_=xo(t.repoInfo_),t.forceRestClient_||Em())t.server_=new di(t.repoInfo_,(s,i,r,o)=>{ja(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ga(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new bt(t.repoInfo_,e,(s,i,r,o)=>{ja(t,s,i,r,o)},s=>{Ga(t,s)},s=>{$v(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Tm(t.repoInfo_,()=>new Sy(t.stats_,t.server_)),t.infoData_=new vy,t.infoSyncTree_=new $a({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Vi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new $a({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);It(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Fh(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function el(t){return wv({timestamp:Fh(t)})}function ja(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=li(n,c=>Ie(c));o=yv(t.serverSyncTree_,r,a,i)}else{const a=Ie(n);o=mv(t.serverSyncTree_,r,a,i)}else if(s){const a=li(n,c=>Ie(c));o=pv(t.serverSyncTree_,r,a)}else{const a=Ie(n);o=Vi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=qi(t,r)),It(t.eventQueue_,l,o)}function Ga(t,e){tl(t,"connected",e),e===!1&&Vv(t)}function $v(t,e){Be(e,(n,s)=>{tl(t,n,s)})}function tl(t,e,n){const s=new ie("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=Vi(t.infoSyncTree_,s,i);It(t.eventQueue_,s,r)}function Bh(t){return t.nextWriteId_++}function Wv(t,e,n,s,i){nl(t,"set",{path:e.toString(),value:n,priority:s});const r=el(t),o=Ie(n,s),l=Wo(t.serverSyncTree_,e),a=Rh(o,l,r),c=Bh(t),u=wh(t.serverSyncTree_,e,a,c,!0);Zo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Fe("set at "+e+" failed: "+f);const w=Jt(t.serverSyncTree_,c,!m);It(t.eventQueue_,e,w),Kv(t,i,f,_)});const h=Vh(t,e);qi(t,h),It(t.eventQueue_,h,[])}function Vv(t){nl(t,"onDisconnectEvents");const e=el(t),n=pi();zr(t.onDisconnect_,z(),(i,r)=>{const o=Tv(i,r,t.serverSyncTree_,e);ch(n,i,o)});let s=[];zr(n,z(),(i,r)=>{s=s.concat(Vi(t.serverSyncTree_,i,r));const o=Vh(t,i);qi(t,o)}),t.onDisconnect_=pi(),It(t.eventQueue_,z(),s)}function jv(t,e,n){let s;j(e._path)===".info"?s=Wa(t.infoSyncTree_,e,n):s=Wa(t.serverSyncTree_,e,n),Mh(t.eventQueue_,e._path,s)}function Gv(t,e,n){let s;j(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),Mh(t.eventQueue_,e._path,s)}function qv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Fv)}function nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function Kv(t,e,n,s){e&&Hn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return Wo(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function sl(t,e=t.transactionQueueTree_){if(e||Ki(t,e),Un(e)){const n=$h(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zv(t,Us(e),n)}else Nh(e)&&Gi(e,n=>{sl(t,n)})}function zv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Me(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{nl(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Jt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ki(t,Qo(t.transactionQueueTree_,e)),sl(t,t.transactionQueueTree_),It(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Hn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}qi(t,e)}},o)}function qi(t,e){const n=Uh(t,e),s=Us(n),i=$h(t,n);return Yv(t,i,s),s}function Yv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Me(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Bv)u=!0,h="maxretry",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Hh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Xo("transaction failed: Data returned ",_,a.path);let m=Ie(_);typeof _=="object"&&_!=null&&Rt(_,".priority")||(m=m.updatePriority(f.getPriority()));const M=a.currentWriteId,D=el(t),P=Rh(m,f,D);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=P,a.currentWriteId=Bh(t),o.splice(o.indexOf(M),1),i=i.concat(wh(t.serverSyncTree_,a.path,P,a.currentWriteId,a.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,M,!0))}else u=!0,h="nodata",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0))}It(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ki(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Hn(s[l]);sl(t,t.transactionQueueTree_)}function Uh(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&Un(s)===void 0;)s=Qo(s,n),e=ae(e),n=j(e);return s}function $h(t,e){const n=[];return Wh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Wh(t,e,n){const s=Un(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gi(e,i=>{Wh(t,i,n)})}function Ki(t,e){const n=Un(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xh(e,n.length>0?n:void 0)}Gi(e,s=>{Ki(t,s)})}function Vh(t,e){const n=Us(Uh(t,e)),s=Qo(t.transactionQueueTree_,e);return xv(s,i=>{vr(t,i)}),vr(t,s),Ah(s,i=>{vr(t,i)}),n}function vr(t,e){const n=Un(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xh(e,void 0):n.length=r+1,It(t.eventQueue_,Us(e),i);for(let o=0;o<s.length;o++)Hn(s[o])}}/**
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
 */function Qv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Xv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const qa=function(t,e){const n=Jv(t),s=n.namespace;n.domain==="firebase.com"&&St(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&St("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ju(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},Jv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Qv(t.substring(u,h)));const f=Xv(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Ka="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Zv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ka.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ka.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class eC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class tC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class il{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Zu(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Aa(this._queryParams),n=To(e);return n==="{}"?"default":n}get _queryObject(){return Aa(this._queryParams)}isEqual(e){if(e=Fn(e),!(e instanceof il))return!1;const n=this._repo===e._repo,s=Ao(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ym(this._path)}}class jt extends il{constructor(e,n){super(e,n,new ko,!1)}get parent(){const e=th(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=Ps(this.ref,e);return new bi(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bi(i,Ps(this.ref,s),de)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wi(t,e){return t=Fn(t),t._checkNotDeleted("ref"),e!==void 0?Ps(t._root,e):t._root}function Ps(t,e){return t=Fn(t),j(t._path)===null?Dv("child","path",e):kh("child","path",e),new jt(t._repo,_e(t._path,e))}function sC(t,e){t=Fn(t),Jo("push",t._path),Dh("push",e,t._path,!0);const n=Fh(t._repo),s=Zv(n),i=Ps(t,s),r=Ps(t,s);let o;return e!=null?o=jh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function iC(t){return Jo("remove",t._path),jh(t,null)}function jh(t,e){t=Fn(t),Jo("set",t._path),Dh("set",e,t._path,!1);const n=new Bi;return Wv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class rl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new eC("value",this,new bi(e.snapshotNode,new jt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tC(this,e,n):null}matches(e){return e instanceof rl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rC(t,e,n,s,i){const r=new nC(n,void 0),o=new rl(r);return jv(t._repo,t,o),()=>Gv(t._repo,t,o)}function Gh(t,e,n,s){return rC(t,"value",e)}rv(jt);hv(jt);/**
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
 */const oC="FIREBASE_DATABASE_EMULATOR_HOST",no={};let lC=!1;function aC(t,e,n,s){t.repoInfo_=new ju(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function cC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||St("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qa(r,i),l=o.repoInfo,a;typeof process<"u"&&fa&&(a=fa[oC]),a?(r=`http://${a}?ns=${l.namespace}`,o=qa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new wm(t.name,t.options,e);kv("Invalid Firebase Database URL",o),q(o.path)||St("Database URL must point to the root of a Firebase Database (not including a child path).");const u=hC(l,t,c,new bm(t.name,n));return new fC(u,t)}function uC(t,e){const n=no[e];(!n||n[t.key]!==t)&&St(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qv(t),delete n[t.key]}function hC(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&St("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hv(t,lC,n,s),i[t.toURLString()]=r,r}class fC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&St("Cannot call "+e+" on a deleted database.")}}function dC(t=Qg(),e){const n=qg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=L_("database");s&&pC(n,...s)}return n}function pC(t,e,n,s={}){t=Fn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&St("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&St('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zs(Zs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:F_(s.mockUserToken,t.app.options.projectId);r=new Zs(o)}aC(i,e,n,r)}/**
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
 */function _C(t){om(Yg),ci(new ws("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(da,pa,t),In(da,pa,"esm2017")}bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_C();var gC="firebase",mC="11.0.0";/**
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
 */In(gC,mC,"app");const yC={apiKey:"AIzaSyDDGZA7Wr0oXlNipfnbk2vGHrrZ8su7Za4",authDomain:"character-creator-7be8e.firebaseapp.com",databaseURL:"https://character-creator-7be8e-default-rtdb.firebaseio.com",projectId:"character-creator-7be8e",storageBucket:"character-creator-7be8e.appspot.com",messagingSenderId:"686916926734",appId:"1:686916926734:web:aefa4c260c1c59701cab5f",measurementId:"G-YEPM1R5F1Q"},vC=Tu(yC),Si=dC(vC),CC={data(){return{part:{name:"",type:"",filePath:"",tags:[]},tagsInput:""}},methods:{addPart(){this.part.tags=this.tagsInput.split(",").map(e=>e.trim());const t=wi(Si,"parts");sC(t,this.part).then(()=>{this.part={name:"",type:"",filePath:"",tags:[]},this.tagsInput=""})}}},EC={class:"add-part-wrapper"},bC={class:"add-part"},wC={class:"form-group"},SC={class:"form-group"},IC={class:"form-group"},TC={class:"form-group"};function RC(t,e,n,s,i,r){return ye(),Se("div",EC,[U("div",bC,[U("button",{onClick:e[0]||(e[0]=o=>t.$router.push("/"))},"Back"),e[11]||(e[11]=U("h3",null,"Add a New Part",-1)),U("form",{onSubmit:e[5]||(e[5]=hp((...o)=>r.addPart&&r.addPart(...o),["prevent"]))},[U("div",wC,[e[6]||(e[6]=U("label",{for:"name"},"Part Name",-1)),Qn(U("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.part.name=o),placeholder:"Enter part name",required:""},null,512),[[Jn,i.part.name]])]),U("div",SC,[e[7]||(e[7]=U("label",{for:"type"},"Type (e.g., head, eyes, etc.)",-1)),Qn(U("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.part.type=o),placeholder:"Enter part type",required:""},null,512),[[Jn,i.part.type]])]),U("div",IC,[e[8]||(e[8]=U("label",{for:"filePath"},"File Path",-1)),Qn(U("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.part.filePath=o),placeholder:"Enter file path",required:""},null,512),[[Jn,i.part.filePath]])]),U("div",TC,[e[9]||(e[9]=U("label",{for:"tags"},"Tags (comma-separated)",-1)),Qn(U("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=o=>i.tagsInput=o),placeholder:"Enter tags"},null,512),[[Jn,i.tagsInput]])]),e[10]||(e[10]=U("button",{type:"submit"},"Add Part",-1))],32)])])}const xC=ks(CC,[["render",RC],["__scopeId","data-v-0732428e"]]),NC={data(){return{menuOpen:!1,menuType:null,selectedHead:localStorage.getItem("selectedHead")||"",selectedNose:localStorage.getItem("selectedNose")||"",parts:{heads:[],noses:[]}}},methods:{toggleMenu(t){this.menuType=t||null,this.menuOpen=!this.menuOpen},selectPart(t,e){t==="head"?(this.selectedHead=e,localStorage.setItem("selectedHead",e)):t==="nose"&&(this.selectedNose=e,localStorage.setItem("selectedNose",e)),this.toggleMenu()},fetchParts(){const t=wi(Si,"parts");Gh(t,e=>{const n=e.val();this.parts.heads=Object.values(n).filter(s=>s.type==="head"),this.parts.noses=Object.values(n).filter(s=>s.type==="nose")})}},mounted(){this.fetchParts()}},AC={class:"character-builder-wrapper"},PC={class:"character-builder"},OC={class:"character-display"},DC=["src"],kC=["src"],MC={class:"side-buttons"},LC=["src","onClick"],FC=["src","onClick"];function BC(t,e,n,s,i,r){return ye(),Se("div",AC,[U("div",PC,[U("div",OC,[i.selectedHead?(ye(),Se("img",{key:0,src:i.selectedHead,alt:"Selected Head"},null,8,DC)):mn("",!0),i.selectedNose?(ye(),Se("img",{key:1,src:i.selectedNose,alt:"Selected Nose",class:"nose-overlay"},null,8,kC)):mn("",!0)]),U("div",MC,[U("button",{class:"head-button",onClick:e[0]||(e[0]=o=>r.toggleMenu("head"))},"Select Head"),U("button",{class:"nose-button",onClick:e[1]||(e[1]=o=>r.toggleMenu("nose"))},"Select Nose")]),i.menuType==="head"?(ye(),Se("div",{key:0,class:ds(["side-menu",{open:i.menuOpen}])},[U("button",{class:"close-icon",onClick:e[2]||(e[2]=o=>r.toggleMenu())},"X"),(ye(!0),Se(Ke,null,xr(i.parts.heads,(o,l)=>(ye(),Se("div",{key:l,class:"thumbnail-container"},[U("img",{src:o.filePath,alt:"Head Thumbnail",class:"thumbnail",onClick:a=>r.selectPart("head",o.filePath)},null,8,LC),U("p",null,ps(o.name),1)]))),128))],2)):mn("",!0),i.menuType==="nose"?(ye(),Se("div",{key:1,class:ds(["side-menu",{open:i.menuOpen}])},[U("button",{class:"close-icon",onClick:e[3]||(e[3]=o=>r.toggleMenu())},"X"),(ye(!0),Se(Ke,null,xr(i.parts.noses,(o,l)=>(ye(),Se("div",{key:l,class:"thumbnail-container"},[U("img",{src:o.filePath,alt:"Nose Thumbnail",class:"thumbnail",onClick:a=>r.selectPart("nose",o.filePath)},null,8,FC),U("p",null,ps(o.name),1)]))),128))],2)):mn("",!0)])])}const HC=ks(NC,[["render",BC],["__scopeId","data-v-0ba86950"]]),UC={data(){return{searchQuery:"",parts:[],filteredParts:[],showInfo:null,partToDelete:null}},methods:{fetchParts(){const t=wi(Si,"parts");Gh(t,e=>{const n=e.val();this.parts=n?Object.values(n):[],this.filteredParts=[]})},searchParts(){this.searchQuery.trim()===""?this.filteredParts=[]:this.filteredParts=this.parts.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())||t.tags.some(e=>e.toLowerCase().includes(this.searchQuery.toLowerCase())))},toggleInfo(t){this.showInfo=this.showInfo===t?null:t},confirmDelete(t){this.partToDelete=t},deletePart(t){const e=wi(Si,`parts/${t}`);iC(e).then(()=>{this.partToDelete=null,this.fetchParts()})}},mounted(){this.fetchParts()}},$C={class:"remove-parts-wrapper"},WC={class:"remove-parts-container"},VC={class:"masonry-grid"},jC={class:"card-content"},GC=["src"],qC={class:"card-footer"},KC=["onClick"],zC=["onClick"],YC={key:0,class:"overlay"},QC={key:1,class:"delete-popup"},XC=["onClick"];function JC(t,e,n,s,i,r){return ye(),Se("div",$C,[U("div",WC,[Qn(U("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),placeholder:"Search parts by name or tags...",class:"search-bar",onInput:e[1]||(e[1]=(...o)=>r.searchParts&&r.searchParts(...o))},null,544),[[Jn,i.searchQuery]]),U("div",VC,[(ye(!0),Se(Ke,null,xr(i.filteredParts,(o,l)=>(ye(),Se("div",{key:l,class:"card"},[U("div",jC,[U("img",{src:o.filePath,alt:"Part Image",class:"part-image"},null,8,GC),U("div",qC,[U("p",null,ps(o.name),1),U("button",{onClick:a=>r.toggleInfo(l)},"Info",8,KC),U("button",{onClick:a=>r.confirmDelete(l),class:"trash-button"},"🗑️",8,zC)]),i.showInfo===l?(ye(),Se("div",YC,[U("p",null,[e[4]||(e[4]=U("strong",null,"Tags:",-1)),rs(" "+ps(o.tags.join(", ")),1)]),U("button",{onClick:e[2]||(e[2]=a=>r.toggleInfo(null))},"Close")])):mn("",!0),i.partToDelete===l?(ye(),Se("div",QC,[e[5]||(e[5]=U("p",null,"Are you sure you want to delete?",-1)),U("button",{onClick:a=>r.deletePart(o.id)},"Yes",8,XC),U("button",{onClick:e[3]||(e[3]=a=>i.partToDelete=null)},"No")])):mn("",!0)])]))),128))])])])}const ZC=ks(UC,[["render",JC],["__scopeId","data-v-25e8dc33"]]),eE=[{path:"/",component:HC},{path:"/add-part",component:xC},{path:"/remove-part",component:ZC}],tE=I_({history:t_(),routes:eE}),qh=pp(Sp);qh.use(tE);qh.mount("#app");
