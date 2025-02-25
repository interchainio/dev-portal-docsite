"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[37405],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const i={},r="ADR-065: Store V2",s={unversionedId:"docs/build/architecture/adr-065-store-v2",id:"docs/build/architecture/adr-065-store-v2",title:"ADR-065: Store V2",description:"Changelog",source:"@site/cosmos-sdk/docs/build/architecture/adr-065-store-v2.md",sourceDirName:"docs/build/architecture",slug:"/docs/build/architecture/adr-065-store-v2",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-065-store-v2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 64: ABCI 2.0 Integration (Phase II)",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-064-abci-2.0"},next:{title:"ADR 067: Simulator v2",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-067-simulator-v2"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Decision",id:"decision",level:2},{value:"State Commitment (SC)",id:"state-commitment-sc",level:3},{value:"State Sync",id:"state-sync",level:4},{value:"RootStore",id:"rootstore",level:4},{value:"Store Keys",id:"store-keys",level:4},{value:"Proofs",id:"proofs",level:4},{value:"Commitment",id:"commitment",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Module Storage Control",id:"module-storage-control",level:3},{value:"Historical State Proofs",id:"historical-state-proofs",level:3},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-065-store-v2"},"ADR-065: Store V2"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Feb 14, 2023: Initial Draft (@alexanderbez)"),(0,o.yg)("li",{parentName:"ul"},"Dec 21, 2023: Updates after implementation (@alexanderbez)")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"ACCEPTED"),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"The storage and state primitives that Cosmos SDK based applications have used have\nby and large not changed since the launch of the inaugural Cosmos Hub. The demands\nand needs of Cosmos SDK based applications, from both developer and client UX\nperspectives, have evolved and outgrown the ecosystem since these primitives\nwere first introduced."),(0,o.yg)("p",null,"Over time as these applications have gained significant adoption, many critical\nshortcomings and flaws have been exposed in the state and storage primitives of\nthe Cosmos SDK."),(0,o.yg)("p",null,"In order to keep up with the evolving demands and needs of both clients and developers,\na major overhaul to these primitives are necessary."),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"The Cosmos SDK provides application developers with various storage primitives\nfor dealing with application state. Specifically, each module contains its own\nmerkle commitment data structure -- an IAVL tree. In this data structure, a module\ncan store and retrieve key-value pairs along with Merkle commitments, i.e. proofs,\nto those key-value pairs indicating that they do or do not exist in the global\napplication state. This data structure is the base layer ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,o.yg)("p",null,"In addition, the SDK provides abstractions on top of this Merkle data structure.\nNamely, a root multi-store (RMS) is a collection of each module's ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),".\nThrough the RMS, the application can serve queries and provide proofs to clients\nin addition to provide a module access to its own unique ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," though the use\nof ",(0,o.yg)("inlineCode",{parentName:"p"},"StoreKey"),", which is an OCAP primitive."),(0,o.yg)("p",null,"There are further layers of abstraction that sit between the RMS and the underlying\nIAVL ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),". A ",(0,o.yg)("inlineCode",{parentName:"p"},"GasKVStore")," is responsible for tracking gas IO consumption for\nstate machine reads and writes. A ",(0,o.yg)("inlineCode",{parentName:"p"},"CacheKVStore")," is responsible for providing a\nway to cache reads and buffer writes to make state transitions atomic, e.g.\ntransaction execution or governance proposal execution."),(0,o.yg)("p",null,"There are a few critical drawbacks to these layers of abstraction and the overall\ndesign of storage in the Cosmos SDK:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Since each module has its own IAVL ",(0,o.yg)("inlineCode",{parentName:"li"},"KVStore"),", commitments are not ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/14625"},"atomic"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Note, we can still allow modules to have their own IAVL ",(0,o.yg)("inlineCode",{parentName:"li"},"KVStore"),", but the\nIAVL library will need to support the ability to pass a DB instance as an\nargument to various IAVL APIs."))),(0,o.yg)("li",{parentName:"ul"},"Since IAVL is responsible for both state storage and commitment, running an\narchive node becomes increasingly expensive as disk space grows exponentially."),(0,o.yg)("li",{parentName:"ul"},"As the size of a network increases, various performance bottlenecks start to\nemerge in many areas such as query performance, network upgrades, state\nmigrations, and general application performance."),(0,o.yg)("li",{parentName:"ul"},"Developer UX is poor as it does not allow application developers to experiment\nwith different types of approaches to storage and commitments, along with the\ncomplications of many layers of abstractions referenced above.")),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/13545"},"Storage Discussion")," for more information."),(0,o.yg)("h2",{id:"alternatives"},"Alternatives"),(0,o.yg)("p",null,"There was a previous attempt to refactor the storage layer described in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),".\nHowever, this approach mainly stems on the short comings of IAVL and various performance\nissues around it. While there was a (partial) implementation of ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),",\nit was never adopted for a variety of reasons, such as the reliance on using an\nSMT, which was more in a research phase, and some design choices that couldn't\nbe fully agreed upon, such as the snap-shotting mechanism that would result in\nmassive state bloat."),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"We propose to build upon some of the great ideas introduced in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-040-storage-and-smt-state-commitments"},"ADR-040"),",\nwhile being a bit more flexible with the underlying implementations and overall\nless intrusive. Specifically, we propose to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Reduce layers of abstractions necessary between the RMS and underlying stores."),(0,o.yg)("li",{parentName:"ul"},"Remove unnecessary store types and implementations such as ",(0,o.yg)("inlineCode",{parentName:"li"},"CacheKVStore"),"."),(0,o.yg)("li",{parentName:"ul"},"Remove the branching logic from the store package."),(0,o.yg)("li",{parentName:"ul"},"Ensure the ",(0,o.yg)("inlineCode",{parentName:"li"},"RootStore")," interface remains as lightweight as possible."),(0,o.yg)("li",{parentName:"ul"},"Allow application developers to easily swap out SC backends.")),(0,o.yg)("p",null,"Furthermore, we will keep IAVL as the default ",(0,o.yg)("a",{parentName:"p",href:"https://cryptography.fandom.com/wiki/Commitment_scheme"},"SC"),"\nbackend for the time being. While we might not fully settle on the use of IAVL in\nthe long term, we do not have strong empirical evidence to suggest a better\nalternative. Given that the SDK provides interfaces for stores, it should be sufficient\nto change the backing commitment store in the future should evidence arise to\nwarrant a better alternative. However there is promising work being done to IAVL\nthat should result in significant performance improvement ",(0,o.yg)("sup",null,"[1,2]"),"."),(0,o.yg)("p",null,"Note, we will provide applications with the ability to use IAVL v1,  IAVL v2 and MemIAVL as\neither SC backend, with the latter showing extremely promising performance improvements\nover IAVL v0 and v1, at the cost of a state migration."),(0,o.yg)("h3",{id:"state-commitment-sc"},"State Commitment (SC)"),(0,o.yg)("p",null,"A foremost design goal is that SC backends should be easily swappable, i.e. not\nnecessarily IAVL.  To this end, the scope of SC has been reduced, it must only:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Provide a stateful root app hash for height h resulting from applying a batch\nof key-value set/deletes to height h-1."),(0,o.yg)("li",{parentName:"ul"},"Fulfill (though not necessarily provide) historical proofs for all heights < h."),(0,o.yg)("li",{parentName:"ul"},"Provide an API for snapshot create/restore to fulfill state sync requests.")),(0,o.yg)("p",null,"An SC implementation may choose not to provide historical proofs past height h - n (n can be 0)\ndue to the time and space constraints, but since store v2 defines an API for historical\nproofs there should be at least one configuration of a given SC backend which\nsupports this."),(0,o.yg)("h4",{id:"state-sync"},"State Sync"),(0,o.yg)("p",null,"The state sync process should be largely unaffected by the separation of the SC\nand SS layers. However, if a node syncs via state sync, the SS layer of the node\nwill not have the state synced height available, since the IAVL import process is\nnot setup in way to easily allow direct key/value insertion."),(0,o.yg)("p",null,"We propose a simple ",(0,o.yg)("inlineCode",{parentName:"p"},"SnapshotManager")," that consumes and produces snapshots. SC\nbackends will be responsible for providing a snapshot of the state at a given\nheight and both SS and SC consume snapshots to restore state."),(0,o.yg)("h4",{id:"rootstore"},"RootStore"),(0,o.yg)("p",null,"We will define a ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," interface and default implementation that will be\nthe primary interface for the application to interact with. The ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," will\nbe responsible for housing SS and SC backends. Specifically, a ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," will\nprovide the following functionality:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Manage commitment of state "),(0,o.yg)("li",{parentName:"ul"},"Provide modules access to state"),(0,o.yg)("li",{parentName:"ul"},"Query delegation (i.e. get a value for a <key, height> tuple)"),(0,o.yg)("li",{parentName:"ul"},"Providing commitment proofs")),(0,o.yg)("h4",{id:"store-keys"},"Store Keys"),(0,o.yg)("p",null,"Naturally, if a single SC tree is used in all RootStore implementations, then the\nnotion of a store key becomes entirely useless. However, we cannot dictate or\npredicate how all applications will implement their RooStore (if they choose to)."),(0,o.yg)("p",null,"Since an app can choose to have multiple SC trees, we need to keep the notion of\nstore keys. Unlike store v1, we represent store keys as simple strings as opposed\nto concrete types to provide OCAP functionality. The store key strings act to\nsolely provide key prefixing/namespacing functionality for modules."),(0,o.yg)("h4",{id:"proofs"},"Proofs"),(0,o.yg)("p",null,"Providing a ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitmentOp")," type, will be the responsibility of the SC backend. Retrieving proofs will be done through the a ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore"),", which will internally route the request to the SC backend."),(0,o.yg)("h4",{id:"commitment"},"Commitment"),(0,o.yg)("p",null,"Before ABCI 2.0, specifically before ",(0,o.yg)("inlineCode",{parentName:"p"},"FinalizeBlock")," was introduced, the flow of state\ncommitment in BaseApp was defined by writes being written to the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootMultiStore"),"\nand then a single Commit call on the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootMultiStore")," during the ABCI Commit method."),(0,o.yg)("p",null,"With the advent of ABCI 2.0, the commitment flow has now changed to ",(0,o.yg)("inlineCode",{parentName:"p"},"WorkingHash")," being\ncalled during ",(0,o.yg)("inlineCode",{parentName:"p"},"FinalizeBlock")," and then Commit being called on ABCI Commit. Note,\n",(0,o.yg)("inlineCode",{parentName:"p"},"WorkingHash")," does not actually commit state to disk, but rather computes an\nuncommitted work-in-progress hash, which is returned in ",(0,o.yg)("inlineCode",{parentName:"p"},"FinalizeBlock"),". Then,\nduring the ABCI Commit phase, the state is finally flushed to disk."),(0,o.yg)("p",null,"In store v2, we must respect this flow. Thus, a caller is expected to call ",(0,o.yg)("inlineCode",{parentName:"p"},"WorkingHash"),"\nduring ",(0,o.yg)("inlineCode",{parentName:"p"},"FinalizeBlock"),", which takes the latest changeset in the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore"),",\nwrites that to the SC tree in a single batch and returns a hash. Finally, during\nthe ABCI Commit phase, we call ",(0,o.yg)("inlineCode",{parentName:"p"},"Commit")," on the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," which commits the SC\ntree and flushes the changeset to the SS backend."),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("p",null,"As a result of a new store V2 package, we should expect to see improved performance\nfor queries and transactions due to the separation of concerns. We should also\nexpect to see improved developer UX around experimentation of commitment schemes\nand storage backends for further performance, in addition to a reduced amount of\nabstraction around KVStores making operations such as caching and state branching\nmore intuitive."),(0,o.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.yg)("p",null,"This ADR proposes changes to the storage implementation in the Cosmos SDK through\nan entirely new package. Interfaces may be borrowed and extended from existing\ntypes that exist in ",(0,o.yg)("inlineCode",{parentName:"p"},"store"),", but no existing implementations or interfaces will\nbe broken or modified."),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Improved performance of SC layers"),(0,o.yg)("li",{parentName:"ul"},"Reduced layers of abstraction making storage primitives easier to understand"),(0,o.yg)("li",{parentName:"ul"},"Redesign of storage types and interfaces will allow for greater experimentation\nsuch as different physical storage backends and different commitment schemes\nfor different application modules")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Removal of OCAP-based store keys in favor of simple strings for state retrieval\nand name-spacing. We consider this neutral as removal of OCAP functionality can\nbe seen as a negative, however, we're simply moving the OCAP functionality upstream\nto the KVStore service. The SS and SC layers shouldn't have to concern themselves\nwith OCAP responsibilities."),(0,o.yg)("li",{parentName:"ul"},"Keeping IAVL as the primary commitment data structure, although drastic\nperformance improvements are being made")),(0,o.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,o.yg)("h3",{id:"module-storage-control"},"Module Storage Control"),(0,o.yg)("p",null,"Many modules store secondary indexes that are typically solely used to support\nclient queries, but are actually not needed for the state machine's state\ntransitions. What this means is that these indexes technically have no reason to\nexist in the SC layer at all, as they take up unnecessary space. It is worth\nexploring what an API would look like to allow modules to indicate what (key, value)\npairs they want to be persisted in the SC layer, implicitly indicating the SS\nlayer as well, as opposed to just persisting the (key, value) pair only in the\nSS layer."),(0,o.yg)("h3",{id:"historical-state-proofs"},"Historical State Proofs"),(0,o.yg)("p",null,"It is not clear what the importance or demand is within the community of providing\ncommitment proofs for historical state. While solutions can be devised such as\nrebuilding trees on the fly based on state snapshots, it is not clear what the\nperformance implications are for such solutions."),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"[1]"," ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/iavl/pull/676"},"https://github.com/cosmos/iavl/pull/676")),(0,o.yg)("li",{parentName:"ul"},"[2]"," ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/iavl/pull/664"},"https://github.com/cosmos/iavl/pull/664")),(0,o.yg)("li",{parentName:"ul"},"[3]"," ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/14990"},"https://github.com/cosmos/cosmos-sdk/issues/14990")),(0,o.yg)("li",{parentName:"ul"},"[4]"," ",(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/e/2PACX-1vSCFfXZm2vsRsACOPoxGqysMaUg7jY833LwR3YyjA1S3FNHfXRiJor-qLjzx833TavLXLPSIcFZJhyh/pub"},"https://docs.google.com/document/d/e/2PACX-1vSCFfXZm2vsRsACOPoxGqysMaUg7jY833LwR3YyjA1S3FNHfXRiJor-qLjzx833TavLXLPSIcFZJhyh/pub"))))}h.isMDXComponent=!0}}]);