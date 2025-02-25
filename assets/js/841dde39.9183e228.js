"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[67573],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>v});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(t),g=o,v=s["".concat(l,".").concat(g)]||s[g]||u[g]||i;return t?n.createElement(v,a(a({ref:r},d),{},{components:t})):n.createElement(v,a({ref:r},d))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const i={title:"IBC Client Developer Guide to Upgrades",sidebar_label:"IBC Client Developer Guide to Upgrades",sidebar_position:2,slug:"/ibc/upgrades/developer-guide"},a="IBC Client Developer Guide to Upgrades",p={unversionedId:"ibc/upgrades/developer-guide",id:"version-v7.8.x/ibc/upgrades/developer-guide",title:"IBC Client Developer Guide to Upgrades",description:"Learn how to implement upgrade functionality for your custom IBC client.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/01-ibc/05-upgrades/02-developer-guide.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/developer-guide",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/upgrades/developer-guide",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:2,frontMatter:{title:"IBC Client Developer Guide to Upgrades",sidebar_label:"IBC Client Developer Guide to Upgrades",sidebar_position:2,slug:"/ibc/upgrades/developer-guide"},sidebar:"defaultSidebar",previous:{title:"How to Upgrade IBC Chains and their Clients",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/upgrades/quick-guide"},next:{title:"Genesis Restart Upgrades",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/upgrades/genesis-restart"}},l={},c=[],d={toc:c},s="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"ibc-client-developer-guide-to-upgrades"},"IBC Client Developer Guide to Upgrades"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to implement upgrade functionality for your custom IBC client. ")),(0,o.yg)("p",null,"Please see the section ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/ibc/light-clients/upgrades"},"Handling upgrades")," from the light client developer guide for more information."))}u.isMDXComponent=!0}}]);