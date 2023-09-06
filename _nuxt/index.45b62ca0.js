import{h as W,f as se,j as F,g as ne,i as T,k as H,l as oe,m as ie,n as G,q as b,r as C,u as re,s as N,v as ae,x as L,_ as E,o as _,c as p,a as c,y as B,d as S,t as y,b as m,z as a,F as P,A,w as $,B as M,C as j,D as V,E as ce,G as q}from"./entry.4ab9e6f1.js";import{_ as O}from"./ContentRendererMarkdown.vue.ccecdfc4.js";import le from"./ContentQuery.08ad73aa.js";import de from"./ContentList.3db166a2.js";import{u as ue,q as U}from"./query.6b1979cb.js";import"./index.a6ef77ff.js";import"./preview.fb0906aa.js";async function _e(t,e){return await fe(e).catch(s=>(console.error("Failed to get image meta for "+e,s+""),{width:0,height:0,ratio:0}))}async function fe(t){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((e,o)=>{const s=new Image;s.onload=()=>{const i={width:s.width,height:s.height,ratio:s.width/s.height};e(i)},s.onerror=i=>o(i),s.src=t})}function me(t=""){return t.split(/[?#]/).shift().split("/").pop().split(".").pop()}function D(t){return e=>e?t[e]||e:t.missingValue}function pe({formatter:t,keyMap:e,joinWith:o="/",valueMap:s}={}){t||(t=(r,n)=>`${r}=${n}`),e&&typeof e!="function"&&(e=D(e));const i=s||{};return Object.keys(i).forEach(r=>{typeof i[r]!="function"&&(i[r]=D(i[r]))}),(r={})=>Object.entries(r).filter(([u,l])=>typeof l<"u").map(([u,l])=>{const f=i[u];return typeof f=="function"&&(l=f(r[u])),u=typeof e=="function"?e(u):u,t(u,l)}).join(o)}function z(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return parseInt(t,10)}function he(t){const e={options:t},o=(i,r={})=>K(e,i,r),s=(i,r={},n={})=>o(i,{...n,modifiers:T(r,n.modifiers||{})}).url;for(const i in t.presets)s[i]=(r,n,u)=>s(r,n,{...t.presets[i],...u});return s.options=t,s.getImage=o,s.getMeta=(i,r)=>ge(e,i,r),s.getSizes=(i,r)=>xe(e,i,r),e.$img=s,s}async function ge(t,e,o){const s=K(t,e,{...o});return typeof s.getMeta=="function"?await s.getMeta():await _e(t,s.url)}function K(t,e,o){var f,g;if(typeof e!="string"||e==="")throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);if(e.startsWith("data:"))return{url:e};const{provider:s,defaults:i}=ve(t,o.provider||t.options.provider),r=ye(t,o.preset);if(e=W(e)?e:se(e),!s.supportsAlias)for(const d in t.options.alias)e.startsWith(d)&&(e=F(t.options.alias[d],e.substr(d.length)));if(s.validateDomains&&W(e)){const d=ne(e).host;if(!t.options.domains.find(h=>h===d))return{url:e}}const n=T(o,r,i);n.modifiers={...n.modifiers};const u=n.modifiers.format;(f=n.modifiers)!=null&&f.width&&(n.modifiers.width=z(n.modifiers.width)),(g=n.modifiers)!=null&&g.height&&(n.modifiers.height=z(n.modifiers.height));const l=s.getImage(e,n,t);return l.format=l.format||u||"",l}function ve(t,e){const o=t.options.providers[e];if(!o)throw new Error("Unknown provider: "+e);return o}function ye(t,e){if(!e)return{};if(!t.options.presets[e])throw new Error("Unknown preset: "+e);return t.options.presets[e]}function xe(t,e,o){var f,g;const s=z((f=o.modifiers)==null?void 0:f.width),i=z((g=o.modifiers)==null?void 0:g.height),r=s&&i?i/s:0,n=[],u={};if(typeof o.sizes=="string")for(const d of o.sizes.split(/[\s,]+/).filter(h=>h)){const h=d.split(":");h.length===2&&(u[h[0].trim()]=h[1].trim())}else Object.assign(u,o.sizes);for(const d in u){const h=t.options.screens&&t.options.screens[d]||parseInt(d);let x=String(u[d]);const w=x.endsWith("vw");if(!w&&/^\d+$/.test(x)&&(x=x+"px"),!w&&!x.endsWith("px"))continue;let k=parseInt(x);if(!h||!k)continue;w&&(k=Math.round(k/100*h));const v=r?Math.round(k*r):i;n.push({width:k,size:x,screenMaxWidth:h,media:`(max-width: ${h}px)`,src:t.$img(e,{...o.modifiers,width:k,height:v},o)})}n.sort((d,h)=>d.screenMaxWidth-h.screenMaxWidth);const l=n[n.length-1];return l&&(l.media=""),{sizes:n.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "),srcset:n.map(d=>`${d.src} ${d.width}w`).join(", "),src:l==null?void 0:l.src}}const we=pe({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(t,e)=>H(t)+"_"+H(e)}),$e=(t,{modifiers:e={},baseURL:o}={},s)=>{e.width&&e.height&&(e.resize=`${e.width}x${e.height}`,delete e.width,delete e.height);const i=we(e)||"_";return o||(o=F(s.options.nuxt.baseURL,"/_ipx")),{url:F(o,i,oe(t))}},ke=!0,be=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,getImage:$e,supportsAlias:be,validateDomains:ke},Symbol.toStringTag,{value:"Module"})),Q={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};Q.providers={ipx:{provider:Se,defaults:void 0}};const ze=()=>{const t=ie(),e=G();return e.$img||e._img||(e._img=he({...Q,nuxt:{baseURL:t.app.baseURL}}))},J={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)}},Ce=t=>{const e=b(()=>({provider:t.provider,preset:t.preset})),o=b(()=>({width:z(t.width),height:z(t.height),alt:t.alt,referrerpolicy:t.referrerpolicy,usemap:t.usemap,longdesc:t.longdesc,ismap:t.ismap,crossorigin:t.crossorigin===!0?"anonymous":t.crossorigin||void 0,loading:t.loading,decoding:t.decoding})),s=b(()=>({...t.modifiers,width:z(t.width),height:z(t.height),format:t.format,quality:t.quality,background:t.background,fit:t.fit}));return{options:e,attrs:o,modifiers:s}},Ie={...J,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},je=C({name:"NuxtPicture",props:Ie,emits:["load"],setup:(t,e)=>{var x,w,k;const o=ze(),s=Ce(t),i=b(()=>["png","webp","gif"].includes(r.value)),r=b(()=>me(t.src)),n=b(()=>t.format||(r.value==="svg"?"svg":"webp")),u=b(()=>t.legacyFormat?t.legacyFormat:{webp:i.value?"png":"jpeg",svg:"png"}[n.value]||r.value),l=b(()=>n.value==="svg"?[{src:t.src}]:(u.value!==n.value?[u.value,n.value]:[n.value]).map(I=>{const{srcset:Y,sizes:ee,src:te}=o.getSizes(t.src,{...s.options.value,sizes:t.sizes||o.options.screens,modifiers:{...s.modifiers.value,format:I}});return{src:te,type:`image/${I}`,sizes:ee,srcset:Y}}));if(t.preload){const v=(x=l.value)!=null&&x[1]?1:0,I={rel:"preload",as:"image",imagesrcset:l.value[v].srcset};(k=(w=l.value)==null?void 0:w[v])!=null&&k.sizes&&(I.imagesizes=l.value[v].sizes),re({link:[I]})}const f={...t.imgAttrs,"data-nuxt-pic":""};for(const v in e.attrs)v in J&&!(v in f)&&(f[v]=e.attrs[v]);const g=N(),h=G().isHydrating;return ae(()=>{g.value&&(g.value.complete&&h&&!g.value.getAttribute("data-error")&&e.emit("load",new Event("load")),g.value.onload=v=>{e.emit("load",v)})}),()=>{var v;return L("picture",{key:l.value[0].src},[...(v=l.value)!=null&&v[1]?[L("source",{type:l.value[1].type,sizes:l.value[1].sizes,srcset:l.value[1].srcset})]:[],L("img",{ref:g,...s.attrs.value,...f,src:l.value[0].src,sizes:l.value[0].sizes,srcset:l.value[0].srcset})])}}}),Pe={},Ae={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},Me=c("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"},null,-1),Ee=[Me];function Le(t,e){return _(),p("svg",Ae,Ee)}const Z=E(Pe,[["render",Le]]),qe={rel:"noopener noreferrer",target:"_blank"},R=C({__name:"external-link",props:{text:{}},setup(t){return(e,o)=>(_(),p("a",qe,[B(e.$slots,"default",{},()=>[S(y(e.text),1)])]))}}),Fe={},Ne={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},Be=c("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"},null,-1),Oe=[Be];function Re(t,e){return _(),p("svg",Ne,Oe)}const We=E(Fe,[["render",Re]]),He={class:"hidden sm:flex sm:space-x-6 sm:space-y-6 lg:block lg:space-x-0"},Ve={class:"space-y-6"},Ue={class:"font-bold space-y-3 dark:text-slate-200"},De={class:"space-y-6 sm:hidden"},Te={class:"flex space-x-4"},Ge={class:"font-bold space-y-3 self-center dark:text-slate-200"},Ke=C({__name:"me",props:{content:{}},setup(t){const e=t,{content:{github:o,linkedInName:s,linkedInUrl:i,image:r,body:n}}=e;return(u,l)=>{const f=je,g=Z,d=R,h=We,x=O;return _(),p(P,null,[c("div",He,[m(f,{src:a(r),imgAttrs:{class:"rounded max-h-44 sm:max-h-64"}},null,8,["src"]),c("div",Ve,[c("ul",Ue,[(_(!0),p(P,null,A(a(o),w=>(_(),p("li",{key:w},[m(d,{href:`https://github.com/${w}`},{default:$(()=>[m(g),S(" "+y(w),1)]),_:2},1032,["href"])]))),128)),c("li",null,[m(d,{href:a(i)},{default:$(()=>[m(h),S(" "+y(a(s)),1)]),_:1},8,["href"])])]),m(x,{class:"prose dark:prose-invert max-w-xs",value:a(n)},null,8,["value"])])]),c("div",De,[c("div",Te,[m(f,{src:a(r),imgAttrs:{class:"rounded max-h-40"}},null,8,["src"]),c("ul",Ge,[(_(!0),p(P,null,A(a(o),w=>(_(),p("li",{key:w},[m(d,{href:`https://github.com/${w}`},{default:$(()=>[m(g),S(" "+y(w),1)]),_:2},1032,["href"])]))),128)),c("li",null,[m(d,{href:a(i)},{default:$(()=>[m(h),S(" "+y(a(s)),1)]),_:1},8,["href"])])])]),m(x,{class:"prose dark:prose-invert max-w-sm",value:a(n)},null,8,["value"])])],64)}}}),Qe={},Je={class:"relative p-6 border bg-white rounded-sm border-slate-500 dark:bg-slate-900 dark:border-gray-700 dark:text-slate-200"};function Ze(t,e){return _(),p("div",Je,[B(t.$slots,"default")])}const X=E(Qe,[["render",Ze]]),Xe={key:0},Ye={class:"sr-only"},et={class:"font-mono space-y-1","aria-hidden":""},tt={class:"flex items-center justify-between"},st={class:"my-0"},nt=c("span",{class:"badge text-white bg-black font-mono"}," Work ",-1),ot={class:"flex items-center space-x-2"},it={key:1},rt=c("span",null,"•",-1),at={class:"text-slate-500 dark:text-slate-400 text-sm font-semibold flex space-x-3"},ct=c("span",null,"•",-1),lt={key:0},dt={class:"flex flex-wrap space-x-2 list-none"},ut={class:"badge"},_t=C({__name:"work-item",props:{content:{}},setup(t){const e=t,{content:{position:o,location:s,company:i,companyLinkedIn:r,employmentType:n,years:u,body:l,skills:f,_draft:g}}=e;return(d,h)=>{const x=R,w=O,k=X;return a(g)?j("",!0):(_(),p("li",Xe,[m(k,{kind:"work"},{default:$(()=>[c("div",Ye," I worked as a "+y(a(o))+" for "+y(a(i))+" in "+y(a(s))+" during the years "+y(a(u))+". ",1),c("div",et,[c("div",tt,[c("h2",st,y(a(o)),1),nt]),c("div",ot,[a(r)?(_(),M(x,{key:0,href:a(r)},{default:$(()=>[S(y(a(i)),1)]),_:1},8,["href"])):(_(),p("span",it,y(a(i)),1)),rt,c("span",null,y(a(n)),1)]),c("div",at,[c("span",null,y(a(u)),1),ct,c("span",null,y(a(s)),1)])]),c("div",null,[m(w,{value:a(l)},null,8,["value"])]),a(f)?(_(),p("div",lt,[c("ul",dt,[(_(!0),p(P,null,A(a(f),v=>(_(),p("li",ut,y(v),1))),256))])])):j("",!0)]),_:1})]))}}}),ft={},mt={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},pt=c("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"},null,-1),ht=[pt];function gt(t,e){return _(),p("svg",mt,ht)}const vt=E(ft,[["render",gt]]),yt={key:0},xt={class:"font-mono space-y-3 dark:text-slate-200"},wt={class:"space-y-1"},$t={class:"flex items-center justify-between space-x-1"},kt={class:"my-0 dark:text-slate-200"},bt={class:"badge text-white bg-black font-mono"},St={class:"text-slate-500 dark:text-slate-400 text-sm font-semibold"},zt={key:0,class:"list-none p-0 -m-1 text-sm"},Ct=c("span",null,"Repository",-1),It={key:0},jt={class:"flex flex-wrap space-x-2 list-none"},Pt={class:"badge"},At=C({__name:"personal-item",props:{content:{}},setup(t){const e=t,{content:{title:o,collaborative:s,years:i,githubUrl:r,homepageUrl:n,skills:u,body:l,_draft:f}}=e;return(g,d)=>{const h=Z,x=R,w=vt,k=O,v=X;return a(f)?j("",!0):(_(),p("li",yt,[m(v,null,{default:$(()=>[c("div",xt,[c("div",wt,[c("div",$t,[c("h2",kt,y(a(o)),1),c("span",bt," Personal"+y(a(s)?"/Collaborative":""),1)]),c("div",St,y(a(i)),1)]),a(r)||a(n)?(_(),p("ul",zt,[c("li",null,[a(r)?(_(),M(x,{key:0,href:a(r),class:"no-underline font-semibold"},{default:$(()=>[m(h,{class:"h-5 w-5"}),S(),Ct]),_:1},8,["href"])):j("",!0)]),c("li",null,[a(n)?(_(),M(x,{key:0,href:a(n),class:"no-underline font-semibold"},{default:$(()=>[m(w),S(" Homepage ")]),_:1},8,["href"])):j("",!0)])])):j("",!0)]),c("div",null,[m(k,{value:a(l)},null,8,["value"])]),a(u)?(_(),p("div",It,[c("ul",jt,[(_(!0),p(P,null,A(a(u),I=>(_(),p("li",Pt,y(I),1))),256))])])):j("",!0)]),_:1})]))}}}),Mt={class:"flex flex-col items-center px-4 space-y-6 lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-8"},Et={class:"pt-4 lg:sticky lg:top-2"},Lt={class:"space-y-10"},qt={class:"prose prose-sm prose-li:p-0 prose-headings:my-0 prose-ul:p-0 dark:prose-invert sm:prose-base"},Ft={class:"space-y-4 p-0 list-none"},Nt={class:"space-y-4 p-0 list-none"},Bt=C({__name:"home-page-content",setup(t){const e=V("filterSkills");return V("filterProjectKind"),(o,s)=>{const i=Ke,r=le,n=_t,u=de,l=At;return _(),p("main",Mt,[c("div",Et,[m(r,{path:"/_me",find:"one"},{default:$(({data:f})=>[m(i,{content:f},null,8,["content"])]),_:1})]),c("div",Lt,[c("div",qt,[m(u,{query:{path:"_work",where:[a(e).length?{skills:{$containsAny:a(e)}}:{}]}},{default:$(({list:f})=>[c("ul",Ft,[(_(!0),p(P,null,A(f,(g,d)=>(_(),M(n,{key:d,content:g},null,8,["content"]))),128))])]),"not-found":$(()=>[]),_:1},8,["query"]),m(u,{query:{path:"/_personal",where:[a(e).length?{skills:{$containsAny:a(e)}}:{}]}},{default:$(({list:f})=>[c("ul",Nt,[(_(!0),p(P,null,A(f,(g,d)=>(_(),M(l,{key:d,content:g},null,8,["content"]))),128))])]),"not-found":$(()=>[]),_:1},8,["query"])])])])}}});async function Ot(){const{data:t}=await ue(()=>Promise.all([U("_work").find(),U("_personal").find()]),"$J1v5SLUOMw"),e={skills:{},projectKind:["work","personal","personal/collaborative"]};if(t.value){const[o,s]=t.value;o.forEach(i=>{var r;(r=i.skills)==null||r.forEach(n=>{e.skills[n]||(e.skills[n]=0),e.skills[n]+=1})}),s.forEach(i=>{var r;(r=i.skills)==null||r.forEach(n=>{e.skills[n]||(e.skills[n]=0),e.skills[n]+=1})})}return e}const Rt=C({__name:"home-page-content-provider",async setup(t){let e,o;const s=([e,o]=ce(()=>Ot()),e=await e,o(),e),i=N([]),r=N([]);return q("contentFilterOptions",s),q("filterSkills",i),q("filterProjectKind",r),(n,u)=>B(n.$slots,"default")}}),Kt=C({__name:"index",setup(t){return(e,o)=>{const s=Bt,i=Rt;return _(),M(i,null,{default:$(()=>[m(s)]),_:1})}}});export{Kt as default};