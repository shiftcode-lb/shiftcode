import {React, useEffect} from 'react'
import Title from './Title'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, // animate every time element enters the viewport
        });
      }, []);
  return (
    <div className='w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl mb-10'>
      <form className="flex flex-col items-center text-sm" data-aos="fade-up" data-aos-delay="300">
            <Title 
            title="Contact Us Here"
            subtitle="Share your ideas, and let’s build something great together."
            />
            
            <div className="flex flex-col md:flex-row items-center gap-8  md:w-[700px] w-full">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required placeholder='Enter your full name'/>
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required placeholder='example@email.com'/>
                </div>
            </div>
        
            <div className="mt-6 w-full md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required placeholder='Share Your Thoughts, Project Ideas and Question...'></textarea>
            </div>
        
            <button type="submit" className="cursor-pointer mt-5 bg-primary hover:bg-coprimary text-background
            h-12 w-56 px-4 rounded active:scale-95 transition hover:">Send Message</button>
        </form>
        </div>
  )
}

export default Form
