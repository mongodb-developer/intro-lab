"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[963],{2485:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var e=o(5893),s=o(1151),r=o(7004);const i={},c="\ud83d\udc50 Get your connection string",a={id:"importing-data/get-connection-string",title:"\ud83d\udc50 Get your connection string",description:"To load the dataset into your cluster, you will first need your connection string to MongoDB.",source:"@site/docs/30-importing-data/2-get-connection-string.mdx",sourceDirName:"30-importing-data",slug:"/importing-data/get-connection-string",permalink:"/intro-lab/docs/importing-data/get-connection-string",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/30-importing-data/2-get-connection-string.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Library Management System Dataset",permalink:"/intro-lab/docs/importing-data/intro"},next:{title:"\ud83d\udc50 Importing the library data",permalink:"/intro-lab/docs/importing-data/import-data"}},l={},d=[];function u(t){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"-get-your-connection-string",children:"\ud83d\udc50 Get your connection string"}),"\n",(0,e.jsx)(n.p,{children:"To load the dataset into your cluster, you will first need your connection string to MongoDB."}),"\n",(0,e.jsxs)(n.p,{children:["To get your connection string, go back to the Atlas UI, and look for the ",(0,e.jsx)(n.strong,{children:"Connect"})," button."]}),"\n",(0,e.jsx)(r.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-importing-data/2-get-connection-string/1-connect-button.png",alt:"Screenshot of the connect button"}),"\n",(0,e.jsx)(n.p,{children:"This will provide you with a modal that offers a number of different ways to connect to your database."}),"\n",(0,e.jsx)(r.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-importing-data/2-get-connection-string/2-connect-modal.png",alt:"Screenshot of the connect modal"}),"\n",(0,e.jsxs)(n.p,{children:["Select ",(0,e.jsx)(n.strong,{children:"Compass"}),". While we won't be using Compass to import the data, it's an easy way to see your connection string."]}),"\n",(0,e.jsx)(r.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/30-importing-data/2-get-connection-string/3-connect-compass.png",alt:"Screenshot of the connection string"}),"\n",(0,e.jsx)(n.p,{children:"Look for your connection string. It should look something like"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"mongodb+srv://<username>:<password>@<cluster-url>/\n"})}),"\n",(0,e.jsx)(n.p,{children:"Click on the copy button next to it to copy it to your clipboard, and store it somewhere safe. You will need this connection string in a number of places throughout this training."}),"\n",(0,e.jsx)(n.admonition,{type:"tip",children:(0,e.jsxs)(n.p,{children:["Don't forget to replace ",(0,e.jsx)(n.code,{children:"<password>"})," with the password you set when you created the cluster."]})})]})}function p(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(u,{...t})}):u(t)}},7004:(t,n,o)=>{o.d(n,{Z:()=>i});o(7294);var e=o(5893);function s(t){const n=t.url||"http://localhost:3000";return(0,e.jsxs)("div",{className:"browser container",children:[(0,e.jsxs)("div",{className:"row",children:[(0,e.jsxs)("div",{className:"column left",children:[(0,e.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,e.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,e.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,e.jsx)("div",{className:"column middle",children:(0,e.jsx)("input",{type:"text",value:n})}),(0,e.jsx)("div",{className:"column right",children:(0,e.jsxs)("div",{style:{float:"right"},children:[(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"}),(0,e.jsx)("span",{className:"bar"})]})})]}),(0,e.jsx)("div",{className:"content",children:t.children})]})}var r=o(9524);function i(t){return(0,e.jsx)(s,{...t,children:(0,e.jsx)("img",{src:(0,r.Z)(t.src),alt:t.alt})})}},1151:(t,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var e=o(7294);const s={},r=e.createContext(s);function i(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);