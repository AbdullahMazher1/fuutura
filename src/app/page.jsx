import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Exchange from "@/components/Exchange";
import FutuuraMatters from "@/components/FutuuraMatters";
import KycAml from "@/components/KycAml";
import Ecosystem from "@/components/Ecosystem";

export default function Home() {
  return (
    <main className="">
      <Exchange/>
      <FutuuraMatters/>
      <Ecosystem/>
      <KycAml/>
      <Assets/>
      <Operate/>
    </main>
  );
}
