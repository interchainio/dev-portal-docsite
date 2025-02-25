"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31095],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},s="Messages",o={unversionedId:"apps/transfer/messages",id:"version-v4.6.x/apps/transfer/messages",title:"Messages",description:"MsgTransfer",source:"@site/ibc-go_versioned_docs/version-v4.6.x/02-apps/01-transfer/04-messages.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/messages",permalink:"/dev-portal-docsite/ibc-go/v4.6.x/apps/transfer/messages",draft:!1,tags:[],version:"v4.6.x",sidebarPosition:4,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},sidebar:"defaultSidebar",previous:{title:"State Transitions",permalink:"/dev-portal-docsite/ibc-go/v4.6.x/apps/transfer/state-transitions"},next:{title:"Events",permalink:"/dev-portal-docsite/ibc-go/v4.6.x/apps/transfer/events"}},l={},p=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"Memo",id:"memo",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"messages"},"Messages"),(0,a.yg)("h2",{id:"msgtransfer"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgTransfer")),(0,a.yg)("p",null,"A fungible token cross chain transfer is achieved by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgTransfer"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MsgTransfer struct {\n  SourcePort        string\n  SourceChannel     string\n  Token             sdk.Coin\n  Sender            string\n  Receiver          string\n  TimeoutHeight     ibcexported.Height\n  TimeoutTimestamp  uint64\n  Memo              string\n}\n")),(0,a.yg)("p",null,"This message is expected to fail if:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SourcePort")," is invalid (see ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SourceChannel")," is invalid (see ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token")," is invalid (denom is invalid or amount is negative)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token.Amount")," is not positive."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token.Denom")," is not a valid IBC denomination as per ",(0,a.yg)("a",{parentName:"li",href:"/ibc-go/architecture/adr-001-coin-source-tracing"},"ADR 001 - Coin Source Tracing"),"."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Sender")," is empty."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Receiver")," is empty."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TimeoutHeight")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"TimeoutTimestamp")," are both zero.")),(0,a.yg)("p",null,"This message will send a fungible token to the counterparty chain represented by the counterparty Channel End connected to the Channel End with the identifiers ",(0,a.yg)("inlineCode",{parentName:"p"},"SourcePort")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"SourceChannel"),"."),(0,a.yg)("p",null,"The denomination provided for transfer should correspond to the same denomination represented on this chain. The prefixes will be added as necessary upon by the receiving chain."),(0,a.yg)("h3",{id:"memo"},"Memo"),(0,a.yg)("p",null,"The memo field was added to allow applications and users to attach metadata to transfer packets. The field is optional and may be left empty. When it is used to attach metadata for a particular middleware, the memo field should be represented as a json object where different middlewares use different json keys."),(0,a.yg)("p",null,"You can find more information about applications that use the memo field in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/_memo_keys/ICS20_memo_keys.json"},"chain registry"),"."))}d.isMDXComponent=!0}}]);