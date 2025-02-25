"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[11608],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var o=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),g=l,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:l,r[1]=a;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(58168),l=(n(96540),n(15680));const i={},r="ADR 004: Lock fee module upon escrow out of balance",a={unversionedId:"architecture/adr-004-ics29-lock-fee-module",id:"version-v5.4.x/architecture/adr-004-ics29-lock-fee-module",title:"ADR 004: Lock fee module upon escrow out of balance",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v5.4.x/architecture/adr-004-ics29-lock-fee-module.md",sourceDirName:"architecture",slug:"/architecture/adr-004-ics29-lock-fee-module",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/architecture/adr-004-ics29-lock-fee-module",draft:!1,tags:[],version:"v5.4.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 003: ICS27 Acknowledgement Format",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/architecture/adr-003-ics27-acknowledgement"},next:{title:"ADR 005: UpdateClient Events - ClientState Consensus Heights",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/architecture/adr-005-consensus-height-events"}},c={},s=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Sending side",id:"sending-side",level:3},{value:"Receiving side",id:"receiving-side",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"adr-004-lock-fee-module-upon-escrow-out-of-balance"},"ADR 004: Lock fee module upon escrow out of balance"),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"03/03/2022: initial draft")),(0,l.yg)("h2",{id:"status"},"Status"),(0,l.yg)("p",null,"Accepted"),(0,l.yg)("h2",{id:"context"},"Context"),(0,l.yg)("p",null,"The fee module maintains an escrow account for all fees escrowed to incentivize packet relays.\nIt also tracks each packet fee escrowed separately from the escrow account. This is because the escrow account only maintains a total balance. It has no reference for which coins belonged to which packet fee.\nIn the presence of a severe bug, it is possible the escrow balance will become out of sync with the packet fees marked as escrowed.\nThe ICS29 module should be capable of elegantly handling such a scenario."),(0,l.yg)("h2",{id:"decision"},"Decision"),(0,l.yg)("p",null,'We will allow for the ICS29 module to become "locked" if the escrow balance is determined to be out of sync with the packet fees marked as escrowed.\nA "locked" fee module will not allow for packet escrows to occur nor will it distribute fees. All IBC callbacks will skip performing fee logic, similar to fee disabled channels.'),(0,l.yg)("p",null,"Manual intervention will be needed to unlock the fee module."),(0,l.yg)("h3",{id:"sending-side"},"Sending side"),(0,l.yg)("p",null,"Special behaviour will have to be accounted for in ",(0,l.yg)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket"),". Since the counterparty will continue to send incentivized acknowledgements for fee enabled channels, the acknowledgement will still need to be unmarshalled into an incentivized acknowledgement before calling the underlying application ",(0,l.yg)("inlineCode",{parentName:"p"},"OnAcknowledgePacket")," callback."),(0,l.yg)("p",null,"When distributing fees, a cached context should be used. If the escrow account balance would become negative, the current state changes should be discarded and the fee module should be locked using the uncached context. This prevents fees from being partially distributed for a given packetID."),(0,l.yg)("h3",{id:"receiving-side"},"Receiving side"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"OnRecvPacket")," should remain unaffected by the fee module becoming locked since escrow accounts only affect the sending side."),(0,l.yg)("h2",{id:"consequences"},"Consequences"),(0,l.yg)("h3",{id:"positive"},"Positive"),(0,l.yg)("p",null,"The fee module can be elegantly disabled in the presence of severe bugs."),(0,l.yg)("h3",{id:"negative"},"Negative"),(0,l.yg)("p",null,"Extra logic is added to account for edge cases which are only possible in the presence of bugs."),(0,l.yg)("h3",{id:"neutral"},"Neutral"),(0,l.yg)("h2",{id:"references"},"References"),(0,l.yg)("p",null,"Issues:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/821"},"#821")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/860"},"#860"))),(0,l.yg)("p",null,"PR's:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1031"},"#1031")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1029"},"#1029")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1056"},"#1056"))))}p.isMDXComponent=!0}}]);