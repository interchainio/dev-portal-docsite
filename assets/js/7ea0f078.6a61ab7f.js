"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[91995],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=i,g=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return t?n.createElement(g,r(r({ref:a},u),{},{components:t})):n.createElement(g,r({ref:a},u))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65483:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=t(58168),i=(t(96540),t(15680));const o={sidebar_position:1},r="Cosmos Blockchain Simulator",s={unversionedId:"learn/advanced/simulation",id:"version-0.47/learn/advanced/simulation",title:"Cosmos Blockchain Simulator",description:"The Cosmos SDK offers a full fledged simulation framework to fuzz test every",source:"@site/cosmos-sdk_versioned_docs/version-0.47/learn/advanced/13-simulation.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/simulation",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/simulation",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"RunTx recovery middleware",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/runtx_middleware"},next:{title:"Protobuf Documentation",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/proto-docs"}},l={},m=[{value:"Goals",id:"goals",level:2},{value:"Simulation commands",id:"simulation-commands",level:2},{value:"Simulator Modes",id:"simulator-modes",level:2},{value:"Usage",id:"usage",level:2},{value:"Debugging Tips",id:"debugging-tips",level:2},{value:"Use simulation in your Cosmos SDK-based application",id:"use-simulation-in-your-cosmos-sdk-based-application",level:2}],u={toc:m},p="wrapper";function d(e){let{components:a,...t}=e;return(0,i.yg)(p,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cosmos-blockchain-simulator"},"Cosmos Blockchain Simulator"),(0,i.yg)("p",null,"The Cosmos SDK offers a full fledged simulation framework to fuzz test every\nmessage defined by a module."),(0,i.yg)("p",null,"On the Cosmos SDK, this functionality is provided by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app_v2.go"},(0,i.yg)("inlineCode",{parentName:"a"},"SimApp")),", which is a\n",(0,i.yg)("inlineCode",{parentName:"p"},"Baseapp")," application that is used for running the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/simulation"},(0,i.yg)("inlineCode",{parentName:"a"},"simulation"))," module.\nThis module defines all the simulation logic as well as the operations for\nrandomized parameters like accounts, balances etc."),(0,i.yg)("h2",{id:"goals"},"Goals"),(0,i.yg)("p",null,"The blockchain simulator tests how the blockchain application would behave under\nreal life circumstances by generating and sending randomized messages.\nThe goal of this is to detect and debug failures that could halt a live chain,\nby providing logs and statistics about the operations run by the simulator as\nwell as exporting the latest application state when a failure was found."),(0,i.yg)("p",null,"Its main difference with integration testing is that the simulator app allows\nyou to pass parameters to customize the chain that's being simulated.\nThis comes in handy when trying to reproduce bugs that were generated in the\nprovided operations (randomized or not)."),(0,i.yg)("h2",{id:"simulation-commands"},"Simulation commands"),(0,i.yg)("p",null,"The simulation app has different commands, each of which tests a different\nfailure type:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppImportExport"),": The simulator exports the initial app state and then it\ncreates a new app with the exported ",(0,i.yg)("inlineCode",{parentName:"li"},"genesis.json")," as an input, checking for\ninconsistencies between the stores."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppSimulationAfterImport"),": Queues two simulations together. The first one provides the app state (",(0,i.yg)("em",{parentName:"li"},"i.e")," genesis) to the second. Useful to test software upgrades or hard-forks from a live chain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppStateDeterminism"),": Checks that all the nodes return the same values, in the same order."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"BenchmarkInvariants"),": Analysis of the performance of running all modules' invariants (",(0,i.yg)("em",{parentName:"li"},"i.e")," sequentially runs a ",(0,i.yg)("a",{parentName:"li",href:"https://pkg.go.dev/testing/#hdr-Benchmarks"},"benchmark")," test). An invariant checks for\ndifferences between the values that are on the store and the passive tracker. Eg: total coins held by accounts vs total supply tracker."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"FullAppSimulation"),": General simulation mode. Runs the chain and the specified operations for a given number of blocks. Tests that there're no ",(0,i.yg)("inlineCode",{parentName:"li"},"panics")," on the simulation. It does also run invariant checks on every ",(0,i.yg)("inlineCode",{parentName:"li"},"Period")," but they are not benchmarked.")),(0,i.yg)("p",null,"Each simulation must receive a set of inputs (",(0,i.yg)("em",{parentName:"p"},"i.e")," flags) such as the number of\nblocks that the simulation is run, seed, block size, etc.\nCheck the full list of flags ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/simulation/client/cli/flags.go#L33-L57"},"here"),"."),(0,i.yg)("h2",{id:"simulator-modes"},"Simulator Modes"),(0,i.yg)("p",null,"In addition to the various inputs and commands, the simulator runs in three modes:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Completely random where the initial state, module parameters and simulation\nparameters are ",(0,i.yg)("strong",{parentName:"li"},"pseudo-randomly generated"),"."),(0,i.yg)("li",{parentName:"ol"},"From a ",(0,i.yg)("inlineCode",{parentName:"li"},"genesis.json")," file where the initial state and the module parameters are defined.\nThis mode is helpful for running simulations on a known state such as a live network export where a new (mostly likely breaking) version of the application needs to be tested."),(0,i.yg)("li",{parentName:"ol"},"From a ",(0,i.yg)("inlineCode",{parentName:"li"},"params.json")," file where the initial state is pseudo-randomly generated but the module and simulation parameters can be provided manually.\nThis allows for a more controlled and deterministic simulation setup while allowing the state space to still be pseudo-randomly simulated.\nThe list of available parameters are listed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/simulation/client/cli/flags.go#L59-L78"},"here"),".")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"These modes are not mutually exclusive. So you can for example run a randomly\ngenerated genesis state (",(0,i.yg)("inlineCode",{parentName:"p"},"1"),") with manually generated simulation params (",(0,i.yg)("inlineCode",{parentName:"p"},"3"),").")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"This is a general example of how simulations are run. For more specific examples\ncheck the Cosmos SDK ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/Makefile#L282-L318"},"Makefile"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"}," $ go test -mod=readonly github.com/cosmos/cosmos-sdk/simapp \\\n  -run=TestApp<simulation_command> \\\n  ...<flags>\n  -v -timeout 24h\n")),(0,i.yg)("h2",{id:"debugging-tips"},"Debugging Tips"),(0,i.yg)("p",null,"Here are some suggestions when encountering a simulation failure:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Export the app state at the height where the failure was found. You can do this\nby passing the ",(0,i.yg)("inlineCode",{parentName:"li"},"-ExportStatePath")," flag to the simulator."),(0,i.yg)("li",{parentName:"ul"},"Use ",(0,i.yg)("inlineCode",{parentName:"li"},"-Verbose")," logs. They could give you a better hint on all the operations\ninvolved."),(0,i.yg)("li",{parentName:"ul"},"Reduce the simulation ",(0,i.yg)("inlineCode",{parentName:"li"},"-Period"),". This will run the invariants checks more\nfrequently."),(0,i.yg)("li",{parentName:"ul"},"Print all the failed invariants at once with ",(0,i.yg)("inlineCode",{parentName:"li"},"-PrintAllInvariants"),"."),(0,i.yg)("li",{parentName:"ul"},"Try using another ",(0,i.yg)("inlineCode",{parentName:"li"},"-Seed"),". If it can reproduce the same error and if it fails\nsooner, you will spend less time running the simulations."),(0,i.yg)("li",{parentName:"ul"},"Reduce the ",(0,i.yg)("inlineCode",{parentName:"li"},"-NumBlocks")," . How's the app state at the height previous to the\nfailure?"),(0,i.yg)("li",{parentName:"ul"},"Run invariants on every operation with ",(0,i.yg)("inlineCode",{parentName:"li"},"-SimulateEveryOperation"),". ",(0,i.yg)("em",{parentName:"li"},"Note"),": this\nwill slow down your simulation ",(0,i.yg)("strong",{parentName:"li"},"a lot"),"."),(0,i.yg)("li",{parentName:"ul"},"Try adding logs to operations that are not logged. You will have to define a\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/staking/keeper/keeper.go#L65-L68"},"Logger")," on your ",(0,i.yg)("inlineCode",{parentName:"li"},"Keeper"),".")),(0,i.yg)("h2",{id:"use-simulation-in-your-cosmos-sdk-based-application"},"Use simulation in your Cosmos SDK-based application"),(0,i.yg)("p",null,"Learn how you can integrate the simulation into your Cosmos SDK-based application:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Application Simulation Manager"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/simulator"},"Building modules: Simulator")),(0,i.yg)("li",{parentName:"ul"},"Simulator tests")))}d.isMDXComponent=!0}}]);