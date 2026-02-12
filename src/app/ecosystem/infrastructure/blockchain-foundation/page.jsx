export default function BlockchainFoundationPage() {
  return (
    <>
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first5.png')" }} aria-hidden />
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover bg-[#0000002a]" aria-hidden />
      <div className="relative z-10 min-h-screen w-full px-8 py-20 md:px-12 md:py-14 overflow-auto max-h-[100vh] h-[90%] custom__scrollbar">
        <div className="min-h-full w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
            Blockchain Foundation
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Blockchain Foundation Serves As The Underlying Coordination And Settlement Layer Of The FUUTURA
            Ecosystem. It Provides A Common Base For Enforcing Rules, Recording Outcomes, And Ensuring That System-Level
            Behavior Remains Consistent And Verifiable—Without Requiring Participants To Engage Directly With Blockchain
            Complexity.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Coordination And Settlement</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            The Blockchain Is Used To Coordinate Actions And Settle Outcomes Across The Ecosystem.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            This Includes:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Recording And Validating System-Level Actions.</li>
            <li>Coordinating Permissions And Authorizations.</li>
            <li>Supporting Asset Settlement And Execution.</li>
            <li>Anchoring Critical State Changes In A Verifiable Ledger.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security And Trust</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Foundation Layer Provides Cryptographic Guarantees And Immutable Records, Enabling Trust Without
            Centralized Intermediaries. Security And Integrity Are Maintained At The Infrastructure Level So That All
            Ecosystem Participants Benefit From A Shared, Verifiable Base Of Truth.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interoperability Support</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            By Anchoring Coordination On A Common Foundation, The Blockchain Layer Helps Ensure That Different Services,
            Products, And Participants Can Interact Reliably—Even When They Are Operated By Independent Organizations Or
            Deployed In Different Environments.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Supporting Identity And Permissions</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Blockchain Foundation Works Alongside Shared Infrastructure To Support Identity And Permission
            Enforcement. Critical Decisions—Such As Changes To Governance, Core System Rules, Or High-Impact
            Permissions—Can Be Anchored On-Chain To Provide A Durable, Auditable Record.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Transparency Without Complexity</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            While The Blockchain Layer Provides Transparency And Auditability, Users Do Not Need To Understand Blockchain
            Mechanics To Benefit From It. The Complexity Is Handled At The Infrastructure Level, Allowing Participants
            To Focus On Outcomes Rather Than Implementation Details.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Relationship To Other Layers</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            The Blockchain Foundation Connects To:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Shared Infrastructure – Providing A Verifiable Base For Coordination.</li>
            <li>Identity – Anchoring Critical Identity And Governance Events.</li>
            <li>Wallet – Enabling Secure Signing And Execution Of On-Chain Actions.</li>
            <li>Finance – Settling Value Transfers And Financial Operations.</li>
            <li>Communication – Supporting Verifiable, Time-Stamped Interactions Where Needed.</li>
            <li>Privacy – Ensuring That Only Necessary Information Is Anchored On-Chain.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why The Blockchain Foundation Matter</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            By Providing A Neutral, Verifiable Base For Coordination And Settlement, The Blockchain Foundation Allows
            FUUTURA To Operate As A Trustworthy, Shared System—Even Among Participants With Different Roles,
            Requirements, And Incentives.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
