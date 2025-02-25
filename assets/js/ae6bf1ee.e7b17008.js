"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[78196],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(t),u=i,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var g=2;g<o;g++)r[g]=t[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=t(58168),i=(t(96540),t(15680));const o={sidebar_position:1},r="x/auth/vesting",l={unversionedId:"docs/build/modules/auth/vesting",id:"docs/build/modules/auth/vesting",title:"x/auth/vesting",description:"Vesting accounts are deprecated in favor of x/accounts.",source:"@site/cosmos-sdk/docs/build/modules/auth/1-vesting.md",sourceDirName:"docs/build/modules/auth",slug:"/docs/build/modules/auth/vesting",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/auth/vesting",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/auth",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/auth/"},next:{title:"x/auth/tx",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/modules/auth/tx"}},s={},g=[{value:"Intro and Requirements",id:"intro-and-requirements",level:2},{value:"Note",id:"note",level:2},{value:"Vesting Account Types",id:"vesting-account-types",level:2},{value:"BaseVestingAccount",id:"basevestingaccount",level:3},{value:"ContinuousVestingAccount",id:"continuousvestingaccount",level:3},{value:"DelayedVestingAccount",id:"delayedvestingaccount",level:3},{value:"Period",id:"period",level:3},{value:"PeriodicVestingAccount",id:"periodicvestingaccount",level:3},{value:"PermanentLockedAccount",id:"permanentlockedaccount",level:3},{value:"Vesting Account Specification",id:"vesting-account-specification",level:2},{value:"Determining Vesting &amp; Vested Amounts",id:"determining-vesting--vested-amounts",level:3},{value:"Continuously Vesting Accounts",id:"continuously-vesting-accounts",level:4},{value:"Periodic Vesting Accounts",id:"periodic-vesting-accounts",level:3},{value:"Delayed/Discrete Vesting Accounts",id:"delayeddiscrete-vesting-accounts",level:4},{value:"Transferring/Sending",id:"transferringsending",level:3},{value:"Keepers/Handlers",id:"keepershandlers",level:4},{value:"Delegating",id:"delegating",level:3},{value:"Keepers/Handlers",id:"keepershandlers-1",level:4},{value:"Undelegating",id:"undelegating",level:3},{value:"Keepers/Handlers",id:"keepershandlers-2",level:4},{value:"Keepers &amp; Handlers",id:"keepers--handlers",level:2},{value:"Genesis Initialization",id:"genesis-initialization",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple",id:"simple",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Periodic Vesting",id:"periodic-vesting",level:3},{value:"Glossary",id:"glossary",level:2}],c={toc:g},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"xauthvesting"},(0,i.yg)("inlineCode",{parentName:"h1"},"x/auth/vesting")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Vesting accounts are deprecated in favor of ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts"),".\nThe creation of vesting account, using ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth/vesting"),", is not possible since v0.52.\nFor existing chains, importing the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth/vesting module")," is still required for backward compatibility purposes.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#intro-and-requirements"},"Intro and Requirements")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#note"},"Note")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#vesting-account-types"},"Vesting Account Types"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#basevestingaccount"},"BaseVestingAccount")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#continuousvestingaccount"},"ContinuousVestingAccount")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#delayedvestingaccount"},"DelayedVestingAccount")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#period"},"Period")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#periodicvestingaccount"},"PeriodicVestingAccount")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#permanentlockedaccount"},"PermanentLockedAccount")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#vesting-account-specification"},"Vesting Account Specification"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#determining-vesting--vested-amounts"},"Determining Vesting & Vested Amounts")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#periodic-vesting-accounts"},"Periodic Vesting Accounts")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#transferringsending"},"Transferring/Sending")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#delegating"},"Delegating")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#undelegating"},"Undelegating")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#keepers--handlers"},"Keepers & Handlers")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#genesis-initialization"},"Genesis Initialization")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#examples"},"Examples"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#simple"},"Simple")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#slashing"},"Slashing")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#periodic-vesting"},"Periodic Vesting")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#glossary"},"Glossary"))),(0,i.yg)("h2",{id:"intro-and-requirements"},"Intro and Requirements"),(0,i.yg)("p",null,"This specification defines the vesting account implementation that is used by the Cosmos Hub. The requirements for this vesting account is that it should be initialized during genesis with a starting balance ",(0,i.yg)("inlineCode",{parentName:"p"},"X")," and a vesting end time ",(0,i.yg)("inlineCode",{parentName:"p"},"ET"),". A vesting account may be initialized with a vesting start time ",(0,i.yg)("inlineCode",{parentName:"p"},"ST")," and a number of vesting periods ",(0,i.yg)("inlineCode",{parentName:"p"},"P"),". If a vesting start time is included, the vesting period does not begin until start time is reached. If vesting periods are included, the vesting occurs over the specified number of periods."),(0,i.yg)("p",null,"For all vesting accounts, the owner of the vesting account is able to delegate and undelegate from validators, however they cannot transfer coins to another account until those coins are vested. This specification allows for four different kinds of vesting:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Delayed vesting, where all coins are vested once ",(0,i.yg)("inlineCode",{parentName:"li"},"ET")," is reached."),(0,i.yg)("li",{parentName:"ul"},"Continuous vesting, where coins begin to vest at ",(0,i.yg)("inlineCode",{parentName:"li"},"ST")," and vest linearly with respect to time until ",(0,i.yg)("inlineCode",{parentName:"li"},"ET")," is reached"),(0,i.yg)("li",{parentName:"ul"},"Periodic vesting, where coins begin to vest at ",(0,i.yg)("inlineCode",{parentName:"li"},"ST")," and vest periodically according to number of periods and the vesting amount per period. The number of periods, length per period, and amount per period are configurable. A periodic vesting account is distinguished from a continuous vesting account in that coins can be released in staggered tranches. For example, a periodic vesting account could be used for vesting arrangements where coins are released quarterly, yearly, or over any other function of tokens over time."),(0,i.yg)("li",{parentName:"ul"},"Permanent locked vesting, where coins are locked forever. Coins in this account can still be used for delegating and for governance votes even while locked.")),(0,i.yg)("h2",{id:"note"},"Note"),(0,i.yg)("p",null,"Vesting accounts can be initialized with some vesting and non-vesting coins. The non-vesting coins would be immediately transferable. DelayedVesting ContinuousVesting, PeriodicVesting and PermenantVesting accounts can be created with normal messages after genesis. Other types of vesting accounts must be created at genesis, or as part of a manual network upgrade. The current specification only allows for ",(0,i.yg)("em",{parentName:"p"},"unconditional")," vesting (ie. there is no possibility of reaching ",(0,i.yg)("inlineCode",{parentName:"p"},"ET")," and\nhaving coins fail to vest)."),(0,i.yg)("h2",{id:"vesting-account-types"},"Vesting Account Types"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// VestingAccount defines an interface that any vesting account type must\n// implement.\ntype VestingAccount interface {\n  Account\n\n  GetVestedCoins(Time)  Coins\n  GetVestingCoins(Time) Coins\n\n  // TrackDelegation performs internal vesting accounting necessary when\n  // delegating from a vesting account. It accepts the current block time, the\n  // delegation amount and balance of all coins whose denomination exists in\n  // the account's original vesting balance.\n  TrackDelegation(Time, Coins, Coins)\n\n  // TrackUndelegation performs internal vesting accounting necessary when a\n  // vesting account performs an undelegation.\n  TrackUndelegation(Coins)\n\n  GetStartTime() int64\n  GetEndTime()   int64\n}\n")),(0,i.yg)("h3",{id:"basevestingaccount"},"BaseVestingAccount"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L11-L35\n")),(0,i.yg)("h3",{id:"continuousvestingaccount"},"ContinuousVestingAccount"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L37-L46\n")),(0,i.yg)("h3",{id:"delayedvestingaccount"},"DelayedVestingAccount"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L48-L57\n")),(0,i.yg)("h3",{id:"period"},"Period"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L59-L69\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// Stores all vesting periods passed as part of a PeriodicVestingAccount\ntype Periods []Period\n\n")),(0,i.yg)("h3",{id:"periodicvestingaccount"},"PeriodicVestingAccount"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L71-L81\n")),(0,i.yg)("p",null,"In order to facilitate less ad-hoc type checking and assertions and to support flexibility in account balance usage, the existing ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," ",(0,i.yg)("inlineCode",{parentName:"p"},"ViewKeeper")," interface is updated to contain the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type ViewKeeper interface {\n  // ...\n\n  // Calculates the total locked account balance.\n  LockedCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins\n\n  // Calculates the total spendable balance that can be sent to other accounts.\n  SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins\n}\n")),(0,i.yg)("h3",{id:"permanentlockedaccount"},"PermanentLockedAccount"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/vesting/v1beta1/vesting.proto#L83-L94\n")),(0,i.yg)("h2",{id:"vesting-account-specification"},"Vesting Account Specification"),(0,i.yg)("p",null,"Given a vesting account, we define the following in the proceeding operations:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"OV"),": The original vesting coin amount. It is a constant value."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"V"),": The number of ",(0,i.yg)("inlineCode",{parentName:"li"},"OV")," coins that are still ",(0,i.yg)("em",{parentName:"li"},"vesting"),". It is derived by\n",(0,i.yg)("inlineCode",{parentName:"li"},"OV"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"StartTime")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"EndTime"),". This value is computed on demand and not on a per-block basis."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"V'"),": The number of ",(0,i.yg)("inlineCode",{parentName:"li"},"OV")," coins that are ",(0,i.yg)("em",{parentName:"li"},"vested")," (unlocked). This value is computed on demand and not a per-block basis."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DV"),": The number of delegated ",(0,i.yg)("em",{parentName:"li"},"vesting")," coins. It is a variable value. It is stored and modified directly in the vesting account."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DF"),": The number of delegated ",(0,i.yg)("em",{parentName:"li"},"vested")," (unlocked) coins. It is a variable value. It is stored and modified directly in the vesting account."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"BC"),": The number of ",(0,i.yg)("inlineCode",{parentName:"li"},"OV")," coins less any coins that are transferred\n(which can be negative or delegated). It is considered to be balance of the embedded base account. It is stored and modified directly in the vesting account.")),(0,i.yg)("h3",{id:"determining-vesting--vested-amounts"},"Determining Vesting & Vested Amounts"),(0,i.yg)("p",null,"It is important to note that these values are computed on demand and not on a mandatory per-block basis (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"EndBlocker"),")."),(0,i.yg)("h4",{id:"continuously-vesting-accounts"},"Continuously Vesting Accounts"),(0,i.yg)("p",null,"To determine the amount of coins that are vested for a given block time ",(0,i.yg)("inlineCode",{parentName:"p"},"T"),", the\nfollowing is performed:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"X := T - StartTime")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"Y := EndTime - StartTime")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"V' := OV * (X / Y)")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"V := OV - V'"))),(0,i.yg)("p",null,"Thus, the total amount of ",(0,i.yg)("em",{parentName:"p"},"vested")," coins is ",(0,i.yg)("inlineCode",{parentName:"p"},"V'")," and the remaining amount, ",(0,i.yg)("inlineCode",{parentName:"p"},"V"),",\nis ",(0,i.yg)("em",{parentName:"p"},"vesting"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (cva ContinuousVestingAccount) GetVestedCoins(t Time) Coins {\n    if t <= cva.StartTime {\n        // We must handle the case where the start time for a vesting account has\n        // been set into the future or when the start of the chain is not exactly\n        // known.\n        return ZeroCoins\n    } else if t >= cva.EndTime {\n        return cva.OriginalVesting\n    }\n\n    x := t - cva.StartTime\n    y := cva.EndTime - cva.StartTime\n\n    return cva.OriginalVesting * (x / y)\n}\n\nfunc (cva ContinuousVestingAccount) GetVestingCoins(t Time) Coins {\n    return cva.OriginalVesting - cva.GetVestedCoins(t)\n}\n")),(0,i.yg)("h3",{id:"periodic-vesting-accounts"},"Periodic Vesting Accounts"),(0,i.yg)("p",null,"Periodic vesting accounts require calculating the coins released during each period for a given block time ",(0,i.yg)("inlineCode",{parentName:"p"},"T"),". Note that multiple periods could have passed when calling ",(0,i.yg)("inlineCode",{parentName:"p"},"GetVestedCoins"),", so we must iterate over each period until the end of that period is after ",(0,i.yg)("inlineCode",{parentName:"p"},"T"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"CT := StartTime")),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"V' := 0"))),(0,i.yg)("p",null,"For each Period P:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"X := T - CT")),(0,i.yg)("li",{parentName:"ol"},"IF ",(0,i.yg)("inlineCode",{parentName:"li"},"X >= P.Length"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"V' += P.Amount")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"CT += P.Length")),(0,i.yg)("li",{parentName:"ol"},"ELSE break"))),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"V := OV - V'"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (pva PeriodicVestingAccount) GetVestedCoins(t Time) Coins {\n  if t < pva.StartTime {\n    return ZeroCoins\n  }\n  ct := pva.StartTime // The start of the vesting schedule\n  vested := 0\n  periods = pva.GetPeriods()\n  for _, period  := range periods {\n    if t - ct < period.Length {\n      break\n    }\n    vested += period.Amount\n    ct += period.Length // increment ct to the start of the next vesting period\n  }\n  return vested\n}\n\nfunc (pva PeriodicVestingAccount) GetVestingCoins(t Time) Coins {\n    return pva.OriginalVesting - cva.GetVestedCoins(t)\n}\n")),(0,i.yg)("h4",{id:"delayeddiscrete-vesting-accounts"},"Delayed/Discrete Vesting Accounts"),(0,i.yg)("p",null,"Delayed vesting accounts are easier to reason about as they only have the full amount vesting up until a certain time, then all the coins become vested (unlocked). This does not include any unlocked coins the account may have initially."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (dva DelayedVestingAccount) GetVestedCoins(t Time) Coins {\n    if t >= dva.EndTime {\n        return dva.OriginalVesting\n    }\n\n    return ZeroCoins\n}\n\nfunc (dva DelayedVestingAccount) GetVestingCoins(t Time) Coins {\n    return dva.OriginalVesting - dva.GetVestedCoins(t)\n}\n")),(0,i.yg)("h3",{id:"transferringsending"},"Transferring/Sending"),(0,i.yg)("p",null,"At any given time, a vesting account may transfer: ",(0,i.yg)("inlineCode",{parentName:"p"},"min((BC + DV) - V, BC)"),"."),(0,i.yg)("p",null,"In other words, a vesting account may transfer the minimum of the base account balance and the base account balance plus the number of currently delegated vesting coins less the number of coins vested so far."),(0,i.yg)("p",null,"However, given that account balances are tracked via the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," module and that we want to avoid loading the entire account balance, we can instead determine the locked balance, which can be defined as ",(0,i.yg)("inlineCode",{parentName:"p"},"max(V - DV, 0)"),", and infer the spendable balance from that."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (va VestingAccount) LockedCoins(t Time) Coins {\n   return max(va.GetVestingCoins(t) - va.DelegatedVesting, 0)\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," ",(0,i.yg)("inlineCode",{parentName:"p"},"ViewKeeper")," can then provide APIs to determine locked and spendable coins for any account:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) LockedCoins(ctx Context, addr AccAddress) Coins {\n    acc := k.GetAccount(ctx, addr)\n    if acc != nil {\n        if acc.IsVesting() {\n            return acc.LockedCoins(ctx.HeaderInfo().Time)\n        }\n    }\n\n    // non-vesting accounts do not have any locked coins\n    return NewCoins()\n}\n")),(0,i.yg)("h4",{id:"keepershandlers"},"Keepers/Handlers"),(0,i.yg)("p",null,"The corresponding ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," keeper should appropriately handle sending coins based on if the account is a vesting account or not."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) SendCoins(ctx Context, from Account, to Account, amount Coins) {\n    bc := k.GetBalances(ctx, from)\n    v := k.LockedCoins(ctx, from)\n\n    spendable := bc - v\n    newCoins := spendable - amount\n    assert(newCoins >= 0)\n\n    from.SetBalance(newCoins)\n    to.AddBalance(amount)\n\n    // save balances...\n}\n")),(0,i.yg)("h3",{id:"delegating"},"Delegating"),(0,i.yg)("p",null,"For a vesting account attempting to delegate ",(0,i.yg)("inlineCode",{parentName:"p"},"D")," coins, the following is performed:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Verify ",(0,i.yg)("inlineCode",{parentName:"li"},"BC >= D > 0")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"X := min(max(V - DV, 0), D)")," (portion of ",(0,i.yg)("inlineCode",{parentName:"li"},"D")," that is vesting)"),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"Y := D - X")," (portion of ",(0,i.yg)("inlineCode",{parentName:"li"},"D")," that is free)"),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"DV += X")),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"DF += Y"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (va VestingAccount) TrackDelegation(t Time, balance Coins, amount Coins) {\n    assert(balance <= amount)\n    x := min(max(va.GetVestingCoins(t) - va.DelegatedVesting, 0), amount)\n    y := amount - x\n\n    va.DelegatedVesting += x\n    va.DelegatedFree += y\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note")," ",(0,i.yg)("inlineCode",{parentName:"p"},"TrackDelegation")," only modifies the ",(0,i.yg)("inlineCode",{parentName:"p"},"DelegatedVesting")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DelegatedFree")," fields, so upstream callers MUST modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"Coins")," field by subtracting ",(0,i.yg)("inlineCode",{parentName:"p"},"amount"),"."),(0,i.yg)("h4",{id:"keepershandlers-1"},"Keepers/Handlers"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func DelegateCoins(t Time, from Account, amount Coins) {\n    if isVesting(from) {\n        from.TrackDelegation(t, amount)\n    } else {\n        from.SetBalance(sc - amount)\n    }\n\n    // save account...\n}\n")),(0,i.yg)("h3",{id:"undelegating"},"Undelegating"),(0,i.yg)("p",null,"For a vesting account attempting to undelegate ",(0,i.yg)("inlineCode",{parentName:"p"},"D")," coins, the following is performed:"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"NOTE: ",(0,i.yg)("inlineCode",{parentName:"p"},"DV < D")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"(DV + DF) < D")," may be possible due to quirks in the rounding of delegation/undelegation logic.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Verify ",(0,i.yg)("inlineCode",{parentName:"li"},"D > 0")),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"X := min(DF, D)")," (portion of ",(0,i.yg)("inlineCode",{parentName:"li"},"D")," that should become free, prioritizing free coins)"),(0,i.yg)("li",{parentName:"ol"},"Compute ",(0,i.yg)("inlineCode",{parentName:"li"},"Y := min(DV, D - X)")," (portion of ",(0,i.yg)("inlineCode",{parentName:"li"},"D")," that should remain vesting)"),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"DF -= X")),(0,i.yg)("li",{parentName:"ol"},"Set ",(0,i.yg)("inlineCode",{parentName:"li"},"DV -= Y"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (cva ContinuousVestingAccount) TrackUndelegation(amount Coins) {\n    x := min(cva.DelegatedFree, amount)\n    y := amount - x\n\n    cva.DelegatedFree -= x\n    cva.DelegatedVesting -= y\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note")," ",(0,i.yg)("inlineCode",{parentName:"p"},"TrackUnDelegation")," only modifies the ",(0,i.yg)("inlineCode",{parentName:"p"},"DelegatedVesting")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DelegatedFree")," fields, so upstream callers MUST modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"Coins")," field by adding ",(0,i.yg)("inlineCode",{parentName:"p"},"amount"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note"),": If a delegation is slashed, the continuous vesting account ends up with an excess ",(0,i.yg)("inlineCode",{parentName:"p"},"DV")," amount, even after all its coins have vested. This is because undelegating free coins are prioritized."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note"),": The undelegation (bond refund) amount may exceed the delegated vesting (bond) amount due to the way undelegation truncates the bond refund, which can increase the validator's exchange rate (tokens/shares) slightly if the undelegated tokens are non-integral."),(0,i.yg)("h4",{id:"keepershandlers-2"},"Keepers/Handlers"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func UndelegateCoins(to Account, amount Coins) {\n    if isVesting(to) {\n        if to.DelegatedFree + to.DelegatedVesting >= amount {\n            to.TrackUndelegation(amount)\n            // save account ...\n        }\n    } else {\n        AddBalance(to, amount)\n        // save account...\n    }\n}\n")),(0,i.yg)("h2",{id:"keepers--handlers"},"Keepers & Handlers"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"VestingAccount")," implementations reside in ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth"),". However, any keeper in a module (e.g. staking in ",(0,i.yg)("inlineCode",{parentName:"p"},"x/staking"),") wishing to potentially utilize any vesting coins, must call explicit methods on the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," keeper (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"DelegateCoins"),") opposed to ",(0,i.yg)("inlineCode",{parentName:"p"},"SendCoins")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SubtractCoins"),"."),(0,i.yg)("p",null,"In addition, the vesting account should also be able to spend any coins it receives from other users. Thus, the bank module's ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," handler should error if a vesting account is trying to send an amount that exceeds their unlocked coin amount."),(0,i.yg)("p",null,"See the above specification for full implementation details."),(0,i.yg)("h2",{id:"genesis-initialization"},"Genesis Initialization"),(0,i.yg)("p",null,"To initialize both vesting and non-vesting accounts, the ",(0,i.yg)("inlineCode",{parentName:"p"},"GenesisAccount")," struct includes new fields: ",(0,i.yg)("inlineCode",{parentName:"p"},"Vesting"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"StartTime"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"EndTime"),". Accounts meant to be of type ",(0,i.yg)("inlineCode",{parentName:"p"},"BaseAccount")," or any non-vesting type have ",(0,i.yg)("inlineCode",{parentName:"p"},"Vesting = false"),". The genesis initialization logic (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"initFromGenesisState"),") must parse and return the correct accounts accordingly based off of these fields."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type GenesisAccount struct {\n    // ...\n\n    // vesting account fields\n    OriginalVesting  sdk.Coins `json:"original_vesting"`\n    DelegatedFree    sdk.Coins `json:"delegated_free"`\n    DelegatedVesting sdk.Coins `json:"delegated_vesting"`\n    StartTime        int64     `json:"start_time"`\n    EndTime          int64     `json:"end_time"`\n}\n\nfunc ToAccount(gacc GenesisAccount) Account {\n    bacc := NewBaseAccount(gacc)\n\n    if gacc.OriginalVesting > 0 {\n        if ga.StartTime != 0 && ga.EndTime != 0 {\n            // return a continuous vesting account\n        } else if ga.EndTime != 0 {\n            // return a delayed vesting account\n        } else {\n            // invalid genesis vesting account provided\n            panic()\n        }\n    }\n\n    return bacc\n}\n')),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("h3",{id:"simple"},"Simple"),(0,i.yg)("p",null,"Given a continuous vesting account with 10 vesting coins."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"OV = 10\nDF = 0\nDV = 0\nBC = 10\nV = 10\nV' = 0\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Immediately receives 1 coin"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"BC = 11\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Time passes, 2 coins vest"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"V = 8\nV' = 2\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Delegates 4 coins to validator A"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"DV = 4\nBC = 7\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Sends 3 coins"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"BC = 4\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"More time passes, 2 more coins vest"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"V = 6\nV' = 4\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Sends 2 coins. At this point the account cannot send anymore until further\ncoins vest or it receives additional coins. It can still however, delegate."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"```text\nBC = 2\n```\n")))),(0,i.yg)("h3",{id:"slashing"},"Slashing"),(0,i.yg)("p",null,"Same initial starting conditions as the simple example."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Time passes, 5 coins vest"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"V = 5\nV' = 5\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Delegate 5 coins to validator A"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"DV = 5\nBC = 5\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Delegate 5 coins to validator B"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"DF = 5\nBC = 0\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Validator A gets slashed by 50%, making the delegation to A now worth 2.5 coins")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Undelegate from validator A (2.5 coins)"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"DF = 5 - 2.5 = 2.5\nBC = 0 + 2.5 = 2.5\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Undelegate from validator B (5 coins). The account at this point can only\nsend 2.5 coins unless it receives more coins or until more coins vest.\nIt can still however, delegate."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"```text\nDV = 5 - 2.5 = 2.5\nDF = 2.5 - 2.5 = 0\nBC = 2.5 + 5 = 7.5\n```\n\nNotice how we have an excess amount of `DV`.\n")))),(0,i.yg)("h3",{id:"periodic-vesting"},"Periodic Vesting"),(0,i.yg)("p",null,"A vesting account is created where 100 tokens will be released over 1 year, with\n1/4 of tokens vesting each quarter. The vesting schedule would be as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"Periods:\n- amount: 25stake, length: 7884000\n- amount: 25stake, length: 7884000\n- amount: 25stake, length: 7884000\n- amount: 25stake, length: 7884000\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"OV = 100\nDF = 0\nDV = 0\nBC = 100\nV = 100\nV' = 0\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Immediately receives 1 coin"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"BC = 101\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Vesting period 1 passes, 25 coins vest"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"V = 75\nV' = 25\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"During vesting period 2, 5 coins are transferred and 5 coins are delegated"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"DV = 5\nBC = 91\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Vesting period 2 passes, 25 coins vest"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"V = 50\nV' = 50\n")))),(0,i.yg)("h2",{id:"glossary"},"Glossary"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OriginalVesting: The amount of coins (per denomination) that are initially\npart of a vesting account. These coins are set at genesis."),(0,i.yg)("li",{parentName:"ul"},"StartTime: The BFT time at which a vesting account starts to vest."),(0,i.yg)("li",{parentName:"ul"},"EndTime: The BFT time at which a vesting account is fully vested."),(0,i.yg)("li",{parentName:"ul"},"DelegatedFree: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that have been fully vested at time of delegation."),(0,i.yg)("li",{parentName:"ul"},"DelegatedVesting: The tracked amount of coins (per denomination) that are\ndelegated from a vesting account that were vesting at time of delegation."),(0,i.yg)("li",{parentName:"ul"},"ContinuousVestingAccount: A vesting account implementation that vests coins\nlinearly over time."),(0,i.yg)("li",{parentName:"ul"},"DelayedVestingAccount: A vesting account implementation that only fully vests\nall coins at a given time."),(0,i.yg)("li",{parentName:"ul"},"PeriodicVestingAccount: A vesting account implementation that vests coins\naccording to a custom vesting schedule."),(0,i.yg)("li",{parentName:"ul"},"PermanentLockedAccount: It does not ever release coins, locking them indefinitely.\nCoins in this account can still be used for delegating and for governance votes even while locked.")))}p.isMDXComponent=!0}}]);