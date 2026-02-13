export default function IdentityPage() {
  return (
    <>
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first2.png')" }} aria-hidden />
      <div className="w-full ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover bg-[#000000a4]" aria-hidden />
      <div className="relative z-10 min-h-screen w-full px-8 py-20 md:px-12 md:py-14 overflow-auto max-h-[100vh] h-[90%] custom__scrollbar">
        <div className="min-h-full w-full">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
            Identity
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            The Identity Layer Is The Trust And Access Layer That Connects People, Businesses, And Institutions To The
            FUUTURA Ecosystem. It Ensures Participants Can Prove Who They Are When Necessary, Without Turning Every
            Interaction Into A Full Onboarding Process Or Sacrificing Privacy.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reusable Identity Infrastructure</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Identity Verification Is Treated As Shared Infrastructure Across The Ecosystem. Once A Participant Is
            Verified, That Identity Can Be Reused Wherever Trust Or Compliance Is Required, Without Restarting From
            Zero Each Time. This Reduces Friction For Individuals And Lowers Operational Complexity For Businesses And
            Institutions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">User-Controlled Disclosure</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Identity In FUUTURA Is Fully User-Controlled. Users Decide:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>What Information Is Shared In Each Context.</li>
            <li>Which Services May Request Verification.</li>
            <li>When Identity Use Should Stop.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Supporting Trust And Compliance</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            The Identity Layer Provides The Foundation Needed For Regulatory, Legal, And Commercial Trust—Without
            Rebuilding Compliance For Every New Service.
          </p>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            This Can Include:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>KYC / KYB Checks Where Required.</li>
            <li>Verification Of Key Attributes Such As Residency, Age, Or Registration Status.</li>
            <li>Ongoing Monitoring Where Necessary For Institutional Requirements.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Relationship To Other Layers</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            Identity Connects Directly With Other FUUTURA Layers:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Wallet – Applies Verified Identity To Access And Control.</li>
            <li>Finance – Enables Compliant Participation In Financial Activity.</li>
            <li>Communication – Supports Verified, Contextual Interaction Between Participants.</li>
            <li>Privacy – Ensures Identity Use Aligns With User-Defined Privacy Rules.</li>
            <li>Shared Infrastructure And Blockchain Foundation – Provide Verifiable Records Where Needed.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Identity Matters</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Without A Shared, Reusable, And User-Controlled Identity Layer, Digital Ecosystems Become Fragmented,
            Repetitive, And Risky. FUUTURA&apos;S Identity Layer Makes It Possible To Combine Trust, Compliance, And
            User Agency In A Single, Coherent System.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
