import React from 'react'
import Title from './Title'
import Card from './Card'
import { assets } from '../assets/assests'

const WhyUs = () => {
  
  return (
    <div className='flex flex-col justify-center items-center  w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'
    data-aos="fade-up" data-aos-delay="300">
        <div>
            <Title title="Why Choose Us" subtitle="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa. "/>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-6 w-full'>
            <Card 
  cardTitle="Custom Web Development"
  cardText="We create high-performing websites and intuitive UI/UX designs that reflect your brand and drive user engagement — all fully responsive and optimized."
  cardImage={assets.whyus_icon1}
/>
            <Card 
  cardTitle="Secure & Scalable Hosting"
  cardText="Enjoy fast, secure, and reliable hosting services with maximum uptime. We manage your website infrastructure so you can focus on your business."
  cardImage={assets.whyus_icon2}
/>
            <Card 
  cardTitle="Always-On Support"
  cardText="We’re here when you need us. Whether it’s a new feature, an urgent fix, or ongoing updates — our team ensures your project stays live and secure 24/7."
  cardImage={assets.whyus_icon3}
/>
        </div>
    </div>
  )
}

export default WhyUs
