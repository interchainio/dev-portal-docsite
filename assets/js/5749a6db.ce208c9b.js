"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[40933],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>u});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,u=d["".concat(c,".").concat(m)]||d[m]||g[m]||a;return r?t.createElement(u,s(s({ref:n},p),{},{components:r})):t.createElement(u,s({ref:n},p))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99955:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=r(58168),o=(r(96540),r(15680));const a={sidebar_position:1},s="Core",i={unversionedId:"learn/advanced/core",id:"version-0.52/learn/advanced/core",title:"Core",description:"Core (cosmossdk.io/core) is package which specifies the interfaces for core components of the Cosmos SDK.  Other packages in the SDK implement these interfaces to provide the core functionality.  This design",source:"@site/cosmos-sdk_versioned_docs/version-0.52/learn/advanced/02-core.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/core",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/core",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Transactions",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/transactions"},next:{title:"Node Client (Daemon)",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/node"}},c={},l=[{value:"Environment",id:"environment",level:2},{value:"Logger",id:"logger",level:2},{value:"Branch Service",id:"branch-service",level:2},{value:"Event Service",id:"event-service",level:2},{value:"Gas Service",id:"gas-service",level:2},{value:"Header Service",id:"header-service",level:2},{value:"Custom Header Service",id:"custom-header-service",level:3},{value:"Query and Message Router Service",id:"query-and-message-router-service",level:2},{value:"TransactionService",id:"transactionservice",level:2},{value:"KVStore Service",id:"kvstore-service",level:2}],p={toc:l},d="wrapper";function g(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"core"},"Core"),(0,o.yg)("p",null,"Core (",(0,o.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/core"),") is package which specifies the interfaces for core components of the Cosmos SDK.  Other packages in the SDK implement these interfaces to provide the core functionality.  This design\nprovides modularity and flexibility to the SDK, allowing developers to swap out implementations\nof core components as needed.  As such it is often referred to as the Core API."),(0,o.yg)("h2",{id:"environment"},"Environment"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Environment")," struct is a core component of the Cosmos SDK.  It provides access to the core\nservices of the SDK, such as the KVStore, EventManager, and Logger.  The ",(0,o.yg)("inlineCode",{parentName:"p"},"Environment")," struct is\npassed to modules and other components of the SDK to provide access to these services."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.6/core/appmodule/v2/environment.go#L16-L29\n")),(0,o.yg)("p",null,"Historically the SDK has used an ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.50/learn/advanced/context"},"sdk.Context")," to pass around services and data.\n",(0,o.yg)("inlineCode",{parentName:"p"},"Environment")," is a newer construct that is intended to replace an ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," in many cases.\n",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," will be deprecated in the future on the same timeline as ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/learn/advanced/baseapp"},"Baseapp"),"."),(0,o.yg)("h2",{id:"logger"},"Logger"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/log"},"Logger")," provides a structured logging interface to the SDK.  It is used throughout the SDK to log messages at various levels of severity.  The Logger service is a thin wrapper around the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rs/zerolog"},"zerolog")," logging library.\nWhen used via environment, the logger is scoped to the module that is using it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/runtime/module.go#L274\n")),(0,o.yg)("h2",{id:"branch-service"},"Branch Service"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core/branch#Service.Execute"},"BranchService")," provides an\ninterface to execute arbitrary code in a branched store.  This is useful for executing code\nthat needs to make changes to the store, but may need to be rolled back if an error occurs.\nBelow is a contrived example based on the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/epochs")," module's BeginBlocker logic."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) BeginBlocker(ctx context.Context) error {\n    err := k.EpochInfo.Walk(\n        // ...\n        ctx,\n        nil,\n        func(key string, epochInfo types.EpochInfo) (stop bool, err error) {\n            // ...  \n                if err := k.BranchService.Execute(ctx, func(ctx context.Context) error {\n                    return k.AfterEpochEnd(ctx, epochInfo.Identifier, epochInfo.CurrentEpoch)\n                }); err != nil {\n                    return true, err\n                }\n        })\n}\n")),(0,o.yg)("p",null,"Note that calls to ",(0,o.yg)("inlineCode",{parentName:"p"},"BranchService.Execute")," are atomic and cannot share state with each other\nexcept when the transaction is successful. If successful, the changes made to the store will be\ncommitted.  If an error occurs, the changes will be rolled back."),(0,o.yg)("h2",{id:"event-service"},"Event Service"),(0,o.yg)("p",null,"The Event Service returns a handle to an ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core@v1.0.0-alpha.4/event#Manager"},"EventManager"),"\nwhich can be used to emit events.  For information on how to emit events and their meaning\nin the SDK see the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/learn/advanced/events"},"Events")," document."),(0,o.yg)("p",null,"Note that core's ",(0,o.yg)("inlineCode",{parentName:"p"},"EventManager")," API is a subset of the EventManager API described above; the\nlatter will be deprecated and removed in the future.  Roughly speaking legacy ",(0,o.yg)("inlineCode",{parentName:"p"},"EmitTypeEvent"),"\nmaps to ",(0,o.yg)("inlineCode",{parentName:"p"},"Emit")," and legacy ",(0,o.yg)("inlineCode",{parentName:"p"},"EmitEvent")," maps to ",(0,o.yg)("inlineCode",{parentName:"p"},"EmitKV"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.4/core/event/service.go#L18-L29\n")),(0,o.yg)("h2",{id:"gas-service"},"Gas Service"),(0,o.yg)("p",null,"The gas service encapsulates both gas configuration and a gas meter.  Gas consumption is largely\nhandled at the framework level for transaction processing and state access but modules can\nchoose to use the gas service directly if needed."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.4/core/gas/service.go#L26-L54\n")),(0,o.yg)("h2",{id:"header-service"},"Header Service"),(0,o.yg)("p",null,"The header service provides access to the current block header.  This is useful for modules that\nneed to access the block header fields like ",(0,o.yg)("inlineCode",{parentName:"p"},"Time")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Height")," during transaction processing."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/a3729c1ad6ba2fb46f879ec7ea67c3afc02e9859/core/header/service.go#L11-L23\n")),(0,o.yg)("h3",{id:"custom-header-service"},"Custom Header Service"),(0,o.yg)("p",null,"Core's service oriented architecture (SOA) allows for chain developers to define a custom\nimplementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"HeaderService")," interface.  This would involve creating a new struct that\nsatisfies ",(0,o.yg)("inlineCode",{parentName:"p"},"HeaderService")," but composes additional logic on top.  An example of where this would\nhappen (when using depinject is shown below).  Note this example is taken from ",(0,o.yg)("inlineCode",{parentName:"p"},"runtime/v2")," but\ncould easily be adapted to ",(0,o.yg)("inlineCode",{parentName:"p"},"runtime/v1")," (the default runtime 0.52).  This same pattern can be\nreplicated for any core service."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/489aaae40234f1015a7bbcfa9384a89dc8de8153/runtime/v2/module.go#L262-L288\n")),(0,o.yg)("p",null,"These bindings are applied to the ",(0,o.yg)("inlineCode",{parentName:"p"},"depinject")," container in simapp/v2 as shown below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/489aaae40234f1015a7bbcfa9384a89dc8de8153/simapp/v2/app_di.go#L72-L74\n")),(0,o.yg)("h2",{id:"query-and-message-router-service"},"Query and Message Router Service"),(0,o.yg)("p",null,"Both the query and message router services are implementation of the same interface, ",(0,o.yg)("inlineCode",{parentName:"p"},"router.Service"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.4/core/router/service.go#L11-L16\n")),(0,o.yg)("p",null,"Both are exposed to modules so that arbitrary messages and queries can be routed to the\nappropriate handler.  This powerful abstraction allows module developers to fully decouple\nmodules from each other by using only the proto message for dispatching.   This is particularly\nuseful for modules like ",(0,o.yg)("inlineCode",{parentName:"p"},"x/accounts")," which require a dynamic dispatch mechanism in order to\nfunction."),(0,o.yg)("h2",{id:"transactionservice"},"TransactionService"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.4/core/transaction/service.go#L21-L25\n")),(0,o.yg)("p",null,"The transaction service provides access to the execution mode a state machine transaction is\nrunning in, which may be one of ",(0,o.yg)("inlineCode",{parentName:"p"},"Check"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Recheck"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Simulate")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Finalize"),".  The SDK primarily\nuses these flags in ante handlers to skip certain checks while in ",(0,o.yg)("inlineCode",{parentName:"p"},"Check")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Simulate")," modes,\nbut module developers may find uses for them as well."),(0,o.yg)("h2",{id:"kvstore-service"},"KVStore Service"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/core/v1.0.0-alpha.4/core/store/service.go#L5-L11\n")),(0,o.yg)("p",null,"The KVStore service abstracts access to, and creation of, key-value stores.  Most use cases will\nbe backed by a merkle-tree store, but developers can provide their own implementations if\nneeded.  In the case of the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStoreService")," implementation provided in ",(0,o.yg)("inlineCode",{parentName:"p"},"Environment"),", module\ndevelopers should understand that calling ",(0,o.yg)("inlineCode",{parentName:"p"},"OpenKVStore")," will return a store already scoped to\nthe module's prefix.  The wiring for this scoping is specified in ",(0,o.yg)("inlineCode",{parentName:"p"},"runtime"),"."))}g.isMDXComponent=!0}}]);