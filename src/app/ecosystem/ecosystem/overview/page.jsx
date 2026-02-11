export default function EcosystemOverviewPage() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-14 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first2.png')" }}>
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
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>Modern Digital Systems Are Fragmented:</li>
          <li>Identity Is Repeatedly Verified Across Platforms</li>
          <li>Assets Are Often Held By Custodians</li>
        </ul>
      </div>
    </div>
  );
}
