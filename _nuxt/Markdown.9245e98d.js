import s from"./ContentSlot.a980b6ba.js";import{r as o,H as m,q as p,Q as u}from"./entry.28a5f513.js";import"./utils.219b1cef.js";import"./preview.e7796da1.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};