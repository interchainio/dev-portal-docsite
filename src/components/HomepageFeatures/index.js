import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Cosmos SDK",
    Svg: require("@site/static/img/cosmossdk-brandmark.svg").default,
    description: (
      <>
        Documentation for the Cosmos SDK, a modular framework for building
        interoperable, application-specific blockchains.
      </>
    ),
    docsLink: "cosmos-sdk/learn", // TODO: maybe just grab these from the main config.js?
  },
  {
    title: "IBC-Go",
    Svg: require("@site/static/img/ibc-brandmark.svg").default,
    description: (
      <>
        Documentation for IBC-Go, the Go implementation of the Inter-Blockchain
        Communication protocol.
      </>
    ),
    docsLink: "ibc-go",
  },
  {
    title: "Comet BFT",
    Svg: require("@site/static/img/cometbft-brandmark.svg").default,
    description: (
      <>
        Documentation for Comet BFT, a Byzantine Fault Tolerant consensus
        algorithm for the Interchain.
      </>
    ),
    docsLink: "comet-bft",
  },
  {
    title: "CosmWasm",
    Svg: require("@site/static/img/cosmwasm-brandmark.svg").default,
    description: (
      <>The rust based smart contracting platform powering the Interchain.</>
    ),
    docsLink: "cosmwasm",
  },
];

function Feature({ Svg, title, description, docsLink }) {
  return (
    <div className="border max-w-lg rounded-sm p-4 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="text-center">
        <a href={docsLink}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>

      <div className="">
        <h3 className="font-bold">
          <a href={docsLink}>{title}</a>
        </h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="">
      <h2 className="text-2xl font-extrabold tracking-tight lg:text-4xl text-center">
        Discover the Interchain Stack
      </h2>
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8 md:mt-20 mb-32">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
