import {React, useEffect} from 'react'
import { assets } from '../assets/assests'
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

import '../assets/css/FloatingIcons.css';

  
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
      once: false,     // only animate once
    });
  }, []);
  return (
    <div className='flex flex-col gap-10 justify-center  md:flex-row items-center h-[90vh] relative
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl my-10'>
      
        {/** Left Side Section */}
        <div className='w-full md:w-1/2  text-center md:text-left' data-aos="fade-up">
            <div>
                <h5 className='text-primary text-lg font-medium mb-2'>Empowering Brands with Modern Web Experiences</h5>
                <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Crafting High-Impact Websites That Convert</h1>
                <p className="text-primary mt-4 text-base md:text-lg">At ShiftCode, we design and build sleek, responsive websites that
                  captivate users and drive real business results — turning your ideas into powerful digital experiences.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <a
  href="#dicover-more"
  className="px-6 py-3 bg-primary text-background rounded font-semibold transition-transform duration-300
  ease-in-out hover:-translate-y-1 hover:bg-coprimary"
>
  Discover More
</a>
                </div>
            </div>
        </div>
        {/** Right Section */}
        <div className="w-full md:w-1/2 " data-aos="fade-up">
        <div className="relative w-full flex justify-center md:items-center">
          <img
            src={assets.hero_image}
            alt="Banner"
            className="md:w-full max-w-full banner-img-width md:h-full h-[350px] w-[350px] "/>
        </div>
        </div>
        {/** Floating images */}
        
<div className="anim-elements overflow-hidden">
    <img src={assets.animate1} alt="" className="anim-element" />
    <img src={assets.animate2} alt="" className="anim-element" />
    <img src={assets.animate3} alt="" className="anim-element" />
    <img src={assets.animate4} alt="" className="anim-element" />
    <img src={assets.animate5} alt="" className="anim-element" />
  </div>

    </div>
  )
}

export default Hero
