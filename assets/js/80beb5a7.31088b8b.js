"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[5575],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,u=d["".concat(l,".").concat(h)]||d[h]||g[h]||i;return t?o.createElement(u,r(r({ref:n},p),{},{components:t})):o.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},20672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const i={title:"IBC-Go v3 to v4",sidebar_label:"IBC-Go v3 to v4",sidebar_position:5,slug:"/migrations/v3-to-v4"},r="Migrating from ibc-go v3 to v4",s={unversionedId:"migrations/v3-to-v4",id:"version-v7.8.x/migrations/v3-to-v4",title:"IBC-Go v3 to v4",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/05-migrations/05-v3-to-v4.md",sourceDirName:"05-migrations",slug:"/migrations/v3-to-v4",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v3-to-v4",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:5,frontMatter:{title:"IBC-Go v3 to v4",sidebar_label:"IBC-Go v3 to v4",sidebar_position:5,slug:"/migrations/v3-to-v4"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v2 to v3",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v2-to-v3"},next:{title:"IBC-Go v4 to v5",permalink:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/v4-to-v5"}},l={},c=[{value:"Chains",id:"chains",level:2},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts",level:3},{value:"ICS29 - Fee Middleware",id:"ics29---fee-middleware",level:3},{value:"Migration to fix support for base denoms with slashes",id:"migration-to-fix-support-for-base-denoms-with-slashes",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"ICS03 - Connection",id:"ics03---connection",level:3},{value:"ICS04 - Channel",id:"ics04---channel",level:3},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts-1",level:3},{value:"Relayers",id:"relayers",level:2}],p={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"migrating-from-ibc-go-v3-to-v4"},"Migrating from ibc-go v3 to v4"),(0,a.yg)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,a.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Chains"),(0,a.yg)("li",{parentName:"ul"},"IBC Apps"),(0,a.yg)("li",{parentName:"ul"},"Relayers"),(0,a.yg)("li",{parentName:"ul"},"IBC Light Clients")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"github.com/cosmos/ibc-go/v3 -> github.com/cosmos/ibc-go/v4\n")),(0,a.yg)("p",null,"No genesis or in-place migrations required when upgrading from v1 or v2 of ibc-go."),(0,a.yg)("h2",{id:"chains"},"Chains"),(0,a.yg)("h3",{id:"ics27---interchain-accounts"},"ICS27 - Interchain Accounts"),(0,a.yg)("p",null,"The controller submodule implements now the 05-port ",(0,a.yg)("inlineCode",{parentName:"p"},"Middleware")," interface instead of the 05-port ",(0,a.yg)("inlineCode",{parentName:"p"},"IBCModule")," interface. Chains that integrate the controller submodule, need to create it with the ",(0,a.yg)("inlineCode",{parentName:"p"},"NewIBCMiddleware")," constructor function. For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"- icacontroller.NewIBCModule(app.ICAControllerKeeper, icaAuthIBCModule)\n+ icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\n")),(0,a.yg)("p",null,"where ",(0,a.yg)("inlineCode",{parentName:"p"},"icaAuthIBCModule")," is the Interchain Accounts authentication IBC Module."),(0,a.yg)("h3",{id:"ics29---fee-middleware"},"ICS29 - Fee Middleware"),(0,a.yg)("p",null,"The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly."),(0,a.yg)("p",null,"Please read the Fee Middleware ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/middleware/ics29-fee/integration"},"integration documentation")," for an in depth guide on how to configure the module correctly in order to incentivize IBC packets. "),(0,a.yg)("p",null,"Take a look at the following diff for an ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/1432/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08aL366"},"example setup")," of how to incentivize ics27 channels. "),(0,a.yg)("h3",{id:"migration-to-fix-support-for-base-denoms-with-slashes"},"Migration to fix support for base denoms with slashes"),(0,a.yg)("p",null,"As part of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/releases/tag/v1.5.0"},"v1.5.0"),", ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/releases/tag/v2.3.0"},"v2.3.0")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/releases/tag/v3.1.0"},"v3.1.0")," some ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v7.8.x/migrations/support-denoms-with-slashes#upgrade-proposal"},"migration handler code sample was documented")," that needs to run in order to correct the trace information of coins transferred using ICS20 whose base denom contains slashes."),(0,a.yg)("p",null,"Based on feedback from the community we add now an improved solution to run the same migration that does not require copying a large piece of code over from the migration document, but instead requires only adding a one-line upgrade handler."),(0,a.yg)("p",null,"If the chain will migrate to supporting base denoms with slashes, it must set the appropriate params during the execution of the upgrade handler in ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),": "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("MigrateTraces",\n    func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n        // transfer module consensus version has been bumped to 2\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    })\n\n')),(0,a.yg)("p",null,"If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect."),(0,a.yg)("p",null,"E.g. If a base denom of ",(0,a.yg)("inlineCode",{parentName:"p"},"testcoin/testcoin/testcoin")," is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: ",(0,a.yg)("inlineCode",{parentName:"p"},'Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"'),"."),(0,a.yg)("p",null,"This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes."),(0,a.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,a.yg)("h3",{id:"ics03---connection"},"ICS03 - Connection"),(0,a.yg)("p",null,"Crossing hellos have been removed from 03-connection handshake negotiation.\n",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousConnectionId")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgConnectionOpenTry")," has been deprecated and is no longer used by core IBC."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"NewMsgConnectionOpenTry")," no longer takes in the ",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousConnectionId")," as crossing hellos are no longer supported. A non-empty ",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousConnectionId")," will fail basic validation for this message."),(0,a.yg)("h3",{id:"ics04---channel"},"ICS04 - Channel"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"WriteAcknowledgement")," API now takes the ",(0,a.yg)("inlineCode",{parentName:"p"},"exported.Acknowledgement")," type instead of passing in the acknowledgement byte array directly.\nThis is an API breaking change and as such IBC application developers will have to update any calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"WriteAcknowledgement"),". "),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"OnChanOpenInit")," application callback has been modified.\nThe return signature now includes the application version as detailed in the latest IBC ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/pull/629"},"spec changes"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"NewErrorAcknowledgement")," method signature has changed.\nIt now accepts an ",(0,a.yg)("inlineCode",{parentName:"p"},"error")," rather than a ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),". This was done in order to prevent accidental state changes.\nAll error acknowledgements now contain a deterministic ABCI code and error message. It is the responsibility of the application developer to emit error details in events."),(0,a.yg)("p",null,"Crossing hellos have been removed from 04-channel handshake negotiation.\nIBC Applications no longer need to account from already claimed capabilities in the ",(0,a.yg)("inlineCode",{parentName:"p"},"OnChanOpenTry")," callback. The capability provided by core IBC must be able to be claimed with error.\n",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousChannelId")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenTry")," has been deprecated and is no longer used by core IBC."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"NewMsgChannelOpenTry")," no longer takes in the ",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousChannelId")," as crossing hellos are no longer supported. A non-empty ",(0,a.yg)("inlineCode",{parentName:"p"},"PreviousChannelId")," will fail basic validation for this message. "),(0,a.yg)("h3",{id:"ics27---interchain-accounts-1"},"ICS27 - Interchain Accounts"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterInterchainAccount")," API has been modified to include an additional ",(0,a.yg)("inlineCode",{parentName:"p"},"version")," argument. This change has been made in order to support ICS29 fee middleware, for relayer incentivization of ICS27 packets.\nConsumers of the ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterInterchainAccount")," are now expected to build the appropriate JSON encoded version string themselves and pass it accordingly.\nThis should be constructed within the interchain accounts authentication module which leverages the APIs exposed via the interchain accounts ",(0,a.yg)("inlineCode",{parentName:"p"},"controllerKeeper"),". If an empty string is passed in the ",(0,a.yg)("inlineCode",{parentName:"p"},"version")," argument, then the version will be initialized to a default value in the ",(0,a.yg)("inlineCode",{parentName:"p"},"OnChanOpenInit")," callback of the controller's handler, so that channel handshake can proceed."),(0,a.yg)("p",null,"The following code snippet illustrates how to construct an appropriate interchain accounts ",(0,a.yg)("inlineCode",{parentName:"p"},"Metadata")," and encode it as a JSON bytestring:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nif err := k.icaControllerKeeper.RegisterInterchainAccount(ctx, msg.ConnectionId, msg.Owner, string(appVersion)); err != nil {\n    return err\n}\n")),(0,a.yg)("p",null,"Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 ",(0,a.yg)("inlineCode",{parentName:"p"},"Metadata")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nfeeMetadata := feetypes.Metadata{\n    AppVersion: string(appVersion),\n    FeeVersion: feetypes.Version,\n}\n\nfeeEnabledVersion, err := feetypes.ModuleCdc.MarshalJSON(&feeMetadata)\nif err != nil {\n    return err\n}\n\nif err := k.icaControllerKeeper.RegisterInterchainAccount(ctx, msg.ConnectionId, msg.Owner, string(feeEnabledVersion)); err != nil {\n    return err\n}\n")),(0,a.yg)("h2",{id:"relayers"},"Relayers"),(0,a.yg)("p",null,"When using the ",(0,a.yg)("inlineCode",{parentName:"p"},"DenomTrace")," gRPC, the full IBC denomination with the ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc/")," prefix may now be passed in."),(0,a.yg)("p",null,"Crossing hellos are no longer supported by core IBC for 03-connection and 04-channel. The handshake should be completed in the logical 4 step process (INIT, TRY, ACK, CONFIRM)."))}g.isMDXComponent=!0}}]);