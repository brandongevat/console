(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3119],{47902:function(e,t,o){"use strict";o.r(t);var n=o(29439),r=o(1413),a=o(72791),c=o(26181),i=o.n(c),l=o(78687),s=o(11135),u=o(25787),d=o(61889),v=o(27391),m=o(63466),p=o(25469),h=o(23814),f=o(45248),Z=o(87995),x=o(81207),b=o(92983),j=o(75952),k=o(32291),z=o(74794),y=o(80184);t.default=(0,u.Z)((function(e){return(0,s.Z)((0,r.Z)((0,r.Z)((0,r.Z)({tableWrapper:{height:"calc(100vh - 267px)"}},h.OR),h.qg),(0,h.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,o=(0,p.TL)(),r=(0,l.v9)((function(e){return e.directPV.selectedDrive})),c=(0,a.useState)([]),s=(0,n.Z)(c,2),u=s[0],h=s[1],C=(0,a.useState)(""),g=(0,n.Z)(C,2),S=g[0],V=g[1],P=(0,a.useState)(!0),w=(0,n.Z)(P,2),H=w[0],M=w[1];(0,a.useEffect)((function(){H&&x.Z.invoke("GET","/api/v1/directpv/volumes?drives=".concat(r)).then((function(e){var t=i()(e,"volumes",[]);t||(t=[]),t.sort((function(e,t){return e.volume>t.volume?1:e.volume<t.volume?-1:0})),h(t),M(!1)})).catch((function(e){M(!1),o((0,Z.Ih)(e))}))}),[H,r,o]);var I=u.filter((function(e){return e.drive.includes(S)}));return(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(k.Z,{label:"Volumes"}),(0,y.jsxs)(z.Z,{children:[(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.actionsTray,children:(0,y.jsx)(v.Z,{placeholder:"Search Volumes",className:t.searchField,id:"search-resource",label:"",InputProps:{disableUnderline:!0,startAdornment:(0,y.jsx)(m.Z,{position:"start",children:(0,y.jsx)(j.W1M,{})})},onChange:function(e){V(e.target.value)},variant:"standard"})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsx)("br",{})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsx)(b.Z,{itemActions:[],columns:[{label:"Volume",elementKey:"volume"},{label:"Capacity",elementKey:"capacity",renderFunction:f.ae},{label:"Node",elementKey:"node"},{label:"Drive",elementKey:"drive"}],isLoading:H,records:I,entityName:"Volumes",idField:"volume",customPaperHeight:t.tableWrapper})})]})]})}))},26759:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var r=n(o(45649)),a=o(80184),c=(0,r.default)((0,a.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=c},70366:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var r=n(o(45649)),a=o(80184),c=(0,r.default)((0,a.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=c},97911:function(e,t,o){"use strict";var n=o(64836);t.Z=void 0;var r=n(o(45649)),a=o(80184),c=(0,r.default)((0,a.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=c},94454:function(e,t,o){"use strict";o.d(t,{Z:function(){return P}});var n=o(4942),r=o(63366),a=o(87462),c=o(72791),i=o(28182),l=o(94419),s=o(12065),u=o(97278),d=o(76189),v=o(80184),m=(0,d.Z)((0,v.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,v.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,v.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=o(14036),Z=o(31402),x=o(66934),b=o(75878),j=o(21217);function k(e){return(0,j.Z)("MuiCheckbox",e)}var z=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,x.ZP)(u.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t["color".concat((0,f.Z)(o.color))]]}})((function(e){var t,o=e.theme,r=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===r.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===r.color?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,n.Z)(t,"&.".concat(z.checked,", &.").concat(z.indeterminate),{color:(o.vars||o).palette[r.color].main}),(0,n.Z)(t,"&.".concat(z.disabled),{color:(o.vars||o).palette.action.disabled}),t))})),g=(0,v.jsx)(p,{}),S=(0,v.jsx)(m,{}),V=(0,v.jsx)(h,{}),P=c.forwardRef((function(e,t){var o,n,s=(0,Z.Z)({props:e,name:"MuiCheckbox"}),u=s.checkedIcon,d=void 0===u?g:u,m=s.color,p=void 0===m?"primary":m,h=s.icon,x=void 0===h?S:h,b=s.indeterminate,j=void 0!==b&&b,z=s.indeterminateIcon,P=void 0===z?V:z,w=s.inputProps,H=s.size,M=void 0===H?"medium":H,I=s.className,F=(0,r.Z)(s,y),N=j?P:x,B=j?P:d,D=(0,a.Z)({},s,{color:p,indeterminate:j,size:M}),O=function(e){var t=e.classes,o=e.indeterminate,n=e.color,r={root:["root",o&&"indeterminate","color".concat((0,f.Z)(n))]},c=(0,l.Z)(r,k,t);return(0,a.Z)({},t,c)}(D);return(0,v.jsx)(C,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":j},w),icon:c.cloneElement(N,{fontSize:null!=(o=N.props.fontSize)?o:M}),checkedIcon:c.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:M}),ownerState:D,ref:t,className:(0,i.Z)(O.root,I)},F,{classes:O}))}))},26769:function(e,t,o){var n=o(39066),r=o(93629),a=o(43141);e.exports=function(e){return"string"==typeof e||!r(e)&&a(e)&&"[object String]"==n(e)}}}]);
//# sourceMappingURL=3119.e9b6547a.chunk.js.map