"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[28671],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const r={},s="ADR 034: Account Rekeying",i={unversionedId:"docs/build/architecture/adr-034-account-rekeying",id:"docs/build/architecture/adr-034-account-rekeying",title:"ADR 034: Account Rekeying",description:"Changelog",source:"@site/cosmos-sdk/docs/build/architecture/adr-034-account-rekeying.md",sourceDirName:"docs/build/architecture",slug:"/docs/build/architecture/adr-034-account-rekeying",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-034-account-rekeying",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 033: Protobuf-based Inter-Module Communication",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-033-protobuf-inter-module-comm"},next:{title:"ADR 035: Rosetta API Support",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-035-rosetta-api-support"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-034-account-rekeying"},"ADR 034: Account Rekeying"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"30-09-2020: Initial Draft")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"PROPOSED"),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"Account rekeying is a process hat allows an account to replace its authentication pubkey with a new one."),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"Currently, in the Cosmos SDK, the address of an auth ",(0,o.yg)("inlineCode",{parentName:"p"},"BaseAccount")," is based on the hash of the public key.  Once an account is created, the public key for the account is set in stone, and cannot be changed.  This can be a problem for users, as key rotation is a useful security practice, but is not possible currently.  Furthermore, as multisigs are a type of pubkey, once a multisig for an account is set, it can not be updated.  This is problematic, as multisigs are often used by organizations or companies, who may need to change their set of multisig signers for internal reasons."),(0,o.yg)("p",null,'Transferring all the assets of an account to a new account with the updated pubkey is not sufficient, because some "engagements" of an account are not easily transferable.  For example, in staking, to transfer bonded Atoms, an account would have to unbond all delegations and wait the three week unbonding period.  Even more significantly, for validator operators, ownership over a validator is not transferrable at all, meaning that the operator key for a validator can never be updated, leading to poor operational security for validators.'),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"We propose the addition of a new feature to ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth")," that allows accounts to update the public key associated with their account, while keeping the address the same."),(0,o.yg)("p",null,"This is possible because the Cosmos SDK ",(0,o.yg)("inlineCode",{parentName:"p"},"BaseAccount")," stores the public key for an account in state, instead of making the assumption that the public key is included in the transaction (whether explicitly or implicitly through the signature) as in other blockchains such as Bitcoin and Ethereum.  Because the public key is stored on chain, it is okay for the public key to not hash to the address of an account, as the address is not pertinent to the signature checking process."),(0,o.yg)("p",null,"To build this system, we design a new Msg type as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"service Msg {\n    rpc ChangePubKey(MsgChangePubKey) returns (MsgChangePubKeyResponse);\n}\n\nmessage MsgChangePubKey {\n  string address = 1;\n  google.protobuf.Any pub_key = 2;\n}\n\nmessage MsgChangePubKeyResponse {}\n")),(0,o.yg)("p",null,"The MsgChangePubKey transaction needs to be signed by the existing pubkey in state."),(0,o.yg)("p",null,"Once, approved, the handler for this message type, which takes in the AccountKeeper, will update the in-state pubkey for the account and replace it with the pubkey from the Msg."),(0,o.yg)("p",null,"An account that has had its pubkey changed cannot be automatically pruned from state.  This is because if pruned, the original pubkey of the account would be needed to recreate the same address, but the owner of the address may not have the original pubkey anymore.  Currently, we do not automatically prune any accounts anyways, but we would like to keep this option open the road (this is the purpose of account numbers).  To resolve this, we charge an additional gas fee for this operation to compensate for this externality (this bound gas amount is configured as parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"PubKeyChangeCost"),"). The bonus gas is charged inside the handler, using the ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsumeGas")," function.  Furthermore, in the future, we can allow accounts that have rekeyed manually prune themselves using a new Msg type such as ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgDeleteAccount"),".  Manually pruning accounts can give a gas refund as an incentive for performing the action."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'    amount := ak.GetParams(ctx).PubKeyChangeCost\n    ctx.GasMeter().ConsumeGas(amount, "pubkey change fee")\n')),(0,o.yg)("p",null,"Every time a key for an address is changed, we will store a log of this change in the state of the chain, thus creating a stack of all previous keys for an address and the time intervals for which they were active.  This allows dapps and clients to easily query past keys for an account which may be useful for features such as verifying timestamped off-chain signed messages."),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Will allow users and validator operators to employ better operational security practices with key rotation."),(0,o.yg)("li",{parentName:"ul"},"Will allow organizations or groups to easily change and add/remove multisig signers.")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("p",null,"Breaks the current assumed relationship between address and pubkeys as H(pubkey) = address. This has a couple of consequences."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This makes wallets that support this feature more complicated. For example, if an address on chain was updated, the corresponding key in the CLI wallet also needs to be updated."),(0,o.yg)("li",{parentName:"ul"},"Cannot automatically prune accounts with 0 balance that have had their pubkey changed.")),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"While the purpose of this is intended to allow the owner of an account to update to a new pubkey they own, this could technically also be used to transfer ownership of an account to a new owner.  For example, this could be use used to sell a staked position without unbonding or an account that has vesting tokens.  However, the friction of this is very high as this would essentially have to be done as a very specific OTC trade. Furthermore, additional constraints could be added to prevent accounts with Vesting tokens to use this feature."),(0,o.yg)("li",{parentName:"ul"},"Will require that PubKeys for an account are included in the genesis exports.")),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://algorandtechnologies.com/news/announcing-rekeying"},"https://algorandtechnologies.com/news/announcing-rekeying"))))}p.isMDXComponent=!0}}]);