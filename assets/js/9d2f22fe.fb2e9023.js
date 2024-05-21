"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[204],{3641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=t(5893),s=t(1151);const o={},l="\ud83d\udc50 Enable validation for the users collection",c={id:"schema-validation/validate-users",title:"\ud83d\udc50 Enable validation for the users collection",description:"In this exercise, you will explore the pre-written JSON validation schema for the users collection, run a script to apply it to the collection, and test the schema validation by inserting a document that does not match the schema.",source:"@site/docs/60-schema-validation/1-validate-users.mdx",sourceDirName:"60-schema-validation",slug:"/schema-validation/validate-users",permalink:"/intro-lab/docs/schema-validation/validate-users",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/60-schema-validation/1-validate-users.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 What is Schema Validation, and Why?",permalink:"/intro-lab/docs/schema-validation/what-is-schema-validation"},next:{title:"\ud83e\uddb8\u200d\u2640\ufe0f Enable validation for the authors collection",permalink:"/intro-lab/docs/schema-validation/validate-authors"}},a={},r=[{value:"Explore the JSON Schema",id:"explore-the-json-schema",level:2},{value:"Explore the script to apply the schema",id:"explore-the-script-to-apply-the-schema",level:2},{value:"Apply the schema to the <code>users</code> collection",id:"apply-the-schema-to-the-users-collection",level:2},{value:"Test the schema validation",id:"test-the-schema-validation",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-enable-validation-for-the-users-collection",children:"\ud83d\udc50 Enable validation for the users collection"}),"\n",(0,i.jsxs)(n.p,{children:["In this exercise, you will explore the pre-written JSON validation schema for the ",(0,i.jsx)(n.code,{children:"users"})," collection, run a script to apply it to the collection, and test the schema validation by inserting a document that does not match the schema."]}),"\n",(0,i.jsx)(n.h2,{id:"explore-the-json-schema",children:"Explore the JSON Schema"}),"\n",(0,i.jsxs)(n.p,{children:["The JSON schema for the ",(0,i.jsx)(n.code,{children:"users"})," collection is stored in the ",(0,i.jsx)(n.code,{children:"server/src/schema-validation /apply-schema.ts"})," ",(0,i.jsx)(n.a,{href:"https://github.com/mongodb-developer/library-management-system/blob/main/server/src/schema-validation/apply-schema.ts",children:"file"}),". Open the file in your GitHub Codespace and examine the schema."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const userSchema = {\n    bsonType: 'object',\n    required: ['name', 'isAdmin'],\n    properties: {\n        name: {\n            bsonType: 'string',\n            minLength: 5,\n            description: 'must be a string and is required'\n        },\n        isAdmin: {\n            bsonType: 'bool',\n            description: 'must be a boolean and is required'\n        }\n    }\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The schema defines the following constraints:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The required fields are ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"isAdmin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"name"})," field must be a string with a minimum length of 5 characters."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"isAdmin"})," field must be a boolean."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"explore-the-script-to-apply-the-schema",children:"Explore the script to apply the schema"}),"\n",(0,i.jsxs)(n.p,{children:["Examine the lines immediately following the schema definition in the ",(0,i.jsx)(n.code,{children:"apply-schema.ts"})," file. You will see a function that applies the schema to the ",(0,i.jsx)(n.code,{children:"users"})," collection."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"console.log('Applying schema validation for users...');\nconst resultUsers = await db.command({\n    collMod: 'users',\n    validator: {\n        $jsonSchema: userSchema\n    },\n    validationLevel: 'strict',\n    validationAction: 'error'\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The function uses the ",(0,i.jsx)(n.code,{children:"db.command()"})," method to apply the schema to the ",(0,i.jsx)(n.code,{children:"users"})," collection."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"collMod"})," option specifies the collection to which the schema should be applied."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"validator"})," option specifies the JSON schema to use for validation. This is the ",(0,i.jsx)(n.code,{children:"userSchema"})," object declared just above."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"validationLevel"})," option specifies the level of validation to perform. This could be ",(0,i.jsx)(n.code,{children:"strict"})," or ",(0,i.jsx)(n.code,{children:"moderate"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you set it to ",(0,i.jsx)(n.code,{children:"strict"}),", the document will be inserted and updated only if it passes validation."]}),"\n",(0,i.jsxs)(n.li,{children:["If you set it to ",(0,i.jsx)(n.code,{children:"moderate"})," updates to existing documents in the collection that don't match the validation rules aren't checked for validity."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["And finally, the ",(0,i.jsx)(n.code,{children:"validationAction"})," option specifies the action to take when a document fails validation. This could be ",(0,i.jsx)(n.code,{children:"error"})," or ",(0,i.jsx)(n.code,{children:"warn"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you set it to ",(0,i.jsx)(n.code,{children:"error"}),", MongoDB rejects any insert or update that violates the validation criteria."]}),"\n",(0,i.jsxs)(n.li,{children:["If you set it to ",(0,i.jsx)(n.code,{children:"warn"}),", the operation proceeds, but the violation is recorded in the MongoDB log."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"apply-the-schema-to-the-users-collection",children:["Apply the schema to the ",(0,i.jsx)(n.code,{children:"users"})," collection"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to run the script to apply the schema to the ",(0,i.jsx)(n.code,{children:"users"})," collection."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open a new terminal emulator tab in your GitHub Codespace."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Locate the bottom panel and click on the ",(0,i.jsx)(n.code,{children:"TERMINAL"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["Locate the ",(0,i.jsx)(n.code,{children:"+"})," icon on the top right of the terminal panel and click on it to open a new terminal tab."]}),"\n",(0,i.jsx)(n.li,{children:"Click on the new terminal tab to activate it."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the following command to apply the schema to the ",(0,i.jsx)(n.code,{children:"users"})," collection:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd server\nnode dist/schema-validation/apply-schema.js \n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You might be prompted to allow pasting into the terminal. Click ",(0,i.jsx)(n.code,{children:"Allow"})," to paste the command."]}),"\n",(0,i.jsx)(n.p,{children:"Click enter to run the command. After a few of seconds, you should see the following output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Connecting to MongoDB Atlas...\nConnected!\n\nApplying schema validation for users...\nSchema validation enabled!\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-the-schema-validation",children:"Test the schema validation"}),"\n",(0,i.jsxs)(n.p,{children:["Now that the schema validation is enabled for the ",(0,i.jsx)(n.code,{children:"users"})," collection, you can test it by inserting a document that does not match the schema."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.a,{href:"https://cloud.mongodb.com?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=developer.day&utm_term=project.phoenix",children:"Atlas UI"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Browse Collections"})," under your cluster."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"users"})," collection \u2014 that's the last collection on the list."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Insert Document"})," button on the right and then, click ",(0,i.jsx)(n.code,{children:"Insert"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should see an error message. At the very bottom of the error message, you should see the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'"schemaRulesNotSatisfied": [{\n    "operatorName": "required",\n    "specifiedAs": {"required": ["name","isAdmin"]},\n    "missingProperties": ["isAdmin","name"]\n}]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The error describes that the ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"isAdmin"})," fields are required but missing in the document you tried to insert."]}),"\n",(0,i.jsxs)(n.p,{children:["Insert a document again with the ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"isAdmin"})," fields and you should see the document inserted successfully."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["In this exercise, you explored the JSON schema for the ",(0,i.jsx)(n.code,{children:"users"})," collection, ran a script to apply the schema to the collection, and tested the schema validation by inserting a document that does not match the schema."]}),"\n",(0,i.jsxs)(n.p,{children:["In the next exercise, you will enable schema validation for the ",(0,i.jsx)(n.code,{children:"authors"})," collection."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);