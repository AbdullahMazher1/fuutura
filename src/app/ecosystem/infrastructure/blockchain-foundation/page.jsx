export default function BlockchainFoundationPage() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-14 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Blockchain Foundation
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Blockchain Foundation Serves As The Underlying Coordination And Settlement Layer Of The FUUTURA Ecosystem. It Provides A Common Base That Supports Consistent Rules, Secure Execution, And Transparent Operation Across All Ecosystem Components, Without Requiring Users To Understand Or Interact Directly With Blockchain Technology.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Coordination And Settlement</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Blockchain Is Used To Coordinate Actions And Settle Outcomes Across The Ecosystem.
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          This Includes:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Recording And Validating System-Level Actions</li>
          <li>Coordinating Permissions And Authorizations</li>
          <li>Supporting Asset Settlement And Execution</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Blockchain Ensures That Actions Across Identity, Finance, And Communication Follow Consistent And Verifiable Rules.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security And Trust</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          The Foundation Layer Provides Cryptographic Guarantees And Immutable Records, Enabling Trust Without Central Intermediaries. Security And Integrity Are Maintained At The Infrastructure Level So That All Ecosystem Participants Benefit From A Shared, Verifiable Base Of Truth.
        </p>
      </div>
    </div>
  );
}
