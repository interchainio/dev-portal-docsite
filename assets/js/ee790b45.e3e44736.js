"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[75322],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(58168),r=(n(96540),n(15680));const a={},i="ADR 037: Governance split votes",l={unversionedId:"build/architecture/adr-037-gov-split-vote",id:"version-0.52/build/architecture/adr-037-gov-split-vote",title:"ADR 037: Governance split votes",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-037-gov-split-vote.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-037-gov-split-vote",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-037-gov-split-vote",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 036: Arbitrary Message Signature Specification",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-036-arbitrary-signature"},next:{title:"ADR 038: KVStore state listening",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-038-state-listening"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-037-governance-split-votes"},"ADR 037: Governance split votes"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2020/10/28: Initial draft")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Accepted"),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,"This ADR defines a modification to the governance module that would allow a staker to split their votes into several voting options. For example, it could use 70% of its voting power to vote Yes and 30% of its voting power to vote No."),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"Currently, an address can cast a vote with only one options (Yes/No/Abstain/NoWithVeto) and use their full voting power behind that choice."),(0,r.yg)("p",null,'However, often times the entity owning that address might not be a single individual.  For example, a company might have different stakeholders who want to vote differently, and so it makes sense to allow them to split their voting power.  Another example use case is exchanges.  Many centralized exchanges often stake a portion of their users\' tokens in their custody.  Currently, it is not possible for them to do "passthrough voting" and giving their users voting rights over their tokens.  However, with this system, exchanges can poll their users for voting preferences, and then vote on-chain proportionally to the results of the poll.'),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"We modify the vote structs to be"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type WeightedVoteOption struct {\n  Option string\n  Weight sdk.Dec\n}\n\ntype Vote struct {\n  ProposalID int64\n  Voter      sdk.Address\n  Options    []WeightedVoteOption\n}\n")),(0,r.yg)("p",null,"And for backwards compatibility, we introduce ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgVoteWeighted")," while keeping ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgVote"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type MsgVote struct {\n  ProposalID int64\n  Voter      sdk.Address\n  Option     Option\n}\n\ntype MsgVoteWeighted struct {\n  ProposalID int64\n  Voter      sdk.Address\n  Options    []WeightedVoteOption\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," of a ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgVoteWeighted")," struct would require that"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The sum of all the Rates is equal to 1.0"),(0,r.yg)("li",{parentName:"ol"},"No Option is repeated")),(0,r.yg)("p",null,"The governance tally function will iterate over all the options in a vote and add to the tally the result of the voter's voting power * the rate for that option."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"tally() {\n    results := map[types.VoteOption]sdk.Dec\n\n    for _, vote := range votes {\n        for i, weightedOption := range vote.Options {\n            results[weightedOption.Option] += getVotingPower(vote.voter) * weightedOption.Weight\n        }\n    }\n}\n")),(0,r.yg)("p",null,"The CLI command for creating a multi-option vote would be as such:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx gov vote 1 "yes=0.6,no=0.3,abstain=0.05,no_with_veto=0.05" --from mykey\n')),(0,r.yg)("p",null,"To create a single-option vote a user can do either"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx gov vote 1 "yes=1" --from mykey\n')),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx gov vote 1 yes --from mykey\n")),(0,r.yg)("p",null,"to maintain backwards compatibility."),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Previous VoteMsg types will remain the same and so clients will not have to update their procedure unless they want to support the WeightedVoteMsg feature."),(0,r.yg)("li",{parentName:"ul"},"When querying a Vote struct from state, its structure will be different, and so clients wanting to display all voters and their respective votes will have to handle the new format and the fact that a single voter can have split votes."),(0,r.yg)("li",{parentName:"ul"},"The result of querying the tally function should have the same API for clients.")),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Can make the voting process more accurate for addresses representing multiple stakeholders, often some of the largest addresses.")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Is more complex than simple voting, and so may be harder to explain to users.  However, this is mostly mitigated because the feature is opt-in.")),(0,r.yg)("h3",{id:"neutral"},"Neutral"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Relatively minor change to governance tally function.")))}d.isMDXComponent=!0}}]);