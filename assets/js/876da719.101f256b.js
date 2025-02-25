"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[89832],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(58168),a=(n(96540),n(15680));const i={},r="RFC {RFC-NUMBER}:",s={unversionedId:"build/rfc/rfc-template",id:"version-0.50/build/rfc/rfc-template",title:"RFC {RFC-NUMBER}:",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/rfc/rfc-template.md",sourceDirName:"build/rfc",slug:"/build/rfc/rfc-template",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/rfc/rfc-template",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"RFC 001: Transaction Validation",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/rfc/rfc-001-tx-validation"},next:{title:"Specifications",permalink:"/dev-portal-docsite/cosmos-sdk/0.50/build/spec/"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Background",id:"background",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Abandoned Ideas (Optional)",id:"abandoned-ideas-optional",level:2},{value:"Descision",id:"descision",level:2},{value:"Consequences (optional)",id:"consequences-optional",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:3},{value:"Discussion",id:"discussion",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rfc-rfc-number-title"},"RFC {RFC-NUMBER}: {TITLE}"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"{date}: {changelog}")),(0,a.yg)("h2",{id:"background"},"Background"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},'The next section is the "Background" section. This section should be at least two paragraphs and can take up to a whole\npage in some cases. The guiding goal of the background section is: as a newcomer to this project (new employee, team\ntransfer), can I read the background section and follow any links to get the full context of why this change is',(0,a.yg)("br",{parentName:"p"}),"\n","necessary? "),(0,a.yg)("p",{parentName:"blockquote"},"If you can't show a random engineer the background section and have them acquire nearly full context on the necessity\nfor the RFC, then the background section is not full enough. To help achieve this, link to prior RFCs, discussions, and\nmore here as necessary to provide context so you don't have to simply repeat yourself.")),(0,a.yg)("h2",{id:"proposal"},"Proposal"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},'The next required section is "Proposal" or "Goal". Given the background above, this section proposes a solution.\nThis should be an overview of the "how" for the solution, but for details further sections will be used.')),(0,a.yg)("h2",{id:"abandoned-ideas-optional"},"Abandoned Ideas (Optional)"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"As RFCs evolve, it is common that there are ideas that are abandoned. Rather than simply deleting them from the\ndocument, you should try to organize them into sections that make it clear they're abandoned while explaining why they\nwere abandoned."),(0,a.yg)("p",{parentName:"blockquote"},"When sharing your RFC with others or having someone look back on your RFC in the future, it is common to walk the same\npath and fall into the same pitfalls that we've since matured from. Abandoned ideas are a way to recognize that path\nand explain the pitfalls and why they were abandoned.")),(0,a.yg)("h2",{id:"descision"},"Descision"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This section describes alternative designs to the chosen design. This section\nis important and if an adr does not have any alternatives then it should be\nconsidered that the ADR was not thought through. ")),(0,a.yg)("h2",{id:"consequences-optional"},"Consequences (optional)"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},'This section describes the resulting context, after applying the decision. All\nconsequences should be listed here, not just the "positive" ones. A particular\ndecision may have positive, negative, and neutral consequences, but all of them\naffect the team and project in the future.')),(0,a.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"All ADRs that introduce backwards incompatibilities must include a section\ndescribing these incompatibilities and their severity. The ADR must explain\nhow the author proposes to deal with these incompatibilities. ADR submissions\nwithout a sufficient backwards compatibility treatise may be rejected outright.")),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"{positive consequences}")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"{negative consequences}")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"{neutral consequences}")),(0,a.yg)("h3",{id:"references"},"References"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Links to external materials needed to follow the discussion may be added here."),(0,a.yg)("p",{parentName:"blockquote"},"In addition, if the discussion in a request for comments leads to any design\ndecisions, it may be helpful to add links to the ADR documents here after the\ndiscussion has settled.")),(0,a.yg)("h2",{id:"discussion"},"Discussion"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This section contains the core of the discussion."),(0,a.yg)("p",{parentName:"blockquote"},"There is no fixed format for this section, but ideally changes to this\nsection should be updated before merging to reflect any discussion that took\nplace on the PR that made those changes.")))}p.isMDXComponent=!0}}]);