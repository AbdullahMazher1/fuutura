export default function IntroductionPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first1.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Welcome To <span className="text-[#0A7CFF]" style={{ textShadow: '0 0 30px rgba(10,124,255,0.6)' }}>FUUTURA</span>
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          A Unified Digital Ecosystem Designed To Give Individuals And Organizations Direct Control Over Identity, Assets, Communication, And Privacy—Without Relying On Centralized Intermediaries. This Knowledge Hub Exists To Explain How The Ecosystem Works, How Its Layers Connect, And What Participation Looks Like In Practice.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What FUUTURA Is</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          FUUTURA Is Not A Single Application Or Product. It Is:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>A Shared Digital Infrastructure</li>
          <li>A Coordinated Set Of Core Layers</li>
          <li>A System Designed Around User Ownership</li>
          <li>Each Layer Can Function Independently, But Is Stronger When Combined.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Problem FUUTURA Addresses</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Modern Digital Systems Are Fragmented—Identity, Data, And Value Are Locked Inside Silos Controlled By Intermediaries. FUUTURA Provides A Path To Unify These Under User-Controlled Layers, So Individuals And Organizations Can Own Their Digital Presence And Transact Without Central Gatekeepers.
        </p>
        </div>
      </div>
    </div>
  );
}
