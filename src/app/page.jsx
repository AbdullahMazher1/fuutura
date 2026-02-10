import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Image from "next/image";
import Exchange from "@/components/Exchange";
import KycAml from "@/components/KycAml";

export default function Home() {
  return (
    <main className="space-y-14">
      <KycAml/>
      <Assets/>
      <Operate/>
    </main>
  );
}
