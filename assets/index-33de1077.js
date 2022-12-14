(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerpolicy&&(f.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?f.credentials="include":r.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(r){if(r.ep)return;r.ep=!0;const f=t(r);fetch(r.href,f)}})();function N(){}function Oe(e,n){for(const t in n)e[t]=n[t];return e}function Be(e){return e()}function ge(){return Object.create(null)}function j(e){e.forEach(Be)}function ue(e){return typeof e=="function"}function P(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function qe(e){return Object.keys(e).length===0}function Xe(e,...n){if(e==null)return N;const t=e.subscribe(...n);return t.unsubscribe?()=>t.unsubscribe():t}function Ne(e,n,t){e.$$.on_destroy.push(Xe(n,t))}function L(e,n){e.appendChild(n)}function O(e,n,t){e.insertBefore(n,t||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function B(e){return document.createElement(e)}function R(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ae(e){return document.createTextNode(e)}function S(){return ae(" ")}function Ae(){return ae("")}function E(e,n,t,l){return e.addEventListener(n,t,l),()=>e.removeEventListener(n,t,l)}function d(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function Pe(e){return Array.from(e.childNodes)}function Ye(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function I(e,n,t){e.classList[t?"add":"remove"](n)}let Z;function J(e){Z=e}function Ie(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Re(e){Ie().$$.on_mount.push(e)}const G=[],T=[],ne=[],ie=[],De=Promise.resolve();let fe=!1;function Ke(){fe||(fe=!0,De.then(Me))}function le(e){ne.push(e)}function U(e){ie.push(e)}const re=new Set;let x=0;function Me(){const e=Z;do{for(;x<G.length;){const n=G[x];x++,J(n),Ge(n.$$)}for(J(null),G.length=0,x=0;T.length;)T.pop()();for(let n=0;n<ne.length;n+=1){const t=ne[n];re.has(t)||(re.add(t),t())}ne.length=0}while(G.length);for(;ie.length;)ie.pop()();fe=!1,re.clear(),J(e)}function Ge(e){if(e.fragment!==null){e.update(),j(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(le)}}const te=new Set;let q;function Q(){q={r:0,c:[],p:q}}function W(){q.r||j(q.c),q=q.p}function k(e,n){e&&e.i&&(te.delete(e),e.i(n))}function C(e,n,t,l){if(e&&e.o){if(te.has(e))return;te.add(e),q.c.push(()=>{te.delete(e),l&&(t&&e.d(1),l())}),e.o(n)}else l&&l()}function Ve(e,n){const t={},l={},r={$$scope:1};let f=e.length;for(;f--;){const i=e[f],c=n[f];if(c){for(const s in i)s in c||(l[s]=1);for(const s in c)r[s]||(t[s]=c[s],r[s]=1);e[f]=c}else for(const s in i)r[s]=1}for(const i in l)i in t||(t[i]=void 0);return t}function Fe(e){return typeof e=="object"&&e!==null?e:{}}function $(e,n,t,l){const r=e.$$.props[n];r!==void 0&&(e.$$.bound[r]=t,l===void 0&&t(e.$$.ctx[r]))}function V(e){e&&e.c()}function A(e,n,t,l){const{fragment:r,after_update:f}=e.$$;r&&r.m(n,t),l||le(()=>{const i=e.$$.on_mount.map(Be).filter(ue);e.$$.on_destroy?e.$$.on_destroy.push(...i):j(i),e.$$.on_mount=[]}),f.forEach(le)}function M(e,n){const t=e.$$;t.fragment!==null&&(j(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function Je(e,n){e.$$.dirty[0]===-1&&(G.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function D(e,n,t,l,r,f,i,c=[-1]){const s=Z;J(e);const o=e.$$={fragment:null,ctx:[],props:f,update:N,not_equal:r,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:ge(),dirty:c,skip_bound:!1,root:n.target||s.$$.root};i&&i(o.root);let u=!1;if(o.ctx=t?t(e,n.props||{},(a,m,...h)=>{const b=h.length?h[0]:m;return o.ctx&&r(o.ctx[a],o.ctx[a]=b)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](b),u&&Je(e,a)),m}):[],o.update(),u=!0,j(o.before_update),o.fragment=l?l(o.ctx):!1,n.target){if(n.hydrate){const a=Pe(n.target);o.fragment&&o.fragment.l(a),a.forEach(z)}else o.fragment&&o.fragment.c();n.intro&&k(e.$$.fragment),A(e,n.target,n.anchor,n.customElement),Me()}J(s)}class K{$destroy(){M(this,1),this.$destroy=N}$on(n,t){if(!ue(t))return N;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(t),()=>{const r=l.indexOf(t);r!==-1&&l.splice(r,1)}}$set(n){this.$$set&&!qe(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function Qe(e){let n,t;return{c(){n=B("p"),t=ae(e[0]),d(n,"class","font-mono whitespace-pre-line p-4 w-full h-full bg-panelBg shadow-sm shadow-panelBg rounded-xl overflow-auto")},m(l,r){O(l,n,r),L(n,t)},p(l,[r]){r&1&&Ye(t,l[0])},i:N,o:N,d(l){l&&z(n)}}}function Se(e,n){return e.map((l,r)=>{let f=l.name;l.type==="folder"&&(f+="/");const i=r===e.length-1?"└──":"├──";if(n>0&&(f=`${"│   ".repeat(n-1)}${i}${f}`),l.children.length===0)return f;const c=Se(l.children,n+1);return`${f}
${c}`}).join(`
`)}function We(e,n,t){let{files:l}=n,r;return e.$$set=f=>{"files"in f&&t(1,l=f.files)},e.$$.update=()=>{e.$$.dirty&2&&t(0,r=Se(l,0))},[r,l]}class Ze extends K{constructor(n){super(),D(this,n,We,Qe,P,{files:1})}}var Ee={prefix:"fas",iconName:"folder-plus",icon:[512,512,[],"f65e","M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"]},Ue={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"]},$e={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},xe={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},en={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},nn={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},tn={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Te={prefix:"fas",iconName:"file-circle-plus",icon:[576,512,[58606],"e494","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 384c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm16-208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"]};const ee=parseFloat;function oe(e,n=";"){let t;if(Array.isArray(e))t=e.filter(l=>l);else{t=[];for(const l in e)e[l]&&t.push(`${l}:${e[l]}`)}return t.join(n)}function ln(e,n,t,l){let r,f;const i="1em";let c,s,o,u="-.125em";const a="visible";return l&&(o="center",f="1.25em"),t&&(r=t),n&&(n=="lg"?(s="1.33333em",c=".75em",u="-.225em"):n=="xs"?s=".75em":n=="sm"?s=".875em":s=n.replace("x","em")),oe([oe({float:r,width:f,height:i,"line-height":c,"font-size":s,"text-align":o,"vertical-align":u,"transform-origin":"center",overflow:a}),e])}function rn(e,n,t,l,r,f=1,i="",c=""){let s=1,o=1;return r&&(r=="horizontal"?s=-1:r=="vertical"?o=-1:s=o=-1),oe([`translate(${ee(n)*f}${i},${ee(t)*f}${i})`,`scale(${s*ee(e)},${o*ee(e)})`,l&&`rotate(${l}${c})`]," ")}function pe(e){let n,t,l,r,f,i,c,s;function o(m,h){return typeof m[10][4]=="string"?on:fn}let u=o(e),a=u(e);return{c(){n=R("svg"),t=R("g"),l=R("g"),a.c(),d(l,"transform",e[12]),d(t,"transform",r="translate("+e[10][0]/2+" "+e[10][1]/2+")"),d(t,"transform-origin",f=e[10][0]/4+" 0"),d(n,"id",i=e[1]||void 0),d(n,"class",c="svelte-fa "+e[0]+" svelte-1cj2gr0"),d(n,"style",e[11]),d(n,"viewBox",s="0 0 "+e[10][0]+" "+e[10][1]),d(n,"aria-hidden","true"),d(n,"role","img"),d(n,"xmlns","http://www.w3.org/2000/svg"),I(n,"pulse",e[4]),I(n,"spin",e[3])},m(m,h){O(m,n,h),L(n,t),L(t,l),a.m(l,null)},p(m,h){u===(u=o(m))&&a?a.p(m,h):(a.d(1),a=u(m),a&&(a.c(),a.m(l,null))),h&4096&&d(l,"transform",m[12]),h&1024&&r!==(r="translate("+m[10][0]/2+" "+m[10][1]/2+")")&&d(t,"transform",r),h&1024&&f!==(f=m[10][0]/4+" 0")&&d(t,"transform-origin",f),h&2&&i!==(i=m[1]||void 0)&&d(n,"id",i),h&1&&c!==(c="svelte-fa "+m[0]+" svelte-1cj2gr0")&&d(n,"class",c),h&2048&&d(n,"style",m[11]),h&1024&&s!==(s="0 0 "+m[10][0]+" "+m[10][1])&&d(n,"viewBox",s),h&17&&I(n,"pulse",m[4]),h&9&&I(n,"spin",m[3])},d(m){m&&z(n),a.d()}}}function fn(e){let n,t,l,r,f,i,c,s,o,u;return{c(){n=R("path"),i=R("path"),d(n,"d",t=e[10][4][0]),d(n,"fill",l=e[6]||e[2]||"currentColor"),d(n,"fill-opacity",r=e[9]!=!1?e[7]:e[8]),d(n,"transform",f="translate("+e[10][0]/-2+" "+e[10][1]/-2+")"),d(i,"d",c=e[10][4][1]),d(i,"fill",s=e[5]||e[2]||"currentColor"),d(i,"fill-opacity",o=e[9]!=!1?e[8]:e[7]),d(i,"transform",u="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(a,m){O(a,n,m),O(a,i,m)},p(a,m){m&1024&&t!==(t=a[10][4][0])&&d(n,"d",t),m&68&&l!==(l=a[6]||a[2]||"currentColor")&&d(n,"fill",l),m&896&&r!==(r=a[9]!=!1?a[7]:a[8])&&d(n,"fill-opacity",r),m&1024&&f!==(f="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&d(n,"transform",f),m&1024&&c!==(c=a[10][4][1])&&d(i,"d",c),m&36&&s!==(s=a[5]||a[2]||"currentColor")&&d(i,"fill",s),m&896&&o!==(o=a[9]!=!1?a[8]:a[7])&&d(i,"fill-opacity",o),m&1024&&u!==(u="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&d(i,"transform",u)},d(a){a&&z(n),a&&z(i)}}}function on(e){let n,t,l,r;return{c(){n=R("path"),d(n,"d",t=e[10][4]),d(n,"fill",l=e[2]||e[5]||"currentColor"),d(n,"transform",r="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(f,i){O(f,n,i)},p(f,i){i&1024&&t!==(t=f[10][4])&&d(n,"d",t),i&36&&l!==(l=f[2]||f[5]||"currentColor")&&d(n,"fill",l),i&1024&&r!==(r="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&d(n,"transform",r)},d(f){f&&z(n)}}}function sn(e){let n,t=e[10][4]&&pe(e);return{c(){t&&t.c(),n=Ae()},m(l,r){t&&t.m(l,r),O(l,n,r)},p(l,[r]){l[10][4]?t?t.p(l,r):(t=pe(l),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i:N,o:N,d(l){t&&t.d(l),l&&z(n)}}}function un(e,n,t){let{class:l=""}=n,{id:r=""}=n,{style:f=""}=n,{icon:i}=n,{size:c=""}=n,{color:s=""}=n,{fw:o=!1}=n,{pull:u=""}=n,{scale:a=1}=n,{translateX:m=0}=n,{translateY:h=0}=n,{rotate:b=""}=n,{flip:w=!1}=n,{spin:_=!1}=n,{pulse:y=!1}=n,{primaryColor:g=""}=n,{secondaryColor:H=""}=n,{primaryOpacity:v=1}=n,{secondaryOpacity:F=.4}=n,{swapOpacity:de=!1}=n,me,he,_e;return e.$$set=p=>{"class"in p&&t(0,l=p.class),"id"in p&&t(1,r=p.id),"style"in p&&t(13,f=p.style),"icon"in p&&t(14,i=p.icon),"size"in p&&t(15,c=p.size),"color"in p&&t(2,s=p.color),"fw"in p&&t(16,o=p.fw),"pull"in p&&t(17,u=p.pull),"scale"in p&&t(18,a=p.scale),"translateX"in p&&t(19,m=p.translateX),"translateY"in p&&t(20,h=p.translateY),"rotate"in p&&t(21,b=p.rotate),"flip"in p&&t(22,w=p.flip),"spin"in p&&t(3,_=p.spin),"pulse"in p&&t(4,y=p.pulse),"primaryColor"in p&&t(5,g=p.primaryColor),"secondaryColor"in p&&t(6,H=p.secondaryColor),"primaryOpacity"in p&&t(7,v=p.primaryOpacity),"secondaryOpacity"in p&&t(8,F=p.secondaryOpacity),"swapOpacity"in p&&t(9,de=p.swapOpacity)},e.$$.update=()=>{e.$$.dirty&16384&&t(10,me=i&&i.icon||[0,0,"",[],""]),e.$$.dirty&237568&&t(11,he=ln(f,c,u,o)),e.$$.dirty&8126464&&t(12,_e=rn(a,m,h,b,w,512))},[l,r,s,_,y,g,H,v,F,de,me,he,_e,f,i,c,o,u,a,m,h,b,w]}class cn extends K{constructor(n){super(),D(this,n,un,sn,P,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const X=cn;function be(e,n,t){const l=e.slice();return l[17]=n[t],l[18]=n,l[19]=t,l}function ye(e){let n,t,l,r,f;return t=new X({props:{fw:!0,pull:"left",icon:e[6]}}),{c(){n=B("button"),V(t.$$.fragment),d(n,"title","Collapse this folder"),d(n,"class","transition-colors duration-200 ease-in-out hover:text-buttonHover")},m(i,c){O(i,n,c),A(t,n,null),l=!0,r||(f=E(n,"click",e[9]),r=!0)},p(i,c){const s={};c&64&&(s.icon=i[6]),t.$set(s)},i(i){l||(k(t.$$.fragment,i),l=!0)},o(i){C(t.$$.fragment,i),l=!1},d(i){i&&z(n),M(t),r=!1,f()}}}function we(e){let n,t,l,r,f,i,c,s;return t=new X({props:{icon:Te}}),f=new X({props:{icon:Ee}}),{c(){n=B("button"),V(t.$$.fragment),l=S(),r=B("button"),V(f.$$.fragment),d(n,"title","Add a file as a child"),d(n,"class","transition-colors duration-200 ease-in-out hover:text-buttonHover"),d(r,"title","Add a folder as a child"),d(r,"class","transition-colors duration-200 ease-in-out hover:text-buttonHover")},m(o,u){O(o,n,u),A(t,n,null),O(o,l,u),O(o,r,u),A(f,r,null),i=!0,c||(s=[E(n,"click",e[12]),E(r,"click",e[13])],c=!0)},p:N,i(o){i||(k(t.$$.fragment,o),k(f.$$.fragment,o),i=!0)},o(o){C(t.$$.fragment,o),C(f.$$.fragment,o),i=!1},d(o){o&&z(n),M(t),o&&z(l),o&&z(r),M(f),c=!1,j(s)}}}function ve(e){let n,t,l=e[1],r=[];for(let i=0;i<l.length;i+=1)r[i]=ke(be(e,l,i));const f=i=>C(r[i],1,1,()=>{r[i]=null});return{c(){n=B("div");for(let i=0;i<r.length;i+=1)r[i].c();d(n,"class","pl-10 flex gap-4 flex-col")},m(i,c){O(i,n,c);for(let s=0;s<r.length;s+=1)r[s].m(n,null);t=!0},p(i,c){if(c&2){l=i[1];let s;for(s=0;s<l.length;s+=1){const o=be(i,l,s);r[s]?(r[s].p(o,c),k(r[s],1)):(r[s]=ke(o),r[s].c(),k(r[s],1),r[s].m(n,null))}for(Q(),s=l.length;s<r.length;s+=1)f(s);W()}},i(i){if(!t){for(let c=0;c<l.length;c+=1)k(r[c]);t=!0}},o(i){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)C(r[c]);t=!1},d(i){i&&z(n),ce(r,i)}}}function ke(e){let n,t,l,r;function f(){return e[14](e[19])}const i=[e[17],{remove:f}];function c(u){e[15](u,e[17])}function s(u){e[16](u,e[17])}let o={};for(let u=0;u<i.length;u+=1)o=Oe(o,i[u]);return e[17].name!==void 0&&(o.name=e[17].name),e[17].children!==void 0&&(o.children=e[17].children),n=new je({props:o}),T.push(()=>$(n,"name",c,e[17].name)),T.push(()=>$(n,"children",s,e[17].children)),{c(){V(n.$$.fragment)},m(u,a){A(n,u,a),r=!0},p(u,a){e=u;const m=a&2?Ve(i,[Fe(e[17]),{remove:f}]):{};!t&&a&2&&(t=!0,m.name=e[17].name,U(()=>t=!1)),!l&&a&2&&(l=!0,m.children=e[17].children,U(()=>l=!1)),n.$set(m)},i(u){r||(k(n.$$.fragment,u),r=!0)},o(u){C(n.$$.fragment,u),r=!1},d(u){M(n,u)}}}function an(e){let n,t,l,r,f,i,c,s,o,u,a,m,h,b,w=e[2]==="folder"&&ye(e);l=new X({props:{fw:!0,pull:"right",icon:e[5]}});let _=e[2]==="folder"&&we(e);o=new X({props:{icon:nn}});let y=e[1].length>0&&e[4]&&ve(e);return{c(){n=B("span"),w&&w.c(),t=S(),V(l.$$.fragment),r=S(),f=B("span"),i=S(),_&&_.c(),c=S(),s=B("button"),V(o.$$.fragment),u=S(),y&&y.c(),a=Ae(),d(f,"contenteditable","true"),e[0]===void 0&&le(()=>e[10].call(f)),d(s,"title","Remove this item"),d(s,"class","transition-colors duration-200 ease-in-out hover:text-removeHover"),d(n,"class","flex gap-2 justify-start items-center")},m(g,H){O(g,n,H),w&&w.m(n,null),L(n,t),A(l,n,null),L(n,r),L(n,f),e[0]!==void 0&&(f.innerHTML=e[0]),e[11](f),L(n,i),_&&_.m(n,null),L(n,c),L(n,s),A(o,s,null),O(g,u,H),y&&y.m(g,H),O(g,a,H),m=!0,h||(b=[E(f,"input",e[10]),E(s,"click",function(){ue(e[3])&&e[3].apply(this,arguments)})],h=!0)},p(g,[H]){e=g,e[2]==="folder"?w?(w.p(e,H),H&4&&k(w,1)):(w=ye(e),w.c(),k(w,1),w.m(n,t)):w&&(Q(),C(w,1,1,()=>{w=null}),W());const v={};H&32&&(v.icon=e[5]),l.$set(v),H&1&&e[0]!==f.innerHTML&&(f.innerHTML=e[0]),e[2]==="folder"?_?(_.p(e,H),H&4&&k(_,1)):(_=we(e),_.c(),k(_,1),_.m(n,c)):_&&(Q(),C(_,1,1,()=>{_=null}),W()),e[1].length>0&&e[4]?y?(y.p(e,H),H&18&&k(y,1)):(y=ve(e),y.c(),k(y,1),y.m(a.parentNode,a)):y&&(Q(),C(y,1,1,()=>{y=null}),W())},i(g){m||(k(w),k(l.$$.fragment,g),k(_),k(o.$$.fragment,g),k(y),m=!0)},o(g){C(w),C(l.$$.fragment,g),C(_),C(o.$$.fragment,g),C(y),m=!1},d(g){g&&z(n),w&&w.d(),M(l),e[11](null),_&&_.d(),M(o),g&&z(u),y&&y.d(g),g&&z(a),h=!1,j(b)}}}function dn(e,n,t){let{name:l}=n,{type:r}=n,{children:f=[]}=n,{remove:i}=n,c=!0,s,o;function u(v,F){t(1,f=[...f,{name:F,type:v,children:[]}])}let a;Re(()=>{a.focus()});const m=()=>t(4,c=!c);function h(){l=this.innerHTML,t(0,l)}function b(v){T[v?"unshift":"push"](()=>{a=v,t(7,a)})}const w=()=>u("file","new file"),_=()=>u("folder","new folder"),y=v=>{t(1,f=[...f.slice(0,v),...f.slice(v+1)])};function g(v,F){e.$$.not_equal(F.name,v)&&(F.name=v,t(1,f))}function H(v,F){e.$$.not_equal(F.children,v)&&(F.children=v,t(1,f))}return e.$$set=v=>{"name"in v&&t(0,l=v.name),"type"in v&&t(2,r=v.type),"children"in v&&t(1,f=v.children),"remove"in v&&t(3,i=v.remove)},e.$$.update=()=>{e.$$.dirty&20&&(r==="folder"?c?t(5,s=$e):t(5,s=Ue):t(5,s=xe)),e.$$.dirty&16&&t(6,o=c?en:tn)},[l,f,r,i,c,s,o,a,u,m,h,b,w,_,y,g,H]}class je extends K{constructor(n){super(),D(this,n,dn,an,P,{name:0,type:2,children:1,remove:3})}}function Ce(e,n,t){const l=e.slice();return l[7]=n[t],l[8]=n,l[9]=t,l}function He(e){let n,t,l,r;function f(){return e[4](e[9])}const i=[e[7],{remove:f}];function c(u){e[5](u,e[7])}function s(u){e[6](u,e[7])}let o={};for(let u=0;u<i.length;u+=1)o=Oe(o,i[u]);return e[7].name!==void 0&&(o.name=e[7].name),e[7].children!==void 0&&(o.children=e[7].children),n=new je({props:o}),T.push(()=>$(n,"name",c,e[7].name)),T.push(()=>$(n,"children",s,e[7].children)),{c(){V(n.$$.fragment)},m(u,a){A(n,u,a),r=!0},p(u,a){e=u;const m=a&1?Ve(i,[Fe(e[7]),{remove:f}]):{};!t&&a&1&&(t=!0,m.name=e[7].name,U(()=>t=!1)),!l&&a&1&&(l=!0,m.children=e[7].children,U(()=>l=!1)),n.$set(m)},i(u){r||(k(n.$$.fragment,u),r=!0)},o(u){C(n.$$.fragment,u),r=!1},d(u){M(n,u)}}}function mn(e){let n,t,l,r,f,i,c,s,o,u,a,m;r=new X({props:{icon:Te}}),c=new X({props:{icon:Ee}});let h=e[0],b=[];for(let _=0;_<h.length;_+=1)b[_]=He(Ce(e,h,_));const w=_=>C(b[_],1,1,()=>{b[_]=null});return{c(){n=B("div"),t=B("div"),l=B("button"),V(r.$$.fragment),f=S(),i=B("button"),V(c.$$.fragment),s=S(),o=B("div");for(let _=0;_<b.length;_+=1)b[_].c();d(l,"title","Add a file"),d(l,"class","transition-colors duration-200 ease-in-out hover:text-buttonHover"),d(i,"title","Add a folder"),d(i,"class","transition-colors duration-200 ease-in-out hover:text-buttonHover"),d(t,"class","flex gap-3 p-4 border-b-2 border-textColor"),d(o,"class","flex flex-col gap-4 overflow-auto pb-4 px-4"),d(n,"class","flex flex-col gap-4 w-full h-full bg-panelBg rounded-xl shadow-panelBg shadow-sm")},m(_,y){O(_,n,y),L(n,t),L(t,l),A(r,l,null),L(t,f),L(t,i),A(c,i,null),L(n,s),L(n,o);for(let g=0;g<b.length;g+=1)b[g].m(o,null);u=!0,a||(m=[E(l,"click",e[2]),E(i,"click",e[3])],a=!0)},p(_,[y]){if(y&1){h=_[0];let g;for(g=0;g<h.length;g+=1){const H=Ce(_,h,g);b[g]?(b[g].p(H,y),k(b[g],1)):(b[g]=He(H),b[g].c(),k(b[g],1),b[g].m(o,null))}for(Q(),g=h.length;g<b.length;g+=1)w(g);W()}},i(_){if(!u){k(r.$$.fragment,_),k(c.$$.fragment,_);for(let y=0;y<h.length;y+=1)k(b[y]);u=!0}},o(_){C(r.$$.fragment,_),C(c.$$.fragment,_),b=b.filter(Boolean);for(let y=0;y<b.length;y+=1)C(b[y]);u=!1},d(_){_&&z(n),M(r),M(c),ce(b,_),a=!1,j(m)}}}function hn(e,n,t){let{files:l=[]}=n;function r(u,a){t(0,l=[...l,{name:a,type:u,children:[]}])}const f=()=>r("file","new file"),i=()=>r("folder","new folder"),c=u=>{t(0,l=[...l.slice(0,u),...l.slice(u+1)])};function s(u,a){e.$$.not_equal(a.name,u)&&(a.name=u,t(0,l))}function o(u,a){e.$$.not_equal(a.children,u)&&(a.children=u,t(0,l))}return e.$$set=u=>{"files"in u&&t(0,l=u.files)},[l,r,f,i,c,s,o]}class _n extends K{constructor(n){super(),D(this,n,hn,mn,P,{files:0})}}const Y=[];function gn(e,n=N){let t;const l=new Set;function r(c){if(P(e,c)&&(e=c,t)){const s=!Y.length;for(const o of l)o[1](),Y.push(o,e);if(s){for(let o=0;o<Y.length;o+=2)Y[o][0](Y[o+1]);Y.length=0}}}function f(c){r(c(e))}function i(c,s=N){const o=[c,s];return l.add(o),l.size===1&&(t=n(r)||N),c(e),()=>{l.delete(o),l.size===0&&(t(),t=null)}}return{set:r,update:f,subscribe:i}}const se=gn("purple-theme");function ze(e,n,t){const l=e.slice();return l[3]=n[t],l}function Le(e){let n,t,l;function r(){return e[2](e[3])}return{c(){n=B("button"),d(n,"class",e[3]+" transition-colors bg-panelBg w-full aspect-square rounded-full box-border border-2 border-themeBorderColor hover:ring-4 hover:ring-themeBorderColorHover"),I(n,"border-themeBorderColorSelected",e[3]===e[0])},m(f,i){O(f,n,i),t||(l=E(n,"click",r),t=!0)},p(f,i){e=f,i&3&&I(n,"border-themeBorderColorSelected",e[3]===e[0])},d(f){f&&z(n),t=!1,l()}}}function pn(e){let n,t=e[1],l=[];for(let r=0;r<t.length;r+=1)l[r]=Le(ze(e,t,r));return{c(){n=B("div");for(let r=0;r<l.length;r+=1)l[r].c();d(n,"class","flex flex-col gap-2 w-20")},m(r,f){O(r,n,f);for(let i=0;i<l.length;i+=1)l[i].m(n,null)},p(r,[f]){if(f&3){t=r[1];let i;for(i=0;i<t.length;i+=1){const c=ze(r,t,i);l[i]?l[i].p(c,f):(l[i]=Le(c),l[i].c(),l[i].m(n,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:N,o:N,d(r){r&&z(n),ce(l,r)}}}function bn(e,n,t){let l;Ne(e,se,i=>t(0,l=i));const r=["red","orange","yellow","yellow-green","green","dark-green","green-blue","gray","dark-purple","purple","pink-red"].map(i=>`${i}-theme`);return[l,r,i=>se.set(i)]}class yn extends K{constructor(n){super(),D(this,n,bn,pn,P,{})}}function wn(e){let n,t,l,r,f,i,c,s,o,u;l=new yn({});function a(h){e[2](h)}let m={};return e[0]!==void 0&&(m.files=e[0]),f=new _n({props:m}),T.push(()=>$(f,"files",a,e[0])),s=new Ze({props:{files:e[0]}}),{c(){n=B("div"),t=B("div"),V(l.$$.fragment),r=S(),V(f.$$.fragment),c=S(),V(s.$$.fragment),d(t,"class","overflow-hidden p-4 flex flex-row gap-4 justify-between bg-bg h-4/6 w-8/12 rounded-xl shadow-2xl shadow-bg"),d(n,"class",o=e[1]+" font-sans bg-siteBg w-screen h-screen text-textColor grid place-items-center")},m(h,b){O(h,n,b),L(n,t),A(l,t,null),L(t,r),A(f,t,null),L(t,c),A(s,t,null),u=!0},p(h,[b]){const w={};!i&&b&1&&(i=!0,w.files=h[0],U(()=>i=!1)),f.$set(w);const _={};b&1&&(_.files=h[0]),s.$set(_),(!u||b&2&&o!==(o=h[1]+" font-sans bg-siteBg w-screen h-screen text-textColor grid place-items-center"))&&d(n,"class",o)},i(h){u||(k(l.$$.fragment,h),k(f.$$.fragment,h),k(s.$$.fragment,h),u=!0)},o(h){C(l.$$.fragment,h),C(f.$$.fragment,h),C(s.$$.fragment,h),u=!1},d(h){h&&z(n),M(l),M(f),M(s)}}}function vn(e,n,t){let l;Ne(e,se,i=>t(1,l=i));let r=[];function f(i){r=i,t(0,r)}return[r,l,f]}class kn extends K{constructor(n){super(),D(this,n,vn,wn,P,{})}}new kn({target:document.getElementById("app")});
