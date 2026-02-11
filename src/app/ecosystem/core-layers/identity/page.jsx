export default function IdentityPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Identity
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Identity Layer Provides Trusted, Reusable Identity Infrastructure Across The FUUTURA Ecosystem. Rather Than Functioning As A One-Time Onboarding Step Tied To A Single Service, Identity In FUUTURA Is Designed To Be Established Once And Reused Wherever Trust Or Compliance Is Required.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reusable Identity Infrastructure</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Identity Verification Is Treated As Shared Infrastructure. Once A User Completes Verification, That Identity Can Be Reused Across Multiple Ecosystem Services Without Repeating Checks Or Resubmitting Personal Data. This Reduces Friction For Users And Lowers Operational Complexity For Businesses And Institutions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">User-Controlled Disclosure</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Identity In FUUTURA Is Fully User-Controlled. Users Decide:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
          <li>When Identity Is Applied</li>
          <li>What Information Is Shared</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mt-6">
          Verification Happens Once. Control Stays With The User.
        </p>
        </div>
      </div>
    </div>
  );
}
