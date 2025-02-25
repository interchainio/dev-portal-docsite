"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[68508],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(58168),r=(n(96540),n(15680));const a={},i="What is an Oracle?",s={unversionedId:"tutorials/vote-extensions/oracle/what-is-an-oracle",id:"version-0.52/tutorials/vote-extensions/oracle/what-is-an-oracle",title:"What is an Oracle?",description:"An oracle in blockchain technology is a system that provides external data to a blockchain network. It acts as a source of information that is not natively accessible within the blockchain's closed environment. This can range from financial market prices to real-world event, making it crucial for decentralised applications.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/tutorials/vote-extensions/oracle/01-what-is-an-oracle.md",sourceDirName:"tutorials/vote-extensions/oracle",slug:"/tutorials/vote-extensions/oracle/what-is-an-oracle",permalink:"/dev-portal-docsite/cosmos-sdk/tutorials/vote-extensions/oracle/what-is-an-oracle",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Getting Started",permalink:"/dev-portal-docsite/cosmos-sdk/tutorials/vote-extensions/oracle/getting-started"},next:{title:"Implementing Vote Extensions",permalink:"/dev-portal-docsite/cosmos-sdk/tutorials/vote-extensions/oracle/implementing-vote-extensions"}},c={},l=[{value:"Oracle in the Cosmos SDK",id:"oracle-in-the-cosmos-sdk",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"what-is-an-oracle"},"What is an Oracle?"),(0,r.yg)("p",null,"An oracle in blockchain technology is a system that provides external data to a blockchain network. It acts as a source of information that is not natively accessible within the blockchain's closed environment. This can range from financial market prices to real-world event, making it crucial for decentralised applications."),(0,r.yg)("h2",{id:"oracle-in-the-cosmos-sdk"},"Oracle in the Cosmos SDK"),(0,r.yg)("p",null,"In the Cosmos SDK, an oracle module can be implemented to provide external data to the blockchain. This module can use features like vote extensions to submit additional data during the consensus process, which can then be used by the blockchain to update its state with information from the outside world."),(0,r.yg)("p",null,"For instance, a price oracle module in the Cosmos SDK could supply timely and accurate asset price information, which is vital for various financial operations within the blockchain ecosystem."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Oracles are essential for blockchains to interact with external data, enabling them to respond to real-world information and events. Their implementation is key to the reliability and robustness of blockchain networks."))}d.isMDXComponent=!0}}]);