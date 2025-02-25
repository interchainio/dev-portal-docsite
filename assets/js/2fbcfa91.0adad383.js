"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[27847],{15680:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>m});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(i),c=a,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||r;return i?t.createElement(m,o(o({ref:n},p),{},{components:i})):t.createElement(m,o({ref:n},p))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},67164:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(58168),a=(i(96540),i(15680));const r={},o="ADR 041: In-Place Store Migrations",s={unversionedId:"architecture/adr-041-in-place-store-migrations",id:"version-0.52/architecture/adr-041-in-place-store-migrations",title:"ADR 041: In-Place Store Migrations",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/architecture/adr-041-in-place-store-migrations.md",sourceDirName:"architecture",slug:"/architecture/adr-041-in-place-store-migrations",permalink:"/dev-portal-docsite/cosmos-sdk/architecture/adr-041-in-place-store-migrations",draft:!1,tags:[],version:"0.52",frontMatter:{}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Module <code>ConsensusVersion</code>",id:"module-consensusversion",level:3},{value:"Module-Specific Migration Functions",id:"module-specific-migration-functions",level:3},{value:"Tracking Module Versions in <code>x/upgrade</code>",id:"tracking-module-versions-in-xupgrade",level:3},{value:"Running Migrations",id:"running-migrations",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],p={toc:d},u="wrapper";function g(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,t.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-041-in-place-store-migrations"},"ADR 041: In-Place Store Migrations"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"17.02.2021: Initial Draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Accepted"),(0,a.yg)("h2",{id:"abstract"},"Abstract"),(0,a.yg)("p",null,"This ADR introduces a mechanism to perform in-place state store migrations during chain software upgrades."),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"When a chain upgrade introduces state-breaking changes inside modules, the current procedure consists of exporting the whole state into a JSON file (via the ",(0,a.yg)("inlineCode",{parentName:"p"},"simd genesis export")," command), running migration scripts on the JSON file (",(0,a.yg)("inlineCode",{parentName:"p"},"simd genesis migrate")," command), clearing the stores (",(0,a.yg)("inlineCode",{parentName:"p"},"simd unsafe-reset-all")," command), and starting a new chain with the migrated JSON file as new genesis (optionally with a custom initial block height). An example of such a procedure can be seen ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/blob/v4.0.3/docs/migration/cosmoshub-3.md#upgrade-procedure"},"in the Cosmos Hub 3->4 migration guide"),"."),(0,a.yg)("p",null,"This procedure is cumbersome for multiple reasons:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The procedure takes time. It can take hours to run the ",(0,a.yg)("inlineCode",{parentName:"li"},"export")," command, plus some additional hours to run ",(0,a.yg)("inlineCode",{parentName:"li"},"InitChain")," on the fresh chain using the migrated JSON."),(0,a.yg)("li",{parentName:"ul"},"The exported JSON file can be heavy (~100MB-1GB), making it difficult to view, edit and transfer, which in turn introduces additional work to solve these problems (such as ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/6936"},"streaming genesis"),").")),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"We propose a migration procedure based on modifying the KV store in-place without involving the JSON export-process-import flow described above."),(0,a.yg)("h3",{id:"module-consensusversion"},"Module ",(0,a.yg)("inlineCode",{parentName:"h3"},"ConsensusVersion")),(0,a.yg)("p",null,"We introduce a new method on the ",(0,a.yg)("inlineCode",{parentName:"p"},"AppModule")," interface:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type AppModule interface {\n    // --snip--\n    ConsensusVersion() uint64\n}\n")),(0,a.yg)("p",null,"This methods returns an ",(0,a.yg)("inlineCode",{parentName:"p"},"uint64")," which serves as state-breaking version of the module. It MUST be incremented on each consensus-breaking change introduced by the module. To avoid potential errors with default values, the initial version of a module MUST be set to 1. In the Cosmos SDK, version 1 corresponds to the modules in the v0.41 series."),(0,a.yg)("h3",{id:"module-specific-migration-functions"},"Module-Specific Migration Functions"),(0,a.yg)("p",null,"For each consensus-breaking change introduced by the module, a migration script from ConsensusVersion ",(0,a.yg)("inlineCode",{parentName:"p"},"N")," to version ",(0,a.yg)("inlineCode",{parentName:"p"},"N+1")," MUST be registered in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Configurator")," using its newly-added ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterMigration")," method. All modules receive a reference to the configurator in their ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterServices")," method on ",(0,a.yg)("inlineCode",{parentName:"p"},"AppModule"),", and this is where the migration functions should be registered. The migration functions should be registered in increasing order."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (am AppModule) RegisterServices(cfg module.Configurator) {\n    // --snip--\n    cfg.RegisterMigration(types.ModuleName, 1, func(ctx sdk.Context) error {\n        // Perform in-place store migrations from ConsensusVersion 1 to 2.\n    })\n     cfg.RegisterMigration(types.ModuleName, 2, func(ctx sdk.Context) error {\n        // Perform in-place store migrations from ConsensusVersion 2 to 3.\n    })\n    // etc.\n}\n")),(0,a.yg)("p",null,"For example, if the new ConsensusVersion of a module is ",(0,a.yg)("inlineCode",{parentName:"p"},"N")," , then ",(0,a.yg)("inlineCode",{parentName:"p"},"N-1")," migration functions MUST be registered in the configurator."),(0,a.yg)("p",null,"In the Cosmos SDK, the migration functions are handled by each module's keeper, because the keeper holds the ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.StoreKey")," used to perform in-place store migrations. To not overload the keeper, a ",(0,a.yg)("inlineCode",{parentName:"p"},"Migrator")," wrapper is used by each module to handle the migration functions:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Migrator is a struct for handling in-place store migrations.\ntype Migrator struct {\n  BaseKeeper\n}\n")),(0,a.yg)("p",null,"Migration functions should live inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"migrations/")," folder of each module, and be called by the Migrator's methods. We propose the format ",(0,a.yg)("inlineCode",{parentName:"p"},"Migrate{M}to{N}")," for method names."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Migrate1to2 migrates from version 1 to 2.\nfunc (m Migrator) Migrate1to2(ctx sdk.Context) error {\n    return v2bank.MigrateStore(ctx, m.keeper.storeKey) // v043bank is package `x/bank/migrations/v2`.\n}\n")),(0,a.yg)("p",null,"Each module's migration functions are specific to the module's store evolutions, and are not described in this ADR. An example of x/bank store key migrations after the introduction of ADR-028 length-prefixed addresses can be seen in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/36f68eb9e041e20a5bb47e216ac5eb8b91f95471/x/bank/legacy/v043/store.go#L41-L62"},"store.go code"),"."),(0,a.yg)("h3",{id:"tracking-module-versions-in-xupgrade"},"Tracking Module Versions in ",(0,a.yg)("inlineCode",{parentName:"h3"},"x/upgrade")),(0,a.yg)("p",null,"We introduce a new prefix store in ",(0,a.yg)("inlineCode",{parentName:"p"},"x/upgrade"),"'s store. This store will track each module's current version, it can be modelized as a ",(0,a.yg)("inlineCode",{parentName:"p"},"map[string]uint64")," of module name to module ConsensusVersion, and will be used when running the migrations (see next section for details). The key prefix used is ",(0,a.yg)("inlineCode",{parentName:"p"},"0x1"),", and the key/value format is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"0x2 | {bytes(module_name)} => BigEndian(module_consensus_version)\n")),(0,a.yg)("p",null,"The initial state of the store is set from ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"InitChainer")," method."),(0,a.yg)("p",null,"The UpgradeHandler signature needs to be updated to take a ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap"),", as well as return an upgraded ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap")," and an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"- type UpgradeHandler func(ctx sdk.Context, plan Plan)\n+ type UpgradeHandler func(ctx sdk.Context, plan Plan, versionMap VersionMap) (VersionMap, error)\n")),(0,a.yg)("p",null,"To apply an upgrade, we query the ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"x/upgrade")," store and pass it into the handler. The handler runs the actual migration functions (see next section), and if successful, returns an updated ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap")," to be stored in state."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"func (k UpgradeKeeper) ApplyUpgrade(ctx sdk.Context, plan types.Plan) {\n    // --snip--\n-   handler(ctx, plan)\n+   updatedVM, err := handler(ctx, plan, k.GetModuleVersionMap(ctx)) // k.GetModuleVersionMap() fetches the VersionMap stored in state.\n+   if err != nil {\n+       return err\n+   }\n+\n+   // Set the updated consensus versions to state\n+   k.SetModuleVersionMap(ctx, updatedVM)\n}\n")),(0,a.yg)("p",null,"A gRPC query endpoint to query the ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap")," stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"x/upgrade"),"'s state will also be added, so that app developers can double-check the ",(0,a.yg)("inlineCode",{parentName:"p"},"VersionMap")," before the upgrade handler runs."),(0,a.yg)("h3",{id:"running-migrations"},"Running Migrations"),(0,a.yg)("p",null,"Once all the migration handlers are registered inside the configurator (which happens at startup), running migrations can happen by calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"RunMigrations")," method on ",(0,a.yg)("inlineCode",{parentName:"p"},"module.Manager"),". This function will loop through all modules, and for each module:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Get the old ConsensusVersion of the module from its ",(0,a.yg)("inlineCode",{parentName:"li"},"VersionMap")," argument (let's call it ",(0,a.yg)("inlineCode",{parentName:"li"},"M"),")."),(0,a.yg)("li",{parentName:"ul"},"Fetch the new ConsensusVersion of the module from the ",(0,a.yg)("inlineCode",{parentName:"li"},"ConsensusVersion()")," method on ",(0,a.yg)("inlineCode",{parentName:"li"},"AppModule")," (call it ",(0,a.yg)("inlineCode",{parentName:"li"},"N"),")."),(0,a.yg)("li",{parentName:"ul"},"If ",(0,a.yg)("inlineCode",{parentName:"li"},"N>M"),", run all registered migrations for the module sequentially ",(0,a.yg)("inlineCode",{parentName:"li"},"M -> M+1 -> M+2...")," until ",(0,a.yg)("inlineCode",{parentName:"li"},"N"),".",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"There is a special case where there is no ConsensusVersion for the module, as this means that the module has been newly added during the upgrade. In this case, no migration function is run, and the module's current ConsensusVersion is saved to ",(0,a.yg)("inlineCode",{parentName:"li"},"x/upgrade"),"'s store.")))),(0,a.yg)("p",null,"If a required migration is missing (e.g. if it has not been registered in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Configurator"),"), then the ",(0,a.yg)("inlineCode",{parentName:"p"},"RunMigrations")," function will error."),(0,a.yg)("p",null,"In practice, the ",(0,a.yg)("inlineCode",{parentName:"p"},"RunMigrations")," method should be called from inside an ",(0,a.yg)("inlineCode",{parentName:"p"},"UpgradeHandler"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap)  (module.VersionMap, error) {\n    return app.mm.RunMigrations(ctx, vm)\n})\n')),(0,a.yg)("p",null,"Assuming a chain upgrades at block ",(0,a.yg)("inlineCode",{parentName:"p"},"n"),", the procedure should run as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the old binary will halt in ",(0,a.yg)("inlineCode",{parentName:"li"},"BeginBlock")," when starting block ",(0,a.yg)("inlineCode",{parentName:"li"},"N"),". In its store, the ConsensusVersions of the old binary's modules are stored."),(0,a.yg)("li",{parentName:"ul"},"the new binary will start at block ",(0,a.yg)("inlineCode",{parentName:"li"},"N"),". The UpgradeHandler is set in the new binary, so will run at ",(0,a.yg)("inlineCode",{parentName:"li"},"BeginBlock")," of the new binary. Inside ",(0,a.yg)("inlineCode",{parentName:"li"},"x/upgrade"),"'s ",(0,a.yg)("inlineCode",{parentName:"li"},"ApplyUpgrade"),", the ",(0,a.yg)("inlineCode",{parentName:"li"},"VersionMap")," will be retrieved from the (old binary's) store, and passed into the ",(0,a.yg)("inlineCode",{parentName:"li"},"RunMigrations")," function, migrating all module stores in-place before the modules' own ",(0,a.yg)("inlineCode",{parentName:"li"},"BeginBlock"),"s.")),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.yg)("p",null,"This ADR introduces a new method ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsensusVersion()")," on ",(0,a.yg)("inlineCode",{parentName:"p"},"AppModule"),", which all modules need to implement. It also alters the UpgradeHandler function signature. As such, it is not backwards-compatible."),(0,a.yg)("p",null,"While modules MUST register their migration functions when bumping ConsensusVersions, running those scripts using an upgrade handler is optional. An application may perfectly well decide to not call the ",(0,a.yg)("inlineCode",{parentName:"p"},"RunMigrations")," inside its upgrade handler, and continue using the legacy JSON migration path."),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Perform chain upgrades without manipulating JSON files."),(0,a.yg)("li",{parentName:"ul"},"While no benchmark has been made yet, it is probable that in-place store migrations will take less time than JSON migrations. The main reason supporting this claim is that both the ",(0,a.yg)("inlineCode",{parentName:"li"},"simd genesis export")," command on the old binary and the ",(0,a.yg)("inlineCode",{parentName:"li"},"InitChain")," function on the new binary will be skipped.")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Module developers MUST correctly track consensus-breaking changes in their modules. If a consensus-breaking change is introduced in a module without its corresponding ",(0,a.yg)("inlineCode",{parentName:"li"},"ConsensusVersion()")," bump, then the ",(0,a.yg)("inlineCode",{parentName:"li"},"RunMigrations")," function won't detect the migration, and the chain upgrade might be unsuccessful. Documentation should clearly reflect this.")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Cosmos SDK will continue to support JSON migrations via the existing ",(0,a.yg)("inlineCode",{parentName:"li"},"simd genesis export")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"simd genesis migrate")," commands."),(0,a.yg)("li",{parentName:"ul"},"The current ADR does not allow creating, renaming or deleting stores, only modifying existing store keys and values. The Cosmos SDK already has the ",(0,a.yg)("inlineCode",{parentName:"li"},"StoreLoader")," for those operations.")),(0,a.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Initial discussion: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/8429"},"https://github.com/cosmos/cosmos-sdk/discussions/8429")),(0,a.yg)("li",{parentName:"ul"},"Implementation of ",(0,a.yg)("inlineCode",{parentName:"li"},"ConsensusVersion")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"RunMigrations"),": ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/8485"},"https://github.com/cosmos/cosmos-sdk/pull/8485")),(0,a.yg)("li",{parentName:"ul"},"Issue discussing ",(0,a.yg)("inlineCode",{parentName:"li"},"x/upgrade")," design: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/8514"},"https://github.com/cosmos/cosmos-sdk/issues/8514"))))}g.isMDXComponent=!0}}]);