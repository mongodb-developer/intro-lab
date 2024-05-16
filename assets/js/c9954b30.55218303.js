"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[600],{7611:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(5893),r=n(1151),i=n(7004);const o={},s="\ud83d\udc50 Importing the library data",c={id:"importing-data/import-data",title:"\ud83d\udc50 Importing the library data",description:"Now that you have your connection string, you can import the library data into your project.",source:"@site/docs/30-importing-data/3-import-data.mdx",sourceDirName:"30-importing-data",slug:"/importing-data/import-data",permalink:"/intro-lab/docs/importing-data/import-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/30-importing-data/3-import-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Get your connection string",permalink:"/intro-lab/docs/importing-data/get-connection-string"},next:{title:"Open the Application",permalink:"/intro-lab/docs/category/open-the-application"}},d={},l=[];function p(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"-importing-the-library-data",children:"\ud83d\udc50 Importing the library data"}),"\n",(0,a.jsx)(e.p,{children:"Now that you have your connection string, you can import the library data into your project."}),"\n",(0,a.jsx)(e.p,{children:"To do this, we've built an importer app that will copy the data from our database, into your cluster. You'll need to provide the importer app with your connection string."}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsx)(e.p,{children:"You should never share your connection string with anyone. It contains your database credentials, and anyone with access to it can read and write data to your database."})}),"\n",(0,a.jsxs)(e.p,{children:["To import the data, start by going to the ",(0,a.jsx)(e.a,{href:"https://mdb.link/import-library-data",children:"importer application"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"You will be greeted by this minimalistic interface."}),"\n",(0,a.jsx)(i.Z,{url:"https://mdb.link/import-library-data",src:"img/screenshots/30-importing-data/3-import-data/1-importer-application.png",alt:"Screenshot of the importer tool"}),"\n",(0,a.jsxs)(e.p,{children:["Paste your connection string into the input field, and click the ",(0,a.jsx)(e.strong,{children:"Import Library Data"})," button."]}),"\n",(0,a.jsx)(e.p,{children:"You should see a message saying that the import has started."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Starting data import\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"Importing the data might take a few minutes. It's a good time to stretch or get a coffee! \u2615"})}),"\n",(0,a.jsx)(e.p,{children:"After a few minutes, you should see that the import job was successful."}),"\n",(0,a.jsx)(i.Z,{url:"https://mdb.link/import-library-data",src:"img/screenshots/30-importing-data/3-import-data/2-import-success.png",alt:"Screenshot of a successful import"}),"\n",(0,a.jsx)(e.p,{children:"Once the data is copied to your cluster, you are ready to start building your application."})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},7004:(t,e,n)=>{n.d(e,{Z:()=>o});n(7294);var a=n(5893);function r(t){const e=t.url||"http://localhost:3000";return(0,a.jsxs)("div",{className:"browser container",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"column left",children:[(0,a.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,a.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,a.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,a.jsx)("div",{className:"column middle",children:(0,a.jsx)("input",{type:"text",value:e})}),(0,a.jsx)("div",{className:"column right",children:(0,a.jsxs)("div",{style:{float:"right"},children:[(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"})]})})]}),(0,a.jsx)("div",{className:"content",children:t.children})]})}var i=n(9524);function o(t){return(0,a.jsx)(r,{...t,children:(0,a.jsx)("img",{src:(0,i.Z)(t.src),alt:t.alt})})}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var a=n(7294);const r={},i=a.createContext(r);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);