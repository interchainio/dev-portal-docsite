"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[16034],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(y,l(l({ref:n},d),{},{components:t})):a.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(58168),i=(t(96540),t(15680));const o={},l="ADR 004: Split Denomination Keys",r={unversionedId:"build/architecture/adr-004-split-denomination-keys",id:"version-0.50/build/architecture/adr-004-split-denomination-keys",title:"ADR 004: Split Denomination Keys",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-004-split-denomination-keys.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-004-split-denomination-keys",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/architecture/adr-004-split-denomination-keys",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 3: Dynamic Capability Store",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/architecture/adr-003-dynamic-capability-store"},next:{title:"ADR 006: Secret Store Replacement",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/architecture/adr-006-secret-store-replacement"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Glossary",id:"glossary",level:3},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Account interface (x/auth)",id:"account-interface-xauth",level:3},{value:"Bank keeper (x/bank)",id:"bank-keeper-xbank",level:3},{value:"Supply module",id:"supply-module",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-004-split-denomination-keys"},"ADR 004: Split Denomination Keys"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2020-01-08: Initial version"),(0,i.yg)("li",{parentName:"ul"},"2020-01-09: Alterations to handle vesting accounts"),(0,i.yg)("li",{parentName:"ul"},"2020-01-14: Updates from review feedback"),(0,i.yg)("li",{parentName:"ul"},"2020-01-30: Updates from implementation")),(0,i.yg)("h3",{id:"glossary"},"Glossary"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"denom / denomination key -- unique token identifier.")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"With permissionless IBC, anyone will be able to send arbitrary denominations to any other account. Currently, all non-zero balances are stored along with the account in an ",(0,i.yg)("inlineCode",{parentName:"p"},"sdk.Coins")," struct, which creates a potential denial-of-service concern, as too many denominations will become expensive to load & store each time the account is modified. See issues ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/5467"},"5467")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/4982"},"4982")," for additional context."),(0,i.yg)("p",null,"Simply rejecting incoming deposits after a denomination count limit doesn't work, since it opens up a griefing vector: someone could send a user lots of nonsensical coins over IBC, and then prevent the user from receiving real denominations (such as staking rewards)."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"Balances shall be stored per-account & per-denomination under a denomination- and account-unique key, thus enabling O(1) read & write access to the balance of a particular account in a particular denomination."),(0,i.yg)("h3",{id:"account-interface-xauth"},"Account interface (x/auth)"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GetCoins()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SetCoins()")," will be removed from the account interface, since coin balances will\nnow be stored in & managed by the bank module."),(0,i.yg)("p",null,"The vesting account interface will replace ",(0,i.yg)("inlineCode",{parentName:"p"},"SpendableCoins")," in favor of ",(0,i.yg)("inlineCode",{parentName:"p"},"LockedCoins")," which does\nnot require the account balance anymore. In addition, ",(0,i.yg)("inlineCode",{parentName:"p"},"TrackDelegation()"),"  will now accept the\naccount balance of all tokens denominated in the vesting balance instead of loading the entire\naccount balance."),(0,i.yg)("p",null,"Vesting accounts will continue to store original vesting, delegated free, and delegated\nvesting coins (which is safe since these cannot contain arbitrary denominations)."),(0,i.yg)("h3",{id:"bank-keeper-xbank"},"Bank keeper (x/bank)"),(0,i.yg)("p",null,"The following APIs will be added to the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," keeper:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetAllBalances(ctx Context, addr AccAddress) Coins")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetBalance(ctx Context, addr AccAddress, denom string) Coin")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SetBalance(ctx Context, addr AccAddress, coin Coin)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"LockedCoins(ctx Context, addr AccAddress) Coins")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SpendableCoins(ctx Context, addr AccAddress) Coins"))),(0,i.yg)("p",null,"Additional APIs may be added to facilitate iteration and auxiliary functionality not essential to\ncore functionality or persistence."),(0,i.yg)("p",null,"Balances will be stored first by the address, then by the denomination (the reverse is also possible,\nbut retrieval of all balances for a single account is presumed to be more frequent):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'var BalancesPrefix = []byte("balances")\n\nfunc (k Keeper) SetBalance(ctx Context, addr AccAddress, balance Coin) error {\n  if !balance.IsValid() {\n    return err\n  }\n\n  store := ctx.KVStore(k.storeKey)\n  balancesStore := prefix.NewStore(store, BalancesPrefix)\n  accountStore := prefix.NewStore(balancesStore, addr.Bytes())\n\n  bz := Marshal(balance)\n  accountStore.Set([]byte(balance.Denom), bz)\n\n  return nil\n}\n')),(0,i.yg)("p",null,"This will result in the balances being indexed by the byte representation of\n",(0,i.yg)("inlineCode",{parentName:"p"},"balances/{address}/{denom}"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DelegateCoins()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"UndelegateCoins()")," will be altered to only load each individual\naccount balance by denomination found in the (un)delegation amount. As a result,\nany mutations to the account balance by will made by denomination."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SubtractCoins()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"AddCoins()")," will be altered to read & write the balances\ndirectly instead of calling ",(0,i.yg)("inlineCode",{parentName:"p"},"GetCoins()")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"SetCoins()")," (which no longer exist)."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"trackDelegation()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"trackUndelegation()")," will be altered to no longer update\naccount balances."),(0,i.yg)("p",null,"External APIs will need to scan all balances under an account to retain backwards-compatibility. It\nis advised that these APIs use ",(0,i.yg)("inlineCode",{parentName:"p"},"GetBalance")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SetBalance")," instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"GetAllBalances")," when\npossible as to not load the entire account balance."),(0,i.yg)("h3",{id:"supply-module"},"Supply module"),(0,i.yg)("p",null,"The supply module, in order to implement the total supply invariant, will now need\nto scan all accounts & call ",(0,i.yg)("inlineCode",{parentName:"p"},"GetAllBalances")," using the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," Keeper, then sum\nthe balances and check that they match the expected total supply."),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Accepted."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"O(1) reads & writes of balances (with respect to the number of denominations for\nwhich an account has non-zero balances). Note, this does not relate to the actual\nI/O cost, rather the total number of direct reads needed.")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Slightly less efficient reads/writes when reading & writing all balances of a\nsingle account in a transaction.")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("p",null,"None in particular."),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Ref: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4982"},"https://github.com/cosmos/cosmos-sdk/issues/4982")),(0,i.yg)("li",{parentName:"ul"},"Ref: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/5467"},"https://github.com/cosmos/cosmos-sdk/issues/5467")),(0,i.yg)("li",{parentName:"ul"},"Ref: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/5492"},"https://github.com/cosmos/cosmos-sdk/issues/5492"))))}p.isMDXComponent=!0}}]);