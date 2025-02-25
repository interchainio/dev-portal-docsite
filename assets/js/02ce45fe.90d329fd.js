"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[65879],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,c=u["".concat(d,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(c,i(i({ref:n},s),{},{components:t})):r.createElement(c,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:1},i="Application upgrade",p={unversionedId:"build/building-apps/app-upgrade",id:"version-0.47/build/building-apps/app-upgrade",title:"Application upgrade",description:"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the SDK migrations documentation.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/building-apps/03-app-upgrade.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/app-upgrade",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-apps/app-upgrade",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Application mempool",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-apps/app-mempool"},next:{title:"Introduction to Cosmos SDK Modules",permalink:"/dev-portal-docsite/cosmos-sdk/0.47/build/building-modules/intro"}},d={},l=[{value:"Pre-Upgrade Handling",id:"pre-upgrade-handling",level:2},{value:"Sample",id:"sample",level:2}],s={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"application-upgrade"},"Application upgrade"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/migrations/intro"},"SDK migrations documentation"),".")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"This section is currently incomplete. Track the progress of this document ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/11504"},"here"),".")),(0,a.yg)("h2",{id:"pre-upgrade-handling"},"Pre-Upgrade Handling"),(0,a.yg)("p",null,"Cosmovisor supports custom pre-upgrade handling. Use pre-upgrade handling when you need to implement application config changes that are required in the newer version before you perform the upgrade."),(0,a.yg)("p",null,"Using Cosmovisor pre-upgrade handling is optional. If pre-upgrade handling is not implemented, the upgrade continues."),(0,a.yg)("p",null,"For example, make the required new-version changes to ",(0,a.yg)("inlineCode",{parentName:"p"},"app.toml")," settings during the pre-upgrade handling. The pre-upgrade handling process means that the file does not have to be manually updated after the upgrade."),(0,a.yg)("p",null,"Before the application binary is upgraded, Cosmovisor calls a ",(0,a.yg)("inlineCode",{parentName:"p"},"pre-upgrade")," command that can  be implemented by the application."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"pre-upgrade")," command does not take in any command-line arguments and is expected to terminate with the following exit codes:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Exit status code"),(0,a.yg)("th",{parentName:"tr",align:null},"How it is handled in Cosmosvisor"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"0")),(0,a.yg)("td",{parentName:"tr",align:null},"Assumes ",(0,a.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command executed successfully and continues the upgrade.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"1")),(0,a.yg)("td",{parentName:"tr",align:null},"Default exit code when ",(0,a.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command has not been implemented.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"30")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. This fails the entire upgrade.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"31")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. But the command is retried until exit code ",(0,a.yg)("inlineCode",{parentName:"td"},"1")," or ",(0,a.yg)("inlineCode",{parentName:"td"},"30")," are returned.")))),(0,a.yg)("h2",{id:"sample"},"Sample"),(0,a.yg)("p",null,"Here is a sample structure of the ",(0,a.yg)("inlineCode",{parentName:"p"},"pre-upgrade")," command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'func preUpgradeCommand() *cobra.Command {\n    cmd := &cobra.Command{\n        Use:   "pre-upgrade",\n        Short: "Pre-upgrade command",\n        Long: "Pre-upgrade command to implement custom pre-upgrade handling",\n        Run: func(cmd *cobra.Command, args []string) {\n\n            err := HandlePreUpgrade()\n\n            if err != nil {\n                os.Exit(30)\n            }\n\n            os.Exit(0)\n\n        },\n    }\n\n    return cmd\n}\n')),(0,a.yg)("p",null,"Ensure that the pre-upgrade command has been registered in the application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n        // ..\n        preUpgradeCommand(),\n        // ..\n    )\n")))}m.isMDXComponent=!0}}]);