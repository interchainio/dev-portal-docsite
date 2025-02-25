"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[83525],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=r,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||o;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={},i="ADR 031: Protobuf Msg Services",s={unversionedId:"architecture/adr-031-msg-service",id:"version-0.50/architecture/adr-031-msg-service",title:"ADR 031: Protobuf Msg Services",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/architecture/adr-031-msg-service.md",sourceDirName:"architecture",slug:"/architecture/adr-031-msg-service",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-031-msg-service",draft:!1,tags:[],version:"0.50",frontMatter:{}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Encoding",id:"encoding",level:3},{value:"Decoding",id:"decoding",level:3},{value:"Routing",id:"routing",level:3},{value:"Module Configuration",id:"module-configuration",level:3},{value:"<code>Msg</code> Service Implementation",id:"msg-service-implementation",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"References",id:"references",level:2}],d={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-031-protobuf-msg-services"},"ADR 031: Protobuf Msg Services"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2020-10-05: Initial Draft"),(0,r.yg)("li",{parentName:"ul"},"2021-04-21: Remove ",(0,r.yg)("inlineCode",{parentName:"li"},"ServiceMsg"),"s to follow Protobuf ",(0,r.yg)("inlineCode",{parentName:"li"},"Any"),"'s spec, see ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9063"},"#9063"),".")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Accepted"),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,"We want to leverage protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"service")," definitions for defining ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s which will give us significant developer UX\nimprovements in terms of the code that is generated and the fact that return types will now be well defined."),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"Currently ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," handlers in the Cosmos SDK do have return values that are placed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," field of the response.\nThese return values, however, are not specified anywhere except in the golang handler code."),(0,r.yg)("p",null,"In early conversations ",(0,r.yg)("a",{parentName:"p",href:"https://docs.google.com/document/d/1eEgYgvgZqLE45vETjhwIw4VOqK-5hwQtZtjVbiXnIGc/edit"},"it was proposed"),"\nthat ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," return types be captured using a protobuf extension field, ex:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},'package cosmos.gov;\n\nmessage MsgSubmitProposal\n    option (cosmos_proto.msg_return) = "uint64";\n    string delegator_address = 1;\n    string validator_address = 2;\n    repeated sdk.Coin amount = 3;\n}\n')),(0,r.yg)("p",null,"This was never adopted, however."),(0,r.yg)("p",null,"Having a well-specified return value for ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s would improve client UX. For instance,\nin ",(0,r.yg)("inlineCode",{parentName:"p"},"x/gov"),",  ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," returns the proposal ID as a big-endian ",(0,r.yg)("inlineCode",{parentName:"p"},"uint64"),".\nThis isn\u2019t really documented anywhere and clients would need to know the internals\nof the Cosmos SDK to parse that value and return it to users."),(0,r.yg)("p",null,"Also, there may be cases where we want to use these return values programmatically.\nFor instance, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7093"},"https://github.com/cosmos/cosmos-sdk/issues/7093")," proposes a method for\ndoing inter-module Ocaps using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," router. A well-defined return type would\nimprove the developer UX for this approach."),(0,r.yg)("p",null,"In addition, handler registration of ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types tends to add a bit of\nboilerplate on top of keepers and is usually done through manual type switches.\nThis isn't necessarily bad, but it does add overhead to creating modules."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"We decide to use protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"service")," definitions for defining ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s as well as\nthe code generated by them as a replacement for ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," handlers."),(0,r.yg)("p",null,"Below we define how this will look for the ",(0,r.yg)("inlineCode",{parentName:"p"},"SubmitProposal")," message from ",(0,r.yg)("inlineCode",{parentName:"p"},"x/gov")," module.\nWe start with a ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," ",(0,r.yg)("inlineCode",{parentName:"p"},"service")," definition:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},"package cosmos.gov;\n\nservice Msg {\n  rpc SubmitProposal(MsgSubmitProposal) returns (MsgSubmitProposalResponse);\n}\n\n// Note that for backwards compatibility this uses MsgSubmitProposal as the request\n// type instead of the more canonical MsgSubmitProposalRequest\nmessage MsgSubmitProposal {\n  google.protobuf.Any content = 1;\n  string proposer = 2;\n}\n\nmessage MsgSubmitProposalResponse {\n  uint64 proposal_id;\n}\n")),(0,r.yg)("p",null,"While this is most commonly used for gRPC, overloading protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"service")," definitions like this does not violate\nthe intent of the ",(0,r.yg)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto3/#services"},"protobuf spec")," which says:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you don\u2019t want to use gRPC, it\u2019s also possible to use protocol buffers with your own RPC implementation.\nWith this approach, we would get an auto-generated ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgServer")," interface:")),(0,r.yg)("p",null,"In addition to clearly specifying return types, this has the benefit of generating client and server code. On the server\nside, this is almost like an automatically generated keeper method and could maybe be used instead of keepers eventually\n(see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7093"},"#","7093"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"package gov\n\ntype MsgServer interface {\n  SubmitProposal(context.Context, *MsgSubmitProposal) (*MsgSubmitProposalResponse, error)\n}\n")),(0,r.yg)("p",null,"On the client side, developers could take advantage of this by creating RPC implementations that encapsulate transaction\nlogic. Protobuf libraries that use asynchronous callbacks, like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/protobufjs/protobuf.js#using-services"},"protobuf.js"),"\ncould use this to register callbacks for specific messages even for transactions that include multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s."),(0,r.yg)("p",null,"Each ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method should have exactly one request parameter: its corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," type. For example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method ",(0,r.yg)("inlineCode",{parentName:"p"},"/cosmos.gov.v1beta1.Msg/SubmitProposal")," above has exactly one request parameter, namely the ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," type ",(0,r.yg)("inlineCode",{parentName:"p"},"/cosmos.gov.v1beta1.MsgSubmitProposal"),". It is important the reader understands clearly the nomenclature difference between a ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service (a Protobuf service) and a ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," type (a Protobuf message), and the differences in their fully-qualified name."),(0,r.yg)("p",null,"This convention has been decided over the more canonical ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg...Request")," names mainly for backwards compatibility, but also for better readability in ",(0,r.yg)("inlineCode",{parentName:"p"},"TxBody.messages")," (see ",(0,r.yg)("a",{parentName:"p",href:"#encoding"},"Encoding section")," below): transactions containing ",(0,r.yg)("inlineCode",{parentName:"p"},"/cosmos.gov.MsgSubmitProposal")," read better than those containing ",(0,r.yg)("inlineCode",{parentName:"p"},"/cosmos.gov.v1beta1.MsgSubmitProposalRequest"),"."),(0,r.yg)("p",null,"One consequence of this convention is that each ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," type can be the request parameter of only one ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method. However, we consider this limitation a good practice in explicitness."),(0,r.yg)("h3",{id:"encoding"},"Encoding"),(0,r.yg)("p",null,"Encoding of transactions generated with ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," services do not differ from current Protobuf transaction encoding as defined in ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-020-protobuf-transaction-encoding"},"ADR-020"),". We are encoding ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types (which are exactly ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service methods' request parameters) as ",(0,r.yg)("inlineCode",{parentName:"p"},"Any")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"Tx"),"s which involves packing the\nbinary-encoded ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," with its type URL."),(0,r.yg)("h3",{id:"decoding"},"Decoding"),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types are packed into ",(0,r.yg)("inlineCode",{parentName:"p"},"Any"),", decoding transactions messages are done by unpacking ",(0,r.yg)("inlineCode",{parentName:"p"},"Any"),"s into ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types. For more information, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-020-protobuf-transaction-encoding#transactions"},"ADR-020"),"."),(0,r.yg)("h3",{id:"routing"},"Routing"),(0,r.yg)("p",null,"We propose to add a ",(0,r.yg)("inlineCode",{parentName:"p"},"msg_service_router")," in BaseApp. This router is a key/value map which maps ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types' ",(0,r.yg)("inlineCode",{parentName:"p"},"type_url"),"s to their corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method handler. Since there is a 1-to-1 mapping between ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types and ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method, the ",(0,r.yg)("inlineCode",{parentName:"p"},"msg_service_router")," has exactly one entry per ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method."),(0,r.yg)("p",null,"When a transaction is processed by BaseApp (in CheckTx or in DeliverTx), its ",(0,r.yg)("inlineCode",{parentName:"p"},"TxBody.messages")," are decoded as ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s. Each ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"type_url")," is matched against an entry in the ",(0,r.yg)("inlineCode",{parentName:"p"},"msg_service_router"),", and the respective ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service method handler is called."),(0,r.yg)("p",null,"For backward compatibility, the old handlers are not removed yet. If BaseApp receives a legacy ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," with no corresponding entry in the ",(0,r.yg)("inlineCode",{parentName:"p"},"msg_service_router"),", it will be routed via its legacy ",(0,r.yg)("inlineCode",{parentName:"p"},"Route()")," method into the legacy handler."),(0,r.yg)("h3",{id:"module-configuration"},"Module Configuration"),(0,r.yg)("p",null,"In ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021"),", we introduced a method ",(0,r.yg)("inlineCode",{parentName:"p"},"RegisterQueryService"),"\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"AppModule")," which allows for modules to register gRPC queriers."),(0,r.yg)("p",null,"To register ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," services, we attempt a more extensible approach by converting ",(0,r.yg)("inlineCode",{parentName:"p"},"RegisterQueryService"),"\nto a more generic ",(0,r.yg)("inlineCode",{parentName:"p"},"RegisterServices")," method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type AppModule interface {\n  RegisterServices(Configurator)\n  ...\n}\n\ntype Configurator interface {\n  QueryServer() grpc.Server\n  MsgServer() grpc.Server\n}\n\n// example module:\nfunc (am AppModule) RegisterServices(cfg Configurator) {\n    types.RegisterQueryServer(cfg.QueryServer(), keeper)\n    types.RegisterMsgServer(cfg.MsgServer(), keeper)\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"RegisterServices")," method and the ",(0,r.yg)("inlineCode",{parentName:"p"},"Configurator")," interface are intended to\nevolve to satisfy the use cases discussed in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7093"},"#","7093"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7421"},"#","7122"),"."),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," services are registered, the framework ",(0,r.yg)("em",{parentName:"p"},"should")," verify that all ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," types\nimplement the ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," interface and throw an error during initialization rather\nthan later when transactions are processed."),(0,r.yg)("h3",{id:"msg-service-implementation"},(0,r.yg)("inlineCode",{parentName:"h3"},"Msg")," Service Implementation"),(0,r.yg)("p",null,"Just like query services, ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service methods can retrieve the ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Context"),"\nfrom the ",(0,r.yg)("inlineCode",{parentName:"p"},"context.Context")," parameter method using the ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext"),"\nmethod:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"package gov\n\nfunc (k Keeper) SubmitProposal(goCtx context.Context, params *types.MsgSubmitProposal) (*MsgSubmitProposalResponse, error) {\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    ...\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Context")," should have an ",(0,r.yg)("inlineCode",{parentName:"p"},"EventManager")," already attached by BaseApp's ",(0,r.yg)("inlineCode",{parentName:"p"},"msg_service_router"),"."),(0,r.yg)("p",null,"Separate handler definition is no longer needed with this approach."),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("p",null,"This design changes how a module functionality is exposed and accessed. It deprecates the existing ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler")," interface and ",(0,r.yg)("inlineCode",{parentName:"p"},"AppModule.Route")," in favor of ",(0,r.yg)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto3/#services"},"Protocol Buffer Services")," and Service Routing described above. This dramatically simplifies the code. We don't need to create handlers and keepers any more. Use of Protocol Buffer auto-generated clients clearly separates the communication interfaces between the module and a modules user. The control logic (aka handlers and keepers) is not exposed any more. A module interface can be seen as a black box accessible through a client API. It's worth to note that the client interfaces are also generated by Protocol Buffers."),(0,r.yg)("p",null,"This also allows us to change how we perform functional tests. Instead of mocking AppModules and Router, we will mock a client (server will stay hidden). More specifically: we will never mock ",(0,r.yg)("inlineCode",{parentName:"p"},"moduleA.MsgServer")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"moduleB"),", but rather ",(0,r.yg)("inlineCode",{parentName:"p"},"moduleA.MsgClient"),". One can think about it as working with external services (eg DBs, or online servers...). We assume that the transmission between clients and servers is correctly handled by generated Protocol Buffers."),(0,r.yg)("p",null,'Finally, closing a module to client API opens desirable OCAP patterns discussed in ADR-033. Since server implementation and interface is hidden, nobody can hold "keepers"/servers and will be forced to relay on the client interface, which will drive developers for correct encapsulation and software engineering patterns.'),(0,r.yg)("h3",{id:"pros"},"Pros"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"communicates return type clearly"),(0,r.yg)("li",{parentName:"ul"},"manual handler registration and return type marshaling is no longer needed, just implement the interface and register it"),(0,r.yg)("li",{parentName:"ul"},"communication interface is automatically generated, the developer can now focus only on the state transition methods - this would improve the UX of ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7093"},"#","7093")," approach (1) if we chose to adopt that"),(0,r.yg)("li",{parentName:"ul"},"generated client code could be useful for clients and tests"),(0,r.yg)("li",{parentName:"ul"},"dramatically reduces and simplifies the code")),(0,r.yg)("h3",{id:"cons"},"Cons"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"using ",(0,r.yg)("inlineCode",{parentName:"li"},"service")," definitions outside the context of gRPC could be confusing (but doesn\u2019t violate the proto3 spec)")),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7122"},"Initial Github Issue ","#","7122")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://protobuf.dev/programming-guides/proto3/#services"},"proto 3 Language Guide: Defining Services")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-020-protobuf-transaction-encoding"},"ADR 020")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021"))))}c.isMDXComponent=!0}}]);