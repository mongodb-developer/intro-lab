"use strict";(self.webpackChunkintro_lab=self.webpackChunkintro_lab||[]).push([["5986"],{5289:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"schema-validation/validate-authors","title":"\uD83E\uDDB8\u200D\u2640\uFE0F Enable Validation for the Authors Collection","description":"In this exercise, you will define a JSON schema for the authors collection, apply the schema to the collection, and test the schema validation by inserting a document that does not match the schema.","source":"@site/docs/60-schema-validation/3-validate-authors.mdx","sourceDirName":"60-schema-validation","slug":"/schema-validation/validate-authors","permalink":"/intro-lab/docs/schema-validation/validate-authors","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/intro-lab/blob/main/docs/60-schema-validation/3-validate-authors.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 Enable Validation for the Users Collection","permalink":"/intro-lab/docs/schema-validation/validate-users"},"next":{"title":"Indexing","permalink":"/intro-lab/docs/category/indexing"}}'),i=n("5893"),o=n("65");let s={},r="\uD83E\uDDB8\u200D\u2640\uFE0F Enable Validation for the Authors Collection",l={},c=[];function d(e){let t={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\uFE0F-enable-validation-for-the-authors-collection",children:"\uD83E\uDDB8\u200D\u2640\uFE0F Enable Validation for the Authors Collection"})}),"\n",(0,i.jsx)(t.p,{children:"In this exercise, you will define a JSON schema for the authors collection, apply the schema to the collection, and test the schema validation by inserting a document that does not match the schema."}),"\n",(0,i.jsx)(t.p,{children:"This is an advanced exercise that requires you to write code. If you get stuck and you're doing this during a live workshop, you can flag down an instructor in the room for help."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Start by opening the ",(0,i.jsx)(t.code,{children:"server/src/schema-validation/apply-schema.ts"})," file in your GitHub codespace and uncomment lines 41-61."]}),"\n",(0,i.jsxs)(t.li,{children:["Complete the tasks marked with ",(0,i.jsx)(t.code,{children:"// TODO"})," comments."]}),"\n",(0,i.jsxs)(t.li,{children:["Execute the script again to apply the schema to the ",(0,i.jsx)(t.code,{children:"authors"})," collection.","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd server\nnpx tsx src/schema-validation/apply-schema.ts\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, test the schema validation by modifying the ",(0,i.jsx)(t.code,{children:"server/src/schema-validation/test-validation.ts"})," script. Inserting a document in the ",(0,i.jsx)(t.code,{children:"authors"})," collection."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var a=n(7294);let i={},o=a.createContext(i);function s(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);