"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[30495],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=i,u=m["".concat(l,".").concat(g)]||m[g]||h[g]||r;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(58168),i=(n(96540),n(15680));const r={title:"Solomachine",sidebar_label:"Solomachine",sidebar_position:1,slug:"/ibc/light-clients/solomachine/solomachine"},a="solomachine",c={unversionedId:"light-clients/solomachine/solomachine",id:"version-v8.5.x/light-clients/solomachine/solomachine",title:"Solomachine",description:"Abstract",source:"@site/ibc-go_versioned_docs/version-v8.5.x/03-light-clients/03-solomachine/01-solomachine.md",sourceDirName:"03-light-clients/03-solomachine",slug:"/ibc/light-clients/solomachine/solomachine",permalink:"/dev-portal-docsite/ibc-go/ibc/light-clients/solomachine/solomachine",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:1,frontMatter:{title:"Solomachine",sidebar_label:"Solomachine",sidebar_position:1,slug:"/ibc/light-clients/solomachine/solomachine"},sidebar:"defaultSidebar",previous:{title:"State Verification",permalink:"/dev-portal-docsite/ibc-go/ibc/light-clients/localhost/state-verification"},next:{title:"Concepts",permalink:"/dev-portal-docsite/ibc-go/ibc/light-clients/solomachine/concepts"}},l={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],p={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"solomachine"},(0,i.yg)("inlineCode",{parentName:"h1"},"solomachine")),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"This paper defines the implementation of the ICS06 protocol on the Cosmos SDK. For the general\nspecification please refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-006-solo-machine-client"},"ICS06 Specification"),"."),(0,i.yg)("p",null,"This implementation of a solo machine light client supports single and multi-signature public\nkeys. The client is capable of handling public key updates by header and governance proposals.\nThe light client is capable of processing client misbehaviour. Proofs of the counterparty state\nare generated by the solo machine client by signing over the desired state with a certain sequence,\ndiversifier, and timestamp."),(0,i.yg)("h2",{id:"contents"},"Contents"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"/dev-portal-docsite/ibc-go/ibc/light-clients/solomachine/concepts"},"Concepts"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"/dev-portal-docsite/ibc-go/ibc/light-clients/solomachine/state"},"State"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"/dev-portal-docsite/ibc-go/ibc/light-clients/solomachine/state_transitions"},"State Transitions")))))}h.isMDXComponent=!0}}]);