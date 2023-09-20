"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[953],{4137:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>h});var a=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var o=a.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=u(e.components);return a.createElement(i.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},p=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=n,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(h,l(l({ref:o},c),{},{components:t})):a.createElement(h,l({ref:o},c))}));function h(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1794:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7462),n=(t(7294),t(4137));const r={},l="\ud83d\udcd8 What is MongoDB Atlas",s={unversionedId:"mongodb-atlas/what-is-mongodb",id:"mongodb-atlas/what-is-mongodb",title:"\ud83d\udcd8 What is MongoDB Atlas",description:"MongoDB comes in many different flavors.  The most common is the open-source version that you can download and install on your computer.  However, there is also a cloud-based version of MongoDB that you can use.  This cloud offering is called MongoDB Atlas.",source:"@site/docs/20-mongodb-atlas/1-what-is-mongodb.mdx",sourceDirName:"20-mongodb-atlas",slug:"/mongodb-atlas/what-is-mongodb",permalink:"/intro-lab/docs/mongodb-atlas/what-is-mongodb",draft:!1,editUrl:"https://github.com/mongodb-developer/intro-lab/blob/main/docs/20-mongodb-atlas/1-what-is-mongodb.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB Atlas",permalink:"/intro-lab/docs/category/mongodb-atlas"},next:{title:"\ud83d\udc50 Create your account",permalink:"/intro-lab/docs/mongodb-atlas/create-account"}},i={},u=[{value:"Why use MongoDB Atlas?",id:"why-use-mongodb-atlas",level:2},{value:"Where is MongoDB Atlas deployed?",id:"where-is-mongodb-atlas-deployed",level:2},{value:"How much does MongoDB Atlas cost?",id:"how-much-does-mongodb-atlas-cost",level:2}],c={toc:u},d="wrapper";function m(e){let{components:o,...t}=e;return(0,n.kt)(d,(0,a.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-what-is-mongodb-atlas"},"\ud83d\udcd8 What is MongoDB Atlas"),(0,n.kt)("p",null,"MongoDB comes in many different flavors.  The most common is the open-source version that you can download and install on your computer.  However, there is also a cloud-based version of MongoDB that you can use.  This cloud offering is called MongoDB Atlas."),(0,n.kt)("p",null,"In this lab, you will learn how to create a MongoDB Atlas account and how to create a cluster.  You will also learn how to connect to your cluster from an application that runs in the cloud."),(0,n.kt)("h2",{id:"why-use-mongodb-atlas"},"Why use MongoDB Atlas?"),(0,n.kt)("p",null,"There are many reasons why you might want to use MongoDB Atlas, but most of all, it's by far the easiest way to get started with MongoDB."),(0,n.kt)("p",null,"On top of that, MongoDB Atlas offers a lot of features that you would otherwise have to set up yourself.  For example, MongoDB Atlas offers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Atlas Search - a powerful search engine that allows you to search through your data"),(0,n.kt)("li",{parentName:"ul"},"Atlas Data Federation - a way to query data that is stored in AWS S3 or Google Cloud Storage"),(0,n.kt)("li",{parentName:"ul"},"Atlas Vector Search - a way to augment your data with AI/mostly")),(0,n.kt)("h2",{id:"where-is-mongodb-atlas-deployed"},"Where is MongoDB Atlas deployed?"),(0,n.kt)("p",null,"You can choose the cloud provider and the region where your MongoDB Atlas cluster is deployed.  MongoDB Atlas is available in all major cloud providers, including AWS, Azure, and Google Cloud."),(0,n.kt)("p",null,"It is also available in many regions around the world.  You can choose the region that is closest to you or the region that is closest to your users."),(0,n.kt)("p",null,"You can also use MongoDB Atlas directly from your cloud provider of choice by installing it from the marketplace. This will simplify all the billing and management of your MongoDB Atlas cluster."),(0,n.kt)("h2",{id:"how-much-does-mongodb-atlas-cost"},"How much does MongoDB Atlas cost?"),(0,n.kt)("p",null,"MongoDB Atlas is free to use for learning and development.  You can create a free cluster and use it for as long as you want.  You can also create as many free clusters as you want."))}m.isMDXComponent=!0}}]);