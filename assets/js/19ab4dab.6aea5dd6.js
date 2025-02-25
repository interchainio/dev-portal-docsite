"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[83545],{15680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>y});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),o=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=o(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(r),d=n,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||p;return r?t.createElement(y,i(i({ref:a},u),{},{components:r})):t.createElement(y,i({ref:a},u))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=r[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57957:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var t=r(58168),n=(r(96540),r(15680));const p={sidebar_position:1},i="x/params",l={unversionedId:"build/modules/params/README",id:"version-0.50/build/modules/params/README",title:"x/params",description:"Note: The Params module has been depreacted in favour of each module housing its own parameters.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/modules/params/README.md",sourceDirName:"build/modules/params",slug:"/build/modules/params/",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/modules/params/",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/nft",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/modules/nft/"},next:{title:"x/slashing",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/modules/slashing/"}},s={},o=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Keeper",id:"keeper",level:2},{value:"Subspace",id:"subspace",level:2},{value:"Key",id:"key",level:3},{value:"KeyTable",id:"keytable",level:3},{value:"ParamSet",id:"paramset",level:3}],u={toc:o},m="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(m,(0,t.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"xparams"},(0,n.yg)("inlineCode",{parentName:"h1"},"x/params")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note: The Params module has been depreacted in favour of each module housing its own parameters. ")),(0,n.yg)("h2",{id:"abstract"},"Abstract"),(0,n.yg)("p",null,"Package params provides a globally available parameter store."),(0,n.yg)("p",null,"There are two main types, Keeper and Subspace. Subspace is an isolated namespace for a\nparamstore, where keys are prefixed by preconfigured spacename. Keeper has a\npermission to access all existing spaces."),(0,n.yg)("p",null,"Subspace can be used by the individual keepers, which need a private parameter store\nthat the other keepers cannot modify. The params Keeper can be used to add a route to ",(0,n.yg)("inlineCode",{parentName:"p"},"x/gov")," router in order to modify any parameter in case a proposal passes."),(0,n.yg)("p",null,"The following contents explains how to use params module for master and user modules."),(0,n.yg)("h2",{id:"contents"},"Contents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#keeper"},"Keeper")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#subspace"},"Subspace"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#key"},"Key")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#keytable"},"KeyTable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#paramset"},"ParamSet"))))),(0,n.yg)("h2",{id:"keeper"},"Keeper"),(0,n.yg)("p",null,"In the app initialization stage, ",(0,n.yg)("a",{parentName:"p",href:"#subspace"},"subspaces")," can be allocated for other modules' keeper using ",(0,n.yg)("inlineCode",{parentName:"p"},"Keeper.Subspace")," and are stored in ",(0,n.yg)("inlineCode",{parentName:"p"},"Keeper.spaces"),". Then, those modules can have a reference to their specific parameter store through ",(0,n.yg)("inlineCode",{parentName:"p"},"Keeper.GetSubspace"),"."),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"type ExampleKeeper struct {\n    paramSpace paramtypes.Subspace\n}\n\nfunc (k ExampleKeeper) SetParams(ctx sdk.Context, params types.Params) {\n    k.paramSpace.SetParamSet(ctx, &params)\n}\n")),(0,n.yg)("h2",{id:"subspace"},"Subspace"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Subspace")," is a prefixed subspace of the parameter store. Each module which uses the\nparameter store will take a ",(0,n.yg)("inlineCode",{parentName:"p"},"Subspace")," to isolate permission to access."),(0,n.yg)("h3",{id:"key"},"Key"),(0,n.yg)("p",null,"Parameter keys are human readable alphanumeric strings. A parameter for the key\n",(0,n.yg)("inlineCode",{parentName:"p"},'"ExampleParameter"')," is stored under ",(0,n.yg)("inlineCode",{parentName:"p"},'[]byte("SubspaceName" + "/" + "ExampleParameter")'),",\nwhere ",(0,n.yg)("inlineCode",{parentName:"p"},'"SubspaceName"')," is the name of the subspace."),(0,n.yg)("p",null,"Subkeys are secondary parameter keys those are used along with a primary parameter key.\nSubkeys can be used for grouping or dynamic parameter key generation during runtime."),(0,n.yg)("h3",{id:"keytable"},"KeyTable"),(0,n.yg)("p",null,"All of the parameter keys that will be used should be registered at the compile\ntime. ",(0,n.yg)("inlineCode",{parentName:"p"},"KeyTable")," is essentially a ",(0,n.yg)("inlineCode",{parentName:"p"},"map[string]attribute"),", where the ",(0,n.yg)("inlineCode",{parentName:"p"},"string")," is a parameter key."),(0,n.yg)("p",null,"Currently, ",(0,n.yg)("inlineCode",{parentName:"p"},"attribute")," consists of a ",(0,n.yg)("inlineCode",{parentName:"p"},"reflect.Type"),", which indicates the parameter\ntype to check that provided key and value are compatible and registered, as well as a function ",(0,n.yg)("inlineCode",{parentName:"p"},"ValueValidatorFn")," to validate values."),(0,n.yg)("p",null,"Only primary keys have to be registered on the ",(0,n.yg)("inlineCode",{parentName:"p"},"KeyTable"),". Subkeys inherit the\nattribute of the primary key."),(0,n.yg)("h3",{id:"paramset"},"ParamSet"),(0,n.yg)("p",null,"Modules often define parameters as a proto message. The generated struct can implement\n",(0,n.yg)("inlineCode",{parentName:"p"},"ParamSet")," interface to be used with the following methods:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"KeyTable.RegisterParamSet()"),": registers all parameters in the struct"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Subspace.{Get, Set}ParamSet()"),": Get to & Set from the struct")),(0,n.yg)("p",null,"The implementor should be a pointer in order to use ",(0,n.yg)("inlineCode",{parentName:"p"},"GetParamSet()"),"."))}c.isMDXComponent=!0}}]);