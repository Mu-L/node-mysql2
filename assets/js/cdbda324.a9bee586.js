/*! For license information please see cdbda324.a9bee586.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5118],{4722:(e,n,r)=>{r.d(n,{A:()=>a});var s=r(6540);const t=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,n,r)=>r?r.toUpperCase():n.toLowerCase())))(e);return n.charAt(0).toUpperCase()+n.slice(1)},o=(...e)=>e.filter(((e,n,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===n)).join(" ").trim(),l=e=>{for(const n in e)if(n.startsWith("aria-")||"role"===n||"title"===n)return!0};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,s.forwardRef)((({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,className:i="",children:a,iconNode:h,...d},u)=>(0,s.createElement)("svg",{ref:u,...c,width:n,height:n,stroke:e,strokeWidth:t?24*Number(r)/Number(n):r,className:o("lucide",i),...!a&&!l(d)&&{"aria-hidden":"true"},...d},[...h.map((([e,n])=>(0,s.createElement)(e,n))),...Array.isArray(a)?a:[a]]))),a=(e,n)=>{const r=(0,s.forwardRef)((({className:r,...l},c)=>{return(0,s.createElement)(i,{ref:c,iconNode:n,className:o(`lucide-${a=t(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),...l});var a}));return r.displayName=t(e),r}},5397:(e,n,r)=>{r.d(n,{T:()=>o});var s=r(6701),t=r(4848);const o=e=>{let{children:n,open:r,title:o}=e;return(0,t.jsx)(s.A,{open:r,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:o})}),children:(0,t.jsx)("section",{children:n})})}},6701:(e,n,r)=>{r.d(n,{A:()=>p});var s=r(6540),t=r(4164),o=r(5246),l=r(9136),c=r(3535);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=r(4848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function d(e,n){return!!e&&(e===n||d(e.parentElement,n))}function u(e){let{summary:n,children:r,...u}=e;(0,o.A)().collectAnchor(u.id);const g=(0,l.A)(),x=(0,s.useRef)(null),{collapsed:p,setCollapsed:j}=(0,c.u)({initialState:!u.open}),[m,y]=(0,s.useState)(u.open),f=s.isValidElement(n)?n:(0,a.jsx)("summary",{children:n??"Details"});return(0,a.jsxs)("details",{...u,ref:x,open:m,"data-collapsed":p,className:(0,t.A)(i.details,g&&i.isBrowser,u.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&d(n,x.current)&&(e.preventDefault(),p?(j(!1),y(!0)):j(!0))},children:[f,(0,a.jsx)(c.N,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),y(!e)},children:(0,a.jsx)("div",{className:i.collapsibleContent,children:r})})]})}const g={details:"details_b_Ee"},x="alert alert--info";function p(e){let{...n}=e;return(0,a.jsx)(u,{...n,className:(0,t.A)(x,g.details,n.className)})}},6933:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"faq/how-to-handle-errors","title":"How to handle errors?","description":"This section details error handling techniques in MySQL2. It covers essential error management strategies for methods such as createConnection, createPool, createPoolCluster, execute and query.","source":"@site/docs/faq/how-to-handle-errors.mdx","sourceDirName":"faq","slug":"/faq/how-to-handle-errors","permalink":"/node-mysql2/docs/faq/how-to-handle-errors","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/faq/how-to-handle-errors.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"faq","previous":{"title":"Introduction","permalink":"/node-mysql2/docs/faq"}}');var t=r(4848),o=r(8453),l=r(5397),c=r(7634);const i={},a="How to handle errors?",h={},d=[{value:"Using callbacks",id:"using-callbacks",level:2},{value:"Using promises",id:"using-promises",level:2},{value:"Related Links",id:"related-links",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"how-to-handle-errors",children:"How to handle errors?"})}),"\n",(0,t.jsxs)(n.p,{children:["This section details error handling techniques in MySQL2. It covers essential error management strategies for methods such as ",(0,t.jsx)(n.code,{children:"createConnection"}),", ",(0,t.jsx)(n.code,{children:"createPool"}),", ",(0,t.jsx)(n.code,{children:"createPoolCluster"}),", ",(0,t.jsx)(n.code,{children:"execute"})," and ",(0,t.jsx)(n.code,{children:"query"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"using-callbacks",children:"Using callbacks"}),"\n",(0,t.jsxs)(l.T,{title:"createConnection",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested and confirmed as the correct answer."}),(0,t.jsx)(n.p,{children:"Handling connection errors by adding an error event listener:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconnection = mysql.createConnection({\n  host: '',\n  user: '',\n  database: '',\n});\n\n// highlight-start\nconnection.addListener('error', (err) => {\n  if (err instanceof Error) {\n    console.log(`createConnection error:`, err);\n  }\n});\n// highlight-end\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"createPool",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling connection errors through callback's ",(0,t.jsx)(n.code,{children:"err"})," parameter:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  host: '',\n  user: '',\n  database: '',\n});\n\npool.getConnection((err, connection) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('pool.getConnection error:', err);\n    return;\n  }\n  // highlight-end\n});\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"createPoolCluster",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling connection errors through callback's ",(0,t.jsx)(n.code,{children:"err"})," parameter:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('NodeI', {\n  host: '',\n  user: '',\n  database: '',\n});\n\npoolCluster.getConnection('NodeI', (err, connection) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('poolCluster.getConnection error:', err);\n    return;\n  }\n  // highlight-end\n});\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"execute",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling ",(0,t.jsx)(n.code,{children:"execute"})," errors through callback's ",(0,t.jsx)(n.code,{children:"err"})," parameter:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"connection.execute('SELEC 1 + 1', (err, rows) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('execute error:', err);\n    return;\n  }\n  // highlight-end\n\n  console.log(rows);\n});\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It will work for both ",(0,t.jsx)(n.strong,{children:"createConnection"}),", ",(0,t.jsx)(n.strong,{children:"createPool"})," and ",(0,t.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,t.jsxs)(l.T,{title:"query",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling ",(0,t.jsx)(n.code,{children:"query"})," errors through callback's ",(0,t.jsx)(n.code,{children:"err"})," parameter:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"connection.query('SELEC 1 + 1', (err, rows) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('query error:', err);\n    return;\n  }\n  // highlight-end\n\n  console.log(rows);\n});\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It will work for both ",(0,t.jsx)(n.strong,{children:"createConnection"}),", ",(0,t.jsx)(n.strong,{children:"createPool"})," and ",(0,t.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"using-promises",children:"Using promises"}),"\n",(0,t.jsxs)(l.T,{title:"createConnection",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested and confirmed as the correct answer."}),(0,t.jsxs)(n.p,{children:["Handling connection errors through ",(0,t.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  const connection = await mysql.createConnection({\n    host: '',\n    user: '',\n    database: '',\n  });\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log(err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"createPool",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling connection errors through ",(0,t.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst pool = mysql.createPool({\n  host: '',\n  user: '',\n  database: '',\n});\n\ntry {\n  const connection = await pool.getConnection();\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log(err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"createPoolCluster",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling connection errors through ",(0,t.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('NodeI', {\n  host: '',\n  user: '',\n  database: '',\n});\n\ntry {\n  await poolCluster.getConnection('NodeI');\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('createConnection error:', err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,t.jsxs)(l.T,{title:"execute",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling ",(0,t.jsx)(n.code,{children:"execute"})," errors through ",(0,t.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const [rows] = await connection.execute('SELEC 1 + 1');\n  console.log(rows);\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('execute error:', err);\n  }\n}\n// highlight-end\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It will work for both ",(0,t.jsx)(n.strong,{children:"createConnection"}),", ",(0,t.jsx)(n.strong,{children:"createPool"})," and ",(0,t.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,t.jsxs)(l.T,{title:"query",children:[(0,t.jsx)(c.k,{level:2,message:"This solution has been tested."}),(0,t.jsxs)(n.p,{children:["Handling ",(0,t.jsx)(n.code,{children:"query"})," errors through ",(0,t.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const [rows] = await connection.query('SELEC 1 + 1');\n  console.log(rows);\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('query error:', err);\n  }\n}\n// highlight-end\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It will work for both ",(0,t.jsx)(n.strong,{children:"createConnection"}),", ",(0,t.jsx)(n.strong,{children:"createPool"})," and ",(0,t.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"related-links",children:"Related Links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Discussions","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions/1998",children:"#1998"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions/2282",children:"#2282"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7634:(e,n,r)=>{r.d(n,{k:()=>u});var s=r(6289),t=r(4722);const o=(0,t.A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),l=(0,t.A)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),c=(0,t.A)("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),i=(0,t.A)("package-search",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]),a=(0,t.A)("package-check",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),h=(0,t.A)("lightbulb-off",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var d=r(4848);const u=e=>{let{level:n,message:r}=e;const t={0:{title:"Deprecated",icon:(0,d.jsx)(o,{})},1:{title:"Experimental",icon:(0,d.jsx)(l,{})},1.1:{title:"Early Development",icon:(0,d.jsx)(c,{})},1.2:{title:"Release Candidate",icon:(0,d.jsx)(i,{})},2:{title:"Stable",icon:(0,d.jsx)(a,{})},3:{title:"Legacy",icon:(0,d.jsx)(h,{})}};return(0,d.jsxs)("section",{className:"stability","data-level":n,children:[(0,d.jsx)(s.A,{to:"/docs/stability-badges",children:(0,d.jsxs)("header",{children:[(0,d.jsx)("strong",{children:n}),(0,d.jsx)("span",{children:t[n].title}),t[n].icon]})}),r?(0,d.jsx)("p",{children:r}):null]})}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);