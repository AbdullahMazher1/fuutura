"use client";

import React, { useState } from 'react';

// Icon components
const PersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66797 5.83333C6.66797 6.71739 7.01916 7.56523 7.64428 8.19036C8.2694 8.81548 9.11725 9.16667 10.0013 9.16667C10.8854 9.16667 11.7332 8.81548 12.3583 8.19036C12.9834 7.56523 13.3346 6.71739 13.3346 5.83333C13.3346 4.94928 12.9834 4.10143 12.3583 3.47631C11.7332 2.85119 10.8854 2.5 10.0013 2.5C9.11725 2.5 8.2694 2.85119 7.64428 3.47631C7.01916 4.10143 6.66797 4.94928 6.66797 5.83333Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.83464C2.5 5.39261 2.67559 4.96868 2.98816 4.65612C3.30072 4.34356 3.72464 4.16797 4.16667 4.16797H15.8333C16.2754 4.16797 16.6993 4.34356 17.0118 4.65612C17.3244 4.96868 17.5 5.39261 17.5 5.83464V14.168C17.5 14.61 17.3244 15.0339 17.0118 15.3465C16.6993 15.659 16.2754 15.8346 15.8333 15.8346H4.16667C3.72464 15.8346 3.30072 15.659 2.98816 15.3465C2.67559 15.0339 2.5 14.61 2.5 14.168V5.83464Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 5.83203L10 10.832L17.5 5.83203" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16667 3.33203H7.5L9.16667 7.4987L7.08333 8.7487C7.9758 10.5583 9.44039 12.0229 11.25 12.9154L12.5 10.832L16.6667 12.4987V15.832C16.6667 16.2741 16.4911 16.698 16.1785 17.0105C15.866 17.3231 15.442 17.4987 15 17.4987C11.7494 17.3012 8.68346 15.9208 6.38069 13.618C4.07792 11.3152 2.69754 8.24931 2.5 4.9987C2.5 4.55667 2.67559 4.13275 2.98816 3.82019C3.30072 3.50763 3.72464 3.33203 4.16667 3.33203Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.83464C2.5 5.39261 2.67559 4.96868 2.98816 4.65612C3.30072 4.34356 3.72464 4.16797 4.16667 4.16797H15.8333C16.2754 4.16797 16.6993 4.34356 17.0118 4.65612C17.3244 4.96868 17.5 5.39261 17.5 5.83464V14.168C17.5 14.61 17.3244 15.0339 17.0118 15.3465C16.6993 15.659 16.2754 15.8346 15.8333 15.8346H4.16667C3.72464 15.8346 3.30072 15.659 2.98816 15.3465C2.67559 15.0339 2.5 14.61 2.5 14.168V5.83464Z" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 5.83203L10 10.832L17.5 5.83203" stroke="#C1C1C1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

// Social media icons
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.475 6.006 1.46 7.648.72 9.375a.082.082 0 0 0-.031.057 19.9 19.9 0 0 0-1.022 4.51.078.078 0 0 0 .031.074c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.96-.607 3.949-1.523 5.992-3.029a.077.077 0 0 0 .032-.074 19.988 19.988 0 0 0-1.02-4.51.081.081 0 0 0-.031-.057c-.745-1.727-1.76-3.37-2.927-4.978a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.167 1.68-.884 5.76-1.247 7.644-.153.938-.455 1.252-.748 1.282-.64.06-1.127-.422-1.748-.826-.969-.64-1.518-1.038-2.458-1.664-1.08-.71-.38-1.1.235-1.737.16-.163 2.9-2.66 2.954-2.886a.21.21 0 0 0-.047-.18c-.053-.056-.13-.034-.187-.02-.08.02-1.35.857-3.81 2.518-.36.24-.686.357-.98.35-.325-.01-.95-.184-1.414-.336-1.14-.37-2.043-.567-1.965-1.198.04-.33.55-.67 1.515-1.016 5.9-2.58 9.84-4.27 11.66-5.08.55-.25 1.05-.37 1.51-.37.32 0 .6.03.83.09z" fill="white" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6" id="subscribe">
      {/* Outer container with gradient border */}
      <div
        className="relative rounded-xl p-[2px] w-full max-w-[795px]"
        style={{
          opacity: 1,
          background: 'linear-gradient(169.15deg, rgba(0, 0, 0, 0.3) 0%, rgba(58, 123, 255, 0.15) 96.79%)',
        }}
      >
        {/* Inner container */}
        <div
          className="w-full rounded-xl p-6 sm:p-8 md:p-10"
          style={{
            background: 'radial-gradient(100% 100% at 0% 0%, rgba(54, 54, 54, 0.32) 0%, rgba(58, 123, 255, 0) 100%)',
            boxShadow: '-5px -5px 250px 0px #FFFFFF05 inset',
          }}
        >
          {/* Title */}
          <h2 className="font-futura text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Get In Touch
          </h2>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6">
            {/* First Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Name Field */}
              <div className="relative flex-1 rounded-xl p-[1px]" style={{
                background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
                opacity: 0.7,
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[52px] px-4 pr-10 sm:pr-12 rounded-xl outline-none bg-[#242730] text-white placeholder-white/70 font-futura text-sm sm:text-base "

                />
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <PersonIcon />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative flex-1 rounded-xl p-[1px]" style={{
                background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
                opacity: 0.7,
              }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[52px] px-4 pr-10 sm:pr-12 rounded-xl text-white placeholder-white/70 font-futura text-sm sm:text-base outline-none bg-[#242730]"

                />
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <EnvelopeIcon />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Contact Field */}
              <div className="relative flex-1 rounded-xl p-[1px]" style={{
                background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
                opacity: 0.7,
              }}>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[52px] px-4 pr-10 sm:pr-12 rounded-xl text-white placeholder-white/70 font-futura text-sm sm:text-base outline-none bg-[#242730]"

                />
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <PhoneIcon />
                </div>
              </div>

              {/* Select Purpose Field */}
              <div className="relative flex-1 rounded-xl p-[1px]" style={{
                background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
                opacity: 0.7,
              }}>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[52px] px-4 pr-10 sm:pr-12 rounded-xl text-white font-futura text-sm sm:text-base appearance-none cursor-pointer outline-none bg-[#242730]"

                >
                  <option value="" className="bg-gray-800 text-white">Select Purpose</option>
                  <option value="general" className="bg-gray-800 text-white">General Inquiry</option>
                  <option value="support" className="bg-gray-800 text-white">Support</option>
                  <option value="partnership" className="bg-gray-800 text-white">Partnership</option>
                </select>
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative rounded-xl p-[1px] h-[160px]" style={{
              background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
              opacity: 0.7,
            }}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full h-full px-4 py-3 rounded-xl text-white placeholder-white/70 font-futura text-sm sm:text-base resize-none outline-none bg-[#242730]"

              />
            </div>

            {/* Send Message Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-white font-futura text-sm sm:text-base font-medium border border-white/20 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Icons */}
          {/* <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Discord">
              <DiscordIcon />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Telegram">
              <TelegramIcon />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;

