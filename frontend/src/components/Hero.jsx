import {React, useEffect} from 'react'
import { assets } from '../assets/assests'
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';


  
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
      once: false,     // only animate once
    });
  }, []);
  return (
    <div className='flex flex-col gap-10 justify-center h-screen md:flex-row items-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>

      <img src={assets.bg_imag1} alt="" className='w-[300px] h-[400px] absolute right-[-150px] bottom-[-100px]'/>
        {/** Left Side Section */}
        <div className='w-full md:w-1/2  text-center md:text-left' data-aos="fade-up">
            <div>
                <h5 className='text-primary text-lg font-medium '>Cyber Security Solutions for</h5>
                <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Organizations with Critical Infrastructure</h1>
                <p className="text-primary mt-4 text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor
                incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <Link to="/about-us"
                      className="px-6 py-3 bg-primary text-background rounded-[3px] font-semibold transition-transform duration-300 border-2 border-coprimary
                      ease-in-out hover:-translate-y-1 hover:bg-coprimary">
                        Discover More
                    </Link>
          <Link to="/contact-us"
            className="px-6 py-3 border-2 border-coprimary text-background rounded-[3px] bg-primary hover:bg-coprimary
            flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <FaPlay />
          </Link>
                </div>
            </div>
        </div>
        {/** Right Section */}
        <div className="w-full md:w-1/2" data-aos="fade-up">
        <div className="relative">
          <img
            src={assets.logo}
            alt="Banner"
            className="w-full max-w-full h-auto banner-img-width"/>
        </div>
        </div>
    </div>
  )
}

export default Hero
