#!/usr/bin/env node
"use strict";function G(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function F(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?G(
Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function n(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function D(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function L(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function B(e
){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function z(e){e=this.__data__=new Mt(e);
this.size=e.size}function U(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Rt;++t<r;)this.add(e[t])}function W(n
,o){function i(){var e=arguments,t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
i.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError(
"Expected a function");return i.cache=new(W.Cache||cn),i}function V(e){return void 0===e}function q(e){return Vt(e)}
function H(e){return Mi(e)}function Z(e,t){return jo(e,t)}function J(e,t=H,r=void 0){return!(void 0!==r&&(r=r,!nt(n=e
)||!Z($i(n),r)))&&(n=void 0!==t?t:H,nt(r=e)&&Z(X(r),n));var n}function Y(...e){return t=>vo(e,e=>e(t))}function X(e,t=H
){var r;return q(e)?(r=io(e,(e,t)=>t),wi(r,e=>t(e))):nt(e)?(r=Reflect.ownKeys(e),wi(r,e=>t(e))):[]}function K(e){
return H(r=e)||Fi(r)||ki(r)||Ai(r)||([r,t=void 0]=[e,Y(K,V)],!!Vt(r)&&(null!=r&&r.length,void 0===t||Z(r,t)))||Q(e);
var t,r}function Q(e){return!!nt(t=e)&&!(t instanceof Date)&&!at(t)&&!q(t)&&J(t,H,void 0)&&J(e,H,Y(K,V));var t}
function ee(e){return Q(e)?e:void 0}function te(e){switch((""+e).toLowerCase()){case"npm":return pa.NPM;case"yarn":
return pa.YARN;case"hgm":return pa.HGM;default:return}}function re(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t
,a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0;return!1}return!1}
function ne(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==(t=t).uid?t.uid:process.getuid&&process.getuid(
),t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function oe(e){e=new Error("not found: "+e);
return e.code="ENOENT",e}function ie(e,t){var r=t.colon||wa,n=[""],o=(o=t.path||process.env.PATH||"").split(r),i="";
return ba&&(o.unshift(process.cwd()),n=(i=t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM").split(r),
-1!==e.indexOf(".")&&""!==n[0]&&n.unshift("")),{env:o=e.match(/\//)||ba&&e.match(/\\/)?[""]:o,ext:n,extExe:i}}
function ae(e,t){var r=process.cwd(),n=null!=e.options.cwd;if(n)try{process.chdir(e.options.cwd)}catch(e){}let o;try{
o=Nu.sync(e.command,{path:(e.options.env||process.env)[Cu],pathExt:t?Iu.delimiter:void 0})}catch(e){}finally{
process.chdir(r)}return o=o&&Iu.resolve(n?e.options.cwd:"",o)}function se(e,t){return Object.assign(new Error(
`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}
function ue(e,t){return qu&&1===e&&!t.file?se(t.original,"spawn"):null}function ce(e,t,r){e=Ue(e,t,r),t=Hu.spawn(
e.command,e.args,e.options);return Zu.hookChildProcess(t,e),t}function le(e){function t(){return t.called?t.value:(
t.called=!0,t.value=e.apply(this,arguments))}return t.called=!1,t}function fe(e){function t(){if(t.called
)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)}
var r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}
function de(e,o){if(!e)return Promise.reject(new Error("Expected a stream"));const i=(o=Object.assign({maxBuffer:1/0},o)
).maxBuffer;let a;return new Promise((t,r)=>{const n=e=>{e&&(e.bufferedData=a.getBufferedValue()),r(e)};(a=function(){
var n,o,i=Array.prototype.slice.call(arguments),a=Ma(i[i.length-1]||Na)&&i.pop()||Na;if((i=Array.isArray(i[0])?i[0]:i
).length<2)throw new Error("pump requires two streams per minimum");return o=i.map(function(e,t){var r=t<i.length-1;
return Fa(e,r,0<t,function(e){n=n||e,e&&o.forEach(Da),r||(o.forEach(Da),a(n))})}),i.reduce(La)}(e,(e=>{const t=(
e=Object.assign({},e)).array;let r=e.encoding;const n="buffer"===r;let o=!1,i=(t?o=!(r||n):r=r||"utf8",n&&(r=null),0);
const a=[],s=new Ju({objectMode:o});return r&&s.setEncoding(r),s.on("data",e=>{a.push(e),o?i=a.length:i+=e.length}),
s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s})(o),e=>{e?n(e):t()})).on("data",
()=>{a.getBufferedLength()>i&&n(new Yu)})}).then(()=>a.getBufferedValue())}function pe(e,t){if(e)return e.errname(t);if(
t<0)return"Unknown system error "+t;throw new Error("err >= 0")}function he(t,e){var r,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function b(n){for(var o,
e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?he(Object(o),!0).forEach(function(e){var t=n,
r=o[e=e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}
):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):he(Object(o)).forEach(
function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))});return n}function ge(e,t){
var r=e.options.env||process.env,n=process.cwd(),o=null!=e.options.cwd,
i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch(e){}let a;try{
a=dc.sync(e.command,{path:r[pc({env:r})],pathExt:t?fc.delimiter:void 0})}catch(e){}finally{i&&process.chdir(n)}
return a=a&&fc.resolve(o?e.options.cwd:"",a)}function me(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`)
,{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}function ve(e,t){
return jc&&1===e&&!t.file?me(t.original,"spawn"):null}function be(e,t,r){e=We(e,t,r),t=Oc.spawn(e.command,e.args,
e.options);return Sc.hookChildProcess(t,e),t}function ye(e={}){var{env:e=process.env,platform:t=process.platform}=e;
return"win32"!==t?"PATH":Object.keys(e).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"}async function we(n,u){if(!n
)throw new Error("Expected a stream");const o=(u=b({maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=b({},u)).array;
let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);const i=new Dc({objectMode:o});
r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=(
)=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=()=>a,i})();return await new Promise((e,t)=>{const r=e=>{
e&&i.getBufferedLength()<=Lc.MAX_LENGTH&&(e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await $c(n,i),e()
}catch(e){r(e)}})(),i.on("data",()=>{i.getBufferedLength()>o&&r(new zc)})}),i.getBufferedValue()}function xe(e,t,r){
var n,o,i,a,s,u,c,l,f;[r,o,i={}]=[e,t,r],r=(f=Os._parse(r,o,i)).command,o=f.args,(i=b({maxBuffer:1e8,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:(i=f.options).cwd||bu.default.cwd(),
execPath:bu.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},i)).env=({env:a,extendEnv:l,
preferLocal:s,localDir:u,execPath:c}=i,l=l?b(b({},bu.default.env),a):a,s?function(e){let{env:t=bu.default.env}=e,
r=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},
n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(
i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(e,Pc);e=ye({env:t=b({},t)});return r.path=t[e],t[e]=function(e={}){const{
cwd:t=bu.default.cwd(),path:r=bu.default.env[ye()],execPath:n=bu.default.execPath}=e;let o;
e=t instanceof URL?yu.default.fileURLToPath(t):t;let i=mu.default.resolve(e);const a=[];for(;o!==i;)a.push(
mu.default.join(i,"node_modules/.bin")),o=i,i=mu.default.resolve(i,"..");return a.push(mu.default.resolve(e,n,"..")),[
...a,r].join(mu.default.delimiter)}(r),t}({env:l,cwd:u,execPath:c}):l),i.stdio=(t=>{var r,e;if(t){const n=t.stdio;if(
void 0===n)return Fc.map(e=>t[e]);if(r=t,Fc.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Fc.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Fc.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===bu.default.platform&&"cmd"===mu.default.basename(r,".exe")&&o.unshift("/q");const d={file:r,args:o,options:i,
parsed:f},p=(a=e,s=t,Jc(a,s).join(" ")),h=(u=e,c=t,Jc(u,c).map(e=>(e=>"string"!=typeof e||Yc.test(e)?e:`"${e.replace(Xc,
'\\"')}"`)(e)).join(" "));if(void 0!==(l=d.options.timeout)&&(!Number.isFinite(l)||l<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;try{
g=vu.default.spawn(d.file,d.args,d.options)}catch(e){return r=new vu.default.ChildProcess,o=Promise.reject(Gc({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:d,timedOut:!1,isCanceled:!1,killed:!1})),Zc(r,o)}n=g,
i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),f=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;var r=new Promise((e,r
)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,d.options,i);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const o=zs(()=>{e.kill()});return n.finally(()=>{o()})})(g,d.options,f),v={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e,e=r;if([r,t,n]=[t,e.forceKillAfterTimeout,o],(
r===wu.default.constants.signals.SIGTERM||"string"==typeof r&&"SIGTERM"===r.toUpperCase())&&!1!==t&&n){r=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{i("SIGKILL")},r);a.unref&&a.unref()}return o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,v),a=Ic(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=Vc(t,{encoding:o,buffer:e,maxBuffer:i}),
u=Vc(r,{encoding:o,buffer:e,maxBuffer:i}),o=Vc(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,
u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},Wc(t,s),Wc(r,u),Wc(n,o)])}})(g,
d.options,m),o=Kc(d.options,o),i=Kc(d.options,i),a=Kc(d.options,a);if(e||0!==t||null!==r){if(e=Gc({error:e,exitCode:t,
signal:r,stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:d,timedOut:n,
isCanceled:v.isCanceled||!!d.options.signal&&d.options.signal.aborted,killed:g.killed}),d.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=d.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=Ps();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,d.options),Zc(g,a)}
function _e(e,t){if(e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>As)return null;if(!((
t=t&&"object"==typeof t?t:{loose:!!t,includePrerelease:!1}).loose?w[Cs]:w[Ns]).test(e))return null;try{return new p(e,t)
}catch(e){return null}}function p(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){
if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(
e.length>As)throw new TypeError("version is longer than "+As+" characters");if(!(this instanceof p))return new p(e,t);y(
"SemVer",e,t),this.options=t,this.loose=!!t.loose;t=e.trim().match(t.loose?w[Cs]:w[Ns]);if(!t)throw new TypeError(
"Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>Is||this.major<0
)throw new TypeError("Invalid major version");if(this.minor>Is||this.minor<0)throw new TypeError("Invalid minor version"
);if(this.patch>Is||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(
function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(0<=t&&t<Is)return t}return e}):this.prerelease=[],
this.build=t[5]?t[5].split("."):[],this.format()}function Ee(e,t){var r=Rs.test(e),n=Rs.test(t);return r&&n&&(e=+e,t=+t)
,e===t?0:r&&!n||(!n||r)&&e<t?-1:1}function je(e,t,r){return new p(e,r).compare(new p(t,r))}function Oe(e,t,r){
return 0<je(e,t,r)}function Se(e,t,r){return je(e,t,r)<0}function Pe(e,t,r){return 0===je(e,t,r)}function Te(e,t,r){
return 0!==je(e,t,r)}function ke(e,t,r){return 0<=je(e,t,r)}function Ae(e,t,r){return je(e,t,r)<=0}function Ie(e,t,r,n){
switch(t){case"===":return(e="object"==typeof e?e.version:e)===("object"==typeof r?r.version:r);case"!==":return(
e="object"==typeof e?e.version:e)!==("object"==typeof r?r.version:r);case"":case"=":case"==":return Pe(e,r,n);case"!=":
return Te(e,r,n);case">":return Oe(e,r,n);case">=":return ke(e,r,n);case"<":return Se(e,r,n);case"<=":return Ae(e,r,n);
default:throw new TypeError("Invalid operator: "+t)}}function Ne(e,t){if(t&&"object"==typeof t||(t={loose:!!t,
includePrerelease:!1}),e instanceof Ne){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Ne)
)return new Ne(e,t);y("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),
this.semver===Gs?this.value="":this.value=this.operator+this.semver.version,y("comp",this)}function h(e,t){if(
t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof h
)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new h(e.raw,t);if(e instanceof Ne
)return new h(e.value,t);if(!(this instanceof h))return new h(e,t);if(this.options=t,this.loose=!!t.loose,
this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){
return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError(
"Invalid SemVer Range: "+e);this.format()}function Ce(e){return!e||"x"===e.toLowerCase()||"*"===e}function Me(e,t,r,n,o,
i,a,s,u,c,l,f,d){return((t=Ce(r)?"":Ce(n)?">="+r+".0.0":Ce(o)?">="+r+"."+n+".0":">="+t)+" "+(s=Ce(u)?"":Ce(c)?"<"+(+u+1
)+".0.0":Ce(l)?"<"+u+"."+(+c+1)+".0":f?"<="+u+"."+c+"."+l+"-"+f:"<="+s)).trim()}function Re(e,t,r){try{t=new h(t,r)
}catch(e){return!1}return t.test(e)}function Ge(e,t,r,n){var o,i,a,s,u,c,l,f,d;switch(e=new p(e,n),t=new h(t,n),r){
case">":o=Oe,i=Ae,a=Se,s=">",u=">=";break;case"<":o=Se,i=ke,a=Oe,s="<",u="<=";break;default:throw new TypeError(
'Must provide a hilo val of "<" or ">"')}if(Re(e,t,n))return!1;for(c=0;c<t.set.length;++c){if(l=t.set[c],d=f=null,
l.forEach(function(e){e.semver===Gs&&(e=new Ne(">=0.0.0")),f=f||e,d=d||e,o(e.semver,f.semver,n)?f=e:a(e.semver,d.semver,
n)&&(d=e)}),f.operator===s||f.operator===u)return!1;if((!d.operator||d.operator===s)&&i(e,d.semver))return!1;if(
d.operator===u&&a(e,d.semver))return!1}return!0}function Fe(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function De(e){return Bs.call(this,"Unreachable case: "+e)||this}function Le(e){for(var t in e)$s.hasOwnProperty(t)||(
$s[t]=e[t])}function Be(e,t){return{name:"SIGRT"+(t+1),number:Nc+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function $e(){var e=65-Nc,e=Array.from({length:e}
,Be);return[...Cc,...e].map(Ve)}function ze(e,{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){
return b(b({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}})}function Ue(e,t,r){
t&&!Array.isArray(t)&&(r=t,t=null);e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({},r),file:void 0,
original:{command:e,args:t}};return(r.shell?function(e){if(Vu)return e;var t=[e.command].concat(e.args).join(" ");
return zu?(e.command="string"==typeof e.options.shell?e.options.shell:process.env.comspec||"cmd.exe",e.args=["/d","/s",
"/c",`"${t}"`],e.options.windowsVerbatimArguments=!0):(
"string"==typeof e.options.shell?e.command=e.options.shell:"android"===process.platform?e.command="/system/bin/sh":e.command="/bin/sh"
,e.args=["-c",t]),e}:function(e){var t,r;if(!zu)return e;if((r=e).file=Du(r),t=(t=r.file&&Bu(r.file))?(r.args.unshift(
r.file),r.command=t,Du(r)):r.file,r=!Uu.test(t),e.options.forceShell||r){const n=Wu.test(t);e.command=Gu.normalize(
e.command),e.command=Lu.command(e.command),e.args=e.args.map(e=>Lu.argument(e,n)),r=[e.command].concat(e.args).join(" ")
,e.args=["/d","/s","/c",`"${r}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}
return e})(e)}function We(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],
options:r=Object.assign({},r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!xc)return t;if((r=t
).file=yc(r),e=(e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=mc.openSync(e,"r"),mc.readSync(t,r,0,150,0),
mc.closeSync(t)}catch(e){}return vc(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,yc(r)):r.file,
r=!_c.test(e),t.options.forceShell||r){const n=Ec.test(e);t.command=bc.normalize(t.command),t.command=wc.command(
t.command),t.args=t.args.map(e=>wc.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`
],t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Ve({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=pu.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function qe(e,t){for(var r=-1,n=null==e?0:e.length,
o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function He(e,t){return e===t||e!=e&&t!=t}function Ze(e,t){for(
var r=e.length;r--;)if(xu(e[r][0],t))return r;return-1}var Je,Ye,Xe,Ke,Qe,et,tt,rt,nt,ot,it,at,st,ut,ct,lt,ft,dt,pt,ht,
gt,mt,vt,bt,yt,wt,xt,_t,Et,jt,Ot,St,Pt,Tt,kt,At,It,Nt,Ct,Mt,Rt,Gt,Ft,Dt,Lt,Bt,$t,zt,Ut,Wt,Vt,qt,Ht,Zt,Jt,Yt,Xt,Kt,Qt,er,
tr,rr,nr,or,ir,t,ar,sr,ur,cr,lr,fr,dr,pr,hr,gr,mr,vr,br,yr,wr,xr,_r,Er,jr,Or,Sr,Pr,Tr,kr,Ar,Ir,Nr,Cr,Mr,Rr,Gr,Fr,Dr,Lr,
Br,$r,zr,Ur,Wr,Vr,qr,Hr,Zr,Jr,Yr,Xr,Kr,Qr,en,tn,rn,nn,on,an,sn,un,cn,ln,fn,dn,pn,hn,gn,mn,vn,bn,yn,wn,xn,_n,En,jn,On,Sn,
Pn,Tn,kn,An,In,Nn,Cn,Mn,Rn,Gn,Fn,Dn,Ln,Bn,$n,zn,Un,Wn,Vn,qn,Hn,Zn,Jn,Yn,Xn,Kn,Qn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,
ho,go,mo,vo,bo,yo,wo,xo,_o,Eo,jo,Oo,So,Po,To,ko,Ao,Io,No,Co,Mo,Ro,Go,Fo,Do,Lo,Bo,$o,zo,Uo,Wo,Vo,qo,Ho,Zo,Jo,Yo,Xo,Ko,Qo,
ei,ti,ri,ni,oi,ii,ai,si,ui,ci,li,fi,di,pi,hi,gi,mi,vi,bi,yi,wi,xi,_i,Ei,ji,Oi,Si,Pi,Ti,ki,Ai,Ii,Ni,Ci,Mi,Ri,Gi,Fi,Di,Li,
Bi,$i,zi,Ui,Wi,Vi,qi,Hi,Zi,Ji,Yi,Xi,Ki,Qi,ea,ta,ra,na,oa,ia,aa,sa,ua,ca,la,fa,da,r,pa,ha,e,ga,ma,va,o,ba,ya,wa,xa,_a,Ea,
i,ja,Oa,Sa,Pa,Ta,ka,Aa,Ia,Na,Ca,Ma,Ra,Ga,Fa,Da,La,a,s,Ba,$a,za,u,Ua,Wa,Va,qa,Ha,Za,Ja,Ya,Xa,Ka,c,Qa,es,ts,rs,ns,os,is,as
,ss,us,cs,ls,fs,ds,l,ps,hs,gs,ms,vs,bs,ys,ws,xs,_s,Es,js,f,Os,Ss,Ps,d,g,m,Ts,ks,v,y,As,Is,w,x,Ns,_,Cs,Ms,Rs,Gs,Fs,E,j,Ds
,Ls,Bs,$s,zs,O,Us,S,P,Ws,Vs,qs,Hs,T,Zs,Js,Ys,Xs,Ks,Qs,eu,tu,ru,nu,k=require("path"),ou=require("fs"),iu=require(
"child_process"),au=require("stream"),su=require("assert"),uu=require("events"),cu=require("util"),lu=require(
"node:buffer"),A=require("node:path"),fu=require("node:child_process"),du=require("node:process"),I=require("node:url"),
pu=require("os"),N=require("node:os"),C=require("buffer"),hu=D(k),gu=D(ou),ou=D(iu),iu=D(au),au=D(su),su=D(uu),uu=D(cu),
mu=D(A),vu=D(fu),bu=D(du),yu=D(I),wu=D(N),cu=D(C),
M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,xu=He,_u=Ze,Eu=Array.prototype.splice,ju=Ze,Ou=Ze,Su=Ze;L.prototype.clear=function(){this.__data__=[],this.size=0},
L.prototype.delete=function(e){var t=this.__data__,e=_u(t,e);return!(e<0||(e==t.length-1?t.pop():Eu.call(t,e,1),
--this.size,0))},L.prototype.get=function(e){var t=this.__data__,e=ju(t,e);return e<0?void 0:t[e][1]},
L.prototype.has=function(e){return-1<Ou(this.__data__,e)},L.prototype.set=function(e,t){var r=this.__data__,n=Su(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Je=A=L,fu=function(){this.__data__=new Je,this.size=0},
du=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},I=function(e){return this.__data__.get(e)},
N=function(e){return this.__data__.has(e)},C="object"==typeof M&&M&&M.Object===Object&&M,
S="object"==typeof self&&self&&self.Object===Object&&self,f=(S=C||S||Function("return this")()).Symbol,
Ws=Object.prototype,Ye=Ws.hasOwnProperty,Xe=Ws.toString,Ke=f?f.toStringTag:void 0,Ws=Object.prototype,Qe=Ws.toString,
et=function(e){var t,r,n=Ye.call(e,Ke),o=e[Ke];try{t=!(e[Ke]=void 0)}catch(e){}return r=Xe.call(e),t&&(
n?e[Ke]=o:delete e[Ke]),r},tt=function(e){return Qe.call(e)},rt=f?f.toStringTag:void 0,ot=Ws=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(rt&&rt in Object(e)?et:tt)(e)},it=nt=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},at=function(e){if(!it(e))return!1;e=ot(e);
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},
d=S["__core-js_shared__"],d=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""),st=d?"Symbol(src)_1."+d:"",
d=Function.prototype,ut=d.toString,ct=at,lt=function(e){return!!st&&st in e},ft=nt,dt=d=function(e){if(null!=e){try{
return ut.call(e)}catch(e){}try{return e+""}catch(e){}}return""},c=/[\\^$.*+?()[\]{}|]/g,
pt=/^\[object .+?Constructor\]$/,e=Function.prototype,E=Object.prototype,e=e.toString,E=E.hasOwnProperty,ht=RegExp(
"^"+e.call(E).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),
gt=function(e){return!(!ft(e)||lt(e))&&(ct(e)?ht:pt).test(dt(e))},mt=function(e,t){return null==e?void 0:e[t]},E=(
e=function(e,t){e=mt(e,t);return gt(e)?e:void 0})(S,"Map"),c=e(Object,"create"),bt=vt=c,o=Object.prototype,
yt=o.hasOwnProperty,wt=c,o=Object.prototype,xt=o.hasOwnProperty,_t=c,o=function(e){e=this.has(e
)&&delete this.__data__[e];return this.size-=e?1:0,e},c=function(e){var t,r=this.__data__;
return bt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:yt.call(r,e)?r[e]:void 0},l=function(e){var t=this.__data__;
return wt?void 0!==t[e]:xt.call(t,e)},a=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,
r[e]=_t&&void 0===t?"__lodash_hash_undefined__":t,this},B.prototype.clear=function(){this.__data__=vt?vt(null):{},
this.size=0},B.prototype.delete=o,B.prototype.get=c,B.prototype.has=l,B.prototype.set=a,Et=B,jt=A,Ot=E,St=function(e){
var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},At=kt=Tt=Pt=function(
e,t){e=e.__data__;return St(t)?e["string"==typeof t?"string":"hash"]:e.map},o=function(e){e=Pt(this,e).delete(e);
return this.size-=e?1:0,e},c=function(e){return Tt(this,e).get(e)},l=function(e){return kt(this,e).has(e)},a=function(e,
t){var r=At(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},$.prototype.clear=function(){this.size=0,
this.__data__={hash:new Et,map:new(Ot||jt),string:new Et}},$.prototype.delete=o,$.prototype.get=c,$.prototype.has=l,
$.prototype.set=a,Nt=E,Ct=o=$,Mt=It=A,c=du,l=I,a=N,A=function(e,t){var r,n=this.__data__;if(n instanceof It){if(
r=n.__data__,!Nt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ct(r)}return n.set(e,t),
this.size=n.size,this},z.prototype.clear=fu,z.prototype.delete=c,z.prototype.get=l,z.prototype.has=a,z.prototype.set=A,
du=z,Rt=o,I=function(e){return this.__data__.has(e)},U.prototype.add=U.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},U.prototype.has=I,Gt=N=U,Ft=fu=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Dt=c=function(e,t){return e.has(t)},l=S.Uint8Array,Lt=l,
Bt=He,$t=a=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new Gt:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],f=t[s],
void 0!==(d=n?p?n(f,l,s,t,e,i):n(l,f,s,e,t,i):d)){if(d)continue;u=!1;break}if(c){if(!Ft(t,function(e,t){if(!Dt(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==f&&!o(l,f,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},zt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Ut=A=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},I=f?f.prototype:void 0,Wt=I?I.valueOf:void 0,
l=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new Lt(e),new Lt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return Bt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=zt;case"[object Set]":return s=s||Ut,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=$t(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(Wt)return Wt.call(e)==Wt.call(t)}return!1},I=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},P=Array.isArray,qt=I,Ht=Vt=P,P=function(e,t,r){t=t(e);return Ht(e)?t:qt(t,r(e))},Zt=ns=function(e,t){for(var r
,n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},i=Object.prototype,
Jt=i.propertyIsEnumerable,i=(Yt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Zt(Yt(t),
function(e){return Jt.call(t,e)}))}:function(){return[]},Qa=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Xt=Ws,O=function(e){return Kt(e)&&"[object Arguments]"==Xt(e)},Qt=Kt=Vs=function(e){
return null!=e&&"object"==typeof e},T=Object.prototype,er=T.hasOwnProperty,tr=T.propertyIsEnumerable,T=O(function(){
return arguments}())?O:function(e){return Qt(e)&&er.call(e,"callee")&&!tr.call(e,"callee")},g=(_=(_=(g=(g=(O={exports:{}
}).exports)&&!g.nodeType&&g)&&O&&!O.nodeType&&O)&&_.exports===g?S.Buffer:void 0)?_.isBuffer:void 0,
O.exports=g||function(){return!1},rr=/^(?:0|[1-9]\d*)$/,_=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&rr.test(e))&&-1<e&&e%1==0&&e<t},nr=Ws,or=g=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},ir=Vs,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,Xs=function(e){return ir(e)&&or(e.length)&&!!t[nr(e)]},Fs=function(t){return function(e){return t(e)}},v=(v=(m=bs={
exports:{}}).exports)&&!v.nodeType&&v,v=(Ts=v&&m&&!m.nodeType&&m)&&Ts.exports===v,ks=v&&C.process,v=function(){try{
return Ts&&Ts.require&&Ts.require("util").types||ks&&ks.binding&&ks.binding("util")}catch(e){}}(),m.exports=v,v=(m=(
C=bs.exports)&&C.isTypedArray)?Fs(m):Xs,ar=Qa,sr=T,ur=Vt,cr=O.exports,lr=_,fr=C=v,m=Object.prototype,dr=m.hasOwnProperty
,pr=Object.prototype,Qs=Object.keys,eu=Object,hr=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||pr)},gr=function(e){return Qs(eu(e))},Xs=Object.prototype,mr=Xs.hasOwnProperty,vr=at,
br=g,yr=function(e,t){var r,n=ur(e),o=!n&&sr(e),i=!n&&!o&&cr(e),a=!n&&!o&&!i&&fr(e),s=n||o||i||a,u=s?ar(e.length,String
):[],c=u.length;for(r in e)!t&&!dr.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||lr(r,c))||u.push(r);return u},wr=function(e){var t,r;if(!hr(e)
)return gr(e);for(r in t=[],Object(e))mr.call(e,r)&&"constructor"!=r&&t.push(r);return t},xr=Qa=function(e){
return null!=e&&br(e.length)&&!vr(e)},_r=P,Er=i,jr=v=function(e){return(xr(e)?yr:wr)(e)},Or=function(e){return _r(e,jr,
Er)},m=Object.prototype,Sr=m.hasOwnProperty,Xs=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p,h,g=1&r,m=Or(e),v=m.length;if(
v!=Or(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:Sr.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],f=t[s],!(void 0===(d=n?g?n(f,l,s,t,e,i):n(l
,f,s,e,t,i):d)?l===f||o(l,f,r,n,i):d)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},P=e(S,
"DataView"),i=E,m=e(S,"Promise"),Ka=E=e(S,"Set"),S=e(S,"WeakMap"),Pr=Ws,kr=(Tr=d)(d=P),Ar=Tr(i),Ir=Tr(m),Nr=Tr(Ka),
Cr=Tr(S),P=Pr,(d&&"[object DataView]"!=P(new d(new ArrayBuffer(1)))||i&&"[object Map]"!=P(new i
)||m&&"[object Promise]"!=P(m.resolve())||Ka&&"[object Set]"!=P(new Ka)||S&&"[object WeakMap]"!=P(new S))&&(P=function(e
){var t=Pr(e),e="[object Object]"==t?e.constructor:void 0,e=e?Tr(e):"";if(e)switch(e){case kr:return"[object DataView]";
case Ar:return"[object Map]";case Ir:return"[object Promise]";case Nr:return"[object Set]";case Cr:
return"[object WeakMap]"}return t}),Mr=du,Rr=a,Gr=l,Fr=Xs,Dr=P,Lr=Vt,Br=O.exports,$r=C,zr="[object Arguments]",
Ur="[object Array]",Wr="[object Object]",d=Object.prototype,Vr=d.hasOwnProperty,qr=function(e,t,r,n,o,i){var a=Lr(e),
s=Lr(t),u=a?Ur:Dr(e),s=s?Ur:Dr(t),c=(u=u==zr?Wr:u)==Wr,l=(s=s==zr?Wr:s)==Wr,s=u==s;if(s&&Br(e)){if(!Br(t))return!1;c=!(
a=!0)}return s&&!c?(i=i||new Mr,a||$r(e)?Rr(e,t,r,n,o,i):Gr(e,t,u,r,n,o,i)):1&r||(a=c&&Vr.call(e,"__wrapped__"),
u=l&&Vr.call(t,"__wrapped__"),!a&&!u)?s&&(i=i||new Mr,Fr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new Mr)},
Zr=du,Jr=i=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Hr(t)&&!Hr(r)?t!=t&&r!=r:qr(t,r,n,o,e,i))},Yr=nt,
Xr=m=function(e){return e==e&&!Yr(e)},Kr=v,Qr=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,f=l,d=!n;if(null==e)return!f;
for(e=Object(e);l--;)if(o=r[l],d&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<f;)if(a=e[i=(o=r[l])[0]],s=o[1],
d&&o[2]){if(void 0===a&&!(i in e))return!1}else if(u=new Zr,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Jr(s,a,3,n,u):c))return!1;
return!0},en=function(e){for(var t,r,n=Kr(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,Xr(r)];return n},tn=Ka=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},S=function(t){var r=en(t);
return 1==r.length&&r[0][2]?tn(r[0][0],r[0][1]):function(e){return e===t||Qr(e,t,r)}},rn=Ws,nn=Hr=Vs,on=Vt,
an=a=function(e){return"symbol"==typeof e||nn(e)&&"[object Symbol]"==rn(e)},
sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,un=/^\w*$/,l=function(e,t){if(on(e))return!1;var r=typeof e;
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!an(e))||un.test(e)||!sn.test(e)||null!=t&&e in Object(t)},cn=o
,W.Cache=cn,ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
fn=/\\(\\)?/g,Ks=(Xs=W(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(ln,function(e,t,r,n){
o.push(r?n.replace(fn,"$1"):t||e)}),o},function(e){return 500===Ks.size&&Ks.clear(),e})).cache,dn=qe,pn=Vt,hn=a,
P=f?f.prototype:void 0,gn=P?P.toString:void 0,mn=function e(t){if("string"==typeof t)return t;if(pn(t))return dn(t,e)+""
if(hn(t))return gn?gn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},yn=Xs,wn=O=function(e){return null==e?"":mn(
e)},xn=a,On=_n=function(e,t){return vn(e)?e:bn(e,t)?[e]:yn(wn(e))},Sn=T,kn=g,In=function(e,t){
return null!=e&&t in Object(e)},Nn=function(e,t,r){for(var n,o,i=(t=On(t,e)).length,a=!(n=-1);++n<i&&(o=An(t[n]),
a=null!=e&&r(e,o));)e=e[o];return a||++n!=i?a:!!(i=null==e?0:e.length)&&kn(i)&&Tn(o,i)&&(Pn(e)||Sn(e))},Cn=i,
Mn=function(e,t,r){e=null==e?void 0:jn(e,t);return void 0===e?r:e},Rn=function(e,t){return null!=e&&Nn(e,t,In)},Fn=m,
Dn=Ka,Bn=jn=C=function(e,t){for(var r=0,n=(t=_n(t,e)).length;null!=e&&r<n;)e=e[En(t[r++])];return r&&r==n?e:void 0},
$n=function(t){return function(e){return null==e?void 0:e[t]}},zn=function(t){return function(e){return Bn(e,t)}},
Un=Gn=bn=l,Wn=Ln=An=En=function(e){if("string"==typeof e||xn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Vn=S
,qn=function(r,n){return Gn(r)&&Fn(n)?Dn(Ln(r),n):function(e){var t=Mn(e,r);return void 0===t&&t===n?Rn(e,r):Cn(n,t,3)}}
,Hn=d=function(e){return e},Zn=Pn=vn=Vt,Jn=function(e){return Un(e)?$n(Wn(e)):zn(e)},Yn=function(e,t,r){for(var n,o=-1,
i=Object(e),a=r(e),s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},Xn=v,to=qe,no=du=function(e,n){var o=-1,i=eo(e
)?Array(e.length):[];return Qn(e,function(e,t,r){i[++o]=n(e,t,r)}),i},io=function(e,t){return(oo(e)?to:no)(e,ro(t))},
so=He,uo=eo=Kn=Qa,co=Tn=_,lo=nt,fo=fu,ho=function(e,n){var o;return ao(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},
vo=function(e,t,r){var n=go(e)?fo:ho;return r&&mo(e,t,r)&&(t=void 0),n(e,po(t))},bo=ao=Qn=o=function(e,t){if(null==e
)return e;if(!Kn(e))return e&&Yn(e,t,Xn);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},
yo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},wo=function(e,n){var o=!0;
return bo(e,function(e,t,r){return o=!!n(e,t,r)}),o},xo=po=ro=P=function(e){
return"function"==typeof e?e:null==e?Hn:"object"==typeof e?Zn(e)?qn(e[0],e[1]):Vn(e):Jn(e)},_o=go=oo=Vt,
Eo=mo=Xs=function(e,t,r){if(!lo(r))return!1;var n=typeof t;return!!("number"==n?uo(r)&&co(t,r.length
):"string"==n&&t in r)&&so(r[t],e)},jo=function(e,t,r){var n=_o(e)?yo:wo;return r&&Eo(e,t,r)&&(t=void 0),n(e,xo(t))},
Oo=e,g=function(){try{var e=Oo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),So=T,Po=Vt,
To=f?f.isConcatSpreadable:void 0,ko=I,Ao=function(e){return Po(e)||So(e)||!!(To&&e&&e[To])},m=function e(t,r,n,o,i){
var a,s=-1,u=t.length;for(n=n||Ao,i=i||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):ko(i,a):o||(i[i.length]=a);return i
},Io=Ka=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r},No=o,Co=P,
Mo=function(e,n,o,i,t){return t(e,function(e,t,r){o=i?(i=!1,e):n(o,e,t,r)}),o},Ro=Vt,Go=function(e,t,r){var n=Ro(e
)?Io:Mo,o=arguments.length<3;return n(e,Co(t),r,o,No)},l=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i)
,i=r<(t=t<0?i<-t?0:i+t:t)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},Fo=function(e,t,r,n){for(
var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Do=function(e){return e!=e},Lo=function(e,t,r
){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1},Bo=function(e,t,r){return t==t?Lo(e,t,r):Fo(e,Do,r)},
S=function(e,t){return!(null==e||!e.length)&&-1<Bo(e,t,0)},Qa=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;
)if(r(t,e[n]))return!0;return!1},_=function(){},fu=($o=E)&&1/A(new $o([,-0]))[1]==1/0?function(e){return new $o(e)}:_,
zo=N,Uo=S,Wo=Qa,Vo=c,qo=fu,Ho=A,Zo=function(e,t,r){var n,o,i,a,s=-1,u=Uo,c=e.length,l=!0,f=[],d=f;if(r)l=!1,
u=Wo;else if(200<=c){if(n=t?null:qo(e))return Ho(n);l=!1,u=Vo,d=new zo}else d=t?[]:f;e:for(;++s<c;)if(o=e[s],i=t?t(o):o,
o=r||0!==o?o:0,l&&i==i){for(a=d.length;a--;)if(d[a]===i)continue e;t&&d.push(i),f.push(o)}else u(d,i,r)||(d!==f&&d.push(
i),f.push(o));return f},Jo=function(e){return e&&e.length?Zo(e):[]},Yo=a,Xo=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){
if(r=void 0!==e,n=null===e,o=e==e,i=Yo(e),a=void 0!==t,s=null===t,u=t==t,c=Yo(t),
!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u
)return-1}return 0},Ko=qe,Qo=C,ei=P,ti=du,ri=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},
ni=Fs,oi=function(e,t,r){for(var n,o=-1,i=e.criteria,a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=Xo(i[o],a[o])
)return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index},ii=d,ai=Vt,si=function(e,t,r){switch(r.length){case 0:
return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}
return e.apply(t,r)},ui=Math.max,ci=function(e){return function(){return e}},e=(li=g)?function(e,t){return li(e,
"toString",{configurable:!0,enumerable:!1,value:ci(t),writable:!0})}:d,fi=Date.now,Zs=e,di=m,pi=function(e,n,r){var o;
return n=n.length?Ko(n,function(t){return ai(t)?function(e){return Qo(e,1===t.length?t[0]:t)}:t}):[ii],o=-1,n=Ko(n,ni(ei
)),e=ti(e,function(t,e,r){return{criteria:Ko(n,function(e){return e(t)}),index:++o,value:t}}),ri(e,function(e,t){
return oi(e,t,r)})},hi=Xs,function(){var e=fi(),t=16-e+ +Ys;if(Ys=e,0<t){if(800<=++Js)return}else Js=0;Zs.apply(void 0,
arguments)}((tu=T=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&hi(e,t[0],t[1])?t=[]:2<r&&hi(t[0],t[1],
t[2])&&(t=[t[0]]),pi(e,di(t,1),[])},ru=void(Ys=Js=0),nu=d,ru=ui(void 0===ru?tu.length-1:ru,0),function(){for(var e,
t=arguments,r=-1,n=ui(t.length-ru,0),o=Array(n);++r<n;)o[r]=t[ru+r];for(r=-1,e=Array(ru+1);++r<ru;)e[r]=t[r];
return e[ru]=nu(o),si(tu,this,e)}),T+""),gi=o,mi=ns,vi=function(e,n){var o=[];return gi(e,function(e,t,r){n(e,t,r
)&&o.push(e)}),o},bi=P,yi=Vt,wi=function(e,t){return(yi(e)?mi:vi)(e,bi(t))},xi=l,f=function(e,t,r){var n=e.length;
return r=void 0===r?n:r,!t&&n<=r?e:xi(e,t,r)},_i=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),I=function(e){return _i.test(e)},
(E=bs.exports)&&E.isRegExp,_=function(e){return e.split("")},
N="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",S="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Ei=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+S+N,"g"),ji=_,Si=function(e){return e.match(Ei)||[]},
ki=function(e){return!0===e||!1===e||Ti(e)&&"[object Boolean]"==Pi(e)},Ai=function(e){return null===e},Ni=Vt,
Mi=function(e){return"string"==typeof e||!Ni(e)&&Ci(e)&&"[object String]"==Ii(e)},Ri=Ii=Pi=Ws,Gi=Ci=Ti=Vs,Fi=function(e
){return"number"==typeof e||Gi(e)&&"[object Number]"==Ri(e)},Di=qe,Li=function(t,e){return Di(e,function(e){return t[e]}
)},Bi=v,$i=function(e){return null==e?[]:Li(e,Bi(e))},zi=i,Ui=function(e,t){return zi(e,t)},Wi=f,Vi=Oi=I,qi=function(e){
return(Oi(e)?Si:ji)(e)},Ji=function(e){var t,r;return e=Hi(e),t=(r=Vi(e)?qi(e):void 0)?r[0]:e.charAt(0),r=r?Wi(r,1
).join(""):e.slice(1),t.toUpperCase()+r},Qa=function(e){return Ji(Zi(e).toLowerCase())},Hs={"À":"A","Á":"A","Â":"A",
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
"ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Yi=function(e){return null==Hs?void 0:Hs[e]},
Xi=Zi=Hi=O,Ki=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qi=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"g"),c=function(e){return(e=Xi(e))&&e.replace(Ki,Yi).replace(Qi,"")},ea=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
fu=function(e){return e.match(ea)||[]},ta=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
A=function(e){return ta.test(e)},
a="[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]"
,C="[A-Z\\xc0-\\xd6\\xd8-\\xde]",
du="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Fs="(?:"+[
"[\\u2700-\\u27bf]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+du,ra=RegExp([
C+"?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,C,"$"].join("|")+")",
"(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[
a,
C+"(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])"
,"$"].join("|")+")",
C+"?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?"
,C+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
"\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",Fs].join("|"),"g"),na=fu,oa=A,ia=O,aa=function(e){
return e.match(ra)||[]},sa=Ka,ua=c,ca=function(e,t,r){return e=ia(e),void 0===(t=r?void 0:t)?(oa(e)?aa:na)(e):e.match(t
)||[]},la=RegExp("['’]","g"),fa=Qa,qs=function(e,t,r){return t=t.toLowerCase(),e+(r?fa(t):t)},da=function(e){return sa(
ca(ua(e).replace(la,"")),qs,"")};class Pu{constructor(e,t){n(this,"_logger",void 0),n(this,"name",void 0),n(this,
"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=r.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=r.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=r.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=r.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class Tu{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case r.DEBUG:return"DEBUG";case r.INFO:return"INFO";case r.WARN:return"WARN";case r.ERROR:return"ERROR";
case r.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=r.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=r.INFO&&this._logger.info(...e)}static warn(...e){this._level<=r.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=r.ERROR&&this._logger.error(...e)}static createLogger(e){return new Pu(e,Tu)}}n(Tu
,"Level",r={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),n(Tu,"_level",r.DEBUG)
,n(Tu,"_logger",console),pa={NPM:"npm",YARN:"yarn",HGM:"hgm"};class ku{constructor(){n(this,"_preferredPackageSystem",
void 0),n(this,"_gitOrganization",void 0),n(this,"_organizationName",void 0),n(this,"_organizationEmail",void 0),n(this,
"_pkgDir",void 0),n(this,"_buildDir",void 0),n(this,"_sourceDir",void 0),n(this,"_templatesDir",void 0),n(this,
"_gitCommitMessage",void 0),n(this,"_gitBranch",void 0),n(this,"_mainName",void 0),n(this,"_distFile",void 0),n(this,
"_mainSrcFileTemplate",void 0),n(this,"_mainSrcFileName",void 0),n(this,"_files",void 0),n(this,"_gitSubmodules",void 0)
,n(this,"_packages",void 0),n(this,"_packageJsonModifier",void 0)}static createFromTemplateFile(e){var t=k.dirname(e),
e=require(e);const r=ku.createFromDataObject(e);return r.setTemplatesDirectory(k.resolve(t,null!=(
t=null==e?void 0:e.templatesDir)?t:"./templates")),r}static createFromDataObject(e){var t;const r=new ku;
return r.setPreferredPackageSystem(te(null!=(t=null==e?void 0:e.preferredPackageSystem)?t:"npm")),r.setGitOrganization(
null!=(t=null==e?void 0:e.gitOrganization)?t:"@heusalagroup"),r.setOrganizationName(null!=(
t=null==e?void 0:e.organizationName)?t:"Heusala Group"),r.setOrganizationEmail(null!=(
t=null==e?void 0:e.organizationEmail)?t:"info@heusalagroup.fi"),r.setSourceDir(null!=(t=null==e?void 0:e.sourceDir
)?t:"./src"),r.setBuildDir(null!=(t=null==e?void 0:e.buildDir)?t:"./dist"),r.setMainSourceFileTemplate(null!=(
t=null==e?void 0:e.mainSourceFileTemplate)?t:"./src/run.ts"),r.setFiles(null!=(t=null==e?void 0:e.files)?t:[]),
r.setGitSubmodules(null!=(t=null==e?void 0:e.gitSubmodules)?t:[]),r.setPackages(null!=(t=null==e?void 0:e.packages)?t:[]
),r.setGitCommitMessage(null!=(t=null==e?void 0:e.gitCommitMessage)?t:"first commit"),r.setGitBranch(null!=(
t=null==e?void 0:e.gitBranch)?t:"main"),r}toString(){return"CreatePackageConfig"}toJSON(){return{}}
setPreferredPackageSystem(e){return this._preferredPackageSystem=e,this}getPreferredPackageSystem(){var e;return null!=(
e=this._preferredPackageSystem)?e:pa.NPM}setGitOrganization(e){return this._gitOrganization=e,this}getGitOrganization(){
return this._gitOrganization}setOrganizationName(e){return this._organizationName=e,this}getOrganizationName(){
return this._organizationName}setOrganizationEmail(e){return this._organizationEmail=e,this}getOrganizationEmail(){
return this._organizationEmail}setPackageDirectory(e){return this._pkgDir=e,this}getPackageDirectory(){
return this._pkgDir}setBuildDir(e){return this._buildDir=e,this}getBuildDir(){return this._buildDir}setSourceDir(e){
return this._sourceDir=e,this}getSourceDir(){return this._sourceDir}setTemplatesDirectory(e){return this._templatesDir=e
,this}getTemplatesDirectory(){return this._templatesDir}setGitCommitMessage(e){return this._gitCommitMessage=e,this}
getGitCommitMessage(){return this._gitCommitMessage}setGitBranch(e){return this._gitBranch=e,this}getGitBranch(){
return this._gitBranch}setMainName(e){return this._mainName=e,this}_getDefaultMainName(){var e=this.getPackageDirectory(
);if(e)return k.basename(e);throw new TypeError("Package directory or main name must be set first")}getMainName(){var e;
return null!=(e=this._mainName)?e:this._getDefaultMainName()}setDistFile(e){return this._distFile=e,this}getDistFile(){
var e;return null!=(e=this._distFile)?e:k.join(this.getBuildDir(),this.getMainName()+".js")}setMainSourceFileName(e){
return this._mainSrcFileName=e,this}getMainSourceFileName(){var e;return null!=(e=this._mainSrcFileName)?e:k.join(
this.getSourceDir(),this.getMainName()+".ts")}setMainSourceFileTemplate(e){return this._mainSrcFileTemplate=e,this}
getMainSourceFileTemplate(){var e;return null!=(e=this._mainSrcFileTemplate)?e:k.join(this.getSourceDir(),
this.getMainName()+".ts")}setFiles(e){return this._files=io(e,e=>e),this}getFiles(){return this._files}setPackages(e){
return this._packages=io(e,e=>e),this}getPackages(){return this._packages}setGitSubmodules(e){
return this._gitSubmodules=io(e,e=>e),this}getGitSubmodules(){return this._gitSubmodules}setPackageJsonModifier(e){
return this._packageJsonModifier=e,this}getPackageJsonModifier(){return this._packageJsonModifier}}
const Au=Tu.createLogger("SyncFileUtils");class R{static isDirectory(e){return gu.default.statSync(e).isDirectory()}
static directoryExits(e){return gu.default.existsSync(e)&&gu.default.statSync(e).isDirectory()}static mkdirp(e){var t,r;
Au.debug("mkdirp: Creating directory: ",e);const n=[];for(;!R.directoryExits(e)&&(n.push(e),e!==(t=hu.default.dirname(e)
));)e=t;for(;1<=n.length;){if(!(r=n.pop()))throw new TypeError("No dir");Au.debug("mkdirp: Creating missing directory: "
,r),gu.default.mkdirSync(r)}}static readTextFile(e){return gu.default.readFileSync(e,"utf8")}static fileExists(e){
return gu.default.existsSync(e)}static readJsonFile(e){return JSON.parse(R.readTextFile(e))}static writeTextFile(e,t){
gu.default.writeFileSync(e,t,{encoding:"utf8"})}static writeJsonFile(e,t){t=JSON.stringify(t,null,2);R.writeTextFile(e,t
)}static copyTextFileWithReplacements(e,t,r){let n=R.readTextFile(e);X(r).forEach(e=>{var t=r[e];n=n.replace(e,t)}),
R.writeTextFile(t,n)}static copyTextFileWithReplacementsIfMissing(e,t,r){R.fileExists(t)?Au.warn(
"Warning! File already exists: ",t):R.copyTextFileWithReplacements(e,t,r)}}ha={},g={},e={exports:{}},m={exports:{}},
Xs=function(e){try{return e()}catch(e){}},(d=function(r,n,o){ga.stat(r,function(e,t){o(e,!e&&re(t,r,n))})}
).sync=function(e,t){return re(ga.statSync(e),e,t)},ga=gu.default,(T=function(e,r,n){ma.stat(e,function(e,t){n(e,!e&&ne(
t,r))})}).sync=function(e,t){return ne(ma.statSync(e),t)},ma=gu.default,
va="win32"===process.platform||M.TESTING_WINDOWS?d:T,(o=function e(t,o,r){if("function"==typeof o&&(r=o,o={}),!r){if(
"function"!=typeof Promise)throw new TypeError("callback not provided");return new Promise(function(r,n){e(t,o||{},
function(e,t){e?n(e):r(t)})})}va(t,o||{},function(e,t){e&&("EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})
}).sync=function(e,t){try{return va.sync(e,t||{})}catch(e){if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}},(
ns=function(n,u,c){var e,o,l,f,d;"function"==typeof u&&(c=u,u={}),e=ie(n,u),o=e.env,l=e.ext,f=e.extExe,d=[],function e(t
,a){var r,s;return t===a?u.all&&d.length?c(null,d):c(oe(n)):('"'===(r=o[t]).charAt(0)&&'"'===r.slice(-1)&&(r=r.slice(1,
-1)),s=ya.join(r,n),!r&&/^\.[\\\/]/.test(n)&&(s=n.slice(0,2)+s),void function r(n,o){if(n===o)return e(t+1,a);var i=l[n]
xa(s+i,{pathExt:f},function(e,t){if(!e&&t){if(!u.all)return c(null,s+i);d.push(s+i)}return r(n+1,o)})}(0,l.length))}(0,
o.length)}).sync=function(e,t){for(var r,n,o,i,a,s,u=(r=ie(e,t=t||{})).env,c=r.ext,l=r.extExe,f=[],d=0,
p=u.length;d<p;d++)for('"'===(n=u[d]).charAt(0)&&'"'===n.slice(-1)&&(n=n.slice(1,-1)),o=ya.join(n,e),
!n&&/^\.[\\\/]/.test(e)&&(o=e.slice(0,2)+o),i=0,a=c.length;i<a;i++){s=o+c[i];try{if(xa.sync(s,{pathExt:l})){if(!t.all
)return s;f.push(s)}}catch(e){}}if(t.all&&f.length)return f;if(t.nothrow)return null;throw oe(e)},
ba="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,ya=hu.default,wa=ba?";":":",
xa=o;const Iu=hu.default,Nu=ns,Cu=(P=e=>{var t=(e=e||{}).env||process.env;return"win32"!==(e.platform||process.platform
)?"PATH":Object.keys(t).find(e=>"PATH"===e.toUpperCase())||"Path"})(),Mu=(l=function(e){return ae(e)||ae(e,!0)},
/([()\][%!^"`<>&|;, *?])/g),Ru=((bs={}).command=function(e){return e.replace(Mu,"^$1")},bs.argument=function(e,t){
return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(Mu,"^$1"),t?e.replace(
Mu,"^$1"):e},_a=/^#!.*/,gu.default);for(E=function(e){var t;let r;Buffer.alloc?r=Buffer.alloc(150):(r=new Buffer(150)
).fill(0);try{t=Ru.openSync(e,"r"),Ru.readSync(t,r,0,150,0),Ru.closeSync(t)}catch(e){}return(e=r.toString().match(_a))?(
e=(t=e[0].replace(/#! ?/,"").split(" "))[0].split("/").pop(),t=t[1],"env"===e?t:e+(t?" "+t:"")):null},j=(S={exports:{}}
).exports,j=S.exports=p,y="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(
process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(
console,e)}:function(){},j.SEMVER_SPEC_VERSION="2.0.0",As=256,Is=Number.MAX_SAFE_INTEGER||9007199254740991,w=j.re=[],(
x=j.src=[])[0]="0|[1-9]\\d*",x[1]="[0-9]+",x[2]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",x[3]="("+x[0]+")\\.("+x[0]+")\\.("+x[0]+")"
,x[4]="("+x[1]+")\\.("+x[1]+")\\.("+x[1]+")",x[5]="(?:"+x[0]+"|"+x[2]+")",x[6]="(?:"+x[1]+"|"+x[2]+")",
x[7]="(?:-("+x[5]+"(?:\\."+x[5]+")*))",x[8]="(?:-?("+x[6]+"(?:\\."+x[6]+")*))",x[9]="[0-9A-Za-z-]+",
x[10]="(?:\\+("+x[9]+"(?:\\."+x[9]+")*))",Ns=11,N="v?"+x[3]+x[7]+"?"+x[10]+"?",x[Ns]="^"+N+"$",
_="[v=\\s]*"+x[4]+x[8]+"?"+x[10]+"?",x[Cs=12]="^"+_+"$",x[13]="((?:<|>)?=?)",x[14]=x[1]+"|x|X|\\*",x[15]=x[0]+"|x|X|\\*"
,x[16]="[v=\\s]*("+x[15]+")(?:\\.("+x[15]+")(?:\\.("+x[15]+")(?:"+x[7]+")?"+x[10]+"?)?)?",
x[17]="[v=\\s]*("+x[14]+")(?:\\.("+x[14]+")(?:\\.("+x[14]+")(?:"+x[8]+")?"+x[10]+"?)?)?",
x[18]="^"+x[13]+"\\s*"+x[16]+"$",x[19]="^"+x[13]+"\\s*"+x[17]+"$",
x[20]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",x[21]="(?:~>?)",
x[22]="(\\s*)"+x[21]+"\\s+",w[22]=new RegExp(x[22],"g"),x[23]="^"+x[21]+x[16]+"$",x[24]="^"+x[21]+x[17]+"$",
x[25]="(?:\\^)",x[26]="(\\s*)"+x[25]+"\\s+",w[26]=new RegExp(x[26],"g"),x[27]="^"+x[25]+x[16]+"$",
x[28]="^"+x[25]+x[17]+"$",x[29]="^"+x[13]+"\\s*("+_+")$|^$",x[30]="^"+x[13]+"\\s*("+N+")$|^$",
x[31]="(\\s*)"+x[13]+"\\s*("+_+"|"+x[16]+")",w[31]=new RegExp(x[31],"g"),
x[32]="^\\s*("+x[16]+")\\s+-\\s+("+x[16]+")\\s*$",x[33]="^\\s*("+x[17]+")\\s+-\\s+("+x[17]+")\\s*$",
x[34]="(<|>)?=?\\s*\\*",Ms=0;Ms<35;Ms++)y(Ms,x[Ms]),w[Ms]||(w[Ms]=new RegExp(x[Ms]));j.parse=_e,j.valid=function(e,t){
e=_e(e,t);return e?e.version:null},j.clean=function(e,t){e=_e(e.trim().replace(/^[=v]+/,""),t);return e?e.version:null},
(j.SemVer=p).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,
this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){
return this.version},p.prototype.compare=function(e){return y("SemVer.compare",this.version,this.options,e),
e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){
return e instanceof p||(e=new p(e,this.options)),Ee(this.major,e.major)||Ee(this.minor,e.minor)||Ee(this.patch,e.patch)}
,p.prototype.comparePre=function(e){var t,r,n;if(e instanceof p||(e=new p(e,this.options)),
this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(
!this.prerelease.length&&!e.prerelease.length)return 0;t=0;do{if(r=this.prerelease[t],n=e.prerelease[t],y(
"prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n
)return Ee(r,n)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0
,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,
this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":
0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];
break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;
case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length
)this.prerelease=[0];else{for(var r=this.prerelease.length;0<=--r;)"number"==typeof this.prerelease[r]&&(
this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]!==t||isNaN(this.prerelease[1]))&&(
this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),
this.raw=this.version,this},j.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n
).version}catch(e){return null}},j.diff=function(e,t){var r,n,o,i,a;if(Pe(e,t))return null;for(a in r=_e(e),n=_e(t),o=""
,(r.prerelease.length||n.prerelease.length)&&(o="pre",i="prerelease"),r)if(("major"===a||"minor"===a||"patch"===a
)&&r[a]!==n[a])return o+a;return i},j.compareIdentifiers=Ee,Rs=/^[0-9]+$/,j.rcompareIdentifiers=function(e,t){return Ee(
t,e)},j.major=function(e,t){return new p(e,t).major},j.minor=function(e,t){return new p(e,t).minor},j.patch=function(e,t
){return new p(e,t).patch},j.compare=je,j.compareLoose=function(e,t){return je(e,t,!0)},j.rcompare=function(e,t,r){
return je(t,e,r)},j.sort=function(e,r){return e.sort(function(e,t){return j.compare(e,t,r)})},j.rsort=function(e,r){
return e.sort(function(e,t){return j.rcompare(e,t,r)})},j.gt=Oe,j.lt=Se,j.eq=Pe,j.neq=Te,j.gte=ke,j.lte=Ae,j.cmp=Ie,
j.Comparator=Ne,Gs={},Ne.prototype.parse=function(e){var t=this.options.loose?w[29]:w[30],t=e.match(t);if(!t
)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),
t[2]?this.semver=new p(t[2],this.options.loose):this.semver=Gs},Ne.prototype.toString=function(){return this.value},
Ne.prototype.test=function(e){return y("Comparator.test",e,this.options.loose),this.semver===Gs||Ie(
e="string"==typeof e?new p(e,this.options):e,this.operator,this.semver,this.options)},Ne.prototype.intersects=function(e
,t){var r,n,o,i,a;if(e instanceof Ne)return t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),
""===this.operator?(r=new h(e.value,t),Re(this.value,r,t)):""===e.operator?(r=new h(this.value,t),Re(e.semver,r,t)):(
r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!(
"<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version
,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=Ie(this.semver,"<",e.semver,t
)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),t=Ie(this.semver,">",e.semver,t
)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator),r||n||o&&i||a||t);
throw new TypeError("a Comparator is required")},(j.Range=h).prototype.format=function(){return this.range=this.set.map(
function(e){return e.join(" ").trim()}).join("||").trim(),this.range},h.prototype.toString=function(){return this.range}
,h.prototype.parseRange=function(e){var t,r,n=this.options.loose;return e=e.trim(),r=n?w[33]:w[32],e=e.replace(r,Me),y(
"hyphen replace",e),e=e.replace(w[31],"$1$2$3"),y("comparator trim",e,w[31]),e=(e=(e=e.replace(w[22],"$1~")).replace(
w[26],"$1^")).split(/\s+/).join(" "),t=n?w[29]:w[30],r=e.split(" ").map(function(e){return t=this.options,y("comp",e=e,t
),r=t,e=e.trim().split(/\s+/).map(function(e){return y("caret",i=e,e=r),e=e.loose?w[28]:w[27],i.replace(e,function(e,t,r
,n,o){return y("caret",i,e,t,r,n,o),e=Ce(t)?"":Ce(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Ce(n
)?"0"===t?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":">="+t+"."+r+".0 <"+(+t+1)+".0.0":o?(y("replaceCaret pr",o),
"0"===t?"0"===r?">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+r+"."+(+n+1):">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1
)+".0":">="+t+"."+r+"."+n+"-"+o+" <"+(+t+1)+".0.0"):(y("no pr"),"0"===t?"0"===r?">="+t+"."+r+"."+n+" <"+t+"."+r+"."+(
+n+1):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0":">="+t+"."+r+"."+n+" <"+(+t+1)+".0.0"),y("caret return",e),e});var i}
).join(" "),y("caret",e),n=t,e=e.trim().split(/\s+/).map(function(e){return i=e,e=n.loose?w[24]:w[23],i.replace(e,
function(e,t,r,n,o){return y("tilde",i,e,t,r,n,o),e=Ce(t)?"":Ce(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Ce(n
)?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":o?(y("replaceTilde pr",o),">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1)+".0"
):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0",y("tilde return",e),e});var i}).join(" "),y("tildes",e),y("replaceXRanges",
i=e,o=t),e=i.split(/\s+/).map(function(e){return t=o,u=(u=e).trim(),e=t.loose?w[19]:w[18],u.replace(e,function(e,t,r,n,o
,i){var a,s;return y("xRange",u,e,t,r,n,o,i),s=(a=(i=Ce(r))||Ce(n))||Ce(o),"="===t&&s&&(t=""),
i?e=">"===t||"<"===t?"<0.0.0":"*":t&&s?(a&&(n=0),o=0,">"===t?(t=">=",o=a?(r=+r+1,n=0):(n=+n+1,0)):"<="===t&&(t="<",
a?r=+r+1:n=+n+1),e=t+r+"."+n+"."+o):a?e=">="+r+".0.0 <"+(+r+1)+".0.0":s&&(e=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0"),y(
"xRange return",e),e});var u,t}).join(" "),y("xrange",e),y("replaceStars",i=e,t),e=i.trim().replace(w[34],""),y("stars",
e),e;var t,r,n,o,i},this).join(" ").split(/\s+/),(r=this.options.loose?r.filter(function(e){return!!e.match(t)}):r).map(
function(e){return new Ne(e,this.options)},this)},h.prototype.intersects=function(r,n){if(r instanceof h
)return this.set.some(function(e){return e.every(function(t){return r.set.some(function(e){return e.every(function(e){
return t.intersects(e,n)})})})});throw new TypeError("a Range is required")},j.toComparators=function(e,t){return new h(
e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},
h.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new p(e,this.options));for(
var t=0;t<this.set.length;t++)if(function(e,t,r){for(var n,o=0;o<e.length;o++)if(!e[o].test(t))return;if(
!t.prerelease.length||r.includePrerelease)return 1;for(o=0;o<e.length;o++)if(y(e[o].semver),
e[o].semver!==Gs&&0<e[o].semver.prerelease.length&&(n=e[o].semver).major===t.major&&n.minor===t.minor&&n.patch===t.patch
)return 1}(this.set[t],e,this.options))return!0;return!1},j.satisfies=Re,j.maxSatisfying=function(e,t,r){var n,o=null,
i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(function(e){!n.test(e)||o&&-1!==i.compare(e)||(i=new p(o=e
,r))}),o},j.minSatisfying=function(e,t,r){var n,o=null,i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(
function(e){!n.test(e)||o&&1!==i.compare(e)||(i=new p(o=e,r))}),o},j.minVersion=function(e,t){var r,n;if(e=new h(e,t),
r=new p("0.0.0"),e.test(r))return r;if(r=new p("0.0.0-0"),e.test(r))return r;for(r=null,n=0;n<e.set.length;++n
)e.set[n].forEach(function(e){var t=new p(e.semver.version);switch(e.operator){case">":
0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!Oe(r,t)||(r=t);break;
case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}});return r&&e.test(r)?r:null},
j.validRange=function(e,t){try{return new h(e,t).range||"*"}catch(e){return null}},j.ltr=function(e,t,r){return Ge(e,t,
"<",r)},j.gtr=function(e,t,r){return Ge(e,t,">",r)},j.outside=Ge,j.prerelease=function(e,t){e=_e(e,t);
return e&&e.prerelease.length?e.prerelease:null},j.intersects=function(e,t,r){return e=new h(e,r),t=new h(t,r),
e.intersects(t)},j.coerce=function(e){if(e instanceof p)return e;if("string"!=typeof e)return null;e=e.match(w[20]);
return null==e?null:_e(e[1]+"."+(e[2]||"0")+"."+(e[3]||"0"))};const Gu=hu.default,Fu=Xs,Du=l,Lu=bs,Bu=E,$u=S.exports,
zu="win32"===process.platform,Uu=/\.(?:com|exe)$/i,Wu=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,Vu=Fu(()=>$u.satisfies(
process.version,"^4.8.0 || ^5.7.0 || >= 6.0.0",!0))||!1,qu="win32"===process.platform,Hu=ou.default,Zu={
hookChildProcess:function(r,n){if(qu){const o=r.emit;r.emit=function(e,t){if("exit"===e){e=ue(t,n);if(e)return o.call(r,
"error",e)}return o.apply(r,arguments)}}},verifyENOENT:ue,verifyENOENTSync:function(e,t){return qu&&1===e&&!t.file?se(
t.original,"spawnSync"):null},notFoundError:se};m.exports=ce,m.exports.spawn=ce,m.exports.sync=function(e,t,r){e=Ue(e,t,
r);const n=Hu.spawnSync(e.command,e.args,e.options);return n.error=n.error||Zu.verifyENOENTSync(n.status,e),n},
m.exports._parse=Ue,m.exports._enoent=Zu,Ws=function(e){var t="string"==typeof e?"\n":"\n".charCodeAt(),
r="string"==typeof e?"\r":"\r".charCodeAt();return(e=e[e.length-1]===t?e.slice(0,e.length-1):e)[e.length-1]===r?e.slice(
0,e.length-1):e};{Ds=Vs={exports:{}};const ol=hu.default,il=P;Ds.exports=e=>{e=Object.assign({cwd:process.cwd(),
path:process.env[il()]},e);let t,r=ol.resolve(e.cwd);const n=[];for(;t!==r;)n.push(ol.join(r,"node_modules/.bin")),t=r,
r=ol.resolve(r,"..");return n.push(ol.dirname(process.execPath)),n.concat(e.path).join(ol.delimiter)},
Ds.exports.env=e=>{e=Object.assign({env:process.env},e);const t=Object.assign({},e.env);var r=il({env:t});
return e.path=t[r],t[r]=Ds.exports(e),t}}(Ea=(v={exports:{}}).exports=function(e){
return null!==e&&"object"==typeof e&&"function"==typeof e.pipe}).writable=function(e){return Ea(e
)&&!1!==e.writable&&"function"==typeof e._write&&"object"==typeof e._writableState},Ea.readable=function(e){return Ea(e
)&&!1!==e.readable&&"function"==typeof e._read&&"object"==typeof e._readableState},Ea.duplex=function(e){
return Ea.writable(e)&&Ea.readable(e)},Ea.transform=function(e){return Ea.duplex(e
)&&"function"==typeof e._transform&&"object"==typeof e._transformState},i={exports:{}},(f={exports:{}}).exports=(
I=function e(o,t){function r(){for(var t,r,e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];
return t=o.apply(this,e),r=e[e.length-1],"function"==typeof t&&t!==r&&Object.keys(r).forEach(function(e){t[e]=r[e]}),t}
if(o&&t)return e(o)(t);if("function"!=typeof o)throw new TypeError("need wrapper function");return Object.keys(o
).forEach(function(e){r[e]=o[e]}),r})(le),f.exports.strict=I(fe),le.proto=le(function(){Object.defineProperty(
Function.prototype,"once",{value:function(){return le(this)},configurable:!0}),Object.defineProperty(Function.prototype,
"onceStrict",{value:function(){return fe(this)},configurable:!0})}),ja=f.exports,Oa=function(){},Sa=function(e){
return e.setHeader&&"function"==typeof e.abort},Pa=function(e){return e.stdio&&Array.isArray(e.stdio
)&&3===e.stdio.length},ka=f.exports,Aa=Ta=function(t,e,r){var n,o,i,a,s,u,c,l,f,d,p,h,g;return"function"==typeof e?Ta(t,
null,e):(e=e||{},r=ja(r||Oa),n=t._writableState,o=t._readableState,i=e.readable||!1!==e.readable&&t.readable,
a=e.writable||!1!==e.writable&&t.writable,s=!1,u=function(){t.writable||c()},c=function(){a=!1,i||r.call(t)},l=function(
){i=!1,a||r.call(t)},f=function(e){r.call(t,e?new Error("exited with error code: "+e):null)},d=function(e){r.call(t,e)},
p=function(){process.nextTick(h)},h=function(){if(!s)return(!i||o&&o.ended&&!o.destroyed)&&(!a||n&&n.ended&&!n.destroyed
)?void 0:r.call(t,new Error("premature close"))},g=function(){t.req.on("finish",c)},Sa(t)?(t.on("complete",c),t.on(
"abort",p),t.req?g():t.on("request",g)):a&&!n&&(t.on("end",u),t.on("close",u)),Pa(t)&&t.on("exit",f),t.on("end",l),t.on(
"finish",c),!1!==e.error&&t.on("error",d),t.on("close",p),function(){s=!0,t.removeListener("complete",c),
t.removeListener("abort",p),t.removeListener("request",g),t.req&&t.req.removeListener("finish",c),t.removeListener("end"
,u),t.removeListener("close",u),t.removeListener("finish",c),t.removeListener("exit",f),t.removeListener("end",l),
t.removeListener("error",d),t.removeListener("close",p)})},Ia=gu.default,Na=function(){},Ca=/^v?\.0/.test(
process.version),Ma=function(e){return"function"==typeof e},Ra=function(e){return!!Ca&&!!Ia&&(e instanceof(
Ia.ReadStream||Na)||e instanceof(Ia.WriteStream||Na))&&Ma(e.close)},Ga=function(e){return e.setHeader&&Ma(e.abort)},
Fa=function(t,e,r,n){var o,i;return n=ka(n),o=!1,t.on("close",function(){o=!0}),Aa(t,{readable:e,writable:r},function(e
){if(e)return n(e);o=!0,n()}),i=!1,function(e){if(!o&&!i)return i=!0,Ra(t)?t.close(Na):Ga(t)?t.abort():Ma(t.destroy
)?t.destroy():void n(e||new Error("stream was destroyed"))}},Da=function(e){e()},La=function(e,t){return e.pipe(t)};
const Ju=iu.default.PassThrough;class Yu extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}i.exports=de,i.exports.buffer=(e,t)=>de(e,Object.assign({},t,{encoding:"buffer"})),
i.exports.array=(e,t)=>de(e,Object.assign({},t,{array:!0})),i.exports.MaxBufferError=Yu,du=(e,t)=>(t=t||(()=>{}),e.then(
e=>new Promise(e=>{e(t())}).then(()=>e),e=>new Promise(e=>{e(t())}).then(()=>{throw e}))),a={exports:{}},(Fs=C={
exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&Fs.exports.push(
"SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),
"linux"===process.platform&&Fs.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),Fe(s=M.process)?(
Ba=au.default,$a=C.exports,za=/^win/i.test(s.platform),"function"!=typeof(fu=su.default)&&(fu=fu.EventEmitter),
s.__signal_exit_emitter__?u=s.__signal_exit_emitter__:((u=s.__signal_exit_emitter__=new fu).count=0,u.emitted={}),
u.infinite||(u.setMaxListeners(1/0),u.infinite=!0),a.exports=function(e,t){var r;return Fe(M.process)?(Ba.equal(typeof e
,"function","a callback must be provided for exit handler"),!1===qa&&Ha(),r="exit",t&&t.alwaysLast&&(r="afterexit"),
t=function(){u.removeListener(r,e),0===u.listeners("exit").length&&0===u.listeners("afterexit").length&&Ua()},u.on(r,e),
t):function(){}},Ua=function(){qa&&Fe(M.process)&&(qa=!1,$a.forEach(function(e){try{s.removeListener(e,Va[e])}catch(e){}
}),s.emit=Ya,s.reallyExit=Za,--u.count)},a.exports.unload=Ua,Wa=function(e,t,r){u.emitted[e]||(u.emitted[e]=!0,u.emit(e,
t,r))},Va={},$a.forEach(function(e){Va[e]=function(){Fe(M.process)&&s.listeners(e).length===u.count&&(Ua(),Wa("exit",
null,e),Wa("afterexit",null,e),za&&"SIGHUP"===e&&(e="SIGINT"),s.kill(s.pid,e))}}),a.exports.signals=function(){return $a
},qa=!1,Ha=function(){!qa&&Fe(M.process)&&(qa=!0,u.count+=1,$a=$a.filter(function(e){try{return s.on(e,Va[e]),!0}catch(e
){return!1}}),s.emit=Xa,s.reallyExit=Ja)},a.exports.load=Ha,Za=s.reallyExit,Ja=function(e){Fe(M.process)&&(
s.exitCode=e||0,Wa("exit",s.exitCode,null),Wa("afterexit",s.exitCode,null),Za.call(s,s.exitCode))},Ya=s.emit,
Xa=function(e,t){return"exit"===e&&Fe(M.process)?(void 0!==t&&(s.exitCode=t),e=Ya.apply(this,arguments),Wa("exit",
s.exitCode,null),Wa("afterexit",s.exitCode,null),e):Ya.apply(this,arguments)}):a.exports=function(){return function(){}}
,zs=a.exports,A={exports:{}},O=uu.default;let Xu;if("function"==typeof O.getSystemErrorName
)A.exports=O.getSystemErrorName;else{try{if("function"!=typeof(Xu=process.binding("uv")).errname)throw new TypeError(
"uv.errname is not a function")}catch(e){console.error("execa/lib/errname: unable to establish process.binding('uv')",e)
,Xu=null}A.exports=e=>pe(Xu,e)}A.exports.__test__=pe;const Ku=["stdin","stdout","stderr"];{function Qu(e,t,r){let n;
return(r=Object.assign({extendEnv:!0,env:{}},r)).extendEnv&&(r.env=Object.assign({},process.env,r.env)),
n=!0===r.__winShell?(delete r.__winShell,{command:e,args:t,options:r,file:e,original:{cmd:e,args:t}}):ul._parse(e,t,r),(
r=Object.assign({maxBuffer:1e7,buffer:!0,stripEof:!0,preferLocal:!0,localDir:n.options.cwd||process.cwd(),
encoding:"utf8",reject:!0,cleanup:!0},n.options)).stdio=(r=>{var t,n,e;if(!r)return null;if(r.stdio&&(t=r,Ku.some(
e=>Boolean(t[e]))))throw new Error("It's not possible to provide `stdio` in combination with one of "+Ku.map(
e=>`\`${e}\``).join(", "));if("string"==typeof r.stdio)return r.stdio;if(n=r.stdio||[],!Array.isArray(n)
)throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);const o=[];
e=Math.max(n.length,Ku.length);for(let t=0;t<e;t++){let e=null;void 0!==n[t]?e=n[t]:void 0!==r[Ku[t]]&&(e=r[Ku[t]]),
o[t]=e}return o})(r),r.preferLocal&&(r.env=ll.env(Object.assign({},r,{cwd:r.localDir}))),r.detached&&(r.cleanup=!1),
"win32"===process.platform&&"cmd.exe"===al.basename(n.command)&&n.args.unshift("/q"),{cmd:n.command,args:n.args,opts:r,
parsed:n}}function ec(e,t){return t&&e.stripEof?cl(t):t}function tc(e,t,r){let n="/bin/sh",o=["-c",t];
return r=Object.assign({},r),"win32"===process.platform&&(r.__winShell=!0,n=process.env.comspec||"cmd.exe",o=["/s","/c",
`"${t}"`],r.windowsVerbatimArguments=!0),r.shell&&(n=r.shell,delete r.shell),e(n,o,r)}function rc(r,n,{encoding:e,
buffer:t,maxBuffer:o}){if(!r[n])return null;let i;return(i=t?e?dl(r[n],{encoding:e,maxBuffer:o}):dl.buffer(r[n],{
maxBuffer:o}):new Promise((e,t)=>{r[n].once("end",e).once("error",t)})).catch(e=>{throw e.stream=n,
e.message=n+" "+e.message,e})}function nc(t,e){var{stdout:r,stderr:n}=t;let o=t.error;var{code:t,signal:i}=t,{parsed:a,
joinedCmd:s}=e,e=e.timedOut||!1;if(!o){let e="";Array.isArray(a.opts.stdio)?("inherit"!==a.opts.stdio[2]&&(
e+=0<e.length?n:`
`+n),"inherit"!==a.opts.stdio[1]&&(e+=`
`+r)):"inherit"!==a.opts.stdio&&(e=`
`+n+r),(o=new Error("Command failed: "+s+e)).code=t<0?gl(t):t}return o.stdout=r,o.stderr=n,o.failed=!0,o.signal=i||null,
o.cmd=s,o.timedOut=e,o}function oc(e,t){let r=e;return Array.isArray(t)&&0<t.length&&(r+=" "+t.join(" ")),r}Us=e;
const al=hu.default,sl=ou.default,ul=m.exports,cl=Ws,ll=Vs.exports,fl=v.exports,dl=i.exports,pl=du,hl=a.exports,
gl=A.exports;Us.exports=(e,t,r)=>{function n(){c.stdout&&c.stdout.destroy(),c.stderr&&c.stderr.destroy()}const o=Qu(e,t,
r),{encoding:i,buffer:a,maxBuffer:s}=o.opts,u=oc(e,t);let c;try{c=sl.spawn(o.cmd,o.args,o.opts)}catch(e){
return Promise.reject(e)}let l,f=(o.opts.cleanup&&(l=hl(()=>{c.kill()})),null),d=!1;const p=()=>{f&&(clearTimeout(f),
f=null),l&&l()},h=(0<o.opts.timeout&&(f=setTimeout(()=>{f=null,d=!0,c.kill(o.opts.killSignal)},o.opts.timeout)),
new Promise(r=>{c.on("exit",(e,t)=>{p(),r({code:e,signal:t})}),c.on("error",e=>{p(),r({error:e})}),c.stdin&&c.stdin.on(
"error",e=>{p(),r({error:e})})})),g=()=>pl(Promise.all([h,rc(c,"stdout",{encoding:i,buffer:a,maxBuffer:s}),rc(c,"stderr"
,{encoding:i,buffer:a,maxBuffer:s})]).then(e=>{const t=e[0];if(t.stdout=e[1],t.stderr=e[2],
t.error||0!==t.code||null!==t.signal){const r=nc(t,{joinedCmd:u,parsed:o,timedOut:d});if(r.killed=r.killed||c.killed,
o.opts.reject)throw r;return r}return{stdout:ec(o.opts,t.stdout),stderr:ec(o.opts,t.stderr),code:0,failed:!1,killed:!1,
signal:null,cmd:u,timedOut:!1}}),n);return ul._enoent.hookChildProcess(c,o.parsed),r=c,null!=(e=o.opts.input)&&(fl(e
)?e.pipe(r.stdin):r.stdin.end(e)),c.then=(e,t)=>g().then(e,t),c.catch=e=>g().catch(e),c},Us.exports.stdout=(...e
)=>Us.exports(...e).then(e=>e.stdout),Us.exports.stderr=(...e)=>Us.exports(...e).then(e=>e.stderr),Us.exports.shell=(e,t
)=>tc(Us.exports,e,t),Us.exports.sync=(e,t,r)=>{r=Qu(e,t,r),e=oc(e,t);if(fl(r.opts.input))throw new TypeError(
"The `input` option cannot be a stream in sync mode");const n=sl.spawnSync(r.cmd,r.args,r.opts);if(n.code=n.status,
n.error||0!==n.status||null!==n.signal){if(t=nc(n,{joinedCmd:e,parsed:r}),r.opts.reject)throw t;return t}return{
stdout:ec(r.opts,n.stdout),stderr:ec(r.opts,n.stderr),code:0,failed:!1,signal:null,cmd:e,timedOut:!1}},
Us.exports.shellSync=(e,t)=>tc(Us.exports.sync,e,t)}Ka={},Object.defineProperty(Ka,"__esModule",{value:!0}),
Ka.ValidPackageFlags=new Set(["dev","exact","noSave","bundle","verbose"]),Ka.ValidProjectInstallFlags=new Set(["dryRun",
"verbose"]),Ka.defaultInstallConfig={dev:!1,prefer:null,exact:!1,noSave:!1,bundle:!1,verbose:!1,global:!1,stdio:"pipe",
cwd:process.cwd()},c={},Qa=M&&M.__extends||(Ls=function(e,t){return(Ls=Object.setPrototypeOf||{__proto__:[]
}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},
function(e,t){function r(){this.constructor=e}Ls(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,
new r)}),Object.defineProperty(c,"__esModule",{value:!0}),c.getPackageList=function(e){return Array.isArray(e)?e.filter(
function(e){return"string"==typeof e}):Object.entries(e).filter(function(e){var t=e[0],e=e[1];
return"string"==typeof t&&"string"==typeof e||void 0===e}).map(function(e){var t=e[0],e=e[1];return e?t+"@"+e:t})},
c.getExecaConfig=function(e){return{stdio:e.stdio,cwd:e.cwd}},Qa(De,Bs=Error),c.UnreachableCaseError=De,d={},T={},
Object.defineProperty(T,"__esModule",{value:!0}),es=Ka,T.getFlagsToSet=function(e){return Object.entries(e).filter(
function(e){var t=e[0];return!!e[1]&&es.ValidPackageFlags.has(t)}).map(function(e){return e[0]})},Object.defineProperty(
d,"__esModule",{value:!0}),ts=T,rs=c,d.constructNpmArguments=function(e,t){var r=ts.getFlagsToSet(t),n=t.global?["-g"]:[
],o=["install"].concat(n,e),i=[];return r.forEach(function(e){switch(e){case"dev":t.global?i.push(e):o.push("--save-dev"
);break;case"exact":o.push("--save-exact");break;case"verbose":o.push("--verbose");break;case"bundle":o.push(
"--save-bundle");break;case"noSave":o.push("--no-save");break;default:throw new rs.UnreachableCaseError(e)}}),{args:o,
ignoredFlags:i}},d.npmProjectInstallArgs=["install"],ns={},N={},os=M&&M.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
is=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},_=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
,Object.defineProperty(N,"__esModule",{value:!0}),as=_(e.exports),ss=gu.default,us=_(hu.default),Xs=uu.default,
cs=Xs.promisify(ss.access),N.isManagerInstalled=function(t){return os(this,void 0,void 0,function(){return is(this,
function(e){switch(e.label){case 0:return[4,as.default(t,["--version"])];case 1:return[2,!e.sent().failed]}})})},
N.isManagerInstalledSync=function(e){return!as.default.sync(e,["--version"]).failed},
N.getCurrentPackageManager=function(){var e=process.env.npm_config_user_agent;return e?e.startsWith("npm"
)?"npm":e.startsWith("yarn")?"yarn":null:null},N.getPackageManagerFromLockfile=function(n){return os(this,void 0,void 0,
function(){var t,r;return is(this,function(e){switch(e.label){case 0:t=us.default.join(n.cwd,"package-lock.json"),
r=us.default.join(n.cwd,"yarn.lock"),e.label=1;case 1:return e.trys.push([1,3,,8]),[4,cs(t)];case 2:return e.sent(),[2,
"npm"];case 3:e.sent(),e.label=4;case 4:return e.trys.push([4,6,,7]),[4,cs(r)];case 5:return e.sent(),[2,"yarn"];case 6:
return e.sent(),[2,null];case 7:return[3,8];case 8:return[2]}})})},N.getPackageManagerFromLockfileSync=function(t){
var e=us.default.join(t.cwd,"package-lock.json"),t=us.default.join(t.cwd,"yarn.lock");try{return ss.accessSync(e),"npm"
}catch(e){try{return ss.accessSync(t),"yarn"}catch(e){return null}}},ls=M&&M.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
fs=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},Object.defineProperty(ns,"__esModule",{value:!0}),ds=N,
ns.getPackageManager=function(r){return ls(this,void 0,void 0,function(){var t;return fs(this,function(e){switch(e.label
){case 0:return(t=r.prefer||ds.getCurrentPackageManager())?[3,2]:[4,ds.getPackageManagerFromLockfile(r)];case 1:
t=e.sent(),e.label=2;case 2:return t=t||"npm",[4,ds.isManagerInstalled(t)];case 3:return e.sent()?[3,5]:(
t="npm"===t?"yarn":"npm",[4,ds.isManagerInstalled(t)]);case 4:if(!e.sent())throw new Error(
"No supported package manager found");e.label=5;case 5:return[2,t]}})})},ns.getPackageManagerSync=function(e){var t=(
t=e.prefer||ds.getCurrentPackageManager())||ds.getPackageManagerFromLockfileSync(e);if(ds.isManagerInstalledSync(
t=t||"npm")||ds.isManagerInstalledSync(t="npm"===t?"yarn":"npm"))return t;throw new Error(
"No supported package manager found")},l={},Object.defineProperty(l,"__esModule",{value:!0}),ps=T,hs=c,
l.constructYarnArguments=function(e,t){var r=ps.getFlagsToSet(t),n=(t.global?["global"]:[]).concat(["add"],e),o=[];
return r.forEach(function(e){switch(e){case"dev":t.global?o.push(e):n.push("--dev");break;case"exact":n.push("--exact");
break;case"verbose":n.push("--verbose");break;case"bundle":case"noSave":o.push(e);break;default:
throw new hs.UnreachableCaseError(e)}}),{args:n,ignoredFlags:o}},l.yarnProjectInstallArgs=["install"],
gs=M&&M.__assign||function(){return(gs=Object.assign||function(e){for(var t,r,n=1,o=arguments.length;n<o;n++)for(
r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},
ms=M&&M.__awaiter||function(i,a,s,u){return new(s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)
}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n
)}o((u=u.apply(i,a||[])).next())})},vs=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i
)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((
s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:
case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(
),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(
3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(
s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e]
,a=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(
1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},bs=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}
},Object.defineProperty(g,"__esModule",{value:!0}),ys=bs(e.exports),ws=Ka,xs=c,_s=d,Es=ns,js=l,g.install=function(i,a){
return void 0===a&&(a=ws.defaultInstallConfig),ms(this,void 0,void 0,function(){var t,r,n,o;return vs(this,function(e){
switch(e.label){case 0:return t=gs({},ws.defaultInstallConfig,a),[4,Es.getPackageManager(t)];case 1:return o=e.sent(),
r=xs.getPackageList(i),n="npm"===o?_s.constructNpmArguments:js.constructYarnArguments,n=n(r,t),r=n.args,n=n.ignoredFlags
,[4,ys.default(o,r,xs.getExecaConfig(t))];case 2:return o=e.sent(),[2,gs({},o,{ignoredFlags:n})]}})})},
g.installSync=function(e,t){var r,n;return void 0===t&&(t=ws.defaultInstallConfig),t=gs({},ws.defaultInstallConfig,t),
n=Es.getPackageManagerSync(t),e=xs.getPackageList(e),r=(e=("npm"===n?_s.constructNpmArguments:js.constructYarnArguments
)(e,t)).args,e=e.ignoredFlags,n=ys.default.sync(n,r,xs.getExecaConfig(t)),gs({},n,{ignoredFlags:e})},
g.projectInstall=function(o){return void 0===o&&(o=ws.defaultInstallConfig),ms(this,void 0,void 0,function(){var t,r,n;
return vs(this,function(e){switch(e.label){case 0:return t=gs({},ws.defaultInstallConfig,o),[4,Es.getPackageManager(t)];
case 1:return r=e.sent(),n="npm"===r?_s.npmProjectInstallArgs:js.yarnProjectInstallArgs,[2,ys.default(r,n,
xs.getExecaConfig(t))]}})})},g.projectInstallSync=function(e){var t,r;return void 0===e&&(e=ws.defaultInstallConfig),
e=gs({},ws.defaultInstallConfig,e),r="npm"===(t=Es.getPackageManagerSync(e)
)?_s.npmProjectInstallArgs:js.yarnProjectInstallArgs,ys.default.sync(t,r,xs.getExecaConfig(e))},$s=ha,
Object.defineProperty($s,"__esModule",{value:!0}),Le(g),Le(ns),E={exports:{}};
const ic="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,ac=hu.default,
sc=ic?";":":",uc=o,cc=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),lc=(e,t)=>{var r=t.colon||sc,
n=e.match(/\//)||ic&&e.match(/\\/)?[""]:[...ic?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=ic?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=ic?o.split(r):[""];return ic&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},fc=((S=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=lc(i,s),l=[],f=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(cc(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=ac.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(d(t,o,0))}),d=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(f(i+1))
const n=u[a];uc(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(d(o,i,a+1))})});
return t?f(0).then(e=>t(null,e),t):f(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=lc(t,r);
const l=[];for(let e=0;e<s.length;e++){const f=s[e];n=/^".*"$/.test(f)?f.slice(1,-1):f,o=ac.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(uc.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw cc(t)},(P={exports:{}}
).exports=I=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},P.exports.default=I,hu.default),dc=S,pc=P.exports,hc=(f=function(
e){return ge(e)||ge(e,!0)},/([()\][%!^"`<>&|;, *?])/g),gc=((Fs={}).command=function(e){return e.replace(hc,"^$1")},
Fs.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(hc,"^$1"),t?e.replace(hc,"^$1"):e},/^#!(.*)/),mc=gu.default,vc=(e="")=>{const t=e.match(gc);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");e=r.split("/").pop();return"env"===e?n:n?e+" "+n:e},bc=hu.default,yc=f,
wc=Fs,xc="win32"===process.platform,_c=/\.(?:com|exe)$/i,Ec=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
jc="win32"===process.platform,Oc=ou.default,Sc={hookChildProcess:function(r,n){if(jc){const o=r.emit;r.emit=function(e,t
){if("exit"===e){e=ve(t,n);if(e)return o.call(r,"error",e)}return o.apply(r,arguments)}}},verifyENOENT:ve,
verifyENOENTSync:function(e,t){return jc&&1===e&&!t.file?me(t.original,"spawnSync"):null},notFoundError:me},Pc=(
E.exports=be,E.exports.spawn=be,E.exports.sync=function(e,t,r){e=We(e,t,r);const n=Oc.spawnSync(e.command,e.args,
e.options);return n.error=n.error||Sc.verifyENOENTSync(n.status,e),n},E.exports._parse=We,E.exports._enoent=Sc,
Os=E.exports,["env"]),Tc=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),
kc=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Ac=new WeakMap,Ic=(t,r={})=>{function n(...e){if(
Ac.set(n,++i),1===i)o=t.apply(this,e),t=null;else if(!0===r.throw)throw new Error(
`Function \`${a}\` can only be called once`);return o}if("function"!=typeof t)throw new TypeError("Expected a function")
let o,i=0;const a=t.displayName||t.name||"<anonymous>";var e,s,u,c,l,f,d,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],
m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g,
"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return f=p,(d=Object.getPrototypeOf(h))!==Object.getPrototypeOf(f
)&&Object.setPrototypeOf(f,d),f=p,d=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,d.toString()),Object.defineProperty(m,"name",kc),Object.defineProperty(f,"toString",b(b({},Tc),{},{
value:m})),Ac.set(n,i),n},Nc=(Ic.callCount=e=>{if(Ac.has(e))return Ac.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Cc=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],Mc=function(){const e=$e();return e.reduce(ze,{})}();{const ml=$e()
au=Array.from({length:65},(e,t)=>{var r,n=ml,o=(r=t,void 0!==(o=(n=n).find(({name:e})=>pu.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...au)}
const Rc=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:i,isCanceled:a}
)=>e?`timed out after ${t} milliseconds`:a?"was canceled":void 0!==r?"failed with "+r:void 0!==n?`was killed with ${n} (${o})`:void 0!==i?"failed with exit code "+i:"failed"
,Gc=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:f}}})=>{var d,p;i=null===i?void 0:i,d=void 0===(o=null===o?void 0:o)?void 0:Mc[o].description,
p=n&&n.code,f=`Command ${Rc({timedOut:u,timeout:f,errorCode:p,signal:o,signalDescription:d,exitCode:i,isCanceled:c}
)}: `+a;const h=(p="[object Error]"===Object.prototype.toString.call(n))?f+`
`+n.message:f;return f=[h,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=f):n=new Error(f),
n.shortMessage=h,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=d,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Fc=["stdin","stdout","stderr"],Dc=(C={exports:{}},iu.default.PassThrough),Lc=cu.default.constants,Bc=(
su=iu.default,uu.default.promisify),$c=Bc(su.pipeline);class zc extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}C.exports=we,C.exports.buffer=(e,t)=>we(e,b(b({},t),{},{encoding:"buffer"})),
C.exports.array=(e,t)=>we(e,b(b({},t),{},{array:!0})),C.exports.MaxBufferError=zc,Ss=C.exports;
const Uc=iu.default.PassThrough,Wc=(Ps=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new Uc({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),Vc=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?Ss(e,{encoding:t,maxBuffer:n}):Ss.buffer(e,{maxBuffer:n})},qc=(async()=>{})(
).constructor.prototype,Hc=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(qc,e)]),Zc=(e,t)=>{for(
const[n,o]of Hc){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,b(b({},o),{},{value:r}))}return e},Jc=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Yc=/^[\w.-]+$/,Xc=/"/g,Kc=(e,t,r)=>{
return"string"==typeof t||lu.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),
o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===o?e.slice(0,-1):e
):t:void 0===r?void 0:"";var n,o},Qc=Tu.createLogger("initPackage"),el=Tu.createLogger("GitUtils");class tl{
static getGitDir(e){let t=e,r=t;do{if(el.debug("getGitDir: Searching git directory from ",t),t=r,R.fileExists(k.resolve(
t,".git")))return t}while((r=k.dirname(t))!==t)}static async initGit(){var e=tl.getGitDir(process.cwd());e?el.warn(
"Warning! Git directory already exists: ",e):(el.debug("Creating git directory"),await tl._git(["init"]))}
static async addFiles(e){var t=H(e)?[e]:e;el.debug("addFiles: Adding files: ",e),await tl._git(["add",...t])}
static async commit(e){el.debug("commit with: ",e),await tl._git(["commit","-m",e])}static async renameMainBranch(e){
el.debug("rename branch: ",e),await tl._git(["branch","-M",e])}static async addSubModule(e,t){R.fileExists(t)?el.warn(
"Warning! Git sub module directory already exists: ",t):await tl._git(["submodule","add",e,t])}
static async setSubModuleBranch(e,t){await tl._git(["config","-f",".gitmodules",`submodule.${e}.branch`,t])}
static async initSubModule(e,t,r){var n=k.dirname(t);el.debug("initSubModule: Creating: ",n),R.mkdirp(n),el.debug(
"initSubModule: Adding submodule: ",e,t),await tl.addSubModule(e,t),el.debug("initSubModule: Configuring branch for ",e,
t,": ",r),await tl.setSubModuleBranch(t,r)}static async _git(e){await xe("git",e,{stdio:"inherit"})}}
const rl=Tu.createLogger("createPackage"),nl=(Ws=null!=(m=null==(fu=process)||null==(O=fu.env)?void 0:O.LOG_LEVEL
)?m:"INFO",Tu.createLogger("main"));(Vs=function(e){if(e){if(function(){switch(e){case r.DEBUG:case r.INFO:case r.WARN:
case r.ERROR:case r.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":
return r.DEBUG;case"INFO":return r.INFO;case"WARN":case"WARNING":return r.WARN;case"ERR":case"ERROR":return r.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return r.NONE;default:return}}}(Ws))&&(nl.debug(
"Setting log level as ",Vs),Tu.setLogLevel(Vs)),async function(t){const r=ku.createFromTemplateFile(t);
r.setPackageJsonModifier(function(e,t){var r=null!=(r=ee(null==e?void 0:e.scripts))?r:{},n=null!=(n=ee(
null==e?void 0:e.bin))?n:{},o=null!=(o=ee(null==e?void 0:e.dependencies))?o:{},i=t.getDistFile(),a=t.getMainName(),
t=t.getMainSourceFileName();return F(F({},e),{},{private:!0,main:i,bin:F(F({},n),{},{[a]:i}),scripts:F(F({},r),{},{
"start-prod":"node "+i,start:"ts-node "+t,build:"rollup -c"}),dependencies:{},devDependencies:o})});{var n,o,i,a,t=r;
let e=process.cwd();if((n=process.argv.slice(2).filter(e=>!e.startsWith("-")).shift())&&(n=k.resolve(e,n),rl.debug(
"Creating project directory: ",n),R.mkdirp(n),process.chdir(n),e=n),n={dev:!1,exact:!1,noSave:!1,bundle:!1,verbose:!1,
global:!1,prefer:t.getPreferredPackageSystem()===pa.YARN?"yarn":"npm",stdio:"inherit",cwd:e},rl.debug(
"Initial install config: ",n),o=te(await ha.getPackageManager(n)),rl.debug("Initializing package.json using ",o),o=o,
a=process.argv.slice(2).filter(e=>e.startsWith("-")),Qc.debug("Executing: ",o,"init",...a),await xe(o,["init",...a],{
stdio:"inherit"}),o=k.resolve("package.json"),R.fileExists(o)){t.setPackageDirectory(k.dirname(o));
const s=t.getPackageDirectory(),u=(a=t.getMainName(),i=(new Date).getFullYear(),{
"GIT-ORGANISATION":t.getGitOrganization(),"ORGANISATION-NAME":t.getOrganizationName(),
"ORGANISATION-EMAIL":t.getOrganizationEmail(),"CURRENT-YEAR":""+i,"PROJECT-NAME":a,projectName:da(a)}),c=t.getFiles(),
l=Jo(io(c,e=>k.dirname(e))),f=t.getTemplatesDirectory();if(l.forEach(e=>{e=k.resolve(s,e);rl.debug(
"Creating directory: ",e),R.mkdirp(e)}),rl.debug("Initializing git if necessary"),await tl.initGit(),c.forEach(e=>{
R.copyTextFileWithReplacementsIfMissing(k.resolve(f,e),k.resolve(s,e),u)}),R.copyTextFileWithReplacementsIfMissing(
k.resolve(f,t.getMainSourceFileTemplate()),k.resolve(s,t.getMainSourceFileName()),u),!Q(i=R.readJsonFile(o))
)throw new TypeError("package.json was invalid");const d=t.getPackageJsonModifier();a=d(i,t),Ui(a,i)?rl.warn(
"Warning! No changes to package.json detected"):R.writeJsonFile(o,a),await Go(t.getGitSubmodules(),async(e,t)=>{await e;
var{url:e,path:t,branch:r}=t;rl.debug(`Initializing core git submodule from ${e} and branch ${r} to `+t),
await tl.initSubModule(e,k.resolve(".",t),null!=r?r:"main")},Promise.resolve()),i=t.getPackages(),rl.debug(
"Installing packages: ",i),await ha.install(io(i,e=>e),n),rl.debug("Adding files to git"),await tl.addFiles(["."]),
rl.debug("Initial git commit"),await tl.commit(t.getGitCommitMessage()),a=t.getGitBranch(),rl.debug(
`Renaming main git branch to '${a}'`),await tl.renameMainBranch(a)}else rl.warn("Warning! package.json did not exist: ",
o)}}(k.resolve(__dirname,"../create.config.json")).catch(e=>{console.error(e)});
