import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Button from "@site/src/components/button";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Unified docs for Cosmos-SDK, IBC, Comet BFT and CosmWasm."
    >
      <div className="container">
        <HeroSection />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section name="hero" id="hero">
      {/* Hero */}
      <div className="pt-8 pb-6 md:py-24 lg:py-32">
        {/* Grid */}
        <div className="grid md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-center md:text-left scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {/* siteConfig.title */}Interchain Docsite
            </h1>
            <p className="mt-3 text-center md:text-left text-xl text-muted-foreground">
              {/* siteConfig.tagline */}Unified documentation to build
              self-sovereign interoperable blockchains.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link to={useBaseUrl("/onboarding")}>
                <Button size="lg">Quick Start</Button>
                {/* <Button variant={"outline"} size={"lg"}>
                  Contact sales team
                </Button> */}
              </Link>
            </div>
            {/* End Buttons */}
            <div className="mt-8 md:mt-6 lg:mt-10 border-t-2">
              <p className="text-center md:text-left py-6 md:py-5 text-current italic font-inter">
                Trusted by the best teams in the industry
              </p>
              <div className="flex flex-wrap sm:justify-start justify-center items-center gap-x-5">
                {/* Review */}
                <img
                  className="h-[55px] dark:invert"
                  src={useBaseUrl("/img/chains/binance.svg")}
                  alt="Binance Chain"
                />
                <img
                  className="h-[30px] dark:invert dark:grayscale"
                  src={useBaseUrl("/img/chains/dydx_colored.svg")}
                  alt="Dydx"
                />
                <img
                  className="h-[55px] dark:invert"
                  src={useBaseUrl("/img/chains/crypto-com.svg")}
                  alt="Crypto.com"
                />
                <img
                  className="h-[30px] dark:invert"
                  src={useBaseUrl("/img/chains/celestia_colored.svg")}
                  alt="Celestia"
                />
                {/* End Review */}
              </div>
            </div>
          </div>
          {/* Col */}
          <div className="ms-4 hidden md:block relative">
            <img
              className="dark:hidden w-full rounded-md"
              src={useBaseUrl("/img/squares1-black.svg")}
              alt="hero"
            />
            <img
              className="hidden dark:block w-full rounded-md"
              src={useBaseUrl("/img/squares1-white.svg")}
              alt="hero"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </section>
  );
}
