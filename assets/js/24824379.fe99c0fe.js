"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[69672],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[u]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(58168),s=(t(96540),t(15680));const o={title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},i="Messages",r={unversionedId:"docs/apps/interchain-accounts/messages",id:"docs/apps/interchain-accounts/messages",title:"Messages",description:"MsgRegisterInterchainAccount",source:"@site/ibc-go/docs/02-apps/02-interchain-accounts/05-messages.md",sourceDirName:"docs/02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/messages",permalink:"/dev-portal-docsite/ibc-go/next/apps/interchain-accounts/messages",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/dev-portal-docsite/ibc-go/next/apps/interchain-accounts/integration"},next:{title:"Parameters",permalink:"/dev-portal-docsite/ibc-go/next/apps/interchain-accounts/parameters"}},c={},l=[{value:"<code>MsgRegisterInterchainAccount</code>",id:"msgregisterinterchainaccount",level:2},{value:"<code>MsgSendTx</code>",id:"msgsendtx",level:2},{value:"Queries",id:"queries",level:3},{value:"Atomicity",id:"atomicity",level:2}],p={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,s.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"messages"},"Messages"),(0,s.yg)("h2",{id:"msgregisterinterchainaccount"},(0,s.yg)("inlineCode",{parentName:"h2"},"MsgRegisterInterchainAccount")),(0,s.yg)("p",null,"An Interchain Accounts channel handshake can be initiated using ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgRegisterInterchainAccount"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterInterchainAccount struct {\n  Owner        string\n  ConnectionID string\n  Version      string\n  Ordering     channeltypes.Order\n}\n")),(0,s.yg)("p",null,"This message is expected to fail if:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"Owner")," is an empty string or contains more than 2048 bytes."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"ConnectionID")," is invalid (see ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),").")),(0,s.yg)("p",null,"This message will construct a new ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenInit")," on chain and route it to the core IBC message server to initiate the opening step of the channel handshake."),(0,s.yg)("p",null,"The controller submodule will generate a new port identifier. The caller is expected to provide an appropriate application version string. For example, this may be an ICS-27 JSON encoded ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L11"},(0,s.yg)("inlineCode",{parentName:"a"},"Metadata"))," type or an ICS-29 JSON encoded ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/fee/v1/metadata.proto#L11"},(0,s.yg)("inlineCode",{parentName:"a"},"Metadata"))," type with a nested application version.\nIf the ",(0,s.yg)("inlineCode",{parentName:"p"},"Version")," string is omitted, the controller submodule will construct a default version string in the ",(0,s.yg)("inlineCode",{parentName:"p"},"OnChanOpenInit")," handshake callback."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterInterchainAccountResponse struct {\n  ChannelID string\n  PortId string\n}\n")),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"ChannelID")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"PortID")," are returned in the message response."),(0,s.yg)("h2",{id:"msgsendtx"},(0,s.yg)("inlineCode",{parentName:"h2"},"MsgSendTx")),(0,s.yg)("p",null,"An Interchain Accounts transaction can be executed on a remote host chain by sending a ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgSendTx")," from the corresponding controller chain:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type MsgSendTx struct {\n  Owner           string\n  ConnectionID    string\n  PacketData      InterchainAccountPacketData \n  RelativeTimeout uint64\n}\n")),(0,s.yg)("p",null,"This message is expected to fail if:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"Owner")," is an empty string or contains more than 2048 bytes."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"ConnectionID")," is invalid (see ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"PacketData")," contains an ",(0,s.yg)("inlineCode",{parentName:"li"},"UNSPECIFIED")," type enum, the length of ",(0,s.yg)("inlineCode",{parentName:"li"},"Data")," bytes is zero or the ",(0,s.yg)("inlineCode",{parentName:"li"},"Memo")," field exceeds 256 characters in length."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"RelativeTimeout")," is zero.")),(0,s.yg)("p",null,"This message will create a new IBC packet with the provided ",(0,s.yg)("inlineCode",{parentName:"p"},"PacketData")," and send it via the channel associated with the ",(0,s.yg)("inlineCode",{parentName:"p"},"Owner")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"ConnectionID"),".\nThe ",(0,s.yg)("inlineCode",{parentName:"p"},"PacketData")," is expected to contain a list of serialized ",(0,s.yg)("inlineCode",{parentName:"p"},"[]sdk.Msg")," in the form of ",(0,s.yg)("inlineCode",{parentName:"p"},"CosmosTx"),". Please note the signer field of each ",(0,s.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," must be the interchain account address.\nWhen the packet is relayed to the host chain, the ",(0,s.yg)("inlineCode",{parentName:"p"},"PacketData")," is unmarshalled and the messages are authenticated and executed."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type MsgSendTxResponse struct {\n  Sequence uint64\n}\n")),(0,s.yg)("p",null,"The packet ",(0,s.yg)("inlineCode",{parentName:"p"},"Sequence")," is returned in the message response."),(0,s.yg)("h3",{id:"queries"},"Queries"),(0,s.yg)("p",null,"It is possible to use ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/eecfa5c09a4c38a5c9f2cc2a322d2286f45911da/proto/ibc/applications/interchain_accounts/host/v1/tx.proto#L41-L51"},(0,s.yg)("inlineCode",{parentName:"a"},"MsgModuleQuerySafe"))," to execute a list of queries on the host chain. This message can be included in the list of encoded ",(0,s.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s of ",(0,s.yg)("inlineCode",{parentName:"p"},"InterchainPacketData"),". The host chain will return on the acknowledgment the responses for all the queries. Please note that only module safe queries can be executed (",(0,s.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/building-modules/query-services#calling-queries-from-the-state-machine"},"deterministic queries that are safe to be called from within the state machine"),"). "),(0,s.yg)("p",null,"The queries available from Cosmos SDK are:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-plaintext"},"/cosmos.auth.v1beta1.Query/Accounts\n/cosmos.auth.v1beta1.Query/Account\n/cosmos.auth.v1beta1.Query/AccountAddressByID\n/cosmos.auth.v1beta1.Query/Params\n/cosmos.auth.v1beta1.Query/ModuleAccounts\n/cosmos.auth.v1beta1.Query/ModuleAccountByName\n/cosmos.auth.v1beta1.Query/AccountInfo\n/cosmos.bank.v1beta1.Query/Balance\n/cosmos.bank.v1beta1.Query/AllBalances\n/cosmos.bank.v1beta1.Query/SpendableBalances\n/cosmos.bank.v1beta1.Query/SpendableBalanceByDenom\n/cosmos.bank.v1beta1.Query/TotalSupply\n/cosmos.bank.v1beta1.Query/SupplyOf\n/cosmos.bank.v1beta1.Query/Params\n/cosmos.bank.v1beta1.Query/DenomMetadata\n/cosmos.bank.v1beta1.Query/DenomMetadataByQueryString\n/cosmos.bank.v1beta1.Query/DenomsMetadata\n/cosmos.bank.v1beta1.Query/DenomOwners\n/cosmos.bank.v1beta1.Query/SendEnabled\n/cosmos.circuit.v1.Query/Account\n/cosmos.circuit.v1.Query/Accounts\n/cosmos.circuit.v1.Query/DisabledList\n/cosmos.staking.v1beta1.Query/Validators\n/cosmos.staking.v1beta1.Query/Validator\n/cosmos.staking.v1beta1.Query/ValidatorDelegations\n/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations\n/cosmos.staking.v1beta1.Query/Delegation\n/cosmos.staking.v1beta1.Query/UnbondingDelegation\n/cosmos.staking.v1beta1.Query/DelegatorDelegations\n/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations\n/cosmos.staking.v1beta1.Query/Redelegations\n/cosmos.staking.v1beta1.Query/DelegatorValidators\n/cosmos.staking.v1beta1.Query/DelegatorValidator\n/cosmos.staking.v1beta1.Query/HistoricalInfo\n/cosmos.staking.v1beta1.Query/Pool\n/cosmos.staking.v1beta1.Query/Params\n")),(0,s.yg)("p",null,"And the query available from ibc-go is:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-plaintext"},"/ibc.core.client.v1.Query/VerifyMembership\n")),(0,s.yg)("p",null,"The following code block shows an example of how ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgModuleQuerySafe")," can be used to query the account balance of an account on the host chain. The resulting packet data variable is used to set the ",(0,s.yg)("inlineCode",{parentName:"p"},"PacketData")," of ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgSendTx"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},'balanceQuery := banktypes.NewQueryBalanceRequest("cosmos1...", "uatom")\nqueryBz, err := balanceQuery.Marshal()\n\n// signer of message must be the interchain account on the host\nqueryMsg := icahosttypes.NewMsgModuleQuerySafe("cosmos2...", []icahosttypes.QueryRequest{\n  {\n    Path: "/cosmos.bank.v1beta1.Query/Balance",\n    Data: queryBz,\n  },\n})\n\nbz, err := icatypes.SerializeCosmosTx(cdc, []proto.Message{queryMsg}, icatypes.EncodingProtobuf)\n\npacketData := icatypes.InterchainAccountPacketData{\n  Type: icatypes.EXECUTE_TX,\n  Data: bz,\n  Memo: "",\n}\n')),(0,s.yg)("h2",{id:"atomicity"},"Atomicity"),(0,s.yg)("p",null,"As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg")," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore"},(0,s.yg)("inlineCode",{parentName:"a"},"CacheMultiStore"))," architecture provided by the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/context.html"},(0,s.yg)("inlineCode",{parentName:"a"},"Context"))," type."),(0,s.yg)("p",null,"This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg"),"s succeed."))}g.isMDXComponent=!0}}]);