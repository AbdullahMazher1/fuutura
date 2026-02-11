export default function FinancePage() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-14 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Finance
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Finance Layer Enables Users To Store, Transfer, Trade, And Spend Value Within The FUUTURA Ecosystem. It Is Designed To Provide Financial Access Without Requiring Users To Surrender Custody Of Assets Or Rely Exclusively On Traditional Banking Systems.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Non-Custodial Financial Participation</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          All Financial Activity In FUUTURA Is Non-Custodial. Users Retain Control Of Their Assets At All Times, Even While Interacting With Exchanges, Payment Tools, Or Financial Services. Assets Do Not Leave User Control During Participation.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Core Financial Capabilities</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Finance Layer Supports:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>Asset Storage And Management</li>
          <li>Value Transfer And Settlement</li>
          <li>Market Access And Trading</li>
          <li>Real-World Payments</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mt-6">
          These Capabilities Allow Participation Regardless Of Geography Or Banking Access.
        </p>
      </div>
    </div>
  );
}
