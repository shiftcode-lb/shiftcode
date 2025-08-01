import React,{useEffect, useState} from 'react'
import Title from "./Title"

import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(null)
    const faqsData = [
  {
    question: "What technologies do you use for web development?",
    answer: "We specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) to build fast, scalable, and modern web applications."
  },
  {
    question: "Can you help design the UI/UX of my website or app?",
    answer: "Absolutely. We design clean, user-centered interfaces focused on usability and brand identity using modern design tools and UX principles."
  },
  {
    question: "Do you offer logo and branding services?",
    answer: "Yes, we craft professional logos and visual brand identities that help businesses stand out and communicate their value clearly."
  },
  {
    question: "Do you provide hosting for websites you build?",
    answer: "Yes, we offer reliable and secure hosting solutions, with ongoing support and domain setup included if needed."
  },
  {
    question: "How do I get started with a project?",
    answer: "Just contact us with your idea or requirements. We’ll schedule a consultation to understand your goals and suggest the best way forward."
  }
];

    useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false, // animate every time element enters the viewport
          });
        }, []);
    return (
        <>
            <div className='flex flex-col items-center text-center text-slate-800 px-3'>
                <Title 
                title="Frequently Asked Questions"
                subtitle="Proactively answering FAQs boosts user confidence and cuts down on support tickets"
                />
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left my-20'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full' data-aos="fade-up" data-aos-delay="200">
                            <div className='flex items-center justify-between w-full cursor-pointer border border-borderColor p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ