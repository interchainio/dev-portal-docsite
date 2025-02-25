"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[92134],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=t.createContext({}),s=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(g.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,y=m["".concat(g,".").concat(c)]||m[c]||d[c]||r;return n?t.createElement(y,o(o({ref:a},p),{},{components:n})):t.createElement(y,o({ref:a},p))}));function y(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10199:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=n(58168),l=(n(96540),n(15680));const r={sidebar_position:1},o="x/feegrant",i={unversionedId:"build/modules/feegrant/README",id:"version-0.52/build/modules/feegrant/README",title:"x/feegrant",description:"Abstract",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/modules/feegrant/README.md",sourceDirName:"build/modules/feegrant",slug:"/build/modules/feegrant/",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/feegrant/",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/evidence",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/evidence/"},next:{title:"x/gov",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/gov/"}},g={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Grant",id:"grant",level:3},{value:"Fee Allowance types",id:"fee-allowance-types",level:3},{value:"BasicAllowance",id:"basicallowance",level:3},{value:"PeriodicAllowance",id:"periodicallowance",level:3},{value:"AllowedMsgAllowance",id:"allowedmsgallowance",level:3},{value:"FeeGranter flag",id:"feegranter-flag",level:3},{value:"Granted Fee Deductions",id:"granted-fee-deductions",level:3},{value:"Gas",id:"gas",level:3},{value:"Pruning",id:"pruning",level:3},{value:"State",id:"state",level:2},{value:"FeeAllowance",id:"feeallowance",level:3},{value:"FeeAllowanceQueue",id:"feeallowancequeue",level:3},{value:"Messages",id:"messages",level:2},{value:"Msg/GrantAllowance",id:"msggrantallowance",level:3},{value:"Msg/RevokeAllowance",id:"msgrevokeallowance",level:3},{value:"Events",id:"events",level:2},{value:"Msg Server",id:"msg-server",level:2},{value:"MsgGrantAllowance",id:"msggrantallowance-1",level:3},{value:"MsgRevokeAllowance",id:"msgrevokeallowance-1",level:3},{value:"Exec fee allowance",id:"exec-fee-allowance",level:3},{value:"Prune fee allowances",id:"prune-fee-allowances",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"grant",id:"grant-1",level:5},{value:"grants-by-grantee",id:"grants-by-grantee",level:5},{value:"grants-by-granter",id:"grants-by-granter",level:5},{value:"Transactions",id:"transactions",level:4},{value:"grant",id:"grant-2",level:5},{value:"One-time spend limit",id:"one-time-spend-limit",level:6},{value:"Periodic spend limit",id:"periodic-spend-limit",level:6},{value:"With expiration",id:"with-expiration",level:6},{value:"With allowed messages",id:"with-allowed-messages",level:6},{value:"revoke",id:"revoke",level:5},{value:"gRPC",id:"grpc",level:3},{value:"Allowance",id:"allowance",level:4},{value:"Allowances",id:"allowances",level:4}],p={toc:s},m="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(m,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"xfeegrant"},(0,l.yg)("inlineCode",{parentName:"h1"},"x/feegrant")),(0,l.yg)("h2",{id:"abstract"},"Abstract"),(0,l.yg)("p",null,"This document specifies the fee grant module. For the full ADR, please see ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-029-fee-grant-module.md"},"Fee Grant ADR-029"),"."),(0,l.yg)("p",null,"This module allows accounts to grant fee allowances and to use fees from their accounts. Grantees can execute any transaction without the need to maintain sufficient fees."),(0,l.yg)("h2",{id:"contents"},"Contents"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#concepts"},"Concepts")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#state"},"State"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#feeallowance"},"FeeAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#feeallowancequeue"},"FeeAllowanceQueue")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#messages"},"Messages"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#msggrantallowance"},"Msg/GrantAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#msgrevokeallowance"},"Msg/RevokeAllowance")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#events"},"Events")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#msg-server"},"Msg Server"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#msggrantallowance-1"},"MsgGrantAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#msgrevokeallowance-1"},"MsgRevokeAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#exec-fee-allowance"},"Exec fee allowance")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#client"},"Client"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#cli"},"CLI")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#grpc"},"gRPC"))))),(0,l.yg)("h2",{id:"concepts"},"Concepts"),(0,l.yg)("h3",{id:"grant"},"Grant"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Grant")," is stored in the KVStore to record a grant with full context. Every grant will contain ",(0,l.yg)("inlineCode",{parentName:"p"},"granter"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," and what kind of ",(0,l.yg)("inlineCode",{parentName:"p"},"allowance")," is granted. ",(0,l.yg)("inlineCode",{parentName:"p"},"granter")," is an account address who is giving permission to ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," (the beneficiary account address) to pay for some or all of ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee"),"'s transaction fees. ",(0,l.yg)("inlineCode",{parentName:"p"},"allowance")," defines what kind of fee allowance (",(0,l.yg)("inlineCode",{parentName:"p"},"BasicAllowance")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"PeriodicAllowance"),", see below) is granted to ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee"),". ",(0,l.yg)("inlineCode",{parentName:"p"},"allowance")," accepts an interface which implements ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeAllowanceI"),", encoded as ",(0,l.yg)("inlineCode",{parentName:"p"},"Any")," type. There can be only one existing fee grant allowed for a ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"granter"),", self grants are not allowed."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/feegrant.proto#L86-L96\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"FeeAllowanceI")," looks like:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/fees.go#L10-L34\n")),(0,l.yg)("h3",{id:"fee-allowance-types"},"Fee Allowance types"),(0,l.yg)("p",null,"There are two types of fee allowances present at the moment:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BasicAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PeriodicAllowance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"AllowedMsgAllowance"))),(0,l.yg)("h3",{id:"basicallowance"},"BasicAllowance"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"BasicAllowance")," is permission for ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," to use fee from a ",(0,l.yg)("inlineCode",{parentName:"p"},"granter"),"'s account. If any of the ",(0,l.yg)("inlineCode",{parentName:"p"},"spend_limit")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"expiration")," reaches its limit, the grant will be removed from the state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/feegrant.proto#L15-L33\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"spend_limit")," is the limit of coins that are allowed to be used from the ",(0,l.yg)("inlineCode",{parentName:"p"},"granter")," account. If it is empty, it assumes there's no spend limit, ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," can use any number of available coins from ",(0,l.yg)("inlineCode",{parentName:"p"},"granter")," account address before the expiration.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"expiration")," specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When a grant is created with empty values for ",(0,l.yg)("inlineCode",{parentName:"p"},"spend_limit")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"expiration"),", it is still a valid grant. It won't restrict the ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," to use any number of coins from ",(0,l.yg)("inlineCode",{parentName:"p"},"granter")," and it won't have any expiration. The only way to restrict the ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," is by revoking the grant."))),(0,l.yg)("h3",{id:"periodicallowance"},"PeriodicAllowance"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"PeriodicAllowance")," is a repeating fee allowance for the mentioned period, we can mention when the grant can expire as well as when a period can reset. We can also define the maximum number of coins that can be used in a mentioned period of time."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/feegrant.proto#L35-L71\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"basic")," is the instance of ",(0,l.yg)("inlineCode",{parentName:"p"},"BasicAllowance")," which is optional for periodic fee allowance. If empty, the grant will have no ",(0,l.yg)("inlineCode",{parentName:"p"},"expiration")," and no ",(0,l.yg)("inlineCode",{parentName:"p"},"spend_limit"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"period")," is the specific period of time, after each period passes, ",(0,l.yg)("inlineCode",{parentName:"p"},"period_can_spend")," will be reset.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"period_spend_limit")," specifies the maximum number of coins that can be spent in the period.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"period_can_spend")," is the number of coins left to be spent before the period_reset time.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"period_reset")," keeps track of when a next period reset should happen."))),(0,l.yg)("h3",{id:"allowedmsgallowance"},"AllowedMsgAllowance"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"AllowedMsgAllowance")," is a fee allowance, it can be any of ",(0,l.yg)("inlineCode",{parentName:"p"},"BasicFeeAllowance"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"PeriodicAllowance")," but restricted only to the allowed messages mentioned by the granter."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/feegrant.proto#L73-L84\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"allowance")," is either ",(0,l.yg)("inlineCode",{parentName:"p"},"BasicAllowance")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"PeriodicAllowance"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"allowed_messages")," is array of messages allowed to execute the given allowance."))),(0,l.yg)("h3",{id:"feegranter-flag"},"FeeGranter flag"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"feegrant")," module introduces a ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeGranter")," flag for CLI for the sake of executing transactions with fee granter. When this flag is set, ",(0,l.yg)("inlineCode",{parentName:"p"},"clientCtx")," will append the granter account address for transactions generated through CLI."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/client/cmd.go#L269-L280\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/client/tx/tx.go#L129-L131\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/auth/tx/builder.go#L208\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/proto/cosmos/tx/v1beta1/tx.proto#L216-L243\n")),(0,l.yg)("p",null,"Example cmd:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx gov submit-legacy-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --from validator-key --fee-granter=cosmos1xh44hxt7spr67hqaa7nyx5gnutrz5fraw6grxn --chain-id=testnet --fees="10stake"\n')),(0,l.yg)("h3",{id:"granted-fee-deductions"},"Granted Fee Deductions"),(0,l.yg)("p",null,"Fees are deducted from grants in the ",(0,l.yg)("inlineCode",{parentName:"p"},"x/auth")," ante handler. To learn more about how ante handlers work, read the ",(0,l.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/modules/auth/#antehandlers"},"Auth Module AnteHandlers Guide"),"."),(0,l.yg)("h3",{id:"gas"},"Gas"),(0,l.yg)("p",null,"In order to prevent DoS attacks, using a filtered ",(0,l.yg)("inlineCode",{parentName:"p"},"x/feegrant")," incurs gas. The SDK must assure that the ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee"),"'s transactions all conform to the filter set by the ",(0,l.yg)("inlineCode",{parentName:"p"},"granter"),". The SDK does this by iterating over the allowed messages in the filter and charging 10 gas per filtered message. The SDK will then iterate over the messages being sent by the ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," to ensure the messages adhere to the filter, also charging 10 gas per message. The SDK will stop iterating and fail the transaction if it finds a message that does not conform to the filter."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"WARNING"),": The gas is charged against the granted allowance. Ensure your messages conform to the filter, if any, before sending transactions using your allowance."),(0,l.yg)("h3",{id:"pruning"},"Pruning"),(0,l.yg)("p",null,"A queue in the state maintained with the prefix of expiration of the grants and checks them on EndBlock with the current block time for every block to prune."),(0,l.yg)("h2",{id:"state"},"State"),(0,l.yg)("h3",{id:"feeallowance"},"FeeAllowance"),(0,l.yg)("p",null,"Fee Allowances are identified by combining ",(0,l.yg)("inlineCode",{parentName:"p"},"Grantee")," (the account address of fee allowance grantee) with the ",(0,l.yg)("inlineCode",{parentName:"p"},"Granter")," (the account address of fee allowance granter)."),(0,l.yg)("p",null,"Fee allowance grants are stored in the state as follows:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Grant: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x00 | grantee_addr_len (1 byte) | grantee_addr_bytes |  granter_addr_len (1 byte) | granter_addr_bytes -> ProtocolBuffer(Grant)"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/feegrant.pb.go#L222-L230\n")),(0,l.yg)("h3",{id:"feeallowancequeue"},"FeeAllowanceQueue"),(0,l.yg)("p",null,"Fee Allowances queue items are identified by combining the ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeAllowancePrefixQueue")," (i.e., 0x01), ",(0,l.yg)("inlineCode",{parentName:"p"},"expiration"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"grantee")," (the account address of fee allowance grantee), ",(0,l.yg)("inlineCode",{parentName:"p"},"granter")," (the account address of fee allowance granter). Endblocker checks ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeAllowanceQueue")," state for the expired grants and prunes them from  ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeAllowance")," if there are any found."),(0,l.yg)("p",null,"Fee allowance queue keys are stored in the state as follows:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Grant: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x01 | expiration_bytes | grantee_addr_len (1 byte) | grantee_addr_bytes |  granter_addr_len (1 byte) | granter_addr_bytes -> EmptyBytes"))),(0,l.yg)("h2",{id:"messages"},"Messages"),(0,l.yg)("h3",{id:"msggrantallowance"},"Msg/GrantAllowance"),(0,l.yg)("p",null,"A fee allowance grant will be created with the ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgGrantAllowance")," message."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/tx.proto#L30-L44\n")),(0,l.yg)("h3",{id:"msgrevokeallowance"},"Msg/RevokeAllowance"),(0,l.yg)("p",null,"An allowed grant fee allowance can be removed with the ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgRevokeAllowance")," message."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/feegrant/proto/cosmos/feegrant/v1beta1/tx.proto#L49-L62\n")),(0,l.yg)("h2",{id:"events"},"Events"),(0,l.yg)("p",null,"The feegrant module emits the following events:"),(0,l.yg)("h2",{id:"msg-server"},"Msg Server"),(0,l.yg)("h3",{id:"msggrantallowance-1"},"MsgGrantAllowance"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"action"),(0,l.yg)("td",{parentName:"tr",align:null},"set_feegrant")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"granter"),(0,l.yg)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"grantee"),(0,l.yg)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.yg)("h3",{id:"msgrevokeallowance-1"},"MsgRevokeAllowance"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"action"),(0,l.yg)("td",{parentName:"tr",align:null},"revoke_feegrant")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"granter"),(0,l.yg)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"grantee"),(0,l.yg)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.yg)("h3",{id:"exec-fee-allowance"},"Exec fee allowance"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"action"),(0,l.yg)("td",{parentName:"tr",align:null},"use_feegrant")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"granter"),(0,l.yg)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"grantee"),(0,l.yg)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.yg)("h3",{id:"prune-fee-allowances"},"Prune fee allowances"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"action"),(0,l.yg)("td",{parentName:"tr",align:null},"prune_feegrant")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message"),(0,l.yg)("td",{parentName:"tr",align:null},"pruner"),(0,l.yg)("td",{parentName:"tr",align:null},"{prunerAddress}")))),(0,l.yg)("h2",{id:"client"},"Client"),(0,l.yg)("h3",{id:"cli"},"CLI"),(0,l.yg)("p",null,"A user can query and interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"feegrant")," module using the CLI."),(0,l.yg)("h4",{id:"query"},"Query"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.yg)("inlineCode",{parentName:"p"},"feegrant")," state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant --help\n")),(0,l.yg)("h5",{id:"grant-1"},"grant"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"grant")," command allows users to query a grant for a given granter-grantee pair."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grant [granter] [grantee] [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grant cosmos1.. cosmos1..\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"allowance:\n  '@type': /cosmos.feegrant.v1beta1.BasicAllowance\n  expiration: null\n  spend_limit:\n  - amount: \"100\"\n    denom: stake\ngrantee: cosmos1..\ngranter: cosmos1..\n")),(0,l.yg)("h5",{id:"grants-by-grantee"},"grants-by-grantee"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"grants-by-grantee ")," command allows users to query all grants for a given grantee."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant  grants-by-grantee [grantee] [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grants-by-grantee cosmos1..\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'allowances:\n- allowance:\n    \'@type\': /cosmos.feegrant.v1beta1.BasicAllowance\n    expiration: null\n    spend_limit:\n    - amount: "100"\n      denom: stake\n  grantee: cosmos1..\n  granter: cosmos1..\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.yg)("h5",{id:"grants-by-granter"},"grants-by-granter"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"grants-by-granter")," command allows users to query all grants created by a given granter."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grants-by-granter [granter] [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grants-by-granter cosmos1..\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'allowances:\n- allowance:\n    \'@type\': /cosmos.feegrant.v1beta1.BasicAllowance\n    expiration: null\n    spend_limit:\n    - amount: "100"\n      denom: stake\n  grantee: cosmos1..\n  granter: cosmos1..\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.yg)("h4",{id:"transactions"},"Transactions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"feegrant")," module."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant --help\n")),(0,l.yg)("h5",{id:"grant-2"},"grant"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"grant")," command allows users to grant fee allowances to another account. The fee allowance can have an expiration date, a total spend limit, a periodic spend limit, and/or allowed messages."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant [granter] [grantee] [flags]\n")),(0,l.yg)("p",null,"Examples:"),(0,l.yg)("h6",{id:"one-time-spend-limit"},"One-time spend limit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant cosmos1.. cosmos1.. --spend-limit 100stake\n")),(0,l.yg)("h6",{id:"periodic-spend-limit"},"Periodic spend limit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant cosmos1.. cosmos1.. --spend-limit 100stake --period 3600 --period-limit 10stake\n")),(0,l.yg)("h6",{id:"with-expiration"},"With expiration"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant cosmos1.. cosmos1.. --spend-limit 100stake --expiration 2024-10-31T15:04:05Z\n")),(0,l.yg)("h6",{id:"with-allowed-messages"},"With allowed messages"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx feegrant grant cosmos1.. cosmos1.. --spend-limit 100stake --expiration 2024-10-31T15:04:05Z --allowed-messages "/cosmos.gov.v1beta1.MsgSubmitProposal,/cosmos.gov.v1beta1.MsgVote"\n')),(0,l.yg)("p",null,"Available flags:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--spend-limit"),": The maximum amount of tokens the grantee can spend"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--period"),": The time duration in seconds for periodic allowance"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--period-limit"),": The maximum amount of tokens the grantee can spend within each period"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--expiration"),": The date and time when the grant expires (RFC3339 format)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--allowed-messages"),": Comma-separated list of allowed message type URLs")),(0,l.yg)("h5",{id:"revoke"},"revoke"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"revoke")," command allows users to revoke a granted fee allowance."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant revoke [granter] [grantee] [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant revoke cosmos1.. cosmos1..\n")),(0,l.yg)("h3",{id:"grpc"},"gRPC"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"feegrant")," module using gRPC endpoints."),(0,l.yg)("h4",{id:"allowance"},"Allowance"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Allowance")," endpoint allows users to query a granted fee allowance."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.feegrant.v1beta1.Query/Allowance\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"grantee":"cosmos1..","granter":"cosmos1.."}\' \\\n    localhost:9090 \\\n    cosmos.feegrant.v1beta1.Query/Allowance\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "allowance": {\n    "granter": "cosmos1..",\n    "grantee": "cosmos1..",\n    "allowance": {"@type":"/cosmos.feegrant.v1beta1.BasicAllowance","spendLimit":[{"denom":"stake","amount":"100"}]}\n  }\n}\n')),(0,l.yg)("h4",{id:"allowances"},"Allowances"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Allowances")," endpoint allows users to query all granted fee allowances for a given grantee."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.feegrant.v1beta1.Query/Allowances\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"address":"cosmos1.."}\' \\\n    localhost:9090 \\\n    cosmos.feegrant.v1beta1.Query/Allowances\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "allowances": [\n    {\n      "granter": "cosmos1..",\n      "grantee": "cosmos1..",\n      "allowance": {"@type":"/cosmos.feegrant.v1beta1.BasicAllowance","spendLimit":[{"denom":"stake","amount":"100"}]}\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')))}d.isMDXComponent=!0}}]);