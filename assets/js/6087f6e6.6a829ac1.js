"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[37767],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,m=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={title:"IBC-Go v2 to v3",sidebar_label:"IBC-Go v2 to v3",sidebar_position:4,slug:"/migrations/v2-to-v3"},i="Migrating from ibc-go v2 to v3",l={unversionedId:"migrations/v2-to-v3",id:"version-v6.3.x/migrations/v2-to-v3",title:"IBC-Go v2 to v3",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/04-migrations/04-v2-to-v3.md",sourceDirName:"04-migrations",slug:"/migrations/v2-to-v3",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/v2-to-v3",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:4,frontMatter:{title:"IBC-Go v2 to v3",sidebar_label:"IBC-Go v2 to v3",sidebar_position:4,slug:"/migrations/v2-to-v3"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v1 to v2",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/v1-to-v2"},next:{title:"IBC-Go v3 to v4",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/migrations/v3-to-v4"}},s={},p=[{value:"Chains",id:"chains",level:2},{value:"ICS20",id:"ics20",level:3},{value:"ICS27",id:"ics27",level:3},{value:"Upgrade Proposal",id:"upgrade-proposal",level:3},{value:"Add <code>StoreUpgrades</code> for ICS27 module",id:"add-storeupgrades-for-ics27-module",level:4},{value:"Genesis migrations",id:"genesis-migrations",level:3},{value:"Ante decorator",id:"ante-decorator",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"<code>OnChanOpenTry</code> must return negotiated application version",id:"onchanopentry-must-return-negotiated-application-version",level:3},{value:"<code>OnChanOpenAck</code> will take additional <code>counterpartyChannelID</code> argument",id:"onchanopenack-will-take-additional-counterpartychannelid-argument",level:3},{value:"<code>NegotiateAppVersion</code> removed from <code>IBCModule</code> interface",id:"negotiateappversion-removed-from-ibcmodule-interface",level:3},{value:"Channel state will not be set before application callback",id:"channel-state-will-not-be-set-before-application-callback",level:3},{value:"IBC application callbacks moved from <code>AppModule</code> to <code>IBCModule</code>",id:"ibc-application-callbacks-moved-from-appmodule-to-ibcmodule",level:3},{value:"IBC testing package",id:"ibc-testing-package",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}],d={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"migrating-from-ibc-go-v2-to-v3"},"Migrating from ibc-go v2 to v3"),(0,o.yg)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,o.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Chains"),(0,o.yg)("li",{parentName:"ul"},"IBC Apps"),(0,o.yg)("li",{parentName:"ul"},"Relayers"),(0,o.yg)("li",{parentName:"ul"},"IBC Light Clients")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"github.com/cosmos/ibc-go/v2 -> github.com/cosmos/ibc-go/v3\n")),(0,o.yg)("p",null,"No genesis or in-place migrations are required when upgrading from v1 or v2 of ibc-go."),(0,o.yg)("h2",{id:"chains"},"Chains"),(0,o.yg)("h3",{id:"ics20"},"ICS20"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"transferkeeper.NewKeeper(...)")," now takes in an ICS4Wrapper.\nThe ICS4Wrapper should be the IBC Channel Keeper unless ICS 20 is being connected to a middleware application."),(0,o.yg)("h3",{id:"ics27"},"ICS27"),(0,o.yg)("p",null,"ICS27 Interchain Accounts has been added as a supported IBC application of ibc-go.\nPlease see the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/ibc-go/v6.3.x/apps/interchain-accounts/overview"},"ICS27 documentation")," for more information."),(0,o.yg)("h3",{id:"upgrade-proposal"},"Upgrade Proposal"),(0,o.yg)("p",null,"If the chain will adopt ICS27, it must set the appropriate params during the execution of the upgrade handler in ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go"),": "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("v3",\n    func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n        // set the ICS27 consensus version so InitGenesis is not run\n        fromVM[icatypes.ModuleName] = icamodule.ConsensusVersion()\n        \n        // create ICS27 Controller submodule params\n        controllerParams := icacontrollertypes.Params{\n            ControllerEnabled: true, \n        }\n\n        // create ICS27 Host submodule params\n        hostParams := icahosttypes.Params{\n            HostEnabled: true, \n            AllowMessages: []string{"/cosmos.bank.v1beta1.MsgSend", ...}, \n        }\n        \n        // initialize ICS27 module\n        icamodule.InitModule(ctx, controllerParams, hostParams)\n        \n        ...\n\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    })\n\n')),(0,o.yg)("p",null,"The host and controller submodule params only need to be set if the chain integrates those submodules.\nFor example, if a chain chooses not to integrate a controller submodule, it may pass empty params into ",(0,o.yg)("inlineCode",{parentName:"p"},"InitModule"),"."),(0,o.yg)("h4",{id:"add-storeupgrades-for-ics27-module"},"Add ",(0,o.yg)("inlineCode",{parentName:"h4"},"StoreUpgrades")," for ICS27 module"),(0,o.yg)("p",null,"For ICS27 it is also necessary to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/upgrade#add-storeupgrades-for-new-modules"},"manually add store upgrades")," for the new ICS27 module and then configure the store loader to apply those upgrades in ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'if upgradeInfo.Name == "v3" && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n    storeUpgrades := store.StoreUpgrades{\n        Added: []string{icacontrollertypes.StoreKey, icahosttypes.StoreKey},\n    }\n\n    app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n}\n')),(0,o.yg)("p",null,"This ensures that the new module's stores are added to the multistore before the migrations begin.\nThe host and controller submodule keys only need to be added if the chain integrates those submodules.\nFor example, if a chain chooses not to integrate a controller submodule, it does not need to add the controller key to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Added")," field."),(0,o.yg)("h3",{id:"genesis-migrations"},"Genesis migrations"),(0,o.yg)("p",null,"If the chain will adopt ICS27 and chooses to upgrade via a genesis export, then the ICS27 parameters must be set during genesis migration. "),(0,o.yg)("p",null,"The migration code required may look like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'    controllerGenesisState := icatypes.DefaultControllerGenesis()\n    // overwrite parameters as desired\n    controllerGenesisState.Params = icacontrollertypes.Params{\n        ControllerEnabled: true, \n    } \n\n    hostGenesisState := icatypes.DefaultHostGenesis()\n    // overwrite parameters as desired\n    hostGenesisState.Params = icahosttypes.Params{\n        HostEnabled: true, \n        AllowMessages: []string{"/cosmos.bank.v1beta1.MsgSend", ...}, \n    }\n\n    icaGenesisState := icatypes.NewGenesisState(controllerGenesisState, hostGenesisState)\n\n    // set new ics27 genesis state\n    appState[icatypes.ModuleName] = clientCtx.Codec.MustMarshalJSON(icaGenesisState)\n')),(0,o.yg)("h3",{id:"ante-decorator"},"Ante decorator"),(0,o.yg)("p",null,"The field of type ",(0,o.yg)("inlineCode",{parentName:"p"},"channelkeeper.Keeper")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteDecorator")," structure has been replaced with a field of type ",(0,o.yg)("inlineCode",{parentName:"p"},"*keeper.Keeper"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-diff"},"type AnteDecorator struct {\n-    k channelkeeper.Keeper\n+    k *keeper.Keeper\n}\n\n- func NewAnteDecorator(k channelkeeper.Keeper) AnteDecorator {\n+ func NewAnteDecorator(k *keeper.Keeper) AnteDecorator {\n    return AnteDecorator{k: k}\n}\n")),(0,o.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,o.yg)("h3",{id:"onchanopentry-must-return-negotiated-application-version"},(0,o.yg)("inlineCode",{parentName:"h3"},"OnChanOpenTry")," must return negotiated application version"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"OnChanOpenTry")," application callback has been modified.\nThe return signature now includes the application version.\nIBC applications must perform application version negotiation in ",(0,o.yg)("inlineCode",{parentName:"p"},"OnChanOpenTry")," using the counterparty version.\nThe negotiated application version then must be returned in ",(0,o.yg)("inlineCode",{parentName:"p"},"OnChanOpenTry")," to core IBC.\nCore IBC will set this version in the TRYOPEN channel."),(0,o.yg)("h3",{id:"onchanopenack-will-take-additional-counterpartychannelid-argument"},(0,o.yg)("inlineCode",{parentName:"h3"},"OnChanOpenAck")," will take additional ",(0,o.yg)("inlineCode",{parentName:"h3"},"counterpartyChannelID")," argument"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"OnChanOpenAck")," application callback has been modified.\nThe arguments now include the counterparty channel id."),(0,o.yg)("h3",{id:"negotiateappversion-removed-from-ibcmodule-interface"},(0,o.yg)("inlineCode",{parentName:"h3"},"NegotiateAppVersion")," removed from ",(0,o.yg)("inlineCode",{parentName:"h3"},"IBCModule")," interface"),(0,o.yg)("p",null,"Previously this logic was handled by the ",(0,o.yg)("inlineCode",{parentName:"p"},"NegotiateAppVersion")," function.\nRelayers would query this function before calling ",(0,o.yg)("inlineCode",{parentName:"p"},"ChanOpenTry"),".\nApplications would then need to verify that the passed in version was correct.\nNow applications will perform this version negotiation during the channel handshake, thus removing the need for ",(0,o.yg)("inlineCode",{parentName:"p"},"NegotiateAppVersion"),"."),(0,o.yg)("h3",{id:"channel-state-will-not-be-set-before-application-callback"},"Channel state will not be set before application callback"),(0,o.yg)("p",null,"The channel handshake logic has been reorganized within core IBC.\nChannel state will not be set in state after the application callback is performed.\nApplications must rely only on the passed in channel parameters instead of querying the channel keeper for channel state."),(0,o.yg)("h3",{id:"ibc-application-callbacks-moved-from-appmodule-to-ibcmodule"},"IBC application callbacks moved from ",(0,o.yg)("inlineCode",{parentName:"h3"},"AppModule")," to ",(0,o.yg)("inlineCode",{parentName:"h3"},"IBCModule")),(0,o.yg)("p",null,"Previously, IBC module callbacks were apart of the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModule")," type.\nThe recommended approach is to create an ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCModule")," type and move the IBC module callbacks from ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModule")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCModule")," in a separate file ",(0,o.yg)("inlineCode",{parentName:"p"},"ibc_module.go"),". "),(0,o.yg)("p",null,"The mock module go API has been broken in this release by applying the above format.\nThe IBC module callbacks have been moved from the mock modules ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModule")," into a new type ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCModule"),". "),(0,o.yg)("p",null,"As apart of this release, the mock module now supports middleware testing. Please see the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.1.0/testing/README.md#middleware-testing"},"README")," for more information."),(0,o.yg)("p",null,"Please review the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.1.0/testing/mock/ibc_module.go"},"mock")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.1.0/modules/apps/transfer/ibc_module.go"},"transfer")," modules as examples. Additionally, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.1.0/testing/simapp/app.go"},"simapp")," provides an example of how ",(0,o.yg)("inlineCode",{parentName:"p"},"IBCModule")," types should now be added to the IBC router in favour of ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModule"),"."),(0,o.yg)("h3",{id:"ibc-testing-package"},"IBC testing package"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TestChain"),"s are now created with chainID's beginning from an index of 1. Any calls to ",(0,o.yg)("inlineCode",{parentName:"p"},"GetChainID(0)")," will now fail. Please increment all calls to ",(0,o.yg)("inlineCode",{parentName:"p"},"GetChainID")," by 1. "),(0,o.yg)("h2",{id:"relayers"},"Relayers"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"AppVersion")," gRPC has been removed.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"version")," string in ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgChanOpenTry")," has been deprecated and will be ignored by core IBC.\nRelayers no longer need to determine the version to use on the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChanOpenTry")," step.\nIBC applications will determine the correct version using the counterparty version. "),(0,o.yg)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"GetProofSpecs")," function has been removed from the ",(0,o.yg)("inlineCode",{parentName:"p"},"ClientState")," interface. This function was previously unused by core IBC. Light clients which don't use this function may remove it."))}g.isMDXComponent=!0}}]);