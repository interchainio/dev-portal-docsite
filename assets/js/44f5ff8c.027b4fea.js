"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[64387],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>h});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,h=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[g]="string"==typeof e?e:a,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(58168),a=(n(96540),n(15680));const s={title:"Governance",sidebar_label:"Governance",sidebar_position:5,slug:"/ibc/light-clients/wasm/governance"},i="Governance",r={unversionedId:"docs/light-clients/wasm/governance",id:"docs/light-clients/wasm/governance",title:"Governance",description:"Learn how to upload Wasm light client byte code on a chain, and how to migrate an existing Wasm light client contract.",source:"@site/ibc-go/docs/03-light-clients/04-wasm/05-governance.md",sourceDirName:"docs/03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/governance",permalink:"/dev-portal-docsite/ibc-go/next/ibc/light-clients/wasm/governance",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Governance",sidebar_label:"Governance",sidebar_position:5,slug:"/ibc/light-clients/wasm/governance"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/dev-portal-docsite/ibc-go/next/ibc/light-clients/wasm/messages"},next:{title:"Events",permalink:"/dev-portal-docsite/ibc-go/next/ibc/light-clients/wasm/events"}},c={},l=[{value:"Setting an authority",id:"setting-an-authority",level:2},{value:"Storing new Wasm light client byte code",id:"storing-new-wasm-light-client-byte-code",level:2},{value:"Migrating an existing Wasm light client contract",id:"migrating-an-existing-wasm-light-client-contract",level:2},{value:"Removing an existing checksum",id:"removing-an-existing-checksum",level:2}],m={toc:l},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"governance"},"Governance"),(0,a.yg)("p",null,"Learn how to upload Wasm light client byte code on a chain, and how to migrate an existing Wasm light client contract. "),(0,a.yg)("h2",{id:"setting-an-authority"},"Setting an authority"),(0,a.yg)("p",null,"Both the storage of Wasm light client byte code as well as the migration of an existing Wasm light client contract are permissioned (i.e. only allowed to an authority such as governance). The designated authority is specified when instantiating ",(0,a.yg)("inlineCode",{parentName:"p"},"08-wasm"),"'s keeper: both ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L39-L47"},(0,a.yg)("inlineCode",{parentName:"a"},"NewKeeperWithVM"))," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L88-L96"},(0,a.yg)("inlineCode",{parentName:"a"},"NewKeeperWithConfig"))," constructor functions accept an ",(0,a.yg)("inlineCode",{parentName:"p"},"authority")," argument that must be the address of the authorized actor. For example, in ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),", when instantiating the keeper, you can pass the address of the governance module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n  authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"\n  govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"\n\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n// app.go\napp.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(), // authority\n  wasmVM,\n  app.GRPCQueryRouter(),\n)\n')),(0,a.yg)("h2",{id:"storing-new-wasm-light-client-byte-code"},"Storing new Wasm light client byte code"),(0,a.yg)("p",null," If governance is the allowed authority, the governance v1 proposal that needs to be submitted to upload a new light client contract should contain the message ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/proto/ibc/lightclients/wasm/v1/tx.proto#L23-L30"},(0,a.yg)("inlineCode",{parentName:"a"},"MsgStoreCode"))," with the base64-encoded byte code of the Wasm contract. Use the following CLI command and JSON as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx gov submit-proposal <path/to/proposal.json> --from <key_or_address>\n")),(0,a.yg)("p",null,"where ",(0,a.yg)("inlineCode",{parentName:"p"},"proposal.json")," contains:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Upload IBC Wasm light client",\n  "summary": "Upload wasm client",\n  "messages": [\n    {\n      "@type": "/ibc.lightclients.wasm.v1.MsgStoreCode",\n      "signer": "cosmos1...", // the authority address (e.g. the gov module account address)\n      "wasm_byte_code": "YWJ...PUB+" // standard base64 encoding of the Wasm contract byte code\n    }\n  ],\n  "metadata": "AQ==",\n  "deposit": "100stake"\n}\n')),(0,a.yg)("p",null,"To learn more about the ",(0,a.yg)("inlineCode",{parentName:"p"},"submit-proposal")," CLI command, please check out ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/gov#submit-proposal"},"the relevant section in Cosmos SDK documentation"),"."),(0,a.yg)("p",null,"Alternatively, the process of submitting the proposal may be simpler if you use the CLI command ",(0,a.yg)("inlineCode",{parentName:"p"},"store-code"),". This CLI command accepts as argument the file of the Wasm light client contract and takes care of constructing the proposal message with ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," and broadcasting it. See section ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/next/ibc/light-clients/wasm/client#store-code"},(0,a.yg)("inlineCode",{parentName:"a"},"store-code"))," for more information."),(0,a.yg)("h2",{id:"migrating-an-existing-wasm-light-client-contract"},"Migrating an existing Wasm light client contract"),(0,a.yg)("p",null,"If governance is the allowed authority, the governance v1 proposal that needs to be submitted to migrate an existing new Wasm light client contract should contain the message ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/proto/ibc/lightclients/wasm/v1/tx.proto#L52-L63"},(0,a.yg)("inlineCode",{parentName:"a"},"MsgMigrateContract"))," with the checksum of the Wasm byte code to migrate to. Use the following CLI command and JSON as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx gov submit-proposal <path/to/proposal.json> --from <key_or_address>\n")),(0,a.yg)("p",null,"where ",(0,a.yg)("inlineCode",{parentName:"p"},"proposal.json")," contains:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Migrate IBC Wasm light client",\n  "summary": "Migrate wasm client",\n  "messages": [\n    {\n      "@type": "/ibc.lightclients.wasm.v1.MsgMigrateContract",\n      "signer": "cosmos1...", // the authority address (e.g. the gov module account address)\n      "client_id": "08-wasm-1", // client identifier of the Wasm light client contract that will be migrated\n      "checksum": "a8ad...4dc0", // SHA-256 hash of the Wasm byte code to migrate to, previously stored with MsgStoreCode\n      "msg": "{}" // JSON-encoded message to be passed to the contract on migration\n    }\n  ],\n  "metadata": "AQ==",\n  "deposit": "100stake"\n}\n')),(0,a.yg)("p",null,"To learn more about the ",(0,a.yg)("inlineCode",{parentName:"p"},"submit-proposal")," CLI command, please check out ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/gov#submit-proposal"},"the relevant section in Cosmos SDK documentation"),"."),(0,a.yg)("h2",{id:"removing-an-existing-checksum"},"Removing an existing checksum"),(0,a.yg)("p",null,"If governance is the allowed authority, the governance v1 proposal that needs to be submitted to remove a specific checksum from the list of allowed checksums should contain the message ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/proto/ibc/lightclients/wasm/v1/tx.proto#L39-L46"},(0,a.yg)("inlineCode",{parentName:"a"},"MsgRemoveChecksum"))," with the checksum (of a corresponding Wasm byte code). Use the following CLI command and JSON as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx gov submit-proposal <path/to/proposal.json> --from <key_or_address>\n")),(0,a.yg)("p",null,"where ",(0,a.yg)("inlineCode",{parentName:"p"},"proposal.json")," contains:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Remove checksum of Wasm light client byte code",\n  "summary": "Remove checksum",\n  "messages": [\n    {\n      "@type": "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",\n      "signer": "cosmos1...", // the authority address (e.g. the gov module account address)\n      "checksum": "a8ad...4dc0", // SHA-256 hash of the Wasm byte code that should be removed from the list of allowed checksums\n    }\n  ],\n  "metadata": "AQ==",\n  "deposit": "100stake"\n}\n')),(0,a.yg)("p",null,"To learn more about the ",(0,a.yg)("inlineCode",{parentName:"p"},"submit-proposal")," CLI command, please check out ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/gov#submit-proposal"},"the relevant section in Cosmos SDK documentation"),"."))}p.isMDXComponent=!0}}]);