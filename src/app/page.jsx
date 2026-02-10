import Assets from "@/components/Assets";
import Operate from "@/components/Operate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-14">
      <Assets/>
      <Operate/>
    </main>
  );
}
