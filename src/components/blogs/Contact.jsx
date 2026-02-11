"use client";

import React, { useState } from 'react';

// Icon components
const PersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="white" fillOpacity="0.9"/>
    <path d="M10 12C5.58172 12 2 14.6863 2 18V20H18V18C18 14.6863 14.4183 12 10 12Z" fill="white" fillOpacity="0.9"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4L10 11L2 4M2 4H18M2 4V16H18V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.9"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 6.66667C3.33333 12.5 7.5 16.6667 13.3333 16.6667H15C15.442 16.6667 15.866 16.4911 16.1785 16.1785C16.4911 15.866 16.6667 15.442 16.6667 15V13.3333C16.6667 12.8913 16.4911 12.4674 16.1785 12.1548C15.866 11.8423 15.442 11.6667 15 11.6667H11.6667C11.2246 11.6667 10.8007 11.8423 10.4882 12.1548C10.1756 12.4674 10 12.8913 10 13.3333V16.6667C10 17.1087 9.82441 17.5326 9.51184 17.8452C9.19928 18.1577 8.77536 18.3333 8.33333 18.3333C4.65124 18.3333 1.66667 15.3488 1.66667 11.6667C1.66667 11.2246 1.84226 10.8007 2.15482 10.4882C2.46738 10.1756 2.89131 10 3.33333 10H6.66667C7.10869 10 7.53262 10.1756 7.84518 10.4882C8.15774 10.8007 8.33333 11.2246 8.33333 11.6667V15C8.33333 15.442 8.15774 15.866 7.84518 16.1785C7.53262 16.4911 7.10869 16.6667 6.66667 16.6667H3.33333V6.66667Z" fill="white" fillOpacity="0.9"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.9"/>
  </svg>
);

// Social media icons
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.475 6.006 1.46 7.648.72 9.375a.082.082 0 0 0-.031.057 19.9 19.9 0 0 0-1.022 4.51.078.078 0 0 0 .031.074c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.96-.607 3.949-1.523 5.992-3.029a.077.077 0 0 0 .032-.074 19.988 19.988 0 0 0-1.02-4.51.081.081 0 0 0-.031-.057c-.745-1.727-1.76-3.37-2.927-4.978a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.167 1.68-.884 5.76-1.247 7.644-.153.938-.455 1.252-.748 1.282-.64.06-1.127-.422-1.748-.826-.969-.64-1.518-1.038-2.458-1.664-1.08-.71-.38-1.1.235-1.737.16-.163 2.9-2.66 2.954-2.886a.21.21 0 0 0-.047-.18c-.053-.056-.13-.034-.187-.02-.08.02-1.35.857-3.81 2.518-.36.24-.686.357-.98.35-.325-.01-.95-.184-1.414-.336-1.14-.37-2.043-.567-1.965-1.198.04-.33.55-.67 1.515-1.016 5.9-2.58 9.84-4.27 11.66-5.08.55-.25 1.05-.37 1.51-.37.32 0 .6.03.83.09z" fill="white"/>
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
    <section className="relative w-full flex items-center justify-center py-24 px-6">
      {/* Outer container with gradient border */}
      <div
        className="relative rounded-xl p-[2px]"
        style={{
          width: '795px',
          height: '620px',
          opacity: 1,
          background: 'linear-gradient(169.15deg, rgba(0, 0, 0, 0.3) 0%, rgba(58, 123, 255, 0.15) 96.79%)',
        }}
      >
        {/* Inner container */}
        <div
          className="w-full h-full rounded-xl p-10"
          style={{
            background: 'radial-gradient(100% 100% at 0% 0%, rgba(54, 54, 54, 0.32) 0%, rgba(58, 123, 255, 0) 100%)',
            boxShadow: '-5px -5px 250px 0px #FFFFFF05 inset',
          }}
        >
        {/* Title */}
        <h2 className="font-futura text-4xl font-bold text-white mb-8">
          Get In Touch
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* First Row */}
          <div className="flex gap-4">
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
                className="w-full h-[52px] px-4 pr-12 rounded-xl text-white placeholder-white/70 font-futura text-base"
                style={{
                  background: 'linear-gradient(91.6deg, rgba(224, 224, 224, 0.21) -10.12%, rgba(144, 144, 144, 0.1) 93.31%)',
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
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
                className="w-full h-[52px] px-4 pr-12 rounded-xl text-white placeholder-white/70 font-futura text-base"
                style={{
                  background: 'linear-gradient(91.6deg, rgba(224, 224, 224, 0.21) -10.12%, rgba(144, 144, 144, 0.1) 93.31%)',
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <EnvelopeIcon />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-4">
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
                className="w-full h-[52px] px-4 pr-12 rounded-xl text-white placeholder-white/70 font-futura text-base"
                style={{
                  background: 'linear-gradient(91.6deg, rgba(224, 224, 224, 0.21) -10.12%, rgba(144, 144, 144, 0.1) 93.31%)',
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
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
                className="w-full h-[52px] px-4 pr-12 rounded-xl text-white font-futura text-base appearance-none cursor-pointer"
                style={{
                  background: 'linear-gradient(91.6deg, rgba(224, 224, 224, 0.21) -10.12%, rgba(144, 144, 144, 0.1) 93.31%)',
                }}
              >
                <option value="" className="bg-gray-800 text-white">Select Purpose</option>
                <option value="general" className="bg-gray-800 text-white">General Inquiry</option>
                <option value="support" className="bg-gray-800 text-white">Support</option>
                <option value="partnership" className="bg-gray-800 text-white">Partnership</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative rounded-xl p-[1px]" style={{
            background: 'radial-gradient(101% 374.62% at -1% 93.27%, rgba(240, 240, 240, 0.4) 0%, #919191 18.95%, #7F7F7F 43.07%, rgba(207, 207, 207, 0.2) 100%)',
            opacity: 0.7,
          }}>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/70 font-futura text-base resize-none"
              style={{
                background: 'linear-gradient(91.6deg, rgba(224, 224, 224, 0.21) -10.12%, rgba(144, 144, 144, 0.1) 93.31%)',
                minHeight: '120px',
              }}
            />
          </div>

          {/* Send Message Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl text-white font-futura text-base font-medium border border-white/20 hover:bg-white/5 transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <DiscordIcon />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <XIcon />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <TelegramIcon />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

