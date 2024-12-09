(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[1370],{41206:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(65043),o=r(89923),i=r(61476),s=r.n(i),a=r(6681),l=r(70579);const c=e=>{let{value:t,label:r="",tooltip:i="",mode:c="json",onChange:d,editorHeight:p=250,helptip:u}=e;return(0,l.jsx)(o.BYM,{value:t,onChange:e=>d(e),mode:c,tooltip:i,editorHeight:p,label:r,helpTools:(0,l.jsx)(n.Fragment,{children:(0,l.jsx)(a.A,{tooltip:"Copy to Clipboard",children:(0,l.jsx)(s(),{text:t,children:(0,l.jsx)(o.$nd,{type:"button",id:"copy-code-mirror",icon:(0,l.jsx)(o.TdU,{}),color:"primary",variant:"regular"})})})}),helpTip:u,helpTipPlacement:"right"})}},71435:(e,t,r)=>{"use strict";r.d(t,{CS:()=>s,Ez:()=>n,WJ:()=>o,Zb:()=>i});const n={RED:"#C83B51",GREEN:"#4CCB92",YELLOW:"#FFBD62"},o=(e,t)=>e<=t/2?"bad":2!==t&&e===t/2+1?"warn":e===t?"good":void 0,i=e=>{switch(e){case"offline":return"bad";case"online":return"good";default:return"warn"}},s=(e,t)=>e<=t/2?"bad":e===t/2+1?"warn":e===t?"good":void 0},81370:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(65043),o=r(22166),i=r(73216),s=r(89923),a=r(77403),l=r(41206),c=r(99161),d=r(77938),p=r(72237),u=r(64681),x=r(71435),h=r(70579);const f={display:"grid",gridTemplateColumns:"70px 1fr",gap:15},m=e=>{let{search:t="",children:r=""}=e;const n=new RegExp(`(${function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}(t)})`,"i"),o=String(r).split(n);return t?o.map(((e,t)=>n.test(e)?(0,h.jsx)("mark",{children:e},t):e)):r},y=e=>{let{policyStatements:t}=e;const[r,o]=(0,n.useState)("");return(0,h.jsxs)(s.xA9,{container:!0,children:[(0,h.jsx)(s.xA9,{item:!0,xs:12,children:(0,h.jsxs)(s.xA9,{container:!0,sx:{display:"flex",alignItems:"center"},children:[(0,h.jsx)(s.V7x,{content:(0,h.jsxs)(n.Fragment,{children:["Define which actions are permitted on a specified resource. Learn more about"," ",(0,h.jsx)("a",{target:"blank",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html",children:"IAM conditional statements"}),"."]}),placement:"right",children:(0,h.jsx)(s.xA9,{item:!0,xs:12,sm:6,sx:{fontWeight:"bold"},children:"Statements"})}),(0,h.jsx)(s.xA9,{item:!0,xs:12,sm:6,sx:{display:"flex",justifyContent:"flex-end"},children:(0,h.jsx)(u.A,{placeholder:"Search",onChange:o,value:r,sx:{maxWidth:380}})})]})}),!t&&(0,h.jsx)(n.Fragment,{children:"Policy has no statements"}),t&&(0,h.jsx)(s.xA9,{item:!0,xs:12,sx:{"& .policy-row":{borderBottom:"1px solid #eaeaea"},"& .policy-row:first-child":{borderTop:"1px solid #eaeaea"},"& .policy-row:last-child":{borderBottom:"0px"},paddingTop:"15px","& mark":{color:"#000000",fontWeight:500}},children:t.map(((e,t)=>{const n=e.Effect,o="Allow"===n;return(0,h.jsxs)(s.azJ,{className:"policy-row",sx:{display:"grid",gridTemplateColumns:"1fr",gap:"15px",fontSize:"14px",padding:"10px 0 10px 0","& .label":{fontWeight:600}},children:[(0,h.jsxs)(s.azJ,{sx:f,children:[(0,h.jsx)(s.azJ,{className:"label",children:"Effect:"}),(0,h.jsxs)(s.azJ,{sx:{display:"flex",alignItems:"center","& .min-icon":{marginRight:"5px",fill:o?x.Ez.GREEN:x.Ez.RED,height:"14px",width:"14px"}},children:[o?(0,h.jsx)(s.xhy,{}):(0,h.jsx)(s.aaC,{}),n]})]}),(0,h.jsxs)(s.xA9,{container:!0,sx:{gap:15},children:[(0,h.jsxs)(s.xA9,{item:!0,xs:12,sm:6,sx:f,children:[(0,h.jsx)(s.azJ,{className:"label",children:"Actions:"}),(0,h.jsx)(s.azJ,{children:e.Action&&e.Action.map(((e,n)=>(0,h.jsx)("div",{children:(0,h.jsx)(m,{search:r,children:e})},`${t}-r-${n}`)))})]}),(0,h.jsxs)(s.xA9,{item:!0,xs:12,sm:6,sx:f,children:[(0,h.jsx)(s.azJ,{className:"label",children:"Resources:"}),(0,h.jsx)(s.azJ,{children:e.Resource&&e.Resource.map(((e,n)=>(0,h.jsxs)("div",{children:[" ",(0,h.jsx)(m,{search:r,children:e})]},`${t}-r-${n}`)))})]})]})]},`${t}`)}))})]})};var b=r(64159),g=r(46537),j=r(21383),v=r(6681),C=r(48793),w=r(56629),A=r(88617);const P=(0,p.A)(n.lazy((()=>r.e(4676).then(r.bind(r,4676))))),O=()=>{const e=(0,j.jL)(),t=(0,i.Zp)(),r=(0,i.g)(),p=(0,o.d4)(g.s$),[x,f]=(0,n.useState)(null),[m,O]=(0,n.useState)([]),[S,_]=(0,n.useState)([]),[E,R]=(0,n.useState)([]),[k,D]=(0,n.useState)(!1),M=r.policyName||"",[T,F]=(0,n.useState)(""),[z,I]=(0,n.useState)(!0),[N,$]=(0,n.useState)(""),[U,B]=(0,n.useState)(!0),[J,L]=(0,n.useState)(""),[G,H]=(0,n.useState)(!0),[W,Z]=(0,n.useState)(!1),[V,Y]=(0,n.useState)("summary"),K=p&&p.includes("ldap-idp")||!1,Q=(0,d._)(c.Ms,c.qA,!0),X=(0,d._)(c.Ms,c.Oh,!0),q=(0,d._)(c.Ms,c.x6,!0),ee=(0,d._)(c.Ms,c.Ld,!0),te=(0,d._)(c.Ms,c.yv,!0),re=(0,d._)(c.Ms,c.uA,!0),ne=(0,d._)(c.Ms,c.nr,!0);(0,n.useEffect)((()=>{z&&(z&&(te?w.F.policy.policyInfo(M).then((e=>{if(e.data){var t,r;f(e.data),F(e?JSON.stringify(JSON.parse(null===(t=e.data)||void 0===t?void 0:t.policy),null,4):"");const n=JSON.parse(null===(r=e.data)||void 0===r?void 0:r.policy);O(n.Statement)}I(!1)})).catch((t=>{e((0,b.C9)(t)),I(!1)})):I(!1)),U&&(q&&!K?w.F.policies.listUsersForPolicy(M).then((e=>{var t;_(null!==(t=e.data)&&void 0!==t?t:[]),B(!1)})).catch((t=>{e((0,b.C9)(t)),B(!1)})):B(!1)),G&&(Q&&!K?w.F.policies.listGroupsForPolicy(M).then((e=>{var t;R(null!==(t=e.data)&&void 0!==t?t:[]),H(!1)})).catch((t=>{e((0,b.C9)(t)),H(!1)})):H(!1)))}),[M,z,U,G,_,R,F,f,B,H,q,Q,te,K,e]);const oe=""!==M.trim(),ie=[{type:"view",onClick:e=>{t(`${c.zZ.USERS}/${encodeURIComponent(e)}`)},disableButtonFunction:()=>!ee}],se=S.filter((e=>e.includes(N))),ae=[{type:"view",onClick:e=>{t(`${c.zZ.GROUPS}/${encodeURIComponent(e)}`)},disableButtonFunction:()=>!X}],le=E.filter((e=>e.includes(J))),ce=()=>{B(!0),H(!0),I(!0)};return(0,n.useEffect)((()=>{e((0,b.ph)("policy_details_summary"))}),[]),(0,h.jsxs)(n.Fragment,{children:[W&&(0,h.jsx)(P,{deleteOpen:W,selectedPolicy:M,closeDeleteModalAndRefresh:e=>{Z(!1),t(c.zZ.POLICIES)}}),(0,h.jsx)(C.A,{label:(0,h.jsx)(n.Fragment,{children:(0,h.jsx)(s.EGL,{label:"Policy",onClick:()=>t(c.zZ.POLICIES)})}),actions:(0,h.jsx)(A.A,{})}),(0,h.jsxs)(s.Mxu,{children:[(0,h.jsx)(s.lcx,{icon:(0,h.jsx)(s.n$X,{width:40}),title:M,subTitle:(0,h.jsx)(n.Fragment,{children:"IAM Policy"}),actions:(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(d.R,{scopes:[c.OV.ADMIN_DELETE_POLICY],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(v.A,{tooltip:re?"":(0,c.vj)(c.uA,"delete Policies"),children:(0,h.jsx)(s.$nd,{id:"delete-policy",label:"Delete Policy",variant:"secondary",icon:(0,h.jsx)(s.ucK,{}),onClick:()=>{Z(!0)},disabled:!re})})}),(0,h.jsx)(v.A,{tooltip:"Refresh",children:(0,h.jsx)(s.$nd,{id:"refresh-policy",label:"Refresh",variant:"regular",icon:(0,h.jsx)(s.fNY,{}),onClick:()=>{ce()}})})]}),sx:{marginBottom:15}}),(0,h.jsx)(s.azJ,{children:(0,h.jsx)(s.tUM,{options:[{tabConfig:{label:"Summary",disabled:!te,id:"summary"},content:(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)(s.xA9,{onMouseMove:()=>e((0,b.ph)("policy_details_summary")),children:[(0,h.jsx)(s._xt,{separator:!0,sx:{marginBottom:15},children:"Policy Summary"}),(0,h.jsx)(s.azJ,{withBorders:!0,children:(0,h.jsx)(y,{policyStatements:m})})]})})},{tabConfig:{label:"Users",disabled:!q||K,id:"users"},content:(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)(s.xA9,{onMouseMove:()=>e((0,b.ph)("policy_details_users")),children:[(0,h.jsx)(s._xt,{separator:!0,sx:{marginBottom:15},children:"Users"}),(0,h.jsxs)(s.xA9,{container:!0,children:[S.length>0&&(0,h.jsx)(s.xA9,{item:!0,xs:12,sx:{...a._0.actionsTray,marginBottom:15},children:(0,h.jsx)(u.A,{value:N,placeholder:"Search Users",id:"search-resource",onChange:e=>{$(e)}})}),(0,h.jsx)(s.bQt,{itemActions:ie,columns:[{label:"Name",elementKey:"name"}],isLoading:U,records:se,entityName:"Users with this Policy associated",idField:"name",customPaperHeight:"500px"})]})]})})},{tabConfig:{label:"Groups",disabled:!Q||K,id:"groups"},content:(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)(s.xA9,{onMouseMove:()=>e((0,b.ph)("policy_details_groups")),children:[(0,h.jsx)(s._xt,{separator:!0,sx:{marginBottom:15},children:"Groups"}),(0,h.jsxs)(s.xA9,{container:!0,children:[E.length>0&&(0,h.jsx)(s.xA9,{item:!0,xs:12,sx:{...a._0.actionsTray,marginBottom:15},children:(0,h.jsx)(u.A,{value:N,placeholder:"Search Groups",id:"search-resource",onChange:e=>{L(e)}})}),(0,h.jsx)(s.bQt,{itemActions:ae,columns:[{label:"Name",elementKey:"name"}],isLoading:G,records:le,entityName:"Groups with this Policy associated",idField:"name",customPaperHeight:"500px"})]})]})})},{tabConfig:{label:"Raw Policy",disabled:!te,id:"raw-policy"},content:(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)(s.xA9,{onMouseMove:()=>e((0,b.ph)("policy_details_policy")),children:[(0,h.jsx)(s.V7x,{content:(0,h.jsx)(n.Fragment,{children:(0,h.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})}),placement:"right",children:(0,h.jsx)(s._xt,{children:"Raw Policy"})}),(0,h.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:t=>{t.preventDefault(),k||(D(!0),ne?w.F.policies.addPolicy({name:M,policy:T}).then((t=>{D(!1),e((0,b.Hk)("Policy successfully updated")),ce()})).catch((t=>{D(!1),e((0,b.C9)({errorMessage:"There was an error updating the Policy ",detailedError:"There was an error updating the Policy: "+(t.error.detailedMessage||"")+". Please check Policy syntax."}))})):D(!1))},children:(0,h.jsxs)(s.xA9,{container:!0,children:[(0,h.jsx)(s.xA9,{item:!0,xs:12,children:(0,h.jsx)(l.A,{value:T,onChange:e=>{ne&&F(e)},editorHeight:"350px",helptip:(0,h.jsx)(n.Fragment,{children:(0,h.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})})})}),(0,h.jsxs)(s.xA9,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",paddingTop:16,gap:8},children:[!x&&(0,h.jsx)(s.$nd,{type:"button",variant:"regular",id:"clear-policy",onClick:()=>{F("{}")},children:"Clear"}),(0,h.jsx)(d.R,{scopes:[c.OV.ADMIN_CREATE_POLICY],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(v.A,{tooltip:ne?"":(0,c.vj)(c.nr,"edit a Policy"),children:(0,h.jsx)(s.$nd,{id:"save",type:"submit",variant:"callAction",color:"primary",disabled:k||!oe||!ne,label:"Save"})})})]}),k&&(0,h.jsx)(s.xA9,{item:!0,xs:12,children:(0,h.jsx)(s.z21,{})})]})})]})})}],currentTabOrPath:V,onTabClick:e=>Y(e)})})]})]})}},75270:(e,t,r)=>{"use strict";var n=r(40139),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,s,a,l,c,d=!1;t||(t={}),r=t.debug||!1;try{if(s=n(),a=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),a.selectNodeContents(c),l.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(a):l.removeAllRanges()),c&&document.body.removeChild(c),s()}return d}},24480:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(r(65043)),i=a(r(75270)),s=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f(e);if(t){var i=f(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(l,e);var t,r,n,a=x(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(h(e=a.call.apply(a,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,s=r.onCopy,a=r.children,l=r.options,c=o.default.Children.only(a),d=(0,i.default)(n,l);s&&s(n,d),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=d(e,s),n=o.default.Children.only(t);return o.default.cloneElement(n,c(c({},r),{},{onClick:this.onClick}))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.PureComponent);t.CopyToClipboard=y,m(y,"defaultProps",{onCopy:void 0,options:void 0})},61476:(e,t,r)=>{"use strict";var n=r(24480).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=1370.7d88b85a.chunk.js.map