import{u as l,l as d,a as m,b as f}from"./use-api.d05a7f0e.js";import{_ as b,f as h,p as _,q as v,r as n,o as g,k as w,w as C,a as u}from"./app.f7087405.js";const y=h({setup(){const{fetch:t,create:s,update:i}=l(),r=_();return{columns:v([{field:"id",label:"#id"},{field:"user_name",label:"\u7528\u6237\u540D",custom:{name:"user_name"}},{field:"city",label:"\u6240\u5728\u5730",custom:{action:{editable:!0,creatable:!0},map:{loadOptions:()=>d()},props:e=>{if(e!=="table")return{clearable:!0}}}},{field:"province",label:"\u6240\u5728\u533A",custom:{action:{editable:!0,creatable:!0},map:{dependsOn:"city",loadOptions:e=>m(e.city)},props:e=>{if(e!=="table")return{clearable:!0}}}},{field:"team",label:"\u6240\u5C5E\u5C0F\u7EC4",custom:{action:{editable:!0,creatable:!0},map:{dependsOn:"province",loadOptions:e=>f(e.province)},props:e=>{if(e!=="table")return{clearable:!0}}}},{custom:{buttons:["edit","copy"]}}]),fetch:e=>t({page:e.page,pageSize:e.pageSize}),createUser:e=>s(e).then(()=>{r.notify({message:"\u5DF2\u65B0\u589E\u7528\u6237",color:"positive",position:"top",icon:"done"})}),editUser:e=>i(e).then(()=>{r.notify({message:"\u5DF2\u66F4\u65B0",color:"positive",position:"top",icon:"done"})}),showWhen:e=>{const{from:c,field:a,formData:o}=e;return c==="creator"?a==="province"?!!o.city:a==="team"?!!o.province:!0:!0}}}});function O(t,s,i,r,e,c){const a=n("a-toolbar"),o=n("q-table"),p=n("a-container");return g(),w(p,{columns:t.columns,"action-get":t.fetch,"action-edit":t.editUser,"action-create":t.createUser,"page-size":3,"show-when":t.showWhen},{default:C(()=>[u(a,{actions:["create"]}),u(o)]),_:1},8,["columns","action-get","action-edit","action-create","show-when"])}var k=b(y,[["render",O]]);export{k as default};
