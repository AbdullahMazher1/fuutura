export default function IndividualsPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="bg-[#0000002a] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Individuals
        </h1>

        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Individuals Are A Core Participant Group Within The FUUTURA Ecosystem. The Ecosystem Is Designed To Give
          Individuals Direct Access To Identity, Finance, Communication, And Privacy Tools Without Requiring Reliance On
          Traditional Intermediaries Or Centralized Platforms.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Access Without Barriers</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          FUUTURA Enables Participation For Individuals Regardless Of Geography, Banking Status, Or Institutional Access.
          This Includes:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Unbanked And Underbanked Users Seeking Financial Access</li>
          <li>Individuals In Regions With Limited Financial Infrastructure</li>
          <li>Users Who Prefer Digital-First Participation</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Ecosystem Lowers Entry Barriers While Maintaining Security And Compliance.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Identity Control</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Individuals Use FUUTURA&apos;s Identity Layer To Establish Trusted Credentials Once And Reuse Them Across
          Services. Identity Remains Fully User-Controlled, Allowing Individuals To:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>Verify Identity Where Required</li>
          <li>Share Only Necessary Information</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
