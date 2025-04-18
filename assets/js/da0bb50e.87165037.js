/*! For license information please see da0bb50e.87165037.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2366],{4722:(e,n,r)=>{r.d(n,{A:()=>a});var s=r(6540);const t=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,n,r)=>r?r.toUpperCase():n.toLowerCase())))(e);return n.charAt(0).toUpperCase()+n.slice(1)},o=(...e)=>e.filter(((e,n,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===n)).join(" ").trim(),l=e=>{for(const n in e)if(n.startsWith("aria-")||"role"===n||"title"===n)return!0};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c=(0,s.forwardRef)((({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,className:c="",children:a,iconNode:d,...h},u)=>(0,s.createElement)("svg",{ref:u,...i,width:n,height:n,stroke:e,strokeWidth:t?24*Number(r)/Number(n):r,className:o("lucide",c),...!a&&!l(h)&&{"aria-hidden":"true"},...h},[...d.map((([e,n])=>(0,s.createElement)(e,n))),...Array.isArray(a)?a:[a]]))),a=(e,n)=>{const r=(0,s.forwardRef)((({className:r,...l},i)=>{return(0,s.createElement)(c,{ref:i,iconNode:n,className:o(`lucide-${a=t(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),...l});var a}));return r.displayName=t(e),r}},6701:(e,n,r)=>{r.d(n,{A:()=>x});var s=r(6540),t=r(4164),o=r(5246),l=r(9136),i=r(3535);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=r(4848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:r,...u}=e;(0,o.A)().collectAnchor(u.id);const p=(0,l.A)(),m=(0,s.useRef)(null),{collapsed:x,setCollapsed:j}=(0,i.u)({initialState:!u.open}),[f,g]=(0,s.useState)(u.open),y=s.isValidElement(n)?n:(0,a.jsx)("summary",{children:n??"Details"});return(0,a.jsxs)("details",{...u,ref:m,open:f,"data-collapsed":x,className:(0,t.A)(c.details,p&&c.isBrowser,u.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;d(n)&&h(n,m.current)&&(e.preventDefault(),x?(j(!1),g(!0)):j(!0))},children:[y,(0,a.jsx)(i.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),g(!e)},children:(0,a.jsx)("div",{className:c.collapsibleContent,children:r})})]})}const p={details:"details_b_Ee"},m="alert alert--info";function x(e){let{...n}=e;return(0,a.jsx)(u,{...n,className:(0,t.A)(m,p.details,n.className)})}},8019:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"documentation/connect-on-cloudflare","title":"Cloudflare Workers","description":"<History","source":"@site/docs/documentation/connect-on-cloudflare.mdx","sourceDirName":"documentation","slug":"/documentation/connect-on-cloudflare","permalink":"/node-mysql2/docs/documentation/connect-on-cloudflare","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/connect-on-cloudflare.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Authentication Switch Request","permalink":"/node-mysql2/docs/documentation/authentication-switch"},"next":{"title":"Extra Features","permalink":"/node-mysql2/docs/documentation/extras"}}');var t=r(4848),o=r(8453),l=r(9964);const i={},c="Cloudflare Workers",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Wrangler",id:"wrangler",level:3},{value:"MySQL2 connection",id:"mysql2-connection",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cloudflare-workers",children:"Cloudflare Workers"})}),"\n",(0,t.jsx)(l.B,{records:[{version:"3.13.0",changes:[(0,t.jsxs)(t.Fragment,{children:["Support for ",(0,t.jsx)(n.em,{children:"non-eval"})," parsers by using"," ",(0,t.jsx)(n.strong,{children:"disableEval"})," option."]})]}]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://dash.cloudflare.com/sign-up",children:"Cloudflare"})," account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developers.cloudflare.com/workers/wrangler/",children:"Wrangler"})," installed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MySQL2"})," version ",(0,t.jsx)(n.code,{children:"3.13.0"})," or higher."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To learn how to create a ",(0,t.jsx)(n.strong,{children:"Cloudflare Worker"})," project, please refer to ",(0,t.jsx)(n.a,{href:"https://developers.cloudflare.com/workers/get-started/guide/",children:(0,t.jsx)(n.strong,{children:"Cloudflare Workers Documentation"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"wrangler",children:"Wrangler"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MySQL2"})," relies on ",(0,t.jsx)(n.strong,{children:"Node.js"})," modules, such as ",(0,t.jsx)(n.code,{children:"net"}),", ",(0,t.jsx)(n.code,{children:"events"}),", ",(0,t.jsx)(n.code,{children:"stream"}),", ",(0,t.jsx)(n.code,{children:"tls"}),", etc. You can enable ",(0,t.jsx)(n.strong,{children:"Node.js"})," compatibility for ",(0,t.jsx)(n.strong,{children:"Cloudflare Workers"})," by using the ",(0,t.jsx)(n.code,{children:'"nodejs_compat"'})," flag through the ",(0,t.jsx)(n.code,{children:"wrangler.jsonc"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compatibility_flags": ["nodejs_compat"]\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["The minimum compatibility date is ",(0,t.jsx)(n.code,{children:"2025-02-24"}),", for example:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compatibility_date": "2025-02-24",\n  "compatibility_flags": ["nodejs_compat"]\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"mysql2-connection",children:"MySQL2 connection"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MySQL2"})," uses a code generation-based parser for performance by default, but since ",(0,t.jsx)(n.strong,{children:"Cloudflare Workers"})," don't offer support for evaluations, you can disable it by using the ",(0,t.jsx)(n.code,{children:"disableEval"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createConnection } from 'mysql2/promise';\n\nexport default {\n  async fetch(): Promise<Response> {\n    const conn = await createConnection({\n      host: 'localhost',\n      user: 'root',\n      database: 'test',\n      // highlight-start\n      disableEval: true,\n      // highlight-end\n    });\n\n    const [results] = await conn.query('SHOW TABLES;');\n\n    return new Response(JSON.stringify(results));\n  },\n} satisfies ExportedHandler<Env>;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For required ",(0,t.jsx)(n.strong,{children:"SSL"})," connections, it is recommended to use the ",(0,t.jsx)(n.a,{href:"https://developers.cloudflare.com/hyperdrive/",children:(0,t.jsx)(n.strong,{children:"Cloudflare Hyperdrive"})})," connection pool."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}},9964:(e,n,r)=>{r.d(n,{B:()=>l});var s=r(6701);const t=(0,r(4722).A)("file-clock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);var o=r(4848);const l=e=>{let{records:n,open:r}=e;return(0,o.jsx)(s.A,{open:r,summary:(0,o.jsxs)("summary",{children:[(0,o.jsx)(t,{})," History"]}),className:"history",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Version"}),(0,o.jsx)("th",{children:"Changes"})]})}),(0,o.jsx)("tbody",{children:n.map(((e,n)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsxs)("strong",{children:["v",e.version.replace(/[^0-9.]/g,"")]})}),(0,o.jsx)("td",{children:(0,o.jsx)("div",{className:"changes",children:e.changes.map(((e,n)=>(0,o.jsx)("section",{children:e},`change:${n}`)))})})]},`record:${n}`)))})]})})}}}]);