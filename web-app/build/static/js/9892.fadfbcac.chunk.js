"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[9892],{79892:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(69060),o=a(66152),i=a(61060),l=a(61628),r=a(4836),s=a(77152),u=a(95705),c=a(66156),d=a(61180),b=a(78256),p=a(82496);const h=e=>{let{open:t,enabled:a,cfg:h,selectedBucket:x,closeModalAndRefresh:g}=e;const k=(0,c.Ab)(),[m,j]=(0,n.useState)(!1),[q,f]=(0,n.useState)(!1),[v,C]=(0,n.useState)("1"),[S,_]=(0,n.useState)("Ti"),[y,B]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if(a&&(f(!0),h)){const e=(0,i.UH)(h.quota||0,!0,!1,!0);C(e.total.toString()),_(e.unit),B(!0)}}),[a,h]),(0,n.useEffect)((()=>{B(!q||/^\d*(?:\.\d{1,2})?$/.test(v))}),[q,v]);return(0,p.jsx)(r.c,{modalOpen:t,onClose:()=>{g()},title:"Enable Bucket Quota",titleIcon:(0,p.jsx)(o.W__,{}),children:(0,p.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),!m&&y&&d.m.buckets.setBucketQuota(x,{enabled:q,amount:parseInt((0,i.qg)(v,S,!0)),quota_type:"hard"}).then((()=>{j(!1),g()})).catch((e=>{j(!1),k((0,u.op)((0,b.K)(e.error)))}))},children:(0,p.jsxs)(o.yE_,{withBorders:!1,containerPadding:!1,children:[(0,p.jsx)(o.Wkk,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:q,onChange:e=>{f(e.target.checked)},label:"Enabled"}),q&&(0,p.jsx)(o.q22,{id:"quota_size",name:"quota_size",onChange:e=>{C(e.target.value),e.target.validity.valid?B(!0):B(!1)},label:"Quota",value:v,required:!0,min:"1",overlayObject:(0,p.jsx)(s.c,{id:"quota_unit",onUnitChange:e=>{_(e)},unitSelected:S,unitsList:(0,i.SS)(["Ki"]),disabled:!1}),error:y?"":"Please enter a valid quota"}),(0,p.jsxs)(o.yeN,{item:!0,xs:12,sx:l.W2.modalButtonBar,children:[(0,p.jsx)(o.qaq,{id:"cancel",type:"button",variant:"regular",disabled:m,onClick:()=>{g()},label:"Cancel"}),(0,p.jsx)(o.qaq,{id:"save",type:"submit",variant:"callAction",disabled:m||!y,label:"Save"})]}),m&&(0,p.jsx)(o.yeN,{item:!0,xs:12,children:(0,p.jsx)(o.cHM,{})})]})})})}},77152:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(69060),o=a(66152),i=a(67659),l=a(58564),r=a.n(l),s=a(82496);const u=i.cp.button((e=>{let{theme:t}=e;return{border:"1px solid ".concat(r()(t,"borderColor","#E2E2E2")),borderRadius:3,color:r()(t,"secondaryText","#5B5C5C"),backgroundColor:r()(t,"boxBackground","#FBFAFA"),fontSize:12}})),c=e=>{let{id:t,unitSelected:a,unitsList:i,disabled:l=!1,onUnitChange:r}=e;const[c,d]=n.useState(null),b=Boolean(c),p=e=>{d(null),""!==e&&r&&r(e)};return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(u,{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":b?"true":void 0,onClick:e=>{d(e.currentTarget)},disabled:l,type:"button",children:a}),(0,s.jsx)(o.KQH,{id:"upload-main-menu",options:i,selectedOption:"",onSelect:e=>p(e),hideTriggerAction:()=>{p("")},open:b,anchorEl:c,anchorOrigin:"end"})]})}}}]);
//# sourceMappingURL=9892.fadfbcac.chunk.js.map