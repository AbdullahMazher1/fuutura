export default function GettingStartedPage() {
  return (
    <>
      <div className="flex-1 text-center ecosystem-bg-full-width bg-fixed !fixed bg-center bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage: "url('/Images/first1.png')" }} aria-hidden />
      <div className="flex-1 text-center ecosystem-bg-full-width bg-fixed bg-center bg-no-repeat bg-cover w-full h-full bg-[#000000a4]" aria-hidden />
      <div className="relative z-10 overflow-auto min-h-[100vh] h-[90%] flex flex-col items-center justify-center text-center px-8 py-10 md:px-12 md:py-14">
        <div className="w-full max-w-4xl rounded-lg px-6 py-8 md:px-8 md:py-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            Welcome To The{' '}
            <span className="text-[#00CCFF]" style={{ textShadow: '0 0 30px rgba(10,124,255,0.6)' }}>
              FUUTURA
            </span>{' '}
            Ecosystem.
          </h1>
          <p className="text-[#9BADB3] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
            This Space Is Designed To Help You Understand The Structure, Principles, And Components Of The FUUTURA Ecosystem.
          </p>
        </div>
      </div>
    </>
  );
}
