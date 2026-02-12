export default function EcosystemOverviewPage() {
  return (
    <>
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first2.png')" }} aria-hidden />
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover bg-[#000000a4]" aria-hidden />
      <div className="relative z-10 min-h-screen w-full px-8 py-20 md:px-12 md:py-14 overflow-auto max-h-[100vh] h-[90%] custom__scrollbar">
        <div className="min-h-full w-full">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ecosystem Overview
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The FUUTURA Ecosystem Works By Connecting Multiple Core Layers Through Shared Infrastructure, Allowing Users To Participate Without Giving Up Control Of Identity, Assets, Or Privacy. Each Interaction Follows A Simple Principle: Access Without Custody, Verification Without Exposure, Participation Without Surrender.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What FUUTURA Is</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          FUUTURA Is Not A Single Application Or Product.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>A Shared Digital Infrastructure</li>
          <li>A Coordinated Set Of Core Layers</li>
          <li>A System Designed Around User Ownership</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Each Layer Can Function Independently, But Is Stronger When Combined.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Problem FUUTURA Addresses</h2>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Modern Digital Systems Are Fragmented.</li>
          <li>Identity Is Repeatedly Verified Across Platforms.</li>
          <li>Assets Are Often Held By Custodians.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Core Philosophy</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          At The Center Of The FUUTURA Ecosystem Is User Sovereignty. This Means:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Users Own Their Identity.</li>
          <li>Users Control Their Assets.</li>
          <li>Users Decide What Information Is Shared.</li>
          <li>Users Participate Without Permanent Exposure.</li>
          <li>Control Is Never Surrendered Simply To Access The Ecosystem.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What This Knowledge Hub Covers</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          Within The Ecosystem Overview And Related Sections, You&apos;ll Learn:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>How The Core Layers Work Together As A Single System.</li>
          <li>Where Identity, Finance, Communication, And Privacy Intersect.</li>
          <li>How Shared Infrastructure And The Blockchain Foundation Coordinate Activity.</li>
          <li>What Participation Looks Like For Individuals, Businesses, And Institutions.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How To Navigate</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          To Get The Most From This Ecosystem Overview:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>Start Here To Understand The Big Picture.</li>
          <li>Move Into Each Core Layer Section For Deeper Detail.</li>
          <li>Visit Participation Pages To See How Different Groups Engage.</li>
          <li>Use Each Section As A Building Block For The Next.</li>
        </ul>
        </div>
        </div>
      </div>
    </>
  );
}
