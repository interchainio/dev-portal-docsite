"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[78893],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(a),p=r,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(58168),r=(a(96540),a(15680));const o={},i="ADR 14: Proportional Slashing",l={unversionedId:"architecture/adr-014-proportional-slashing",id:"version-0.50/architecture/adr-014-proportional-slashing",title:"ADR 14: Proportional Slashing",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/architecture/adr-014-proportional-slashing.md",sourceDirName:"architecture",slug:"/architecture/adr-014-proportional-slashing",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-014-proportional-slashing",draft:!1,tags:[],version:"0.50",frontMatter:{}},s={},h=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Design",id:"design",level:3},{value:"Parameterization",id:"parameterization",level:4},{value:"Correlation across non-sybil validators",id:"correlation-across-non-sybil-validators",level:4},{value:"Griefing",id:"griefing",level:4},{value:"Implementation",id:"implementation",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3}],c={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-14-proportional-slashing"},"ADR 14: Proportional Slashing"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2019-10-15: Initial draft"),(0,r.yg)("li",{parentName:"ul"},"2020-05-25: Removed correlation root slashing"),(0,r.yg)("li",{parentName:"ul"},"2020-07-01: Updated to include S-curve function instead of linear")),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"In Proof of Stake-based chains, centralization of consensus power amongst a small set of validators can cause harm to the network due to increased risk of censorship, liveness failure, fork attacks, etc.  However, while this centralization causes a negative externality to the network, it is not directly felt by the delegators contributing towards delegating towards already large validators.  We would like a way to pass on the negative externality cost of centralization onto those large validators and their delegators."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("h3",{id:"design"},"Design"),(0,r.yg)("p",null,"To solve this problem, we will implement a procedure called Proportional Slashing.  The desire is that the larger a validator is, the more they should be slashed.  The first naive attempt is to make a validator's slash percent proportional to their share of consensus voting power."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"slash_amount = k * power // power is the faulting validator's voting power and k is some on-chain constant\n")),(0,r.yg)("p",null,"However, this will incentivize validators with large amounts of stake to split up their voting power amongst accounts (sybil attack), so that if they fault, they all get slashed at a lower percent.  The solution to this is to take into account not just a validator's own voting percentage, but also the voting percentage of all the other validators who get slashed in a specified time frame."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"slash_amount = k * (power_1 + power_2 + ... + power_n) // where power_i is the voting power of the ith validator faulting in the specified time frame and k is some on-chain constant\n")),(0,r.yg)("p",null,"Now, if someone splits a validator of 10% into two validators of 5% each which both fault, then they both fault in the same time frame, they both will get slashed at the sum 10% amount."),(0,r.yg)("p",null,"However in practice, we likely don't want a linear relation between amount of stake at fault, and the percentage of stake to slash. In particular, solely 5% of stake double signing effectively did nothing to majorly threaten security, whereas 30% of stake being at fault clearly merits a large slashing factor, due to being very close to the point at which Tendermint security is threatened. A linear relation would require a factor of 6 gap between these two, whereas the difference in risk posed to the network is much larger. We propose using S-curves (formally ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logistic_function"},"logistic functions")," to solve this). S-Curves capture the desired criterion quite well. They allow the slashing factor to be minimal for small values, and then grow very rapidly near some threshold point where the risk posed becomes notable."),(0,r.yg)("h4",{id:"parameterization"},"Parameterization"),(0,r.yg)("p",null,"This requires parameterizing a logistic function. It is very well understood how to parameterize this. It has four parameters:"),(0,r.yg)("p",null,"1) A minimum slashing factor\n2) A maximum slashing factor\n3) The inflection point of the S-curve (essentially where do you want to center the S)\n4) The rate of growth of the S-curve (How elongated is the S)"),(0,r.yg)("h4",{id:"correlation-across-non-sybil-validators"},"Correlation across non-sybil validators"),(0,r.yg)("p",null,"One will note, that this model doesn't differentiate between multiple validators run by the same operators vs validators run by different operators.  This can be seen as an additional benefit in fact.  It incentivizes validators to differentiate their setups from other validators, to avoid having correlated faults with them or else they risk a higher slash.  So for example, operators should avoid using the same popular cloud hosting platforms or using the same Staking as a Service providers.  This will lead to a more resilient and decentralized network."),(0,r.yg)("h4",{id:"griefing"},"Griefing"),(0,r.yg)("p",null,"Griefing, the act of intentionally getting oneself slashed in order to make another's slash worse, could be a concern here.  However, using the protocol described here, the attacker also gets equally impacted by the grief as the victim, so it would not provide much benefit to the griefer."),(0,r.yg)("h3",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,'In the slashing module, we will add two queues that will track all of the recent slash events.  For double sign faults, we will define "recent slashes" as ones that have occurred within the last ',(0,r.yg)("inlineCode",{parentName:"p"},"unbonding period"),'.  For liveness faults, we will define "recent slashes" as ones that have occurred within the last ',(0,r.yg)("inlineCode",{parentName:"p"},"jail period"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type SlashEvent struct {\n    Address                     sdk.ValAddress\n    ValidatorVotingPercent      sdk.Dec\n    SlashedSoFar                sdk.Dec\n}\n")),(0,r.yg)("p",null,'These slash events will be pruned from the queue once they are older than their respective "recent slash period".'),(0,r.yg)("p",null,"Whenever a new slash occurs, a ",(0,r.yg)("inlineCode",{parentName:"p"},"SlashEvent")," struct is created with the faulting validator's voting percent and a ",(0,r.yg)("inlineCode",{parentName:"p"},"SlashedSoFar")," of 0.  Because recent slash events are pruned before the unbonding period and unjail period expires, it should not be possible for the same validator to have multiple SlashEvents in the same Queue at the same time."),(0,r.yg)("p",null,"We then will iterate over all the SlashEvents in the queue, adding their ",(0,r.yg)("inlineCode",{parentName:"p"},"ValidatorVotingPercent"),' to calculate the new percent to slash all the validators in the queue at, using the "Square of Sum of Roots" formula introduced above.'),(0,r.yg)("p",null,"Once we have the ",(0,r.yg)("inlineCode",{parentName:"p"},"NewSlashPercent"),", we then iterate over all the ",(0,r.yg)("inlineCode",{parentName:"p"},"SlashEvent"),"s in the queue once again, and if ",(0,r.yg)("inlineCode",{parentName:"p"},"NewSlashPercent > SlashedSoFar")," for that SlashEvent, we call the ",(0,r.yg)("inlineCode",{parentName:"p"},"staking.Slash(slashEvent.Address, slashEvent.Power, Math.Min(Math.Max(minSlashPercent, NewSlashPercent - SlashedSoFar), maxSlashPercent))")," (we pass in the power of the validator before any slashes occurred, so that we slash the right amount of tokens).  We then set ",(0,r.yg)("inlineCode",{parentName:"p"},"SlashEvent.SlashedSoFar")," amount to ",(0,r.yg)("inlineCode",{parentName:"p"},"NewSlashPercent"),"."),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Proposed"),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Increases decentralization by disincentivizing delegating to large validators"),(0,r.yg)("li",{parentName:"ul"},"Incentivizes Decorrelation of Validators"),(0,r.yg)("li",{parentName:"ul"},"More severely punishes attacks than accidental faults"),(0,r.yg)("li",{parentName:"ul"},"More flexibility in slashing rates parameterization")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'More computationally expensive than current implementation.  Will require more data about "recent slashing events" to be stored on chain.')))}u.isMDXComponent=!0}}]);