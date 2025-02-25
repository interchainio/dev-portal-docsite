"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[84965],{15680:(e,o,t)=>{t.d(o,{xA:()=>u,yg:()=>m});var r=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},u=function(e){var o=p(e.components);return r.createElement(l.Provider,{value:o},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=n,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return t?r.createElement(m,s(s({ref:o},u),{},{components:t})):r.createElement(m,s({ref:o},u))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[g]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43249:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const a={sidebar_position:1},s="Protocol Buffers",i={unversionedId:"build/tooling/protobuf",id:"version-0.52/build/tooling/protobuf",title:"Protocol Buffers",description:"Cosmos SDK uses protocol buffers extensively, this document is meant to provide a guide on how it is used in the cosmos-sdk.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/tooling/00-protobuf.md",sourceDirName:"build/tooling",slug:"/build/tooling/protobuf",permalink:"/dev-portal-docsite/cosmos-sdk/build/tooling/protobuf",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Tools",permalink:"/dev-portal-docsite/cosmos-sdk/build/tooling/"},next:{title:"Cosmovisor",permalink:"/dev-portal-docsite/cosmos-sdk/build/tooling/cosmovisor"}},l={},p=[{value:"Buf",id:"buf",level:2},{value:"Workspace",id:"workspace",level:3},{value:"Proto Directory",id:"proto-directory",level:3},{value:"<code>buf.gen.gogo.yaml</code>",id:"bufgengogoyaml",level:4},{value:"<code>buf.gen.pulsar.yaml</code>",id:"bufgenpulsaryaml",level:4},{value:"<code>buf.gen.swagger.yaml</code>",id:"bufgenswaggeryaml",level:4},{value:"<code>buf.lock</code>",id:"buflock",level:4},{value:"<code>buf.yaml</code>",id:"bufyaml",level:4}],u={toc:p},g="wrapper";function c(e){let{components:o,...t}=e;return(0,n.yg)(g,(0,r.A)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"protocol-buffers"},"Protocol Buffers"),(0,n.yg)("p",null,"Cosmos SDK uses protocol buffers extensively, this document is meant to provide a guide on how it is used in the cosmos-sdk."),(0,n.yg)("p",null,"To generate the proto file, the Cosmos SDK uses a docker image, this image is provided to all to use as well. The latest version is ",(0,n.yg)("inlineCode",{parentName:"p"},"ghcr.io/cosmos/proto-builder:0.15.x")),(0,n.yg)("p",null,"Below is the example of the Cosmos SDK's commands for generating, linting, and formatting protobuf files that can be reused in any applications makefile. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/scripts/build/protobuf.mk#L1-L10\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/scripts/protocgen.sh"},(0,n.yg)("inlineCode",{parentName:"a"},"protocgen.sh"))," script used to generate the protobuf files via buf can be found in the ",(0,n.yg)("inlineCode",{parentName:"p"},"scripts/")," directory."),(0,n.yg)("h2",{id:"buf"},"Buf"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://buf.build"},"Buf")," is a protobuf tool that abstracts the needs to use the complicated ",(0,n.yg)("inlineCode",{parentName:"p"},"protoc")," toolchain on top of various other things that ensure you are using protobuf in accordance with the majority of the ecosystem. Within the cosmos-sdk repository there are a few files that have a buf prefix. Lets start with the top level and then dive into the various directories. "),(0,n.yg)("h3",{id:"workspace"},"Workspace"),(0,n.yg)("p",null,"At the root level directory a workspace is defined using ",(0,n.yg)("a",{parentName:"p",href:"https://docs.buf.build/configuration/v1/buf-work-yaml"},"buf workspaces"),". This helps if there are one or more protobuf containing directories in your project. "),(0,n.yg)("p",null,"Cosmos SDK example: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/buf.work.yaml#L6-L9\n")),(0,n.yg)("h3",{id:"proto-directory"},"Proto Directory"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"proto/")," directory where all of global protobuf files live.\nIn here there are many different buf files defined each serving a different purpose.\nModules proto files are defined in their respective module directories (in the SDK ",(0,n.yg)("inlineCode",{parentName:"p"},"x/{moduleName}/proto"),")."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 buf.gen.gogo.yaml\n\u251c\u2500\u2500 buf.gen.pulsar.yaml\n\u251c\u2500\u2500 buf.gen.swagger.yaml\n\u251c\u2500\u2500 buf.lock\n\u251c\u2500\u2500 buf.md\n\u251c\u2500\u2500 buf.yaml\n\u251c\u2500\u2500 cosmos\n\u2514\u2500\u2500 tendermint\n")),(0,n.yg)("h4",{id:"bufgengogoyaml"},(0,n.yg)("inlineCode",{parentName:"h4"},"buf.gen.gogo.yaml")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"buf.gen.gogo.yaml")," defines how the protobuf files should be generated for use with in the module. This file uses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/gogo/protobuf"},"gogoproto"),", a separate generator from the google go-proto generator that makes working with various objects more ergonomic, and it has more performant encode and decode steps"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.gen.gogo.yaml#L1-L9\n")),(0,n.yg)("h4",{id:"bufgenpulsaryaml"},(0,n.yg)("inlineCode",{parentName:"h4"},"buf.gen.pulsar.yaml")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"buf.gen.pulsar.yaml")," defines how protobuf files should be generated using the ",(0,n.yg)("a",{parentName:"p",href:"https://go.dev/blog/protobuf-apiv2"},"new golang apiv2 of protobuf"),". This generator is used instead of the google go-proto generator because it has some extra helpers for Cosmos SDK applications and will have more performant encode and decode than the google go-proto generator. You can follow the development of this generator ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-proto"},"here"),". "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.gen.pulsar.yaml#L1-L18\n")),(0,n.yg)("h4",{id:"bufgenswaggeryaml"},(0,n.yg)("inlineCode",{parentName:"h4"},"buf.gen.swagger.yaml")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"buf.gen.swagger.yaml")," generates the swagger documentation for the query and messages of the chain. This will only define the REST API end points that were defined in the query and msg servers. You can find examples of this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/x/bank/proto/cosmos/bank/v1beta1/query.proto"},"here")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.gen.swagger.yaml#L1-L6\n")),(0,n.yg)("h4",{id:"buflock"},(0,n.yg)("inlineCode",{parentName:"h4"},"buf.lock")),(0,n.yg)("p",null,"This is an autogenerated file based off the dependencies required by the ",(0,n.yg)("inlineCode",{parentName:"p"},".gen")," files. There is no need to copy the current one. If you depend on cosmos-sdk proto definitions a new entry for the Cosmos SDK will need to be provided. The dependency you will need to use is ",(0,n.yg)("inlineCode",{parentName:"p"},"buf.build/cosmos/cosmos-sdk"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.lock#L1-L16\n")),(0,n.yg)("h4",{id:"bufyaml"},(0,n.yg)("inlineCode",{parentName:"h4"},"buf.yaml")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"buf.yaml")," defines the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.yaml#L3"},"name of your package"),", which ",(0,n.yg)("a",{parentName:"p",href:"https://buf.build/docs/tutorials/getting-started-with-buf-cli#detect-breaking-changes"},"breakage checker")," to use and how to ",(0,n.yg)("a",{parentName:"p",href:"https://buf.build/docs/tutorials/getting-started-with-buf-cli#lint-your-api"},"lint your protobuf files"),". "),(0,n.yg)("p",null,"It is advised to use a tagged version of the buf modules corresponding to the version of the Cosmos SDK being are used. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/buf.yaml#L1-L24\n")),(0,n.yg)("p",null,"We use a variety of linters for the Cosmos SDK protobuf files. The repo also checks this in ci.\nA reference to the github actions can be found ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/.github/workflows/proto.yml#L1-L32"},"here")))}c.isMDXComponent=!0}}]);