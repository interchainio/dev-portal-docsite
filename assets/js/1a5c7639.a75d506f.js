"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45906],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=o,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const i={sidebar_position:1},r="Node Client (Daemon)",s={unversionedId:"learn/advanced/node",id:"version-0.52/learn/advanced/node",title:"Node Client (Daemon)",description:"The main endpoint of a Cosmos SDK application is the daemon client, otherwise known as the full-node client. The full-node runs the state-machine, starting from a genesis file. It connects to peers running the same client in order to receive and relay transactions, block proposals and signatures. The full-node is constituted of the application, defined with the Cosmos SDK, and of a consensus engine connected to the application via the ABCI.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/learn/advanced/03-node.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/node",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/node",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Core",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/core"},next:{title:"Store",permalink:"/dev-portal-docsite/cosmos-sdk/learn/advanced/store"}},l={},p=[{value:"<code>main</code> function",id:"main-function",level:2},{value:"<code>start</code> command",id:"start-command",level:2},{value:"Other commands",id:"other-commands",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"node-client-daemon"},"Node Client (Daemon)"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The main endpoint of a Cosmos SDK application is the daemon client, otherwise known as the full-node client. The full-node runs the state-machine, starting from a genesis file. It connects to peers running the same client in order to receive and relay transactions, block proposals and signatures. The full-node is constituted of the application, defined with the Cosmos SDK, and of a consensus engine connected to the application via the ABCI.")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/learn/beginner/app-anatomy"},"Anatomy of an SDK application")))),(0,o.yg)("h2",{id:"main-function"},(0,o.yg)("inlineCode",{parentName:"h2"},"main")," function"),(0,o.yg)("p",null,"The full-node client of any Cosmos SDK application is built by running a ",(0,o.yg)("inlineCode",{parentName:"p"},"main")," function. The client is generally named by appending the ",(0,o.yg)("inlineCode",{parentName:"p"},"-d")," suffix to the application name (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"appd")," for an application named ",(0,o.yg)("inlineCode",{parentName:"p"},"app"),"), and the ",(0,o.yg)("inlineCode",{parentName:"p"},"main")," function is defined in a ",(0,o.yg)("inlineCode",{parentName:"p"},"./appd/cmd/main.go")," file. Running this function creates an executable ",(0,o.yg)("inlineCode",{parentName:"p"},"appd")," that comes with a set of commands. For an app named ",(0,o.yg)("inlineCode",{parentName:"p"},"app"),", the main command is ",(0,o.yg)("a",{parentName:"p",href:"#start-command"},(0,o.yg)("inlineCode",{parentName:"a"},"appd start")),", which starts the full-node."),(0,o.yg)("p",null,"In general, developers will implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"main.go")," function with the following structure:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"First, an ",(0,o.yg)("a",{parentName:"li",href:"https://docs.cosmos.network/main/learn/advanced/encoding"},(0,o.yg)("inlineCode",{parentName:"a"},"encodingCodec"))," is instantiated for the application."),(0,o.yg)("li",{parentName:"ul"},"Then, the ",(0,o.yg)("inlineCode",{parentName:"li"},"config")," is retrieved and config parameters are set. This mainly involves setting the Bech32 prefixes for ",(0,o.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/learn/beginner/accounts#addresses"},"addresses"),".")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/types/config.go#L20-L29\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Using ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra"),", the root command of the full-node client is created. After that, all the custom commands of the application are added using the ",(0,o.yg)("inlineCode",{parentName:"li"},"AddCommand()")," method of ",(0,o.yg)("inlineCode",{parentName:"li"},"rootCmd"),"."),(0,o.yg)("li",{parentName:"ul"},"Add default server commands to ",(0,o.yg)("inlineCode",{parentName:"li"},"rootCmd")," using the ",(0,o.yg)("inlineCode",{parentName:"li"},"server.AddCommands()")," method. These commands are separated from the ones added above since they are standard and defined at Cosmos SDK level. They should be shared by all Cosmos SDK-based applications. They include the most important command: the ",(0,o.yg)("a",{parentName:"li",href:"#start-command"},(0,o.yg)("inlineCode",{parentName:"a"},"start")," command"),"."),(0,o.yg)("li",{parentName:"ul"},"Prepare and execute the ",(0,o.yg)("inlineCode",{parentName:"li"},"executor"),".")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://https://github.com/cometbft/cometbft/blob/v1.0.0-rc1/libs/cli/setup.go#L74-L78\n")),(0,o.yg)("p",null,"See an example of ",(0,o.yg)("inlineCode",{parentName:"p"},"main")," function from the ",(0,o.yg)("inlineCode",{parentName:"p"},"simapp")," application, the Cosmos SDK's application for demo purposes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/simapp/simd/main.go\n")),(0,o.yg)("h2",{id:"start-command"},(0,o.yg)("inlineCode",{parentName:"h2"},"start")," command"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"start")," command is defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/server")," folder of the Cosmos SDK. It is added to the root command of the full-node client in the ",(0,o.yg)("a",{parentName:"p",href:"#main-function"},(0,o.yg)("inlineCode",{parentName:"a"},"main")," function")," and called by the end-user to start their node:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'# For an example app named "app", the following command starts the full-node.\nappd start\n\n# Using the Cosmos SDK\'s own simapp, the following commands start the simapp node.\nsimd start\n')),(0,o.yg)("p",null,"As a reminder, the full-node is composed of three conceptual layers: the networking layer, the consensus layer and the application layer. The first two are generally bundled together in an entity called the consensus engine (CometBFT by default), while the third is the state-machine defined with the help of the Cosmos SDK. Currently, the Cosmos SDK uses CometBFT as the default consensus engine, meaning the start command is implemented to boot up a CometBFT node."),(0,o.yg)("p",null,"The flow of the ",(0,o.yg)("inlineCode",{parentName:"p"},"start")," command is pretty straightforward. First, it retrieves the ",(0,o.yg)("inlineCode",{parentName:"p"},"config")," from the ",(0,o.yg)("inlineCode",{parentName:"p"},"context")," in order to open the ",(0,o.yg)("inlineCode",{parentName:"p"},"db")," (a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/syndtr/goleveldb"},(0,o.yg)("inlineCode",{parentName:"a"},"levelDB"))," instance by default). This ",(0,o.yg)("inlineCode",{parentName:"p"},"db")," contains the latest known state of the application (empty if the application is started from the first time)."),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"db"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"start")," command creates a new instance of the application using an ",(0,o.yg)("inlineCode",{parentName:"p"},"appCreator")," function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/server/start.go#L201\n")),(0,o.yg)("p",null,"Note that an ",(0,o.yg)("inlineCode",{parentName:"p"},"appCreator")," is a function that fulfills the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppCreator")," signature:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/server/types/app.go#L69-L71\n")),(0,o.yg)("p",null,"In practice, the ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/learn/beginner/app-anatomy#constructor-function"},"constructor of the application")," is passed as the ",(0,o.yg)("inlineCode",{parentName:"p"},"appCreator"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/server/util.go#L334-L360\n")),(0,o.yg)("p",null,"Then, the instance of ",(0,o.yg)("inlineCode",{parentName:"p"},"app")," is used to instantiate a new CometBFT node:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/server/start.go#L367-L410\n")),(0,o.yg)("p",null,"The CometBFT node can be created with ",(0,o.yg)("inlineCode",{parentName:"p"},"app")," because the latter satisfies the ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/https://github.com/cometbft/cometbft/api/cometbft/abci/v1#Application"},(0,o.yg)("inlineCode",{parentName:"a"},"abci.Application")," interface")," (given that ",(0,o.yg)("inlineCode",{parentName:"p"},"app")," extends ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/learn/advanced/baseapp"},(0,o.yg)("inlineCode",{parentName:"a"},"baseapp")),"). As part of the ",(0,o.yg)("inlineCode",{parentName:"p"},"node.New")," method, CometBFT makes sure that the height of the application (i.e. number of blocks since genesis) is equal to the height of the CometBFT node. The difference between these two heights should always be negative or null. If it is strictly negative, ",(0,o.yg)("inlineCode",{parentName:"p"},"node.New")," will replay blocks until the height of the application reaches the height of the CometBFT node. Finally, if the height of the application is ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", the CometBFT node will call ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/learn/advanced/baseapp#initchain"},(0,o.yg)("inlineCode",{parentName:"a"},"InitChain"))," on the application to initialize the state from the genesis file."),(0,o.yg)("p",null,"Once the CometBFT node is instantiated and in sync with the application, the node can be started:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/server/start.go#L383-L384\n")),(0,o.yg)("p",null,"Upon starting, the node will bootstrap its RPC and P2P server and start dialing peers. During handshake with its peers, if the node realizes they are ahead, it will query all the blocks sequentially in order to catch up. Then, it will wait for new block proposals and block signatures from validators in order to make progress."),(0,o.yg)("h2",{id:"other-commands"},"Other commands"),(0,o.yg)("p",null,"To discover how to concretely run a node and interact with it, please refer to our ",(0,o.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/user/run-node/run-node#configuring-the-node-using-apptoml-and-configtoml"},"Running a Node, API and CLI")," guide."))}m.isMDXComponent=!0}}]);