"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[82683],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,c=m["".concat(l,".").concat(g)]||m[g]||u[g]||s;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(58168),a=(n(96540),n(15680));const s={sidebar_position:1},o="Module Genesis",r={unversionedId:"build/building-modules/genesis",id:"version-0.50/build/building-modules/genesis",title:"Module Genesis",description:"Modules generally handle a subset of the state and, as such, they need to define the related subset of the genesis file as well as methods to initialize, verify and export it.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/08-genesis.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/genesis",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/genesis",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Invariants",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/invariants"},next:{title:"Module Interfaces",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-interfaces"}},l={},d=[{value:"Type Definition",id:"type-definition",level:2},{value:"<code>DefaultGenesis</code>",id:"defaultgenesis",level:3},{value:"<code>ValidateGenesis</code>",id:"validategenesis",level:3},{value:"Other Genesis Methods",id:"other-genesis-methods",level:2},{value:"<code>InitGenesis</code>",id:"initgenesis",level:3},{value:"<code>ExportGenesis</code>",id:"exportgenesis",level:3},{value:"GenesisTxHandler",id:"genesistxhandler",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"module-genesis"},"Module Genesis"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Modules generally handle a subset of the state and, as such, they need to define the related subset of the genesis file as well as methods to initialize, verify and export it.")),(0,a.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager"},"Module Manager")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},"Keepers")))),(0,a.yg)("h2",{id:"type-definition"},"Type Definition"),(0,a.yg)("p",null,"The subset of the genesis state defined from a given module is generally defined in a ",(0,a.yg)("inlineCode",{parentName:"p"},"genesis.proto")," file (",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/encoding#gogoproto"},"more info")," on how to define protobuf messages). The struct defining the module's subset of the genesis state is usually called ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState")," and contains all the module-related values that need to be initialized during the genesis process."),(0,a.yg)("p",null,"See an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState")," protobuf message definition from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/proto/cosmos/auth/v1beta1/genesis.proto\n")),(0,a.yg)("p",null,"Next we present the main genesis-related methods that need to be implemented by module developers in order for their module to be used in Cosmos SDK applications."),(0,a.yg)("h3",{id:"defaultgenesis"},(0,a.yg)("inlineCode",{parentName:"h3"},"DefaultGenesis")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"DefaultGenesis()")," method is a simple method that calls the constructor function for ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState")," with the default value for each parameter. See an example from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/module.go#L63-L67\n")),(0,a.yg)("h3",{id:"validategenesis"},(0,a.yg)("inlineCode",{parentName:"h3"},"ValidateGenesis")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ValidateGenesis(data GenesisState)")," method is called to verify that the provided ",(0,a.yg)("inlineCode",{parentName:"p"},"genesisState")," is correct. It should perform validity checks on each of the parameters listed in ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState"),". See an example from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/types/genesis.go#L62-L75\n")),(0,a.yg)("h2",{id:"other-genesis-methods"},"Other Genesis Methods"),(0,a.yg)("p",null,"Other than the methods related directly to ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState"),", module developers are expected to implement two other methods as part of the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager#appmodulegenesis"},(0,a.yg)("inlineCode",{parentName:"a"},"AppModuleGenesis")," interface")," (only if the module needs to initialize a subset of state in genesis). These methods are ",(0,a.yg)("a",{parentName:"p",href:"#initgenesis"},(0,a.yg)("inlineCode",{parentName:"a"},"InitGenesis"))," and ",(0,a.yg)("a",{parentName:"p",href:"#exportgenesis"},(0,a.yg)("inlineCode",{parentName:"a"},"ExportGenesis")),"."),(0,a.yg)("h3",{id:"initgenesis"},(0,a.yg)("inlineCode",{parentName:"h3"},"InitGenesis")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"InitGenesis")," method is executed during ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp#initchain"},(0,a.yg)("inlineCode",{parentName:"a"},"InitChain"))," when the application is first started. Given a ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState"),", it initializes the subset of the state managed by the module by using the module's ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},(0,a.yg)("inlineCode",{parentName:"a"},"keeper"))," setter function on each parameter within the ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager#manager"},"module manager")," of the application is responsible for calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"InitGenesis")," method of each of the application's modules in order. This order is set by the application developer via the manager's ",(0,a.yg)("inlineCode",{parentName:"p"},"SetOrderGenesisMethod"),", which is called in the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/app-anatomy#constructor-function"},"application's constructor function"),"."),(0,a.yg)("p",null,"See an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"InitGenesis")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/keeper/genesis.go#L8-L35\n")),(0,a.yg)("h3",{id:"exportgenesis"},(0,a.yg)("inlineCode",{parentName:"h3"},"ExportGenesis")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ExportGenesis")," method is executed whenever an export of the state is made. It takes the latest known version of the subset of the state managed by the module and creates a new ",(0,a.yg)("inlineCode",{parentName:"p"},"GenesisState")," out of it. This is mainly used when the chain needs to be upgraded via a hard fork."),(0,a.yg)("p",null,"See an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"ExportGenesis")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/keeper/genesis.go#L37-L49\n")),(0,a.yg)("h3",{id:"genesistxhandler"},"GenesisTxHandler"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GenesisTxHandler")," is a way for modules to submit state transitions prior to the first block. This is used by ",(0,a.yg)("inlineCode",{parentName:"p"},"x/genutil")," to submit the genesis transactions for the validators to be added to staking. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/core/genesis/txhandler.go#L3-L6\n")))}u.isMDXComponent=!0}}]);