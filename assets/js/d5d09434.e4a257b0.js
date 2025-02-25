"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[68588],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>d});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(i),u=n,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return i?a.createElement(d,r(r({ref:t},p),{},{components:i})):a.createElement(d,r({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=i[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},99744:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=i(58168),n=(i(96540),i(15680));const o={sidebar_position:1},r="Application-Specific Blockchains",c={unversionedId:"learn/intro/why-app-specific",id:"version-0.50/learn/intro/why-app-specific",title:"Application-Specific Blockchains",description:"This document explains what application-specific blockchains are, and why developers would want to build one as opposed to writing Smart Contracts.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/learn/intro/01-why-app-specific.md",sourceDirName:"learn/intro",slug:"/learn/intro/why-app-specific",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/why-app-specific",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"What is the Cosmos SDK",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/overview"},next:{title:"Blockchain Architecture",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/intro/sdk-app-architecture"}},l={},s=[{value:"What are application-specific blockchains",id:"what-are-application-specific-blockchains",level:2},{value:"What are the shortcomings of Smart Contracts",id:"what-are-the-shortcomings-of-smart-contracts",level:2},{value:"Application-Specific Blockchains Benefits",id:"application-specific-blockchains-benefits",level:2},{value:"Flexibility",id:"flexibility",level:3},{value:"Performance",id:"performance",level:3},{value:"Security",id:"security",level:3},{value:"Sovereignty",id:"sovereignty",level:3}],p={toc:s},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(h,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"application-specific-blockchains"},"Application-Specific Blockchains"),(0,n.yg)("admonition",{title:"Synopsis",type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This document explains what application-specific blockchains are, and why developers would want to build one as opposed to writing Smart Contracts.")),(0,n.yg)("h2",{id:"what-are-application-specific-blockchains"},"What are application-specific blockchains"),(0,n.yg)("p",null,"Application-specific blockchains are blockchains customized to operate a single application. Instead of building a decentralized application on top of an underlying blockchain like Ethereum, developers build their own blockchain from the ground up. This means building a full-node client, a light-client, and all the necessary interfaces (CLI, REST, ...) to interact with the nodes."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"                ^  +-------------------------------+  ^\n                |  |                               |  |   Built with Cosmos SDK\n                |  |  State-machine = Application  |  |\n                |  |                               |  v\n                |  +-------------------------------+\n                |  |                               |  ^\nBlockchain node |  |           Consensus           |  |\n                |  |                               |  |\n                |  +-------------------------------+  |   CometBFT\n                |  |                               |  |\n                |  |           Networking          |  |\n                |  |                               |  |\n                v  +-------------------------------+  v\n")),(0,n.yg)("h2",{id:"what-are-the-shortcomings-of-smart-contracts"},"What are the shortcomings of Smart Contracts"),(0,n.yg)("p",null,"Virtual-machine blockchains like Ethereum addressed the demand for more programmability back in 2014. At the time, the options available for building decentralized applications were quite limited. Most developers would build on top of the complex and limited Bitcoin scripting language, or fork the Bitcoin codebase which was hard to work with and customize."),(0,n.yg)("p",null,"Virtual-machine blockchains came in with a new value proposition. Their state-machine incorporates a virtual-machine that is able to interpret turing-complete programs called Smart Contracts. These Smart Contracts are very good for use cases like one-time events (e.g. ICOs), but they can fall short for building complex decentralized platforms. Here is why:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Smart Contracts are generally developed with specific programming languages that can be interpreted by the underlying virtual-machine. These programming languages are often immature and inherently limited by the constraints of the virtual-machine itself. For example, the Ethereum Virtual Machine does not allow developers to implement automatic execution of code. Developers are also limited to the account-based system of the EVM, and they can only choose from a limited set of functions for their cryptographic operations. These are examples, but they hint at the lack of ",(0,n.yg)("strong",{parentName:"li"},"flexibility")," that a smart contract environment often entails."),(0,n.yg)("li",{parentName:"ul"},"Smart Contracts are all run by the same virtual machine. This means that they compete for resources, which can severely restrain ",(0,n.yg)("strong",{parentName:"li"},"performance"),". And even if the state-machine were to be split in multiple subsets (e.g. via sharding), Smart Contracts would still need to be interpreted by a virtual machine, which would limit performance compared to a native application implemented at state-machine level (our benchmarks show an improvement on the order of 10x in performance when the virtual-machine is removed)."),(0,n.yg)("li",{parentName:"ul"},"Another issue with the fact that Smart Contracts share the same underlying environment is the resulting limitation in ",(0,n.yg)("strong",{parentName:"li"},"sovereignty"),". A decentralized application is an ecosystem that involves multiple players. If the application is built on a general-purpose virtual-machine blockchain, stakeholders have very limited sovereignty over their application, and are ultimately superseded by the governance of the underlying blockchain. If there is a bug in the application, very little can be done about it.")),(0,n.yg)("p",null,"Application-Specific Blockchains are designed to address these shortcomings."),(0,n.yg)("h2",{id:"application-specific-blockchains-benefits"},"Application-Specific Blockchains Benefits"),(0,n.yg)("h3",{id:"flexibility"},"Flexibility"),(0,n.yg)("p",null,"Application-specific blockchains give maximum flexibility to developers:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In Cosmos blockchains, the state-machine is typically connected to the underlying consensus engine via an interface called the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/abci/"},"ABCI"),". This interface can be wrapped in any programming language, meaning developers can build their state-machine in the programming language of their choice.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Developers can choose among multiple frameworks to build their state-machine. The most widely used today is the Cosmos SDK, but others exist (e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nomic-io/lotion"},"Lotion"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/iov-one/weave"},"Weave"),", ...). Typically the choice will be made based on the programming language they want to use (Cosmos SDK and Weave are in Golang, Lotion is in Javascript, ...).")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The ABCI also allows developers to swap the consensus engine of their application-specific blockchain. Today, only CometBFT is production-ready, but in the future other consensus engines are expected to emerge.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Even when they settle for a framework and consensus engine, developers still have the freedom to tweak them if they don't perfectly match their requirements in their pristine forms.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Developers are free to explore the full spectrum of tradeoffs (e.g. number of validators vs transaction throughput, safety vs availability in asynchrony, ...) and design choices (DB or IAVL tree for storage, UTXO or account model, ...).")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Developers can implement automatic execution of code. In the Cosmos SDK, logic can be automatically triggered at the beginning and the end of each block. They are also free to choose the cryptographic library used in their application, as opposed to being constrained by what is made available by the underlying environment in the case of virtual-machine blockchains."))),(0,n.yg)("p",null,"The list above contains a few examples that show how much flexibility application-specific blockchains give to developers. The goal of Cosmos and the Cosmos SDK is to make developer tooling as generic and composable as possible, so that each part of the stack can be forked, tweaked and improved without losing compatibility. As the community grows, more alternatives for each of the core building blocks will emerge, giving more options to developers."),(0,n.yg)("h3",{id:"performance"},"Performance"),(0,n.yg)("p",null,"Decentralized applications built with Smart Contracts are inherently capped in performance by the underlying environment. For a decentralized application to optimise performance, it needs to be built as an application-specific blockchain. Next are some of the benefits an application-specific blockchain brings in terms of performance:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Developers of application-specific blockchains can choose to operate with a novel consensus engine such as CometBFT BFT. Compared to Proof-of-Work (used by most virtual-machine blockchains today), it offers significant gains in throughput."),(0,n.yg)("li",{parentName:"ul"},"An application-specific blockchain only operates a single application, so that the application does not compete with others for computation and storage. This is the opposite of most non-sharded virtual-machine blockchains today, where smart contracts all compete for computation and storage."),(0,n.yg)("li",{parentName:"ul"},"Even if a virtual-machine blockchain offered application-based sharding coupled with an efficient consensus algorithm, performance would still be limited by the virtual-machine itself. The real throughput bottleneck is the state-machine, and requiring transactions to be interpreted by a virtual-machine significantly increases the computational complexity of processing them.")),(0,n.yg)("h3",{id:"security"},"Security"),(0,n.yg)("p",null,"Security is hard to quantify, and greatly varies from platform to platform. That said here are some important benefits an application-specific blockchain can bring in terms of security:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Developers can choose proven programming languages like Go when building their application-specific blockchains, as opposed to smart contract programming languages that are often more immature."),(0,n.yg)("li",{parentName:"ul"},"Developers are not constrained by the cryptographic functions made available by the underlying virtual-machines. They can use their own custom cryptography, and rely on well-audited crypto libraries."),(0,n.yg)("li",{parentName:"ul"},"Developers do not have to worry about potential bugs or exploitable mechanisms in the underlying virtual-machine, making it easier to reason about the security of the application.")),(0,n.yg)("h3",{id:"sovereignty"},"Sovereignty"),(0,n.yg)("p",null,"One of the major benefits of application-specific blockchains is sovereignty. A decentralized application is an ecosystem that involves many actors: users, developers, third-party services, and more. When developers build on virtual-machine blockchain where many decentralized applications coexist, the community of the application is different than the community of the underlying blockchain, and the latter supersedes the former in the governance process. If there is a bug or if a new feature is needed, stakeholders of the application have very little leeway to upgrade the code. If the community of the underlying blockchain refuses to act, nothing can happen."),(0,n.yg)("p",null,"The fundamental issue here is that the governance of the application and the governance of the network are not aligned. This issue is solved by application-specific blockchains. Because application-specific blockchains specialize to operate a single application, stakeholders of the application have full control over the entire chain. This ensures that the community will not be stuck if a bug is discovered, and that it has the freedom to choose how it is going to evolve."))}m.isMDXComponent=!0}}]);