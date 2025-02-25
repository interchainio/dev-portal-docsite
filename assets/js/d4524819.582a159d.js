"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[80008],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:1},i="x/epochs",l={unversionedId:"docs/build/modules/epochs/README",id:"docs/build/modules/epochs/README",title:"x/epochs",description:"Abstract",source:"@site/cosmos-sdk/docs/build/modules/epochs/README.md",sourceDirName:"docs/build/modules/epochs",slug:"/docs/build/modules/epochs/",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/epochs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/distribution",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/distribution/"},next:{title:"x/evidence",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/evidence/"}},s={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"State",id:"state",level:2},{value:"Events",id:"events",level:2},{value:"BeginBlocker",id:"beginblocker",level:3},{value:"EndBlocker",id:"endblocker",level:3},{value:"Keepers",id:"keepers",level:2},{value:"Keeper functions",id:"keeper-functions",level:3},{value:"Hooks",id:"hooks",level:2},{value:"How modules receive hooks",id:"how-modules-receive-hooks",level:3},{value:"Panic isolation",id:"panic-isolation",level:3},{value:"Queries",id:"queries",level:2},{value:"Epoch Infos",id:"epoch-infos",level:3},{value:"Current Epoch",id:"current-epoch",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"xepochs"},(0,o.yg)("inlineCode",{parentName:"h1"},"x/epochs")),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"Often in the SDK, we would like to run certain code every-so often. The\npurpose of ",(0,o.yg)("inlineCode",{parentName:"p"},"epochs")," module is to allow other modules to set that they\nwould like to be signaled once every period. So another module can\nspecify it wants to execute code once a week, starting at UTC-time = x.\n",(0,o.yg)("inlineCode",{parentName:"p"},"epochs")," creates a generalized epoch interface to other modules so that\nthey can easily be signaled upon such events."),(0,o.yg)("h2",{id:"contents"},"Contents"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#concepts"},"Concept"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#state"},"State"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#events"},"Events"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#keepers"},"Keeper"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#hooks"},"Hooks"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"#queries"},"Queries")))),(0,o.yg)("h2",{id:"concepts"},"Concepts"),(0,o.yg)("p",null,'The epochs module defines on-chain timers that execute at fixed time intervals.\nOther SDK modules can then register logic to be executed at the timer ticks.\nWe refer to the period in between two timer ticks as an "epoch".'),(0,o.yg)("p",null,"Every timer has a unique identifier.\nEvery epoch will have a start time, and an end time, where ",(0,o.yg)("inlineCode",{parentName:"p"},"end time = start time + timer interval"),".\nOn mainnet, we only utilize one identifier, with a time interval of ",(0,o.yg)("inlineCode",{parentName:"p"},"one day"),"."),(0,o.yg)("p",null,"The timer will tick at the first block whose block time is greater than the timer end time,\nand set the start as the prior timer end time. (Notably, it's not set to the block time!)\nThis means that if the chain has been down for a while, you will get one timer tick per block,\nuntil the timer has caught up."),(0,o.yg)("h2",{id:"state"},"State"),(0,o.yg)("p",null,"The Epochs module keeps a single ",(0,o.yg)("inlineCode",{parentName:"p"},"EpochInfo")," per identifier.\nThis contains the current state of the timer with the corresponding identifier.\nIts fields are modified at every timer tick.\nEpochInfos are initialized as part of genesis initialization or upgrade logic,\nand are only modified on begin blockers."),(0,o.yg)("h2",{id:"events"},"Events"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"epochs")," module emits the following events:"),(0,o.yg)("h3",{id:"beginblocker"},"BeginBlocker"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"epoch_start"),(0,o.yg)("td",{parentName:"tr",align:null},"epoch_number"),(0,o.yg)("td",{parentName:"tr",align:null},"{epoch_number}")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"epoch_start"),(0,o.yg)("td",{parentName:"tr",align:null},"start_time"),(0,o.yg)("td",{parentName:"tr",align:null},"{start_time}")))),(0,o.yg)("h3",{id:"endblocker"},"EndBlocker"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"epoch_end"),(0,o.yg)("td",{parentName:"tr",align:null},"epoch_number"),(0,o.yg)("td",{parentName:"tr",align:null},"{epoch_number}")))),(0,o.yg)("h2",{id:"keepers"},"Keepers"),(0,o.yg)("h3",{id:"keeper-functions"},"Keeper functions"),(0,o.yg)("p",null,"Epochs keeper module provides utility functions to manage epochs."),(0,o.yg)("h2",{id:"hooks"},"Hooks"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"  // the first block whose timestamp is after the duration is counted as the end of the epoch\n  AfterEpochEnd(ctx sdk.Context, epochIdentifier string, epochNumber int64)\n  // new epoch is next block of epoch end block\n  BeforeEpochStart(ctx sdk.Context, epochIdentifier string, epochNumber int64)\n")),(0,o.yg)("h3",{id:"how-modules-receive-hooks"},"How modules receive hooks"),(0,o.yg)("p",null,"On hook receiver function of other modules, they need to filter\n",(0,o.yg)("inlineCode",{parentName:"p"},"epochIdentifier")," and only do executions for only specific\nepochIdentifier. Filtering epochIdentifier could be in ",(0,o.yg)("inlineCode",{parentName:"p"},"Params")," of other\nmodules so that they can be modified by governance."),(0,o.yg)("p",null,"This is the standard dev UX of this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-golang"},"func (k MyModuleKeeper) AfterEpochEnd(ctx sdk.Context, epochIdentifier string, epochNumber int64) {\n    params := k.GetParams(ctx)\n    if epochIdentifier == params.DistrEpochIdentifier {\n    // my logic\n  }\n}\n")),(0,o.yg)("h3",{id:"panic-isolation"},"Panic isolation"),(0,o.yg)("p",null,"If a given epoch hook panics, its state update is reverted, but we keep\nproceeding through the remaining hooks. This allows more advanced epoch\nlogic to be used, without concern over state machine halting, or halting\nsubsequent modules."),(0,o.yg)("p",null,'This does mean that if there is behavior you expect from a prior epoch\nhook, and that epoch hook reverted, your hook may also have an issue. So\ndo keep in mind "what if a prior hook didn\'t get executed" in the safety\nchecks you consider for a new epoch hook.'),(0,o.yg)("h2",{id:"queries"},"Queries"),(0,o.yg)("p",null,"The Epochs module provides the following queries to check the module's state."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"service Query {\n  // EpochInfos provide running epochInfos\n  rpc EpochInfos(QueryEpochsInfoRequest) returns (QueryEpochsInfoResponse) {}\n  // CurrentEpoch provide current epoch of specified identifier\n  rpc CurrentEpoch(QueryCurrentEpochRequest) returns (QueryCurrentEpochResponse) {}\n}\n")),(0,o.yg)("h3",{id:"epoch-infos"},"Epoch Infos"),(0,o.yg)("p",null,"Query the currently running epochInfos"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"<appd> query epochs epoch-infos\n")),(0,o.yg)("p",null,":::details Example"),(0,o.yg)("p",null,"An example output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'epochs:\n- current_epoch: "183"\n  current_epoch_start_height: "2438409"\n  current_epoch_start_time: "2021-12-18T17:16:09.898160996Z"\n  duration: 86400s\n  epoch_counting_started: true\n  identifier: day\n  start_time: "2021-06-18T17:00:00Z"\n- current_epoch: "26"\n  current_epoch_start_height: "2424854"\n  current_epoch_start_time: "2021-12-17T17:02:07.229632445Z"\n  duration: 604800s\n  epoch_counting_started: true\n  identifier: week\n  start_time: "2021-06-18T17:00:00Z"\n')),(0,o.yg)("p",null,":::"),(0,o.yg)("h3",{id:"current-epoch"},"Current Epoch"),(0,o.yg)("p",null,"Query the current epoch by the specified identifier"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"<appd> query epochs current-epoch [identifier]\n")),(0,o.yg)("p",null,":::details Example"),(0,o.yg)("p",null,"Query the current ",(0,o.yg)("inlineCode",{parentName:"p"},"day")," epoch:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"<appd> query epochs current-epoch day\n")),(0,o.yg)("p",null,"Which in this example outputs:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'current_epoch: "183"\n')),(0,o.yg)("p",null,":::"))}d.isMDXComponent=!0}}]);