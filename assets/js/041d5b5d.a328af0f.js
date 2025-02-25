"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[74878],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(58168),r=(n(96540),n(15680));const a={sidebar_position:1},s="Rosetta",i={unversionedId:"user/run-node/rosetta",id:"version-0.47/user/run-node/rosetta",title:"Rosetta",description:"The rosetta package implements Coinbase's Rosetta API. This document provides instructions on how to use the Rosetta API integration. For information about the motivation and design choices, refer to ADR 035.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/user/run-node/04-rosetta.md",sourceDirName:"user/run-node",slug:"/user/run-node/rosetta",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/user/run-node/rosetta",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Generating, Signing and Broadcasting Transactions",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/user/run-node/txs"},next:{title:"Running a Testnet",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/user/run-node/run-testnet"}},l={},d=[{value:"Add Rosetta Command",id:"add-rosetta-command",level:2},{value:"Use Rosetta Command",id:"use-rosetta-command",level:2},{value:"Use Rosetta Standalone",id:"use-rosetta-standalone",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Message extension",id:"message-extension",level:3},{value:"Client interface override",id:"client-interface-override",level:3},{value:"Error extension",id:"error-extension",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rosetta"},"Rosetta"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"rosetta")," package implements Coinbase's ",(0,r.yg)("a",{parentName:"p",href:"https://www.rosetta-api.org"},"Rosetta API"),". This document provides instructions on how to use the Rosetta API integration. For information about the motivation and design choices, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/architecture/adr-035-rosetta-api-support"},"ADR 035"),"."),(0,r.yg)("h2",{id:"add-rosetta-command"},"Add Rosetta Command"),(0,r.yg)("p",null,"The Rosetta API server is a stand-alone server that connects to a node of a chain developed with Cosmos SDK."),(0,r.yg)("p",null,"To enable Rosetta API support, it's required to add the ",(0,r.yg)("inlineCode",{parentName:"p"},"RosettaCommand")," to your application's root command file (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"simd/cmd/root.go"),")."),(0,r.yg)("p",null,"Import the ",(0,r.yg)("inlineCode",{parentName:"p"},"rosettaCmd")," package:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import "cosmossdk.io/tools/rosetta/cmd"\n')),(0,r.yg)("p",null,"Find the following line:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"initRootCmd(rootCmd, encodingConfig)\n")),(0,r.yg)("p",null,"After that line, add the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n  rosettaCmd.RosettaCommand(encodingConfig.InterfaceRegistry, encodingConfig.Codec)\n)\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"RosettaCommand")," function builds the ",(0,r.yg)("inlineCode",{parentName:"p"},"rosetta")," root command and is defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"rosettaCmd")," package (",(0,r.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/tools/rosetta/cmd"),")."),(0,r.yg)("p",null,"Since we\u2019ve updated the Cosmos SDK to work with the Rosetta API, updating the application's root command file is all you need to do."),(0,r.yg)("p",null,"An implementation example can be found in ",(0,r.yg)("inlineCode",{parentName:"p"},"simapp")," package."),(0,r.yg)("h2",{id:"use-rosetta-command"},"Use Rosetta Command"),(0,r.yg)("p",null,"To run Rosetta in your application CLI, use the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd rosetta --help\n")),(0,r.yg)("p",null,"To test and run Rosetta API endpoints for applications that are running and exposed, use the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'simd rosetta\n     --blockchain "your application name (ex: gaia)"\n     --network "your chain identifier (ex: testnet-1)"\n     --tendermint "tendermint endpoint (ex: localhost:26657)"\n     --grpc "gRPC endpoint (ex: localhost:9090)"\n     --addr "rosetta binding address (ex: :8080)"\n')),(0,r.yg)("h2",{id:"use-rosetta-standalone"},"Use Rosetta Standalone"),(0,r.yg)("p",null,"To use Rosetta standalone, without having to add it in your application, install it with the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go install cosmossdk.io/tools/rosetta/cmd/rosetta\n")),(0,r.yg)("p",null,"Alternatively, for building from source, simply run ",(0,r.yg)("inlineCode",{parentName:"p"},"make rosetta"),". The binary will be located in ",(0,r.yg)("inlineCode",{parentName:"p"},"tools/rosetta"),"."),(0,r.yg)("h2",{id:"extensions"},"Extensions"),(0,r.yg)("p",null,"There are two ways in which you can customize and extend the implementation with your custom settings."),(0,r.yg)("h3",{id:"message-extension"},"Message extension"),(0,r.yg)("p",null,"In order to make an ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," understandable by rosetta the only thing which is required is adding the methods to your messages that satisfy the ",(0,r.yg)("inlineCode",{parentName:"p"},"rosetta.Msg")," interface. Examples on how to do so can be found in the staking types such as ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgDelegate"),", or in bank types such as ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgSend"),"."),(0,r.yg)("h3",{id:"client-interface-override"},"Client interface override"),(0,r.yg)("p",null,"In case more customization is required, it's possible to embed the Client type and override the methods which require customizations."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package custom_client\nimport (\n\n"context"\n"github.com/coinbase/rosetta-sdk-go/types"\n"cosmossdk.io/tools/rosetta/lib"\n)\n\n// CustomClient embeds the standard cosmos client\n// which means that it implements the cosmos-rosetta-gateway Client\n// interface while at the same time allowing to customize certain methods\ntype CustomClient struct {\n    *rosetta.Client\n}\n\nfunc (c *CustomClient) ConstructionPayload(_ context.Context, request *types.ConstructionPayloadsRequest) (resp *types.ConstructionPayloadsResponse, err error) {\n    // provide custom signature bytes\n    panic("implement me")\n}\n')),(0,r.yg)("p",null,"NOTE: when using a customized client, the command cannot be used as the constructors required ",(0,r.yg)("strong",{parentName:"p"},"may")," differ, so it's required to create a new one. We intend to provide a way to init a customized client without writing extra code in the future."),(0,r.yg)("h3",{id:"error-extension"},"Error extension"),(0,r.yg)("p",null,"Since rosetta requires to provide 'returned' errors to network options. In order to declare a new rosetta error, we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"errors")," package in cosmos-rosetta-gateway."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package custom_errors\nimport crgerrs "cosmossdk.io/tools/rosetta/lib/errors"\n\nvar customErrRetriable = true\nvar CustomError = crgerrs.RegisterError(100, "custom message", customErrRetriable, "description")\n')),(0,r.yg)("p",null,"Note: errors must be registered before cosmos-rosetta-gateway's ",(0,r.yg)("inlineCode",{parentName:"p"},"Server"),".",(0,r.yg)("inlineCode",{parentName:"p"},"Start")," method is called. Otherwise the registration will be ignored. Errors with same code will be ignored too."))}m.isMDXComponent=!0}}]);