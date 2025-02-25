"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[21044],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"Transactions",sidebar_label:"Transactions",sidebar_position:6,slug:"/apps/interchain-accounts/transactions"},o="Transactions",c={unversionedId:"apps/interchain-accounts/transactions",id:"version-v5.4.x/apps/interchain-accounts/transactions",title:"Transactions",description:"Learn about Interchain Accounts transaction execution",source:"@site/ibc-go_versioned_docs/version-v5.4.x/02-apps/02-interchain-accounts/06-transactions.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/transactions",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/transactions",draft:!1,tags:[],version:"v5.4.x",sidebarPosition:6,frontMatter:{title:"Transactions",sidebar_label:"Transactions",sidebar_position:6,slug:"/apps/interchain-accounts/transactions"},sidebar:"defaultSidebar",previous:{title:"Parameters",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/parameters"},next:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/v5.4.x/middleware/ics29-fee/overview"}},s={},p=[{value:"Executing a transaction",id:"executing-a-transaction",level:2},{value:"Atomicity",id:"atomicity",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,a.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"transactions"},"Transactions"),(0,r.yg)("admonition",{title:"Synopsis",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Learn about Interchain Accounts transaction execution ")),(0,r.yg)("h2",{id:"executing-a-transaction"},"Executing a transaction"),(0,r.yg)("p",null,"As described in ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/auth-modules#trysendtx"},"Authentication Modules")," transactions are executed using the interchain accounts controller API and require a ",(0,r.yg)("inlineCode",{parentName:"p"},"Base Application")," as outlined in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware"},"ICS30 IBC Middleware")," to facilitate authentication. The method of authentication remains unspecified to provide flexibility for the authentication module developer."),(0,r.yg)("p",null,"Transactions are executed via the ICS27 ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v5.4.x/apps/interchain-accounts/auth-modules#trysendtx"},(0,r.yg)("inlineCode",{parentName:"a"},"SendTx")," API"),". This must be invoked through an Interchain Accounts authentication module and follows the outlined path of execution below. Packet relaying semantics provided by the IBC core transport, authentication, and ordering (IBC/TAO) layer are omitted for brevity."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"send-interchain-tx.png",src:n(71733).A,width:"1921",height:"949"})),(0,r.yg)("h2",{id:"atomicity"},"Atomicity"),(0,r.yg)("p",null,"As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore"},(0,r.yg)("inlineCode",{parentName:"a"},"CacheMultiStore"))," architecture provided by the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/context.html"},(0,r.yg)("inlineCode",{parentName:"a"},"Context"))," type."),(0,r.yg)("p",null,"This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg"),"s succeed."))}d.isMDXComponent=!0},71733:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/send-interchain-tx-2e6dfe2d3da61f43a64d5b5169014f0a.png"}}]);