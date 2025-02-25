"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[27215],{15680:(e,o,t)=>{t.d(o,{xA:()=>d,yg:()=>g});var n=t(96540);function s(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){s(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,s=function(e,o){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),u=function(e){var o=n.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},d=function(e){var o=u(e.components);return n.createElement(i.Provider,{value:o},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(t),m=s,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||r;return t?n.createElement(g,l(l({ref:o},d),{},{components:t})):n.createElement(g,l({ref:o},d))}));function g(e,o){var t=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=m;var a={};for(var i in o)hasOwnProperty.call(o,i)&&(a[i]=o[i]);a.originalType=e,a[c]="string"==typeof e?e:s,l[1]=a;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49022:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=t(58168),s=(t(96540),t(15680));const r={sidebar_position:1},l="x/protocolpool",a={unversionedId:"docs/build/modules/protocolpool/README",id:"docs/build/modules/protocolpool/README",title:"x/protocolpool",description:"Concepts",source:"@site/cosmos-sdk/docs/build/modules/protocolpool/README.md",sourceDirName:"docs/build/modules/protocolpool",slug:"/docs/build/modules/protocolpool/",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/protocolpool/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/params",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/params/"},next:{title:"x/slashing",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/slashing/"}},i={},u=[{value:"Concepts",id:"concepts",level:2},{value:"State Transitions",id:"state-transitions",level:2},{value:"FundCommunityPool",id:"fundcommunitypool",level:3},{value:"CommunityPoolSpend",id:"communitypoolspend",level:3},{value:"SubmitBudgetProposal",id:"submitbudgetproposal",level:3},{value:"ClaimBudget",id:"claimbudget",level:3},{value:"CreateContinuousFund",id:"createcontinuousfund",level:3},{value:"CancelContinuousFund",id:"cancelcontinuousfund",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgFundCommunityPool",id:"msgfundcommunitypool",level:3},{value:"MsgCommunityPoolSpend",id:"msgcommunitypoolspend",level:3},{value:"MsgSubmitBudgetProposal",id:"msgsubmitbudgetproposal",level:3},{value:"MsgClaimBudget",id:"msgclaimbudget",level:3},{value:"MsgCreateContinuousFund",id:"msgcreatecontinuousfund",level:3},{value:"MsgCancelContinuousFund",id:"msgcancelcontinuousfund",level:3},{value:"Client",id:"client",level:2}],d={toc:u},c="wrapper";function p(e){let{components:o,...t}=e;return(0,s.yg)(c,(0,n.A)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"xprotocolpool"},(0,s.yg)("inlineCode",{parentName:"h1"},"x/protocolpool")),(0,s.yg)("h2",{id:"concepts"},"Concepts"),(0,s.yg)("p",null,"Protopool is a module that handle functionality around community pool funds. This provides a separate module account for community pool making it easier to track the pool assets. We no longer track community pool assets in distribution module, but instead in this protocolpool module. Funds are migrated from the distribution module's community pool to protocolpool's module account."),(0,s.yg)("p",null,'The module is also designed with a lazy "claim-based" system, which means that users are required to actively claim allocated funds from allocated budget if any budget proposal has been submitted and passed. The module does not automatically distribute funds to recipients. This design choice allows for more flexibility and control over fund distribution.'),(0,s.yg)("h2",{id:"state-transitions"},"State Transitions"),(0,s.yg)("h3",{id:"fundcommunitypool"},"FundCommunityPool"),(0,s.yg)("p",null,"FundCommunityPool can be called by any valid account to send funds to the protocolpool module account."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // FundCommunityPool defines a method to allow an account to directly\n  // fund the community pool.\n  rpc FundCommunityPool(MsgFundCommunityPool) returns (MsgFundCommunityPoolResponse);\n")),(0,s.yg)("h3",{id:"communitypoolspend"},"CommunityPoolSpend"),(0,s.yg)("p",null,"CommunityPoolSpend can be called by the module authority (default governance module account) or any account with authorization to spend funds from the protocolpool module account to a receiver address."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // CommunityPoolSpend defines a governance  operation for sending tokens from\n  // the community pool in the x/protocolpool module to another account, which\n  // could be the governance module itself. The authority is defined in the\n  // keeper.\n  rpc CommunityPoolSpend(MsgCommunityPoolSpend) returns (MsgCommunityPoolSpendResponse);\n")),(0,s.yg)("h3",{id:"submitbudgetproposal"},"SubmitBudgetProposal"),(0,s.yg)("p",null,"SubmitBudgetProposal is a message used to propose a budget allocation for a specific recipient. The proposed funds will be distributed periodically over a specified time frame."),(0,s.yg)("p",null,"It's the responsibility of users to actively claim their allocated funds based on the terms of the approved budget proposals."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // SubmitBudgetProposal defines a method to set a budget proposal.\n  rpc SubmitBudgetProposal(MsgSubmitBudgetProposal) returns (MsgSubmitBudgetProposalResponse);\n")),(0,s.yg)("h3",{id:"claimbudget"},"ClaimBudget"),(0,s.yg)("p",null,"ClaimBudget is a message used to claim funds from a previously submitted budget proposal. When a budget proposal is approved and funds are allocated, recipients can use this message to claim their share of the budget. Funds are distributed in tranches over specific periods, and users can claim their share of budget at the appropriate time."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // ClaimBudget defines a method to claim the distributed budget.\n  rpc ClaimBudget(MsgClaimBudget) returns (MsgClaimBudgetResponse);\n\n")),(0,s.yg)("h3",{id:"createcontinuousfund"},"CreateContinuousFund"),(0,s.yg)("p",null,"CreateContinuousFund is a message used to initiate a continuous fund for a specific recipient. The proposed percentage of funds will be distributed only on withdraw request for the recipient. The fund distribution continues until expiry time is reached or continuous fund request is canceled.\nNOTE:  This feature is designed to work with the SDK's default bond denom. "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // CreateContinuousFund defines a method to add funds continuously.\n  rpc CreateContinuousFund(MsgCreateContinuousFund) returns (MsgCreateContinuousFundResponse);\n")),(0,s.yg)("h3",{id:"cancelcontinuousfund"},"CancelContinuousFund"),(0,s.yg)("p",null,"CancelContinuousFund is a message used to cancel an existing continuous fund proposal for a specific recipient. Cancelling a continuous fund stops further distribution of funds, and the state object is removed from storage."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},"  // CancelContinuousFund defines a method for cancelling continuous fund.\n  rpc CancelContinuousFund(MsgCancelContinuousFund) returns (MsgCancelContinuousFundResponse);\n")),(0,s.yg)("h2",{id:"messages"},"Messages"),(0,s.yg)("h3",{id:"msgfundcommunitypool"},"MsgFundCommunityPool"),(0,s.yg)("p",null,"This message sends coins directly from the sender to the community pool."),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"If you know the protocolpool module account address, you can directly use bank ",(0,s.yg)("inlineCode",{parentName:"p"},"send")," transaction instead.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L43-L53\n")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The msg will fail if the amount cannot be transferred from the sender to the protocolpool module account.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) FundCommunityPool(ctx context.Context, amount sdk.Coins, sender sdk.AccAddress) error {\n    return k.bankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, amount)\n}\n")),(0,s.yg)("h3",{id:"msgcommunitypoolspend"},"MsgCommunityPoolSpend"),(0,s.yg)("p",null,"This message distributes funds from the protocolpool module account to the recipient using ",(0,s.yg)("inlineCode",{parentName:"p"},"DistributeFromCommunityPool")," keeper method."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L58-L69\n")),(0,s.yg)("p",null,"The message will fail under the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The amount cannot be transferred to the recipient from the protocolpool module account."),(0,s.yg)("li",{parentName:"ul"},"The ",(0,s.yg)("inlineCode",{parentName:"li"},"recipient")," address is restricted")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) DistributeFromCommunityPool(ctx context.Context, amount sdk.Coins, receiveAddr sdk.AccAddress) error {\n    return k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiveAddr, amount)\n}\n")),(0,s.yg)("h3",{id:"msgsubmitbudgetproposal"},"MsgSubmitBudgetProposal"),(0,s.yg)("p",null,"This message is used to submit a budget proposal to allocate funds for a specific recipient. The proposed funds will be distributed periodically over a specified time frame."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L75-L94\n")),(0,s.yg)("p",null,"The message will fail under the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The budget per tranche is zero."),(0,s.yg)("li",{parentName:"ul"},"The recipient address is empty or restricted."),(0,s.yg)("li",{parentName:"ul"},"The start time is less than current block time."),(0,s.yg)("li",{parentName:"ul"},"The number of tranches is not a positive integer."),(0,s.yg)("li",{parentName:"ul"},"The period length is not a positive integer.")),(0,s.yg)("admonition",{type:"warning"},(0,s.yg)("p",{parentName:"admonition"},"If two budgets to the same address are created, the budget would be updated with the new budget.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/keeper/msg_server.go#L37-L59\n")),(0,s.yg)("h3",{id:"msgclaimbudget"},"MsgClaimBudget"),(0,s.yg)("p",null,"This message is used to claim funds from a previously submitted budget proposal. When a budget proposal is passed and funds are allocated, recipients can use this message to claim their share of the budget."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L100-L104\n")),(0,s.yg)("p",null,"The message will fail under the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The recipient address is empty or restricted."),(0,s.yg)("li",{parentName:"ul"},"The budget proposal for the recipient does not exist."),(0,s.yg)("li",{parentName:"ul"},"The budget proposal has not reached its distribution start time."),(0,s.yg)("li",{parentName:"ul"},"The budget proposal's distribution period has not passed yet.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/keeper/msg_server.go#L28-L35\n")),(0,s.yg)("h3",{id:"msgcreatecontinuousfund"},"MsgCreateContinuousFund"),(0,s.yg)("p",null,"This message is used to create a continuous fund for a specific recipient. The proposed percentage of funds will be distributed only on withdraw request for the recipient. This fund distribution continues until expiry time is reached or continuous fund request is canceled."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L114-L130\n")),(0,s.yg)("p",null,"The message will fail under the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The recipient address is empty or restricted."),(0,s.yg)("li",{parentName:"ul"},"The percentage is zero/negative/greater than one."),(0,s.yg)("li",{parentName:"ul"},"The Expiry time is less than the current block time.")),(0,s.yg)("admonition",{type:"warning"},(0,s.yg)("p",{parentName:"admonition"},"If two continuous fund proposals to the same address are created, the previous ContinuousFund would be updated with the new ContinuousFund.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/keeper/msg_server.go#L103-L166\n")),(0,s.yg)("h3",{id:"msgcancelcontinuousfund"},"MsgCancelContinuousFund"),(0,s.yg)("p",null,"This message is used to cancel an existing continuous fund proposal for a specific recipient. Once canceled, the continuous fund will no longer distribute funds at each end block, and the state object will be removed. Users should be cautious when canceling continuous funds, as it may affect the planned distribution for the recipient."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/proto/cosmos/protocolpool/v1/tx.proto#L136-L161\n")),(0,s.yg)("p",null,"The message will fail under the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The recipient address is empty or restricted."),(0,s.yg)("li",{parentName:"ul"},"The ContinuousFund for the recipient does not exist.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/keeper/msg_server.go#L188-L226\n")),(0,s.yg)("h2",{id:"client"},"Client"),(0,s.yg)("p",null,"It takes the advantage of ",(0,s.yg)("inlineCode",{parentName:"p"},"AutoCLI")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/release/v0.52.x/x/protocolpool/autocli.go\n")))}p.isMDXComponent=!0}}]);