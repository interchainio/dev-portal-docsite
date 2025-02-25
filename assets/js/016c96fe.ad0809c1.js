"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[76957],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||o;return t?n.createElement(u,i(i({ref:a},s),{},{components:t})):n.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},34877:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/callbacks/integration"},i="Integration",l={unversionedId:"docs/middleware/callbacks/integration",id:"docs/middleware/callbacks/integration",title:"Integration",description:"Learn how to integrate the callbacks middleware with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains.",source:"@site/ibc-go/docs/04-middleware/01-callbacks/02-integration.md",sourceDirName:"docs/04-middleware/01-callbacks",slug:"/middleware/callbacks/integration",permalink:"/dev-portal-docsite/ibc-go/next/middleware/callbacks/integration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/callbacks/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/next/middleware/callbacks/overview"},next:{title:"Interfaces",permalink:"/dev-portal-docsite/ibc-go/next/middleware/callbacks/interfaces"}},c={},p=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Importing the callbacks middleware",id:"importing-the-callbacks-middleware",level:2},{value:"Configuring an application stack with the callbacks middleware",id:"configuring-an-application-stack-with-the-callbacks-middleware",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Interchain Accounts Controller",id:"interchain-accounts-controller",level:3}],s={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"integration"},"Integration"),(0,r.yg)("p",null,"Learn how to integrate the callbacks middleware with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains. "),(0,r.yg)("p",null,"The callbacks middleware is a minimal and stateless implementation of the IBC middleware interface. It does not have a keeper, nor does it store any state. It simply routes IBC middleware messages to the appropriate callback function, which is implemented by the secondary application. Therefore, it doesn't need to be registered as a module, nor does it need to be added to the module manager. It only needs to be added to the IBC application stack."),(0,r.yg)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/ibc-go/next/ibc/middleware/develop"},"IBC middleware development")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/ibc-go/next/ibc/middleware/integration"},"IBC middleware integration"))),(0,r.yg)("p",null,"The callbacks middleware, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.\nFor Cosmos SDK chains this setup is done via the ",(0,r.yg)("inlineCode",{parentName:"p"},"app/app.go")," file, where modules are constructed and configured in order to bootstrap the blockchain application."),(0,r.yg)("h2",{id:"importing-the-callbacks-middleware"},"Importing the callbacks middleware"),(0,r.yg)("p",null,"The callbacks middleware has no stable releases yet. To use it, you need to import the git commit that contains the module with the compatible version of ",(0,r.yg)("inlineCode",{parentName:"p"},"ibc-go"),". To do so, run the following command with the desired git commit in your project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"go get github.com/cosmos/ibc-go/modules/apps/callbacks@342c00b0f8bd7feeebf0780f208a820b0faf90d1\n")),(0,r.yg)("p",null,"The following table shows the compatibility matrix between the callbacks middleware, ",(0,r.yg)("inlineCode",{parentName:"p"},"ibc-go"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Version")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Git commit to import")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"v0.2.0+ibc-go-v8.0")),(0,r.yg)("td",{parentName:"tr",align:"center"},"342c00b0f8bd7feeebf0780f208a820b0faf90d1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"v0.1.0+ibc-go-v7.3")),(0,r.yg)("td",{parentName:"tr",align:"center"},"17cf1260a9cdc5292512acc9bcf6336ef0d917f4")))),(0,r.yg)("h2",{id:"configuring-an-application-stack-with-the-callbacks-middleware"},"Configuring an application stack with the callbacks middleware"),(0,r.yg)("p",null,"As mentioned in ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/next/ibc/middleware/develop"},"IBC middleware development")," an application stack may be composed of many or no middlewares that nest a base application.\nThese layers form the complete set of application logic that enable developers to build composable and flexible IBC application stacks.\nFor example, an application stack may just be a single base application like ",(0,r.yg)("inlineCode",{parentName:"p"},"transfer"),", however, the same application stack composed with ",(0,r.yg)("inlineCode",{parentName:"p"},"29-fee")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"callbacks")," will nest the ",(0,r.yg)("inlineCode",{parentName:"p"},"transfer")," base application twice by wrapping it with the Fee Middleware module and then callbacks middleware."),(0,r.yg)("p",null,"The callbacks middleware also ",(0,r.yg)("strong",{parentName:"p"},"requires")," a secondary application that will receive the callbacks to implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/callbacks/types/expected_keepers.go#L11-L83"},(0,r.yg)("inlineCode",{parentName:"a"},"ContractKeeper")),". Since the wasm module does not yet support the callbacks middleware, we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"mockContractKeeper")," module in the examples below. You should replace this with a module that implements ",(0,r.yg)("inlineCode",{parentName:"p"},"ContractKeeper"),"."),(0,r.yg)("h3",{id:"transfer"},"Transfer"),(0,r.yg)("p",null,"See below for an example of how to create an application stack using ",(0,r.yg)("inlineCode",{parentName:"p"},"transfer"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"29-fee"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"callbacks"),". Feel free to omit the ",(0,r.yg)("inlineCode",{parentName:"p"},"29-fee")," middleware if you do not want to use it.\nThe following ",(0,r.yg)("inlineCode",{parentName:"p"},"transferStack")," is configured in ",(0,r.yg)("inlineCode",{parentName:"p"},"app/app.go")," and added to the IBC ",(0,r.yg)("inlineCode",{parentName:"p"},"Router"),".\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"// Create Transfer Stack\n// SendPacket, since it is originating from the application to core IBC:\n// transferKeeper.SendPacket -> callbacks.SendPacket -> feeKeeper.SendPacket -> channel.SendPacket\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is the other way\n// channel.RecvPacket -> fee.OnRecvPacket -> callbacks.OnRecvPacket -> transfer.OnRecvPacket\n\n// transfer stack contains (from top to bottom):\n// - IBC Fee Middleware\n// - IBC Callbacks Middleware\n// - Transfer\n\n// create IBC module from bottom to top of stack\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibccallbacks.NewIBCMiddleware(transferStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\ntransferICS4Wrapper := transferStack.(porttypes.ICS4Wrapper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the transfer keeper\napp.TransferKeeper.WithICS4Wrapper(transferICS4Wrapper)\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n")),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"WithICS4Wrapper")," after ",(0,r.yg)("inlineCode",{parentName:"p"},"transferStack"),"'s configuration is critical! It allows the callbacks middleware to do ",(0,r.yg)("inlineCode",{parentName:"p"},"SendPacket")," callbacks and asynchronous ",(0,r.yg)("inlineCode",{parentName:"p"},"ReceivePacket")," callbacks. You must do this regardless of whether you are using the ",(0,r.yg)("inlineCode",{parentName:"p"},"29-fee")," middleware or not.")),(0,r.yg)("h3",{id:"interchain-accounts-controller"},"Interchain Accounts Controller"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'// Create Interchain Accounts Stack\n// SendPacket, since it is originating from the application to core IBC:\n// icaControllerKeeper.SendTx -> callbacks.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// initialize ICA module with mock module as the authentication module on the controller side\nvar icaControllerStack porttypes.IBCModule\nicaControllerStack = ibcmock.NewIBCModule(&mockModule, ibcmock.NewIBCApp("", scopedICAMockKeeper))\napp.ICAAuthModule = icaControllerStack.(ibcmock.IBCModule)\nicaControllerStack = icacontroller.NewIBCMiddleware(icaControllerStack, app.ICAControllerKeeper)\nicaControllerStack = ibccallbacks.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\nicaICS4Wrapper := icaControllerStack.(porttypes.ICS4Wrapper)\nicaControllerStack = ibcfee.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the ica controller keeper\napp.ICAControllerKeeper.WithICS4Wrapper(icaICS4Wrapper)\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is:\n// channel.RecvPacket -> fee.OnRecvPacket -> icaHost.OnRecvPacket\n\nvar icaHostStack porttypes.IBCModule\nicaHostStack = icahost.NewIBCModule(app.ICAHostKeeper)\nicaHostStack = ibcfee.NewIBCMiddleware(icaHostStack, app.IBCFeeKeeper)\n\n// Add ICA host and controller to IBC router ibcRouter.\nAddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\nAddRoute(icahosttypes.SubModuleName, icaHostStack).\n')),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"WithICS4Wrapper")," here is also critical!")))}m.isMDXComponent=!0}}]);