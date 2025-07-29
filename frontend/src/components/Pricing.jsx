import React from 'react'
import Title from './Title'
import PricingCard from './PricingCard'
import { assets } from '../assets/assests'

const Pricing = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-30
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
        <Title 
        title="Your Pricing Plan"
        subtitle="Here is the prices of each service that we offer"
        />
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-6 w-full'>
            <PricingCard 
            title="Portfolio"
            image={assets.pricing_image}
            price="200"
            features={[
                "30 Days Product Testing",
                "Upgrade Anytime Protection",
                "500 Malware Removal",
                "24/7 Live Assistance",
                "Scan Every 12 Hrs",
                "Configure Software One-time"
            ]}  
            />
            <PricingCard 
            title="Portfolio"
            image={assets.pricing_image}
            price="200"
            features={[
                "30 Days Product Testing",
                "Upgrade Anytime Protection",
                "500 Malware Removal",
                "24/7 Live Assistance",
                "Scan Every 12 Hrs",
                "Configure Software One-time"
            ]}  
            />
            <PricingCard 
            title="Portfolio"
            image={assets.pricing_image}
            price="200"
            features={[
                "30 Days Product Testing",
                "Upgrade Anytime Protection",
                "500 Malware Removal",
                "24/7 Live Assistance",
                "Scan Every 12 Hrs",
                "Configure Software One-time"
            ]}  
            />
        </div>
    </div>
  )
}

export default Pricing
