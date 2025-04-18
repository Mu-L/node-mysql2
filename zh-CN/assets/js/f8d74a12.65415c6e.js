/*! For license information please see f8d74a12.65415c6e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2654],{883:(e,n,s)=>{s.d(n,{S:()=>c});var t=s(6540),r=s(797),i=s(8069),l=s(4848);const o=()=>(0,l.jsx)("span",{className:"loader"}),c=e=>{let{url:n,language:s,extractMethod:c,methodType:a}=e;const[d,h]=(0,t.useState)(""),[x,m]=(0,t.useState)(!0),[u,p]=(0,t.useState)(!0),{siteConfig:j}=(0,r.A)(),g=j.baseUrl.replace(/\/$/,""),b=/^\//.test(n)?`${g}${n}`:n;return(0,t.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(b,{signal:n}).then((e=>e.text())).then((e=>{const n=c&&a?((e,n,s)=>{const t=e.split("\n"),r=`${s} ${n}`;let i=!1,l=0,o="";for(const c of t)if(c.includes(r)&&(i=!0),i&&(c.includes("{")&&l++,o+=`${c}\n`,c.includes("}")&&(l--,0===l)))break;return o.trim()||e})(e,c,a):e;h(n||e),m(!1),p(!1)})).catch((()=>{p(!0),m(!1)})),()=>{e.abort()}}),[b,c,a]),(0,l.jsx)(l.Fragment,{children:x?(0,l.jsx)(o,{}):(0,l.jsx)(l.Fragment,{children:u?(0,l.jsxs)("div",{children:["Unable to access the requested link: ",(0,l.jsx)("code",{children:b}),". Please verify the link or try again later."]}):(0,l.jsx)(i.A,{className:`language-${s}`,children:d})})})}},4722:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(6540);const r=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,n,s)=>s?s.toUpperCase():n.toLowerCase())))(e);return n.charAt(0).toUpperCase()+n.slice(1)},i=(...e)=>e.filter(((e,n,s)=>Boolean(e)&&""!==e.trim()&&s.indexOf(e)===n)).join(" ").trim(),l=e=>{for(const n in e)if(n.startsWith("aria-")||"role"===n||"title"===n)return!0};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c=(0,t.forwardRef)((({color:e="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:a,iconNode:d,...h},x)=>(0,t.createElement)("svg",{ref:x,...o,width:n,height:n,stroke:e,strokeWidth:r?24*Number(s)/Number(n):s,className:i("lucide",c),...!a&&!l(h)&&{"aria-hidden":"true"},...h},[...d.map((([e,n])=>(0,t.createElement)(e,n))),...Array.isArray(a)?a:[a]]))),a=(e,n)=>{const s=(0,t.forwardRef)((({className:s,...l},o)=>{return(0,t.createElement)(c,{ref:o,iconNode:n,className:i(`lucide-${a=r(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...l});var a}));return s.displayName=r(e),s}},5397:(e,n,s)=>{s.d(n,{T:()=>i});var t=s(6701),r=s(4848);const i=e=>{let{children:n,open:s,title:i}=e;return(0,r.jsx)(t.A,{open:s,className:"faq",summary:(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:i})}),children:(0,r.jsx)("section",{children:n})})}},7634:(e,n,s)=>{s.d(n,{k:()=>x});var t=s(6289),r=s(4722);const i=(0,r.A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),l=(0,r.A)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),o=(0,r.A)("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),c=(0,r.A)("package-search",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]),a=(0,r.A)("package-check",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),d=(0,r.A)("lightbulb-off",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var h=s(4848);const x=e=>{let{level:n,message:s}=e;const r={0:{title:"Deprecated",icon:(0,h.jsx)(i,{})},1:{title:"Experimental",icon:(0,h.jsx)(l,{})},1.1:{title:"Early Development",icon:(0,h.jsx)(o,{})},1.2:{title:"Release Candidate",icon:(0,h.jsx)(c,{})},2:{title:"Stable",icon:(0,h.jsx)(a,{})},3:{title:"Legacy",icon:(0,h.jsx)(d,{})}};return(0,h.jsxs)("section",{className:"stability","data-level":n,children:[(0,h.jsx)(t.A,{to:"/docs/stability-badges",children:(0,h.jsxs)("header",{children:[(0,h.jsx)("strong",{children:n}),(0,h.jsx)("span",{children:r[n].title}),r[n].icon]})}),s?(0,h.jsx)("p",{children:s}):null]})}},7972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"contributing/website","title":"Documentation Site","description":"This website is built using Docusaurus 3, a modern static website generator.","source":"@site/docs/contributing/website.mdx","sourceDirName":"contributing","slug":"/contributing/website","permalink":"/node-mysql2/zh-CN/docs/contributing/website","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/contributing/website.mdx","tags":[],"version":"current","frontMatter":{"title":"Documentation Site"},"sidebar":"docs","previous":{"title":"MySQL2","permalink":"/node-mysql2/zh-CN/docs/contributing"}}');var r=s(4848),i=s(8453),l=s(5397),o=s(9964),c=s(7634),a=s(883);const d={title:"Documentation Site"},h="Website Contributing Guidelines",x={},m=[{value:"Environment",id:"environment",level:2},{value:"Development",id:"development",level:2},{value:"Extras Components",id:"extras-components",level:2},{value:"History",id:"history",level:3},{value:"Stability",id:"stability",level:3},{value:"FAQ",id:"faq",level:3},{value:"ExternalCodeEmbed",id:"externalcodeembed",level:3},{value:"Running Tests",id:"running-tests",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"website-contributing-guidelines",children:"Website Contributing Guidelines"})}),"\n",(0,r.jsxs)(n.p,{children:["This website is built using ",(0,r.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus 3"}),", a modern static website generator."]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,r.jsx)(n.p,{children:"You will need these tools installed on your system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js (18.x or higher)"})}),"\n"]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Fork the ",(0,r.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2",children:"MySQL2"})," repository."]}),"\n",(0,r.jsxs)(n.li,{children:["Download your forked repository locally. The website's workspace is the \"",(0,r.jsx)(n.em,{children:"website"}),'" directory in ',(0,r.jsx)(n.strong,{children:"node-mysql2"})," root."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a new branch from ",(0,r.jsx)(n.code,{children:"master"})," (optional)."]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"cd website"})," to enter the website workspace."]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"npm ci"})," to install the dependecies from ",(0,r.jsx)(n.em,{children:"package-lock.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"npm start"})," to starting the local development."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"It will start a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"Docusaurus"})," complete documentation, please ",(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs",children:"see here"}),"."]}),"\n",(0,r.jsx)(l.T,{title:"CLI example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/sidorares/node-mysql2.git\ngit checkout -b website # optional\ncd /path-to/node-mysql2/website\nnpm ci\nnpm start\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Documentation is auto-generated from ",(0,r.jsx)(n.strong,{children:"MDX"})," files placed in these directories:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"./docs/documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"./docs/examples"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"./docs/faq"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Caution",type:"danger",children:[(0,r.jsxs)(n.p,{children:["Note that the website has its own ",(0,r.jsx)(n.em,{children:"package.json"}),"."]}),(0,r.jsxs)(n.p,{children:["Please, do not install dependencies for the website in ",(0,r.jsx)(n.strong,{children:"node-mysql2"})," root."]})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"extras-components",children:"Extras Components"}),"\n",(0,r.jsx)(n.p,{children:"Every extra component is thoroughly documented with complete typings descriptions."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:(0,r.jsx)(n.strong,{children:"Docusaurus Markdown Features:"})})," The MDX compiler transforms Markdown files to React components, and allows you to use JSX in your Markdown content. This enables you to easily interleave React components within your content, and create delightful learning experiences."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"history",children:"History"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"History"})," component displays version changes in a table format, listing version numbers alongside their changes."]}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { History } from '@site/src/components/History';\n\n<History\n  records={[\n    {\n      version: '1.0.0',\n      changes: ['Some change message.'],\n    },\n  ]}\n/>\n"})}),"\n","\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can also utilize React components in the ",(0,r.jsx)(n.code,{children:"changes"})," option."]})}),"\n",(0,r.jsx)(l.T,{title:"Example",children:(0,r.jsx)(o.B,{records:[{version:"1.0.0",changes:["Some change message."]}]})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h3,{id:"stability",children:"Stability"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/docs/stability-badges",children:"Stability Badges"})," for more detais."]}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Stability } from '@site/src/components/Stability';\n\n<Stability level={2} />\n<Stability level={2} message='Some message' />\n"})}),"\n","\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can also utilize React components in the ",(0,r.jsx)(n.code,{children:"message"})," option."]})}),"\n",(0,r.jsxs)(n.p,{children:["Available levels: ",(0,r.jsx)(n.code,{children:"0"}),", ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"1.1"}),", ",(0,r.jsx)(n.code,{children:"1.2"}),", ",(0,r.jsx)(n.code,{children:"2"})," and ",(0,r.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,r.jsxs)(l.T,{title:"Example",children:[(0,r.jsx)(c.k,{level:2}),(0,r.jsx)(c.k,{level:2,message:"Some message."})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { FAQ } from '@site/src/components/FAQ';\n\n<FAQ title='Title'>\n\n  > Some markdown (**MDX**) content.\n\n</FAQ>\n"})}),"\n","\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"FAQ"})," component can be utilized in any section or page."]}),"\n",(0,r.jsxs)(n.li,{children:["Code blocks are compatible and can be used within the ",(0,r.jsx)(n.strong,{children:"FAQ"})," component."]}),"\n"]})}),"\n",(0,r.jsx)(l.T,{title:"Example",children:(0,r.jsx)(l.T,{title:"Title",children:(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Some markdown (",(0,r.jsx)(n.strong,{children:"MDX"}),") content."]}),"\n"]})})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h3,{id:"externalcodeembed",children:"ExternalCodeEmbed"}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { ExternalCodeEmbed } from '@site/src/components/ExternalCodeEmbed';\n\n<ExternalCodeEmbed\n  url='https://github.com/sidorares/node-mysql2/blob/75b05f0765c9edd0c0be8f18d85be05618770cca/.prettierrc'\n  language='json'\n/>\n\n<ExternalCodeEmbed\n  url='https://raw.githubusercontent.com/sidorares/node-mysql2/master/tools/parse-row.js'\n  language='js'\n  extractMethod='parseC'\n  methodType='function'\n/>\n"})}),"\n","\n",(0,r.jsxs)(l.T,{title:"Example",children:[(0,r.jsx)(a.S,{url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/.prettierrc",language:"json"}),(0,r.jsx)(a.S,{url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/tools/parse-row.js",language:"js",extractMethod:"parseC",methodType:"function"})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,r.jsxs)(l.T,{title:"Check Prettier and ESLint rules for compliance",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run lintcheck\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Included in the ",(0,r.jsx)(n.strong,{children:"GitHub Actions"})," workflow."]}),"\n"]})]}),"\n",(0,r.jsxs)(l.T,{title:"Check for typings errors",children:[(0,r.jsx)(c.k,{level:1,message:(0,r.jsxs)(r.Fragment,{children:["Checks for ",(0,r.jsx)(n.strong,{children:"MDX"})," components are missing."]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run typecheck\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Included in the ",(0,r.jsx)(n.strong,{children:"GitHub Actions"})," workflow."]}),"\n"]})]}),"\n",(0,r.jsxs)(l.T,{title:"Clear and build the website",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run clear\nnpm run build\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Included in the ",(0,r.jsx)(n.strong,{children:"GitHub Actions"})," workflow."]}),"\n"]})]}),"\n",(0,r.jsxs)(l.T,{title:"Fix issues from Prettier and ESLint rules",open:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To prevent lint issues, it is recommended to execute this command before creating your commit."}),"\n",(0,r.jsxs)(n.li,{children:["Not included in the ",(0,r.jsx)(n.strong,{children:"GitHub Actions"})," workflow."]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9964:(e,n,s)=>{s.d(n,{B:()=>l});var t=s(6701);const r=(0,s(4722).A)("file-clock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);var i=s(4848);const l=e=>{let{records:n,open:s}=e;return(0,i.jsx)(t.A,{open:s,summary:(0,i.jsxs)("summary",{children:[(0,i.jsx)(r,{})," History"]}),className:"history",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Version"}),(0,i.jsx)("th",{children:"Changes"})]})}),(0,i.jsx)("tbody",{children:n.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("strong",{children:["v",e.version.replace(/[^0-9.]/g,"")]})}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{className:"changes",children:e.changes.map(((e,n)=>(0,i.jsx)("section",{children:e},`change:${n}`)))})})]},`record:${n}`)))})]})})}}}]);