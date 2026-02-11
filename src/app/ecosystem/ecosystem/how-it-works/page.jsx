export default function HowItWorksPage() {
  return (
    <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover min-h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The FUUTURA Ecosystem Works By Connecting Identity, Finance, Communication, And Privacy Through Shared Infrastructure, Allowing Participants To Engage Without Surrendering Control, Ownership, Or Privacy. Rather Than Forcing Users Into Isolated Services, FUUTURA Enables Participation Through A Single Coordinated System Where Trust, Access, And Permissions Are Reusable Across The Ecosystem.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 1: Entry Through The Wallet</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Participation Begins With The FUUTURA Wallet.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            The Wallet Acts As The Primary Access Point To The Ecosystem. It Is Where Users Hold Assets, Manage Identity Credentials, And Authorize Interactions. The Wallet Is Non-Custodial, Meaning FUUTURA Does Not Control User Funds Or Credentials.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Wallet Enables Access, But Ownership Always Remains With The User.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 2: Identity Established Once</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Identity Verification Occurs Through FUUTURA&apos;s Identity Layer, Designed As Reusable Infrastructure.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Instead Of Verifying Identity Repeatedly Across Different Platforms, Users Establish Their Identity Once Within The Ecosystem. Credentials Are Stored In The User&apos;s Control And Can Be Presented When Needed, Without Exposing Underlying Data. This Reduces Friction And Puts Verification In The Hands Of The User.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            One Identity, Reusable Across The Entire Ecosystem.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 3: Permission-Based Access</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            With Identity Established, Access Is Managed Through Explicit Permissions. Users Decide Which Services May
            Use Their Identity, Assets, Or Data, And Under What Conditions.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Access Can Be Granted, Limited, Or Revoked At Any Time.</li>
            <li>Permissions Are Applied Consistently Across Services.</li>
            <li>Actions Are Always Tied Back To User Consent.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 4: Financial Interaction Without Custody</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            When Users Interact Financially, The Wallet Authorizes Transactions While Assets Remain Under User Control.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Payments And Transfers Are Signed From The User&apos;s Wallet.</li>
            <li>Services Can Request Payment, But Cannot Move Funds Themselves.</li>
            <li>Financial Activity Is Transparent, Verifiable, And Non-Custodial.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 5: Communication With Contextual Trust</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Communication Within The Ecosystem Can Be Anonymous, Pseudonymous, Or Fully Verified, Depending On What
            The Situation Requires.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Everyday Conversation Can Happen Without Revealing Identity.</li>
            <li>Verified Identity Can Be Applied Selectively For Business Or Institutional Use.</li>
            <li>Contextual Trust Reduces Fraud While Preserving Privacy.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 6: Privacy Infused By Design</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Privacy Is Built Into Each Interaction Rather Than Added As An Afterthought. Users Control When, How, And
            With Whom Information Is Shared.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Minimal Data Is Exposed For Any Given Action.</li>
            <li>No Central Entity Owns Or Monopolizes User Data.</li>
            <li>Activity Trails Are Limited To What&apos;s Necessary For Trust And Compliance.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Step 7: Shared Infrastructure Coordination</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Underneath All Of This, Shared Infrastructure And The Blockchain Foundation Coordinate System-Level Actions.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Identity, Permissions, And Financial Activity Follow Common Rules.</li>
            <li>Different Services Interoperate Without Rebuilding The Same Foundations.</li>
            <li>Security, Integrity, And Coordination Are Handled At The Infrastructure Layer.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How The Layers Work Together</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            Rather Than Acting As Separate Products, The Layers Reinforce One Another:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>The Wallet Connects Users To Identity, Finance, Communication, And Privacy Services.</li>
            <li>The Identity Layer Supplies Reusable, Verified Credentials.</li>
            <li>The Finance Layer Handles Value Transfer Without Custody.</li>
            <li>The Communication Layer Provides Private, Context-Aware Interaction.</li>
            <li>Shared Infrastructure And Blockchain Ensure Everything Stays In Sync.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why This Design Matters</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            By Coordinating These Layers Through Shared Infrastructure, FUUTURA Reduces Fragmentation, Lowers
            Onboarding Friction, And Creates A Path For Participation That Does Not Require Users To Surrender Control
            Over Identity, Assets, Or Communication.
          </p>
        </div>
      </div>
    </div>
  );
}
