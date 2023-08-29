import{h as O,f as Y,j as E,g as ee,i as q,k as W,l as te,m as ne,n as H,q as z,r as I,u as se,s as oe,v as re,x as B,_ as L,o as m,c as v,a as c,y as N,d as k,t as w,b as f,z as l,F as M,A as P,w as $,B as A,C as j}from"./entry.170cdcd5.js";import R from"./ContentRendererMarkdown.75079e2e.js";import ie from"./ContentQuery.cd505ccc.js";import ae from"./ContentList.8f308660.js";import"./index.a6ef77ff.js";import"./preview.9f832765.js";import"./query.1f9e0279.js";import"./utils.d1497eac.js";async function ce(e,t){return await le(t).catch(n=>(console.error("Failed to get image meta for "+t,n+""),{width:0,height:0,ratio:0}))}async function le(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const n=new Image;n.onload=()=>{const o={width:n.width,height:n.height,ratio:n.width/n.height};t(o)},n.onerror=o=>s(o),n.src=e})}function de(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function V(e){return t=>t?e[t]||t:e.missingValue}function ue({formatter:e,keyMap:t,joinWith:s="/",valueMap:n}={}){e||(e=(i,r)=>`${i}=${r}`),t&&typeof t!="function"&&(t=V(t));const o=n||{};return Object.keys(o).forEach(i=>{typeof o[i]!="function"&&(o[i]=V(o[i]))}),(i={})=>Object.entries(i).filter(([u,a])=>typeof a<"u").map(([u,a])=>{const p=o[u];return typeof p=="function"&&(a=p(i[u])),u=typeof t=="function"?t(u):u,e(u,a)}).join(s)}function S(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function _e(e){const t={options:e},s=(o,i={})=>U(t,o,i),n=(o,i={},r={})=>s(o,{...r,modifiers:q(i,r.modifiers||{})}).url;for(const o in e.presets)n[o]=(i,r,u)=>n(i,r,{...e.presets[o],...u});return n.options=e,n.getImage=s,n.getMeta=(o,i)=>fe(t,o,i),n.getSizes=(o,i)=>he(t,o,i),t.$img=n,n}async function fe(e,t,s){const n=U(e,t,{...s});return typeof n.getMeta=="function"?await n.getMeta():await ce(e,n.url)}function U(e,t,s){var p,h;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:n,defaults:o}=me(e,s.provider||e.options.provider),i=pe(e,s.preset);if(t=O(t)?t:Y(t),!n.supportsAlias)for(const d in e.options.alias)t.startsWith(d)&&(t=E(e.options.alias[d],t.substr(d.length)));if(n.validateDomains&&O(t)){const d=ee(t).host;if(!e.options.domains.find(_=>_===d))return{url:t}}const r=q(s,i,o);r.modifiers={...r.modifiers};const u=r.modifiers.format;(p=r.modifiers)!=null&&p.width&&(r.modifiers.width=S(r.modifiers.width)),(h=r.modifiers)!=null&&h.height&&(r.modifiers.height=S(r.modifiers.height));const a=n.getImage(t,r,e);return a.format=a.format||u||"",a}function me(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function pe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function he(e,t,s){var p,h;const n=S((p=s.modifiers)==null?void 0:p.width),o=S((h=s.modifiers)==null?void 0:h.height),i=n&&o?o/n:0,r=[],u={};if(typeof s.sizes=="string")for(const d of s.sizes.split(/[\s,]+/).filter(_=>_)){const _=d.split(":");_.length===2&&(u[_[0].trim()]=_[1].trim())}else Object.assign(u,s.sizes);for(const d in u){const _=e.options.screens&&e.options.screens[d]||parseInt(d);let y=String(u[d]);const g=y.endsWith("vw");if(!g&&/^\d+$/.test(y)&&(y=y+"px"),!g&&!y.endsWith("px"))continue;let b=parseInt(y);if(!_||!b)continue;g&&(b=Math.round(b/100*_));const x=i?Math.round(b*i):o;r.push({width:b,size:y,screenMaxWidth:_,media:`(max-width: ${_}px)`,src:e.$img(t,{...s.modifiers,width:b,height:x},s)})}r.sort((d,_)=>d.screenMaxWidth-_.screenMaxWidth);const a=r[r.length-1];return a&&(a.media=""),{sizes:r.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "),srcset:r.map(d=>`${d.src} ${d.width}w`).join(", "),src:a==null?void 0:a.src}}const ge=ue({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),ve=(e,{modifiers:t={},baseURL:s}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ge(t)||"_";return s||(s=E(n.options.nuxt.baseURL,"/_ipx")),{url:E(s,o,te(e))}},ye=!0,xe=!0,we=Object.freeze(Object.defineProperty({__proto__:null,getImage:ve,supportsAlias:xe,validateDomains:ye},Symbol.toStringTag,{value:"Module"})),T={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};T.providers={ipx:{provider:we,defaults:void 0}};const $e=()=>{const e=ne(),t=H();return t.$img||t._img||(t._img=_e({...T,nuxt:{baseURL:e.app.baseURL}}))},G={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},be=e=>{const t=z(()=>({provider:e.provider,preset:e.preset})),s=z(()=>({width:S(e.width),height:S(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),n=z(()=>({...e.modifiers,width:S(e.width),height:S(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:n}},ke={...G,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},ze=I({name:"NuxtPicture",props:ke,emits:["load"],setup:(e,t)=>{var y,g,b;const s=$e(),n=be(e),o=z(()=>["png","webp","gif"].includes(i.value)),i=z(()=>de(e.src)),r=z(()=>e.format||(i.value==="svg"?"svg":"webp")),u=z(()=>e.legacyFormat?e.legacyFormat:{webp:o.value?"png":"jpeg",svg:"png"}[r.value]||i.value),a=z(()=>r.value==="svg"?[{src:e.src}]:(u.value!==r.value?[u.value,r.value]:[r.value]).map(C=>{const{srcset:Z,sizes:K,src:X}=s.getSizes(e.src,{...n.options.value,sizes:e.sizes||s.options.screens,modifiers:{...n.modifiers.value,format:C}});return{src:X,type:`image/${C}`,sizes:K,srcset:Z}}));if(e.preload){const x=(y=a.value)!=null&&y[1]?1:0,C={rel:"preload",as:"image",imagesrcset:a.value[x].srcset};(b=(g=a.value)==null?void 0:g[x])!=null&&b.sizes&&(C.imagesizes=a.value[x].sizes),se({link:[C]})}const p={...e.imgAttrs,"data-nuxt-pic":""};for(const x in t.attrs)x in G&&!(x in p)&&(p[x]=t.attrs[x]);const h=oe(),_=H().isHydrating;return re(()=>{h.value&&(h.value.complete&&_&&!h.value.getAttribute("data-error")&&t.emit("load",new Event("load")),h.value.onload=x=>{t.emit("load",x)})}),()=>{var x;return B("picture",{key:a.value[0].src},[...(x=a.value)!=null&&x[1]?[B("source",{type:a.value[1].type,sizes:a.value[1].sizes,srcset:a.value[1].srcset})]:[],B("img",{ref:h,...n.attrs.value,...p,src:a.value[0].src,sizes:a.value[0].sizes,srcset:a.value[0].srcset})])}}}),Se={},Ie={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},Ce=c("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"},null,-1),je=[Ce];function Me(e,t){return m(),v("svg",Ie,je)}const D=L(Se,[["render",Me]]),Ae={rel:"noopener noreferrer",target:"_blank"},F=I({__name:"external-link",props:{text:{}},setup(e){return(t,s)=>(m(),v("a",Ae,[N(t.$slots,"default",{},()=>[k(w(t.text),1)])]))}}),Le={},Pe={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},Be=c("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"},null,-1),Ee=[Be];function Ne(e,t){return m(),v("svg",Pe,Ee)}const Re=L(Le,[["render",Ne]]),Fe={class:"hidden sm:flex sm:space-x-6 sm:space-y-6 lg:block lg:space-x-0"},Oe={class:"space-y-6 dark:text-slate-200"},We={class:"font-bold space-y-2"},Ve={class:"space-y-6 sm:hidden"},qe={class:"flex space-x-4"},He={class:"font-bold space-y-2 self-center"},Ue=I({__name:"me",props:{content:{}},setup(e){const t=e,{content:{github:s,linkedInName:n,linkedInUrl:o,image:i,body:r}}=t;return(u,a)=>{const p=ze,h=D,d=F,_=Re,y=R;return m(),v(M,null,[c("div",Fe,[f(p,{src:l(i),imgAttrs:{class:"rounded max-h-44 sm:max-h-64"}},null,8,["src"]),c("div",Oe,[c("ul",We,[(m(!0),v(M,null,P(l(s),g=>(m(),v("li",{key:g},[f(d,{href:`https://github.com/${g}`},{default:$(()=>[f(h),k(" "+w(g),1)]),_:2},1032,["href"])]))),128)),c("li",null,[f(d,{href:l(o)},{default:$(()=>[f(_),k(" "+w(l(n)),1)]),_:1},8,["href"])])]),f(y,{class:"prose dark:prose-invert max-w-sm",value:l(r)},null,8,["value"])])]),c("div",Ve,[c("div",qe,[f(p,{src:l(i),imgAttrs:{class:"rounded max-h-40"}},null,8,["src"]),c("ul",He,[(m(!0),v(M,null,P(l(s),g=>(m(),v("li",{key:g},[f(d,{href:`https://github.com/${g}`},{default:$(()=>[f(h),k(" "+w(g),1)]),_:2},1032,["href"])]))),128)),c("li",null,[f(d,{href:l(o)},{default:$(()=>[f(_),k(" "+w(l(n)),1)]),_:1},8,["href"])])])]),f(y,{class:"prose dark:prose-invert max-w-sm",value:l(r)},null,8,["value"])])],64)}}}),Te={},Ge={class:"rounded-sm text-white bg-black px-2 py-1 text-xs font-semibold font-sans"};function De(e,t){return m(),v("span",Ge,[N(e.$slots,"default")])}const Q=L(Te,[["render",De]]),Qe={},Je={class:"relative p-6 border bg-white rounded-sm border-slate-500 dark:bg-slate-900 dark:border-gray-700 dark:text-slate-200"};function Ze(e,t){return m(),v("div",Je,[N(e.$slots,"default")])}const J=L(Qe,[["render",Ze]]),Ke={key:0},Xe={class:"sr-only"},Ye={class:"font-mono space-y-1","aria-hidden":""},et={class:"flex items-center justify-between"},tt={class:"my-0"},nt={class:"flex items-center space-x-2"},st={key:1},ot=c("span",null,"•",-1),rt={class:"text-slate-500 dark:text-slate-400 text-sm font-semibold flex space-x-3"},it=c("span",null,"•",-1),at=I({__name:"work-item",props:{content:{}},setup(e){const t=e,{content:{position:s,location:n,company:o,companyLinkedIn:i,employmentType:r,years:u,body:a,_draft:p}}=t;return(h,d)=>{const _=Q,y=F,g=R,b=J;return l(p)?j("",!0):(m(),v("li",Ke,[f(b,{kind:"work"},{default:$(()=>[c("div",Xe," I worked as a "+w(l(s))+" for "+w(l(o))+" in "+w(l(n))+" during the years "+w(l(u))+". ",1),c("div",Ye,[c("div",et,[c("h2",tt,w(l(s)),1),f(_,null,{default:$(()=>[k("WORK")]),_:1})]),c("div",nt,[l(i)?(m(),A(y,{key:0,href:l(i)},{default:$(()=>[k(w(l(o)),1)]),_:1},8,["href"])):(m(),v("span",st,w(l(o)),1)),ot,c("span",null,w(l(r)),1)]),c("div",rt,[c("span",null,w(l(u)),1),it,c("span",null,w(l(n)),1)])]),c("div",null,[f(g,{value:l(a)},null,8,["value"])])]),_:1})]))}}}),ct={},lt={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline",fill:"currentColor",viewBox:"0 0 16 16"},dt=c("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"},null,-1),ut=[dt];function _t(e,t){return m(),v("svg",lt,ut)}const ft=L(ct,[["render",_t]]),mt={key:0},pt={class:"font-mono space-y-3 dark:text-slate-200"},ht={class:"space-y-1"},gt={class:"flex items-center justify-between"},vt={class:"my-0 dark:text-slate-200"},yt={class:"text-slate-500 dark:text-slate-400 text-sm font-semibold"},xt={key:0,class:"list-none p-0 -m-1 text-sm"},wt=c("span",null,"Repository",-1),$t=I({__name:"personal-item",props:{content:{}},setup(e){const t=e,{content:{title:s,years:n,githubUrl:o,homePageUrl:i,body:r,_draft:u}}=t;return(a,p)=>{const h=Q,d=D,_=F,y=ft,g=R,b=J;return l(u)?j("",!0):(m(),v("li",mt,[f(b,null,{default:$(()=>[c("div",pt,[c("div",ht,[c("div",gt,[c("h2",vt,w(l(s)),1),f(h,null,{default:$(()=>[k("PERSONAL PROJECT")]),_:1})]),c("div",yt,w(l(n)),1)]),l(o)||l(i)?(m(),v("ul",xt,[c("li",null,[l(o)?(m(),A(_,{key:0,href:l(o),class:"no-underline font-semibold"},{default:$(()=>[f(d,{class:"h-5 w-5"}),k(),wt]),_:1},8,["href"])):j("",!0)]),c("li",null,[l(i)?(m(),A(_,{key:0,href:l(i),class:"no-underline font-semibold"},{default:$(()=>[f(y),k(" Homepage ")]),_:1},8,["href"])):j("",!0)])])):j("",!0)]),c("div",null,[f(g,{value:l(r)},null,8,["value"])])]),_:1})]))}}}),bt={class:"flex flex-col items-center px-4 space-y-6 lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-6"},kt={class:"pt-4 lg:sticky lg:top-2"},zt={class:"prose prose-sm prose-li:p-0 prose-headings:my-0 prose-ul:p-0 dark:prose-invert sm:prose-base"},St={class:"space-y-4 p-0 list-none"},It={class:"space-y-4 p-0 list-none"},Nt=I({__name:"index",setup(e){return(t,s)=>{const n=Ue,o=ie,i=at,r=ae,u=$t;return m(),v("main",bt,[c("div",kt,[f(o,{path:"/_me",find:"one"},{default:$(({data:a})=>[f(n,{content:a},null,8,["content"])]),_:1})]),c("div",zt,[f(r,{path:"/_work"},{default:$(({list:a})=>[c("ul",St,[(m(!0),v(M,null,P(a,(p,h)=>(m(),A(i,{key:h,content:p},null,8,["content"]))),128))])]),_:1}),f(r,{path:"/_personal"},{default:$(({list:a})=>[c("ul",It,[(m(!0),v(M,null,P(a,(p,h)=>(m(),A(u,{key:h,content:p},null,8,["content"]))),128))])]),_:1})])])}}});export{Nt as default};