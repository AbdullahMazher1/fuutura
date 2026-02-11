export default function CommunicationPage() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover h-full" style={{ backgroundImage: "url('/Images/first2.png')" }}>
      <div className="bg-[#00000057] h-full w-full px-8 py-10 md:px-12 md:py-14">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Communication
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role In The Ecosystem</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          The Communication Layer Enables Secure Interaction Between Participants Within The FUUTURA Ecosystem. Communication Is Treated As A Core Economic And Social Function, Not A Standalone Messaging Tool.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy-First By Default</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
          Communication Within FUUTURA Is Private By Default. Users Can Interact Without Revealing Identity Or Personal Information Unless They Choose To, Supporting Free And Protected Interaction.
        </p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contextual Trust</h2>
      <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
        When Trust Is Required—Such As For Business, Commerce, Or Institutional Use—Identity Verification Can Be Applied Selectively.
      </p>
      <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 pl-2">
        <li>Anonymous Communication When Appropriate</li>
        <li>Verified Communication When Required</li>
        <li>Reduced Fraud And Impersonation</li>
      </ul>
        </div>
      </div>
    </div>
  );
}
