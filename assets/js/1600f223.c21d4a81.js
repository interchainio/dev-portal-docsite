"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[57439],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const o={},l="ADR 067: Simulator v2",r={unversionedId:"architecture/adr-067-simulator-v2",id:"version-0.50/architecture/adr-067-simulator-v2",title:"ADR 067: Simulator v2",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/architecture/adr-067-simulator-v2.md",sourceDirName:"architecture",slug:"/architecture/adr-067-simulator-v2",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-067-simulator-v2",draft:!1,tags:[],version:"0.50",frontMatter:{}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Execution",id:"execution",level:3},{value:"Profiling",id:"profiling",level:3},{value:"Breakpoints",id:"breakpoints",level:3},{value:"Validity Predicates",id:"validity-predicates",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"References",id:"references",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-067-simulator-v2"},"ADR 067: Simulator v2"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"June 01, 2023: Initial Draft (@alexanderbez)")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"DRAFT"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"The Cosmos SDK simulator is a tool that allows developers to test the entirety\nof their application's state machine through the use of pseudo-randomized \"operations\",\nwhich represent transactions. The simulator also provides primitives that ensures\nthere are no non-determinism issues and that the application's state machine can\nbe successfully exported and imported using randomized state."),(0,i.yg)("p",null,"The simulator has played an absolutely critical role in the development and testing\nof the Cosmos Hub and all the releases of the Cosmos SDK after the launch of the\nCosmos Hub. Since the Hub, the simulator has relatively not changed much, so it's\noverdue for a revamp."),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"The current simulator, ",(0,i.yg)("inlineCode",{parentName:"p"},"x/simulation"),", acts as a semi-fuzz testing suite that takes\nin an integer that represents a seed into a PRNG. The PRNG is used to generate a\nsequence of \"operations\" that are meant to reflect transactions that an application's\nstate machine can process. Through the use of the PRNG, all aspects of block production\nand consumption are randomized. This includes a block's proposer, the validators\nwho both sign and miss the block, along with the transaction operations themselves."),(0,i.yg)("p",null,"Each Cosmos SDK module defines a set of simulation operations that ",(0,i.yg)("em",{parentName:"p"},"attempt")," to\nproduce valid transactions, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"x/distribution/simulation/operations.go"),". These\noperations can sometimes fail depending on the accumulated state of the application\nwithin that simulation run. The simulator will continue to generate operations\nuntil it has reached a certain number of operations or until it has reached a\nfatal state, reporting results. This gives the ability for application developers\nto reliably execute full range application simulation and fuzz testing against\ntheir application."),(0,i.yg)("p",null,"However, there are a few major drawbacks. Namely, with the advent of ABCI++, specifically\n",(0,i.yg)("inlineCode",{parentName:"p"},"FinalizeBlock"),", the internal workings of the simulator no longer comply with how\nan application would actually perform. Specifically, operations are executed\n",(0,i.yg)("em",{parentName:"p"},"after")," ",(0,i.yg)("inlineCode",{parentName:"p"},"FinalizeBlock"),", whereas they should be executed ",(0,i.yg)("em",{parentName:"p"},"within")," ",(0,i.yg)("inlineCode",{parentName:"p"},"FinalizeBlock"),"."),(0,i.yg)("p",null,"Additionally, the simulator is not very extensible. Developers should be able to\neasily define and extend the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consistency or validity predicates (what are known as invariants today)"),(0,i.yg)("li",{parentName:"ul"},"Property tests of state before and after a block is simulated")),(0,i.yg)("p",null,"In addition, we also want to achieve the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consolidated weight management, i.e. define weights within the simulator itself\nvia a config and not defined in each module"),(0,i.yg)("li",{parentName:"ul"},"Observability of the simulator's execution, i.e. have easy to understand output/logs\nwith the ability to pipe those logs into some external sink"),(0,i.yg)("li",{parentName:"ul"},"Smart replay, i.e. the ability to not only rerun a simulation from a seed, but\nalso the ability to replay from an arbitrary breakpoint"),(0,i.yg)("li",{parentName:"ul"},"Run a simulation based off of real network state")),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"Instead of refactoring the existing simulator, ",(0,i.yg)("inlineCode",{parentName:"p"},"x/simulation"),", we propose to create\na new package in the root of the Cosmos SDK, ",(0,i.yg)("inlineCode",{parentName:"p"},"simulator"),", that will be the new\nsimulation framework. The simulator will more accurately reflect the complete\nlifecycle of an ABCI application."),(0,i.yg)("p",null,"Specifically, we propose a similar implementation and use of a ",(0,i.yg)("inlineCode",{parentName:"p"},"simulator.Manager"),",\nthat exists today, that is responsible for managing the execution of a simulation.\nThe manager will wrap an ABCI application and will be responsible for the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Populating the application's mempool with a set of pseudo-random transactions\nbefore each block, some of which may contain invalid messages."),(0,i.yg)("li",{parentName:"ul"},"Selecting transactions and a random proposer to execute ",(0,i.yg)("inlineCode",{parentName:"li"},"PrepareProposal"),"."),(0,i.yg)("li",{parentName:"ul"},"Executing ",(0,i.yg)("inlineCode",{parentName:"li"},"ProcessProposal"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"FinalizeBlock")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Commit"),"."),(0,i.yg)("li",{parentName:"ul"},"Executing a set of validity predicates before and after each block."),(0,i.yg)("li",{parentName:"ul"},"Maintaining a CPU and RAM profile of the simulation execution."),(0,i.yg)("li",{parentName:"ul"},"Allowing a simulation to stop and resume from a given block height."),(0,i.yg)("li",{parentName:"ul"},"Simulation liveness of each validator per-block.")),(0,i.yg)("p",null,"From an application developer's perspective, they will only need to provide the\nmodules to be used in the simulator and the manager will take care of the rest.\nIn addition, they will not need to write their own simulation test(s), e.g.\nnon-determinism, multi-seed, etc..., as the manager will provide these as well."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Manager struct {\n  app     sdk.Application\n  mempool sdk.Mempool\n  rng     rand.Rand\n  // ...\n}\n")),(0,i.yg)("h3",{id:"configuration"},"Configuration"),(0,i.yg)("p",null,"The simulator's testing input will be driven by a configuration file, as opposed\nto CLI arguments. This will allow for more extensibility and ease of use along with\nthe ability to have shared configuration files across multiple simulations."),(0,i.yg)("h3",{id:"execution"},"Execution"),(0,i.yg)("p",null,"As alluded to previously, after the execution of each block, the manager will\ngenerate a series of pseudo-random transactions and attempt to insert them into\nthe mempool via ",(0,i.yg)("inlineCode",{parentName:"p"},"BaseApp#CheckTx"),". During the ABCI lifecycle of a block, this\nmempool will be used to seed the transactions into a block proposal as it would\nin a real network. This allows us to not only test the state machine, but also\ntest the ABCI lifecycle of a block."),(0,i.yg)("p",null,"Statistics, such as total blocks and total failed proposals, will be collected,\nlogged and written to output after the full or partial execution of a simulation.\nThe output destination of these statistics will be configurable."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (s *Simulator) SimulateBlock() {\n  rProposer := s.SelectRandomProposer()\n  rTxs := s.SelectTxs()\n\n  prepareResp, err := s.app.PrepareProposal(&abci.PrepareProposalRequest{Txs: rTxs})\n  // handle error\n\n  processResp, err := s.app.ProcessProposal(&abci.ProcessProposalRequest{\n    Txs: prepareResp.Txs,\n    // ...\n  })\n  // handle error\n\n  // execute liveness matrix...\n\n  _, err = s.app.FinalizeBlock(...)\n  // handle error\n  \n  _, err = s.app.Commit(...)\n  // handle error\n}\n")),(0,i.yg)("p",null,"Note, some applications do not define or need their own app-side mempool, so we\npropose that ",(0,i.yg)("inlineCode",{parentName:"p"},"SelectTxs")," mimic CometBFT and just return FIFO-ordered transactions\nfrom an ad-hoc simulator mempool. In the case where an application does define\nits own mempool, it will simply ignore what is provided in ",(0,i.yg)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),"."),(0,i.yg)("h3",{id:"profiling"},"Profiling"),(0,i.yg)("p",null,"The manager will be responsible for collecting CPU and RAM profiles of the simulation\nexecution. We propose to use ",(0,i.yg)("a",{parentName:"p",href:"https://pyroscope.io/docs/golang/"},"Pyroscope")," to\ncapture profiles and export them to a local file and via an HTTP endpoint. This\ncan be disabled or enabled by configuration."),(0,i.yg)("h3",{id:"breakpoints"},"Breakpoints"),(0,i.yg)("p",null,"Via configuration, a caller can express a height-based breakpoint that will allow\nthe simulation to stop and resume from a given height. This will allow for debugging\nof CPU, RAM, and state."),(0,i.yg)("h3",{id:"validity-predicates"},"Validity Predicates"),(0,i.yg)("p",null,"We propose to provide the ability for an application to provide the simulator a\nset of validity predicates, i.e. invariant checkers, that will be executed before\nand after each block. This will allow for the application to assert that certain\nstate invariants are held before and after each block. Note, as a consequence of\nthis, we propose to remove the existing notion of invariants from module production\nexecution paths and deprecate their usage altogether."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Manager struct {\n  // ...\n  preBlockValidator   func(sdk.Context) error\n  postBlockValidator  func(sdk.Context) error\n}\n")),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.yg)("p",null,"The new simulator package will not naturally not be backwards compatible with the\nexisting ",(0,i.yg)("inlineCode",{parentName:"p"},"x/simulation")," module. However, modules will still be responsible for\nproviding pseudo-random transactions to the simulator."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Providing more intuitive and cleaner APIs for application developers"),(0,i.yg)("li",{parentName:"ul"},"More closely resembling the true lifecycle of an ABCI application")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Breaking current Cosmos SDK module APIs for transaction generation")),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/osmosis-labs/osmosis/blob/main/simulation/ADR.md"},"Osmosis Simulation ADR"))))}d.isMDXComponent=!0}}]);