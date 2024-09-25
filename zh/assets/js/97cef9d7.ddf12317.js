"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[839],{6606:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(4848),i=t(8453);const r={},s="\ud83d\udc50 \u4f18\u5316\u67e5\u8be2",c={id:"optimize/optimize",title:"\ud83d\udc50 \u4f18\u5316\u67e5\u8be2",description:"\u65e2\u7136\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u6211\u4eec\u5728\u6570\u636e\u6a21\u5f0f\u4e2d\u4f7f\u7528\u7684\u6a21\u5f0f\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u91cd\u5199 getBook \u65b9\u6cd5\u6765\u68c0\u7d22\u4e66\u7c4d\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/75-optimize/3-optimize.mdx",sourceDirName:"75-optimize",slug:"/optimize/optimize",permalink:"/intro-lab/zh/docs/optimize/optimize",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/75-optimize/3-optimize.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 \u4f7f\u7528\u7684\u6a21\u5f0f",permalink:"/intro-lab/zh/docs/optimize/patterns"},next:{title:"Troubleshooting the application",permalink:"/intro-lab/zh/docs/category/troubleshooting-the-application"}},d={},a=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"-\u4f18\u5316\u67e5\u8be2",children:"\ud83d\udc50 \u4f18\u5316\u67e5\u8be2"})}),"\n",(0,n.jsxs)(o.p,{children:["\u65e2\u7136\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u6211\u4eec\u5728\u6570\u636e\u6a21\u5f0f\u4e2d\u4f7f\u7528\u7684\u6a21\u5f0f\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u91cd\u5199 ",(0,n.jsx)(o.code,{children:"getBook"})," \u65b9\u6cd5\u6765\u68c0\u7d22\u4e66\u7c4d\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(o.p,{children:["\u6253\u5f00 ",(0,n.jsx)(o.code,{children:"server/src/controllers/books.ts"})," \u6587\u4ef6\uff0c\u67e5\u627e ",(0,n.jsx)(o.code,{children:"getBook"})," \u65b9\u6cd5\u3002\u4f60\u5982\u4f55\u91cd\u5199\u8fd9\u4e2a\u67e5\u8be2\uff0c\u4f7f\u5176\u901f\u5ea6\u98de\u5feb\uff0c\u5e76\u6ee1\u8db3\u6211\u4eec\u4e3a\u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5b9a\u4e49\u7684\u8981\u6c42\uff1f"]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["\u4f60\u73b0\u5728\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u591a\u5c11\u6b21\u8c03\u7528\uff1f\u4f60\u4ecd\u7136\u9700\u8981\u4e00\u4e2a\u805a\u5408\u7ba1\u9053\u5417\uff1f\u67e5\u770b ",(0,n.jsx)(o.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/",children:"\u6587\u6863"})," \u4e86\u89e3 ",(0,n.jsx)(o.code,{children:"findOne"})," \u65b9\u6cd5\u3002"]})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b\u7b54\u6848"}),(0,n.jsx)("div",{children:(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"    public async getBook(bookId: string): Promise<Book> {\n        /**\n         * \u4f18\u5316\u540e\u7684\u4ee3\u7801\n         */\n        const book = await collections?.books?.findOne({ _id: bookId });\n\n        return book;\n    }\n"})})})]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var n=t(6540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);