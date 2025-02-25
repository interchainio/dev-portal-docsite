"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[6664],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const s={sidebar_position:1},r="Main Components of the Cosmos SDK",i={unversionedId:"learn/intro/sdk-design",id:"version-0.50/learn/intro/sdk-design",title:"Main Components of the Cosmos SDK",description:"The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of CometBFT. At its core, the Cosmos SDK is a boilerplate implementation of the ABCI in Golang. It comes with a multistore to persist data and a router to handle transactions.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/learn/intro/03-sdk-design.md",sourceDirName:"learn/intro",slug:"/learn/intro/sdk-design",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/sdk-design",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Blockchain Architecture",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/sdk-app-architecture"},next:{title:"Anatomy of a Cosmos SDK Application",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/app-anatomy"}},l={},p=[{value:"<code>baseapp</code>",id:"baseapp",level:2},{value:"Multistore",id:"multistore",level:2},{value:"Modules",id:"modules",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"main-components-of-the-cosmos-sdk"},"Main Components of the Cosmos SDK"),(0,o.yg)("p",null,"The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of CometBFT. At its core, the Cosmos SDK is a boilerplate implementation of the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/sdk-app-architecture#abci"},"ABCI")," in Golang. It comes with a ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/store#multistore"},(0,o.yg)("inlineCode",{parentName:"a"},"multistore"))," to persist data and a ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp#routing"},(0,o.yg)("inlineCode",{parentName:"a"},"router"))," to handle transactions."),(0,o.yg)("p",null,"Here is a simplified view of how transactions are handled by an application built on top of the Cosmos SDK when transferred from CometBFT via ",(0,o.yg)("inlineCode",{parentName:"p"},"DeliverTx"),":"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Decode ",(0,o.yg)("inlineCode",{parentName:"li"},"transactions")," received from the CometBFT consensus engine (remember that CometBFT only deals with ",(0,o.yg)("inlineCode",{parentName:"li"},"[]bytes"),")."),(0,o.yg)("li",{parentName:"ol"},"Extract ",(0,o.yg)("inlineCode",{parentName:"li"},"messages")," from ",(0,o.yg)("inlineCode",{parentName:"li"},"transactions")," and do basic sanity checks."),(0,o.yg)("li",{parentName:"ol"},"Route each message to the appropriate module so that it can be processed."),(0,o.yg)("li",{parentName:"ol"},"Commit state changes.")),(0,o.yg)("h2",{id:"baseapp"},(0,o.yg)("inlineCode",{parentName:"h2"},"baseapp")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"baseapp")," is the boilerplate implementation of a Cosmos SDK application. It comes with an implementation of the ABCI to handle the connection with the underlying consensus engine. Typically, a Cosmos SDK application extends ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp")," by embedding it in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/app-anatomy#core-application-file"},(0,o.yg)("inlineCode",{parentName:"a"},"app.go")),"."),(0,o.yg)("p",null,"Here is an example of this from ",(0,o.yg)("inlineCode",{parentName:"p"},"simapp"),", the Cosmos SDK demonstration app:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/simapp/app.go#L170-L212\n")),(0,o.yg)("p",null,"The goal of ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp")," is to provide a secure interface between the store and the extensible state machine while defining as little about the state machine as possible (staying true to the ABCI)."),(0,o.yg)("p",null,"For more on ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp"),", please click ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp"},"here"),"."),(0,o.yg)("h2",{id:"multistore"},"Multistore"),(0,o.yg)("p",null,"The Cosmos SDK provides a ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/store#multistore"},(0,o.yg)("inlineCode",{parentName:"a"},"multistore"))," for persisting state. The multistore allows developers to declare any number of ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/store#base-layer-kvstores"},(0,o.yg)("inlineCode",{parentName:"a"},"KVStores")),". These ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStores")," only accept the ",(0,o.yg)("inlineCode",{parentName:"p"},"[]byte")," type as value and therefore any custom structure needs to be marshalled using ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/encoding"},"a codec")," before being stored."),(0,o.yg)("p",null,"The multistore abstraction is used to divide the state in distinct compartments, each managed by its own module. For more on the multistore, click ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/store#multistore"},"here")),(0,o.yg)("h2",{id:"modules"},"Modules"),(0,o.yg)("p",null,"The power of the Cosmos SDK lies in its modularity. Cosmos SDK applications are built by aggregating a collection of interoperable modules. Each module defines a subset of the state and contains its own message/transaction processor, while the Cosmos SDK is responsible for routing each message to its respective module."),(0,o.yg)("p",null,"Here is a simplified view of how a transaction is processed by the application of each full-node when it is received in a valid block:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"                                      +\n                                      |\n                                      |  Transaction relayed from the full-node's\n                                      |  CometBFT engine to the node's application\n                                      |  via DeliverTx\n                                      |\n                                      |\n                +---------------------v--------------------------+\n                |                 APPLICATION                    |\n                |                                                |\n                |     Using baseapp's methods: Decode the Tx,    |\n                |     extract and route the message(s)           |\n                |                                                |\n                +---------------------+--------------------------+\n                                      |\n                                      |\n                                      |\n                                      +---------------------------+\n                                                                  |\n                                                                  |\n                                                                  |  Message routed to\n                                                                  |  the correct module\n                                                                  |  to be processed\n                                                                  |\n                                                                  |\n+----------------+  +---------------+  +----------------+  +------v----------+\n|                |  |               |  |                |  |                 |\n|  AUTH MODULE   |  |  BANK MODULE  |  | STAKING MODULE |  |   GOV MODULE    |\n|                |  |               |  |                |  |                 |\n|                |  |               |  |                |  | Handles message,|\n|                |  |               |  |                |  | Updates state   |\n|                |  |               |  |                |  |                 |\n+----------------+  +---------------+  +----------------+  +------+----------+\n                                                                  |\n                                                                  |\n                                                                  |\n                                                                  |\n                                       +--------------------------+\n                                       |\n                                       | Return result to CometBFT\n                                       | (0=Ok, 1=Err)\n                                       v\n")),(0,o.yg)("p",null,"Each module can be seen as a little state-machine. Developers need to define the subset of the state handled by the module, as well as custom message types that modify the state (",(0,o.yg)("em",{parentName:"p"},"Note:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"messages")," are extracted from ",(0,o.yg)("inlineCode",{parentName:"p"},"transactions")," by ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp"),"). In general, each module declares its own ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"multistore")," to persist the subset of the state it defines. Most developers will need to access other 3rd party modules when building their own modules. Given that the Cosmos SDK is an open framework, some of the modules may be malicious, which means there is a need for security principles to reason about inter-module interactions. These principles are based on ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/ocap"},"object-capabilities"),". In practice, this means that instead of having each module keep an access control list for other modules, each module implements special objects called ",(0,o.yg)("inlineCode",{parentName:"p"},"keepers")," that can be passed to other modules to grant a pre-defined set of capabilities."),(0,o.yg)("p",null,"Cosmos SDK modules are defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/")," folder of the Cosmos SDK. Some core modules include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"x/auth"),": Used to manage accounts and signatures."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"x/bank"),": Used to enable tokens and token transfers."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"x/staking")," + ",(0,o.yg)("inlineCode",{parentName:"li"},"x/slashing"),": Used to build Proof-Of-Stake blockchains.")),(0,o.yg)("p",null,"In addition to the already existing modules in ",(0,o.yg)("inlineCode",{parentName:"p"},"x/"),", that anyone can use in their app, the Cosmos SDK lets you build your own custom modules. You can check an ",(0,o.yg)("a",{parentName:"p",href:"https://tutorials.cosmos.network/"},"example of that in the tutorial"),"."))}m.isMDXComponent=!0}}]);