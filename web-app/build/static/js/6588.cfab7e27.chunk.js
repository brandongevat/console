"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6588],{36588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(69060),n=a(66152),l=a(82496);const r=e=>{let{onChange:t}=e;const[a,r]=(0,s.useState)(!1),[o,u]=(0,s.useState)(""),[c,i]=(0,s.useState)(""),[d,m]=(0,s.useState)(""),[g,h]=(0,s.useState)(""),[p,v]=(0,s.useState)(""),[b,x]=(0,s.useState)(""),[k,j]=(0,s.useState)(""),[f,S]=(0,s.useState)("namespace"),[C,w]=(0,s.useState)(""),[q,E]=(0,s.useState)(""),[y,_]=(0,s.useState)(""),B=(0,s.useCallback)((()=>"".concat(p,":").concat(b,"@tcp(").concat(c,":").concat(g,")/").concat(d)),[p,b,c,g,d]);(0,s.useEffect)((()=>{if(""!==o){t([{key:"dsn_string",value:o},{key:"table",value:k},{key:"format",value:f},{key:"queue_dir",value:C},{key:"queue_limit",value:q},{key:"comment",value:y}])}}),[o,k,f,C,q,y,t]),(0,s.useEffect)((()=>{const e=B();u(e)}),[p,d,b,g,c,u,B]);return(0,l.jsxs)(n.yE_,{withBorders:!1,containerPadding:!1,children:[(0,l.jsx)(n.Wkk,{label:"Enter DNS String",checked:a,id:"checkedB",name:"checkedB",onChange:e=>{if(e.target.checked){const e=B();u(e)}else{const e=((e,t)=>{let a=new Map;const s=/(.*?):(.*?)@tcp\((.*?):(.*?)\)\/(.*?)$/gm;let n;for(;null!==(n=s.exec(e));)n.index===s.lastIndex&&s.lastIndex++,a.set("user",n[1]),a.set("password",n[2]),a.set("host",n[3]),a.set("port",n[4]),a.set("dbname",n[5]);return a})(o);i(e.get("host")?e.get("host")+"":""),h(e.get("port")?e.get("port")+"":""),m(e.get("dbname")?e.get("dbname")+"":""),v(e.get("user")?e.get("user")+"":""),x(e.get("password")?e.get("password")+"":"")}r(e.target.checked)},value:"dnsString"}),a?(0,l.jsx)(s.Fragment,{children:(0,l.jsx)(n.kvh,{className:"inputItem",children:(0,l.jsx)(n.q22,{id:"dsn-string",name:"dsn_string",label:"DSN String",value:o,onChange:e=>{u(e.target.value)}})})}):(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(n.kvh,{children:(0,l.jsxs)(n.kvh,{withBorders:!0,useBackground:!0,sx:{overflowY:"auto",height:170,marginBottom:12},children:[(0,l.jsx)(n.q22,{id:"host",name:"host",label:"",placeholder:"Enter Host",value:c,onChange:e=>{i(e.target.value)}}),(0,l.jsx)(n.q22,{id:"db-name",name:"db-name",label:"",placeholder:"Enter DB Name",value:d,onChange:e=>{m(e.target.value)}}),(0,l.jsx)(n.q22,{id:"port",name:"port",label:"",placeholder:"Enter Port",value:g,onChange:e=>{h(e.target.value)}}),(0,l.jsx)(n.q22,{id:"user",name:"user",label:"",placeholder:"Enter User",value:p,onChange:e=>{v(e.target.value)}}),(0,l.jsx)(n.q22,{id:"password",name:"password",label:"",placeholder:"Enter Password",type:"password",value:b,onChange:e=>{x(e.target.value)}})]})}),(0,l.jsx)(n.yeN,{item:!0,xs:12,sx:{margin:"12px 0"},children:(0,l.jsx)(n.E$k,{label:"Connection String",multiLine:!0,children:o})})]}),(0,l.jsx)(n.q22,{id:"table",name:"table",label:"Table",placeholder:"Enter Table Name",value:k,tooltip:"DB table name to store/update events, table is auto-created",onChange:e=>{j(e.target.value)}}),(0,l.jsx)(n.ew2,{currentValue:f,id:"format",name:"format",label:"Format",onChange:e=>{S(e.target.value)},tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",selectorOptions:[{label:"Namespace",value:"namespace"},{label:"Access",value:"access"}]}),(0,l.jsx)(n.q22,{id:"queue-dir",name:"queue_dir",label:"Queue Dir",placeholder:"Enter Queue Dir",value:C,tooltip:"Staging directory for undelivered messages e.g. '/home/events'",onChange:e=>{w(e.target.value)}}),(0,l.jsx)(n.q22,{id:"queue-limit",name:"queue_limit",label:"Queue Limit",placeholder:"Enter Queue Limit",type:"number",value:q,tooltip:"Maximum limit for undelivered messages, defaults to '10000'",onChange:e=>{E(e.target.value)}}),(0,l.jsx)(n.W_2,{id:"comment",name:"comment",label:"Comment",placeholder:"Enter custom notes if any",value:y,onChange:e=>{_(e.target.value)}})]})}}}]);
//# sourceMappingURL=6588.cfab7e27.chunk.js.map