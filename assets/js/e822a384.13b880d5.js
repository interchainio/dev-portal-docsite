"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[23808],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>v});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,v=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},a="Migrating from ibc-go v1 to v2",s={unversionedId:"migrations/v1-to-v2",id:"version-v6.3.x/migrations/v1-to-v2",title:"IBC-Go v1 to v2",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/04-migrations/03-v1-to-v2.md",sourceDirName:"04-migrations",slug:"/migrations/v1-to-v2",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/v1-to-v2",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},sidebar:"defaultSidebar",previous:{title:"SDK v0.43 to IBC-Go v1",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/sdk-to-v1"},next:{title:"IBC-Go v2 to v3",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/v2-to-v3"}},l={},p=[{value:"Chains",id:"chains",level:2},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"sdk.Result removed",id:"sdkresult-removed",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"migrating-from-ibc-go-v1-to-v2"},"Migrating from ibc-go v1 to v2"),(0,o.yg)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,o.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Chains"),(0,o.yg)("li",{parentName:"ul"},"IBC Apps"),(0,o.yg)("li",{parentName:"ul"},"Relayers"),(0,o.yg)("li",{parentName:"ul"},"IBC Light Clients")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"github.com/cosmos/ibc-go -> github.com/cosmos/ibc-go/v2\n")),(0,o.yg)("h2",{id:"chains"},"Chains"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,o.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,o.yg)("p",null,"A new function has been added to the app module interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// NegotiateAppVersion performs application version negotiation given the provided channel ordering, connectionID, portID, counterparty and proposed version.\n    // An error is returned if version negotiation cannot be performed. For example, an application module implementing this interface\n    // may decide to return an error in the event of the proposed version being incompatible with it's own\n    NegotiateAppVersion(\n        ctx sdk.Context,\n        order channeltypes.Order,\n        connectionID string,\n        portID string,\n        counterparty channeltypes.Counterparty,\n        proposedVersion string,\n    ) (version string, err error)\n}\n")),(0,o.yg)("p",null,"This function should perform application version negotiation and return the negotiated version. If the version cannot be negotiated, an error should be returned. This function is only used on the client side."),(0,o.yg)("h3",{id:"sdkresult-removed"},"sdk.Result removed"),(0,o.yg)("p",null,"sdk.Result has been removed as a return value in the application callbacks. Previously it was being discarded by core IBC and was thus unused."),(0,o.yg)("h2",{id:"relayers"},"Relayers"),(0,o.yg)("p",null,"A new gRPC has been added to 05-port, ",(0,o.yg)("inlineCode",{parentName:"p"},"AppVersion"),". It returns the negotiated app version. This function should be used for the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChanOpenTry")," channel handshake step to decide upon the application version which should be set in the channel."),(0,o.yg)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")))}d.isMDXComponent=!0}}]);