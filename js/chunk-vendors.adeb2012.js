"use strict";(self["webpackChunkcharacter_creator"]=self["webpackChunkcharacter_creator"]||[]).push([[504],{46:(e,t,n)=>{n.d(t,{$L:()=>F,$g:()=>A,A4:()=>p,Am:()=>G,As:()=>U,Cv:()=>j,FA:()=>D,Fy:()=>I,Hk:()=>s,Im:()=>V,K3:()=>c,KA:()=>u,Ku:()=>J,OE:()=>X,T9:()=>E,Uj:()=>h,bD:()=>z,cY:()=>T,dI:()=>Q,eX:()=>R,g:()=>O,gR:()=>W,gz:()=>Y,jZ:()=>S,kH:()=>H,kj:()=>Z,lV:()=>x,qc:()=>q,vA:()=>r,yU:()=>C,yw:()=>B,zW:()=>N});
/**
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
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==h)throw new l;const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==h){const e=c<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=f(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
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
 */function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const m=()=>g().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/character-creator/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},b=()=>{try{return m()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};
/**
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
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
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
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function S(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function x(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const P="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?M(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new O(i,o,n);return a}}function M(e,t){return e.replace(L,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
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
 */function F(e){return JSON.parse(e)}function U(e){return JSON.stringify(e)}
/**
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
 */const $=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=F(d(s[0])||""),n=F(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},j=function(e){const t=$(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},q=function(e){const t=$(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function z(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(K(n)&&K(s)){if(!z(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function K(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function G(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
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
 */
class Y{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Q(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const Z=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function J(e){return e&&e._delegate?e._delegate:e}},144:(e,t,n)=>{n.d(t,{C4:()=>I,EW:()=>Ue,Gc:()=>ve,IG:()=>ke,IJ:()=>Re,KR:()=>Ne,Kh:()=>me,Pr:()=>Le,R1:()=>De,X2:()=>u,bl:()=>k,fE:()=>Ee,g8:()=>we,hV:()=>Ve,hZ:()=>F,i9:()=>Ae,ju:()=>Te,lJ:()=>Se,qA:()=>$,u4:()=>L,uY:()=>a,ux:()=>Ie,wB:()=>Be,yC:()=>o});var i=n(232);
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(){return r}const l=new WeakSet;class u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,r&&r.active&&r.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,S(this),m(this);const e=s,t=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=e,E=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)w(e);this.deps=this.depsTail=void 0,S(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let h,d,p=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=d,void(d=e);e.next=h,h=e}function _(){p++}function g(){if(--p>0)return;if(d){let e=d;d=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(h){let n=h;h=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=i}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,i=n;while(i){const e=i.prevDep;-1===i.version?(i===n&&(n=e),w(i),C(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===x)return;e.globalVersion=x;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=s,r=E;s=e,E=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,i.$H)(n,e._value))&&(e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,E=r,v(e),e.flags&=-3}}function w(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)w(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function C(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let E=!0;const T=[];function I(){T.push(E),E=!1}function k(){const e=T.pop();E=void 0===e||e}function S(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let x=0;class A{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class N{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!E||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new A(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,R(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,x++,this.notify(e)}notify(e){_();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function R(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)R(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const P=new WeakMap,O=Symbol(""),D=Symbol(""),M=Symbol("");function L(e,t,n){if(E&&s){let t=P.get(e);t||P.set(e,t=new Map);let i=t.get(n);i||(t.set(n,i=new N),i.map=t,i.key=n),i.track()}}function F(e,t,n,r,s,o){const a=P.get(e);if(!a)return void x++;const c=e=>{e&&e.trigger()};if(_(),"clear"===t)a.forEach(c);else{const s=(0,i.cy)(e),o=s&&(0,i.yI)(n);if(s&&"length"===n){const e=Number(r);a.forEach(((t,n)=>{("length"===n||n===M||!(0,i.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(M)),t){case"add":s?o&&c(a.get("length")):(c(a.get(O)),(0,i.CE)(e)&&c(a.get(D)));break;case"delete":s||(c(a.get(O)),(0,i.CE)(e)&&c(a.get(D)));break;case"set":(0,i.CE)(e)&&c(a.get(O));break}}g()}function U(e){const t=Ie(e);return t===e?t:(L(t,"iterate",M),Ee(e)?t:t.map(Se))}function $(e){return L(e=Ie(e),"iterate",M),e}const j={__proto__:null,[Symbol.iterator](){return q(this,Symbol.iterator,Se)},concat(...e){return U(this).concat(...e.map((e=>(0,i.cy)(e)?U(e):e)))},entries(){return q(this,"entries",(e=>(e[1]=Se(e[1]),e)))},every(e,t){return B(this,"every",e,t,void 0,arguments)},filter(e,t){return B(this,"filter",e,t,(e=>e.map(Se)),arguments)},find(e,t){return B(this,"find",e,t,Se,arguments)},findIndex(e,t){return B(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return B(this,"findLast",e,t,Se,arguments)},findLastIndex(e,t){return B(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return B(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return U(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return B(this,"map",e,t,void 0,arguments)},pop(){return z(this,"pop")},push(...e){return z(this,"push",e)},reduce(e,...t){return V(this,"reduce",e,t)},reduceRight(e,...t){return V(this,"reduceRight",e,t)},shift(){return z(this,"shift")},some(e,t){return B(this,"some",e,t,void 0,arguments)},splice(...e){return z(this,"splice",e)},toReversed(){return U(this).toReversed()},toSorted(e){return U(this).toSorted(e)},toSpliced(...e){return U(this).toSpliced(...e)},unshift(...e){return z(this,"unshift",e)},values(){return q(this,"values",Se)}};function q(e,t,n){const i=$(e),r=i[t]();return i===e||Ee(e)||(r._next=r.next,r.next=()=>{const e=r._next();return e.value&&(e.value=n(e.value)),e}),r}const W=Array.prototype;function B(e,t,n,i,r,s){const o=$(e),a=o!==e&&!Ee(e),c=o[t];if(c!==W[t]){const t=c.apply(e,s);return a?Se(t):t}let l=n;o!==e&&(a?l=function(t,i){return n.call(this,Se(t),i,e)}:n.length>2&&(l=function(t,i){return n.call(this,t,i,e)}));const u=c.call(o,l,i);return a&&r?r(u):u}function V(e,t,n,i){const r=$(e);let s=n;return r!==e&&(Ee(e)?n.length>3&&(s=function(t,i,r){return n.call(this,t,i,r,e)}):s=function(t,i,r){return n.call(this,t,Se(i),r,e)}),r[t](s,...i)}function H(e,t,n){const i=Ie(e);L(i,"iterate",M);const r=i[t](...n);return-1!==r&&!1!==r||!Te(n[0])?r:(n[0]=Ie(n[0]),i[t](...n))}function z(e,t,n=[]){I(),_();const i=Ie(e)[t].apply(e,n);return g(),k(),i}const K=(0,i.pD)("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.Bm));function Y(e){(0,i.Bm)(e)||(e=String(e));const t=Ie(this);return L(t,"has",e),t.hasOwnProperty(e)}class Q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(r?s?fe:pe:s?de:he).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,i.cy)(e);if(!r){let e;if(o&&(e=j[t]))return e;if("hasOwnProperty"===t)return Y}const a=Reflect.get(e,t,Ae(e)?e:n);return((0,i.Bm)(t)?G.has(t):K(t))?a:(r||L(e,"get",t),s?a:Ae(a)?o&&(0,i.yI)(t)?a:a.value:(0,i.Gv)(a)?r?ye(a):me(a):a)}}class Z extends Q{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const t=Ce(s);if(Ee(n)||Ce(n)||(s=Ie(s),n=Ie(n)),!(0,i.cy)(e)&&Ae(s)&&!Ae(n))return!t&&(s.value=n,!0)}const o=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,Ae(e)?e:r);return e===Ie(r)&&(o?(0,i.$H)(n,s)&&F(e,"set",t,n,s):F(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&F(e,"delete",t,void 0,r),s}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&G.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,i.cy)(e)?"length":O),Reflect.ownKeys(e)}}class X extends Q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J=new Z,ee=new X,te=new Z(!0),ne=e=>e,ie=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...r){const s=this["__v_raw"],o=Ie(s),a=(0,i.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?ne:t?xe:Se;return!t&&L(o,"iterate",l?D:O),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function oe(e,t){const n={get(n){const r=this["__v_raw"],s=Ie(r),o=Ie(n);e||((0,i.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ie(s),c=t?ne:e?xe:Se;return a.call(s,n)?c(r.get(n)):a.call(s,o)?c(r.get(o)):void(r!==s&&r.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Ie(t),"iterate",O),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],r=Ie(n),s=Ie(t);return e||((0,i.$H)(t,s)&&L(r,"has",t),L(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,i){const r=this,s=r["__v_raw"],o=Ie(s),a=t?ne:e?xe:Se;return!e&&L(o,"iterate",O),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}};(0,i.X$)(n,e?{add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear")}:{add(e){t||Ee(e)||Ce(e)||(e=Ie(e));const n=Ie(this),i=ie(n),r=i.has.call(n,e);return r||(n.add(e),F(n,"add",e,e)),this},set(e,n){t||Ee(n)||Ce(n)||(n=Ie(n));const r=Ie(this),{has:s,get:o}=ie(r);let a=s.call(r,e);a||(e=Ie(e),a=s.call(r,e));const c=o.call(r,e);return r.set(e,n),a?(0,i.$H)(n,c)&&F(r,"set",e,n,c):F(r,"add",e,n),this},delete(e){const t=Ie(this),{has:n,get:i}=ie(t);let r=n.call(t,e);r||(e=Ie(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&F(t,"delete",e,void 0,s),o},clear(){const e=Ie(this),t=0!==e.size,n=void 0,i=e.clear();return t&&F(e,"clear",void 0,void 0,n),i}});const r=["keys","values","entries",Symbol.iterator];return r.forEach((i=>{n[i]=re(i,e,t)})),n}function ae(e,t){const n=oe(e,t);return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.$3)(n,r)&&r in t?n:t,r,s)}const ce={get:ae(!1,!1)},le={get:ae(!1,!0)},ue={get:ae(!0,!1)};const he=new WeakMap,de=new WeakMap,pe=new WeakMap,fe=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,i.Zf)(e))}function me(e){return Ce(e)?e:be(e,!1,J,ce,he)}function ve(e){return be(e,!1,te,le,de)}function ye(e){return be(e,!0,ee,ue,pe)}function be(e,t,n,r,s){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ge(e);if(0===a)return e;const c=new Proxy(e,2===a?r:n);return s.set(e,c),c}function we(e){return Ce(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Te(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function ke(e){return!(0,i.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,i.yQ)(e,"__v_skip",!0),e}const Se=e=>(0,i.Gv)(e)?me(e):e,xe=e=>(0,i.Gv)(e)?ye(e):e;function Ae(e){return!!e&&!0===e["__v_isRef"]}function Ne(e){return Pe(e,!1)}function Re(e){return Pe(e,!0)}function Pe(e,t){return Ae(e)?e:new Oe(e,t)}class Oe{constructor(e,t){this.dep=new N,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ie(e),this._value=t?e:Se(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ee(e)||Ce(e);e=n?e:Ie(e),(0,i.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Se(e),this.dep.trigger())}}function De(e){return Ae(e)?e.value:e}const Me={get:(e,t,n)=>"__v_raw"===t?e:De(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Le(e){return we(e)?e:new Proxy(e,Me)}class Fe{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new N(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=x-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ue(e,t,n=!1){let r,s;(0,i.Tn)(e)?r=e:(r=e.get,s=e.set);const o=new Fe(r,s,n);return o}const $e={},je=new WeakMap;let qe;function We(e,t=!1,n=qe){if(n){let t=je.get(n);t||je.set(n,t=[]),t.push(e)}else 0}function Be(e,t,n=i.MZ){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:l,call:h}=n,d=e=>s?e:Ee(e)||!1===s||0===s?Ve(e,1):Ve(e);let p,f,_,g,m=!1,v=!1;if(Ae(e)?(f=()=>e.value,m=Ee(e)):we(e)?(f=()=>d(e),m=!0):(0,i.cy)(e)?(v=!0,m=e.some((e=>we(e)||Ee(e))),f=()=>e.map((e=>Ae(e)?e.value:we(e)?d(e):(0,i.Tn)(e)?h?h(e,2):e():void 0))):f=(0,i.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(_){I();try{_()}finally{k()}}const t=qe;qe=p;try{return h?h(e,3,[g]):e(g)}finally{qe=t}}:i.tE,t&&s){const e=f,t=!0===s?1/0:s;f=()=>Ve(e(),t)}const y=c(),b=()=>{p.stop(),y&&(0,i.TF)(y.effects,p)};if(o&&t){const e=t;t=(...t)=>{e(...t),b()}}let w=v?new Array(e.length).fill($e):$e;const C=e=>{if(1&p.flags&&(p.dirty||e))if(t){const e=p.run();if(s||m||(v?e.some(((e,t)=>(0,i.$H)(e,w[t]))):(0,i.$H)(e,w))){_&&_();const n=qe;qe=p;try{const n=[e,w===$e?void 0:v&&w[0]===$e?[]:w,g];h?h(t,3,n):t(...n),w=e}finally{qe=n}}}else p.run()};return l&&l(C),p=new u(f),p.scheduler=a?()=>a(C,!1):C,g=e=>We(e,!1,p),_=p.onStop=()=>{const e=je.get(p);if(e){if(h)h(e,4);else for(const t of e)t();je.delete(p)}},t?r?C(!0):w=p.run():a?a(C.bind(null,!0),!0):p.run(),b.pause=p.pause.bind(p),b.resume=p.resume.bind(p),b.stop=b,b}function Ve(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Ae(e))Ve(e.value,t,n);else if((0,i.cy)(e))for(let i=0;i<e.length;i++)Ve(e[i],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{Ve(e,t,n)}));else if((0,i.Qd)(e)){for(const i in e)Ve(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ve(e[i],t,n)}return e}},768:(e,t,n)=>{n.d(t,{$u:()=>se,CE:()=>Gt,Df:()=>q,EW:()=>Mn,FK:()=>Ft,Gt:()=>We,Gy:()=>M,K9:()=>ut,Lk:()=>en,MZ:()=>j,OW:()=>$,Q3:()=>an,QP:()=>F,WQ:()=>Be,Wv:()=>Yt,bF:()=>tn,bo:()=>A,dY:()=>g,eW:()=>on,g2:()=>pe,h:()=>Ln,k6:()=>x,nI:()=>mn,pI:()=>me,pM:()=>W,qL:()=>o,uX:()=>Bt,wB:()=>wt});var i=n(144),r=n(232);function s(e,t,n,i){try{return i?e(...i):e()}catch(r){a(r,t,n)}}function o(e,t,n,i){if((0,r.Tn)(e)){const o=s(e,t,n,i);return o&&(0,r.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,r.cy)(e)){const r=[];for(let s=0;s<e.length;s++)r.push(o(e[s],t,n,i));return r}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||r.MZ;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;r=r.parent}if(l)return(0,i.C4)(),s(l,null,10,[e,o,a]),void(0,i.bl)()}c(e,n,a,o,u)}function c(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const l=[];let u=-1;const h=[];let d=null,p=0;const f=Promise.resolve();let _=null;function g(e){const t=_||f;return e?t.then(this?e.bind(this):e):t}function m(e){let t=u+1,n=l.length;while(t<n){const i=t+n>>>1,r=l[i],s=E(r);s<e||s===e&&2&r.flags?t=i+1:n=i}return t}function v(e){if(!(1&e.flags)){const t=E(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=E(n)?l.push(e):l.splice(m(t),0,e),e.flags|=1,y()}}function y(){_||(_=f.then(T))}function b(e){(0,r.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(p+1,0,e):1&e.flags||(h.push(e),e.flags|=1),y()}function w(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function C(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>E(e)-E(t)));if(h.length=0,d)return void d.push(...e);for(d=e,p=0;p<d.length;p++){const e=d[p];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,p=0}}const E=e=>null==e.id?2&e.flags?-1:1/0:e.id;function T(e){r.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,C(e),_=null,(l.length||h.length)&&T(e)}}let I=null,k=null;function S(e){const t=I;return I=e,k=e&&e.type.__scopeId||null,t}function x(e,t=I,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&zt(-1);const r=S(t);let s;try{s=e(...n)}finally{S(r),i._d&&zt(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function A(e,t){if(null===I)return e;const n=Pn(I),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,l=r.MZ]=t[o];e&&((0,r.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,i.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function N(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.C4)(),o(u,n,8,[e.el,l,e,t]),(0,i.bl)())}}const R=Symbol("_vte"),P=e=>e.__isTeleport;const O=Symbol("_leaveCb"),D=Symbol("_enterCb");function M(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ie((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const L=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function U(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function $(e,t,n,i,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:f,onLeave:_,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,C=String(e.key),E=U(n,e),T=(e,t)=>{e&&o(e,i,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,r.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:c,persisted:l,beforeEnter(t){let i=u;if(!n.isMounted){if(!a)return;i=v||u}t[O]&&t[O](!0);const r=E[C];r&&Zt(e,r)&&r.el[O]&&r.el[O](),T(i,[t])},enter(e){let t=h,i=d,r=p;if(!n.isMounted){if(!a)return;t=y||h,i=b||d,r=w||p}let s=!1;const o=e[D]=t=>{s||(s=!0,T(t?r:i,[e]),k.delayedLeave&&k.delayedLeave(),e[D]=void 0)};t?I(t,[e,o]):o()},leave(t,i){const r=String(e.key);if(t[D]&&t[D](!0),n.isUnmounting)return i();T(f,[t]);let s=!1;const o=t[O]=n=>{s||(s=!0,i(),T(n?m:g,[t]),t[O]=void 0,E[r]===e&&delete E[r])};E[r]=e,_?I(_,[t,o]):o()},clone(e){const r=$(e,t,n,i,s);return s&&s(r),r}};return k}function j(e,t){6&e.shapeFlag&&e.component?(e.transition=t,j(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function q(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ft?(128&o.patchFlag&&r++,i=i.concat(q(o.children,t,a))):(t||o.type!==$t)&&i.push(null!=a?sn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function W(e,t){return(0,r.Tn)(e)?(()=>(0,r.X$)({name:e.name},t,{setup:e}))():e}function B(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function V(e,t,n,o,a=!1){if((0,r.cy)(e))return void e.forEach(((e,i)=>V(e,t&&((0,r.cy)(t)?t[i]:t),n,o,a)));if(H(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component):o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===r.MZ?u.refs={}:u.refs,f=u.setupState,_=(0,i.ux)(f),g=f===r.MZ?()=>!1:e=>(0,r.$3)(_,e);if(null!=d&&d!==h&&((0,r.Kg)(d)?(p[d]=null,g(d)&&(f[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,u,12,[l,p]);else{const t=(0,r.Kg)(h),s=(0,i.i9)(h);if(t||s){const i=()=>{if(e.f){const n=t?g(h)?f[h]:p[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,c):(0,r.cy)(n)?n.includes(c)||n.push(c):t?(p[h]=[c],g(h)&&(f[h]=p[h])):(h.value=[c],e.k&&(p[e.k]=h.value))}else t?(p[h]=l,g(h)&&(f[h]=l)):s&&(h.value=l,e.k&&(p[e.k]=l))};l?(i.id=-1,lt(i,n)):i()}else 0}}(0,r.We)().requestIdleCallback,(0,r.We)().cancelIdleCallback;const H=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function K(e,t){return(0,r.cy)(e)?e.some((e=>K(e,t))):(0,r.Kg)(e)?e.split(",").includes(t):!!(0,r.gd)(e)&&(e.lastIndex=0,e.test(t))}function G(e,t){Q(e,"a",t)}function Y(e,t){Q(e,"da",t)}function Q(e,t,n=gn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,i,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&Z(i,t,n,e),e=e.parent}}function Z(e,t,n,i){const s=ee(t,e,i,!0);ae((()=>{(0,r.TF)(i[t],s)}),n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function J(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=gn,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{(0,i.C4)();const s=bn(n),a=o(t,n,e,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const te=e=>(t,n=gn)=>{In&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),ie=te("m"),re=te("bu"),se=te("u"),oe=te("bum"),ae=te("um"),ce=te("sp"),le=te("rtg"),ue=te("rtc");function he(e,t=gn){ee("ec",e,t)}const de="components";function pe(e,t){return _e(de,e,!0,t)||e}const fe=Symbol.for("v-ndc");function _e(e,t,n=!0,i=!1){const s=I||gn;if(s){const n=s.type;if(e===de){const e=On(n,!1);if(e&&(e===t||e===(0,r.PT)(t)||e===(0,r.ZH)((0,r.PT)(t))))return n}const o=ge(s[e]||n[e],t)||ge(s.appContext[e],t);return!o&&i?n:o}}function ge(e,t){return e&&(e[t]||e[(0,r.PT)(t)]||e[(0,r.ZH)((0,r.PT)(t))])}function me(e,t,n,s){let o;const a=n&&n[s],c=(0,r.cy)(e);if(c||(0,r.Kg)(e)){const n=c&&(0,i.g8)(e);let r=!1;n&&(r=!(0,i.fE)(e),e=(0,i.qA)(e)),o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=t(r?(0,i.lJ)(e[s]):e[s],s,void 0,a&&a[s])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,r.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];o[i]=t(e[r],r,i,a&&a[i])}}else o=[];return n&&(n[s]=o),o}const ve=e=>e?Cn(e)?Pn(e):ve(e.parent):null,ye=(0,r.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ve(e.parent),$root:e=>ve(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xe(e),$forceUpdate:e=>e.f||(e.f=()=>{v(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Et.bind(e)}),be=(e,t)=>e!==r.MZ&&!e.__isScriptSetup&&(0,r.$3)(e,t),we={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const i=c[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(be(s,t))return c[t]=1,s[t];if(o!==r.MZ&&(0,r.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.$3)(h,t))return c[t]=3,a[t];if(n!==r.MZ&&(0,r.$3)(n,t))return c[t]=4,n[t];Ee&&(c[t]=0)}}const d=ye[t];let p,f;return d?("$attrs"===t&&(0,i.u4)(e.attrs,"get",""),d(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==r.MZ&&(0,r.$3)(n,t)?(c[t]=4,n[t]):(f=u.config.globalProperties,(0,r.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return be(s,t)?(s[t]=n,!0):i!==r.MZ&&(0,r.$3)(i,t)?(i[t]=n,!0):!(0,r.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r.MZ&&(0,r.$3)(e,a)||be(t,a)||(c=o[0])&&(0,r.$3)(c,a)||(0,r.$3)(i,a)||(0,r.$3)(ye,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ce(e){return(0,r.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ee=!0;function Te(e){const t=xe(e),n=e.proxy,s=e.ctx;Ee=!1,t.beforeCreate&&ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:_,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:C,render:E,renderTracked:T,renderTriggered:I,errorCaptured:k,serverPrefetch:S,expose:x,inheritAttrs:A,components:N,directives:R,filters:P}=t,O=null;if(h&&Ie(h,s,O),c)for(const i in c){const e=c[i];(0,r.Tn)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(Ee=!0,a)for(const i in a){const e=a[i],t=(0,r.Tn)(e)?e.bind(n,n):(0,r.Tn)(e.get)?e.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(e)&&(0,r.Tn)(e.set)?e.set.bind(n):r.tE,c=Mn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const i in l)Se(l[i],s,n,i);if(u){const e=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{We(t,e[t])}))}function D(e,t){(0,r.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&ke(d,e,"c"),D(ne,p),D(ie,f),D(re,_),D(se,g),D(G,m),D(Y,v),D(he,k),D(ue,T),D(le,I),D(oe,b),D(ae,C),D(ce,S),(0,r.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===r.tE&&(e.render=E),null!=A&&(e.inheritAttrs=A),N&&(e.components=N),R&&(e.directives=R),S&&B(e)}function Ie(e,t,n=r.tE){(0,r.cy)(e)&&(e=Oe(e));for(const s in e){const n=e[s];let o;o=(0,r.Gv)(n)?"default"in n?Be(n.from||s,n.default,!0):Be(n.from||s):Be(n),(0,i.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function ke(e,t,n){o((0,r.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Se(e,t,n,i){let s=i.includes(".")?Tt(n,i):()=>n[i];if((0,r.Kg)(e)){const n=t[e];(0,r.Tn)(n)&&wt(s,n)}else if((0,r.Tn)(e))wt(s,e.bind(n));else if((0,r.Gv)(e))if((0,r.cy)(e))e.forEach((e=>Se(e,t,n,i)));else{const i=(0,r.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.Tn)(i)&&wt(s,i,e)}else 0}function xe(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach((e=>Ae(l,e,a,!0))),Ae(l,t,a)):l=t,(0,r.Gv)(t)&&o.set(t,l),l}function Ae(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Ae(e,s,n,!0),r&&r.forEach((t=>Ae(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=Ne[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Ne={data:Re,props:Le,emits:Le,methods:Me,computed:Me,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Me,directives:Me,watch:Fe,provide:Re,inject:Pe};function Re(e,t){return t?e?function(){return(0,r.X$)((0,r.Tn)(e)?e.call(this,this):e,(0,r.Tn)(t)?t.call(this,this):t)}:t:e}function Pe(e,t){return Me(Oe(e),Oe(t))}function Oe(e){if((0,r.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Me(e,t){return e?(0,r.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,r.cy)(e)&&(0,r.cy)(t)?[...new Set([...e,...t])]:(0,r.X$)(Object.create(null),Ce(e),Ce(null!=t?t:{})):t}function Fe(e,t){if(!e)return t;if(!t)return e;const n=(0,r.X$)(Object.create(null),e);for(const i in t)n[i]=De(e[i],t[i]);return n}function Ue(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $e=0;function je(e,t){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=Ue(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:$e++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,r.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,r.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(r,o,a){if(!l){0;const c=u._ceVNode||tn(n,i);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,r):e(c,r,a),l=!0,u._container=r,r.__vue_app__=u,Pn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=qe;qe=u;try{return e()}finally{qe=t}}};return u}}let qe=null;function We(e,t){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[e]=t}else 0}function Be(e,t,n=!1){const i=gn||I;if(i||qe){const s=qe?qe._context.provides:i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.Tn)(t)?t.call(i&&i.proxy):t}else 0}const Ve={},He=()=>Object.create(Ve),ze=e=>Object.getPrototypeOf(e)===Ve;function Ke(e,t,n,r=!1){const s={},o=He();e.propsDefaults=Object.create(null),Ye(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:(0,i.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ge(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,i.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;Ye(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,r.$3)(t,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Qe(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,r.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(xt(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,r.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,r.PT)(s);o[t]=Qe(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.hZ)(e.attrs,"set","")}function Ye(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let i in t){if((0,r.SU)(i))continue;const u=t[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:xt(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const t=(0,i.ux)(n),s=c||r.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=Qe(o,t,c,s[c],e,!(0,r.$3)(s,c))}}return l}function Qe(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(e)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=bn(s);i=r[n]=e.call(null,t),o()}}else i=e;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}const Ze=new WeakMap;function Xe(e,t,n=!1){const i=n?Ze:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,r.Tn)(e)){const i=e=>{l=!0;const[n,i]=Xe(e,t,!0);(0,r.X$)(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return(0,r.Gv)(e)&&i.set(e,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,r.PT)(o[h]);Je(e)&&(a[e]=r.MZ)}else if(o){0;for(const e in o){const t=(0,r.PT)(e);if(Je(t)){const n=o[e],i=a[t]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n),s=i.type;let l=!1,u=!0;if((0,r.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,r.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,r.Tn)(s)&&"Boolean"===s.name;i[0]=l,i[1]=u,(l||(0,r.$3)(i,"default"))&&c.push(t)}}}const u=[a,c];return(0,r.Gv)(e)&&i.set(e,u),u}function Je(e){return"$"!==e[0]&&!(0,r.SU)(e)}const et=e=>"_"===e[0]||"$stable"===e,tt=e=>(0,r.cy)(e)?e.map(cn):[cn(e)],nt=(e,t,n)=>{if(t._n)return t;const i=x(((...e)=>tt(t(...e))),n);return i._c=!1,i},it=(e,t,n)=>{const i=e._ctx;for(const s in e){if(et(s))continue;const n=e[s];if((0,r.Tn)(n))t[s]=nt(s,n,i);else if(null!=n){0;const e=tt(n);t[s]=()=>e}}},rt=(e,t)=>{const n=tt(t);e.slots.default=()=>n},st=(e,t,n)=>{for(const i in t)(n||"_"!==i)&&(e[i]=t[i])},ot=(e,t,n)=>{const i=e.slots=He();if(32&e.vnode.shapeFlag){const e=t._;e?(st(i,t,n),n&&(0,r.yQ)(i,"_",e,!0)):it(t,i)}else t&&rt(e,t)},at=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:st(s,t,n):(o=!t.$stable,it(t,s)),a=t}else t&&(rt(e,t),a={default:1});if(o)for(const r in s)et(r)||null!=a[r]||delete s[r]};function ct(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const lt=Lt;function ut(e){return ht(e)}function ht(e,t){ct();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:_=r.tE,insertStaticContent:g}=e,m=(e,t,n,i=null,r=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zt(e,t)&&(i=J(e),G(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Ut:y(e,t,n,i);break;case $t:b(e,t,n,i);break;case jt:null==e&&E(t,n,i,o);break;case Ft:M(e,t,n,i,r,s,o,a,c);break;default:1&h?k(e,t,n,i,r,s,o,a,c):6&h?L(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,ne)}null!=u&&r&&V(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,i)=>{if(null==e)s(t.el=l(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},E=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i,e.el,e.anchor)},T=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},k=(e,t,n,i,r,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?S(t,n,i,r,s,o,a,c):P(e,t,r,s,o,a,c)},S=(e,t,n,i,o,l,u,h)=>{let p,f;const{props:_,shapeFlag:g,transition:m,dirs:v}=e;if(p=e.el=c(e.type,l,_&&_.is,_),8&g?d(p,e.children):16&g&&A(e.children,p,null,i,o,dt(e,l),u,h),v&&N(e,null,i,"created"),x(p,e,e.scopeId,u,i),_){for(const e in _)"value"===e||(0,r.SU)(e)||a(p,e,null,_[e],l,i);"value"in _&&a(p,"value",null,_.value,l),(f=_.onVnodeBeforeMount)&&dn(f,i,e)}v&&N(e,null,i,"beforeMount");const y=ft(o,m);y&&m.beforeEnter(p),s(p,t,n),((f=_&&_.onVnodeMounted)||y||v)&&lt((()=>{f&&dn(f,i,e),y&&m.enter(p),v&&N(e,null,i,"mounted")}),o)},x=(e,t,n,i,r)=>{if(n&&_(e,n),i)for(let s=0;s<i.length;s++)_(e,i[s]);if(r){let n=r.subTree;if(t===n||Mt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=r.vnode;x(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},A=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?ln(e[l]):cn(e[l]);m(null,c,t,n,i,r,s,o,a)}},P=(e,t,n,i,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r.MZ,_=t.props||r.MZ;let g;if(n&&pt(n,!1),(g=_.onVnodeBeforeUpdate)&&dn(g,n,t,e),p&&N(t,e,n,"beforeUpdate"),n&&pt(n,!0),(f.innerHTML&&null==_.innerHTML||f.textContent&&null==_.textContent)&&d(l,""),h?O(e.dynamicChildren,h,l,n,i,dt(t,s),o):c||q(e,t,l,null,n,i,dt(t,s),o,!1),u>0){if(16&u)D(l,f,_,n,s);else if(2&u&&f.class!==_.class&&a(l,"class",null,_.class,s),4&u&&a(l,"style",f.style,_.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const i=e[t],r=f[i],o=_[i];o===r&&"value"!==i||a(l,i,r,o,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,f,_,n,s);((g=_.onVnodeUpdated)||p)&&lt((()=>{g&&dn(g,n,t,e),p&&N(t,e,n,"updated")}),i)},O=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Ft||!Zt(c,l)||70&c.shapeFlag)?p(c.el):n;m(c,l,u,null,i,r,s,o,!0)}},D=(e,t,n,i,s)=>{if(t!==n){if(t!==r.MZ)for(const o in t)(0,r.SU)(o)||o in n||a(e,o,t[o],null,s,i);for(const o in n){if((0,r.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,i)}"value"in n&&a(e,"value",t.value,n.value,s)}},M=(e,t,n,i,r,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(s(h,n,i),s(d,n,i),A(t.children||[],n,d,r,o,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(O(e.dynamicChildren,f,n,r,o,a,c),(null!=t.key||r&&t===r.subTree)&&_t(e,t,!0)):q(e,t,n,d,r,o,a,c,u)},L=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):F(t,n,i,r,s,o,c):U(e,t,c)},F=(e,t,n,i,r,s,o)=>{const a=e.component=_n(e,i,r);if(z(e)&&(a.ctx.renderer=ne),kn(a,!1,o),a.asyncDep){if(r&&r.registerDep(a,$,o),!e.el){const e=a.subTree=tn($t);b(null,e,t,n)}}else $(a,e,t,n,r,s,o)},U=(e,t,n)=>{const i=t.component=e.component;if(Pt(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,t,n);i.next=t,i.update()}else t.el=e.el,i.vnode=t},$=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:s,vnode:u}=e;{const n=mt(e);if(n)return t&&(t.el=u.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,pt(e,!1),t?(t.el=u.el,j(e,t,c)):t=u,n&&(0,r.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&dn(h,s,t,u),pt(e,!0);const f=At(e);0;const _=e.subTree;e.subTree=f,m(_,f,p(_.el),J(_),e,o,a),t.el=f.el,null===d&&Dt(e,f.el),i&&lt(i,o),(h=t.props&&t.props.onVnodeUpdated)&&lt((()=>dn(h,s,t,u)),o)}else{let i;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:p,type:f}=e,_=H(t);if(pt(e,!1),u&&(0,r.DY)(u),!_&&(i=l&&l.onVnodeBeforeMount)&&dn(i,d,t),pt(e,!0),c&&re){const t=()=>{e.subTree=At(e),re(c,e.subTree,e,o,null)};_&&f.__asyncHydrate?f.__asyncHydrate(c,e,t):t()}else{p.ce&&p.ce._injectChildStyle(f);const i=e.subTree=At(e);0,m(null,i,n,s,e,o,a),t.el=i.el}if(h&&lt(h,o),!_&&(i=l&&l.onVnodeMounted)){const e=t;lt((()=>dn(i,d,e)),o)}(256&t.shapeFlag||d&&H(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&lt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new i.X2(l);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>v(d),pt(e,!0),h()},j=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Ge(e,t.props,r,n),at(e,t.children,n),(0,i.C4)(),w(e),(0,i.bl)()},q=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void B(l,h,n,i,r,s,o,a,c);if(256&p)return void W(l,h,n,i,r,s,o,a,c)}8&f?(16&u&&X(l,r,s),h!==l&&d(n,h)):16&u?16&f?B(l,h,n,i,r,s,o,a,c):X(l,r,s,!0):(8&u&&d(n,""),16&f&&A(h,n,i,r,s,o,a,c))},W=(e,t,n,i,s,o,a,c,l)=>{e=e||r.Oj,t=t||r.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=l?ln(t[p]):cn(t[p]);m(e[p],i,n,null,s,o,a,c,l)}u>h?X(e,s,o,!0,!1,d):A(t,n,i,s,o,a,c,l,d)},B=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],r=t[u]=l?ln(t[u]):cn(t[u]);if(!Zt(i,r))break;m(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=p){const i=e[d],r=t[p]=l?ln(t[p]):cn(t[p]);if(!Zt(i,r))break;m(i,r,n,null,s,o,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)m(null,t[u]=l?ln(t[u]):cn(t[u]),n,r,s,o,a,c,l),u++}}else if(u>p)while(u<=d)G(e[u],s,o,!0),u++;else{const f=u,_=u,g=new Map;for(u=_;u<=p;u++){const e=t[u]=l?ln(t[u]):cn(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const b=p-_+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=f;u<=d;u++){const i=e[u];if(y>=b){G(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=_;v<=p;v++)if(0===E[v-_]&&Zt(i,t[v])){r=v;break}void 0===r?G(i,s,o,!0):(E[r-_]=u+1,r>=C?C=r:w=!0,m(i,t[r],n,null,s,o,a,c,l),y++)}const T=w?gt(E):r.Oj;for(v=T.length-1,u=b-1;u>=0;u--){const e=_+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?m(null,r,n,d,s,o,a,c,l):w&&(v<0||u!==T[v]?K(r,n,d,2):v--)}}},K=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,ne);if(a===Ft){s(o,t,n);for(let e=0;e<l.length;e++)K(l[e],t,n,i);return void s(e.anchor,t,n)}if(a===jt)return void T(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,t,n),lt((()=>c.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,l):l()}else s(o,t,n)},G=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:p}=e;if(-2===h&&(r=!1),null!=a&&V(a,null,n,e,!0),null!=p&&(t.renderCache[p]=void 0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,_=!H(e);let g;if(_&&(g=o&&o.onVnodeBeforeUnmount)&&dn(g,t,e),6&u)Z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&N(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,i):l&&!l.hasOnce&&(s!==Ft||h>0&&64&h)?X(l,t,n,!1,!0):(s===Ft&&384&h||!r&&16&u)&&X(c,t,n),i&&Y(e)}(_&&(g=o&&o.onVnodeUnmounted)||f)&&lt((()=>{g&&dn(g,t,e),f&&N(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Ft)return void Q(n,i);if(t===jt)return void I(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},Z=(e,t,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;vt(l),vt(u),i&&(0,r.DY)(i),s.stop(),o&&(o.flags|=8,G(a,e,t,n)),c&&lt(c,t),lt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,i,r)},J=e=>{if(6&e.shapeFlag)return J(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=f(e.anchor||e.el),n=t&&t[R];return n?f(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,w(),C(),ee=!1)},ne={p:m,um:G,m:K,r:Y,mt:F,mc:A,pc:q,pbc:O,n:J,o:e};let ie,re;return t&&([ie,re]=t(ne)),{render:te,hydrate:ie,createApp:je(te,ie)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _t(e,t,n=!1){const i=e.children,s=t.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=ln(s[r]),t.el=e.el),n||-2===t.patchFlag||_t(e,t)),t.type===Ut&&(t.el=e.el)}}function gt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function mt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mt(t)}function vt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),bt=()=>{{const e=Be(yt);return e}};function wt(e,t,n){return Ct(e,t,n)}function Ct(e,t,n=r.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,r.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(In)if("sync"===c){const e=bt();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=r.tE,e.resume=r.tE,e.pause=r.tE,e}const p=gn;u.call=(e,t,n)=>o(e,p,t,n);let f=!1;"post"===c?u.scheduler=e=>{lt(e,p&&p.suspense)}:"sync"!==c&&(f=!0,u.scheduler=(e,t)=>{t?e():v(e)}),u.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};const _=(0,i.wB)(e,t,u);return In&&(d?d.push(_):h&&_()),_}function Et(e,t,n){const i=this.proxy,s=(0,r.Kg)(e)?e.includes(".")?Tt(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.Tn)(t)?o=t:(o=t.handler,n=t);const a=bn(this),c=Ct(s,o.bind(i),n);return a(),c}function Tt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const It=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,r.PT)(t)}Modifiers`]||e[`${(0,r.Tg)(t)}Modifiers`];function kt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.MZ;let s=n;const a=t.startsWith("update:"),c=a&&It(i,t.slice(7));let l;c&&(c.trim&&(s=n.map((e=>(0,r.Kg)(e)?e.trim():e))),c.number&&(s=n.map(r.bB)));let u=i[l=(0,r.rU)(t)]||i[l=(0,r.rU)((0,r.PT)(t))];!u&&a&&(u=i[l=(0,r.rU)((0,r.Tg)(t))]),u&&o(u,e,6,s);const h=i[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function St(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,r.Tn)(e)){const i=e=>{const n=St(e,t,!0);n&&(c=!0,(0,r.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?((0,r.cy)(o)?o.forEach((e=>a[e]=null)):(0,r.X$)(a,o),(0,r.Gv)(e)&&i.set(e,a),a):((0,r.Gv)(e)&&i.set(e,null),null)}function xt(e,t){return!(!e||!(0,r.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,r.$3)(e,(0,r.Tg)(t))||(0,r.$3)(e,t))}function At(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:p,data:f,setupState:_,ctx:g,inheritAttrs:m}=e,v=S(e);let y,b;try{if(4&n.shapeFlag){const e=s||i,t=e;y=cn(h.call(t,e,d,p,_,f,g)),b=l}else{const e=t;0,y=cn(e.length>1?e(p,{attrs:l,slots:c,emit:u}):e(p,null)),b=t.props?l:Nt(l)}}catch(C){qt.length=0,a(C,e,1),y=tn($t)}let w=y;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(o&&e.some(r.CP)&&(b=Rt(b,o)),w=sn(w,b,!1,!0))}return n.dirs&&(w=sn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&j(w,n.transition),y=w,S(v),y}const Nt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Rt=(e,t)=>{const n={};for(const i in e)(0,r.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Pt(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Ot(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?Ot(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!xt(l,n))return!0}}return!1}function Ot(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!xt(n,s))return!0}return!1}function Dt({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const Mt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,r.cy)(e)?t.effects.push(...e):t.effects.push(e):b(e)}const Ft=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),jt=Symbol.for("v-stc"),qt=[];let Wt=null;function Bt(e=!1){qt.push(Wt=e?null:[])}function Vt(){qt.pop(),Wt=qt[qt.length-1]||null}let Ht=1;function zt(e){Ht+=e,e<0&&Wt&&(Wt.hasOnce=!0)}function Kt(e){return e.dynamicChildren=Ht>0?Wt||r.Oj:null,Vt(),Ht>0&&Wt&&Wt.push(e),e}function Gt(e,t,n,i,r,s){return Kt(en(e,t,n,i,r,s,!0))}function Yt(e,t,n,i,r){return Kt(tn(e,t,n,i,r,!0))}function Qt(e){return!!e&&!0===e.__v_isVNode}function Zt(e,t){return e.type===t.type&&e.key===t.key}const Xt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.Kg)(e)||(0,i.i9)(e)||(0,r.Tn)(e)?{i:I,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,i=0,s=null,o=(e===Ft?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Jt(t),scopeId:k,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:I};return c?(un(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,r.Kg)(n)?8:16),Ht>0&&!a&&Wt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Wt.push(l),l}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==fe||(e=$t),Qt(e)){const i=sn(e,t,!0);return n&&un(i,n),Ht>0&&!a&&Wt&&(6&i.shapeFlag?Wt[Wt.indexOf(e)]=i:Wt.push(i)),i.patchFlag=-2,i}if(Dn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,r.Kg)(e)&&(t.class=(0,r.C4)(e)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),t.style=(0,r.Tr)(n))}const c=(0,r.Kg)(e)?1:Mt(e)?128:P(e)?64:(0,r.Gv)(e)?4:(0,r.Tn)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,i.ju)(e)||ze(e)?(0,r.X$)({},e):e:null}function sn(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?hn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xt(u),ref:t&&t.ref?n&&o?(0,r.cy)(o)?o.concat(Jt(t)):[o,Jt(t)]:Jt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&j(h,l.clone(h)),h}function on(e=" ",t=0){return tn(Ut,null,e,t)}function an(e="",t=!1){return t?(Bt(),Yt($t,null,e)):tn($t,null,e)}function cn(e){return null==e||"boolean"===typeof e?tn($t):(0,r.cy)(e)?tn(Ft,null,e.slice()):Qt(e)?ln(e):tn(Ut,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function un(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),un(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||ze(t)?3===i&&I&&(1===I.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=I}}else(0,r.Tn)(t)?(t={default:t,_ctx:I},n=32):(t=String(t),64&i?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function hn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C4)([t.class,i.class]));else if("style"===e)t.style=(0,r.Tr)([t.style,i.style]);else if((0,r.Mp)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function dn(e,t,n,i=null){o(e,t,7,[n,i])}const pn=Ue();let fn=0;function _n(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(s,o),emitsOptions:St(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=kt.bind(null,a),e.ce&&e.ce(a),a}let gn=null;const mn=()=>gn||I;let vn,yn;{const e=(0,r.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach((t=>t(e))):i[0](e)}};vn=t("__VUE_INSTANCE_SETTERS__",(e=>gn=e)),yn=t("__VUE_SSR_SETTERS__",(e=>In=e))}const bn=e=>{const t=gn;return vn(e),e.scope.on(),()=>{e.scope.off(),vn(t)}},wn=()=>{gn&&gn.scope.off(),vn(null)};function Cn(e){return 4&e.vnode.shapeFlag}let En,Tn,In=!1;function kn(e,t=!1,n=!1){t&&yn(t);const{props:i,children:r}=e.vnode,s=Cn(e);Ke(e,i,s,t),ot(e,r,n);const o=s?Sn(e,t):void 0;return t&&yn(!1),o}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,we);const{setup:o}=n;if(o){(0,i.C4)();const n=e.setupContext=o.length>1?Rn(e):null,c=bn(e),l=s(o,e,0,[e.props,n]),u=(0,r.yL)(l);if((0,i.bl)(),c(),!u&&!e.sp||H(e)||B(e),u){if(l.then(wn,wn),t)return l.then((n=>{xn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else xn(e,l,t)}else An(e,t)}function xn(e,t,n){(0,r.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),An(e,n)}function An(e,t,n){const s=e.type;if(!e.render){if(!t&&En&&!s.render){const t=s.template||xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=En(t,c)}}e.render=s.render||r.tE,Tn&&Tn(e)}{const t=bn(e);(0,i.C4)();try{Te(e)}finally{(0,i.bl)(),t()}}}const Nn={get(e,t){return(0,i.u4)(e,"get",""),e[t]}};function Rn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Nn),slots:e.slots,emit:e.emit,expose:t}}function Pn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function On(e,t=!0){return(0,r.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Dn(e){return(0,r.Tn)(e)&&"__vccOpts"in e}const Mn=(e,t)=>{const n=(0,i.EW)(e,t,In);return n};function Ln(e,t,n){const i=arguments.length;return 2===i?(0,r.Gv)(t)&&!(0,r.cy)(t)?Qt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Qt(n)&&(n=[n]),tn(e,t,n))}const Fn="3.5.12"},130:(e,t,n)=>{n.d(t,{D$:()=>Q,Ef:()=>ee,Jo:()=>K});var i=n(768),r=n(232);n(144);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(ie){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e);const r=h.content;if("svg"===i||"mathml"===i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p=Symbol("_vtc"),f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function _(e,t,n){const i=e[p];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),m=Symbol("_vsh");const v=Symbol("");const y=/(^|;)\s*display\s*:/;function b(e,t,n){const i=e.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,r.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&C(i,t,"")}else for(const e in t)null==n[e]&&C(i,e,"");for(const e in n)"display"===e&&(o=!0),C(i,e,n[e])}else if(s){if(t!==n){const e=i[v];e&&(n+=";"+e),i.cssText=n,o=y.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=o?i.display:"",e[m]&&(i.display="none"))}const w=/\s*!important$/;function C(e,t,n){if((0,r.cy)(n))n.forEach((n=>C(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=I(e,t);w.test(n)?e.setProperty((0,r.Tg)(i),n.replace(w,""),"important"):e[i]=n}}const E=["Webkit","Moz","ms"],T={};function I(e,t){const n=T[t];if(n)return n;let i=(0,r.PT)(t);if("filter"!==i&&i in e)return T[t]=i;i=(0,r.ZH)(i);for(let r=0;r<E.length;r++){const n=E[r]+i;if(n in e)return T[t]=n}return t}const k="http://www.w3.org/1999/xlink";function S(e,t,n,i,s,o=(0,r.J$)(t)){i&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(k,t.slice(6,t.length)):e.setAttributeNS(k,t,n):null==n||o&&!(0,r.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,r.Bm)(n)?String(n):n)}function x(e,t,n,i,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?e.getAttribute("value")||"":e.value,r=null==n?"checkbox"===e.type?"on":"":String(n);return i===r&&"_value"in e||(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(ie){0}c&&e.removeAttribute(s||t)}function A(e,t,n,i){e.addEventListener(t,n,i)}function N(e,t,n,i){e.removeEventListener(t,n,i)}const R=Symbol("_vei");function P(e,t,n,i,r=null){const s=e[R]||(e[R]={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=D(t);if(i){const o=s[t]=U(i,r);A(e,n,o,a)}else o&&(N(e,n,o,a),s[t]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function D(e){let t;if(O.test(e)){let n;t={};while(n=e.match(O))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.Tg)(e.slice(2));return[n,t]}let M=0;const L=Promise.resolve(),F=()=>M||(L.then((()=>M=0)),M=Date.now());function U(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)($(e,n.value),t,5,[e])};return n.value=e,n.attached=F(),n}function $(e,t){if((0,r.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const j=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,q=(e,t,n,i,s,o)=>{const a="svg"===s;"class"===t?_(e,i,a):"style"===t?b(e,n,i):(0,r.Mp)(t)?(0,r.CP)(t)||P(e,t,n,i,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):W(e,t,i,a))?(x(e,t,i),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||S(e,t,i,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,r.Kg)(i)?("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),S(e,t,i,a)):x(e,(0,r.PT)(t),i,o,t)};function W(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&j(t)&&(0,r.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!j(t)||!(0,r.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const B=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.cy)(t)?e=>(0,r.DY)(t,e):t};function V(e){e.target.composing=!0}function H(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const z=Symbol("_assign"),K={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[z]=B(s);const o=i||s.props&&"number"===s.props.type;A(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),e[z](i)})),n&&A(e,"change",(()=>{e.value=e.value.trim()})),t||(A(e,"compositionstart",V),A(e,"compositionend",H),A(e,"change",H))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(e[z]=B(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,r.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(i&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}}};const G=["ctrl","shift","alt","meta"],Y={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>G.some((n=>e[`${n}Key`]&&!t.includes(n)))},Q=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(n,...i)=>{for(let e=0;e<t.length;e++){const i=Y[t[e]];if(i&&i(n,t))return}return e(n,...i)})},Z=(0,r.X$)({patchProp:q},d);let X;function J(){return X||(X=(0,i.K9)(Z))}const ee=(...e)=>{const t=J().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ne(e);if(!i)return;const s=t._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,te(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function te(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ne(e){if((0,r.Kg)(e)){const t=document.querySelector(e);return t}return e}},232:(e,t,n)=>{
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:()=>p,$H:()=>F,BH:()=>H,BX:()=>ne,Bm:()=>w,C4:()=>Z,CE:()=>_,CP:()=>l,DY:()=>U,Gv:()=>C,J$:()=>J,Kg:()=>b,MZ:()=>r,Mp:()=>c,NO:()=>a,Oj:()=>s,PT:()=>P,Qd:()=>S,Ro:()=>q,SU:()=>A,TF:()=>h,Tg:()=>D,Tn:()=>y,Tr:()=>z,We:()=>B,X$:()=>u,Y2:()=>ee,ZH:()=>M,Zf:()=>k,bB:()=>j,cy:()=>f,gd:()=>v,pD:()=>i,rU:()=>L,tE:()=>o,u3:()=>ie,vM:()=>g,v_:()=>se,yI:()=>x,yL:()=>E,yQ:()=>$});const r={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,_=e=>"[object Map]"===I(e),g=e=>"[object Set]"===I(e),m=e=>"[object Date]"===I(e),v=e=>"[object RegExp]"===I(e),y=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,C=e=>null!==e&&"object"===typeof e,E=e=>(C(e)||y(e))&&y(e.then)&&y(e.catch),T=Object.prototype.toString,I=e=>T.call(e),k=e=>I(e).slice(8,-1),S=e=>"[object Object]"===I(e),x=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},R=/-(\w)/g,P=N((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),O=/\B([A-Z])/g,D=N((e=>e.replace(O,"-$1").toLowerCase())),M=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=N((e=>{const t=e?`on${M(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),U=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const B=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const V="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=i(V);function z(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=b(i)?Q(i):z(i);if(r)for(const e in r)t[e]=r[e]}return t}if(b(e)||C(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(Y,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Z(e){let t="";if(b(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const i=Z(e[n]);i&&(t+=i+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J=i(X);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ne(e[i],t[i]);return n}function ne(e,t){if(e===t)return!0;let n=m(e),i=m(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=w(e),i=w(t),n||i)return e===t;if(n=f(e),i=f(t),n||i)return!(!n||!i)&&te(e,t);if(n=C(e),i=C(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>ne(e,t)))}const re=e=>!(!e||!0!==e["__v_isRef"]),se=e=>b(e)?e:null==e?"":f(e)||C(e)&&(e.toString===T||!y(e.toString))?re(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>re(t)?oe(e,t.value):_(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],i)=>(e[ae(t,i)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:w(t)?ae(t):!C(t)||f(t)||S(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},241:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},973:(e,t,n)=>{n.d(t,{Bt:()=>z,aE:()=>nt});var i=n(768),r=n(144);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function p(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function _(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const g=()=>{};const m=/\/$/,v=e=>e.replace(m,"");function y(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),r=e(s)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=S(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function C(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&E(t.matched[i],n.matched[r])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!I(e[n],t[n]))return!1;return!0}function I(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var x,A;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function N(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const R=/^[^#]+#/;function P(e,t){return e.replace(R,"#")+t}function O(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function M(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=O(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function U(e,t){F.set(e,t)}function $(e){const t=F.get(e);return F.delete(e),t}let j=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+i+r}function W(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=q(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((e=>{e(n.value,c,{delta:u,type:x.pop,direction:u?u>0?A.forward:A.back:A.unknown})}))};function c(){o=n.value}function l(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:D()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function B(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?D():null}}function V(e){const{history:t,location:n}=window,i={value:q(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:j()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,B(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=f({},r.value,t.state,{forward:e,scroll:D()});s(o.current,o,!0);const a=f({},B(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function H(e){e=N(e);const t=V(e),n=W(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=f({location:"",base:e,go:i,createHref:P.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function z(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function K(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const Y={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=o("nf");var Z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Z||(Z={}));function X(e,t){return f(new Error,{type:e,[Q]:!0},t)}function J(e,t){return e instanceof Error&&Q in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function ie(e,t){const n=f({},te,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let t=0;t<u.length;t++){const i=u[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(ne,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:c}=i;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n}return{re:o,score:i,keys:s,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=re(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function le(e,t,n){const i=ie(ce(e.path),n);const r=f(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function ue(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=de(e);a.aliasOf=i&&i.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=le(t,n,l),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,i&&i.children[t])}i=i||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(G(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0&&(e.record.path!==n[t].record.path||!me(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&i.set(e.record.name,e)}function l(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw X(1,{location:e});o=r.record.name,a=f(he(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw X(1,{location:e,currentLocation:t});o=r.record.name,a=f({},t.params,e.params),s=r.stringify(a)}const c=[];let l=r;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:_e(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function he(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function pe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _e(e){return e.reduce(((e,t)=>f(e,t.meta)),{})}function ge(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function me(e,t){return t.children.some((t=>t===e||me(e,t)))}const ve=/#/g,ye=/&/g,be=/\//g,we=/=/g,Ce=/\?/g,Ee=/\+/g,Te=/%5B/g,Ie=/%5D/g,ke=/%5E/g,Se=/%60/g,xe=/%7B/g,Ae=/%7C/g,Ne=/%7D/g,Re=/%20/g;function Pe(e){return encodeURI(""+e).replace(Ae,"|").replace(Te,"[").replace(Ie,"]")}function Oe(e){return Pe(e).replace(xe,"{").replace(Ne,"}").replace(ke,"^")}function De(e){return Pe(e).replace(Ee,"%2B").replace(Re,"+").replace(ve,"%23").replace(ye,"%26").replace(Se,"`").replace(xe,"{").replace(Ne,"}").replace(ke,"^")}function Me(e){return De(e).replace(we,"%3D")}function Le(e){return Pe(e).replace(ve,"%23").replace(Ce,"%3F")}function Fe(e){return null==e?"":Le(e).replace(be,"%2F")}function Ue(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(Ee," "),n=e.indexOf("="),s=Ue(n<0?e:e.slice(0,n)),o=n<0?null:Ue(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function je(e){let t="";for(let n in e){const i=e[n];if(n=Me(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=Array.isArray(i)?i.map((e=>e&&De(e))):[i&&De(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function qe(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}function We(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):K(e)?a(X(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Ve(e,t,n,i){const r=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(o)){const a=o.__vccOpts||o,c=a[t];c&&r.push(Be(c,n,i,s,e))}else{let a=o();0,r.push((()=>a.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=p(r)?r.default:r;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,i,s,e)()}))))}}return r}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,i.WQ)(l),n=(0,i.WQ)(u),s=(0,i.EW)((()=>t.resolve((0,r.R1)(e.to)))),o=(0,i.EW)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(E.bind(null,i));if(o>-1)return o;const a=Ze(e[t-2]);return t>1&&Ze(i)===a&&r[r.length-1].path!==a?r.findIndex(E.bind(null,e[t-2])):o})),a=(0,i.EW)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,i.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return Ye(n)?t[(0,r.R1)(e.replace)?"replace":"push"]((0,r.R1)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,i.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Ke=(0,i.pM)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,r.Kh)(ze(e)),{options:s}=(0,i.WQ)(l),o=(0,i.EW)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ge=Ke;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Je=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,i.WQ)(h),o=(0,i.EW)((()=>e.route||s.value)),l=(0,i.WQ)(c,0),u=(0,i.EW)((()=>o.value.matched[l]));(0,i.Gt)(c,l+1),(0,i.Gt)(a,u),(0,i.Gt)(h,o);const d=(0,r.KR)();return(0,i.wB)((()=>[d.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&E(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return et(n.default,{Component:a,route:r});const l=s.props[e.name],h=l?!0===l?r.params:"function"===typeof l?l(r):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},_=(0,i.h)(a,f({},h,t,{onVnodeUnmounted:p,ref:d}));return et(n.default,{Component:_,route:r})||_}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Je;function nt(e){const t=ue(e.routes,e),n=e.parseQuery||$e,s=e.stringifyQuery||je,o=e.history;const a=We(),c=We(),p=We(),m=(0,r.IJ)(Y);let v=Y;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=_.bind(null,(e=>""+e)),E=_.bind(null,Fe),T=_.bind(null,Ue);function I(e,n){let i,r;return G(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function N(e,i){if(i=f({},i||m.value),"string"===typeof e){const r=y(n,e,i.path),s=t.resolve({path:r.path},i),a=o.createHref(r.fullPath);return f(r,s,{params:T(s.params),hash:Ue(r.hash),redirectedFrom:void 0,href:a})}let r;if("path"in e)r=f({},e,{path:y(n,e.path,i.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];r=f({},e,{params:E(e.params)}),i.params=E(i.params)}const a=t.resolve(r,i),c=e.hash||"";a.params=w(T(a.params));const l=b(s,f({},e,{hash:Oe(c),path:a.path})),u=o.createHref(l);return f({fullPath:l,hash:c,query:s===je?qe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?y(n,e,m.value.path):f({},e)}function P(e,t){if(v!==e)return X(8,{from:t,to:e})}function O(e){return q(e)}function F(e){return O(f(R(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=R(i):{path:i},i.params={}),f({query:e.query,hash:e.hash,params:e.params},i)}}function q(e,t){const n=v=N(e),i=m.value,r=e.state,o=e.force,a=!0===e.replace,c=j(n);if(c)return q(f(R(c),{state:r,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&C(s,i,n)&&(u=X(16,{to:l,from:i}),re(i,i,!0,!1)),(u?Promise.resolve(u):B(l,i)).catch((e=>J(e)?J(e,2)?e:ie(e):te(e,l,i))).then((e=>{if(e){if(J(e,2))return q(f(R(e.to),{state:r,force:o,replace:a}),t||l)}else e=H(l,i,!0,a,r);return V(l,i,e),e}))}function W(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[i,r,s]=rt(e,t);n=Ve(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Be(i,e,t))}));const o=W.bind(null,e,t);return n.push(o),it(n).then((()=>{n=[];for(const i of a.list())n.push(Be(i,e,t));return n.push(o),it(n)})).then((()=>{n=Ve(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Be(i,e,t))}));return n.push(o),it(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(Be(r,e,t));else n.push(Be(i.beforeEnter,e,t));return n.push(o),it(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ve(s,"beforeRouteEnter",e,t),n.push(o),it(n)))).then((()=>{n=[];for(const i of c.list())n.push(Be(i,e,t));return n.push(o),it(n)})).catch((e=>J(e,8)?e:Promise.reject(e)))}function V(e,t,n){for(const i of p.list())i(e,t,n)}function H(e,t,n,i,r){const s=P(e,t);if(s)return s;const a=t===Y,c=d?history.state:{};n&&(i||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},r)):o.push(e.fullPath,r)),m.value=e,re(e,t,n,a),ie()}let z;function K(){z=o.listen(((e,t,n)=>{const i=N(e),r=j(i);if(r)return void q(f(r,{replace:!0}),i).catch(g);v=i;const s=m.value;d&&U(L(s.fullPath,n.delta),D()),B(i,s).catch((e=>J(e,12)?e:J(e,2)?(q(e.to,i).then((e=>{J(e,20)&&!n.delta&&n.type===x.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,i,s)))).then((e=>{e=e||H(i,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===x.pop&&J(e,20)&&o.go(-1,!1)),V(i,s,e)})).catch(g)}))}let Q,Z=We(),ee=We();function te(e,t,n){ie(e);const i=ee.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Q&&m.value!==Y?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function ie(e){return Q||(Q=!e,K(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function re(t,n,r,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!r&&$(L(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>o(t,n,a))).then((e=>e&&M(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:m,addRoute:I,removeRoute:k,hasRoute:A,getRoutes:S,resolve:N,options:e,push:O,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:p.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(m)}),d&&!oe&&m.value===Y&&(oe=!0,O(o.location).catch((e=>{0})));const n={};for(const r in Y)n[r]=(0,i.EW)((()=>m.value[r]));e.provide(l,t),e.provide(u,(0,r.Kh)(n)),e.provide(h,m);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=Y,z&&z(),m.value=Y,oe=!1,Q=!1),s()}}};return ce}function it(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>E(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>E(e,a)))||r.push(a))}return[n,i,r]}},782:(e,t,n)=>{n.d(t,{y$:()=>ee});var i=n(768),r=n(144);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";let u,h;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=globalThis.perf_hooks.performance):u=!1),u}function p(){return d()?h.now():Date.now()}class f{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(s){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(s){}r=e},now(){return p()}},t&&t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function _(e,t){const n=e,i=o(),r=s(),l=a&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new f(n,r):null,s=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(c,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function m(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function v(e){return null!==e&&"object"===typeof e}function y(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function C(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;T(e,n,[],e._modules.root,!0),E(e,n,t)}function E(e,t,n){var s=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,c={},l={},u=(0,r.uY)(!0);u.run((function(){m(a,(function(t,n){c[n]=b(t,e),l[n]=(0,i.EW)((function(){return c[n]()})),Object.defineProperty(e.getters,n,{get:function(){return l[n].value},enumerable:!0})}))})),e._state=(0,r.Kh)({data:t}),e._scope=u,e.strict&&N(e),s&&n&&e._withCommit((function(){s.data=null})),o&&o.stop()}function T(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=R(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=i.state}))}var l=i.context=I(e,o,n);i.forEachMutation((function(t,n){var i=o+n;S(e,i,t,l)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;x(e,i,r,l)})),i.forEachGetter((function(t,n){var i=o+n;A(e,i,t,l)})),i.forEachChild((function(i,s){T(e,t,n.concat(s),i,r)}))}function I(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=P(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:i?e.commit:function(n,i,r){var s=P(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return R(e.state,n)}}}),r}function k(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function S(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function x(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return y(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function A(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function N(e){(0,i.wB)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function P(e,t,n){return v(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var O="vuex bindings",D="vuex:mutations",M="vuex:actions",L="vuex",F=0;function U(e,t){_({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:D,label:"Vuex Mutations",color:$}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:$}),n.addInspector({id:L,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===L)if(n.filter){var i=[];H(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[V(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===L){var i=n.nodeId;k(t,i),n.state=z(G(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===L){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(L),n.sendInspectorState(L),n.addTimelineEvent({layerId:D,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=F++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:M,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var $=8702998,j=6710886,q=16777215,W={label:"namespaced",textColor:q,backgroundColor:j};function B(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function V(e,t){return{id:t||"root",label:B(t),tags:e.namespaced?[W]:[],children:Object.keys(e._children).map((function(n){return V(e._children[n],t+n+"/")}))}}function H(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[W]:[]}),Object.keys(t._children).forEach((function(r){H(e,t._children[r],n,i+r+"/")}))}function z(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=K(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?B(e):e,editable:!1,value:Y((function(){return s[e]}))}}))}return r}function K(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=Y((function(){return e[n]}))}else t[n]=Y((function(){return e[n]}))})),t}function G(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var s=e[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Y(e){try{return e()}catch(t){return t}}var Q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Z={namespaced:{configurable:!0}};Z.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(e,t){this._children[e]=t},Q.prototype.removeChild=function(e){delete this._children[e]},Q.prototype.getChild=function(e){return this._children[e]},Q.prototype.hasChild=function(e){return e in this._children},Q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Q.prototype.forEachChild=function(e){m(this._children,e)},Q.prototype.forEachGetter=function(e){this._rawModule.getters&&m(this._rawModule.getters,e)},Q.prototype.forEachAction=function(e){this._rawModule.actions&&m(this._rawModule.actions,e)},Q.prototype.forEachMutation=function(e){this._rawModule.mutations&&m(this._rawModule.mutations,e)},Object.defineProperties(Q.prototype,Z);var X=function(e){this.register([],e,!1)};function J(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;J(e.concat(i),t.getChild(i),n.modules[i])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){J([],this.root,e)},X.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new Q(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&m(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=i;var l=this._modules.root.state;T(this,l,[],this._modules.root),E(this,l),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var i=this,r=P(e,t,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},te.prototype.dispatch=function(e,t){var n=this,i=P(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var r=this;return(0,i.wB)((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),T(this,this.state,e,this._modules.get(e),n.preserveState),E(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),C(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),C(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=oe(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=oe(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=oe(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function ie(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||v(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var i=e._modulesNamespaceMap[n];return i}},405:(e,t,n)=>{n.d(t,{MF:()=>ve,j6:()=>fe,om:()=>pe,Sx:()=>be,Wp:()=>ye,KO:()=>we});var i=n(852),r=n(363),s=n(46);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,_=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(C(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),C(h.get(this))}:function(...t){return C(e.apply(E(this),t))}:function(t,...n){const i=e.call(E(this),t,...n);return p.set(i,t.sort?t.sort():[t]),C(i)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&m(e),o(e,l())?new Proxy(e,v):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=w(e);return t!==e&&(f.set(e,t),_.set(t,e)),t}const E=e=>_.get(e);function T(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=C(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(C(o.result),e.oldVersion,e.newVersion,C(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],S=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}y((e=>({...e,get:(t,n,i)=>x(t,n)||e.get(t,n,i),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
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
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",P="0.10.14",O=new r.Vy("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",$="@firebase/auth",j="@firebase/auth-compat",q="@firebase/database",W="@firebase/data-connect",B="@firebase/database-compat",V="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",Q="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",ie="@firebase/vertexai",re="@firebase/firestore-compat",se="firebase",oe="11.0.0",ae="[DEFAULT]",ce={[R]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[j]:"fire-auth-compat",[q]:"fire-rtdb",[W]:"fire-data-connect",[B]:"fire-rtdb-compat",[V]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[Q]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[re]:"fire-fst-compat",[ie]:"fire-vertex","fire-js":"fire-js",[se]:"fire-js-all"},le=new Map,ue=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pe(e){const t=e.name;if(he.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of le.values())de(n,e);for(const n of ue.values())de(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const _e={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new s.FA("app","Firebase",_e);
/**
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
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
const ve=oe;function ye(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ge.create("no-options");const a=le.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of he.values())c.addComponent(i);const l=new me(n,r,c);return le.set(o,l),l}function be(e=ae){const t=le.get(e);if(!t&&e===ae&&(0,s.T9)())return ye();if(!t)throw ge.create("no-app",{appName:e});return t}function we(e,t,n){var r;let s=null!==(r=ce[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}pe(new i.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */
const Ce="firebase-heartbeat-database",Ee=1,Te="firebase-heartbeat-store";let Ie=null;function ke(){return Ie||(Ie=T(Ce,Ee,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Se(e){try{const t=await ke(),n=t.transaction(Te),i=await n.objectStore(Te).get(Ae(e));return await n.done,i}catch(t){if(t instanceof s.g)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function xe(e,t){try{const n=await ke(),i=n.transaction(Te,"readwrite"),r=i.objectStore(Te);await r.put(t,Ae(e)),await i.done}catch(n){if(n instanceof s.g)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Ne=1024,Re=2592e6;class Pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Oe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}catch(n){O.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Oe(),{heartbeatsToSend:n,unsentEntries:i}=De(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return O.warn(t),""}}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function De(e,t=Ne){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Le(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Fe(e){pe(new i.uA("platform-logger",(e=>new A(e)),"PRIVATE")),pe(new i.uA("heartbeat",(e=>new Pe(e)),"PRIVATE")),we(R,P,e),we(R,P,"esm2017"),we("fire-js","")}Fe("")},852:(e,t,n)=>{n.d(t,{h1:()=>l,uA:()=>r});var i=n(46);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},363:(e,t,n)=>{n.d(t,{$b:()=>r,Vy:()=>l});
/**
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
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},400:(e,t,n)=>{n.d(t,{Wp:()=>i.Wp});var i=n(405),r="firebase",s="11.0.0";
/**
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
 */
/**
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
 */
(0,i.KO)(r,s,"app")},161:(e,t,n)=>{n.d(t,{C3:()=>la,Zy:()=>ea,VC:()=>Ko,KR:()=>Ho,TF:()=>Go,yo:()=>Qo});var i=n(405),r=n(852),s=n(46),o=n(363);const a="@firebase/database",c="1.0.9";
/**
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
 */let l="";function u(e){l=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new o.Vy("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,s.kj)(e),n=new s.gz;n.update(t);const i=n.digest();return s.K3.encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?(0,s.As)(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,s.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o.$b.VERBOSE,b=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,_.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&C(!0)),b){const t=y.apply(null,e);b(t)}},T=function(e){return function(...t){E(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw g.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if((0,s.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",P="[MAX_NAME]",O=function(e,t){if(e===t)return 0;if(e===R||t===P)return-1;if(t===R||e===P)return 1;{const n=z(e),i=z(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.As)(t))},L=function(e){if("object"!==typeof e||null===e)return(0,s.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.As)(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){(0,s.vA)(!A(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const B=new RegExp("^-?(0*)\\d{1,10}$"),V=-2147483648,H=2147483647,z=function(e){if(B.test(e)){const t=Number(e);if(t>=V&&t<=H)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
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
 */
const J="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
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
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,s.vA)("string"===typeof t,"typeof type must == string"),(0,s.vA)("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return U(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
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
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.A4)(this.counters_)}}
/**
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
 */const fe={},_e={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
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
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ye="start",be="close",we="pLPCommand",Ce="pRTLPCB",Ee="id",Te="pw",Ie="ser",ke="cb",Se="seg",xe="ts",Ae="d",Ne="dframe",Re=1870,Pe=30,Oe=Re-Pe,De=25e3,Me=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),N((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=J,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,s.$g)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.KA)(t),i=F(n,Oe);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Ee]=e,n[Te]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Te]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+xe+i+"="+e.ts+"&"+Ae+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const Ue=16384,$e=45e3;let je=null;"undefined"!==typeof MozWebSocket?je=MozWebSocket:"undefined"!==typeof WebSocket&&(je=WebSocket);class qe{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=ge(t),this.connURL=qe.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[ee]=J,!(0,s.$g)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[se]=n),i&&(o[ae]=i),r&&(o[oe]=r),de(e,ce,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,s.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${J}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/character-creator/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new je(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==je&&!qe.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
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
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
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
 */
const Be=6e4,Ve=5e3,He=10240,ze=102400,Ke="t",Ge="d",Ye="s",Qe="r",Ze="e",Xe="o",Je="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Je?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Je,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Ze?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),J!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Be))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ve))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return bt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=gt(e,0),i=gt(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=O(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Et(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.OE)(this.parts_[n]);St(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.OE)(t),St(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=(0,s.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class At extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new At}getInitialEvent(e){return(0,s.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Nt=1e3,Rt=3e5,Pt=3e4,Ot=1.3,Dt=3e4,Mt="server_kill",Lt=3;class Ft extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=Rt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");At.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.As)(r)),(0,s.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.vA)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Ft.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.gR)(e,"w")){const n=(0,s.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,s.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ot)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),r))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&S(I),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.jZ)()?e["framework.cordova"]=1:(0,s.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.Im)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
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
 */
class Ut{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ut(e,t)}}
/**
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
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ut(R,e),i=new Ut(R,t);return 0!==this.compare(n,i)}minPost(){return Ut.MIN}}
/**
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
 */let jt;class qt extends $t{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return O(e.name,t.name)}isDefinedOn(e){throw(0,s.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ut.MIN}maxPost(){return new Ut(P,jt)}makePost(e,t){return(0,s.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,jt)}toString(){return".key"}}const Wt=new qt;
/**
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
 */class Bt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=i?i:zt.EMPTY_NODE,this.right=null!=r?r:zt.EMPTY_NODE}copy(e,t,n,i,r){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Ht{copy(e,t,n,i,r){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Kt(e,t){return O(e.name,t.name)}function Gt(e,t){return O(e,t)}
/**
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
 */let Yt;function Qt(e){Yt=e}zt.EMPTY_NODE=new Ht;const Zt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.gR)(t,".sv"),"Priority must be a string or number.")}else(0,s.vA)(e===Yt||e.isEmpty(),"priority of unexpected type.");(0,s.vA)(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Jt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Jt=e}static get __childrenNodeConstructor(){return Jt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,s.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),r=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.vA)(i>=0,"Unknown leaf type: "+t),(0,s.vA)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function sn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends $t{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?O(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ut.MIN}maxPost(){return new Ut(P,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ut(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
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
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Vt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Vt.BLACK):(a(i,Vt.BLACK),a(i,Vt.RED))}return s},o=new ln(e.length),a=s(o);return new zt(i||t,a)};
/**
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
 */let hn;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.vA)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new pn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,s.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,s.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.vA)(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ut.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(e,t){const n=(0,s.kH)(this.indexes_,((n,i)=>{const r=(0,s.yw)(this.indexSet_,i);if((0,s.vA)(r,"Missing index implementation for "+i),n===dn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ut.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),un(n,r.getCompare())}return dn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ut(e.name,i))),r.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.kH)(this.indexes_,(n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new Ut(e.name,i)):n}}));return new pn(n,this.indexSet_)}}
/**
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
 */let fn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,s.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new _n(new zt(Gt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ut(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?fn:this.priorityNode_;return new _n(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(an,((s,o)=>{t[s]=o.val(e),n++,r&&_n.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ut(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends _n{constructor(){super(new zt(Gt),_n.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Ut,{MIN:{value:new Ut(R,_n.EMPTY_NODE)},MAX:{value:new Ut(P,mn)}}),qt.__EMPTY_NODE=_n.EMPTY_NODE,nn.__childrenNodeConstructor=_n,Qt(mn),sn(mn);
/**
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
 */
const vn=!0;function yn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,yn(t))}if(e instanceof Array||!vn){let n=_n.EMPTY_NODE;return U(e,((t,i)=>{if((0,s.gR)(e,t)&&"."!==t.substring(0,1)){const e=yn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(yn(t))}{const n=[];let i=!1;const r=e;if(U(r,((e,t)=>{if("."!==e.substring(0,1)){const r=yn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ut(e,r)))}})),0===n.length)return _n.EMPTY_NODE;const s=un(n,Kt,(e=>e.name),Gt);if(i){const e=un(n,an.getCompare());return new _n(s,yn(t),new pn({".priority":e},{".priority":an}))}return new _n(s,yn(t),pn.Default)}}rn(yn);
/**
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
 */
class bn extends $t{constructor(e){super(),this.indexPath_=e,(0,s.vA)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?O(e.name,t.name):r}makePost(e,t){const n=yn(e),i=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,i)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Ut(P,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
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
 */class wn extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?O(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ut.MIN}maxPost(){return Ut.MAX}makePost(e,t){const n=yn(e);return new Ut(t,n)}toString(){return".value"}}const Cn=new wn;
/**
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
 */function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){(0,s.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):(0,s.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(kn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,i)=>{t.hasChild(e)||n.trackChildChange(In(e,i))})),t.isLeafNode()||t.forEachChild(an,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(kn(t,i,r))}else n.trackChildChange(Tn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class An{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=An.getStartPost_(e),this.endPost_=An.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Ut(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_n.EMPTY_NODE);const r=this;return t.forEachChild(an,((e,t)=>{r.matches(new Ut(e,t))||(i=i.updateImmediateChild(e,_n.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Nn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new An(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ut(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(_n.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.vA)(a.numChildren()===this.limit_,"");const c=new Ut(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(kn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(In(l.name,l.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
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
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new Nn(e):new An(e)}function On(e){const t={};if(e.isDefault())return t;let n;if(e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===Wt?n="$key":((0,s.vA)(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Dn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Mn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mn.getListenId_(e,n),a={};this.listens_[o]=a;const c=On(e._queryParams);this.restRequest_(r+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),(0,s.yw)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=On(e._queryParams),n=e._path.toString(),i=new s.cY;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.Am)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.$L)(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
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
 */class Ln{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Fn(){return{value:null,children:new Map}}function Un(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Fn());const r=e.children.get(i);t=pt(t),Un(r,t,n)}}function $n(e,t,n){null!==e.value?n(t,e.value):jn(e,((e,i)=>{const r=new lt(t.toString()+"/"+e);$n(i,r,n)}))}function jn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */class qn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */const Wn=1e4,Bn=3e4,Vn=3e5;class Hn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qn(e);const n=Wn+(Bn-Wn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,i)=>{i>0&&(0,s.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
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
 */var zn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Qn(ut(),t,this.revert)}}return(0,s.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Qn(pt(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Zn(this.source,ut()):new Zn(this.source,pt(this.path))}}
/**
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
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zn.OVERWRITE}operationForChild(e){return yt(this.path)?new Xn(this.source,ut(),this.snap.getImmediateChild(e)):new Xn(this.source,pt(this.path),this.snap)}}
/**
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
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Xn(this.source,ut(),t.value):new Jn(this.source,ut(),t)}return(0,s.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class ei{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ni(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Sn(t.childName,t.snapshotNode))})),ii(e,r,"child_removed",t,i,n),ii(e,r,"child_added",t,i,n),ii(e,r,"child_moved",s,i,n),ii(e,r,"child_changed",t,i,n),ii(e,r,"value",t,i,n),r}function ii(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>si(e,t,n))),o.forEach((n=>{const i=ri(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ri(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function si(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.Hk)("Should only compare child_ events.");const i=new Ut(t.childName,t.snapshotNode),r=new Ut(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
 */function oi(e,t){return{eventCache:e,serverCache:t}}function ai(e,t,n,i){return oi(new ei(t,n,i),e.serverCache)}function ci(e,t,n,i){return oi(e.eventCache,new ei(t,n,i))}function li(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ui(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let hi;const di=()=>(hi||(hi=new zt(D)),hi);class pi{constructor(e,t=di()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return U(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=vt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new pi(null)}}set(e,t){if(yt(e))return new pi(t,this.children);{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.set(pt(e),t),s=this.children.insert(n,r);return new pi(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new pi(null):new pi(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.setTree(pt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new pi(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),vt(t,i),n):new pi(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new pi(null))}}function _i(e,t,n){if(yt(t))return new fi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bt(r,t);return s=s.updateChild(o,n),new fi(e.writeTree_.set(r,s))}{const i=new pi(n),r=e.writeTree_.setTree(t,i);return new fi(r)}}}function gi(e,t,n){let i=e;return U(n,((e,n)=>{i=_i(i,vt(t,e),n)})),i}function mi(e,t){if(yt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new fi(n)}}function vi(e,t){return null!=yi(e,t)}function yi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function bi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new Ut(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ut(e,n.value))})),t}function wi(e,t){if(yt(t))return e;{const n=yi(e,t);return new fi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function Ci(e){return e.writeTree_.isEmpty()}function Ei(e,t){return Ti(ut(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.vA)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ti(vt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
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
 */function Ii(e,t){return Gi(t,e)}function ki(e,t,n,i,r){(0,s.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=_i(e.visibleWrites,t,n)),e.lastWriteId=i}function Si(e,t,n,i){(0,s.vA)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=gi(e.visibleWrites,t,n),e.lastWriteId=i}function xi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Ai(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ni(t,i.path)?r=!1:Et(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ri(e),!0;if(i.snap)e.visibleWrites=mi(e.visibleWrites,i.path);else{const t=i.children;U(t,(t=>{e.visibleWrites=mi(e.visibleWrites,vt(i.path,t))}))}return!0}return!1}function Ni(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(vt(e.path,n),t))return!0;return!1}function Ri(e){e.visibleWrites=Oi(e.allWrites,Pi,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Pi(e){return e.visible}function Oi(e,t,n){let i=fi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Et(n,e)?(t=bt(n,e),i=_i(i,t,o.snap)):Et(e,n)&&(t=bt(e,n),i=_i(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.Hk)("WriteRecord should have .snap or .children");if(Et(n,e))t=bt(n,e),i=gi(i,t,o.children);else if(Et(e,n))if(t=bt(e,n),yt(t))i=gi(i,ut(),o.children);else{const e=(0,s.yw)(o.children,ht(t));if(e){const n=e.getChild(pt(t));i=_i(i,ut(),n)}}}}}return i}function Di(e,t,n,i,r){if(i||r){const s=wi(e.visibleWrites,t);if(!r&&Ci(s))return n;if(r||null!=n||vi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},o=Oi(e.allWrites,s,t),a=n||_n.EMPTY_NODE;return Ei(o,a)}return null}{const i=yi(e.visibleWrites,t);if(null!=i)return i;{const i=wi(e.visibleWrites,t);if(Ci(i))return n;if(null!=n||vi(i,ut())){const e=n||_n.EMPTY_NODE;return Ei(i,e)}return null}}}function Mi(e,t,n){let i=_n.EMPTY_NODE;const r=yi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(an,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=wi(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=Ei(wi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)})),bi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=wi(e.visibleWrites,t);return bi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Li(e,t,n,i,r){(0,s.vA)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(vi(e.visibleWrites,o))return null;{const t=wi(e.visibleWrites,o);return Ci(t)?r.getChild(n):Ei(t,r.getChild(n))}}function Fi(e,t,n,i){const r=vt(t,n),s=yi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=wi(e.visibleWrites,r);return Ei(t,i.getNode().getImmediateChild(n))}return null}function Ui(e,t){return yi(e.visibleWrites,t)}function $i(e,t,n,i,r,s,o){let a;const c=wi(e.visibleWrites,t),l=yi(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Ei(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function ji(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function qi(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Mi(e.writeTree,e.treePath,t)}function Bi(e,t,n,i){return Li(e.writeTree,e.treePath,t,n,i)}function Vi(e,t){return Ui(e.writeTree,vt(e.treePath,t))}function Hi(e,t,n,i,r,s){return $i(e.writeTree,e.treePath,t,n,i,r,s)}function zi(e,t,n){return Fi(e.writeTree,e.treePath,t,n)}function Ki(e,t){return Gi(vt(e.treePath,t),e.writeTree)}function Gi(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Yi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,In(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Qi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zi=new Qi;class Xi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ui(this.viewCache_),r=Hi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
 */function Ji(e){return{filter:e}}function er(e,t){(0,s.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function tr(e,t,n,i,r){const o=new Yi;let a,c;if(n.type===zn.OVERWRITE){const l=n;l.source.fromUser?a=sr(e,t,l.path,l.snap,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=rr(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===zn.MERGE){const l=n;l.source.fromUser?a=ar(e,t,l.path,l.children,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=lr(e,t,l.path,l.children,i,r,c,o))}else if(n.type===zn.ACK_USER_WRITE){const s=n;a=s.revert?dr(e,t,s.path,i,r,o):ur(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==zn.LISTEN_COMPLETE)throw(0,s.Hk)("Unknown operation type: "+n.type);a=hr(e,t,n.path,i,o)}const l=o.getChanges();return nr(t,a,l),{viewCache:a,changes:l}}function nr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=li(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(En(li(t)))}}function ir(e,t,n,i,r,o){const a=t.eventCache;if(null!=Vi(i,n))return t;{let c,l;if(yt(n))if((0,s.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ui(t),r=n instanceof _n?n:_n.EMPTY_NODE,s=Wi(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=qi(i,ui(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.vA)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Bi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Bi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=zi(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ai(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function rr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,Zi,null)}const h=ci(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Xi(r,h,s);return ir(e,h,n,r,d,a)}function sr(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Xi(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ai(t,l,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ai(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),l=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,i):_n.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=ai(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function or(e,t){return e.eventCache.isCompleteForChild(t)}function ar(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=vt(n,i);or(t,ht(l))&&(a=sr(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=vt(n,i);or(t,ht(l))||(a=sr(e,a,l,c,r,s,o))})),a}function cr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function lr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new pi(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=cr(e,c,i);l=rr(e,l,new lt(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=cr(e,c,i);l=rr(e,l,new lt(n),u,r,s,o,a)}})),l}function ur(e,t,n,i,r,s,o){if(null!=Vi(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return rr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new pi(null);return c.getNode().forEachChild(Wt,((e,t)=>{i=i.set(new lt(e),t)})),lr(e,t,n,i,r,s,a,o)}return t}{let l=new pi(null);return i.foreach(((e,t)=>{const i=vt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),lr(e,t,n,l,r,s,a,o)}}function hr(e,t,n,i,r){const s=t.serverCache,o=ci(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return ir(e,o,n,i,Zi,r)}function dr(e,t,n,i,r,o){let a;if(null!=Vi(i,n))return t;{const c=new Xi(i,t,r),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=qi(i,ui(t));else{const e=t.serverCache.getNode();(0,s.vA)(e instanceof _n,"serverChildren would be complete if leaf node"),n=Wi(i,e)}u=e.filter.updateFullNode(l,n,o)}else{const r=ht(n);let s=zi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,pt(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,_n.EMPTY_NODE,pt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qi(i,ui(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Vi(i,ut()),ai(t,u,a,e.filter.filtersNodes())}}
/**
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
 */class pr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new xn(n.getIndex()),r=Pn(n);this.processor_=Ji(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new ei(a,s.isFullyInitialized(),i.filtersNodes()),u=new ei(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=oi(u,l),this.eventGenerator_=new ti(this.query_)}get query(){return this.query_}}function fr(e){return e.viewCache_.serverCache.getNode()}function _r(e,t){const n=ui(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gr(e){return 0===e.eventRegistrations_.length}function mr(e,t){e.eventRegistrations_.push(t)}function vr(e,t,n){const i=[];if(n){(0,s.vA)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function yr(e,t,n,i){t.type===zn.MERGE&&null!==t.source.queryId&&((0,s.vA)(ui(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.vA)(li(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=tr(e.processor_,r,t,n,i);return er(e.processor_,o.viewCache),(0,s.vA)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,wr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function br(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,((e,t)=>{i.push(Tn(e,t))}))}return n.isFullyInitialized()&&i.push(En(n.getNode())),wr(e,i,n.getNode(),t)}function wr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ni(e.eventGenerator_,t,n,r)}
/**
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
 */let Cr,Er;class Tr{constructor(){this.views=new Map}}function Ir(e){(0,s.vA)(!Cr,"__referenceConstructor has already been defined"),Cr=e}function kr(){return(0,s.vA)(Cr,"Reference.ts has not been loaded"),Cr}function Sr(e){return 0===e.views.size}function xr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.vA)(null!=o,"SyncTree gave us an op for an invalid query."),yr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(yr(s,t,n,i));return r}}function Ar(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=qi(n,r?i:null),s=!1;e?s=!0:i instanceof _n?(e=Wi(n,i),s=!1):(e=_n.EMPTY_NODE,s=!1);const o=oi(new ei(e,s,!1),new ei(i,r,!1));return new pr(t,o)}return o}function Nr(e,t,n,i,r,s){const o=Ar(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),mr(o,n),br(o,n)}function Rr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Lr(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(vr(l,n,i)),gr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(vr(t,n,i)),gr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Lr(e)&&s.push(new(kr())(t._repo,t._path)),{removed:s,events:o}}function Pr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Or(e,t){let n=null;for(const i of e.views.values())n=n||_r(i,t);return n}function Dr(e,t){const n=t._queryParams;if(n.loadsAllData())return Fr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mr(e,t){return null!=Dr(e,t)}function Lr(e){return null!=Fr(e)}function Fr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function Ur(e){(0,s.vA)(!Er,"__referenceConstructor has already been defined"),Er=e}function $r(){return(0,s.vA)(Er,"Reference.ts has not been loaded"),Er}let jr=1;class qr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=ji(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(e,t,n,i,r){return ki(e.pendingWriteTree_,t,n,i,r),r?es(e,new Xn(Kn(),t,n)):[]}function Br(e,t,n,i){Si(e.pendingWriteTree_,t,n,i);const r=pi.fromObject(n);return es(e,new Jn(Kn(),t,r))}function Vr(e,t,n=!1){const i=xi(e.pendingWriteTree_,t),r=Ai(e.pendingWriteTree_,t);if(r){let t=new pi(null);return null!=i.snap?t=t.set(ut(),!0):U(i.children,(e=>{t=t.set(new lt(e),!0)})),es(e,new Qn(i.path,t,n))}return[]}function Hr(e,t,n){return es(e,new Xn(Gn(),t,n))}function zr(e,t,n){const i=pi.fromObject(n);return es(e,new Jn(Gn(),t,i))}function Kr(e,t){return es(e,new Zn(Gn(),t))}function Gr(e,t,n){const i=os(e,n);if(i){const n=as(i),r=n.path,s=n.queryId,o=bt(r,t),a=new Zn(Yn(s),o);return cs(e,r,a)}return[]}function Yr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Mr(o,t))){const c=Rr(o,t,n,i);Sr(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Lr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=ls(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=is(e,i);e.listenProvider_.startListening(us(r),rs(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(us(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(ss(t));e.listenProvider_.stopListening(us(t),n)}))}hs(e,l)}return a}function Qr(e,t,n,i){const r=os(e,i);if(null!=r){const i=as(r),s=i.path,o=i.queryId,a=bt(s,t),c=new Xn(Yn(o),a,n);return cs(e,s,c)}return[]}function Zr(e,t,n,i){const r=os(e,i);if(r){const i=as(r),s=i.path,o=i.queryId,a=bt(s,t),c=pi.fromObject(n),l=new Jn(Yn(o),a,c);return cs(e,s,l)}return[]}function Xr(e,t,n,i=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=bt(e,r);o=o||Or(t,n),a=a||Lr(t)}));let c,l=e.syncPointTree_.get(r);if(l?(a=a||Lr(l),o=o||Or(l,ut())):(l=new Tr,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)c=!0;else{c=!1,o=_n.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Or(t,ut());n&&(o=o.updateImmediateChild(e,n))}))}const u=Mr(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=ss(t);(0,s.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ds();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ii(e.pendingWriteTree_,r);let d=Nr(l,t,n,h,o,c);if(!u&&!a&&!i){const n=Dr(l,t);d=d.concat(ps(e,t,n))}return d}function Jr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=bt(e,t),r=Or(n,i);if(r)return r}));return Di(r,t,s,n,i)}function es(e,t){return ts(t,e.syncPointTree_,null,Ii(e.pendingWriteTree_,ut()))}function ts(e,t,n,i){if(yt(e.path))return ns(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Or(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Ki(i,o);s=s.concat(ts(a,c,e,t))}return r&&(s=s.concat(xr(r,e,i,n))),s}}function ns(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Or(r,ut()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Ki(i,t),c=e.operationForChild(t);c&&(s=s.concat(ns(c,r,o,a)))})),r&&(s=s.concat(xr(r,e,i,n))),s}function is(e,t){const n=t.query,i=rs(e,n);return{hashFn:()=>{const e=fr(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Gr(e,n._path,i):Kr(e,n._path);{const i=W(t,n);return Yr(e,n,null,i)}}}}function rs(e,t){const n=ss(t);return e.queryToTagMap.get(n)}function ss(e){return e._path.toString()+"$"+e._queryIdentifier}function os(e,t){return e.tagToQueryMap.get(t)}function as(e){const t=e.indexOf("$");return(0,s.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function cs(e,t,n){const i=e.syncPointTree_.get(t);(0,s.vA)(i,"Missing sync point for query tag that we're tracking");const r=Ii(e.pendingWriteTree_,t);return xr(i,n,r,null)}function ls(e){return e.fold(((e,t,n)=>{if(t&&Lr(t)){const e=Fr(t);return[e]}{let e=[];return t&&(e=Pr(t)),U(n,((t,n)=>{e=e.concat(n)})),e}}))}function us(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new($r())(e._repo,e._path):e}function hs(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ss(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ds(){return jr++}function ps(e,t,n){const i=t._path,r=rs(e,t),o=is(e,n),a=e.listenProvider_.startListening(us(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)(0,s.vA)(!Lr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Lr(t))return[Fr(t).query];{let e=[];return t&&(e=e.concat(Pr(t).map((e=>e.query)))),U(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(us(i),rs(e,i))}}return a}
/**
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
 */class fs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fs(t)}node(){return this.node_}}class _s{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new _s(this.syncTree_,t)}node(){return Jr(this.syncTree_,this.path_)}}const gs=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ms=function(e,t,n){return e&&"object"===typeof e?((0,s.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?vs(e[".sv"],t,n):"object"===typeof e[".sv"]?ys(e[".sv"],t):void(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vs=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.vA)(!1,"Unexpected server value: "+e)}},ys=function(e,t,n){e.hasOwnProperty("increment")||(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.vA)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.vA)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},bs=function(e,t,n,i){return Cs(t,new _s(n,e),i)},ws=function(e,t,n){return Cs(e,new fs(t),n)};function Cs(e,t,n){const i=e.getPriority().val(),r=ms(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ms(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new nn(s,yn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new nn(r))),i.forEachChild(an,((e,i)=>{const r=Cs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
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
 */class Es{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ts(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ht(n);while(null!==r){const e=(0,s.yw)(i.node.children,r)||{children:{},childCount:0};i=new Es(r,i,e),n=pt(n),r=ht(n)}return i}function Is(e){return e.node.value}function ks(e,t){e.node.value=t,Os(e)}function Ss(e){return e.node.childCount>0}function xs(e){return void 0===Is(e)&&!Ss(e)}function As(e,t){U(e.node.children,((n,i)=>{t(new Es(n,e,i))}))}function Ns(e,t,n,i){n&&!i&&t(e),As(e,(e=>{Ns(e,t,!0,i)})),n&&i&&t(e)}function Rs(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ps(e){return new lt(null===e.parent?e.name:Ps(e.parent)+"/"+e.name)}function Os(e){null!==e.parent&&Ds(e.parent,e.name,e)}function Ds(e,t,n){const i=xs(n),r=(0,s.gR)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Os(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Os(e))}
/**
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
 */const Ms=/[\[\].#$\/\u0000-\u001F\u007F]/,Ls=/[\[\].#$\u0000-\u001F\u007F]/,Fs=10485760,Us=function(e){return"string"===typeof e&&0!==e.length&&!Ms.test(e)},$s=function(e){return"string"===typeof e&&0!==e.length&&!Ls.test(e)},js=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$s(e)},qs=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!A(e)||e&&"object"===typeof e&&(0,s.gR)(e,".sv")},Ws=function(e,t,n,i){i&&void 0===t||Bs((0,s.dI)(e,"value"),t,n)},Bs=function(e,t,n){const i=n instanceof lt?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(i));if("function"===typeof t)throw new Error(e+"contains a function "+xt(i)+" with contents = "+t.toString());if(A(t))throw new Error(e+"contains "+t.toString()+" "+xt(i));if("string"===typeof t&&t.length>Fs/3&&(0,s.OE)(t)>Fs)throw new Error(e+"contains a string greater than "+Fs+" utf8 bytes "+xt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(U(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Us(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(i,t),Bs(e,s,i),kt(i)})),n&&r)throw new Error(e+' contains ".value" child '+xt(i)+" in addition to actual children.")}},Vs=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=gt(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!Us(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Et(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Hs=function(e,t,n,i){if(i&&void 0===t)return;const r=(0,s.dI)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];U(t,((e,t)=>{const i=new lt(e);if(Bs(r,t,vt(n,i)),".priority"===ft(i)&&!qs(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),Vs(r,o)},zs=function(e,t,n,i){if((!i||void 0!==n)&&!$s(n))throw new Error((0,s.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ks=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zs(e,t,n,i)},Gs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ys=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Us(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!js(n))throw new Error((0,s.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Qs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Xs(e,t,n){Zs(e,n),eo(e,(e=>Ct(e,t)))}function Js(e,t,n){Zs(e,n),eo(e,(e=>Et(e,t)||Et(t,e)))}function eo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(to(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function to(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&E("event: "+n.toString()),K(i)}}}
/**
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
 */const no="repo_interrupt",io=25;class ro{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Es,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function so(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new Mn(e.repoInfo_,((t,n,i,r)=>{co(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>lo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ft(e.repoInfo_,t,((t,n,i,r)=>{co(e,t,n,i,r)}),(t=>{lo(e,t)}),(t=>{uo(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=me(e.repoInfo_,(()=>new Hn(e.stats_,e.server_))),e.infoData_=new Ln,e.infoSyncTree_=new qr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Hr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),ho(e,"connected",!1),e.serverSyncTree_=new qr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Js(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function oo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ao(e){return gs({timestamp:oo(e)})}function co(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.kH)(n,(e=>yn(e)));a=Zr(e.serverSyncTree_,o,t,r)}else{const t=yn(n);a=Qr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.kH)(n,(e=>yn(e)));a=zr(e.serverSyncTree_,o,t)}else{const t=yn(n);a=Hr(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Io(e,o)),Js(e.eventQueue_,c,a)}function lo(e,t){ho(e,"connected",t),!1===t&&go(e)}function uo(e,t){U(t,((t,n)=>{ho(e,t,n)}))}function ho(e,t,n){const i=new lt("/.info/"+t),r=yn(n);e.infoData_.updateSnapshot(i,r);const s=Hr(e.infoSyncTree_,i,r);Js(e.eventQueue_,i,s)}function po(e){return e.nextWriteId_++}function fo(e,t,n,i,r){bo(e,"set",{path:t.toString(),value:n,priority:i});const s=ao(e),o=yn(n,i),a=Jr(e.serverSyncTree_,t),c=ws(o,a,s),l=po(e),u=Wr(e.serverSyncTree_,t,c,l,!0);Zs(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||S("set at "+t+" failed: "+n);const o=Vr(e.serverSyncTree_,l,!s);Js(e.eventQueue_,t,o),wo(e,r,n,i)}));const h=Ro(e,t);Io(e,h),Js(e.eventQueue_,h,[])}function _o(e,t,n,i){bo(e,"update",{path:t.toString(),value:n});let r=!0;const s=ao(e),o={};if(U(n,((n,i)=>{r=!1,o[n]=bs(vt(t,n),yn(i),e.serverSyncTree_,s)})),r)E("update() called with empty data.  Don't do anything."),wo(e,i,"ok",void 0);else{const r=po(e),s=Br(e.serverSyncTree_,t,o,r);Zs(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||S("update at "+t+" failed: "+n);const a=Vr(e.serverSyncTree_,r,!o),c=a.length>0?Io(e,t):t;Js(e.eventQueue_,c,a),wo(e,i,n,s)})),U(n,(n=>{const i=Ro(e,vt(t,n));Io(e,i)})),Js(e.eventQueue_,t,[])}}function go(e){bo(e,"onDisconnectEvents");const t=ao(e),n=Fn();$n(e.onDisconnect_,ut(),((i,r)=>{const s=bs(i,r,e.serverSyncTree_,t);Un(n,i,s)}));let i=[];$n(n,ut(),((t,n)=>{i=i.concat(Hr(e.serverSyncTree_,t,n));const r=Ro(e,t);Io(e,r)})),e.onDisconnect_=Fn(),Js(e.eventQueue_,ut(),i)}function mo(e,t,n){let i;i=".info"===ht(t._path)?Xr(e.infoSyncTree_,t,n):Xr(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}function vo(e,t,n){let i;i=".info"===ht(t._path)?Yr(e.infoSyncTree_,t,n):Yr(e.serverSyncTree_,t,n),Xs(e.eventQueue_,t._path,i)}function yo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(no)}function bo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function wo(e,t,n,i){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Co(e,t,n){return Jr(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Eo(e,t=e.transactionQueueTree_){if(t||No(e,t),Is(t)){const n=xo(e,t);(0,s.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&To(e,Ps(t),n)}else Ss(t)&&As(t,(t=>{Eo(e,t)}))}function To(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Co(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(i=>{bo(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();No(e,Ts(e.transactionQueueTree_,t)),Eo(e,e.transactionQueueTree_),Js(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)K(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Io(e,t)}}),a)}function Io(e,t){const n=So(e,t),i=Ps(n),r=xo(e,n);return ko(e,r,i),i}function ko(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=bt(n,o.path);let u,h=!1;if((0,s.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=io)h=!0,u="maxretry",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Co(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){Bs("transaction failed: Data returned ",i,o.path);let t=yn(i);const c="object"===typeof i&&null!=i&&(0,s.gR)(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=ao(e),h=ws(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=po(e),a.splice(a.indexOf(l),1),r=r.concat(Wr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Vr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0))}Js(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):i.push((()=>t[c].onComplete(new Error(u),!1,null)))))}No(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)K(i[s]);Eo(e,e.transactionQueueTree_)}function So(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Is(i))i=Ts(i,n),t=pt(t),n=ht(t);return i}function xo(e,t){const n=[];return Ao(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ao(e,t,n){const i=Is(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);As(t,(t=>{Ao(e,t,n)}))}function No(e,t){const n=Is(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ks(t,n.length>0?n:void 0)}As(t,(t=>{No(e,t)}))}function Ro(e,t){const n=Ps(So(e,t)),i=Ts(e.transactionQueueTree_,t);return Rs(i,(t=>{Po(e,t)})),Po(e,i),Ns(i,(t=>{Po(e,t)})),n}function Po(e,t){const n=Is(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.vA)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ks(t,void 0):n.length=o+1,Js(e.eventQueue_,Ps(t),r);for(let e=0;e<i.length;e++)K(i[e])}}
/**
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
 */function Oo(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Do(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Mo=function(e,t){const n=Lo(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lt(n.pathString)}},Lo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Oo(e.substring(u,h)));const d=Do(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Fo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Uo=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Fo.charAt(n%64),n=Math.floor(n/64);(0,s.vA)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Fo.charAt(t[r]);return(0,s.vA)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
class $o{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.As)(this.snapshot.exportVal())}}class jo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class qo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Wo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new Bo(this._repo,this._path)}get _queryIdentifier(){const e=Dn(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return Dn(this._queryParams)}isEqual(e){if(e=(0,s.Ku)(e),!(e instanceof Wo))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Bo extends Wo{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Bo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Vo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=zo(this.ref,e);return new Vo(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Vo(n,zo(this.ref,t),an))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ho(e,t){return e=(0,s.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?zo(e._root,t):e._root}function zo(e,t){return e=(0,s.Ku)(e),null===ht(e._path)?Ks("child","path",t,!1):zs("child","path",t,!1),new Bo(e._repo,vt(e._path,t))}function Ko(e,t){e=(0,s.Ku)(e),Gs("push",e._path),Ws("push",t,e._path,!0);const n=oo(e._repo),i=Uo(n),r=zo(e,i),o=zo(e,i);let a;return a=null!=t?Yo(o,t).then((()=>o)):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Go(e){return Gs("remove",e._path),Yo(e,null)}function Yo(e,t){e=(0,s.Ku)(e),Gs("set",e._path),Ws("set",t,e._path,!1);const n=new s.cY;return fo(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Qo(e,t){Hs("update",t,e._path,!1);const n=new s.cY;return _o(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Zo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new $o("value",this,new Vo(e.snapshotNode,new Bo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}matches(e){return e instanceof Zo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Xo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}createEvent(e,t){(0,s.vA)(null!=e.childName,"Child events should have a childName.");const n=zo(new Bo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new $o(e.type,this,new Vo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Xo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Jo(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{vo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new qo(n,s||void 0),a="value"===t?new Zo(o):new Xo(t,o);return mo(e._repo,e,a),()=>vo(e._repo,e,a)}function ea(e,t,n,i){return Jo(e,"value",t,n,i)}Ir(Bo),Ur(Bo);
/**
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
 */
const ta="FIREBASE_DATABASE_EMULATOR_HOST",na={};let ia=!1;function ra(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function sa(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Mo(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/character-creator/"}[ta]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Mo(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new X(X.OWNER):new Z(e.name,e.options,t);Ys("Invalid Firebase Database URL",c),yt(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aa(l,e,u,new Q(e.name,n));return new ca(h,e)}function oa(e,t){const n=na[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),yo(e),delete n[e.key]}function aa(e,t,n,i){let r=na[t.name];r||(r={},na[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ro(e,ia,n,i),r[e.toURLString()]=s,s}class ca{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(so(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(oa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function la(e=(0,i.Sx)(),t){const n=(0,i.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,s.yU)("database");e&&ua(n,...e)}return n}function ua(e,t,n,i={}){e=(0,s.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,s.Fy)(i.mockUserToken,e.app.options.projectId);o=new X(t)}ra(r,t,n,o)}
/**
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
 */
function ha(e){u(i.MF),(0,i.om)(new r.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sa(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(a,c,e),(0,i.KO)(a,c,"esm2017")}
/**
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
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ha()},844:(e,t,n)=>{n.d(t,{c7:()=>z});var i=n(405),r=n(46),s=n(852);
/**
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
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
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
 */
class u extends r.g{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function p(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new u(h.UNKNOWN,e)}function _(){return new u(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new u(h.CANCELED,"User canceled the upload/download.")}function m(e){return new u(h.INVALID_URL,"Invalid URL '"+e+"'.")}function v(e){return new u(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function y(e){return new u(h.INVALID_ARGUMENT,e)}function b(){return new u(h.APP_DELETED,"The Firebase app was deleted.")}function w(e){return new u(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));
/**
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
 */
class C{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=C.makeFromUrl(e,t)}catch(i){return new C(e,"")}if(""===n.path)return n;throw v(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},_=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${_}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:c,postModify:r},{regex:p,indices:f,postModify:l},{regex:v,indices:y,postModify:l}];for(let o=0;o<b.length;o++){const t=b[o],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new C(e,r),t.postModify(n);break}}if(null==n)throw m(e);return n}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function T(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(p,c())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let f=!1;function _(e){f||(f=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,_(!0)}),n),_}function I(e){e(!1)}
/**
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
 */function k(e){return void 0!==e}function S(e,t,n,i){if(i<t)throw y(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw y(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function x(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
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
 */
function A(e,t){const n=e>=500&&e<600,i=[408,429],r=-1!==i.indexOf(e),s=-1!==t.indexOf(e);return n||r||s}
/**
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(d||(d={}));class N{constructor(e,t,n,i,r,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new R(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===d.NO_ERROR,r=n.getStatus();if(!t||A(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===d.ABORT;return void e(!1,new R(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new R(s,n))}))},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());k(e)?n(e):n()}catch(s){i(s)}else if(null!==r){const e=f();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?b():g();i(e)}else{const e=_();i(e)}};this.canceled_?t(!1,new R(!1,null,!0)):this.backoffId_=T(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&I(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class R{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function P(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function O(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function D(e,t){t&&(e["X-Firebase-GMPID"]=t)}function M(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function L(e,t,n,i,r,s,o=!0){const a=x(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return D(l,t),P(l,n),O(l,s),M(l,i),new N(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}
/**
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
 */
/**
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
 */
function F(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function U(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */
/**
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
 */
class ${constructor(e,t){this._service=e,this._location=t instanceof C?t:C.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $(e,t)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U(this._location.path)}get storage(){return this._service}get parent(){const e=F(this._location.path);if(null===e)return null;const t=new C(this._location.bucket,e);return new $(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw w(e)}}function j(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:C.makeFromBucketSpec(n,e)}function q(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=i;s&&(e._overrideAuthToken="string"===typeof s?s:(0,r.Fy)(s,e.app.options.projectId))}class W{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?C.makeFromBucketSpec(i,this._host):j(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=j(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){S("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){S("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $(this,e)}_makeRequest(e,t,n,i,r=!0){if(this._deleted)return new E(b());{const s=L(e,this._appId,n,i,t,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const B="@firebase/storage",V="0.13.3",H="storage";function z(e=(0,i.Sx)(),t){e=(0,r.Ku)(e);const n=(0,i.j6)(e,H),s=n.getImmediate({identifier:t}),o=(0,r.yU)("storage");return o&&K(s,...o),s}function K(e,t,n,i={}){q(e,t,n,i)}
/**
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
 */function G(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new W(n,r,s,t,i.MF)}function Y(){(0,i.om)(new s.uA(H,G,"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(B,V,""),(0,i.KO)(B,V,"esm2017")}Y()}}]);
//# sourceMappingURL=chunk-vendors.adeb2012.js.map