"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[17313],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,c=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const i={sidebar_position:1},r="Module Simulation",s={unversionedId:"build/building-modules/simulator",id:"version-0.50/build/building-modules/simulator",title:"Module Simulation",description:"* Cosmos Blockchain Simulator",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/14-simulator.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/simulator",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/simulator",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Upgrading Modules",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/upgrade"},next:{title:"Modules depinject-ready",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/depinject"}},l={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Simulation package",id:"simulation-package",level:2},{value:"Store decoders",id:"store-decoders",level:3},{value:"Randomized genesis",id:"randomized-genesis",level:3},{value:"Randomized parameter changes",id:"randomized-parameter-changes",level:3},{value:"Random weighted operations",id:"random-weighted-operations",level:3},{value:"Random proposal contents",id:"random-proposal-contents",level:3},{value:"Registering simulation functions",id:"registering-simulation-functions",level:2},{value:"App Simulator manager",id:"app-simulator-manager",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"module-simulation"},"Module Simulation"),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/simulation"},"Cosmos Blockchain Simulator")))),(0,o.yg)("h2",{id:"synopsis"},"Synopsis"),(0,o.yg)("p",null,"This document details how to define each module simulation functions to be\nintegrated with the application ",(0,o.yg)("inlineCode",{parentName:"p"},"SimulationManager"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#simulation-package"},"Simulation package"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#store-decoders"},"Store decoders")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#randomized-genesis"},"Randomized genesis")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#random-weighted-operations"},"Random weighted operations")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#random-proposal-contents"},"Random proposal contents")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#registering-simulation-functions"},"Registering simulation functions")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#app-simulator-manager"},"App Simulator manager"))),(0,o.yg)("h2",{id:"simulation-package"},"Simulation package"),(0,o.yg)("p",null,"Every module that implements the Cosmos SDK simulator needs to have a ",(0,o.yg)("inlineCode",{parentName:"p"},"x/<module>/simulation"),"\npackage which contains the primary functions required by the fuzz tests: store\ndecoders, randomized genesis state and parameters, weighted operations and proposal\ncontents."),(0,o.yg)("h3",{id:"store-decoders"},"Store decoders"),(0,o.yg)("p",null,"Registering the store decoders is required for the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppImportExport"),". This allows\nfor the key-value pairs from the stores to be decoded (",(0,o.yg)("em",{parentName:"p"},"i.e")," unmarshalled)\nto their corresponding types. In particular, it matches the key to a concrete type\nand then unmarshals the value from the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVPair")," to the type provided."),(0,o.yg)("p",null,"You can use the example ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v/x/distribution/simulation/decoder.go"},"here")," from the distribution module to implement your store decoders."),(0,o.yg)("h3",{id:"randomized-genesis"},"Randomized genesis"),(0,o.yg)("p",null,"The simulator tests different scenarios and values for genesis parameters\nin order to fully test the edge cases of specific modules. The ",(0,o.yg)("inlineCode",{parentName:"p"},"simulator")," package from each module must expose a ",(0,o.yg)("inlineCode",{parentName:"p"},"RandomizedGenState")," function to generate the initial random ",(0,o.yg)("inlineCode",{parentName:"p"},"GenesisState")," from a given seed."),(0,o.yg)("p",null,"Once the module genesis parameter are generated randomly (or with the key and\nvalues defined in a ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," file), they are marshaled to JSON format and added\nto the app genesis JSON to use it on the simulations."),(0,o.yg)("p",null,"You can check an example on how to create the randomized genesis ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v/x/staking/simulation/genesis.go"},"here"),"."),(0,o.yg)("h3",{id:"randomized-parameter-changes"},"Randomized parameter changes"),(0,o.yg)("p",null,"The simulator is able to test parameter changes at random. The simulator package from each module must contain a ",(0,o.yg)("inlineCode",{parentName:"p"},"RandomizedParams")," func that will simulate parameter changes of the module throughout the simulations lifespan."),(0,o.yg)("p",null,"You can see how an example of what is needed to fully test parameter changes ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v/x/staking/simulation/params.go"},"here")),(0,o.yg)("h3",{id:"random-weighted-operations"},"Random weighted operations"),(0,o.yg)("p",null,"Operations are one of the crucial parts of the Cosmos SDK simulation. They are the transactions\n(",(0,o.yg)("inlineCode",{parentName:"p"},"Msg"),") that are simulated with random field values. The sender of the operation\nis also assigned randomly."),(0,o.yg)("p",null,"Operations on the simulation are simulated using the full ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/transactions"},"transaction cycle")," of a\n",(0,o.yg)("inlineCode",{parentName:"p"},"ABCI")," application that exposes the ",(0,o.yg)("inlineCode",{parentName:"p"},"BaseApp"),"."),(0,o.yg)("p",null,"Shown below is how weights are set:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.50.x/x/staking/simulation/operations.go#L19-L86\n")),(0,o.yg)("p",null,"As you can see, the weights are predefined in this case. Options exist to override this behavior with different weights. One option is to use ",(0,o.yg)("inlineCode",{parentName:"p"},"*rand.Rand")," to define a random weight for the operation, or you can inject your own predefined weights."),(0,o.yg)("p",null,"Here is how one can override the above package ",(0,o.yg)("inlineCode",{parentName:"p"},"simappparams"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.50.x/Makefile#L293-L299\n")),(0,o.yg)("p",null,"For the last test a tool called ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/tools/tree/master/cmd/runsim"},"runsim")," is used, this is used to parallelize go test instances, provide info to Github and slack integrations to provide information to your team on how the simulations are running.  "),(0,o.yg)("h3",{id:"random-proposal-contents"},"Random proposal contents"),(0,o.yg)("p",null,"Randomized governance proposals are also supported on the Cosmos SDK simulator. Each\nmodule must define the governance proposal ",(0,o.yg)("inlineCode",{parentName:"p"},"Content"),"s that they expose and register\nthem to be used on the parameters."),(0,o.yg)("h2",{id:"registering-simulation-functions"},"Registering simulation functions"),(0,o.yg)("p",null,"Now that all the required functions are defined, we need to integrate them into the module pattern within the ",(0,o.yg)("inlineCode",{parentName:"p"},"module.go"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.50.x/x/distribution/module.go#L180-L203\n")),(0,o.yg)("h2",{id:"app-simulator-manager"},"App Simulator manager"),(0,o.yg)("p",null,"The following step is setting up the ",(0,o.yg)("inlineCode",{parentName:"p"},"SimulatorManager")," at the app level. This\nis required for the simulation test files on the next step."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type CustomApp struct {\n  ...\n  sm *module.SimulationManager\n}\n")),(0,o.yg)("p",null,"Then at the instantiation of the application, we create the ",(0,o.yg)("inlineCode",{parentName:"p"},"SimulationManager"),"\ninstance in the same way we create the ",(0,o.yg)("inlineCode",{parentName:"p"},"ModuleManager")," but this time we only pass\nthe modules that implement the simulation functions from the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModuleSimulation"),"\ninterface described above."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"func NewCustomApp(...) {\n  // create the simulation manager and define the order of the modules for deterministic simulations\n  app.sm = module.NewSimulationManager(\n    auth.NewAppModule(app.accountKeeper),\n    bank.NewAppModule(app.bankKeeper, app.accountKeeper),\n    supply.NewAppModule(app.supplyKeeper, app.accountKeeper),\n    gov.NewAppModule(app.govKeeper, app.accountKeeper, app.supplyKeeper),\n    mint.NewAppModule(app.mintKeeper),\n    distr.NewAppModule(app.distrKeeper, app.accountKeeper, app.supplyKeeper, app.stakingKeeper),\n    staking.NewAppModule(app.stakingKeeper, app.accountKeeper, app.supplyKeeper),\n    slashing.NewAppModule(app.slashingKeeper, app.accountKeeper, app.stakingKeeper),\n  )\n\n  // register the store decoders for simulation tests\n  app.sm.RegisterStoreDecoders()\n  ...\n}\n")))}u.isMDXComponent=!0}}]);