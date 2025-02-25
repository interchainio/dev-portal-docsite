"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[9860],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(y,r(r({ref:n},d),{},{components:t})):i.createElement(y,r({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(58168),a=(t(96540),t(15680));const o={},r="Specification of Modules",l={unversionedId:"build/spec/SPEC_MODULE",id:"version-0.47/build/spec/SPEC_MODULE",title:"Specification of Modules",description:"This file intends to outline the common structure for specifications within",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/spec/SPEC_MODULE.md",sourceDirName:"build/spec",slug:"/build/spec/SPEC_MODULE",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/spec/SPEC_MODULE",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Upgrading Cosmos SDK",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/migrations/upgrading"},next:{title:"What is an SDK standard?",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/spec/SPEC_STANDARD"}},s={},p=[{value:"Tense",id:"tense",level:2},{value:"Pseudo-Code",id:"pseudo-code",level:2},{value:"Common Layout",id:"common-layout",level:2},{value:"Notation for key-value mapping",id:"notation-for-key-value-mapping",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"specification-of-modules"},"Specification of Modules"),(0,a.yg)("p",null,"This file intends to outline the common structure for specifications within\nthis directory."),(0,a.yg)("h2",{id:"tense"},"Tense"),(0,a.yg)("p",null,"For consistency, specs should be written in passive present tense."),(0,a.yg)("h2",{id:"pseudo-code"},"Pseudo-Code"),(0,a.yg)("p",null,"Generally, pseudo-code should be minimized throughout the spec. Often, simple\nbulleted-lists which describe a function's operations are sufficient and should\nbe considered preferable. In certain instances, due to the complex nature of\nthe functionality being described pseudo-code may the most suitable form of\nspecification. In these cases use of pseudo-code is permissible, but should be\npresented in a concise manner, ideally restricted to only the complex\nelement as a part of a larger description."),(0,a.yg)("h2",{id:"common-layout"},"Common Layout"),(0,a.yg)("p",null,"The following generalized ",(0,a.yg)("inlineCode",{parentName:"p"},"README")," structure should be used to breakdown\nspecifications for modules. The following list is nonbinding and all sections are optional."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"# {Module Name}")," - overview of the module"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Concepts")," - describe specialized concepts and definitions used throughout the spec"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## State")," - specify and describe structures expected to marshalled into the store, and their keys"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## State Transitions")," - standard state transition operations triggered by hooks, messages, etc."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Messages")," - specify message structure(s) and expected state machine behaviour(s)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Begin Block")," - specify any begin-block operations"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## End Block")," - specify any end-block operations"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Hooks")," - describe available hooks to be called by/from this module"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Events")," - list and describe event tags used"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Client")," - list and describe CLI commands and gRPC and REST endpoints"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Params")," - list all module parameters, their types (in JSON) and examples"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Future Improvements")," - describe future improvements of this module"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Tests")," - acceptance tests"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"## Appendix")," - supplementary details referenced elsewhere within the spec")),(0,a.yg)("h3",{id:"notation-for-key-value-mapping"},"Notation for key-value mapping"),(0,a.yg)("p",null,"Within ",(0,a.yg)("inlineCode",{parentName:"p"},"## State")," the following notation ",(0,a.yg)("inlineCode",{parentName:"p"},"->")," should be used to describe key to\nvalue mapping:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"key -> value\n")),(0,a.yg)("p",null,"to represent byte concatenation the ",(0,a.yg)("inlineCode",{parentName:"p"},"|")," may be used. In addition, encoding\ntype may be specified, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"0x00 | addressBytes | address2Bytes -> amino(value_object)\n")),(0,a.yg)("p",null,"Additionally, index mappings may be specified by mapping to the ",(0,a.yg)("inlineCode",{parentName:"p"},"nil")," value, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"0x01 | address2Bytes | addressBytes -> nil\n")))}u.isMDXComponent=!0}}]);