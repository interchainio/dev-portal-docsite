"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[69056],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>u});var o=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=o.createContext({}),p=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=t,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||i;return a?o.createElement(u,r(r({ref:n},c),{},{components:a})):o.createElement(u,r({ref:n},c))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:t,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48105:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(58168),t=(a(96540),a(15680));const i={title:"SDK v0.43 to IBC-Go v1",sidebar_label:"SDK v0.43 to IBC-Go v1",sidebar_position:2,slug:"/migrations/sdk-to-v1"},r="Migrating to ibc-go",l={unversionedId:"migrations/sdk-to-v1",id:"version-v8.5.x/migrations/sdk-to-v1",title:"SDK v0.43 to IBC-Go v1",description:"This file contains information on how to migrate from the IBC module contained in the SDK 0.41.x and 0.42.x lines to the IBC module in the ibc-go repository based on the 0.44 SDK version.",source:"@site/ibc-go_versioned_docs/version-v8.5.x/05-migrations/02-sdk-to-v1.md",sourceDirName:"05-migrations",slug:"/migrations/sdk-to-v1",permalink:"/dev-portal-docsite/ibc-go/migrations/sdk-to-v1",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:2,frontMatter:{title:"SDK v0.43 to IBC-Go v1",sidebar_label:"SDK v0.43 to IBC-Go v1",sidebar_position:2,slug:"/migrations/sdk-to-v1"},sidebar:"defaultSidebar",previous:{title:"Support transfer of coins whose base denom contains slashes",permalink:"/dev-portal-docsite/ibc-go/migrations/support-denoms-with-slashes"},next:{title:"IBC-Go v1 to v2",permalink:"/dev-portal-docsite/ibc-go/migrations/v1-to-v2"}},s={},p=[{value:"Import Changes",id:"import-changes",level:2},{value:"Chain Upgrades",id:"chain-upgrades",level:2},{value:"In-Place Store Migrations",id:"in-place-store-migrations",level:3},{value:"Genesis Migrations",id:"genesis-migrations",level:3},{value:"IBC Keeper Changes",id:"ibc-keeper-changes",level:2},{value:"Proposals",id:"proposals",level:2},{value:"UpdateClientProposal",id:"updateclientproposal",level:3},{value:"UpgradeProposal",id:"upgradeproposal",level:3},{value:"Proposal Handler Registration",id:"proposal-handler-registration",level:3},{value:"Proposal CLI Registration",id:"proposal-cli-registration",level:3},{value:"Proto file changes",id:"proto-file-changes",level:2},{value:"IBC callback changes",id:"ibc-callback-changes",level:2},{value:"OnRecvPacket",id:"onrecvpacket",level:3},{value:"IBC Event changes",id:"ibc-event-changes",level:2},{value:"Relevant SDK changes",id:"relevant-sdk-changes",level:2}],c={toc:p},d="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,o.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"migrating-to-ibc-go"},"Migrating to ibc-go"),(0,t.yg)("p",null,"This file contains information on how to migrate from the IBC module contained in the SDK 0.41.x and 0.42.x lines to the IBC module in the ibc-go repository based on the 0.44 SDK version."),(0,t.yg)("h2",{id:"import-changes"},"Import Changes"),(0,t.yg)("p",null,"The most obvious changes is import name changes. We need to change:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"applications -> apps"),(0,t.yg)("li",{parentName:"ul"},"cosmos-sdk/x/ibc -> ibc-go")),(0,t.yg)("p",null,"On my GNU/Linux based machine I used the following commands, executed in order:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"grep -RiIl 'cosmos-sdk\\/x\\/ibc\\/applications' | xargs sed -i 's/cosmos-sdk\\/x\\/ibc\\/applications/ibc-go\\/modules\\/apps/g'\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"grep -RiIl 'cosmos-sdk\\/x\\/ibc' | xargs sed -i 's/cosmos-sdk\\/x\\/ibc/ibc-go\\/modules/g'\n")),(0,t.yg)("p",null,"ref: ",(0,t.yg)("a",{parentName:"p",href:"https://www.internalpointers.com/post/linux-find-and-replace-text-multiple-files"},"explanation of the above commands")),(0,t.yg)("p",null,"Executing these commands out of order will cause issues."),(0,t.yg)("p",null,"Feel free to use your own method for modifying import names."),(0,t.yg)("p",null,"NOTE: Updating to the ",(0,t.yg)("inlineCode",{parentName:"p"},"v0.44.0")," SDK release and then running ",(0,t.yg)("inlineCode",{parentName:"p"},"go mod tidy")," will cause a downgrade to ",(0,t.yg)("inlineCode",{parentName:"p"},"v0.42.0")," in order to support the old IBC import paths.\nUpdate the import paths before running ",(0,t.yg)("inlineCode",{parentName:"p"},"go mod tidy"),"."),(0,t.yg)("h2",{id:"chain-upgrades"},"Chain Upgrades"),(0,t.yg)("p",null,"Chains may choose to upgrade via an upgrade proposal or genesis upgrades. Both in-place store migrations and genesis migrations are supported."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"WARNING"),": Please read at least the quick guide for ",(0,t.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/ibc/upgrades/quick-guide"},"IBC client upgrades")," before upgrading your chain. It is highly recommended you do not change the chain-ID during an upgrade, otherwise you must follow the IBC client upgrade instructions."),(0,t.yg)("p",null,"Both in-place store migrations and genesis migrations will:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"migrate the solo machine client state from v1 to v2 protobuf definitions"),(0,t.yg)("li",{parentName:"ul"},"prune all solo machine consensus states"),(0,t.yg)("li",{parentName:"ul"},"prune all expired tendermint consensus states")),(0,t.yg)("p",null,"Chains must set a new connection parameter during either in place store migrations or genesis migration. The new parameter, max expected block time, is used to enforce packet processing delays on the receiving end of an IBC packet flow. Checkout the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/release/v1.0.x/docs/ibc/proto-docs.md#params-2"},"docs")," for more information."),(0,t.yg)("h3",{id:"in-place-store-migrations"},"In-Place Store Migrations"),(0,t.yg)("p",null,"The new chain binary will need to run migrations in the upgrade handler. The fromVM (previous module version) for the IBC module should be 1. This will allow migrations to be run for IBC updating the version from 1 to 2."),(0,t.yg)("p",null,"Ex:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("my-upgrade-proposal",\n  func(ctx sdk.Context, _ upgradetypes.Plan, _ module.VersionMap) (module.VersionMap, error) {\n    // set max expected block time parameter. Replace the default with your expected value\n    // https://github.com/cosmos/ibc-go/blob/release/v1.0.x/docs/ibc/proto-docs.md#params-2\n    app.IBCKeeper.ConnectionKeeper.SetParams(ctx, ibcconnectiontypes.DefaultParams())\n\n    fromVM := map[string]uint64{\n      ... // other modules\n      "ibc":          1,\n      ...\n    }\n    return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n  })\n\n')),(0,t.yg)("h3",{id:"genesis-migrations"},"Genesis Migrations"),(0,t.yg)("p",null,"To perform genesis migrations, the following code must be added to your existing migration code."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// add imports as necessary\nimport (\n  ibcv100 "github.com/cosmos/ibc-go/modules/core/legacy/v100"\n  ibchost "github.com/cosmos/ibc-go/modules/core/24-host"\n)\n\n...\n\n// add in migrate cmd function\n// expectedTimePerBlock is a new connection parameter\n// https://github.com/cosmos/ibc-go/blob/release/v1.0.x/docs/ibc/proto-docs.md#params-2\nnewGenState, err = ibcv100.MigrateGenesis(newGenState, clientCtx, *genDoc, expectedTimePerBlock)\nif err != nil {\n  return err\n}\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"NOTE:")," The genesis chain-id, time and height MUST be updated before migrating IBC, otherwise the tendermint consensus state will not be pruned."),(0,t.yg)("h2",{id:"ibc-keeper-changes"},"IBC Keeper Changes"),(0,t.yg)("p",null,"The IBC Keeper now takes in the Upgrade Keeper. Please add the chains' Upgrade Keeper after the Staking Keeper:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},"// Create IBC Keeper\napp.IBCKeeper = ibckeeper.NewKeeper(\n- appCodec, keys[ibchost.StoreKey], app.GetSubspace(ibchost.ModuleName), app.StakingKeeper, scopedIBCKeeper,\n+ appCodec, keys[ibchost.StoreKey], app.GetSubspace(ibchost.ModuleName), app.StakingKeeper, app.UpgradeKeeper, scopedIBCKeeper,\n)\n")),(0,t.yg)("h2",{id:"proposals"},"Proposals"),(0,t.yg)("h3",{id:"updateclientproposal"},"UpdateClientProposal"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"UpdateClient")," has been modified to take in two client-identifiers and one initial height. Please see the ",(0,t.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/ibc/proposals"},"documentation")," for more information."),(0,t.yg)("h3",{id:"upgradeproposal"},"UpgradeProposal"),(0,t.yg)("p",null,"A new IBC proposal type has been added, ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeProposal"),". This handles an IBC (breaking) Upgrade.\nThe previous ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradedClientState")," field in an Upgrade ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan")," has been deprecated in favor of this new proposal type."),(0,t.yg)("h3",{id:"proposal-handler-registration"},"Proposal Handler Registration"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"ClientUpdateProposalHandler")," has been renamed to ",(0,t.yg)("inlineCode",{parentName:"p"},"ClientProposalHandler"),".\nIt handles both ",(0,t.yg)("inlineCode",{parentName:"p"},"UpdateClientProposal"),"s and ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeProposal"),"s."),(0,t.yg)("p",null,"Add this import:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'+  ibcclienttypes "github.com/cosmos/ibc-go/modules/core/02-client/types"\n')),(0,t.yg)("p",null,"Please ensure the governance module adds the correct route:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},"-  AddRoute(ibchost.RouterKey, ibcclient.NewClientUpdateProposalHandler(app.IBCKeeper.ClientKeeper))\n+  AddRoute(ibcclienttypes.RouterKey, ibcclient.NewClientProposalHandler(app.IBCKeeper.ClientKeeper))\n")),(0,t.yg)("p",null,"NOTE: Simapp registration was incorrect in the 0.41.x releases. The ",(0,t.yg)("inlineCode",{parentName:"p"},"UpdateClient")," proposal handler should be registered with the router key belonging to ",(0,t.yg)("inlineCode",{parentName:"p"},"ibc-go/core/02-client/types"),"\nas shown in the diffs above."),(0,t.yg)("h3",{id:"proposal-cli-registration"},"Proposal CLI Registration"),(0,t.yg)("p",null,"Please ensure both proposal type CLI commands are registered on the governance module by adding the following arguments to ",(0,t.yg)("inlineCode",{parentName:"p"},"gov.NewAppModuleBasic()"),":"),(0,t.yg)("p",null,"Add the following import:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'+  ibcclientclient "github.com/cosmos/ibc-go/modules/core/02-client/client"\n')),(0,t.yg)("p",null,"Register the cli commands:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},"gov.NewAppModuleBasic(\n  paramsclient.ProposalHandler, distrclient.ProposalHandler, upgradeclient.ProposalHandler, upgradeclient.CancelProposalHandler,\n+ ibcclientclient.UpdateClientProposalHandler, ibcclientclient.UpgradeProposalHandler,\n),\n")),(0,t.yg)("p",null,"REST routes are not supported for these proposals."),(0,t.yg)("h2",{id:"proto-file-changes"},"Proto file changes"),(0,t.yg)("p",null,"The gRPC querier service endpoints have changed slightly. The previous files used ",(0,t.yg)("inlineCode",{parentName:"p"},"v1beta1")," gRPC route, this has been updated to ",(0,t.yg)("inlineCode",{parentName:"p"},"v1"),"."),(0,t.yg)("p",null,"The solo machine has replaced the FrozenSequence uint64 field with a IsFrozen boolean field. The package has been bumped from ",(0,t.yg)("inlineCode",{parentName:"p"},"v1")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"v2")),(0,t.yg)("h2",{id:"ibc-callback-changes"},"IBC callback changes"),(0,t.yg)("h3",{id:"onrecvpacket"},"OnRecvPacket"),(0,t.yg)("p",null,"Application developers need to update their ",(0,t.yg)("inlineCode",{parentName:"p"},"OnRecvPacket")," callback logic."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"OnRecvPacket")," callback has been modified to only return the acknowledgement. The acknowledgement returned must implement the ",(0,t.yg)("inlineCode",{parentName:"p"},"Acknowledgement")," interface. The acknowledgement should indicate if it represents a successful processing of a packet by returning true on ",(0,t.yg)("inlineCode",{parentName:"p"},"Success()")," and false in all other cases. A return value of false on ",(0,t.yg)("inlineCode",{parentName:"p"},"Success()")," will result in all state changes which occurred in the callback being discarded. More information can be found in the ",(0,t.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/ibc/apps/apps#receiving-packets"},"documentation"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"OnRecvPacket"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"OnTimeoutPacket")," callbacks are now passed the ",(0,t.yg)("inlineCode",{parentName:"p"},"sdk.AccAddress")," of the relayer who relayed the IBC packet. Applications may use or ignore this information."),(0,t.yg)("h2",{id:"ibc-event-changes"},"IBC Event changes"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_data")," attribute has been deprecated in favor of ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_data_hex"),", in order to provide standardized encoding/decoding of packet data in events. While the ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_data")," event still exists, all relayers and IBC Event consumers are strongly encouraged to switch over to using ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_data_hex")," as soon as possible."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_ack")," attribute has also been deprecated in favor of ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_ack_hex")," for the same reason stated above. All relayers and IBC Event consumers are strongly encouraged to switch over to using ",(0,t.yg)("inlineCode",{parentName:"p"},"packet_ack_hex")," as soon as possible."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"consensus_height")," attribute has been removed in the Misbehaviour event emitted. IBC clients no longer have a frozen height and misbehaviour does not necessarily have an associated height."),(0,t.yg)("h2",{id:"relevant-sdk-changes"},"Relevant SDK changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"(codec) ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/9226"},"#","9226")," Rename codec interfaces and methods, to follow a general Go interfaces:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"codec.Marshaler")," \u2192 ",(0,t.yg)("inlineCode",{parentName:"li"},"codec.Codec")," (this defines objects which serialize other objects)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"codec.BinaryMarshaler")," \u2192 ",(0,t.yg)("inlineCode",{parentName:"li"},"codec.BinaryCodec")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"codec.JSONMarshaler")," \u2192 ",(0,t.yg)("inlineCode",{parentName:"li"},"codec.JSONCodec")),(0,t.yg)("li",{parentName:"ul"},"Removed ",(0,t.yg)("inlineCode",{parentName:"li"},"BinaryBare")," suffix from ",(0,t.yg)("inlineCode",{parentName:"li"},"BinaryCodec")," methods (",(0,t.yg)("inlineCode",{parentName:"li"},"MarshalBinaryBare"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"UnmarshalBinaryBare"),", ...)"),(0,t.yg)("li",{parentName:"ul"},"Removed ",(0,t.yg)("inlineCode",{parentName:"li"},"Binary")," infix from ",(0,t.yg)("inlineCode",{parentName:"li"},"BinaryCodec")," methods (",(0,t.yg)("inlineCode",{parentName:"li"},"MarshalBinaryLengthPrefixed"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"UnmarshalBinaryLengthPrefixed"),", ...)")))))}g.isMDXComponent=!0}}]);