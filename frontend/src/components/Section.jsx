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
    justify-between items-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl `} id='about'>
      <img
        src={assets.bg_image2}
        alt=""
        className={` absolute top-1/2 -translate-y-1/2 w-[300px] opacity-20 pointer-events-none select-none
          ${flex === "reverse" ? "right-[0px]" : "left-[0px]"}
          `}
      />
      {/** Left banner  */}
      <div className='flex flex-col gap-3 md:w-1/2 w-full'>
                        <h3 className='text-[40px] font-bold text-coprimary mb-[27px] leading-[40px]'>{Title}</h3>
                        <p className='text-[18px] text-primary font-normal leading-relaxed mb-[31px]'>{text}</p>
                        <br />
                        <p className='text-[18px] text-primary font-normal leading-relaxed mb-[31px]'>{text2}</p>
                        <div className="mt-5">
                            <a
  href="#contact-us"
  className="inline-block px-6 py-3 text-background rounded bg-primary hover:bg-coprimary
  transform hover:-translate-y-1 transition-transform duration-300"
>
  Contact Us
</a>
                        </div>
      </div>
      {/** Right banner */}
      <div className='md:w-1/2 w-full rounded-2xl'>
        <img src={image} alt="" className='w-full'/>
      </div>
    </div>
    
  )
}

export default Section
