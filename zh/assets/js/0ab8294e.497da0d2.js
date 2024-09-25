"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[326],{6099:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=e(4848),a=e(8453),i=e(2763);const s={},o="\ud83d\udc50 \u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e",c={id:"importing-data/import-data",title:"\ud83d\udc50 \u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e",description:"\u73b0\u5728\u60a8\u5df2\u7ecf\u6709\u4e86\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u5c06\u56fe\u4e66\u9986\u6570\u636e\u5bfc\u5165\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/30-importing-data/3-import-data.mdx",sourceDirName:"30-importing-data",slug:"/importing-data/import-data",permalink:"/intro-lab/zh/docs/importing-data/import-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/30-importing-data/3-import-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 \u83b7\u53d6\u60a8\u7684\u8fde\u63a5\u5b57\u7b26\u4e32",permalink:"/intro-lab/zh/docs/importing-data/get-connection-string"},next:{title:"Open the Application",permalink:"/intro-lab/zh/docs/category/open-the-application"}},d={},l=[];function p(t){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-\u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e",children:"\ud83d\udc50 \u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e"})}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u60a8\u5df2\u7ecf\u6709\u4e86\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u5c06\u56fe\u4e66\u9986\u6570\u636e\u5bfc\u5165\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u6b64\uff0c\u6211\u4eec\u6784\u5efa\u4e86\u4e00\u4e2a\u5bfc\u5165\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u4f1a\u5c06\u6570\u636e\u4ece\u6211\u4eec\u7684\u6570\u636e\u5e93\u590d\u5236\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d\u3002\u60a8\u9700\u8981\u5411\u5bfc\u5165\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u60a8\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u60a8\u4e0d\u5e94\u8be5\u4e0e\u4efb\u4f55\u4eba\u5206\u4eab\u60a8\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u3002\u5b83\u5305\u542b\u60a8\u7684\u6570\u636e\u5e93\u51ed\u636e\uff0c\u4efb\u4f55\u62e5\u6709\u5b83\u7684\u4eba\u90fd\u53ef\u4ee5\u8bfb\u53d6\u548c\u5199\u5165\u60a8\u7684\u6570\u636e\u5e93\u6570\u636e\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5bfc\u5165\u6570\u636e\uff0c\u8bf7\u5148\u8bbf\u95ee ",(0,r.jsx)(n.a,{href:"https://mdb.link/import-library-data",children:"\u5bfc\u5165\u5e94\u7528\u7a0b\u5e8f"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u4f1a\u770b\u5230\u8fd9\u4e2a\u7b80\u6d01\u7684\u754c\u9762\u3002"}),"\n",(0,r.jsx)(i.A,{url:"https://mdb.link/import-library-data",src:"img/screenshots/30-importing-data/3-import-data/1-importer-application.png",alt:"\u5bfc\u5165\u5de5\u5177\u7684\u622a\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u60a8\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u7c98\u8d34\u5230\u8f93\u5165\u6846\u4e2d\uff0c\u7136\u540e\u70b9\u51fb ",(0,r.jsx)(n.strong,{children:"Import Library Data(\u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e)"})," \u6309\u94ae\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u4e00\u6761\u6d88\u606f\uff0c\u8868\u660e\u5bfc\u5165\u5df2\u5f00\u59cb\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Starting data import\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5bfc\u5165\u6570\u636e\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002\u8fd9\u662f\u4e00\u4e2a\u4f38\u5c55\u8eab\u4f53\u6216\u559d\u676f\u5496\u5561\u7684\u597d\u65f6\u673a\uff01\u2615"})}),"\n",(0,r.jsx)(n.p,{children:"\u51e0\u5206\u949f\u540e\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u5bfc\u5165\u4f5c\u4e1a\u6210\u529f\u5b8c\u6210\u7684\u6d88\u606f\u3002"}),"\n",(0,r.jsx)(i.A,{url:"https://mdb.link/import-library-data",src:"img/screenshots/30-importing-data/3-import-data/2-import-success.png",alt:"\u6210\u529f\u5bfc\u5165\u7684\u622a\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u65e6\u6570\u636e\u590d\u5236\u5230\u60a8\u7684\u96c6\u7fa4\u4e2d\uff0c\u60a8\u5c31\u53ef\u4ee5\u5f00\u59cb\u6784\u5efa\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e86\u3002"})]})}function m(t={}){const{wrapper:n}={...(0,a.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},2763:(t,n,e)=>{e.d(n,{A:()=>s});e(6540);var r=e(4848);function a(t){const n=t.url||"http://localhost:3000";return(0,r.jsxs)("div",{className:"browser container",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"column left",children:[(0,r.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,r.jsx)("div",{className:"column middle",children:(0,r.jsx)("input",{type:"text",value:n})}),(0,r.jsx)("div",{className:"column right",children:(0,r.jsxs)("div",{style:{float:"right"},children:[(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"})]})})]}),(0,r.jsx)("div",{className:"content",children:t.children})]})}var i=e(6025);function s(t){return(0,r.jsx)(a,{...t,children:(0,r.jsx)("img",{src:(0,i.Ay)(t.src),alt:t.alt})})}},8453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>o});var r=e(6540);const a={},i=r.createContext(a);function s(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);