#!/usr/bin/env node
"use strict";function G(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function D(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?G(
Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function n(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function F(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function L(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function B(e
){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function z(e){e=this.__data__=new Ft(e);
this.size=e.size}function U(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Lt;++t<r;)this.add(e[t])}function W(n
,o){function i(){var e=arguments,t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
i.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError(
"Expected a function");return i.cache=new(W.Cache||pn),i}function V(e){return void 0===e}function q(e){return Jt(e)}
function H(e){return Fi(e)}function Z(e,t){return To(e,t)}function J(e,t=H,r=void 0){return!(void 0!==r&&(r=r,!st(n=e
)||!Z(Vi(n),r)))&&(n=void 0!==t?t:H,st(r=e)&&Z(X(r),n));var n}function Y(...e){return t=>xo(e,e=>e(t))}function X(e,t=H
){var r;return q(e)?(r=co(e,(e,t)=>t),ji(r,e=>t(e))):st(e)?(r=Reflect.ownKeys(e),ji(r,e=>t(e))):[]}function K(e){
return H(r=e)||$i(r)||Ci(r)||Mi(r)||([r,t=void 0]=[e,Y(K,V)],!!Jt(r)&&(null!=r&&r.length,void 0===t||Z(r,t)))||Q(e);
var t,r}function Q(e){return!!st(t=e)&&!(t instanceof Date)&&!lt(t)&&!q(t)&&J(t,H,void 0)&&J(e,H,Y(K,V));var t}
function ee(e){return Q(e)?e:void 0}function te(e){switch((""+e).toLowerCase()){case"npm":return ba.NPM;case"yarn":
return ba.YARN;case"hgm":return ba.HGM;default:return}}function re(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t
,a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0;return!1}return!1}
function ne(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==(t=t).uid?t.uid:process.getuid&&process.getuid(
),t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function oe(e){e=new Error("not found: "+e);
return e.code="ENOENT",e}function ie(e,t){var r=t.colon||Sa,n=[""],o=(o=t.path||process.env.PATH||"").split(r),i="";
return Ea&&(o.unshift(process.cwd()),n=(i=t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM").split(r),
-1!==e.indexOf(".")&&""!==n[0]&&n.unshift("")),{env:o=e.match(/\//)||Ea&&e.match(/\\/)?[""]:o,ext:n,extExe:i}}
function ae(e,t){var r=process.cwd(),n=null!=e.options.cwd;if(n)try{process.chdir(e.options.cwd)}catch(e){}let o;try{
o=Cu.sync(e.command,{path:(e.options.env||process.env)[Mu],pathExt:t?Nu.delimiter:void 0})}catch(e){}finally{
process.chdir(r)}return o=o&&Nu.resolve(n?e.options.cwd:"",o)}function se(e,t){return Object.assign(new Error(
`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}
function ue(e,t){return Hu&&1===e&&!t.file?se(t.original,"spawn"):null}function ce(e,t,r){e=We(e,t,r),t=Zu.spawn(
e.command,e.args,e.options);return Ju.hookChildProcess(t,e),t}function le(e){function t(){return t.called?t.value:(
t.called=!0,t.value=e.apply(this,arguments))}return t.called=!1,t}function fe(e){function t(){if(t.called
)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)}
var r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}
function de(e,o){if(!e)return Promise.reject(new Error("Expected a stream"));const i=(o=Object.assign({maxBuffer:1/0},o)
).maxBuffer;let a;return new Promise((t,r)=>{const n=e=>{e&&(e.bufferedData=a.getBufferedValue()),r(e)};(a=function(){
var n,o,i=Array.prototype.slice.call(arguments),a=za(i[i.length-1]||Ba)&&i.pop()||Ba;if((i=Array.isArray(i[0])?i[0]:i
).length<2)throw new Error("pump requires two streams per minimum");return o=i.map(function(e,t){var r=t<i.length-1;
return Va(e,r,0<t,function(e){n=n||e,e&&o.forEach(qa),r||(o.forEach(qa),a(n))})}),i.reduce(Ha)}(e,(e=>{const t=(
e=Object.assign({},e)).array;let r=e.encoding;const n="buffer"===r;let o=!1,i=(t?o=!(r||n):r=r||"utf8",n&&(r=null),0);
const a=[],s=new Yu({objectMode:o});return r&&s.setEncoding(r),s.on("data",e=>{a.push(e),o?i=a.length:i+=e.length}),
s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s})(o),e=>{e?n(e):t()})).on("data",
()=>{a.getBufferedLength()>i&&n(new Xu)})}).then(()=>a.getBufferedValue())}function pe(e,t){if(e)return e.errname(t);if(
t<0)return"Unknown system error "+t;throw new Error("err >= 0")}function he(t,e){var r,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function v(n){for(var o,
e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?he(Object(o),!0).forEach(function(e){var t=n,
r=o[e=e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}
):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):he(Object(o)).forEach(
function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))});return n}function ge(e,t){
var r=e.options.env||process.env,n=process.cwd(),o=null!=e.options.cwd,
i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch(e){}let a;try{
a=pc.sync(e.command,{path:r[hc({env:r})],pathExt:t?dc.delimiter:void 0})}catch(e){}finally{i&&process.chdir(n)}
return a=a&&dc.resolve(o?e.options.cwd:"",a)}function me(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`)
,{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}function be(e,t){
return Sc&&1===e&&!t.file?me(t.original,"spawn"):null}function ve(e,t,r){e=Ve(e,t,r),t=Oc.spawn(e.command,e.args,
e.options);return Pc.hookChildProcess(t,e),t}function ye(e={}){var{env:e=process.env,platform:t=process.platform}=e;
return"win32"!==t?"PATH":Object.keys(e).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"}async function we(n,u){if(!n
)throw new Error("Expected a stream");const o=(u=v({maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=v({},u)).array;
let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);const i=new Lc({objectMode:o});
r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=(
)=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=()=>a,i})();return await new Promise((e,t)=>{const r=e=>{
e&&i.getBufferedLength()<=Bc.MAX_LENGTH&&(e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await zc(n,i),e()
}catch(e){r(e)}})(),i.on("data",()=>{i.getBufferedLength()>o&&r(new Uc)})}),i.getBufferedValue()}function xe(e,t,r){
var n,o,i,a,s,u,c,l,f;[r,o,i={}]=[e,t,r],r=(f=Ns._parse(r,o,i)).command,o=f.args,(i=v({maxBuffer:1e8,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:(i=f.options).cwd||Su.default.cwd(),
execPath:Su.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},i)).env=({env:a,extendEnv:l,
preferLocal:s,localDir:u,execPath:c}=i,l=l?v(v({},Su.default.env),a):a,s?function(e){let{env:t=Su.default.env}=e,
r=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},
n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(
i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(e,Tc);e=ye({env:t=v({},t)});return r.path=t[e],t[e]=function(e={}){const{
cwd:t=Su.default.cwd(),path:r=Su.default.env[ye()],execPath:n=Su.default.execPath}=e;let o;
e=t instanceof URL?Ou.default.fileURLToPath(t):t;let i=Eu.default.resolve(e);const a=[];for(;o!==i;)a.push(
Eu.default.join(i,"node_modules/.bin")),o=i,i=Eu.default.resolve(i,"..");return a.push(Eu.default.resolve(e,n,"..")),[
...a,r].join(Eu.default.delimiter)}(r),t}({env:l,cwd:u,execPath:c}):l),i.stdio=(t=>{var r,e;if(t){const n=t.stdio;if(
void 0===n)return Fc.map(e=>t[e]);if(r=t,Fc.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Fc.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Fc.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===Su.default.platform&&"cmd"===Eu.default.basename(r,".exe")&&o.unshift("/q");const d={file:r,args:o,options:i,
parsed:f},p=(a=e,s=t,Yc(a,s).join(" ")),h=(u=e,c=t,Yc(u,c).map(e=>(e=>"string"!=typeof e||Xc.test(e)?e:`"${e.replace(Kc,
'\\"')}"`)(e)).join(" "));if(void 0!==(l=d.options.timeout)&&(!Number.isFinite(l)||l<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;try{
g=ju.default.spawn(d.file,d.args,d.options)}catch(e){return r=new ju.default.ChildProcess,o=Promise.reject(Dc({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:d,timedOut:!1,isCanceled:!1,killed:!1})),Jc(r,o)}n=g,
i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),f=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;var r=new Promise((e,r
)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,d.options,i);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const o=Js(()=>{e.kill()});return n.finally(()=>{o()})})(g,d.options,f),b={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e,e=r;if([r,t,n]=[t,e.forceKillAfterTimeout,o],(
r===Pu.default.constants.signals.SIGTERM||"string"==typeof r&&"SIGTERM"===r.toUpperCase())&&!1!==t&&n){r=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{i("SIGKILL")},r);a.unref&&a.unref()}return o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,b),a=Nc(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=qc(t,{encoding:o,buffer:e,maxBuffer:i}),
u=qc(r,{encoding:o,buffer:e,maxBuffer:i}),o=qc(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,
u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},Vc(t,s),Vc(r,u),Vc(n,o)])}})(g,
d.options,m),o=Qc(d.options,o),i=Qc(d.options,i),a=Qc(d.options,a);if(e||0!==t||null!==r){if(e=Dc({error:e,exitCode:t,
signal:r,stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:d,timedOut:n,
isCanceled:b.isCanceled||!!d.options.signal&&d.options.signal.aborted,killed:g.killed}),d.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=d.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=Ms();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,d.options),Jc(g,a)}
function _e(e,t){var r=null!=(r=ee(null==e?void 0:e.scripts))?r:{},n=null!=(n=ee(null==e?void 0:e.bin))?n:{},o=null!=(
o=ee(null==e?void 0:e.dependencies))?o:{},i=t.getDistFile(),a=t.getMainName(),t=t.getMainSourceFileName();return D(D({},
e),{},{private:!0,main:i,bin:D(D({},n),{},{[a]:i}),scripts:D(D({},r),{},{"start-prod":"node "+i,start:"ts-node "+t,
build:"rollup -c"}),dependencies:{},devDependencies:o})}function Ee(e,t){if(e instanceof p)return e;if(
"string"!=typeof e)return null;if(e.length>Ds)return null;if(!((t=t&&"object"==typeof t?t:{loose:!!t,
includePrerelease:!1}).loose?w[$s]:w[Ls]).test(e))return null;try{return new p(e,t)}catch(e){return null}}function p(e,t
){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){if(e.loose===t.loose)return e;
e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>Ds)throw new TypeError(
"version is longer than "+Ds+" characters");if(!(this instanceof p))return new p(e,t);y("SemVer",e,t),this.options=t,
this.loose=!!t.loose;t=e.trim().match(t.loose?w[$s]:w[Ls]);if(!t)throw new TypeError("Invalid Version: "+e);if(
this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>Fs||this.major<0)throw new TypeError(
"Invalid major version");if(this.minor>Fs||this.minor<0)throw new TypeError("Invalid minor version");if(
this.patch>Fs||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(
function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(0<=t&&t<Fs)return t}return e}):this.prerelease=[],
this.build=t[5]?t[5].split("."):[],this.format()}function je(e,t){var r=Us.test(e),n=Us.test(t);return r&&n&&(e=+e,t=+t)
,e===t?0:r&&!n||(!n||r)&&e<t?-1:1}function Se(e,t,r){return new p(e,r).compare(new p(t,r))}function Oe(e,t,r){
return 0<Se(e,t,r)}function Pe(e,t,r){return Se(e,t,r)<0}function Te(e,t,r){return 0===Se(e,t,r)}function Ae(e,t,r){
return 0!==Se(e,t,r)}function ke(e,t,r){return 0<=Se(e,t,r)}function Ie(e,t,r){return Se(e,t,r)<=0}function Ne(e,t,r,n){
switch(t){case"===":return(e="object"==typeof e?e.version:e)===("object"==typeof r?r.version:r);case"!==":return(
e="object"==typeof e?e.version:e)!==("object"==typeof r?r.version:r);case"":case"=":case"==":return Te(e,r,n);case"!=":
return Ae(e,r,n);case">":return Oe(e,r,n);case">=":return ke(e,r,n);case"<":return Pe(e,r,n);case"<=":return Ie(e,r,n);
default:throw new TypeError("Invalid operator: "+t)}}function Ce(e,t){if(t&&"object"==typeof t||(t={loose:!!t,
includePrerelease:!1}),e instanceof Ce){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Ce)
)return new Ce(e,t);y("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),
this.semver===Ws?this.value="":this.value=this.operator+this.semver.version,y("comp",this)}function h(e,t){if(
t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof h
)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new h(e.raw,t);if(e instanceof Ce
)return new h(e.value,t);if(!(this instanceof h))return new h(e,t);if(this.options=t,this.loose=!!t.loose,
this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){
return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError(
"Invalid SemVer Range: "+e);this.format()}function Me(e){return!e||"x"===e.toLowerCase()||"*"===e}function Re(e,t,r,n,o,
i,a,s,u,c,l,f,d){return((t=Me(r)?"":Me(n)?">="+r+".0.0":Me(o)?">="+r+"."+n+".0":">="+t)+" "+(s=Me(u)?"":Me(c)?"<"+(+u+1
)+".0.0":Me(l)?"<"+u+"."+(+c+1)+".0":f?"<="+u+"."+c+"."+l+"-"+f:"<="+s)).trim()}function Ge(e,t,r){try{t=new h(t,r)
}catch(e){return!1}return t.test(e)}function De(e,t,r,n){var o,i,a,s,u,c,l,f,d;switch(e=new p(e,n),t=new h(t,n),r){
case">":o=Oe,i=Ie,a=Pe,s=">",u=">=";break;case"<":o=Pe,i=ke,a=Oe,s="<",u="<=";break;default:throw new TypeError(
'Must provide a hilo val of "<" or ">"')}if(Ge(e,t,n))return!1;for(c=0;c<t.set.length;++c){if(l=t.set[c],d=f=null,
l.forEach(function(e){e.semver===Ws&&(e=new Ce(">=0.0.0")),f=f||e,d=d||e,o(e.semver,f.semver,n)?f=e:a(e.semver,d.semver,
n)&&(d=e)}),f.operator===s||f.operator===u)return!1;if((!d.operator||d.operator===s)&&i(e,d.semver))return!1;if(
d.operator===u&&a(e,d.semver))return!1}return!0}function Fe(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Le(e){return Hs.call(this,"Unreachable case: "+e)||this}function Be(e){for(var t in e)Zs.hasOwnProperty(t)||(
Zs[t]=e[t])}function $e(e,t){return{name:"SIGRT"+(t+1),number:Cc+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function ze(){var e=65-Cc,e=Array.from({length:e}
,$e);return[...Mc,...e].map(qe)}function Ue(e,{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){
return v(v({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}})}function We(e,t,r){
t&&!Array.isArray(t)&&(r=t,t=null);e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({},r),file:void 0,
original:{command:e,args:t}};return(r.shell?function(e){if(qu)return e;var t=[e.command].concat(e.args).join(" ");
return Uu?(e.command="string"==typeof e.options.shell?e.options.shell:process.env.comspec||"cmd.exe",e.args=["/d","/s",
"/c",`"${t}"`],e.options.windowsVerbatimArguments=!0):(
"string"==typeof e.options.shell?e.command=e.options.shell:"android"===process.platform?e.command="/system/bin/sh":e.command="/bin/sh"
,e.args=["-c",t]),e}:function(e){var t,r;if(!Uu)return e;if((r=e).file=Lu(r),t=(t=r.file&&$u(r.file))?(r.args.unshift(
r.file),r.command=t,Lu(r)):r.file,r=!Wu.test(t),e.options.forceShell||r){const n=Vu.test(t);e.command=Du.normalize(
e.command),e.command=Bu.command(e.command),e.args=e.args.map(e=>Bu.argument(e,n)),r=[e.command].concat(e.args).join(" ")
,e.args=["/d","/s","/c",`"${r}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}
return e})(e)}function Ve(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],
options:r=Object.assign({},r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!_c)return t;if((r=t
).file=wc(r),e=(e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=bc.openSync(e,"r"),bc.readSync(t,r,0,150,0),
bc.closeSync(t)}catch(e){}return vc(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,wc(r)):r.file,
r=!Ec.test(e),t.options.forceShell||r){const n=jc.test(e);t.command=yc.normalize(t.command),t.command=xc.command(
t.command),t.args=t.args.map(e=>xc.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`
],t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function qe({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=vu.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}var o,He,Ze,Je,Ye,Xe,Ke,Qe,et,tt,rt,nt,ot,it,at,st,
ut,ct,lt,ft,dt,pt,ht,gt,mt,bt,vt,yt,wt,xt,_t,Et,jt,St,Ot,Pt,Tt,At,kt,It,Nt,Ct,Mt,Rt,Gt,Dt,Ft,Lt,Bt,$t,zt,Ut,Wt,Vt,qt,Ht,
Zt,Jt,Yt,Xt,Kt,Qt,er,tr,rr,nr,or,ir,ar,sr,ur,cr,t,lr,fr,dr,pr,hr,gr,mr,br,vr,yr,wr,xr,_r,Er,jr,Sr,Or,Pr,Tr,Ar,kr,Ir,Nr,
Cr,Mr,Rr,Gr,Dr,Fr,Lr,Br,$r,zr,Ur,Wr,Vr,qr,Hr,Zr,Jr,Yr,Xr,Kr,Qr,en,tn,rn,nn,on,an,sn,un,cn,ln,fn,dn,pn,hn,gn,mn,bn,vn,yn,
wn,xn,_n,En,jn,Sn,On,Pn,Tn,An,kn,In,Nn,Cn,Mn,Rn,Gn,Dn,Fn,Ln,Bn,$n,zn,Un,Wn,Vn,qn,Hn,Zn,Jn,Yn,Xn,Kn,Qn,eo,to,ro,no,oo,io,
ao,so,uo,co,lo,fo,po,ho,go,mo,bo,vo,yo,wo,xo,_o,Eo,jo,So,Oo,Po,To,Ao,ko,Io,No,Co,Mo,Ro,Go,Do,Fo,Lo,Bo,$o,zo,Uo,Wo,Vo,qo,
Ho,Zo,Jo,Yo,Xo,Ko,Qo,ei,ti,ri,ni,oi,ii,ai,si,ui,ci,li,fi,di,pi,hi,gi,mi,bi,vi,yi,wi,xi,_i,Ei,ji,Si,Oi,Pi,Ti,Ai,ki,Ii,Ni,
Ci,Mi,Ri,Gi,Di,Fi,Li,Bi,$i,zi,Ui,Wi,Vi,qi,Hi,Zi,Ji,Yi,Xi,Ki,Qi,ea,ta,ra,na,oa,ia,aa,sa,ua,ca,la,fa,da,pa,ha,ga,ma,ba,va,
ya,wa,xa,_a,Ea,ja,Sa,Oa,Pa,Ta,Aa,ka,Ia,Na,Ca,Ma,Ra,Ga,Da,Fa,La,Ba,$a,za,Ua,Wa,Va,qa,Ha,Za,e,r,Ja,Ya,Xa,i,a,Ka,Qa,es,ts,
rs,ns,os,is,as,s,ss,u,us,cs,ls,fs,ds,c,ps,hs,gs,ms,bs,vs,ys,ws,xs,_s,Es,js,Ss,Os,Ps,Ts,As,ks,l,Is,f,Ns,Cs,Ms,d,g,m,b,Rs,
Gs,y,Ds,Fs,w,x,Ls,Bs,_,$s,zs,Us,Ws,E,Vs,qs,Hs,Zs,Js,j,Ys,S,Xs,O,P,T,Ks,Qs,eu,tu,ru,nu,A,ou,iu,au,su,uu,cu,k=require(
"path"),lu=require("fs"),fu=require("child_process"),du=require("stream"),pu=require("assert"),hu=require("events"),
gu=require("util"),mu=require("node:buffer"),I=require("node:path"),N=require("node:child_process"),C=require(
"node:process"),bu=require("node:url"),vu=require("os"),yu=require("node:os"),wu=require("buffer"),xu=F(k),_u=F(lu),
lu=F(fu),fu=F(du),du=F(pu),pu=F(hu),hu=F(gu),Eu=F(I),ju=F(N),Su=F(C),Ou=F(bu),Pu=F(yu),gu=F(wu),bu=null!=(C=null==(
I=process)||null==(N=I.env)?void 0:N.CREATE_COMMAND_LOG_LEVEL)?C:"INFO",M={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,
2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"};class Tu{constructor(e,t){n(this,"_logger",void 0),n(this,"name",void 0),n(
this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=M.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=M.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=M.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=M.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class Au{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case M.DEBUG:return"DEBUG";case M.INFO:return"INFO";case M.WARN:return"WARN";case M.ERROR:return"ERROR";
case M.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=M.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=M.INFO&&this._logger.info(...e)}static warn(...e){this._level<=M.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=M.ERROR&&this._logger.error(...e)}static createLogger(e){return new Tu(e,Au)}}n(Au
,"Level",M),n(Au,"_level",M.DEBUG),n(Au,"_logger",console),
o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,yu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},He=wu=function(e,t){
return e===t||e!=e&&t!=t},Ze=I=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},
N=Array.prototype,Je=N.splice,Ke=Xe=Ye=I,C=function(e){var t=this.__data__,e=Ze(t,e);return!(e<0||(e==t.length-1?t.pop(
):Je.call(t,e,1),--this.size,0))},N=function(e){var t=this.__data__,e=Ye(t,e);return e<0?void 0:t[e][1]},I=function(e){
return-1<Xe(this.__data__,e)},O=function(e,t){var r=this.__data__,n=Ke(r,e);return n<0?(++this.size,r.push([e,t])
):r[n][1]=t,this},L.prototype.clear=function(){this.__data__=[],this.size=0},L.prototype.delete=C,L.prototype.get=N,
L.prototype.has=I,L.prototype.set=O,Qe=C=L,N=function(){this.__data__=new Qe,this.size=0},I=function(e){
var t=this.__data__,e=t.delete(e);return this.size=t.size,e},O=function(e){return this.__data__.get(e)},Bs=function(e){
return this.__data__.has(e)},T="object"==typeof o&&o&&o.Object===Object&&o,
u="object"==typeof self&&self&&self.Object===Object&&self,e=(u=T||u||Function("return this")()).Symbol,
Aa=Object.prototype,et=Aa.hasOwnProperty,tt=Aa.toString,rt=e?e.toStringTag:void 0,Aa=Object.prototype,nt=Aa.toString,
ot=function(e){var t,r,n=et.call(e,rt),o=e[rt];try{t=!(e[rt]=void 0)}catch(e){}return r=tt.call(e),t&&(
n?e[rt]=o:delete e[rt]),r},it=function(e){return nt.call(e)},at=e?e.toStringTag:void 0,ut=Aa=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(at&&at in Object(e)?ot:it)(e)},ct=st=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},lt=function(e){if(!ct(e))return!1;e=ut(e);
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},
d=u["__core-js_shared__"],d=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""),ft=d?"Symbol(src)_1."+d:"",
d=Function.prototype,dt=d.toString,pt=lt,ht=function(e){return!!ft&&ft in e},gt=st,mt=d=function(e){if(null!=e){try{
return dt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},j=/[\\^$.*+?()[\]{}|]/g,
bt=/^\[object .+?Constructor\]$/,eu=Function.prototype,Ta=Object.prototype,eu=eu.toString,Ta=Ta.hasOwnProperty,
vt=RegExp("^"+eu.call(Ta).replace(j,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"
)+"$"),yt=function(e){return!(!gt(e)||ht(e))&&(pt(e)?vt:bt).test(mt(e))},wt=function(e,t){return null==e?void 0:e[t]},
Ta=(eu=function(e,t){e=wt(e,t);return yt(e)?e:void 0})(u,"Map"),j=eu(Object,"create"),_t=xt=j,c=Object.prototype,
Et=c.hasOwnProperty,jt=j,c=Object.prototype,St=c.hasOwnProperty,Ot=j,c=function(e){e=this.has(e
)&&delete this.__data__[e];return this.size-=e?1:0,e},j=function(e){var t,r=this.__data__;
return _t?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Et.call(r,e)?r[e]:void 0},S=function(e){var t=this.__data__;
return jt?void 0!==t[e]:St.call(t,e)},i=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,
r[e]=Ot&&void 0===t?"__lodash_hash_undefined__":t,this},B.prototype.clear=function(){this.__data__=xt?xt(null):{},
this.size=0},B.prototype.delete=c,B.prototype.get=j,B.prototype.has=S,B.prototype.set=i,Pt=B,Tt=C,At=Ta,kt=function(e){
var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Mt=Ct=Nt=It=function(
e,t){e=e.__data__;return kt(t)?e["string"==typeof t?"string":"hash"]:e.map},c=function(e){e=It(this,e).delete(e);
return this.size-=e?1:0,e},j=function(e){return Nt(this,e).get(e)},S=function(e){return Ct(this,e).has(e)},i=function(e,
t){var r=Mt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},$.prototype.clear=function(){this.size=0,
this.__data__={hash:new Pt,map:new(At||Tt),string:new Pt}},$.prototype.delete=c,$.prototype.get=j,$.prototype.has=S,
$.prototype.set=i,Gt=Ta,Dt=c=$,Ft=Rt=C,j=I,S=O,i=Bs,C=function(e,t){var r,n=this.__data__;if(n instanceof Rt){if(
r=n.__data__,!Gt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Dt(r)}return n.set(e,t),
this.size=n.size,this},z.prototype.clear=N,z.prototype.delete=j,z.prototype.get=S,z.prototype.has=i,z.prototype.set=C,
I=z,Lt=c,O=function(e){return this.__data__.has(e)},U.prototype.add=U.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},U.prototype.has=O,Bt=Bs=U,$t=N=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},zt=j=function(e,t){return e.has(t)},S=u.Uint8Array,Ut=S,
Wt=wu,Vt=i=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new Bt:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],f=t[s],
void 0!==(d=n?p?n(f,l,s,t,e,i):n(l,f,s,e,t,i):d)){if(d)continue;u=!1;break}if(c){if(!$t(t,function(e,t){if(!zt(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==f&&!o(l,f,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},qt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Ht=C=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},O=e?e.prototype:void 0,Zt=O?O.valueOf:void 0,
S=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new Ut(e),new Ut(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return Wt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=qt;case"[object Set]":return s=s||Ht,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=Vt(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(Zt)return Zt.call(e)==Zt.call(t)}return!1},O=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},l=Array.isArray,Yt=O,Xt=Jt=l,l=function(e,t,r){t=t(e);return Xt(e)?t:Yt(t,r(e))},Kt=Is=function(e,t){for(var r
,n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},f=Object.prototype,
Qt=f.propertyIsEnumerable,f=(er=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Kt(er(t),
function(e){return Qt.call(t,e)}))}:function(){return[]},_=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},tr=Aa,s=function(e){return rr(e)&&"[object Arguments]"==tr(e)},nr=rr=ka=function(e){
return null!=e&&"object"==typeof e},Za=Object.prototype,or=Za.hasOwnProperty,ir=Za.propertyIsEnumerable,Za=s(function(){
return arguments}())?s:function(e){return nr(e)&&or.call(e,"callee")&&!ir.call(e,"callee")},m=(g=(g=(m=(m=(s={exports:{}
}).exports)&&!m.nodeType&&m)&&s&&!s.nodeType&&s)&&g.exports===m?u.Buffer:void 0)?g.isBuffer:void 0,
s.exports=m||function(){return!1},ar=/^(?:0|[1-9]\d*)$/,g=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ar.test(e))&&-1<e&&e%1==0&&e<t},sr=Aa,ur=m=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},cr=ka,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,A=function(e){return cr(e)&&ur(e.length)&&!!t[sr(e)]},ya=function(t){return function(e){return t(e)}},P=(P=(b=Xs={
exports:{}}).exports)&&!P.nodeType&&P,P=(Rs=P&&b&&!b.nodeType&&b)&&Rs.exports===P,Gs=P&&T.process,P=function(){try{
return Rs&&Rs.require&&Rs.require("util").types||Gs&&Gs.binding&&Gs.binding("util")}catch(e){}}(),b.exports=P,P=(b=(
T=Xs.exports)&&T.isTypedArray)?ya(b):A,lr=_,fr=Za,dr=Jt,pr=s.exports,hr=g,gr=T=P,b=Object.prototype,mr=b.hasOwnProperty,
br=Object.prototype,iu=Object.keys,au=Object,vr=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||br)},yr=function(e){return iu(au(e))},A=Object.prototype,wr=A.hasOwnProperty,xr=lt,
_r=m,Er=function(e,t){var r,n=dr(e),o=!n&&fr(e),i=!n&&!o&&pr(e),a=!n&&!o&&!i&&gr(e),s=n||o||i||a,u=s?lr(e.length,String
):[],c=u.length;for(r in e)!t&&!mr.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||hr(r,c))||u.push(r);return u},jr=function(e){var t,r;if(!vr(e)
)return yr(e);for(r in t=[],Object(e))wr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Sr=_=function(e){
return null!=e&&_r(e.length)&&!xr(e)},Or=l,Pr=f,Tr=P=function(e){return(Sr(e)?Er:jr)(e)},Ar=function(e){return Or(e,Tr,
Pr)},b=Object.prototype,kr=b.hasOwnProperty,A=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p,h,g=1&r,m=Ar(e),b=m.length;if(
b!=Ar(t).length&&!g)return!1;for(a=b;a--;)if(s=m[a],!(g?s in t:kr.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<b;){if(l=e[s=m[a]],f=t[s],!(void 0===(d=n?g?n(f,l,s,t,e,i):n(l
,f,s,e,t,i):d)?l===f||o(l,f,r,n,i):d)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},l=eu(u,
"DataView"),f=Ta,b=eu(u,"Promise"),ss=Ta=eu(u,"Set"),u=eu(u,"WeakMap"),Ir=Aa,Cr=(Nr=d)(d=l),Mr=Nr(f),Rr=Nr(b),Gr=Nr(ss),
Dr=Nr(u),l=Ir,(d&&"[object DataView]"!=l(new d(new ArrayBuffer(1)))||f&&"[object Map]"!=l(new f
)||b&&"[object Promise]"!=l(b.resolve())||ss&&"[object Set]"!=l(new ss)||u&&"[object WeakMap]"!=l(new u))&&(l=function(e
){var t=Ir(e),e="[object Object]"==t?e.constructor:void 0,e=e?Nr(e):"";if(e)switch(e){case Cr:return"[object DataView]";
case Mr:return"[object Map]";case Rr:return"[object Promise]";case Gr:return"[object Set]";case Dr:
return"[object WeakMap]"}return t}),Fr=I,Lr=i,Br=S,$r=A,zr=l,Ur=Jt,Wr=s.exports,Vr=T,qr="[object Arguments]",
Hr="[object Array]",Zr="[object Object]",d=Object.prototype,Jr=d.hasOwnProperty,Yr=function(e,t,r,n,o,i){var a=Ur(e),
s=Ur(t),u=a?Hr:zr(e),s=s?Hr:zr(t),c=(u=u==qr?Zr:u)==Zr,l=(s=s==qr?Zr:s)==Zr,s=u==s;if(s&&Wr(e)){if(!Wr(t))return!1;c=!(
a=!0)}return s&&!c?(i=i||new Fr,a||Vr(e)?Lr(e,t,r,n,o,i):Br(e,t,u,r,n,o,i)):1&r||(a=c&&Jr.call(e,"__wrapped__"),
u=l&&Jr.call(t,"__wrapped__"),!a&&!u)?s&&(i=i||new Fr,$r(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new Fr)},
Kr=I,Qr=f=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Xr(t)&&!Xr(r)?t!=t&&r!=r:Yr(t,r,n,o,e,i))},en=st,
tn=b=function(e){return e==e&&!en(e)},rn=P,nn=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,f=l,d=!n;if(null==e)return!f;
for(e=Object(e);l--;)if(o=r[l],d&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<f;)if(a=e[i=(o=r[l])[0]],s=o[1],
d&&o[2]){if(void 0===a&&!(i in e))return!1}else if(u=new Kr,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Qr(s,a,3,n,u):c))return!1;
return!0},on=function(e){for(var t,r,n=rn(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,tn(r)];return n},an=ss=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},u=function(t){var r=on(t);
return 1==r.length&&r[0][2]?an(r[0][0],r[0][1]):function(e){return e===t||nn(e,t,r)}},sn=Aa,un=Xr=ka,cn=Jt,
ln=i=function(e){return"symbol"==typeof e||un(e)&&"[object Symbol]"==sn(e)},
fn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dn=/^\w*$/,S=function(e,t){if(cn(e))return!1;var r=typeof e;
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ln(e))||dn.test(e)||!fn.test(e)||null!=t&&e in Object(t)},pn=c
,W.Cache=pn,hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
gn=/\\(\\)?/g,ou=(A=W(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(hn,function(e,t,r,n){
o.push(r?n.replace(gn,"$1"):t||e)}),o},function(e){return 500===ou.size&&ou.clear(),e})).cache,mn=yu,bn=Jt,vn=i,
l=e?e.prototype:void 0,yn=l?l.toString:void 0,wn=function e(t){if("string"==typeof t)return t;if(bn(t))return mn(t,e)+""
if(vn(t))return yn?yn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},En=A,jn=s=function(e){return null==e?"":wn(e
)},Sn=i,An=On=function(e,t){return xn(e)?e:_n(e,t)?[e]:En(jn(e))},kn=Za,Cn=m,Rn=function(e,t){
return null!=e&&t in Object(e)},Gn=function(e,t,r){for(var n,o,i=(t=An(t,e)).length,a=!(n=-1);++n<i&&(o=Mn(t[n]),
a=null!=e&&r(e,o));)e=e[o];return a||++n!=i?a:!!(i=null==e?0:e.length)&&Cn(i)&&Nn(o,i)&&(In(e)||kn(e))},Dn=f,
Fn=function(e,t,r){e=null==e?void 0:Tn(e,t);return void 0===e?r:e},Ln=function(e,t){return null!=e&&Gn(e,t,Rn)},$n=b,
zn=ss,Wn=Tn=T=function(e,t){for(var r=0,n=(t=On(t,e)).length;null!=e&&r<n;)e=e[Pn(t[r++])];return r&&r==n?e:void 0},
Vn=function(t){return function(e){return null==e?void 0:e[t]}},qn=function(t){return function(e){return Wn(e,t)}},
Hn=Bn=_n=S,Zn=Un=Mn=Pn=function(e){if("string"==typeof e||Sn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Jn=u
,Yn=function(r,n){return Bn(r)&&$n(n)?zn(Un(r),n):function(e){var t=Fn(e,r);return void 0===t&&t===n?Ln(e,r):Dn(n,t,3)}}
,Xn=d=function(e){return e},Kn=In=xn=Jt,Qn=function(e){return Hn(e)?Vn(Zn(e)):qn(e)},eo=function(e,t,r){for(var n,o=-1,
i=Object(e),a=r(e),s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},to=P,io=yu,so=I=function(e,n){var o=-1,i=oo(e
)?Array(e.length):[];return no(e,function(e,t,r){i[++o]=n(e,t,r)}),i},co=function(e,t){return(uo(e)?io:so)(e,ao(t))},
fo=wu,po=oo=ro=_,ho=Nn=g,go=st,mo=N,vo=function(e,n){var o;return lo(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},
xo=function(e,t,r){var n=yo(e)?mo:vo;return r&&wo(e,t,r)&&(t=void 0),n(e,bo(t))},_o=lo=no=c=function(e,t){if(null==e
)return e;if(!ro(e))return e&&eo(e,t,to);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},
Eo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},jo=function(e,n){var o=!0;
return _o(e,function(e,t,r){return o=!!n(e,t,r)}),o},So=bo=ao=l=function(e){
return"function"==typeof e?e:null==e?Xn:"object"==typeof e?Kn(e)?Yn(e[0],e[1]):Jn(e):Qn(e)},Oo=yo=uo=Jt,
Po=wo=A=function(e,t,r){if(!go(r))return!1;var n=typeof t;return!!("number"==n?po(r)&&ho(t,r.length):"string"==n&&t in r
)&&fo(r[t],e)},To=function(e,t,r){var n=Oo(e)?Eo:jo;return r&&Po(e,t,r)&&(t=void 0),n(e,So(t))},Ao=eu,m=function(){try{
var e=Ao(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ko=Za,Io=Jt,No=e?e.isConcatSpreadable:void 0,Co=O,
Mo=function(e){return Io(e)||ko(e)||!!(No&&e&&e[No])},b=function e(t,r,n,o,i){var a,s=-1,u=t.length;for(n=n||Mo,i=i||[
];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):Co(i,a):o||(i[i.length]=a);return i},Ro=ss=function(e,t,r,n){var o=-1,
i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r},Go=c,Do=l,Fo=function(e,n,o,i,t){return t(e,
function(e,t,r){o=i?(i=!1,e):n(o,e,t,r)}),o},Lo=Jt,Bo=function(e,t,r){var n=Lo(e)?Ro:Fo,o=arguments.length<3;return n(e,
Do(t),r,o,Go)},S=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i),i=r<(t=t<0?i<-t?0:i+t:t)?0:r-t>>>0,
t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},$o=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(
e[i],i,e))return i;return-1},zo=function(e){return e!=e},Uo=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t
)return n;return-1},Wo=function(e,t,r){return t==t?Uo(e,t,r):$o(e,zo,r)},u=function(e,t){return!(null==e||!e.length
)&&-1<Wo(e,t,0)},wu=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1},_=function(
){},g=(Vo=Ta)&&1/C(new Vo([,-0]))[1]==1/0?function(e){return new Vo(e)}:_,qo=Bs,Ho=u,Zo=wu,Jo=j,Yo=g,Xo=C,Ko=function(e,
t,r){var n,o,i,a,s=-1,u=Ho,c=e.length,l=!0,f=[],d=f;if(r)l=!1,u=Zo;else if(200<=c){if(n=t?null:Yo(e))return Xo(n);l=!1,
u=Jo,d=new qo}else d=t?[]:f;e:for(;++s<c;)if(o=e[s],i=t?t(o):o,o=r||0!==o?o:0,l&&i==i){for(a=d.length;a--;)if(d[a]===i
)continue e;t&&d.push(i),f.push(o)}else u(d,i,r)||(d!==f&&d.push(i),f.push(o));return f},Qo=function(e){
return e&&e.length?Ko(e):[]},ei=i,ti=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,o=e==e,i=ei(
e),a=void 0!==t,s=null===t,u=t==t,c=ei(t),!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(
!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u)return-1}return 0},ri=yu,ni=T,oi=l,ii=I,ai=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},si=ya,ui=function(e,t,r){for(var n,o=-1,i=e.criteria,
a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=ti(i[o],a[o]))return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index}
,ci=d,li=Jt,fi=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},di=Math.max,pi=function(e){
return function(){return e}},N=(hi=m)?function(e,t){return hi(e,"toString",{configurable:!0,enumerable:!1,value:pi(t),
writable:!0})}:d,gi=Date.now,tu=N,mi=b,bi=function(e,n,r){var o;return n=n.length?ri(n,function(t){return li(t
)?function(e){return ni(e,1===t.length?t[0]:t)}:t}):[ci],o=-1,n=ri(n,si(oi)),e=ii(e,function(t,e,r){return{criteria:ri(n
,function(e){return e(t)}),index:++o,value:t}}),ai(e,function(e,t){return ui(e,t,r)})},vi=A,function(){var e=gi(),
t=16-e+ +nu;if(nu=e,0<t){if(800<=++ru)return}else ru=0;tu.apply(void 0,arguments)}((su=eu=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&vi(e,t[0],t[1])?t=[]:2<r&&vi(t[0],t[1],t[2])&&(t=[t[0]]),bi(e,mi(t,1),[])},uu=void(
nu=ru=0),cu=d,uu=di(void 0===uu?su.length-1:uu,0),function(){for(var e,t=arguments,r=-1,n=di(t.length-uu,0),o=Array(n
);++r<n;)o[r]=t[uu+r];for(r=-1,e=Array(uu+1);++r<uu;)e[r]=t[r];return e[uu]=cu(o),fi(su,this,e)}),eu+""),yi=c,wi=Is,
xi=function(e,n){var o=[];return yi(e,function(e,t,r){n(e,t,r)&&o.push(e)}),o},_i=l,Ei=Jt,ji=function(e,t){return(Ei(e
)?wi:xi)(e,_i(t))},Si=S,Za=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Si(e,t,r)},Oi=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),e=function(e){return Oi.test(e)},
(O=Xs.exports)&&O.isRegExp,Ta=function(e){return e.split("")},
_="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Bs="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Pi=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Bs+_,"g"),Ti=Ta,ki=function(e){return e.match(Pi)||[]},
Ci=function(e){return!0===e||!1===e||Ni(e)&&"[object Boolean]"==Ii(e)},Mi=function(e){return null===e},Gi=Jt,
Fi=function(e){return"string"==typeof e||!Gi(e)&&Di(e)&&"[object String]"==Ri(e)},Li=Ri=Ii=Aa,Bi=Di=Ni=ka,$i=function(e
){return"number"==typeof e||Bi(e)&&"[object Number]"==Li(e)},zi=yu,Ui=function(t,e){return zi(e,function(e){return t[e]}
)},Wi=P,Vi=function(e){return null==e?[]:Ui(e,Wi(e))},qi=f,Hi=function(e,t){return qi(e,t)},Zi=Za,Ji=Ai=e,Yi=function(e
){return(Ai(e)?ki:Ti)(e)},Qi=function(e){var t,r;return e=Xi(e),t=(r=Ji(e)?Yi(e):void 0)?r[0]:e.charAt(0),r=r?Zi(r,1
).join(""):e.slice(1),t.toUpperCase()+r},u=function(e){return Qi(Ki(e).toLowerCase())},Qs={"À":"A","Á":"A","Â":"A",
"Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E",
"Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N",
"ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U",
"Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss",
"Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D",
"Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G",
"Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I",
"ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L",
"ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O",
"Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s",
"ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U",
"ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z",
"ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},ea=function(e){return null==Qs?void 0:Qs[e]},
ta=Ki=Xi=s,ra=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,na=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"g"),wu=function(e){return(e=ta(e))&&e.replace(ra,ea).replace(na,"")},oa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
j=function(e){return e.match(oa)||[]},ia=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
g=function(e){return ia.test(e)},
C="[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]"
,i="[A-Z\\xc0-\\xd6\\xd8-\\xde]",
T="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",I="(?:"+[
"[\\u2700-\\u27bf]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+T,aa=RegExp([
i+"?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[C,i,"$"].join("|")+")",
"(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[
C,
i+"(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])"
,"$"].join("|")+")",
i+"?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?"
,i+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
"\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",I].join("|"),"g"),sa=j,ua=g,ca=s,la=function(e){
return e.match(aa)||[]},fa=ss,da=wu,pa=function(e,t,r){return e=ca(e),void 0===(t=r?void 0:t)?(ua(e)?la:sa)(e):e.match(t
)||[]},ha=RegExp("['’]","g"),ga=u,Ks=function(e,t,r){return t=t.toLowerCase(),e+(r?ga(t):t)},ma=function(e){return fa(
pa(da(e).replace(ha,"")),Ks,"")},ba={NPM:"npm",YARN:"yarn",HGM:"hgm"};class ku{constructor(){n(this,
"_preferredPackageSystem",void 0),n(this,"_gitOrganization",void 0),n(this,"_organizationName",void 0),n(this,
"_organizationEmail",void 0),n(this,"_pkgDir",void 0),n(this,"_buildDir",void 0),n(this,"_sourceDir",void 0),n(this,
"_templatesDir",void 0),n(this,"_gitCommitMessage",void 0),n(this,"_gitBranch",void 0),n(this,"_mainName",void 0),n(this
,"_distFile",void 0),n(this,"_mainSrcFileTemplate",void 0),n(this,"_mainSrcFileName",void 0),n(this,"_files",void 0),n(
this,"_gitSubmodules",void 0),n(this,"_packages",void 0),n(this,"_packageJsonModifier",void 0)}
static createFromDataObject(e){var t;const r=new ku;return r.setPreferredPackageSystem(te(null!=(
t=null==e?void 0:e.preferredPackageSystem)?t:"npm")),r.setGitOrganization(null!=(t=null==e?void 0:e.gitOrganization
)?t:"@heusalagroup"),r.setOrganizationName(null!=(t=null==e?void 0:e.organizationName)?t:"Heusala Group"),
r.setOrganizationEmail(null!=(t=null==e?void 0:e.organizationEmail)?t:"info@heusalagroup.fi"),r.setSourceDir(null!=(
t=null==e?void 0:e.sourceDir)?t:"./src"),r.setBuildDir(null!=(t=null==e?void 0:e.buildDir)?t:"./dist"),
r.setMainSourceFileTemplate(null!=(t=null==e?void 0:e.mainSourceFileTemplate)?t:"./src/run.ts"),r.setFiles(null!=(
t=null==e?void 0:e.files)?t:[]),r.setGitSubmodules(null!=(t=null==e?void 0:e.gitSubmodules)?t:[]),r.setPackages(null!=(
t=null==e?void 0:e.packages)?t:[]),r.setGitCommitMessage(null!=(t=null==e?void 0:e.gitCommitMessage)?t:"first commit"),
r.setGitBranch(null!=(t=null==e?void 0:e.gitBranch)?t:"main"),r}toString(){return"CreatePackageConfig"}toJSON(){return{}
}setPreferredPackageSystem(e){return this._preferredPackageSystem=e,this}getPreferredPackageSystem(){var e;
return null!=(e=this._preferredPackageSystem)?e:ba.NPM}setGitOrganization(e){return this._gitOrganization=e,this}
getGitOrganization(){return this._gitOrganization}setOrganizationName(e){return this._organizationName=e,this}
getOrganizationName(){return this._organizationName}setOrganizationEmail(e){return this._organizationEmail=e,this}
getOrganizationEmail(){return this._organizationEmail}setPackageDirectory(e){return this._pkgDir=e,this}
getPackageDirectory(){return this._pkgDir}setBuildDir(e){return this._buildDir=e,this}getBuildDir(){
return this._buildDir}setSourceDir(e){return this._sourceDir=e,this}getSourceDir(){return this._sourceDir}
setTemplatesDirectory(e){return this._templatesDir=e,this}getTemplatesDirectory(){return this._templatesDir}
setGitCommitMessage(e){return this._gitCommitMessage=e,this}getGitCommitMessage(){return this._gitCommitMessage}
setGitBranch(e){return this._gitBranch=e,this}getGitBranch(){return this._gitBranch}setMainName(e){
return this._mainName=e,this}_getDefaultMainName(){var e=this.getPackageDirectory();if(e)return k.basename(e);
throw new TypeError("Package directory or main name must be set first")}getMainName(){var e;return null!=(
e=this._mainName)?e:this._getDefaultMainName()}setDistFile(e){return this._distFile=e,this}getDistFile(){var e;
return null!=(e=this._distFile)?e:k.join(this.getBuildDir(),this.getMainName()+".js")}setMainSourceFileName(e){
return this._mainSrcFileName=e,this}getMainSourceFileName(){var e;return null!=(e=this._mainSrcFileName)?e:k.join(
this.getSourceDir(),this.getMainName()+".ts")}setMainSourceFileTemplate(e){return this._mainSrcFileTemplate=e,this}
getMainSourceFileTemplate(){var e;return null!=(e=this._mainSrcFileTemplate)?e:k.join(this.getSourceDir(),
this.getMainName()+".ts")}setFiles(e){return this._files=co(e,e=>e),this}getFiles(){return this._files}setPackages(e){
return this._packages=co(e,e=>e),this}getPackages(){return this._packages}setGitSubmodules(e){
return this._gitSubmodules=co(e,e=>e),this}getGitSubmodules(){return this._gitSubmodules}setPackageJsonModifier(e){
return this._packageJsonModifier=e,this}getPackageJsonModifier(){return this._packageJsonModifier}}
const Iu=Au.createLogger("SyncFileUtils");class R{static isDirectory(e){return _u.default.statSync(e).isDirectory()}
static directoryExits(e){return _u.default.existsSync(e)&&_u.default.statSync(e).isDirectory()}static mkdirp(e){var t,r;
Iu.debug("mkdirp: Creating directory: ",e);const n=[];for(;!R.directoryExits(e)&&(n.push(e),e!==(t=xu.default.dirname(e)
));)e=t;for(;1<=n.length;){if(!(r=n.pop()))throw new TypeError("No dir");Iu.debug("mkdirp: Creating missing directory: "
,r),_u.default.mkdirSync(r)}}static readTextFile(e){return _u.default.readFileSync(e,"utf8")}static fileExists(e){
return _u.default.existsSync(e)}static readJsonFile(e){return JSON.parse(R.readTextFile(e))}static writeTextFile(e,t){
_u.default.writeFileSync(e,t,{encoding:"utf8"})}static writeJsonFile(e,t){t=JSON.stringify(t,null,2);R.writeTextFile(e,t
)}static copyTextFileWithReplacements(e,t,r){let n=R.readTextFile(e);X(r).forEach(e=>{var t=r[e];n=n.replace(e,t)}),
R.writeTextFile(t,n)}static copyTextFileWithReplacementsIfMissing(e,t,r){R.fileExists(t)?Iu.warn(
"Warning! File already exists: ",t):R.copyTextFileWithReplacements(e,t,r)}}va={},ya={},m={exports:{}},N={exports:{}},
b=function(e){try{return e()}catch(e){}},(A=function(r,n,o){wa.stat(r,function(e,t){o(e,!e&&re(t,r,n))})}
).sync=function(e,t){return re(wa.statSync(e),e,t)},wa=_u.default,(d=function(e,r,n){xa.stat(e,function(e,t){n(e,!e&&ne(
t,r))})}).sync=function(e,t){return ne(xa.statSync(e),t)},xa=_u.default,
_a="win32"===process.platform||o.TESTING_WINDOWS?A:d,(eu=function e(t,o,r){if("function"==typeof o&&(r=o,o={}),!r){if(
"function"!=typeof Promise)throw new TypeError("callback not provided");return new Promise(function(r,n){e(t,o||{},
function(e,t){e?n(e):r(t)})})}_a(t,o||{},function(e,t){e&&("EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})
}).sync=function(e,t){try{return _a.sync(e,t||{})}catch(e){if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}},(
c=function(n,u,c){var e,o,l,f,d;"function"==typeof u&&(c=u,u={}),e=ie(n,u),o=e.env,l=e.ext,f=e.extExe,d=[],function e(t,
a){var r,s;return t===a?u.all&&d.length?c(null,d):c(oe(n)):('"'===(r=o[t]).charAt(0)&&'"'===r.slice(-1)&&(r=r.slice(1,-1
)),s=ja.join(r,n),!r&&/^\.[\\\/]/.test(n)&&(s=n.slice(0,2)+s),void function r(n,o){if(n===o)return e(t+1,a);var i=l[n];
Oa(s+i,{pathExt:f},function(e,t){if(!e&&t){if(!u.all)return c(null,s+i);d.push(s+i)}return r(n+1,o)})}(0,l.length))}(0,
o.length)}).sync=function(e,t){for(var r,n,o,i,a,s,u=(r=ie(e,t=t||{})).env,c=r.ext,l=r.extExe,f=[],d=0,
p=u.length;d<p;d++)for('"'===(n=u[d]).charAt(0)&&'"'===n.slice(-1)&&(n=n.slice(1,-1)),o=ja.join(n,e),
!n&&/^\.[\\\/]/.test(e)&&(o=e.slice(0,2)+o),i=0,a=c.length;i<a;i++){s=o+c[i];try{if(Oa.sync(s,{pathExt:l})){if(!t.all
)return s;f.push(s)}}catch(e){}}if(t.all&&f.length)return f;if(t.nothrow)return null;throw oe(e)},
Ea="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,ja=xu.default,Sa=Ea?";":":",
Oa=eu;const Nu=xu.default,Cu=c,Mu=(Is=e=>{var t=(e=e||{}).env||process.env;return"win32"!==(e.platform||process.platform
)?"PATH":Object.keys(t).find(e=>"PATH"===e.toUpperCase())||"Path"})(),Ru=(l=function(e){return ae(e)||ae(e,!0)},
/([()\][%!^"`<>&|;, *?])/g),Gu=((S={}).command=function(e){return e.replace(Ru,"^$1")},S.argument=function(e,t){
return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(Ru,"^$1"),t?e.replace(
Ru,"^$1"):e},Pa=/^#!.*/,_u.default);for(Xs=function(e){var t;let r;Buffer.alloc?r=Buffer.alloc(150):(r=new Buffer(150)
).fill(0);try{t=Gu.openSync(e,"r"),Gu.readSync(t,r,0,150,0),Gu.closeSync(t)}catch(e){}return(e=r.toString().match(Pa))?(
e=(t=e[0].replace(/#! ?/,"").split(" "))[0].split("/").pop(),t=t[1],"env"===e?t:e+(t?" "+t:"")):null},E=(O={exports:{}}
).exports,E=O.exports=p,y="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(
process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(
console,e)}:function(){},E.SEMVER_SPEC_VERSION="2.0.0",Ds=256,Fs=Number.MAX_SAFE_INTEGER||9007199254740991,w=E.re=[],(
x=E.src=[])[0]="0|[1-9]\\d*",x[1]="[0-9]+",x[2]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",x[3]="("+x[0]+")\\.("+x[0]+")\\.("+x[0]+")"
,x[4]="("+x[1]+")\\.("+x[1]+")\\.("+x[1]+")",x[5]="(?:"+x[0]+"|"+x[2]+")",x[6]="(?:"+x[1]+"|"+x[2]+")",
x[7]="(?:-("+x[5]+"(?:\\."+x[5]+")*))",x[8]="(?:-?("+x[6]+"(?:\\."+x[6]+")*))",x[9]="[0-9A-Za-z-]+",
x[10]="(?:\\+("+x[9]+"(?:\\."+x[9]+")*))",Ls=11,Bs="v?"+x[3]+x[7]+"?"+x[10]+"?",x[Ls]="^"+Bs+"$",
_="[v=\\s]*"+x[4]+x[8]+"?"+x[10]+"?",x[$s=12]="^"+_+"$",x[13]="((?:<|>)?=?)",x[14]=x[1]+"|x|X|\\*",x[15]=x[0]+"|x|X|\\*"
,x[16]="[v=\\s]*("+x[15]+")(?:\\.("+x[15]+")(?:\\.("+x[15]+")(?:"+x[7]+")?"+x[10]+"?)?)?",
x[17]="[v=\\s]*("+x[14]+")(?:\\.("+x[14]+")(?:\\.("+x[14]+")(?:"+x[8]+")?"+x[10]+"?)?)?",
x[18]="^"+x[13]+"\\s*"+x[16]+"$",x[19]="^"+x[13]+"\\s*"+x[17]+"$",
x[20]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",x[21]="(?:~>?)",
x[22]="(\\s*)"+x[21]+"\\s+",w[22]=new RegExp(x[22],"g"),x[23]="^"+x[21]+x[16]+"$",x[24]="^"+x[21]+x[17]+"$",
x[25]="(?:\\^)",x[26]="(\\s*)"+x[25]+"\\s+",w[26]=new RegExp(x[26],"g"),x[27]="^"+x[25]+x[16]+"$",
x[28]="^"+x[25]+x[17]+"$",x[29]="^"+x[13]+"\\s*("+_+")$|^$",x[30]="^"+x[13]+"\\s*("+Bs+")$|^$",
x[31]="(\\s*)"+x[13]+"\\s*("+_+"|"+x[16]+")",w[31]=new RegExp(x[31],"g"),
x[32]="^\\s*("+x[16]+")\\s+-\\s+("+x[16]+")\\s*$",x[33]="^\\s*("+x[17]+")\\s+-\\s+("+x[17]+")\\s*$",
x[34]="(<|>)?=?\\s*\\*",zs=0;zs<35;zs++)y(zs,x[zs]),w[zs]||(w[zs]=new RegExp(x[zs]));E.parse=Ee,E.valid=function(e,t){
e=Ee(e,t);return e?e.version:null},E.clean=function(e,t){e=Ee(e.trim().replace(/^[=v]+/,""),t);return e?e.version:null},
(E.SemVer=p).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,
this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){
return this.version},p.prototype.compare=function(e){return y("SemVer.compare",this.version,this.options,e),
e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){
return e instanceof p||(e=new p(e,this.options)),je(this.major,e.major)||je(this.minor,e.minor)||je(this.patch,e.patch)}
,p.prototype.comparePre=function(e){var t,r,n;if(e instanceof p||(e=new p(e,this.options)),
this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(
!this.prerelease.length&&!e.prerelease.length)return 0;t=0;do{if(r=this.prerelease[t],n=e.prerelease[t],y(
"prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n
)return je(r,n)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0
,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,
this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":
0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];
break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;
case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length
)this.prerelease=[0];else{for(var r=this.prerelease.length;0<=--r;)"number"==typeof this.prerelease[r]&&(
this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]!==t||isNaN(this.prerelease[1]))&&(
this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),
this.raw=this.version,this},E.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n
).version}catch(e){return null}},E.diff=function(e,t){var r,n,o,i,a;if(Te(e,t))return null;for(a in r=Ee(e),n=Ee(t),o=""
,(r.prerelease.length||n.prerelease.length)&&(o="pre",i="prerelease"),r)if(("major"===a||"minor"===a||"patch"===a
)&&r[a]!==n[a])return o+a;return i},E.compareIdentifiers=je,Us=/^[0-9]+$/,E.rcompareIdentifiers=function(e,t){return je(
t,e)},E.major=function(e,t){return new p(e,t).major},E.minor=function(e,t){return new p(e,t).minor},E.patch=function(e,t
){return new p(e,t).patch},E.compare=Se,E.compareLoose=function(e,t){return Se(e,t,!0)},E.rcompare=function(e,t,r){
return Se(t,e,r)},E.sort=function(e,r){return e.sort(function(e,t){return E.compare(e,t,r)})},E.rsort=function(e,r){
return e.sort(function(e,t){return E.rcompare(e,t,r)})},E.gt=Oe,E.lt=Pe,E.eq=Te,E.neq=Ae,E.gte=ke,E.lte=Ie,E.cmp=Ne,
E.Comparator=Ce,Ws={},Ce.prototype.parse=function(e){var t=this.options.loose?w[29]:w[30],t=e.match(t);if(!t
)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),
t[2]?this.semver=new p(t[2],this.options.loose):this.semver=Ws},Ce.prototype.toString=function(){return this.value},
Ce.prototype.test=function(e){return y("Comparator.test",e,this.options.loose),this.semver===Ws||Ne(
e="string"==typeof e?new p(e,this.options):e,this.operator,this.semver,this.options)},Ce.prototype.intersects=function(e
,t){var r,n,o,i,a;if(e instanceof Ce)return t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),
""===this.operator?(r=new h(e.value,t),Ge(this.value,r,t)):""===e.operator?(r=new h(this.value,t),Ge(e.semver,r,t)):(
r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!(
"<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version
,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=Ne(this.semver,"<",e.semver,t
)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),t=Ne(this.semver,">",e.semver,t
)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator),r||n||o&&i||a||t);
throw new TypeError("a Comparator is required")},(E.Range=h).prototype.format=function(){return this.range=this.set.map(
function(e){return e.join(" ").trim()}).join("||").trim(),this.range},h.prototype.toString=function(){return this.range}
,h.prototype.parseRange=function(e){var t,r,n=this.options.loose;return e=e.trim(),r=n?w[33]:w[32],e=e.replace(r,Re),y(
"hyphen replace",e),e=e.replace(w[31],"$1$2$3"),y("comparator trim",e,w[31]),e=(e=(e=e.replace(w[22],"$1~")).replace(
w[26],"$1^")).split(/\s+/).join(" "),t=n?w[29]:w[30],r=e.split(" ").map(function(e){return t=this.options,y("comp",e=e,t
),r=t,e=e.trim().split(/\s+/).map(function(e){return y("caret",i=e,e=r),e=e.loose?w[28]:w[27],i.replace(e,function(e,t,r
,n,o){return y("caret",i,e,t,r,n,o),e=Me(t)?"":Me(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Me(n
)?"0"===t?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":">="+t+"."+r+".0 <"+(+t+1)+".0.0":o?(y("replaceCaret pr",o),
"0"===t?"0"===r?">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+r+"."+(+n+1):">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1
)+".0":">="+t+"."+r+"."+n+"-"+o+" <"+(+t+1)+".0.0"):(y("no pr"),"0"===t?"0"===r?">="+t+"."+r+"."+n+" <"+t+"."+r+"."+(
+n+1):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0":">="+t+"."+r+"."+n+" <"+(+t+1)+".0.0"),y("caret return",e),e});var i}
).join(" "),y("caret",e),n=t,e=e.trim().split(/\s+/).map(function(e){return i=e,e=n.loose?w[24]:w[23],i.replace(e,
function(e,t,r,n,o){return y("tilde",i,e,t,r,n,o),e=Me(t)?"":Me(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Me(n
)?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":o?(y("replaceTilde pr",o),">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1)+".0"
):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0",y("tilde return",e),e});var i}).join(" "),y("tildes",e),y("replaceXRanges",
i=e,o=t),e=i.split(/\s+/).map(function(e){return t=o,u=(u=e).trim(),e=t.loose?w[19]:w[18],u.replace(e,function(e,t,r,n,o
,i){var a,s;return y("xRange",u,e,t,r,n,o,i),s=(a=(i=Me(r))||Me(n))||Me(o),"="===t&&s&&(t=""),
i?e=">"===t||"<"===t?"<0.0.0":"*":t&&s?(a&&(n=0),o=0,">"===t?(t=">=",o=a?(r=+r+1,n=0):(n=+n+1,0)):"<="===t&&(t="<",
a?r=+r+1:n=+n+1),e=t+r+"."+n+"."+o):a?e=">="+r+".0.0 <"+(+r+1)+".0.0":s&&(e=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0"),y(
"xRange return",e),e});var u,t}).join(" "),y("xrange",e),y("replaceStars",i=e,t),e=i.trim().replace(w[34],""),y("stars",
e),e;var t,r,n,o,i},this).join(" ").split(/\s+/),(r=this.options.loose?r.filter(function(e){return!!e.match(t)}):r).map(
function(e){return new Ce(e,this.options)},this)},h.prototype.intersects=function(r,n){if(r instanceof h
)return this.set.some(function(e){return e.every(function(t){return r.set.some(function(e){return e.every(function(e){
return t.intersects(e,n)})})})});throw new TypeError("a Range is required")},E.toComparators=function(e,t){return new h(
e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},
h.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new p(e,this.options));for(
var t=0;t<this.set.length;t++)if(function(e,t,r){for(var n,o=0;o<e.length;o++)if(!e[o].test(t))return;if(
!t.prerelease.length||r.includePrerelease)return 1;for(o=0;o<e.length;o++)if(y(e[o].semver),
e[o].semver!==Ws&&0<e[o].semver.prerelease.length&&(n=e[o].semver).major===t.major&&n.minor===t.minor&&n.patch===t.patch
)return 1}(this.set[t],e,this.options))return!0;return!1},E.satisfies=Ge,E.maxSatisfying=function(e,t,r){var n,o=null,
i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(function(e){!n.test(e)||o&&-1!==i.compare(e)||(i=new p(o=e
,r))}),o},E.minSatisfying=function(e,t,r){var n,o=null,i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(
function(e){!n.test(e)||o&&1!==i.compare(e)||(i=new p(o=e,r))}),o},E.minVersion=function(e,t){var r,n;if(e=new h(e,t),
r=new p("0.0.0"),e.test(r))return r;if(r=new p("0.0.0-0"),e.test(r))return r;for(r=null,n=0;n<e.set.length;++n
)e.set[n].forEach(function(e){var t=new p(e.semver.version);switch(e.operator){case">":
0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!Oe(r,t)||(r=t);break;
case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}});return r&&e.test(r)?r:null},
E.validRange=function(e,t){try{return new h(e,t).range||"*"}catch(e){return null}},E.ltr=function(e,t,r){return De(e,t,
"<",r)},E.gtr=function(e,t,r){return De(e,t,">",r)},E.outside=De,E.prerelease=function(e,t){e=Ee(e,t);
return e&&e.prerelease.length?e.prerelease:null},E.intersects=function(e,t,r){return e=new h(e,r),t=new h(t,r),
e.intersects(t)},E.coerce=function(e){if(e instanceof p)return e;if("string"!=typeof e)return null;e=e.match(w[20]);
return null==e?null:Ee(e[1]+"."+(e[2]||"0")+"."+(e[3]||"0"))};const Du=xu.default,Fu=b,Lu=l,Bu=S,$u=Xs,zu=O.exports,
Uu="win32"===process.platform,Wu=/\.(?:com|exe)$/i,Vu=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,qu=Fu(()=>zu.satisfies(
process.version,"^4.8.0 || ^5.7.0 || >= 6.0.0",!0))||!1,Hu="win32"===process.platform,Zu=lu.default,Ju={
hookChildProcess:function(r,n){if(Hu){const o=r.emit;r.emit=function(e,t){if("exit"===e){e=ue(t,n);if(e)return o.call(r,
"error",e)}return o.apply(r,arguments)}}},verifyENOENT:ue,verifyENOENTSync:function(e,t){return Hu&&1===e&&!t.file?se(
t.original,"spawnSync"):null},notFoundError:se};N.exports=ce,N.exports.spawn=ce,N.exports.sync=function(e,t,r){e=We(e,t,
r);const n=Zu.spawnSync(e.command,e.args,e.options);return n.error=n.error||Ju.verifyENOENTSync(n.status,e),n},
N.exports._parse=We,N.exports._enoent=Ju,Ta=function(e){var t="string"==typeof e?"\n":"\n".charCodeAt(),
r="string"==typeof e?"\r":"\r".charCodeAt();return(e=e[e.length-1]===t?e.slice(0,e.length-1):e)[e.length-1]===r?e.slice(
0,e.length-1):e};{Vs=Aa={exports:{}};const il=xu.default,al=Is;Vs.exports=e=>{e=Object.assign({cwd:process.cwd(),
path:process.env[al()]},e);let t,r=il.resolve(e.cwd);const n=[];for(;t!==r;)n.push(il.join(r,"node_modules/.bin")),t=r,
r=il.resolve(r,"..");return n.push(il.dirname(process.execPath)),n.concat(e.path).join(il.delimiter)},
Vs.exports.env=e=>{e=Object.assign({env:process.env},e);const t=Object.assign({},e.env);var r=al({env:t});
return e.path=t[r],t[r]=Vs.exports(e),t}}(Ia=(ka={exports:{}}).exports=function(e){
return null!==e&&"object"==typeof e&&"function"==typeof e.pipe}).writable=function(e){return Ia(e
)&&!1!==e.writable&&"function"==typeof e._write&&"object"==typeof e._writableState},Ia.readable=function(e){return Ia(e
)&&!1!==e.readable&&"function"==typeof e._read&&"object"==typeof e._readableState},Ia.duplex=function(e){
return Ia.writable(e)&&Ia.readable(e)},Ia.transform=function(e){return Ia.duplex(e
)&&"function"==typeof e._transform&&"object"==typeof e._transformState},yu={exports:{}},(P={exports:{}}).exports=(
f=function e(o,t){function r(){for(var t,r,e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];
return t=o.apply(this,e),r=e[e.length-1],"function"==typeof t&&t!==r&&Object.keys(r).forEach(function(e){t[e]=r[e]}),t}
if(o&&t)return e(o)(t);if("function"!=typeof o)throw new TypeError("need wrapper function");return Object.keys(o
).forEach(function(e){r[e]=o[e]}),r})(le),P.exports.strict=f(fe),le.proto=le(function(){Object.defineProperty(
Function.prototype,"once",{value:function(){return le(this)},configurable:!0}),Object.defineProperty(Function.prototype,
"onceStrict",{value:function(){return fe(this)},configurable:!0})}),Na=P.exports,Ca=function(){},Ma=function(e){
return e.setHeader&&"function"==typeof e.abort},Ra=function(e){return e.stdio&&Array.isArray(e.stdio
)&&3===e.stdio.length},Da=P.exports,Fa=Ga=function(t,e,r){var n,o,i,a,s,u,c,l,f,d,p,h,g;return"function"==typeof e?Ga(t,
null,e):(e=e||{},r=Na(r||Ca),n=t._writableState,o=t._readableState,i=e.readable||!1!==e.readable&&t.readable,
a=e.writable||!1!==e.writable&&t.writable,s=!1,u=function(){t.writable||c()},c=function(){a=!1,i||r.call(t)},l=function(
){i=!1,a||r.call(t)},f=function(e){r.call(t,e?new Error("exited with error code: "+e):null)},d=function(e){r.call(t,e)},
p=function(){process.nextTick(h)},h=function(){if(!s)return(!i||o&&o.ended&&!o.destroyed)&&(!a||n&&n.ended&&!n.destroyed
)?void 0:r.call(t,new Error("premature close"))},g=function(){t.req.on("finish",c)},Ma(t)?(t.on("complete",c),t.on(
"abort",p),t.req?g():t.on("request",g)):a&&!n&&(t.on("end",u),t.on("close",u)),Ra(t)&&t.on("exit",f),t.on("end",l),t.on(
"finish",c),!1!==e.error&&t.on("error",d),t.on("close",p),function(){s=!0,t.removeListener("complete",c),
t.removeListener("abort",p),t.removeListener("request",g),t.req&&t.req.removeListener("finish",c),t.removeListener("end"
,u),t.removeListener("close",u),t.removeListener("finish",c),t.removeListener("exit",f),t.removeListener("end",l),
t.removeListener("error",d),t.removeListener("close",p)})},La=_u.default,Ba=function(){},$a=/^v?\.0/.test(
process.version),za=function(e){return"function"==typeof e},Ua=function(e){return!!$a&&!!La&&(e instanceof(
La.ReadStream||Ba)||e instanceof(La.WriteStream||Ba))&&za(e.close)},Wa=function(e){return e.setHeader&&za(e.abort)},
Va=function(t,e,r,n){var o,i;return n=Da(n),o=!1,t.on("close",function(){o=!0}),Fa(t,{readable:e,writable:r},function(e
){if(e)return n(e);o=!0,n()}),i=!1,function(e){if(!o&&!i)return i=!0,Ua(t)?t.close(Ba):Wa(t)?t.abort():za(t.destroy
)?t.destroy():void n(e||new Error("stream was destroyed"))}},qa=function(e){e()},Ha=function(e,t){return e.pipe(t)};
const Yu=fu.default.PassThrough;class Xu extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}yu.exports=de,yu.exports.buffer=(e,t)=>de(e,Object.assign({},t,{encoding:"buffer"})),
yu.exports.array=(e,t)=>de(e,Object.assign({},t,{array:!0})),yu.exports.MaxBufferError=Xu,Za=(e,t)=>(t=t||(()=>{}),
e.then(e=>new Promise(e=>{e(t())}).then(()=>e),e=>new Promise(e=>{e(t())}).then(()=>{throw e}))),e={exports:{}},(C=T={
exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&C.exports.push(
"SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),
"linux"===process.platform&&C.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),Fe(r=o.process)?(
Ja=du.default,Ya=T.exports,Xa=/^win/i.test(r.platform),"function"!=typeof(i=pu.default)&&(i=i.EventEmitter),
r.__signal_exit_emitter__?a=r.__signal_exit_emitter__:((a=r.__signal_exit_emitter__=new i).count=0,a.emitted={}),
a.infinite||(a.setMaxListeners(1/0),a.infinite=!0),e.exports=function(e,t){var r;return Fe(o.process)?(Ja.equal(typeof e
,"function","a callback must be provided for exit handler"),!1===ts&&rs(),r="exit",t&&t.alwaysLast&&(r="afterexit"),
t=function(){a.removeListener(r,e),0===a.listeners("exit").length&&0===a.listeners("afterexit").length&&Ka()},a.on(r,e),
t):function(){}},Ka=function(){ts&&Fe(o.process)&&(ts=!1,Ya.forEach(function(e){try{r.removeListener(e,es[e])}catch(e){}
}),r.emit=is,r.reallyExit=ns,--a.count)},e.exports.unload=Ka,Qa=function(e,t,r){a.emitted[e]||(a.emitted[e]=!0,a.emit(e,
t,r))},es={},Ya.forEach(function(e){es[e]=function(){Fe(o.process)&&r.listeners(e).length===a.count&&(Ka(),Qa("exit",
null,e),Qa("afterexit",null,e),Xa&&"SIGHUP"===e&&(e="SIGINT"),r.kill(r.pid,e))}}),e.exports.signals=function(){return Ya
},ts=!1,rs=function(){!ts&&Fe(o.process)&&(ts=!0,a.count+=1,Ya=Ya.filter(function(e){try{return r.on(e,es[e]),!0}catch(e
){return!1}}),r.emit=as,r.reallyExit=os)},e.exports.load=rs,ns=r.reallyExit,os=function(e){Fe(o.process)&&(
r.exitCode=e||0,Qa("exit",r.exitCode,null),Qa("afterexit",r.exitCode,null),ns.call(r,r.exitCode))},is=r.emit,
as=function(e,t){return"exit"===e&&Fe(o.process)?(void 0!==t&&(r.exitCode=t),e=is.apply(this,arguments),Qa("exit",
r.exitCode,null),Qa("afterexit",r.exitCode,null),e):is.apply(this,arguments)}):e.exports=function(){return function(){}}
,Js=e.exports,I={exports:{}},j=hu.default;let Ku;if("function"==typeof j.getSystemErrorName
)I.exports=j.getSystemErrorName;else{try{if("function"!=typeof(Ku=process.binding("uv")).errname)throw new TypeError(
"uv.errname is not a function")}catch(e){console.error("execa/lib/errname: unable to establish process.binding('uv')",e)
,Ku=null}I.exports=e=>pe(Ku,e)}I.exports.__test__=pe;const Qu=["stdin","stdout","stderr"];{function ec(e,t,r){let n;
return(r=Object.assign({extendEnv:!0,env:{}},r)).extendEnv&&(r.env=Object.assign({},process.env,r.env)),
n=!0===r.__winShell?(delete r.__winShell,{command:e,args:t,options:r,file:e,original:{cmd:e,args:t}}):cl._parse(e,t,r),(
r=Object.assign({maxBuffer:1e7,buffer:!0,stripEof:!0,preferLocal:!0,localDir:n.options.cwd||process.cwd(),
encoding:"utf8",reject:!0,cleanup:!0},n.options)).stdio=(r=>{var t,n,e;if(!r)return null;if(r.stdio&&(t=r,Qu.some(
e=>Boolean(t[e]))))throw new Error("It's not possible to provide `stdio` in combination with one of "+Qu.map(
e=>`\`${e}\``).join(", "));if("string"==typeof r.stdio)return r.stdio;if(n=r.stdio||[],!Array.isArray(n)
)throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);const o=[];
e=Math.max(n.length,Qu.length);for(let t=0;t<e;t++){let e=null;void 0!==n[t]?e=n[t]:void 0!==r[Qu[t]]&&(e=r[Qu[t]]),
o[t]=e}return o})(r),r.preferLocal&&(r.env=fl.env(Object.assign({},r,{cwd:r.localDir}))),r.detached&&(r.cleanup=!1),
"win32"===process.platform&&"cmd.exe"===sl.basename(n.command)&&n.args.unshift("/q"),{cmd:n.command,args:n.args,opts:r,
parsed:n}}function tc(e,t){return t&&e.stripEof?ll(t):t}function rc(e,t,r){let n="/bin/sh",o=["-c",t];
return r=Object.assign({},r),"win32"===process.platform&&(r.__winShell=!0,n=process.env.comspec||"cmd.exe",o=["/s","/c",
`"${t}"`],r.windowsVerbatimArguments=!0),r.shell&&(n=r.shell,delete r.shell),e(n,o,r)}function nc(r,n,{encoding:e,
buffer:t,maxBuffer:o}){if(!r[n])return null;let i;return(i=t?e?pl(r[n],{encoding:e,maxBuffer:o}):pl.buffer(r[n],{
maxBuffer:o}):new Promise((e,t)=>{r[n].once("end",e).once("error",t)})).catch(e=>{throw e.stream=n,
e.message=n+" "+e.message,e})}function oc(t,e){var{stdout:r,stderr:n}=t;let o=t.error;var{code:t,signal:i}=t,{parsed:a,
joinedCmd:s}=e,e=e.timedOut||!1;if(!o){let e="";Array.isArray(a.opts.stdio)?("inherit"!==a.opts.stdio[2]&&(
e+=0<e.length?n:`
`+n),"inherit"!==a.opts.stdio[1]&&(e+=`
`+r)):"inherit"!==a.opts.stdio&&(e=`
`+n+r),(o=new Error("Command failed: "+s+e)).code=t<0?ml(t):t}return o.stdout=r,o.stderr=n,o.failed=!0,o.signal=i||null,
o.cmd=s,o.timedOut=e,o}function ic(e,t){let r=e;return Array.isArray(t)&&0<t.length&&(r+=" "+t.join(" ")),r}Ys=m;
const sl=xu.default,ul=lu.default,cl=N.exports,ll=Ta,fl=Aa.exports,dl=ka.exports,pl=yu.exports,hl=Za,gl=e.exports,
ml=I.exports;Ys.exports=(e,t,r)=>{function n(){c.stdout&&c.stdout.destroy(),c.stderr&&c.stderr.destroy()}const o=ec(e,t,
r),{encoding:i,buffer:a,maxBuffer:s}=o.opts,u=ic(e,t);let c;try{c=ul.spawn(o.cmd,o.args,o.opts)}catch(e){
return Promise.reject(e)}let l,f=(o.opts.cleanup&&(l=gl(()=>{c.kill()})),null),d=!1;const p=()=>{f&&(clearTimeout(f),
f=null),l&&l()},h=(0<o.opts.timeout&&(f=setTimeout(()=>{f=null,d=!0,c.kill(o.opts.killSignal)},o.opts.timeout)),
new Promise(r=>{c.on("exit",(e,t)=>{p(),r({code:e,signal:t})}),c.on("error",e=>{p(),r({error:e})}),c.stdin&&c.stdin.on(
"error",e=>{p(),r({error:e})})})),g=()=>hl(Promise.all([h,nc(c,"stdout",{encoding:i,buffer:a,maxBuffer:s}),nc(c,"stderr"
,{encoding:i,buffer:a,maxBuffer:s})]).then(e=>{const t=e[0];if(t.stdout=e[1],t.stderr=e[2],
t.error||0!==t.code||null!==t.signal){const r=oc(t,{joinedCmd:u,parsed:o,timedOut:d});if(r.killed=r.killed||c.killed,
o.opts.reject)throw r;return r}return{stdout:tc(o.opts,t.stdout),stderr:tc(o.opts,t.stderr),code:0,failed:!1,killed:!1,
signal:null,cmd:u,timedOut:!1}}),n);return cl._enoent.hookChildProcess(c,o.parsed),r=c,null!=(e=o.opts.input)&&(dl(e
)?e.pipe(r.stdin):r.stdin.end(e)),c.then=(e,t)=>g().then(e,t),c.catch=e=>g().catch(e),c},Ys.exports.stdout=(...e
)=>Ys.exports(...e).then(e=>e.stdout),Ys.exports.stderr=(...e)=>Ys.exports(...e).then(e=>e.stderr),Ys.exports.shell=(e,t
)=>rc(Ys.exports,e,t),Ys.exports.sync=(e,t,r)=>{r=ec(e,t,r),e=ic(e,t);if(dl(r.opts.input))throw new TypeError(
"The `input` option cannot be a stream in sync mode");const n=ul.spawnSync(r.cmd,r.args,r.opts);if(n.code=n.status,
n.error||0!==n.status||null!==n.signal){if(t=oc(n,{joinedCmd:e,parsed:r}),r.opts.reject)throw t;return t}return{
stdout:tc(r.opts,n.stdout),stderr:tc(r.opts,n.stderr),code:0,failed:!1,signal:null,cmd:e,timedOut:!1}},
Ys.exports.shellSync=(e,t)=>rc(Ys.exports.sync,e,t)}g={},Object.defineProperty(g,"__esModule",{value:!0}),
g.ValidPackageFlags=new Set(["dev","exact","noSave","bundle","verbose"]),g.ValidProjectInstallFlags=new Set(["dryRun",
"verbose"]),g.defaultInstallConfig={dev:!1,prefer:null,exact:!1,noSave:!1,bundle:!1,verbose:!1,global:!1,stdio:"pipe",
cwd:process.cwd()},s={},ss=o&&o.__extends||(qs=function(e,t){return(qs=Object.setPrototypeOf||{__proto__:[]
}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},
function(e,t){function r(){this.constructor=e}qs(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,
new r)}),Object.defineProperty(s,"__esModule",{value:!0}),s.getPackageList=function(e){return Array.isArray(e)?e.filter(
function(e){return"string"==typeof e}):Object.entries(e).filter(function(e){var t=e[0],e=e[1];
return"string"==typeof t&&"string"==typeof e||void 0===e}).map(function(e){var t=e[0],e=e[1];return e?t+"@"+e:t})},
s.getExecaConfig=function(e){return{stdio:e.stdio,cwd:e.cwd}},ss(Le,Hs=Error),s.UnreachableCaseError=Le,wu={},u={},
Object.defineProperty(u,"__esModule",{value:!0}),us=g,u.getFlagsToSet=function(e){return Object.entries(e).filter(
function(e){var t=e[0];return!!e[1]&&us.ValidPackageFlags.has(t)}).map(function(e){return e[0]})},Object.defineProperty(
wu,"__esModule",{value:!0}),cs=u,ls=s,wu.constructNpmArguments=function(e,t){var r=cs.getFlagsToSet(t),n=t.global?["-g"
]:[],o=["install"].concat(n,e),i=[];return r.forEach(function(e){switch(e){case"dev":t.global?i.push(e):o.push(
"--save-dev");break;case"exact":o.push("--save-exact");break;case"verbose":o.push("--verbose");break;case"bundle":
o.push("--save-bundle");break;case"noSave":o.push("--no-save");break;default:throw new ls.UnreachableCaseError(e)}}),{
args:o,ignoredFlags:i}},wu.npmProjectInstallArgs=["install"],A={},d={},fs=o&&o.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
ds=o&&o.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},c=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
,Object.defineProperty(d,"__esModule",{value:!0}),ps=c(m.exports),hs=_u.default,gs=c(xu.default),Bs=hu.default,
ms=Bs.promisify(hs.access),d.isManagerInstalled=function(t){return fs(this,void 0,void 0,function(){return ds(this,
function(e){switch(e.label){case 0:return[4,ps.default(t,["--version"])];case 1:return[2,!e.sent().failed]}})})},
d.isManagerInstalledSync=function(e){return!ps.default.sync(e,["--version"]).failed},
d.getCurrentPackageManager=function(){var e=process.env.npm_config_user_agent;return e?e.startsWith("npm"
)?"npm":e.startsWith("yarn")?"yarn":null:null},d.getPackageManagerFromLockfile=function(n){return fs(this,void 0,void 0,
function(){var t,r;return ds(this,function(e){switch(e.label){case 0:t=gs.default.join(n.cwd,"package-lock.json"),
r=gs.default.join(n.cwd,"yarn.lock"),e.label=1;case 1:return e.trys.push([1,3,,8]),[4,ms(t)];case 2:return e.sent(),[2,
"npm"];case 3:e.sent(),e.label=4;case 4:return e.trys.push([4,6,,7]),[4,ms(r)];case 5:return e.sent(),[2,"yarn"];case 6:
return e.sent(),[2,null];case 7:return[3,8];case 8:return[2]}})})},d.getPackageManagerFromLockfileSync=function(t){
var e=gs.default.join(t.cwd,"package-lock.json"),t=gs.default.join(t.cwd,"yarn.lock");try{return hs.accessSync(e),"npm"
}catch(e){try{return hs.accessSync(t),"yarn"}catch(e){return null}}},bs=o&&o.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
vs=o&&o.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},Object.defineProperty(A,"__esModule",{value:!0}),ys=d,
A.getPackageManager=function(r){return bs(this,void 0,void 0,function(){var t;return vs(this,function(e){switch(e.label
){case 0:return(t=r.prefer||ys.getCurrentPackageManager())?[3,2]:[4,ys.getPackageManagerFromLockfile(r)];case 1:
t=e.sent(),e.label=2;case 2:return t=t||"npm",[4,ys.isManagerInstalled(t)];case 3:return e.sent()?[3,5]:(
t="npm"===t?"yarn":"npm",[4,ys.isManagerInstalled(t)]);case 4:if(!e.sent())throw new Error(
"No supported package manager found");e.label=5;case 5:return[2,t]}})})},A.getPackageManagerSync=function(e){var t=(
t=e.prefer||ys.getCurrentPackageManager())||ys.getPackageManagerFromLockfileSync(e);if(ys.isManagerInstalledSync(
t=t||"npm")||ys.isManagerInstalledSync(t="npm"===t?"yarn":"npm"))return t;throw new Error(
"No supported package manager found")},_={},Object.defineProperty(_,"__esModule",{value:!0}),ws=u,xs=s,
_.constructYarnArguments=function(e,t){var r=ws.getFlagsToSet(t),n=(t.global?["global"]:[]).concat(["add"],e),o=[];
return r.forEach(function(e){switch(e){case"dev":t.global?o.push(e):n.push("--dev");break;case"exact":n.push("--exact");
break;case"verbose":n.push("--verbose");break;case"bundle":case"noSave":o.push(e);break;default:
throw new xs.UnreachableCaseError(e)}}),{args:n,ignoredFlags:o}},_.yarnProjectInstallArgs=["install"],
_s=o&&o.__assign||function(){return(_s=Object.assign||function(e){for(var t,r,n=1,o=arguments.length;n<o;n++)for(
r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},
Es=o&&o.__awaiter||function(i,a,s,u){return new(s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)
}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n
)}o((u=u.apply(i,a||[])).next())})},js=o&&o.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i
)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((
s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:
case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(
),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(
3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(
s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e]
,a=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(
1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},b=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
,Object.defineProperty(ya,"__esModule",{value:!0}),Ss=b(m.exports),Os=g,Ps=s,Ts=wu,As=A,ks=_,ya.install=function(i,a){
return void 0===a&&(a=Os.defaultInstallConfig),Es(this,void 0,void 0,function(){var t,r,n,o;return js(this,function(e){
switch(e.label){case 0:return t=_s({},Os.defaultInstallConfig,a),[4,As.getPackageManager(t)];case 1:return o=e.sent(),
r=Ps.getPackageList(i),n="npm"===o?Ts.constructNpmArguments:ks.constructYarnArguments,n=n(r,t),r=n.args,n=n.ignoredFlags
,[4,Ss.default(o,r,Ps.getExecaConfig(t))];case 2:return o=e.sent(),[2,_s({},o,{ignoredFlags:n})]}})})},
ya.installSync=function(e,t){var r,n;return void 0===t&&(t=Os.defaultInstallConfig),t=_s({},Os.defaultInstallConfig,t),
n=As.getPackageManagerSync(t),e=Ps.getPackageList(e),r=(e=("npm"===n?Ts.constructNpmArguments:ks.constructYarnArguments
)(e,t)).args,e=e.ignoredFlags,n=Ss.default.sync(n,r,Ps.getExecaConfig(t)),_s({},n,{ignoredFlags:e})},
ya.projectInstall=function(o){return void 0===o&&(o=Os.defaultInstallConfig),Es(this,void 0,void 0,function(){var t,r,n;
return js(this,function(e){switch(e.label){case 0:return t=_s({},Os.defaultInstallConfig,o),[4,As.getPackageManager(t)];
case 1:return r=e.sent(),n="npm"===r?Ts.npmProjectInstallArgs:ks.yarnProjectInstallArgs,[2,Ss.default(r,n,
Ps.getExecaConfig(t))]}})})},ya.projectInstallSync=function(e){var t,r;return void 0===e&&(e=Os.defaultInstallConfig),
e=_s({},Os.defaultInstallConfig,e),r="npm"===(t=As.getPackageManagerSync(e)
)?Ts.npmProjectInstallArgs:ks.yarnProjectInstallArgs,Ss.default.sync(t,r,Ps.getExecaConfig(e))},Zs=va,
Object.defineProperty(Zs,"__esModule",{value:!0}),Be(ya),Be(A),l={exports:{}};
const ac="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,sc=xu.default,
uc=ac?";":":",cc=eu,lc=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),fc=(e,t)=>{var r=t.colon||uc,
n=e.match(/\//)||ac&&e.match(/\\/)?[""]:[...ac?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=ac?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=ac?o.split(r):[""];return ac&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},dc=((S=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=fc(i,s),l=[],f=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(lc(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=sc.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(d(t,o,0))}),d=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(f(i+1))
const n=u[a];cc(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(d(o,i,a+1))})});
return t?f(0).then(e=>t(null,e),t):f(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=fc(t,r);
const l=[];for(let e=0;e<s.length;e++){const f=s[e];n=/^".*"$/.test(f)?f.slice(1,-1):f,o=sc.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(cc.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw lc(t)},(Xs={exports:{}}
).exports=O=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},Xs.exports.default=O,xu.default),pc=S,hc=Xs.exports,gc=(
Is=function(e){return ge(e)||ge(e,!0)},/([()\][%!^"`<>&|;, *?])/g),mc=((f={}).command=function(e){return e.replace(gc,
"^$1")},f.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(gc,"^$1"),t?e.replace(gc,"^$1"):e},/^#!(.*)/),bc=_u.default,vc=(e="")=>{const t=e.match(mc);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");e=r.split("/").pop();return"env"===e?n:n?e+" "+n:e},yc=xu.default,wc=Is,
xc=f,_c="win32"===process.platform,Ec=/\.(?:com|exe)$/i,jc=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Sc="win32"===process.platform,Oc=lu.default,Pc={hookChildProcess:function(r,n){if(Sc){const o=r.emit;r.emit=function(e,t
){if("exit"===e){e=be(t,n);if(e)return o.call(r,"error",e)}return o.apply(r,arguments)}}},verifyENOENT:be,
verifyENOENTSync:function(e,t){return Sc&&1===e&&!t.file?me(t.original,"spawnSync"):null},notFoundError:me},Tc=(
l.exports=ve,l.exports.spawn=ve,l.exports.sync=function(e,t,r){e=Ve(e,t,r);const n=Oc.spawnSync(e.command,e.args,
e.options);return n.error=n.error||Pc.verifyENOENTSync(n.status,e),n},l.exports._parse=Ve,l.exports._enoent=Pc,
Ns=l.exports,["env"]),Ac=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),
kc=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Ic=new WeakMap,Nc=(t,r={})=>{function n(...e){if(
Ic.set(n,++i),1===i)o=t.apply(this,e),t=null;else if(!0===r.throw)throw new Error(
`Function \`${a}\` can only be called once`);return o}if("function"!=typeof t)throw new TypeError("Expected a function")
let o,i=0;const a=t.displayName||t.name||"<anonymous>";var e,s,u,c,l,f,d,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],
m=p.name;for(const b of Reflect.ownKeys(h))e=p,l=h,s=b,u=g,
"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return f=p,(d=Object.getPrototypeOf(h))!==Object.getPrototypeOf(f
)&&Object.setPrototypeOf(f,d),f=p,d=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,d.toString()),Object.defineProperty(m,"name",kc),Object.defineProperty(f,"toString",v(v({},Ac),{},{
value:m})),Ic.set(n,i),n},Cc=(Nc.callCount=e=>{if(Ic.has(e))return Ic.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Mc=[{name:"SIGHUP",number:1,
action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",
description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",
description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",
description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",
description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",
standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,
action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{
name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",
standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{
name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",
number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,
action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",
description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",
description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",
description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",
standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",
standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{
name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,
action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,
action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,
action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,
action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",
number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,
action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",
description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",
description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",
description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",
description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",
description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",
description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",
description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",
description:"Invalid system call",standard:"other"}],Rc=function(){const e=ze();return e.reduce(Ue,{})}();{const bl=ze()
P=Array.from({length:65},(e,t)=>{var r,n=bl,o=(r=t,void 0!==(o=(n=n).find(({name:e})=>vu.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...P)}const Gc=(
{timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:i,isCanceled:a}
)=>e?`timed out after ${t} milliseconds`:a?"was canceled":void 0!==r?"failed with "+r:void 0!==n?`was killed with ${n} (${o})`:void 0!==i?"failed with exit code "+i:"failed"
,Dc=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:f}}})=>{var d,p;i=null===i?void 0:i,d=void 0===(o=null===o?void 0:o)?void 0:Rc[o].description,
p=n&&n.code,f=`Command ${Gc({timedOut:u,timeout:f,errorCode:p,signal:o,signalDescription:d,exitCode:i,isCanceled:c}
)}: `+a;const h=(p="[object Error]"===Object.prototype.toString.call(n))?f+`
`+n.message:f;return f=[h,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=f):n=new Error(f),
n.shortMessage=h,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=d,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Fc=["stdin","stdout","stderr"],Lc=(C={exports:{}},fu.default.PassThrough),Bc=gu.default.constants,$c=(
du=fu.default,hu.default.promisify),zc=$c(du.pipeline);class Uc extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}C.exports=we,C.exports.buffer=(e,t)=>we(e,v(v({},t),{},{encoding:"buffer"})),
C.exports.array=(e,t)=>we(e,v(v({},t),{},{array:!0})),C.exports.MaxBufferError=Uc,Cs=C.exports;
const Wc=fu.default.PassThrough,Vc=(Ms=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new Wc({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),qc=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?Cs(e,{encoding:t,maxBuffer:n}):Cs.buffer(e,{maxBuffer:n})},Hc=(async()=>{})(
).constructor.prototype,Zc=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Hc,e)]),Jc=(e,t)=>{for(
const[n,o]of Zc){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,v(v({},o),{},{value:r}))}return e},Yc=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Xc=/^[\w.-]+$/,Kc=/"/g,Qc=(e,t,r)=>{
return"string"==typeof t||mu.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),
o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===o?e.slice(0,-1):e
):t:void 0===r?void 0:"";var n,o},el=Au.createLogger("initPackage"),tl=Au.createLogger("GitUtils");class rl{
static getGitDir(e){let t=e,r=t;do{if(tl.debug("getGitDir: Searching git directory from ",t),t=r,R.fileExists(k.resolve(
t,".git")))return t}while((r=k.dirname(t))!==t)}static async initGit(){var e=rl.getGitDir(process.cwd());e?tl.warn(
"Warning! Git directory already exists: ",e):(tl.debug("Creating git directory"),await rl._git(["init"]))}
static async addFiles(e){var t=H(e)?[e]:e;tl.debug("addFiles: Adding files: ",e),await rl._git(["add",...t])}
static async commit(e){tl.debug("commit with: ",e),await rl._git(["commit","-m",e])}static async renameMainBranch(e){
tl.debug("rename branch: ",e),await rl._git(["branch","-M",e])}static async addSubModule(e,t){R.fileExists(t)?tl.warn(
"Warning! Git sub module directory already exists: ",t):await rl._git(["submodule","add",e,t])}
static async setSubModuleBranch(e,t){await rl._git(["config","-f",".gitmodules",`submodule.${e}.branch`,t])}
static async initSubModule(e,t,r){var n=k.dirname(t);tl.debug("initSubModule: Creating: ",n),R.mkdirp(n),tl.debug(
"initSubModule: Adding submodule: ",e,t),await rl.addSubModule(e,t),tl.debug("initSubModule: Configuring branch for ",e,
t,": ",r),await rl.setSubModuleBranch(t,r)}static async _git(e){await xe("git",e,{stdio:"inherit"})}}
const nl=Au.createLogger("createPackage"),ol=Au.createLogger("main");(T=function(e){if(e){if(function(){switch(e){
case M.DEBUG:case M.INFO:case M.WARN:case M.ERROR:case M.NONE:return 1;default:return}}())return e;switch(e=(""+e
).toUpperCase()){case"ALL":case"DEBUG":return M.DEBUG;case"INFO":return M.INFO;case"WARN":case"WARNING":return M.WARN;
case"ERR":case"ERROR":return M.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return M.NONE;default:
return}}}(bu))&&(ol.debug("Setting log level as ",T),Au.setLogLevel(T)),async function(){var t,r,n,o,i={
preferredPackageSystem:"npm",gitOrganization:"@heusalagroup",organizationName:"Heusala Group",
organizationEmail:"info@heusalagroup.fi",sourceDir:"./src",buildDir:"./dist",templatesDir:"../templates",
mainSourceFileTemplate:"./src/project-name.ts",files:["./LICENSE","./README.md","./.gitignore","./babel.config.json",
"./rollup.config.js","./tsconfig.json","./src/constants/build.ts","./src/constants/runtime.ts","./src/main.ts"],
gitSubmodules:[{url:"git@github.com:heusalagroup/fi.hg.core.git",path:"src/fi/hg/core",branch:"main"}],packages:[
"@types/node","@types/lodash","@babel/cli","@babel/core","@babel/preset-env","@babel/preset-typescript",
"@rollup/plugin-babel","@rollup/plugin-commonjs","@rollup/plugin-inject","@rollup/plugin-json",
"@rollup/plugin-node-resolve","@rollup/plugin-replace","@rollup/plugin-typescript","typescript","tslib","ts-node",
"rollup-plugin-uglify","rollup","lodash"],gitCommitMessage:"first commit",gitBranch:"main"};
const a=ku.createFromDataObject(i);a.setTemplatesDirectory(k.resolve(__dirname,null!=(i=null===i?void 0:i.templatesDir
)?i:"../templates")),a.setPackageJsonModifier(_e);{i=a;let e=process.cwd();if((t=process.argv.slice(2).filter(
e=>!e.startsWith("-")).shift())&&(t=k.resolve(e,t),nl.debug("Creating project directory: ",t),R.mkdirp(t),process.chdir(
t),e=t),t={dev:!1,exact:!1,noSave:!1,bundle:!1,verbose:!1,global:!1,prefer:i.getPreferredPackageSystem(
)===ba.YARN?"yarn":"npm",stdio:"inherit",cwd:e},nl.debug("Initial install config: ",t),r=te(await va.getPackageManager(t
)),nl.debug("Initializing package.json using ",r),r=r,o=process.argv.slice(2).filter(e=>e.startsWith("-")),el.debug(
"Executing: ",r,"init",...o),await xe(r,["init",...o],{stdio:"inherit"}),r=k.resolve("package.json"),R.fileExists(r)){
i.setPackageDirectory(k.dirname(r));const s=i.getPackageDirectory(),u=(o=i.getMainName(),n=(new Date).getFullYear(),{
"GIT-ORGANISATION":i.getGitOrganization(),"ORGANISATION-NAME":i.getOrganizationName(),
"ORGANISATION-EMAIL":i.getOrganizationEmail(),"CURRENT-YEAR":""+n,"PROJECT-NAME":o,projectName:ma(o)}),c=i.getFiles(),
l=Qo(co(c,e=>k.dirname(e))),f=i.getTemplatesDirectory();if(l.forEach(e=>{e=k.resolve(s,e);nl.debug(
"Creating directory: ",e),R.mkdirp(e)}),nl.debug("Initializing git if necessary"),await rl.initGit(),c.forEach(e=>{
R.copyTextFileWithReplacementsIfMissing(k.resolve(f,e),k.resolve(s,e),u)}),R.copyTextFileWithReplacementsIfMissing(
k.resolve(f,i.getMainSourceFileTemplate()),k.resolve(s,i.getMainSourceFileName()),u),!Q(n=R.readJsonFile(r))
)throw new TypeError("package.json was invalid");const d=i.getPackageJsonModifier();o=d(n,i),Hi(o,n)?nl.warn(
"Warning! No changes to package.json detected"):R.writeJsonFile(r,o),await Bo(i.getGitSubmodules(),async(e,t)=>{await e;
var{url:e,path:t,branch:r}=t;nl.debug(`Initializing core git submodule from ${e} and branch ${r} to `+t),
await rl.initSubModule(e,k.resolve(".",t),null!=r?r:"main")},Promise.resolve()),n=i.getPackages(),nl.debug(
"Installing packages: ",n),await va.install(co(n,e=>e),t),nl.debug("Adding files to git"),await rl.addFiles(["."]),
nl.debug("Initial git commit"),await rl.commit(i.getGitCommitMessage()),o=i.getGitBranch(),nl.debug(
`Renaming main git branch to '${o}'`),await rl.renameMainBranch(o)}else nl.warn("Warning! package.json did not exist: ",
r)}}().catch(e=>{console.error(e)});
