"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[34408],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:1},s="Application Testnets",i={unversionedId:"docs/build/building-apps/app-testnet",id:"docs/build/building-apps/app-testnet",title:"Application Testnets",description:"Building an application is complicated and requires a lot of testing. The Cosmos SDK provides a way to test your application in a real-world environment: a testnet.",source:"@site/cosmos-sdk/docs/build/building-apps/05-app-testnet.md",sourceDirName:"docs/build/building-apps",slug:"/docs/build/building-apps/app-testnet",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-apps/app-testnet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Application Upgrade",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-apps/app-upgrade"},next:{title:"app-go-genesis",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/building-apps/app-go-genesis"}},p={},d=[{value:"Testnet Setup",id:"testnet-setup",level:2},{value:"Required Changes",id:"required-changes",level:3},{value:"Staking",id:"staking",level:4},{value:"Distribution",id:"distribution",level:4},{value:"Slashing",id:"slashing",level:4},{value:"Bank",id:"bank",level:4},{value:"Upgrade",id:"upgrade",level:4},{value:"Optional Changes",id:"optional-changes",level:3},{value:"Running the Testnet",id:"running-the-testnet",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"application-testnets"},"Application Testnets"),(0,a.yg)("p",null,"Building an application is complicated and requires a lot of testing. The Cosmos SDK provides a way to test your application in a real-world environment: a testnet. "),(0,a.yg)("p",null,"We allow developers to take the state from their mainnet and run tests against the state. This is useful for testing upgrade migrations, or for testing the application in a real-world environment."),(0,a.yg)("h2",{id:"testnet-setup"},"Testnet Setup"),(0,a.yg)("p",null,"We will be breaking down the steps to create a testnet from mainnet state. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"  // InitSimAppForTestnet is broken down into two sections:\n  // Required Changes: Changes that, if not made, will cause the testnet to halt or panic\n  // Optional Changes: Changes to customize the testnet to one's liking (lower vote times, fund accounts, etc)\n  func InitSimAppForTestnet(app *SimApp, newValAddr bytes.HexBytes, newValPubKey crypto.PubKey, newOperatorAddress, upgradeToTrigger string) *SimApp {\n  ...\n  }\n")),(0,a.yg)("h3",{id:"required-changes"},"Required Changes"),(0,a.yg)("h4",{id:"staking"},"Staking"),(0,a.yg)("p",null,"When creating a testnet the important part is migrate the validator set from many validators to one or a few. This allows developers to spin up the chain without needing to replace validator keys. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'    ctx := app.BaseApp.NewUncachedContext(true, tmproto.Header{})\n    pubkey := &ed25519.PubKey{Key: newValPubKey.Bytes()}\n    pubkeyAny, err := types.NewAnyWithValue(pubkey)\n    if err != nil {\n        tmos.Exit(err.Error())\n    }\n\n    // STAKING\n    //\n\n    // Create Validator struct for our new validator.\n    _, bz, err := bech32.DecodeAndConvert(newOperatorAddress)\n    if err != nil {\n        tmos.Exit(err.Error())\n    }\n    bech32Addr, err := bech32.ConvertAndEncode("simvaloper", bz)\n    if err != nil {\n        tmos.Exit(err.Error())\n    }\n    newVal := stakingtypes.Validator{\n        OperatorAddress: bech32Addr,\n        ConsensusPubkey: pubkeyAny,\n        Jailed:          false,\n        Status:          stakingtypes.Bonded,\n        Tokens:          sdk.NewInt(900000000000000),\n        DelegatorShares: sdk.MustNewDecFromStr("10000000"),\n        Description: stakingtypes.Description{\n            Moniker: "Testnet Validator",\n        },\n        Commission: stakingtypes.Commission{\n            CommissionRates: stakingtypes.CommissionRates{\n                Rate:          sdk.MustNewDecFromStr("0.05"),\n                MaxRate:       sdk.MustNewDecFromStr("0.1"),\n                MaxChangeRate: sdk.MustNewDecFromStr("0.05"),\n            },\n        },\n        MinSelfDelegation: sdk.OneInt(),\n    }\n\n    // Remove all validators from power store\n    stakingKey := app.GetKey(stakingtypes.ModuleName)\n    stakingStore := ctx.KVStore(stakingKey)\n    iterator := app.StakingKeeper.ValidatorsPowerStoreIterator(ctx)\n    for ; iterator.Valid(); iterator.Next() {\n        stakingStore.Delete(iterator.Key())\n    }\n    iterator.Close()\n\n    // Remove all validators from last validators store\n    iterator = app.StakingKeeper.LastValidatorsIterator(ctx)\n    for ; iterator.Valid(); iterator.Next() {\n        app.StakingKeeper.LastValidatorPower.Delete(iterator.Key())\n    }\n    iterator.Close()\n\n    // Add our validator to power and last validators store\n    app.StakingKeeper.SetValidator(ctx, newVal)\n    err = app.StakingKeeper.SetValidatorByConsAddr(ctx, newVal)\n    if err != nil {\n        panic(err)\n    }\n    app.StakingKeeper.SetValidatorByPowerIndex(ctx, newVal)\n    app.StakingKeeper.SetLastValidatorPower(ctx, newVal.GetOperator(), 0)\n    if err := app.StakingKeeper.Hooks().AfterValidatorCreated(ctx, newVal.GetOperator()); err != nil {\n        panic(err)\n    }\n')),(0,a.yg)("h4",{id:"distribution"},"Distribution"),(0,a.yg)("p",null,"Since the validator set has changed, we need to update the distribution records for the new validator."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"    // Initialize records for this validator across all distribution stores\n    app.DistrKeeper.ValidatorHistoricalRewards.Set(ctx, newVal.GetOperator(), 0, distrtypes.NewValidatorHistoricalRewards(sdk.DecCoins{}, 1))\n    app.DistrKeeper.ValidatorCurrentRewards.Set(ctx, newVal.GetOperator(), distrtypes.NewValidatorCurrentRewards(sdk.DecCoins{}, 1))\n    app.DistrKeeper.ValidatorAccumulatedCommission.Set(ctx, newVal.GetOperator(), distrtypes.InitialValidatorAccumulatedCommission())\n    app.DistrKeeper.ValidatorOutstandingRewards.Set(ctx, newVal.GetOperator(), distrtypes.ValidatorOutstandingRewards{Rewards: sdk.DecCoins{}})\n")),(0,a.yg)("h4",{id:"slashing"},"Slashing"),(0,a.yg)("p",null,"We also need to set the validator signing info for the new validator."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"  // SLASHING\n    //\n\n    // Set validator signing info for our new validator.\n    newConsAddr := sdk.ConsAddress(newValAddr.Bytes())\n    newValidatorSigningInfo := slashingtypes.ValidatorSigningInfo{\n        Address:     newConsAddr.String(),\n        StartHeight: app.LastBlockHeight() - 1,\n        Tombstoned:  false,\n    }\n    app.SlashingKeeper.ValidatorSigningInfo.Set(ctx, newConsAddr, newValidatorSigningInfo)\n")),(0,a.yg)("h4",{id:"bank"},"Bank"),(0,a.yg)("p",null,"It is useful to create new accounts for your testing purposes. This avoids the need to have the same key as you may have on mainnet. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'  // BANK\n    //\n\n    defaultCoins := sdk.NewCoins(sdk.NewInt64Coin("ustake", 1000000000000))\n\n    localSimAppAccounts := []sdk.AccAddress{\n        sdk.MustAccAddressFromBech32("cosmos12smx2wdlyttvyzvzg54y2vnqwq2qjateuf7thj"),\n        sdk.MustAccAddressFromBech32("cosmos1cyyzpxplxdzkeea7kwsydadg87357qnahakaks"),\n        sdk.MustAccAddressFromBech32("cosmos18s5lynnmx37hq4wlrw9gdn68sg2uxp5rgk26vv"),\n        sdk.MustAccAddressFromBech32("cosmos1qwexv7c6sm95lwhzn9027vyu2ccneaqad4w8ka"),\n        sdk.MustAccAddressFromBech32("cosmos14hcxlnwlqtq75ttaxf674vk6mafspg8xwgnn53"),\n        sdk.MustAccAddressFromBech32("cosmos12rr534cer5c0vj53eq4y32lcwguyy7nndt0u2t"),\n        sdk.MustAccAddressFromBech32("cosmos1nt33cjd5auzh36syym6azgc8tve0jlvklnq7jq"),\n        sdk.MustAccAddressFromBech32("cosmos10qfrpash5g2vk3hppvu45x0g860czur8ff5yx0"),\n        sdk.MustAccAddressFromBech32("cosmos1f4tvsdukfwh6s9swrc24gkuz23tp8pd3e9r5fa"),\n        sdk.MustAccAddressFromBech32("cosmos1myv43sqgnj5sm4zl98ftl45af9cfzk7nhjxjqh"),\n        sdk.MustAccAddressFromBech32("cosmos14gs9zqh8m49yy9kscjqu9h72exyf295afg6kgk"),\n        sdk.MustAccAddressFromBech32("cosmos1jllfytsz4dryxhz5tl7u73v29exsf80vz52ucc")}\n\n  // Fund localSimApp accounts\n    for _, account := range localSimAppAccounts {\n        err := app.BankKeeper.MintCoins(ctx, minttypes.ModuleName, defaultCoins)\n        if err != nil {\n            tmos.Exit(err.Error())\n        }\n        err = app.BankKeeper.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, account, defaultCoins)\n        if err != nil {\n            tmos.Exit(err.Error())\n        }\n    }\n')),(0,a.yg)("h4",{id:"upgrade"},"Upgrade"),(0,a.yg)("p",null,"If you would like to schedule an upgrade the below can be used. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'    // UPGRADE\n    //\n\n    if upgradeToTrigger != "" {\n        upgradePlan := upgradetypes.Plan{\n            Name:   upgradeToTrigger,\n            Height: app.LastBlockHeight(),\n        }\n        err = app.UpgradeKeeper.ScheduleUpgrade(ctx, upgradePlan)\n        if err != nil {\n            panic(err)\n        }\n    }\n')),(0,a.yg)("h3",{id:"optional-changes"},"Optional Changes"),(0,a.yg)("p",null,"If you have custom modules that rely on specific state from the above modules and/or you would like to test your custom module, you will need to update the state of your custom module to reflect your needs"),(0,a.yg)("h2",{id:"running-the-testnet"},"Running the Testnet"),(0,a.yg)("p",null,"Before we can run the testnet we must plug everything together. "),(0,a.yg)("p",null,"in ",(0,a.yg)("inlineCode",{parentName:"p"},"root.go"),", in the ",(0,a.yg)("inlineCode",{parentName:"p"},"initRootCmd")," function we add:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"server.AddCommands(rootCmd, simapp.DefaultNodeHome, newApp, createSimAppAndExport)\n+server.AddTestnetCreatorCommand(rootCmd, simapp.DefaultNodeHome, newTestnetApp)\n")),(0,a.yg)("p",null,"Next we will add a newTestnetApp helper function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'// newTestnetApp starts by running the normal newApp method. From there, the app interface returned is modified in order\n// for a testnet to be created from the provided app.\nfunc newTestnetApp(logger log.Logger, db cometbftdb.DB, traceStore io.Writer, appOpts servertypes.AppOptions) servertypes.Application {\n    // Create an app and type cast to an SimApp\n    app := newApp(logger, db, traceStore, appOpts)\n    simApp, ok := app.(*simapp.SimApp)\n    if !ok {\n        panic("app created from newApp is not of type simApp")\n    }\n\n    newValAddr, ok := appOpts.Get(server.KeyNewValAddr).(bytes.HexBytes)\n    if !ok {\n        panic("newValAddr is not of type bytes.HexBytes")\n    }\n    newValPubKey, ok := appOpts.Get(server.KeyUserPubKey).(crypto.PubKey)\n    if !ok {\n        panic("newValPubKey is not of type crypto.PubKey")\n    }\n    newOperatorAddress, ok := appOpts.Get(server.KeyNewOpAddr).(string)\n    if !ok {\n        panic("newOperatorAddress is not of type string")\n    }\n    upgradeToTrigger, ok := appOpts.Get(server.KeyTriggerTestnetUpgrade).(string)\n    if !ok {\n        panic("upgradeToTrigger is not of type string")\n    }\n\n    // Make modifications to the normal SimApp required to run the network locally\n    return simapp.InitSimAppForTestnet(simApp, newValAddr, newValPubKey, newOperatorAddress, upgradeToTrigger)\n}\n')))}u.isMDXComponent=!0}}]);