"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[86208],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(t),c=i,u=g["".concat(l,".").concat(c)]||g[c]||m[c]||o;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const o={title:"IBC-Go v6 to v7",sidebar_label:"IBC-Go v6 to v7",sidebar_position:8,slug:"/migrations/v6-to-v7"},r="Migrating from ibc-go v6 to v7",s={unversionedId:"migrations/v6-to-v7",id:"version-v7.8.x/migrations/v6-to-v7",title:"IBC-Go v6 to v7",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/05-migrations/08-v6-to-v7.md",sourceDirName:"05-migrations",slug:"/migrations/v6-to-v7",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v6-to-v7",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:8,frontMatter:{title:"IBC-Go v6 to v7",sidebar_label:"IBC-Go v6 to v7",sidebar_position:8,slug:"/migrations/v6-to-v7"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v5 to v6",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v5-to-v6"},next:{title:"IBC-Go v7 to v7.1",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v7-to-v7_1"}},l={},p=[{value:"Chains",id:"chains",level:2},{value:"Light client registration",id:"light-client-registration",level:3},{value:"Tendermint registration",id:"tendermint-registration",level:4},{value:"Solo machine registration",id:"solo-machine-registration",level:4},{value:"Testing package API",id:"testing-package-api",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2},{value:"<code>ClientState</code> interface changes",id:"clientstate-interface-changes",level:3},{value:"<code>Header</code> and <code>Misbehaviour</code>",id:"header-and-misbehaviour",level:3},{value:"<code>ConsensusState</code>",id:"consensusstate",level:3},{value:"Client keeper",id:"client-keeper",level:3},{value:"SDK message",id:"sdk-message",level:3},{value:"Solomachine",id:"solomachine",level:2},{value:"<code>ClientState</code>",id:"clientstate",level:3},{value:"<code>Header</code> and <code>Misbehaviour</code>",id:"header-and-misbehaviour-1",level:3},{value:"<code>SignBytes</code>",id:"signbytes",level:3},{value:"IBC module constants",id:"ibc-module-constants",level:3},{value:"Upgrading to Cosmos SDK 0.47",id:"upgrading-to-cosmos-sdk-047",level:2},{value:"Protobuf",id:"protobuf",level:3},{value:"App modules",id:"app-modules",level:3},{value:"Imports",id:"imports",level:3}],d={toc:p},g="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"migrating-from-ibc-go-v6-to-v7"},"Migrating from ibc-go v6 to v7"),(0,i.yg)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,i.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Chains"),(0,i.yg)("li",{parentName:"ul"},"IBC Apps"),(0,i.yg)("li",{parentName:"ul"},"Relayers"),(0,i.yg)("li",{parentName:"ul"},"IBC Light Clients")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,i.yg)("h2",{id:"chains"},"Chains"),(0,i.yg)("p",null,"Chains will perform automatic migrations to remove existing localhost clients and to migrate the solomachine to v3 of the protobuf definition. "),(0,i.yg)("p",null,"An optional upgrade handler has been added to prune expired tendermint consensus states. It may be used during any upgrade (from v7 onwards).\nAdd the following to the function call to the upgrade handler in ",(0,i.yg)("inlineCode",{parentName:"p"},"app/app.go"),", to perform the optional state pruning."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  // ...\n  ibctmmigrations "github.com/cosmos/ibc-go/v7/modules/light-clients/07-tendermint/migrations"\n)\n\n// ...\n\napp.UpgradeKeeper.SetUpgradeHandler(\n    upgradeName,\n    func(ctx sdk.Context, _ upgradetypes.Plan, _ module.VersionMap) (module.VersionMap, error) {\n        // prune expired tendermint consensus states to save storage space\n        _, err := ibctmmigrations.PruneExpiredConsensusStates(ctx, app.Codec, app.IBCKeeper.ClientKeeper)\n        if err != nil {\n            return nil, err\n        }\n\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    },\n)\n')),(0,i.yg)("p",null,"Checkout the logs to see how many consensus states are pruned."),(0,i.yg)("h3",{id:"light-client-registration"},"Light client registration"),(0,i.yg)("p",null,"Chains must explicitly register the types of any light client modules it wishes to integrate. "),(0,i.yg)("h4",{id:"tendermint-registration"},"Tendermint registration"),(0,i.yg)("p",null,"To register the tendermint client, modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," file to include the tendermint ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModuleBasic"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'import (\n  // ...\n+ ibctm "github.com/cosmos/ibc-go/v7/modules/light-clients/07-tendermint"\n)\n\n// ...\n\nModuleBasics = module.NewBasicManager(\n    ...\n    ibc.AppModuleBasic{},\n+   ibctm.AppModuleBasic{},\n    ...\n)\n')),(0,i.yg)("p",null,"It may be useful to reference the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/2825"},"PR")," which added the ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," for the tendermint client."),(0,i.yg)("h4",{id:"solo-machine-registration"},"Solo machine registration"),(0,i.yg)("p",null,"To register the solo machine client, modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," file to include the solo machine ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModuleBasic"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'import (\n  // ...\n+ solomachine "github.com/cosmos/ibc-go/v7/modules/light-clients/06-solomachine"\n)\n\n// ...\n\nModuleBasics = module.NewBasicManager(\n    ...\n    ibc.AppModuleBasic{},\n+   solomachine.AppModuleBasic{},\n    ...\n)\n')),(0,i.yg)("p",null,"It may be useful to reference the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/2826"},"PR")," which added the ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," for the solo machine client."),(0,i.yg)("h3",{id:"testing-package-api"},"Testing package API"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"SetChannelClosed")," utility method in ",(0,i.yg)("inlineCode",{parentName:"p"},"testing/endpoint.go")," has been updated to ",(0,i.yg)("inlineCode",{parentName:"p"},"SetChannelState"),", which will take a ",(0,i.yg)("inlineCode",{parentName:"p"},"channeltypes.State")," argument so that the ",(0,i.yg)("inlineCode",{parentName:"p"},"ChannelState")," can be set to any of the possible channel states. "),(0,i.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,i.yg)("h2",{id:"relayers"},"Relayers"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,i.yg)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,i.yg)("h3",{id:"clientstate-interface-changes"},(0,i.yg)("inlineCode",{parentName:"h3"},"ClientState")," interface changes"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyUpgradeAndUpdateState")," function has been modified. The client state and consensus state return values have been removed."),(0,i.yg)("p",null,"Light clients ",(0,i.yg)("strong",{parentName:"p"},"must")," handle all management of client and consensus states including the setting of updated client state and consensus state in the client store."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Initialize")," method is now expected to set the initial client state, consensus state and any client-specific metadata in the provided store upon client creation. "),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckHeaderAndUpdateState")," method has been split into 4 new methods:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"VerifyClientMessage")," verifies a ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage"),". A ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," could be a ",(0,i.yg)("inlineCode",{parentName:"p"},"Header"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour"),", or batch update. Calls to ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckForMisbehaviour"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateState"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," will assume that the content of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," has been verified and can be trusted. An error should be returned if the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," fails to verify.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CheckForMisbehaviour")," checks for evidence of a misbehaviour in ",(0,i.yg)("inlineCode",{parentName:"p"},"Header")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," types.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," performs appropriate state changes on a ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," given that misbehaviour has been detected and verified.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"UpdateState")," updates and stores as necessary any associated information for an IBC client, such as the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," and corresponding ",(0,i.yg)("inlineCode",{parentName:"p"},"ConsensusState"),". An error is returned if ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," is of type ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour"),". Upon successful update, a list containing the updated consensus state height is returned."))),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckMisbehaviourAndUpdateState")," function has been removed from ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," interface. This functionality is now encapsulated by the usage of ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyClientMessage"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckForMisbehaviour"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour"),"."),(0,i.yg)("p",null,"The function ",(0,i.yg)("inlineCode",{parentName:"p"},"GetTimestampAtHeight")," has been added to the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," interface. It should return the timestamp for a consensus state associated with the provided height."),(0,i.yg)("p",null,"Prior to ibc-go/v7 the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," interface defined a method for each data type which was being verified in the counterparty state store.\nThe state verification functions for all IBC data types have been consolidated into two generic methods, ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),".\nBoth are expected to be provided with a standardised key path, ",(0,i.yg)("inlineCode",{parentName:"p"},"exported.Path"),", as defined in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS 24 host requirements"),". Membership verification requires callers to provide the marshalled value ",(0,i.yg)("inlineCode",{parentName:"p"},"[]byte"),". Delay period values should be zero for non-packet processing verification. A zero proof height is now allowed by core IBC and may be passed into ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),". Light clients are responsible for returning an error if a zero proof height is invalid behaviour. "),(0,i.yg)("p",null,"See below for an example of how ibc-go now performs channel state verification."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'merklePath := commitmenttypes.NewMerklePath(host.ChannelPath(portID, channelID))\nmerklePath, err := commitmenttypes.ApplyPrefix(connection.GetCounterparty().GetPrefix(), merklePath)\nif err != nil {\n    return err\n}\n\nchannelEnd, ok := channel.(channeltypes.Channel)\nif !ok {\n    return sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "invalid channel type %T", channel)\n}\n\nbz, err := k.cdc.Marshal(&channelEnd)\nif err != nil {\n    return err\n}\n\nif err := clientState.VerifyMembership(\n    ctx, clientStore, k.cdc, height,\n    0, 0, // skip delay period checks for non-packet processing verification\n    proof, merklePath, bz,\n); err != nil {\n    return sdkerrors.Wrapf(err, "failed channel state verification for client (%s)", clientID)\n}\n')),(0,i.yg)("h3",{id:"header-and-misbehaviour"},(0,i.yg)("inlineCode",{parentName:"h3"},"Header")," and ",(0,i.yg)("inlineCode",{parentName:"h3"},"Misbehaviour")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"exported.Header")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"exported.Misbehaviour")," interface types have been merged and renamed to ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," interface."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GetHeight")," function has been removed from ",(0,i.yg)("inlineCode",{parentName:"p"},"exported.Header")," and thus is not included in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," interface"),(0,i.yg)("h3",{id:"consensusstate"},(0,i.yg)("inlineCode",{parentName:"h3"},"ConsensusState")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"GetRoot")," function has been removed from consensus state interface since it was not used by core IBC."),(0,i.yg)("h3",{id:"client-keeper"},"Client keeper"),(0,i.yg)("p",null,"Keeper function ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckMisbehaviourAndUpdateState")," has been removed since function ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateClient")," can now handle updating ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," on ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," type which can be any ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," implementations.  "),(0,i.yg)("h3",{id:"sdk-message"},"SDK message"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"MsgSubmitMisbehaviour")," is deprecated since ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgUpdateClient")," can now submit a ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientMessage")," type which can be any ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," implementations."),(0,i.yg)("p",null,"The field ",(0,i.yg)("inlineCode",{parentName:"p"},"header")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgUpdateClient")," has been renamed to ",(0,i.yg)("inlineCode",{parentName:"p"},"client_message"),"."),(0,i.yg)("h2",{id:"solomachine"},"Solomachine"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"06-solomachine")," client implementation has been simplified in ibc-go/v7. In-place store migrations have been added to migrate solomachine clients from ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"v3"),"."),(0,i.yg)("h3",{id:"clientstate"},(0,i.yg)("inlineCode",{parentName:"h3"},"ClientState")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," protobuf message definition has been updated to remove the deprecated ",(0,i.yg)("inlineCode",{parentName:"p"},"bool")," field ",(0,i.yg)("inlineCode",{parentName:"p"},"allow_update_after_proposal"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'message ClientState {\n  option (gogoproto.goproto_getters) = false;\n\n  uint64 sequence                  = 1;\n  bool is_frozen                   = 2 [(gogoproto.moretags) = "yaml:\\"is_frozen\\""];\n  ConsensusState consensus_state   = 3 [(gogoproto.moretags) = "yaml:\\"consensus_state\\""];\n- bool allow_update_after_proposal = 4 [(gogoproto.moretags) = "yaml:\\"allow_update_after_proposal\\""];\n}\n')),(0,i.yg)("h3",{id:"header-and-misbehaviour-1"},(0,i.yg)("inlineCode",{parentName:"h3"},"Header")," and ",(0,i.yg)("inlineCode",{parentName:"h3"},"Misbehaviour")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"06-solomachine")," protobuf message ",(0,i.yg)("inlineCode",{parentName:"p"},"Header")," has been updated to remove the ",(0,i.yg)("inlineCode",{parentName:"p"},"sequence")," field. This field was seen as redundant as the implementation can safely rely on the ",(0,i.yg)("inlineCode",{parentName:"p"},"sequence")," value maintained within the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'message Header {\n  option (gogoproto.goproto_getters) = false;\n \n- uint64              sequence        = 1;\n- uint64              timestamp       = 2;\n- bytes               signature       = 3;\n- google.protobuf.Any new_public_key  = 4 [(gogoproto.moretags) = "yaml:\\"new_public_key\\""];\n- string              new_diversifier = 5 [(gogoproto.moretags) = "yaml:\\"new_diversifier\\""];\n+ uint64              timestamp       = 1;\n+ bytes               signature       = 2;\n+ google.protobuf.Any new_public_key  = 3 [(gogoproto.moretags) = "yaml:\\"new_public_key\\""];\n+ string              new_diversifier = 4 [(gogoproto.moretags) = "yaml:\\"new_diversifier\\""];\n}\n')),(0,i.yg)("p",null,"Similarly, the ",(0,i.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," protobuf message has been updated to remove the ",(0,i.yg)("inlineCode",{parentName:"p"},"client_id")," field."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'message Misbehaviour {\n  option (gogoproto.goproto_getters) = false;\n  \n- string           client_id         = 1 [(gogoproto.moretags) = "yaml:\\"client_id\\""];\n- uint64           sequence          = 2;\n- SignatureAndData signature_one     = 3 [(gogoproto.moretags) = "yaml:\\"signature_one\\""];\n- SignatureAndData signature_two     = 4 [(gogoproto.moretags) = "yaml:\\"signature_two\\""];\n+ uint64           sequence          = 1;\n+ SignatureAndData signature_one     = 2 [(gogoproto.moretags) = "yaml:\\"signature_one\\""];\n+ SignatureAndData signature_two     = 3 [(gogoproto.moretags) = "yaml:\\"signature_two\\""];\n}\n')),(0,i.yg)("h3",{id:"signbytes"},(0,i.yg)("inlineCode",{parentName:"h3"},"SignBytes")),(0,i.yg)("p",null,"Most notably, the ",(0,i.yg)("inlineCode",{parentName:"p"},"SignBytes")," protobuf definition has been modified to replace the ",(0,i.yg)("inlineCode",{parentName:"p"},"data_type")," field with a new field, ",(0,i.yg)("inlineCode",{parentName:"p"},"path"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field is defined as ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," and represents a serialized ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24")," standardized key path under which the ",(0,i.yg)("inlineCode",{parentName:"p"},"data")," is stored."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'message SignBytes {\n  option (gogoproto.goproto_getters) = false;\n\n  uint64 sequence    = 1;\n  uint64 timestamp   = 2;\n  string diversifier = 3;\n- DataType data_type = 4 [(gogoproto.moretags) = "yaml:\\"data_type\\""];\n+ bytes path         = 4;\n  bytes data         = 5;\n}\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"DataType")," enum and all associated data types have been removed, greatly reducing the number of message definitions and complexity in constructing the ",(0,i.yg)("inlineCode",{parentName:"p"},"SignBytes")," message type. Likewise, solomachine implementations must now use the serialized ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," value when constructing ",(0,i.yg)("inlineCode",{parentName:"p"},"SignatureAndData")," for signature verification of ",(0,i.yg)("inlineCode",{parentName:"p"},"SignBytes")," data."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'message SignatureAndData {\n  option (gogoproto.goproto_getters) = false;\n \n  bytes    signature = 1;\n- DataType data_type = 2 [(gogoproto.moretags) = "yaml:\\"data_type\\""];\n+ bytes    path      = 2;\n  bytes    data      = 3;\n  uint64   timestamp = 4;\n}\n')),(0,i.yg)("p",null,"For more information, please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/docs/architecture/adr-007-solomachine-signbytes.md"},"ADR-007"),"."),(0,i.yg)("h3",{id:"ibc-module-constants"},"IBC module constants"),(0,i.yg)("p",null,"IBC module constants have been moved from the ",(0,i.yg)("inlineCode",{parentName:"p"},"host")," package to the ",(0,i.yg)("inlineCode",{parentName:"p"},"exported")," package. Any usages will need to be updated."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'import (\n  // ...\n- host "github.com/cosmos/ibc-go/v7/modules/core/24-host"\n+ ibcexported "github.com/cosmos/ibc-go/v7/modules/core/exported"\n  // ...\n)\n\n- host.ModuleName\n+ ibcexported.ModuleName\n\n- host.StoreKey\n+ ibcexported.StoreKey\n\n- host.QuerierRoute\n+ ibcexported.QuerierRoute\n\n- host.RouterKey\n+ ibcexported.RouterKey\n')),(0,i.yg)("h2",{id:"upgrading-to-cosmos-sdk-047"},"Upgrading to Cosmos SDK 0.47"),(0,i.yg)("p",null,"The following should be considered as complementary to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc2/UPGRADING.md"},"Cosmos SDK v0.47 UPGRADING.md"),"."),(0,i.yg)("h3",{id:"protobuf"},"Protobuf"),(0,i.yg)("p",null,"Protobuf code generation, linting and formatting have been updated to leverage the ",(0,i.yg)("inlineCode",{parentName:"p"},"ghcr.io/cosmos/proto-builder:0.11.5")," docker container. IBC protobuf definitions are now packaged and published to ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/cosmos/ibc"},"buf.build/cosmos/ibc")," via CI workflows. The ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party/proto")," directory has been removed in favour of dependency management using ",(0,i.yg)("a",{parentName:"p",href:"https://docs.buf.build/introduction"},"buf.build"),"."),(0,i.yg)("h3",{id:"app-modules"},"App modules"),(0,i.yg)("p",null,"Legacy APIs of the ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModule")," interface have been removed from ibc-go modules. For example, for "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"- // Route implements the AppModule interface\n- func (am AppModule) Route() sdk.Route {\n-     return sdk.Route{}\n- }\n-\n- // QuerierRoute implements the AppModule interface\n- func (AppModule) QuerierRoute() string {\n-     return types.QuerierRoute\n- }\n-\n- // LegacyQuerierHandler implements the AppModule interface\n- func (am AppModule) LegacyQuerierHandler(*codec.LegacyAmino) sdk.Querier {\n-     return nil\n- }\n-\n- // ProposalContents doesn't return any content functions for governance proposals.\n- func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {\n-     return nil\n- }\n")),(0,i.yg)("h3",{id:"imports"},"Imports"),(0,i.yg)("p",null,"Imports for ics23 have been updated as the repository have been migrated from confio to cosmos."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'import (\n    // ...\n-   ics23 "github.com/confio/ics23/go"\n+   ics23 "github.com/cosmos/ics23/go"\n    // ...\n)\n')),(0,i.yg)("p",null,"Imports for gogoproto have been updated."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'import (\n    // ...\n-   "github.com/gogo/protobuf/proto"\n+   "github.com/cosmos/gogoproto/proto"\n    // ...\n)\n')))}m.isMDXComponent=!0}}]);