import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Capabilities from "@/components/Exchange";
import FutuuraMatters from "@/components/FutuuraMatters";
import KycAml from "@/components/KycAml";
import Ecosystem from "@/components/Ecosystem";
import Hero from "@/components/Hero";
import Second from "../components/second";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Second/>
      <Capabilities />
      <FutuuraMatters />
      <KycAml />
      <Assets />
      <Operate />
      <Ecosystem />
    </main>
  );
}
