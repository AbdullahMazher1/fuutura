export default function BusinessesPage() {
  return (
    <div className="px-8 py-10 md:px-12 md:py-14 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Businesses
        </h1>

        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Businesses Participate In The FUUTURA Ecosystem By Interacting With Users Through Shared Digital
          Infrastructure That Supports Identity, Finance, Communication, And Privacy. Rather Than Building Or Managing
          Separate Systems For Onboarding, Payments, And Compliance, Businesses Can Operate On Common Infrastructure
          That Provides Consistent Trust And Access.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reusable Identity And Onboarding</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          FUUTURA Enables Businesses To Onboard Users Through Reusable Identity Infrastructure. Once A User Has Verified
          Identity, That Verification Can Be Reused Across Services, Reducing Onboarding Friction And Eliminating
          Repeated Data Collection. This Helps Businesses:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Lower Onboarding Costs</li>
          <li>Improve User Experience</li>
          <li>Reduce Exposure To Sensitive Data</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Financial Interaction And Payments</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Businesses Can Accept And Manage Value Through Non-Custodial Financial Tools Within The FUUTURA Ecosystem,
          Enabling Global Participation Without Depending Solely On Traditional Banking Channels.
        </p>
      </div>
    </div>
  );
}
