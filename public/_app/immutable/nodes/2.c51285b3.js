import{S as Tc,i as Sc,s as Cc,k as L,a as Tt,q as lt,l as P,c as St,J as _c,h as b,m as W,r as ht,n as $,b as Ct,G as T,H as Gn,o as Ac,p as Ae,e as $i,K as er,L as De,M as ia,N as Fr,u as Ye}from"../chunks/index.ca5a2457.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const oa=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Dc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;u||(f=64,o||(d=64)),s.push(n[l],n[h],n[d],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(oa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Dc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new bc;const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const E=c<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(e){const t=oa(e);return aa.encodeByteArray(t,!0)},Qn=function(e){return Nc(e).replace(/\./g,"")},kc=function(e){try{return aa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xc=()=>Rc().__FIREBASE_DEFAULTS__,Mc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Oc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kc(e[1]);return t&&JSON.parse(t)},ua=()=>{try{return xc()||Mc()||Oc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Lc=e=>{var t,n;return(n=(t=ua())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Pc=e=>{const t=Lc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ca=()=>{var e;return(e=ua())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Vc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Qn(JSON.stringify(n)),Qn(JSON.stringify(o)),a].join(".")}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="FirebaseError";class Pe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=$c,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,la.prototype.create)}}class la{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?qc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pe(r,a,s)}}function qc(e,t){return e.replace(jc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const jc=/\{\$([^}]+)}/g;function nr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(qi(i)&&qi(o)){if(!nr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qi(e){return e!==null&&typeof e=="object"}/**
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
 */function sn(e){return e&&e._delegate?e._delegate:e}class rn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const se="[DEFAULT]";/**
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
 */class zc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Fc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hc(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=se){return this.instances.has(t)}getOptions(t=se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=se){return this.component?this.component.multipleInstances?t:se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kc(e){return e===se?void 0:e}function Hc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Gc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Qc={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Wc=F.INFO,Yc={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Xc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Yc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ha{constructor(t){this.name=t,this._logLevel=Wc,this._logHandler=Xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Jc=(e,t)=>t.some(n=>e instanceof n);let ji,zi;function Zc(){return ji||(ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tl(){return zi||(zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const da=new WeakMap,sr=new WeakMap,fa=new WeakMap,Fs=new WeakMap,Vr=new WeakMap;function el(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Gt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&da.set(n,e)}).catch(()=>{}),Vr.set(t,e),t}function nl(e){if(sr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});sr.set(e,t)}let rr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sl(e){rr=e(rr)}function rl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Vs(this),t,...n);return fa.set(s,t.sort?t.sort():[t]),Gt(s)}:tl().includes(e)?function(...t){return e.apply(Vs(this),t),Gt(da.get(this))}:function(...t){return Gt(e.apply(Vs(this),t))}}function il(e){return typeof e=="function"?rl(e):(e instanceof IDBTransaction&&nl(e),Jc(e,Zc())?new Proxy(e,rr):e)}function Gt(e){if(e instanceof IDBRequest)return el(e);if(Fs.has(e))return Fs.get(e);const t=il(e);return t!==e&&(Fs.set(e,t),Vr.set(t,e)),t}const Vs=e=>Vr.get(e);function ol(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Gt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Gt(o.result),u.oldVersion,u.newVersion,Gt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const al=["get","getKey","getAll","getAllKeys","count"],ul=["put","add","delete","clear"],Bs=new Map;function Ki(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=ul.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||al.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&u.done]))[0]};return Bs.set(t,i),i}sl(e=>({...e,get:(t,n,s)=>Ki(t,n)||e.get(t,n,s),has:(t,n)=>!!Ki(t,n)||e.has(t,n)}));/**
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
 */class cl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ll(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ll(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ir="@firebase/app",Hi="0.9.10";/**
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
 */const ce=new ha("@firebase/app"),hl="@firebase/app-compat",dl="@firebase/analytics-compat",fl="@firebase/analytics",pl="@firebase/app-check-compat",gl="@firebase/app-check",ml="@firebase/auth",yl="@firebase/auth-compat",vl="@firebase/database",wl="@firebase/database-compat",El="@firebase/functions",Il="@firebase/functions-compat",Tl="@firebase/installations",Sl="@firebase/installations-compat",Cl="@firebase/messaging",_l="@firebase/messaging-compat",Al="@firebase/performance",Dl="@firebase/performance-compat",bl="@firebase/remote-config",Nl="@firebase/remote-config-compat",kl="@firebase/storage",Rl="@firebase/storage-compat",xl="@firebase/firestore",Ml="@firebase/firestore-compat",Ol="firebase",Ll="9.22.0";/**
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
 */const or="[DEFAULT]",Pl={[ir]:"fire-core",[hl]:"fire-core-compat",[fl]:"fire-analytics",[dl]:"fire-analytics-compat",[gl]:"fire-app-check",[pl]:"fire-app-check-compat",[ml]:"fire-auth",[yl]:"fire-auth-compat",[vl]:"fire-rtdb",[wl]:"fire-rtdb-compat",[El]:"fire-fn",[Il]:"fire-fn-compat",[Tl]:"fire-iid",[Sl]:"fire-iid-compat",[Cl]:"fire-fcm",[_l]:"fire-fcm-compat",[Al]:"fire-perf",[Dl]:"fire-perf-compat",[bl]:"fire-rc",[Nl]:"fire-rc-compat",[kl]:"fire-gcs",[Rl]:"fire-gcs-compat",[xl]:"fire-fst",[Ml]:"fire-fst-compat","fire-js":"fire-js",[Ol]:"fire-js-all"};/**
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
 */const Wn=new Map,ar=new Map;function Fl(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yn(e){const t=e.name;if(ar.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;ar.set(t,e);for(const n of Wn.values())Fl(n,e);return!0}function Vl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Bl={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new la("app","Firebase",Bl);/**
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
 */class Ul{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const $l=Ll;function pa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:or,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});if(n||(n=ca()),!n)throw Qt.create("no-options");const i=Wn.get(r);if(i){if(nr(n,i.options)&&nr(s,i.config))return i;throw Qt.create("duplicate-app",{appName:r})}const o=new Gc(r);for(const u of ar.values())o.addComponent(u);const a=new Ul(n,s,o);return Wn.set(r,a),a}function ql(e=or){const t=Wn.get(e);if(!t&&e===or&&ca())return pa();if(!t)throw Qt.create("no-app",{appName:e});return t}function Xe(e,t,n){var s;let r=(s=Pl[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ce.warn(a.join(" "));return}Yn(new rn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const jl="firebase-heartbeat-database",zl=1,on="firebase-heartbeat-store";let Us=null;function ga(){return Us||(Us=ol(jl,zl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(on)}}}).catch(e=>{throw Qt.create("idb-open",{originalErrorMessage:e.message})})),Us}async function Kl(e){try{return await(await ga()).transaction(on).objectStore(on).get(ma(e))}catch(t){if(t instanceof Pe)ce.warn(t.message);else{const n=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ce.warn(n.message)}}}async function Gi(e,t){try{const s=(await ga()).transaction(on,"readwrite");await s.objectStore(on).put(t,ma(e)),await s.done}catch(n){if(n instanceof Pe)ce.warn(n.message);else{const s=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ce.warn(s.message)}}}function ma(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Hl=1024,Gl=30*24*60*60*1e3;class Ql{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Gl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qi(),{heartbeatsToSend:n,unsentEntries:s}=Wl(this._heartbeatsCache.heartbeats),r=Qn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qi(){return new Date().toISOString().substring(0,10)}function Wl(e,t=Hl){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Wi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Wi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Wi(e){return Qn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Xl(e){Yn(new rn("platform-logger",t=>new cl(t),"PRIVATE")),Yn(new rn("heartbeat",t=>new Ql(t),"PRIVATE")),Xe(ir,Hi,e),Xe(ir,Hi,"esm2017"),Xe("fire-js","")}Xl("");var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Br=Br||{},S=Jl||self;function Xn(){}function hs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function mn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Zl(e){return Object.prototype.hasOwnProperty.call(e,$s)&&e[$s]||(e[$s]=++th)}var $s="closure_uid_"+(1e9*Math.random()>>>0),th=0;function eh(e,t,n){return e.call.apply(e.bind,arguments)}function nh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function vt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=eh:vt=nh,vt.apply(null,arguments)}function On(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function it(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Jt(){this.s=this.s,this.o=this.o}var sh=0;Jt.prototype.s=!1;Jt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),sh!=0)&&Zl(this)};Jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ya=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ur(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Yi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(hs(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function wt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var rh=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",Xn,t),S.removeEventListener("test",Xn,t)}catch{}return e}();function Jn(e){return/^[\s\xa0]*$/.test(e)}var Xi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function qs(e,t){return e<t?-1:e>t?1:0}function ds(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function Mt(e){return ds().indexOf(e)!=-1}function $r(e){return $r[" "](e),e}$r[" "]=Xn;function va(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var ih=Mt("Opera"),be=Mt("Trident")||Mt("MSIE"),wa=Mt("Edge"),ur=wa||be,Ea=Mt("Gecko")&&!(ds().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge"))&&!(Mt("Trident")||Mt("MSIE"))&&!Mt("Edge"),oh=ds().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge");function Ia(){var e=S.document;return e?e.documentMode:void 0}var Zn;t:{var js="",zs=function(){var e=ds();if(Ea)return/rv:([^\);]+)(\)|;)/.exec(e);if(wa)return/Edge\/([\d\.]+)/.exec(e);if(be)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(oh)return/WebKit\/(\S+)/.exec(e);if(ih)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zs&&(js=zs?zs[1]:""),be){var Ks=Ia();if(Ks!=null&&Ks>parseFloat(js)){Zn=String(Ks);break t}}Zn=js}var ah={};function uh(){return va(ah,9,function(){let e=0;const t=Xi(String(Zn)).split("."),n=Xi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=qs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||qs(r[2].length==0,i[2].length==0)||qs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var cr;if(S.document&&be){var Ji=Ia();cr=Ji||parseInt(Zn,10)||void 0}else cr=void 0;var ch=cr;function an(e,t){if(wt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ea){t:{try{$r(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:lh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&an.$.h.call(this)}}it(an,wt);var lh={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),hh=0;function dh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++hh,this.fa=this.ia=!1}function fs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function qr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ta(e){const t={};for(const n in e)t[n]=e[n];return t}const Zi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Zi.length;i++)n=Zi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ps(e){this.src=e,this.g={},this.h=0}ps.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=hr(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new dh(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function lr(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ya(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(fs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function hr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var jr="closure_lm_"+(1e6*Math.random()|0),Hs={};function Ca(e,t,n,s,r){if(s&&s.once)return Aa(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ca(e,t[i],n,s,r);return null}return n=Hr(n),e&&e[yn]?e.O(t,n,mn(s)?!!s.capture:!!s,r):_a(e,t,n,!1,s,r)}function _a(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=mn(r)?!!r.capture:!!r,a=Kr(e);if(a||(e[jr]=a=new ps(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=fh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)rh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ba(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fh(){function e(n){return t.call(e.src,e.listener,n)}const t=ph;return e}function Aa(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Aa(e,t[i],n,s,r);return null}return n=Hr(n),e&&e[yn]?e.P(t,n,mn(s)?!!s.capture:!!s,r):_a(e,t,n,!0,s,r)}function Da(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Da(e,t[i],n,s,r);else s=mn(s)?!!s.capture:!!s,n=Hr(n),e&&e[yn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=hr(i,n,s,r),-1<n&&(fs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Kr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hr(t,n,s,r)),(n=-1<e?t[e]:null)&&zr(n))}function zr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yn])lr(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ba(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Kr(t))?(lr(n,e),n.h==0&&(n.src=null,t[jr]=null)):fs(e)}}}function ba(e){return e in Hs?Hs[e]:Hs[e]="on"+e}function ph(e,t){if(e.fa)e=!0;else{t=new an(t,this);var n=e.listener,s=e.la||e.src;e.ia&&zr(e),e=n.call(s,t)}return e}function Kr(e){return e=e[jr],e instanceof ps?e:null}var Gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(e){return typeof e=="function"?e:(e[Gs]||(e[Gs]=function(t){return e.handleEvent(t)}),e[Gs])}function rt(){Jt.call(this),this.i=new ps(this),this.S=this,this.J=null}it(rt,Jt);rt.prototype[yn]=!0;rt.prototype.removeEventListener=function(e,t,n,s){Da(this,e,t,n,s)};function pt(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new wt(t,e);else if(t instanceof wt)t.target=t.target||e;else{var r=t;t=new wt(s,e),Sa(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ln(o,s,!0,t)&&r}if(o=t.g=e,r=Ln(o,s,!0,t)&&r,r=Ln(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Ln(o,s,!1,t)&&r}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)fs(n[s]);delete e.g[t],e.h--}}this.J=null};rt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};rt.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ln(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&lr(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var Gr=S.JSON.stringify;function gh(){var e=Ra;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mh{constructor(){this.h=this.g=null}add(t,n){const s=Na.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Na=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new yh,e=>e.reset());class yh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vh(e){S.setTimeout(()=>{throw e},0)}function ka(e,t){dr||wh(),fr||(dr(),fr=!0),Ra.add(e,t)}var dr;function wh(){var e=S.Promise.resolve(void 0);dr=function(){e.then(Eh)}}var fr=!1,Ra=new mh;function Eh(){for(var e;e=gh();){try{e.h.call(e.g)}catch(n){vh(n)}var t=Na;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fr=!1}function gs(e,t){rt.call(this),this.h=e||1,this.g=t||S,this.j=vt(this.qb,this),this.l=Date.now()}it(gs,rt);m=gs.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(Qr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){gs.$.N.call(this),Qr(this),delete this.g};function Wr(e,t,n){if(typeof e=="function")n&&(e=vt(e,n));else if(e&&typeof e.handleEvent=="function")e=vt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function xa(e){e.g=Wr(()=>{e.g=null,e.i&&(e.i=!1,xa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ih extends Jt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:xa(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(e){Jt.call(this),this.h=e,this.g={}}it(un,Jt);var to=[];function Ma(e,t,n,s){Array.isArray(n)||(n&&(to[0]=n.toString()),n=to);for(var r=0;r<n.length;r++){var i=Ca(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Oa(e){qr(e.g,function(t,n){this.g.hasOwnProperty(n)&&zr(t)},e),e.g={}}un.prototype.N=function(){un.$.N.call(this),Oa(this)};un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ms(){this.g=!0}ms.prototype.Ea=function(){this.g=!1};function Th(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Sh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ve(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+_h(e,n)+(s?" "+s:"")})}function Ch(e,t){e.info(function(){return"TIMEOUT: "+t})}ms.prototype.info=function(){};function _h(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gr(n)}catch{return t}}var fe={},eo=null;function ys(){return eo=eo||new rt}fe.Ta="serverreachability";function La(e){wt.call(this,fe.Ta,e)}it(La,wt);function cn(e){const t=ys();pt(t,new La(t))}fe.STAT_EVENT="statevent";function Pa(e,t){wt.call(this,fe.STAT_EVENT,e),this.stat=t}it(Pa,wt);function At(e){const t=ys();pt(t,new Pa(t,e))}fe.Ua="timingevent";function Fa(e,t){wt.call(this,fe.Ua,e),this.size=t}it(Fa,wt);function vn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var vs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Va={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yr(){}Yr.prototype.h=null;function no(e){return e.h||(e.h=e.i())}function Ba(){}var wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xr(){wt.call(this,"d")}it(Xr,wt);function Jr(){wt.call(this,"c")}it(Jr,wt);var pr;function ws(){}it(ws,Yr);ws.prototype.g=function(){return new XMLHttpRequest};ws.prototype.i=function(){return{}};pr=new ws;function En(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new un(this),this.P=Ah,e=ur?125:void 0,this.V=new gs(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var Ah=45e3,gr={},ts={};m=En.prototype;m.setTimeout=function(e){this.P=e};function mr(e,t,n){e.L=1,e.v=Is(qt(t)),e.s=n,e.S=!0,$a(e,null)}function $a(e,t){e.G=Date.now(),In(e),e.A=qt(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Wa(n.i,"t",s),e.C=0,n=e.l.I,e.h=new Ua,e.g=mu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ih(vt(e.Pa,e,e.g),e.O)),Ma(e.U,e.g,"readystatechange",e.nb),t=e.I?Ta(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),cn(),Th(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&Ut(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const l=Ut(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ur||this.g&&(this.h.h||this.g.ja()||oo(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?cn(3):cn(2)),Es(this);var n=this.g.da();this.aa=n;e:if(qa(this)){var s=oo(this.g);e="";var r=s.length,i=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Je(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Sh(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jn(a)){var c=a;break e}}c=null}if(n=c)ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,n);else{this.i=!1,this.o=3,At(12),re(this),Je(this);break t}}this.S?(ja(this,l,o),ur&&this.i&&l==3&&(Ma(this.U,this.V,"tick",this.mb),this.V.start())):(ve(this.j,this.m,o,null),yr(this,o)),l==4&&re(this),this.i&&!this.J&&(l==4?du(this.l,this):(this.i=!1,In(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),re(this),Je(this)}}}catch{}finally{}};function qa(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ja(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Dh(e,n),r==ts){t==4&&(e.o=4,At(14),s=!1),ve(e.j,e.m,null,"[Incomplete Response]");break}else if(r==gr){e.o=4,At(15),ve(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ve(e.j,e.m,r,null),yr(e,r);qa(e)&&r!=ts&&r!=gr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,At(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ii(t),t.L=!0,At(11))):(ve(e.j,e.m,n,"[Invalid Chunked Response]"),re(e),Je(e))}m.mb=function(){if(this.g){var e=Ut(this.g),t=this.g.ja();this.C<t.length&&(Es(this),ja(this,e,t),this.i&&e!=4&&In(this))}};function Dh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ts:(n=Number(t.substring(n,s)),isNaN(n)?gr:(s+=1,s+n>t.length?ts:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.J=!0,re(this)};function In(e){e.Y=Date.now()+e.P,za(e,e.P)}function za(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=vn(vt(e.lb,e),t)}function Es(e){e.B&&(S.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ch(this.j,this.A),this.L!=2&&(cn(),At(17)),re(this),this.o=2,Je(this)):za(this,this.Y-e)};function Je(e){e.l.H==0||e.J||du(e.l,e)}function re(e){Es(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Qr(e.V),Oa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function yr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||vr(n.h,e))){if(!e.K&&vr(n.h,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ss(n),Cs(n);else break t;ri(n),At(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=vn(vt(n.ib,n),6e3));if(1>=Ja(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ie(n,11)}else if((e.K||n.g==e)&&ss(n),!Jn(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const l=c[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.h;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zr(i,i.h),i.h=null))}if(s.F){const A=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.Da=A,z(s.G,s.F,A))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=gu(s,s.I?s.oa:null,s.Y),o.K){Za(s.h,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Es(a),In(a)),s.g=o}else lu(s);0<n.i.length&&_s(n)}else c[0]!="stop"&&c[0]!="close"||ie(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ie(n,7):si(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}cn(4)}catch{}}function bh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(hs(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Nh(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(hs(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ka(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hs(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Nh(e),s=bh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ae(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ae){this.h=t!==void 0?t:e.h,es(this,e.j),this.s=e.s,this.g=e.g,ns(this,e.m),this.l=e.l,t=e.i;var n=new ln;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),so(this,n),this.o=e.o}else e&&(n=String(e).match(Ha))?(this.h=!!t,es(this,n[1]||"",!0),this.s=Ke(n[2]||""),this.g=Ke(n[3]||"",!0),ns(this,n[4]),this.l=Ke(n[5]||"",!0),so(this,n[6]||"",!0),this.o=Ke(n[7]||"")):(this.h=!!t,this.i=new ln(null,this.h))}ae.prototype.toString=function(){var e=[],t=this.j;t&&e.push(He(t,ro,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(He(t,ro,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(He(n,n.charAt(0)=="/"?Mh:xh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",He(n,Lh)),e.join("")};function qt(e){return new ae(e)}function es(e,t,n){e.j=n?Ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ns(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function so(e,t,n){t instanceof ln?(e.i=t,Ph(e.i,e.h)):(n||(t=He(t,Oh)),e.i=new ln(t,e.h))}function z(e,t,n){e.i.set(t,n)}function Is(e){return z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function He(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Rh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ro=/[#\/\?@]/g,xh=/[#\?:]/g,Mh=/[#\?]/g,Oh=/[#\?@]/g,Lh=/#/g;function ln(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&kh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ln.prototype;m.add=function(e,t){Zt(this),this.i=null,e=Fe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ga(e,t){Zt(e),t=Fe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qa(e,t){return Zt(e),t=Fe(e,t),e.g.has(t)}m.forEach=function(e,t){Zt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};m.sa=function(){Zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};m.Z=function(e){Zt(this);let t=[];if(typeof e=="string")Qa(this,e)&&(t=t.concat(this.g.get(Fe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Zt(this),this.i=null,e=Fe(this,e),Qa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wa(e,t,n){Ga(e,t),0<n.length&&(e.i=null,e.g.set(Fe(e,t),Ur(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Fe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ph(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ga(this,s),Wa(this,r,n))},e)),e.j=t}var Fh=class{constructor(e,t){this.h=e,this.g=t}};function Ya(e){this.l=e||Vh,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vh=10;function Xa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ja(e){return e.h?1:e.g?e.g.size:0}function vr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Zr(e,t){e.g?e.g.add(t):e.h=t}function Za(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ya.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function tu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ur(e.i)}function ti(){}ti.prototype.stringify=function(e){return S.JSON.stringify(e,void 0)};ti.prototype.parse=function(e){return S.JSON.parse(e,void 0)};function Bh(){this.g=new ti}function Uh(e,t,n){const s=n||"";try{Ka(e,function(r,i){let o=r;mn(r)&&(o=Gr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function $h(e,t){const n=new ms;if(S.Image){const s=new Image;s.onload=On(Pn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=On(Pn,n,s,"TestLoadImage: error",!1,t),s.onabort=On(Pn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=On(Pn,n,s,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Pn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Tn(e){this.l=e.fc||null,this.j=e.ob||!1}it(Tn,Yr);Tn.prototype.g=function(){return new Ts(this.l,this.j)};Tn.prototype.i=function(e){return function(){return e}}({});function Ts(e,t){rt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Ts,rt);var ei=0;m=Ts.prototype;m.open=function(e,t){if(this.readyState!=ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||S).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=ei};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function eu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sn(this):hn(this),this.readyState==3&&eu(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,Sn(this))};m.Ya=function(e){this.g&&(this.response=e,Sn(this))};m.ka=function(){this.g&&Sn(this)};function Sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var qh=S.JSON.parse;function Q(e){rt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nu,this.L=this.M=!1}it(Q,rt);var nu="",jh=/^https?$/i,zh=["POST","PUT"];m=Q.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pr.g(),this.C=this.u?no(this.u):no(pr),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){io(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=S.FormData&&e instanceof S.FormData,!(0<=ya(zh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iu(this),0<this.B&&((this.L=Kh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Wr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){io(this,i)}};function Kh(e){return be&&uh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof Br<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function io(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,su(e),Ss(e)}function su(e){e.F||(e.F=!0,pt(e,"complete"),pt(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,pt(this,"complete"),pt(this,"abort"),Ss(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ss(this,!0)),Q.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?ru(this):this.kb())};m.kb=function(){ru(this)};function ru(e){if(e.h&&typeof Br<"u"&&(!e.C[1]||Ut(e)!=4||e.da()!=2)){if(e.v&&Ut(e)==4)Wr(e.La,0,e);else if(pt(e,"readystatechange"),Ut(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.I).match(Ha)[1]||null;if(!r&&S.self&&S.self.location){var i=S.self.location.protocol;r=i.substr(0,i.length-1)}s=!jh.test(r?r.toLowerCase():"")}n=s}if(n)pt(e,"complete"),pt(e,"success");else{e.m=6;try{var o=2<Ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",su(e)}}finally{Ss(e)}}}}function Ss(e,t){if(e.g){iu(e);const n=e.g,s=e.C[0]?Xn:null;e.g=null,e.C=null,t||pt(e,"ready");try{n.onreadystatechange=s}catch{}}}function iu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}function Ut(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),qh(t)}};function oo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case nu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ou(e){let t="";return qr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ni(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ou(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):z(e,t,n))}function je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function au(e){this.Ga=0,this.i=[],this.j=new ms,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=je("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=je("baseRetryDelayMs",5e3,e),this.hb=je("retryDelaySeedMs",1e4,e),this.eb=je("forwardChannelMaxRetries",2,e),this.xa=je("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Ya(e&&e.concurrentRequestLimit),this.Ja=new Bh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}m=au.prototype;m.qa=8;m.H=1;function si(e){if(uu(e),e.H==3){var t=e.W++,n=qt(e.G);z(n,"SID",e.J),z(n,"RID",t),z(n,"TYPE","terminate"),Cn(e,n),t=new En(e,e.j,t,void 0),t.L=2,t.v=Is(qt(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(t.v.toString(),"")),!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=mu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),In(t)}pu(e)}function Cs(e){e.g&&(ii(e),e.g.cancel(),e.g=null)}function uu(e){Cs(e),e.u&&(S.clearTimeout(e.u),e.u=null),ss(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function _s(e){Xa(e.h)||e.m||(e.m=!0,ka(e.Na,e),e.C=0)}function Hh(e,t){return Ja(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=vn(vt(e.Na,e,t),fu(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new En(this,this.j,e,void 0);let i=this.s;if(this.U&&(i?(i=Ta(i),Sa(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=cu(this,r,t),n=qt(this.G),z(n,"RID",e),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),Cn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ou(i)))+"&"+t:this.o&&ni(n,this.o,i)),Zr(this.h,r),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",t),z(n,"SID","null"),r.ba=!0,mr(r,n,null)):mr(r,n,t),this.H=2}}else this.H==3&&(e?ao(this,e):this.i.length==0||Xa(this.h)||ao(this))};function ao(e,t){var n;t?n=t.m:n=e.W++;const s=qt(e.G);z(s,"SID",e.J),z(s,"RID",n),z(s,"AID",e.V),Cn(e,s),e.o&&e.s&&ni(s,e.o,e.s),n=new En(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=cu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Zr(e.h,n),mr(n,s,t)}function Cn(e,t){e.ma&&qr(e.ma,function(n,s){z(t,s,n)}),e.l&&Ka({},function(n,s){z(t,s,n)})}function cu(e,t,n){n=Math.min(e.i.length,n);var s=e.l?vt(e.l.Va,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].h;const l=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{Uh(l,o,"req"+c+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,s}function lu(e){e.g||e.u||(e.ba=1,ka(e.Ma,e),e.A=0)}function ri(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=vn(vt(e.Ma,e),fu(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,hu(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=vn(vt(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,At(10),Cs(this),hu(this))};function ii(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function hu(e){e.g=new En(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=qt(e.wa);z(t,"RID","rpc"),z(t,"SID",e.J),z(t,"CI",e.M?"0":"1"),z(t,"AID",e.V),z(t,"TYPE","xmlhttp"),Cn(e,t),e.o&&e.s&&ni(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Is(qt(t)),n.s=null,n.S=!0,$a(n,e)}m.ib=function(){this.v!=null&&(this.v=null,Cs(this),ri(this),At(19))};function ss(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function du(e,t){var n=null;if(e.g==t){ss(e),ii(e),e.g=null;var s=2}else if(vr(e.h,t))n=t.F,Za(e.h,t),s=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=ys(),pt(s,new Fa(s,n)),_s(e)}else lu(e);else if(r=t.o,r==3||r==0&&0<e.ta||!(s==1&&Hh(e,t)||s==2&&ri(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:ie(e,5);break;case 4:ie(e,10);break;case 3:ie(e,6);break;default:ie(e,2)}}}function fu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function ie(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=vt(e.pb,e);n||(n=new ae("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||es(n,"https"),Is(n)),$h(n.toString(),s)}else At(2);e.H=0,e.l&&e.l.za(t),pu(e),uu(e)}m.pb=function(e){e?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function pu(e){if(e.H=0,e.pa=[],e.l){const t=tu(e.h);(t.length!=0||e.i.length!=0)&&(Yi(e.pa,t),Yi(e.pa,e.i),e.h.i.length=0,Ur(e.i),e.i.length=0),e.l.ya()}}function gu(e,t,n){var s=n instanceof ae?qt(n):new ae(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),ns(s,s.m);else{var r=S.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new ae(null,void 0);s&&es(i,s),t&&(i.g=t),r&&ns(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&z(s,n,t),z(s,"VER",e.qa),Cn(e,s),s}function mu(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Q(new Tn({ob:!0})):new Q(e.va),t.Oa(e.I),t}function yu(){}m=yu.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.Va=function(){};function rs(){if(be&&!(10<=Number(ch)))throw Error("Environmental error: no available transport.")}rs.prototype.g=function(e,t){return new bt(e,t)};function bt(e,t){rt.call(this),this.g=new au(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Jn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Jn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ve(this)}it(bt,rt);bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;At(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=gu(e,null,e.Y),_s(e)};bt.prototype.close=function(){si(this.g)};bt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Gr(e),e=n);t.i.push(new Fh(t.fb++,e)),t.H==3&&_s(t)};bt.prototype.N=function(){this.g.l=null,delete this.j,si(this.g),delete this.g,bt.$.N.call(this)};function vu(e){Xr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}it(vu,Xr);function wu(){Jr.call(this),this.status=1}it(wu,Jr);function Ve(e){this.g=e}it(Ve,yu);Ve.prototype.Ba=function(){pt(this.g,"a")};Ve.prototype.Aa=function(e){pt(this.g,new vu(e))};Ve.prototype.za=function(e){pt(this.g,new wu)};Ve.prototype.ya=function(){pt(this.g,"b")};function Gh(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Rt,Gh);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qs(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}Rt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)Qs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){Qs(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){Qs(this,s),r=0;break}}this.h=r,this.i+=t};Rt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function U(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var Qh={};function oi(e){return-128<=e&&128>e?va(Qh,e,function(t){return new U([t|0],0>t?-1:0)}):new U([e|0],0>e?-1:0)}function Lt(e){if(isNaN(e)||!isFinite(e))return we;if(0>e)return ft(Lt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=wr;return new U(t,0)}function Eu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ft(Eu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Lt(Math.pow(t,8)),s=we,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=Lt(Math.pow(t,i)),s=s.R(i).add(Lt(o))):(s=s.R(n),s=s.add(Lt(o)))}return s}var wr=4294967296,we=oi(0),Er=oi(1),uo=oi(16777216);m=U.prototype;m.ea=function(){if(Nt(this))return-ft(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:wr+s)*t,t*=wr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if($t(this))return"0";if(Nt(this))return"-"+ft(this).toString(e);for(var t=Lt(Math.pow(e,6)),n=this,s="";;){var r=os(n,t).g;n=is(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,$t(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function $t(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Nt(e){return e.h==-1}m.X=function(e){return e=is(this,e),Nt(e)?-1:$t(e)?0:1};function ft(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new U(n,~e.h).add(Er)}m.abs=function(){return Nt(this)?ft(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new U(n,n[n.length-1]&-2147483648?-1:0)};function is(e,t){return e.add(ft(t))}m.R=function(e){if($t(this)||$t(e))return we;if(Nt(this))return Nt(e)?ft(this).R(ft(e)):ft(ft(this).R(e));if(Nt(e))return ft(this.R(ft(e)));if(0>this.X(uo)&&0>e.X(uo))return Lt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,u=e.D(r)&65535;n[2*s+2*r]+=o*u,Fn(n,2*s+2*r),n[2*s+2*r+1]+=i*u,Fn(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Fn(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Fn(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new U(n,0)};function Fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ze(e,t){this.g=e,this.h=t}function os(e,t){if($t(t))throw Error("division by zero");if($t(e))return new ze(we,we);if(Nt(e))return t=os(ft(e),t),new ze(ft(t.g),ft(t.h));if(Nt(t))return t=os(e,ft(t)),new ze(ft(t.g),t.h);if(30<e.g.length){if(Nt(e)||Nt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Er,s=t;0>=s.X(e);)n=co(n),s=co(s);var r=ge(n,1),i=ge(s,1);for(s=ge(s,2),n=ge(n,2);!$t(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=ge(s,1),n=ge(n,1)}return t=is(e,r.R(t)),new ze(r,t)}for(r=we;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Lt(n),o=i.R(t);Nt(o)||0<o.X(e);)n-=s,i=Lt(n),o=i.R(t);$t(i)&&(i=Er),r=r.add(i),e=is(e,o)}return new ze(r,e)}m.gb=function(e){return os(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new U(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new U(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new U(n,this.h^e.h)};function co(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new U(n,e.h)}function ge(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new U(r,e.h)}rs.prototype.createWebChannel=rs.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;vs.NO_ERROR=0;vs.TIMEOUT=8;vs.HTTP_ERROR=6;Va.COMPLETE="complete";Ba.EventType=wn;wn.OPEN="a";wn.CLOSE="b";wn.ERROR="c";wn.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Q.prototype.listenOnce=Q.prototype.P;Q.prototype.getLastError=Q.prototype.Sa;Q.prototype.getLastErrorCode=Q.prototype.Ia;Q.prototype.getStatus=Q.prototype.da;Q.prototype.getResponseJson=Q.prototype.Wa;Q.prototype.getResponseText=Q.prototype.ja;Q.prototype.send=Q.prototype.ha;Q.prototype.setWithCredentials=Q.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Lt;U.fromString=Eu;var Wh=function(){return new rs},Yh=function(){return ys()},Ws=vs,Xh=Va,Jh=fe,lo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zh=Tn,Vn=Ba,td=Q,ed=Rt,Ee=U;const ho="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new ha("@firebase/firestore");function fo(){return le.logLevel}function w(e,...t){if(le.logLevel<=F.DEBUG){const n=t.map(ai);le.debug(`Firestore (${Be}): ${e}`,...n)}}function jt(e,...t){if(le.logLevel<=F.ERROR){const n=t.map(ai);le.error(`Firestore (${Be}): ${e}`,...n)}}function Ne(e,...t){if(le.logLevel<=F.WARN){const n=t.map(ai);le.warn(`Firestore (${Be}): ${e}`,...n)}}function ai(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e="Unexpected state"){const t=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: `+e;throw jt(t),new Error(t)}function et(e,t){e||_()}function x(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Pe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class sd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Ie;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ie,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ie)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string"),new Iu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new mt(t)}}class id{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class od{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new id(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ad{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ud{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(et(typeof n.token=="string"),this.T=n.token,new ad(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=cd(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function V(e,t){return e<t?-1:e>t?1:0}function ke(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new st(0,0))}static max(){return new C(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,n,s){n===void 0?n=0:n>t.length&&_(),s===void 0?s=t.length-n:s>t.length-n&&_(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return dn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof dn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class G extends dn{construct(t,n,s){return new G(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new G(n)}static emptyPath(){return new G([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends dn{construct(t,n,s){return new _t(t,n,s)}static isValidIdentifier(t){return hd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new v(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(G.fromString(t))}static fromName(t){return new I(G.fromString(t).popFirst(5))}static empty(){return new I(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return G.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new G(t.slice()))}}function dd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new Wt(r,I.empty(),t)}function fd(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Wt(C.min(),I.empty(),-1)}static max(){return new Wt(C.max(),I.empty(),-1)}}function pd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
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
 */const gd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==gd)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new p((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new p((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function _n(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}ci.ct=-1;function As(e){return e==null}function as(e){return e===0&&1/e==-1/0}function yd(e){return typeof e=="number"&&Number.isInteger(e)&&!as(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function An(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){this.comparator=t,this.root=n||dt.EMPTY}insert(t,n){return new Y(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??dt.RED,this.left=r??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new dt(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return dt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const t=this.left.check();if(t!==this.right.check())throw _();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,s,r){return this}insert(e,t,n){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new go(this.data.getIterator())}getIteratorFrom(t){return new go(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Et(this.comparator);return n.data=t,n}}class go{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Kt([])}unionWith(t){let n=new Et(_t.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Kt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Su("Invalid base64 string: "+r):r}}(t);return new It(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new It(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}It.EMPTY_BYTE_STRING=new It("");const vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(e){if(et(!!e),typeof e=="string"){let t=0;const n=vd.exec(e);if(et(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function he(e){return typeof e=="string"?It.fromBase64String(e):It.fromUint8Array(e)}/**
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
 */function li(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hi(e){const t=e.mapValue.fields.__previous_value__;return li(t)?hi(t):t}function fn(e){const t=Yt(e.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n,s,r,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class pn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Un={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?li(e)?4:Ed(e)?9007199254740991:10:_()}function Pt(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return fn(e).isEqual(fn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Yt(s.timestampValue),o=Yt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return he(s.bytesValue).isEqual(he(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Z(s.geoPointValue.latitude)===Z(r.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Z(s.integerValue)===Z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Z(s.doubleValue),o=Z(r.doubleValue);return i===o?as(i)===as(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ke(e.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(po(i)!==po(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(e,t);default:return _()}}function gn(e,t){return(e.values||[]).find(n=>Pt(n,t))!==void 0}function Re(e,t){if(e===t)return 0;const n=de(e),s=de(t);if(n!==s)return V(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Z(r.integerValue||r.doubleValue),a=Z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return mo(e.timestampValue,t.timestampValue);case 4:return mo(fn(e),fn(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(r,i){const o=he(r),a=he(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=V(o[u],a[u]);if(c!==0)return c}return V(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=V(Z(r.latitude),Z(i.latitude));return o!==0?o:V(Z(r.longitude),Z(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Re(o[u],a[u]);if(c)return c}return V(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Un.mapValue&&i===Un.mapValue)return 0;if(r===Un.mapValue)return 1;if(i===Un.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=V(a[l],c[l]);if(h!==0)return h;const d=Re(o[a[l]],u[c[l]]);if(d!==0)return d}return V(a.length,c.length)}(e.mapValue,t.mapValue);default:throw _()}}function mo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=Yt(e),s=Yt(t),r=V(n.seconds,s.seconds);return r!==0?r:V(n.nanos,s.nanos)}function xe(e){return Ir(e)}function Ir(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Yt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?he(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,I.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ir(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ir(s.fields[a])}`;return i+"}"}(e.mapValue):_();var t,n}function yo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Tr(e){return!!e&&"integerValue"in e}function di(e){return!!e&&"arrayValue"in e}function vo(e){return!!e&&"nullValue"in e}function wo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ys(e){return!!e&&"mapValue"in e}function Ze(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return An(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ze(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ze(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ed(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ys(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(n)}setAll(t){let n=_t.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ze(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Ys(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Ys(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){An(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Ot(Ze(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new yt(t,0,C.min(),C.min(),C.min(),Ot.empty(),0)}static newFoundDocument(t,n,s,r){return new yt(t,1,n,C.min(),s,r,0)}static newNoDocument(t,n){return new yt(t,2,n,C.min(),C.min(),Ot.empty(),0)}static newUnknownDocument(t,n){return new yt(t,3,n,C.min(),C.min(),Ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class us{constructor(t,n){this.position=t,this.inclusive=n}}function Eo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),n.key):s=Re(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Io(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Id(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Cu{}class tt extends Cu{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Sd(t,n,s):n==="array-contains"?new Ad(t,s):n==="in"?new Dd(t,s):n==="not-in"?new bd(t,s):n==="array-contains-any"?new Nd(t,s):new tt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Cd(t,s):new _d(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Re(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(Re(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xt extends Cu{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new xt(t,n)}matches(t){return _u(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function _u(e){return e.op==="and"}function Au(e){return Td(e)&&_u(e)}function Td(e){for(const t of e.filters)if(t instanceof xt)return!1;return!0}function Sr(e){if(e instanceof tt)return e.field.canonicalString()+e.op.toString()+xe(e.value);if(Au(e))return e.filters.map(t=>Sr(t)).join(",");{const t=e.filters.map(n=>Sr(n)).join(",");return`${e.op}(${t})`}}function Du(e,t){return e instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.field.isEqual(s.field)&&Pt(n.value,s.value)}(e,t):e instanceof xt?function(n,s){return s instanceof xt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Du(i,s.filters[o]),!0):!1}(e,t):void _()}function bu(e){return e instanceof tt?function(t){return`${t.field.canonicalString()} ${t.op} ${xe(t.value)}`}(e):e instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(bu).join(" ,")+"}"}(e):"Filter"}class Sd extends tt{constructor(t,n,s){super(t,n,s),this.key=I.fromName(s.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Cd extends tt{constructor(t,n){super(t,"in",n),this.keys=Nu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class _d extends tt{constructor(t,n){super(t,"not-in",n),this.keys=Nu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Nu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>I.fromName(s.referenceValue))}class Ad extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return di(n)&&gn(n.arrayValue,this.value)}}class Dd extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class bd extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class Nd extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!di(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gn(this.value.arrayValue,s))}}/**
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
 */class kd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function To(e,t=null,n=[],s=[],r=null,i=null,o=null){return new kd(e,t,n,s,r,i,o)}function fi(e){const t=x(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Sr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),As(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xe(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xe(s)).join(",")),t.dt=n}return t.dt}function pi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Id(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Du(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Io(e.startAt,t.startAt)&&Io(e.endAt,t.endAt)}function Cr(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Rd(e,t,n,s,r,i,o,a){return new Dn(e,t,n,s,r,i,o,a)}function gi(e){return new Dn(e)}function So(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ku(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function mi(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ru(e){return e.collectionGroup!==null}function Te(e){const t=x(e);if(t.wt===null){t.wt=[];const n=mi(t),s=ku(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new tn(n)),t.wt.push(new tn(_t.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new tn(_t.keyField(),i))}}}return t.wt}function zt(e){const t=x(e);if(!t._t)if(t.limitType==="F")t._t=To(t.path,t.collectionGroup,Te(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Te(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new tn(i.field,o))}const s=t.endAt?new us(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new us(t.startAt.position,t.startAt.inclusive):null;t._t=To(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function _r(e,t){t.getFirstInequalityField(),mi(e);const n=e.filters.concat([t]);return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ar(e,t,n){return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ds(e,t){return pi(zt(e),zt(t))&&e.limitType===t.limitType}function xu(e){return`${fi(zt(e))}|lt:${e.limitType}`}function Dr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>bu(s)).join(", ")}]`),As(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xe(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xe(s)).join(",")),`Target(${n})`}(zt(e))}; limitType=${e.limitType})`}function bs(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Te(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Eo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Te(n),s)||n.endAt&&!function(r,i,o){const a=Eo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Te(n),s))}(e,t)}function xd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mu(e){return(t,n)=>{let s=!1;for(const r of Te(e)){const i=Md(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Md(e,t,n){const s=e.field.isKeyField()?I.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Re(a,u):_()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){An(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Tu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Y(I.comparator);function Xt(){return Od}const Ou=new Y(I.comparator);function Ge(...e){let t=Ou;for(const n of e)t=t.insert(n.key,n);return t}function Ld(e){let t=Ou;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function oe(){return en()}function Lu(){return en()}function en(){return new Ue(e=>e.toString(),(e,t)=>e.isEqual(t))}const Pd=new Et(I.comparator);function R(...e){let t=Pd;for(const n of e)t=t.add(n);return t}const Fd=new Et(V);function Vd(){return Fd}/**
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
 */function Pu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:as(t)?"-0":t}}function Fu(e){return{integerValue:""+e}}function Bd(e,t){return yd(t)?Fu(t):Pu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this._=void 0}}function Ud(e,t,n){return e instanceof br?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&li(r)&&(r=hi(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof cs?Vu(e,t):e instanceof ls?Bu(e,t):function(s,r){const i=qd(s,r),o=Co(i)+Co(s.gt);return Tr(i)&&Tr(s.gt)?Fu(o):Pu(s.serializer,o)}(e,t)}function $d(e,t,n){return e instanceof cs?Vu(e,t):e instanceof ls?Bu(e,t):n}function qd(e,t){return e instanceof Nr?Tr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class br extends Ns{}class cs extends Ns{constructor(t){super(),this.elements=t}}function Vu(e,t){const n=Uu(t);for(const s of e.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ls extends Ns{constructor(t){super(),this.elements=t}}function Bu(e,t){let n=Uu(t);for(const s of e.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class Nr extends Ns{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Co(e){return Z(e.integerValue||e.doubleValue)}function Uu(e){return di(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function jd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof cs&&s instanceof cs||n instanceof ls&&s instanceof ls?ke(n.elements,s.elements,Pt):n instanceof Nr&&s instanceof Nr?Pt(n.gt,s.gt):n instanceof br&&s instanceof br}(e.transform,t.transform)}class ue{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ue}static exists(t){return new ue(void 0,t)}static updateTime(t){return new ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class yi{}function $u(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Kd(e.key,ue.none()):new vi(e.key,e.data,ue.none());{const n=e.data,s=Ot.empty();let r=new Et(_t.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ks(e.key,s,new Kt(r.toArray()),ue.none())}}function zd(e,t,n){e instanceof vi?function(s,r,i){const o=s.value.clone(),a=Ao(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ks?function(s,r,i){if(!jn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ao(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(qu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function nn(e,t,n,s){return e instanceof vi?function(r,i,o,a){if(!jn(r.precondition,i))return o;const u=r.value.clone(),c=Do(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof ks?function(r,i,o,a){if(!jn(r.precondition,i))return o;const u=Do(r.fieldTransforms,a,i),c=i.data;return c.setAll(qu(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return jn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function _o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ke(n,s,(r,i)=>jd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class vi extends yi{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ks extends yi{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ao(e,t,n){const s=new Map;et(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,$d(o,a,n[r]))}return s}function Do(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ud(i,o,t))}return s}class Kd extends yi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&zd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=nn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=nn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Lu();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=$u(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(n,s)=>_o(n,s))&&ke(this.baseMutations,t.baseMutations,(n,s)=>_o(n,s))}}/**
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
 */class Gd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,k;function ju(e){if(e===void 0)return jt("GRPC error has no .code"),g.UNKNOWN;switch(e){case J.OK:return g.OK;case J.CANCELLED:return g.CANCELLED;case J.UNKNOWN:return g.UNKNOWN;case J.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case J.INTERNAL:return g.INTERNAL;case J.UNAVAILABLE:return g.UNAVAILABLE;case J.UNAUTHENTICATED:return g.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case J.NOT_FOUND:return g.NOT_FOUND;case J.ALREADY_EXISTS:return g.ALREADY_EXISTS;case J.PERMISSION_DENIED:return g.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case J.ABORTED:return g.ABORTED;case J.OUT_OF_RANGE:return g.OUT_OF_RANGE;case J.UNIMPLEMENTED:return g.UNIMPLEMENTED;case J.DATA_LOSS:return g.DATA_LOSS;default:return _()}}(k=J||(J={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return $n}static getOrCreateInstance(){return $n===null&&($n=new wi),$n}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let $n=null;/**
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
 */function Wd(){return new TextEncoder}/**
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
 */const Yd=new Ee([4294967295,4294967295],0);function bo(e){const t=Wd().encode(e),n=new ed;return n.update(t),new Uint8Array(n.digest())}function No(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ee([n,s],0),new Ee([r,i],0)]}class Ei{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Qe(`Invalid padding: ${n}`);if(s<0)throw new Qe(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Ee.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(Ee.fromNumber(s)));return r.compare(Yd)===1&&(r=new Ee([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=bo(t),[s,r]=No(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ei(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=bo(t),[s,r]=No(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Rs(C.min(),r,new Y(V),Xt(),R())}}class bn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new bn(s,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class zu{constructor(t,n){this.targetId=t,this.Vt=n}}class Ku{constructor(t,n,s=It.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ko{constructor(){this.St=0,this.Dt=xo(),this.Ct=It.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=R(),n=R(),s=R();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:_()}}),new bn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=xo()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Xd{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Xt(),this.zt=Ro(),this.Wt=new Y(V)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:_()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(Cr(o))if(r===0){const a=new I(o.path);this.Yt(s,a,yt.newNoDocument(a,C.min()))}else et(r===1);else{const a=this.ie(s);if(a!==r){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=wi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,l,h){var d,f,E,A,y,M;const K={localCacheCount:l,existenceFilterCount:h.count},q=h.unchangedNames;return q&&(K.bloomFilter={applied:c===0,hashCount:(d=q==null?void 0:q.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(A=(E=(f=q==null?void 0:q.bits)===null||f===void 0?void 0:f.bitmap)===null||E===void 0?void 0:E.length)!==null&&A!==void 0?A:0,padding:(M=(y=q==null?void 0:q.bits)===null||y===void 0?void 0:y.padding)!==null&&M!==void 0?M:0}),K}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=he(i).toUint8Array()}catch(l){if(l instanceof Su)return Ne("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{c=new Ei(u,o,a)}catch(l){return Ne(l instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return c.It===0?1:r!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Cr(a.target)){const u=new I(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,yt.newNoDocument(u,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=R();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new Rs(t,n,this.Wt,this.jt,s);return this.jt=Xt(),this.zt=Ro(),this.Wt=new Y(V),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new ko,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new Et(V),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new ko),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function Ro(){return new Y(I.comparator)}function xo(){return new Y(I.comparator)}const Jd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),tf=(()=>({and:"AND",or:"OR"}))();class ef{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function kr(e,t){return e.useProto3Json||As(t)?t:{value:t}}function Rr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Se(e){return et(!!e),C.fromTimestamp(function(t){const n=Yt(t);return new st(n.seconds,n.nanos)}(e))}function Gu(e,t){return function(n){return new G(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Qu(e){const t=G.fromString(e);return et(Ju(t)),t}function Xs(e,t){const n=Qu(t);if(n.get(1)!==e.databaseId.projectId)throw new v(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(Wu(n))}function xr(e,t){return Gu(e.databaseId,t)}function nf(e){const t=Qu(e);return t.length===4?G.emptyPath():Wu(t)}function Mo(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wu(e){return et(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function sf(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(et(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(et(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?g.UNKNOWN:ju(u.code);return new v(c,u.message||"")}(o);n=new Ku(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xs(e,s.document.name),i=Se(s.document.updateTime),o=s.document.createTime?Se(s.document.createTime):C.min(),a=new Ot({mapValue:{fields:s.document.fields}}),u=yt.newFoundDocument(r,i,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];n=new zn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Xs(e,s.document),i=s.readTime?Se(s.readTime):C.min(),o=yt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new zn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Xs(e,s.document),i=s.removedTargetIds||[];n=new zn([],i,r,null)}else{if(!("filter"in t))return _();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Qd(r,i),a=s.targetId;n=new zu(a,o)}}return n}function rf(e,t){return{documents:[xr(e,t.path)]}}function of(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=xr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=xr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return Xu(xt.create(u,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:me(l.field),direction:cf(l.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=kr(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function af(e){let t=nf(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){et(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Yu(l);return h instanceof xt&&Au(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new tn(ye(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,As(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,d=l.values||[];return new us(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,d=l.values||[];return new us(d,h)}(n.endAt)),Rd(t,r,o,i,a,"F",u,c)}function uf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Yu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ye(t.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ye(t.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ye(t.unaryFilter.field);return tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ye(t.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(e):e.fieldFilter!==void 0?function(t){return tt.create(ye(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(n=>Yu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op))}(e):_()}function cf(e){return Jd[e]}function lf(e){return Zd[e]}function hf(e){return tf[e]}function me(e){return{fieldPath:e.canonicalString()}}function ye(e){return _t.fromServerFormat(e.fieldPath)}function Xu(e){return e instanceof tt?function(t){if(t.op==="=="){if(wo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NAN"}};if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NAN"}};if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(t.field),op:lf(t.op),value:t.value}}}(e):e instanceof xt?function(t){const n=t.getFilters().map(s=>Xu(s));return n.length===1?n[0]:{compositeFilter:{op:hf(t.op),filters:n}}}(e):_()}function Ju(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,s,r,i=C.min(),o=C.min(),a=It.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.fe=t}}function ff(e){const t=af({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ar(t,t.limit,"L"):t}/**
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
 */class pf{constructor(){this.rn=new gf}addToCollectionParentIndex(t,n){return this.rn.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Wt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class gf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Et(G.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Et(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Me(0)}static Mn(){return new Me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.changes=new Ue(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&nn(s.mutation,r,Kt.empty(),st.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,R()).next(()=>s))}getLocalViewOfDocuments(t,n,s=R()){const r=oe();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ge();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=oe();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,R()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Xt();const o=en(),a=en();return n.forEach((u,c)=>{const l=s.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof ks)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),nn(l.mutation,c,l.mutation.getFieldMask(),st.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new yf(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=en();let r=new Y((o,a)=>o-a),i=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=s.get(u)||Kt.empty();l=a.applyToLocalView(c,l),s.set(u,l);const h=(r.get(a.batchId)||R()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Lu();l.forEach(d=>{if(!i.has(d)){const f=$u(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ru(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):p.resolve(oe());let a=-1,u=i;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,R())).next(l=>({batchId:a,changes:Ld(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(s=>{let r=Ge();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ge();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const u=function(c,l){return new Dn(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,yt.newInvalidDocument(c)))});let o=Ge();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&nn(c.mutation,u,Kt.empty(),st.now()),bs(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class wf{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return p.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Se(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:ff(s.bundledQuery),readTime:Se(s.readTime)}}(n)),p.resolve()}}/**
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
 */class Ef{constructor(){this.overlays=new Y(I.comparator),this.ls=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=oe();return p.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const r=oe(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Y((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let l=i.get(c.largestBatchId);l===null&&(l=oe(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=oe(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=r)););return p.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Gd(n,s));let i=this.ls.get(n);i===void 0&&(i=R(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.fs=new Et(nt.ds),this.ws=new Et(nt._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new nt(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new nt(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new I(new G([])),s=new nt(n,t),r=new nt(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new I(new G([])),s=new nt(n,t),r=new nt(n,t+1);let i=R();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new nt(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class nt{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return I.comparator(t.key,n.key)||V(t.As,n.As)}static _s(t,n){return V(t.As,n.As)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Et(nt.ds)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new nt(n,0),r=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Et(V);return n.forEach(r=>{const i=new nt(r,0),o=new nt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),p.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;I.isDocumentKey(i)||(i=i.child(""));const o=new nt(new I(i),0);let a=new Et(V);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)},o),p.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){et(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return p.forEach(n.mutations,r=>{const i=new nt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new nt(n,0),r=this.Rs.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.Ds=t,this.docs=new Y(I.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(t,n){let s=Xt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():yt.newInvalidDocument(r))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Xt();const o=n.path,a=new I(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pd(fd(l),s)<=0||(r.has(l.key)||bs(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,s,r){_()}Cs(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Sf(this)}getSize(t){return p.resolve(this.size)}}class Sf extends mf{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.persistence=t,this.xs=new Ue(n=>fi(n),pi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Ii,this.targetCount=0,this.Ms=Me.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),p.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Me(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Fn(n),p.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n){this.$s={},this.overlays={},this.Os=new ci(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Cf(this),this.indexManager=new pf,this.remoteDocumentCache=function(s){return new Tf(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new df(n),this.qs=new wf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ef,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new If(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const r=new Af(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return p.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class Af extends md{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Qs=new Ii,this.js=null}static zs(t){return new Ti(t)}get Ws(){if(this.js)return this.js;throw _()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),p.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ws,s=>{const r=I.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return p.or([()=>p.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=R(),r=R();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Si(t,n.fromCache,s,r)}}/**
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
 */class Df{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if(So(n))return p.resolve(null);let s=zt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ar(n,null,"F"),s=zt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=R(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(t,Ar(n,null,"F")):this.Wi(t,c,n,u)}))})))}Gi(t,n,s,r){return So(n)||r.isEqual(C.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(fo()<=F.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dr(n)),this.Wi(t,o,n,dd(r,-1)))})}ji(t,n){let s=new Et(Mu(t));return n.forEach((r,i)=>{bs(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return fo()<=F.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Dr(n)),this.Ui.getDocumentsMatchingQuery(t,n,Wt.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bf{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new Y(V),this.Yi=new Ue(i=>fi(i),pi),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vf(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Nf(e,t,n,s){return new bf(e,t,n,s)}async function Zu(e,t){const n=x(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=R();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function tc(e){const t=x(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function kf(e,t){const n=x(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(It.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(h,f),function(E,A,y){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,l)&&a.push(n.Bs.updateTargetData(i,f))});let u=Xt(),c=R();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Rf(i,o,t.documentUpdates).next(l=>{u=l.nr,c=l.sr})),!s.isEqual(C.min())){const l=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ji=r,i))}function Rf(e,t,n){let s=R(),r=R();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Xt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(C.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:r}})}function xf(e,t){const n=x(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,p.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Ht(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function Mr(e,t,n){const s=x(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!_n(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function Oo(e,t,n){const s=x(e);let r=C.min(),i=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=x(a),h=l.Yi.get(c);return h!==void 0?p.resolve(l.Ji.get(h)):l.Bs.getTargetData(u,c)}(s,o,zt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:R())).next(a=>(Mf(s,xd(t),a),{documents:a,ir:i})))}function Mf(e,t,n){let s=e.Xi.get(t)||C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class Lo{constructor(){this.activeTargetIds=Vd()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Of{constructor(){this.Hr=new Lo,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Lo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Lf{Yr(t){}shutdown(){}}/**
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
 */class Po{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qn=null;function Js(){return qn===null?qn=268435456+Math.round(2147483648*Math.random()):qn++,"0x"+qn.toString(16)}/**
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
 */const Pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Vf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=Js(),a=this.To(t,n);w("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,r,i),this.Ao(t,a,u,s).then(c=>(w("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Ne("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Be,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=Pf[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=Js();return new Promise((o,a)=>{const u=new td;u.setWithCredentials(!0),u.listenOnce(Xh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ws.NO_ERROR:const l=u.getResponseJson();w(gt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ws.TIMEOUT:w(gt,`RPC '${t}' ${i} timed out`),a(new v(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ws.HTTP_ERROR:const h=u.getStatus();if(w(gt,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(A){const y=A.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(y)>=0?y:g.UNKNOWN}(f.status);a(new v(E,f.message))}else a(new v(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new v(g.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{w(gt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);w(gt,`RPC '${t}' ${i} sending request:`,r),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const r=Js(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Wh(),a=Yh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Zh({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const l=i.join("");w(gt,`Creating RPC '${t}' stream ${r}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,f=!1;const E=new Ff({ro:y=>{f?w(gt,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(d||(w(gt,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),w(gt,`RPC '${t}' stream ${r} sending:`,y),h.send(y))},oo:()=>h.close()}),A=(y,M,K)=>{y.listen(M,q=>{try{K(q)}catch(H){setTimeout(()=>{throw H},0)}})};return A(h,Vn.EventType.OPEN,()=>{f||w(gt,`RPC '${t}' stream ${r} transport opened.`)}),A(h,Vn.EventType.CLOSE,()=>{f||(f=!0,w(gt,`RPC '${t}' stream ${r} transport closed`),E.wo())}),A(h,Vn.EventType.ERROR,y=>{f||(f=!0,Ne(gt,`RPC '${t}' stream ${r} transport errored:`,y),E.wo(new v(g.UNAVAILABLE,"The operation could not be completed")))}),A(h,Vn.EventType.MESSAGE,y=>{var M;if(!f){const K=y.data[0];et(!!K);const q=K,H=q.error||((M=q[0])===null||M===void 0?void 0:M.error);if(H){w(gt,`RPC '${t}' stream ${r} received error:`,H);const ot=H.status;let Dt=function(O){const B=J[O];if(B!==void 0)return ju(B)}(ot),j=H.message;Dt===void 0&&(Dt=g.INTERNAL,j="Unknown error status: "+ot+" with message "+H.message),f=!0,E.wo(new v(Dt,j)),h.close()}else w(gt,`RPC '${t}' stream ${r} received:`,K),E._o(K)}}),A(a,Jh.STAT_EVENT,y=>{y.stat===lo.PROXY?w(gt,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===lo.NOPROXY&&w(gt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Zs(){return typeof document<"u"?document:null}/**
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
 */function xs(e){return new ef(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,n,s,r,i,o,a,u){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ec(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(jt(n.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new v(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uf extends Bf{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=sf(this.serializer,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?Se(i.readTime):C.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=Mo(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Cr(a)?{documents:rf(r,a)}:{query:of(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Hu(r,i.resumeToken);const u=kr(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(C.min())>0){o.readTime=Rr(r,i.snapshotVersion.toTimestamp());const u=kr(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=uf(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=Mo(this.serializer),n.removeTarget=t,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new v(g.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(g.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(g.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class qf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(jt(n),this.mu=!1):w("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{kn(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=x(a);u.vu.add(4),await Nn(u),u.bu.set("Unknown"),u.vu.delete(4),await Ms(u)}(this))})}),this.bu=new qf(s,r)}}async function Ms(e){if(kn(e))for(const t of e.Ru)await t(!0)}async function Nn(e){for(const t of e.Ru)await t(!1)}function nc(e,t){const n=x(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Ai(n)?_i(n):$e(n).Ko()&&Ci(n,t))}function sc(e,t){const n=x(e),s=$e(n);n.Au.delete(t),s.Ko()&&rc(n,t),n.Au.size===0&&(s.Ko()?s.jo():kn(n)&&n.bu.set("Unknown"))}function Ci(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}$e(e).su(t)}function rc(e,t){e.Vu.qt(t),$e(e).iu(t)}function _i(e){e.Vu=new Xd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),$e(e).start(),e.bu.gu()}function Ai(e){return kn(e)&&!$e(e).Uo()&&e.Au.size>0}function kn(e){return x(e).vu.size===0}function ic(e){e.Vu=void 0}async function zf(e){e.Au.forEach((t,n)=>{Ci(e,t)})}async function Kf(e,t){ic(e),Ai(e)?(e.bu.Iu(t),_i(e)):e.bu.set("Unknown")}async function Hf(e,t,n){if(e.bu.set("Online"),t instanceof Ku&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Fo(e,s)}else if(t instanceof zn?e.Vu.Ht(t):t instanceof zu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(C.min()))try{const s=await tc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),rc(r,a);const l=new Ht(c.target,a,u,c.sequenceNumber);Ci(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Fo(e,s)}}async function Fo(e,t,n){if(!_n(t))throw t;e.vu.add(1),await Nn(e),e.bu.set("Offline"),n||(n=()=>tc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Ms(e)})}async function Vo(e,t){const n=x(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=kn(n);n.vu.add(3),await Nn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Ms(n)}async function Gf(e,t){const n=x(e);t?(n.vu.delete(2),await Ms(n)):t||(n.vu.add(2),await Nn(n),n.bu.set("Unknown"))}function $e(e){return e.Su||(e.Su=function(t,n,s){const r=x(t);return r.fu(),new Uf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:zf.bind(null,e),ao:Kf.bind(null,e),nu:Hf.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),Ai(e)?_i(e):e.bu.set("Unknown")):(await e.Su.stop(),ic(e))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Di(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(e,t){if(jt("AsyncQueue",`${t}: ${e}`),_n(e))return new v(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t?(n,s)=>t(n,s)||I.comparator(n.key,s.key):(n,s)=>I.comparator(n.key,s.key),this.keyedMap=Ge(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ce;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.Cu=new Y(I.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):_():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Oe{constructor(t,n,s,r,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Oe(t,n,Ce.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ds(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Nu=void 0,this.listeners=[]}}class Wf{constructor(){this.queries=new Ue(t=>xu(t),Ds),this.onlineState="Unknown",this.ku=new Set}}async function Yf(e,t){const n=x(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Qf),r)try{i.Nu=await n.onListen(s)}catch(o){const a=oc(o,`Initialization of query '${Dr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&bi(n)}async function Xf(e,t){const n=x(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Jf(e,t){const n=x(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&bi(n)}function Zf(e,t,n){const s=x(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function bi(e){e.ku.forEach(t=>{t.next()})}class tp{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.key=t}}class uc{constructor(t){this.key=t}}class ep{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=R(),this.mutatedKeys=R(),this.tc=Mu(t),this.ec=new Ce(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new Bo,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const d=r.get(l),f=bs(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),A=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?E!==A&&(s.track({type:3,doc:f}),y=!0):this.rc(d,f)||(s.track({type:2,doc:f}),y=!0,(u&&this.tc(f,u)>0||c&&this.tc(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(u||c)&&(a=!0)),y&&(f?(o=o.add(f),i=A?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((c,l)=>function(h,d){const f=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return f(h)-f(d)}(c.type,l.type)||this.tc(c.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new Oe(this.query,t.ec,r,i,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Bo,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=R(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new uc(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new ac(s))}),n}hc(t){this.Yu=t.ir,this.Zu=R();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return Oe.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class np{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class sp{constructor(t){this.key=t,this.fc=!1}}class rp{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ue(a=>xu(a),Ds),this._c=new Map,this.mc=new Set,this.gc=new Y(I.comparator),this.yc=new Map,this.Ic=new Ii,this.Tc={},this.Ec=new Map,this.Ac=Me.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function ip(e,t){const n=dp(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await xf(n.localStore,zt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await op(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&nc(n.remoteStore,o)}return r}async function op(e,t,n,s,r){e.Rc=(h,d,f)=>async function(E,A,y,M){let K=A.view.sc(y);K.zi&&(K=await Oo(E.localStore,A.query,!1).then(({documents:ot})=>A.view.sc(ot,K)));const q=M&&M.targetChanges.get(A.targetId),H=A.view.applyChanges(K,E.isPrimaryClient,q);return $o(E,A.targetId,H.cc),H.snapshot}(e,h,d,f);const i=await Oo(e.localStore,t,!0),o=new ep(t,i.ir),a=o.sc(i.documents),u=bn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),c=o.applyChanges(a,e.isPrimaryClient,u);$o(e,n,c.cc);const l=new np(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function ap(e,t){const n=x(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Ds(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Mr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sc(n.remoteStore,s.targetId),Or(n,s.targetId)}).catch(ui)):(Or(n,s.targetId),await Mr(n.localStore,s.targetId,!0))}async function cc(e,t){const n=x(e);try{const s=await kf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(et(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?et(o.fc):r.removedDocuments.size>0&&(et(o.fc),o.fc=!1))}),await hc(n,s,t)}catch(s){await ui(s)}}function Uo(e,t,n){const s=x(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=x(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Mu(o)&&(u=!0)}),u&&bi(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function up(e,t,n){const s=x(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new Y(I.comparator);o=o.insert(i,yt.newNoDocument(i,C.min()));const a=R().add(i),u=new Rs(C.min(),new Map,new Y(V),o,a);await cc(s,u),s.gc=s.gc.remove(i),s.yc.delete(t),Ni(s)}else await Mr(s.localStore,t,!1).then(()=>Or(s,t,n)).catch(ui)}function Or(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||lc(e,s)})}function lc(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(sc(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ni(e))}function $o(e,t,n){for(const s of n)s instanceof ac?(e.Ic.addReference(s.key,t),cp(e,s)):s instanceof uc?(w("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||lc(e,s.key)):_()}function cp(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(w("SyncEngine","New document in limbo: "+n),e.mc.add(s),Ni(e))}function Ni(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new I(G.fromString(t)),s=e.Ac.next();e.yc.set(s,new sp(n)),e.gc=e.gc.insert(n,s),nc(e.remoteStore,new Ht(zt(gi(n.path)),s,"TargetPurposeLimboResolution",ci.ct))}}async function hc(e,t,n){const s=x(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const l=Si.Li(u.targetId,c);i.push(l)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,u){const c=x(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(u,h=>p.forEach(h.Fi,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Bi,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!_n(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Ji.get(h),f=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(f);c.Ji=c.Ji.insert(h,E)}}}(s.localStore,i))}async function lp(e,t){const n=x(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Zu(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new v(g.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await hc(n,s.er)}}function hp(e,t){const n=x(e),s=n.yc.get(t);if(s&&s.fc)return R().add(s.key);{let r=R();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function dp(e){const t=x(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=up.bind(null,t),t.dc.nu=Jf.bind(null,t.eventManager),t.dc.Pc=Zf.bind(null,t.eventManager),t}class qo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=xs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Nf(this.persistence,new Df,t.initialUser,this.serializer)}createPersistence(t){return new _f(Ti.zs,this.serializer)}createSharedClientState(t){return new Of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lp.bind(null,this.syncEngine),await Gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wf}createDatastore(t){const n=xs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Vf(r));var r;return function(i,o,a,u){return new $f(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Uo(this.syncEngine,a,0),o=Po.D()?new Po:new Lf,new jf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const l=new rp(s,r,i,o,a,u);return c&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=x(t);w("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Nn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class pp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=ld.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=oc(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function tr(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function jo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yp(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Vo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Vo(t.remoteStore,i)),e._onlineComponents=t}function mp(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function yp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await tr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mp(n))throw n;Ne("Error using user provided cache. Falling back to memory cache: "+n),await tr(e,new qo)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await tr(e,new qo);return e._offlineComponents}async function vp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await jo(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await jo(e,new fp))),e._onlineComponents}async function zo(e){const t=await vp(e),n=t.eventManager;return n.onListen=ip.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n}/**
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
 */function dc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ko=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e,t,n){if(!n)throw new v(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ep(e,t,n,s){if(t===!0&&s===!0)throw new v(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ho(e){if(I.isDocumentKey(e))throw new v(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Os(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":_()}function Kn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Os(e);throw new v(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Go{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new v(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ep("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new v(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class ki{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nd;switch(n.type){case"firstParty":return new od(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ko.get(t);n&&(w("ComponentProvider","Removing Datastore"),Ko.delete(t),n.terminate())}(this),Promise.resolve()}}function Ip(e,t,n,s={}){var r;const i=(e=Kn(e,ki))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Ne("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=mt.MOCK_USER;else{o=Vc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new v(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(u)}e._authCredentials=new sd(new Iu(o,a))}}/**
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
 */class Ft{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class qe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qe(this.firestore,t,this._query)}}class _e extends qe{constructor(t,n,s){super(t,n,gi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new I(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function Qo(e,t,...n){if(e=sn(e),wp("collection","path",t),e instanceof ki){const s=G.fromString(t,...n);return Ho(s),new _e(e,null,s)}{if(!(e instanceof Ft||e instanceof _e))throw new v(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(G.fromString(t,...n));return Ho(s),new _e(e.firestore,null,s)}}/**
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
 */class Tp{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ec(this,"async_queue_retry"),this.Xc=()=>{const n=Zs();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Zs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ie;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!_n(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=Di.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&_()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function Wo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Lr extends ki{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Tp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fc(this),this._firestoreClient.terminate()}}function Sp(e,t){const n=typeof e=="object"?e:ql(),s=typeof e=="string"?e:t||"(default)",r=Vl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Pc("firestore");i&&Ip(r,...i)}return r}function Cp(e){return e._firestoreClient||fc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fc(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,u,c){return new wd(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,dc(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new gp(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Le(It.fromBase64String(t))}catch(n){throw new v(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Le(It.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class pc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class gc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=/^__.*__$/;function mc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class xi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new xi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Pr(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(mc(this.ca)&&_p.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Ap{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||xs(t)}ya(t,n,s,r=!1){return new xi({ca:t,methodName:n,ga:s,path:_t.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dp(e){const t=e._freezeSettings(),n=xs(e._databaseId);return new Ap(e._databaseId,!!t.ignoreUndefinedProperties,n)}function bp(e,t,n,s=!1){return Mi(n,e.ya(s?4:3,t))}function Mi(e,t){if(yc(e=sn(e)))return kp("Unsupported field value:",t,e),Np(e,t);if(e instanceof gc)return function(n,s){if(!mc(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Mi(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=sn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=st.fromDate(n);return{timestampValue:Rr(s.serializer,r)}}if(n instanceof st){const r=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rr(s.serializer,r)}}if(n instanceof Ri)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Le)return{bytesValue:Hu(s.serializer,n._byteString)};if(n instanceof Ft){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Os(n)}`)}(e,t)}function Np(e,t){const n={};return Tu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):An(e,(s,r)=>{const i=Mi(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function yc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof st||e instanceof Ri||e instanceof Le||e instanceof Ft||e instanceof gc)}function kp(e,t,n){if(!yc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Os(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}const Rp=new RegExp("[~\\*/\\[\\]]");function xp(e,t,n){if(t.search(Rp)>=0)throw Pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pc(...t.split("."))._internalPath}catch{throw Pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pr(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new v(g.INVALID_ARGUMENT,a+e+u)}/**
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
 */class vc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Oi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mp extends vc{data(){return super.data()}}function Oi(e,t){return typeof t=="string"?xp(e,t):t instanceof pc?t._internalPath:t._delegate._internalPath}/**
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
 */function Op(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Li{}class Lp extends Li{}function Pp(e,t,...n){let s=[];t instanceof Li&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Pi).length,o=r.filter(a=>a instanceof Ls).length;if(i>1||i>0&&o>0)throw new v(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Ls extends Lp{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Ls(t,n,s)}_apply(t){const n=this._parse(t);return wc(t._query,n),new qe(t.firestore,t.converter,_r(t._query,n))}_parse(t){const n=Dp(t.firestore);return function(r,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new v(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Xo(l,c);const d=[];for(const f of l)d.push(Yo(a,r,f));h={arrayValue:{values:d}}}else h=Yo(a,r,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Xo(l,c),h=bp(o,i,l,c==="in"||c==="not-in");return tt.create(u,c,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Fp(e,t,n){const s=t,r=Oi("where",e);return Ls._create(r,s,n)}class Pi extends Li{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Pi(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)wc(i,a),i=_r(i,a)}(t._query,n),new qe(t.firestore,t.converter,_r(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Yo(e,t,n){if(typeof(n=sn(n))=="string"){if(n==="")throw new v(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ru(t)&&n.indexOf("/")!==-1)throw new v(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(G.fromString(n));if(!I.isDocumentKey(s))throw new v(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yo(e,new I(s))}if(n instanceof Ft)return yo(e,n._key);throw new v(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Os(n)}.`)}function Xo(e,t){if(!Array.isArray(e)||e.length===0)throw new v(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wc(e,t){if(t.isInequality()){const s=mi(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new v(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=ku(e);i!==null&&Vp(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new v(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new v(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Vp(e,t,n){if(!n.isEqual(t))throw new v(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Bp{convertValue(t,n="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw _()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return An(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Ri(Z(t.latitude),Z(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=hi(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const n=Yt(t);return new st(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=G.fromString(t);et(Ju(s));const r=new pn(s.get(1),s.get(3)),i=new I(s.popFirst(5));return r.isEqual(n)||jt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class We{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ec extends vc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Oi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Hn extends Ec{data(t={}){return super.data(t)}}class Up{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new We(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Hn(this._firestore,this._userDataWriter,s.key,s,new We(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new We(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new We(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:$p(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $p(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}class Ic extends Bp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function Jo(e,...t){var n,s,r;e=sn(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Wo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Wo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(e instanceof Ft)c=Kn(e.firestore,Lr),l=gi(e._key.path),u={next:h=>{t[o]&&t[o](qp(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Kn(e,qe);c=Kn(h.firestore,Lr),l=h._query;const d=new Ic(c);u={next:f=>{t[o]&&t[o](new Up(c,d,h,f))},error:t[o+1],complete:t[o+2]},Op(e._query)}return function(h,d,f,E){const A=new pp(E),y=new tp(d,A,f);return h.asyncQueue.enqueueAndForget(async()=>Yf(await zo(h),y)),()=>{A.Dc(),h.asyncQueue.enqueueAndForget(async()=>Xf(await zo(h),y))}}(Cp(c),l,a,u)}function qp(e,t,n){const s=n.docs.get(t._key),r=new Ic(e);return new Ec(e,r,t._key,s,new We(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Be=n})($l),Yn(new rn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Lr(new rd(n.getProvider("auth-internal")),new ud(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Xe(ho,"3.12.0",e),Xe(ho,"3.12.0","esm2017")})();const jp=""+new URL("../assets/93693-moving-truck.af8c5308.gif",import.meta.url).href;function Zo(e,t,n){const s=e.slice();return s[13]=t[n],s}function ta(e,t,n){const s=e.slice();return s[16]=t[n],s}function ea(e,t,n){const s=e.slice();return s[16]=t[n],s}function zp(e){let t,n;return{c(){t=L("p"),n=lt("¡Ya vendimos todos los productos!"),this.h()},l(s){t=P(s,"P",{style:!0});var r=W(t);n=ht(r,"¡Ya vendimos todos los productos!"),r.forEach(b),this.h()},h(){Ae(t,"text-align","center"),Ae(t,"font-size","18px")},m(s,r){Ct(s,t,r),T(t,n)},p:Gn,d(s){s&&b(t)}}}function Kp(e){let t,n,s,r,i,o,a,u,c,l,h,d,f,E,A,y,M,K,q,H,ot,Dt,j,O,B,N,Vt,te,ee,Bt,ne,Fi,pe=e[2],at=[];for(let D=0;D<pe.length;D+=1)at[D]=na(ea(e,pe,D));function Vi(D,ut){return D[3].length>0?Gp:Hp}let Rn=Vi(e),kt=Rn(e);return{c(){t=L("div"),n=L("p"),s=lt("¡Bienvenidos a nuestra página de venta!"),r=Tt(),i=L("p"),o=lt(`Estamos emocionados porque nos vamos de viaje y necesitamos vender los artículos de nuestra
				casa. `),a=L("br"),u=lt(`
				En esta página encontrarás una selección de productos cuidadosamente elegidos que están disponibles
				para la venta. `),c=L("br"),l=lt(`
				¡Explora nuestra colección de productos y encuentra grandes ofertas mientras nos ayudas a preparanos
				para nuestra aventura!
				`),h=L("br"),d=L("br"),f=Tt(),E=L("img"),y=L("br"),M=L("br"),K=Tt(),q=L("em"),H=lt(`Si estás interesado en algún producto, puedes comunicarte al número 3175135763 o dar click
					`),ot=L("a"),Dt=lt("aquí"),j=lt(`
					para enviar un mensaje por WhatsApp.`),O=Tt(),B=L("div"),N=L("button"),Vt=lt("Todos"),te=Tt();for(let D=0;D<at.length;D+=1)at[D].c();ee=Tt(),kt.c(),Bt=$i(),this.h()},l(D){t=P(D,"DIV",{class:!0});var ut=W(t);n=P(ut,"P",{});var X=W(n);s=ht(X,"¡Bienvenidos a nuestra página de venta!"),X.forEach(b),r=St(ut),i=P(ut,"P",{});var ct=W(i);o=ht(ct,`Estamos emocionados porque nos vamos de viaje y necesitamos vender los artículos de nuestra
				casa. `),a=P(ct,"BR",{}),u=ht(ct,`
				En esta página encontrarás una selección de productos cuidadosamente elegidos que están disponibles
				para la venta. `),c=P(ct,"BR",{}),l=ht(ct,`
				¡Explora nuestra colección de productos y encuentra grandes ofertas mientras nos ayudas a preparanos
				para nuestra aventura!
				`),h=P(ct,"BR",{}),d=P(ct,"BR",{}),f=St(ct),E=P(ct,"IMG",{src:!0,alt:!0,style:!0}),y=P(ct,"BR",{}),M=P(ct,"BR",{}),K=St(ct),q=P(ct,"EM",{});var xn=W(q);H=ht(xn,`Si estás interesado en algún producto, puedes comunicarte al número 3175135763 o dar click
					`),ot=P(xn,"A",{href:!0,target:!0,rel:!0});var Bi=W(ot);Dt=ht(Bi,"aquí"),Bi.forEach(b),j=ht(xn,`
					para enviar un mensaje por WhatsApp.`),xn.forEach(b),ct.forEach(b),ut.forEach(b),O=St(D),B=P(D,"DIV",{class:!0});var Mn=W(B);N=P(Mn,"BUTTON",{class:!0});var Ui=W(N);Vt=ht(Ui,"Todos"),Ui.forEach(b),te=St(Mn);for(let Ps=0;Ps<at.length;Ps+=1)at[Ps].l(Mn);Mn.forEach(b),ee=St(D),kt.l(D),Bt=$i(),this.h()},h(){er(E.src,A=jp)||$(E,"src",A),$(E,"alt","logo"),Ae(E,"width","100px"),$(ot,"href","https://api.whatsapp.com/send?phone=573175135763"),$(ot,"target","_blank"),$(ot,"rel","noopener noreferrer"),$(t,"class","description svelte-1rz2o2p"),$(N,"class","svelte-1rz2o2p"),De(N,"selected",e[1].length===0),$(B,"class","tags svelte-1rz2o2p")},m(D,ut){Ct(D,t,ut),T(t,n),T(n,s),T(t,r),T(t,i),T(i,o),T(i,a),T(i,u),T(i,c),T(i,l),T(i,h),T(i,d),T(i,f),T(i,E),T(i,y),T(i,M),T(i,K),T(i,q),T(q,H),T(q,ot),T(ot,Dt),T(q,j),Ct(D,O,ut),Ct(D,B,ut),T(B,N),T(N,Vt),T(B,te);for(let X=0;X<at.length;X+=1)at[X]&&at[X].m(B,null);Ct(D,ee,ut),kt.m(D,ut),Ct(D,Bt,ut),ne||(Fi=ia(N,"click",e[5]),ne=!0)},p(D,ut){if(ut&2&&De(N,"selected",D[1].length===0),ut&22){pe=D[2];let X;for(X=0;X<pe.length;X+=1){const ct=ea(D,pe,X);at[X]?at[X].p(ct,ut):(at[X]=na(ct),at[X].c(),at[X].m(B,null))}for(;X<at.length;X+=1)at[X].d(1);at.length=pe.length}Rn===(Rn=Vi(D))&&kt?kt.p(D,ut):(kt.d(1),kt=Rn(D),kt&&(kt.c(),kt.m(Bt.parentNode,Bt)))},d(D){D&&b(t),D&&b(O),D&&b(B),Fr(at,D),D&&b(ee),kt.d(D),D&&b(Bt),ne=!1,Fi()}}}function na(e){let t,n=e[16]+"",s,r,i,o;function a(){return e[6](e[16])}return{c(){t=L("button"),s=lt(n),r=Tt(),this.h()},l(u){t=P(u,"BUTTON",{class:!0});var c=W(t);s=ht(c,n),r=St(c),c.forEach(b),this.h()},h(){$(t,"class","svelte-1rz2o2p"),De(t,"selected",e[1].includes(e[16]))},m(u,c){Ct(u,t,c),T(t,s),T(t,r),i||(o=ia(t,"click",a),i=!0)},p(u,c){e=u,c&4&&n!==(n=e[16]+"")&&Ye(s,n),c&6&&De(t,"selected",e[1].includes(e[16]))},d(u){u&&b(t),i=!1,o()}}}function Hp(e){let t,n;return{c(){t=L("p"),n=lt("¡No se encontraron productos con los filtros seleccionados!"),this.h()},l(s){t=P(s,"P",{style:!0});var r=W(t);n=ht(r,"¡No se encontraron productos con los filtros seleccionados!"),r.forEach(b),this.h()},h(){Ae(t,"text-align","center"),Ae(t,"font-size","18px")},m(s,r){Ct(s,t,r),T(t,n)},p:Gn,d(s){s&&b(t)}}}function Gp(e){let t,n=e[3],s=[];for(let r=0;r<n.length;r+=1)s[r]=ra(Zo(e,n,r));return{c(){t=L("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=P(r,"DIV",{class:!0});var i=W(t);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(b),this.h()},h(){$(t,"class","card-container svelte-1rz2o2p")},m(r,i){Ct(r,t,i);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(t,null)},p(r,i){if(i&10){n=r[3];let o;for(o=0;o<n.length;o+=1){const a=Zo(r,n,o);s[o]?s[o].p(a,i):(s[o]=ra(a),s[o].c(),s[o].m(t,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(r){r&&b(t),Fr(s,r)}}}function sa(e){let t,n=e[16]+"",s;return{c(){t=L("span"),s=lt(n),this.h()},l(r){t=P(r,"SPAN",{class:!0});var i=W(t);s=ht(i,n),i.forEach(b),this.h()},h(){$(t,"class","svelte-1rz2o2p"),De(t,"selected",e[1].includes(e[16]))},m(r,i){Ct(r,t,i),T(t,s)},p(r,i){i&8&&n!==(n=r[16]+"")&&Ye(s,n),i&10&&De(t,"selected",r[1].includes(r[16]))},d(r){r&&b(t)}}}function ra(e){let t,n,s,r,i,o,a,u=e[13].title+"",c,l,h,d,f=e[13].price+"",E,A,y,M=e[13].description+"",K,q,H,ot,Dt=e[13].tags,j=[];for(let O=0;O<Dt.length;O+=1)j[O]=sa(ta(e,Dt,O));return{c(){t=L("div"),n=L("img"),i=Tt(),o=L("div"),a=L("h2"),c=lt(u),l=Tt(),h=L("p"),d=lt("$"),E=lt(f),A=Tt(),y=L("p"),K=lt(M),q=Tt(),H=L("div");for(let O=0;O<j.length;O+=1)j[O].c();ot=Tt(),this.h()},l(O){t=P(O,"DIV",{class:!0});var B=W(t);n=P(B,"IMG",{src:!0,alt:!0,class:!0}),i=St(B),o=P(B,"DIV",{class:!0});var N=W(o);a=P(N,"H2",{class:!0});var Vt=W(a);c=ht(Vt,u),Vt.forEach(b),l=St(N),h=P(N,"P",{class:!0});var te=W(h);d=ht(te,"$"),E=ht(te,f),te.forEach(b),A=St(N),y=P(N,"P",{class:!0});var ee=W(y);K=ht(ee,M),ee.forEach(b),q=St(N),H=P(N,"DIV",{class:!0,style:!0});var Bt=W(H);for(let ne=0;ne<j.length;ne+=1)j[ne].l(Bt);Bt.forEach(b),N.forEach(b),ot=St(B),B.forEach(b),this.h()},h(){er(n.src,s=e[13].photo)||$(n,"src",s),$(n,"alt",r=e[13].title),$(n,"class","card-image svelte-1rz2o2p"),$(a,"class","card-title svelte-1rz2o2p"),$(h,"class","card-price svelte-1rz2o2p"),$(y,"class","card-description svelte-1rz2o2p"),$(H,"class","tags svelte-1rz2o2p"),Ae(H,"margin-top","5%"),$(o,"class","card-content"),$(t,"class","card svelte-1rz2o2p")},m(O,B){Ct(O,t,B),T(t,n),T(t,i),T(t,o),T(o,a),T(a,c),T(o,l),T(o,h),T(h,d),T(h,E),T(o,A),T(o,y),T(y,K),T(o,q),T(o,H);for(let N=0;N<j.length;N+=1)j[N]&&j[N].m(H,null);T(t,ot)},p(O,B){if(B&8&&!er(n.src,s=O[13].photo)&&$(n,"src",s),B&8&&r!==(r=O[13].title)&&$(n,"alt",r),B&8&&u!==(u=O[13].title+"")&&Ye(c,u),B&8&&f!==(f=O[13].price+"")&&Ye(E,f),B&8&&M!==(M=O[13].description+"")&&Ye(K,M),B&10){Dt=O[13].tags;let N;for(N=0;N<Dt.length;N+=1){const Vt=ta(O,Dt,N);j[N]?j[N].p(Vt,B):(j[N]=sa(Vt),j[N].c(),j[N].m(H,null))}for(;N<j.length;N+=1)j[N].d(1);j.length=Dt.length}},d(O){O&&b(t),Fr(j,O)}}}function Qp(e){let t,n,s,r,i,o,a,u;function c(d,f){return d[0].length>0?Kp:zp}let l=c(e),h=l(e);return{c(){t=L("link"),n=Tt(),s=Tt(),r=L("div"),i=L("div"),o=L("h1"),a=lt("Productos de Cata & Iván"),u=Tt(),h.c(),this.h()},l(d){t=P(d,"LINK",{rel:!0,href:!0}),n=St(d),_c("svelte-1kv4wwg",document.head).forEach(b),s=St(d),r=P(d,"DIV",{class:!0});var E=W(r);i=P(E,"DIV",{class:!0});var A=W(i);o=P(A,"H1",{class:!0});var y=W(o);a=ht(y,"Productos de Cata & Iván"),y.forEach(b),A.forEach(b),u=St(E),h.l(E),E.forEach(b),this.h()},h(){$(t,"rel","stylesheet"),$(t,"href","https://fonts.googleapis.com/css?family=Roboto"),document.title="Productos de Cata & Iván",$(o,"class","title svelte-1rz2o2p"),$(i,"class","header svelte-1rz2o2p"),$(r,"class","container svelte-1rz2o2p")},m(d,f){Ct(d,t,f),Ct(d,n,f),Ct(d,s,f),Ct(d,r,f),T(r,i),T(i,o),T(o,a),T(r,u),h.m(r,null)},p(d,[f]){l===(l=c(d))&&h?h.p(d,f):(h.d(1),h=l(d),h&&(h.c(),h.m(r,null)))},i:Gn,o:Gn,d(d){d&&b(t),d&&b(n),d&&b(s),d&&b(r),h.d()}}}function Wp(e,t,n){const r=pa({apiKey:"AIzaSyC8dZ3MSiC1GC7EfoKnwfijgYesjeCGAf0",authDomain:"selling-platform-1a3f1.firebaseapp.com",projectId:"selling-platform-1a3f1",storageBucket:"selling-platform-1a3f1.appspot.com",messagingSenderId:"950887623231",appId:"1:950887623231:web:10d5e781874fc36cf3668a",measurementId:"G-LZ8ET1QK2H"}),i=Sp(r);let o=[],a=[],u=[],c=[];const l=Jo(Pp(Qo(i,"products"),Fp("active","==",!0)),y=>{n(0,o=[]),y.forEach(M=>{o.push({id:M.id,...M.data()})}),console.log("Current products:",o),n(3,c=o.filter(f))}),h=Jo(Qo(i,"tags"),y=>{n(2,u=[]),y.forEach(M=>{u.push(M.data().tagname)}),console.log("Current tags:",u)});Ac(()=>()=>{l(),h()});const d=y=>{a.includes(y)?n(1,a=a.filter(M=>M!==y)):n(1,a=[y]),y==""&&n(1,a=[]),console.log("Selected tags:",a),n(3,c=o.filter(f))},f=y=>a.length===0?!0:a.includes("")||a.some(M=>Array.isArray(y.tags)&&y.tags.includes(M));return[o,a,u,c,d,()=>d(""),y=>d(y)]}class Xp extends Tc{constructor(t){super(),Sc(this,t,Wp,Qp,Cc,{})}}export{Xp as component};
