export default function HowItWorksPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
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
      <p className="text-white/90 text-base md:text-lg leading-relaxed">
        One Identity, Reusable Across The Entire Ecosystem.
      </p>
        </div>
      </div>
    </div>
  );
}
