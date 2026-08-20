import React from 'react';

// NOTE: swap this number for the real WhatsApp Business number if it
// differs — currently reusing ShiftCode's known contact number.
const WHATSAPP_NUMBER = '96176113085';
const PREFILLED_MESSAGE = "Hi! I'd like to know more about ShiftCode's services.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ShiftCode on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center"
    >
      {/* Ping Animation - Unchanged */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" aria-hidden="true"></span>
      
      {/* Outer Green Badge */}
      <span
        className="relative w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center
        shadow-[0_10px_30px_-8px_rgba(47,214,108,0.55)] hover:bg-primaryDark hover:scale-105
        transition-all duration-300"
      >
        {/* Responsive WhatsApp SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 48 48"
          className="w-7 h-7 fill-current"
        >
          <path fill="#0e1526" d="M24,4C13,4,4,13,4,24c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2c11,0,20-9,20-20C44,13,35,4,24,4z M35.2,12.8c3,3,4.6,6.9,4.6,11.2c0,8.7-7.1,15.8-15.8,15.8c-2.8,0-5.6-0.8-8-2.2l-0.6-0.3l-6,1.6l1.6-5.8l-0.4-0.6c-1.6-2.5-2.4-5.4-2.4-8.4c0-8.7,7.1-15.8,15.8-15.8C28.3,8.2,32.2,9.8,35.2,12.8z"></path>
          <path fill="#0e1526" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
        </svg>
      </span>

      {/* Tooltip - Unchanged */}
      <span
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-lg bg-coprimary
        border border-borderColor text-text text-sm opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
      >
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;