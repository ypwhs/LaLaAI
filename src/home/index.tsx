
"use client";
import * as React from "react";
import { Header } from "../components/Header";
import { Hero } from "./Hero";
import { Partners } from "./Partners";
import { Features } from "./Features";
import { KeyFeatures } from "./KeyFeatures";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { FAQ } from "./FAQ";
import { Footer } from "../components/Footer";

export const Homepage: React.FC = () => {
  return (
      <div className="w-full min-h-screen bg-white">
        <Header />
        <main className="flex flex-col items-center px-5 py-0">
          <div className="z-0 max-w-full w-[1440px] gap-40 mt-20">
            <Hero />
            <Partners />
            <div className="flex z-0 flex-col items-center mt-20 max-w-full w-[1440px] max-md:mt-10">
              <Features />
              <KeyFeatures />
              <Team />
              <Contact />
              <FAQ />
              <Footer />
            </div>
          </div>
        </main>
    </div>
  );
};

export default Homepage;
