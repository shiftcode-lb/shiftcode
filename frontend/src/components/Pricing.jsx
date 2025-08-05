import React from 'react'
import Title from './Title'
import PricingCard from './PricingCard'
import { assets } from '../assets/assests'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import '../index.css';

const cardsData = [
  {
    title: "Portfolio Website",
    image: assets.pricing_image,
    price: "200",
    features: [
      "Responsive Layout & Deployment",
      "Pre-built UI with Minor Edits",
      "Basic Contact Form Integration",
      "SEO-Ready Setup",
      "Hosting Support",
      "UI/UX Design Not Included"
    ]
  },
  {
    title: "Online Store",
    image: assets.pricing_image,
    price: "300",
    features: [
      "Product Management Dashboard",
      "Admin Panel & Authentication",
      "Basic Payment Integration",
      "Responsive Design",
      "Hosting Support",
      "UI/UX Design Not Included"
    ]
  },
  {
    title: "Logo & Design",
    image: assets.pricing_image,
    price: "50",
    features: [
      "Custom Logo Design",
      "2 Revisions Included",
      "Multiple Formats (PNG, SVG, etc.)",
      "Delivery Within 3 Days",
      "Brand Identity Guidance",
      "Editable Source Files Available"
    ]
  }
]

const Pricing = () => {
  return (
    <div className='flex flex-col justify-center items-center
      w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
      
      <Title 
        title="Your Pricing Plan"
        subtitle="Here is the prices of each service that we offer"
      />

      {/* Desktop grid (>=1024px) */}
      <div className='hidden lg:flex justify-between items-stretch mt-10 gap-6 w-full'>
        {cardsData.map((card, i) => (
          <PricingCard key={i} {...card} />
        ))}
      </div>

      {/* Swiper slider for <1024px */}
      <div className='lg:hidden w-full mt-10'>
        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 7000, disableOnInteraction: true }}
  loop={true}
  grabCursor={true}  // <--- Add this line
  className="!pb-12" // Add bottom padding for pagination dots
>
  {cardsData.map((card, i) => (
    <SwiperSlide key={i}>
        <PricingCard {...card} />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  )
}

export default Pricing
