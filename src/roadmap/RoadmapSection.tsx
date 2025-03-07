import React from "react";
import { RoadmapCard } from "./RoadmapCard";

const roadmapItems = [
  {
    title: "Team & Prototype",
    step: "STEP 01",
    date: "Q1, 2025",
    cardTitle:
      "Foundations Laid: Building the Core Team and Prototyping DID & DNS.",
    description:
      'Project Kickoff & Team Formation: Assemble the R&D team and initiate the design of the core framework. DID & Decentralized DNS Prototype Development: Develop the initial decentralized identity (DID) system and "agent" domain resolution architecture.',
  },
  {
    title: "Launch Testnet",
    step: "STEP 02",
    date: "Q2, 2025",
    cardTitle: "First Steps: MVP Development and Testnet Deployment.",
    description:
      "MVP Development: Implement DID registration and domain resolution functionality for AI agents. Testnet Launch: Deploy the first testnet to validate DID and DNS functionalities.",
  },
  {
    title: "Beta & Wallets",
    step: "STEP 03",
    date: "Q3, 2025",
    cardTitle: "Expanding Horizons: Wallet Integration and Beta Release.",
    description:
      "Wallet Integration & Finalize Smart Contracts: Implement cross-chain identity registration and permission management. Beta Release: Open early access to AI agents and developers for testing.",
  },
  {
    title: "Token & Governance",
    step: "STEP 04",
    date: "Q4, 2025",
    cardTitle: "Token Launch: TGE, CEX Listing, and Governance Testing.",
    description:
      "TGE & CEX Listing: Conduct Token Generation Event (TGE) and list $LALA on centralized exchanges (CEX). Agent DAO Governance Test: Deploy an initial governance framework and begin decentralized governance testing.",
  },
  {
    title: "Mainnet Live",
    step: "STEP 05",
    date: "Q1, 2026",
    cardTitle:
      "Mainnet Milestone: Full DID & DNS Services and Cross-Chain Growth.",
    description:
      "Mainnet Launch: Deploy the complete DID & DNS services with integrated governance features. Cross-chain Expansion: Enhance LALA's interoperability by supporting additional blockchain networks.",
  },
  {
    title: "Storage & Growth",
    step: "STEP 06",
    date: "Q2, 2026",
    cardTitle:
      "Decentralized Infrastructure: Storage, Verification, and Developer Onboarding.",
    description:
      "Decentralized Storage & Verification Nodes: Implement off-chain verification mechanisms for AI agent data storage. Ecosystem Expansion & Developer Engagement: Strengthen ecosystem partnerships and accelerate network application adoption.",
  },
  {
    title: "Global Expansion",
    step: "STEP 07",
    date: "Q3, 2026",
    cardTitle:
      "Global Reach: DEX Integration, Multilingual Support, and DAO Optimization.",
    description:
      "DEX Integration & Global Expansion: Integrate decentralized exchange (DEX) support and introduce multilingual capabilities for global market penetration. Agent DAO Optimization: Refine governance structures and introduce new incentive mechanisms for AI agents.",
  },
];

export function RoadmapSection() {
  return (
    <section className="flex flex-col gap-20 items-center px-0 py-10 w-full max-w-[1440px]">
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-base text-amber-400">&nbsp;&nbsp;</span>
        <h1 className="m-0 text-6xl font-medium tracking-tighter leading-[73.6px] text-stone-900 max-sm:text-4xl">
          Our latest roadmap
        </h1>
        <p className="mt-4 text-lg text-center max-w-[624px] text-zinc-700 max-sm:text-base">
          The roadmap outlines the upcoming product progress for laladev.
        </p>
      </div>
      <div className="flex flex-col gap-16 w-full max-w-[1200px] max-md:px-5 max-md:py-0">
        {roadmapItems.map((item, index) => (
          <RoadmapCard
            key={index}
            title={item.title}
            step={item.step}
            date={item.date}
            cardTitle={item.cardTitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
