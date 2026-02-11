export default function SharedInfrastructurePage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first5.png')" }}>
      <div className="bg-[#0000002a] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Shared Infrastructure
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Shared Infrastructure Is The Connective Layer That Enables All Components Of The FUUTURA Ecosystem To Operate As A Single, Coordinated System. Rather Than Each Product Functioning In Isolation, Shared Infrastructure Provides Common Rules, Standards, And Coordination Mechanisms That Allow Identity, Finance, Communication, And Privacy To Work Together Seamlessly.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A Single Coordination Layer</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          Shared Infrastructure Acts As The System-Level Coordination Layer. It Ensures That:
        </p>
        <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 mb-6 pl-2">
          <li>Identity Can Be Reused Across Services</li>
          <li>Permissions Are Applied Consistently</li>
          <li>Financial And Communication Layers Interoperate</li>
          <li>Privacy Protections Remain Intact</li>
        </ul>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          This Prevents Fragmentation And Duplicated Logic Across The Ecosystem.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security And Integrity</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Shared Infrastructure Is Designed With Security And Integrity At Its Core. Coordination Mechanisms Are Built To Resist Tampering, Ensure Consistency, And Support Transparent Operation Across All Ecosystem Components.
        </p>
        </div>
      </div>
    </div>
  );
}
