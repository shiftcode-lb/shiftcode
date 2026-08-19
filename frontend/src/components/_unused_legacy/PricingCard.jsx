import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingCard = ({image, title, price, features, subtitle }) => {
  useEffect(()=>{
      AOS.init({
        duration: 1000,
            once: false, // animate every time element enters the viewport
      })
    },[]);
    const currancy = import.meta.env.VITE_CURRENCY;
  return (
    
    <div className="flex flex-col p-6 md:p-3 mx-auto w-full text-center rounded-xl border
  border-borderColor hover:border-primary/50 transition-all duration-300 xl:p-8 bg-coprimary text-text h-auto
  hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(47,214,108,0.35)]" 
    data-aos="fade-up" data-aos-delay="300">
              <h3 className="mb-4 text-2xl font-semibold text-text">{title}</h3>
              <p className="font-light sm:text-lg text-muted">{subtitle}</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold text-primary">{currancy}{price}</span>
                  <span className="text-muted font-bold">Starting</span>
              </div>
              <ul role="list" className="mb-8 space-y-4  ">
                {features.map((feature, index) => (
                  <li className="flex  space-x-3 items-center md:items-start text-center md:text-left font-semibold text-text" key={index}>
                      <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
              <button
  onClick={() => {
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="hover:bg-primaryDark hover:glow-primary bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center
             text-background duration-300 cursor-pointer"
>
  Get started
</button>
    </div>
  )
}

export default PricingCard
