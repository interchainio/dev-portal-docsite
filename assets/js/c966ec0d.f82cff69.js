"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[7795],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>f});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,f=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const r={title:"Fee Messages",sidebar_label:"Fee Messages",sidebar_position:3,slug:"/middleware/ics29-fee/msgs"},o="Fee messages",s={unversionedId:"middleware/ics29-fee/msgs",id:"version-v6.3.x/middleware/ics29-fee/msgs",title:"Fee Messages",description:"Learn about the different ways to pay for fees, how the fees are paid out and what happens when not enough escrowed fees are available for payout",source:"@site/ibc-go_versioned_docs/version-v6.3.x/03-middleware/01-ics29-fee/03-msgs.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/msgs",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/middleware/ics29-fee/msgs",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"Fee Messages",sidebar_label:"Fee Messages",sidebar_position:3,slug:"/middleware/ics29-fee/msgs"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/middleware/ics29-fee/integration"},next:{title:"Fee Distribution",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/middleware/ics29-fee/fee-distribution"}},l={},c=[{value:"Escrowing fees",id:"escrowing-fees",level:2},{value:"Paying out the escrowed fees",id:"paying-out-the-escrowed-fees",level:2},{value:"A locked fee middleware module",id:"a-locked-fee-middleware-module",level:2}],d={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"fee-messages"},"Fee messages"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Learn about the different ways to pay for fees, how the fees are paid out and what happens when not enough escrowed fees are available for payout ")),(0,i.yg)("h2",{id:"escrowing-fees"},"Escrowing fees"),(0,i.yg)("p",null,"The fee middleware module exposes two different ways to pay fees for relaying IBC packets:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"MsgPayPacketFee"),", which enables the escrowing of fees for a packet at the next sequence send and should be combined into one ",(0,i.yg)("inlineCode",{parentName:"p"},"MultiMsgTx")," with the message that will be paid for."),(0,i.yg)("p",{parentName:"li"}," Note that the ",(0,i.yg)("inlineCode",{parentName:"p"},"Relayers")," field has been set up to allow for an optional whitelist of relayers permitted to receive this fee, however, this feature has not yet been enabled at this time."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type MsgPayPacketFee struct{\n  // fee encapsulates the recv, ack and timeout fees associated with an IBC packet\n  Fee                 Fee\n  // the source port unique identifier\n  SourcePortId        string\n  // the source channel unique identifier\n  SourceChannelId     string\n  // account address to refund fee if necessary\n  Signer              string\n  // optional list of relayers permitted to the receive packet fee\n  Relayers            []string\n}\n")),(0,i.yg)("p",{parentName:"li"}," The ",(0,i.yg)("inlineCode",{parentName:"p"},"Fee")," message contained in this synchronous fee payment method configures different fees which will be paid out for ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgRecvPacket"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgAcknowledgement"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgTimeout"),"/",(0,i.yg)("inlineCode",{parentName:"p"},"MsgTimeoutOnClose"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Fee struct {\n    RecvFee             types.Coins\n    AckFee              types.Coins\n    TimeoutFee          types.Coins\n}\n")),(0,i.yg)("p",{parentName:"li"},"The diagram below shows the ",(0,i.yg)("inlineCode",{parentName:"p"},"MultiMsgTx")," with the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgTransfer")," coming from a token transfer message, along with ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgPayPacketFee"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"msgpaypacket.png",src:a(16786).A,width:"1400",height:"897"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"MsgPayPacketFeeAsync"),", which enables the asynchronous escrowing of fees for a specified packet:"),(0,i.yg)("p",{parentName:"li"},"Note that a packet can be 'topped up' multiple times with additional fees of any coin denomination by broadcasting multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgPayPacketFeeAsync")," messages."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type MsgPayPacketFeeAsync struct {\n  // unique packet identifier comprised of the channel ID, port ID and sequence\n  PacketId            channeltypes.PacketId\n  // the packet fee associated with a particular IBC packet\n  PacketFee           PacketFee\n}\n")),(0,i.yg)("p",{parentName:"li"},"where the ",(0,i.yg)("inlineCode",{parentName:"p"},"PacketFee")," also specifies the ",(0,i.yg)("inlineCode",{parentName:"p"},"Fee")," to be paid as well as the refund address for fees which are not paid out"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type PacketFee struct {\n    Fee                    Fee\n    RefundAddress          string\n    Relayers               []string\n}\n")))),(0,i.yg)("p",null,"The diagram below shows how multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgPayPacketFeeAsync")," can be broadcasted asynchronously. Escrowing of the fee associated with a packet can be carried out by any party because ICS-29 does not dictate a particular fee payer. In fact, chains can choose to simply not expose this fee payment to end users at all and rely on a different module account or even the community pool as the source of relayer incentives."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"paypacketfeeasync.png",src:a(68331).A,width:"1400",height:"897"})),(0,i.yg)("p",null,"Please see our ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Fee-enabled-fungible-token-transfers"},"wiki")," for example flows on how to use these messages to incentivise a token transfer channel using a CLI."),(0,i.yg)("h2",{id:"paying-out-the-escrowed-fees"},"Paying out the escrowed fees"),(0,i.yg)("p",null,"Following diagram takes a look at the packet flow for an incentivized token transfer and investigates the several scenario's for paying out the escrowed fees. We assume that the relayers have registered their counterparty address, detailed in the ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v6.3.x/middleware/ics29-fee/fee-distribution"},"Fee distribution section"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"feeflow.png",src:a(22737).A,width:"1400",height:"1932"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In the case of a successful transaction, ",(0,i.yg)("inlineCode",{parentName:"li"},"RecvFee")," will be paid out to the designated counterparty payee address which has been registered on the receiver chain and sent back with the ",(0,i.yg)("inlineCode",{parentName:"li"},"MsgAcknowledgement"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"AckFee")," will be paid out to the relayer address which has submitted the ",(0,i.yg)("inlineCode",{parentName:"li"},"MsgAcknowledgement")," on the sending chain (or the registered payee in case one has been registered for the relayer address), and ",(0,i.yg)("inlineCode",{parentName:"li"},"TimeoutFee")," will be reimbursed to the account which escrowed the fee."),(0,i.yg)("li",{parentName:"ul"},"In case of a timeout transaction, ",(0,i.yg)("inlineCode",{parentName:"li"},"RecvFee")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"AckFee")," will be reimbursed. The ",(0,i.yg)("inlineCode",{parentName:"li"},"TimeoutFee")," will be paid to the ",(0,i.yg)("inlineCode",{parentName:"li"},"Timeout Relayer")," (who submits the timeout message to the source chain).")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Please note that fee payments are built on the assumption that sender chains are the source of incentives \u2014 the chain that sends the packets is the same chain where fee payments will occur -- please see the ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v6.3.x/middleware/ics29-fee/fee-distribution"},"Fee distribution section")," to understand the flow for registering payee and counterparty payee (fee receiving) addresses.")),(0,i.yg)("h2",{id:"a-locked-fee-middleware-module"},"A locked fee middleware module"),(0,i.yg)("p",null,"The fee middleware module can become locked if the situation arises that the escrow account for the fees does not have sufficient funds to pay out the fees which have been escrowed for each packet. ",(0,i.yg)("em",{parentName:"p"},"This situation indicates a severe bug.")," In this case, the fee module will be locked until manual intervention fixes the issue."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"A locked fee module will simply skip fee logic and continue on to the underlying packet flow. A channel with a locked fee module will temporarily function as a fee disabled channel, and the locking of a fee module will not affect the continued flow of packets over the channel.")))}g.isMDXComponent=!0},22737:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/feeflow-4c820ce13f8cbae511d4d03816fb3456.png"},16786:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/msgpaypacket-a5a0b058e23c59dec9015dc1d4873256.png"},68331:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/paypacketfeeasync-bbad18cfb86a8132f357d3750bdad9a3.png"}}]);