import React from 'react'
import Title from './Title'
import Card from './Card'
import { assets } from '../assets/assests'

const WhyUs = () => {
  return (
    <div className='flex flex-col justify-center items-center  md:px-16 lg:px-24 xl:px-32 py-2 px-3'>
        <div>
            <Title title="Why Choose Us" subtitle="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa. "/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-6 '>
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
