import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    /* Changed 'fixed' to 'absolute' to stop it from following the scroll */
    <div className='w-full h-[67px] absolute top-0 z-50'>
      <div className='flex items-center justify-between max-w-[1300px] mx-auto py-5 px-6 md:px-0'>
        
        {/* Logo Section */}
        <div className='flex items-center gap-2 cursor-pointer'>
          <img className='h-10' src="/logo1.png" alt="Logo Icon" />
          <img className='h-6' src="/logo.gif" alt="Logo Text" />
        </div>

        {/* Navigation Bar */}
        <div className='font-futura font-semibold text-white px-12 py-3 flex flex-row gap-10 border bg-black/20 backdrop-blur-md border-[#569FFF]/50 rounded-full'>
          <div className='text-[#569FFF] cursor-pointer'>Home</div>
          <div className='cursor-pointer hover:text-[#569FFF] transition-colors'>RoadMap</div>
          <div className='cursor-pointer hover:text-[#569FFF] transition-colors'>Press Section</div>
          <div className='cursor-pointer hover:text-[#569FFF] transition-colors'>Blogs</div>
          <Link href='/ecosystem' className='cursor-pointer hover:text-[#569FFF] transition-colors'>About Us</Link>
        </div>

        {/* Investors Button */}
        <div className='rounded-full p-[1px] cursor-pointer border border-[#002371] overflow-hidden transition-all hover:bg-[#002371]/30'>
          <Link href="/investor" className='bg-transparent px-8 py-2 flex items-center justify-center text-white font-medium'>
            Investors
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header