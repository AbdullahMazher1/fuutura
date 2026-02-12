export default function FinancePage() {
  return (
    <>
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first2.png')" }} aria-hidden />
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover bg-[#000000a4]" aria-hidden />
      <div className="relative z-10 min-h-screen w-full px-8 py-10 md:px-12 md:py-14">
        <div className=" min-h-full w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
            Finance
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Finance Layer Enables Participants To Store, Transfer, Trade, And Spend Value Within The FUUTURA
            Ecosystem. It Is Designed To Provide Direct Access To Financial Functionality Without Requiring Users To
            Surrender Custody Of Assets Or Depend Exclusively On Traditional Banking Infrastructure.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Non-Custodial Financial Participation</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            All Financial Activity In FUUTURA Is Non-Custodial. Users And Organizations Retain Control Of Their Assets
            At All Times, Even When Engaging With Exchanges, Payment Tools, Or Other Financial Services. Assets Remain
            Under The Participant&apos;s Control—They Are Never Handed Over To A Centralized Operator As A Condition For
            Participation.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Core Financial Capabilities</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            The Finance Layer Supports:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Asset Storage And Management.</li>
            <li>Value Transfer And Settlement.</li>
            <li>Market Access And Trading.</li>
            <li>Real-World Payments And Commerce.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Financial Inclusion</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Because Participation Does Not Depend On Traditional Account Infrastructure, The Finance Layer Can Extend
            Access To Individuals And Businesses Who Are Underserved Or Excluded By Conventional Banking Systems.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Integration With Identity</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Where Regulatory Or Commercial Requirements Apply, Financial Activity Can Be Linked To Verified Identity
            Without Duplicating Onboarding Processes. Compliance Lives In The Identity Layer, While Execution Lives In
            The Finance Layer—Keeping Roles Clear But Connected.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Finance Matters</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            The Finance Layer Turns FUUTURA From A Conceptual Infrastructure Into A Place Where Real Value Can Move.
            By Making Financial Participation Non-Custodial, Globally Accessible, And Integrated With Identity And
            Privacy, It Enables A More Open, Resilient Model For Economic Interaction.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
