"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[78891],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(g,l(l({ref:r},p),{},{components:t})):n.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87370:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const i={sidebar_position:1},l="PreBlocker",a={unversionedId:"build/building-modules/preblock",id:"version-0.50/build/building-modules/preblock",title:"PreBlocker",description:"PreBlocker is optional method module developers can implement in their module. They will be triggered before BeginBlock.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/17-preblock.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/preblock",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/preblock",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Testing",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/testing"},next:{title:"Setting up the keyring",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/run-node/keyring"}},s={},c=[{value:"PreBlocker",id:"preblocker-1",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"preblocker"},"PreBlocker"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"PreBlocker")," is optional method module developers can implement in their module. They will be triggered before ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp#beginblock"},(0,o.yg)("inlineCode",{parentName:"a"},"BeginBlock")),".")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager"},"Module Manager")))),(0,o.yg)("h2",{id:"preblocker-1"},"PreBlocker"),(0,o.yg)("p",null,"There are two semantics around the new lifecycle method:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It runs before the ",(0,o.yg)("inlineCode",{parentName:"li"},"BeginBlocker")," of all modules"),(0,o.yg)("li",{parentName:"ul"},"It can modify consensus parameters in storage, and signal the caller through the return value.")),(0,o.yg)("p",null,"When it returns ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsensusParamsChanged=true"),", the caller must refresh the consensus parameter in the deliver context:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"app.finalizeBlockState.ctx = app.finalizeBlockState.ctx.WithConsensusParams(app.GetConsensusParams())\n")),(0,o.yg)("p",null,"The new ctx must be passed to all the other lifecycle methods."))}u.isMDXComponent=!0}}]);