export default function InstitutionsPage() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-14 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Institutions
        </h1>

        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Institutions Participate In The FUUTURA Ecosystem By Operating On Shared Digital Infrastructure That Supports
          Identity, Finance, Communication, And Privacy At Scale. Rather Than Building Isolated Systems For Onboarding,
          Compliance, And Settlement, Institutions Can Integrate Once And Operate Within A Coordinated Ecosystem
          Designed For Long-Term, Compliant Participation.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Identity And Compliance Infrastructure</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          FUUTURA Provides Institutions With Reusable Identity Infrastructure That Supports Compliance Requirements
          Without Unnecessary Data Duplication. Institutions Can:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Apply Verified Identity Where Required</li>
          <li>Reuse Identity Across Services And Interactions</li>
          <li>Reduce Repeated Onboarding And Data Handling</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          This Approach Supports Regulatory Alignment While Minimizing Operational Complexity And Data Exposure.
        </p>
      </div>
    </div>
  );
}
