"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[91472],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44023:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(58168),a=(t(96540),t(15680));const o={sidebar_position:1},i="Query Services",s={unversionedId:"build/building-modules/query-services",id:"version-0.50/build/building-modules/query-services",title:"Query Services",description:"A Protobuf Query service processes queries. Query services are specific to the module in which they are defined, and only process queries defined within said module. They are called from BaseApp's Query method.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/04-query-services.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/query-services",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/query-services",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Msg Services",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/msg-services"},next:{title:"ProtocolBuffer Annotations",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/protobuf-annotations"}},l={},u=[{value:"Implementation of a module query service",id:"implementation-of-a-module-query-service",level:2},{value:"gRPC Service",id:"grpc-service",level:3},{value:"Calling queries from the State Machine",id:"calling-queries-from-the-state-machine",level:3}],c={toc:u},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"query-services"},"Query Services"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"A Protobuf Query service processes ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/messages-and-queries#queries"},(0,a.yg)("inlineCode",{parentName:"a"},"queries")),". Query services are specific to the module in which they are defined, and only process ",(0,a.yg)("inlineCode",{parentName:"p"},"queries")," defined within said module. They are called from ",(0,a.yg)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp#query"},(0,a.yg)("inlineCode",{parentName:"a"},"Query")," method"),".")),(0,a.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager"},"Module Manager")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/messages-and-queries"},"Messages and Queries")))),(0,a.yg)("h2",{id:"implementation-of-a-module-query-service"},"Implementation of a module query service"),(0,a.yg)("h3",{id:"grpc-service"},"gRPC Service"),(0,a.yg)("p",null,"When defining a Protobuf ",(0,a.yg)("inlineCode",{parentName:"p"},"Query")," service, a ",(0,a.yg)("inlineCode",{parentName:"p"},"QueryServer")," interface is generated for each module with all the service methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type QueryServer interface {\n    QueryBalance(context.Context, *QueryBalanceParams) (*types.Coin, error)\n    QueryAllBalances(context.Context, *QueryAllBalancesParams) (*QueryAllBalancesResponse, error)\n}\n")),(0,a.yg)("p",null,"These custom queries methods should be implemented by a module's keeper, typically in ",(0,a.yg)("inlineCode",{parentName:"p"},"./keeper/grpc_query.go"),". The first parameter of these methods is a generic ",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context"),". Therefore, the Cosmos SDK provides a function ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext")," to retrieve the ",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context")," from the provided\n",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context"),"."),(0,a.yg)("p",null,"Here's an example implementation for the bank module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/grpc_query.go\n")),(0,a.yg)("h3",{id:"calling-queries-from-the-state-machine"},"Calling queries from the State Machine"),(0,a.yg)("p",null,"The Cosmos SDK v0.47 introduces a new ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.query.v1.module_query_safe")," Protobuf annotation which is used to state that a query that is safe to be called from within the state machine, for example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a Keeper's query function can be called from another module's Keeper,"),(0,a.yg)("li",{parentName:"ul"},"ADR-033 intermodule query calls,"),(0,a.yg)("li",{parentName:"ul"},"CosmWasm contracts can also directly interact with these queries.")),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation set to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", it means:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The query is deterministic: given a block height it will return the same response upon multiple calls, and doesn't introduce any state-machine breaking changes across SDK patch versions."),(0,a.yg)("li",{parentName:"ul"},"Gas consumption never fluctuates across calls and across patch versions.")),(0,a.yg)("p",null,"If you are a module developer and want to use ",(0,a.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation for your own query, you have to ensure the following things:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the query is deterministic and won't introduce state-machine-breaking changes without coordinated upgrades"),(0,a.yg)("li",{parentName:"ul"},"it has its gas tracked, to avoid the attack vector where no gas is accounted for\non potentially high-computation queries.")))}p.isMDXComponent=!0}}]);