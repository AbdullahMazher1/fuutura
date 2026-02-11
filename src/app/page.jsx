import Assets from "../components/Assets.jsx";
import Operate from "../components/Operate.jsx";
import Capabilities from "../components/Exchange.jsx";
import FutuuraMatters from "../components/FutuuraMatters.jsx";
import KycAml from "../components/KycAml.jsx";
import Ecosystem from "../components/Ecosystem.jsx";
import Hero from "../components/Hero.jsx";
import Second from "../components/second.jsx";

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
