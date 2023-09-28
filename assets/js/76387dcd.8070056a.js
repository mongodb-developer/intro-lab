"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[394],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7004:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function o(e){const t=e.url||"http://localhost:3000";return r.createElement("div",{className:"browser container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"column left"},r.createElement("span",{className:"dot",style:{background:"#ED594A"}}),r.createElement("span",{className:"dot",style:{background:"#FDD800"}}),r.createElement("span",{className:"dot",style:{background:"#5AC05A"}})),r.createElement("div",{className:"column middle"},r.createElement("input",{type:"text",value:t})),r.createElement("div",{className:"column right"},r.createElement("div",{style:{float:"right"}},r.createElement("span",{className:"bar"}),r.createElement("span",{className:"bar"}),r.createElement("span",{className:"bar"})))),r.createElement("div",{className:"content"},e.children))}var a=n(9524);function i(e){return r.createElement(o,e,r.createElement("img",{src:(0,a.Z)(e.src),alt:e.alt}))}},6484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(4137)),a=n(7004);const i={},l="\ud83d\udc50 Configure the Application",c={unversionedId:"demo-app/configure",id:"demo-app/configure",title:"\ud83d\udc50 Configure the Application",description:"Now that your environment is set up, you can configure the application.",source:"@site/docs/50-demo-app/3-configure.mdx",sourceDirName:"50-demo-app",slug:"/demo-app/configure",permalink:"/intro-lab/docs/demo-app/configure",draft:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/50-demo-app/3-configure.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Start the application",permalink:"/intro-lab/docs/demo-app/start-app"},next:{title:"\ud83c\udfaf Summary",permalink:"/intro-lab/docs/summary"}},p={},s=[{value:"Reload the client",id:"reload-the-client",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-configure-the-application"},"\ud83d\udc50 Configure the Application"),(0,o.kt)("p",null,"Now that your environment is set up, you can configure the application."),(0,o.kt)("p",null,"There should already be a file open in the IDE. If not, look in the file explorer on the left, and open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"server/.env"),". This file contains the configuration for the application."),(0,o.kt)("p",null,"The file should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'PORT=5000\nDATABASE_URI="mongodb+srv://user:password@serverurl"\nDATABASE_NAME="library"\nSECRET="secret"\n')),(0,o.kt)("p",null,"You'll need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URI")," parameter to match your connection string. That's the same one you used to import the data."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Don't remember how to get your connection string? Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/importing-data/import-data"},"Import Data")," section.")),(0,o.kt)("p",null,"Copy and paste your connection string into the ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URI")," parameter. The file will automatically save, and the server will restart."),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"Terminal")," tab at the bottom, look for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Server is running on port: 5000")," line. If you see it, you're good to go!"),(0,o.kt)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/1-running.png",alt:"Screenshot of the terminal panel",mdxType:"Screenshot"}),(0,o.kt)("h2",{id:"reload-the-client"},"Reload the client"),(0,o.kt)("p",null,"Now that the server is running, you can reload the client to see the application."),(0,o.kt)("p",null,"In the upper right panel, click the refresh icon to reload the client."),(0,o.kt)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/2-reload.png",alt:"Screenshot of the refresh icon",mdxType:"Screenshot"}),(0,o.kt)("p",null,"Clicking this will reload the client, which should now be connected to the database. You should see the application with some books listed now."))}d.isMDXComponent=!0}}]);