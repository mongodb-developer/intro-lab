"use strict";(self.webpackChunkintro_lab=self.webpackChunkintro_lab||[]).push([["6544"],{2517:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>t,contentTitle:()=>c});var i=JSON.parse('{"id":"schema-validation/validate-users","title":"\uD83D\uDC50 \u4E3A users \u96C6\u5408\u542F\u7528\u9A8C\u8BC1","description":"\u5728\u672C\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u5C06\u63A2\u7D22 pre-written \u7684 users \u96C6\u5408\u7684 JSON \u6A21\u578B\u6821\u9A8C\uFF0C\u8FD0\u884C\u811A\u672C\u5C06\u5176\u5E94\u7528\u4E8E\u96C6\u5408\uFF0C\u5E76\u901A\u8FC7\u63D2\u5165\u4E0D\u7B26\u5408\u6A21\u578B\u5B9A\u4E49\u7684\u6587\u6863\u6765\u6D4B\u8BD5\u6A21\u578B\u6821\u9A8C\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/60-schema-validation/2-validate-users.mdx","sourceDirName":"60-schema-validation","slug":"/schema-validation/validate-users","permalink":"/intro-lab/zh/docs/schema-validation/validate-users","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/intro-lab/blob/main/docs/60-schema-validation/2-validate-users.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCD8 \u4EC0\u4E48\u662F\u6A21\u578B\u6821\u9A8C\u53CA\u5176\u91CD\u8981\u6027","permalink":"/intro-lab/zh/docs/schema-validation/what-is-schema-validation"},"next":{"title":"\uD83E\uDDB8\u200D\u2640\uFE0F \u4E3A authors \u96C6\u5408\u542F\u7528\u9A8C\u8BC1","permalink":"/intro-lab/zh/docs/schema-validation/validate-authors"}}'),r=s("5893"),l=s("65");let d={},c="\uD83D\uDC50 \u4E3A users \u96C6\u5408\u542F\u7528\u9A8C\u8BC1",o={},t=[{value:"\u6570\u636E\u5E93\u7528\u6237\u6743\u9650",id:"\u6570\u636E\u5E93\u7528\u6237\u6743\u9650",level:2},{value:"\u63A2\u7D22 JSON \u6A21\u5F0F",id:"\u63A2\u7D22-json-\u6A21\u5F0F",level:2},{value:"\u63A2\u7D22\u5E94\u7528\u6A21\u5F0F\u7684\u811A\u672C",id:"\u63A2\u7D22\u5E94\u7528\u6A21\u5F0F\u7684\u811A\u672C",level:2},{value:"\u5C06\u6A21\u578B\u5E94\u7528\u4E8E <code>users</code> \u96C6\u5408",id:"\u5C06\u6A21\u578B\u5E94\u7528\u4E8E-users-\u96C6\u5408",level:2},{value:"\u6D4B\u8BD5\u6A21\u578B\u9A8C\u8BC1",id:"\u6D4B\u8BD5\u6A21\u578B\u9A8C\u8BC1",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-\u4E3A-users-\u96C6\u5408\u542F\u7528\u9A8C\u8BC1",children:"\uD83D\uDC50 \u4E3A users \u96C6\u5408\u542F\u7528\u9A8C\u8BC1"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u672C\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u5C06\u63A2\u7D22 pre-written \u7684 ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u7684 JSON \u6A21\u578B\u6821\u9A8C\uFF0C\u8FD0\u884C\u811A\u672C\u5C06\u5176\u5E94\u7528\u4E8E\u96C6\u5408\uFF0C\u5E76\u901A\u8FC7\u63D2\u5165\u4E0D\u7B26\u5408\u6A21\u578B\u5B9A\u4E49\u7684\u6587\u6863\u6765\u6D4B\u8BD5\u6A21\u578B\u6821\u9A8C\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636E\u5E93\u7528\u6237\u6743\u9650",children:"\u6570\u636E\u5E93\u7528\u6237\u6743\u9650"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u66F4\u65B0\u4EFB\u4F55\u6570\u636E\u5E93\u96C6\u5408\u7684\u9A8C\u8BC1\u5668\uFF0C\u60A8\u7684\u6570\u636E\u5E93\u7528\u6237\u5FC5\u987B\u5177\u6709\u7BA1\u7406\u5458\u6743\u9650\u3002\u8BF7\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u786E\u4FDD\u60A8\u7684\u7528\u6237\u5177\u6709\u6B63\u786E\u7684\u6743\u9650\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6253\u5F00 ",(0,r.jsx)(n.a,{href:"https://cloud.mongodb.com?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=developer.day&utm_term=project.phoenix",children:"Atlas UI"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u5DE6\u4FA7\u83DC\u5355\u4E2D\uFF0C\u5BFC\u822A\u5230 ",(0,r.jsx)(n.strong,{children:"Network Settings"})," \u5E76\u9009\u62E9 ",(0,r.jsx)(n.strong,{children:"Database Access"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u5217\u8868\u4E2D\u627E\u5230\u60A8\u7684\u6570\u636E\u5E93\u7528\u6237\u3002\u68C0\u67E5 ",(0,r.jsx)(n.strong,{children:"MongoDB Roles"})," \u5217\u4E2D\u7528\u6237\u7684\u89D2\u8272\u3002\u5982\u679C\u89D2\u8272\u4E0D\u662F ",(0,r.jsx)(n.strong,{children:"atlasAdmin@admin"}),"\uFF0C\u60A8\u9700\u8981\u66F4\u65B0\u5B83\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u89D2\u8272\u4E0D\u662F ",(0,r.jsx)(n.strong,{children:"atlasAdmin@admin"}),"\uFF0C\u8BF7\u70B9\u51FB\u7528\u6237\u65C1\u8FB9\u7684 ",(0,r.jsx)(n.strong,{children:"Edit"})," \u6309\u94AE\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5411\u4E0B\u6EDA\u52A8\u5230 ",(0,r.jsx)(n.strong,{children:"Database User Privileges"})," \u90E8\u5206\u5E76\u5C55\u5F00 ",(0,r.jsx)(n.strong,{children:"Built-in Role"})," \u4E0B\u62C9\u83DC\u5355\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4ECE\u4E0B\u62C9\u83DC\u5355\u4E2D\u9009\u62E9 ",(0,r.jsx)(n.strong,{children:"Atlas admin"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,r.jsx)(n.strong,{children:"Update User"})," \u4FDD\u5B58\u66F4\u6539\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Atlas \u4F1A\u5728\u51E0\u79D2\u949F\u5185\u90E8\u7F72\u66F4\u6539\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u63A2\u7D22-json-\u6A21\u5F0F",children:"\u63A2\u7D22 JSON \u6A21\u5F0F"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u7684 JSON \u6A21\u5F0F\u5B58\u50A8\u5728 ",(0,r.jsx)(n.code,{children:"server/src/schema-validation/apply-schema.ts"})," ",(0,r.jsx)(n.a,{href:"https://github.com/mongodb-developer/library-management-system/blob/main/server/src/schema-validation/apply-schema.ts",children:"\u6587\u4EF6"}),"\u4E2D\u3002\u5728\u60A8\u7684 GitHub Codespace \u4E2D\u6253\u5F00\u8BE5\u6587\u4EF6\u5E76\u68C0\u67E5\u6A21\u5F0F\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const userSchema = {\n    bsonType: 'object',\n    required: ['name', 'isAdmin'],\n    properties: {\n        name: {\n            bsonType: 'string',\n            minLength: 5,\n            description: 'must be a string and is required'\n        },\n        isAdmin: {\n            bsonType: 'bool',\n            description: 'must be a boolean and is required'\n        }\n    }\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u6A21\u5F0F\u5B9A\u4E49\u4E86\u4EE5\u4E0B\u7EA6\u675F\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5FC5\u586B\u5B57\u6BB5\u662F ",(0,r.jsx)(n.code,{children:"name"})," \u548C ",(0,r.jsx)(n.code,{children:"isAdmin"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," \u5B57\u6BB5\u5FC5\u987B\u662F\u957F\u5EA6\u81F3\u5C11\u4E3A 5 \u4E2A\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isAdmin"})," \u5B57\u6BB5\u5FC5\u987B\u662F\u5E03\u5C14\u503C\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u63A2\u7D22\u5E94\u7528\u6A21\u5F0F\u7684\u811A\u672C",children:"\u63A2\u7D22\u5E94\u7528\u6A21\u5F0F\u7684\u811A\u672C"}),"\n",(0,r.jsxs)(n.p,{children:["\u68C0\u67E5 ",(0,r.jsx)(n.code,{children:"apply-schema.ts"})," \u6587\u4EF6\u4E2D\u6A21\u5F0F\u5B9A\u4E49\u4E4B\u540E\u7684\u4EE3\u7801\u884C\u3002\u60A8\u5C06\u770B\u5230\u4E00\u4E2A\u5C06\u6A21\u5F0F\u5E94\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u7684\u51FD\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"console.log('Applying schema validation for users...');\nconst resultUsers = await db.command({\n    collMod: 'users',\n    validator: {\n        $jsonSchema: userSchema\n    },\n    validationLevel: 'strict',\n    validationAction: 'error'\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE5\u51FD\u6570\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"db.command()"})," \u65B9\u6CD5\u5C06\u6A21\u5F0F\u5E94\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"collMod"})," \u9009\u9879\u6307\u5B9A\u8981\u5E94\u7528\u6A21\u5F0F\u7684\u96C6\u5408\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"validator"})," \u9009\u9879\u6307\u5B9A\u7528\u4E8E\u9A8C\u8BC1\u7684 JSON \u6A21\u5F0F\u3002\u8FD9\u662F\u4E0A\u9762\u58F0\u660E\u7684 ",(0,r.jsx)(n.code,{children:"userSchema"})," \u5BF9\u8C61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"validationLevel"})," \u9009\u9879\u6307\u5B9A\u8981\u6267\u884C\u7684\u9A8C\u8BC1\u7EA7\u522B\u3002\u8FD9\u53EF\u4EE5\u662F ",(0,r.jsx)(n.code,{children:"strict"})," \u6216 ",(0,r.jsx)(n.code,{children:"moderate"}),"\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"strict"}),"\uFF0C\u6587\u6863\u53EA\u6709\u5728\u901A\u8FC7\u9A8C\u8BC1\u65F6\u624D\u4F1A\u88AB\u63D2\u5165\u548C\u66F4\u65B0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"moderate"}),"\uFF0C\u96C6\u5408\u4E2D\u73B0\u6709\u6587\u6863\u7684\u66F4\u65B0\u5C06\u4E0D\u68C0\u67E5\u5176\u662F\u5426\u7B26\u5408\u9A8C\u8BC1\u89C4\u5219\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u540E\uFF0C",(0,r.jsx)(n.code,{children:"validationAction"})," \u9009\u9879\u6307\u5B9A\u5728\u6587\u6863\u9A8C\u8BC1\u5931\u8D25\u65F6\u91C7\u53D6\u7684\u64CD\u4F5C\u3002\u8FD9\u53EF\u4EE5\u662F ",(0,r.jsx)(n.code,{children:"error"})," \u6216 ",(0,r.jsx)(n.code,{children:"warn"}),"\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"error"}),"\uFF0CMongoDB \u4F1A\u62D2\u7EDD\u4EFB\u4F55\u8FDD\u53CD\u9A8C\u8BC1\u6807\u51C6\u7684\u63D2\u5165\u6216\u66F4\u65B0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"warn"}),"\uFF0C\u64CD\u4F5C\u4F1A\u7EE7\u7EED\u8FDB\u884C\uFF0C\u4F46\u8FDD\u89C4\u884C\u4E3A\u4F1A\u8BB0\u5F55\u5728 MongoDB \u65E5\u5FD7\u4E2D\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5C06\u6A21\u578B\u5E94\u7528\u4E8E-users-\u96C6\u5408",children:["\u5C06\u6A21\u578B\u5E94\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408"]}),"\n",(0,r.jsxs)(n.p,{children:["\u60A8\u9700\u8981\u8FD0\u884C\u811A\u672C\u5C06\u6A21\u578B\u5E94\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u60A8\u7684 GitHub Codespace \u4E2D\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\u4EFF\u771F\u5668\u6807\u7B7E\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5B9A\u4F4D\u5E95\u90E8\u9762\u677F\u5E76\u70B9\u51FB ",(0,r.jsx)(n.code,{children:"TERMINAL"})," \u6807\u7B7E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5B9A\u4F4D\u7EC8\u7AEF\u9762\u677F\u53F3\u4E0A\u89D2\u7684 ",(0,r.jsx)(n.code,{children:"+"})," \u56FE\u6807\uFF0C\u70B9\u51FB\u5B83\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\u6807\u7B7E\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u70B9\u51FB\u65B0\u7684\u7EC8\u7AEF\u6807\u7B7E\u6FC0\u6D3B\u5B83\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5C06\u6A21\u5F0F\u5E94\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cd server\nnode dist/schema-validation/apply-schema.js \n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u60A8\u53EF\u80FD\u4F1A\u88AB\u63D0\u793A\u5141\u8BB8\u7C98\u8D34\u5230\u7EC8\u7AEF\u3002\u70B9\u51FB ",(0,r.jsx)(n.strong,{children:"Allow"})," \u4EE5\u7C98\u8D34\u547D\u4EE4\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6309\u56DE\u8F66\u952E\u8FD0\u884C\u547D\u4EE4\u3002\u51E0\u79D2\u949F\u540E\uFF0C\u60A8\u5E94\u8BE5\u4F1A\u770B\u5230\u4EE5\u4E0B\u8F93\u51FA\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"Connecting to MongoDB Atlas...\nConnected!\n\nApplying schema validation for users...\nSchema validation enabled!\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u770B\u5230\u4E0E\u7528\u6237\u6743\u9650\u76F8\u5173\u7684\u9519\u8BEF\uFF0C\u8BF7\u8FD4\u56DE\u5230",(0,r.jsx)(n.a,{href:"#database-user-permissions",children:"\u6570\u636E\u5E93\u7528\u6237\u6743\u9650"}),"\u90E8\u5206\u5E76\u66F4\u65B0\u60A8\u7684\u7528\u6237\u6743\u9650\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u6D4B\u8BD5\u6A21\u578B\u9A8C\u8BC1",children:"\u6D4B\u8BD5\u6A21\u578B\u9A8C\u8BC1"}),"\n",(0,r.jsxs)(n.p,{children:["\u73B0\u5728\u5DF2\u7ECF\u4E3A ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u542F\u7528\u4E86\u6A21\u578B\u6821\u9A8C\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u63D2\u5165\u4E0D\u7B26\u5408\u6A21\u578B\u7684\u6587\u6863\u6765\u6D4B\u8BD5\u5B83\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6253\u5F00 ",(0,r.jsx)(n.a,{href:"https://cloud.mongodb.com?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=developer.day&utm_term=project.phoenix",children:"Atlas UI"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u60A8\u7684\u96C6\u7FA4\u4E0B\u70B9\u51FB ",(0,r.jsx)(n.strong,{children:"Browse Collections"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5BFC\u822A\u5230 ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408 \u2014\u2014 \u5B83\u662F\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u96C6\u5408\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u70B9\u51FB\u53F3\u4FA7\u7684 ",(0,r.jsx)(n.strong,{children:"Insert Document"})," \u6309\u94AE\uFF0C\u7136\u540E\u70B9\u51FB ",(0,r.jsx)(n.strong,{children:"Insert"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u60A8\u5E94\u8BE5\u4F1A\u770B\u5230\u4E00\u6761\u9519\u8BEF\u6D88\u606F\u3002\u5728\u9519\u8BEF\u6D88\u606F\u7684\u6700\u5E95\u90E8\uFF0C\u60A8\u5E94\u8BE5\u4F1A\u770B\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'"schemaRulesNotSatisfied": [{\n    "operatorName": "required",\n    "specifiedAs": {"required": ["name","isAdmin"]},\n    "missingProperties": ["isAdmin","name"]\n}]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u9519\u8BEF\u63CF\u8FF0\u4E86 ",(0,r.jsx)(n.code,{children:"name"})," \u548C ",(0,r.jsx)(n.code,{children:"isAdmin"})," \u5B57\u6BB5\u662F\u5FC5\u9700\u7684\uFF0C\u4F46\u5728\u60A8\u5C1D\u8BD5\u63D2\u5165\u7684\u6587\u6863\u4E2D\u7F3A\u5931\u4E86\u8FD9\u4E9B\u5B57\u6BB5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u518D\u6B21\u63D2\u5165\u5305\u542B ",(0,r.jsx)(n.code,{children:"name"})," \u548C ",(0,r.jsx)(n.code,{children:"isAdmin"})," \u5B57\u6BB5\u7684\u6587\u6863\uFF0C\u60A8\u5E94\u8BE5\u4F1A\u770B\u5230\u6587\u6863\u6210\u529F\u63D2\u5165\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u63A2\u7D22\u4E86 ",(0,r.jsx)(n.code,{children:"users"})," \u96C6\u5408\u7684 JSON \u6A21\u578B\uFF0C\u8FD0\u884C\u4E86\u4E00\u4E2A\u811A\u672C\u5C06\u6A21\u578B\u5E94\u7528\u5230\u96C6\u5408\uFF0C\u5E76\u901A\u8FC7\u63D2\u5165\u4E0D\u7B26\u5408\u6A21\u578B\u7684\u6587\u6863\u6D4B\u8BD5\u4E86\u6A21\u578B\u9A8C\u8BC1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4E0B\u4E00\u4E2A\u7EC3\u4E60\u4E2D\uFF0C\u60A8\u5C06\u4E3A ",(0,r.jsx)(n.code,{children:"authors"})," \u96C6\u5408\u542F\u7528\u6A21\u578B\u9A8C\u8BC1\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},65:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var i=s(7294);let r={},l=i.createContext(r);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);