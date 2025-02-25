"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[60745],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?t.createElement(y,o(o({ref:n},g),{},{components:a})):t.createElement(y,o({ref:n},g))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59093:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var t=a(58168),l=(a(96540),a(15680));const i={sidebar_position:1},o="x/mint",r={unversionedId:"build/modules/mint/README",id:"version-0.52/build/modules/mint/README",title:"x/mint",description:"Contents",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/modules/mint/README.md",sourceDirName:"build/modules/mint",slug:"/build/modules/mint/",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/mint/",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/group",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/group/"},next:{title:"x/nft",permalink:"/dev-portal-docsite/cosmos-sdk/build/modules/nft/"}},s={},p=[{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"The Minting Mechanism",id:"the-minting-mechanism",level:3},{value:"Inflation",id:"inflation",level:3},{value:"Provisions",id:"provisions",level:3},{value:"Relation to Inflation",id:"relation-to-inflation",level:4},{value:"Usage per Block (default function)",id:"usage-per-block-default-function",level:4},{value:"Example",id:"example",level:5},{value:"Bonding",id:"bonding",level:3},{value:"State",id:"state",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"Minting Methods",id:"minting-methods",level:2},{value:"Epoch-based Minting",id:"epoch-based-minting",level:3},{value:"Block-based Minting",id:"block-based-minting",level:3},{value:"MintFn",id:"mintfn",level:3},{value:"Default configuration",id:"default-configuration",level:3},{value:"Calculations",id:"calculations",level:3},{value:"Inflation rate calculation",id:"inflation-rate-calculation",level:4},{value:"NextInflationRate",id:"nextinflationrate",level:4},{value:"NextAnnualProvisions",id:"nextannualprovisions",level:4},{value:"BlockProvision",id:"blockprovision",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Events",id:"events",level:2},{value:"BeginBlocker",id:"beginblocker",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"annual-provisions",id:"annual-provisions",level:5},{value:"inflation",id:"inflation-1",level:5},{value:"params",id:"params-1",level:5},{value:"Transactions",id:"transactions",level:4},{value:"update-params-proposal",id:"update-params-proposal",level:5},{value:"gRPC",id:"grpc",level:3},{value:"AnnualProvisions",id:"annualprovisions",level:4},{value:"Inflation",id:"inflation-2",level:4},{value:"Params",id:"params-2",level:4},{value:"REST",id:"rest",level:3},{value:"annual-provisions",id:"annual-provisions-1",level:4},{value:"inflation",id:"inflation-3",level:4},{value:"params",id:"params-3",level:4}],g={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"xmint"},(0,l.yg)("inlineCode",{parentName:"h1"},"x/mint")),(0,l.yg)("h2",{id:"contents"},"Contents"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#the-minting-mechanism"},"The Minting Mechanism")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#inflation"},"Inflation")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#provisions"},"Provisions"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#relation-to-inflation"},"Relation to Inflation")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#usage-per-block-default-function"},"Usage per Block")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#example"},"Example")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#bonding"},"Bonding")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#state"},"State"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#minter"},"Minter")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#params"},"Params")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#minting-methods"},"Minting Methods"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#epoch-based-minting"},"Epoch-based Minting")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#block-based-minting"},"Block-based Minting")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#mintfn"},"MintFn")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#default-configuration"},"Default configuration")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#calculations"},"Calculations"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#inflation-rate-calculation"},"NextInflationRate")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#nextannualprovisions"},"NextAnnualProvisions")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#blockprovision"},"BlockProvision")))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#events"},"Events"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#beginblocker"},"BeginBlocker")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#client"},"Client"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#cli"},"CLI")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#grpc"},"gRPC")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rest"},"REST"))))),(0,l.yg)("h2",{id:"concepts"},"Concepts"),(0,l.yg)("h3",{id:"the-minting-mechanism"},"The Minting Mechanism"),(0,l.yg)("p",null,"The minting mechanism in the x/mint module has been redesigned to offer more flexibility. The ",(0,l.yg)("inlineCode",{parentName:"p"},"InflationCalculationFn")," has been deprecated in favor of ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn"),", that can be customized by the application developer. The ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn")," function is passed to the ",(0,l.yg)("inlineCode",{parentName:"p"},"NewAppModule")," function and is used to mint tokens on the configured epoch beginning. This change allows users to define their own minting logic and removes any assumptions on how tokens are minted."),(0,l.yg)("p",null,"Key features of the new minting mechanism:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Customizable Minting Function"),": The ",(0,l.yg)("inlineCode",{parentName:"li"},"MintFn")," can be defined by the application to implement any desired minting logic."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Default Implementation"),": If no custom function is provided, a default minting function is used."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Epoch-based or Block-based Minting"),": The mechanism supports both epoch-based and block-based minting, depending on how the ",(0,l.yg)("inlineCode",{parentName:"li"},"MintFn")," is implemented."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Flexible Inflation"),": The inflation rate can be adjusted based on various parameters, not just the bonded ratio.")),(0,l.yg)("p",null,"The default minting function, if no custom one is provided, is implemented in the ",(0,l.yg)("inlineCode",{parentName:"p"},"DefaultMintFn"),".\nThis function is called during the ",(0,l.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and is responsible for minting new tokens, implementation details can be found ",(0,l.yg)("a",{parentName:"p",href:"#default-configuration"},"here"),"."),(0,l.yg)("h3",{id:"inflation"},"Inflation"),(0,l.yg)("p",null,"Inflation is a key concept in the x/mint module, responsible for the creation of new tokens over time. The inflation rate determines how quickly the total supply of tokens increases."),(0,l.yg)("p",null,"Key aspects of inflation in the x/mint module:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Dynamic Inflation"),": The inflation rate can change over time based on various factors, primarily the bonded ratio."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Bounded Inflation"),": The inflation rate is typically constrained between a minimum and maximum value to prevent extreme fluctuations."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Inflation Calculation"),": The specific method of calculating inflation can be customized using the ",(0,l.yg)("inlineCode",{parentName:"li"},"MintFn"),", allowing for flexible monetary policies.")),(0,l.yg)("p",null,"In the default implementation, inflation is calculated as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plaintext"},"Inflation = CurrentInflation + (1 - BondedRatio / GoalBonded) * (InflationRateChange / BlocksPerYear)\n")),(0,l.yg)("h3",{id:"provisions"},"Provisions"),(0,l.yg)("p",null,"Provisions are the number of tokens generated and distributed in each block. They are directly related to the inflation rate and the current total supply of tokens. The amount of provisions generated per block is calculated based on the annual provisions, which are determined by the inflation rate and the total supply of tokens."),(0,l.yg)("h4",{id:"relation-to-inflation"},"Relation to Inflation"),(0,l.yg)("p",null,"The inflation rate determines the percentage of the total supply of tokens that will be added as provisions over a year. These annual provisions are divided by the number of blocks in a year to obtain the provisions per block."),(0,l.yg)("h4",{id:"usage-per-block-default-function"},"Usage per Block (default function)"),(0,l.yg)("p",null,"Each block uses a fraction of the annual provisions, calculated as: "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-plaintext"},"Provisions per block = Annual provisions / Number of blocks per year\n")),(0,l.yg)("p",null,"These provisions are distributed to validators and delegators as rewards for their participation in the network. "),(0,l.yg)("h5",{id:"example"},"Example"),(0,l.yg)("p",null,"For example, if the total supply of tokens is 1,000,000 and the inflation rate is 10%, the annual provisions would be:"),(0,l.yg)("p",null,"Annual provisions = 1,000,000 * 0.10 = 100,000 tokens"),(0,l.yg)("p",null,"If there are 3,153,600 blocks per year (one block every 10 seconds), the provisions per block would be:\nProvisions per block = 100,000 / 3,153,600 \u2248 0.0317 tokens per block."),(0,l.yg)("p",null,"These provisions are then passed to the fee collector."),(0,l.yg)("h3",{id:"bonding"},"Bonding"),(0,l.yg)("p",null,"Bonding refers to the process of staking tokens in the network, which plays a crucial role in the Proof of Stake consensus mechanism and affects the minting process."),(0,l.yg)("p",null,"Key aspects of bonding in relation to the x/mint module:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Bonded Ratio"),": This is the proportion of the total token supply that is currently staked (bonded) in the network."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Goal Bonded Ratio"),": A target percentage of tokens that should ideally be bonded, defined in the module parameters."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Inflation Adjustment"),": The bonded ratio is used to adjust the inflation rate, encouraging or discouraging bonding as needed to maintain network security and token liquidity.")),(0,l.yg)("h2",{id:"state"},"State"),(0,l.yg)("h3",{id:"minter"},"Minter"),(0,l.yg)("p",null,"The minter is a space for holding current inflation information and any other data\nrelated to minting (in the ",(0,l.yg)("inlineCode",{parentName:"p"},"data")," field)"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Minter: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x00 -> ProtocolBuffer(minter)"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/mint/proto/cosmos/mint/v1beta1/mint.proto#L11-L29\n")),(0,l.yg)("h3",{id:"params"},"Params"),(0,l.yg)("p",null,"The mint module stores its params in state with the prefix of ",(0,l.yg)("inlineCode",{parentName:"p"},"0x01"),",\nit can be updated with governance or the address with authority.\n",(0,l.yg)("strong",{parentName:"p"},"Note:")," With the latest update, the addition of the ",(0,l.yg)("inlineCode",{parentName:"p"},"MaxSupply")," parameter allows controlling the maximum supply of tokens minted by the module.\nA value of ",(0,l.yg)("inlineCode",{parentName:"p"},"0")," indicates an unlimited supply."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Params: ",(0,l.yg)("inlineCode",{parentName:"li"},"mint/params -> legacy_amino(params)"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/mint/proto/cosmos/mint/v1beta1/mint.proto#L31-L73\n")),(0,l.yg)("h2",{id:"minting-methods"},"Minting Methods"),(0,l.yg)("h3",{id:"epoch-based-minting"},"Epoch-based Minting"),(0,l.yg)("p",null,"Epoch-based minting allows for tokens to be minted at specific intervals or epochs, rather than on every block.\nTo implement epoch-based minting, the ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn")," should be designed to mint tokens only when a specific epoch ID is received. The epoch ID and number are passed as parameters to the ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn"),"."),(0,l.yg)("h3",{id:"block-based-minting"},"Block-based Minting"),(0,l.yg)("p",null,"In addition to minting based on epoch, minting based on block is also possible. This is achieved through calling the ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"BeginBlock")," with an epochID and epochNumber of ",(0,l.yg)("inlineCode",{parentName:"p"},'"block"')," and ",(0,l.yg)("inlineCode",{parentName:"p"},"-1"),", respectively."),(0,l.yg)("h3",{id:"mintfn"},"MintFn"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn")," function is called at the beginning of each epoch and is responsible for minting tokens. The function signature is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"type MintFn func(ctx context.Context, env appmodule.Environment, minter *Minter, epochId string, epochNumber int64) error\n")),(0,l.yg)("p",null,"How this function mints tokens is defined by the app developers, meaning they can query state and perform any calculations they deem necessary. ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/ace7bca105a8d5363782cfd19c6f169b286cd3b2/simapp/mint_fn.go#L25"},"This implementation")," in SimApp contains examples of how to use ",(0,l.yg)("inlineCode",{parentName:"p"},"QueryRouterService")," and the Minter's ",(0,l.yg)("inlineCode",{parentName:"p"},"data"),"."),(0,l.yg)("admonition",{type:"warning"},(0,l.yg)("p",{parentName:"admonition"},"Note that BeginBlock will keep calling the MintFn for every block, so it is important to ensure that MintFn returns early if the epoch ID does not match the expected one.")),(0,l.yg)("h3",{id:"default-configuration"},"Default configuration"),(0,l.yg)("p",null,"If no ",(0,l.yg)("inlineCode",{parentName:"p"},"MintFn")," is passed to the ",(0,l.yg)("inlineCode",{parentName:"p"},"NewAppModule")," function, the minting logic defaults to block-based minting, corresponding to ",(0,l.yg)("inlineCode",{parentName:"p"},"mintKeeper.DefaultMintFn(types.DefaultInflationCalculationFn)"),". "),(0,l.yg)("p",null,"The next diagram shows how the ",(0,l.yg)("inlineCode",{parentName:"p"},"DefaultMintFn")," works:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-mermaid"},"flowchart TD\n    A[BeforeEpochStart] --\x3e B[MintFn]\n    B --\x3e C{epochId == 'block'?}\n    C --\x3e|No| D[Return without minting]\n    C --\x3e|Yes| E[Get StakingTokenSupply]\n    E --\x3e F[Get BondedRatio]\n    F --\x3e G[Get Parameters]\n    G --\x3e H[Calculate Inflation]\n    H --\x3e I[Calculate Annual Provisions]\n    I --\x3e J[Calculate Block Provision]\n    J --\x3e K{MaxSupply > 0?}\n    K --\x3e|No| M[Mint coins]\n    K --\x3e|Yes| L{TotalSupply + MintedCoins > MaxSupply?}\n    L --\x3e|No| M\n    L --\x3e|Yes| N[Adjust minting amount]\n    N --\x3e O{Difference > 0?}\n    O --\x3e|No| P[Do not mint]\n    O --\x3e|Yes| M\n    M --\x3e Q[Send minted coins to FeeCollector]\n    Q --\x3e R[Emit events]\n    R --\x3e S[End]\n\n    subgraph Calculations\n    H --\x3e |Uses InflationCalculationFn| H\n    I --\x3e |AnnualProvisions = TotalSupply * Inflation| I\n    J --\x3e |BlockProvision = AnnualProvisions / BlocksPerYear| J\n    end\n\n    subgraph MaxSupply Adjustment\n    N --\x3e |MintedCoins = MaxSupply - TotalSupply| N\n    end\n")),(0,l.yg)("h3",{id:"calculations"},"Calculations"),(0,l.yg)("h4",{id:"inflation-rate-calculation"},"Inflation rate calculation"),(0,l.yg)("p",null,'Inflation rate is calculated using an "inflation calculation function" that\'s\npassed to the ',(0,l.yg)("inlineCode",{parentName:"p"},"NewAppModule")," function. If no function is passed, then the SDK's\ndefault inflation function will be used (",(0,l.yg)("inlineCode",{parentName:"p"},"NextInflationRate"),"). In case a custom\ninflation calculation logic is needed, this can be achieved by defining and\npassing a function that matches ",(0,l.yg)("inlineCode",{parentName:"p"},"InflationCalculationFn"),"'s signature."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"type InflationCalculationFn func(ctx sdk.Context, minter Minter, params Params, bondedRatio math.LegacyDec) math.LegacyDec\n")),(0,l.yg)("h4",{id:"nextinflationrate"},"NextInflationRate"),(0,l.yg)("p",null,"The target annual inflation rate is recalculated each block.\nThe inflation is also subject to a rate change (positive or negative)\ndepending on the distance from the desired ratio (67%). The maximum rate change\npossible is defined to be 5% per year, however, the annual inflation is capped between 0% and 5%."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"NextInflationRate(params Params, bondedRatio math.LegacyDec) (inflation math.LegacyDec) {\n    inflationRateChangePerYear = (1 - bondedRatio/params.GoalBonded) * params.InflationRateChange\n    inflationRateChange = inflationRateChangePerYear/blocksPerYr\n\n    // increase the new annual inflation for this next block\n    inflation += inflationRateChange\n    if inflation > params.InflationMax {\n        inflation = params.InflationMax\n    }\n    if inflation < params.InflationMin {\n        inflation = params.InflationMin\n    }\n\n    return inflation\n}\n")),(0,l.yg)("h4",{id:"nextannualprovisions"},"NextAnnualProvisions"),(0,l.yg)("p",null,"Calculate the annual provisions based on current total supply and inflation\nrate. This parameter is calculated once per block."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"NextAnnualProvisions(params Params, totalSupply math.LegacyDec) (provisions math.LegacyDec) {\n    return Inflation * totalSupply\n}\n")),(0,l.yg)("h4",{id:"blockprovision"},"BlockProvision"),(0,l.yg)("p",null,"Calculate the provisions generated for each block based on current annual provisions. The provisions are then minted by the ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," module's ",(0,l.yg)("inlineCode",{parentName:"p"},"ModuleMinterAccount")," and then transferred to the ",(0,l.yg)("inlineCode",{parentName:"p"},"auth"),"'s ",(0,l.yg)("inlineCode",{parentName:"p"},"FeeCollector")," ",(0,l.yg)("inlineCode",{parentName:"p"},"ModuleAccount"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"BlockProvision(params Params) sdk.Coin {\n    provisionAmt = AnnualProvisions/ params.BlocksPerYear\n    return sdk.NewCoin(params.MintDenom, provisionAmt.Truncate())\n")),(0,l.yg)("h2",{id:"parameters"},"Parameters"),(0,l.yg)("p",null,"The minting module contains the following parameters:\nNote: ",(0,l.yg)("inlineCode",{parentName:"p"},"0")," indicates unlimited supply for MaxSupply param"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Example"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MintDenom"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},'"uatom"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"InflationRateChange"),(0,l.yg)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.yg)("td",{parentName:"tr",align:null},'"0.130000000000000000"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"InflationMax"),(0,l.yg)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.yg)("td",{parentName:"tr",align:null},'"0.200000000000000000"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"InflationMin"),(0,l.yg)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.yg)("td",{parentName:"tr",align:null},'"0.070000000000000000"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"GoalBonded"),(0,l.yg)("td",{parentName:"tr",align:null},"string (dec)"),(0,l.yg)("td",{parentName:"tr",align:null},'"0.670000000000000000"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BlocksPerYear"),(0,l.yg)("td",{parentName:"tr",align:null},"string (uint64)"),(0,l.yg)("td",{parentName:"tr",align:null},'"6311520"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MaxSupply"),(0,l.yg)("td",{parentName:"tr",align:null},"string (math.Int)"),(0,l.yg)("td",{parentName:"tr",align:null},'"0"')))),(0,l.yg)("h2",{id:"events"},"Events"),(0,l.yg)("p",null,"The minting module emits the following events:"),(0,l.yg)("h3",{id:"beginblocker"},"BeginBlocker"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mint"),(0,l.yg)("td",{parentName:"tr",align:null},"bonded_ratio"),(0,l.yg)("td",{parentName:"tr",align:null},"{bondedRatio}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mint"),(0,l.yg)("td",{parentName:"tr",align:null},"inflation"),(0,l.yg)("td",{parentName:"tr",align:null},"{inflation}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mint"),(0,l.yg)("td",{parentName:"tr",align:null},"annual_provisions"),(0,l.yg)("td",{parentName:"tr",align:null},"{annualProvisions}")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mint"),(0,l.yg)("td",{parentName:"tr",align:null},"amount"),(0,l.yg)("td",{parentName:"tr",align:null},"{amount}")))),(0,l.yg)("h2",{id:"client"},"Client"),(0,l.yg)("h3",{id:"cli"},"CLI"),(0,l.yg)("p",null,"A user can query and interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," module using the CLI."),(0,l.yg)("h4",{id:"query"},"Query"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," commands allows users to query ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint --help\n")),(0,l.yg)("h5",{id:"annual-provisions"},"annual-provisions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"annual-provisions")," command allows users to query the current minting annual provisions value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint annual-provisions [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint annual-provisions\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"22268504368893.612100895088410693\n")),(0,l.yg)("h5",{id:"inflation-1"},"inflation"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"inflation")," command allows users to query the current minting inflation value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint inflation [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint inflation\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"0.199200302563256955\n")),(0,l.yg)("h5",{id:"params-1"},"params"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"params")," command allows users to query the current minting parameters"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint params [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query mint params\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'blocks_per_year: "4360000"\ngoal_bonded: "0.670000000000000000"\ninflation_max: "0.200000000000000000"\ninflation_min: "0.070000000000000000"\ninflation_rate_change: "0.130000000000000000"\nmint_denom: stake\nmax_supply: "0"\n')),(0,l.yg)("h4",{id:"transactions"},"Transactions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," module."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx mint --help\n")),(0,l.yg)("h5",{id:"update-params-proposal"},"update-params-proposal"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"update-params-proposal")," command allows users to submit a proposal to update the mint module parameters (Note: the entire params must be provided)."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx mint update-params-proposal [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx mint update-params-proposal \'{ "mint_denom": "stake" }\'\n')),(0,l.yg)("h3",{id:"grpc"},"gRPC"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," module using gRPC endpoints."),(0,l.yg)("h4",{id:"annualprovisions"},"AnnualProvisions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"AnnualProvisions")," endpoint allows users to query the current minting annual provisions value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/AnnualProvisions\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/AnnualProvisions\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "annualProvisions": "1432452520532626265712995618"\n}\n')),(0,l.yg)("h4",{id:"inflation-2"},"Inflation"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Inflation")," endpoint allows users to query the current minting inflation value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/Inflation\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/Inflation\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "inflation": "130197115720711261"\n}\n')),(0,l.yg)("h4",{id:"params-2"},"Params"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the current minting parameters"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos.mint.v1beta1.Query/Params\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext localhost:9090 cosmos.mint.v1beta1.Query/Params\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "mintDenom": "stake",\n    "inflationRateChange": "130000000000000000",\n    "inflationMax": "200000000000000000",\n    "inflationMin": "70000000000000000",\n    "goalBonded": "670000000000000000",\n    "blocksPerYear": "6311520",\n    "maxSupply": "0",\n  }\n}\n')),(0,l.yg)("h3",{id:"rest"},"REST"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"mint")," module using REST endpoints."),(0,l.yg)("h4",{id:"annual-provisions-1"},"annual-provisions"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/annual_provisions\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/annual_provisions"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "annualProvisions": "1432452520532626265712995618"\n}\n')),(0,l.yg)("h4",{id:"inflation-3"},"inflation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/inflation\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/inflation"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "inflation": "130197115720711261"\n}\n')),(0,l.yg)("h4",{id:"params-3"},"params"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"/cosmos/mint/v1beta1/params\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl "localhost:1317/cosmos/mint/v1beta1/params"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "mintDenom": "stake",\n    "inflationRateChange": "130000000000000000",\n    "inflationMax": "200000000000000000",\n    "inflationMin": "70000000000000000",\n    "goalBonded": "670000000000000000",\n    "blocksPerYear": "6311520",\n    "maxSupply": "0",\n  }\n}\n')))}u.isMDXComponent=!0}}]);