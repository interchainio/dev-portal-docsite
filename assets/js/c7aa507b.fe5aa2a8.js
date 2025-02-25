"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[38611],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={},s="ADR 032: Typed Events",i={unversionedId:"docs/build/architecture/adr-032-typed-events",id:"docs/build/architecture/adr-032-typed-events",title:"ADR 032: Typed Events",description:"Changelog",source:"@site/cosmos-sdk/docs/build/architecture/adr-032-typed-events.md",sourceDirName:"docs/build/architecture",slug:"/docs/build/architecture/adr-032-typed-events",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-032-typed-events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 031: Protobuf Msg Services",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-031-msg-service"},next:{title:"ADR 033: Protobuf-based Inter-Module Communication",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/architecture/adr-033-protobuf-inter-module-comm"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Authors",id:"authors",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"How to subscribe to these typed events in <code>Client</code>",id:"how-to-subscribe-to-these-typed-events-in-client",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Detailed code example of publishing events",id:"detailed-code-example-of-publishing-events",level:2},{value:"References",id:"references",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-032-typed-events"},"ADR 032: Typed Events"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"28-Sept-2020: Initial Draft")),(0,a.yg)("h2",{id:"authors"},"Authors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Anil Kumar (@anilcse)"),(0,a.yg)("li",{parentName:"ul"},"Jack Zampolin (@jackzampolin)"),(0,a.yg)("li",{parentName:"ul"},"Adam Bozanich (@boz)")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Proposed"),(0,a.yg)("h2",{id:"abstract"},"Abstract"),(0,a.yg)("p",null,"Currently in the Cosmos SDK, events are defined in the handlers for each message as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlock"),". Each module doesn't have types defined for each event, they are implemented as ",(0,a.yg)("inlineCode",{parentName:"p"},"map[string]string"),". Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use ",(0,a.yg)("strong",{parentName:"p"},"typed events")," defined in each module such that emitting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team."),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"Currently in the Cosmos SDK, events are defined in the handlers for each message, meaning each module doesn't have a canonical set of types for each event. Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use ",(0,a.yg)("strong",{parentName:"p"},"typed events")," defined in each module such that emitting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/akash-network/node"},"Our platform")," requires a number of programmatic on chain interactions both on the provider (datacenter - to bid on new orders and listen for leases created) and user (application developer - to send the app manifest to the provider) side. In addition the Akash team is now maintaining the IBC ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/relayer"},(0,a.yg)("inlineCode",{parentName:"a"},"relayer")),", another very event driven process. In working on these core pieces of infrastructure, and integrating lessons learned from Kubernetes development, our team has developed a standard method for defining and consuming typed events in Cosmos SDK modules. We have found that it is extremely useful in building this type of event driven application."),(0,a.yg)("p",null,"As the Cosmos SDK gets used more extensively for apps like ",(0,a.yg)("inlineCode",{parentName:"p"},"peggy"),", other peg zones, IBC, DeFi, etc... there will be an exploding demand for event driven applications to support new features desired by users. We propose upstreaming our findings into the Cosmos SDK to enable all Cosmos SDK applications to quickly and easily build event driven apps to aid their core application. Wallets, exchanges, explorers, and defi protocols all stand to benefit from this work."),(0,a.yg)("p",null,"If this proposal is accepted, users will be able to build event driven Cosmos SDK apps in go by just writing ",(0,a.yg)("inlineCode",{parentName:"p"},"EventHandler"),"s for their specific event types and passing them to ",(0,a.yg)("inlineCode",{parentName:"p"},"EventEmitters")," that are defined in the Cosmos SDK."),(0,a.yg)("p",null,"The end of this proposal contains a detailed example of how to consume events after this refactor."),(0,a.yg)("p",null,"This proposal is specifically about how to consume these events as a client of the blockchain, not for intermodule communication."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step-1"),":  Implement additional functionality in the ",(0,a.yg)("inlineCode",{parentName:"p"},"types")," package: ",(0,a.yg)("inlineCode",{parentName:"p"},"EmitTypedEvent")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ParseTypedEvent")," functions"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// types/events.go\n\n// EmitTypedEvent takes typed event and emits converting it into sdk.Event\nfunc (em *EventManager) EmitTypedEvent(event proto.Message) error {\n    evtType := proto.MessageName(event)\n    evtJSON, err := codec.ProtoMarshalJSON(event)\n    if err != nil {\n        return err\n    }\n\n    var attrMap map[string]json.RawMessage\n    err = json.Unmarshal(evtJSON, &attrMap)\n    if err != nil {\n        return err\n    }\n\n    var attrs []abci.EventAttribute\n    for k, v := range attrMap {\n        attrs = append(attrs, abci.EventAttribute{\n            Key:   []byte(k),\n            Value: v,\n        })\n    }\n\n    em.EmitEvent(Event{\n        Type:       evtType,\n        Attributes: attrs,\n    })\n\n    return nil\n}\n\n// ParseTypedEvent converts abci.Event back to typed event\nfunc ParseTypedEvent(event abci.Event) (proto.Message, error) {\n    concreteGoType := proto.MessageType(event.Type)\n    if concreteGoType == nil {\n        return nil, fmt.Errorf("failed to retrieve the message of type %q", event.Type)\n    }\n\n    var value reflect.Value\n    if concreteGoType.Kind() == reflect.Ptr {\n        value = reflect.New(concreteGoType.Elem())\n    } else {\n        value = reflect.Zero(concreteGoType)\n    }\n\n    protoMsg, ok := value.Interface().(proto.Message)\n    if !ok {\n        return nil, fmt.Errorf("%q does not implement proto.Message", event.Type)\n    }\n\n    attrMap := make(map[string]json.RawMessage)\n    for _, attr := range event.Attributes {\n        attrMap[string(attr.Key)] = attr.Value\n    }\n\n    attrBytes, err := json.Marshal(attrMap)\n    if err != nil {\n        return nil, err\n    }\n\n    err = jsonpb.Unmarshal(strings.NewReader(string(attrBytes)), protoMsg)\n    if err != nil {\n        return nil, err\n    }\n\n    return protoMsg, nil\n}\n')),(0,a.yg)("p",null,"Here, the ",(0,a.yg)("inlineCode",{parentName:"p"},"EmitTypedEvent")," is a method on ",(0,a.yg)("inlineCode",{parentName:"p"},"EventManager")," which takes typed event as input and apply json serialization on it. Then it maps the JSON key/value pairs to ",(0,a.yg)("inlineCode",{parentName:"p"},"event.Attributes")," and emits it in form of ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Event"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"Event.Type")," will be the type URL of the proto message."),(0,a.yg)("p",null,"When we subscribe to emitted events on the CometBFT websocket, they are emitted in the form of an ",(0,a.yg)("inlineCode",{parentName:"p"},"abci.Event"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"ParseTypedEvent")," parses the event back to it's original proto message."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step-2"),": Add proto definitions for typed events for msgs in each module:"),(0,a.yg)("p",null,"For example, let's take ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"gov")," module and implement this event's type."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"// proto/cosmos/gov/v1beta1/gov.proto\n// Add typed event definition\n\npackage cosmos.gov.v1beta1;\n\nmessage EventSubmitProposal {\n    string from_address   = 1;\n    uint64 proposal_id    = 2;\n    TextProposal proposal = 3;\n}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step-3"),": Refactor event emission to use the typed event created and emit using ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.EmitTypedEvent"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// x/gov/handler.go\nfunc handleMsgSubmitProposal(ctx sdk.Context, keeper keeper.Keeper, msg types.MsgSubmitProposalI) (*sdk.Result, error) {\n    ...\n    types.Context.EventManager().EmitTypedEvent(\n        &EventSubmitProposal{\n            FromAddress: fromAddress,\n            ProposalId: id,\n            Proposal: proposal,\n        },\n    )\n    ...\n}\n")),(0,a.yg)("h3",{id:"how-to-subscribe-to-these-typed-events-in-client"},"How to subscribe to these typed events in ",(0,a.yg)("inlineCode",{parentName:"h3"},"Client")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: Full code example below")),(0,a.yg)("p",null,"Users will be able to subscribe using ",(0,a.yg)("inlineCode",{parentName:"p"},"client.Context.Client.Subscribe")," and consume events which are emitted using ",(0,a.yg)("inlineCode",{parentName:"p"},"EventHandler"),"s."),(0,a.yg)("p",null,"Akash Network has built a simple ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/pubsub/bus.go#L20"},(0,a.yg)("inlineCode",{parentName:"a"},"pubsub")),". This can be used to subscribe to ",(0,a.yg)("inlineCode",{parentName:"p"},"abci.Events")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L21"},"publish")," them as typed events."),(0,a.yg)("p",null,"Please see the below code sample for more detail on this flow looks for clients."),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Improves consistency of implementation for the events currently in the Cosmos SDK"),(0,a.yg)("li",{parentName:"ul"},"Provides a much more ergonomic way to handle events and facilitates writing event driven applications"),(0,a.yg)("li",{parentName:"ul"},"This implementation will support a middleware ecosystem of ",(0,a.yg)("inlineCode",{parentName:"li"},"EventHandler"),"s")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("h2",{id:"detailed-code-example-of-publishing-events"},"Detailed code example of publishing events"),(0,a.yg)("p",null,"This ADR also proposes adding affordances to emit and consume these events. This way developers will only need to write\n",(0,a.yg)("inlineCode",{parentName:"p"},"EventHandler"),"s which define the actions they desire to take."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// EventEmitter is a type that describes event emitter functions\n// This should be defined in `types/events.go`\ntype EventEmitter func(context.Context, client.Context, ...EventHandler) error\n\n// EventHandler is a type of function that handles events coming out of the event bus\n// This should be defined in `types/events.go`\ntype EventHandler func(proto.Message) error\n\n// Sample use of the functions below\nfunc main() {\n    ctx, cancel := context.WithCancel(context.Background())\n\n    if err := TxEmitter(ctx, client.Context{}.WithNodeURI("tcp://localhost:26657"), SubmitProposalEventHandler); err != nil {\n        cancel()\n        panic(err)\n    }\n\n    return\n}\n\n// SubmitProposalEventHandler is an example of an event handler that prints proposal details\n// when any EventSubmitProposal is emitted.\nfunc SubmitProposalEventHandler(ev proto.Message) (err error) {\n    switch event := ev.(type) {\n    // Handle governance proposal events creation events\n    case govtypes.EventSubmitProposal:\n        // Users define business logic here e.g.\n        fmt.Println(ev.FromAddress, ev.ProposalId, ev.Proposal)\n        return nil\n    default:\n        return nil\n    }\n}\n\n// TxEmitter is an example of an event emitter that emits just transaction events. This can and\n// should be implemented somewhere in the Cosmos SDK. The Cosmos SDK can include an EventEmitters for tm.event=\'Tx\'\n// and/or tm.event=\'NewBlock\' (the new block events may contain typed events)\nfunc TxEmitter(ctx context.Context, cliCtx client.Context, ehs ...EventHandler) (err error) {\n    // Instantiate and start CometBFT RPC client\n    client, err := cliCtx.GetNode()\n    if err != nil {\n        return err\n    }\n\n    if err = client.Start(); err != nil {\n        return err\n    }\n\n    // Start the pubsub bus\n    bus := pubsub.NewBus()\n    defer bus.Close()\n\n    // Initialize a new error group\n    eg, ctx := errgroup.WithContext(ctx)\n\n    // Publish chain events to the pubsub bus\n    eg.Go(func() error {\n        return PublishChainTxEvents(ctx, client, bus, simapp.ModuleBasics)\n    })\n\n    // Subscribe to the bus events\n    subscriber, err := bus.Subscribe()\n    if err != nil {\n        return err\n    }\n\n    // Handle all the events coming out of the bus\n    eg.Go(func() error {\n        var err error\n        for {\n            select {\n            case <-ctx.Done():\n                return nil\n            case <-subscriber.Done():\n                return nil\n            case ev := <-subscriber.Events():\n                for _, eh := range ehs {\n                    if err = eh(ev); err != nil {\n                        break\n                    }\n                }\n            }\n        }\n        return nil\n    })\n\n    return group.Wait()\n}\n\n// PublishChainTxEvents events using cmtclient. Waits on context shutdown signals to exit.\nfunc PublishChainTxEvents(ctx context.Context, client cmtclient.EventsClient, bus pubsub.Bus) (err error) {\n    // Subscribe to transaction events\n    txch, err := client.Subscribe(ctx, "txevents", "tm.event=\'Tx\'", 100)\n    if err != nil {\n        return err\n    }\n\n    // Unsubscribe from transaction events on function exit\n    defer func() {\n        err = client.UnsubscribeAll(ctx, "txevents")\n    }()\n\n    // Use errgroup to manage concurrency\n    g, ctx := errgroup.WithContext(ctx)\n\n    // Publish transaction events in a goroutine\n    g.Go(func() error {\n        var err error\n        for {\n            select {\n            case <-ctx.Done():\n                break\n            case ed := <-ch:\n                switch evt := ed.Data.(type) {\n                case cmttypes.EventDataTx:\n                    if !evt.Result.IsOK() {\n                        continue\n                    }\n                    // range over events and parse them\n                    // send them to the pubsub bus\n                    for _, abciEv := range events {\n                        typedEvent, err := sdk.ParseTypedEvent(abciEv)\n                        if err != nil {\n                            return err\n                        }\n                        if err := bus.Publish(typedEvent); err != nil {\n                            bus.Close()\n                            return\n                        }\n                        continue\n                    }\n                }\n            }\n        }\n        return err\n    })\n\n    // Exit on error or context cancellation\n    return g.Wait()\n}\n')),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L19-L58"},"Publish Custom Events via a bus")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/ovrclk/deploy/blob/bf6c633ab6c68f3026df59efd9982d6ca1bf0561/cmd/event-handlers.go#L57"},"Consuming the events in ",(0,a.yg)("inlineCode",{parentName:"a"},"Client")))))}u.isMDXComponent=!0}}]);