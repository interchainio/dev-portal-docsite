"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[3340],{15680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>m});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(o),f=r,m=d["".concat(c,".").concat(f)]||d[f]||h[f]||i;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},59340:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(58168),r=(o(96540),o(15680));const i={title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:6,slug:"/ibc/light-clients/proofs"},a="Existence and non-existence proofs",s={unversionedId:"light-clients/developer-guide/proofs",id:"version-v7.8.x/light-clients/developer-guide/proofs",title:"Existence/Non-Existence Proofs",description:"IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ICS-23 is a general approach for verifying merkle trees which is used in ibc-go.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/01-developer-guide/06-proofs.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proofs",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/light-clients/proofs",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:6,frontMatter:{title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:6,slug:"/ibc/light-clients/proofs"},sidebar:"defaultSidebar",previous:{title:"Handling Upgrades",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/light-clients/upgrades"},next:{title:"Handling Proposals",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/light-clients/proposals"}},c={},p=[{value:"Existence proofs",id:"existence-proofs",level:2},{value:"Non-existence proofs",id:"non-existence-proofs",level:2},{value:"State verification methods: <code>VerifyMembership</code> and <code>VerifyNonMembership</code>",id:"state-verification-methods-verifymembership-and-verifynonmembership",level:2}],l={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"existence-and-non-existence-proofs"},"Existence and non-existence proofs"),(0,r.yg)("p",null,"IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ics23/tree/master/go"},"ICS-23")," is a general approach for verifying merkle trees which is used in ibc-go."),(0,r.yg)("p",null,"Currently, all Cosmos SDK modules contain their own stores, which maintain the state of the application module in an IAVL (immutable AVL) binary merkle tree format. Specifically with regard to IBC, core IBC maintains its own IAVL store, and IBC apps (e.g. transfer) maintain their own dedicated stores. The Cosmos SDK multistore therefore creates a simple merkle tree of all of these IAVL trees, and from each of these individual IAVL tree root hashes it derives a root hash for the application state tree as a whole (the ",(0,r.yg)("inlineCode",{parentName:"p"},"AppHash"),")."),(0,r.yg)("p",null,'For the purposes of ibc-go, there are two types of proofs which are important: existence and non-existence proofs, terms which have been used interchangeably with membership and non-membership proofs. For the purposes of this guide, we will stick with "existence" and "non-existence".'),(0,r.yg)("h2",{id:"existence-proofs"},"Existence proofs"),(0,r.yg)("p",null,"Existence proofs are used in IBC transactions which involve verification of counterparty state for transactions which will result in the writing of provable state. For example, this includes verification of IBC store state for handshakes and packets."),(0,r.yg)("p",null,"Put simply, existence proofs prove that a particular key and value exists in the tree. Under the hood, an IBC existence proof is comprised of two proofs: an IAVL proof that the key exists in IBC store/IBC root hash, and a proof that the IBC root hash exists in the multistore root hash."),(0,r.yg)("h2",{id:"non-existence-proofs"},"Non-existence proofs"),(0,r.yg)("p",null,"Non-existence proofs verify the absence of data stored within counterparty state and are used to prove that a key does NOT exist in state. As stated above, these types of proofs can be used to timeout packets by proving that the counterparty has not written a packet receipt into the store, meaning that a token transfer has NOT successfully occurred."),(0,r.yg)("p",null,"Some trees (e.g. SMT) may have a sentinel empty child for non-existent keys. In this case, the ICS-23 proof spec should include this ",(0,r.yg)("inlineCode",{parentName:"p"},"EmptyChild")," so that ICS-23 handles the non-existence proof correctly."),(0,r.yg)("p",null,'In some cases, there is a necessity to "mock" non-existence proofs if the counterparty does not have ability to prove absence. Since the verification method is designed to give complete control to client implementations, clients can support chains that do not provide absence proofs by verifying the existence of a non-empty sentinel ',(0,r.yg)("inlineCode",{parentName:"p"},"ABSENCE")," value. In these special cases, the proof provided will be an ICS-23 ",(0,r.yg)("inlineCode",{parentName:"p"},"Existence")," proof, and the client will verify that the ",(0,r.yg)("inlineCode",{parentName:"p"},"ABSENCE")," value is stored under the given path for the given height."),(0,r.yg)("h2",{id:"state-verification-methods-verifymembership-and-verifynonmembership"},"State verification methods: ",(0,r.yg)("inlineCode",{parentName:"h2"},"VerifyMembership")," and ",(0,r.yg)("inlineCode",{parentName:"h2"},"VerifyNonMembership")),(0,r.yg)("p",null,"The state verification functions for all IBC data types have been consolidated into two generic methods, ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),"."),(0,r.yg)("p",null,"From the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/e650be91614ced7be687c30eb42714787a3bbc59/modules/core/exported/client.go#L68-L91"},(0,r.yg)("inlineCode",{parentName:"a"},"ClientState")," interface definition"),", we find:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"VerifyMembership(\n    ctx sdk.Context,\n    clientStore sdk.KVStore,\n    cdc codec.BinaryCodec,\n    height Height,\n    delayTimePeriod uint64,\n    delayBlockPeriod uint64,\n    proof []byte,\n    path Path,\n    value []byte,\n) error\n\n// VerifyNonMembership is a generic proof verification method which verifies the absence of a given CommitmentPath at a specified height.\n// The caller is expected to construct the full CommitmentPath from a CommitmentPrefix and a standardized path (as defined in ICS 24).\nVerifyNonMembership(\n    ctx sdk.Context,\n    clientStore sdk.KVStore,\n    cdc codec.BinaryCodec,\n    height Height,\n    delayTimePeriod uint64,\n    delayBlockPeriod uint64,\n    proof []byte,\n    path Path,\n) error\n")),(0,r.yg)("p",null,"Both are expected to be provided with a standardised key path, ",(0,r.yg)("inlineCode",{parentName:"p"},"exported.Path"),", as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24 host requirements"),". Membership verification requires callers to provide the value marshalled as ",(0,r.yg)("inlineCode",{parentName:"p"},"[]byte"),". Delay period values should be zero for non-packet processing verification. A zero proof height is now allowed by core IBC and may be passed into ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),". Light clients are responsible for returning an error if a zero proof height is invalid behaviour."),(0,r.yg)("p",null,"Please refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/e093d85b533ab3572b32a7de60b88a0816bed4af/modules/core/23-commitment/types/merkle.go#L131-L205"},"ICS-23 implementation")," for a concrete example."))}h.isMDXComponent=!0}}]);