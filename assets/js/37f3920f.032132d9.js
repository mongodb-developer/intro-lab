"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[334],{3109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(5893),s=n(1151),a=n(7004);const i={},r="\ud83d\udc50 Start the application",c={id:"demo-app/start-app",title:"\ud83d\udc50 Start the application",description:"Go to the Github repository for the demo application. From there, you have two options to start the application.",source:"@site/docs/50-demo-app/2-start-app.mdx",sourceDirName:"50-demo-app",slug:"/demo-app/start-app",permalink:"/intro-lab/docs/demo-app/start-app",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/50-demo-app/2-start-app.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 The Library Management System Application",permalink:"/intro-lab/docs/demo-app/intro"},next:{title:"\ud83d\udc50 Configure the Application",permalink:"/intro-lab/docs/demo-app/configure"}},l={},p=[{value:"Option 1: Run in a Codespace",id:"option-1-run-in-a-codespace",level:2},{value:"Expose the server port",id:"expose-the-server-port",level:3},{value:"\ud83e\uddb8 Option 2: Run locally",id:"-option-2-run-locally",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"-start-the-application",children:"\ud83d\udc50 Start the application"}),"\n",(0,o.jsxs)(t.p,{children:["Go to the ",(0,o.jsx)(t.a,{href:"https://github.com/mongodb-developer/library-management-system",children:"Github repository"})," for the demo application. From there, you have two options to start the application."]}),"\n",(0,o.jsx)(t.h2,{id:"option-1-run-in-a-codespace",children:"Option 1: Run in a Codespace"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["\ud83d\ude80 ",(0,o.jsxs)(t.strong,{children:["Express start: just ",(0,o.jsx)(t.a,{href:"https://github.com/codespaces/new/mongodb-developer/library-management-system?quickstart=1",children:"click here"})," to start a new Codespace or resume your last one!"]})]})}),"\n",(0,o.jsx)(t.p,{children:"By far, the easiest way to start the application is to run it in a Codespace. A Codespace is a cloud-hosted, containerized development environment that you can connect to from Visual Studio Code. It comes pre-configured with all the tools you need to build and run the application."}),"\n",(0,o.jsx)(t.p,{children:"In the case of this application, you can even use the online IDE to edit the code and see the changes reflected in the running application."}),"\n",(0,o.jsxs)(t.p,{children:["To start the application in a Codespace, click on the ",(0,o.jsx)(t.em,{children:"Code"})," button. Then, look for the ",(0,o.jsx)(t.em,{children:"Codespaces"})," tab. Click on the ",(0,o.jsx)(t.em,{children:"Create Codespace on main"})," button. This will create a new Codespace for you and start the application."]}),"\n",(0,o.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/2-start-app/1-codespace.png",alt:"Screenshot of the create codespace button"}),"\n",(0,o.jsx)(t.p,{children:"Let it run for a few seconds as it prepares your environment. It will clone the repository, prepare the containers, and run the installation scripts. Once it's ready, you'll see an IDE, with a preview window that shows the running application."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Again, this might take a few minutes, it's a great time to grab a coffee \u2615\ufe0f"})}),"\n",(0,o.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/2-start-app/2-codespace.png",alt:"Screenshot of the codespace"}),"\n",(0,o.jsx)(t.h3,{id:"expose-the-server-port",children:"Expose the server port"}),"\n",(0,o.jsx)(t.p,{children:"In order to get the application working in that environment, there is one small change you need to make to the codespace. You need to expose the port where the server is running."}),"\n",(0,o.jsxs)(t.p,{children:["Look for the ",(0,o.jsx)(t.em,{children:"Ports"})," tab in the bottom of the IDE."]}),"\n",(0,o.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/2-start-app/3-ports.png",alt:"Screenshot of the Ports tab"}),"\n",(0,o.jsxs)(t.p,{children:["Once you click on the tab, you'll see a list of ports. Right-click on the port ",(0,o.jsx)(t.code,{children:"Server (5000)"})," row. Then select ",(0,o.jsx)(t.em,{children:"Port Visibility"})," and then ",(0,o.jsx)(t.em,{children:"Public"}),"."]}),"\n",(0,o.jsx)(a.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/2-start-app/4-port-visibility.png",alt:"Screenshot of the Port Visibility menu"}),"\n",(0,o.jsxs)(t.p,{children:["You'll see the text in the ",(0,o.jsx)(t.em,{children:"Visibility"})," column change to ",(0,o.jsx)(t.code,{children:"Public"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"That's it, you're now ready to move to the next section."}),"\n",(0,o.jsx)(t.h2,{id:"-option-2-run-locally",children:"\ud83e\uddb8 Option 2: Run locally"}),"\n",(0,o.jsx)(t.p,{children:"If you prefer to run the application locally, you can do so by following these steps. Keep in mind that the following steps of this lab will be using the Codespace, so you might need to adapt some of the commands."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["During the lab we will use GitHub Codespaces, these instructions are here just in case you can't use Codespaces or you ",(0,o.jsx)(t.em,{children:"really really really"})," want a local installation."]})}),"\n",(0,o.jsx)(t.p,{children:"First, clone the repository to your local machine."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:mongodb-developer/library-management-system.git\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then, change to the ",(0,o.jsx)(t.code,{children:"library-management-system"})," directory."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd library-management-system\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now go to each of the ",(0,o.jsx)(t.code,{children:"client"})," and ",(0,o.jsx)(t.code,{children:"server"})," directories and install the dependencies."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd client\nnpm install\ncd ../server\nnpm install\n"})}),"\n",(0,o.jsx)(t.p,{children:"Start the server application."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,o.jsx)(t.p,{children:"And, in another terminal window, start the client application."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd client\nnpm start\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You now have the client running on ",(0,o.jsx)(t.a,{href:"http://localhost:4200",children:"http://localhost:4200"}),", and the server running on ",(0,o.jsx)(t.a,{href:"http://localhost:5000",children:"http://localhost:5000"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7004:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(5893);function s(e){const t=e.url||"http://localhost:3000";return(0,o.jsxs)("div",{className:"browser container",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"column left",children:[(0,o.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,o.jsx)("div",{className:"column middle",children:(0,o.jsx)("input",{type:"text",value:t})}),(0,o.jsx)("div",{className:"column right",children:(0,o.jsxs)("div",{style:{float:"right"},children:[(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"})]})})]}),(0,o.jsx)("div",{className:"content",children:e.children})]})}var a=n(9524);function i(e){return(0,o.jsx)(s,{...e,children:(0,o.jsx)("img",{src:(0,a.Z)(e.src),alt:e.alt})})}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);