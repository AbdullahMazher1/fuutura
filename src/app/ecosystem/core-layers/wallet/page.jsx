export default function WalletPage() {
  return (
    <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover min-h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Wallet
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The FUUTURA Wallet Is The Central Access Layer Of The Ecosystem. It Acts As The Primary Interface Through Which Users And Organizations Interact With Identity, Finance, Communication, And Privacy Services. Rather Than Functioning As A Traditional Account Controlled By A Central Provider, The Wallet Is Designed As A User-Controlled Access Tool That Connects Participants To FUUTURA&apos;s Shared Infrastructure.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Non-Custodial By Design</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Wallet Is Non-Custodial. This Means FUUTURA Does Not Hold User Funds, Credentials, Or Authority. Users Retain Full Control Over:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Digital Assets</li>
          <li>Identity Credentials</li>
          <li>Permissions And Approvals</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Wallet Enables Interaction But Never Takes Ownership.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Asset Management</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Through The Wallet, Users Can Hold, Send, And Receive Digital Assets Within The Ecosystem. All Transactions Are Authorized By The User&apos;s Keys—No Third Party Can Move Funds Or Credentials Without Explicit Consent. The Wallet Provides A Single Interface For Managing Multiple Asset Types And Interacting With Ecosystem Services.
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Ownership Stays With The User. The Wallet Is The Gateway, Not The Vault.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Identity Access And Control</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Wallet Also Acts As A Control Panel For Identity Use. Rather Than Creating New Accounts For Every Service,
          Users Can Present Their Existing FUUTURA Identity When Needed, On Their Own Terms.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Use The Same Identity Across Multiple Services Without Re-Onboarding.</li>
          <li>Decide Which Services May Request Identity Verification.</li>
          <li>Revoke Identity Access When It Is No Longer Needed.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Authorization And Permissions</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Every Sensitive Action—From Moving Assets To Sharing Data—Is Authorized Through The Wallet. Services Can Ask
          For Permissions, But Only The User Can Approve Or Deny Them.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Requests Are Presented In A Clear, Understandable Format.</li>
          <li>Permissions Can Be Time-Limited Or Scoped To Specific Actions.</li>
          <li>Users Have A Single Place To Review And Adjust Their Approvals.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Gateway To Ecosystem Services</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Wallet Is The Primary Gateway To All FUUTURA Services. Whether Users Are Accessing Financial Tools,
          Communication Channels, Or Governance Features, They Enter Through The Wallet.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>One Consistent Experience For Accessing New Services.</li>
          <li>No Need To Recreate Credentials Or Rebuild Trust.</li>
          <li>Clear Separation Between The User&apos;s Control Layer And Service Logic.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Designed For Broad Access</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          The Wallet Is Designed To Support A Wide Range Of Users—From Highly Connected Institutions To Individuals In
          Regions With Limited Infrastructure.
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Optimized For Use Across Devices And Connection Types.</li>
          <li>Supports Progressive Enhancement, So Core Features Remain Available Even In Constrained Environments.</li>
          <li>Built To Meet Accessibility And Usability Expectations.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Relationship To Other Layers</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
          The Wallet Sits At The Edge Of The Ecosystem, Connecting Users To Every Other Layer:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
          <li>Identity – Establishes And Applies Verified Credentials.</li>
          <li>Finance – Signs And Sends Non-Custodial Transactions.</li>
          <li>Communication – Manages Secure Channels And Contextual Trust.</li>
          <li>Privacy – Enforces User Preferences On What Is Shared.</li>
          <li>Shared Infrastructure And Blockchain – Ensure That Actions Are Coordinated And Verifiable.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why The Wallet Matters</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          By Combining Access, Identity Control, Permissions, And Asset Management In A Single User-Controlled Layer,
          The FUUTURA Wallet Turns The Ecosystem Into Something People Can Actually Use Confidently—Without Handing
          Over Ownership Or Trust To A Centralized Intermediary.
        </p>
        </div>
      </div>
    </div>
  );
}
