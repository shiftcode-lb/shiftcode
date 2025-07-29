import React from 'react'
import Title from './Title'
import Card from './Card'
import { assets } from '../assets/assests'

const WhyUs = () => {
  return (
    <div className='flex flex-col justify-center items-center  w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
        <div>
            <Title title="Why Choose Us" subtitle="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa. "/>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-6 w-full'>
            <Card 
            cardTitle="Security Services"
            cardText="Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut imperdiet."
            cardImage={assets.whyus_icon1}
            />
            <Card 
            cardTitle="Security Services"
            cardText="Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut imperdiet."
            cardImage={assets.whyus_icon2}
            />
            <Card 
            cardTitle="Security Services"
            cardText="Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut imperdiet."
            cardImage={assets.whyus_icon3}
            />
        </div>
    </div>
  )
}

export default WhyUs
