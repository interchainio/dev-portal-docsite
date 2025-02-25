"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[88987],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||s;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},78645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const s={sidebar_position:1},l="x/consensus",o={unversionedId:"docs/build/modules/consensus/README",id:"docs/build/modules/consensus/README",title:"x/consensus",description:"Abstract",source:"@site/cosmos-sdk/docs/build/modules/consensus/README.md",sourceDirName:"docs/build/modules/consensus",slug:"/docs/build/modules/consensus/",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/consensus/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/bank/v2",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/bank/v2/"},next:{title:"x/counter",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/counter/"}},i={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"State",id:"state",level:2},{value:"Params",id:"params",level:2},{value:"Keeper",id:"keeper",level:2},{value:"Messages",id:"messages",level:2},{value:"UpdateParams",id:"updateparams",level:3},{value:"Events",id:"events",level:2},{value:"Message Events",id:"message-events",level:3},{value:"MsgUpdateParams",id:"msgupdateparams",level:4}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"xconsensus"},(0,r.yg)("inlineCode",{parentName:"h1"},"x/consensus")),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,"Functionality to modify CometBFT's ABCI consensus params."),(0,r.yg)("h2",{id:"contents"},"Contents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#abstract"},"Abstract")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#contents"},"Contents")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#state"},"State")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#params"},"Params")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#keeper"},"Keeper")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#messages"},"Messages"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#updateparams"},"UpdateParams")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#events"},"Events"))),(0,r.yg)("h2",{id:"state"},"State"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"x/consensus")," module keeps state of the consensus params from CometBFT."),(0,r.yg)("h2",{id:"params"},"Params"),(0,r.yg)("p",null,"The consensus module stores its params in state with the prefix of ",(0,r.yg)("inlineCode",{parentName:"p"},"0x05"),",\nit can be updated with governance or the address with authority."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Params: ",(0,r.yg)("inlineCode",{parentName:"li"},"0x05 | ProtocolBuffer(cometbft.ConsensusParams)"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/consensus/proto/cosmos/consensus/v1/query.proto#L21-L27\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://https://github.com/cometbft/cometbft/blob/v0.34.35/proto/tendermint/types/params.proto#L11-L18\n")),(0,r.yg)("h2",{id:"keeper"},"Keeper"),(0,r.yg)("p",null,"The Keeper of the ",(0,r.yg)("inlineCode",{parentName:"p"},"x/consensus")," module provides the following functions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Params"),": Retrieves the current consensus parameters.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"UpdateParams"),": Updates the consensus parameters. Only the authority can perform this operation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"BlockParams"),": Returns the maximum gas and bytes allowed in a block.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ValidatorPubKeyTypes"),": Provides the list of public key types allowed for validators.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"EvidenceParams"),": Returns the evidence parameters, including maximum age and bytes.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"AppVersion"),": Returns the current application version."))),(0,r.yg)("p",null,"Note: It is recommended to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"x/consensus")," module keeper to get consensus params instead of accessing them through the context."),(0,r.yg)("h2",{id:"messages"},"Messages"),(0,r.yg)("h3",{id:"updateparams"},"UpdateParams"),(0,r.yg)("p",null,"Update consensus params."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/consensus/proto/cosmos/consensus/v1/tx.proto#L24-L44\n")),(0,r.yg)("p",null,"The message will fail under the following conditions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The signer is not the set authority "),(0,r.yg)("li",{parentName:"ul"},"Not all values are set")),(0,r.yg)("h2",{id:"events"},"Events"),(0,r.yg)("p",null,"The consensus module emits the following events:"),(0,r.yg)("h3",{id:"message-events"},"Message Events"),(0,r.yg)("h4",{id:"msgupdateparams"},"MsgUpdateParams"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"authority"),(0,r.yg)("td",{parentName:"tr",align:null},"msg.Signer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"parameters"),(0,r.yg)("td",{parentName:"tr",align:null},"consensus Parameters")))))}c.isMDXComponent=!0}}]);