import React from 'react'

function Values() {
  const cards = [
    { 
      icon: '/Images/About06.png', 
      hoverIcon: '/Images/HoverAbout (1).png', 
      title: 'Clear processes' 
    },
    { 
      icon: '/Images/About03.png', 
      hoverIcon: '/Images/HoverAbout (2).png', 
      title: 'Transparent pricing' 
    },
    { 
      icon: '/Images/About05.png', 
      hoverIcon: '/Images/HoverAbout (3).png', 
      title: 'Smooth transactions' 
    },
  ]

  return (
    <div className="flex flex-col items-center pb-12 px-6 md:px-24 bg-black">
      
      {/* Heading */}
      <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold mb-12">
        Core <span className="text-[#00A3FF]">Values</span>
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-5xl justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#0B0C0F] to-[#1A1A2E] rounded-xl p-8 w-full md:w-1/3 text-center overflow-hidden border border-white/5 transition-colors duration-300 hover:border-white/20"
          >
            {/* Icon Container */}
            <div className="cursor-pointer relative w-16 h-16 flex items-center justify-center">
              {/* Default Icon: Fades out and slides up slightly */}
              <img 
                src={card.icon} 
                alt={card.title} 
                className="w-12 h-12 absolute transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2" 
              />
              
              {/* Hover Icon: Fades in and slides up from below */}
              <img 
                src={card.hoverIcon} 
                alt={`${card.title} hover`} 
                className="w-12 h-12 absolute opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" 
              />
            </div>

            <span className="text-white font-futura text-lg font-medium transition-colors duration-300 group-hover:text-[#00A3FF]">
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Values