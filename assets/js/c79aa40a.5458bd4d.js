"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[90581],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=g;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},64944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const o={},s="RFC 004: Accounts",r={unversionedId:"docs/build/rfc/rfc-004-accounts",id:"docs/build/rfc/rfc-004-accounts",title:"RFC 004: Accounts",description:"Changelog",source:"@site/cosmos-sdk/docs/build/rfc/rfc-004-accounts.md",sourceDirName:"docs/build/rfc",slug:"/docs/build/rfc/rfc-004-accounts",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/rfc/rfc-004-accounts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"RFC 003: Cross Language Account/Module Execution Model",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/rfc/rfc-003-crosslang"},next:{title:"RFC 005: Optimistic Execution",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/rfc/rfc-005-optimistic-execution"}},c={},l=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"1. Accounts Representation and Authentication Mechanism",id:"1-accounts-representation-and-authentication-mechanism",level:3},{value:"2. Limited Account Interface",id:"2-limited-account-interface",level:3},{value:"3. Multiple Implementations of the Account Interface",id:"3-multiple-implementations-of-the-account-interface",level:3},{value:"4. Primitive Authorization System",id:"4-primitive-authorization-system",level:3},{value:"5. Cyclic Dependencies and Abstraction Leaks",id:"5-cyclic-dependencies-and-abstraction-leaks",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Rethinking Account Representation and Business Logic",id:"rethinking-account-representation-and-business-logic",level:3},{value:"Account Message Reception",id:"account-message-reception",level:3},{value:"Consequences",id:"consequences",level:3},{value:"Standardization",id:"standardization",level:4},{value:"Implementation",id:"implementation",level:2},{value:"Account Definition",id:"account-definition",level:3},{value:"The InternalAccount definition",id:"the-internalaccount-definition",level:3},{value:"Init",id:"init",level:4},{value:"Execute",id:"execute",level:4},{value:"Query",id:"query",level:4},{value:"Schema",id:"schema",level:4},{value:"Migrate",id:"migrate",level:3},{value:"x/accounts module",id:"xaccounts-module",level:3},{value:"MsgDeploy",id:"msgdeploy",level:4},{value:"Address derivation",id:"address-derivation",level:4},{value:"MsgExecute",id:"msgexecute",level:4},{value:"MsgMigrate",id:"msgmigrate",level:3},{value:"Authorize Messages",id:"authorize-messages",level:4},{value:"Further discussion",id:"further-discussion",level:3},{value:"Sub-accounts",id:"sub-accounts",level:4},{value:"Predictable address creation",id:"predictable-address-creation",level:4},{value:"Joining Multiple Accounts",id:"joining-multiple-accounts",level:4}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"rfc-004-accounts"},"RFC 004: Accounts"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"17/03/2023: DRAFT"),(0,i.yg)("li",{parentName:"ul"},"09/05/2023: DRAFT 2")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"The current implementation of accounts in the Cosmos SDK is limiting in terms of functionality, extensibility, and overall\narchitecture. This RFC aims to address the following issues with the current account system:"),(0,i.yg)("h3",{id:"1-accounts-representation-and-authentication-mechanism"},"1. Accounts Representation and Authentication Mechanism"),(0,i.yg)("p",null,"The current SDK accounts are represented as ",(0,i.yg)("inlineCode",{parentName:"p"},"google.Protobuf.Any"),", which are then encapsulated into the account interface.\nThis account interface essentially represents the authentication mechanism, as it implements methods such as ",(0,i.yg)("inlineCode",{parentName:"p"},"GetNumber"),"\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"GetSequence")," that serve as abstractions over the authentication system. However, this approach restricts the scope and\nfunctionality of accounts within the SDK."),(0,i.yg)("h3",{id:"2-limited-account-interface"},"2. Limited Account Interface"),(0,i.yg)("p",null,"The account interface in its current form is not versatile enough to accommodate more advanced account functionalities,\nsuch as implementing vesting capabilities or more complex authentication and authorization systems."),(0,i.yg)("h3",{id:"3-multiple-implementations-of-the-account-interface"},"3. Multiple Implementations of the Account Interface"),(0,i.yg)("p",null,"There are several implementations of the account interface, like ",(0,i.yg)("inlineCode",{parentName:"p"},"ModuleAccount"),", but the existing abstraction does not\nallow for meaningful differentiation between them. This hinders the ability to create specialized accounts that cater to\nspecific use cases."),(0,i.yg)("h3",{id:"4-primitive-authorization-system"},"4. Primitive Authorization System"),(0,i.yg)("p",null,"The authorization system in the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth")," module is basic and defines authorizations solely for the functionalities of the\n",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," module. Consequently, although the state transition authorization system is defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth"),", it only covers the\nuse cases of ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank"),", limiting the system's overall scope and adaptability."),(0,i.yg)("h3",{id:"5-cyclic-dependencies-and-abstraction-leaks"},"5. Cyclic Dependencies and Abstraction Leaks"),(0,i.yg)("p",null,"The current account system leads to cyclic dependencies and abstraction leaks throughout the Cosmos SDK. For instance,\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"Vesting")," functionality belongs to the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth")," module, which depends on the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," module. However,\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," module depends on the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth")," module again to identify the account type (either ",(0,i.yg)("inlineCode",{parentName:"p"},"Vesting")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Base"),") during\na coin transfer. This dependency structure creates architectural issues and complicates the overall design of the SDK."),(0,i.yg)("h2",{id:"proposal"},"Proposal"),(0,i.yg)("p",null,"This proposal aims to transform the way accounts are managed within the Cosmos SDK by introducing significant changes to\ntheir structure and functionality."),(0,i.yg)("h3",{id:"rethinking-account-representation-and-business-logic"},"Rethinking Account Representation and Business Logic"),(0,i.yg)("p",null,"Instead of representing accounts as simple ",(0,i.yg)("inlineCode",{parentName:"p"},"google.Protobuf.Any")," structures stored in state with no business logic\nattached, this proposal suggests a more sophisticated account representation that is closer to module entities.\nIn fact, accounts should be able to receive messages and process them in the same way modules do, and be capable of storing\nstate in an isolated (prefixed) portion of state belonging only to them, in the same way as modules do."),(0,i.yg)("h3",{id:"account-message-reception"},"Account Message Reception"),(0,i.yg)("p",null,"We propose that accounts should be able to receive messages in the same way modules can, allowing them to manage their\nown state modifications without relying on other modules. This change would enable more advanced account functionality, such as the\n",(0,i.yg)("inlineCode",{parentName:"p"},"VestingAccount")," example, where the x/bank module previously needed to change the vestingState by casting the abstracted\naccount to ",(0,i.yg)("inlineCode",{parentName:"p"},"VestingAccount")," and triggering the ",(0,i.yg)("inlineCode",{parentName:"p"},"TrackDelegation")," call. Accounts are already capable of sending messages when\na state transition, originating from a transaction, is executed."),(0,i.yg)("p",null,"When accounts receive messages, they will be able to identify the sender of the message and decide how to process the\nstate transition, if at all."),(0,i.yg)("h3",{id:"consequences"},"Consequences"),(0,i.yg)("p",null,"These changes would have significant implications for the Cosmos SDK, resulting in a system of actors that are equal from\nthe runtime perspective. The runtime would only be responsible for propagating messages between actors and would not\nmanage the authorization system. Instead, actors would manage their own authorizations. For instance, there would be no\nneed for the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth")," module to manage minting or burning of coins permissions, as it would fall within the scope of the\n",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank")," module."),(0,i.yg)("p",null,"The key difference between accounts and modules would lie in the origin of the message (state transition). Accounts\n(ExternallyOwnedAccount), which have credentials (e.g., a public/private key pairing), originate state transitions from\ntransactions. In contrast, module state transitions do not have authentication credentials backing them and can be\ncaused by two factors: either as a consequence of a state transition coming from a transaction or triggered by a scheduler\n(e.g., the runtime's Begin/EndBlock)."),(0,i.yg)("p",null,"By implementing these proposed changes, the Cosmos SDK will benefit from a more extensible, versatile, and efficient account\nmanagement system that is better suited to address the requirements of the Cosmos ecosystem."),(0,i.yg)("h4",{id:"standardization"},"Standardization"),(0,i.yg)("p",null,"With ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts")," allowing a modular api there becomes a need for standardization of accounts or the interfaces wallets and other clients should expect to use. For this reason we will be using the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cips"},(0,i.yg)("inlineCode",{parentName:"a"},"CIP")," repo")," in order to standardize interfaces in order for wallets to know what to expect when interacting with accounts."),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("h3",{id:"account-definition"},"Account Definition"),(0,i.yg)("p",null,"We define the new ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," type, which is what an account needs to implement to be treated as such.\nAn ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," type is defined at APP level, so it cannot be dynamically loaded as the chain is running without upgrading the\nnode code, unless we create something like a ",(0,i.yg)("inlineCode",{parentName:"p"},"CosmWasmAccount")," which is an account backed by an ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm")," contract."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// Account is what the developer implements to define an account.\ntype Account[InitMsg proto.Message] interface {\n    // Init is the function that initialises an account instance of a given kind.\n    // InitMsg is used to initialise the initial state of an account.\n    Init(ctx *Context, msg InitMsg) error\n    // RegisterExecuteHandlers registers an account's execution messages.\n    RegisterExecuteHandlers(executeRouter *ExecuteRouter)\n    // RegisterQueryHandlers registers an account's query messages.\n    RegisterQueryHandlers(queryRouter *QueryRouter)\n    // RegisterMigrationHandlers registers an account's migration messages.\n    RegisterMigrationHandlers(migrationRouter *MigrationRouter)\n}\n")),(0,i.yg)("h3",{id:"the-internalaccount-definition"},"The InternalAccount definition"),(0,i.yg)("p",null,"The public ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," interface implementation is then converted by the runtime into an ",(0,i.yg)("inlineCode",{parentName:"p"},"InternalAccount")," implementation,\nwhich contains all the information and business logic needed to operate the account."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Schema struct {\n    state StateSchema // represents the state of an account\n    init InitSchema // represents the init msg schema\n    exec ExecSchema // represents the multiple execution msg schemas, containing also responses\n    query QuerySchema // represents the multiple query msg schemas, containing also responses\n    migrate *MigrateSchema // represents the multiple migrate msg schemas, containing also responses, it's optional\n}\n\ntype InternalAccount struct {\n    init    func(ctx *Context, msg proto.Message) (*InitResponse, error)\n    execute func(ctx *Context, msg proto.Message) (*ExecuteResponse, error)\n    query   func(ctx *Context, msg proto.Message) (proto.Message, error)\n    schema  func() *Schema\n    migrate func(ctx *Context, msg proto.Message) (*MigrateResponse, error)\n}\n")),(0,i.yg)("p",null,"This is an internal view of the account as intended by the system. It is not meant to be what developers implement. An\nexample implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"InternalAccount")," type can be found in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/testinginprod/accounts-poc/blob/main/examples/recover/recover.go"},"this"),"\nexample of account whose credentials can be recovered. In fact, even if the ",(0,i.yg)("inlineCode",{parentName:"p"},"Internal")," implementation is untyped (with\nrespect to ",(0,i.yg)("inlineCode",{parentName:"p"},"proto.Message"),"), the concrete implementation is fully typed."),(0,i.yg)("p",null,"During any of the execution methods of ",(0,i.yg)("inlineCode",{parentName:"p"},"InternalAccount"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"schema")," excluded, the account is given a ",(0,i.yg)("inlineCode",{parentName:"p"},"Context")," which provides:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A namespaced ",(0,i.yg)("inlineCode",{parentName:"li"},"KVStore")," for the account, which isolates the account state from others (NOTE: no ",(0,i.yg)("inlineCode",{parentName:"li"},"store keys")," needed,\nthe account address serves as ",(0,i.yg)("inlineCode",{parentName:"li"},"store key"),")."),(0,i.yg)("li",{parentName:"ul"},"Information regarding itself (its address)"),(0,i.yg)("li",{parentName:"ul"},"Information regarding the sender."),(0,i.yg)("li",{parentName:"ul"},"...")),(0,i.yg)("h4",{id:"init"},"Init"),(0,i.yg)("p",null,"Init defines the entrypoint that allows for a new account instance of a given kind to be initialised.\nThe account is passed some opaque protobuf message which is then interpreted and contains the instructions that\nconstitute the initial state of an account once it is deployed."),(0,i.yg)("p",null,"An ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," code can be deployed multiple times through the ",(0,i.yg)("inlineCode",{parentName:"p"},"Init")," function, similar to how a ",(0,i.yg)("inlineCode",{parentName:"p"},"CosmWasm")," contract code\ncan be deployed (Instantiated) multiple times."),(0,i.yg)("h4",{id:"execute"},"Execute"),(0,i.yg)("p",null,"Execute defines the entrypoint that allows an ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," to process a state transition, the account can decide then how to\nprocess the state transition based on the message provided and the sender of the transition."),(0,i.yg)("h4",{id:"query"},"Query"),(0,i.yg)("p",null,"Query defines a read-only entrypoint that provides a stable interface that links an account with its state. The reason for\nwhich ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," is still being preferred as an addition to raw state reflection is to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Provide a stable interface for querying (state can be optimised and change more frequently than a query)"),(0,i.yg)("li",{parentName:"ul"},"Provide a way to define an account ",(0,i.yg)("inlineCode",{parentName:"li"},"Interface")," with respect to its ",(0,i.yg)("inlineCode",{parentName:"li"},"Read/Write")," paths."),(0,i.yg)("li",{parentName:"ul"},"Provide a way to query information that cannot be processed from raw state reflection, ex: compute information from lazy\nstate that has not been yet concretely processed (eg: balances with respect to lazy inputs/outputs)")),(0,i.yg)("h4",{id:"schema"},"Schema"),(0,i.yg)("p",null,"Schema provides the definition of an account from ",(0,i.yg)("inlineCode",{parentName:"p"},"API")," perspective, and it's the only thing that should be taken into account\nwhen interacting with an account from another account or module, for example: an account is an ",(0,i.yg)("inlineCode",{parentName:"p"},"authz-interface")," account if\nit has the following message in its execution messages ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgProxyStateTransition{ state_transition: google.Protobuf.Any }"),"."),(0,i.yg)("h3",{id:"migrate"},"Migrate"),(0,i.yg)("p",null,"Migrate defines the entrypoint that allows an ",(0,i.yg)("inlineCode",{parentName:"p"},"Account")," to migrate its state from a previous version to a new one. Migrations\ncan be initiated only by the account itself, concretely this means that the migrate action sender can only be the account address\nitself, if the account wants to allow another address to migrate it on its behalf then it could create an execution message\nthat makes the account migrate itself."),(0,i.yg)("h3",{id:"xaccounts-module"},"x/accounts module"),(0,i.yg)("p",null,"In order to create accounts we define a new module ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts"),", note that ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts")," deploys account with no authentication\ncredentials attached to it which means no action of an account can be incepted from a TX, we will later explore how the\n",(0,i.yg)("inlineCode",{parentName:"p"},"x/authn")," module uses ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts")," to deploy authenticated accounts."),(0,i.yg)("p",null,"This also has another important implication for which account addresses are now fully decoupled from the authentication mechanism\nwhich makes in turn off-chain operations a little more complex, as the chain becomes the real link between account identifier\nand credentials."),(0,i.yg)("p",null,"We could also introduce a way to deterministically compute the account address."),(0,i.yg)("p",null,"Note, from the transaction point of view, the ",(0,i.yg)("inlineCode",{parentName:"p"},"init_message")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"execute_message")," are opaque ",(0,i.yg)("inlineCode",{parentName:"p"},"google.Protobuf.Any"),"."),(0,i.yg)("p",null,"The module protobuf definition for ",(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts")," are the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Msg defines the Msg service.\nservice Msg {\n  rpc Deploy(MsgDeploy) returns (MsgDeployResponse);\n  rpc Execute(MsgExecute) returns (MsgExecuteResponse);\n  rpc Migrate(MsgMigrate) returns (MsgMigrateResponse);\n}\n\nmessage MsgDeploy {\n  string sender = 1;\n  string kind = 2;\n  google.Protobuf.Any init_message = 3;\n  repeated google.Protobuf.Any authorize_messages = 4 [(gogoproto.nullable) = false];\n}\n\nmessage MsgDeployResponse {\n  string address = 1;\n  uint64 id = 2;\n  google.Protobuf.Any data = 3;\n}\n\nmessage MsgExecute {\n  string sender = 1;\n  string address = 2;\n  google.Protobuf.Any message = 3;\n  repeated google.Protobuf.Any authorize_messages = 4 [(gogoproto.nullable) = false];\n}\n\nmessage MsgExecuteResponse {\n  google.Protobuf.Any data = 1;\n}\n\nmessage MsgMigrate {\n  string sender = 1;\n  string new_account_kind = 2;\n  google.Protobuf.Any migrate_message = 3;\n}\n\nmessage MsgMigrateResponse {\n  google.Protobuf.Any data = 1;\n}\n\n")),(0,i.yg)("h4",{id:"msgdeploy"},"MsgDeploy"),(0,i.yg)("p",null,"Deploys a new instance of the given account ",(0,i.yg)("inlineCode",{parentName:"p"},"kind")," with initial settings represented by the ",(0,i.yg)("inlineCode",{parentName:"p"},"init_message")," which is a ",(0,i.yg)("inlineCode",{parentName:"p"},"google.Protobuf.Any"),".\nOf course the ",(0,i.yg)("inlineCode",{parentName:"p"},"init_message")," can be empty. A response is returned containing the account ID and humanised address, alongside some response\nthat the account instantiation might produce."),(0,i.yg)("h4",{id:"address-derivation"},"Address derivation"),(0,i.yg)("p",null,"In order to decouple public keys from account addresses, we introduce a new address derivation mechanism which is"),(0,i.yg)("h4",{id:"msgexecute"},"MsgExecute"),(0,i.yg)("p",null,"Sends a ",(0,i.yg)("inlineCode",{parentName:"p"},"StateTransition")," execution request, where the state transition is represented by the ",(0,i.yg)("inlineCode",{parentName:"p"},"message")," which is a ",(0,i.yg)("inlineCode",{parentName:"p"},"google.Protobuf.Any"),".\nThe account can then decide if to process it or not based on the ",(0,i.yg)("inlineCode",{parentName:"p"},"sender"),"."),(0,i.yg)("h3",{id:"msgmigrate"},"MsgMigrate"),(0,i.yg)("p",null,"Migrates an account to a new version of itself, the new version is represented by the ",(0,i.yg)("inlineCode",{parentName:"p"},"new_account_kind"),". The state transition\ncan only be incepted by the account itself, which means that the ",(0,i.yg)("inlineCode",{parentName:"p"},"sender")," must be the account address itself. During the migration\nthe account current state is given to the new version of the account, which then executes the migration logic using the ",(0,i.yg)("inlineCode",{parentName:"p"},"migrate_message"),",\nit might change state or not, it's up to the account to decide. The response contains possible data that the account might produce\nafter the migration."),(0,i.yg)("h4",{id:"authorize-messages"},"Authorize Messages"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Deploy")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Execute")," messages have a field in common called ",(0,i.yg)("inlineCode",{parentName:"p"},"authorize_messages"),", these messages are messages that the account\ncan execute on behalf of the sender. For example, in case an account is expecting some funds to be sent from the sender,\nthe sender can attach a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," that the account can execute on the sender's behalf. These authorizations are short-lived,\nthey live only for the duration of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Deploy")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Execute")," message execution, or until they are consumed."),(0,i.yg)("p",null,"An alternative would have been to add a ",(0,i.yg)("inlineCode",{parentName:"p"},"funds")," field, like it happens in cosmwasm, which guarantees the called contract that\nthe funds are available and sent in the context of the message execution. This would have been a simpler approach, but it would\nhave been limited to the context of ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," only, where the asset is ",(0,i.yg)("inlineCode",{parentName:"p"},"sdk.Coins"),". The proposed generic way, instead, allows\nthe account to execute any message on behalf of the sender, which is more flexible, it could include NFT send execution, or\nmore complex things like ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgMultiSend")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgDelegate"),", etc."),(0,i.yg)("h3",{id:"further-discussion"},"Further discussion"),(0,i.yg)("h4",{id:"sub-accounts"},"Sub-accounts"),(0,i.yg)("p",null,"We could provide a way to link accounts to other accounts. Maybe during deployment the sender could decide to link the\nnewly created to its own account, although there might be use-cases for which the deployer is different from the account\nthat needs to be linked, in this case a handshake protocol on linking would need to be defined."),(0,i.yg)("h4",{id:"predictable-address-creation"},"Predictable address creation"),(0,i.yg)("p",null,"We need to provide a way to create an account with a predictable address, this might serve a lot of purposes, like accounts\nwanting to generate an address that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"nobody else can claim besides the account used to generate the new account"),(0,i.yg)("li",{parentName:"ul"},"is predictable")),(0,i.yg)("p",null,"For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"\nmessage MsgDeployPredictable {\n  string sender = 1;\n  uint32 nonce = 2; \n  ...\n}\n")),(0,i.yg)("p",null,"And then the address becomes ",(0,i.yg)("inlineCode",{parentName:"p"},"bechify(concat(sender, nonce))")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x/accounts")," would still use the monotonically increasing sequence as account number."),(0,i.yg)("h4",{id:"joining-multiple-accounts"},"Joining Multiple Accounts"),(0,i.yg)("p",null,"As developers are building new kinds of accounts, it becomes necessary to provide a default way to combine the\nfunctionalities of different account types. This allows developers to avoid duplicating code and enables end-users to\ncreate or migrate to accounts with multiple functionalities without requiring custom development."),(0,i.yg)("p",null,'To address this need, we propose the inclusion of a default account type called "MultiAccount". The MultiAccount type is\ndesigned to merge the functionalities of other accounts by combining their execution, query, and migration APIs.\nThe account joining process would only fail in the case of API (intended as non-state Schema APIs) conflicts, ensuring\ncompatibility and consistency.'),(0,i.yg)("p",null,"With the introduction of the MultiAccount type, users would have the option to either migrate their existing accounts to\na MultiAccount type or extend an existing MultiAccount with newer APIs. This flexibility empowers users to leverage\nvarious account functionalities without compromising compatibility or resorting to manual code duplication."),(0,i.yg)("p",null,"The MultiAccount type serves as a standardized solution for combining different account functionalities within the\ncosmos-sdk ecosystem. By adopting this approach, developers can streamline the development process and users can benefit\nfrom a modular and extensible account system."))}p.isMDXComponent=!0}}]);