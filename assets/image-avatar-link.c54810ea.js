import{u as t}from"./use-api.d05a7f0e.js";import{_ as i,f as p,q as r,r as n,o as c,k as u,w as l,a as f}from"./app.f7087405.js";const m=p({setup(){const{fetch:e}=t();return{columns:r([{field:"avatar",label:"\u7528\u6237\u5934\u50CF",custom:{define:"avatar",props:()=>({"spinner-size":"20px"})}},{field:"link",label:"\u7528\u6237\u4E3B\u9875",custom:{define:"link"}},{field:"image",label:"\u5C01\u9762",custom:{define:"image",props:()=>({"spinner-size":"20px"})}}]),fetch:a=>e({page:a.page,pageSize:a.pageSize})}}});function d(e,a,_,g,k,C){const o=n("q-table"),s=n("a-container");return c(),u(s,{columns:e.columns,"action-get":e.fetch,"page-size":3},{default:l(()=>[f(o)]),_:1},8,["columns","action-get"])}var v=i(m,[["render",d]]);export{v as default};
