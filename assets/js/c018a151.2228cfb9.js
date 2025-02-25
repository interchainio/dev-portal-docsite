"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[57277],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,u=m["".concat(l,".").concat(c)]||m[c]||g[c]||s;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},27299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const s={sidebar_position:1},o="Msg Services",i={unversionedId:"build/building-modules/msg-services",id:"version-0.50/build/building-modules/msg-services",title:"Msg Services",description:"A Protobuf Msg service processes messages. Protobuf Msg services are specific to the module in which they are defined, and only process messages defined within the said module. They are called from BaseApp during DeliverTx.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/03-msg-services.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/msg-services",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/msg-services",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Messages and Queries",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/messages-and-queries"},next:{title:"Query Services",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/query-services"}},l={},p=[{value:"Implementation of a module <code>Msg</code> service",id:"implementation-of-a-module-msg-service",level:2},{value:"Validation",id:"validation",level:3},{value:"State Transition",id:"state-transition",level:3},{value:"Events",id:"events",level:3},{value:"Telemetry",id:"telemetry",level:2}],d={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"msg-services"},(0,r.yg)("inlineCode",{parentName:"h1"},"Msg")," Services"),(0,r.yg)("admonition",{title:"Synopsis",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"A Protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service processes ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/messages-and-queries#messages"},"messages"),". Protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," services are specific to the module in which they are defined, and only process messages defined within the said module. They are called from ",(0,r.yg)("inlineCode",{parentName:"p"},"BaseApp")," during ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/baseapp#delivertx"},(0,r.yg)("inlineCode",{parentName:"a"},"DeliverTx")),".")),(0,r.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/module-manager"},"Module Manager")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/messages-and-queries"},"Messages and Queries")))),(0,r.yg)("h2",{id:"implementation-of-a-module-msg-service"},"Implementation of a module ",(0,r.yg)("inlineCode",{parentName:"h2"},"Msg")," service"),(0,r.yg)("p",null,"Each module should define a Protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service, which will be responsible for processing requests (implementing ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),") and returning responses."),(0,r.yg)("p",null,"As further described in ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/architecture/adr-031-msg-service"},"ADR 031"),", this approach has the advantage of clearly specifying return types and generating server and client code."),(0,r.yg)("p",null,"Protobuf generates a ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgServer")," interface based on a definition of ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service. It is the role of the module developer to implement this interface, by implementing the state transition logic that should happen upon receival of each ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),". As an example, here is the generated ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgServer")," interface for ",(0,r.yg)("inlineCode",{parentName:"p"},"x/bank"),", which exposes two ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/types/tx.pb.go#L550-L568\n")),(0,r.yg)("p",null,"When possible, the existing module's ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},(0,r.yg)("inlineCode",{parentName:"a"},"Keeper"))," should implement ",(0,r.yg)("inlineCode",{parentName:"p"},"MsgServer"),", otherwise a ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," struct that embeds the ",(0,r.yg)("inlineCode",{parentName:"p"},"Keeper")," can be created, typically in ",(0,r.yg)("inlineCode",{parentName:"p"},"./keeper/msg_server.go"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/msg_server.go#L17-L19\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," methods can retrieve the ",(0,r.yg)("inlineCode",{parentName:"p"},"context.Context")," from the ",(0,r.yg)("inlineCode",{parentName:"p"},"context.Context")," parameter method using the ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/msg_server.go#L56\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," processing usually follows these 3 steps:"),(0,r.yg)("h3",{id:"validation"},"Validation"),(0,r.yg)("p",null,"The message server must perform all validation required (both ",(0,r.yg)("em",{parentName:"p"},"stateful")," and ",(0,r.yg)("em",{parentName:"p"},"stateless"),") to make sure the ",(0,r.yg)("inlineCode",{parentName:"p"},"message")," is valid.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"signer")," is charged for the gas cost of this validation."),(0,r.yg)("p",null,"For example, a ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," method for a ",(0,r.yg)("inlineCode",{parentName:"p"},"transfer")," message should check that the sending account has enough funds to actually perform the transfer. "),(0,r.yg)("p",null,"It is recommended to implement all validation checks in a separate function that passes state values as arguments. This implementation simplifies testing. As expected, expensive validation functions charge additional gas. Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'ValidateMsgA(msg MsgA, now Time, gm GasMeter) error {\n    if now.Before(msg.Expire) {\n        return sdkerrrors.ErrInvalidRequest.Wrap("msg expired")\n    }\n    gm.ConsumeGas(1000, "signature verification")\n    return signatureVerificaton(msg.Prover, msg.Data)\n}\n')),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"Previously, the ",(0,r.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," method was used to perform simple and stateless validation checks.\nThis way of validating is deprecated, this means the ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," must perform all validation checks.")),(0,r.yg)("h3",{id:"state-transition"},"State Transition"),(0,r.yg)("p",null,"After the validation is successful, the ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," method uses the ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/build/building-modules/keeper"},(0,r.yg)("inlineCode",{parentName:"a"},"keeper"))," functions to access the state and perform a state transition."),(0,r.yg)("h3",{id:"events"},"Events"),(0,r.yg)("p",null,"Before returning, ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," methods generally emit one or more ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/events"},"events")," by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"EventManager")," held in the ",(0,r.yg)("inlineCode",{parentName:"p"},"ctx"),". Use the new ",(0,r.yg)("inlineCode",{parentName:"p"},"EmitTypedEvent")," function that uses protobuf-based event types:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"ctx.EventManager().EmitTypedEvent(\n    &group.EventABC{Key1: Value1,  Key2, Value2})\n")),(0,r.yg)("p",null,"or the older ",(0,r.yg)("inlineCode",{parentName:"p"},"EmitEvent")," function: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"ctx.EventManager().EmitEvent(\n    sdk.NewEvent(\n        eventType,  // e.g. sdk.EventTypeMessage for a message, types.CustomEventType for a custom event defined in the module\n        sdk.NewAttribute(key1, value1),\n        sdk.NewAttribute(key2, value2),\n    ),\n)\n")),(0,r.yg)("p",null,"These events are relayed back to the underlying consensus engine and can be used by service providers to implement services around the application. Click ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/events"},"here")," to learn more about events."),(0,r.yg)("p",null,"The invoked ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," method returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"proto.Message")," response and an ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),". These return values are then wrapped into an ",(0,r.yg)("inlineCode",{parentName:"p"},"*sdk.Result")," or an ",(0,r.yg)("inlineCode",{parentName:"p"},"error")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.WrapServiceResult(ctx context.Context, res proto.Message, err error)"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/baseapp/msg_service_router.go#L160\n")),(0,r.yg)("p",null,"This method takes care of marshaling the ",(0,r.yg)("inlineCode",{parentName:"p"},"res")," parameter to protobuf and attaching any events on the ",(0,r.yg)("inlineCode",{parentName:"p"},"ctx.EventManager()")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Result"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/proto/cosmos/base/abci/v1beta1/abci.proto#L93-L113\n")),(0,r.yg)("p",null,"This diagram shows a typical structure of a Protobuf ",(0,r.yg)("inlineCode",{parentName:"p"},"Msg")," service, and how the message propagates through the module."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cosmos/cosmos-sdk/release/v0.46.x/docs/uml/svg/transaction_flow.svg",alt:"Transaction flow"})),(0,r.yg)("h2",{id:"telemetry"},"Telemetry"),(0,r.yg)("p",null,"New ",(0,r.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/learn/advanced/telemetry"},"telemetry metrics")," can be created from ",(0,r.yg)("inlineCode",{parentName:"p"},"msgServer")," methods when handling messages."),(0,r.yg)("p",null,"This is an example from the ",(0,r.yg)("inlineCode",{parentName:"p"},"x/auth/vesting")," module:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/vesting/msg_server.go#L76-L88\n")))}g.isMDXComponent=!0}}]);