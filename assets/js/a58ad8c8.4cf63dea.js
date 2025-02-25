"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[38405],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(58168),o=(t(96540),t(15680));const r={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/ics29-fee/integration"},i="Integration",l={unversionedId:"middleware/ics29-fee/integration",id:"version-v7.8.x/middleware/ics29-fee/integration",title:"Integration",description:"Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/04-middleware/01-ics29-fee/02-integration.md",sourceDirName:"04-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/integration",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/middleware/ics29-fee/integration",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/ics29-fee/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/middleware/ics29-fee/overview"},next:{title:"Fee Messages",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/middleware/ics29-fee/msgs"}},c={},d=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Example integration of the Fee Middleware module",id:"example-integration-of-the-fee-middleware-module",level:2},{value:"Configuring an application stack with Fee Middleware",id:"configuring-an-application-stack-with-fee-middleware",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Interchain Accounts",id:"interchain-accounts",level:3}],p={toc:d},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integration"},"Integration"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains. ")),(0,o.yg)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/middleware/develop"},"IBC middleware development")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/middleware/integration"},"IBC middleware integration"))),(0,o.yg)("p",null,"The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.\nFor Cosmos SDK chains this setup is done via the ",(0,o.yg)("inlineCode",{parentName:"p"},"app/app.go")," file, where modules are constructed and configured in order to bootstrap the blockchain application."),(0,o.yg)("h2",{id:"example-integration-of-the-fee-middleware-module"},"Example integration of the Fee Middleware module"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\n\n// Register the AppModule for the fee middleware module\nModuleBasics = module.NewBasicManager(\n    ...\n    ibcfee.AppModuleBasic{},\n    ...\n)\n\n... \n\n// Add module account permissions for the fee middleware module\nmaccPerms = map[string][]string{\n    ...\n    ibcfeetypes.ModuleName:            nil,\n}\n\n...\n\n// Add fee middleware Keeper\ntype App struct {\n    ...\n\n    IBCFeeKeeper ibcfeekeeper.Keeper\n\n    ...\n}\n\n...\n\n// Create store keys \nkeys := sdk.NewKVStoreKeys(\n    ...\n    ibcfeetypes.StoreKey,\n    ...\n)\n\n... \n\napp.IBCFeeKeeper = ibcfeekeeper.NewKeeper(\n    appCodec, keys[ibcfeetypes.StoreKey],\n    app.IBCKeeper.ChannelKeeper, // may be replaced with IBC middleware\n    app.IBCKeeper.ChannelKeeper,\n    &app.IBCKeeper.PortKeeper, app.AccountKeeper, app.BankKeeper,\n)\n\n\n// See the section below for configuring an application stack with the fee middleware module\n\n...\n\n// Register fee middleware AppModule\napp.moduleManager = module.NewManager(\n    ...\n    ibcfee.NewAppModule(app.IBCFeeKeeper),\n)\n\n...\n\n// Add fee middleware to begin blocker logic\napp.moduleManager.SetOrderBeginBlockers(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to end blocker logic\napp.moduleManager.SetOrderEndBlockers(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to init genesis logic\napp.moduleManager.SetOrderInitGenesis(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n")),(0,o.yg)("h2",{id:"configuring-an-application-stack-with-fee-middleware"},"Configuring an application stack with Fee Middleware"),(0,o.yg)("p",null,"As mentioned in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/middleware/develop"},"IBC middleware development")," an application stack may be composed of many or no middlewares that nest a base application.\nThese layers form the complete set of application logic that enable developers to build composable and flexible IBC application stacks.\nFor example, an application stack may be just a single base application like ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer"),", however, the same application stack composed with ",(0,o.yg)("inlineCode",{parentName:"p"},"29-fee")," will nest the ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer")," base application\nby wrapping it with the Fee Middleware module."),(0,o.yg)("h3",{id:"transfer"},"Transfer"),(0,o.yg)("p",null,"See below for an example of how to create an application stack using ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"29-fee"),".\nThe following ",(0,o.yg)("inlineCode",{parentName:"p"},"transferStack")," is configured in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/app.go")," and added to the IBC ",(0,o.yg)("inlineCode",{parentName:"p"},"Router"),".\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Create Transfer Stack\n// SendPacket, since it is originating from the application to core IBC:\n// transferKeeper.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is the other way\n// channel.RecvPacket -> fee.OnRecvPacket -> transfer.OnRecvPacket\n\n// transfer stack contains (from top to bottom):\n// - IBC Fee Middleware\n// - Transfer\n\n// create IBC module from bottom to top of stack\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n")),(0,o.yg)("h3",{id:"interchain-accounts"},"Interchain Accounts"),(0,o.yg)("p",null,"See below for an example of how to create an application stack using ",(0,o.yg)("inlineCode",{parentName:"p"},"27-interchain-accounts")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"29-fee"),".\nThe following ",(0,o.yg)("inlineCode",{parentName:"p"},"icaControllerStack")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"icaHostStack")," are configured in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/app.go")," and added to the IBC ",(0,o.yg)("inlineCode",{parentName:"p"},"Router")," with the associated authentication module.\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'// Create Interchain Accounts Stack\n// SendPacket, since it is originating from the application to core IBC:\n// icaAuthModuleKeeper.SendTx -> icaController.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// initialize ICA module with mock module as the authentication module on the controller side\nvar icaControllerStack porttypes.IBCModule\nicaControllerStack = ibcmock.NewIBCModule(&mockModule, ibcmock.NewMockIBCApp("", scopedICAMockKeeper))\napp.ICAAuthModule = icaControllerStack.(ibcmock.IBCModule)\nicaControllerStack = icacontroller.NewIBCMiddleware(icaControllerStack, app.ICAControllerKeeper)\nicaControllerStack = ibcfee.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper)\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is:\n// channel.RecvPacket -> fee.OnRecvPacket -> icaHost.OnRecvPacket\n\nvar icaHostStack porttypes.IBCModule\nicaHostStack = icahost.NewIBCModule(app.ICAHostKeeper)\nicaHostStack = ibcfee.NewIBCMiddleware(icaHostStack, app.IBCFeeKeeper)\n\n// Add authentication module, controller and host to IBC router\nibcRouter.\n    // the ICA Controller middleware needs to be explicitly added to the IBC Router because the\n    // ICA controller module owns the port capability for ICA. The ICA authentication module\n    // owns the channel capability.\n    AddRoute(ibcmock.ModuleName+icacontrollertypes.SubModuleName, icaControllerStack) // ica with mock auth module stack route to ica (top level of middleware stack)\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icahosttypes.SubModuleName, icaHostStack).\n')))}m.isMDXComponent=!0}}]);