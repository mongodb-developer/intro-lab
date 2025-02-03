"use strict";(self.webpackChunkintro_lab=self.webpackChunkintro_lab||[]).push([["8253"],{7904:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"troubleshooting/connection-string-issues","title":"\u2139\uFE0F Connection Issues","description":"It is not uncommon for the application to fail to launch or be viewed in GitHub Codespaces. Here are some common solutions to problems encountered while launching the Library Management Application in codespaces.","source":"@site/docs/80-troubleshooting/1-connection-string-issues.mdx","sourceDirName":"80-troubleshooting","slug":"/troubleshooting/connection-string-issues","permalink":"/intro-lab/docs/troubleshooting/connection-string-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/intro-lab/blob/main/docs/80-troubleshooting/1-connection-string-issues.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshooting the application","permalink":"/intro-lab/docs/category/troubleshooting-the-application"},"next":{"title":"\u2139\uFE0F GitHub Codespaces Issues","permalink":"/intro-lab/docs/troubleshooting/github-codespaces-wont-launch copy"}}'),o=s("5893"),r=s("65");let t={},c="\u2139\uFE0F Connection Issues",l={},d=[{value:"<strong>Troubleshooting Guide: Atlas URI Connection Issues</strong>",id:"troubleshooting-guide-atlas-uri-connection-issues",level:3},{value:"<strong>Problem:</strong>",id:"problem",level:4},{value:"<strong>Common Causes:</strong>",id:"common-causes",level:4},{value:"<strong>Solutions:</strong>",id:"solutions",level:4},{value:"<strong>1. Verify the Atlas Connection String</strong>",id:"1-verify-the-atlas-connection-string",level:3},{value:"<strong>2. Configure the Connection String in Your Application</strong>",id:"2-configure-the-connection-string-in-your-application",level:3},{value:"<strong>3. Check for Common Errors in Connection String</strong>",id:"3-check-for-common-errors-in-connection-string",level:3},{value:"<strong>4. Test the Connection</strong>",id:"4-test-the-connection",level:3},{value:"<strong>Resources and Further Assistance</strong>",id:"resources-and-further-assistance",level:3},{value:"Summary",id:"summary",level:2}];function h(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u2139\uFE0F-connection-issues",children:"\u2139\uFE0F Connection Issues"})}),"\n",(0,o.jsx)(e.p,{children:"It is not uncommon for the application to fail to launch or be viewed in GitHub Codespaces. Here are some common solutions to problems encountered while launching the Library Management Application in codespaces."}),"\n",(0,o.jsx)(e.h3,{id:"troubleshooting-guide-atlas-uri-connection-issues",children:(0,o.jsx)(e.strong,{children:"Troubleshooting Guide: Atlas URI Connection Issues"})}),"\n",(0,o.jsx)(e.h4,{id:"problem",children:(0,o.jsx)(e.strong,{children:"Problem:"})}),"\n",(0,o.jsx)(e.p,{children:"Users are unable to connect the Library Management Application to the Atlas cluster due to a missing or misconfigured Atlas URI connection string."}),"\n",(0,o.jsx)(e.h4,{id:"common-causes",children:(0,o.jsx)(e.strong,{children:"Common Causes:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"The connection string is not correctly copied from the Atlas cluster."}),"\n",(0,o.jsx)(e.li,{children:"The connection string is missing from the application configuration."}),"\n",(0,o.jsx)(e.li,{children:"Incorrect formatting or missing credentials in the connection string."}),"\n",(0,o.jsxs)(e.li,{children:["Complex passwords (those passwords containing special characters). Avoid these - for this lab, please keep passwords simple. Alternatively, if you must have a special character in your password, please make sure you URL Encode the password. You can use ",(0,o.jsx)(e.a,{href:"https://www.url-encode-decode.com/",children:"this tool to accomplish this"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h4,{id:"solutions",children:(0,o.jsx)(e.strong,{children:"Solutions:"})}),"\n",(0,o.jsx)(e.h3,{id:"1-verify-the-atlas-connection-string",children:(0,o.jsx)(e.strong,{children:"1. Verify the Atlas Connection String"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Step-by-Step Guide:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Access Your Atlas Cluster:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Log in to your MongoDB Atlas account."}),"\n",(0,o.jsxs)(e.li,{children:["Navigate to the ",(0,o.jsx)(e.strong,{children:"Clusters"})," view."]}),"\n",(0,o.jsxs)(e.li,{children:["Click on the ",(0,o.jsx)(e.strong,{children:"Connect"})," button for your desired cluster."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Copy the Connection String:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["In the ",(0,o.jsx)(e.strong,{children:"Connect to Cluster"})," dialog, select the ",(0,o.jsx)(e.strong,{children:'"Connect your application"'})," option."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Ensure the connection string is for ",(0,o.jsx)(e.strong,{children:'"Standard connection string (SRV)"'})," format."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Copy the provided connection string. It should look something like this:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"2-configure-the-connection-string-in-your-application",children:(0,o.jsx)(e.strong,{children:"2. Configure the Connection String in Your Application"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Step-by-Step Guide:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Locate Configuration File:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Open the ",(0,o.jsx)(e.code,{children:".env"})," file for your Library Management Application."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.strong,{children:["Update the ",(0,o.jsx)(e.code,{children:".env"})," File:"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Paste the connection string into the ",(0,o.jsx)(e.code,{children:".env"})," file, replacing the placeholder values (",(0,o.jsx)(e.code,{children:"<username>"}),", ",(0,o.jsx)(e.code,{children:"<password>"}),", ",(0,o.jsx)(e.code,{children:"<dbname>"}),") with your actual MongoDB Atlas credentials and database name."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Example of a correctly formatted ",(0,o.jsx)(e.code,{children:".env"})," file:"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"PORT=5000   DATABASE_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net   DATABASE_NAME=library   SECRET=yourSecret"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Save and Restart:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Save the ",(0,o.jsx)(e.code,{children:".env"})," file."]}),"\n",(0,o.jsx)(e.li,{children:"Restart your application to apply the changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"3-check-for-common-errors-in-connection-string",children:(0,o.jsx)(e.strong,{children:"3. Check for Common Errors in Connection String"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Step-by-Step Guide:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Validate Credentials:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Ensure the username and password in the connection string are correct."}),"\n",(0,o.jsx)(e.li,{children:"Verify that the user has the necessary permissions to access the database."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Format Verification:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Ensure the connection string follows the correct format:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"mongodb+srv://username:password@cluster.mongodb.net"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Common mistakes include:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Missing ",(0,o.jsx)(e.code,{children:"mongodb+srv://"})," at the beginning."]}),"\n",(0,o.jsxs)(e.li,{children:["Incorrect placement of colons ",(0,o.jsx)(e.code,{children:":"})," and at-sign ",(0,o.jsx)(e.code,{children:"@"}),"."]}),"\n",(0,o.jsx)(e.li,{children:"Spaces or typos within the string."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Network Access:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Ensure your IP address is whitelisted in the Atlas Network Access settings."}),"\n",(0,o.jsxs)(e.li,{children:["Navigate to ",(0,o.jsx)(e.strong,{children:"Network Access"})," in the Atlas UI and add your current IP address if it\u2019s not already listed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"4-test-the-connection",children:(0,o.jsx)(e.strong,{children:"4. Test the Connection"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Step-by-Step Guide:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Run a Connection Test:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Use a MongoDB client (e.g., MongoDB Compass, ",(0,o.jsx)(e.code,{children:"mongo"})," shell) to test the connection string."]}),"\n",(0,o.jsx)(e.li,{children:"If the connection is successful, it confirms that the string is correctly formatted."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Review Error Messages:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Check the logs of your Library Management Application for any error messages."}),"\n",(0,o.jsx)(e.li,{children:'Common errors might indicate issues like "Authentication failed," "Network timeout," or "Unknown host."'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"resources-and-further-assistance",children:(0,o.jsx)(e.strong,{children:"Resources and Further Assistance"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"MongoDB Atlas Documentation:"})," ",(0,o.jsx)(e.a,{href:"https://docs.atlas.mongodb.com/connect-to-cluster/",children:"Connect to Your Cluster"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Library Management Application Loader Script:"})," ",(0,o.jsx)(e.a,{href:"https://library-scripts-ofiejy7uia-uc.a.run.app/",children:"Loader Script"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(e.p,{children:"In this section, you explored commonly occuring connection issues and their resolutions. Don't hesitate to ask the instructor for assistance if these solutions do not resolve the problem."})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},65:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return t}});var i=s(7294);let o={},r=i.createContext(o);function t(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);