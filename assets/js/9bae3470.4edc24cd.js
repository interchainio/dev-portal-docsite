"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[49884],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),g=o,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const r={sidebar_position:1},i="Store",s={unversionedId:"learn/advanced/store",id:"version-0.50/learn/advanced/store",title:"Store",description:"A store is a data structure that holds the state of the application.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/learn/advanced/04-store.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/store",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/store",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Node Client (Daemon)",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/node"},next:{title:"Encoding",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/encoding"}},l={},p=[{value:"Introduction to Cosmos SDK Stores",id:"introduction-to-cosmos-sdk-stores",level:2},{value:"Store Interface",id:"store-interface",level:3},{value:"Commit Store",id:"commit-store",level:3},{value:"Multistore",id:"multistore",level:2},{value:"Multistore Interface",id:"multistore-interface",level:3},{value:"CommitMultiStore",id:"commitmultistore",level:3},{value:"CacheMultiStore",id:"cachemultistore",level:3},{value:"Base-layer KVStores",id:"base-layer-kvstores",level:2},{value:"<code>KVStore</code> and <code>CommitKVStore</code> Interfaces",id:"kvstore-and-commitkvstore-interfaces",level:3},{value:"<code>IAVL</code> Store",id:"iavl-store",level:3},{value:"<code>DbAdapter</code> Store",id:"dbadapter-store",level:3},{value:"<code>Transient</code> Store",id:"transient-store",level:3},{value:"KVStore Wrappers",id:"kvstore-wrappers",level:2},{value:"CacheKVStore",id:"cachekvstore",level:3},{value:"<code>Get</code>",id:"get",level:4},{value:"<code>Set</code>",id:"set",level:4},{value:"<code>Iterator</code>",id:"iterator",level:4},{value:"<code>GasKv</code> Store",id:"gaskv-store",level:3},{value:"<code>TraceKv</code> Store",id:"tracekv-store",level:3},{value:"<code>Prefix</code> Store",id:"prefix-store",level:3},{value:"<code>ListenKv</code> Store",id:"listenkv-store",level:3},{value:"<code>BasicKVStore</code> interface",id:"basickvstore-interface",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"store"},"Store"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"A store is a data structure that holds the state of the application.")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/app-anatomy"},"Anatomy of a Cosmos SDK application")))),(0,o.yg)("h2",{id:"introduction-to-cosmos-sdk-stores"},"Introduction to Cosmos SDK Stores"),(0,o.yg)("p",null,"The Cosmos SDK comes with a large set of stores to persist the state of applications. By default, the main store of Cosmos SDK applications is a ",(0,o.yg)("inlineCode",{parentName:"p"},"multistore"),", i.e. a store of stores. Developers can add any number of key-value stores to the multistore, depending on their application needs. The multistore exists to support the modularity of the Cosmos SDK, as it lets each module declare and manage their own subset of the state. Key-value stores in the multistore can only be accessed with a specific capability ",(0,o.yg)("inlineCode",{parentName:"p"},"key"),", which is typically held in the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},(0,o.yg)("inlineCode",{parentName:"a"},"keeper"))," of the module that declared the store."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"+-----------------------------------------------------+\n|                                                     |\n|    +--------------------------------------------+   |\n|    |                                            |   |\n|    |  KVStore 1 - Manage by keeper of Module 1  |\n|    |                                            |   |\n|    +--------------------------------------------+   |\n|                                                     |\n|    +--------------------------------------------+   |\n|    |                                            |   |\n|    |  KVStore 2 - Manage by keeper of Module 2  |   |\n|    |                                            |   |\n|    +--------------------------------------------+   |\n|                                                     |\n|    +--------------------------------------------+   |\n|    |                                            |   |\n|    |  KVStore 3 - Manage by keeper of Module 2  |   |\n|    |                                            |   |\n|    +--------------------------------------------+   |\n|                                                     |\n|    +--------------------------------------------+   |\n|    |                                            |   |\n|    |  KVStore 4 - Manage by keeper of Module 3  |   |\n|    |                                            |   |\n|    +--------------------------------------------+   |\n|                                                     |\n|    +--------------------------------------------+   |\n|    |                                            |   |\n|    |  KVStore 5 - Manage by keeper of Module 4  |   |\n|    |                                            |   |\n|    +--------------------------------------------+   |\n|                                                     |\n|                    Main Multistore                  |\n|                                                     |\n+-----------------------------------------------------+\n\n                   Application's State\n")),(0,o.yg)("h3",{id:"store-interface"},"Store Interface"),(0,o.yg)("p",null,"At its very core, a Cosmos SDK ",(0,o.yg)("inlineCode",{parentName:"p"},"store")," is an object that holds a ",(0,o.yg)("inlineCode",{parentName:"p"},"CacheWrapper")," and has a ",(0,o.yg)("inlineCode",{parentName:"p"},"GetStoreType()")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L15-L18\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"GetStoreType")," is a simple method that returns the type of store, whereas a ",(0,o.yg)("inlineCode",{parentName:"p"},"CacheWrapper")," is a simple interface that implements store read caching and write branching through ",(0,o.yg)("inlineCode",{parentName:"p"},"Write")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L287-L320\n")),(0,o.yg)("p",null,"Branching and cache is used ubiquitously in the Cosmos SDK and required to be implemented on every store type. A storage branch creates an isolated, ephemeral branch of a store that can be passed around and updated without affecting the main underlying store. This is used to trigger temporary state-transitions that may be reverted later should an error occur. Read more about it in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/context#Store-branching"},"context")),(0,o.yg)("h3",{id:"commit-store"},"Commit Store"),(0,o.yg)("p",null,"A commit store is a store that has the ability to commit changes made to the underlying tree or db. The Cosmos SDK differentiates simple stores from commit stores by extending the basic store interfaces with a ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L32-L37\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer")," is an interface that defines methods to persist changes to disk:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L20-L30\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitID")," is a deterministic commit of the state tree. Its hash is returned to the underlying consensus engine and stored in the block header. Note that commit store interfaces exist for various purposes, one of which is to make sure not every object can commit the store. As part of the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/ocap"},"object-capabilities model")," of the Cosmos SDK, only ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp")," should have the ability to commit stores. For example, this is the reason why the ",(0,o.yg)("inlineCode",{parentName:"p"},"ctx.KVStore()")," method by which modules typically access stores returns a ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," and not a ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitKVStore"),"."),(0,o.yg)("p",null,"The Cosmos SDK comes with many types of stores, the most used being ",(0,o.yg)("a",{parentName:"p",href:"#multistore"},(0,o.yg)("inlineCode",{parentName:"a"},"CommitMultiStore")),", ",(0,o.yg)("a",{parentName:"p",href:"#kvstore"},(0,o.yg)("inlineCode",{parentName:"a"},"KVStore"))," and ",(0,o.yg)("a",{parentName:"p",href:"#gaskv-store"},(0,o.yg)("inlineCode",{parentName:"a"},"GasKv")," store"),". ",(0,o.yg)("a",{parentName:"p",href:"#other-stores"},"Other types of stores")," include ",(0,o.yg)("inlineCode",{parentName:"p"},"Transient")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"TraceKV")," stores."),(0,o.yg)("h2",{id:"multistore"},"Multistore"),(0,o.yg)("h3",{id:"multistore-interface"},"Multistore Interface"),(0,o.yg)("p",null,"Each Cosmos SDK application holds a multistore at its root to persist its state. The multistore is a store of ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStores")," that follows the ",(0,o.yg)("inlineCode",{parentName:"p"},"Multistore")," interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L123-L155\n")),(0,o.yg)("p",null,"If tracing is enabled, then branching the multistore will firstly wrap all the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," in ",(0,o.yg)("a",{parentName:"p",href:"#tracekv-store"},(0,o.yg)("inlineCode",{parentName:"a"},"TraceKv.Store")),"."),(0,o.yg)("h3",{id:"commitmultistore"},"CommitMultiStore"),(0,o.yg)("p",null,"The main type of ",(0,o.yg)("inlineCode",{parentName:"p"},"Multistore")," used in the Cosmos SDK is ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitMultiStore"),", which is an extension of the ",(0,o.yg)("inlineCode",{parentName:"p"},"Multistore")," interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L164-L227\n")),(0,o.yg)("p",null,"As for concrete implementation, the ","[",(0,o.yg)("inlineCode",{parentName:"p"},"rootMulti.Store"),"]"," is the go-to implementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitMultiStore")," interface."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/rootmulti/store.go#L53-L77\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"rootMulti.Store")," is a base-layer multistore built around a ",(0,o.yg)("inlineCode",{parentName:"p"},"db")," on top of which multiple ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStores")," can be mounted, and is the default multistore store used in ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp"},(0,o.yg)("inlineCode",{parentName:"a"},"baseapp")),"."),(0,o.yg)("h3",{id:"cachemultistore"},"CacheMultiStore"),(0,o.yg)("p",null,"Whenever the ",(0,o.yg)("inlineCode",{parentName:"p"},"rootMulti.Store")," needs to be branched, a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/cachemulti/store.go"},(0,o.yg)("inlineCode",{parentName:"a"},"cachemulti.Store"))," is used."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/cachemulti/store.go#L19-L33\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"cachemulti.Store")," branches all substores (creates a virtual store for each substore) in its constructor and hold them in ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.stores"),". Moreover caches all read queries. ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.GetKVStore()")," returns the store from ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.stores"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.Write()")," recursively calls ",(0,o.yg)("inlineCode",{parentName:"p"},"CacheWrap.Write()")," on all the substores."),(0,o.yg)("h2",{id:"base-layer-kvstores"},"Base-layer KVStores"),(0,o.yg)("h3",{id:"kvstore-and-commitkvstore-interfaces"},(0,o.yg)("inlineCode",{parentName:"h3"},"KVStore")," and ",(0,o.yg)("inlineCode",{parentName:"h3"},"CommitKVStore")," Interfaces"),(0,o.yg)("p",null,"A ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," is a simple key-value store used to store and retrieve data. A ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitKVStore")," is a ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," that also implements a ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer"),". By default, stores mounted in ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp"),"'s main ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitMultiStore")," are ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitKVStore"),"s. The ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," interface is primarily used to restrict modules from accessing the committer."),(0,o.yg)("p",null,"Individual ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),"s are used by modules to manage a subset of the global state. ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStores")," can be accessed by objects that hold a specific key. This ",(0,o.yg)("inlineCode",{parentName:"p"},"key")," should only be exposed to the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},(0,o.yg)("inlineCode",{parentName:"a"},"keeper"))," of the module that defines the store."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"CommitKVStore"),"s are declared by proxy of their respective ",(0,o.yg)("inlineCode",{parentName:"p"},"key")," and mounted on the application's ",(0,o.yg)("a",{parentName:"p",href:"#multistore"},"multistore")," in the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/app-anatomy#core-application-file"},"main application file"),". In the same file, the ",(0,o.yg)("inlineCode",{parentName:"p"},"key")," is also passed to the module's ",(0,o.yg)("inlineCode",{parentName:"p"},"keeper")," that is responsible for managing the store."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/store.go#L229-L266\n")),(0,o.yg)("p",null,"Apart from the traditional ",(0,o.yg)("inlineCode",{parentName:"p"},"Get")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Set")," methods, that a ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," must implement via the ",(0,o.yg)("inlineCode",{parentName:"p"},"BasicKVStore")," interface; a ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," must provide an ",(0,o.yg)("inlineCode",{parentName:"p"},"Iterator(start, end)")," method which returns an ",(0,o.yg)("inlineCode",{parentName:"p"},"Iterator")," object. It is used to iterate over a range of keys, typically keys that share a common prefix. Below is an example from the bank's module keeper, used to iterate over all account balances:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/view.go#L125-L140\n")),(0,o.yg)("h3",{id:"iavl-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"IAVL")," Store"),(0,o.yg)("p",null,"The default implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitKVStore")," used in ",(0,o.yg)("inlineCode",{parentName:"p"},"baseapp")," is the ",(0,o.yg)("inlineCode",{parentName:"p"},"iavl.Store"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/iavl/store.go#L35-L40\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"iavl")," stores are based around an ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/iavl"},"IAVL Tree"),", a self-balancing binary tree which guarantees that:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Get")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"Set")," operations are O(log n), where n is the number of elements in the tree."),(0,o.yg)("li",{parentName:"ul"},"Iteration efficiently returns the sorted elements within the range."),(0,o.yg)("li",{parentName:"ul"},"Each tree version is immutable and can be retrieved even after a commit (depending on the pruning settings).")),(0,o.yg)("p",null,"The documentation on the IAVL Tree is located ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/iavl/blob/master/docs/overview.md"},"here"),"."),(0,o.yg)("h3",{id:"dbadapter-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"DbAdapter")," Store"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"dbadapter.Store")," is an adapter for ",(0,o.yg)("inlineCode",{parentName:"p"},"dbm.DB")," making it fulfilling the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," interface."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/dbadapter/store.go#L13-L16\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"dbadapter.Store")," embeds ",(0,o.yg)("inlineCode",{parentName:"p"},"dbm.DB"),", meaning most of the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," interface functions are implemented. The other functions (mostly miscellaneous) are manually implemented. This store is primarily used within ",(0,o.yg)("a",{parentName:"p",href:"#transient-store"},"Transient Stores")),(0,o.yg)("h3",{id:"transient-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"Transient")," Store"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Transient.Store")," is a base-layer ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," which is automatically discarded at the end of the block."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/transient/store.go#L16-L19\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Transient.Store")," is a ",(0,o.yg)("inlineCode",{parentName:"p"},"dbadapter.Store")," with a ",(0,o.yg)("inlineCode",{parentName:"p"},"dbm.NewMemDB()"),". All ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," methods are reused. When ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.Commit()")," is called, a new ",(0,o.yg)("inlineCode",{parentName:"p"},"dbadapter.Store")," is assigned, discarding previous reference and making it garbage collected."),(0,o.yg)("p",null,"This type of store is useful to persist information that is only relevant per-block. One example would be to store parameter changes (i.e. a bool set to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if a parameter changed in a block)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/params/types/subspace.go#L21-L31\n")),(0,o.yg)("p",null,"Transient stores are typically accessed via the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/context"},(0,o.yg)("inlineCode",{parentName:"a"},"context"))," via the ",(0,o.yg)("inlineCode",{parentName:"p"},"TransientStore()")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/types/context.go#L340-L343\n")),(0,o.yg)("h2",{id:"kvstore-wrappers"},"KVStore Wrappers"),(0,o.yg)("h3",{id:"cachekvstore"},"CacheKVStore"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"cachekv.Store")," is a wrapper ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," which provides buffered writing / cached reading functionalities over the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/cachekv/store.go#L26-L36\n")),(0,o.yg)("p",null,"This is the type used whenever an IAVL Store needs to be branched to create an isolated store (typically when we need to mutate a state that might be reverted later)."),(0,o.yg)("h4",{id:"get"},(0,o.yg)("inlineCode",{parentName:"h4"},"Get")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Store.Get()")," firstly checks if ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.cache")," has an associated value with the key. If the value exists, the function returns it. If not, the function calls ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.parent.Get()"),", caches the result in ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.cache"),", and returns it."),(0,o.yg)("h4",{id:"set"},(0,o.yg)("inlineCode",{parentName:"h4"},"Set")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Store.Set()")," sets the key-value pair to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.cache"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"cValue")," has the field dirty bool which indicates whether the cached value is different from the underlying value. When ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.Set()")," caches a new pair, the ",(0,o.yg)("inlineCode",{parentName:"p"},"cValue.dirty")," is set ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," so when ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.Write()")," is called it can be written to the underlying store."),(0,o.yg)("h4",{id:"iterator"},(0,o.yg)("inlineCode",{parentName:"h4"},"Iterator")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Store.Iterator()")," have to traverse on both cached items and the original items. In ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.iterator()"),", two iterators are generated for each of them, and merged. ",(0,o.yg)("inlineCode",{parentName:"p"},"memIterator")," is essentially a slice of the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVPairs"),", used for cached items. ",(0,o.yg)("inlineCode",{parentName:"p"},"mergeIterator")," is a combination of two iterators, where traverse happens ordered on both iterators."),(0,o.yg)("h3",{id:"gaskv-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"GasKv")," Store"),(0,o.yg)("p",null,"Cosmos SDK applications use ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/beginner/gas-fees"},(0,o.yg)("inlineCode",{parentName:"a"},"gas"))," to track resources usage and prevent spam. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/gaskv/store.go"},(0,o.yg)("inlineCode",{parentName:"a"},"GasKv.Store"))," is a ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," wrapper that enables automatic gas consumption each time a read or write to the store is made. It is the solution of choice to track storage usage in Cosmos SDK applications."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/gaskv/store.go#L11-L17\n")),(0,o.yg)("p",null,"When methods of the parent ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," are called, ",(0,o.yg)("inlineCode",{parentName:"p"},"GasKv.Store")," automatically consumes appropriate amount of gas depending on the ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.gasConfig"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/gas.go#L219-L228\n")),(0,o.yg)("p",null,"By default, all ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStores")," are wrapped in ",(0,o.yg)("inlineCode",{parentName:"p"},"GasKv.Stores")," when retrieved. This is done in the ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore()")," method of the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/context"},(0,o.yg)("inlineCode",{parentName:"a"},"context")),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/types/context.go#L335-L338\n")),(0,o.yg)("p",null,"In this case, the gas configuration set in the ",(0,o.yg)("inlineCode",{parentName:"p"},"context")," is used. The gas configuration can be set using the ",(0,o.yg)("inlineCode",{parentName:"p"},"WithKVGasConfig")," method of the ",(0,o.yg)("inlineCode",{parentName:"p"},"context"),".\nOtherwise it uses the following default:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/types/gas.go#L230-L241\n")),(0,o.yg)("h3",{id:"tracekv-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"TraceKv")," Store"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"tracekv.Store")," is a wrapper ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," which provides operation tracing functionalities over the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),". It is applied automatically by the Cosmos SDK on all ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," if tracing is enabled on the parent ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiStore"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/tracekv/store.go#L20-L43\n")),(0,o.yg)("p",null,"When each ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," methods are called, ",(0,o.yg)("inlineCode",{parentName:"p"},"tracekv.Store")," automatically logs ",(0,o.yg)("inlineCode",{parentName:"p"},"traceOperation")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.writer"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"traceOperation.Metadata")," is filled with ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.context")," when it is not nil. ",(0,o.yg)("inlineCode",{parentName:"p"},"TraceContext")," is a ",(0,o.yg)("inlineCode",{parentName:"p"},"map[string]interface{}"),"."),(0,o.yg)("h3",{id:"prefix-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"Prefix")," Store"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"prefix.Store")," is a wrapper ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," which provides automatic key-prefixing functionalities over the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/prefix/store.go#L15-L21\n")),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.{Get, Set}()")," is called, the store forwards the call to its parent, with the key prefixed with the ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.prefix"),"."),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.Iterator()")," is called, it does not simply prefix the ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.prefix"),", since it does not work as intended. In that case, some of the elements are traversed even if they are not starting with the prefix."),(0,o.yg)("h3",{id:"listenkv-store"},(0,o.yg)("inlineCode",{parentName:"h3"},"ListenKv")," Store"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"listenkv.Store")," is a wrapper ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," which provides state listening capabilities over the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore"),".\nIt is applied automatically by the Cosmos SDK on any ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," whose ",(0,o.yg)("inlineCode",{parentName:"p"},"StoreKey")," is specified during state streaming configuration.\nAdditional information about state streaming configuration can be found in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/v0.50.0-alpha.0/store/streaming"},"store/streaming/README.md"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/store/listenkv/store.go#L11-L18\n")),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore.Set")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore.Delete")," methods are called, ",(0,o.yg)("inlineCode",{parentName:"p"},"listenkv.Store")," automatically writes the operations to the set of ",(0,o.yg)("inlineCode",{parentName:"p"},"Store.listeners"),"."),(0,o.yg)("h2",{id:"basickvstore-interface"},(0,o.yg)("inlineCode",{parentName:"h2"},"BasicKVStore")," interface"),(0,o.yg)("p",null,"An interface providing only the basic CRUD functionality (",(0,o.yg)("inlineCode",{parentName:"p"},"Get"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Set"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Has"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"Delete")," methods), without iteration or caching. This is used to partially expose components of a larger store."))}c.isMDXComponent=!0}}]);