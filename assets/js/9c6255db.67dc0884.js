"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[67575],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var i=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(t),p=s,u=g["".concat(l,".").concat(p)]||g[p]||m[p]||a;return t?i.createElement(u,r(r({ref:n},c),{},{components:t})):i.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,r=new Array(a);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:s,r[1]=o;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(58168),s=(t(96540),t(15680));const a={},r="ADR 074: Messages with Implicit Signers",o={unversionedId:"build/architecture/adr-074-implicit-msg-signers",id:"version-0.52/build/architecture/adr-074-implicit-msg-signers",title:"ADR 074: Messages with Implicit Signers",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-074-implicit-msg-signers.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-074-implicit-msg-signers",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-074-implicit-msg-signers",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 073: Built-in In-process Indexer",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-073-indexer"},next:{title:"ADR {ADR-NUMBER}:",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-template"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],c={toc:d},g="wrapper";function m(e){let{components:n,...t}=e;return(0,s.yg)(g,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"adr-074-messages-with-implicit-signers"},"ADR 074: Messages with Implicit Signers"),(0,s.yg)("h2",{id:"changelog"},"Changelog"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"2024-06-10: Initial draft")),(0,s.yg)("h2",{id:"status"},"Status"),(0,s.yg)("p",null,"PROPOSED Not Implemented"),(0,s.yg)("h2",{id:"abstract"},"Abstract"),(0,s.yg)("p",null,"This ADR introduces a new ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," standard where the signer of the message is implied by the\ncredentials of the party sending it, and unlike the current design not part of the message body.\nThis can be used for both simple inter-module message passing and simpler messages in transactions."),(0,s.yg)("h2",{id:"context"},"Context"),(0,s.yg)("p",null,"Historically operations in the SDK have been modelled with the ",(0,s.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," interface and\nthe account signing the message has to be explicitly extracted from the body of ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg"),"s.\nOriginally this was via a ",(0,s.yg)("inlineCode",{parentName:"p"},"GetSigners")," method on the ",(0,s.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," interface which returned\ninstances of ",(0,s.yg)("inlineCode",{parentName:"p"},"sdk.AccAddress")," which itself relied on a global variable for decoding\nthe addresses from bech32 strings. This was a messy situation. In addition, the implementation\nfor ",(0,s.yg)("inlineCode",{parentName:"p"},"GetSigners")," was different for each ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg")," type and clients would need to do a custom\nimplementation for each ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg")," type. These were improved somewhat with the introduction of\nthe ",(0,s.yg)("inlineCode",{parentName:"p"},"cosmos.msg.v1.signer")," protobuf option which allowed for a more standardised way of\ndefining who the signer of a message was and its implementation in the ",(0,s.yg)("inlineCode",{parentName:"p"},"x/tx")," module which\nextracts signers dynamically and allowed removing the dependency on the global bech32\nconfiguration."),(0,s.yg)("p",null,"Still this design introduces a fair amount of complexity. For instance, inter-module message\npassing (",(0,s.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033"),") has been in discussion for years\nwithout much progress and one of the main blockers is figuring out how to properly authenticate\nmessages in a performant and consistent way. With embedded message signers there will always need\nto be a step of extracting the signer and then checking with the module sending is actually\nauthorized to perform the operation. With dynamic signer extraction, although the system is\nmore consistent, more performance overhead is introduced. In any case why should an inter-module\nmessage passing system need to do so much conversion, parsing, etc. just to check if a message\nis authenticated? In addition, we have the complexity where modules can actually have many valid\naddresses. How are we to accommodate this? Should there be a lookup into ",(0,s.yg)("inlineCode",{parentName:"p"},"x/auth")," to check if an\naddress belongs to a module or not? All of these thorny questions are delaying the delivery of\ninter-module message passing because we do not want an implementation that is overly complex.\nThere are many use cases for inter-module message passing which are still relevant, the most\nimmediate of which is a more robust denom management system in ",(0,s.yg)("inlineCode",{parentName:"p"},"x/bank")," ",(0,s.yg)("inlineCode",{parentName:"p"},"v2")," which is being explored\nin ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/20316"},"ADR 071"),"."),(0,s.yg)("h2",{id:"alternatives"},"Alternatives"),(0,s.yg)("p",null,"Alternatives that have been considered are extending the current ",(0,s.yg)("inlineCode",{parentName:"p"},"x/tx")," signer extraction system\nto inter-module message passing as defined in ",(0,s.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033"),"."),(0,s.yg)("h2",{id:"decision"},"Decision"),(0,s.yg)("p",null,"We have decided to introduce a new ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," standard whereby the signer of the message is implied\nby the credentials of the party sending it. These messages will be distinct from the existing messages\nand define new semantics with the understanding that signers are implicit."),(0,s.yg)("p",null,"In the case of messages passed internally by a module or ",(0,s.yg)("inlineCode",{parentName:"p"},"x/account")," instance, the signer of a message\nwill simply be the main root address of the module or account sending the message. An interface for\nsafely passing such messages to the message router will need to be defined."),(0,s.yg)("p",null,"In the case of messages passed externally in transactions, ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," instances will need to be wrapped\nin a ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," envelope:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"message MsgV2 {\n  string signer = 1;\n  google.protobuf.Any msg = 2;  \n}\n")),(0,s.yg)("p",null,"Because the ",(0,s.yg)("inlineCode",{parentName:"p"},"cosmos.msg.v1.signer")," annotation is required currently, ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," types should set the message option\n",(0,s.yg)("inlineCode",{parentName:"p"},"cosmos.msg.v2.is_msg")," to ",(0,s.yg)("inlineCode",{parentName:"p"},"true")," instead."),(0,s.yg)("p",null,"Here is an example comparing a v1 an v2 message:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},'// v1\nmessage MsgSendV1 {\n  option (cosmos.msg.v1.signer) = "from_address";\n  string from_address = 1 ;\n  string to_address = 2;\n  repeated Coin amount = 3;\n}\n\n// v2\nmessage MsgSendV2 {\n  option (cosmos.msg.v2.is_msg) = true;\n  // from address is implied by the signer\n  string to_address = 1;\n  repeated Coin amount = 2;\n}\n')),(0,s.yg)("p",null,"Modules defining handlers for ",(0,s.yg)("inlineCode",{parentName:"p"},"MsgV2")," instances will need to extract the sender from the ",(0,s.yg)("inlineCode",{parentName:"p"},"context.Context")," that is\npassed in. An interface in ",(0,s.yg)("inlineCode",{parentName:"p"},"core")," which will be present on the ",(0,s.yg)("inlineCode",{parentName:"p"},"appmodule.Environment")," will be defined for this purpose:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type GetSenderService interface {\n  GetSender(ctx context.Context) []byte\n}\n")),(0,s.yg)("p",null,"Sender addresses that are returned by the service will be simple ",(0,s.yg)("inlineCode",{parentName:"p"},"[]byte")," slices and any bech32 conversion will be\ndone by the framework."),(0,s.yg)("h2",{id:"consequences"},"Consequences"),(0,s.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,s.yg)("p",null,"This design does not depreciate the existing method of embedded signers in ",(0,s.yg)("inlineCode",{parentName:"p"},"Msg"),"s and is totally compatible with it."),(0,s.yg)("h3",{id:"positive"},"Positive"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Allows for a simple inter-module communication design which can be used soon for the ",(0,s.yg)("inlineCode",{parentName:"li"},"bank")," ",(0,s.yg)("inlineCode",{parentName:"li"},"v2")," redesign."),(0,s.yg)("li",{parentName:"ul"},"Allows for simpler client implementations for messages in the future.")),(0,s.yg)("h3",{id:"negative"},"Negative"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"There will be two message designs and developers will need to pick between them.")),(0,s.yg)("h3",{id:"neutral"},"Neutral"),(0,s.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,s.yg)("p",null,"Two possible directions that have been proposed are:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"allowing for the omission of the ",(0,s.yg)("inlineCode",{parentName:"li"},"cosmos.msg.v2.is_msg")," option and assuming any ",(0,s.yg)("inlineCode",{parentName:"li"},"Msg"),"s registered that do not include ",(0,s.yg)("inlineCode",{parentName:"li"},"cosmos.msg.v1.signer")," are ",(0,s.yg)("inlineCode",{parentName:"li"},"MsgV2")," instances. The pitfall is that this could be incorrect if ",(0,s.yg)("inlineCode",{parentName:"li"},"Msg")," v1 behavior is actually decided but the user forgot the ",(0,s.yg)("inlineCode",{parentName:"li"},"cosmos.msg.v1.signer")," option."),(0,s.yg)("li",{parentName:"ol"},"allow ",(0,s.yg)("inlineCode",{parentName:"li"},"Msg")," v1 instances to be wrapped in a ",(0,s.yg)("inlineCode",{parentName:"li"},"MsgV2")," envelope as well to simplify things client-side. In this scenario we would need to either a) check that the signer in the envelope and the signer in the message are the same or b) allow the signer in the message to be empty and then set it inside the state machine before it reaches the module. While this may be easier for some clients, it may introduce unexpected behavior with Ledger signing via Amino JSON or SIGN_MODE_TEXTUAL. ")),(0,s.yg)("p",null,"Both of these are seem as quality of life improvements for some users, but not strictly necessary and could have some pitfalls so further discussion is needed."),(0,s.yg)("h2",{id:"references"},"References"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033"))))}m.isMDXComponent=!0}}]);