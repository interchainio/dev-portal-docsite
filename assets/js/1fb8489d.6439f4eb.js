"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[5519],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=a,u=g["".concat(l,".").concat(h)]||g[h]||c[h]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"How to Upgrade IBC Chains and their Clients",sidebar_label:"How to Upgrade IBC Chains and their Clients",sidebar_position:1,slug:"/ibc/upgrades/quick-guide"},o="How to Upgrade IBC Chains and their Clients",s={unversionedId:"ibc/upgrades/quick-guide",id:"version-v6.3.x/ibc/upgrades/quick-guide",title:"How to Upgrade IBC Chains and their Clients",description:"Learn how to upgrade your chain and counterparty clients.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/01-ibc/05-upgrades/01-quick-guide.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/quick-guide",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/upgrades/quick-guide",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:1,frontMatter:{title:"How to Upgrade IBC Chains and their Clients",sidebar_label:"How to Upgrade IBC Chains and their Clients",sidebar_position:1,slug:"/ibc/upgrades/quick-guide"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/upgrades/intro"},next:{title:"IBC Client Developer Guide to Upgrades",permalink:"/dev-portal-docsite/ibc-go/v6.3.x/ibc/upgrades/developer-guide"}},l={},p=[{value:"IBC Client Breaking Upgrades",id:"ibc-client-breaking-upgrades",level:2},{value:"Step-by-Step Upgrade Process for SDK chains",id:"step-by-step-upgrade-process-for-sdk-chains",level:3},{value:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients",id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",level:3}],d={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"how-to-upgrade-ibc-chains-and-their-clients"},"How to Upgrade IBC Chains and their Clients"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Learn how to upgrade your chain and counterparty clients. ")),(0,a.yg)("p",null,"The information in this doc for upgrading chains is relevant to SDK chains. However, the guide for counterparty clients is relevant to any Tendermint client that enables upgrades."),(0,a.yg)("h2",{id:"ibc-client-breaking-upgrades"},"IBC Client Breaking Upgrades"),(0,a.yg)("p",null,"IBC-connected chains must perform an IBC upgrade if their upgrade will break counterparty IBC clients. The current IBC protocol supports upgrading tendermint chains for a specific subset of IBC-client-breaking upgrades. Here is the exhaustive list of IBC client-breaking upgrades and whether the IBC protocol currently supports such upgrades."),(0,a.yg)("p",null,"IBC currently does ",(0,a.yg)("strong",{parentName:"p"},"NOT")," support unplanned upgrades. All of the following upgrades must be planned and committed to in advance by the upgrading chain, in order for counterparty clients to maintain their connections securely."),(0,a.yg)("p",null,"Note: Since upgrades are only implemented for Tendermint clients, this doc only discusses upgrades on Tendermint chains that would break counterparty IBC Tendermint Clients."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Changing the Chain-ID: ",(0,a.yg)("strong",{parentName:"li"},"Supported")),(0,a.yg)("li",{parentName:"ol"},"Changing the UnbondingPeriod: ",(0,a.yg)("strong",{parentName:"li"},"Partially Supported"),", chains may increase the unbonding period with no issues. However, decreasing the unbonding period may irreversibly break some counterparty clients. Thus, it is ",(0,a.yg)("strong",{parentName:"li"},"not recommended")," that chains reduce the unbonding period."),(0,a.yg)("li",{parentName:"ol"},"Changing the height (resetting to 0): ",(0,a.yg)("strong",{parentName:"li"},"Supported"),", so long as chains remember to increment the revision number in their chain-id."),(0,a.yg)("li",{parentName:"ol"},"Changing the ProofSpecs: ",(0,a.yg)("strong",{parentName:"li"},"Supported"),", this should be changed if the proof structure needed to verify IBC proofs is changed across the upgrade. Ex: Switching from an IAVL store, to a SimpleTree Store"),(0,a.yg)("li",{parentName:"ol"},"Changing the UpgradePath: ",(0,a.yg)("strong",{parentName:"li"},"Supported"),", this might involve changing the key under which upgraded clients and consensus states are stored in the upgrade store, or even migrating the upgrade store itself."),(0,a.yg)("li",{parentName:"ol"},"Migrating the IBC store: ",(0,a.yg)("strong",{parentName:"li"},"Unsupported"),", as the IBC store location is negotiated by the connection."),(0,a.yg)("li",{parentName:"ol"},"Upgrading to a backwards compatible version of IBC: Supported"),(0,a.yg)("li",{parentName:"ol"},"Upgrading to a non-backwards compatible version of IBC: ",(0,a.yg)("strong",{parentName:"li"},"Unsupported"),", as IBC version is negotiated on connection handshake."),(0,a.yg)("li",{parentName:"ol"},"Changing the Tendermint LightClient algorithm: ",(0,a.yg)("strong",{parentName:"li"},"Partially Supported"),". Changes to the light client algorithm that do not change the ClientState or ConsensusState struct may be supported, provided that the counterparty is also upgraded to support the new light client algorithm. Changes that require updating the ClientState and ConsensusState structs themselves are theoretically possible by providing a path to translate an older ClientState struct into the new ClientState struct; however this is not currently implemented.")),(0,a.yg)("h3",{id:"step-by-step-upgrade-process-for-sdk-chains"},"Step-by-Step Upgrade Process for SDK chains"),(0,a.yg)("p",null,"If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the list above and then execute the upgrade process described below in order to prevent counterparty clients from breaking."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a 02-client ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v6.2.0/proto/ibc/core/client/v1/client.proto#L58-L77"},(0,a.yg)("inlineCode",{parentName:"a"},"UpgradeProposal"))," with an ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradePlan")," and a new IBC ClientState in the ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradedClientState")," field. Note that the ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradePlan")," must specify an upgrade height ",(0,a.yg)("strong",{parentName:"li"},"only")," (no upgrade time), and the ",(0,a.yg)("inlineCode",{parentName:"li"},"ClientState")," should only include the fields common to all valid clients and zero out any client-customizable fields (such as TrustingPeriod)."),(0,a.yg)("li",{parentName:"ol"},"Vote on and pass the ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradeProposal"))),(0,a.yg)("p",null,"Upon the ",(0,a.yg)("inlineCode",{parentName:"p"},"UpgradeProposal")," passing, the upgrade module will commit the UpgradedClient under the key: ",(0,a.yg)("inlineCode",{parentName:"p"},"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient"),". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: ",(0,a.yg)("inlineCode",{parentName:"p"},"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState"),"."),(0,a.yg)("p",null,"Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the ",(0,a.yg)("inlineCode",{parentName:"p"},"UpgradedClient")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"UpgradedConsensusState")," against this last block and upgrade the counterparty client."),(0,a.yg)("h3",{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"},"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients"),(0,a.yg)("p",null,"Once the upgrading chain has committed to upgrading, relayers must wait till the chain halts at the upgrade height before upgrading counterparty clients. This is because chains may reschedule or cancel upgrade plans before they occur. Thus, relayers must wait till the chain reaches the upgrade height and halts before they can be sure the upgrade will take place."),(0,a.yg)("p",null,"Thus, the upgrade process for relayers trying to upgrade the counterparty clients is as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Wait for the upgrading chain to reach the upgrade height and halt"),(0,a.yg)("li",{parentName:"ol"},"Query a full node for the proofs of ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradedClient")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradedConsensusState")," at the last height of the old chain."),(0,a.yg)("li",{parentName:"ol"},"Update the counterparty client to the last height of the old chain using the ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateClient")," msg."),(0,a.yg)("li",{parentName:"ol"},"Submit an ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradeClient")," msg to the counterparty chain with the ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradedClient"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"UpgradedConsensusState")," and their respective proofs."),(0,a.yg)("li",{parentName:"ol"},"Submit an ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateClient")," msg to the counterparty chain with a header from the new upgraded chain.")),(0,a.yg)("p",null,"The Tendermint client on the counterparty chain will verify that the upgrading chain did indeed commit to the upgraded client and upgraded consensus state at the upgrade height (since the upgrade height is included in the key). If the proofs are verified against the upgrade height, then the client will upgrade to the new client while retaining all of its client-customized fields. Thus, it will retain its old TrustingPeriod, TrustLevel, MaxClockDrift, etc; while adopting the new chain-specified fields such as UnbondingPeriod, ChainId, UpgradePath, etc. Note, this can lead to an invalid client since the old client-chosen fields may no longer be valid given the new chain-chosen fields. Upgrading chains should try to avoid these situations by not altering parameters that can break old clients. For an example, see the UnbondingPeriod example in the supported upgrades section."),(0,a.yg)("p",null,"The upgraded consensus state will serve purely as a basis of trust for future ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClientMsgs")," and will not contain a consensus root to perform proof verification against. Thus, relayers must submit an ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClientMsg")," with a header from the new chain so that the connection can be used for proof verification again."))}c.isMDXComponent=!0}}]);