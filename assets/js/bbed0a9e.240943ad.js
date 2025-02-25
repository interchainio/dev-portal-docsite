"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[56463],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>w});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,w=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={title:"Integrating IBC middleware into a chain",sidebar_label:"Integrating IBC middleware into a chain",sidebar_position:2,slug:"/ibc/middleware/integration"},o="Integrating IBC middleware into a chain",d={unversionedId:"ibc/middleware/integration",id:"version-v6.3.x/ibc/middleware/integration",title:"Integrating IBC middleware into a chain",description:"Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/01-ibc/04-middleware/02-integration.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/integration",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/middleware/integration",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:2,frontMatter:{title:"Integrating IBC middleware into a chain",sidebar_label:"Integrating IBC middleware into a chain",sidebar_position:2,slug:"/ibc/middleware/integration"},sidebar:"defaultSidebar",previous:{title:"IBC middleware",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/middleware/develop"},next:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/upgrades/intro"}},l={},s=[{value:"Example integration",id:"example-integration",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"integrating-ibc-middleware-into-a-chain"},"Integrating IBC middleware into a chain"),(0,a.yg)("p",null,"Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains."),(0,a.yg)("p",null,"If the middleware is maintaining its own state and/or processing SDK messages, then it should create and register its SDK module ",(0,a.yg)("strong",{parentName:"p"},"only once")," with the module manager in ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),"."),(0,a.yg)("p",null,"All middleware must be connected to the IBC router and wrap over an underlying base IBC application. An IBC application may be wrapped by many layers of middleware, only the top layer middleware should be hooked to the IBC router, with all underlying middlewares and application getting wrapped by it."),(0,a.yg)("p",null,"The order of middleware ",(0,a.yg)("strong",{parentName:"p"},"matters"),", function calls from IBC to the application travel from top-level middleware to the bottom middleware and then to the application. Function calls from the application to IBC goes through the bottom middleware in order to the top middleware and then to core IBC handlers. Thus the same set of middleware put in different orders may produce different effects."),(0,a.yg)("h2",{id:"example-integration"},"Example integration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// app.go\n\n// middleware 1 and middleware 3 are stateful middleware, \n// perhaps implementing separate sdk.Msg and Handlers\nmw1Keeper := mw1.NewKeeper(storeKey1)\nmw3Keeper := mw3.NewKeeper(storeKey3)\n\n// Only create App Module **once** and register in app module\n// if the module maintains independent state and/or processes sdk.Msgs\napp.moduleManager = module.NewManager(\n    ...\n    mw1.NewAppModule(mw1Keeper),\n    mw3.NewAppModule(mw3Keeper),\n    transfer.NewAppModule(transferKeeper),\n    custom.NewAppModule(customKeeper)\n)\n\nmw1IBCModule := mw1.NewIBCModule(mw1Keeper)\nmw2IBCModule := mw2.NewIBCModule() // middleware2 is stateless middleware\nmw3IBCModule := mw3.NewIBCModule(mw3Keeper)\n\nscopedKeeperTransfer := capabilityKeeper.NewScopedKeeper("transfer")\nscopedKeeperCustom1 := capabilityKeeper.NewScopedKeeper("custom1")\nscopedKeeperCustom2 := capabilityKeeper.NewScopedKeeper("custom2")\n\n// NOTE: IBC Modules may be initialized any number of times provided they use a separate\n// scopedKeeper and underlying port.\n\n// initialize base IBC applications\n// if you want to create two different stacks with the same base application,\n// they must be given different scopedKeepers and assigned different ports.\ntransferIBCModule := transfer.NewIBCModule(transferKeeper)\ncustomIBCModule1 := custom.NewIBCModule(customKeeper, "portCustom1")\ncustomIBCModule2 := custom.NewIBCModule(customKeeper, "portCustom2")\n\n// create IBC stacks by combining middleware with base application\n// NOTE: since middleware2 is stateless it does not require a Keeper\n// stack 1 contains mw1 -> mw3 -> transfer\nstack1 := mw1.NewIBCMiddleware(mw3.NewIBCMiddleware(transferIBCModule, mw3Keeper), mw1Keeper)\n// stack 2 contains mw3 -> mw2 -> custom1\nstack2 := mw3.NewIBCMiddleware(mw2.NewIBCMiddleware(customIBCModule1), mw3Keeper)\n// stack 3 contains mw2 -> mw1 -> custom2\nstack3 := mw2.NewIBCMiddleware(mw1.NewIBCMiddleware(customIBCModule2, mw1Keeper))\n\n// associate each stack with the moduleName provided by the underlying scopedKeeper\nibcRouter := porttypes.NewRouter()\nibcRouter.AddRoute("transfer", stack1)\nibcRouter.AddRoute("custom1", stack2)\nibcRouter.AddRoute("custom2", stack3)\napp.IBCKeeper.SetRouter(ibcRouter)\n')))}m.isMDXComponent=!0}}]);