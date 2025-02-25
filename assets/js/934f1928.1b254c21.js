"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[30001],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const r={},i="ADR 029: Fee Grant Module",s={unversionedId:"docs/architecture/adr-029-fee-grant-module",id:"docs/architecture/adr-029-fee-grant-module",title:"ADR 029: Fee Grant Module",description:"Changelog",source:"@site/cosmos-sdk/docs/architecture/adr-029-fee-grant-module.md",sourceDirName:"docs/architecture",slug:"/docs/architecture/adr-029-fee-grant-module",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/architecture/adr-029-fee-grant-module",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-029-fee-grant-module"},"ADR 029: Fee Grant Module"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"2020/08/18: Initial Draft"),(0,o.yg)("li",{parentName:"ul"},"2021/05/05: Removed height based expiration support and simplified naming.")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"Accepted"),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"In order to make blockchain transactions, the signing account must possess a sufficient balance of the right denomination\nin order to pay fees. There are classes of transactions where needing to maintain a wallet with sufficient fees is a\nbarrier to adoption."),(0,o.yg)("p",null,'For instance, when proper permissions are setup, someone may temporarily delegate the ability to vote on proposals to\na "burner" account that is stored on a mobile phone with only minimal security.'),(0,o.yg)("p",null,"Other use cases include workers tracking items in a supply chain or farmers submitting field data for analytics\nor compliance purposes."),(0,o.yg)("p",null,"For all of these use cases, UX would be significantly enhanced by obviating the need for these accounts to always\nmaintain the appropriate fee balance. This is especially true if we wanted to achieve enterprise adoption for something\nlike supply chain tracking."),(0,o.yg)("p",null,'While one solution would be to have a service that fills up these accounts automatically with the appropriate fees, a better UX\nwould be provided by allowing these accounts to pull from a common fee pool account with proper spending limits.\nA single pool would reduce the churn of making lots of small "fill up" transactions and also more effectively leverages\nthe resources of the organization setting up the pool.'),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"As a solution we propose a module, ",(0,o.yg)("inlineCode",{parentName:"p"},"x/feegrant"),' which allows one account, the "granter" to grant another account, the "grantee"\nan allowance to spend the granter\'s account balance for fees within certain well-defined limits.'),(0,o.yg)("p",null,"Fee allowances are defined by the extensible ",(0,o.yg)("inlineCode",{parentName:"p"},"FeeAllowanceI")," interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type FeeAllowanceI {\n  // Accept can use fee payment requested as well as timestamp of the current block\n  // to determine whether or not to process this. This is checked in\n  // Keeper.UseGrantedFees and the return values should match how it is handled there.\n  //\n  // If it returns an error, the fee payment is rejected, otherwise it is accepted.\n  // The FeeAllowance implementation is expected to update it's internal state\n  // and will be saved again after an acceptance.\n  //\n  // If remove is true (regardless of the error), the FeeAllowance will be deleted from storage\n  // (eg. when it is used up). (See call to RevokeFeeAllowance in Keeper.UseGrantedFees)\n  Accept(ctx sdk.Context, fee sdk.Coins, msgs []sdk.Msg) (remove bool, err error)\n\n  // ValidateBasic should evaluate this FeeAllowance for internal consistency.\n  // Don't allow negative amounts, or negative periods for example.\n  ValidateBasic() error\n}\n")),(0,o.yg)("p",null,"Two basic fee allowance types, ",(0,o.yg)("inlineCode",{parentName:"p"},"BasicAllowance")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PeriodicAllowance")," are defined to support known use cases:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// BasicAllowance implements FeeAllowanceI with a one-time grant of tokens\n// that optionally expires. The delegatee can use up to SpendLimit to cover fees.\nmessage BasicAllowance {\n  // spend_limit specifies the maximum amount of tokens that can be spent\n  // by this allowance and will be updated as tokens are spent. If it is\n  // empty, there is no spend limit and any amount of coins can be spent.\n  repeated cosmos_sdk.v1.Coin spend_limit = 1;\n\n  // expiration specifies an optional time when this allowance expires\n  google.protobuf.Timestamp expiration = 2;\n}\n\n// PeriodicAllowance extends FeeAllowanceI to allow for both a maximum cap,\n// as well as a limit per time period.\nmessage PeriodicAllowance {\n  BasicAllowance basic = 1;\n\n  // period specifies the time duration in which period_spend_limit coins can\n  // be spent before that allowance is reset\n  google.protobuf.Duration period = 2;\n\n  // period_spend_limit specifies the maximum number of coins that can be spent\n  // in the period\n  repeated cosmos_sdk.v1.Coin period_spend_limit = 3;\n\n  // period_can_spend is the number of coins left to be spent before the period_reset time\n  repeated cosmos_sdk.v1.Coin period_can_spend = 4;\n\n  // period_reset is the time at which this period resets and a new one begins,\n  // it is calculated from the start time of the first transaction after the\n  // last period ended\n  google.protobuf.Timestamp period_reset = 5;\n}\n\n")),(0,o.yg)("p",null,"Allowances can be granted and revoked using ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgGrantAllowance")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgRevokeAllowance"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// MsgGrantAllowance adds permission for Grantee to spend up to Allowance\n// of fees from the account of Granter.\nmessage MsgGrantAllowance {\n     string granter = 1;\n     string grantee = 2;\n     google.protobuf.Any allowance = 3;\n }\n\n // MsgRevokeAllowance removes any existing FeeAllowance from Granter to Grantee.\n message MsgRevokeAllowance {\n     string granter = 1;\n     string grantee = 2;\n }\n")),(0,o.yg)("p",null,"In order to use allowances in transactions, we add a new field ",(0,o.yg)("inlineCode",{parentName:"p"},"granter")," to the transaction ",(0,o.yg)("inlineCode",{parentName:"p"},"Fee")," type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"package cosmos.tx.v1beta1;\n\nmessage Fee {\n  repeated cosmos.base.v1beta1.Coin amount = 1;\n  uint64 gas_limit = 2;\n  string payer = 3;\n  string granter = 4;\n}\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"granter")," must either be left empty or must correspond to an account which has granted\na fee allowance to fee payer (either the first signer or the value of the ",(0,o.yg)("inlineCode",{parentName:"p"},"payer")," field)."),(0,o.yg)("p",null,"A new ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteDecorator")," named ",(0,o.yg)("inlineCode",{parentName:"p"},"DeductGrantedFeeDecorator")," will be created in order to process transactions with ",(0,o.yg)("inlineCode",{parentName:"p"},"fee_payer"),"\nset and correctly deduct fees based on fee allowances."),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"improved UX for use cases where it is cumbersome to maintain an account balance just for fees")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"a new field must be added to the transaction ",(0,o.yg)("inlineCode",{parentName:"li"},"Fee")," message and a new ",(0,o.yg)("inlineCode",{parentName:"li"},"AnteDecorator")," must be\ncreated to use it")),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Blog article describing initial work: ",(0,o.yg)("a",{parentName:"li",href:"https://medium.com/regen-network/hacking-the-cosmos-cosmwasm-and-key-management-a08b9f561d1b"},"https://medium.com/regen-network/hacking-the-cosmos-cosmwasm-and-key-management-a08b9f561d1b")),(0,o.yg)("li",{parentName:"ul"},"Initial public specification: ",(0,o.yg)("a",{parentName:"li",href:"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56"},"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56")),(0,o.yg)("li",{parentName:"ul"},"Original subkeys proposal from B-harvest which influenced this design: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4480"},"https://github.com/cosmos/cosmos-sdk/issues/4480"))))}u.isMDXComponent=!0}}]);