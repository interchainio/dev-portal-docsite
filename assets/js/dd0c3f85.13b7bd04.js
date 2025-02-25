"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[66342],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(y,r(r({ref:t},p),{},{components:n})):o.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(58168),a=(n(96540),n(15680));const i={sidebar_position:1},r="Keepers",s={unversionedId:"build/building-modules/keeper",id:"version-0.47/build/building-modules/keeper",title:"Keepers",description:"Keepers refer to a Cosmos SDK abstraction whose role is to manage access to the subset of the state defined by various modules. Keepers are module-specific, i.e. the subset of state defined by a module can only be accessed by a keeper defined in said module. If a module needs to access the subset of state defined by another module, a reference to the second module's internal keeper needs to be passed to the first one. This is done in app.go during the instantiation of module keepers.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/building-modules/06-keeper.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/keeper",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/keeper",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"BeginBlocker and EndBlocker",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/beginblock-endblock"},next:{title:"Invariants",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/invariants"}},l={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Type Definition",id:"type-definition",level:2},{value:"Implementing Methods",id:"implementing-methods",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"keepers"},"Keepers"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"Keeper"),"s refer to a Cosmos SDK abstraction whose role is to manage access to the subset of the state defined by various modules. ",(0,a.yg)("inlineCode",{parentName:"p"},"Keeper"),"s are module-specific, i.e. the subset of state defined by a module can only be accessed by a ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," defined in said module. If a module needs to access the subset of state defined by another module, a reference to the second module's internal ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," needs to be passed to the first one. This is done in ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go")," during the instantiation of module keepers.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/intro"},"Introduction to Cosmos SDK Modules")))),(0,a.yg)("h2",{id:"motivation"},"Motivation"),(0,a.yg)("p",null,"The Cosmos SDK is a framework that makes it easy for developers to build complex decentralized applications from scratch, mainly by composing modules together. As the ecosystem of open-source modules for the Cosmos SDK expands, it will become increasingly likely that some of these modules contain vulnerabilities, as a result of the negligence or malice of their developer."),(0,a.yg)("p",null,"The Cosmos SDK adopts an ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/ocap"},"object-capabilities-based approach")," to help developers better protect their application from unwanted inter-module interactions, and ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s are at the core of this approach. A ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," can be considered quite literally to be the gatekeeper of a module's store(s). Each store (typically an ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/store#iavl-store"},(0,a.yg)("inlineCode",{parentName:"a"},"IAVL")," Store"),") defined within a module comes with a ",(0,a.yg)("inlineCode",{parentName:"p"},"storeKey"),", which grants unlimited access to it. The module's ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," holds this ",(0,a.yg)("inlineCode",{parentName:"p"},"storeKey")," (which should otherwise remain unexposed), and defines ",(0,a.yg)("a",{parentName:"p",href:"#implementing-methods"},"methods")," for reading and writing to the store(s)."),(0,a.yg)("p",null,"The core idea behind the object-capabilities approach is to only reveal what is necessary to get the work done. In practice, this means that instead of handling permissions of modules through access-control lists, module ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s are passed a reference to the specific instance of the other modules' ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s that they need to access (this is done in the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/beginner/overview-app#constructor-function"},"application's constructor function"),"). As a consequence, a module can only interact with the subset of state defined in another module via the methods exposed by the instance of the other module's ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),". This is a great way for developers to control the interactions that their own module can have with modules developed by external developers."),(0,a.yg)("h2",{id:"type-definition"},"Type Definition"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s are generally implemented in a ",(0,a.yg)("inlineCode",{parentName:"p"},"/keeper/keeper.go")," file located in the module's folder. By convention, the type ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," of a module is simply named ",(0,a.yg)("inlineCode",{parentName:"p"},"Keeper")," and usually follows the following structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type Keeper struct {\n    // External keepers, if any\n\n    // Store key(s)\n\n    // codec\n\n    // authority \n}\n")),(0,a.yg)("p",null,"For example, here is the type definition of the ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"staking")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/staking/keeper/keeper.go#L23-L31\n")),(0,a.yg)("p",null,"Let us go through the different parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"An expected ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper")," is a ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper")," external to a module that is required by the internal ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper")," of said module. External ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper"),"s are listed in the internal ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper"),"'s type definition as interfaces. These interfaces are themselves defined in an ",(0,a.yg)("inlineCode",{parentName:"li"},"expected_keepers.go")," file in the root of the module's folder. In this context, interfaces are used to reduce the number of dependencies, as well as to facilitate the maintenance of the module itself."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"storeKey"),"s grant access to the store(s) of the ",(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/store"},"multistore")," managed by the module. They should always remain unexposed to external modules."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cdc")," is the ",(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/encoding"},"codec")," used to marshall and unmarshall structs to/from ",(0,a.yg)("inlineCode",{parentName:"li"},"[]byte"),". The ",(0,a.yg)("inlineCode",{parentName:"li"},"cdc")," can be any of ",(0,a.yg)("inlineCode",{parentName:"li"},"codec.BinaryCodec"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"codec.JSONCodec")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"codec.Codec")," based on your requirements. It can be either a proto or amino codec as long as they implement these interfaces. The authority listed is a module account or user account that has the right to change module level parameters. Previously this was handled by the param module, which has been deprecated.")),(0,a.yg)("p",null,"Of course, it is possible to define different types of internal ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s for the same module (e.g. a read-only ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"). Each type of ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper")," comes with its own constructor function, which is called from the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/beginner/overview-app"},"application's constructor function"),". This is where ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s are instantiated, and where developers make sure to pass correct instances of modules' ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s to other modules that require them."),(0,a.yg)("h2",{id:"implementing-methods"},"Implementing Methods"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Keeper"),"s primarily expose getter and setter methods for the store(s) managed by their module. These methods should remain as simple as possible and strictly be limited to getting or setting the requested value, as validity checks should have already been performed by the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/msg-services"},(0,a.yg)("inlineCode",{parentName:"a"},"Msg")," server")," when ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s' methods are called."),(0,a.yg)("p",null,"Typically, a ",(0,a.yg)("em",{parentName:"p"},"getter")," method will have the following signature"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) Get(ctx sdk.Context, key string) returnType\n")),(0,a.yg)("p",null,"and the method will go through the following steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Retrieve the appropriate store from the ",(0,a.yg)("inlineCode",{parentName:"li"},"ctx")," using the ",(0,a.yg)("inlineCode",{parentName:"li"},"storeKey"),". This is done through the ",(0,a.yg)("inlineCode",{parentName:"li"},"KVStore(storeKey sdk.StoreKey)")," method of the ",(0,a.yg)("inlineCode",{parentName:"li"},"ctx"),". Then it's preferred to use the ",(0,a.yg)("inlineCode",{parentName:"li"},"prefix.Store")," to access only the desired limited subset of the store for convenience and safety."),(0,a.yg)("li",{parentName:"ol"},"If it exists, get the ",(0,a.yg)("inlineCode",{parentName:"li"},"[]byte")," value stored at location ",(0,a.yg)("inlineCode",{parentName:"li"},"[]byte(key)")," using the ",(0,a.yg)("inlineCode",{parentName:"li"},"Get(key []byte)")," method of the store."),(0,a.yg)("li",{parentName:"ol"},"Unmarshall the retrieved value from ",(0,a.yg)("inlineCode",{parentName:"li"},"[]byte")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"returnType")," using the codec ",(0,a.yg)("inlineCode",{parentName:"li"},"cdc"),". Return the value.")),(0,a.yg)("p",null,"Similarly, a ",(0,a.yg)("em",{parentName:"p"},"setter")," method will have the following signature"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) Set(ctx sdk.Context, key string, value valueType)\n")),(0,a.yg)("p",null,"and the method will go through the following steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Retrieve the appropriate store from the ",(0,a.yg)("inlineCode",{parentName:"li"},"ctx")," using the ",(0,a.yg)("inlineCode",{parentName:"li"},"storeKey"),". This is done through the ",(0,a.yg)("inlineCode",{parentName:"li"},"KVStore(storeKey sdk.StoreKey)")," method of the ",(0,a.yg)("inlineCode",{parentName:"li"},"ctx"),". It's preferred to use the ",(0,a.yg)("inlineCode",{parentName:"li"},"prefix.Store")," to access only the desired limited subset of the store for convenience and safety."),(0,a.yg)("li",{parentName:"ol"},"Marshal ",(0,a.yg)("inlineCode",{parentName:"li"},"value")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"[]byte")," using the codec ",(0,a.yg)("inlineCode",{parentName:"li"},"cdc"),"."),(0,a.yg)("li",{parentName:"ol"},"Set the encoded value in the store at location ",(0,a.yg)("inlineCode",{parentName:"li"},"key")," using the ",(0,a.yg)("inlineCode",{parentName:"li"},"Set(key []byte, value []byte)")," method of the store.")),(0,a.yg)("p",null,"For more, see an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"'s ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/staking/keeper/keeper.go"},"methods implementation from the ",(0,a.yg)("inlineCode",{parentName:"a"},"staking")," module"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/store#kvstore-and-commitkvstore-interfaces"},"module ",(0,a.yg)("inlineCode",{parentName:"a"},"KVStore"))," also provides an ",(0,a.yg)("inlineCode",{parentName:"p"},"Iterator()")," method which returns an ",(0,a.yg)("inlineCode",{parentName:"p"},"Iterator")," object to iterate over a domain of keys."),(0,a.yg)("p",null,"This is an example from the ",(0,a.yg)("inlineCode",{parentName:"p"},"auth")," module to iterate accounts:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/keeper/account.go#L94-L108\n")))}c.isMDXComponent=!0}}]);