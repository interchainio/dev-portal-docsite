"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[60114],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=d(a),u=i,y=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return a?t.createElement(y,o(o({ref:n},p),{},{components:a})):t.createElement(y,o({ref:n},p))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[g]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59210:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=a(58168),i=(a(96540),a(15680));const l={},o="ADR 050: SIGN_MODE_TEXTUAL: Annex 1 Value Renderers",r={unversionedId:"architecture/adr-050-sign-mode-textual-annex1",id:"version-0.52/architecture/adr-050-sign-mode-textual-annex1",title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 1 Value Renderers",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/architecture/adr-050-sign-mode-textual-annex1.md",sourceDirName:"architecture",slug:"/architecture/adr-050-sign-mode-textual-annex1",permalink:"/dev-portal-docsite/cosmos-sdk/architecture/adr-050-sign-mode-textual-annex1",draft:!1,tags:[],version:"0.52",frontMatter:{}},s={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Value Renderers",id:"value-renderers",level:2},{value:"Protobuf <code>number</code>",id:"protobuf-number",level:3},{value:"Examples",id:"examples",level:4},{value:"<code>coin</code>",id:"coin",level:3},{value:"Examples",id:"examples-1",level:4},{value:"<code>coins</code>",id:"coins",level:3},{value:"Example",id:"example",level:3},{value:"<code>repeated</code>",id:"repeated",level:3},{value:"Examples",id:"examples-2",level:4},{value:"<code>message</code>",id:"message",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Enums",id:"enums",level:3},{value:"Examples",id:"examples-4",level:4},{value:"<code>google.protobuf.Any</code>",id:"googleprotobufany",level:3},{value:"Examples",id:"examples-5",level:4},{value:"<code>google.protobuf.Timestamp</code>",id:"googleprotobuftimestamp",level:3},{value:"Examples",id:"examples-6",level:4},{value:"<code>google.protobuf.Duration</code>",id:"googleprotobufduration",level:3},{value:"bytes",id:"bytes",level:3},{value:"Examples",id:"examples-7",level:4},{value:"address bytes",id:"address-bytes",level:3},{value:"strings",id:"strings",level:3},{value:"Default Values",id:"default-values",level:3},{value:"Example",id:"example-1",level:4},{value:"bool",id:"bool",level:3},{value:"ABANDONED Custom <code>msg_title</code> instead of Msg <code>type_url</code>",id:"abandoned-custom-msg_title-instead-of-msg-type_url",level:3},{value:"Examples",id:"examples-8",level:4},{value:"Best Pratices",id:"best-pratices",level:4}],p={toc:d},g="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-050-sign_mode_textual-annex-1-value-renderers"},"ADR 050: SIGN_MODE_TEXTUAL: Annex 1 Value Renderers"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Dec 06, 2021: Initial Draft"),(0,i.yg)("li",{parentName:"ul"},"Feb 07, 2022: Draft read and concept-ACKed by the Ledger team."),(0,i.yg)("li",{parentName:"ul"},"Dec 01, 2022: Remove ",(0,i.yg)("inlineCode",{parentName:"li"},"Object: ")," prefix on Any header screen."),(0,i.yg)("li",{parentName:"ul"},"Dec 13, 2022: Sign over bytes hash when bytes length > 32."),(0,i.yg)("li",{parentName:"ul"},"Mar 27, 2023: Update ",(0,i.yg)("inlineCode",{parentName:"li"},"Any")," value renderer to omit message header screen.")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Accepted. Implementation started. Small value renderers details still need to be polished."),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"This Annex describes value renderers, which are used for displaying Protobuf values in a human-friendly way using a string array."),(0,i.yg)("h2",{id:"value-renderers"},"Value Renderers"),(0,i.yg)("p",null,"Value Renderers describe how values of different Protobuf types should be encoded as a string array. Value renderers can be formalized as a set of bijective functions ",(0,i.yg)("inlineCode",{parentName:"p"},"func renderT(value T) []string"),", where ",(0,i.yg)("inlineCode",{parentName:"p"},"T")," is one of the below Protobuf types for which this spec is defined."),(0,i.yg)("h3",{id:"protobuf-number"},"Protobuf ",(0,i.yg)("inlineCode",{parentName:"h3"},"number")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Applies to:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"protobuf numeric integer types (",(0,i.yg)("inlineCode",{parentName:"li"},"int{32,64}"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"uint{32,64}"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sint{32,64}"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"fixed{32,64}"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sfixed{32,64}"),")"),(0,i.yg)("li",{parentName:"ul"},"strings whose ",(0,i.yg)("inlineCode",{parentName:"li"},"customtype")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/cosmos/cosmos-sdk/types.Int")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/cosmos/cosmos-sdk/types.Dec")),(0,i.yg)("li",{parentName:"ul"},"bytes whose ",(0,i.yg)("inlineCode",{parentName:"li"},"customtype")," is ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/cosmos/cosmos-sdk/types.Int")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/cosmos/cosmos-sdk/types.Dec")))),(0,i.yg)("li",{parentName:"ul"},"Trailing decimal zeroes are always removed"),(0,i.yg)("li",{parentName:"ul"},"Formatting with ",(0,i.yg)("inlineCode",{parentName:"li"},"'"),"s for every three integral digits."),(0,i.yg)("li",{parentName:"ul"},"Usage of ",(0,i.yg)("inlineCode",{parentName:"li"},".")," to denote the decimal delimiter.")),(0,i.yg)("h4",{id:"examples"},"Examples"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"1000")," (uint64) -> ",(0,i.yg)("inlineCode",{parentName:"li"},"1'000")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},'"1000000.00"')," (string representing a Dec) -> ",(0,i.yg)("inlineCode",{parentName:"li"},"1'000'000")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},'"1000000.10"')," (string representing a Dec) -> ",(0,i.yg)("inlineCode",{parentName:"li"},"1'000'000.1"))),(0,i.yg)("h3",{id:"coin"},(0,i.yg)("inlineCode",{parentName:"h3"},"coin")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Applies to ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmos.base.v1beta1.Coin"),"."),(0,i.yg)("li",{parentName:"ul"},"Denoms are converted to ",(0,i.yg)("inlineCode",{parentName:"li"},"display")," denoms using ",(0,i.yg)("inlineCode",{parentName:"li"},"Metadata")," (if available). ",(0,i.yg)("strong",{parentName:"li"},"This requires a state query"),". The definition of ",(0,i.yg)("inlineCode",{parentName:"li"},"Metadata")," can be found in the ",(0,i.yg)("a",{parentName:"li",href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.bank.v1beta1#cosmos.bank.v1beta1.Metadata"},"bank protobuf definition"),". If the ",(0,i.yg)("inlineCode",{parentName:"li"},"display")," field is empty or nil, then we do not perform any denom conversion."),(0,i.yg)("li",{parentName:"ul"},"Amounts are converted to ",(0,i.yg)("inlineCode",{parentName:"li"},"display")," denom amounts and rendered as ",(0,i.yg)("inlineCode",{parentName:"li"},"number"),"s above",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"We do not change the capitalization of the denom. In practice, ",(0,i.yg)("inlineCode",{parentName:"li"},"display")," denoms are stored in lowercase in state (e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"10 atom"),"), however they are often showed in UPPERCASE in everyday life (e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"10 ATOM"),"). Value renderers keep the case used in state, but we may recommend chains changing the denom metadata to be uppercase for better user display."))),(0,i.yg)("li",{parentName:"ul"},"One space between the denom and amount (e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"10 atom"),")."),(0,i.yg)("li",{parentName:"ul"},"In the future, IBC denoms could maybe be converted to DID/IIDs, if we can find a robust way for doing this (ex. ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmos:cosmos:hub:bank:denom:atom"),")")),(0,i.yg)("h4",{id:"examples-1"},"Examples"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"1000000000uatom")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},'["1\'000 atom"]'),", because atom is the metadata's display denom.")),(0,i.yg)("h3",{id:"coins"},(0,i.yg)("inlineCode",{parentName:"h3"},"coins")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"an array of ",(0,i.yg)("inlineCode",{parentName:"li"},"coin")," is display as the concatenation of each ",(0,i.yg)("inlineCode",{parentName:"li"},"coin")," encoded as the specification above, the joined together with the delimiter ",(0,i.yg)("inlineCode",{parentName:"li"},'", "')," (a comma and a space, no quotes around)."),(0,i.yg)("li",{parentName:"ul"},"the list of coins is ordered by unicode code point of the display denom: ",(0,i.yg)("inlineCode",{parentName:"li"},"A-Z")," < ",(0,i.yg)("inlineCode",{parentName:"li"},"a-z"),". For example, the string ",(0,i.yg)("inlineCode",{parentName:"li"},"aAbBcC")," would be sorted ",(0,i.yg)("inlineCode",{parentName:"li"},"ABCabc"),".",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"if the coins list had 0 items in it then it'll be rendered as ",(0,i.yg)("inlineCode",{parentName:"li"},"zero"))))),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},'["3cosm", "2000000uatom"]')," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"2 atom, 3 COSM")," (assuming the display denoms are ",(0,i.yg)("inlineCode",{parentName:"li"},"atom")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"COSM"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},'["10atom", "20Acoin"]')," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"20 Acoin, 10 atom")," (assuming the display denoms are ",(0,i.yg)("inlineCode",{parentName:"li"},"atom")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Acoin"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[]")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"zero")," ")),(0,i.yg)("h3",{id:"repeated"},(0,i.yg)("inlineCode",{parentName:"h3"},"repeated")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Applies to all ",(0,i.yg)("inlineCode",{parentName:"li"},"repeated")," fields, except ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmos.tx.v1beta1.TxBody#Messages"),", which has a particular encoding (see ",(0,i.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/architecture/adr-050-sign-mode-textual"},"ADR-050"),")."),(0,i.yg)("li",{parentName:"ul"},"A repeated type has the following template:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"<field_name>: <int> <field_kind>\n<field_name> (<index>/<int>): <value rendered 1st line>\n<optional value rendered in the next lines>\n<field_name> (<index>/<int>): <value rendered 1st line>\n<optional value rendered in the next lines>\nEnd of <field_name>.\n")),(0,i.yg)("p",null,"where:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"field_name")," is the Protobuf field name of the repeated field"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"field_kind"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"if the type of the repeated field is a message, ",(0,i.yg)("inlineCode",{parentName:"li"},"field_kind")," is the message name"),(0,i.yg)("li",{parentName:"ul"},"if the type of the repeated field is an enum, ",(0,i.yg)("inlineCode",{parentName:"li"},"field_kind")," is the enum name"),(0,i.yg)("li",{parentName:"ul"},"in any other case, ",(0,i.yg)("inlineCode",{parentName:"li"},"field_kind"),' is the protobuf primitive type (e.g. "string" or "bytes")'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"int")," is the length of the array"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"index")," is one based index of the repeated field")),(0,i.yg)("h4",{id:"examples-2"},"Examples"),(0,i.yg)("p",null,"Given the proto definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"message AllowedMsgAllowance {\n  repeated string allowed_messages = 1;\n}\n")),(0,i.yg)("p",null,"and initializing with:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'x := []AllowedMsgAllowance{"cosmos.bank.v1beta1.MsgSend", "cosmos.gov.v1.MsgVote"}\n')),(0,i.yg)("p",null,"we have the following value-rendered encoding:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Allowed messages: 2 strings\nAllowed messages (1/2): cosmos.bank.v1beta1.MsgSend\nAllowed messages (2/2): cosmos.gov.v1.MsgVote\nEnd of Allowed messages\n")),(0,i.yg)("h3",{id:"message"},(0,i.yg)("inlineCode",{parentName:"h3"},"message")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Applies to all Protobuf messages that do not have a custom encoding.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Field names follow ",(0,i.yg)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/sentence_case"},"sentence case")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"replace each ",(0,i.yg)("inlineCode",{parentName:"li"},"_")," with a space"),(0,i.yg)("li",{parentName:"ul"},"capitalize first letter of the sentence"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Field names are ordered by their Protobuf field number")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Screen title is the field name, and screen content is the value.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Nesting:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"if a field contains a nested message, we value-render the underlying message using the template:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"<field_name>: <1st line of value-rendered message>\n> <lines 2-n of value-rendered message>             // Notice the `>` prefix.\n")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},">")," character is used to denote nesting. For each additional level of nesting, add ",(0,i.yg)("inlineCode",{parentName:"li"},">"),".")))),(0,i.yg)("h4",{id:"examples-3"},"Examples"),(0,i.yg)("p",null,"Given the following Protobuf messages:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},'enum VoteOption {\n  VOTE_OPTION_UNSPECIFIED = 0;\n  VOTE_OPTION_YES = 1;\n  VOTE_OPTION_ABSTAIN = 2;\n  VOTE_OPTION_NO = 3;\n  VOTE_OPTION_NO_WITH_VETO = 4;\n}\n\nmessage WeightedVoteOption {\n  VoteOption option = 1;\n  string     weight = 2 [(cosmos_proto.scalar) = "cosmos.Dec"];\n}\n\nmessage Vote {\n  uint64 proposal_id = 1;\n  string voter       = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  reserved 3;\n  repeated WeightedVoteOption options = 4;\n}\n')),(0,i.yg)("p",null,"we get the following encoding for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Vote")," message:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Vote object\n> Proposal id: 4\n> Voter: cosmos1abc...def\n> Options: 2 WeightedVoteOptions\n> Options (1/2): WeightedVoteOption object\n>> Option: VOTE_OPTION_YES\n>> Weight: 0.7\n> Options (2/2): WeightedVoteOption object\n>> Option: VOTE_OPTION_NO\n>> Weight: 0.3\n> End of Options\n")),(0,i.yg)("h3",{id:"enums"},"Enums"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Show the enum variant name as string.")),(0,i.yg)("h4",{id:"examples-4"},"Examples"),(0,i.yg)("p",null,"See example above with ",(0,i.yg)("inlineCode",{parentName:"p"},"message Vote{}"),"."),(0,i.yg)("h3",{id:"googleprotobufany"},(0,i.yg)("inlineCode",{parentName:"h3"},"google.protobuf.Any")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Applies to ",(0,i.yg)("inlineCode",{parentName:"li"},"google.protobuf.Any")),(0,i.yg)("li",{parentName:"ul"},"Rendered as:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"<type_url>\n> <value rendered underlying message>\n")),(0,i.yg)("p",null,"There is however one exception: when the underlying message is a Protobuf message that does not have a custom encoding, then the message header screen is omitted, and one level of indentation is removed."),(0,i.yg)("p",null,"Messages that have a custom encoding, including ",(0,i.yg)("inlineCode",{parentName:"p"},"google.protobuf.Timestamp"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"google.protobuf.Duration"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"google.protobuf.Any"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.base.v1beta1.Coin"),", and messages that have an app-defined custom encoding, will preserve their header and indentation level."),(0,i.yg)("h4",{id:"examples-5"},"Examples"),(0,i.yg)("p",null,"Message header screen is stripped, one-level of indentation removed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/cosmos.gov.v1.Vote\n> Proposal id: 4\n> Vote: cosmos1abc...def\n> Options: 2 WeightedVoteOptions\n> Options (1/2): WeightedVoteOption object\n>> Option: Yes\n>> Weight: 0.7\n> Options (2/2): WeightedVoteOption object\n>> Option: No\n>> Weight: 0.3\n> End of Options\n")),(0,i.yg)("p",null,"Message with custom encoding:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/cosmos.base.v1beta1.Coin\n> 10uatom\n")),(0,i.yg)("h3",{id:"googleprotobuftimestamp"},(0,i.yg)("inlineCode",{parentName:"h3"},"google.protobuf.Timestamp")),(0,i.yg)("p",null,"Rendered using ",(0,i.yg)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC 3339"),' (a\nsimplification of ISO 8601), which is the current recommendation for portable\ntime values. The rendering always uses "Z" (UTC) as the timezone. It uses only\nthe necessary fractional digits of a second, omitting the fractional part\nentirely if the timestamp has no fractional seconds. (The resulting timestamps\nare not automatically sortable by standard lexicographic order, but we favor\nthe legibility of the shorter string.)'),(0,i.yg)("h4",{id:"examples-6"},"Examples"),(0,i.yg)("p",null,"The timestamp with 1136214245 seconds and 700000000 nanoseconds is rendered\nas ",(0,i.yg)("inlineCode",{parentName:"p"},"2006-01-02T15:04:05.7Z"),".\nThe timestamp with 1136214245 seconds and zero nanoseconds is rendered\nas ",(0,i.yg)("inlineCode",{parentName:"p"},"2006-01-02T15:04:05Z"),"."),(0,i.yg)("h3",{id:"googleprotobufduration"},(0,i.yg)("inlineCode",{parentName:"h3"},"google.protobuf.Duration")),(0,i.yg)("p",null,"The duration proto expresses a raw number of seconds and nanoseconds.\nThis will be rendered as longer time units of days, hours, and minutes,\nplus any remaining seconds, in that order.\nLeading and trailing zero-quantity units will be omitted, but all\nunits in between nonzero units will be shown, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"}," 3 days, 0 hours, 0 minutes, 5 seconds"),"."),(0,i.yg)("p",null,"Even longer time units such as months or years are imprecise.\nWeeks are precise, but not commonly used - ",(0,i.yg)("inlineCode",{parentName:"p"},"91 days")," is more immediately\nlegible than ",(0,i.yg)("inlineCode",{parentName:"p"},"13 weeks"),".  Although ",(0,i.yg)("inlineCode",{parentName:"p"},"days")," can be problematic,\ne.g. noon to noon on subsequent days can be 23 or 25 hours depending on\ndaylight savings transitions, there is significant advantage in using\nstrict 24-hour days over using only hours (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"91 days")," vs ",(0,i.yg)("inlineCode",{parentName:"p"},"2184 hours"),")."),(0,i.yg)("p",null,"When nanoseconds are nonzero, they will be shown as fractional seconds,\nwith only the minimum number of digits, e.g ",(0,i.yg)("inlineCode",{parentName:"p"},"0.5 seconds"),"."),(0,i.yg)("p",null,"A duration of exactly zero is shown as ",(0,i.yg)("inlineCode",{parentName:"p"},"0 seconds"),"."),(0,i.yg)("p",null,"Units will be given as singular (no trailing ",(0,i.yg)("inlineCode",{parentName:"p"},"s"),") when the quantity is exactly one,\nand will be shown in plural otherwise."),(0,i.yg)("p",null,"Negative durations will be indicated with a leading minus sign (",(0,i.yg)("inlineCode",{parentName:"p"},"-"),")."),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"1 day")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"30 days")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-1 day, 12 hours")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"3 hours, 0 minutes, 53.025 seconds"))),(0,i.yg)("h3",{id:"bytes"},"bytes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Bytes of length shorter or equal to 35 are rendered in hexadecimal, all capital letters, without the ",(0,i.yg)("inlineCode",{parentName:"li"},"0x")," prefix."),(0,i.yg)("li",{parentName:"ul"},"Bytes of length greater than 35 are hashed using SHA256. The rendered text is ",(0,i.yg)("inlineCode",{parentName:"li"},"SHA-256="),", followed by the 32-byte hash, in hexadecimal, all capital letters, without the ",(0,i.yg)("inlineCode",{parentName:"li"},"0x")," prefix."),(0,i.yg)("li",{parentName:"ul"},"The hexadecimal string is finally separated into groups of 4 digits, with a space ",(0,i.yg)("inlineCode",{parentName:"li"},"' '")," as separator. If the bytes length is odd, the 2 remaining hexadecimal characters are at the end.")),(0,i.yg)("p",null,"The number 35 was chosen because it is the longest length where the hashed-and-prefixed representation is longer than the original data directly formatted, using the 3 rules above. More specifically:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a 35-byte array will have 70 hex characters, plus 17 space characters, resulting in 87 characters."),(0,i.yg)("li",{parentName:"ul"},"byte arrays starting from length 36 will be hashed to 32 bytes, which is 64 hex characters plus 15 spaces, and with the ",(0,i.yg)("inlineCode",{parentName:"li"},"SHA-256=")," prefix, it takes 87 characters.\nAlso, secp256k1 public keys have length 33, so their Textual representation is not their hashed value, which we would like to avoid.")),(0,i.yg)("p",null,"Note: Data longer than 35 bytes are not rendered in a way that can be inverted. See ADR-050's ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/architecture/adr-050-sign-mode-textual#invertible-rendering"},"section about invertability")," for a discussion."),(0,i.yg)("h4",{id:"examples-7"},"Examples"),(0,i.yg)("p",null,"Inputs are displayed as byte arrays."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[0]"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"00")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[0,1,2]"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"0001 02")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[0,1,2,..,34]"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"0001 0203 0405 0607 0809 0A0B 0C0D 0E0F 1011 1213 1415 1617 1819 1A1B 1C1D 1E1F 2021 22")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[0,1,2,..,35]"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"SHA-256=5D7E 2D9B 1DCB C85E 7C89 0036 A2CF 2F9F E7B6 6554 F2DF 08CE C6AA 9C0A 25C9 9C21"))),(0,i.yg)("h3",{id:"address-bytes"},"address bytes"),(0,i.yg)("p",null,"We currently use ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," types in protobuf for addresses so this may not be needed, but if any address bytes are used in sign mode textual they should be rendered with bech32 formatting"),(0,i.yg)("h3",{id:"strings"},"strings"),(0,i.yg)("p",null,"Strings are rendered as-is."),(0,i.yg)("h3",{id:"default-values"},"Default Values"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Default Protobuf values for each field are skipped.")),(0,i.yg)("h4",{id:"example-1"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TestData {\n  string signer = 1;\n  string metadata = 2;\n}\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'myTestData := TestData{\n  Signer: "cosmos1abc"\n}\n')),(0,i.yg)("p",null,"We get the following encoding for the ",(0,i.yg)("inlineCode",{parentName:"p"},"TestData")," message:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"TestData object\n> Signer: cosmos1abc\n")),(0,i.yg)("h3",{id:"bool"},"bool"),(0,i.yg)("p",null,"Boolean values are rendered as ",(0,i.yg)("inlineCode",{parentName:"p"},"True")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"False"),"."),(0,i.yg)("h3",{id:"abandoned-custom-msg_title-instead-of-msg-type_url"},"[ABANDONED]"," Custom ",(0,i.yg)("inlineCode",{parentName:"h3"},"msg_title")," instead of Msg ",(0,i.yg)("inlineCode",{parentName:"h3"},"type_url")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"This paragraph is in the Annex for informational purposes only, and will be removed in a next update of the ADR.")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Click to see abandoned idea."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"all protobuf messages to be used with ",(0,i.yg)("inlineCode",{parentName:"li"},"SIGN_MODE_TEXTUAL")," CAN have a short title associated with them that can be used in format strings whenever the type URL is explicitly referenced via the ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmos.msg.v1.textual.msg_title")," Protobuf message option."),(0,i.yg)("li",{parentName:"ul"},"if this option is not specified for a Msg, then the Protobuf fully qualified name will be used.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},'message MsgSend {\n  option (cosmos.msg.v1.textual.msg_title) = "bank send coins";\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"they MUST be unique per message, per chain")),(0,i.yg)("h4",{id:"examples-8"},"Examples"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cosmos.gov.v1.MsgVote")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"governance v1 vote"))),(0,i.yg)("h4",{id:"best-pratices"},"Best Pratices"),(0,i.yg)("p",null,"We recommend to use this option only for ",(0,i.yg)("inlineCode",{parentName:"p"},"Msg"),"s whose Protobuf fully qualified name can be hard to understand. As such, the two examples above (",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgVote"),") are not good examples to be used with ",(0,i.yg)("inlineCode",{parentName:"p"},"msg_title"),". We still allow ",(0,i.yg)("inlineCode",{parentName:"p"},"msg_title")," for chains who might have ",(0,i.yg)("inlineCode",{parentName:"p"},"Msg"),"s with complex or non-obvious names."),(0,i.yg)("p",null,"In those cases, we recommend to drop the version (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"v1"),") in the string if there's only one version of the module on chain. This way, the bijective mapping can figure out which message each string corresponds to. If multiple Protobuf versions of the same module exist on the same chain, we recommend keeping the first ",(0,i.yg)("inlineCode",{parentName:"p"},"msg_title")," with version, and the second ",(0,i.yg)("inlineCode",{parentName:"p"},"msg_title")," with version (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"v2"),"):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"mychain.mymodule.v1.MsgDo")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"mymodule do something")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"mychain.mymodule.v2.MsgDo")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"mymodule v2 do something")))))}m.isMDXComponent=!0}}]);