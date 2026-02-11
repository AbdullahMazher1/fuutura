export default function PrivacyPage() {
  return (
    <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover min-h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#000000a4] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
            Privacy
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Privacy Is A Foundational Layer Of The FUUTURA Ecosystem. Instead Of Being Added As A Feature On Top Of
            Existing Systems, Privacy Is Embedded Directly Into How Infrastructure, Identity, Finance, And Communication
            Operate.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy By Design</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Privacy Protections Are Built Into The Ecosystem At The System Level. This Ensures:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Minimal Data Exposure.</li>
            <li>No Single Party Controls All Sensitive Information.</li>
            <li>Activity Trails Are Limited To What Is Strictly Necessary.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Infrastructure-Based Privacy</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Privacy Is Enforced Through Decentralized Infrastructure Rather Than Relying On Centralized Service
            Providers To “Behave Well.” Participants Can Use Communication, Finance, And Identity Services Without
            Handing Over Full Visibility Into Their Behavior Or Relationships.
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Data Is Segmented Across Layers And Providers.</li>
            <li>Encryption And Access Controls Are Applied By Default.</li>
            <li>System Design Limits The Amount Of Information Any Single Party Can See.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protecting All Layers</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Privacy Principles Apply Across The Ecosystem:
          </p>
          <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-10 pl-2">
            <li>Identity – Only Necessary Attributes Are Disclosed.</li>
            <li>Finance – Transaction Visibility Is Scoped To What Compliance Requires.</li>
            <li>Communication – Content And Metadata Are Protected Wherever Possible.</li>
            <li>Infrastructure – Coordination Does Not Require Full Behavioral Transparency.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Privacy Matters</h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Without Strong, Infrastructure-Level Privacy, Digital Ecosystems Tend To Concentrate Power, Create
            Surveillance Risks, And Limit True Participation. FUUTURA&apos;S Privacy Layer Ensures That Individuals,
            Businesses, And Institutions Can Engage With Confidence—Knowing That Control Over Their Information Is
            Protected By Design, Not Just By Policy Promises.
          </p>
        </div>
      </div>
    </div>
  );
}
