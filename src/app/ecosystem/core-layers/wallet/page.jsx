export default function WalletPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
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
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Ownership Stays With The User. The Wallet Is The Gateway, Not The Vault.
        </p>
        </div>
      </div>
    </div>
  );
}
