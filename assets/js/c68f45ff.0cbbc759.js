"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[587],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const i={sidebar_position:1},l="PreBlocker",a={unversionedId:"docs/build/building-modules/preblock",id:"docs/build/building-modules/preblock",title:"PreBlocker",description:"PreBlocker is optional method module developers can implement in their module. They will be triggered before BeginBlock.",source:"@site/cosmos-sdk/docs/build/building-modules/17-preblock.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/preblock",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/preblock",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Testing",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/testing"},next:{title:"Decimal Handling in Cosmos SDK",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/decimal-handling"}},d={},s=[{value:"PreBlocker",id:"preblocker-1",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"preblocker"},"PreBlocker"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"PreBlocker")," is optional method module developers can implement in their module. They will be triggered before ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/advanced/baseapp#beginblock"},(0,o.yg)("inlineCode",{parentName:"a"},"BeginBlock")),".")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/module-manager"},"Module Manager")))),(0,o.yg)("h2",{id:"preblocker-1"},"PreBlocker"),(0,o.yg)("p",null,"There are two semantics around the new lifecycle method:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It runs before the ",(0,o.yg)("inlineCode",{parentName:"li"},"BeginBlocker")," of all modules"),(0,o.yg)("li",{parentName:"ul"},"It can modify consensus parameters in storage, and signal the caller through the return value.")),(0,o.yg)("p",null,"Modules are required to get the consensus params from the consensus module. Consensus params located in ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," were deprecated and should be treated as unsafe. ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," is deprecated due to it being a global state within the entire state machine, it has been replaced with ",(0,o.yg)("inlineCode",{parentName:"p"},"appmodule.Environment"),"."))}u.isMDXComponent=!0}}]);