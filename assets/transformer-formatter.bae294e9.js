import{u as s}from"./use-api.d05a7f0e.js";import{_ as n,f as u,q as l,r as a,o as c,k as p,w as m,a as i}from"./app.f7087405.js";const f=u({setup(){const{fetch:o}=s();return{columns:l([{field:"id",label:"ID",custom:{formatter:"#{{id}}"}},{field:"user_name",label:"\u7528\u6237\u540D",custom:{formatter:e=>"U:"+e.user_name}},{field:"level",label:"\u662F\u5426\u7BA1\u7406\u5458",custom:{transformer:e=>e.level===1?1:0,map:{options:[{value:1,label:"\u7BA1\u7406\u5458",color:"primary",textColor:"white"},{value:0,label:"\u975E\u7BA1\u7406"}]},props:()=>({size:"sm"})}}]),fetch:e=>o({page:e.page,pageSize:e.pageSize})}}});function _(o,e,d,b,g,h){const t=a("q-table"),r=a("a-container");return c(),p(r,{columns:o.columns,"action-get":o.fetch,"page-size":3},{default:m(()=>[i(t)]),_:1},8,["columns","action-get"])}var C=n(f,[["render",_]]);export{C as default};
