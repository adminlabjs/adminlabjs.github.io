import{u as l}from"./use-api.d05a7f0e.js";import{_ as d,f,p as m,q as _,r as o,o as g,k as b,w as h,a as c}from"./app.f7087405.js";const C=f({setup(){const e=m(),{fetch:a,create:n,delete:i,update:s}=l();return{columns:_([{field:"id",label:"#ID"},{field:"user_name",label:"\u7528\u6237\u540D",custom:{action:{creatable:!0,editable:!0}}},{field:"link",label:"\u4E2A\u4EBA\u4E3B\u9875",custom:{define:"link",action:{creatable:!0,editable:!0}}},{label:"\u64CD\u4F5C",custom:{buttons:["edit","copy","delete"]}}]),fetch:t=>a({page:t.page,pageSize:t.pageSize}),createUser:t=>n(t).then(()=>{e.notify({message:"\u5DF2\u65B0\u589E\u7528\u6237",color:"positive",position:"top",icon:"done"})}),deleteUser:t=>i(t.id).then(()=>{e.notify({message:"\u5DF2\u5220\u9664",color:"positive",position:"top",icon:"done"})}),editUser:t=>s(t).then(()=>{e.notify({message:"\u5DF2\u66F4\u65B0",color:"positive",position:"top",icon:"done"})})}}});function D(e,a,n,i,s,t){const r=o("q-table"),u=o("q-pagination"),p=o("a-container");return g(),b(p,{columns:e.columns,"action-get":e.fetch,"action-create":e.createUser,"action-edit":e.editUser,"action-delete":e.deleteUser,"page-size":3},{default:h(()=>[c(r),c(u)]),_:1},8,["columns","action-get","action-create","action-edit","action-delete"])}var q=d(C,[["render",D]]);export{q as default};
