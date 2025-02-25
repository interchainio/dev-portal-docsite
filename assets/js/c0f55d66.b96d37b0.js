"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31022],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return t?a.createElement(m,r(r({ref:n},g),{},{components:t})):a.createElement(m,r({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(58168),i=(t(96540),t(15680));const o={},r="RFC 002: Zero-Copy Encoding",s={unversionedId:"rfc/rfc-002-zero-copy-encoding",id:"version-0.50/rfc/rfc-002-zero-copy-encoding",title:"RFC 002: Zero-Copy Encoding",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/rfc/rfc-002-zero-copy-encoding.md",sourceDirName:"rfc",slug:"/rfc/rfc-002-zero-copy-encoding",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/rfc/rfc-002-zero-copy-encoding",draft:!1,tags:[],version:"0.50",frontMatter:{}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Background",id:"background",level:2},{value:"Proposal",id:"proposal",level:2},{value:"New Protobuf Linting and Breaking Change Rules",id:"new-protobuf-linting-and-breaking-change-rules",level:3},{value:"No New Fields Can Be Added To Existing Messages",id:"no-new-fields-can-be-added-to-existing-messages",level:4},{value:"Additional Linting Rules",id:"additional-linting-rules",level:4},{value:"Encoding",id:"encoding",level:3},{value:"Buffers and Memory Management",id:"buffers-and-memory-management",level:4},{value:"Scalar Encoding",id:"scalar-encoding",level:4},{value:"Message Encoding",id:"message-encoding",level:4},{value:"Oneof\u2019s",id:"oneofs",level:4},{value:"Pointer Types: Bytes and Strings and Repeated fields",id:"pointer-types-bytes-and-strings-and-repeated-fields",level:4},{value:"<code>Any</code>s",id:"anys",level:4},{value:"Maps",id:"maps",level:4},{value:"Extended Encoding Options",id:"extended-encoding-options",level:4},{value:"Generated Code",id:"generated-code",level:3},{value:"Go",id:"go",level:4},{value:"Rust",id:"rust",level:4},{value:"Abandoned Ideas (Optional)",id:"abandoned-ideas-optional",level:2},{value:"References",id:"references",level:2},{value:"Discussion",id:"discussion",level:2}],g={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"rfc-002-zero-copy-encoding"},"RFC 002: Zero-Copy Encoding"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2022-03-08: Initial draft")),(0,i.yg)("h2",{id:"background"},"Background"),(0,i.yg)("p",null,"When the SDK originally migrated to ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-019-protobuf-state-encoding"},"protobuf state encoding"),",\nzero-copy encodings such as ",(0,i.yg)("a",{parentName:"p",href:"https://capnproto.org/"},"Cap'n Proto"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"https://google.github.io/flatbuffers/"},"FlatBuffers"),"\nwere considered. We considered how a zero-copy encoding could be beneficial for interoperability with modules\nand scripts in other languages and VMs. However, protobuf was still chosen because the maturity of its ecosystem and\ntooling was much higher and the client experience and performance were considered the highest priorities."),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033: Protobuf-based Inter-Module Communication"),", the\nidea of cross-language/VM inter-module\ncommunication was considered again. And in the discussions surrounding ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-054-semver-compatible-modules"},"ADR 054: Semver Compatible SDK Modules"),",\nit was determined that multi-language/VM support in the SDK is a near term priority."),(0,i.yg)("p",null,"While we could do cross-language/VM inter-module communication with protobuf binary or even JSON, the performance\noverhead is deemed to be too high because:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"we are proposing replacing keeper calls with inter-module message calls and the overhead of even the inter-module\nrouting checks has come into question by some SDK users without even considering the possible overhead of encoding.\nEffectively we would be replacing function calls with encoding. One of the SDK's primary objectives currently is\nimproving performance, and we want to avoid inter-module calls from becoming a big step backward."),(0,i.yg)("li",{parentName:"ul"},"we want Rust code to be able to operate in highly resource constrained virtual machines so whatever we can do to\nreduce performance overhead as well as the size of generated code will make it easier and more feasible to deploy\nfirst-class integrations with these virtual machines.")),(0,i.yg)("p",null,"Thus, the agreement when the ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-054-semver-compatible-modules"},"ADR 054")," working group concluded\nwas to pursue a performant zero-copy encoding which is suitable for usage in highly resource constrained environments."),(0,i.yg)("h2",{id:"proposal"},"Proposal"),(0,i.yg)("p",null,"This RFC proposes a zero-copy encoding that is derived from the schema definitions defined in .proto files in the SDK\nand all app chains. This would result in a new code generator for that supports both this zero-copy encoding as well as\nthe existing protobuf binary and JSON encodings as well as the google.golang.org/protobuf API. To make this zero-copy\nencoding work, a number of changes are needed to how we manage the versioning of protobuf messages that should\naddress other concerns raised in ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-054-semver-compatible-modules"},"ADR 054"),". The API for using\nprotobuf in golang would also change and this will be described in the ",(0,i.yg)("a",{parentName:"p",href:"#generated-code"},"code generation")," section\nalong with a proposed Rust code generator."),(0,i.yg)("p",null,"An alternative approach to building a zero-copy encoding based on protobuf schemas would be to switch to FlatBuffers\nor Cap'n Proto directly. However, this would require a complete rewrite of the SDK and all app chains. Places this\nburden on the ecosystem would not be a wise choice when creating a zero-copy encoding compatible with all our\nexisting types and schemas is feasible. In the future, we may consider a native schema language for this encoding\nthat is more natural and succinct for its rules, but for now we are assuming that it is best to continue supporting\nthe existing protobuf based workflow."),(0,i.yg)("p",null,"Also, we are not proposing a new encoding for transactions or gRPC query servers. From a client API perspective nothing\nwould change. The SDK would be capable of marshaling any message to and from protobuf binary and this zero-copy encoding\nas needed."),(0,i.yg)("p",null,"Furthermore, migrating to the ",(0,i.yg)("strong",{parentName:"p"},"new golang generated code would be 100% opt-in")," because the inter-module router will\nsimply marshal existing gogo proto generated types to/from the zero-copy encoding when needed. So migrating to the new\ncode generator would provide a performance benefit, but would not be required."),(0,i.yg)("p",null,"In addition to supporting first-class Cosmos SDK modules defined in other languages and VMs, this encoding is intended\nto be useful for user-defined code executing in a VM. To satisfy this, this encoding is designed to enable proper bounds\nchecking on all memory access at the expense of introducing some error return values in generated code."),(0,i.yg)("h3",{id:"new-protobuf-linting-and-breaking-change-rules"},"New Protobuf Linting and Breaking Change Rules"),(0,i.yg)("p",null,"This zero-copy encoding places some additional requirements on the definition and maintenance of protobuf schemas."),(0,i.yg)("h4",{id:"no-new-fields-can-be-added-to-existing-messages"},"No New Fields Can Be Added To Existing Messages"),(0,i.yg)("p",null,"The biggest change is that it will be invalid to add a new field to an existing message and a breaking change detector\nwill need to be created which augments ",(0,i.yg)("a",{parentName:"p",href:"https://docs.buf.build/breaking/overview"},"buf breaking")," to detect this."),(0,i.yg)("p",null,"The reasons for this are two-fold:"),(0,i.yg)("p",null,"1) from an API compatibility perspective, adding a new field to an existing message is actually a state machine breaking\nchange which in ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-020-protobuf-transaction-encoding"},"ADR 020")," required us to add an unknown\nfield detector. Furthermore, in ",(0,i.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/0.50/architecture/adr-054-semver-compatible-modules"},"ADR 054"),' this "feature" of protobuf\nposes one of the biggest problems for correct forward compatibility between different versions of the same module.\n2) not allowing new fields in existing messages makes the generated code in languages like Rust (which is currently our\nhighest priority target), much simpler and more performant because we can assume a fixed size struct gets allocated.\nIf new fields can be added to existing messages, we need to encode the number of fields into the message and then\ndo runtime checks. So this both increases memory layers and requires another layout of indirection. With the encoding\nproposed below, "plain old Rust structs" (used with some special field types) can be used.'),(0,i.yg)("p",null,"Instead of adding new fields to existing messages, APIs can add new messages to existing packages or create new packages\nwith new versions of the messages. Also, we are not restricting the addition of cases to ",(0,i.yg)("inlineCode",{parentName:"p"},"oneof"),"s or values to ",(0,i.yg)("inlineCode",{parentName:"p"},"enum"),"s.\nAll of these cases are easier to detect at runtime with standard ",(0,i.yg)("inlineCode",{parentName:"p"},"switch")," statements than the addition of new fields."),(0,i.yg)("h4",{id:"additional-linting-rules"},"Additional Linting Rules"),(0,i.yg)("p",null,"The following additional rules will be enforced by a linter that\ncomplements ",(0,i.yg)("a",{parentName:"p",href:"https://docs.buf.build/lint/overview"},"buf lint"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"all message fields must be specified in continuous ascending order starting from ",(0,i.yg)("inlineCode",{parentName:"li"},"1")),(0,i.yg)("li",{parentName:"ul"},"all enums must be specified in continuous ascending order starting from ",(0,i.yg)("inlineCode",{parentName:"li"},"0")," - otherwise it is too complex to check at\nruntime whether an enum value is unknown. An alternative would be to make adding new values to existing enums breaking"),(0,i.yg)("li",{parentName:"ul"},"all enum values must be ",(0,i.yg)("inlineCode",{parentName:"li"},"<= 255"),". Any enum in a blockchain application which needs more than 256 values is probably\ndoing something very wrong."),(0,i.yg)("li",{parentName:"ul"},"all oneof's must be the ",(0,i.yg)("em",{parentName:"li"},"only")," element in their containing message and must start at field number ",(0,i.yg)("inlineCode",{parentName:"li"},"1")," and be added in\ncontinuous ascending order - this makes it possible to quickly check for unknown values"),(0,i.yg)("li",{parentName:"ul"},"all ",(0,i.yg)("inlineCode",{parentName:"li"},"oneof")," field numbers must be ",(0,i.yg)("inlineCode",{parentName:"li"},"<= 255"),". Any ",(0,i.yg)("inlineCode",{parentName:"li"},"oneof")," which needs more field cases is probably doing something very\nwrong.")),(0,i.yg)("p",null,"These requirements make the encoding and generated code simpler."),(0,i.yg)("h3",{id:"encoding"},"Encoding"),(0,i.yg)("h4",{id:"buffers-and-memory-management"},"Buffers and Memory Management"),(0,i.yg)("p",null,"By default, this encoding attempts to use a single fixed size encoding buffer of 64kb. This imposes a limit on the\nmaximum size of a message that can be encoded. In the context of a message passing protocol for blockchains, this\nis generally a reasonable limit and the only known valid use case for exceeding it is to store user-uploaded byte\ncode for execution in VMs. To accommodate this, large ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," values can be encoded in additional\nstandalone buffers if needed. Still, the body of a message included all scalar and message fields\nmust fit inside the 64kb buffer."),(0,i.yg)("p",null,"While this design decision greatly simplifies the encoding and decoding logic, as well as the complexity of\ngenerated code, it does mean that APIs will need to do proper bounds checking when writing data that is not fixed\nsize and return errors."),(0,i.yg)("p",null,"The term ",(0,i.yg)("inlineCode",{parentName:"p"},"Root")," is used to refer to the main 64kb buffer plus any additional large ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"/",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," buffers that are\nallocated."),(0,i.yg)("h4",{id:"scalar-encoding"},"Scalar Encoding"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bool"),"s are encoded as 1 byte - ",(0,i.yg)("inlineCode",{parentName:"li"},"0")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"1")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"uint32"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"int32"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sint32"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"fixed32"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sfixed32")," are encoded as 4 bytes by default"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"uint64"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"int64"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sint64"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"fixed64"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"sfixed64")," are encoded as 8 bytes by default"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enum"),"s are encoded as 1 byte and values ",(0,i.yg)("em",{parentName:"li"},"MUST")," be in the range of ",(0,i.yg)("inlineCode",{parentName:"li"},"0")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"255"),"."),(0,i.yg)("li",{parentName:"ul"},"all scalars declared as ",(0,i.yg)("inlineCode",{parentName:"li"},"optional")," are prefixed with 1 additional byte whose value is ",(0,i.yg)("inlineCode",{parentName:"li"},"0")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"1")," to indicate presence")),(0,i.yg)("p",null,"All multibyte integers are encoded as little-endian which is by far the most common native byte order for modern\nCPUs. Signed integers always use two's complement encoding."),(0,i.yg)("h4",{id:"message-encoding"},"Message Encoding"),(0,i.yg)("p",null,"By default, messages field are encoded inline as structs. Meaning that if a message struct takes 8 bytes then its inline\nfield in another struct will add 8 bytes to that struct size."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"optional")," message fields will be prefixed by 1 byte to indicate presence. (Alternatively, we could encode optional\nmessage fields as pointers (see below) if the desire is to save memory when they are rarely used needed.)"),(0,i.yg)("h4",{id:"oneofs"},"Oneof\u2019s"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"oneof"),"s are encoded as a combination of a ",(0,i.yg)("inlineCode",{parentName:"p"},"uint8")," discriminant field and memory that is as large as the largest member\nfield. ",(0,i.yg)("inlineCode",{parentName:"p"},"oneof")," field numbers ",(0,i.yg)("em",{parentName:"p"},"MUST")," be between ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"255"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Foo {\n  oneof sum {\n    bool x = 1;\n    int32 y = 2;\n  }\n}\n")),(0,i.yg)("p",null,"A discriminant of ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," indicates that the field is not set."),(0,i.yg)("h4",{id:"pointer-types-bytes-and-strings-and-repeated-fields"},"Pointer Types: Bytes and Strings and Repeated fields"),(0,i.yg)("p",null,"A pointer is an 16-bit unsigned integer that points to an offset in the current memory buffer or to another memory\nbuffer.  If the bit mask ",(0,i.yg)("inlineCode",{parentName:"p"},"0xFF00")," on the is unset, then the pointer points to an offset in the main 64kb memory buffer.\nIf that bit mask is set, then the pointer points to a large ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," buffer.  Up to 256 such buffers\ncan be referenced in a single ",(0,i.yg)("inlineCode",{parentName:"p"},"Root"),". The pointer ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," indicates that a field is not defined."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"bytes"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"s and repeated fields are encoded as pointers to a memory location that is prefixed with the\nlength of the ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," or repeated field value. If the referenced memory location is in the main 64kb memory\nbuffer, then this length prefix will be a 16-bit unsigned integer. If the referenced memory location is a large\n",(0,i.yg)("inlineCode",{parentName:"p"},"string")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," buffer, then this length prefix will be a 32-bit unsigned integer."),(0,i.yg)("h4",{id:"anys"},(0,i.yg)("inlineCode",{parentName:"h4"},"Any"),"s"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Any"),"s are encoded as a pointer to the type URL string and a pointer to the start of the message\nspecified by the type URL."),(0,i.yg)("h4",{id:"maps"},"Maps"),(0,i.yg)("p",null,"Maps are not supported."),(0,i.yg)("h4",{id:"extended-encoding-options"},"Extended Encoding Options"),(0,i.yg)("p",null,"We may choose to allow customizing the encoding of fields so that they take up less space."),(0,i.yg)("p",null,"For example, we could allow 8-bit or 16-bit integers:\n",(0,i.yg)("inlineCode",{parentName:"p"},"int32 x = 1 [(cosmos_proto.int16) = true]")," would indicate that the field only needs 2 bytes"),(0,i.yg)("p",null,"Or we could allow ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"repeated")," fields to have a fixed size rather than being encoding as\npointers to a variable-length value:\n",(0,i.yg)("inlineCode",{parentName:"p"},"string y = 2 [(cosmos_proto.fixed_size) = 3]")," could indicate that this is a fixed width 3 byte string"),(0,i.yg)("p",null,"If we choose to enable these encoding options, changing these options would be a breaking change that needs to be\nprevented by the breaking change detector."),(0,i.yg)("h3",{id:"generated-code"},"Generated Code"),(0,i.yg)("p",null,"We will describe the generated Go and Rust code using this example protobuf file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Foo {\n  int32 x = 1;\n  optional uint32 y = 2;\n  string z = 3;\n  Bar bar = 4;\n  repeated Bar bars = 5;\n}\n\n\nmessage Bar {\n  ABC abc = 1;\n  Baz baz = 2;\n  repeated uint32 xs = 3;\n}\n\nmessage Baz {\n  oneof sum {\n    uint32 x = 1;\n    string y = 2;\n  }\n}\n\nenum ABC {\n  A = 0;\n  B = 1;\n  C = 2;\n  D = 3;\n}\n")),(0,i.yg)("h4",{id:"go"},"Go"),(0,i.yg)("p",null,"In golang, the generated code would not expose any exported struct fields, but rather getters and setters as an\ninterface\nor struct methods, ex:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Foo interface {\n    X() int32\n    SetX(int32) \n    Y() zpb.Option[uint32]\n    SetY(zpb.Option[uint32])\n    Z() (string, error)\n    SetZ(string) error\n    Bar() Bar\n    Bars() (zpb.Array[Bar], error)\n}\n\ntype Bar interface {\n    Abc() ABC\n    SetAbc(ABC) Bar\n    Baz() Baz\n    Xs() (zpb.ScalarArray[uint32], error)\n}\n\ntype Baz interface {\n    Case() Baz_case\n    GetX() uint32\n    SetX(uint32)\n    GetY() (string, error)\n    SetY(string)\n}\n\ntype Baz_case int32\nconst (\n    Baz_X Baz_case = 0\n    Baz_Y Baz_case = 1\n)\n\ntype ABC int32\nconst (\n    ABC_A ABC = 0\n    ABC_B ABC = 1\n    ABC_C ABC = 2\n    ABC_D ABC = 3\n)\n")),(0,i.yg)("p",null,"Special types ",(0,i.yg)("inlineCode",{parentName:"p"},"zpb.Option"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"zpb.Array")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"zpb.ScalarArray")," are used to represent ",(0,i.yg)("inlineCode",{parentName:"p"},"optional")," and repeated fields\nrespectively. These types would be included in the runtime library (called ",(0,i.yg)("inlineCode",{parentName:"p"},"zpb")," here for zero-copy protobuf) and would\nhave an API like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Option[T] interface {\n    IsSet() bool\n    Value() T\n}\n\ntype Array[T] interface {\n    InitWithLength(int) error\n    Len() int\n    Get(int) T\n}\n\ntype ScalarArray[T] interface {\n    Array[T]\n    Set(int, T)\n}\n")),(0,i.yg)("p",null,"Arrays in particular would not be resizable, but would be initialized with a fixed length. This is to ensure that arrays\ncan be written to the underlying buffer in a linear way."),(0,i.yg)("p",null,"In golang, buffers would be managed transparently under the hood by the first message initialized, and usage of this\ngenerated code might look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'foo := NewFoo()\nfoo.SetX(1)\nfoo.SetY(zpb.NewOption[uint32](2))\nerr := foo.SetZ("hello")\nif err != nil {\n    panic(err)\n}\n\nbar := foo.Bar()\nbar.Baz().SetX(3)\n\nxs, err = bar.Xs()\nif err != nil {\n    panic(err)\n}\nxs.InitWithLength(2)\nxs.Set(0, 0)\nxs.Set(1, 2)\n\nbars, err = foo.Bars()\nif err != nil {\n    panic(err)\n}\nbars.InitWithLength(3)\nbars.Get(0).Baz().SetY("hello")\nbars.Get(1).SetAbc(ABC_B)\nbars.Get(2).Baz().SetX(4)\n')),(0,i.yg)("p",null,"Under the hood the generated code would manage memory buffers on its own. The usage of ",(0,i.yg)("inlineCode",{parentName:"p"},"oneof"),"s is a bit easier than\nthe existing go generated code (as with ",(0,i.yg)("inlineCode",{parentName:"p"},"bar.Baz()")," above). And rather than using setters on embedded messages, we\nsimply get the field (already allocated) and set its fields (as in the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"foo.Bar()")," above or the repeated\nfield ",(0,i.yg)("inlineCode",{parentName:"p"},"foo.Bars()"),"). Whenever a field is stored with a pointer (",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"repeated")," fields), there is\nalways an error returned on the getter to do proper bounds checking on the buffer."),(0,i.yg)("h4",{id:"rust"},"Rust"),(0,i.yg)("p",null,"This encoding should allow generating native structs in Rust that are annotated with ",(0,i.yg)("inlineCode",{parentName:"p"},"#[repr(C, align(1))]"),". It should\nbe fairly natural to use from Rust with a key difference that memory buffers (called ",(0,i.yg)("inlineCode",{parentName:"p"},"Root"),"s) must be manually allocated\nand passed into any pointer type."),(0,i.yg)("p",null,"Here is some example code that uses library types ",(0,i.yg)("inlineCode",{parentName:"p"},"Option"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Enum"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"String"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"OneOf")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Repeated"),"\nas well as little-endian integer types from ",(0,i.yg)("a",{parentName:"p",href:"https://lib.rs/crates/rend"},"rend"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust!"},"#[repr(C, align(1))]\nstruct Foo {\n    x: rend:i32_le,\n    y: cosmos_proto::Option<rend:u32_le>,\n    z: cosmos_proto::String, // String wraps a pointer to a string\n    bar: Bar\n}\n\n#[repr(C, align(1))]\nstruct Bar {\n    abc: cosmos_proto::Enum<ABC, 3>, // the Enum wrapper allows us to distinguish undefined and defined values of ABC at runtime. 3 is specified as the max value of ABC.\n    baz: cosmos_proto::OneOf<Baz, 2>, // the OneOf wrapper allows distinguished undefined values of Baz at runtime. 2 is specified as the max field value of Baz.\n    xs: cosmos_proto::Repeated<rend:u32_le> // Repeated wraps a pointer to repeated fields\n}\n\n#[repr(u8)]\nenum ABC {\n    A = 0,\n    B = 1,\n    C = 2,\n    D = 3,\n}\n\n#[repr(C, u8)]\nenum Baz {\n    Empty, // all oneof's have a case for Empty if they are unset\n    X(rend::u32_le),\n    Y(cosmos_proto::String)\n}\n")),(0,i.yg)("p",null,"Example usage (which does the exact same thing as the go example above) would be:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust!"},'let mut root = Root<Foo>::new();\nlet mut foo = root.get_mut();\nfoo.x = 1.into();\nfoo.y = Some(2.into());\nfoo.z.set(root.new_string("hello")?); // could return an allocation error\n\nfoo.bar.baz = Baz::X(3.into());\n\nfoo.bar.xs.init_with_size(&mut root, 2)?; // could return an allocation error\nfoo.bar.xs[0] = 0.into();\nfoo.bar.xs[1] = 2.into();\n\nfoo.bars.init_with_size(&mut root, 3)?; // could return an allocation error\nfoo.bars[0].baz = Baz::Y(root.new_string("hello")?); // could return an allocation error\nfoo.bars[1].abc = ABC::B;\nfoo.bars[2].baz = Baz::X(4.into());\n')),(0,i.yg)("h2",{id:"abandoned-ideas-optional"},"Abandoned Ideas (Optional)"),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("h2",{id:"discussion"},"Discussion"))}c.isMDXComponent=!0}}]);