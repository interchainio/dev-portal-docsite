"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45055],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=d(t),p=i,u=g["".concat(l,".").concat(p)]||g[p]||m[p]||r;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[g]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(58168),i=(t(96540),t(15680));const r={sidebar_position:1},o="Decimal Handling in Cosmos SDK",c={unversionedId:"docs/build/building-modules/decimal-handling",id:"docs/build/building-modules/decimal-handling",title:"Decimal Handling in Cosmos SDK",description:"Introduction",source:"@site/cosmos-sdk/docs/build/building-modules/18-decimal-handling.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/decimal-handling",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/decimal-handling",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"PreBlocker",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/preblock"},next:{title:"Hooks",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-modules/define-hooks"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Why the Change?",id:"why-the-change",level:2},{value:"Using <code>Dec</code> in Modules that haven&#39;t used <code>LegacyDec</code>",id:"using-dec-in-modules-that-havent-used-legacydec",level:2},{value:"Modules migrating from <code>LegacyDec</code> to <code>Dec</code>",id:"modules-migrating-from-legacydec-to-dec",level:2},{value:"Precision Handling",id:"precision-handling",level:2},{value:"Impact of Precision Change",id:"impact-of-precision-change",level:2},{value:"Converting <code>LegacyDec</code> to <code>Dec</code> without storing the data",id:"converting-legacydec-to-dec-without-storing-the-data",level:2}],s={toc:d},g="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"decimal-handling-in-cosmos-sdk"},"Decimal Handling in Cosmos SDK"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In the Cosmos SDK, there are two types of decimals: ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec"),". ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec")," is the older decimal type that is still available for use, while ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec")," is the newer, more performant decimal type. The implementation of ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec")," is adapted from Regen Network's ",(0,i.yg)("inlineCode",{parentName:"p"},"regen-ledger"),", specifically from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/main/types/math"},"this module"),". Migrating from ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec")," involves state-breaking changes, specifically:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data Format"),": The internal representation of decimals changes, affecting how data is stored and processed."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Precision Handling"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"Dec")," supports flexible precision up to 34 decimal places, unlike ",(0,i.yg)("inlineCode",{parentName:"li"},"LegacyDec")," which has a fixed precision of 18 decimal places.")),(0,i.yg)("p",null,"These changes require a state migration to update existing decimal values to the new format. It is recommended to use ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec")," for new modules to leverage its enhanced performance and flexibility."),(0,i.yg)("h2",{id:"why-the-change"},"Why the Change?"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Historically we have wrapped a ",(0,i.yg)("inlineCode",{parentName:"li"},"big.Int")," to represent decimals in the Cosmos SDK and never had a decimal type. Finally, we have a decimal type that is more efficient and accurate."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Dec")," uses the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cockroachdb/apd"},"apd")," library for arbitrary precision decimals, suitable for accurate financial calculations."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Dec")," operations are safer for concurrent use as they do not mutate the original values."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Dec")," operations are faster and more efficient than ",(0,i.yg)("inlineCode",{parentName:"li"},"LegacyDec"),".")),(0,i.yg)("h2",{id:"using-dec-in-modules-that-havent-used-legacydec"},"Using ",(0,i.yg)("inlineCode",{parentName:"h2"},"Dec")," in Modules that haven't used ",(0,i.yg)("inlineCode",{parentName:"h2"},"LegacyDec")),(0,i.yg)("p",null,"If you are creating a new module or updating an existing module that has not used ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec"),", you can directly use ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec"),".\nEnsure proper error handling."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'-- math.NewLegacyDecFromInt64(100)\n++ math.NewDecFromInt64(100)\n\n-- math.LegacyNewDecWithPrec(100, 18)\n++ math.NewDecWithPrec(100, 18)\n\n-- math.LegacyNewDecFromStr("100")\n++ math.NewDecFromString("100")\n\n-- math.LegacyNewDecFromStr("100.000000000000000000").Quo(math.LegacyNewDecFromInt(2))\n++ foo, err := math.NewDecFromString("100.000000000000000000")\n++ foo.Quo(math.NewDecFromInt(2))\n\n-- math.LegacyNewDecFromStr("100.000000000000000000").Add(math.LegacyNewDecFromInt(2))\n++ foo, err := math.NewDecFromString("100.000000000000000000")\n++ foo.Add(math.NewDecFromInt(2))\n\n-- math.LegacyNewDecFromStr("100.000000000000000000").Sub(math.LegacyNewDecFromInt(2))\n++ foo, err := math.NewDecFromString("100.000000000000000000")\n++ foo.Sub(math.NewDecFromInt(2))\n')),(0,i.yg)("h2",{id:"modules-migrating-from-legacydec-to-dec"},"Modules migrating from ",(0,i.yg)("inlineCode",{parentName:"h2"},"LegacyDec")," to ",(0,i.yg)("inlineCode",{parentName:"h2"},"Dec")),(0,i.yg)("p",null,"When migrating from ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec"),", you need to update your module to use the new decimal type. ",(0,i.yg)("strong",{parentName:"p"},"These types are state breaking changes and require a migration.")),(0,i.yg)("h2",{id:"precision-handling"},"Precision Handling"),(0,i.yg)("p",null,"The reason for the state breaking change is the difference in precision handling between the two decimal types:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"LegacyDec"),": Fixed precision of 18 decimal places."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Dec"),": Flexible precision up to 34 decimal places using the apd library.")),(0,i.yg)("h2",{id:"impact-of-precision-change"},"Impact of Precision Change"),(0,i.yg)("p",null,"The increase in precision from 18 to 34 decimal places allows for more detailed decimal values but requires data migration. This change in how data is formatted and stored is a key aspect of why the transition is considered state-breaking."),(0,i.yg)("h2",{id:"converting-legacydec-to-dec-without-storing-the-data"},"Converting ",(0,i.yg)("inlineCode",{parentName:"h2"},"LegacyDec")," to ",(0,i.yg)("inlineCode",{parentName:"h2"},"Dec")," without storing the data"),(0,i.yg)("p",null,"If you would like to convert a ",(0,i.yg)("inlineCode",{parentName:"p"},"LegacyDec")," to a ",(0,i.yg)("inlineCode",{parentName:"p"},"Dec")," without a state migration changing how the data is handled internally within the application logic and not how it's stored or represented. You can use the following methods."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func LegacyDecToDec(ld LegacyDec) (Dec, error) {\n    return NewDecFromString(ld.String())\n}\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func DecToLegacyDec(ld Dec) (LegacyDec, error) {\n    return LegacyDecFromString(ld.String())\n}\n")))}m.isMDXComponent=!0}}]);