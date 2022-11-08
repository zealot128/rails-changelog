"use strict";(()=>{var Wt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Zt=t=>t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Wt.test(t)?JSON.parse(t):t,Jt=t=>{if(t&&t.dataset&&t.dataset.props)return JSON.parse(t.dataset.props);let e=Object.assign({},t.dataset),n={};return Object.keys(e).forEach(o=>n[o]=Zt(e[o])),n};var St=Jt;var Gt=(t,e,n,o=[])=>{let s=St(t);e(t,s)},Ct=(t,e)=>{!t.querySelectorAll||Object.keys(e).forEach(n=>{let{component:o,plugins:s}=e[n];Array.from(t.querySelectorAll(n)).forEach(i=>{i instanceof HTMLElement&&Gt(i,o,n,s||[])})})},Xt=t=>{new MutationObserver(n=>{n.forEach(o=>{o.addedNodes.forEach(s=>{s instanceof HTMLElement&&Ct(s,t)})})}).observe(document,{subtree:!0,childList:!0}),document.addEventListener("DOMContentLoaded",()=>{Ct(document,t)})},jt=Xt;function T(){}function h(t,e,n,o,s){t.__svelte_meta={loc:{file:e,line:n,column:o,char:s}}}function _t(t){return t()}function Mt(){return Object.create(null)}function R(t){t.forEach(_t)}function ot(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Dt(t){return Object.keys(t).length===0}var Ht=!1;function Yt(){Ht=!0}function Kt(){Ht=!1}function Tt(t,e){t.appendChild(e)}function Vt(t,e,n){let o=te(t);if(!o.getElementById(e)){let s=y("style");s.id=e,s.textContent=n,ee(o,s)}}function te(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ee(t,e){return Tt(t.head||t,e),e.sheet}function ne(t,e,n){t.insertBefore(e,n||null)}function Nt(t){t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function O(){return V(" ")}function oe(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t){return Array.from(t.childNodes)}function N(t,e,n){t.classList[n?"add":"remove"](e)}function re(t,e,{bubbles:n=!1,cancelable:o=!1}={}){let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}var mt;function J(t){mt=t}var Z=[];var At=[],et=[],Ot=[],ce=Promise.resolve(),at=!1;function le(){at||(at=!0,ce.then(Bt))}function ft(t){et.push(t)}var ut=new Set,tt=0;function Bt(){let t=mt;do{for(;tt<Z.length;){let e=Z[tt];tt++,J(e),ue(e.$$)}for(J(null),Z.length=0,tt=0;At.length;)At.pop()();for(let e=0;e<et.length;e+=1){let n=et[e];ut.has(n)||(ut.add(n),n())}et.length=0}while(Z.length);for(;Ot.length;)Ot.pop()();at=!1,ut.clear(),J(t)}function ue(t){if(t.fragment!==null){t.update(),R(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}var nt=new Set,P;function Lt(){P={r:0,c:[],p:P}}function Rt(){P.r||R(P.c),P=P.p}function Q(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function st(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),P.c.push(()=>{nt.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}var Pt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function It(t){t&&t.c()}function pt(t,e,n,o){let{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),o||ft(()=>{let r=t.$$.on_mount.map(_t).filter(ot);t.$$.on_destroy?t.$$.on_destroy.push(...r):R(r),t.$$.on_mount=[]}),i.forEach(ft)}function rt(t,e){let n=t.$$;n.fragment!==null&&(R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(t,e){t.$$.dirty[0]===-1&&(Z.push(t),le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(t,e,n,o,s,i,r,f=[-1]){let b=mt;J(t);let l=t.$$={fragment:null,ctx:[],props:i,update:T,not_equal:s,bound:Mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:Mt(),dirty:f,skip_bound:!1,root:e.target||b.$$.root};r&&r(l.root);let v=!1;if(l.ctx=n?n(t,e.props||{},(a,F,...x)=>{let M=x.length?x[0]:F;return l.ctx&&s(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),v&&ae(t,a)),F}):[],l.update(),v=!0,R(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){Yt();let a=se(e.target);l.fragment&&l.fragment.l(a),a.forEach(Nt)}else l.fragment&&l.fragment.c();e.intro&&Q(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),Kt(),Bt()}J(b)}var fe;typeof HTMLElement=="function"&&(fe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(_t).filter(ot);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){R(this.$$.on_disconnect)}$destroy(){rt(this,1),this.$destroy=T}$on(t,e){if(!ot(e))return T;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var dt=class{$destroy(){rt(this,1),this.$destroy=T}$on(e,n){if(!ot(n))return T;let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function S(t,e){document.dispatchEvent(re(t,Object.assign({version:"3.52.0"},e),{bubbles:!0}))}function u(t,e){S("SvelteDOMInsert",{target:t,node:e}),Tt(t,e)}function U(t,e,n){S("SvelteDOMInsert",{target:t,node:e,anchor:n}),ne(t,e,n)}function q(t){S("SvelteDOMRemove",{node:t}),Nt(t)}function X(t,e,n,o,s,i){let r=o===!0?["capture"]:o?Array.from(Object.keys(o)):[];s&&r.push("preventDefault"),i&&r.push("stopPropagation"),S("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:r});let f=oe(t,e,n,o);return()=>{S("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:r}),f()}}function _(t,e,n){ie(t,e,n),n==null?S("SvelteDOMRemoveAttribute",{node:t,attribute:e}):S("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function Y(t,e){e=""+e,t.wholeText!==e&&(S("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function K(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function lt(t,e,n){for(let o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)}var I=class extends dt{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}};var B="frontend/javascript/ChangelogItem.svelte";function de(t){Vt(t,"svelte-1yo4dcc",`.prose pre{background-color:#1e1e1e;color:#d4d4d4}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlbG9nSXRlbS5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBeUNBLFVBQUEsQUFBQSxDQUFBLEFBQ0UsZ0JBQUEsQ0FBQSxPQUF5QixDQUN6QixLQUFBLENBQUEsT0FBYyxBQUNoQixDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkNoYW5nZWxvZ0l0ZW0uc3ZlbHRlIl19 */`)}function gt(t){let e,n,o={c:function(){e=y("a"),n=V("PR"),_(e,"href",t[1]),_(e,"target","_blank"),_(e,"rel","noopener noreferrer"),_(e,"class","btn btn-primary btn-outline btn-sm"),h(e,B,21,6,743)},m:function(i,r){U(i,e,r),u(e,n)},p:T,d:function(i){i&&q(e)}};return S("SvelteRegisterBlock",{block:o,id:gt.name,type:"if",source:"(21:6) {#if changelog.pr}",ctx:t}),o}function yt(t){let e,n,o,s=t[0].html+"",i,r,f,b,l,v,a,F,x=t[0].project+"",M,c,g,m=t[0].pr&&gt(t),z={c:function(){e=y("div"),n=y("div"),o=y("div"),i=O(),r=y("div"),f=y("div"),m&&m.c(),b=O(),l=y("a"),v=V("Commit"),a=O(),F=y("span"),M=V(x),c=O(),g=y("i"),g.textContent=`${t[3]}`,_(o,"class","prose overflow-x-auto inline-block flex-1"),h(o,B,15,4,518),_(l,"href",t[2]),_(l,"target","_blank"),_(l,"rel","noopener noreferrer"),_(l,"class","btn btn-primary btn-outline btn-sm"),h(l,B,25,6,885),_(f,"class","flex gap-1"),h(f,B,19,6,687),_(F,"class","badge badge-neutral badge-md"),h(F,B,29,6,1036),_(g,"class","text-base-content/50 text-sm"),h(g,B,32,6,1128),_(r,"class","flex flex-row gap-1 justify-between items-center"),h(r,B,18,4,618),_(n,"class","card-body"),h(n,B,13,2,451),_(e,"class","card shadow-xl bg-base-200"),h(e,B,12,0,408)},l:function(k){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(k,D){U(k,e,D),u(e,n),u(n,o),o.innerHTML=s,u(n,i),u(n,r),u(r,f),m&&m.m(f,null),u(f,b),u(f,l),u(l,v),u(r,a),u(r,F),u(F,M),u(r,c),u(r,g)},p:function(k,[D]){D&1&&s!==(s=k[0].html+"")&&(o.innerHTML=s),k[0].pr?m?m.p(k,D):(m=gt(k),m.c(),m.m(f,b)):m&&(m.d(1),m=null),D&1&&x!==(x=k[0].project+"")&&Y(M,x)},i:T,o:T,d:function(k){k&&q(e),m&&m.d()}};return S("SvelteRegisterBlock",{block:z,id:yt.name,type:"component",source:"",ctx:t}),z}function _e(t,e,n){let{$$slots:o={},$$scope:s}=e;lt("ChangelogItem",o,[]);let{changelog:i}=e,r=`https://github.com/rails/rails/issues/${i.pr}`,f=`https://github.com/rails/rails/commit/${i.sha}`,b=new Date(i.date_merged),l=b.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});t.$$.on_mount.push(function(){i===void 0&&!("changelog"in e||t.$$.bound[t.$$.props.changelog])&&console.warn("<ChangelogItem> was created without expected prop 'changelog'")});let v=["changelog"];return Object.keys(e).forEach(a=>{!~v.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<ChangelogItem> was created with unknown prop '${a}'`)}),t.$$set=a=>{"changelog"in a&&n(0,i=a.changelog)},t.$capture_state=()=>({changelog:i,prUrl:r,commitUrl:f,dateMerged:b,formattedDate:l}),t.$inject_state=a=>{"changelog"in a&&n(0,i=a.changelog)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,r,f,l]}var bt=class extends I{constructor(e){super(e),ct(this,e,_e,yt,it,{changelog:0},de),S("SvelteRegisterComponent",{component:this,tagName:"ChangelogItem",options:e,id:yt.name})}get changelog(){throw new Error("<ChangelogItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(e){throw new Error("<ChangelogItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},wt=bt;var{Object:he}=Pt,C="frontend/javascript/ChangelogApp.svelte";function Qt(t,e,n){let o=t.slice();return o[9]=e[n],o}function Ut(t,e,n){let o=t.slice();return o[12]=e[n],o}function vt(t){let e,n,o=t[12]+"",s,i,r,f=t[0][t[12]].length+"",b,l,v,a,F;function x(){return t[6](t[12])}let M={c:function(){e=y("li"),n=y("button"),s=V(o),i=O(),r=y("div"),b=V(f),v=O(),_(r,"class","badge"),h(r,C,39,12,1181),_(n,"class",l=t[1]===t[12]?"active":""),h(n,C,32,10,978),h(e,C,31,8,963)},m:function(g,m){U(g,e,m),u(e,n),u(n,s),u(n,i),u(n,r),u(r,b),u(e,v),a||(F=X(n,"click",x,!1,!1,!1),a=!0)},p:function(g,m){t=g,m&1&&o!==(o=t[12]+"")&&Y(s,o),m&1&&f!==(f=t[0][t[12]].length+"")&&Y(b,f),m&3&&l!==(l=t[1]===t[12]?"active":"")&&_(n,"class",l)},d:function(g){g&&q(e),a=!1,F()}};return S("SvelteRegisterBlock",{block:M,id:vt.name,type:"each",source:"(31:6) {#each Object.keys(projects) as project}",ctx:t}),M}function Ft(t){let e,n;e=new wt({props:{changelog:t[9]},$$inline:!0});let o={c:function(){It(e.$$.fragment)},m:function(i,r){pt(e,i,r),n=!0},p:function(i,r){let f={};r&4&&(f.changelog=i[9]),e.$set(f)},i:function(i){n||(Q(e.$$.fragment,i),n=!0)},o:function(i){st(e.$$.fragment,i),n=!1},d:function(i){rt(e,i)}};return S("SvelteRegisterBlock",{block:o,id:Ft.name,type:"each",source:"(77:4) {#each selectedProjectChangelog as changelog}",ctx:t}),o}function kt(t){let e,n,o,s,i,r,f,b,l,v,a,F,x,M,c,g,m,z,j,k,D,$t,L=Object.keys(t[0]);K(L);let A=[];for(let E=0;E<L.length;E+=1)A[E]=vt(Ut(t,L,E));let H=t[2];K(H);let w=[];for(let E=0;E<H.length;E+=1)w[E]=Ft(Qt(t,H,E));let zt=E=>st(w[E],1,1,()=>{w[E]=null}),xt={c:function(){e=y("div"),n=y("nav"),o=y("ul"),s=y("li"),i=y("button"),r=V("All"),b=O();for(let p=0;p<A.length;p+=1)A[p].c();l=O(),v=y("div"),a=y("button"),F=G("svg"),x=G("path"),M=O(),c=y("button"),g=G("svg"),m=G("path"),z=O(),j=y("div");for(let p=0;p<w.length;p+=1)w[p].c();_(i,"class",f=t[1]===null?"active":""),h(i,C,21,8,711),h(s,C,20,6,698),_(o,"class","menu rounded-box menu-horizontal max-w-full flex-wrap bg-base-100 p-2"),h(o,C,19,4,609),h(n,C,18,2,599),_(x,"fill","currentColor"),_(x,"d","M3,3H11V5H3V3M13,3H21V5H13V3M3,7H11V9H3V7M13,7H21V9H13V7M3,11H11V13H3V11M13,11H21V13H13V11M3,15H11V17H3V15M13,15H21V17H13V15M3,19H11V21H3V19M13,19H21V21H13V19Z"),h(x,C,54,8,1565),_(F,"class","h-4 w-4"),_(F,"viewBox","0 0 24 24"),h(F,C,53,6,1515),_(a,"class","btn-ghost btn-sm btn"),N(a,"btn-active",t[3]==="columns"),h(a,C,46,4,1348),_(m,"fill","currentColor"),_(m,"d","M22 20V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20M4 6.5V4H20V6.5H4M4 11V8.5H20V11H4M4 15.5V13H20V15.5H4M4 20V17.5H20V20H4Z"),h(m,C,68,8,2028),_(g,"class","h-4 w-4"),_(g,"viewBox","0 0 24 24"),h(g,C,67,6,1978),_(c,"class","btn-ghost btn-sm btn"),N(c,"btn-active",t[3]==="rows"),h(c,C,60,4,1817),_(v,"class","mb-3 flex justify-end gap-2"),h(v,C,45,2,1302),_(j,"class","grid grid-cols-1 items-start gap-10"),N(j,"grid-cols-1",t[3]=="rows"),N(j,"lg:grid-cols-2",t[3]=="columns"),h(j,C,75,2,2293),h(e,C,17,0,591)},l:function(p){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(p,$){U(p,e,$),u(e,n),u(n,o),u(o,s),u(s,i),u(i,r),u(o,b);for(let d=0;d<A.length;d+=1)A[d].m(o,null);u(e,l),u(e,v),u(v,a),u(a,F),u(F,x),u(v,M),u(v,c),u(c,g),u(g,m),u(e,z),u(e,j);for(let d=0;d<w.length;d+=1)w[d].m(j,null);k=!0,D||($t=[X(i,"click",t[5],!1,!1,!1),X(a,"click",t[7],!1,!1,!1),X(c,"click",t[8],!1,!1,!1)],D=!0)},p:function(p,[$]){if((!k||$&2&&f!==(f=p[1]===null?"active":""))&&_(i,"class",f),$&3){L=Object.keys(p[0]),K(L);let d;for(d=0;d<L.length;d+=1){let W=Ut(p,L,d);A[d]?A[d].p(W,$):(A[d]=vt(W),A[d].c(),A[d].m(o,null))}for(;d<A.length;d+=1)A[d].d(1);A.length=L.length}if((!k||$&8)&&N(a,"btn-active",p[3]==="columns"),(!k||$&8)&&N(c,"btn-active",p[3]==="rows"),$&4){H=p[2],K(H);let d;for(d=0;d<H.length;d+=1){let W=Qt(p,H,d);w[d]?(w[d].p(W,$),Q(w[d],1)):(w[d]=Ft(W),w[d].c(),Q(w[d],1),w[d].m(j,null))}for(Lt(),d=H.length;d<w.length;d+=1)zt(d);Rt()}(!k||$&8)&&N(j,"grid-cols-1",p[3]=="rows"),(!k||$&8)&&N(j,"lg:grid-cols-2",p[3]=="columns")},i:function(p){if(!k){for(let $=0;$<H.length;$+=1)Q(w[$]);k=!0}},o:function(p){w=w.filter(Boolean);for(let $=0;$<w.length;$+=1)st(w[$]);k=!1},d:function(p){p&&q(e),ht(A,p),ht(w,p),D=!1,R($t)}};return S("SvelteRegisterBlock",{block:xt,id:kt.name,type:"component",source:"",ctx:t}),xt}function me(t,e,n){let{$$slots:o={},$$scope:s}=e;lt("ChangelogApp",o,[]);let{seed:i}=e,r={},f=null,b=[],l="columns";t.$$.on_mount.push(function(){i===void 0&&!("seed"in e||t.$$.bound[t.$$.props.seed])&&console.warn("<ChangelogApp> was created without expected prop 'seed'")});let v=["seed"];he.keys(e).forEach(c=>{!~v.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<ChangelogApp> was created with unknown prop '${c}'`)});let a=()=>{n(1,f=null)},F=c=>{n(1,f=c)},x=()=>{n(3,l="columns")},M=()=>{n(3,l="rows")};return t.$$set=c=>{"seed"in c&&n(4,i=c.seed)},t.$capture_state=()=>({ChangelogItem:wt,seed:i,projects:r,selectedProject:f,selectedProjectChangelog:b,gridStyle:l}),t.$inject_state=c=>{"seed"in c&&n(4,i=c.seed),"projects"in c&&n(0,r=c.projects),"selectedProject"in c&&n(1,f=c.selectedProject),"selectedProjectChangelog"in c&&n(2,b=c.selectedProjectChangelog),"gridStyle"in c&&n(3,l=c.gridStyle)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty&16){t:n(0,r=i.reduce((c,g)=>(c[g.project]||(c[g.project]=[]),c[g.project].push(g),c),{}))}if(t.$$.dirty&3){t:n(2,b=f?r[f]:Object.values(r).flat().sort((c,g)=>new Date(g.date_merged).getTime()-new Date(c.date_merged).getTime()))}},[r,f,b,l,i,a,F,x,M]}var Et=class extends I{constructor(e){super(e),ct(this,e,me,kt,it,{seed:4}),S("SvelteRegisterComponent",{component:this,tagName:"ChangelogApp",options:e,id:kt.name})}get seed(){throw new Error("<ChangelogApp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set seed(e){throw new Error("<ChangelogApp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},qt=Et;jt({"changelog-app":{component:(t,e)=>{new qt({target:t,props:e})}}});})();
//# sourceMappingURL=/rails-changelog/_bridgetown/static/index.TTERSZD7.js.map
