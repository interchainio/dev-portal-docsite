"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[77548],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>y});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),d=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=d(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=t,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(y,i(i({ref:r},s),{},{components:n})):a.createElement(y,i({ref:r},s))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36823:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(58168),t=(n(96540),n(15680));const o={sidebar_position:1},i="RunTx recovery middleware",l={unversionedId:"learn/advanced/runtx_middleware",id:"version-0.47/learn/advanced/runtx_middleware",title:"RunTx recovery middleware",description:"BaseApp.runTx() function handles Go panics that might occur during transactions execution, for example, keeper has faced an invalid state and paniced.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/learn/advanced/12-runtx_middleware.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/runtx_middleware",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/runtx_middleware",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Telemetry",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/telemetry"},next:{title:"Cosmos Blockchain Simulator",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/learn/advanced/simulation"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Custom RecoveryHandler register",id:"custom-recoveryhandler-register",level:2},{value:"Example",id:"example",level:2}],s={toc:d},p="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"runtx-recovery-middleware"},"RunTx recovery middleware"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"BaseApp.runTx()")," function handles Go panics that might occur during transactions execution, for example, keeper has faced an invalid state and paniced.\nDepending on the panic type different handler is used, for instance the default one prints an error log message.\nRecovery middleware is used to add custom panic recovery for Cosmos SDK application developers."),(0,t.yg)("p",null,"More context can found in the corresponding ",(0,t.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.47/build/architecture/adr-022-custom-panic-handling"},"ADR-022")," and the implementation in ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/baseapp/recovery.go"},"recovery.go"),"."),(0,t.yg)("h2",{id:"interface"},"Interface"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/baseapp/recovery.go#L11-L14\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"recoveryObj")," is a return value for ",(0,t.yg)("inlineCode",{parentName:"p"},"recover()")," function from the ",(0,t.yg)("inlineCode",{parentName:"p"},"buildin")," Go package."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Contract:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"RecoveryHandler returns ",(0,t.yg)("inlineCode",{parentName:"li"},"nil")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"recoveryObj")," wasn't handled and should be passed to the next recovery middleware;"),(0,t.yg)("li",{parentName:"ul"},"RecoveryHandler returns a non-nil ",(0,t.yg)("inlineCode",{parentName:"li"},"error")," if ",(0,t.yg)("inlineCode",{parentName:"li"},"recoveryObj")," was handled;")),(0,t.yg)("h2",{id:"custom-recoveryhandler-register"},"Custom RecoveryHandler register"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"BaseApp.AddRunTxRecoveryHandler(handlers ...RecoveryHandler)")),(0,t.yg)("p",null,"BaseApp method adds recovery middleware to the default recovery chain."),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("p",null,'Lets assume we want to emit the "Consensus failure" chain state if some particular error occurred.'),(0,t.yg)("p",null,"We have a module keeper that panics:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'func (k FooKeeper) Do(obj interface{}) {\n    if obj == nil {\n        // that shouldn\'t happen, we need to crash the app\n        err := errorsmod.Wrap(fooTypes.InternalError, "obj is nil")\n        panic(err)\n    }\n}\n')),(0,t.yg)("p",null,"By default that panic would be recovered and an error message will be printed to log. To override that behaviour we should register a custom RecoveryHandler:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// Cosmos SDK application constructor\ncustomHandler := func(recoveryObj interface{}) error {\n    err, ok := recoveryObj.(error)\n    if !ok {\n        return nil\n    }\n\n    if fooTypes.InternalError.Is(err) {\n        panic(fmt.Errorf("FooKeeper did panic with error: %w", err))\n    }\n\n    return nil\n}\n\nbaseApp := baseapp.NewBaseApp(...)\nbaseApp.AddRunTxRecoveryHandler(customHandler)\n')))}u.isMDXComponent=!0}}]);