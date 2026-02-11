import React from 'react'

function Values() {
  const cards = [
    { icon: '/Images/aboutIcon (1).png', title: 'Clear processes', highlight: true },
    { icon: '/Images/aboutIcon (2).png', title: 'Transparent pricing', highlight: false },
    { icon: '/Images/aboutIcon (3).png', title: 'Smooth transactions', highlight: false },
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
            className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#0B0C0F] to-[#1A1A2E] rounded-xl p-8 w-full md:w-1/3 text-center hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Icon with optional purple highlight */}
            <div className={`p-4 rounded-lg ${card.highlight ? 'border-2 border-[#8E5FFF]' : ''}`}>
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>

            <span className="text-white font-futura text-lg font-medium">{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Values
