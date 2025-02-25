"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[54851],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var s=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?s.createElement(m,i(i({ref:t},d),{},{components:n})):s.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=n(58168),r=(n(96540),n(15680));const a={sidebar_position:1},i="System Tests",o={unversionedId:"build/building-apps/system-tests",id:"version-0.52/build/building-apps/system-tests",title:"System Tests",description:"System tests provide a framework to write and execute black box tests against a running chain. This adds another level",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/building-apps/06-system-tests.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/system-tests",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-apps/system-tests",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"app-go-genesis",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-apps/app-go-genesis"},next:{title:"The Cosmos Security Handbook: Part 1 - Core Chain",permalink:"/dev-portal-docsite/cosmos-sdk/build/building-apps/security-part-1"}},l={},p=[{value:"Vanilla Go for Flow Control",id:"vanilla-go-for-flow-control",level:2},{value:"Design Principles and Guidelines",id:"design-principles-and-guidelines",level:2},{value:"Errors and Debugging",id:"errors-and-debugging",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,s.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"system-tests"},"System Tests"),(0,r.yg)("p",null,"System tests provide a framework to write and execute black box tests against a running chain. This adds another level\nof confidence on top of unit, integration, and simulations tests, ensuring that business-critical scenarios\n(like double signing prevention) or scenarios that can't be tested otherwise (like a chain upgrade) are covered."),(0,r.yg)("h2",{id:"vanilla-go-for-flow-control"},"Vanilla Go for Flow Control"),(0,r.yg)("p",null,"System tests are vanilla Go tests that interact with the compiled chain binary. The ",(0,r.yg)("inlineCode",{parentName:"p"},"test runner")," component starts a\nlocal testnet of 4 nodes (by default) and provides convenient helper methods for accessing the\n",(0,r.yg)("inlineCode",{parentName:"p"},"system under test (SUT)"),".\nA ",(0,r.yg)("inlineCode",{parentName:"p"},"CLI wrapper")," makes it easy to access keys, submit transactions, or execute operations. Together, these components\nenable the replication and validation of complex business scenarios."),(0,r.yg)("p",null,"Here's an example of a double signing test, where a new node is added with the same key as the first validator:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/tests/systemtests/fraud_test.go"},"double signing test example")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/tests/systemtests/getting_started.md"},"getting started tutorial"),"\ncontains a step-by-step guide to building and running your first system test. It covers setting chain state via genesis\nor\ntransactions and validation via transaction response or queries."),(0,r.yg)("h2",{id:"design-principles-and-guidelines"},"Design Principles and Guidelines"),(0,r.yg)("p",null,"System tests are slower compared to unit or integration tests as they interact with a running chain. Therefore, certain\nprinciples can guide their usage:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Perspective:")," Tests should mimic a human interacting with the chain from the outside. Initial states can be set via\ngenesis or transactions to support a test scenario."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Roles:")," The user can have multiple roles such as validator, delegator, granter, or group admin."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Focus:")," Tests should concentrate on happy paths or business-critical workflows. Unit and integration tests are\nbetter suited for more fine-grained testing."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Workflows:")," Test workflows and scenarios, not individual units. Given the high setup costs, it is reasonable to\ncombine multiple steps and assertions in a single test method."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Genesis Mods:")," Genesis modifications can incur additional time costs for resetting dirty states. Reuse existing\naccounts (node0..n) whenever possible."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Framework:")," Continuously improve the framework for better readability and reusability.")),(0,r.yg)("h2",{id:"errors-and-debugging"},"Errors and Debugging"),(0,r.yg)("p",null,"All output is logged to ",(0,r.yg)("inlineCode",{parentName:"p"},"systemtests/testnet/node{0..n}.out"),". Usually, ",(0,r.yg)("inlineCode",{parentName:"p"},"node0.out")," is very noisy as it receives the CLI\nconnections. Prefer any other node's log to find stack traces or error messages."),(0,r.yg)("p",null,"Using system tests for state setup during debugging has become very handy:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the test with one node only and verbose output:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"go test -v -tags=system_test ./ --run TestAccountCreation --verbose --nodes-count=1\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Copy the CLI command for the transaction and modify the test to stop before the command")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the node with ",(0,r.yg)("inlineCode",{parentName:"p"},"--home=<project-home>/tests/systemtests/testnet/node0/<binary-name>/")," in debug mode")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Execute CLI command from shell and enter breakpoints"))))}u.isMDXComponent=!0}}]);