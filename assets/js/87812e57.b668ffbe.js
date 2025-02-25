"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[96970],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},63247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={title:"Integration",sidebar_label:"Integration",sidebar_position:4,slug:"/apps/interchain-accounts/integration"},i="Integration",c={unversionedId:"apps/interchain-accounts/integration",id:"version-v5.4.x/apps/interchain-accounts/integration",title:"Integration",description:"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains.",source:"@site/ibc-go_versioned_docs/version-v5.4.x/02-apps/02-interchain-accounts/04-integration.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/integration",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/integration",draft:!1,tags:[],version:"v5.4.x",sidebarPosition:4,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:4,slug:"/apps/interchain-accounts/integration"},sidebar:"defaultSidebar",previous:{title:"Active Channels",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/active-channels"},next:{title:"Parameters",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/parameters"}},l={},p=[{value:"Example integration",id:"example-integration",level:2},{value:"Using submodules exclusively",id:"using-submodules-exclusively",level:3},{value:"Disabling controller chain functionality",id:"disabling-controller-chain-functionality",level:4},{value:"Disabling host chain functionality",id:"disabling-host-chain-functionality",level:4}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integration"},"Integration"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains. ")),(0,o.yg)("p",null,"The Interchain Accounts module contains two submodules. Each submodule has its own IBC application. The Interchain Accounts module should be registered as an ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModule")," in the same way all SDK modules are registered on a chain, but each submodule should create its own ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCModule")," as necessary. A route should be added to the IBC router for each submodule which will be used. "),(0,o.yg)("p",null,"Chains who wish to support ICS27 may elect to act as a host chain, a controller chain or both. Disabling host or controller functionality may be done statically by excluding the host or controller module entirely from the ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go")," file or it may be done dynamically by taking advantage of the on-chain parameters which enable or disable the host or controller submodules. "),(0,o.yg)("p",null,"Interchain Account authentication modules are the base application of a middleware stack. The controller submodule is the middleware in this stack."),(0,o.yg)("h2",{id:"example-integration"},"Example integration"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\n\n// Register the AppModule for the Interchain Accounts module and the authentication module\n// Note: No `icaauth` exists, this must be substituted with an actual Interchain Accounts authentication module\nModuleBasics = module.NewBasicManager(\n    ...\n    ica.AppModuleBasic{},\n    icaauth.AppModuleBasic{},\n    ...\n)\n\n... \n\n// Add module account permissions for the Interchain Accounts module\n// Only necessary for host chain functionality\n// Each Interchain Account created on the host chain is derived from the module account created\nmaccPerms = map[string][]string{\n    ...\n    icatypes.ModuleName:            nil,\n}\n\n...\n\n// Add Interchain Accounts Keepers for each submodule used and the authentication module\n// If a submodule is being statically disabled, the associated Keeper does not need to be added. \ntype App struct {\n    ...\n\n    ICAControllerKeeper icacontrollerkeeper.Keeper\n    ICAHostKeeper       icahostkeeper.Keeper\n    ICAAuthKeeper       icaauthkeeper.Keeper\n\n    ...\n}\n\n...\n\n// Create store keys for each submodule Keeper and the authentication module\nkeys := sdk.NewKVStoreKeys(\n    ...\n    icacontrollertypes.StoreKey,\n    icahosttypes.StoreKey,\n    icaauthtypes.StoreKey,\n    ...\n)\n\n... \n\n// Create the scoped keepers for each submodule keeper and authentication keeper\nscopedICAControllerKeeper := app.CapabilityKeeper.ScopeToModule(icacontrollertypes.SubModuleName)\nscopedICAHostKeeper := app.CapabilityKeeper.ScopeToModule(icahosttypes.SubModuleName)\nscopedICAAuthKeeper := app.CapabilityKeeper.ScopeToModule(icaauthtypes.ModuleName)\n\n...\n\n// Create the Keeper for each submodule\napp.ICAControllerKeeper = icacontrollerkeeper.NewKeeper(\n        appCodec, keys[icacontrollertypes.StoreKey], app.GetSubspace(icacontrollertypes.SubModuleName),\n        app.IBCKeeper.ChannelKeeper, // may be replaced with middleware such as ics29 fee\n        app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n        scopedICAControllerKeeper, app.MsgServiceRouter(),\n)\napp.ICAHostKeeper = icahostkeeper.NewKeeper(\n        appCodec, keys[icahosttypes.StoreKey], app.GetSubspace(icahosttypes.SubModuleName),\n        app.IBCKeeper.ChannelKeeper, // may be replaced with middleware such as ics29 fee\n        app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n        app.AccountKeeper, scopedICAHostKeeper, app.MsgServiceRouter(),\n)\n\n// Create Interchain Accounts AppModule\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, &app.ICAHostKeeper)\n\n// Create your Interchain Accounts authentication module\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper, scopedICAAuthKeeper)\n\n// ICA auth AppModule\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\n\n// ICA auth IBC Module\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack and host IBC module as desired\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host and authentication routes\nibcRouter.\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icahosttypes.SubModuleName, icaHostIBCModule).\n    AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n\n...\n\n// Register Interchain Accounts and authentication module AppModule's\napp.moduleManager = module.NewManager(\n    ...\n    icaModule,\n    icaAuthModule,\n)\n\n...\n\n// Add fee middleware to begin blocker logic\napp.moduleManager.SetOrderBeginBlockers(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to end blocker logic\napp.moduleManager.SetOrderEndBlockers(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// Add Interchain Accounts module InitGenesis logic\napp.moduleManager.SetOrderInitGenesis(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// initParamsKeeper init params keeper and its subspaces\nfunc initParamsKeeper(appCodec codec.BinaryCodec, legacyAmino *codec.LegacyAmino, key, tkey sdk.StoreKey) paramskeeper.Keeper {\n    ...\n    paramsKeeper.Subspace(icahosttypes.SubModuleName)\n    paramsKeeper.Subspace(icacontrollertypes.SubModuleName)\n    ...\n")),(0,o.yg)("h3",{id:"using-submodules-exclusively"},"Using submodules exclusively"),(0,o.yg)("p",null,"As described above, the Interchain Accounts application module is structured to support the ability of exclusively enabling controller or host functionality.\nThis can be achieved by simply omitting either controller or host ",(0,o.yg)("inlineCode",{parentName:"p"},"Keeper")," from the Interchain Accounts ",(0,o.yg)("inlineCode",{parentName:"p"},"NewAppModule")," constructor function, and mounting only the desired submodule via the ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCRouter"),".\nAlternatively, submodules can be enabled and disabled dynamically using ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/parameters"},"on-chain parameters"),"."),(0,o.yg)("p",null,"The following snippets show basic examples of statically disabling submodules using ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go"),"."),(0,o.yg)("h4",{id:"disabling-controller-chain-functionality"},"Disabling controller chain functionality"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Create Interchain Accounts AppModule omitting the controller keeper\nicaModule := ica.NewAppModule(nil, &app.ICAHostKeeper)\n\n// Create host IBC Module\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host route\nibcRouter.AddRoute(icahosttypes.SubModuleName, icaHostIBCModule)\n")),(0,o.yg)("h4",{id:"disabling-host-chain-functionality"},"Disabling host chain functionality"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Create Interchain Accounts AppModule omitting the host keeper\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, nil)\n\n// Create your Interchain Accounts authentication module, setting up the Keeper, AppModule and IBCModule appropriately\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper, scopedICAAuthKeeper)\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\n\n// Register controller and authentication routes\nibcRouter.\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n")))}d.isMDXComponent=!0}}]);