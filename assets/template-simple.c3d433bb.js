import{u as o}from"./use-api.d05a7f0e.js";import{_ as r,f as c,q as i,y as m,r as l,o as p,k as f,w as _,a as v}from"./app.f7087405.js";const d=c({setup(){const{fetch:a,setFetchDelay:t}=o();return t(0),{columns:i([{field:"user_name",label:"\u7528\u6237\u540D",custom:{name:"username",visible:!1}},{field:"avatar",label:"\u5934\u50CF",custom:{define:"avatar",name:"user_avatar",visible:!1}},{field:"is_online",custom:{visible:!1,name:"level",map:{options:[{value:0,label:"\u79BB\u7EBF"},{value:1,label:"\u5728\u7EBF",color:"primary",textColor:"white"}]}}},{label:"\u7B80\u5355\u7528\u6CD5",custom:{template:"{{user_avatar}}{{username}}"}},{label:"\u6570\u7EC4\u5E03\u5C40",custom:{template:{children:["{{user_avatar}}{{username}}","\u652F\u6301\u4F20style\u4E0Ecss",{children:["\u72B6\u6001: {{level}}"],classes:"text-black q-flex",style:{"font-size":"12px"}}],style:{"font-size":"16px"},classes:"text-primary"}}},{label:"\u51FD\u6570",custom:{template:e=>{const s=e(["user_avatar","username"]);return m("div",null,[s.user_avatar])}}}]),fetch:e=>a({page:e.page,pageSize:e.pageSize})}}});function b(a,t,e,s,h,C){const u=l("q-table"),n=l("a-container");return p(),f(n,{columns:a.columns,"action-get":a.fetch,"page-size":1},{default:_(()=>[v(u,{"hide-pagination":""})]),_:1},8,["columns","action-get"])}var B=r(d,[["render",b]]);export{B as default};
