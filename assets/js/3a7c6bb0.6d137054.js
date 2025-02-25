"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[63231],{15680:(e,r,o)=>{o.d(r,{xA:()=>c,yg:()=>g});var n=o(96540);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),d=function(e){var r=n.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=t,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(g,i(i({ref:r},c),{},{components:o})):n.createElement(g,i({ref:r},c))}));function g(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59596:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(58168),t=(o(96540),o(15680));const a={sidebar_position:1},i="Errors",s={unversionedId:"build/building-modules/errors",id:"version-0.52/build/building-modules/errors",title:"Errors",description:"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/building-modules/12-errors.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/errors",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-modules/errors",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Folder Structure",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-modules/structure"},next:{title:"Upgrading Modules",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-modules/upgrade"}},l={},d=[{value:"Registration",id:"registration",level:2},{value:"Wrapping",id:"wrapping",level:2},{value:"ABCI",id:"abci",level:2}],c={toc:d},u="wrapper";function p(e){let{components:r,...o}=e;return(0,t.yg)(u,(0,n.A)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"errors"},"Errors"),(0,t.yg)("admonition",{title:"Synopsis",type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.")),(0,t.yg)("p",null,"Modules are encouraged to define and register their own errors to provide better\ncontext on failed message or handler execution. Typically, these errors should be\ncommon or general errors which can be further wrapped to provide additional specific execution context."),(0,t.yg)("p",null,"There are two ways to return errors. You can register custom errors with a codespace that is meant to provide more information to clients and normal go errors. The Cosmos SDK uses a mixture of both. "),(0,t.yg)("p",null,":::Note\nErrors v2 has been created as a zero dependency errors package. GRPC errors and tracing support is removed natively from the errors package. Users are required to wrap stack traces and add tracing information to their errors.\n:::"),(0,t.yg)("p",null,":::Warning\nIf errors are registered they are part of consensus and cannot be changed in a minor release\n:::"),(0,t.yg)("h2",{id:"registration"},"Registration"),(0,t.yg)("p",null,"Modules should define and register their custom errors in ",(0,t.yg)("inlineCode",{parentName:"p"},"x/{module}/errors.go"),".\nRegistration of errors is handled via the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/errors/errors.go"},(0,t.yg)("inlineCode",{parentName:"a"},"errors")," package"),"."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/distribution/types/errors.go\n")),(0,t.yg)("p",null,'Each custom module error must provide the codespace, which is typically the module name\n(e.g. "distribution") and is unique per module, and a uint32 code. Together, the codespace and code\nprovide a globally unique Cosmos SDK error. Typically, the code is monotonically increasing but does not\nnecessarily have to be. The only restrictions on error codes are the following:'),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Must be greater than one, as a code value of one is reserved for internal errors."),(0,t.yg)("li",{parentName:"ul"},"Must be unique within the module.")),(0,t.yg)("h2",{id:"wrapping"},"Wrapping"),(0,t.yg)("p",null,"The custom module errors can be returned as their concrete type as they already fulfill the ",(0,t.yg)("inlineCode",{parentName:"p"},"error"),"\ninterface. However, module errors can be wrapped to provide further context and meaning to failed execution."),(0,t.yg)("p",null,"Example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/keeper.go#L141-L182\n")),(0,t.yg)("h2",{id:"abci"},"ABCI"),(0,t.yg)("p",null,"If a module error is registered, the Cosmos SDK ",(0,t.yg)("inlineCode",{parentName:"p"},"errors")," package allows ABCI information to be extracted\nthrough the ",(0,t.yg)("inlineCode",{parentName:"p"},"ABCIInfo")," function. The package also provides ",(0,t.yg)("inlineCode",{parentName:"p"},"ResponseCheckTx")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ResponseDeliverTx")," as\nauxiliary functions to automatically get ",(0,t.yg)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"DeliverTx")," responses from an error."))}p.isMDXComponent=!0}}]);