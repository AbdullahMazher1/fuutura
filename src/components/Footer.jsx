import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] py-8">
      <div className="w-full max-w-[1300px] mx-auto sm:space-y-20 px-4">
        <img className="w-full h-auto" src="/Images/footerF.png" alt="" />
        <div className="flex sm:items-center sm:flex-row flex-col justify-between gap-14 sm:gap-4 py-5">
          <div className="flex items-center gap-14 flex-wrap">
            <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/">
              Home
            </Link>
            <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/roadmap.html">
              RoadMap
            </Link>
            {/* <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/press-section">
              Press Section
            </Link> */}
            <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/blogs">
              Blogs
            </Link>
            <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/about">
              About
            </Link>
            {/* <Link className="text-white max-w-max text-sm hover:text-[#569FFF] transition-colors" href="/news">
              News
            </Link> */}
          </div>
          <p className="text-white max-w-max text-sm">
            © 2026 Fuutura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
