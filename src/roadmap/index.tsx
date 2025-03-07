"use client";
import * as React from "react";
import { Header } from "../components/Header";
import { RoadmapSection } from "./RoadmapSection";

export function RoadmapPage() {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-grotesk@400,500,700&display=swap"
        rel="stylesheet"
      />
      <div className="w-full min-h-screen bg-white">
        <Header />
        <main className="flex flex-col items-center px-5 py-0 mt-10">
          <RoadmapSection />
        </main>
      </div>
    </>
  );
}
