import React from 'react';
import Title from './Title';
import Card from './Card';
import { assets } from '../assets/assests';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const WhyUs = () => {
  const whyUsData = [
    {
      cardTitle: 'Custom Web Development',
      cardText: 'We create high-performing websites and intuitive UI/UX designs that reflect your brand and drive user engagement — all fully responsive and optimized.',
      cardImage: assets.whyus_icon1,
    },
    {
      cardTitle: 'Secure & Scalable Hosting',
      cardText: 'Enjoy fast, secure, and reliable hosting services with maximum uptime. We manage your website infrastructure so you can focus on your business.',
      cardImage: assets.whyus_icon2,
    },
    {
      cardTitle: 'Always-On Support',
      cardText: 'We’re here when you need us. Whether it’s a new feature or an urgent fix — our team ensures your project stays live and secure 24/7.',
      cardImage: assets.whyus_icon3,
    },
  ];

  return (
    <div 
      className="flex flex-col justify-center items-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Title
        title="Why Choose Us"
        subtitle="Discover the key reasons our clients trust us to deliver exceptional solutions tailored to their needs"
      />

      {/* Desktop view (≥768px) */}
      <div className="hidden md:flex justify-between items-center mt-10 gap-6 w-full">
        {whyUsData.map((item, index) => (
          <Card
            key={index}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
            cardImage={item.cardImage}
          />
        ))}
      </div>

      {/* Swiper for mobile (<768px) */}
      <div className="md:hidden w-full mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: true }}
          loop={true}
          grabCursor={true}
          className="!pb-12"
        >
          {whyUsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                cardTitle={item.cardTitle}
                cardText={item.cardText}
                cardImage={item.cardImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyUs;

