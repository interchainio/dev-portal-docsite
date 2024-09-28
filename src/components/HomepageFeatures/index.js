import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cosmos SDK',
    Svg: require('@site/static/img/cosmossdk-brandmark.svg').default,
    description: (
      <>
        Documentation for the Cosmos SDK, a modular framework for building
        interoperable, application-specific blockchains.
      </>
    ),
    docsLink: "cosmos-sdk/learn", // TODO: maybe just grab these from the main config.js?
  },
  {
    title: 'IBC-Go',
    Svg: require('@site/static/img/ibc-brandmark.svg').default,
    description: (
      <>
        Documentation for IBC-Go, the Go implementation of the Inter-Blockchain
        Communication protocol.
      </>
    ),
    docsLink: "ibc-go",
  },
  {
    title: 'Comet BFT',
    Svg: require('@site/static/img/cometbft-brandmark.svg').default,
    description: (
      <>
        Documentation for Comet BFT, a Byzantine Fault Tolerant consensus
        algorithm for the Interchain.
      </>
    ),
    docsLink: "cometbft",
  },
  {
    title: 'CosmWasm',
    Svg: require('@site/static/img/cosmwasm-brandmark.svg').default,
    description: (
      <>
        The rust based smart contracting platform powering the Interchain.
      </>
    ),
    docsLink: "cosmwasm",
  },
];

function Feature({Svg, title, description, docsLink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={docsLink}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
