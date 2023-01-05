"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1604],{1604:function(e,t,n){n.r(t);var a=n(29439),i=n(1413),o=n(72791),s=n(75952),l=n(89594),c=n(11135),r=n(25787),u=n(45953),d=n(23814),m=n(81207),f=n(56028),Z=n(83679),p=n(21435),x=n(72401),h=n(87995),v=n(25469),b=n(80184);t.default=(0,r.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d.bK),d.QV),d.DF),d.ID))}))((function(e){var t=e.classes,n=e.open,i=e.bucketName,c=e.closeModalAndRefresh,r=(0,v.TL)(),d=(0,o.useState)(!1),j=(0,a.Z)(d,2),g=j[0],C=j[1],N=(0,o.useState)(!0),y=(0,a.Z)(N,2),S=y[0],k=y[1],P=(0,o.useState)("compliance"),w=(0,a.Z)(P,2),M=w[0],R=w[1],B=(0,o.useState)("days"),E=(0,a.Z)(B,2),_=E[0],D=E[1],z=(0,o.useState)(1),F=(0,a.Z)(z,2),T=F[0],O=F[1],A=(0,o.useState)(!1),K=(0,a.Z)(A,2),L=K[0],V=K[1];return(0,o.useEffect)((function(){Number.isNaN(T)||T<1?V(!1):V(!0)}),[T]),(0,o.useEffect)((function(){S&&m.Z.invoke("GET","/api/v1/buckets/".concat(i,"/retention")).then((function(e){k(!1),R(e.mode),O(e.validity),D(e.unit)})).catch((function(e){k(!1)}))}),[S,i]),(0,b.jsx)(f.Z,{title:"Set Retention Configuration",modalOpen:n,onClose:function(){c()},children:S?(0,b.jsx)(x.Z,{style:{width:16,height:16}}):(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(C(!0),m.Z.invoke("PUT","/api/v1/buckets/".concat(i,"/retention"),{mode:M,unit:_,validity:T}).then((function(){C(!1),c()})).catch((function(e){C(!1),r((0,h.zb)(e))})))},children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalFormScrollable,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:M,id:"retention_mode",name:"retention_mode",label:"Retention Mode",onChange:function(e){R(e.target.value)},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:_,id:"retention_unit",name:"retention_unit",label:"Retention Unit",onChange:function(e){D(e.target.value)},selectorOptions:[{value:"days",label:"Days"},{value:"years",label:"Years"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(p.Z,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){O(e.target.valueAsNumber)},label:"Retention Validity",value:String(T),required:!0,min:"1"})})]}),(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(s.zx,{id:"cancel",type:"button",variant:"regular",disabled:g,onClick:function(){c()},label:"Cancel"}),(0,b.jsx)(s.zx,{id:"set",type:"submit",variant:"callAction",color:"primary",disabled:g||!L,label:"Set"})]}),g&&(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{})})]})})})}))},56028:function(e,t,n){var a=n(29439),i=n(1413),o=n(72791),s=n(92177),l=n(13811),c=n(11647),r=n(58195),u=n(40464),d=n(8440),m=n(11135),f=n(25787),Z=n(23814),p=n(25469),x=n(29823),h=n(28057),v=n(87995),b=n(80184);t.Z=(0,f.Z)((function(e){return(0,m.Z)((0,i.Z)((0,i.Z)({},Z.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},Z.sN))}))((function(e){var t=e.onClose,n=e.modalOpen,m=e.title,f=e.children,Z=e.classes,j=e.wideLimit,g=void 0===j||j,C=e.noContentPadding,N=e.titleIcon,y=void 0===N?null:N,S=(0,p.TL)(),k=(0,o.useState)(!1),P=(0,a.Z)(k,2),w=P[0],M=P[1],R=(0,s.v9)((function(e){return e.system.modalSnackBar}));(0,o.useEffect)((function(){S((0,v.MK)(""))}),[S]),(0,o.useEffect)((function(){if(R){if(""===R.message)return void M(!1);"error"!==R.type&&M(!0)}}),[R]);var B=g?{classes:{paper:Z.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return R&&(E=R.detailedErrorMsg,(""===R.detailedErrorMsg||R.detailedErrorMsg.length<5)&&(E=R.message)),(0,b.jsxs)(r.Z,(0,i.Z)((0,i.Z)({open:n,classes:Z},B),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:Z.root,children:[(0,b.jsxs)(u.Z,{className:Z.title,children:[(0,b.jsxs)("div",{className:Z.titleText,children:[y," ",m]}),(0,b.jsx)("div",{className:Z.closeContainer,children:(0,b.jsx)(l.Z,{"aria-label":"close",id:"close",className:Z.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,b.jsx)(x.Z,{})})})]}),(0,b.jsx)(h.Z,{isModal:!0}),(0,b.jsx)(c.Z,{open:w,className:Z.snackBarModal,onClose:function(){M(!1),S((0,v.MK)(""))},message:E,ContentProps:{className:"".concat(Z.snackBar," ").concat(R&&"error"===R.type?Z.errorSnackBar:"")},autoHideDuration:R&&"error"===R.type?1e4:5e3}),(0,b.jsx)(d.Z,{className:C?"":Z.content,children:f})]}))}))}}]);
//# sourceMappingURL=1604.a0606b04.chunk.js.map