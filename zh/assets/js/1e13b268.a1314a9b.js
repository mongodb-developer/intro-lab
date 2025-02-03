"use strict";(self.webpackChunkintro_lab=self.webpackChunkintro_lab||[]).push([["6203"],{8982:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"demo-app/configure","title":"\uD83D\uDC50 \u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F","description":"\u73B0\u5728\u4F60\u7684\u73AF\u5883\u5DF2\u7ECF\u8BBE\u7F6E\u597D\u4E86\uFF0C\u4F60\u53EF\u4EE5\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u4E86\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/50-demo-app/3-configure.mdx","sourceDirName":"50-demo-app","slug":"/demo-app/configure","permalink":"/intro-lab/zh/docs/demo-app/configure","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/intro-lab/blob/main/docs/50-demo-app/3-configure.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F","permalink":"/intro-lab/zh/docs/demo-app/start-app"},"next":{"title":"Schema Validation","permalink":"/intro-lab/zh/docs/category/schema-validation"}}'),t=r("5893"),i=r("65"),a=r("600");let o={},c="\uD83D\uDC50 \u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F",l={},d=[{value:"\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF",id:"\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F",children:"\uD83D\uDC50 \u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F"})}),"\n",(0,t.jsx)(n.p,{children:"\u73B0\u5728\u4F60\u7684\u73AF\u5883\u5DF2\u7ECF\u8BBE\u7F6E\u597D\u4E86\uFF0C\u4F60\u53EF\u4EE5\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u4E86\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["IDE \u4E2D\u5E94\u8BE5\u5DF2\u7ECF\u6253\u5F00\u4E86\u4E00\u4E2A\u6587\u4EF6\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u8BF7\u5728\u5DE6\u4FA7\u7684\u6587\u4EF6\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u67E5\u627E\u5E76\u6253\u5F00\u6587\u4EF6 ",(0,t.jsx)(n.code,{children:"server/.env"}),"\u3002\u8FD9\u4E2A\u6587\u4EF6\u5305\u542B\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u914D\u7F6E\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4EF6\u5E94\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'PORT=5000\nDATABASE_URI="mongodb+srv://user:password@serverurl"\nDATABASE_NAME="library"\nSECRET="secret"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4F60\u9700\u8981\u5C06 ",(0,t.jsx)(n.code,{children:"DATABASE_URI"})," \u53C2\u6570\u66F4\u6539\u4E3A\u4F60\u7684\u8FDE\u63A5\u5B57\u7B26\u4E32\u3002\u8FD9\u4E0E\u5BFC\u5165\u6570\u636E\u65F6\u4F7F\u7528\u7684\u8FDE\u63A5\u5B57\u7B26\u4E32\u76F8\u540C\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u4E0D\u8BB0\u5F97\u5982\u4F55\u83B7\u53D6\u4F60\u7684\u8FDE\u63A5\u5B57\u7B26\u4E32\uFF1F\u67E5\u770B ",(0,t.jsx)(n.a,{href:"/docs/importing-data/import-data",children:"\u5BFC\u5165\u56FE\u4E66\u9986\u6570\u636E"})," \u90E8\u5206\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u590D\u5236\u5E76\u7C98\u8D34\u4F60\u7684\u8FDE\u63A5\u5B57\u7B26\u4E32\u5230 ",(0,t.jsx)(n.code,{children:"DATABASE_URI"})," \u53C2\u6570\u4E2D\u3002\u6587\u4EF6\u5C06\u81EA\u52A8\u4FDD\u5B58\uFF0C\u670D\u52A1\u5668\u5C06\u91CD\u65B0\u542F\u52A8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5E95\u90E8\u7684 ",(0,t.jsx)(n.em,{children:"Terminal"})," \u6807\u7B7E\u4E2D\uFF0C\u5BFB\u627E ",(0,t.jsx)(n.code,{children:"Server is running on port: 5000"})," \u884C\u3002\u5982\u679C\u4F60\u770B\u5230\u4E86\uFF0C\u5C31\u4E00\u5207\u6B63\u5E38\u4E86\uFF01"]}),"\n",(0,t.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/1-running.png",alt:"\u7EC8\u7AEF\u9762\u677F\u7684\u622A\u56FE"}),"\n",(0,t.jsx)(n.h2,{id:"\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF",children:"\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF"}),"\n",(0,t.jsx)(n.p,{children:"\u73B0\u5728\u670D\u52A1\u5668\u6B63\u5728\u8FD0\u884C\uFF0C\u4F60\u53EF\u4EE5\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF\u4EE5\u67E5\u770B\u5E94\u7528\u7A0B\u5E8F\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u53F3\u4E0A\u89D2\u7684\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u5237\u65B0\u56FE\u6807\u4EE5\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF\u3002"}),"\n",(0,t.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/2-reload.png",alt:"\u5237\u65B0\u56FE\u6807\u7684\u622A\u56FE"}),"\n",(0,t.jsx)(n.p,{children:"\u70B9\u51FB\u6B64\u56FE\u6807\u5C06\u91CD\u65B0\u52A0\u8F7D\u5BA2\u6237\u7AEF\u3002\u73B0\u5728\u4F60\u5E94\u8BE5\u5DF2\u7ECF\u8FDE\u63A5\u5230\u6570\u636E\u5E93\uFF0C\u5E94\u8BE5\u4F1A\u770B\u5230\u7F51\u9875\u4E2D\u5217\u51FA\u4E86\u4E00\u4E9B\u4E66\u7C4D\u3002"})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},600:function(e,n,r){r.d(n,{Z:()=>a});var s=r("5893");function t(e){let n=e.url||"http://localhost:3000";return(0,s.jsxs)("div",{className:"browser container",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"column left",children:[(0,s.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,s.jsx)("div",{className:"column middle",children:(0,s.jsx)("input",{type:"text",value:n})}),(0,s.jsx)("div",{className:"column right",children:(0,s.jsxs)("div",{style:{float:"right"},children:[(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"})]})})]}),(0,s.jsx)("div",{className:"content",children:e.children})]})}r("7294");var i=r("3187");function a(e){return(0,s.jsx)(t,{...e,children:(0,s.jsx)("img",{src:(0,i.ZP)(e.src),alt:e.alt})})}},65:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(7294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);