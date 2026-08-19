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
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" aria-hidden="true"></span>
      <span
        className="relative w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center
        shadow-[0_10px_30px_-8px_rgba(47,214,108,0.55)] hover:bg-primaryDark hover:scale-105
        transition-all duration-300"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.257L4 29l7.94-1.69A11.94 11.94 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.92 0-3.71-.53-5.24-1.45l-.375-.222-4.71 1.003 1.017-4.59-.246-.386A9.71 9.71 0 016.25 15c0-5.38 4.375-9.75 9.754-9.75 5.38 0 9.746 4.37 9.746 9.75s-4.367 9.75-9.746 9.75zm5.35-7.3c-.293-.146-1.734-.856-2.004-.953-.27-.098-.466-.146-.663.146-.196.293-.76.953-.932 1.15-.17.196-.343.22-.636.073-.293-.146-1.238-.456-2.36-1.454-.872-.778-1.462-1.74-1.633-2.033-.17-.293-.018-.45.128-.596.132-.13.293-.343.44-.514.146-.17.195-.293.293-.488.098-.196.049-.367-.024-.514-.073-.146-.663-1.596-.908-2.185-.24-.573-.484-.496-.663-.505-.17-.008-.367-.01-.563-.01-.196 0-.514.073-.783.367-.27.293-1.03 1.006-1.03 2.454 0 1.448 1.054 2.846 1.2 3.043.147.196 2.075 3.168 5.028 4.442.703.303 1.25.485 1.678.62.705.224 1.346.192 1.854.117.566-.085 1.734-.708 1.978-1.392.245-.684.245-1.27.171-1.392-.073-.122-.27-.196-.563-.342z"/>
        </svg>
      </span>
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
