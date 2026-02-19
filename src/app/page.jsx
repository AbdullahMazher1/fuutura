"use client";

import { useState } from "react";
import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Capabilities from "@/components/Exchange";
import FutuuraMatters from "@/components/FutuuraMatters";
import KycAml from "@/components/KycAml";
import Ecosystem from "@/components/Ecosystem";
import Hero from "../components/Hero";
import Second from "../components/second";
import LoaderBanner from "@/components/LoaderBanner";

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);
  if (bannerVisible) {
    return (
      <div className="z-[1111111111] relative">
        <LoaderBanner onAnimationComplete={() => setBannerVisible(false)} />
      </div>
    );
  }
  return (
    <main className="">
      <Hero />
      <Second />
      <Capabilities />
      <FutuuraMatters />
      <KycAml />
      <Assets />
      <Operate />
      <Ecosystem />
    </main>
  );
}
