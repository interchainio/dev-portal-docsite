"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[6947],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const i={},s="ADR 040: Storage and SMT State Commitments",r={unversionedId:"build/architecture/adr-040-storage-and-smt-state-commitments",id:"version-0.52/build/architecture/adr-040-storage-and-smt-state-commitments",title:"ADR 040: Storage and SMT State Commitments",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-040-storage-and-smt-state-commitments.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-040-storage-and-smt-state-commitments",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-040-storage-and-smt-state-commitments",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 039: Epoched Staking",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-039-epoched-staking"},next:{title:"ADR 041: In-Place Store Migrations",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-041-in-place-store-migrations"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Decouple state commitment from storage",id:"decouple-state-commitment-from-storage",level:3},{value:"Requirements",id:"requirements",level:3},{value:"SMT for State Commitment",id:"smt-for-state-commitment",level:3},{value:"Snapshots for storage sync and state versioning",id:"snapshots-for-storage-sync-and-state-versioning",level:3},{value:"Accessing old state versions",id:"accessing-old-state-versions",level:4},{value:"State Proofs",id:"state-proofs",level:3},{value:"Rollbacks",id:"rollbacks",level:3},{value:"Committing to an object without saving it",id:"committing-to-an-object-without-saving-it",level:3},{value:"Refactor MultiStore",id:"refactor-multistore",level:3},{value:"Compatibility support",id:"compatibility-support",level:4},{value:"Merkle Proofs and IBC",id:"merkle-proofs-and-ibc",level:4},{value:"Optimization: compress module key prefixes",id:"optimization-compress-module-key-prefixes",level:3},{value:"Optimization: SS key compression",id:"optimization-ss-key-compression",level:2},{value:"Migration",id:"migration",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Alternative designs",id:"alternative-designs",level:2},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Evaluated KV Databases",id:"evaluated-kv-databases",level:3},{value:"RDBMS",id:"rdbms",level:3},{value:"Off Chain Store",id:"off-chain-store",level:3},{value:"References",id:"references",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-040-storage-and-smt-state-commitments"},"ADR 040: Storage and SMT State Commitments"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"2020-01-15: Draft")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"DRAFT Not Implemented"),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"Sparse Merkle Tree (",(0,o.yg)("a",{parentName:"p",href:"https://osf.io/8mcnh/"},"SMT"),") is a version of a Merkle Tree with various storage and performance optimizations. This ADR defines a separation of state commitments from data storage and the Cosmos SDK transition from IAVL to SMT."),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"Currently, Cosmos SDK uses IAVL for both state ",(0,o.yg)("a",{parentName:"p",href:"https://cryptography.fandom.com/wiki/Commitment_scheme"},"commitments")," and data storage."),(0,o.yg)("p",null,"IAVL has effectively become an orphaned project within the Cosmos ecosystem and it's proven to be an inefficient state commitment data structure.\nIn the current design, IAVL is used for both data storage and as a Merkle Tree for state commitments. IAVL is meant to be a standalone Merkelized key/value database, however it's using a KV DB engine to store all tree nodes. So, each node is stored in a separate record in the KV DB. This causes many inefficiencies and problems:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Each object query requires a tree traversal from the root. Subsequent queries for the same object are cached on the Cosmos SDK level."),(0,o.yg)("li",{parentName:"ul"},"Each edge traversal requires a DB query."),(0,o.yg)("li",{parentName:"ul"},"Creating snapshots is ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7215#issuecomment-684804950"},"expensive"),". It takes about 30 seconds to export less than 100 MB of state (as of March 2020)."),(0,o.yg)("li",{parentName:"ul"},"Updates in IAVL may trigger tree reorganization and possible O(log(n)) hashes re-computation, which can become a CPU bottleneck."),(0,o.yg)("li",{parentName:"ul"},"The node structure is pretty expensive - it contains a standard tree node elements (key, value, left and right element) and additional metadata such as height, version (which is not required by the Cosmos SDK). The entire node is hashed, and that hash is used as the key in the underlying database, ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/iavl/blob/master/docs/node/node.md"},"ref"),".")),(0,o.yg)("p",null,"Moreover, the IAVL project lacks support and a maintainer and we already see better and well-established alternatives. Instead of optimizing the IAVL, we are looking into other solutions for both storage and state commitments."),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"We propose to separate the concerns of state commitment (",(0,o.yg)("strong",{parentName:"p"},"SC"),"), needed for consensus, and state storage (",(0,o.yg)("strong",{parentName:"p"},"SS"),"), needed for state machine. Finally we replace IAVL with ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lazyledger/smt"},"Celestia's SMT"),". Celestia SMT is based on Diem (called jellyfish) design ","[*]"," - it uses a compute-optimised SMT by replacing subtrees with only default values with a single node (same approach is used by Ethereum2) and implements compact proofs."),(0,o.yg)("p",null,"The storage model presented here doesn't deal with data structure nor serialization. It's a Key-Value database, where both key and value are binaries. The storage user is responsible for data serialization."),(0,o.yg)("h3",{id:"decouple-state-commitment-from-storage"},"Decouple state commitment from storage"),(0,o.yg)("p",null,"Separation of storage and commitment (by the SMT) will allow the optimization of different components according to their usage and access patterns."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SC")," (SMT) is used to commit to a data and compute Merkle proofs. ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," is used to directly access data. To avoid collisions, both ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," will use a separate storage namespace (they could use the same database underneath). ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," will store each record directly (mapping ",(0,o.yg)("inlineCode",{parentName:"p"},"(key, value)")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"key \u2192 value"),")."),(0,o.yg)("p",null,"SMT is a merkle tree structure: we don't store keys directly. For every ",(0,o.yg)("inlineCode",{parentName:"p"},"(key, value)")," pair, ",(0,o.yg)("inlineCode",{parentName:"p"},"hash(key)")," is used as leaf path (we hash a key to uniformly distribute leaves in the tree) and ",(0,o.yg)("inlineCode",{parentName:"p"},"hash(value)")," as the leaf contents. The tree structure is specified in more depth ",(0,o.yg)("a",{parentName:"p",href:"#smt-for-state-commitment"},"below"),"."),(0,o.yg)("p",null,"For data access we propose 2 additional KV buckets (implemented as namespaces for the key-value pairs, sometimes called ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/wiki/Terminology"},"column family"),"):"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"B1: ",(0,o.yg)("inlineCode",{parentName:"li"},"key \u2192 value"),": the principal object storage, used by a state machine, behind the Cosmos SDK ",(0,o.yg)("inlineCode",{parentName:"li"},"KVStore")," interface: provides direct access by key and allows prefix iteration (KV DB backend must support it)."),(0,o.yg)("li",{parentName:"ol"},"B2: ",(0,o.yg)("inlineCode",{parentName:"li"},"hash(key) \u2192 key"),": a reverse index to get a key from an SMT path. Internally the SMT will store ",(0,o.yg)("inlineCode",{parentName:"li"},"(key, value)")," as ",(0,o.yg)("inlineCode",{parentName:"li"},"prefix || hash(key) || hash(value)"),". So, we can get an object value by composing ",(0,o.yg)("inlineCode",{parentName:"li"},"hash(key) \u2192 B2 \u2192 B1"),"."),(0,o.yg)("li",{parentName:"ol"},"We could use more buckets to optimize the app usage if needed.")),(0,o.yg)("p",null,"We propose to use a KV database for both ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SC"),". The store interface will allow to use the same physical DB backend for both ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," as well two separate DBs. The latter option allows for the separation of ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," into different hardware units, providing support for more complex setup scenarios and improving overall performance: one can use different backends (eg RocksDB and Badger) as well as independently tuning the underlying DB configuration."),(0,o.yg)("h3",{id:"requirements"},"Requirements"),(0,o.yg)("p",null,"State Storage requirements:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"range queries"),(0,o.yg)("li",{parentName:"ul"},"quick (key, value) access"),(0,o.yg)("li",{parentName:"ul"},"creating a snapshot"),(0,o.yg)("li",{parentName:"ul"},"historical versioning"),(0,o.yg)("li",{parentName:"ul"},"pruning (garbage collection)")),(0,o.yg)("p",null,"State Commitment requirements:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"fast updates"),(0,o.yg)("li",{parentName:"ul"},"tree path should be short"),(0,o.yg)("li",{parentName:"ul"},"query historical commitment proofs using ICS-23 standard"),(0,o.yg)("li",{parentName:"ul"},"pruning (garbage collection)")),(0,o.yg)("h3",{id:"smt-for-state-commitment"},"SMT for State Commitment"),(0,o.yg)("p",null,"A Sparse Merkle tree is based on the idea of a complete Merkle tree of an intractable size. The assumption here is that as the size of the tree is intractable, there would only be a few leaf nodes with valid data blocks relative to the tree size, rendering a sparse tree."),(0,o.yg)("p",null,"The full specification can be found at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-specs/blob/ec98170398dfc6394423ee79b00b71038879e211/src/specs/data_structures.md#sparse-merkle-tree"},"Celestia"),". In summary:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The SMT consists of a binary Merkle tree, constructed in the same fashion as described in ",(0,o.yg)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6962"},"Certificate Transparency (RFC-6962)"),", but using as the hashing function SHA-2-256 as defined in ",(0,o.yg)("a",{parentName:"li",href:"https://doi.org/10.6028/NIST.FIPS.180-4"},"FIPS 180-4"),"."),(0,o.yg)("li",{parentName:"ul"},"Leaves and internal nodes are hashed differently: the one-byte ",(0,o.yg)("inlineCode",{parentName:"li"},"0x00")," is prepended for leaf nodes while ",(0,o.yg)("inlineCode",{parentName:"li"},"0x01")," is prepended for internal nodes."),(0,o.yg)("li",{parentName:"ul"},"Default values are given to leaf nodes with empty leaves."),(0,o.yg)("li",{parentName:"ul"},"While the above rule is sufficient to pre-compute the values of intermediate nodes that are roots of empty subtrees, a further simplification is to extend this default value to all nodes that are roots of empty subtrees. The 32-byte zero is used as the default value. This rule takes precedence over the above one."),(0,o.yg)("li",{parentName:"ul"},"An internal node that is the root of a subtree that contains exactly one non-empty leaf is replaced by that leaf's leaf node.")),(0,o.yg)("h3",{id:"snapshots-for-storage-sync-and-state-versioning"},"Snapshots for storage sync and state versioning"),(0,o.yg)("p",null,"Below, with simple ",(0,o.yg)("em",{parentName:"p"},"snapshot")," we refer to a database snapshot mechanism, not to a ",(0,o.yg)("em",{parentName:"p"},"ABCI snapshot sync"),". The latter will be referred as ",(0,o.yg)("em",{parentName:"p"},"snapshot sync")," (which will directly use DB snapshot as described below)."),(0,o.yg)("p",null,"Database snapshot is a view of DB state at a certain time or transaction. It's not a full copy of a database (it would be too big). Usually a snapshot mechanism is based on a ",(0,o.yg)("em",{parentName:"p"},"copy on write")," and it allows DB state to be efficiently delivered at a certain stage.\nSome DB engines support snapshotting. Hence, we propose to reuse that functionality for the state sync and versioning (described below). We limit the supported DB engines to ones which efficiently implement snapshots. In a final section we discuss the evaluated DBs."),(0,o.yg)("p",null,"One of the Stargate core features is a ",(0,o.yg)("em",{parentName:"p"},"snapshot sync")," delivered in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/snapshot")," package. It provides a way to trustlessly sync a blockchain without repeating all transactions from the genesis. This feature is implemented in Cosmos SDK and requires storage support. Currently IAVL is the only supported backend. It works by streaming to a client a snapshot of a ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," at a certain version together with a header chain."),(0,o.yg)("p",null,"A new database snapshot will be created in every ",(0,o.yg)("inlineCode",{parentName:"p"},"EndBlocker")," and identified by a block height. The ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," store keeps track of the available snapshots to offer ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," at a certain version. The ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," store implements the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," interface described below. In essence, ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," encapsulates a ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer")," interface. ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer")," has a ",(0,o.yg)("inlineCode",{parentName:"p"},"Commit"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"SetPruning"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"GetPruning")," functions which will be used for creating and removing snapshots. The ",(0,o.yg)("inlineCode",{parentName:"p"},"rootStore.Commit")," function creates a new snapshot and increments the version on each call, and checks if it needs to remove old versions. We will need to update the SMT interface to implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer")," interface.\nNOTE: ",(0,o.yg)("inlineCode",{parentName:"p"},"Commit")," must be called exactly once per block. Otherwise we risk going out of sync for the version number and block height.\nNOTE: For the Cosmos SDK storage, we may consider splitting that interface into ",(0,o.yg)("inlineCode",{parentName:"p"},"Committer")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PruningCommitter")," - only the multiroot should implement ",(0,o.yg)("inlineCode",{parentName:"p"},"PruningCommitter")," (cache and prefix store don't need pruning)."),(0,o.yg)("p",null,"Number of historical versions for ",(0,o.yg)("inlineCode",{parentName:"p"},"abci.QueryRequest")," and state sync snapshots is part of a node configuration, not a chain configuration (configuration implied by the blockchain consensus). A configuration should allow to specify number of past blocks and number of past blocks modulo some number (eg: 100 past blocks and one snapshot every 100 blocks for past 2000 blocks). Archival nodes can keep all past versions."),(0,o.yg)("p",null,"Pruning old snapshots is effectively done by a database. Whenever we update a record in ",(0,o.yg)("inlineCode",{parentName:"p"},"SC"),", SMT won't update nodes - instead it creates new nodes on the update path, without removing the old one. Since we are snapshotting each block, we need to change that mechanism to immediately remove orphaned nodes from the database. This is a safe operation - snapshots will keep track of the records and make it available when accessing past versions."),(0,o.yg)("p",null,"To manage the active snapshots we will either use a DB ",(0,o.yg)("em",{parentName:"p"},"max number of snapshots")," option (if available), or we will remove DB snapshots in the ",(0,o.yg)("inlineCode",{parentName:"p"},"EndBlocker"),". The latter option can be done efficiently by identifying snapshots with block height and calling a store function to remove past versions."),(0,o.yg)("h4",{id:"accessing-old-state-versions"},"Accessing old state versions"),(0,o.yg)("p",null,"One of the functional requirements is to access old state. This is done through ",(0,o.yg)("inlineCode",{parentName:"p"},"abci.QueryRequest")," structure.  The version is specified by a block height (so we query for an object by a key ",(0,o.yg)("inlineCode",{parentName:"p"},"K")," at block height ",(0,o.yg)("inlineCode",{parentName:"p"},"H"),"). The number of old versions supported for ",(0,o.yg)("inlineCode",{parentName:"p"},"abci.QueryRequest")," is configurable. Accessing an old state is done by using available snapshots.\n",(0,o.yg)("inlineCode",{parentName:"p"},"abci.QueryRequest")," doesn't need old state of ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," unless the ",(0,o.yg)("inlineCode",{parentName:"p"},"prove=true")," parameter is set. The SMT merkle proof must be included in the ",(0,o.yg)("inlineCode",{parentName:"p"},"abci.QueryResponse")," only if both ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," have a snapshot for requested version."),(0,o.yg)("p",null,"Moreover, Cosmos SDK could provide a way to directly access a historical state. However, a state machine shouldn't do that - since the number of snapshots is configurable, it would lead to nondeterministic execution."),(0,o.yg)("p",null,"We positively ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/8297"},"validated")," a versioning and snapshot mechanism for querying old state with regards to the database we evaluated."),(0,o.yg)("h3",{id:"state-proofs"},"State Proofs"),(0,o.yg)("p",null,"For any object stored in State Store (SS), we have corresponding object in ",(0,o.yg)("inlineCode",{parentName:"p"},"SC"),". A proof for object ",(0,o.yg)("inlineCode",{parentName:"p"},"V")," identified by a key ",(0,o.yg)("inlineCode",{parentName:"p"},"K")," is a branch of ",(0,o.yg)("inlineCode",{parentName:"p"},"SC"),", where the path corresponds to the key ",(0,o.yg)("inlineCode",{parentName:"p"},"hash(K)"),", and the leaf is ",(0,o.yg)("inlineCode",{parentName:"p"},"hash(K, V)"),"."),(0,o.yg)("h3",{id:"rollbacks"},"Rollbacks"),(0,o.yg)("p",null,"We need to be able to process transactions and roll-back state updates if a transaction fails. This can be done in the following way: during transaction processing, we keep all state change requests (writes) in a ",(0,o.yg)("inlineCode",{parentName:"p"},"CacheWrapper")," abstraction (as it's done today). Once we finish the block processing, in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Endblocker"),",  we commit a root store - at that time, all changes are written to the SMT and to the ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," and a snapshot is created."),(0,o.yg)("h3",{id:"committing-to-an-object-without-saving-it"},"Committing to an object without saving it"),(0,o.yg)("p",null,"We identified use-cases, where modules will need to save an object commitment without storing an object itself. Sometimes clients are receiving complex objects, and they have no way to prove a correctness of that object without knowing the storage layout. For those use cases it would be easier to commit to the object without storing it directly."),(0,o.yg)("h3",{id:"refactor-multistore"},"Refactor MultiStore"),(0,o.yg)("p",null,"The Stargate ",(0,o.yg)("inlineCode",{parentName:"p"},"/store")," implementation (store/v1) adds an additional layer in the SDK store construction - the ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiStore")," structure. The multistore exists to support the modularity of the Cosmos SDK - each module is using its own instance of IAVL, but in the current implementation, all instances share the same database. The latter indicates, however, that the implementation doesn't provide true modularity. Instead it causes problems related to race condition and atomic DB commits (see: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6370"},"#","6370")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/8297#discussioncomment-757043"},"discussion"),")."),(0,o.yg)("p",null,"We propose to reduce the multistore concept from the SDK, and to use a single instance of ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," in a ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," object. To avoid confusion, we should rename the ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiStore")," interface to ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore"),". The ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," will have the following interface; the methods for configuring tracing and listeners are omitted for brevity."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Used where read-only access to versions is needed.\ntype BasicRootStore interface {\n    Store\n    GetKVStore(StoreKey) KVStore\n    CacheRootStore() CacheRootStore\n}\n\n// Used as the main app state, replacing CommitMultiStore.\ntype CommitRootStore interface {\n    BasicRootStore\n    Committer\n    Snapshotter\n\n    GetVersion(uint64) (BasicRootStore, error)\n    SetInitialVersion(uint64) error\n\n    ... // Trace and Listen methods\n}\n\n// Replaces CacheMultiStore for branched state.\ntype CacheRootStore interface {\n    BasicRootStore\n    Write()\n\n    ... // Trace and Listen methods\n}\n\n// Example of constructor parameters for the concrete type.\ntype RootStoreConfig struct {\n    Upgrades        *StoreUpgrades\n    InitialVersion  uint64\n\n    ReservePrefix(StoreKey, StoreType)\n}\n")),(0,o.yg)("p",null,"In contrast to ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiStore"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," doesn't allow to dynamically mount sub-stores or provide an arbitrary backing DB for individual sub-stores."),(0,o.yg)("p",null,"NOTE: modules will be able to use a special commitment and their own DBs. For example: a module which will use ZK proofs for state can store and commit this proof in the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," (usually as a single record) and manage the specialized store privately or using the ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," low level interface."),(0,o.yg)("h4",{id:"compatibility-support"},"Compatibility support"),(0,o.yg)("p",null,"To ease the transition to this new interface for users, we can create a shim which wraps a ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitMultiStore")," but provides a ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitRootStore")," interface, and expose functions to safely create and access the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"CommitMultiStore"),"."),(0,o.yg)("p",null,"The new ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," and supporting types can be implemented in a ",(0,o.yg)("inlineCode",{parentName:"p"},"store/v2alpha1")," package to avoid breaking existing code."),(0,o.yg)("h4",{id:"merkle-proofs-and-ibc"},"Merkle Proofs and IBC"),(0,o.yg)("p",null,"Currently, an IBC (v1.0) Merkle proof path consists of two elements (",(0,o.yg)("inlineCode",{parentName:"p"},'["<store-key>", "<record-key>"]'),"), with each key corresponding to a separate proof. These are each verified according to individual ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/f7051429e1cf833a6f65d51e6c3df1609290a549/modules/core/23-commitment/types/merkle.go#L17"},"ICS-23 specs"),", and the result hash of each step is used as the committed value of the next step, until a root commitment hash is obtained.\nThe root hash of the proof for ",(0,o.yg)("inlineCode",{parentName:"p"},'"<record-key>"')," is hashed with the ",(0,o.yg)("inlineCode",{parentName:"p"},'"<store-key>"')," to validate against the App Hash."),(0,o.yg)("p",null,"This is not compatible with the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore"),', which stores all records in a single Merkle tree structure, and won\'t produce separate proofs for the store- and record-key. Ideally, the store-key component of the proof could just be omitted, and updated to use a "no-op" spec, so only the record-key is used. However, because the IBC verification code hardcodes the ',(0,o.yg)("inlineCode",{parentName:"p"},'"ibc"')," prefix and applies it to the SDK proof as a separate element of the proof path, this isn't possible without a breaking change. Breaking this behavior would severely impact the Cosmos ecosystem which already widely adopts the IBC module. Requesting an update of the IBC module across the chains is a time consuming effort and not easily feasible."),(0,o.yg)("p",null,"As a workaround, the ",(0,o.yg)("inlineCode",{parentName:"p"},"RootStore")," will have to use two separate SMTs (they could use the same underlying DB): one for IBC state and one for everything else. A simple Merkle map that reference these SMTs will act as a Merkle Tree to create a final App hash. The Merkle map is not stored in a DBs - it's constructed in the runtime. The IBC substore key must be ",(0,o.yg)("inlineCode",{parentName:"p"},'"ibc"'),"."),(0,o.yg)("p",null,"The workaround can still guarantee atomic syncs: the ",(0,o.yg)("a",{parentName:"p",href:"#evaluated-kv-databases"},"proposed DB backends")," support atomic transactions and efficient rollbacks, which will be used in the commit phase."),(0,o.yg)("p",null,"The presented workaround can be used until the IBC module is fully upgraded to supports single-element commitment proofs."),(0,o.yg)("h3",{id:"optimization-compress-module-key-prefixes"},"Optimization: compress module key prefixes"),(0,o.yg)("p",null,"We consider a compression of prefix keys by creating a mapping from module key to an integer, and serializing the integer using varint coding. Varint coding assures that different values don't have common byte prefix. For Merkle Proofs we can't use prefix compression - so it should only apply for the ",(0,o.yg)("inlineCode",{parentName:"p"},"SS")," keys. Moreover, the prefix compression should be only applied for the module namespace. More precisely:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"each module has it's own namespace;"),(0,o.yg)("li",{parentName:"ul"},"when accessing a module namespace we create a KVStore with embedded prefix;"),(0,o.yg)("li",{parentName:"ul"},"that prefix will be compressed only when accessing and managing ",(0,o.yg)("inlineCode",{parentName:"li"},"SS"),".")),(0,o.yg)("p",null,"We need to assure that the codes won't change. We can fix the mapping in a static variable (provided by an app) or SS state under a special key."),(0,o.yg)("p",null,"TODO: need to make decision about the key compression."),(0,o.yg)("h2",{id:"optimization-ss-key-compression"},"Optimization: SS key compression"),(0,o.yg)("p",null,"Some objects may be saved with key, which contains a Protobuf message type. Such keys are long. We could save a lot of space if we can map Protobuf message types in varints."),(0,o.yg)("p",null,"TODO: finalize this or move to another ADR."),(0,o.yg)("h2",{id:"migration"},"Migration"),(0,o.yg)("p",null,"Using the new store will require a migration. 2 Migrations are proposed:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Genesis export -- it will reset the blockchain history."),(0,o.yg)("li",{parentName:"ol"},"In place migration: we can reuse ",(0,o.yg)("inlineCode",{parentName:"li"},"UpgradeKeeper.SetUpgradeHandler")," to provide the migration logic:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("adr-40", func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {\n\n    storev2.Migrate(iavlstore, v2.store)\n\n    // RunMigrations returns the VersionMap\n    // with the updated module ConsensusVersions\n    return app.mm.RunMigrations(ctx, vm)\n})\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Migrate")," function will read all entries from a store/v1 DB and save them to the AD-40 combined KV store.\nCache layer should not be used and the operation must finish with a single Commit call."),(0,o.yg)("p",null,"Inserting records to the ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," (SMT) component is the bottleneck. Unfortunately SMT doesn't support batch transactions.\nAdding batch transactions to ",(0,o.yg)("inlineCode",{parentName:"p"},"SC")," layer is considered as a feature after the main release."),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.yg)("p",null,"This ADR doesn't introduce any Cosmos SDK level API changes."),(0,o.yg)("p",null,"We change the storage layout of the state machine, a storage hard fork and network upgrade is required to incorporate these changes. SMT provides a merkle proof functionality, however it is not compatible with ICS23. Updating the proofs for ICS23 compatibility is required."),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Decoupling state from state commitment introduce better engineering opportunities for further optimizations and better storage patterns."),(0,o.yg)("li",{parentName:"ul"},"Performance improvements."),(0,o.yg)("li",{parentName:"ul"},"Joining SMT based camp which has wider and proven adoption than IAVL. Example projects which decided on SMT: Ethereum2, Diem (Libra), Trillan, Tezos, Celestia."),(0,o.yg)("li",{parentName:"ul"},"Multistore removal fixes a longstanding issue with the current MultiStore design."),(0,o.yg)("li",{parentName:"ul"},"Simplifies merkle proofs - all modules, except IBC, have only one pass for merkle proof.")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Storage migration"),(0,o.yg)("li",{parentName:"ul"},"LL SMT doesn't support pruning - we will need to add and test that functionality."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"SS")," keys will have an overhead of a key prefix. This doesn't impact ",(0,o.yg)("inlineCode",{parentName:"li"},"SC")," because all keys in ",(0,o.yg)("inlineCode",{parentName:"li"},"SC")," have same size (they are hashed).")),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Deprecating IAVL, which is one of the core proposals of Cosmos Whitepaper.")),(0,o.yg)("h2",{id:"alternative-designs"},"Alternative designs"),(0,o.yg)("p",null,"Ethereum research published ",(0,o.yg)("a",{parentName:"p",href:"https://dankradfeist.de/ethereum/2021/06/18/verkle-trie-for-eth1.html"},"Verkle Trie")," - an idea of combining polynomial commitments with merkle tree in order to reduce the tree height. This concept has a very good potential, but we think it's too early to implement it. The current, SMT based design could be easily updated to the Verkle Trie once other research implement all necessary libraries. The main advantage of the design described in this ADR is the separation of state commitments from the data storage and designing a more powerful interface."),(0,o.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,o.yg)("h3",{id:"evaluated-kv-databases"},"Evaluated KV Databases"),(0,o.yg)("p",null,"We verified existing databases KV databases for evaluating snapshot support. The following databases provide efficient snapshot mechanism: Badger, RocksDB, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cockroachdb/pebble"},"Pebble"),". Databases which don't provide such support or are not production ready: boltdb, leveldb, goleveldb, membdb, lmdb."),(0,o.yg)("h3",{id:"rdbms"},"RDBMS"),(0,o.yg)("p",null,"Use of RDBMS instead of simple KV store for state. Use of RDBMS will require a Cosmos SDK API breaking change (",(0,o.yg)("inlineCode",{parentName:"p"},"KVStore")," interface) and will allow better data extraction and indexing solutions. Instead of saving an object as a single blob of bytes, we could save it as record in a table in the state storage layer, and as a ",(0,o.yg)("inlineCode",{parentName:"p"},"hash(key, protobuf(object))")," in the SMT as outlined above. To verify that an object registered in RDBMS is same as the one committed to SMT, one will need to load it from RDBMS, marshal using protobuf, hash and do SMT search."),(0,o.yg)("h3",{id:"off-chain-store"},"Off Chain Store"),(0,o.yg)("p",null,"We were discussing use case where modules can use a support database, which is not automatically committed. Module will responsible for having a sound storage model and can optionally use the feature discussed in _",(0,o.yg)("em",{parentName:"p"},"Committing to an object without saving it")," section."),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7100"},"IAVL What's Next?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/16Z_hW2rSAmoyMENO-RlAhQjAG3mSNKsQueMnKpmcBv0/edit#heading=h.yd2th7x3o1iv"},"IAVL overview")," of its state v0.15"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/lazyledger/smt"},"Celestia (LazyLedger) SMT")),(0,o.yg)("li",{parentName:"ul"},"Facebook Diem (Libra) SMT ",(0,o.yg)("a",{parentName:"li",href:"https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf"},"design")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/google/trillian/blob/master/docs/papers/RevocationTransparency.pdf"},"Trillian Revocation Transparency"),", ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/google/trillian/blob/master/docs/papers/VerifiableDataStructures.pdf"},"Trillian Verifiable Data Structures"),"."),(0,o.yg)("li",{parentName:"ul"},"Design and implementation ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/8297"},"discussion"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/main/docs/docs/01-ibc/05-upgrades/01-quick-guide.md"},"How to Upgrade IBC Chains and their Clients")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/discussions/256"},"ADR-40 Effect on IBC"))))}m.isMDXComponent=!0}}]);