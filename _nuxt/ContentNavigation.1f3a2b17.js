import{y as f,C as v,f as g,D as l,l as d,E as h,z as _,B as r}from"./entry.b7ced563.js";import{q as y,w as m,h as p,e as C,s as w,j as P,u as $,a as N}from"./query.498ead06.js";import{_ as j}from"./nuxt-link.99bed49e.js";import{u as D}from"./preview.42affb25.js";const E=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(w())return(await v(()=>import("./client-db.e1e46dfe.js"),["./client-db.e1e46dfe.js","./entry.b7ced563.js","./query.498ead06.js","./preview.42affb25.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=d(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=$();return{navigation:n}}const{data:s}=await N(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),Q=T;export{Q as default};
