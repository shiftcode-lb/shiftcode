import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const faqsData = [
  {
    question: "What services does ShiftCode offer?",
    answer: "We provide web development, UI/UX design, cybersecurity, localization, and hosting & maintenance — end to end, under one roof."
  },
  {
    question: "Do you work with startups, or only established companies?",
    answer: "Both. We work with early-stage startups shipping their first product and established companies scaling or refreshing theirs."
  },
  {
    question: "How does your process adapt to different company sizes?",
    answer: "We tailor our process to your stage — lean and fast for startups, structured and thorough for larger teams."
  },
  {
    question: "How do I get started with a project?",
    answer: "Reach out with your idea or requirements and we'll schedule a consultation to map out the best way forward."
  },
  {
    question: "Do you provide hosting after the site launches?",
    answer: "Yes — we offer reliable, secure hosting with ongoing support and domain setup included if needed."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="relative section-x section-pt mb-4" id='dicover-more'>
      <div className="w-full bg-light rounded-3xl px-6 py-12 md:px-16 md:py-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3 shrink-0">
            <span className="font-mono-code text-primaryDark text-sm tracking-[3px] uppercase">FAQ</span>
            <h2 className="text-background text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-lightMuted text-base mt-4 max-w-xs">
              Can't find the answer you're looking for? Reach out and we'll get back to you.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-t border-gray-200 last:border-b">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
                  >
                    <span className="text-background text-base md:text-lg font-medium">{faq.question}</span>
                    <span className={`shrink-0 transition-transform duration-300 text-primaryDark ${isOpen ? 'rotate-45' : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-lightMuted text-base pb-6 pr-8">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
