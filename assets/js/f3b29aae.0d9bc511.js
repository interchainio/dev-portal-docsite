"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[16486],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=a,u=p["".concat(l,".").concat(h)]||p[h]||g[h]||o;return t?i.createElement(u,r(r({ref:n},c),{},{components:t})):i.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},32695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(58168),a=(t(96540),t(15680));const o={},r="ADR 050: SIGN_MODE_TEXTUAL",s={unversionedId:"build/architecture/adr-050-sign-mode-textual",id:"version-0.52/build/architecture/adr-050-sign-mode-textual",title:"ADR 050: SIGN_MODE_TEXTUAL",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-050-sign-mode-textual.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-050-sign-mode-textual",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 2 XXX",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex2"},next:{title:"ADR 053: Go Module Refactoring",permalink:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-053-go-module-refactoring"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Invertible Rendering",id:"invertible-rendering",level:3},{value:"Chain State",id:"chain-state",level:3},{value:"Signature and Security",id:"signature-and-security",level:3},{value:"Transaction Hash Malleability",id:"transaction-hash-malleability",level:3},{value:"SignDoc",id:"signdoc",level:3},{value:"Details",id:"details",level:2},{value:"Encoding of the Transaction Envelope",id:"encoding-of-the-transaction-envelope",level:3},{value:"Encoding of the Transaction Body",id:"encoding-of-the-transaction-body",level:3},{value:"Example",id:"example",level:4},{value:"Custom <code>Msg</code> Renderers",id:"custom-msg-renderers",level:3},{value:"Require signing over the <code>TxBody</code> and <code>AuthInfo</code> raw bytes",id:"require-signing-over-the-txbody-and-authinfo-raw-bytes",level:3},{value:"Updates to the current specification",id:"updates-to-the-current-specification",level:2},{value:"Additional Formatting by the Hardware Device",id:"additional-formatting-by-the-hardware-device",level:2},{value:"Examples",id:"examples",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],c={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-050-sign_mode_textual"},"ADR 050: SIGN_MODE_TEXTUAL"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dec 06, 2021: Initial Draft."),(0,a.yg)("li",{parentName:"ul"},"Feb 07, 2022: Draft read and concept-ACKed by the Ledger team."),(0,a.yg)("li",{parentName:"ul"},"May 16, 2022: Change status to Accepted."),(0,a.yg)("li",{parentName:"ul"},"Aug 11, 2022: Require signing over tx raw bytes."),(0,a.yg)("li",{parentName:"ul"},"Sep 07, 2022: Add custom ",(0,a.yg)("inlineCode",{parentName:"li"},"Msg"),"-renderers."),(0,a.yg)("li",{parentName:"ul"},"Sep 18, 2022: Structured format instead of lines of text"),(0,a.yg)("li",{parentName:"ul"},"Nov 23, 2022: Specify CBOR encoding."),(0,a.yg)("li",{parentName:"ul"},"Dec 01, 2022: Link to examples in separate JSON file."),(0,a.yg)("li",{parentName:"ul"},"Dec 06, 2022: Re-ordering of envelope screens."),(0,a.yg)("li",{parentName:"ul"},"Dec 14, 2022: Mention exceptions for invertability."),(0,a.yg)("li",{parentName:"ul"},"Jan 23, 2023: Switch Screen.Text to Title+Content."),(0,a.yg)("li",{parentName:"ul"},"Mar 07, 2023: Change SignDoc from array to struct containing array."),(0,a.yg)("li",{parentName:"ul"},"Mar 20, 2023: Introduce a spec version initialized to 0.")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Accepted. Implementation started. Small value renderers details still need to be polished."),(0,a.yg)("p",null,"Spec version: 0."),(0,a.yg)("h2",{id:"abstract"},"Abstract"),(0,a.yg)("p",null,"This ADR specifies SIGN_MODE_TEXTUAL, a new string-based sign mode that is targeted at signing with hardware devices."),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"Protobuf-based SIGN_MODE_DIRECT was introduced in ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-020-protobuf-transaction-encoding"},"ADR-020")," and is intended to replace SIGN_MODE_LEGACY_AMINO_JSON in most situations, such as mobile wallets and CLI keyrings. However, the ",(0,a.yg)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," hardware wallet is still using SIGN_MODE_LEGACY_AMINO_JSON for displaying the sign bytes to the user. Hardware wallets cannot transition to SIGN_MODE_DIRECT as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"SIGN_MODE_DIRECT is binary-based and thus not suitable for display to end-users. Technically, hardware wallets could simply display the sign bytes to the user. But this would be considered as blind signing, and is a security concern."),(0,a.yg)("li",{parentName:"ul"},"hardware cannot decode the protobuf sign bytes due to memory constraints, as the Protobuf definitions would need to be embedded on the hardware device.")),(0,a.yg)("p",null,"In an effort to remove Amino from the SDK, a new sign mode needs to be created for hardware devices. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6513"},"Initial discussions")," propose a text-based sign mode, which this ADR formally specifies."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"In SIGN_MODE_TEXTUAL, a transaction is rendered into a textual representation,\nwhich is then sent to a secure device or subsystem for the user to review and sign.\nUnlike ",(0,a.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),", the transmitted data can be simply decoded into legible text\neven on devices with limited processing and display."),(0,a.yg)("p",null,"The textual representation is a sequence of ",(0,a.yg)("em",{parentName:"p"},"screens"),".\nEach screen is meant to be displayed in its entirety (if possible) even on a small device like a Ledger.\nA screen is roughly equivalent to a short line of text.\nLarge screens can be displayed in several pieces,\nmuch as long lines of text are wrapped,\nso no hard guidance is given, though 40 characters is a good target.\nA screen is used to display a single key/value pair for scalar values\n(or composite values with a compact notation, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"Coins"),")\nor to introduce or conclude a larger grouping."),(0,a.yg)("p",null,"The text can contain the full range of Unicode code points, including control characters and nul.\nThe device is responsible for deciding how to display characters it cannot render natively.\nSee ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex2"},"annex 2")," for guidance."),(0,a.yg)("p",null,"Screens have a non-negative indentation level to signal composite or nested structures.\nIndentation level zero is the top level.\nIndentation is displayed via some device-specific mechanism.\nMessage quotation notation is an appropriate model, such as\nleading ",(0,a.yg)("inlineCode",{parentName:"p"},">")," characters or vertical bars on more capable displays."),(0,a.yg)("p",null,"Some screens are marked as ",(0,a.yg)("em",{parentName:"p"},"expert")," screens,\nmeant to be displayed only if the viewer chooses to opt in for the extra detail.\nExpert screens are meant for information that is rarely useful,\nor needs to be present only for signature integrity (see below)."),(0,a.yg)("h3",{id:"invertible-rendering"},"Invertible Rendering"),(0,a.yg)("p",null,"We require that the rendering of the transaction be invertible:\nthere must be a parsing function such that for every transaction,\nwhen rendered to the textual representation,\nparsing that representation yields a proto message equivalent\nto the original under proto equality."),(0,a.yg)("p",null,"Note that this inverse function does not need to perform correct\nparsing or error signaling for the whole domain of textual data.\nMerely that the range of valid transactions be invertible under\nthe composition of rendering and parsing."),(0,a.yg)("p",null,"Note that the existence of an inverse function ensures that the\nrendered text contains the full information of the original transaction,\nnot a hash or subset."),(0,a.yg)("p",null,"We make an exception for invertibility for data which are too large to\nmeaningfully display, such as byte strings longer than 32 bytes. We may then\nselectively render them with a cryptographically-strong hash. In these cases,\nit is still computationally infeasible to find a different transaction which\nhas the same rendering. However, we must ensure that the hash computation is\nsimple enough to be reliably executed independently, so at least the hash is\nitself reasonably verifiable when the raw byte string is not."),(0,a.yg)("h3",{id:"chain-state"},"Chain State"),(0,a.yg)("p",null,"The rendering function (and parsing function) may depend on the current chain state.\nThis is useful for reading parameters, such as coin display metadata,\nor for reading user-specific preferences such as language or address aliases.\nNote that if the observed state changes between signature generation\nand the transaction's inclusion in a block, the delivery-time rendering\nmight differ. If so, the signature will be invalid and the transaction\nwill be rejected."),(0,a.yg)("h3",{id:"signature-and-security"},"Signature and Security"),(0,a.yg)("p",null,"For security, transaction signatures should have three properties:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Given the transaction, signatures, and chain state, it must be possible to validate that the signatures matches the transaction,\nto verify that the signers must have known their respective secret keys.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It must be computationally infeasible to find a substantially different transaction for which the given signatures are valid, given the same chain state.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The user should be able to give informed consent to the signed data via a simple, secure device with limited display capabilities."))),(0,a.yg)("p",null,"The correctness and security of ",(0,a.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is guaranteed by demonstrating an inverse function from the rendering to transaction protos.\nThis means that it is impossible for a different protocol buffer message to render to the same text."),(0,a.yg)("h3",{id:"transaction-hash-malleability"},"Transaction Hash Malleability"),(0,a.yg)("p",null,'When client software forms a transaction, the "raw" transaction (',(0,a.yg)("inlineCode",{parentName:"p"},"TxRaw"),") is serialized as a proto\nand a hash of the resulting byte sequence is computed.\nThis is the ",(0,a.yg)("inlineCode",{parentName:"p"},"TxHash"),", and is used by various services to track the submitted transaction through its lifecycle.\nVarious misbehavior is possible if one can generate a modified transaction with a different TxHash\nbut for which the signature still checks out."),(0,a.yg)("p",null,"SIGN_MODE_TEXTUAL prevents this transaction malleability by including the TxHash as an expert screen\nin the rendering."),(0,a.yg)("h3",{id:"signdoc"},"SignDoc"),(0,a.yg)("p",null,"The SignDoc for ",(0,a.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is formed from a data structure like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type Screen struct {\n  Title string   // possibly size limited to, advised to 64 characters\n  Content string // possibly size limited to, advised to 255 characters\n  Indent uint8   // size limited to something small like 16 or 32\n  Expert bool\n}\n\ntype SignDocTextual struct {\n  Screens []Screen\n}\n")),(0,a.yg)("p",null,"We do not plan to use protobuf serialization to form the sequence of bytes\nthat will be transmitted and signed, in order to keep the decoder simple.\nWe will use ",(0,a.yg)("a",{parentName:"p",href:"https://cbor.io"},"CBOR")," (",(0,a.yg)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8949.html"},"RFC 8949"),") instead.\nThe encoding is defined by the following CDDL (",(0,a.yg)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8610"},"RFC 8610"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},";;; CDDL (RFC 8610) Specification of SignDoc for SIGN_MODE_TEXTUAL.\n;;; Must be encoded using CBOR deterministic encoding (RFC 8949, section 4.2.1).\n\n;; A Textual document is a struct containing one field: an array of screens.\nsign_doc = {\n  screens_key: [* screen],\n}\n\n;; The key is an integer to keep the encoding small.\nscreens_key = 1\n\n;; A screen consists of a text string, an indentation, and the expert flag,\n;; represented as an integer-keyed map. All entries are optional\n;; and MUST be omitted from the encoding if empty, zero, or false.\n;; Text defaults to the empty string, indent defaults to zero,\n;; and expert defaults to false.\nscreen = {\n  ? title_key: tstr,\n  ? content_key: tstr,\n  ? indent_key: uint,\n  ? expert_key: bool,\n}\n\n;; Keys are small integers to keep the encoding small.\ntitle_key = 1\ncontent_key = 2\nindent_key = 3\nexpert_key = 4\n")),(0,a.yg)("p",null,"Defining the sign_doc as directly an array of screens has also been considered. However, given the possibility of future iterations of this specification, using a single-keyed struct has been chosen over the former proposal, as structs allow for easier backwards-compatibility."),(0,a.yg)("h2",{id:"details"},"Details"),(0,a.yg)("p",null,"In the examples that follow, screens will be shown as lines of text,\nindentation is indicated with a leading '>',\nand expert screens are marked with a leading ",(0,a.yg)("inlineCode",{parentName:"p"},"*"),"."),(0,a.yg)("h3",{id:"encoding-of-the-transaction-envelope"},"Encoding of the Transaction Envelope"),(0,a.yg)("p",null,'We define "transaction envelope" as all data in a transaction that is not in the ',(0,a.yg)("inlineCode",{parentName:"p"},"TxBody.Messages")," field. Transaction envelope includes fee, signer infos and memo, but don't include ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg"),"s. ",(0,a.yg)("inlineCode",{parentName:"p"},"//")," denotes comments and are not shown on the Ledger device."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Chain ID: <string>\nAccount number: <uint64>\nSequence: <uint64>\nAddress: <string>\n*Public Key: <Any>\nThis transaction has <int> Message(s)                       // Pluralize "Message" only when int>1\n> Message (<int>/<int>): <Any>                              // See value renderers for Any rendering.\nEnd of Message\nMemo: <string>                                              // Skipped if no memo set.\nFee: <coins>                                                // See value renderers for coins rendering.\n*Fee payer: <string>                                        // Skipped if no fee_payer set.\n*Fee granter: <string>                                      // Skipped if no fee_granter set.\nTip: <coins>                                                // Skippted if no tip.\nTipper: <string>\n*Gas Limit: <uint64>\n*Timeout Height: <uint64>                                   // Skipped if no timeout_height set.\n*Other signer: <int> SignerInfo                             // Skipped if the transaction only has 1 signer.\n*> Other signer (<int>/<int>): <SignerInfo>\n*End of other signers\n*Extension options: <int> Any:                              // Skipped if no body extension options\n*> Extension options (<int>/<int>): <Any>\n*End of extension options\n*Non critical extension options: <int> Any:                 // Skipped if no body non critical extension options\n*> Non critical extension options (<int>/<int>): <Any>\n*End of Non critical extension options\n*Hash of raw bytes: <hex_string>                            // Hex encoding of bytes defined, to prevent tx hash malleability.\n')),(0,a.yg)("h3",{id:"encoding-of-the-transaction-body"},"Encoding of the Transaction Body"),(0,a.yg)("p",null,"Transaction Body is the ",(0,a.yg)("inlineCode",{parentName:"p"},"Tx.TxBody.Messages")," field, which is an array of ",(0,a.yg)("inlineCode",{parentName:"p"},"Any"),"s, where each ",(0,a.yg)("inlineCode",{parentName:"p"},"Any")," packs a ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),". Since ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s are widely used, they have a slightly different encoding than usual array of ",(0,a.yg)("inlineCode",{parentName:"p"},"Any"),"s (Protobuf: ",(0,a.yg)("inlineCode",{parentName:"p"},"repeated google.protobuf.Any"),") described in Annex 1."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"This transaction has <int> message:   // Optional 's' for \"message\" if there's is >1 sdk.Msgs.\n// For each Msg, print the following 2 lines:\nMsg (<int>/<int>): <string>           // E.g. Msg (1/2): bank v1beta1 send coins\n<value rendering of Msg struct>\nEnd of transaction messages\n")),(0,a.yg)("h4",{id:"example"},"Example"),(0,a.yg)("p",null,"Given the following Protobuf message:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},'message Grant {\n  google.protobuf.Any       authorization = 1 [(cosmos_proto.accepts_interface) = "cosmos.authz.v1beta1.Authorization"];\n  google.protobuf.Timestamp expiration    = 2 [(gogoproto.stdtime) = true, (gogoproto.nullable) = false];\n}\n\nmessage MsgGrant {\n  option (cosmos.msg.v1.signer) = "granter";\n\n  string granter = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string grantee = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')),(0,a.yg)("p",null,"and a transaction containing 1 such ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),", we get the following encoding:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"This transaction has 1 message:\nMsg (1/1): authz v1beta1 grant\nGranter: cosmos1abc...def\nGrantee: cosmos1ghi...jkl\nEnd of transaction messages\n")),(0,a.yg)("h3",{id:"custom-msg-renderers"},"Custom ",(0,a.yg)("inlineCode",{parentName:"h3"},"Msg")," Renderers"),(0,a.yg)("p",null,"Application developers may choose to not follow default renderer value output for their own ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg"),"s. In this case, they can implement their own custom ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," renderer. This is similar to ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4430.md"},"EIP4430"),", where the smart contract developer chooses the description string to be shown to the end user."),(0,a.yg)("p",null,"This is done by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.msg.textual.v1.expert_custom_renderer")," Protobuf option to a non-empty string. This option CAN ONLY be set on a Protobuf message representing transaction message object (implementing ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," interface)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},'message MsgFooBar {\n  // Optional comments to describe in human-readable language the formatting\n  // rules of the custom renderer.\n  option (cosmos.msg.textual.v1.expert_custom_renderer) = "<unique algorithm identifier>";\n\n  // proto fields\n}\n')),(0,a.yg)("p",null,"When this option is set on a ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg"),", a registered function will transform the ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," into an array of one or more strings, which MAY use the key/value format (described in point #3) with the expert field prefix (described in point #5) and arbitrary indentation (point #6). These strings MAY be rendered from a ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," field using a default value renderer, or they may be generated from several fields using custom logic."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"<unique algorithm identifier>")," is a string convention chosen by the application developer and is used to identify the custom ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg")," renderer. For example, the documentation or specification of this custom algorithm can reference this identifier. This identifier CAN have a versioned suffix (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"_v1"),") to adapt for future changes (which would be consensus-breaking). We also recommend adding Protobuf comments to describe in human language the custom logic used."),(0,a.yg)("p",null,"Moreover, the renderer must provide 2 functions: one for formatting from Protobuf to string, and one for parsing string to Protobuf. These 2 functions are provided by the application developer. To satisfy point #1, the parse function MUST be the inverse of the formatting function. This property will not be checked by the SDK at runtime. However, we strongly recommend the application developer to include a comprehensive suite in their app repo to test invertibility, as to not introduce security bugs."),(0,a.yg)("h3",{id:"require-signing-over-the-txbody-and-authinfo-raw-bytes"},"Require signing over the ",(0,a.yg)("inlineCode",{parentName:"h3"},"TxBody")," and ",(0,a.yg)("inlineCode",{parentName:"h3"},"AuthInfo")," raw bytes"),(0,a.yg)("p",null,"Recall that the transaction bytes merklelized on chain are the Protobuf binary serialization of ",(0,a.yg)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.tx.v1beta1#cosmos.tx.v1beta1.TxRaw"},"TxRaw"),", which contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"body_bytes")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"auth_info_bytes"),". Moreover, the transaction hash is defined as the SHA256 hash of the ",(0,a.yg)("inlineCode",{parentName:"p"},"TxRaw")," bytes. We require that the user signs over these bytes in SIGN_MODE_TEXTUAL, more specifically over the following string:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"*Hash of raw bytes: <HEX(sha256(len(body_bytes) ++ body_bytes ++ len(auth_info_bytes) ++ auth_info_bytes))>\n")),(0,a.yg)("p",null,"where:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"++")," denotes concatenation,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"HEX")," is the hexadecimal representation of the bytes, all in capital letters, no ",(0,a.yg)("inlineCode",{parentName:"li"},"0x")," prefix,"),(0,a.yg)("li",{parentName:"ul"},"and ",(0,a.yg)("inlineCode",{parentName:"li"},"len()")," is encoded as a Big-Endian uint64.")),(0,a.yg)("p",null,"This is to prevent transaction hash malleability. The point #1 about invertiblity assures that transaction ",(0,a.yg)("inlineCode",{parentName:"p"},"body")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"auth_info")," values are not malleable, but the transaction hash still might be malleable with point #1 only, because the SIGN",(0,a.yg)("em",{parentName:"p"},"MODE_TEXTUAL strings don't follow the byte ordering defined in ",(0,a.yg)("inlineCode",{parentName:"em"},"body_bytes")," and ",(0,a.yg)("inlineCode",{parentName:"em"},"auth_info_bytes"),". Without this hash, a malicious validator or exchange could intercept a transaction, modify its transaction hash _after")," the user signed it using SIGN_MODE_TEXTUAL (by tweaking the byte ordering inside ",(0,a.yg)("inlineCode",{parentName:"p"},"body_bytes")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"auth_info_bytes"),"), and then submit it to Tendermint."),(0,a.yg)("p",null,"By including this hash in the SIGN_MODE_TEXTUAL signing payload, we keep the same level of guarantees as ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-020-protobuf-transaction-encoding"},"SIGN_MODE_DIRECT"),"."),(0,a.yg)("p",null,"These bytes are only shown in expert mode, hence the leading ",(0,a.yg)("inlineCode",{parentName:"p"},"*"),"."),(0,a.yg)("h2",{id:"updates-to-the-current-specification"},"Updates to the current specification"),(0,a.yg)("p",null,"The current specification is not set in stone, and future iterations are to be expected. We distinguish two categories of updates to this specification:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Updates that require changes of the hardware device embedded application."),(0,a.yg)("li",{parentName:"ol"},"Updates that only modify the envelope and the value renderers.")),(0,a.yg)("p",null,"Updates in the 1st category include changes of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Screen")," struct or its corresponding CBOR encoding. This type of updates require a modification of the hardware signer application, to be able to decode and parse the new types. Backwards-compatibility must also be guaranteed, so that the new hardware application works with existing versions of the SDK. These updates require the coordination of multiple parties: SDK developers, hardware application developers (currently: Zondax), and client-side developers (e.g. CosmJS). Furthermore, a new submission of the hardware device application may be necessary, which, depending on the vendor, can take some time. As such, we recommend to avoid this type of updates as much as possible."),(0,a.yg)("p",null,"Updates in the 2nd category include changes to any of the value renderers or to the transaction envelope. For example, the ordering of fields in the envelope can be swapped, or the timestamp formatting can be modified. Since SIGN_MODE_TEXTUAL sends ",(0,a.yg)("inlineCode",{parentName:"p"},"Screen"),"s to the hardware device, this type of change do not need a hardware wallet application update. They are however state-machine-breaking, and must be documented as such. They require the coordination of SDK developers with client-side developers (e.g. CosmJS), so that the updates are released on both sides close to each other in time."),(0,a.yg)("p",null,"We define a spec version, which is an integer that must be incremented on each update of either category. This spec version will be exposed by the SDK's implementation, and can be communicated to clients. For example, SDK v0.50 might use the spec version 1, and SDK v0.51 might use 2; thanks to this versioning, clients can know how to craft SIGN_MODE_TEXTUAL transactions based on the target SDK version."),(0,a.yg)("p",null,'The current spec version is defined in the "Status" section, on the top of this document. It is initialized to ',(0,a.yg)("inlineCode",{parentName:"p"},"0")," to allow flexibility in choosing how to define future versions, as it would allow adding a field either in the SignDoc Go struct or in Protobuf in a backwards-compatible way."),(0,a.yg)("h2",{id:"additional-formatting-by-the-hardware-device"},"Additional Formatting by the Hardware Device"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex2"},"annex 2"),"."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"A minimal MsgSend: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/094abcd393379acbbd043996024d66cd65246fb1/tx/textual/internal/testdata/e2e.json#L2-L70"},"see transaction"),"."),(0,a.yg)("li",{parentName:"ol"},"A transaction with a bit of everything: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/094abcd393379acbbd043996024d66cd65246fb1/tx/textual/internal/testdata/e2e.json#L71-L270"},"see transaction"),".")),(0,a.yg)("p",null,"The examples below are stored in a JSON file with the following fields:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"proto"),": the representation of the transaction in ProtoJSON,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"screens"),": the transaction rendered into SIGN_MODE_TEXTUAL screens,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cbor"),": the sign bytes of the transaction, which is the CBOR encoding of the screens.")),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.yg)("p",null,"SIGN_MODE_TEXTUAL is purely additive, and doesn't break any backwards compatibility with other sign modes."),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Human-friendly way of signing in hardware devices."),(0,a.yg)("li",{parentName:"ul"},"Once SIGN_MODE_TEXTUAL is shipped, SIGN_MODE_LEGACY_AMINO_JSON can be deprecated and removed. On the longer term, once the ecosystem has totally migrated, Amino can be totally removed.")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Some fields are still encoded in non-human-readable ways, such as public keys in hexadecimal."),(0,a.yg)("li",{parentName:"ul"},"New ledger app needs to be released, still unclear")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If the transaction is complex, the string array can be arbitrarily long, and some users might just skip some screens and blind sign.")),(0,a.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Some details on value renderers need to be polished, see ",(0,a.yg)("a",{parentName:"li",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex1"},"Annex 1"),"."),(0,a.yg)("li",{parentName:"ul"},"Are ledger apps able to support both SIGN_MODE_LEGACY_AMINO_JSON and SIGN_MODE_TEXTUAL at the same time?"),(0,a.yg)("li",{parentName:"ul"},"Open question: should we add a Protobuf field option to allow app developers to overwrite the textual representation of certain Protobuf fields and message? This would be similar to Ethereum's ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs/pull/4430"},"EIP4430"),", where the contract developer decides on the textual representation."),(0,a.yg)("li",{parentName:"ul"},"Internationalization.")),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/dev-portal-docsite/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex1"},"Annex 1"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Initial discussion: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6513"},"https://github.com/cosmos/cosmos-sdk/issues/6513"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Living document used in the working group: ",(0,a.yg)("a",{parentName:"p",href:"https://hackmd.io/fsZAO-TfT0CKmLDtfMcKeA?both"},"https://hackmd.io/fsZAO-TfT0CKmLDtfMcKeA?both"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Working group meeting notes: ",(0,a.yg)("a",{parentName:"p",href:"https://hackmd.io/7RkGfv_rQAaZzEigUYhcXw"},"https://hackmd.io/7RkGfv_rQAaZzEigUYhcXw"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Ethereum\'s "Described Transactions" ',(0,a.yg)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/pull/4430"},"https://github.com/ethereum/EIPs/pull/4430")))))}g.isMDXComponent=!0}}]);