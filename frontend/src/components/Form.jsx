import {React, useEffect} from 'react'
import Title from './Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assests';

const Form = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, // animate every time element enters the viewport
        });
      }, []);
  return (
    <div className='relative w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl mb-10'>
      <img
        src={assets.bg_image3}
        alt=""
        className=" absolute left-[-250px] top-1/2 -translate-y-1/2 w-[300px] opacity-20 pointer-events-none select-none"
      />
      <Title 
            title="Contact Us Here"
            subtitle="Share your ideas, and let’s build something great together."
            />
      <form className="flex flex-col items-center text-sm my-10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-borderColor" type="text" required placeholder='Enter your full name'/>
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-borderColor" type="email" required placeholder='example@email.com'/>
                </div>
            </div>
        
            <div className="mt-6 w-full">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-borderColor" required placeholder='Share Your Thoughts, Project Ideas and Question...'></textarea>
            </div>
        
            <button type="submit" className="cursor-pointer mt-5 bg-primary hover:bg-coprimary text-background
            h-12 w-56 px-4 rounded active:scale-95 transition hover:">Send Message</button>
        </form>
        </div>
  )
}

export default Form
