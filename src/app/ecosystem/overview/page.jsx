export default function OverviewPage() {
  return (
    <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          What The <span className="text-[#0A7CFF]" style={{ textShadow: '0 0 30px rgba(10,124,255,0.6)' }}>FUUTURA</span> Ecosystem Is
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          A Unified Digital System Where Identity, Finance, Communication, And Privacy Operate As Interconnected Layers Rather Than Isolated Products. Each Layer Is Designed To Work Independently While Remaining Fully Compatible With The Others.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A Unified System</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Instead Of Fragmented Tools, FUUTURA Provides A Shared Foundation.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>One Ecosystem Instead Of Multiple Platforms</li>
          <li>One Identity Instead Of Repeated Verification</li>
          <li>One Access Point Instead Of Disconnected Accounts</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          All Participation Happens Within The Same Coordinated Structure.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Core Ecosystem Layers</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Ecosystem Is Built Around Five Core Layers:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>Wallet - Access And Control</li>
          <li>Identity - Verification And Reputation</li>
          <li>Communication - Private And Secure Messaging</li>
          <li>Data - User-Owned Storage And Portability</li>
          <li>Governance - Participation And Consensus</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
