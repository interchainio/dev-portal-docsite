"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[29120],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||s;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(58168),a=(n(96540),n(15680));const s={sidebar_position:1},r="Running in Production",i={unversionedId:"docs/build/run-node/run-production",id:"docs/build/run-node/run-production",title:"Running in Production",description:"This section describes how to securely run a node in a public setting and/or on a mainnet on one of the many Cosmos SDK public blockchains.",source:"@site/cosmos-sdk/docs/build/run-node/06-run-production.md",sourceDirName:"docs/build/run-node",slug:"/docs/build/run-node/run-production",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/run-node/run-production",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Running a Testnet",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/run-node/run-testnet"},next:{title:"Guide to Multisig transactions",permalink:"/dev-portal-docsite/cosmos-sdk/next/docs/build/run-node/multisig-guide"}},l={},p=[{value:"Sever Setup",id:"sever-setup",level:2},{value:"User",id:"user",level:3},{value:"Go",id:"go",level:3},{value:"Firewall",id:"firewall",level:3},{value:"CometBFT JsonRPC",id:"cometbft-jsonrpc",level:5},{value:"Cosmos SDK GRPC",id:"cosmos-sdk-grpc",level:5},{value:"Cosmos SDK REST",id:"cosmos-sdk-rest",level:5},{value:"Signing",id:"signing",level:3},{value:"File",id:"file",level:4},{value:"Remote Signer",id:"remote-signer",level:4},{value:"TMKMS",id:"tmkms",level:5},{value:"Dependencies",id:"dependencies",level:6},{value:"Setup",id:"setup",level:6}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"running-in-production"},"Running in Production"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This section describes how to securely run a node in a public setting and/or on a mainnet on one of the many Cosmos SDK public blockchains. ")),(0,a.yg)("p",null,"When operating a node, full node or validator, in production it is important to set your server up securely. "),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"There are many different ways to secure a server and your node, the described steps here is one way. To see another way of setting up a server see the ",(0,a.yg)("a",{parentName:"p",href:"https://tutorials.cosmos.network/hands-on-exercise/4-run-in-prod"},"run in production tutorial"),".")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This walkthrough assumes the underlying operating system is Ubuntu. ")),(0,a.yg)("h2",{id:"sever-setup"},"Sever Setup"),(0,a.yg)("h3",{id:"user"},"User"),(0,a.yg)("p",null,"When creating a server most times it is created as user ",(0,a.yg)("inlineCode",{parentName:"p"},"root"),". This user has heightened privileges on the server. When operating a node, it is recommended to not run your node as the root user.  "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a new user")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo adduser change_me\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"We want to allow this user to perform sudo tasks")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG sudo change_me\n")),(0,a.yg)("p",null,"Now when logging into the server, the non ",(0,a.yg)("inlineCode",{parentName:"p"},"root")," user can be used. "),(0,a.yg)("h3",{id:"go"},"Go"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Install the ",(0,a.yg)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," version preconized by the application.")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"In the past, validators ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/13976"},"have had issues")," when using different versions of Go. It is recommended that the whole validator set uses the version of Go that is preconized by the application.")),(0,a.yg)("h3",{id:"firewall"},"Firewall"),(0,a.yg)("p",null,"Nodes should not have all ports open to the public, this is a simple way to get DDOS'd. Secondly it is recommended by ",(0,a.yg)("a",{parentName:"p",href:"https://https://github.com/cometbft/cometbft"},"CometBFT")," to never expose ports that are not required to operate a node. "),(0,a.yg)("p",null,"When setting up a firewall there are a few ports that can be open when operating a Cosmos SDK node. There is the CometBFT json-RPC, prometheus, p2p, remote signer and Cosmos SDK GRPC and REST. If the node is being operated as a node that does not offer endpoints to be used for submission or querying then a max of three endpoints are needed."),(0,a.yg)("p",null,"Most, if not all servers come equipped with ",(0,a.yg)("a",{parentName:"p",href:"https://help.ubuntu.com/community/UFW"},"ufw"),". Ufw will be used in this tutorial. "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Reset UFW to disallow all incoming connections and allow outgoing")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw default deny incoming\nsudo ufw default allow outgoing\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Lets make sure that port 22 (ssh) stays open. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow ssh\n")),(0,a.yg)("p",null,"or "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 22\n")),(0,a.yg)("p",null,"Both of the above commands are the same. "),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Allow Port 26656 (cometbft p2p port). If the node has a modified p2p port then that port must be used here.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 26656/tcp\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Allow port 26660 (cometbft ",(0,a.yg)("a",{parentName:"li",href:"https://prometheus.io"},"prometheus"),"). This acts as the applications monitoring port as well. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 26660/tcp\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"IF the node which is being setup would like to expose CometBFTs jsonRPC and Cosmos SDK GRPC and REST then follow this step. (Optional)")),(0,a.yg)("h5",{id:"cometbft-jsonrpc"},"CometBFT JsonRPC"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 26657/tcp\n")),(0,a.yg)("h5",{id:"cosmos-sdk-grpc"},"Cosmos SDK GRPC"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 9090/tcp\n")),(0,a.yg)("h5",{id:"cosmos-sdk-rest"},"Cosmos SDK REST"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 1317/tcp\n")),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"Lastly, enable ufw")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sudo ufw enable\n")),(0,a.yg)("h3",{id:"signing"},"Signing"),(0,a.yg)("p",null,"If the node that is being started is a validator there are multiple ways a validator could sign blocks. "),(0,a.yg)("h4",{id:"file"},"File"),(0,a.yg)("p",null,"File based signing is the simplest and default approach. This approach works by storing the consensus key, generated on initialization, to sign blocks. This approach is only as safe as your server setup as if the server is compromised so is your key.  This key is located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"config/priv_val_key.json")," directory generated on initialization."),(0,a.yg)("p",null,"A second file exists that user must be aware of, the file is located in the data directory ",(0,a.yg)("inlineCode",{parentName:"p"},"data/priv_val_state.json"),". This file protects your node from double signing. It keeps track of the consensus keys last sign height, round and latest signature. If the node crashes and needs to be recovered this file must be kept in order to ensure that the consensus key will not be used for signing a block that was previously signed. "),(0,a.yg)("h4",{id:"remote-signer"},"Remote Signer"),(0,a.yg)("p",null,"A remote signer is a secondary server that is separate from the running node that signs blocks with the consensus key. This means that the consensus key does not live on the node itself. This increases security because your full node which is connected to the remote signer can be swapped without missing blocks. "),(0,a.yg)("p",null,"The two most used remote signers are ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms"},"tmkms")," from ",(0,a.yg)("a",{parentName:"p",href:"https://www.iqlusion.io"},"Iqlusion")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/strangelove-ventures/horcrux"},"horcrux")," from ",(0,a.yg)("a",{parentName:"p",href:"https://strange.love"},"Strangelove"),"."),(0,a.yg)("h5",{id:"tmkms"},"TMKMS"),(0,a.yg)("h6",{id:"dependencies"},"Dependencies"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Update server dependencies and install extras needed. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt update -y && sudo apt install build-essential curl jq -y\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Install Rust: ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Install Libusb:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install libusb-1.0-0-dev\n")),(0,a.yg)("h6",{id:"setup"},"Setup"),(0,a.yg)("p",null,"There are two ways to install tmkms, from source or ",(0,a.yg)("inlineCode",{parentName:"p"},"cargo install"),". In the examples we will cover downloading or building from source and using softsign. Softsign stands for software signing, but you could use a ",(0,a.yg)("a",{parentName:"p",href:"https://www.yubico.com/products/hardware-security-module/"},"yubihsm")," as your signing key if you wish. "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Build:")),(0,a.yg)("p",null,"From source:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/iqlusioninc/tmkms.git\ncd $HOME/tmkms\ncargo install tmkms --features=softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n")),(0,a.yg)("p",null,"or "),(0,a.yg)("p",null,"Cargo install: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cargo install tmkms --features=softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To use tmkms with a yubikey install the binary with ",(0,a.yg)("inlineCode",{parentName:"p"},"--features=yubihsm"),".")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Migrate the validator key from the full node to the new tmkms instance. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"scp user@123.456.32.123:~/.simd/config/priv_validator_key.json ~/tmkms/config/secrets\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Import the validator key into tmkms. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key\n")),(0,a.yg)("p",null,"At this point, it is necessary to delete the ",(0,a.yg)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from the validator node and the tmkms node. Since the key has been imported into tmkms (above) it is no longer necessary on the nodes. The key can be safely stored offline. "),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Modify the ",(0,a.yg)("inlineCode",{parentName:"li"},"tmkms.toml"),". ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"vim $HOME/tmkms/config/tmkms.toml\n")),(0,a.yg)("p",null,"This example shows a configuration that could be used for soft signing. The example has an IP of ",(0,a.yg)("inlineCode",{parentName:"p"},"123.456.12.345")," with a port of ",(0,a.yg)("inlineCode",{parentName:"p"},"26659")," a chain_id of ",(0,a.yg)("inlineCode",{parentName:"p"},"test-chain-waSDSe"),". These are items that most be modified for the usecase of tmkms and the network. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml"},'# CometBFT KMS configuration file\n\n## Chain Configuration\n\n[[chain]]\nid = "osmosis-1"\nkey_format = { type = "bech32", account_key_prefix = "cosmospub", consensus_key_prefix = "cosmosvalconspub" }\nstate_file = "/root/tmkms/config/state/priv_validator_state.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["test-chain-waSDSe"]\nkey_type = "consensus"\npath = "/root/tmkms/config/secrets/priv_validator_key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "test-chain-waSDSe"\naddr = "tcp://123.456.12.345:26659"\nsecret_key = "/root/tmkms/config/secrets/secret_connection_key"\nprotocol_version = "v0.34"\nreconnect = true\n')),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Set the address of the tmkms instance. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'vim $HOME/.simd/config/config.toml\n\npriv_validator_laddr = "tcp://127.0.0.1:26659"\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The above address it set to ",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," but it is recommended to set the tmkms server to secure the startup")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"It is recommended to comment or delete the lines that specify the path of the validator key and validator:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-toml"},'# Path to the JSON file containing the private key to use as a validator in the consensus protocol\n# priv_validator_key_file = "config/priv_validator_key.json"\n\n# Path to the JSON file containing the last sign state of a validator\n# priv_validator_state_file = "data/priv_validator_state.json"\n'))),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"Start the two processes. ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c $HOME/tmkms/config/tmkms.toml\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"simd start\n")))}g.isMDXComponent=!0}}]);