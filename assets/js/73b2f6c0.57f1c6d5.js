"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[16300],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>u});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,u=c["".concat(d,".").concat(m)]||c[m]||g[m]||s;return r?t.createElement(u,o(o({ref:n},p),{},{components:r})):t.createElement(u,o({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58054:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(58168),a=(r(96540),r(15680));const s={sidebar_position:1},o="Messages and Queries",i={unversionedId:"docs/build/building-modules/messages-and-queries",id:"docs/build/building-modules/messages-and-queries",title:"Messages and Queries",description:"Msgs and Queries are the two primary objects handled by modules. Most of the core components defined in a module, like Msg services, keepers and Query services, exist to process messages and queries.",source:"@site/cosmos-sdk/docs/build/building-modules/02-messages-and-queries.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/messages-and-queries",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/messages-and-queries",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Module Manager",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/module-manager"},next:{title:"Msg Services",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/msg-services"}},d={},l=[{value:"Messages",id:"messages",level:2},{value:"<code>Msg</code> Services",id:"msg-services",level:3},{value:"<code>transaction.Msg</code> Interface",id:"transactionmsg-interface",level:3},{value:"Queries",id:"queries",level:2},{value:"gRPC Queries",id:"grpc-queries",level:3},{value:"Store Queries",id:"store-queries",level:3}],p={toc:l},c="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"messages-and-queries"},"Messages and Queries"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"Msg"),"s and ",(0,a.yg)("inlineCode",{parentName:"p"},"Queries")," are the two primary objects handled by modules. Most of the core components defined in a module, like ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," services, ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper"),"s and ",(0,a.yg)("inlineCode",{parentName:"p"},"Query")," services, exist to process ",(0,a.yg)("inlineCode",{parentName:"p"},"message"),"s and ",(0,a.yg)("inlineCode",{parentName:"p"},"queries"),".")),(0,a.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/intro"},"Introduction to Cosmos SDK Modules")))),(0,a.yg)("h2",{id:"messages"},"Messages"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Msg"),"s are objects whose end-goal is to trigger state-transitions. They are wrapped in ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/advanced/transactions"},"transactions"),", which may contain one or more of them."),(0,a.yg)("p",null,"When a transaction is relayed from the underlying consensus engine to the Cosmos SDK application, it is first decoded by ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/advanced/baseapp"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseApp")),". Then, each message contained in the transaction is extracted and routed to the appropriate module via ",(0,a.yg)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgServiceRouter")," so that it can be processed by the module's ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/msg-services"},(0,a.yg)("inlineCode",{parentName:"a"},"Msg")," service"),". For a more detailed explanation of the lifecycle of a transaction, click ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/beginner/tx-lifecycle"},"here"),"."),(0,a.yg)("h3",{id:"msg-services"},(0,a.yg)("inlineCode",{parentName:"h3"},"Msg")," Services"),(0,a.yg)("p",null,"Defining Protobuf ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," services is the recommended way to handle messages. A Protobuf ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," service should be created for each module, typically in ",(0,a.yg)("inlineCode",{parentName:"p"},"tx.proto")," (see more info about ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/advanced/encoding#faq"},"conventions and naming"),"). It must have an RPC service method defined for each message in the module."),(0,a.yg)("p",null,"Each ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," service method must have exactly one argument, which must implement the ",(0,a.yg)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/core@v1.0.0-alpha.6/transaction#Msg"},(0,a.yg)("inlineCode",{parentName:"a"},"transaction.Msg"))," interface, and a Protobuf response. The naming convention is to call the RPC argument ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg<service-rpc-name>")," and the RPC response ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg<service-rpc-name>Response"),". For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"rpc Send(MsgSend) returns (MsgSendResponse);\n")),(0,a.yg)("p",null,"See an example of a ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," service definition from ",(0,a.yg)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/28fa3b8/x/bank/proto/cosmos/bank/v1beta1/tx.proto#L13-L41\n")),(0,a.yg)("h3",{id:"transactionmsg-interface"},(0,a.yg)("inlineCode",{parentName:"h3"},"transaction.Msg")," Interface"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"transaction.Msg")," uses structural types to define the interface for a message. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/core/transaction/transaction.go#L4-L9\n")),(0,a.yg)("p",null,"Signers from the ",(0,a.yg)("inlineCode",{parentName:"p"},"GetSigners()")," call is automated via a protobuf annotation.\nRead more about the signer field ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/protobuf-annotations"},"here"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/x/bank/proto/cosmos/bank/v1beta1/tx.proto#L45\n")),(0,a.yg)("p",null,"If there is a need for custom signers then there is an alternative path which can be taken. A function which returns ",(0,a.yg)("inlineCode",{parentName:"p"},"signing.CustomGetSigner")," for a specific message can be defined. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func ProvideBankSendTransactionGetSigners() signing.CustomGetSigner {\n    // Extract the signer from the signature.\n    signer, err := coretypes.LatestSigner(Tx).Sender(ethTx)\n    if err != nil {\n        return nil, err\n    }\n\n    // Return the signer in the required format.\n    return [][]byte{signer.Bytes()}, nil\n}\n")),(0,a.yg)("p",null,"This can be provided to the application using depinject's ",(0,a.yg)("inlineCode",{parentName:"p"},"Provide")," method in the application's ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"depinject.Provide(banktypes.ProvideBankSendTransactionGetSigners)\n")),(0,a.yg)("p",null,"The Cosmos SDK uses Protobuf definitions to generate client and server code:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MsgServer")," interface defines the server API for the ",(0,a.yg)("inlineCode",{parentName:"li"},"Msg")," service and its implementation is described as part of the ",(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/msg-services"},(0,a.yg)("inlineCode",{parentName:"a"},"Msg")," services")," documentation."),(0,a.yg)("li",{parentName:"ul"},"Structures are generated for all RPC request and response types.")),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterMsgServer")," method is also generated and should be used to register the module's ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgServer")," implementation in ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterServices")," method from the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/module-manager#appmodule"},(0,a.yg)("inlineCode",{parentName:"a"},"AppModule")," interface"),"."),(0,a.yg)("p",null,"In order for clients (CLI and gRPC-gateway) to have these URLs registered, the Cosmos SDK provides the function ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterMsgServiceDesc(registry codectypes.InterfaceRegistry, sd *grpc.ServiceDesc)")," that should be called inside module's ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/module-manager#hasregisterinterfaces"},(0,a.yg)("inlineCode",{parentName:"a"},"RegisterInterfaces"))," method, using the proto-generated ",(0,a.yg)("inlineCode",{parentName:"p"},"&_Msg_serviceDesc")," as ",(0,a.yg)("inlineCode",{parentName:"p"},"*grpc.ServiceDesc")," argument."),(0,a.yg)("h2",{id:"queries"},"Queries"),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"query")," is a request for information made by end-users of applications through an interface and processed by a full-node. A ",(0,a.yg)("inlineCode",{parentName:"p"},"query")," is received by a full-node through its consensus engine and relayed to the application via the ABCI. It is then routed to the appropriate module via ",(0,a.yg)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"QueryRouter")," so that it can be processed by the module's query service (./04-query-services.md). For a deeper look at the lifecycle of a ",(0,a.yg)("inlineCode",{parentName:"p"},"query"),", click ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/learn/beginner/query-lifecycle"},"here"),"."),(0,a.yg)("h3",{id:"grpc-queries"},"gRPC Queries"),(0,a.yg)("p",null,"Queries should be defined using ",(0,a.yg)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto2/"},"Protobuf services"),". A ",(0,a.yg)("inlineCode",{parentName:"p"},"Query")," service should be created per module in ",(0,a.yg)("inlineCode",{parentName:"p"},"query.proto"),". This service lists endpoints starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"rpc"),"."),(0,a.yg)("p",null,"Here's an example of such a ",(0,a.yg)("inlineCode",{parentName:"p"},"Query")," service definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/proto/cosmos/auth/v1beta1/query.proto#L15-L81\n")),(0,a.yg)("p",null,"As ",(0,a.yg)("inlineCode",{parentName:"p"},"proto.Message"),"s, generated ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," types implement by default ",(0,a.yg)("inlineCode",{parentName:"p"},"String()")," method of ",(0,a.yg)("a",{parentName:"p",href:"https://pkg.go.dev/fmt#Stringer"},(0,a.yg)("inlineCode",{parentName:"a"},"fmt.Stringer")),"."),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterQueryServer")," method is also generated and should be used to register the module's query server in the ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterServices")," method from the ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/module-manager#appmodule"},(0,a.yg)("inlineCode",{parentName:"a"},"AppModule")," interface"),"."),(0,a.yg)("h3",{id:"store-queries"},"Store Queries"),(0,a.yg)("p",null,"Store queries query directly for store keys. They use ",(0,a.yg)("inlineCode",{parentName:"p"},"clientCtx.QueryABCI(req abci.QueryRequest)")," to return the full ",(0,a.yg)("inlineCode",{parentName:"p"},"abci.QueryResponse")," with inclusion Merkle proofs."),(0,a.yg)("p",null,"See following examples:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/baseapp/abci.go#L864-L894\n")))}g.isMDXComponent=!0}}]);