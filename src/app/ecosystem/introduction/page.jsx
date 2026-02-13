export default function IntroductionPage() {
  return (
    <>
      <div className="w-full ecosystem-bg-full-width bg-center fixed bg-no-repeat bg-cover inset-0" style={{ backgroundImage: "url('/Images/first1.png')" }} aria-hidden />
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover bg-[#000000a4]" aria-hidden />
      <div className="relative z-10 w-full px-8 py-10 md:px-12 md:py-14 overflow-auto max-h-[100vh] h-[90%]">
        <div className="rounded-lg px-6 py-8 md:px-8 md:py-10 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Welcome To <span className="text-[#00CCFF]" style={{ textShadow: '0 0 30px rgba(10,124,255,0.6)' }}>FUUTURA</span>
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
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Modern Digital Systems Are Fragmented—Identity, Data, And Value Are Locked Inside Silos Controlled By Intermediaries. FUUTURA Provides A Path To Unify These Under User-Controlled Layers, So Individuals And Organizations Can Own Their Digital Presence And Transact Without Central Gatekeepers.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Core Philosophy</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            At The Center Of FUUTURA Is User Sovereignty. This Means:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Users Own Their Identity</li>
            <li>Users Control Their Assets</li>
            <li>Users Decide What Information To Share</li>
            <li>Users Participate Without Permanent Exposure</li>
            <li>Control Is Never Surrendered To Access The Ecosystem</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What This Knowledge Hub Covers</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            This Knowledge Hub Exists To Help You Understand:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>The Structure Of The FUUTURA Ecosystem</li>
            <li>The Role Of Each Core Layer</li>
            <li>How Those Layers Connect And Interoperate</li>
            <li>How Participation And Governance Work In Practice</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How To Navigate</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            As You Explore, You Can:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
            <li>Start With The Ecosystem Overview</li>
            <li>Explore Each Core Layer In Detail</li>
            <li>Learn About Participation For Individuals, Businesses, And Institutions</li>
            <li>Use Each Section To Build On The Previous One</li>
          </ul>
        </div>
      </div>
    </>
  );
}
