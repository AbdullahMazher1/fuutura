export default function BusinessesPage() {
  return (
    <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover min-h-full" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="bg-[#0000002a] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
            Businesses
          </h1>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Businesses Participate In The FUUTURA Ecosystem By Interacting With Users Through Shared Digital
            Infrastructure That Supports Identity, Finance, Communication, And Privacy. Instead Of Building And
            Maintaining Separate Systems For Onboarding, Payments, And Compliance, Businesses Can Operate On Common
            Infrastructure That Provides Consistent Trust And Access.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reusable Identity And Onboarding</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            FUUTURA Enables Businesses To Onboard Users Through Reusable Identity Infrastructure. Once A User Has
            Verified Identity, That Verification Can Be Reused Across Services, Reducing Onboarding Friction And
            Eliminating Repeated Data Collection. This Helps Businesses:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Lower Onboarding Costs.</li>
            <li>Improve User Experience.</li>
            <li>Reduce Exposure To Sensitive Data.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Financial Interaction And Payments</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Businesses Can Accept And Manage Value Through Non-Custodial Financial Tools Within The FUUTURA Ecosystem.
            This Supports:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Reducing Reliance On Traditional Payment Rails.</li>
            <li>Settling Transactions More Directly And Efficiently.</li>
            <li>Supporting Cross-Border Participation.</li>
            <li>Aligning Financial Interaction With User-Controlled Custody Of Assets.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Secure And Verifiable Communication</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Businesses Can Communicate With Users Using Integrated, Privacy-First Communication Tools. Identity
            Verification Can Be Applied Where Required—Such As Customer Support, Transactions, Or Contractual
            Interactions—While Allowing Privacy-Preserving Communication By Default.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>High-Trust Channels For Sensitive Or Regulated Interactions.</li>
            <li>Reduced Reliance On Fragmented, Third-Party Messaging Platforms.</li>
            <li>Clear Links Between Identity, Permissions, And Communication Context.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Compliance-Aware Participation</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            The Ecosystem Is Designed To Support Operation Within Regulatory Environments. Businesses Can Apply Identity
            And Permissions Where Required To Meet Compliance Obligations Without Rebuilding Complex, Isolated
            Compliance Systems.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Shared Infrastructure For Consistent Policy Enforcement.</li>
            <li>Reduced Duplication Of KYC / KYB And Related Processes.</li>
            <li>Alignment Of Regulatory Requirements With User Privacy.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interoperability And Scale</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Businesses Can Engage With Users And Other Services Across The Ecosystem Without Being Locked Into A Single
            Platform.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Shared Infrastructure Allows Access To Multiple Services.</li>
            <li>New Channels And Use Cases Can Be Added Over Time.</li>
            <li>Expansion To New Markets Without Rebuilding Systems From Scratch.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Relationship To Other Layers</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            Businesses Interface With:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Wallets – For Authorization And Transactions.</li>
            <li>Identity – For Verification And Trust.</li>
            <li>Finance – For Payments And Settlement.</li>
            <li>Communication – For Ongoing Engagement.</li>
            <li>Shared Infrastructure And Blockchain Foundation – For Coordination And Verifiability.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Business Participation Matters</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            By Operating On Shared, User-Centric Infrastructure Rather Than Closed Platforms, Businesses In FUUTURA Can
            Build More Trustworthy, Efficient, And Adaptable Services—While Aligning Their Own Incentives With Those Of
            The Individuals And Institutions They Serve.
          </p>
        </div>
      </div>
    </div>
  );
}
