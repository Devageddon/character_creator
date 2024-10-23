(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function No(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ae={},kn=[],mt=()=>{},Vf=()=>!1,Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Po=t=>t.startsWith("onUpdate:"),Re=Object.assign,xo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jf=Object.prototype.hasOwnProperty,Z=(t,e)=>jf.call(t,e),W=Array.isArray,Dn=t=>Vi(t)==="[object Map]",Pc=t=>Vi(t)==="[object Set]",V=t=>typeof t=="function",be=t=>typeof t=="string",Yt=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",xc=t=>(_e(t)||V(t))&&V(t.then)&&V(t.catch),Oc=Object.prototype.toString,Vi=t=>Oc.call(t),Gf=t=>Vi(t).slice(8,-1),kc=t=>Vi(t)==="[object Object]",Oo=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ji=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kf=/-(\w)/g,Ze=ji(t=>t.replace(Kf,(e,n)=>n?n.toUpperCase():"")),qf=/\B([A-Z])/g,gn=ji(t=>t.replace(qf,"-$1").toLowerCase()),Gi=ji(t=>t.charAt(0).toUpperCase()+t.slice(1)),_r=ji(t=>t?`on${Gi(t)}`:""),Wt=(t,e)=>!Object.is(t,e),li=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Vr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hl;const Ki=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ko(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?Xf(s):ko(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(be(t)||_e(t))return t}const zf=/;(?![^(]*\))/g,Yf=/:([^]+)/,Qf=/\/\*[^]*?\*\//g;function Xf(t){const e={};return t.replace(Qf,"").split(zf).forEach(n=>{if(n){const s=n.split(Yf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qi(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=qi(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zf=No(Jf);function Mc(t){return!!t||t===""}const Lc=t=>!!(t&&t.__v_isRef===!0),pi=t=>be(t)?t:t==null?"":W(t)||_e(t)&&(t.toString===Oc||!V(t.toString))?Lc(t)?pi(t.value):JSON.stringify(t,Fc,2):String(t),Fc=(t,e)=>Lc(e)?Fc(t,e.value):Dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[gr(s,r)+" =>"]=i,n),{})}:Pc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gr(n))}:Yt(e)?gr(e):_e(e)&&!W(e)&&!kc(e)?String(e):e,gr=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class Uc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!e&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ze;try{return ze=this,e()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ed(t){return new Uc(t)}function td(){return ze}let ue;const mr=new WeakSet;class Bc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mr.has(this)&&(mr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$c(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$l(this),Wc(this);const e=ue,n=at;ue=this,at=!0;try{return this.fn()}finally{Vc(this),ue=e,at=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lo(e);this.deps=this.depsTail=void 0,$l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jr(this)&&this.run()}get dirty(){return jr(this)}}let Hc=0,vs,bs;function $c(t,e=!1){if(t.flags|=8,e){t.next=bs,bs=t;return}t.next=vs,vs=t}function Do(){Hc++}function Mo(){if(--Hc>0)return;if(bs){let e=bs;for(bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vs;){let e=vs;for(vs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Wc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Lo(s),nd(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function jr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Os))return;t.globalVersion=Os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jr(t)){t.flags&=-3;return}const n=ue,s=at;ue=t,at=!0;try{Wc(t);const i=t.fn(t._value);(e.version===0||Wt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=n,at=s,Vc(t),t.flags&=-3}}function Lo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Lo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function nd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let at=!0;const Gc=[];function Qt(){Gc.push(at),at=!1}function Xt(){const t=Gc.pop();at=t===void 0?!0:t}function $l(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ue;ue=void 0;try{e()}finally{ue=n}}}let Os=0;class sd{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ue||!at||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new sd(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,Kc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(e){this.version++,Os++,this.notify(e)}notify(e){Do();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mo()}}}function Kc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Kc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Gr=new WeakMap,cn=Symbol(""),Kr=Symbol(""),ks=Symbol("");function xe(t,e,n){if(at&&ue){let s=Gr.get(t);s||Gr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Fo),i.map=s,i.key=n),i.track()}}function St(t,e,n,s,i,r){const o=Gr.get(t);if(!o){Os++;return}const l=a=>{a&&a.trigger()};if(Do(),e==="clear")o.forEach(l);else{const a=W(t),c=a&&Oo(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===ks||!Yt(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(ks)),e){case"add":a?c&&l(o.get("length")):(l(o.get(cn)),Dn(t)&&l(o.get(Kr)));break;case"delete":a||(l(o.get(cn)),Dn(t)&&l(o.get(Kr)));break;case"set":Dn(t)&&l(o.get(cn));break}}Mo()}function Sn(t){const e=J(t);return e===t?e:(xe(e,"iterate",ks),Je(t)?e:e.map(Oe))}function zi(t){return xe(t=J(t),"iterate",ks),t}const id={__proto__:null,[Symbol.iterator](){return yr(this,Symbol.iterator,Oe)},concat(...t){return Sn(this).concat(...t.map(e=>W(e)?Sn(e):e))},entries(){return yr(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return Ct(this,"every",t,e,void 0,arguments)},filter(t,e){return Ct(this,"filter",t,e,n=>n.map(Oe),arguments)},find(t,e){return Ct(this,"find",t,e,Oe,arguments)},findIndex(t,e){return Ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ct(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return Ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return vr(this,"includes",t)},indexOf(...t){return vr(this,"indexOf",t)},join(t){return Sn(this).join(t)},lastIndexOf(...t){return vr(this,"lastIndexOf",t)},map(t,e){return Ct(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return Wl(this,"reduce",t,e)},reduceRight(t,...e){return Wl(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return Ct(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return Sn(this).toReversed()},toSorted(t){return Sn(this).toSorted(t)},toSpliced(...t){return Sn(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return yr(this,"values",Oe)}};function yr(t,e,n){const s=zi(t),i=s[e]();return s!==t&&!Je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const rd=Array.prototype;function Ct(t,e,n,s,i,r){const o=zi(t),l=o!==t&&!Je(t),a=o[e];if(a!==rd[e]){const h=a.apply(t,r);return l?Oe(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,Oe(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Wl(t,e,n,s){const i=zi(t);let r=n;return i!==t&&(Je(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Oe(l),a,t)}),i[e](r,...s)}function vr(t,e,n){const s=J(t);xe(s,"iterate",ks);const i=s[e](...n);return(i===-1||i===!1)&&Ho(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function us(t,e,n=[]){Qt(),Do();const s=J(t)[e].apply(t,n);return Mo(),Xt(),s}const od=No("__proto__,__v_isRef,__isVue"),qc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function ld(t){Yt(t)||(t=String(t));const e=J(this);return xe(e,"has",t),e.hasOwnProperty(t)}class zc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?md:Jc:r?Xc:Qc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let a;if(o&&(a=id[n]))return a;if(n==="hasOwnProperty")return ld}const l=Reflect.get(e,n,De(e)?e:s);return(Yt(n)?qc.has(n):od(n))||(i||xe(e,"get",n),r)?l:De(l)?o&&Oo(n)?l:l.value:_e(l)?i?Zc(l):es(l):l}}class Yc extends zc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=un(r);if(!Je(s)&&!un(s)&&(r=J(r),s=J(s)),!W(e)&&De(r)&&!De(s))return a?!1:(r.value=s,!0)}const o=W(e)&&Oo(n)?Number(n)<e.length:Z(e,n),l=Reflect.set(e,n,s,De(e)?e:i);return e===J(i)&&(o?Wt(s,r)&&St(e,"set",n,s):St(e,"add",n,s)),l}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&St(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Yt(n)||!qc.has(n))&&xe(e,"has",n),s}ownKeys(e){return xe(e,"iterate",W(e)?"length":cn),Reflect.ownKeys(e)}}class ad extends zc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cd=new Yc,ud=new ad,hd=new Yc(!0);const qr=t=>t,ti=t=>Reflect.getPrototypeOf(t);function fd(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=Dn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?qr:e?zr:Oe;return!e&&xe(r,"iterate",a?Kr:cn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ni(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dd(t,e){const n={get(i){const r=this.__v_raw,o=J(r),l=J(i);t||(Wt(i,l)&&xe(o,"get",i),xe(o,"get",l));const{has:a}=ti(o),c=e?qr:t?zr:Oe;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&xe(J(i),"iterate",cn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),l=J(i);return t||(Wt(i,l)&&xe(o,"has",i),xe(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=J(l),c=e?qr:t?zr:Oe;return!t&&xe(a,"iterate",cn),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Re(n,t?{add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear")}:{add(i){!e&&!Je(i)&&!un(i)&&(i=J(i));const r=J(this);return ti(r).has.call(r,i)||(r.add(i),St(r,"add",i,i)),this},set(i,r){!e&&!Je(r)&&!un(r)&&(r=J(r));const o=J(this),{has:l,get:a}=ti(o);let c=l.call(o,i);c||(i=J(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Wt(r,u)&&St(o,"set",i,r):St(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:l}=ti(r);let a=o.call(r,i);a||(i=J(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&St(r,"delete",i,void 0),c},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&St(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=fd(i,t,e)}),n}function Uo(t,e){const n=dd(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const pd={get:Uo(!1,!1)},_d={get:Uo(!1,!0)},gd={get:Uo(!0,!1)};const Qc=new WeakMap,Xc=new WeakMap,Jc=new WeakMap,md=new WeakMap;function yd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vd(t){return t.__v_skip||!Object.isExtensible(t)?0:yd(Gf(t))}function es(t){return un(t)?t:Bo(t,!1,cd,pd,Qc)}function bd(t){return Bo(t,!1,hd,_d,Xc)}function Zc(t){return Bo(t,!0,ud,gd,Jc)}function Bo(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=vd(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Mn(t){return un(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function un(t){return!!(t&&t.__v_isReadonly)}function Je(t){return!!(t&&t.__v_isShallow)}function Ho(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Ed(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Dc(t,"__v_skip",!0),t}const Oe=t=>_e(t)?es(t):t,zr=t=>_e(t)?Zc(t):t;function De(t){return t?t.__v_isRef===!0:!1}function Cd(t){return eu(t,!1)}function wd(t){return eu(t,!0)}function eu(t,e){return De(t)?t:new Sd(t,e)}class Sd{constructor(e,n){this.dep=new Fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Je(e)||un(e);e=s?e:J(e),Wt(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function Es(t){return De(t)?t.value:t}const Id={get:(t,e,n)=>e==="__v_raw"?t:Es(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function tu(t){return Mn(t)?t:new Proxy(t,Id)}class Td{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return $c(this,!0),!0}get value(){const e=this.dep.track();return jc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rd(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new Td(s,i,n)}const si={},_i=new WeakMap;let rn;function Ad(t,e=!1,n=rn){if(n){let s=_i.get(n);s||_i.set(n,s=[]),s.push(t)}}function Nd(t,e,n=ae){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=P=>i?P:Je(P)||i===!1||i===0?It(P,1):It(P);let u,h,f,_,m=!1,w=!1;if(De(t)?(h=()=>t.value,m=Je(t)):Mn(t)?(h=()=>c(t),m=!0):W(t)?(w=!0,m=t.some(P=>Mn(P)||Je(P)),h=()=>t.map(P=>{if(De(P))return P.value;if(Mn(P))return c(P);if(V(P))return a?a(P,2):P()})):V(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){Qt();try{f()}finally{Xt()}}const P=rn;rn=u;try{return a?a(t,3,[_]):t(_)}finally{rn=P}}:h=mt,e&&i){const P=h,Q=i===!0?1/0:i;h=()=>It(P(),Q)}const O=td(),k=()=>{u.stop(),O&&xo(O.effects,u)};if(r&&e){const P=e;e=(...Q)=>{P(...Q),k()}}let M=w?new Array(t.length).fill(si):si;const B=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const Q=u.run();if(i||m||(w?Q.some((ge,Ee)=>Wt(ge,M[Ee])):Wt(Q,M))){f&&f();const ge=rn;rn=u;try{const Ee=[Q,M===si?void 0:w&&M[0]===si?[]:M,_];a?a(e,3,Ee):e(...Ee),M=Q}finally{rn=ge}}}else u.run()};return l&&l(B),u=new Bc(h),u.scheduler=o?()=>o(B,!1):B,_=P=>Ad(P,!1,u),f=u.onStop=()=>{const P=_i.get(u);if(P){if(a)a(P,4);else for(const Q of P)Q();_i.delete(u)}},e?s?B(!0):M=u.run():o?o(B.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function It(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,De(t))It(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)It(t[s],e,n);else if(Pc(t)||Dn(t))t.forEach(s=>{It(s,e,n)});else if(kc(t)){for(const s in t)It(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&It(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zs(t,e,n,s){try{return s?t(...s):t()}catch(i){Yi(i,e,n)}}function yt(t,e,n,s){if(V(t)){const i=zs(t,e,n,s);return i&&xc(i)&&i.catch(r=>{Yi(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(yt(t[r],e,n,s));return i}}function Yi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ae;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Qt(),zs(r,null,10,[t,a,c]),Xt();return}}Pd(t,n,i,s,o)}function Pd(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Le=[];let _t=-1;const Ln=[];let Ut=null,Nn=0;const nu=Promise.resolve();let gi=null;function su(t){const e=gi||nu;return t?e.then(this?t.bind(this):t):e}function xd(t){let e=_t+1,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=Ds(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function $o(t){if(!(t.flags&1)){const e=Ds(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=Ds(n)?Le.push(t):Le.splice(xd(e),0,t),t.flags|=1,iu()}}function iu(){gi||(gi=nu.then(ou))}function Od(t){W(t)?Ln.push(...t):Ut&&t.id===-1?Ut.splice(Nn+1,0,t):t.flags&1||(Ln.push(t),t.flags|=1),iu()}function Vl(t,e,n=_t+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ru(t){if(Ln.length){const e=[...new Set(Ln)].sort((n,s)=>Ds(n)-Ds(s));if(Ln.length=0,Ut){Ut.push(...e);return}for(Ut=e,Nn=0;Nn<Ut.length;Nn++){const n=Ut[Nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,Nn=0}}const Ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ou(t){try{for(_t=0;_t<Le.length;_t++){const e=Le[_t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_t<Le.length;_t++){const e=Le[_t];e&&(e.flags&=-2)}_t=-1,Le.length=0,ru(),gi=null,(Le.length||Ln.length)&&ou()}}let Ye=null,lu=null;function mi(t){const e=Ye;return Ye=t,lu=t&&t.type.__scopeId||null,e}function ai(t,e=Ye,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jl(-1);const r=mi(e);let o;try{o=t(...i)}finally{mi(r),s._d&&Jl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Tt(t,e){if(Ye===null)return t;const n=Zi(Ye),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=ae]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&It(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function nn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Qt(),yt(a,n,8,[t.el,l,t,e]),Xt())}}const kd=Symbol("_vte"),Dd=t=>t.__isTeleport;function Wo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function au(t,e){return V(t)?Re({name:t.name},e,{setup:t}):t}function cu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yr(t,e,n,s,i=!1){if(W(t)){t.forEach((m,w)=>Yr(m,e&&(W(e)?e[w]:e),n,s,i));return}if(Cs(s)&&!i)return;const r=s.shapeFlag&4?Zi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ae?l.refs={}:l.refs,h=l.setupState,f=J(h),_=h===ae?()=>!1:m=>Z(f,m);if(c!=null&&c!==a&&(be(c)?(u[c]=null,_(c)&&(h[c]=null)):De(c)&&(c.value=null)),V(a))zs(a,l,12,[o,u]);else{const m=be(a),w=De(a);if(m||w){const O=()=>{if(t.f){const k=m?_(a)?h[a]:u[a]:a.value;i?W(k)&&xo(k,r):W(k)?k.includes(r)||k.push(r):m?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,_(a)&&(h[a]=o)):w&&(a.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,qe(O,n)):O()}}}Ki().requestIdleCallback;Ki().cancelIdleCallback;const Cs=t=>!!t.type.__asyncLoader,uu=t=>t.type.__isKeepAlive;function Md(t,e){hu(t,"a",e)}function Ld(t,e){hu(t,"da",e)}function hu(t,e,n=ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)uu(i.parent.vnode)&&Fd(s,e,n,i),i=i.parent}}function Fd(t,e,n,s){const i=Qi(e,t,s,!0);fu(()=>{xo(s[e],i)},n)}function Qi(t,e,n=ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Qt();const l=Ys(n),a=yt(e,n,t,o);return l(),Xt(),a});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=ke)=>{(!Ls||t==="sp")&&Qi(t,(...s)=>e(...s),n)},Ud=kt("bm"),Bd=kt("m"),Hd=kt("bu"),$d=kt("u"),Wd=kt("bum"),fu=kt("um"),Vd=kt("sp"),jd=kt("rtg"),Gd=kt("rtc");function Kd(t,e=ke){Qi("ec",t,e)}const qd="components";function yi(t,e){return Yd(qd,t,!0,e)||t}const zd=Symbol.for("v-ndc");function Yd(t,e,n=!0,s=!1){const i=Ye||ke;if(i){const r=i.type;{const l=Mp(r,!1);if(l&&(l===e||l===Ze(e)||l===Gi(Ze(e))))return r}const o=jl(i[t]||r[t],e)||jl(i.appContext[t],e);return!o&&s?r:o}}function jl(t,e){return t&&(t[e]||t[Ze(e)]||t[Gi(Ze(e))])}function du(t,e,n,s){let i;const r=n,o=W(t);if(o||be(t)){const l=o&&Mn(t);let a=!1;l&&(a=!Je(t),t=zi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Oe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Qr=t=>t?Du(t)?Zi(t):Qr(t.parent):null,ws=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qr(t.parent),$root:t=>Qr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vo(t),$forceUpdate:t=>t.f||(t.f=()=>{$o(t.update)}),$nextTick:t=>t.n||(t.n=su.bind(t.proxy)),$watch:t=>gp.bind(t)}),br=(t,e)=>t!==ae&&!t.__isScriptSetup&&Z(t,e),Qd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(br(s,e))return o[e]=1,s[e];if(i!==ae&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==ae&&Z(n,e))return o[e]=4,n[e];Xr&&(o[e]=0)}}const u=ws[e];let h,f;if(u)return e==="$attrs"&&xe(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ae&&Z(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,Z(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return br(i,e)?(i[e]=n,!0):s!==ae&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ae&&Z(t,o)||br(e,o)||(l=r[0])&&Z(l,o)||Z(s,o)||Z(ws,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xr=!0;function Xd(t){const e=Vo(t),n=t.proxy,s=t.ctx;Xr=!1,e.beforeCreate&&Kl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:w,deactivated:O,beforeDestroy:k,beforeUnmount:M,destroyed:B,unmounted:P,render:Q,renderTracked:ge,renderTriggered:Ee,errorCaptured:Ue,serverPrefetch:Zt,expose:ft,inheritAttrs:Dt,components:Mt,directives:Cn,filters:en}=e;if(c&&Jd(c,s,null),o)for(const ie in o){const ne=o[ie];V(ne)&&(s[ie]=ne.bind(n))}if(i){const ie=i.call(n,n);_e(ie)&&(t.data=es(ie))}if(Xr=!0,r)for(const ie in r){const ne=r[ie],et=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):mt,tn=!V(ne)&&V(ne.set)?ne.set.bind(n):mt,tt=it({get:et,set:tn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Be=>tt.value=Be})}if(l)for(const ie in l)pu(l[ie],s,n,ie);if(a){const ie=V(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(ne=>{ci(ne,ie[ne])})}u&&Kl(u,t,"c");function ve(ie,ne){W(ne)?ne.forEach(et=>ie(et.bind(n))):ne&&ie(ne.bind(n))}if(ve(Ud,h),ve(Bd,f),ve(Hd,_),ve($d,m),ve(Md,w),ve(Ld,O),ve(Kd,Ue),ve(Gd,ge),ve(jd,Ee),ve(Wd,M),ve(fu,P),ve(Vd,Zt),W(ft))if(ft.length){const ie=t.exposed||(t.exposed={});ft.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:et=>n[ne]=et})})}else t.exposed||(t.exposed={});Q&&t.render===mt&&(t.render=Q),Dt!=null&&(t.inheritAttrs=Dt),Mt&&(t.components=Mt),Cn&&(t.directives=Cn),Zt&&cu(t)}function Jd(t,e,n=mt){W(t)&&(t=Jr(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Nt(i.from||s,i.default,!0):r=Nt(i.from||s):r=Nt(i),De(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Kl(t,e,n){yt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pu(t,e,n,s){let i=s.includes(".")?Au(n,s):()=>n[s];if(be(t)){const r=e[t];V(r)&&Un(i,r)}else if(V(t))Un(i,t.bind(n));else if(_e(t))if(W(t))t.forEach(r=>pu(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&Un(i,r,t)}}function Vo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>vi(a,c,o,!0)),vi(a,e,o)),_e(e)&&r.set(e,a),a}function vi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vi(t,r,n,!0),i&&i.forEach(o=>vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Zd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Zd={data:ql,props:zl,emits:zl,methods:ms,computed:ms,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:ms,directives:ms,watch:tp,provide:ql,inject:ep};function ql(t,e){return e?t?function(){return Re(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function ep(t,e){return ms(Jr(t),Jr(e))}function Jr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function ms(t,e){return t?Re(Object.create(null),t,e):e}function zl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Re(Object.create(null),Gl(t),Gl(e??{})):e}function tp(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Me(t[s],e[s]);return n}function _u(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let np=0;function sp(t,e){return function(s,i=null){V(s)||(s=Re({},s)),i!=null&&!_e(i)&&(i=null);const r=_u(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:np++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Fp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...h)):V(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const _=c._ceVNode||Te(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(_,u):t(_,u,f),a=!0,c._container=u,u.__vue_app__=c,Zi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(yt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Fn;Fn=c;try{return u()}finally{Fn=h}}};return c}}let Fn=null;function ci(t,e){if(ke){let n=ke.provides;const s=ke.parent&&ke.parent.provides;s===n&&(n=ke.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=ke||Ye;if(s||Fn){const i=Fn?Fn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const gu={},mu=()=>Object.create(gu),yu=t=>Object.getPrototypeOf(t)===gu;function ip(t,e,n,s=!1){const i={},r=mu();t.propsDefaults=Object.create(null),vu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:bd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function rp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xi(t.emitsOptions,f))continue;const _=e[f];if(a)if(Z(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=Ze(f);i[m]=Zr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{vu(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Z(e,h)&&((u=gn(h))===h||!Z(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Zr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&St(t.attrs,"set","")}function vu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ys(a))continue;const c=e[a];let u;i&&Z(i,u=Ze(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Xi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zr(i,a,h,c[h],t,!Z(c,h))}}return o}function Zr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Z(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ys(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===gn(n))&&(s=!0))}return s}const op=new WeakMap;function bu(t,e,n=!1){const s=n?op:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[f,_]=bu(h,e,!0);Re(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return _e(t)&&s.set(t,kn),kn;if(W(r))for(let u=0;u<r.length;u++){const h=Ze(r[u]);Yl(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=Ze(u);if(Yl(h)){const f=r[u],_=o[h]=W(f)||V(f)?{type:f}:Re({},f),m=_.type;let w=!1,O=!0;if(W(m))for(let k=0;k<m.length;++k){const M=m[k],B=V(M)&&M.name;if(B==="Boolean"){w=!0;break}else B==="String"&&(O=!1)}else w=V(m)&&m.name==="Boolean";_[0]=w,_[1]=O,(w||Z(_,"default"))&&l.push(h)}}const c=[o,l];return _e(t)&&s.set(t,c),c}function Yl(t){return t[0]!=="$"&&!ys(t)}const Eu=t=>t[0]==="_"||t==="$stable",jo=t=>W(t)?t.map(gt):[gt(t)],lp=(t,e,n)=>{if(e._n)return e;const s=ai((...i)=>jo(e(...i)),n);return s._c=!1,s},Cu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Eu(i))continue;const r=t[i];if(V(r))e[i]=lp(i,r,s);else if(r!=null){const o=jo(r);e[i]=()=>o}}},wu=(t,e)=>{const n=jo(e);t.slots.default=()=>n},Su=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},ap=(t,e,n)=>{const s=t.slots=mu();if(t.vnode.shapeFlag&32){const i=e._;i?(Su(s,e,n),n&&Dc(s,"_",i,!0)):Cu(e,s)}else e&&wu(t,e)},cp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Su(i,e,n):(r=!e.$stable,Cu(e,i)),o=e}else e&&(wu(t,e),o={default:1});if(r)for(const l in i)!Eu(l)&&o[l]==null&&delete i[l]},qe=wp;function up(t){return hp(t)}function hp(t,e){const n=Ki();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=mt,insertStaticContent:m}=t,w=(d,p,g,E=null,v=null,b=null,A=void 0,T=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!hs(d,p)&&(E=N(d),Be(d,v,b,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:U,shapeFlag:x}=p;switch(C){case Ji:O(d,p,g,E);break;case hn:k(d,p,g,E);break;case wr:d==null&&M(p,g,E,A);break;case st:Mt(d,p,g,E,v,b,A,T,I);break;default:x&1?Q(d,p,g,E,v,b,A,T,I):x&6?Cn(d,p,g,E,v,b,A,T,I):(x&64||x&128)&&C.process(d,p,g,E,v,b,A,T,I,pe)}U!=null&&v&&Yr(U,d&&d.ref,b,p||d,!p)},O=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},k=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},M=(d,p,g,E)=>{[d.el,d.anchor]=m(d.children,p,g,E,d.el,d.anchor)},B=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,E),d=v;s(p,g,E)},P=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Q=(d,p,g,E,v,b,A,T,I)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?ge(p,g,E,v,b,A,T,I):Zt(d,p,v,b,A,T,I)},ge=(d,p,g,E,v,b,A,T)=>{let I,C;const{props:U,shapeFlag:x,transition:L,dirs:$}=d;if(I=d.el=o(d.type,b,U&&U.is,U),x&8?u(I,d.children):x&16&&Ue(d.children,I,null,E,v,Er(d,b),A,T),$&&nn(d,null,E,"created"),Ee(I,d,d.scopeId,A,E),U){for(const ce in U)ce!=="value"&&!ys(ce)&&r(I,ce,null,U[ce],b,E);"value"in U&&r(I,"value",null,U.value,b),(C=U.onVnodeBeforeMount)&&pt(C,E,d)}$&&nn(d,null,E,"beforeMount");const Y=fp(v,L);Y&&L.beforeEnter(I),s(I,p,g),((C=U&&U.onVnodeMounted)||Y||$)&&qe(()=>{C&&pt(C,E,d),Y&&L.enter(I),$&&nn(d,null,E,"mounted")},v)},Ee=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let b=0;b<E.length;b++)_(d,E[b]);if(v){let b=v.subTree;if(p===b||Pu(b.type)&&(b.ssContent===p||b.ssFallback===p)){const A=v.vnode;Ee(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Ue=(d,p,g,E,v,b,A,T,I=0)=>{for(let C=I;C<d.length;C++){const U=d[C]=T?Bt(d[C]):gt(d[C]);w(null,U,p,g,E,v,b,A,T)}},Zt=(d,p,g,E,v,b,A)=>{const T=p.el=d.el;let{patchFlag:I,dynamicChildren:C,dirs:U}=p;I|=d.patchFlag&16;const x=d.props||ae,L=p.props||ae;let $;if(g&&sn(g,!1),($=L.onVnodeBeforeUpdate)&&pt($,g,p,d),U&&nn(p,d,g,"beforeUpdate"),g&&sn(g,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&u(T,""),C?ft(d.dynamicChildren,C,T,g,E,Er(p,v),b):A||ne(d,p,T,null,g,E,Er(p,v),b,!1),I>0){if(I&16)Dt(T,x,L,g,v);else if(I&2&&x.class!==L.class&&r(T,"class",null,L.class,v),I&4&&r(T,"style",x.style,L.style,v),I&8){const Y=p.dynamicProps;for(let ce=0;ce<Y.length;ce++){const ee=Y[ce],je=x[ee],Pe=L[ee];(Pe!==je||ee==="value")&&r(T,ee,je,Pe,v,g)}}I&1&&d.children!==p.children&&u(T,p.children)}else!A&&C==null&&Dt(T,x,L,g,v);(($=L.onVnodeUpdated)||U)&&qe(()=>{$&&pt($,g,p,d),U&&nn(p,d,g,"updated")},E)},ft=(d,p,g,E,v,b,A)=>{for(let T=0;T<p.length;T++){const I=d[T],C=p[T],U=I.el&&(I.type===st||!hs(I,C)||I.shapeFlag&70)?h(I.el):g;w(I,C,U,null,E,v,b,A,!0)}},Dt=(d,p,g,E,v)=>{if(p!==g){if(p!==ae)for(const b in p)!ys(b)&&!(b in g)&&r(d,b,p[b],null,v,E);for(const b in g){if(ys(b))continue;const A=g[b],T=p[b];A!==T&&b!=="value"&&r(d,b,T,A,v,E)}"value"in g&&r(d,"value",p.value,g.value,v)}},Mt=(d,p,g,E,v,b,A,T,I)=>{const C=p.el=d?d.el:l(""),U=p.anchor=d?d.anchor:l("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:$}=p;$&&(T=T?T.concat($):$),d==null?(s(C,g,E),s(U,g,E),Ue(p.children||[],g,U,v,b,A,T,I)):x>0&&x&64&&L&&d.dynamicChildren?(ft(d.dynamicChildren,L,g,v,b,A,T),(p.key!=null||v&&p===v.subTree)&&Iu(d,p,!0)):ne(d,p,g,U,v,b,A,T,I)},Cn=(d,p,g,E,v,b,A,T,I)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,A,I):en(p,g,E,v,b,A,I):as(d,p,I)},en=(d,p,g,E,v,b,A)=>{const T=d.component=Pp(d,E,v);if(uu(d)&&(T.ctx.renderer=pe),xp(T,!1,A),T.asyncDep){if(v&&v.registerDep(T,ve,A),!d.el){const I=T.subTree=Te(hn);k(null,I,p,g)}}else ve(T,d,p,g,v,b,A)},as=(d,p,g)=>{const E=p.component=d.component;if(Ep(d,p,g))if(E.asyncDep&&!E.asyncResolved){ie(E,p,g);return}else E.next=p,E.update();else p.el=d.el,E.vnode=p},ve=(d,p,g,E,v,b,A)=>{const T=()=>{if(d.isMounted){let{next:x,bu:L,u:$,parent:Y,vnode:ce}=d;{const Ge=Tu(d);if(Ge){x&&(x.el=ce.el,ie(d,x,A)),Ge.asyncDep.then(()=>{d.isUnmounted||T()});return}}let ee=x,je;sn(d,!1),x?(x.el=ce.el,ie(d,x,A)):x=ce,L&&li(L),(je=x.props&&x.props.onVnodeBeforeUpdate)&&pt(je,Y,x,ce),sn(d,!0);const Pe=Cr(d),nt=d.subTree;d.subTree=Pe,w(nt,Pe,h(nt.el),N(nt),d,v,b),x.el=Pe.el,ee===null&&Cp(d,Pe.el),$&&qe($,v),(je=x.props&&x.props.onVnodeUpdated)&&qe(()=>pt(je,Y,x,ce),v)}else{let x;const{el:L,props:$}=p,{bm:Y,m:ce,parent:ee,root:je,type:Pe}=d,nt=Cs(p);if(sn(d,!1),Y&&li(Y),!nt&&(x=$&&$.onVnodeBeforeMount)&&pt(x,ee,p),sn(d,!0),L&&j){const Ge=()=>{d.subTree=Cr(d),j(L,d.subTree,d,v,null)};nt&&Pe.__asyncHydrate?Pe.__asyncHydrate(L,d,Ge):Ge()}else{je.ce&&je.ce._injectChildStyle(Pe);const Ge=d.subTree=Cr(d);w(null,Ge,g,E,d,v,b),p.el=Ge.el}if(ce&&qe(ce,v),!nt&&(x=$&&$.onVnodeMounted)){const Ge=p;qe(()=>pt(x,ee,Ge),v)}(p.shapeFlag&256||ee&&Cs(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&qe(d.a,v),d.isMounted=!0,p=g=E=null}};d.scope.on();const I=d.effect=new Bc(T);d.scope.off();const C=d.update=I.run.bind(I),U=d.job=I.runIfDirty.bind(I);U.i=d,U.id=d.uid,I.scheduler=()=>$o(U),sn(d,!0),C()},ie=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,rp(d,p.props,E,g),cp(d,p.children,g),Qt(),Vl(d),Xt()},ne=(d,p,g,E,v,b,A,T,I=!1)=>{const C=d&&d.children,U=d?d.shapeFlag:0,x=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){tn(C,x,g,E,v,b,A,T,I);return}else if(L&256){et(C,x,g,E,v,b,A,T,I);return}}$&8?(U&16&&D(C,v,b),x!==C&&u(g,x)):U&16?$&16?tn(C,x,g,E,v,b,A,T,I):D(C,v,b,!0):(U&8&&u(g,""),$&16&&Ue(x,g,E,v,b,A,T,I))},et=(d,p,g,E,v,b,A,T,I)=>{d=d||kn,p=p||kn;const C=d.length,U=p.length,x=Math.min(C,U);let L;for(L=0;L<x;L++){const $=p[L]=I?Bt(p[L]):gt(p[L]);w(d[L],$,g,null,v,b,A,T,I)}C>U?D(d,v,b,!0,!1,x):Ue(p,g,E,v,b,A,T,I,x)},tn=(d,p,g,E,v,b,A,T,I)=>{let C=0;const U=p.length;let x=d.length-1,L=U-1;for(;C<=x&&C<=L;){const $=d[C],Y=p[C]=I?Bt(p[C]):gt(p[C]);if(hs($,Y))w($,Y,g,null,v,b,A,T,I);else break;C++}for(;C<=x&&C<=L;){const $=d[x],Y=p[L]=I?Bt(p[L]):gt(p[L]);if(hs($,Y))w($,Y,g,null,v,b,A,T,I);else break;x--,L--}if(C>x){if(C<=L){const $=L+1,Y=$<U?p[$].el:E;for(;C<=L;)w(null,p[C]=I?Bt(p[C]):gt(p[C]),g,Y,v,b,A,T,I),C++}}else if(C>L)for(;C<=x;)Be(d[C],v,b,!0),C++;else{const $=C,Y=C,ce=new Map;for(C=Y;C<=L;C++){const Ke=p[C]=I?Bt(p[C]):gt(p[C]);Ke.key!=null&&ce.set(Ke.key,C)}let ee,je=0;const Pe=L-Y+1;let nt=!1,Ge=0;const cs=new Array(Pe);for(C=0;C<Pe;C++)cs[C]=0;for(C=$;C<=x;C++){const Ke=d[C];if(je>=Pe){Be(Ke,v,b,!0);continue}let dt;if(Ke.key!=null)dt=ce.get(Ke.key);else for(ee=Y;ee<=L;ee++)if(cs[ee-Y]===0&&hs(Ke,p[ee])){dt=ee;break}dt===void 0?Be(Ke,v,b,!0):(cs[dt-Y]=C+1,dt>=Ge?Ge=dt:nt=!0,w(Ke,p[dt],g,null,v,b,A,T,I),je++)}const Ul=nt?dp(cs):kn;for(ee=Ul.length-1,C=Pe-1;C>=0;C--){const Ke=Y+C,dt=p[Ke],Bl=Ke+1<U?p[Ke+1].el:E;cs[C]===0?w(null,dt,g,Bl,v,b,A,T,I):nt&&(ee<0||C!==Ul[ee]?tt(dt,g,Bl,2):ee--)}}},tt=(d,p,g,E,v=null)=>{const{el:b,type:A,transition:T,children:I,shapeFlag:C}=d;if(C&6){tt(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){A.move(d,p,g,pe);return}if(A===st){s(b,p,g);for(let x=0;x<I.length;x++)tt(I[x],p,g,E);s(d.anchor,p,g);return}if(A===wr){B(d,p,g);return}if(E!==2&&C&1&&T)if(E===0)T.beforeEnter(b),s(b,p,g),qe(()=>T.enter(b),v);else{const{leave:x,delayLeave:L,afterLeave:$}=T,Y=()=>s(b,p,g),ce=()=>{x(b,()=>{Y(),$&&$()})};L?L(b,Y,ce):ce()}else s(b,p,g)},Be=(d,p,g,E=!1,v=!1)=>{const{type:b,props:A,ref:T,children:I,dynamicChildren:C,shapeFlag:U,patchFlag:x,dirs:L,cacheIndex:$}=d;if(x===-2&&(v=!1),T!=null&&Yr(T,null,g,d,!0),$!=null&&(p.renderCache[$]=void 0),U&256){p.ctx.deactivate(d);return}const Y=U&1&&L,ce=!Cs(d);let ee;if(ce&&(ee=A&&A.onVnodeBeforeUnmount)&&pt(ee,p,d),U&6)y(d.component,g,E);else{if(U&128){d.suspense.unmount(g,E);return}Y&&nn(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,g,pe,E):C&&!C.hasOnce&&(b!==st||x>0&&x&64)?D(C,p,g,!1,!0):(b===st&&x&384||!v&&U&16)&&D(I,p,g),E&&wn(d)}(ce&&(ee=A&&A.onVnodeUnmounted)||Y)&&qe(()=>{ee&&pt(ee,p,d),Y&&nn(d,null,p,"unmounted")},g)},wn=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===st){Fl(g,E);return}if(p===wr){P(d);return}const b=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:T}=v,I=()=>A(g,b);T?T(d.el,b,I):I()}else b()},Fl=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},y=(d,p,g)=>{const{bum:E,scope:v,job:b,subTree:A,um:T,m:I,a:C}=d;Ql(I),Ql(C),E&&li(E),v.stop(),b&&(b.flags|=8,Be(A,d,p,g)),T&&qe(T,p),qe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},D=(d,p,g,E=!1,v=!1,b=0)=>{for(let A=b;A<d.length;A++)Be(d[A],p,g,E,v)},N=d=>{if(d.shapeFlag&6)return N(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[kd];return g?f(g):p};let F=!1;const re=(d,p,g)=>{d==null?p._vnode&&Be(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,g),p._vnode=d,F||(F=!0,Vl(),ru(),F=!1)},pe={p:w,um:Be,m:tt,r:wn,mt:en,mc:Ue,pc:ne,pbc:ft,n:N,o:t};let z,j;return{render:re,hydrate:z,createApp:sp(re,z)}}function Er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Iu(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Bt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Iu(o,l)),l.type===Ji&&(l.el=o.el)}}function dp(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Tu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tu(e)}function Ql(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const pp=Symbol.for("v-scx"),_p=()=>Nt(pp);function Un(t,e,n){return Ru(t,e,n)}function Ru(t,e,n=ae){const{immediate:s,deep:i,flush:r,once:o}=n,l=Re({},n),a=e&&s||!e&&r!=="post";let c;if(Ls){if(r==="sync"){const _=_p();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=mt,_.resume=mt,_.pause=mt,_}}const u=ke;l.call=(_,m,w)=>yt(_,u,m,w);let h=!1;r==="post"?l.scheduler=_=>{qe(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():$o(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Nd(t,e,l);return Ls&&(c?c.push(f):a&&f()),f}function gp(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?Au(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=Ys(this),l=Ru(i,r.bind(s),n);return o(),l}function Au(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const mp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ze(e)}Modifiers`]||t[`${gn(e)}Modifiers`];function yp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&mp(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>be(u)?u.trim():u)),o.number&&(i=n.map(Vr)));let l,a=s[l=_r(e)]||s[l=_r(Ze(e))];!a&&r&&(a=s[l=_r(gn(e))]),a&&yt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,yt(c,t,6,i)}}function Nu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=Nu(c,e,!0);u&&(l=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(_e(t)&&s.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):Re(o,r),_e(t)&&s.set(t,o),o)}function Xi(t,e){return!t||!Wi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,gn(e))||Z(t,e))}function Cr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:m,inheritAttrs:w}=t,O=mi(t);let k,M;try{if(n.shapeFlag&4){const P=i||s,Q=P;k=gt(c.call(Q,P,u,h,_,f,m)),M=l}else{const P=e;k=gt(P.length>1?P(h,{attrs:l,slots:o,emit:a}):P(h,null)),M=e.props?l:vp(l)}}catch(P){Ss.length=0,Yi(P,t,1),k=Te(hn)}let B=k;if(M&&w!==!1){const P=Object.keys(M),{shapeFlag:Q}=B;P.length&&Q&7&&(r&&P.some(Po)&&(M=bp(M,r)),B=jn(B,M,!1,!0))}return n.dirs&&(B=jn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Wo(B,n.transition),k=B,mi(O),k}const vp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wi(n))&&((e||(e={}))[n]=t[n]);return e},bp=(t,e)=>{const n={};for(const s in t)(!Po(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ep(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Xl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Xi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Xl(s,o,c):!0:!!o;return!1}function Xl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Xi(n,r))return!0}return!1}function Cp({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pu=t=>t.__isSuspense;function wp(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Od(t)}const st=Symbol.for("v-fgt"),Ji=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),Ss=[];let Qe=null;function te(t=!1){Ss.push(Qe=t?null:[])}function Sp(){Ss.pop(),Qe=Ss[Ss.length-1]||null}let Ms=1;function Jl(t){Ms+=t,t<0&&Qe&&(Qe.hasOnce=!0)}function xu(t){return t.dynamicChildren=Ms>0?Qe||kn:null,Sp(),Ms>0&&Qe&&Qe.push(t),t}function le(t,e,n,s,i,r){return xu(R(t,e,n,s,i,r,!0))}function Ou(t,e,n,s,i){return xu(Te(t,e,n,s,i,!0))}function bi(t){return t?t.__v_isVNode===!0:!1}function hs(t,e){return t.type===e.type&&t.key===e.key}const ku=({key:t})=>t??null,ui=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||De(t)||V(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,s=0,i=null,r=t===st?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ku(e),ref:e&&ui(e),scopeId:lu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return l?(Go(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=be(n)?8:16),Ms>0&&!o&&Qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Qe.push(a),a}const Te=Ip;function Ip(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zd)&&(t=hn),bi(t)){const l=jn(t,e,!0);return n&&Go(l,n),Ms>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(t)]=l:Qe.push(l)),l.patchFlag=-2,l}if(Lp(t)&&(t=t.__vccOpts),e){e=Tp(e);let{class:l,style:a}=e;l&&!be(l)&&(e.class=qi(l)),_e(a)&&(Ho(a)&&!W(a)&&(a=Re({},a)),e.style=ko(a))}const o=be(t)?1:Pu(t)?128:Dd(t)?64:_e(t)?4:V(t)?2:0;return R(t,e,n,s,i,o,r,!0)}function Tp(t){return t?Ho(t)||yu(t)?Re({},t):t:null}function jn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Rp(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ku(c),ref:e&&e.ref?n&&r?W(r)?r.concat(ui(e)):[r,ui(e)]:ui(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Wo(u,a.clone(u)),u}function hi(t=" ",e=0){return Te(Ji,null,t,e)}function He(t="",e=!1){return e?(te(),Ou(hn,null,t)):Te(hn,null,t)}function gt(t){return t==null||typeof t=="boolean"?Te(hn):W(t)?Te(st,null,t.slice()):bi(t)?Bt(t):Te(Ji,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function Go(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Go(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!yu(e)?e._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[hi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qi([e.class,s.class]));else if(i==="style")e.style=ko([e.style,s.style]);else if(Wi(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pt(t,e,n,s=null){yt(t,e,7,[n,s])}const Ap=_u();let Np=0;function Pp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ap,r={uid:Np++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(s,i),emitsOptions:Nu(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yp.bind(null,r),t.ce&&t.ce(r),r}let ke=null,Ei,eo;{const t=Ki(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ei=e("__VUE_INSTANCE_SETTERS__",n=>ke=n),eo=e("__VUE_SSR_SETTERS__",n=>Ls=n)}const Ys=t=>{const e=ke;return Ei(t),t.scope.on(),()=>{t.scope.off(),Ei(e)}},Zl=()=>{ke&&ke.scope.off(),Ei(null)};function Du(t){return t.vnode.shapeFlag&4}let Ls=!1;function xp(t,e=!1,n=!1){e&&eo(e);const{props:s,children:i}=t.vnode,r=Du(t);ip(t,s,r,e),ap(t,i,n);const o=r?Op(t,e):void 0;return e&&eo(!1),o}function Op(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qd);const{setup:s}=n;if(s){Qt();const i=t.setupContext=s.length>1?Dp(t):null,r=Ys(t),o=zs(s,t,0,[t.props,i]),l=xc(o);if(Xt(),r(),(l||t.sp)&&!Cs(t)&&cu(t),l){if(o.then(Zl,Zl),e)return o.then(a=>{ea(t,a,e)}).catch(a=>{Yi(a,t,0)});t.asyncDep=o}else ea(t,o,e)}else Mu(t,e)}function ea(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=tu(e)),Mu(t,n)}let ta;function Mu(t,e,n){const s=t.type;if(!t.render){if(!e&&ta&&!s.render){const i=s.template||Vo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Re(Re({isCustomElement:r,delimiters:l},o),a);s.render=ta(i,c)}}t.render=s.render||mt}{const i=Ys(t);Qt();try{Xd(t)}finally{Xt(),i()}}}const kp={get(t,e){return xe(t,"get",""),t[e]}};function Dp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kp),slots:t.slots,emit:t.emit,expose:e}}function Zi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tu(Ed(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ws)return ws[n](t)},has(e,n){return n in e||n in ws}})):t.proxy}function Mp(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Lp(t){return V(t)&&"__vccOpts"in t}const it=(t,e)=>Rd(t,e,Ls);function Lu(t,e,n){const s=arguments.length;return s===2?_e(e)&&!W(e)?bi(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bi(n)&&(n=[n]),Te(t,e,n))}const Fp="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let to;const na=typeof window<"u"&&window.trustedTypes;if(na)try{to=na.createPolicy("vue",{createHTML:t=>t})}catch{}const Fu=to?t=>to.createHTML(t):t=>t,Up="http://www.w3.org/2000/svg",Bp="http://www.w3.org/1998/Math/MathML",wt=typeof document<"u"?document:null,sa=wt&&wt.createElement("template"),Hp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?wt.createElementNS(Up,t):e==="mathml"?wt.createElementNS(Bp,t):n?wt.createElement(t,{is:n}):wt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{sa.innerHTML=Fu(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=sa.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$p=Symbol("_vtc");function Wp(t,e,n){const s=t[$p];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ia=Symbol("_vod"),Vp=Symbol("_vsh"),jp=Symbol(""),Gp=/(^|;)\s*display\s*:/;function Kp(t,e,n){const s=t.style,i=be(n);let r=!1;if(n&&!i){if(e)if(be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&fi(s,l,"")}else for(const o in e)n[o]==null&&fi(s,o,"");for(const o in n)o==="display"&&(r=!0),fi(s,o,n[o])}else if(i){if(e!==n){const o=s[jp];o&&(n+=";"+o),s.cssText=n,r=Gp.test(n)}}else e&&t.removeAttribute("style");ia in t&&(t[ia]=r?s.display:"",t[Vp]&&(s.display="none"))}const ra=/\s*!important$/;function fi(t,e,n){if(W(n))n.forEach(s=>fi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=qp(t,e);ra.test(n)?t.setProperty(gn(s),n.replace(ra,""),"important"):t[s]=n}}const oa=["Webkit","Moz","ms"],Sr={};function qp(t,e){const n=Sr[e];if(n)return n;let s=Ze(e);if(s!=="filter"&&s in t)return Sr[e]=s;s=Gi(s);for(let i=0;i<oa.length;i++){const r=oa[i]+s;if(r in t)return Sr[e]=r}return e}const la="http://www.w3.org/1999/xlink";function aa(t,e,n,s,i,r=Zf(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(la,e.slice(6,e.length)):t.setAttributeNS(la,e,n):n==null||r&&!Mc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Yt(n)?String(n):n)}function ca(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fu(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function zp(t,e,n,s){t.removeEventListener(e,n,s)}const ua=Symbol("_vei");function Yp(t,e,n,s,i=null){const r=t[ua]||(t[ua]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Qp(e);if(s){const c=r[e]=Zp(s,i);Pn(t,l,c,a)}else o&&(zp(t,l,o,a),r[e]=void 0)}}const ha=/(?:Once|Passive|Capture)$/;function Qp(t){let e;if(ha.test(t)){e={};let s;for(;s=t.match(ha);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let Ir=0;const Xp=Promise.resolve(),Jp=()=>Ir||(Xp.then(()=>Ir=0),Ir=Date.now());function Zp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(e_(s,n.value),e,5,[s])};return n.value=t,n.attached=Jp(),n}function e_(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,t_=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Wp(t,s,o):e==="style"?Kp(t,n,s):Wi(e)?Po(e)||Yp(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n_(t,e,s,o))?(ca(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&aa(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!be(s))?ca(t,Ze(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),aa(t,e,s,o))};function n_(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fa(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return fa(e)&&be(n)?!1:e in t}const da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>li(e,n):e};function s_(t){t.target.composing=!0}function pa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tr=Symbol("_assign"),Rt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Tr]=da(i);const r=s||i.props&&i.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Vr(l)),t[Tr](l)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",s_),Pn(t,"compositionend",pa),Pn(t,"change",pa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Tr]=da(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Vr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},i_=["ctrl","shift","alt","meta"],r_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i_.some(n=>t[`${n}Key`]&&!e.includes(n))},Uu=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=r_[e[o]];if(l&&l(i,e))return}return t(i,...r)})},o_=Re({patchProp:t_},Hp);let _a;function l_(){return _a||(_a=up(o_))}const a_=(...t)=>{const e=l_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=u_(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,c_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function c_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function u_(t){return be(t)?document.querySelector(t):t}const mn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},h_={name:"Navbar"},f_={class:"navbar"},d_={class:"nav-links"};function p_(t,e,n,s,i,r){const o=yi("router-link");return te(),le("nav",f_,[e[3]||(e[3]=R("h1",null,"Character Creator",-1)),R("div",d_,[Te(o,{to:"/"},{default:ai(()=>e[0]||(e[0]=[hi("Builder")])),_:1}),Te(o,{to:"/add-part"},{default:ai(()=>e[1]||(e[1]=[hi("Add Part")])),_:1}),Te(o,{to:"/find-parts"},{default:ai(()=>e[2]||(e[2]=[hi("Find Parts")])),_:1})])])}const __=mn(h_,[["render",p_],["__scopeId","data-v-16951f88"]]),g_={components:{Navbar:__}},m_={id:"app"};function y_(t,e,n,s,i,r){const o=yi("Navbar"),l=yi("router-view");return te(),le("div",m_,[Te(o),Te(l)])}const v_=mn(g_,[["render",y_],["__scopeId","data-v-aa25b3ef"]]);function b_(){return Bu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Bu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const E_=typeof Proxy=="function",C_="devtools-plugin:setup",w_="plugin:settings:set";let In,no;function S_(){var t;return In!==void 0||(typeof window<"u"&&window.performance?(In=!0,no=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(In=!0,no=globalThis.perf_hooks.performance):In=!1),In}function I_(){return S_()?no.now():Date.now()}class T_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const l=e.settings[o];s[o]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),l=JSON.parse(o);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return I_()}},n&&n.on(w_,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function R_(t,e){const n=t,s=Bu(),i=b_(),r=E_&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(C_,t,e);else{const o=r?new T_(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ts=t=>Hu?Symbol(t):"_vr_"+t,A_=ts("rvlm"),ga=ts("rvd"),Ko=ts("r"),$u=ts("rl"),so=ts("rvl"),xn=typeof window<"u";function N_(t){return t.__esModule||Hu&&t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Rr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const Is=()=>{},P_=/\/$/,x_=t=>t.replace(P_,"");function Ar(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("?"),a=e.indexOf("#",l>-1?l:0);return l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=M_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function O_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ma(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function k_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Gn(e.matched[s],n.matched[i])&&Wu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!D_(t[n],e[n]))return!1;return!0}function D_(t,e){return Array.isArray(t)?ya(t,e):Array.isArray(e)?ya(e,t):t===e}function ya(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function M_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Fs;(function(t){t.pop="pop",t.push="push"})(Fs||(Fs={}));var Ts;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ts||(Ts={}));function L_(t){if(!t)if(xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),x_(t)}const F_=/^[^#]+#/;function U_(t,e){return t.replace(F_,"#")+e}function B_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function H_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=B_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function va(t,e){return(history.state?history.state.position-e:-1)+t}const io=new Map;function $_(t,e){io.set(t,e)}function W_(t){const e=io.get(t);return io.delete(t),e}let V_=()=>location.protocol+"//"+location.host;function Vu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),ma(a,"")}return ma(n,t)+s+i}function j_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Vu(t,location),m=n.value,w=e.value;let O=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}O=w?f.position-w.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:O,type:Fs.pop,direction:O?O>0?Ts.forward:Ts.back:Ts.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(oe({},f.state,{scroll:er()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function ba(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?er():null}}function G_(t){const{history:e,location:n}=window,s={value:Vu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:V_()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=oe({},e.state,ba(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=oe({},i.value,e.state,{forward:a,scroll:er()});r(u.current,u,!0);const h=oe({},ba(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function K_(t){t=L_(t);const e=G_(t),n=j_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:U_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function q_(t){return typeof t=="string"||t&&typeof t=="object"}function ju(t){return typeof t=="string"||typeof t=="symbol"}const Lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gu=ts("nf");var Ea;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ea||(Ea={}));function Kn(t,e){return oe(new Error,{type:t,[Gu]:!0},e)}function Ft(t,e){return t instanceof Error&&Gu in t&&(e==null||!!(t.type&e))}const Ca="[^/]+?",z_={sensitive:!1,strict:!1,start:!0,end:!0},Y_=/[.+*?^${}()[\]/\\]/g;function Q_(t,e){const n=oe({},z_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Y_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:w,optional:O,regexp:k}=f;r.push({name:m,repeatable:w,optional:O});const M=k||Ca;if(M!==Ca){_+=10;try{new RegExp(`(${M})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+P.message)}}let B=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=O&&c.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),i+=B,_+=20,O&&(_+=-8),w&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:O}=_,k=m in c?c[m]:"";if(Array.isArray(k)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(k)?k.join("/"):k;if(!M)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u}return{re:o,score:s,keys:r,parse:l,stringify:a}}function X_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function J_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=X_(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const Z_={type:0,value:""},eg=/[a-zA-Z0-9_]/;function tg(t){if(!t)return[[]];if(t==="/")return[[Z_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:eg.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ng(t,e,n){const s=Q_(tg(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function sg(t,e){const n=[],s=new Map;e=Sa({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=rg(u);m.aliasOf=f&&f.record;const w=Sa(e,u),O=[m];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of B)O.push(oe({},m,{components:f?f.record.components:m.components,path:P,aliasOf:f?f.record:m}))}let k,M;for(const B of O){const{path:P}=B;if(h&&P[0]!=="/"){const Q=h.record.path,ge=Q[Q.length-1]==="/"?"":"/";B.path=h.record.path+(P&&ge+P)}if(k=ng(B,h,w),f?f.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),_&&u.name&&!wa(k)&&o(u.name)),"children"in m){const Q=m.children;for(let ge=0;ge<Q.length;ge++)r(Q[ge],k,f&&f.children[ge])}f=f||k,a(k)}return M?()=>{o(M)}:Is}function o(u){if(ju(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&J_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ku(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wa(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Kn(1,{location:u});w=f.record.name,_=oe(ig(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(M=>M.re.test(m)),f&&(_=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!f)throw Kn(1,{location:u,currentLocation:h});w=f.record.name,_=oe({},h.params,u.params),m=f.stringify(_)}const O=[];let k=f;for(;k;)O.unshift(k.record),k=k.parent;return{name:w,path:m,params:_,matched:O,meta:lg(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function ig(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:og(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function og(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lg(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Sa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ku(t,e){return e.children.some(n=>n===t||Ku(t,n))}const qu=/#/g,ag=/&/g,cg=/\//g,ug=/=/g,hg=/\?/g,zu=/\+/g,fg=/%5B/g,dg=/%5D/g,Yu=/%5E/g,pg=/%60/g,Qu=/%7B/g,_g=/%7C/g,Xu=/%7D/g,gg=/%20/g;function qo(t){return encodeURI(""+t).replace(_g,"|").replace(fg,"[").replace(dg,"]")}function mg(t){return qo(t).replace(Qu,"{").replace(Xu,"}").replace(Yu,"^")}function ro(t){return qo(t).replace(zu,"%2B").replace(gg,"+").replace(qu,"%23").replace(ag,"%26").replace(pg,"`").replace(Qu,"{").replace(Xu,"}").replace(Yu,"^")}function yg(t){return ro(t).replace(ug,"%3D")}function vg(t){return qo(t).replace(qu,"%23").replace(hg,"%3F")}function bg(t){return t==null?"":vg(t).replace(cg,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Eg(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(zu," "),o=r.indexOf("="),l=Ci(o<0?r:r.slice(0,o)),a=o<0?null:Ci(r.slice(o+1));if(l in e){let c=e[l];Array.isArray(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Ia(t){let e="";for(let n in t){const s=t[n];if(n=yg(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&ro(r)):[s&&ro(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Cg(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function fs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ht(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Kn(4,{from:n,to:e})):h instanceof Error?l(h):q_(h)?l(Kn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Nr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(wg(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Ht(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=N_(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ht(f,n,s,r,o)()}))}}return i}function wg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ta(t){const e=Nt(Ko),n=Nt($u),s=it(()=>e.resolve(Es(t.to))),i=it(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Gn.bind(null,u));if(f>-1)return f;const _=Ra(a[c-2]);return c>1&&Ra(u)===_&&h[h.length-1].path!==_?h.findIndex(Gn.bind(null,a[c-2])):f}),r=it(()=>i.value>-1&&Rg(n.params,s.value.params)),o=it(()=>i.value>-1&&i.value===n.matched.length-1&&Wu(n.params,s.value.params));function l(a={}){return Tg(a)?e[Es(t.replace)?"replace":"push"](Es(t.to)).catch(Is):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Sg=au({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ta,setup(t,{slots:e}){const n=es(Ta(t)),{options:s}=Nt(Ko),i=it(()=>({[Aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ig=Sg;function Tg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Rg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ra(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Aa=(t,e,n)=>t??e??n,Ag=au({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Nt(so),i=it(()=>t.route||s.value),r=Nt(ga,0),o=it(()=>i.value.matched[r]);ci(ga,r+1),ci(A_,o),ci(so,i);const l=Cd();return Un(()=>[l.value,o.value,t.name],([a,c,u],[h,f,_])=>{c&&(c.instances[u]=a,f&&f!==c&&a&&a===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),a&&c&&(!f||!Gn(c,f)||!h)&&(c.enterCallbacks[u]||[]).forEach(m=>m(a))},{flush:"post"}),()=>{const a=i.value,c=o.value,u=c&&c.components[t.name],h=t.name;if(!u)return Na(n.default,{Component:u,route:a});const f=c.props[t.name],_=f?f===!0?a.params:typeof f=="function"?f(a):f:null,w=Lu(u,oe({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(c.instances[h]=null)},ref:l}));return Na(n.default,{Component:w,route:a})||w}}});function Na(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ng=Ag;function Pg(t){const e=sg(t.routes,t),n=t.parseQuery||Eg,s=t.stringifyQuery||Ia,i=t.history,r=fs(),o=fs(),l=fs(),a=wd(Lt);let c=Lt;xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rr.bind(null,y=>""+y),h=Rr.bind(null,bg),f=Rr.bind(null,Ci);function _(y,D){let N,F;return ju(y)?(N=e.getRecordMatcher(y),F=D):F=y,e.addRoute(F,N)}function m(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function w(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function k(y,D){if(D=oe({},D||a.value),typeof y=="string"){const j=Ar(n,y,D.path),d=e.resolve({path:j.path},D),p=i.createHref(j.fullPath);return oe(j,d,{params:f(d.params),hash:Ci(j.hash),redirectedFrom:void 0,href:p})}let N;if("path"in y)N=oe({},y,{path:Ar(n,y.path,D.path).path});else{const j=oe({},y.params);for(const d in j)j[d]==null&&delete j[d];N=oe({},y,{params:h(y.params)}),D.params=h(D.params)}const F=e.resolve(N,D),re=y.hash||"";F.params=u(f(F.params));const pe=O_(s,oe({},y,{hash:mg(re),path:F.path})),z=i.createHref(pe);return oe({fullPath:pe,hash:re,query:s===Ia?Cg(y.query):y.query||{}},F,{redirectedFrom:void 0,href:z})}function M(y){return typeof y=="string"?Ar(n,y,a.value.path):oe({},y)}function B(y,D){if(c!==y)return Kn(8,{from:D,to:y})}function P(y){return Ee(y)}function Q(y){return P(oe(M(y),{replace:!0}))}function ge(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let F=typeof N=="function"?N(y):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=M(F):{path:F},F.params={}),oe({query:y.query,hash:y.hash,params:y.params},F)}}function Ee(y,D){const N=c=k(y),F=a.value,re=y.state,pe=y.force,z=y.replace===!0,j=ge(N);if(j)return Ee(oe(M(j),{state:re,force:pe,replace:z}),D||N);const d=N;d.redirectedFrom=D;let p;return!pe&&k_(s,F,N)&&(p=Kn(16,{to:d,from:F}),tn(F,F,!0,!1)),(p?Promise.resolve(p):Zt(d,F)).catch(g=>Ft(g)?Ft(g,2)?g:et(g):ie(g,d,F)).then(g=>{if(g){if(Ft(g,2))return Ee(oe(M(g.to),{state:re,force:pe,replace:z}),D||d)}else g=Dt(d,F,!0,z,re);return ft(d,F,g),g})}function Ue(y,D){const N=B(y,D);return N?Promise.reject(N):Promise.resolve()}function Zt(y,D){let N;const[F,re,pe]=xg(y,D);N=Nr(F.reverse(),"beforeRouteLeave",y,D);for(const j of F)j.leaveGuards.forEach(d=>{N.push(Ht(d,y,D))});const z=Ue.bind(null,y,D);return N.push(z),Tn(N).then(()=>{N=[];for(const j of r.list())N.push(Ht(j,y,D));return N.push(z),Tn(N)}).then(()=>{N=Nr(re,"beforeRouteUpdate",y,D);for(const j of re)j.updateGuards.forEach(d=>{N.push(Ht(d,y,D))});return N.push(z),Tn(N)}).then(()=>{N=[];for(const j of y.matched)if(j.beforeEnter&&!D.matched.includes(j))if(Array.isArray(j.beforeEnter))for(const d of j.beforeEnter)N.push(Ht(d,y,D));else N.push(Ht(j.beforeEnter,y,D));return N.push(z),Tn(N)}).then(()=>(y.matched.forEach(j=>j.enterCallbacks={}),N=Nr(pe,"beforeRouteEnter",y,D),N.push(z),Tn(N))).then(()=>{N=[];for(const j of o.list())N.push(Ht(j,y,D));return N.push(z),Tn(N)}).catch(j=>Ft(j,8)?j:Promise.reject(j))}function ft(y,D,N){for(const F of l.list())F(y,D,N)}function Dt(y,D,N,F,re){const pe=B(y,D);if(pe)return pe;const z=D===Lt,j=xn?history.state:{};N&&(F||z?i.replace(y.fullPath,oe({scroll:z&&j&&j.scroll},re)):i.push(y.fullPath,re)),a.value=y,tn(y,D,N,z),et()}let Mt;function Cn(){Mt=i.listen((y,D,N)=>{const F=k(y),re=ge(F);if(re){Ee(oe(re,{replace:!0}),F).catch(Is);return}c=F;const pe=a.value;xn&&$_(va(pe.fullPath,N.delta),er()),Zt(F,pe).catch(z=>Ft(z,12)?z:Ft(z,2)?(Ee(z.to,F).then(j=>{Ft(j,20)&&!N.delta&&N.type===Fs.pop&&i.go(-1,!1)}).catch(Is),Promise.reject()):(N.delta&&i.go(-N.delta,!1),ie(z,F,pe))).then(z=>{z=z||Dt(F,pe,!1),z&&(N.delta?i.go(-N.delta,!1):N.type===Fs.pop&&Ft(z,20)&&i.go(-1,!1)),ft(F,pe,z)}).catch(Is)})}let en=fs(),as=fs(),ve;function ie(y,D,N){et(y);const F=as.list();return F.length?F.forEach(re=>re(y,D,N)):console.error(y),Promise.reject(y)}function ne(){return ve&&a.value!==Lt?Promise.resolve():new Promise((y,D)=>{en.add([y,D])})}function et(y){return ve||(ve=!y,Cn(),en.list().forEach(([D,N])=>y?N(y):D()),en.reset()),y}function tn(y,D,N,F){const{scrollBehavior:re}=t;if(!xn||!re)return Promise.resolve();const pe=!N&&W_(va(y.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return su().then(()=>re(y,D,pe)).then(z=>z&&H_(z)).catch(z=>ie(z,y,D))}const tt=y=>i.go(y);let Be;const wn=new Set;return{currentRoute:a,addRoute:_,removeRoute:m,hasRoute:O,getRoutes:w,resolve:k,options:t,push:P,replace:Q,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:as.add,isReady:ne,install(y){const D=this;y.component("RouterLink",Ig),y.component("RouterView",Ng),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Es(a)}),xn&&!Be&&a.value===Lt&&(Be=!0,P(i.location).catch(re=>{}));const N={};for(const re in Lt)N[re]=it(()=>a.value[re]);y.provide(Ko,D),y.provide($u,es(N)),y.provide(so,a);const F=y.unmount;wn.add(y),y.unmount=function(){wn.delete(y),wn.size<1&&(c=Lt,Mt&&Mt(),a.value=Lt,Be=!1,ve=!1),F()}}}}function Tn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function xg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Gn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Gn(c,a))||i.push(a))}return[n,s,i]}var Pa={};/**
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
 */const Ju={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+Ju.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Zu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Og=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Og(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new kg;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eh=function(t){const e=Zu(t);return zo.encodeByteArray(e,!0)},wi=function(t){return eh(t).replace(/\./g,"")},oo=function(t){try{return zo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dg(t){return th(void 0,t)}function th(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mg(n)||(t[n]=th(t[n],e[n]));return t}function Mg(t){return t!=="__proto__"}/**
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
 */function Lg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fg=()=>Lg().__FIREBASE_DEFAULTS__,Ug=()=>{if(typeof process>"u"||typeof Pa>"u")return;const t=Pa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oo(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return Fg()||Ug()||Bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sh=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ih=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config};/**
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
 */class Qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wi(JSON.stringify(n)),wi(JSON.stringify(o)),""].join(".")}/**
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
 */function $g(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($g())}function Wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lh(){return Ju.NODE_ADMIN===!0}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function jg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Gg="FirebaseError";class ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gg,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ah.prototype.create)}}class ah{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Kg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ss(i,l,s)}}function Kg(t,e){return t.replace(qg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qg=/\{\$([^}]+)}/g;/**
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
 */function Us(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const ch=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Us(oo(r[0])||""),n=Us(oo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},zg=function(t){const e=ch(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yg=function(t){const e=ch(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Si(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Oa(r)&&Oa(o)){if(!lo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Oa(t){return t!==null&&typeof t=="object"}/**
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
 */function Qg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Xg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function tr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Jg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function yn(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Zg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tm(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:em(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function em(t){return t===on?void 0:t}function tm(t){return t.instantiationMode==="EAGER"}/**
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
 */class nm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const sm={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},im=fe.INFO,rm={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},om=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=rm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=im,this._logHandler=om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const lm=(t,e)=>e.some(n=>t instanceof n);let ka,Da;function am(){return ka||(ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cm(){return Da||(Da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hh=new WeakMap,ao=new WeakMap,fh=new WeakMap,Pr=new WeakMap,Yo=new WeakMap;function um(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hh.set(n,t)}).catch(()=>{}),Yo.set(e,t),e}function hm(t){if(ao.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ao.set(t,e)}let co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ao.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fm(t){co=t(co)}function dm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xr(this),e,...n);return fh.set(s,e.sort?e.sort():[e]),Vt(s)}:cm().includes(t)?function(...e){return t.apply(xr(this),e),Vt(hh.get(this))}:function(...e){return Vt(t.apply(xr(this),e))}}function pm(t){return typeof t=="function"?dm(t):(t instanceof IDBTransaction&&hm(t),lm(t,am())?new Proxy(t,co):t)}function Vt(t){if(t instanceof IDBRequest)return um(t);if(Pr.has(t))return Pr.get(t);const e=pm(t);return e!==t&&(Pr.set(t,e),Yo.set(e,t)),e}const xr=t=>Yo.get(t);function _m(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const gm=["get","getKey","getAll","getAllKeys","count"],mm=["put","add","delete","clear"],Or=new Map;function Ma(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Or.get(e))return Or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=mm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||gm.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Or.set(e,r),r}fm(t=>({...t,get:(e,n,s)=>Ma(e,n)||t.get(e,n,s),has:(e,n)=>!!Ma(e,n)||t.has(e,n)}));/**
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
 */class ym{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function vm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uo="@firebase/app",La="0.10.14";/**
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
 */const xt=new uh("@firebase/app"),bm="@firebase/app-compat",Em="@firebase/analytics-compat",Cm="@firebase/analytics",wm="@firebase/app-check-compat",Sm="@firebase/app-check",Im="@firebase/auth",Tm="@firebase/auth-compat",Rm="@firebase/database",Am="@firebase/data-connect",Nm="@firebase/database-compat",Pm="@firebase/functions",xm="@firebase/functions-compat",Om="@firebase/installations",km="@firebase/installations-compat",Dm="@firebase/messaging",Mm="@firebase/messaging-compat",Lm="@firebase/performance",Fm="@firebase/performance-compat",Um="@firebase/remote-config",Bm="@firebase/remote-config-compat",Hm="@firebase/storage",$m="@firebase/storage-compat",Wm="@firebase/firestore",Vm="@firebase/vertexai",jm="@firebase/firestore-compat",Gm="firebase",Km="11.0.0";/**
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
 */const ho="[DEFAULT]",qm={[uo]:"fire-core",[bm]:"fire-core-compat",[Cm]:"fire-analytics",[Em]:"fire-analytics-compat",[Sm]:"fire-app-check",[wm]:"fire-app-check-compat",[Im]:"fire-auth",[Tm]:"fire-auth-compat",[Rm]:"fire-rtdb",[Am]:"fire-data-connect",[Nm]:"fire-rtdb-compat",[Pm]:"fire-fn",[xm]:"fire-fn-compat",[Om]:"fire-iid",[km]:"fire-iid-compat",[Dm]:"fire-fcm",[Mm]:"fire-fcm-compat",[Lm]:"fire-perf",[Fm]:"fire-perf-compat",[Um]:"fire-rc",[Bm]:"fire-rc-compat",[Hm]:"fire-gcs",[$m]:"fire-gcs-compat",[Wm]:"fire-fst",[jm]:"fire-fst-compat",[Vm]:"fire-vertex","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const Ii=new Map,zm=new Map,fo=new Map;function Fa(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(fo.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,t);for(const n of Ii.values())Fa(n,t);for(const n of zm.values())Fa(n,t);return!0}function dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new ah("app","Firebase",Ym);/**
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
 */class Qm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const ph=Km;function _h(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ho,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(n||(n=ih()),!n)throw jt.create("no-options");const r=Ii.get(i);if(r){if(lo(n,r.options)&&lo(s,r.config))return r;throw jt.create("duplicate-app",{appName:i})}const o=new nm(i);for(const a of fo.values())o.addComponent(a);const l=new Qm(n,s,o);return Ii.set(i,l),l}function gh(t=ho){const e=Ii.get(t);if(!e&&t===ho&&ih())return _h();if(!e)throw jt.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let i=(s=qm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}Bs(new zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xm="firebase-heartbeat-database",Jm=1,Hs="firebase-heartbeat-store";let kr=null;function mh(){return kr||(kr=_m(Xm,Jm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})})),kr}async function Zm(t){try{const n=(await mh()).transaction(Hs),s=await n.objectStore(Hs).get(yh(t));return await n.done,s}catch(e){if(e instanceof ss)xt.warn(e.message);else{const n=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function Ua(t,e){try{const s=(await mh()).transaction(Hs,"readwrite");await s.objectStore(Hs).put(e,yh(t)),await s.done}catch(n){if(n instanceof ss)xt.warn(n.message);else{const s=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function yh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ba();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ty}),this._storage.overwrite(this._heartbeatsCache))}catch(s){xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ba(),{heartbeatsToSend:s,unsentEntries:i}=sy(this._heartbeatsCache.heartbeats),r=wi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return xt.warn(n),""}}}function Ba(){return new Date().toISOString().substring(0,10)}function sy(t,e=ey){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ha(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ha(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?jg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ha(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ry(t){Bs(new zn("platform-logger",e=>new ym(e),"PRIVATE")),Bs(new zn("heartbeat",e=>new ny(e),"PRIVATE")),Gt(uo,La,t),Gt(uo,La,"esm2017"),Gt("fire-js","")}ry("");var $a={};const Wa="@firebase/database",Va="1.0.9";/**
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
 */let vh="";function oy(t){vh=t}/**
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
 */class ly{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ay{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ly(e)}}catch{}return new ay},an=bh("localStorage"),cy=bh("sessionStorage");/**
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
 */const Bn=new uh("@firebase/database"),uy=function(){let t=1;return function(){return t++}}(),Eh=function(t){const e=Jg(t),n=new Xg;n.update(e);const s=n.digest();return zo.encodeByteArray(s)},Xs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Xs.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let Rs=null,ja=!0;const hy=function(t,e){S(!e,"Can't turn on custom loggers persistently."),Bn.logLevel=fe.VERBOSE,Rs=Bn.log.bind(Bn)},Ae=function(...t){if(ja===!0&&(ja=!1,Rs===null&&cy.get("logging_enabled")===!0&&hy()),Rs){const e=Xs.apply(null,t);Rs(e)}},Js=function(t){return function(...e){Ae(t,...e)}},po=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xs(...t);Bn.error(e)},Ot=function(...t){const e=`FIREBASE FATAL ERROR: ${Xs(...t)}`;throw Bn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Xs(...t);Bn.warn(e)},fy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yn="[MIN_NAME]",fn="[MAX_NAME]",vn=function(t,e){if(t===e)return 0;if(t===Yn||e===fn)return-1;if(e===Yn||t===fn)return 1;{const n=Ga(t),s=Ga(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},py=function(t,e){return t===e?0:t<e?-1:1},ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Xo=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Xo(t[e[s]]);return n+="}",n},Ch=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wh=function(t){S(!Qo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},_y=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function my(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const yy=new RegExp("^-?(0*)\\d{1,10}$"),vy=-2147483648,by=2147483647,Ga=function(t){if(yy.test(t)){const e=Number(t);if(e>=vy&&e<=by)return e}return null},is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ey=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},As=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Cy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class di{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}di.OWNER="owner";/**
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
 */const Jo="5",Sh="v",Ih="s",Th="r",Rh="f",Ah=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nh="ls",Ph="p",_o="ac",xh="websocket",Oh="long_polling";/**
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
 */class kh{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=an.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&an.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dh(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===xh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Oh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sy(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Iy{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dg(this.counters_)}}/**
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
 */const Dr={},Mr={};function Zo(t){const e=t.toString();return Dr[e]||(Dr[e]=new Iy),Dr[e]}function Ty(t,e){const n=t.toString();return Mr[n]||(Mr[n]=e()),Mr[n]}/**
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
 */class Ry{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&is(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ka="start",Ay="close",Ny="pLPCommand",Py="pRTLPCB",Mh="id",Lh="pw",Fh="ser",xy="cb",Oy="seg",ky="ts",Dy="d",My="dframe",Uh=1870,Bh=30,Ly=Uh-Bh,Fy=25e3,Uy=3e4;class On{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Js(e),this.stats_=Zo(n),this.urlFn=a=>(this.appCheckToken&&(a[_o]=this.appCheckToken),Dh(n,Oh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ry(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Uy)),dy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new el((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ka)this.id=l,this.password=a;else if(o===Ay)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ka]="t",s[Fh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Sh]=Jo,this.transportSessionId&&(s[Ih]=this.transportSessionId),this.lastSessionId&&(s[Nh]=this.lastSessionId),this.applicationId&&(s[Ph]=this.applicationId),this.appCheckToken&&(s[_o]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(s[Th]=Rh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_y()&&!gy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eh(n),i=Ch(s,Ly);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[My]="t",s[Mh]=e,s[Lh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class el{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uy(),window[Ny+this.uniqueCallbackIdentifier]=e,window[Py+this.uniqueCallbackIdentifier]=n,this.myIFrame=el.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mh]=this.myID,e[Lh]=this.myPW,e[Fh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bh+s.length<=Uh;){const o=this.pendingSegs.shift();s=s+"&"+Oy+i+"="+o.seg+"&"+ky+i+"="+o.ts+"&"+Dy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Fy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const By=16384,Hy=45e3;let Ti=null;typeof MozWebSocket<"u"?Ti=MozWebSocket:typeof WebSocket<"u"&&(Ti=WebSocket);class rt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Js(this.connId),this.stats_=Zo(n),this.connURL=rt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Sh]=Jo,typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(o[Th]=Rh),n&&(o[Ih]=n),s&&(o[Nh]=s),i&&(o[_o]=i),r&&(o[Ph]=r),Dh(e,xh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,an.set("previous_websocket_failure",!0);try{let s;lh(),this.mySock=new Ti(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ti!==null&&!rt.forceDisallow_}static previouslyFailed(){return an.isInMemoryStorage||an.get("previous_websocket_failure")===!0}markConnectionHealthy(){an.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Us(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ch(n,By);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
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
 */class $s{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[On,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let s=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const r of $s.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$s.globalTransportInitialized_=!1;/**
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
 */const $y=6e4,Wy=5e3,Vy=10*1024,jy=100*1024,Lr="t",qa="d",Gy="s",za="r",Ky="e",Ya="o",Qa="a",Xa="n",Ja="p",qy="h";class zy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Js("c:"+this.id+":"),this.transportManager_=new $s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=As(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lr in e){const n=e[Lr];n===Qa?this.upgradeIfSecondaryHealthy_():n===za?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ya&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ds("t",e),s=ds("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ja,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ds("t",e),s=ds("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ds(Lr,e);if(qa in e){const s=e[qa];if(n===qy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gy?this.onConnectionShutdown_(s):n===za?this.onReset_(s):n===Ky?po("Server Error: "+s):n===Ya?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):po("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jo!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),As(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($y))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):As(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ja,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(an.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $h{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ri extends $h{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ri}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Za=32,ec=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qt(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function tl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ws(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return $e(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Qy(t,e){const n=Ws(t,0),s=Ws(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=vn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function nl(t,e){if(qt(t)!==qt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(qt(t)>qt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Xy{constructor(e,n){this.errorPrefix_=n,this.parts_=Ws(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=nr(this.parts_[s]);Vh(this)}}function Jy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nr(e),Vh(t)}function Zy(t){const e=t.parts_.pop();t.byteLength_-=nr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vh(t){if(t.byteLength_>ec)throw new Error(t.errorPrefix_+"has a key path longer than "+ec+" bytes ("+t.byteLength_+").");if(t.parts_.length>Za)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Za+") or object contains a cycle "+ln(t))}function ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class sl extends $h{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new sl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ps=1e3,ev=60*5*1e3,tc=30*1e3,tv=1.3,nv=3e4,sv="server_kill",nc=3;class Pt extends Hh{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=Js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=ev,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Qs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=qn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):po("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nv&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new zy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(sv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xa(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Xo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nc&&(this.reconnectDelay_=tc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vh.replace(/\./g,"-")]=1,oh()?e["framework.cordova"]=1:Wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ri.getInstance().currentlyOnline();return xa(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class sr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(Yn,e),i=new K(Yn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
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
 */let ii;class jh extends sr{static get __EMPTY_NODE(){return ii}static set __EMPTY_NODE(e){ii=e}compare(e,n){return vn(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(fn,ii)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,ii)}toString(){return".key"}}const Hn=new jh;/**
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
 */class ri{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class iv{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ri(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ri(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ri(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ri(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new iv;/**
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
 */function rv(t,e){return vn(t.name,e.name)}function il(t,e){return vn(t,e)}/**
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
 */let go;function ov(t){go=t}const Gh=function(t){return typeof t=="number"?"number:"+wh(t):"string:"+t},Kh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else S(t===go||t.isEmpty(),"priority of unexpected type.");S(t===go||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sc;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kh(this.priorityNode_)}static set __childrenNodeConstructor(e){sc=e}static get __childrenNodeConstructor(){return sc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:G(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wh(this.value_):e+=this.value_,this.lazyHash_=Eh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qh,zh;function lv(t){qh=t}function av(t){zh=t}class cv extends sr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(fn,new Ce("[PRIORITY-POST]",zh))}makePost(e,n){const s=qh(e);return new K(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const ye=new cv;/**
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
 */const uv=Math.log(2);class hv{constructor(e){const n=r=>parseInt(Math.log(r)/uv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ai=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new we(f,h.node,we.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),w=i(_+1,c);return h=t[_],f=n?n(h):h,new we(f,h.node,we.BLACK,m,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,w){const O=h-m,k=h;h-=m;const M=i(O+1,k),B=t[O],P=n?n(B):B;_(new we(P,B.node,w,null,M))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const w=a.nextBitIsOne(),O=Math.pow(2,a.count-(m+1));w?f(O,we.BLACK):(f(O,we.BLACK),f(O,we.RED))}return u},o=new hv(t.length),l=r(o);return new We(s||e,l)};/**
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
 */let Fr;const Rn={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Rn&&ye,"ChildrenNode.ts has not been loaded"),Fr=Fr||new At({".priority":Rn},{".priority":ye}),Fr}get(e){const n=qn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ai(s,e.getCompare()):l=Rn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new At(u,c)}addToIndexes(e,n){const s=Si(this.indexes_,(i,r)=>{const o=qn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Rn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ai(l,o.getCompare())}else return Rn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new At(s,this.indexSet_)}removeFromIndexes(e,n){const s=Si(this.indexes_,i=>{if(i===Rn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new At(s,this.indexSet_)}}/**
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
 */let _s;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Kh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _s||(_s=new H(new We(il),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_s:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{S(G(e)!==".priority"||qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(de(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ye,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gh(this.getPriority().val())+":"),this.forEachChild(ye,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Eh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zs?-1:0}withIndex(e){if(e===Hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ye),i=n.getIterator(ye);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fv extends H{constructor(){super(new We(il),H.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Zs=new fv;Object.defineProperties(K,{MIN:{value:new K(Yn,H.EMPTY_NODE)},MAX:{value:new K(fn,Zs)}});jh.__EMPTY_NODE=H.EMPTY_NODE;Ce.__childrenNodeConstructor=H;ov(Zs);av(Zs);/**
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
 */const dv=!0;function Se(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Se(e))}if(!(t instanceof Array)&&dv){const n=[];let s=!1;if(Ne(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return H.EMPTY_NODE;const r=Ai(n,rv,o=>o.name,il);if(s){const o=Ai(n,ye.getCompare());return new H(r,Se(e),new At({".priority":o},{".priority":ye}))}else return new H(r,Se(e),At.Default)}else{let n=H.EMPTY_NODE;return Ne(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}lv(Se);/**
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
 */class pv extends sr{constructor(e){super(),this.indexPath_=e,S(!q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Zs);return new K(fn,e)}toString(){return Ws(this.indexPath_,0).join("/")}}/**
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
 */class _v extends sr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Se(e);return new K(n,s)}toString(){return".value"}}const gv=new _v;/**
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
 */function Yh(t){return{type:"value",snapshotNode:t}}function Qn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Vs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Qn(n,s)):o.trackChildChange(js(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,r)=>{n.hasChild(i)||s.trackChildChange(Vs(i,r))}),n.isLeafNode()||n.forEachChild(ye,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(js(i,r,o))}else s.trackChildChange(Qn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Gs{constructor(e){this.indexedFilter_=new rl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gs.getStartPost_(e),this.endPost_=Gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(ye,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class yv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new K(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(js(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Vs(n,h));const w=l.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Qn(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Vs(c.name,c.node)),r.trackChildChange(Qn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class ol{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new ol;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vv(t){return t.loadsAllData()?new rl(t.getIndex()):t.hasLimit()?new yv(t):new Gs(t)}function ic(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===gv?n="$value":t.index_===Hn?n="$key":(S(t.index_ instanceof pv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
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
 */class Ni extends Hh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Js("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ni.getListenId_(e,s),l={};this.listens_[o]=l;const a=ic(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),qn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ni.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ic(e._queryParams),s=e._path.toString(),i=new Qs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Us(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class bv{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Pi(){return{value:null,children:new Map}}function Qh(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,Pi());const i=t.children.get(s);e=de(e),Qh(i,e,n)}}function mo(t,e,n){t.value!==null?n(e,t.value):Ev(t,(s,i)=>{const r=new se(e.toString()+"/"+s);mo(i,r,n)})}function Ev(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Cv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const oc=10*1e3,wv=30*1e3,Sv=5*60*1e3;class Iv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cv(e);const s=oc+(wv-oc)*Math.random();As(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ne(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),As(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sv))}}/**
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
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function ll(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function al(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=ll()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new xi(X(),n,this.revert)}}else return S(G(this.path)===e,"operationForChild called for unrelated child."),new xi(de(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ks{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ks(this.source,X()):new Ks(this.source,de(this.path))}}/**
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
 */class dn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return q(this.path)?new dn(this.source,X(),this.snap.getImmediateChild(e)):new dn(this.source,de(this.path),this.snap)}}/**
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
 */class Xn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new dn(this.source,X(),n.value):new Xn(this.source,X(),n)}else return S(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Tv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mv(o.childName,o.snapshotNode))}),gs(t,i,"child_removed",e,s,n),gs(t,i,"child_added",e,s,n),gs(t,i,"child_moved",r,s,n),gs(t,i,"child_changed",e,s,n),gs(t,i,"value",e,s,n),i}function gs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Nv(t,l,a)),o.forEach(l=>{const a=Av(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Av(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nv(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ir(t,e){return{eventCache:t,serverCache:e}}function Ns(t,e,n,s){return ir(new pn(e,n,s),t.serverCache)}function Xh(t,e,n,s){return ir(t.eventCache,new pn(e,n,s))}function yo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ur;const Pv=()=>(Ur||(Ur=new We(py)),Ur);class he{constructor(e,n=Pv()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Ne(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:me(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(de(e)):new he(null)}}set(e,n){if(q(e))return new he(n,this.children);{const s=G(e),r=(this.children.get(s)||new he(null)).set(de(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(de(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(de(e)):null}}setTree(e,n){if(q(e))return n;{const s=G(e),r=(this.children.get(s)||new he(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(de(e),me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(de(e),me(n,i),s):new he(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new he(null))}}function Ps(t,e,n){if(q(e))return new ct(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function vo(t,e,n){let s=t;return Ne(n,(i,r)=>{s=Ps(s,me(e,i),r)}),s}function lc(t,e){if(q(e))return ct.empty();{const n=t.writeTree_.setTree(e,new he(null));return new ct(n)}}function bo(t,e){return bn(t,e)!=null}function bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function ac(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Kt(t,e){if(q(e))return t;{const n=bn(t,e);return n!=null?new ct(new he(n)):new ct(t.writeTree_.subtree(e))}}function Eo(t){return t.writeTree_.isEmpty()}function Jn(t,e){return Jh(X(),t.writeTree_,e)}function Jh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Jh(me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(me(t,".priority"),s)),n}}/**
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
 */function ul(t,e){return nf(e,t)}function xv(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ps(t.visibleWrites,e,n)),t.lastWriteId=s}function Ov(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=vo(t.visibleWrites,e,n),t.lastWriteId=s}function kv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Dv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Mv(l,s.path)?i=!1:Xe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Lv(t),!0;if(s.snap)t.visibleWrites=lc(t.visibleWrites,s.path);else{const l=s.children;Ne(l,a=>{t.visibleWrites=lc(t.visibleWrites,me(s.path,a))})}return!0}else return!1}function Mv(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(me(t.path,n),e))return!0;return!1}function Lv(t){t.visibleWrites=Zh(t.allWrites,Fv,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Fv(t){return t.visible}function Zh(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=$e(n,o),s=Ps(s,l,r.snap)):Xe(o,n)&&(l=$e(o,n),s=Ps(s,X(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=$e(n,o),s=vo(s,l,r.children);else if(Xe(o,n))if(l=$e(o,n),q(l))s=vo(s,X(),r.children);else{const a=qn(r.children,G(l));if(a){const c=a.getChild(de(l));s=Ps(s,X(),c)}}}else throw ns("WriteRecord should have .snap or .children")}}return s}function ef(t,e,n,s,i){if(!s&&!i){const r=bn(t.visibleWrites,e);if(r!=null)return r;{const o=Kt(t.visibleWrites,e);if(Eo(o))return n;if(n==null&&!bo(o,X()))return null;{const l=n||H.EMPTY_NODE;return Jn(o,l)}}}else{const r=Kt(t.visibleWrites,e);if(!i&&Eo(r))return n;if(!i&&n==null&&!bo(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},l=Zh(t.allWrites,o,e),a=n||H.EMPTY_NODE;return Jn(l,a)}}}function Uv(t,e,n){let s=H.EMPTY_NODE;const i=bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Kt(t.visibleWrites,e);return n.forEachChild(ye,(o,l)=>{const a=Jn(Kt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),ac(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Kt(t.visibleWrites,e);return ac(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Bv(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(bo(t.visibleWrites,r))return null;{const o=Kt(t.visibleWrites,r);return Eo(o)?i.getChild(n):Jn(o,i.getChild(n))}}function Hv(t,e,n,s){const i=me(e,n),r=bn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Kt(t.visibleWrites,i);return Jn(o,s.getNode().getImmediateChild(n))}else return null}function $v(t,e){return bn(t.visibleWrites,e)}function Wv(t,e,n,s,i,r,o){let l;const a=Kt(t.visibleWrites,e),c=bn(a,X());if(c!=null)l=c;else if(n!=null)l=Jn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Vv(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Oi(t,e,n,s){return ef(t.writeTree,t.treePath,e,n,s)}function hl(t,e){return Uv(t.writeTree,t.treePath,e)}function cc(t,e,n,s){return Bv(t.writeTree,t.treePath,e,n,s)}function ki(t,e){return $v(t.writeTree,me(t.treePath,e))}function jv(t,e,n,s,i,r){return Wv(t.writeTree,t.treePath,e,n,s,i,r)}function fl(t,e,n){return Hv(t.writeTree,t.treePath,e,n)}function tf(t,e){return nf(me(t.treePath,e),t.writeTree)}function nf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Gv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Qn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,i.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Kv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sf=new Kv;class dl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=jv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function qv(t){return{filter:t}}function zv(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yv(t,e,n,s,i){const r=new Gv;let o,l;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=Co(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Di(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=Xv(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=wo(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=eb(t,e,c.path,s,i,r):o=Jv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=Zv(t,e,n.path,s,r);else throw ns("Unknown operation type: "+n.type);const a=r.getChanges();return Qv(e,o,a),{viewCache:o,changes:a}}function Qv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=yo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Yh(yo(e)))}}function rf(t,e,n,s,i,r){const o=e.eventCache;if(ki(s,n)!=null)return e;{let l,a;if(q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_n(e),u=c instanceof H?c:H.EMPTY_NODE,h=hl(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Oi(s,_n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){S(qt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=cc(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=de(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=cc(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=fl(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Ns(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Di(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&qt(n)>1)return e;const m=de(n),O=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),O):c=u.updateChild(a.getNode(),_,O,m,sf,null)}const h=Xh(e,c,a.isFullyInitialized()||q(n),u.filtersNodes()),f=new dl(i,h,r);return rf(t,h,n,i,f,l)}function Co(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new dl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Ns(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Ns(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=de(n),_=l.getNode().getImmediateChild(h);let m;if(q(f))m=s;else{const w=u.getCompleteChild(h);w!=null?tl(f)===".priority"&&w.getChild(Wh(f)).isEmpty()?m=w:m=w.updateChild(f,s):m=H.EMPTY_NODE}if(_.equals(m))a=e;else{const w=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=Ns(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function uc(t,e){return t.eventCache.isCompleteForChild(e)}function Xv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=me(n,a);uc(e,G(u))&&(l=Co(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=me(n,a);uc(e,G(u))||(l=Co(t,l,u,c,i,r,o))}),l}function hc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function wo(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=hc(t,_,f);a=Di(t,a,new se(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=hc(t,m,f);a=Di(t,a,new se(h),w,i,r,o,l)}}),a}function Jv(t,e,n,s,i,r,o){if(ki(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Di(t,e,n,a.getNode().getChild(n),i,r,l,o);if(q(n)){let c=new he(null);return a.getNode().forEachChild(Hn,(u,h)=>{c=c.set(new se(u),h)}),wo(t,e,n,c,i,r,l,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const f=me(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),wo(t,e,n,c,i,r,l,o)}}function Zv(t,e,n,s,i){const r=e.serverCache,o=Xh(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return rf(t,o,n,s,sf,i)}function eb(t,e,n,s,i,r){let o;if(ki(s,n)!=null)return e;{const l=new dl(s,e,i),a=e.eventCache.getNode();let c;if(q(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Oi(s,_n(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=hl(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=G(n);let h=fl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,de(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,H.EMPTY_NODE,de(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oi(s,_n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ki(s,X())!=null,Ns(e,c,o,t.filter.filtersNodes())}}/**
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
 */class tb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new rl(s.getIndex()),r=vv(s);this.processor_=qv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),u=new pn(a,o.isFullyInitialized(),i.filtersNodes()),h=new pn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ir(h,u),this.eventGenerator_=new Tv(this.query_)}get query(){return this.query_}}function nb(t){return t.viewCache_.serverCache.getNode()}function sb(t,e){const n=_n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function fc(t){return t.eventRegistrations_.length===0}function ib(t,e){t.eventRegistrations_.push(e)}function dc(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pc(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(S(_n(t.viewCache_),"We should always have a full cache before handling merges"),S(yo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Yv(t.processor_,i,e,n,s);return zv(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,of(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(r,o)=>{s.push(Qn(r,o))}),n.isFullyInitialized()&&s.push(Yh(n.getNode())),of(t,s,n.getNode(),e)}function of(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Rv(t.eventGenerator_,e,n,i)}/**
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
 */let Mi;class ob{constructor(){this.views=new Map}}function lb(t){S(!Mi,"__referenceConstructor has already been defined"),Mi=t}function ab(){return S(Mi,"Reference.ts has not been loaded"),Mi}function cb(t){return t.views.size===0}function pl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),pc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pc(o,e,n,s));return r}}function ub(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Oi(n,i?s:null),a=!1;l?a=!0:s instanceof H?(l=hl(n,s),a=!1):(l=H.EMPTY_NODE,a=!1);const c=ir(new pn(l,a,!1),new pn(s,i,!1));return new tb(e,c)}return o}function hb(t,e,n,s,i,r){const o=ub(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ib(o,n),rb(o,n)}function fb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=zt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(dc(c,n,s)),fc(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(dc(a,n,s)),fc(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!zt(t)&&r.push(new(ab())(e._repo,e._path)),{removed:r,events:o}}function lf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(t,e){let n=null;for(const s of t.views.values())n=n||sb(s,e);return n}function af(t,e){if(e._queryParams.loadsAllData())return rr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function cf(t,e){return af(t,e)!=null}function zt(t){return rr(t)!=null}function rr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Li;function db(t){S(!Li,"__referenceConstructor has already been defined"),Li=t}function pb(){return S(Li,"Reference.ts has not been loaded"),Li}let _b=1;class _c{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Vv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uf(t,e,n,s,i){return xv(t.pendingWriteTree_,e,n,s,i),i?rs(t,new dn(ll(),e,n)):[]}function gb(t,e,n,s){Ov(t.pendingWriteTree_,e,n,s);const i=he.fromObject(n);return rs(t,new Xn(ll(),e,i))}function $t(t,e,n=!1){const s=kv(t.pendingWriteTree_,e);if(Dv(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(X(),!0):Ne(s.children,o=>{r=r.set(new se(o),!0)}),rs(t,new xi(s.path,r,n))}else return[]}function or(t,e,n){return rs(t,new dn(al(),e,n))}function mb(t,e,n){const s=he.fromObject(n);return rs(t,new Xn(al(),e,s))}function yb(t,e){return rs(t,new Ks(al(),e))}function vb(t,e,n){const s=gl(t,n);if(s){const i=ml(s),r=i.path,o=i.queryId,l=$e(r,e),a=new Ks(cl(o),l);return yl(t,r,a)}else return[]}function So(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||cf(o,e))){const a=fb(o,e,n,s);cb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>zt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Cb(f);for(let m=0;m<_.length;++m){const w=_[m],O=w.query,k=df(t,w);t.listenProvider_.startListening(xs(O),Fi(t,O),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(xs(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(lr(f));t.listenProvider_.stopListening(xs(f),_)}))}wb(t,c)}return l}function bb(t,e,n,s){const i=gl(t,s);if(i!=null){const r=ml(i),o=r.path,l=r.queryId,a=$e(o,e),c=new dn(cl(l),a,n);return yl(t,o,c)}else return[]}function Eb(t,e,n,s){const i=gl(t,s);if(i){const r=ml(i),o=r.path,l=r.queryId,a=$e(o,e),c=he.fromObject(n),u=new Xn(cl(l),a,c);return yl(t,o,u)}else return[]}function gc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=$e(f,i);r=r||$n(_,m),o=o||zt(_)});let l=t.syncPointTree_.get(i);l?(o=o||zt(l),r=r||$n(l,X())):(l=new ob,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=$n(m,X());w&&(r=r.updateImmediateChild(_,w))}));const c=cf(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=lr(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Sb();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=ul(t.pendingWriteTree_,i);let h=hb(l,e,n,u,r,a);if(!c&&!o&&!s){const f=af(l,e);h=h.concat(Ib(t,e,f))}return h}function _l(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),c=$n(l,a);if(c)return c});return ef(i,e,r,n,!0)}function rs(t,e){return hf(e,t.syncPointTree_,null,ul(t.pendingWriteTree_,X()))}function hf(t,e,n,s){if(q(t.path))return ff(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=$n(i,X()));let r=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=tf(s,o);r=r.concat(hf(l,a,c,u))}return i&&(r=r.concat(pl(i,t,s,n))),r}}function ff(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=$n(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=tf(s,o),u=t.operationForChild(o);u&&(r=r.concat(ff(u,l,a,c)))}),i&&(r=r.concat(pl(i,t,s,n))),r}function df(t,e){const n=e.query,s=Fi(t,n);return{hashFn:()=>(nb(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vb(t,n._path,s):yb(t,n._path);{const r=my(i,n);return So(t,n,null,r)}}}}function Fi(t,e){const n=lr(e);return t.queryToTagMap.get(n)}function lr(t){return t._path.toString()+"$"+t._queryIdentifier}function gl(t,e){return t.tagToQueryMap.get(e)}function ml(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function yl(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=ul(t.pendingWriteTree_,e);return pl(s,n,i,null)}function Cb(t){return t.fold((e,n,s)=>{if(n&&zt(n))return[rr(n)];{let i=[];return n&&(i=lf(n)),Ne(s,(r,o)=>{i=i.concat(o)}),i}})}function xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pb())(t._repo,t._path):t}function wb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=lr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Sb(){return _b++}function Ib(t,e,n){const s=e._path,i=Fi(t,e),r=df(t,n),o=t.listenProvider_.startListening(xs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!zt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!q(c)&&u&&zt(u))return[rr(u).query];{let f=[];return u&&(f=f.concat(lf(u).map(_=>_.query))),Ne(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(xs(u),Fi(t,u))}}return o}/**
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
 */class vl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vl(n)}node(){return this.node_}}class bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new bl(this.syncTree_,n)}node(){return _l(this.syncTree_,this.path_)}}const Tb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mc=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Rb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ab(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Rb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Ab=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},pf=function(t,e,n,s){return El(e,new bl(n,t),s)},_f=function(t,e,n){return El(t,new vl(e),n)};function El(t,e,n){const s=t.getPriority().val(),i=mc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=mc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(ye,(l,a)=>{const c=El(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Cl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wl(t,e){let n=e instanceof se?e:new se(e),s=t,i=G(n);for(;i!==null;){const r=qn(s.node.children,i)||{children:{},childCount:0};s=new Cl(i,s,r),n=de(n),i=G(n)}return s}function os(t){return t.node.value}function gf(t,e){t.node.value=e,Io(t)}function mf(t){return t.node.childCount>0}function Nb(t){return os(t)===void 0&&!mf(t)}function ar(t,e){Ne(t.node.children,(n,s)=>{e(new Cl(n,t,s))})}function yf(t,e,n,s){n&&!s&&e(t),ar(t,i=>{yf(i,e,!0,s)}),n&&s&&e(t)}function Pb(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ei(t){return new se(t.parent===null?t.name:ei(t.parent)+"/"+t.name)}function Io(t){t.parent!==null&&xb(t.parent,t.name,t)}function xb(t,e,n){const s=Nb(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Io(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Io(t))}/**
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
 */const Ob=/[\[\].#$\/\u0000-\u001F\u007F]/,kb=/[\[\].#$\u0000-\u001F\u007F]/,Br=10*1024*1024,Sl=function(t){return typeof t=="string"&&t.length!==0&&!Ob.test(t)},vf=function(t){return typeof t=="string"&&t.length!==0&&!kb.test(t)},Db=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vf(t)},Mb=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Qo(t)||t&&typeof t=="object"&&bt(t,".sv")},bf=function(t,e,n,s){s&&e===void 0||cr(tr(t,"value"),e,n)},cr=function(t,e,n){const s=n instanceof se?new Xy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ln(s));if(typeof e=="function")throw new Error(t+"contains a function "+ln(s)+" with contents = "+e.toString());if(Qo(e))throw new Error(t+"contains "+e.toString()+" "+ln(s));if(typeof e=="string"&&e.length>Br/3&&nr(e)>Br)throw new Error(t+"contains a string greater than "+Br+" utf8 bytes "+ln(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ne(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sl(o)))throw new Error(t+" contains an invalid key ("+o+") "+ln(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jy(s,o),cr(t,l,s),Zy(s)}),i&&r)throw new Error(t+' contains ".value" child '+ln(s)+" in addition to actual children.")}},Lb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ws(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Sl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Qy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Xe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Fb=function(t,e,n,s){const i=tr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ne(e,(o,l)=>{const a=new se(o);if(cr(i,l,me(n,a)),tl(a)===".priority"&&!Mb(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Lb(i,r)},Ef=function(t,e,n,s){if(!vf(n))throw new Error(tr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ub=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ef(t,e,n)},Il=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Bb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Db(n))throw new Error(tr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Hb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ur(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!nl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Cf(t,e,n){ur(t,n),wf(t,s=>nl(s,e))}function ut(t,e,n){ur(t,n),wf(t,s=>Xe(s,e)||Xe(e,s))}function wf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($b(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $b(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Rs&&Ae("event: "+n.toString()),is(s)}}}/**
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
 */const Wb="repo_interrupt",Vb=25;class jb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pi(),this.transactionQueueTree_=new Cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gb(t,e,n){if(t.stats_=Zo(t.repoInfo_),t.forceRestClient_||Ey())t.server_=new Ni(t.repoInfo_,(s,i,r,o)=>{yc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(s,i,r,o)=>{yc(t,s,i,r,o)},s=>{vc(t,s)},s=>{Kb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ty(t.repoInfo_,()=>new Iv(t.stats_,t.server_)),t.infoData_=new bv,t.infoSyncTree_=new _c({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=or(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Tl(t,"connected",!1),t.serverSyncTree_=new _c({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ut(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Sf(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hr(t){return Tb({timestamp:Sf(t)})}function yc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Si(n,c=>Se(c));o=Eb(t.serverSyncTree_,r,a,i)}else{const a=Se(n);o=bb(t.serverSyncTree_,r,a,i)}else if(s){const a=Si(n,c=>Se(c));o=mb(t.serverSyncTree_,r,a)}else{const a=Se(n);o=or(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Zn(t,r)),ut(t.eventQueue_,l,o)}function vc(t,e){Tl(t,"connected",e),e===!1&&Yb(t)}function Kb(t,e){Ne(e,(n,s)=>{Tl(t,n,s)})}function Tl(t,e,n){const s=new se("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=or(t.infoSyncTree_,s,i);ut(t.eventQueue_,s,r)}function Rl(t){return t.nextWriteId_++}function qb(t,e,n,s,i){fr(t,"set",{path:e.toString(),value:n,priority:s});const r=hr(t),o=Se(n,s),l=_l(t.serverSyncTree_,e),a=_f(o,l,r),c=Rl(t),u=uf(t.serverSyncTree_,e,a,c,!0);ur(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Fe("set at "+e+" failed: "+f);const w=$t(t.serverSyncTree_,c,!m);ut(t.eventQueue_,e,w),To(t,i,f,_)});const h=Nl(t,e);Zn(t,h),ut(t.eventQueue_,h,[])}function zb(t,e,n,s){fr(t,"update",{path:e.toString(),value:n});let i=!0;const r=hr(t),o={};if(Ne(n,(l,a)=>{i=!1,o[l]=pf(me(e,l),Se(a),t.serverSyncTree_,r)}),i)Ae("update() called with empty data.  Don't do anything."),To(t,s,"ok",void 0);else{const l=Rl(t),a=gb(t.serverSyncTree_,e,o,l);ur(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Fe("update at "+e+" failed: "+c);const f=$t(t.serverSyncTree_,l,!h),_=f.length>0?Zn(t,e):e;ut(t.eventQueue_,_,f),To(t,s,c,u)}),Ne(n,c=>{const u=Nl(t,me(e,c));Zn(t,u)}),ut(t.eventQueue_,e,[])}}function Yb(t){fr(t,"onDisconnectEvents");const e=hr(t),n=Pi();mo(t.onDisconnect_,X(),(i,r)=>{const o=pf(i,r,t.serverSyncTree_,e);Qh(n,i,o)});let s=[];mo(n,X(),(i,r)=>{s=s.concat(or(t.serverSyncTree_,i,r));const o=Nl(t,i);Zn(t,o)}),t.onDisconnect_=Pi(),ut(t.eventQueue_,X(),s)}function Qb(t,e,n){let s;G(e._path)===".info"?s=gc(t.infoSyncTree_,e,n):s=gc(t.serverSyncTree_,e,n),Cf(t.eventQueue_,e._path,s)}function bc(t,e,n){let s;G(e._path)===".info"?s=So(t.infoSyncTree_,e,n):s=So(t.serverSyncTree_,e,n),Cf(t.eventQueue_,e._path,s)}function Xb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wb)}function fr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function To(t,e,n,s){e&&is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function If(t,e,n){return _l(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Al(t,e=t.transactionQueueTree_){if(e||dr(t,e),os(e)){const n=Rf(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jb(t,ei(e),n)}else mf(e)&&ar(e,n=>{Al(t,n)})}function Jb(t,e,n){const s=n.map(c=>c.currentWriteId),i=If(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{fr(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat($t(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();dr(t,wl(t.transactionQueueTree_,e)),Al(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)is(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zn(t,e)}},o)}function Zn(t,e){const n=Tf(t,e),s=ei(n),i=Rf(t,n);return Zb(t,i,s),s}function Zb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=$e(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Vb)u=!0,h="maxretry",i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0));else{const f=If(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){cr("transaction failed: Data returned ",_,a.path);let m=Se(_);typeof _=="object"&&_!=null&&bt(_,".priority")||(m=m.updatePriority(f.getPriority()));const O=a.currentWriteId,k=hr(t),M=_f(m,f,k);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=M,a.currentWriteId=Rl(t),o.splice(o.indexOf(O),1),i=i.concat(uf(t.serverSyncTree_,a.path,M,a.currentWriteId,a.applyLocally)),i=i.concat($t(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0))}ut(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}dr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)is(s[l]);Al(t,t.transactionQueueTree_)}function Tf(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&os(s)===void 0;)s=wl(s,n),e=de(e),n=G(e);return s}function Rf(t,e){const n=[];return Af(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Af(t,e,n){const s=os(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ar(e,i=>{Af(t,i,n)})}function dr(t,e){const n=os(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,gf(e,n.length>0?n:void 0)}ar(e,s=>{dr(t,s)})}function Nl(t,e){const n=ei(Tf(t,e)),s=wl(t.transactionQueueTree_,e);return Pb(s,i=>{Hr(t,i)}),Hr(t,s),yf(s,i=>{Hr(t,i)}),n}function Hr(t,e){const n=os(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($t(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?gf(e,void 0):n.length=r+1,ut(t.eventQueue_,ei(e),i);for(let o=0;o<s.length;o++)is(s[o])}}/**
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
 */function eE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ec=function(t,e){const n=nE(t),s=n.namespace;n.domain==="firebase.com"&&Ot(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ot("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},nE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=eE(t.substring(u,h)));const f=tE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Cc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Cc.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Cc.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class iE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class rE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:tl(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=rc(this._queryParams),n=Xo(e);return n==="{}"?"default":n}get _queryObject(){return rc(this._queryParams)}isEqual(e){if(e=yn(e),!(e instanceof Pl))return!1;const n=this._repo===e._repo,s=nl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yy(this._path)}}class Jt extends Pl{constructor(e,n){super(e,n,new ol,!1)}get parent(){const e=Wh(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ui{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=qs(this.ref,e);return new Ui(this._node.getChild(n),s,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ui(i,qs(this.ref,s),ye)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wn(t,e){return t=yn(t),t._checkNotDeleted("ref"),e!==void 0?qs(t._root,e):t._root}function qs(t,e){return t=yn(t),G(t._path)===null?Ub("child","path",e):Ef("child","path",e),new Jt(t._repo,me(t._path,e))}function lE(t,e){t=yn(t),Il("push",t._path),bf("push",e,t._path,!0);const n=Sf(t._repo),s=sE(n),i=qs(t,s),r=qs(t,s);let o;return e!=null?o=Nf(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function aE(t){return Il("remove",t._path),Nf(t,null)}function Nf(t,e){t=yn(t),Il("set",t._path),bf("set",e,t._path,!1);const n=new Qs;return qb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cE(t,e){Fb("update",e,t._path);const n=new Qs;return zb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class xl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iE("value",this,new Ui(e.snapshotNode,new Jt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rE(this,e,n):null}matches(e){return e instanceof xl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{bc(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new oE(n,r||void 0),l=new xl(o);return Qb(t._repo,t,l),()=>bc(t._repo,t,l)}function Ol(t,e,n,s){return uE(t,"value",e,n,s)}lb(Jt);db(Jt);/**
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
 */const hE="FIREBASE_DATABASE_EMULATOR_HOST",Ro={};let fE=!1;function dE(t,e,n,s){t.repoInfo_=new kh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function pE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ot("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ec(r,i),l=o.repoInfo,a;typeof process<"u"&&$a&&(a=$a[hE]),a?(r=`http://${a}?ns=${l.namespace}`,o=Ec(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new wy(t.name,t.options,e);Bb("Invalid Firebase Database URL",o),q(o.path)||Ot("Database URL must point to the root of a Firebase Database (not including a child path).");const u=gE(l,t,c,new Cy(t.name,n));return new mE(u,t)}function _E(t,e){const n=Ro[e];(!n||n[t.key]!==t)&&Ot(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xb(t),delete n[t.key]}function gE(t,e,n,s){let i=Ro[e.name];i||(i={},Ro[e.name]=i);let r=i[t.toURLString()];return r&&Ot("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jb(t,fE,n,s),i[t.toURLString()]=r,r}class mE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_E(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ot("Cannot call "+e+" on a deleted database.")}}function yE(t=gh(),e){const n=dh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=sh("database");s&&vE(n,...s)}return n}function vE(t,e,n,s={}){t=yn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ot("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ot('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new di(di.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:rh(s.mockUserToken,t.app.options.projectId);r=new di(o)}dE(i,e,n,r)}/**
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
 */function bE(t){oy(ph),Bs(new zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Gt(Wa,Va,t),Gt(Wa,Va,"esm2017")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bE();var EE="firebase",CE="11.0.0";/**
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
 */Gt(EE,CE,"app");/**
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
 */const Pf="firebasestorage.googleapis.com",wE="storageBucket",SE=2*60*1e3,IE=10*60*1e3;/**
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
 */class Et extends ss{constructor(e,n,s=0){super($r(e),`Firebase Storage: ${n} (${$r(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $r(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function $r(t){return"storage/"+t}function TE(){const t="An unknown error occurred, please check the error payload for server response.";return new Et(vt.UNKNOWN,t)}function RE(){return new Et(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AE(){return new Et(vt.CANCELED,"User canceled the upload/download.")}function NE(t){return new Et(vt.INVALID_URL,"Invalid URL '"+t+"'.")}function PE(t){return new Et(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wc(t){return new Et(vt.INVALID_ARGUMENT,t)}function xf(){return new Et(vt.APP_DELETED,"The Firebase app was deleted.")}function xE(t){return new Et(vt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=lt.makeFromUrl(e,n)}catch{return new lt(e,"")}if(s.path==="")return s;throw PE(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},w=n===Pf?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",k=new RegExp(`^https?://${w}/${i}/${O}`,"i"),B=[{regex:l,indices:a,postModify:r},{regex:_,indices:m,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<B.length;P++){const Q=B[P],ge=Q.regex.exec(e);if(ge){const Ee=ge[Q.indices.bucket];let Ue=ge[Q.indices.path];Ue||(Ue=""),s=new lt(Ee,Ue),Q.postModify(s);break}}if(s==null)throw NE(e);return s}}class OE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kE(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...O){c||(c=!0,e.apply(null,O))}function h(O){i=setTimeout(()=>{i=null,t(_,a())},O)}function f(){r&&clearTimeout(r)}function _(O,...k){if(c){f();return}if(O){f(),u.call(null,O,...k);return}if(a()||o){f(),u.call(null,O,...k);return}s<64&&(s*=2);let B;l===1?(l=2,B=0):B=(s+Math.random())*1e3,h(B)}let m=!1;function w(O){m||(m=!0,f(),!c&&(i!==null?(O||(l=2),clearTimeout(i),h(0)):O||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function DE(t){t(!1)}/**
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
 */function ME(t){return t!==void 0}function Sc(t,e,n,s){if(s<e)throw wc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw wc(`Invalid value for '${t}'. Expected ${n} or less.`)}function LE(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bi||(Bi={}));/**
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
 */function FE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class UE{constructor(e,n,s,i,r,o,l,a,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,m)=>{this.resolve_=_,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Bi.NO_ERROR,a=r.getStatus();if(!l||FE(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Bi.ABORT;s(!1,new oi(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new oi(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());ME(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=TE();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?xf():AE();o(a)}else{const a=RE();o(a)}};this.canceled_?n(!1,new oi(!1,null,!0)):this.backoffId_=kE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function BE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $E(t,e){e&&(t["X-Firebase-GMPID"]=e)}function WE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VE(t,e,n,s,i,r,o=!0){const l=LE(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return $E(c,e),BE(c,n),HE(c,r),WE(c,s),new UE(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function jE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Hi{constructor(e,n){this._service=e,n instanceof lt?this._location=n:this._location=lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hi(e,n)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GE(this._location.path)}get storage(){return this._service}get parent(){const e=jE(this._location.path);if(e===null)return null;const n=new lt(this._location.bucket,e);return new Hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xE(e)}}function Ic(t,e){const n=e==null?void 0:e[wE];return n==null?null:lt.makeFromBucketSpec(n,t)}function KE(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:rh(i,t.app.options.projectId))}class qE{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Pf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SE,this._maxUploadRetryTime=IE,this._requests=new Set,i!=null?this._bucket=lt.makeFromBucketSpec(i,this._host):this._bucket=Ic(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=Ic(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new OE(xf());{const o=VE(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Tc="@firebase/storage",Rc="0.13.3";/**
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
 */const Of="storage";function zE(t=gh(),e){t=yn(t);const s=dh(t,Of).getImmediate({identifier:e}),i=sh("storage");return i&&YE(s,...i),s}function YE(t,e,n,s={}){KE(t,e,n,s)}function QE(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qE(n,s,i,e,ph)}function XE(){Bs(new zn(Of,QE,"PUBLIC").setMultipleInstances(!0)),Gt(Tc,Rc,""),Gt(Tc,Rc,"esm2017")}XE();const JE={apiKey:'AIzaSyDDGZA7Wr0oXlNipfnbk2vGHrrZ8su7Za4"',authDomain:"character-creator-7be8e.firebaseapp.com",projectId:"character-creator-7be8e",storageBucket:"character-creator-7be8e.appspot.com",messagingSenderId:"686916926734",appId:"1:686916926734:web:aefa4c260c1c59701cab5f",measurementId:"G-YEPM1R5F1Q"},kf=_h(JE);zE(kf);const Vn=yE(kf),ZE={data(){return{part:{name:"",type:"",filePath:"",tags:[]},tagsInput:""}},methods:{addPart(){this.part.tags=this.tagsInput.split(",").map(e=>e.trim());const t=Wn(Vn,"parts");lE(t,this.part).then(()=>{this.part={name:"",type:"",filePath:"",tags:[]},this.tagsInput=""})}}},eC={class:"add-part-wrapper"},tC={class:"add-part"},nC={class:"form-group"},sC={class:"form-group"},iC={class:"form-group"},rC={class:"form-group"};function oC(t,e,n,s,i,r){return te(),le("div",eC,[R("div",tC,[R("button",{onClick:e[0]||(e[0]=o=>t.$router.push("/"))},"Back"),e[11]||(e[11]=R("h3",null,"Add a New Part",-1)),R("form",{onSubmit:e[5]||(e[5]=Uu((...o)=>r.addPart&&r.addPart(...o),["prevent"]))},[R("div",nC,[e[6]||(e[6]=R("label",{for:"name"},"Part Name",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.part.name=o),placeholder:"Enter part name",required:""},null,512),[[Rt,i.part.name]])]),R("div",sC,[e[7]||(e[7]=R("label",{for:"type"},"Type (e.g., head, eyes, etc.)",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.part.type=o),placeholder:"Enter part type",required:""},null,512),[[Rt,i.part.type]])]),R("div",iC,[e[8]||(e[8]=R("label",{for:"filePath"},"File Path",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.part.filePath=o),placeholder:"Enter file path",required:""},null,512),[[Rt,i.part.filePath]])]),R("div",rC,[e[9]||(e[9]=R("label",{for:"tags"},"Tags (comma-separated)",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=o=>i.tagsInput=o),placeholder:"Enter tags"},null,512),[[Rt,i.tagsInput]])]),e[10]||(e[10]=R("button",{type:"submit"},"Add Part",-1))],32)])])}const lC=mn(ZE,[["render",oC],["__scopeId","data-v-5a7a92ef"]]),aC={props:["isOpen","part"],data(){return{thumbnails:[]}},methods:{closeMenu(){this.$emit("close")},selectThumbnail(t){this.$emit("part-selected",t.filePath)},selectNone(){this.$emit("part-selected","none")},fetchThumbnails(){const t=Wn(Vn,"parts");Ol(t,e=>{const n=e.val();n?this.thumbnails=Object.values(n).filter(s=>s.type===this.part):console.warn(`No parts found for type: ${this.part}`)},e=>{console.error("Error fetching parts:",e)})}},watch:{part(t){t&&this.fetchThumbnails()}},mounted(){this.fetchThumbnails()}},cC={key:0,class:"thumbnail-grid"},uC=["onClick"],hC=["src","alt"],fC={key:1};function dC(t,e,n,s,i,r){return te(),le("div",{class:qi(["sliding-menu",{"is-open":n.isOpen}])},[R("button",{class:"close-button",onClick:e[0]||(e[0]=(...o)=>r.closeMenu&&r.closeMenu(...o))},"X"),R("h3",null,"Select a "+pi(n.part),1),R("button",{onClick:e[1]||(e[1]=(...o)=>r.selectNone&&r.selectNone(...o)),class:"none-button"},"None"),i.thumbnails.length>0?(te(),le("div",cC,[(te(!0),le(st,null,du(i.thumbnails,o=>(te(),le("div",{key:o.id,class:"thumbnail-container",onClick:l=>r.selectThumbnail(o)},[R("img",{src:o.filePath,alt:o.name,class:"thumbnail"},null,8,hC),R("p",null,pi(o.name),1)],8,uC))),128))])):(te(),le("p",fC,"No images found for this part type."))],2)}const pC=mn(aC,[["render",dC],["__scopeId","data-v-b00a1722"]]),_C={components:{SlidingMenu:pC},data(){return{menuOpen:!1,selectedPart:null,selectedHead:null,selectedNose:null,selectedEar:null,selectedEyebrow:null,selectedEye:null,selectedMouth:null,selectedHair:null,selectedShirt:null,selectedBackground:null}},methods:{openMenu(t){this.menuOpen=!0,this.selectedPart=t},setSelectedPart(t){t==="none"&&(t=this.getBlankSvg()),this.selectedPart==="head"?this.selectedHead=t:this.selectedPart==="nose"?this.selectedNose=t:this.selectedPart==="ear"?this.selectedEar=t:this.selectedPart==="eyebrow"?this.selectedEyebrow=t:this.selectedPart==="eye"?this.selectedEye=t:this.selectedPart==="mouth"?this.selectedMouth=t:this.selectedPart==="hair"?this.selectedHair=t:this.selectedPart==="shirt"?this.selectedShirt=t:this.selectedPart==="background"&&(this.selectedBackground=t),this.saveToLocalStorage()},clearAll(){this.selectedHead=null,this.selectedNose=null,this.selectedEar=null,this.selectedEyebrow=null,this.selectedEye=null,this.selectedMouth=null,this.selectedHair=null,this.selectedShirt=null,this.selectedBackground=null,this.saveToLocalStorage()},saveToLocalStorage(){const t={selectedHead:this.selectedHead,selectedNose:this.selectedNose,selectedEar:this.selectedEar,selectedEyebrow:this.selectedEyebrow,selectedEye:this.selectedEye,selectedMouth:this.selectedMouth,selectedHair:this.selectedHair,selectedShirt:this.selectedShirt,selectedBackground:this.selectedBackground};localStorage.setItem("characterParts",JSON.stringify(t))},loadFromLocalStorage(){const t=JSON.parse(localStorage.getItem("characterParts"));t&&(this.selectedHead=t.selectedHead,this.selectedNose=t.selectedNose,this.selectedEar=t.selectedEar,this.selectedEyebrow=t.selectedEyebrow,this.selectedEye=t.selectedEye,this.selectedMouth=t.selectedMouth,this.selectedHair=t.selectedHair,this.selectedShirt=t.selectedShirt,this.selectedBackground=t.selectedBackground)},getBlankSvg(){return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PC9zdmc+"}},mounted(){this.loadFromLocalStorage()}},gC={class:"character-builder-wrapper"},mC={class:"clear-all"},yC={class:"character-builder"},vC={class:"character-display"},bC=["src"],EC=["src"],CC=["src"],wC=["src"],SC=["src"],IC=["src"],TC=["src"],RC=["src"],AC=["src"],NC=["src"],PC=["src"],xC=["src"],OC={class:"side-buttons"};function kC(t,e,n,s,i,r){const o=yi("SlidingMenu");return te(),le("div",gC,[R("div",mC,[R("button",{onClick:e[0]||(e[0]=(...l)=>r.clearAll&&r.clearAll(...l)),class:"clear-button"},"Clear All")]),R("div",yC,[R("div",vC,[i.selectedBackground?(te(),le("img",{key:0,src:i.selectedBackground,alt:"Background",class:"background-layer"},null,8,bC)):He("",!0),t.selectedHairBack?(te(),le("img",{key:1,src:t.selectedHairBack,alt:"Hair Back",class:"hair-back-layer"},null,8,EC)):He("",!0),i.selectedShirt?(te(),le("img",{key:2,src:i.selectedShirt,alt:"Shirt",class:"shirt-layer"},null,8,CC)):He("",!0),t.selectedJacket?(te(),le("img",{key:3,src:t.selectedJacket,alt:"Jacket",class:"jacket-layer"},null,8,wC)):He("",!0),i.selectedEar?(te(),le("img",{key:4,src:i.selectedEar,alt:"Ear",class:"ear-layer"},null,8,SC)):He("",!0),i.selectedHead?(te(),le("img",{key:5,src:i.selectedHead,alt:"Head",class:"head-layer"},null,8,IC)):He("",!0),t.selectedWrinkles?(te(),le("img",{key:6,src:t.selectedWrinkles,alt:"Wrinkles",class:"wrinkle-layer"},null,8,TC)):He("",!0),i.selectedMouth?(te(),le("img",{key:7,src:i.selectedMouth,alt:"Mouth",class:"mouth-layer"},null,8,RC)):He("",!0),i.selectedNose?(te(),le("img",{key:8,src:i.selectedNose,alt:"Nose",class:"nose-layer"},null,8,AC)):He("",!0),t.selectedEyes?(te(),le("img",{key:9,src:t.selectedEyes,alt:"Eyes",class:"eye-layer"},null,8,NC)):He("",!0),i.selectedEyebrow?(te(),le("img",{key:10,src:i.selectedEyebrow,alt:"Eyebrow",class:"eyebrow-layer"},null,8,PC)):He("",!0),i.selectedHair?(te(),le("img",{key:11,src:i.selectedHair,alt:"Hair",class:"hair-layer"},null,8,xC)):He("",!0)]),R("div",OC,[R("button",{onClick:e[1]||(e[1]=l=>r.openMenu("head")),class:"button"},"Select Head"),R("button",{onClick:e[2]||(e[2]=l=>r.openMenu("nose")),class:"button"},"Select Nose"),R("button",{onClick:e[3]||(e[3]=l=>r.openMenu("ear")),class:"button"},"Select Ear"),R("button",{onClick:e[4]||(e[4]=l=>r.openMenu("eyebrow")),class:"button"},"Select Eyebrow"),R("button",{onClick:e[5]||(e[5]=l=>r.openMenu("eye")),class:"button"},"Select Eye"),R("button",{onClick:e[6]||(e[6]=l=>r.openMenu("mouth")),class:"button"},"Select Mouth"),R("button",{onClick:e[7]||(e[7]=l=>r.openMenu("hair")),class:"button"},"Select Hair"),R("button",{onClick:e[8]||(e[8]=l=>r.openMenu("shirt")),class:"button"},"Select Shirt"),R("button",{onClick:e[9]||(e[9]=l=>r.openMenu("background")),class:"button"},"Select Background")])]),i.menuOpen?(te(),Ou(o,{key:0,"is-open":i.menuOpen,part:i.selectedPart,onClose:e[10]||(e[10]=l=>i.menuOpen=!1),onPartSelected:r.setSelectedPart},null,8,["is-open","part","onPartSelected"])):He("",!0)])}const DC=mn(_C,[["render",kC],["__scopeId","data-v-79985fc5"]]),MC={data(){return{part:null,tagsInput:"",showDeletePopup:!1}},methods:{fetchPart(t){const e=Wn(Vn,"parts");Ol(e,n=>{const s=n.val(),i=Object.values(s).find(r=>r.name===t);i?(this.part=i,this.tagsInput=this.part.tags.join(", ")):console.error("Part not found")})},savePart(){if(this.part){this.part.tags=this.tagsInput.split(",").map(e=>e.trim());const t=Wn(Vn,`parts/${this.part.id}`);cE(t,this.part).then(()=>alert("Part updated successfully")).catch(e=>console.error("Error updating part:",e))}},confirmDelete(){this.showDeletePopup=!0},closeDeletePopup(){this.showDeletePopup=!1},deletePart(){const t=Wn(Vn,`parts/${this.part.id}`);aE(t).then(()=>{alert("Part deleted successfully"),this.$router.push("/find-parts")}).catch(e=>console.error("Error deleting part:",e))}},mounted(){const t=this.$route.params.name;t?this.fetchPart(t):console.error("Part name is missing from route params")}},LC={key:0,class:"edit-part-wrapper"},FC={class:"edit-part"},UC={class:"image-container"},BC=["src"],HC={class:"form-container"},$C={class:"form-group"},WC={class:"form-group"},VC={class:"form-group"},jC={class:"form-group"},GC={key:0,class:"delete-popup-overlay"},KC={class:"delete-popup"},qC={class:"popup-buttons"},zC={key:1};function YC(t,e,n,s,i,r){return i.part?(te(),le("div",LC,[R("div",FC,[R("div",UC,[R("img",{src:i.part.filePath,alt:"Part Image",class:"part-image"},null,8,BC)]),R("div",HC,[e[13]||(e[13]=R("h3",null,"Edit Part",-1)),R("form",{onSubmit:e[5]||(e[5]=Uu((...o)=>r.savePart&&r.savePart(...o),["prevent"]))},[R("div",$C,[e[8]||(e[8]=R("label",{for:"name"},"Part Name",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.part.name=o),placeholder:"Enter part name",required:""},null,512),[[Rt,i.part.name]])]),R("div",WC,[e[9]||(e[9]=R("label",{for:"type"},"Type (e.g., head, eyes, etc.)",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.part.type=o),placeholder:"Enter part type",required:""},null,512),[[Rt,i.part.type]])]),R("div",VC,[e[10]||(e[10]=R("label",{for:"filePath"},"File Path",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.part.filePath=o),placeholder:"Enter file path",required:""},null,512),[[Rt,i.part.filePath]])]),R("div",jC,[e[11]||(e[11]=R("label",{for:"tags"},"Tags (comma-separated)",-1)),Tt(R("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>i.tagsInput=o),placeholder:"Enter tags"},null,512),[[Rt,i.tagsInput]])]),e[12]||(e[12]=R("button",{type:"submit"},"Save Part",-1)),R("button",{type:"button",onClick:e[4]||(e[4]=(...o)=>r.confirmDelete&&r.confirmDelete(...o)),class:"delete-button"},"Delete Part")],32)])]),i.showDeletePopup?(te(),le("div",GC,[R("div",KC,[e[14]||(e[14]=R("p",null,"Are you sure you want to delete this part?",-1)),R("div",qC,[R("button",{onClick:e[6]||(e[6]=(...o)=>r.deletePart&&r.deletePart(...o))},"Yes"),R("button",{onClick:e[7]||(e[7]=(...o)=>r.closeDeletePopup&&r.closeDeletePopup(...o))},"No")])])])):He("",!0)])):(te(),le("div",zC,e[15]||(e[15]=[R("p",null,"Loading part details...",-1)])))}const QC=mn(MC,[["render",YC],["__scopeId","data-v-ebe28adc"]]),XC={data(){return{searchQuery:"",parts:[],filteredParts:[]}},methods:{fetchParts(){const t=Wn(Vn,"parts");Ol(t,e=>{const n=e.val();this.parts=n?Object.values(n):[],this.filteredParts=[]})},searchParts(){this.searchQuery.trim()===""?this.filteredParts=[]:this.filteredParts=this.parts.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))},openEditPage(t){t&&t.name?this.$router.push({name:"EditPart",params:{name:t.name}}):console.error("Part name is missing")}},mounted(){this.fetchParts()}},JC={class:"find-parts-wrapper"},ZC={class:"find-parts-container"},ew={class:"masonry-grid"},tw={class:"card-content"},nw=["src"],sw={class:"card-footer"},iw=["onClick"];function rw(t,e,n,s,i,r){return te(),le("div",JC,[R("div",ZC,[Tt(R("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),placeholder:"Search parts by name...",class:"search-bar",onInput:e[1]||(e[1]=(...o)=>r.searchParts&&r.searchParts(...o))},null,544),[[Rt,i.searchQuery]]),R("div",ew,[(te(!0),le(st,null,du(i.filteredParts,(o,l)=>(te(),le("div",{key:l,class:"card"},[R("div",tw,[R("img",{src:o.filePath,alt:"Part Image",class:"part-image"},null,8,nw),R("div",sw,[R("p",null,pi(o.name),1),R("button",{onClick:a=>r.openEditPage(o)},"Info",8,iw)])])]))),128))])])])}const ow=mn(XC,[["render",rw],["__scopeId","data-v-df37ecef"]]),lw=[{path:"/",component:DC},{path:"/add-part",component:lC},{path:"/find-parts",component:ow},{path:"/edit-part/:name",name:"EditPart",component:QC}],aw=Pg({history:K_("/character_creator/"),routes:lw}),cw={parts:{head:[]}},uw={SET_PART_OPTIONS(t,{partName:e,options:n}){t.parts[e]=n}},hw={async loadPartOptions({commit:t},e){}},fw={getPartOptions:t=>e=>t.parts[e]||[]},dw={namespaced:!0,state:cw,mutations:uw,actions:hw,getters:fw};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var pw="store";function ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function _w(t){return t!==null&&typeof t=="object"}function gw(t){return t&&typeof t.then=="function"}function mw(t,e){return function(){return t(e)}}function Df(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Mf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;pr(t,n,[],t._modules.root,!0),kl(t,n,e)}function kl(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},l={},a=ed(!0);a.run(function(){ls(r,function(c,u){o[u]=mw(c,t),l[u]=it(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return l[u].value},enumerable:!0})})}),t._state=es({data:e}),t._scope=a,t.strict&&Cw(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function pr(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var l=Dl(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit(function(){l[a]=s.state})}var c=s.context=yw(t,o,n);s.forEachMutation(function(u,h){var f=o+h;vw(t,f,u,c)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,_=u.handler||u;bw(t,f,_,c)}),s.forEachGetter(function(u,h){var f=o+h;Ew(t,f,u,c)}),s.forEachChild(function(u,h){pr(t,e,n.concat(h),u,i)})}function yw(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,l){var a=$i(r,o,l),c=a.payload,u=a.options,h=a.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,l){var a=$i(r,o,l),c=a.payload,u=a.options,h=a.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Lf(t,e)}},state:{get:function(){return Dl(t.state,n)}}}),i}function Lf(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function vw(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function bw(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var l=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return gw(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(a){throw t._devtoolHook.emit("vuex:error",a),a}):l})}function Ew(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Cw(t){Un(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Dl(t,e){return e.reduce(function(n,s){return n[s]},t)}function $i(t,e,n){return _w(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ww="vuex bindings",Ac="vuex:mutations",Wr="vuex:actions",An="vuex",Sw=0;function Iw(t,e){R_({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ww]},function(n){n.addTimelineLayer({id:Ac,label:"Vuex Mutations",color:Nc}),n.addTimelineLayer({id:Wr,label:"Vuex Actions",color:Nc}),n.addInspector({id:An,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===An)if(s.filter){var i=[];Hf(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Bf(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===An){var i=s.nodeId;Lf(e,i),s.state=Aw(Pw(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===An){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(An),n.sendInspectorState(An),n.addTimelineEvent({layerId:Ac,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Sw++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Wr,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Wr,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Nc=8702998,Tw=6710886,Rw=16777215,Ff={label:"namespaced",textColor:Rw,backgroundColor:Tw};function Uf(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Bf(t,e){return{id:e||"root",label:Uf(e),tags:t.namespaced?[Ff]:[],children:Object.keys(t._children).map(function(n){return Bf(t._children[n],e+n+"/")})}}function Hf(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ff]:[]}),Object.keys(e._children).forEach(function(i){Hf(t,e._children[i],n,s+i+"/")})}function Aw(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=Nw(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Uf(o):o,editable:!1,value:Ao(function(){return r[o]})}})}return i}function Nw(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Ao(function(){return t[n]})}else e[n]=Ao(function(){return t[n]})}),e}function Pw(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ao(t){try{return t()}catch(e){return e}}var ht=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},$f={namespaced:{configurable:!0}};$f.namespaced.get=function(){return!!this._rawModule.namespaced};ht.prototype.addChild=function(e,n){this._children[e]=n};ht.prototype.removeChild=function(e){delete this._children[e]};ht.prototype.getChild=function(e){return this._children[e]};ht.prototype.hasChild=function(e){return e in this._children};ht.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};ht.prototype.forEachChild=function(e){ls(this._children,e)};ht.prototype.forEachGetter=function(e){this._rawModule.getters&&ls(this._rawModule.getters,e)};ht.prototype.forEachAction=function(e){this._rawModule.actions&&ls(this._rawModule.actions,e)};ht.prototype.forEachMutation=function(e){this._rawModule.mutations&&ls(this._rawModule.mutations,e)};Object.defineProperties(ht.prototype,$f);var En=function(e){this.register([],e,!1)};En.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};En.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};En.prototype.update=function(e){Wf([],this.root,e)};En.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new ht(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&ls(n.modules,function(l,a){i.register(e.concat(a),l,s)})};En.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};En.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Wf(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Wf(t.concat(s),e.getChild(s),n.modules[s])}}function xw(t){return new Ve(t)}var Ve=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new En(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,l=this,a=l.dispatch,c=l.commit;this.dispatch=function(f,_){return a.call(o,f,_)},this.commit=function(f,_,m){return c.call(o,f,_,m)},this.strict=i;var u=this._modules.root.state;pr(this,u,[],this._modules.root),kl(this,u),s.forEach(function(h){return h(n)})},Ml={state:{configurable:!0}};Ve.prototype.install=function(e,n){e.provide(n||pw,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Iw(e,this)};Ml.state.get=function(){return this._state.data};Ml.state.set=function(t){};Ve.prototype.commit=function(e,n,s){var i=this,r=$i(e,n,s),o=r.type,l=r.payload,a={type:o,payload:l},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(l)})}),this._subscribers.slice().forEach(function(u){return u(a,i.state)}))};Ve.prototype.dispatch=function(e,n){var s=this,i=$i(e,n),r=i.type,o=i.payload,l={type:r,payload:o},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(l,s.state)})}catch{}var c=a.length>1?Promise.all(a.map(function(u){return u(o)})):a[0](o);return new Promise(function(u,h){c.then(function(f){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(l,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(l,s.state,f)})}catch{}h(f)})})}};Ve.prototype.subscribe=function(e,n){return Df(e,this._subscribers,n)};Ve.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Df(s,this._actionSubscribers,n)};Ve.prototype.watch=function(e,n,s){var i=this;return Un(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Ve.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ve.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),pr(this,this.state,e,this._modules.get(e),s.preserveState),kl(this,this.state)};Ve.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Dl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Mf(this)};Ve.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ve.prototype.hotUpdate=function(e){this._modules.update(e),Mf(this,!0)};Ve.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ve.prototype,Ml);const Ow=xw({modules:{character:dw}}),Ll=a_(v_);Ll.use(Ow);Ll.use(aw);Ll.mount("#app");
