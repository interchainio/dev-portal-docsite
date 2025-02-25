"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[3165],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>g});var a=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return o?a.createElement(g,i(i({ref:t},d),{},{components:o})):a.createElement(g,i({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},98241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(58168),r=(o(96540),o(15680));const n={},i="ADR 055: ORM",s={unversionedId:"build/architecture/adr-055-orm",id:"version-0.52/build/architecture/adr-055-orm",title:"ADR 055: ORM",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-055-orm.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-055-orm",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-055-orm",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 054: Semver Compatible SDK Modules",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-054-semver-compatible-modules"},next:{title:"ADR 057: App Wiring",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-057-app-wiring"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.yg)(m,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-055-orm"},"ADR 055: ORM"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2022-04-27: First draft")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"ACCEPTED Implemented"),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,"In order to make it easier for developers to build Cosmos SDK modules and for clients to query, index and verify proofs\nagainst state data, we have implemented an ORM (object-relational mapping) layer for the Cosmos SDK."),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"Historically modules in the Cosmos SDK have always used the key-value store directly and created various handwritten\nfunctions for managing key format as well as constructing secondary indexes. This consumes a significant amount of\ntime when building a module and is error-prone. Because key formats are non-standard, sometimes poorly documented,\nand subject to change, it is hard for clients to generically index, query and verify merkle proofs against state data."),(0,r.yg)("p",null,'The known first instance of an "ORM" in the Cosmos ecosystem was in ',(0,r.yg)("a",{parentName:"p",href:"https://github.com/iov-one/weave/tree/master/orm"},"weave"),".\nA later version was built for ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm"},"regen-ledger")," for\nuse in the group module and later ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm"},"ported to the SDK"),"\njust for that purpose."),(0,r.yg)("p",null,"While these earlier designs made it significantly easier to write state machines, they still required a lot of manual\nconfiguration, didn't expose state format directly to clients, and were limited in their support of different types\nof index keys, composite keys, and range queries."),(0,r.yg)("p",null,"Discussions about the design continued in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9156"},"https://github.com/cosmos/cosmos-sdk/discussions/9156")," and more\nsophisticated proofs of concept were created in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"},"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/10454"},"https://github.com/cosmos/cosmos-sdk/pull/10454"),"."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"These prior efforts culminated in the creation of the Cosmos SDK ",(0,r.yg)("inlineCode",{parentName:"p"},"orm")," go module which uses protobuf annotations\nfor specifying ORM table definitions. This ORM is based on the new ",(0,r.yg)("inlineCode",{parentName:"p"},"google.golang.org/protobuf/reflect/protoreflect"),"\nAPI and supports:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sorted indexes for all simple protobuf types (except ",(0,r.yg)("inlineCode",{parentName:"li"},"bytes"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"enum"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"float"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"double"),") as well as ",(0,r.yg)("inlineCode",{parentName:"li"},"Timestamp")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"Duration")),(0,r.yg)("li",{parentName:"ul"},"unsorted ",(0,r.yg)("inlineCode",{parentName:"li"},"bytes")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"enum")," indexes"),(0,r.yg)("li",{parentName:"ul"},"composite primary and secondary keys"),(0,r.yg)("li",{parentName:"ul"},"unique indexes"),(0,r.yg)("li",{parentName:"ul"},"auto-incrementing ",(0,r.yg)("inlineCode",{parentName:"li"},"uint64")," primary keys"),(0,r.yg)("li",{parentName:"ul"},"complex prefix and range queries"),(0,r.yg)("li",{parentName:"ul"},"paginated queries"),(0,r.yg)("li",{parentName:"ul"},"complete logical decoding of KV-store data")),(0,r.yg)("p",null,"Almost all the information needed to decode state directly is specified in .proto files. Each table definition specifies\nan ID which is unique per .proto file and each index within a table is unique within that table. Clients then only need\nto know the name of a module and the prefix ORM data for a specific .proto file within that module in order to decode\nstate data directly. This additional information will be exposed directly through app configs which will be explained\nin a future ADR related to app wiring."),(0,r.yg)("p",null,"The ORM makes optimizations around storage space by not repeating values in the primary key in the key value\nwhen storing primary key records. For example, if the object ",(0,r.yg)("inlineCode",{parentName:"p"},'{"a":0,"b":1}')," has the primary key ",(0,r.yg)("inlineCode",{parentName:"p"},"a"),", it will\nbe stored in the key value store as ",(0,r.yg)("inlineCode",{parentName:"p"},"Key: '0', Value: {\"b\":1}")," (with more efficient protobuf binary encoding).\nAlso, the generated code from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-proto"},"https://github.com/cosmos/cosmos-proto")," does optimizations around the\n",(0,r.yg)("inlineCode",{parentName:"p"},"google.golang.org/protobuf/reflect/protoreflect")," API to improve performance."),(0,r.yg)("p",null,"A code generator is included with the ORM which creates type safe wrappers around the ORM's dynamic ",(0,r.yg)("inlineCode",{parentName:"p"},"Table"),"\nimplementation and is the recommended way for modules to use the ORM."),(0,r.yg)("p",null,"The ORM tests provide a simplified bank module demonstration which illustrates:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.proto"},"ORM proto options")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.cosmos_orm.go"},"Generated Code")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/model/ormdb/module_test.go"},"Example Usage in a Module Keeper"))),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.yg)("p",null,"State machine code that adopts the ORM will need migrations as the state layout is generally backwards incompatible.\nThese state machines will also need to migrate to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-proto"},"https://github.com/cosmos/cosmos-proto")," at least for state data."),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"easier to build modules"),(0,r.yg)("li",{parentName:"ul"},"easier to add secondary indexes to state"),(0,r.yg)("li",{parentName:"ul"},"possible to write a generic indexer for ORM state"),(0,r.yg)("li",{parentName:"ul"},"easier to write clients that do state proofs"),(0,r.yg)("li",{parentName:"ul"},"possible to automatically write query layers rather than needing to manually implement gRPC queries")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"worse performance than handwritten keys (for now). See ",(0,r.yg)("a",{parentName:"li",href:"#further-discussions"},"Further Discussions"),"\nfor potential improvements")),(0,r.yg)("h3",{id:"neutral"},"Neutral"),(0,r.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,r.yg)("p",null,"Further discussions will happen within the Cosmos SDK Framework Working Group. Current planned and ongoing work includes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"automatically generate client-facing query layer"),(0,r.yg)("li",{parentName:"ul"},"client-side query libraries that transparently verify light client proofs"),(0,r.yg)("li",{parentName:"ul"},"index ORM data to SQL databases"),(0,r.yg)("li",{parentName:"ul"},"improve performance by:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optimizing existing reflection based code to avoid unnecessary gets when doing deletes & updates of simple tables"),(0,r.yg)("li",{parentName:"ul"},"more sophisticated code generation such as making fast path reflection even faster (avoiding ",(0,r.yg)("inlineCode",{parentName:"li"},"switch")," statements),\nor even fully generating code that equals handwritten performance")))),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/iov-one/weave/tree/master/orm"},"https://github.com/iov-one/weave/tree/master/orm"),")."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm"},"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm"},"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9156"},"https://github.com/cosmos/cosmos-sdk/discussions/9156")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"},"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10454"},"https://github.com/cosmos/cosmos-sdk/pull/10454"))))}p.isMDXComponent=!0}}]);