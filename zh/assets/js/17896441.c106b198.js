(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[401],{1243:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});n(6540);var s=n(8215),a=n(7559),o=n(4718),i=n(9169),l=n(8774),c=n(1312),r=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,o.OF)(),t=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},1714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>It});var s=n(6540),a=n(1003),o=n(9532),i=n(4848);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(8215),m=n(4581),h=n(6929);function p(){const{metadata:e}=r();return(0,i.jsx)(h.A,{previous:e.previous,next:e.next})}var f=n(1878),x=n(4267),b=n(7559),g=n(1312),j=n(8774);const v={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,i.jsxs)(j.A,{href:t,title:a,className:(0,u.A)(v.tag,s?v.tagWithCount:v.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const A={tags:"tags_jXut",tag:"tag_QGVx"};function C(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(A.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:A.tag,children:(0,i.jsx)(N,{...e})},e.permalink)))})]})}const y={iconEdit:"iconEdit_Z9Sw"};function k(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(y.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,i.jsxs)(j.A,{to:t,className:b.G.common.editThisPage,children:[(0,i.jsx)(k,{}),(0,i.jsx)(g.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var B=n(4586);function _(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,B.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,B.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function w(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=_({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(g.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function T(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(g.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:b.G.common.lastUpdated,children:[(0,i.jsx)(g.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(w,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(T,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const H={lastUpdated:"lastUpdated_JAkA"};function M(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(L,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",H.lastUpdated),children:(s||a)&&(0,i.jsx)(E,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function I(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,l=!!(t||n||s);return o||l?(0,i.jsxs)("footer",{className:(0,u.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",b.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(C,{tags:a})})}),l&&(0,i.jsx)(M,{className:(0,u.A)("margin-top--sm",b.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var S=n(1422),U=n(6342);function V(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function R(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=R({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function z(e){const t=e.getBoundingClientRect();return t.top===t.bottom?z(e.parentNode):t}function O(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>z(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(z(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function P(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,U.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function G(e){const t=(0,s.useRef)(void 0),n=P();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=O(l,{anchorTopOffset:n.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function D(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(j.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(D,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const W=s.memo(D);function $(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c,...r}=e;const d=(0,U.p)(),u=l??d.tableOfContents.minHeadingLevel,m=c??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>R({toc:V(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return G((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(W,{toc:h,className:n,linkClassName:a,...r})}const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const Z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,S.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(Z.tocCollapsible,!o&&Z.tocCollapsibleExpanded,n),children:[(0,i.jsx)(q,{collapsed:o,onClick:l}),(0,i.jsx)(S.N,{lazy:!0,className:Z.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)($,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const Y={tocMobile:"tocMobile_ITEo"};function K(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(J,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(b.G.docs.docTocMobile,Y.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",ee="table-of-contents__link--active";function te(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(Q.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)($,{...n,linkClassName:X,linkActiveClassName:ee})})}function ne(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(te,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var se=n(1107),ae=n(8453),oe=n(5260),ie=n(2303),le=n(5293);function ce(){const{prism:e}=(0,U.p)(),{colorMode:t}=(0,le.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var re=n(8426),de=n.n(re);const ue=/title=(?<quote>["'])(?<title>.*?)\1/,me=/\{(?<range>[\d,-]+)\}/,he={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},pe={...he,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},fe=Object.keys(he);function xe(e,t){const n=e.map((e=>{const{start:n,end:s}=pe[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function be(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&me.test(o)){const e=o.match(me).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=de()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return xe(["js","jsBlock"],t);case"jsx":case"tsx":return xe(["js","jsBlock","jsx"],t);case"html":return xe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return xe(["bash"],t);case"markdown":case"md":return xe(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return xe(["tex"],t);case"lua":case"haskell":case"sql":return xe(["lua"],t);case"wasm":return xe(["wasm"],t);case"vb":case"vba":case"visual-basic":return xe(["vb","rem"],t);case"vbnet":return xe(["vbnet","rem"],t);case"batch":return xe(["rem"],t);case"basic":return xe(["rem","f90"],t);case"fsharp":return xe(["js","ml"],t);case"ocaml":case"sml":return xe(["ml"],t);case"fortran":return xe(["f90"],t);case"cobol":return xe(["cobol"],t);default:return xe(fe,t)}}(s,a),l=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;de()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const ge={codeBlockContainer:"codeBlockContainer_Ckt0"};function je(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(ce());return(0,i.jsx)(t,{...n,style:s,className:(0,u.A)(n.className,ge.codeBlockContainer,b.G.common.codeBlock)})}const ve={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Ne(e){let{children:t,className:n}=e;return(0,i.jsx)(je,{as:"pre",tabIndex:0,className:(0,u.A)(ve.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:ve.codeBlockLines,children:t})})}const Ae={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ce(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=Ae);const a=(0,o._q)(t),i=(0,o.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var ye=n(8181);const ke={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function Le(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.A)(n,s&&ke.codeLine)}),c=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:ke.codeLineNumber}),(0,i.jsx)("span",{className:ke.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}function Be(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _e(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const we={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Te(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,g.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,g.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,g.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.A)("clean-btn",n,we.copyButton,a&&we.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:we.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Be,{className:we.copyButtonIcon}),(0,i.jsx)(_e,{className:we.copyButtonSuccessIcon})]})})}function Ee(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const He={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Me(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,g.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.A)("clean-btn",t,s&&He.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(Ee,{className:He.wordWrapButtonIcon,"aria-hidden":"true"})})}function Ie(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,U.p)(),m=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=ce(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ce(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){return e?.match(ue)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=be(t,{metastring:a,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(je,{as:"div",className:(0,u.A)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,i.jsx)("div",{className:ve.codeBlockTitle,children:f}),(0,i.jsxs)("div",{className:ve.codeBlockContent,children:[(0,i.jsx)(ye.f4,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.A)(t,ve.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.A)(ve.codeBlockLines,g&&ve.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(Le,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:ve.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(Me,{className:ve.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(Te,{className:ve.codeButton,code:b})]})]})]})}function Se(e){let{children:t,...n}=e;const a=(0,ie.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Ie:Ne;return(0,i.jsx)(l,{...n,children:o},String(a))}function Ue(e){return(0,i.jsx)("code",{...e})}var Ve=n(5066),Re=n(3427);const ze={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Oe(e){return!!e&&("SUMMARY"===e.tagName||Oe(e.parentElement))}function Pe(e,t){return!!e&&(e===t||Pe(e.parentElement,t))}function Ge(e){let{summary:t,children:n,...a}=e;(0,Re.A)().collectAnchor(a.id);const o=(0,ie.A)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:r}=(0,S.u)({initialState:!a.open}),[d,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":c,className:(0,Ve.A)(ze.details,o&&ze.isBrowser,a.className),onMouseDown:e=>{Oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Oe(t)&&Pe(t,l.current)&&(e.preventDefault(),c?(r(!1),u(!0)):r(!0))},children:[m,(0,i.jsx)(S.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),u(!e)},children:(0,i.jsx)("div",{className:ze.collapsibleContent,children:n})})]})}const De={details:"details_b_Ee"},We="alert alert--info";function $e(e){let{...t}=e;return(0,i.jsx)(Ge,{...t,className:(0,u.A)(We,De.details,t.className)})}function Fe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)($e,{...e,summary:n,children:a})}function qe(e){return(0,i.jsx)(se.A,{...e})}const Ze={containsTaskList:"containsTaskList_mC6p"};function Je(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&Ze.containsTaskList)}const Ye={img:"img_ev3q"};function Ke(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const Qe={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function Xe(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,u.A)(b.G.common.admonition,b.G.common.admonitionType(t),Qe.admonition,n),children:s})}function et(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:Qe.admonitionHeading,children:[(0,i.jsx)("span",{className:Qe.admonitionIcon,children:t}),n]})}function tt(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:Qe.admonitionContent,children:t}):null}function nt(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,i.jsxs)(Xe,{type:t,className:o,children:[s||n?(0,i.jsx)(et,{title:s,icon:n}):null,(0,i.jsx)(tt,{children:a})]})}function st(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const at={icon:(0,i.jsx)(st,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function ot(e){return(0,i.jsx)(nt,{...at,...e,className:(0,u.A)("alert alert--secondary",e.className),children:e.children})}function it(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const lt={icon:(0,i.jsx)(it,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function ct(e){return(0,i.jsx)(nt,{...lt,...e,className:(0,u.A)("alert alert--success",e.className),children:e.children})}function rt(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const dt={icon:(0,i.jsx)(rt,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function ut(e){return(0,i.jsx)(nt,{...dt,...e,className:(0,u.A)("alert alert--info",e.className),children:e.children})}function mt(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const ht={icon:(0,i.jsx)(mt,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function pt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const ft={icon:(0,i.jsx)(pt,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const xt={icon:(0,i.jsx)(mt,{}),title:(0,i.jsx)(g.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const bt={...{note:ot,tip:ct,info:ut,warning:function(e){return(0,i.jsx)(nt,{...ht,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(nt,{...ft,...e,className:(0,u.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(ot,{title:"secondary",...e}),important:e=>(0,i.jsx)(ut,{title:"important",...e}),success:e=>(0,i.jsx)(ct,{title:"success",...e}),caution:function(e){return(0,i.jsx)(nt,{...xt,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})}}};function gt(e){const t=Ke(e),n=(s=t.type,bt[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),bt.info));var s;return(0,i.jsx)(n,{...t})}const jt={Head:oe.A,details:Fe,Details:Fe,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(Ue,{...e}):(0,i.jsx)(Se,{...e})},a:function(e){return(0,i.jsx)(j.A,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:Je(e.className)})},li:function(e){return(0,Re.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,Ye.img))});var t},h1:e=>(0,i.jsx)(qe,{as:"h1",...e}),h2:e=>(0,i.jsx)(qe,{as:"h2",...e}),h3:e=>(0,i.jsx)(qe,{as:"h3",...e}),h4:e=>(0,i.jsx)(qe,{as:"h4",...e}),h5:e=>(0,i.jsx)(qe,{as:"h5",...e}),h6:e=>(0,i.jsx)(qe,{as:"h6",...e}),admonition:gt,mermaid:()=>null};function vt(e){let{children:t}=e;return(0,i.jsx)(ae.x,{components:jt,children:t})}function Nt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(b.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(se.A,{as:"h1",children:n})}),(0,i.jsx)(vt,{children:t})]})}var At=n(1243);function Ct(){return(0,i.jsx)(g.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function yt(){return(0,i.jsx)(g.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function kt(){return(0,i.jsx)(oe.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Lt(){return(0,i.jsx)(g.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function Bt(){return(0,i.jsx)(g.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function _t(e){let{className:t}=e;return(0,i.jsx)(gt,{type:"caution",title:(0,i.jsx)(Lt,{}),className:(0,u.A)(t,b.G.common.draftBanner),children:(0,i.jsx)(Bt,{})})}function wt(e){let{className:t}=e;return(0,i.jsx)(gt,{type:"caution",title:(0,i.jsx)(Ct,{}),className:(0,u.A)(t,b.G.common.unlistedBanner),children:(0,i.jsx)(yt,{})})}function Tt(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(kt,{}),(0,i.jsx)(wt,{...e})]})}function Et(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(Tt,{}),s.draft&&(0,i.jsx)(_t,{})]})}const Ht={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Mt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(K,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(ne,{})}}(),{metadata:s}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Ht.docItemCol),children:[(0,i.jsx)(Et,{metadata:s}),(0,i.jsx)(f.A,{}),(0,i.jsxs)("div",{className:Ht.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(At.A,{}),(0,i.jsx)(x.A,{}),n.mobile,(0,i.jsx)(Nt,{children:t}),(0,i.jsx)(I,{})]}),(0,i.jsx)(p,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function It(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(Mt,{children:(0,i.jsx)(n,{})})]})})}},6929:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var s=n(1312),a=n(8215),o=n(8774),i=n(4848);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,i.jsxs)(o.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function c(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(l,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(l,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(6540);var s=n(8215),a=n(1312),o=n(7559),i=n(3025),l=n(4848);function c(e){let{className:t}=e;const n=(0,i.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});n(6540);var s=n(8215),a=n(4586),o=n(8774),i=n(1312),l=n(8295),c=n(7559),r=n(3886),d=n(3025),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.A,{to:n,onClick:s,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.A)(),{pluginId:i}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,r.g1)(i),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,l.HW)(i),x=m??(b=f).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.A)(t,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:f.label,to:x.path,onClick:()=>d(f.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);