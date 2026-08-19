import {React, useEffect} from 'react'
import { Link, } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assests';

const Section = ({Title, image, text, text2, flex}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every time element enters the viewport
    });
  }, []);
  
  return (
    
    <div className={`relative flex flex-col  md:flex-row ${flex === "reverse" ? "md:flex-row-reverse" : ""} my-20 gap-10
    justify-between items-center section-x section-pt `} id='about'>
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-primary/10 blur-3xl pointer-events-none select-none
          ${flex === "reverse" ? "right-[0px]" : "left-[0px]"}
          `}
      />
      {/** Left banner  */}
      <div className='flex flex-col gap-3 md:w-1/2 w-full relative'>
                        <h3 className='text-[40px] font-bold text-text mb-[27px] leading-[40px]'>{Title}</h3>
                        <p className='text-[18px] text-muted font-normal leading-relaxed mb-[31px]'>{text}</p>
                        <br />
                        <p className='text-[18px] text-muted font-normal leading-relaxed mb-[31px]'>{text2}</p>
                        <div className="mt-5">
                            <button
  onClick={() => {
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="inline-block px-6 py-3 text-background rounded bg-primary hover:bg-primaryDark hover:glow-primary
  transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
>
  Contact Us
</button>
                        </div>
      </div>
      {/** Right banner */}
      <div className='md:w-1/2 w-full rounded-2xl relative border border-borderColor bg-coprimary p-3 overflow-hidden'>
        <img src={image} alt="" className='w-full rounded-xl'/>
      </div>
    </div>
    
  )
}

export default Section
