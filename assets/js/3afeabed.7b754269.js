"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[56190],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>u});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(o),h=i,u=g["".concat(s,".").concat(h)]||g[h]||c[h]||r;return o?n.createElement(u,a(a({ref:t},p),{},{components:o})):n.createElement(u,a({ref:t},p))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},249:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(58168),i=(o(96540),o(15680));const r={},a="ADR 18: Extendable Voting Periods",l={unversionedId:"architecture/adr-018-extendable-voting-period",id:"version-0.52/architecture/adr-018-extendable-voting-period",title:"ADR 18: Extendable Voting Periods",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/architecture/adr-018-extendable-voting-period.md",sourceDirName:"architecture",slug:"/architecture/adr-018-extendable-voting-period",permalink:"/dev-portal-docsite/cosmos-sdk/architecture/adr-018-extendable-voting-period",draft:!1,tags:[],version:"0.52",frontMatter:{}},s={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Params",id:"params",level:3},{value:"Mechanism",id:"mechanism",level:3},{value:"Dealing with Unbonding/Redelegation",id:"dealing-with-unbondingredelegation",level:3},{value:"Delegators",id:"delegators",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:d},g="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(g,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-18-extendable-voting-periods"},"ADR 18: Extendable Voting Periods"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"1 January 2020: Start of first version")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"Currently the voting period for all governance proposals is the same.  However, this is suboptimal as all governance proposals do not require the same time period.  For more non-contentious proposals, they can be dealt with more efficiently with a faster period, while more contentious or complex proposals may need a longer period for extended discussion/consideration."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"We would like to design a mechanism for making the voting period of a governance proposal variable based on the demand of voters.  We would like it to be based on the view of the governance participants, rather than just the proposer of a governance proposal (thus, allowing the proposer to select the voting period length is not sufficient)."),(0,i.yg)("p",null,"However, we would like to avoid the creation of an entire second voting process to determine the length of the voting period, as it just pushed the problem to determining the length of that first voting period."),(0,i.yg)("p",null,"Thus, we propose the following mechanism:"),(0,i.yg)("h3",{id:"params"},"Params"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The current gov param ",(0,i.yg)("inlineCode",{parentName:"li"},"VotingPeriod")," is to be replaced by a ",(0,i.yg)("inlineCode",{parentName:"li"},"MinVotingPeriod")," param.  This is the default voting period that all governance proposal voting periods start with."),(0,i.yg)("li",{parentName:"ul"},"There is a new gov param called ",(0,i.yg)("inlineCode",{parentName:"li"},"MaxVotingPeriodExtension"),".")),(0,i.yg)("h3",{id:"mechanism"},"Mechanism"),(0,i.yg)("p",null,"There is a new ",(0,i.yg)("inlineCode",{parentName:"p"},"Msg")," type called ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgExtendVotingPeriod"),", which can be sent by any staked account during a proposal's voting period.  It allows the sender to unilaterally extend the length of the voting period by ",(0,i.yg)("inlineCode",{parentName:"p"},"MaxVotingPeriodExtension * sender's share of voting power"),".  Every address can only call ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgExtendVotingPeriod")," once per proposal."),(0,i.yg)("p",null,"So for example, if the ",(0,i.yg)("inlineCode",{parentName:"p"},"MaxVotingPeriodExtension")," is set to 100 Days, then anyone with 1% of voting power can extend the voting power by 1 day.  If 33% of voting power has sent the message, the voting period will be extended by 33 days.  Thus, if absolutely everyone chooses to extend the voting period, the absolute maximum voting period will be ",(0,i.yg)("inlineCode",{parentName:"p"},"MinVotingPeriod + MaxVotingPeriodExtension"),"."),(0,i.yg)("p",null,"This system acts as a sort of distributed coordination, where individual stakers choosing to extend or not, allows the system the gauge the conentiousness/complexity of the proposal.  It is extremely unlikely that many stakers will choose to extend at the exact same time, it allows stakers to view how long others have already extended thus far, to decide whether or not to extend further."),(0,i.yg)("h3",{id:"dealing-with-unbondingredelegation"},"Dealing with Unbonding/Redelegation"),(0,i.yg)("p",null,"There is one thing that needs to be addressed.  How to deal with redelegation/unbonding during the voting period.  If a staker of 5% calls ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgExtendVotingPeriod")," and then unbonds, does the voting period then decrease by 5 days again?  This is not good as it can give people a false sense of how long they have to make their decision.  For this reason, we want to design it such that the voting period length can only be extended, not shortened.  To do this, the current extension amount is based on the highest percent that voted extension at any time.  This is best explained by example:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Let's say 2 stakers of voting power 4% and 3% respectively vote to extend.  The voting period will be extended by 7 days."),(0,i.yg)("li",{parentName:"ol"},"Now the staker of 3% decides to unbond before the end of the voting period.  The voting period extension remains 7 days."),(0,i.yg)("li",{parentName:"ol"},"Now, let's say another staker of 2% voting power decides to extend voting period.  There is now 6% of active voting power choosing the extend.  The voting power remains 7 days."),(0,i.yg)("li",{parentName:"ol"},"If a fourth staker of 10% chooses to extend now, there is a total of 16% of active voting power wishing to extend.  The voting period will be extended to 16 days.")),(0,i.yg)("h3",{id:"delegators"},"Delegators"),(0,i.yg)("p",null,'Just like votes in the actual voting period, delegators automatically inherit the extension of their validators.  If their validator chooses to extend, their voting power will be used in the validator\'s extension.  However, the delegator is unable to override their validator and "unextend" as that would contradict the "voting power length can only be ratcheted up" principle described in the previous section.  However, a delegator may choose the extend using their personal voting power, if their validator has not done so.'),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Proposed"),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"More complex/contentious governance proposals will have more time to properly digest and deliberate")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Governance process becomes more complex and requires more understanding to interact with effectively"),(0,i.yg)("li",{parentName:"ul"},"Can no longer predict when a governance proposal will end. Can't assume order in which governance proposals will end.")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The minimum voting period can be made shorter")),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://forum.cosmos.network/t/proposal-draft-reduce-governance-voting-period-to-7-days/3032/9"},"Cosmos Forum post where idea first originated"))))}c.isMDXComponent=!0}}]);