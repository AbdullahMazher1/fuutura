import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Exchange from "@/components/Exchange";
import FutuuraMatters from "@/components/FutuuraMatters";

export default function Home() {
  return (
    <main className="space-y-14">
      <Exchange/>
      <FutuuraMatters/>
      <Assets/>
      <Operate/>
    </main>
  );
}
