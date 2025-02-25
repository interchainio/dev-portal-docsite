"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[49873],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const o={},r="ADR 010: IBC light clients as SDK modules",l={unversionedId:"architecture/adr-010-light-clients-as-sdk-modules",id:"architecture/adr-010-light-clients-as-sdk-modules",title:"ADR 010: IBC light clients as SDK modules",description:"Changelog",source:"@site/ibc-go/architecture/adr-010-light-clients-as-sdk-modules.md",sourceDirName:"architecture",slug:"/architecture/adr-010-light-clients-as-sdk-modules",permalink:"/dev-portal-docsite/ibc-go/next/architecture/adr-010-light-clients-as-sdk-modules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 009: ICS27 message server addition",permalink:"/dev-portal-docsite/ibc-go/next/architecture/adr-009-v6-ics27-msgserver"},next:{title:"ADR 011: ICS-20 transfer state entry for total amount of tokens in escrow",permalink:"/dev-portal-docsite/ibc-go/next/architecture/adr-011-transfer-total-escrow-state-entry"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Intermodule communication",id:"intermodule-communication",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-010-ibc-light-clients-as-sdk-modules"},"ADR 010: IBC light clients as SDK modules"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"12/12/2022: initial draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Proposed"),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"ibc-go has 3 main consumers:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"IBC light clients"),(0,a.yg)("li",{parentName:"ul"},"IBC applications"),(0,a.yg)("li",{parentName:"ul"},"relayers")),(0,a.yg)("p",null,"Relayers listen and respond to events emitted by ibc-go while IBC light clients and applications are invoked by core IBC.\nCurrently there exists two different approaches to callbacks being invoked by core IBC."),(0,a.yg)("p",null,"IBC light clients currently are invoked by a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsensusState")," interface as defined by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L36"},"core IBC"),".\nThe 02-client submodule will retrieve the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsensusState")," from the IBC store in order to perform callbacks to the light client.\nThis design requires all required information for the light client to function to be stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsensusState")," or potentially under metadata keys for a specific client instance.\nAdditional information may be provided by core IBC via the defined interface arguments if that information is generic enough to be useful to all IBC light clients.\nThis constraint has proved problematic as pass through clients (such as wasm) cannot maintain easy access to a VM instance.\nIn addition, without increasing the size of the defined ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," interface, light clients are unable to take advantage of basic built-in SDK functionality such as genesis import/export and migrations."),(0,a.yg)("p",null,"The other approach used to perform callback logic is via registered SDK modules.\nThis approach is used by core IBC to interact with IBC applications.\nIBC applications will register their callbacks on the IBC router at compile time.\nWhen a packet comes in, core IBC will use the IBC router to lookup the registered callback functions for the provided packet.\nThe benefit of registered callbacks opposed to interface functions is that additional information may be accessed via external keepers.\nBecause the IBC applications are also SDK modules, they additionally get access to a host of functionality provided by the SDK.\nThis includes: genesis import/export, migrations, query/transaction CLI commands, type registration, gRPC query registration, and message server registration."),(0,a.yg)("p",null,"As described in ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/next/architecture/adr-006-02-client-refactor"},"ADR 006"),", generalizing light client behaviour is difficult.\nIBC light clients will obtain greater flexibility and control via the registered SDK module approach."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"Instead of using two different approaches to invoking callbacks, IBC light clients should be invoked as SDK modules.\nOver time and as necessary, core IBC should adjust its interactions with light clients such that they are SDK modules as opposed to interfaces."),(0,a.yg)("p",null,"One immediate decision that has already been applied is to formalize light client type registration via the inclusion of an ",(0,a.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," within the ",(0,a.yg)("inlineCode",{parentName:"p"},"ModuleManager")," for a chain.\nThe ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/2825"},"tendermint")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/2826"},"solo machine")," clients were refactored to include this ",(0,a.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," implementation and core IBC will no longer include either type as registered by default."),(0,a.yg)("p",null,"Longer term solutions include using internal module communication as described in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-033-protobuf-inter-module-comm.md"},"ADR 033")," on the SDK.\nThe following functions should become callbacks invoked via intermodule communication:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Status")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"GetTimestampAtHeight")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VerifyMembership")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VerifyNonMembership")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Initialize")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VerifyClientMessage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CheckForMisbehaviour")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UpdateStateOnMisbehaviour")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UpdateState")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CheckSubstituteAndUpdateState")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VerifyUpgradeAndUpdateState"))),(0,a.yg)("p",null,"The ClientState interface should eventually be trimmed down to something along the lines of:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type ClientState interface {\n    proto.Message\n\n    ClientType() string\n    GetLatestHeight() Height\n    Validate() error\n\n    ZeroCustomFields() ClientState\n\n    // ADDITION\n    Route() string // route used for intermodule communication\n}\n")),(0,a.yg)("p",null,"For the most part, any functions which require access to the client store should likely not be an interface function of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ExportMetadata")," should eventually be replaced by a light client's ability to import/export it's own genesis information."),(0,a.yg)("h3",{id:"intermodule-communication"},"Intermodule communication"),(0,a.yg)("p",null,"To keep the transition from interface callbacks to SDK module callbacks as simple as possible, intermodule communication (when available) should be used to route to light client modules.\nWithout intermodule communication, a routing system would need to be developed/maintained to register callbacks.\nThis functionality of routing to another SDK module should and will be provided by the SDK.\nOnce it is possible to route to SDK modules, a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," type could expose the function ",(0,a.yg)("inlineCode",{parentName:"p"},"Route")," which returns the callback route used to call the light client module."),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"use a single approach for interacting with callbacks"),(0,a.yg)("li",{parentName:"ul"},"greater flexibility and control for IBC light clients"),(0,a.yg)("li",{parentName:"ul"},"does not require developing another routing system")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"requires breaking changes"),(0,a.yg)("li",{parentName:"ul"},"requires waiting for intermodule communication")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("p",null,"N/A"))}p.isMDXComponent=!0}}]);