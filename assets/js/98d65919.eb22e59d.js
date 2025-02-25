"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[78710],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(58168),a=(n(96540),n(15680));const r={title:"Network Security",sidebar_label:"Network Security Types",slug:"/learn/consensus-security"},i="Network Security Types",s={unversionedId:"learn/consensus-algos",id:"version-v0.50.x/learn/consensus-algos",title:"Network Security",description:"Prerequisites",source:"@site/onboarding_versioned_docs/version-v0.50.x/04-learn/01-consensus-algos.md",sourceDirName:"04-learn",slug:"/learn/consensus-security",permalink:"/dev-portal-docsite/onboarding/learn/consensus-security",draft:!1,tags:[],version:"v0.50.x",sidebarPosition:1,frontMatter:{title:"Network Security",sidebar_label:"Network Security Types",slug:"/learn/consensus-security"},sidebar:"defaultSidebar",previous:{title:"CosmWasm Validator Reviews",permalink:"/dev-portal-docsite/onboarding/demo/cw-validator-reviews"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Choose for me (TLDR)",id:"choose-for-me-tldr",level:2},{value:"Proof of Authority (PoA)",id:"proof-of-authority-poa",level:2},{value:"Default",id:"default",level:3},{value:"What it does",id:"what-it-does",level:3},{value:"Create a PoA network",id:"create-a-poa-network",level:3},{value:"Considerations",id:"considerations",level:3},{value:"Benefits",id:"benefits",level:4},{value:"Downsides",id:"downsides",level:4},{value:"Proof of Stake (PoS)",id:"proof-of-stake-pos",level:2},{value:"What it does",id:"what-it-does-1",level:3},{value:"Create a PoS network",id:"create-a-pos-network",level:3},{value:"Considerations",id:"considerations-1",level:3},{value:"Benefits",id:"benefits-1",level:4},{value:"Downsides",id:"downsides-1",level:4},{value:"Interchain Security (ICS)",id:"interchain-security-ics",level:2},{value:"What it does",id:"what-it-does-2",level:3},{value:"Create an ICS Consumer network",id:"create-an-ics-consumer-network",level:3},{value:"Considerations",id:"considerations-2",level:3},{value:"Benefits",id:"benefits-2",level:4},{value:"Downsides",id:"downsides-2",level:4},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"network-security-types"},"Network Security Types"),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/onboarding/install/system-setup"},"System Setup")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/onboarding/install/install-spawn"},"Install Spawn"))),(0,a.yg)("p",null,"Learn about the different network security methods you can create with spawn and the different pros and cons of each. These are called ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consensus_(computer_science)"},"consensus algorithms")," and are how the network agrees on what actions get put through, and which are rejected."),(0,a.yg)("admonition",{title:"Danger",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This topic is a little more advanced due to technical speak. It is condensed to as a high level of an overview as possible. Please contribute if you can make it more accessible to average readers.")),(0,a.yg)("h2",{id:"choose-for-me-tldr"},"Choose for me (TLDR)"),(0,a.yg)("p",null,"If you just want to build an application and don't want to focus on tokenomics or game theory, use ",(0,a.yg)("a",{parentName:"p",href:"#proof-of-authority-poa"},"proof of authority"),". If a token is part of your product or required to financially reward users with some lock mechanism and long term incentives, use ",(0,a.yg)("a",{parentName:"p",href:"#proof-of-stake-pos"},"proof of stake"),". If you have plans for a large amount of value to be secured or don't want to run your own network nodes, use ",(0,a.yg)("a",{parentName:"p",href:"#interchain-security-ics"},"interchain security"),"."),(0,a.yg)("h2",{id:"proof-of-authority-poa"},"Proof of Authority (PoA)"),(0,a.yg)("h3",{id:"default"},"Default"),(0,a.yg)("p",null,"If you do not know which security module best fits for you, use this one. The source code for this feature can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/strangelove-ventures/poa"},"here"),". The most popular example of this security model is ",(0,a.yg)("a",{parentName:"p",href:"https://www.circle.com/en/"},"Circle's")," USDC issuance network, ",(0,a.yg)("a",{parentName:"p",href:"https://www.noble.xyz/"},"Noble")," (",(0,a.yg)("a",{parentName:"p",href:"https://twitter.com/noble_xyz"},"twitter"),")."),(0,a.yg)("h3",{id:"what-it-does"},"What it does"),(0,a.yg)("p",null,"If you have an application and you want the network to run as efficiently as possible with a trusted set of internal nodes or external trusted 3 parties (validators), use ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_authority"},"Proof of Authority"),"."),(0,a.yg)("h3",{id:"create-a-poa-network"},"Create a PoA network"),(0,a.yg)("p",null,"To create a new network with proof-of-authority, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus=proof-of-authority")," flag. If ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus")," is not present, a selector UI will appear in your terminal to see all options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"-> $ spawn new mychain\nConsensus Selector (( enter to toggle ))\n  Done\n  \u2714 proof-of-authority\n  proof-of-stake\n  interchain-security\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"spawn new rollchain \\\n  --consensus=proof-of-authority \\\n  --disabled=cosmwasm,block-explorer\n")),(0,a.yg)("h3",{id:"considerations"},"Considerations"),(0,a.yg)("h4",{id:"benefits"},"Benefits"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fast Transactions: Fewer people need to agree, so it can process transactions very quickly."),(0,a.yg)("li",{parentName:"ul"},"Less Power Usage: Doesn\u2019t require much electricity, making it more eco-friendly."),(0,a.yg)("li",{parentName:"ul"},"Easy to Maintain: Only a few trusted people are in charge, making it simpler to run."),(0,a.yg)("li",{parentName:"ul"},"Stable Performance: Because only a few people make decisions, things tend to run smoothly and predictably.")),(0,a.yg)("h4",{id:"downsides"},"Downsides"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Centralized Control: A small group of people are in charge, which can lead to concerns about too much power in one place."),(0,a.yg)("li",{parentName:"ul"},"Requires Trust: You have to trust the people in charge to make fair decisions, which can be risky."),(0,a.yg)("li",{parentName:"ul"},"Less Diversity: Having fewer people in control means less variety in opinions and locations, which might be a problem if those people get compromised."),(0,a.yg)("li",{parentName:"ul"},"Less Community Involvement: Regular users don\u2019t have much of a role in helping the system, so it feels less like a community effort.")),(0,a.yg)("h2",{id:"proof-of-stake-pos"},"Proof of Stake (PoS)"),(0,a.yg)("h3",{id:"what-it-does-1"},"What it does"),(0,a.yg)("p",null,"You can have the value of a network back itself by users risking their own tokens to prove they are trustworthy. This is called ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_stake"},"Proof of Stake"),". Believers in an application lock their tokens to earn a small portion of rewards, similar to a bank account. However, if they misbehave by trying to cheat the system or submit bad actions, the network will take a portion of their value (usually 5 - 10%) as a penalty."),(0,a.yg)("p",null,"This security type is useful when you want a more distributed network that can be run by anyone with some holdings in the network. It is a trustless way to secure a network and the most popular security model in the ecosystem currently (Sept 2024)."),(0,a.yg)("h3",{id:"create-a-pos-network"},"Create a PoS network"),(0,a.yg)("p",null,"To create a new network with proof-of-stake, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus=proof-of-stake")," flag. If ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus")," is not present, a selector UI will appear in your terminal to see all options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"-> $ spawn new mychain\nConsensus Selector (( enter to toggle ))\n  Done\n  proof-of-authority\n  \u2714 proof-of-stake\n  interchain-security\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"spawn new rollchain \\\n  --consensus=proof-of-stake \\\n  --disabled=cosmwasm,block-explorer\n")),(0,a.yg)("h3",{id:"considerations-1"},"Considerations"),(0,a.yg)("h4",{id:"benefits-1"},"Benefits"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"More People Involved: Anyone can participate if they\u2019re willing to invest, which makes the system feel more balanced and community-driven."),(0,a.yg)("li",{parentName:"ul"},"Eco-Friendly: Like PoA, PoS doesn\u2019t use much electricity, making it good for the environment."),(0,a.yg)("li",{parentName:"ul"},"More Fairness: The system allows many people to help make decisions, reducing the chance of one group having too much control."),(0,a.yg)("li",{parentName:"ul"},"Grows with the Community: More people can get involved as the system grows, making it scalable and inclusive.")),(0,a.yg)("h4",{id:"downsides-1"},"Downsides"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Slower Decision Making: Because more people are involved, it can take longer to reach a decision due to governance and politics"),(0,a.yg)("li",{parentName:"ul"},"Wealthy Have More Power: The more you invest, the more influence you have, which can lead to rich people having more control."),(0,a.yg)("li",{parentName:"ul"},"Complex to Get Started: It can be harder for someone new to understand how to participate compared to systems with fewer decision-makers."),(0,a.yg)("li",{parentName:"ul"},"Risk of Losing Investment: If you make a mistake or act dishonestly, you could lose your money, which adds some financial risk.")),(0,a.yg)("h2",{id:"interchain-security-ics"},"Interchain Security (ICS)"),(0,a.yg)("h3",{id:"what-it-does-2"},"What it does"),(0,a.yg)("p",null,"Interchain security shares the economic proof of stake security of a larger parent provider with a sub network, called a consumer ",(0,a.yg)("em",{parentName:"p"},"(since they consume security)"),". This is useful when you want to create a new network that is secure from day one, without having to bootstrap a new set of network operators and validators, and have alignment with the parent. Current networks utilizing this are ",(0,a.yg)("a",{parentName:"p",href:"https://cosmos.network/interchain-security/"},"CosmosHub"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.stride.zone/"},"Stride"),", and ",(0,a.yg)("a",{parentName:"p",href:"https://www.neutron.org/"},"Lido's Neutron"),". If you are from ethereum, this is similar to an ",(0,a.yg)("a",{parentName:"p",href:"https://app.eigenlayer.xyz/avs"},"Actively Validated Services (AVS) on Eigenlayer"),"."),(0,a.yg)("p",null,"The cost of running these networks is relatively low as you just pay a portion of your networks fees. This is a great way to take an application from a testnet to a mainnet with a trusted security model, especially if your application deals with a lot of possible monetary value. To compromise the network, an attacker would have to compromise the more secure parent network, which is a very high bar."),(0,a.yg)("h3",{id:"create-an-ics-consumer-network"},"Create an ICS Consumer network"),(0,a.yg)("p",null,"To create a new network with interchain-security, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus=interchain-security")," flag. If ",(0,a.yg)("inlineCode",{parentName:"p"},"--consensus")," is not present, a selector UI will appear in your terminal to see all options."),(0,a.yg)("p",null,"::note Note\nSpawn does not support creating provider networks.\n:::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"-> $ spawn new mychain\nConsensus Selector (( enter to toggle ))\n  Done\n  proof-of-authority\n  proof-of-stake\n  \u2714 interchain-security\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"spawn new rollchain \\\n  --consensus=interchain-security \\\n  --disabled=cosmwasm,block-explorer\n")),(0,a.yg)("h3",{id:"considerations-2"},"Considerations"),(0,a.yg)("h4",{id:"benefits-2"},"Benefits"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"No Need for Consumer Chain to Build Its Own Security: The smaller or newer chain doesn't have to recruit its own set of people to protect it. It automatically benefits from the protection of the parent network, saving time and effort."),(0,a.yg)("li",{parentName:"ul"},"Easier Node Bootstrapping: Since the parent network provides the security, the consumer chain doesn\u2019t have to build a large number of participants to protect the system from scratch. This makes launching a new chain much faster and easier."),(0,a.yg)("li",{parentName:"ul"},"Shared Trust: By using the same security as a well-known, established chain, the consumer chain inherits the trust and credibility of the parent network, making it more appealing to users and developers."),(0,a.yg)("li",{parentName:"ul"},"Aligned Interests: Since the parent network's security also protects the consumer chain, both chains have an interest in maintaining a secure, well-functioning system. This alignment reduces the risk of conflicts between the two.")),(0,a.yg)("h4",{id:"downsides-2"},"Downsides"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dependence on Parent Network: The consumer chain becomes dependent on the parent network. If something goes wrong with the parent network\u2019s security or operations, the consumer chain is also affected, even if it is unrelated to the issue."),(0,a.yg)("li",{parentName:"ul"},"Limited Autonomy: The consumer chain may have less control over its own security decisions, since it\u2019s tied to the security model of the parent network. This could limit flexibility in responding to specific needs or changes."),(0,a.yg)("li",{parentName:"ul"},"Potential Congestion: If many consumer chains share the same parent network, the shared security system might become congested or stretched thin, leading to slower response times or performance issues."),(0,a.yg)("li",{parentName:"ul"},"Complexity in Governance: Any changes to the shared security might require coordination between both the parent network and the consumer chain, adding complexity to decision-making and governance."),(0,a.yg)("li",{parentName:"ul"},"Risk of Centralization: The reliance on a single parent network\u2019s security model might lead to centralization, where a handful of large chains dominate the ecosystem. This reduces the diversity of security models and could concentrate power.")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"You have now learned about different network security types, how to select different ones, and the pros and cons of each. You can now create a new chain with the security model that best fits your application's needs."))}h.isMDXComponent=!0}}]);