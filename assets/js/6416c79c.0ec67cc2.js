"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[91286],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(58168),o=(n(96540),n(15680));const r={title:"Development Use Cases",sidebar_label:"Development Use Cases",sidebar_position:2,slug:"/apps/interchain-accounts/development"},c="Development use cases",i={unversionedId:"apps/interchain-accounts/development",id:"version-v7.8.x/apps/interchain-accounts/development",title:"Development Use Cases",description:"The initial version of Interchain Accounts allowed for the controller submodule to be extended by providing it with an underlying application which would handle all packet callbacks.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/02-apps/02-interchain-accounts/02-development.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/development",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/development",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:2,frontMatter:{title:"Development Use Cases",sidebar_label:"Development Use Cases",sidebar_position:2,slug:"/apps/interchain-accounts/development"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/overview"},next:{title:"Authentication Modules",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/auth-modules"}},l={},s=[{value:"Custom authentication",id:"custom-authentication",level:2},{value:"Redirection to a smart contract",id:"redirection-to-a-smart-contract",level:2},{value:"Packet callbacks",id:"packet-callbacks",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"development-use-cases"},"Development use cases"),(0,o.yg)("p",null,"The initial version of Interchain Accounts allowed for the controller submodule to be extended by providing it with an underlying application which would handle all packet callbacks.\nThat functionality is now being deprecated in favor of alternative approaches.\nThis document will outline potential use cases and redirect each use case to the appropriate documentation. "),(0,o.yg)("h2",{id:"custom-authentication"},"Custom authentication"),(0,o.yg)("p",null,"Interchain accounts may be associated with alternative types of authentication relative to the traditional public/private key signing.\nIf you wish to develop or use Interchain Accounts with a custom authentication module and do not need to execute custom logic on the packet callbacks, we recommend you use ibc-go v6 or greater and that your custom authentication module interacts with the controller submodule via the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/messages"},(0,o.yg)("inlineCode",{parentName:"a"},"MsgServer")),"."),(0,o.yg)("p",null,"If you wish to consume and execute custom logic in the packet callbacks, then please read the section ",(0,o.yg)("a",{parentName:"p",href:"#packet-callbacks"},"Packet callbacks")," below."),(0,o.yg)("h2",{id:"redirection-to-a-smart-contract"},"Redirection to a smart contract"),(0,o.yg)("p",null,"It may be desirable to allow smart contracts to control an interchain account.\nTo facilitate such an action, the controller submodule may be provided an underlying application which redirects to smart contract callers.\nAn improved design has been suggested in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/1976"},"ADR 008")," which performs this action via middleware. "),(0,o.yg)("p",null,"Implementers of this use case are recommended to follow the ADR 008 approach.\nThe underlying application may continue to be used as a short term solution for ADR 008 and the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/legacy/auth-modules"},"legacy API")," should continue to be utilized in such situations. "),(0,o.yg)("h2",{id:"packet-callbacks"},"Packet callbacks"),(0,o.yg)("p",null,"If a developer requires access to packet callbacks for their use case, then they have the following options:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Write a smart contract which is connected via an ADR 008 or equivalent IBC application (recommended)."),(0,o.yg)("li",{parentName:"ol"},"Use the controller's underlying application to implement packet callback logic.")),(0,o.yg)("p",null,"In the first case, the smart contract should use the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/messages"},(0,o.yg)("inlineCode",{parentName:"a"},"MsgServer")),"."),(0,o.yg)("p",null,"In the second case, the underlying application should use the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/apps/interchain-accounts/legacy/keeper-api"},"legacy API"),"."))}d.isMDXComponent=!0}}]);