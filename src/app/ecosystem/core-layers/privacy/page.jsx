export default function PrivacyPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Privacy
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Privacy Is A Foundational Layer Of The FUUTURA Ecosystem. Rather Than Being Added As An Optional Feature, Privacy Is Enforced Through Infrastructure Design And Applies Across All Interactions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy By Design</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Privacy Protections Are Built Into The Ecosystem At The System Level. This Ensures:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Minimal Data Exposure</li>
          <li>No Centralized Data Ownership</li>
          <li>No Permanent Activity Trails</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Privacy Is The Default State.
        </p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Infrastructure-Based Privacy</h2>
      <p className="text-white/90 text-base md:text-lg leading-relaxed">
        Privacy Is Supported Through Decentralized Infrastructure Rather Than Centralized Service Providers. This Allows Participation In Communication, Finance, And Identity Usage Without Surrendering Control Over Personal Data Or Activity.
      </p>
        </div>
      </div>
    </div>
  );
}
