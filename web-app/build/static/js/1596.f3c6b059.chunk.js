(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[1596],{41596:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var o=n(69060),l=n(47600),a=n(19536),s=n(66152),c=n(66156),r=n(61060),i=n(55707),u=n(18276),h=n(95705),d=n(50900),b=n(3428),f=n(48504),p=n(82496);const x=()=>{const e=(0,c.Ab)(),t=(0,a.w1)((e=>e.watch.messages)),[n,x]=(0,o.useState)(!1),[m,w]=(0,o.useState)("Select Bucket"),[g,y]=(0,o.useState)(""),[j,k]=(0,o.useState)(""),[v,S]=(0,o.useState)([]);(0,o.useEffect)((()=>{d.c.invoke("GET","/api/v1/buckets").then((e=>{let t=[];null!==e.buckets&&(t=e.buckets),S(t)})).catch((e=>{console.error(e)}))}),[]),(0,o.useEffect)((()=>{if(e((0,u.AF)()),n&&v.some((e=>e.name===m))){const t=new URL(window.location.toString()),n=!1?"9090":t.port,o=new URL(document.baseURI).pathname,a=(0,i.K_)(t.protocol),s=new l.w3cwebsocket("".concat(a,"://").concat(t.hostname,":").concat(n).concat(o,"ws/watch/").concat(m,"?prefix=").concat(g,"&suffix=").concat(j));let c=null;if(null!==s)return s.onopen=()=>{console.log("WebSocket Client Connected"),s.send("ok"),c=setInterval((()=>{s.send("ok")}),1e4)},s.onmessage=t=>{let n=JSON.parse(t.data.toString());n.Time=new Date(n.Time.toString()),n.key=Math.random(),e((0,u.oZ)(n))},s.onclose=()=>{clearInterval(c),console.log("connection closed by server"),x(!1)},()=>{s.close(1e3),clearInterval(c),console.log("closing websockets")}}else x(!1)}),[e,n,v,m,g,j]);const _=v.map((e=>({label:e.name,value:e.name})));(0,o.useEffect)((()=>{e((0,h.i8)("watch"))}),[]);const C=_.map((e=>({label:e.label,value:e.value})));return(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(b.c,{label:"Watch",actions:(0,p.jsx)(f.c,{})}),(0,p.jsx)(s._al,{children:(0,p.jsxs)(s.yeN,{container:!0,children:[(0,p.jsxs)(s.yeN,{item:!0,xs:12,sx:{display:"flex",gap:10,marginBottom:15,alignItems:"center"},children:[(0,p.jsxs)(s.kvh,{sx:{flexGrow:1},children:[(0,p.jsx)(s.mWW,{children:"Bucket"}),(0,p.jsx)(s.M1e,{id:"bucket-name",name:"bucket-name",value:m,onChange:e=>{w(e)},disabled:n,options:C,placeholder:"Select Bucket"})]}),(0,p.jsxs)(s.kvh,{sx:{flexGrow:1},children:[(0,p.jsx)(s.mWW,{children:"Prefix"}),(0,p.jsx)(s.q22,{id:"prefix-resource",disabled:n,onChange:e=>{y(e.target.value)}})]}),(0,p.jsxs)(s.kvh,{sx:{flexGrow:1},children:[(0,p.jsx)(s.mWW,{children:"Suffix"}),(0,p.jsx)(s.q22,{id:"suffix-resource",disabled:n,onChange:e=>{k(e.target.value)}})]}),(0,p.jsx)(s.kvh,{sx:{alignSelf:"flex-end",paddingBottom:4},children:n?(0,p.jsx)(s.qaq,{id:"stop-watch",type:"submit",variant:"callAction",onClick:()=>x(!1),label:"Stop"}):(0,p.jsx)(s.qaq,{id:"start-watch",type:"submit",variant:"callAction",onClick:()=>x(!0),label:"Start"})})]}),(0,p.jsx)(s.yeN,{item:!0,xs:12,children:(0,p.jsx)(s.iSL,{columns:[{label:"Time",elementKey:"Time",renderFunction:r.gD},{label:"Size",elementKey:"Size",renderFunction:r.U7},{label:"Type",elementKey:"Type"},{label:"Path",elementKey:"Path"}],records:t,entityName:"Watch",customEmptyMessage:"No Changes at this time",idField:"watch_table",isLoading:!1,customPaperHeight:"calc(100vh - 270px)"})})]})})]})}},7504:e=>{var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},47600:(e,t,n)=>{var o;if("object"===typeof globalThis)o=globalThis;else try{o=n(7504)}catch(c){}finally{if(o||"undefined"===typeof window||(o=window),!o)throw new Error("Could not determine global this")}var l=o.WebSocket||o.MozWebSocket,a=n(3068);function s(e,t){return t?new l(e,t):new l(e)}l&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(s,e,{get:function(){return l[e]}})})),e.exports={w3cwebsocket:l?s:null,version:a}},3068:(e,t,n)=>{e.exports=n(40648).version},40648:e=>{"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=1596.f3c6b059.chunk.js.map