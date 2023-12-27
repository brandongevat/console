"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7494],{47494:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var c=s(72791),n=s(29945),i=s(78687),o=s(57689),l=s(31776),a=s(82342),r=s(56087),u=s(38442),d=s(87995),_=s(9859),h=s(44690),p=s(75578),S=s(27454),m=s(80184);const C=(0,p.Z)(c.lazy((()=>s.e(4619).then(s.bind(s,94619))))),x=(0,p.Z)(c.lazy((()=>s.e(8990).then(s.bind(s,8990))))),T=(0,p.Z)(c.lazy((()=>s.e(8455).then(s.bind(s,58455))))),f=()=>{const e=(0,h.TL)(),t=(0,o.UO)(),s=(0,i.v9)(_.HQ),[p,f]=(0,c.useState)(!0),[F,b]=(0,c.useState)([]),[E,k]=(0,c.useState)(!1),[A,O]=(0,c.useState)(!1),[j,P]=(0,c.useState)(""),[y,I]=(0,c.useState)(!1),[B,U]=(0,c.useState)(""),[L,g]=(0,c.useState)(""),K=t.bucketName||"",N=(0,u.F)(K,[r.Ft.S3_GET_BUCKET_POLICY,r.Ft.S3_GET_ACTIONS]),w=(0,u.F)(K,[r.Ft.S3_DELETE_BUCKET_POLICY]),Y=(0,u.F)(K,[r.Ft.S3_PUT_BUCKET_POLICY,r.Ft.S3_PUT_ACTIONS]);(0,c.useEffect)((()=>{s&&f(!0)}),[s,f]);const G=[{type:"delete",disableButtonFunction:()=>!w,onClick:e=>{O(!0),P(e.prefix)}},{type:"view",disableButtonFunction:()=>!Y,onClick:e=>{U(e.prefix),g(e.access),I(!0)}}];(0,c.useEffect)((()=>{e((0,d.Sc)("bucket_detail_prefix"))}),[]),(0,c.useEffect)((()=>{p&&(N?l.h.bucket.listAccessRulesWithBucket(K).then((e=>{b(e.data.accessRules),f(!1)})).catch((t=>{e((0,d.Ih)((0,a.g)(t))),f(!1)})):f(!1))}),[p,e,N,K]);return(0,m.jsxs)(c.Fragment,{children:[E&&(0,m.jsx)(C,{modalOpen:E,onClose:()=>{k(!1),f(!0)},bucket:K}),A&&(0,m.jsx)(x,{modalOpen:A,onClose:()=>{O(!1),f(!0)},bucket:K,toDelete:j}),y&&(0,m.jsx)(T,{modalOpen:y,onClose:()=>{I(!1),f(!0)},bucket:K,toEdit:B,initial:L}),(0,m.jsx)(n.NZf,{separator:!0,sx:{marginBottom:15},actions:(0,m.jsx)(u.s,{scopes:[r.Ft.S3_GET_BUCKET_POLICY,r.Ft.S3_PUT_BUCKET_POLICY,r.Ft.S3_GET_ACTIONS,r.Ft.S3_PUT_ACTIONS],resource:K,matchAll:!0,errorProps:{disabled:!0},children:(0,m.jsx)(S.Z,{tooltip:"Add Access Rule",children:(0,m.jsx)(n.zxk,{id:"add-bucket-access-rule",onClick:()=>{k(!0)},label:"Add Access Rule",icon:(0,m.jsx)(n.dtP,{}),variant:"callAction"})})}),children:(0,m.jsx)(n.SYi,{content:(0,m.jsxs)(c.Fragment,{children:["Setting an"," ",(0,m.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc/mc-anonymous-set.html",target:"blank",children:"Anonymous"})," ","policy allows clients to access the Bucket or prefix contents and perform actions consistent with the specified policy without authentication."]}),placement:"right",children:"Anonymous Access"})}),(0,m.jsx)(u.s,{scopes:[r.Ft.S3_GET_BUCKET_POLICY,r.Ft.S3_GET_ACTIONS],resource:K,errorProps:{disabled:!0},children:(0,m.jsx)(n.wQF,{itemActions:G,columns:[{label:"Prefix",elementKey:"prefix",renderFunction:e=>e||"/"},{label:"Access",elementKey:"access"}],isLoading:p,records:F||[],entityName:"Access Rules",idField:"prefix"})})]})}}}]);
//# sourceMappingURL=7494.551802e0.chunk.js.map