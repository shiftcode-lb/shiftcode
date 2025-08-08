import React, { useEffect, useRef } from 'react'; // <-- added useRef
import Title from './Title';
import PricingCard from './PricingCard';
import { assets } from '../assets/assests';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

const cardsData = [
  {
    title: "Logo & Design",
    subtitle: "Make your brand stand out with stunning design",
    image: assets.pricing_image,
    price: "50",
    features: [
      "Custom Logo Design",
      "2 Revisions Included",
      "Multiple Formats (PNG, SVG, etc.)",
      "Delivery Within 5 Days",
      "Brand Identity Guidance",
      "Editable Source Files Available"
    ]
  },
  {
    title: "Portfolio Website",
    subtitle: "Showcase your skills with a modern touch",
    image: assets.pricing_image,
    price: "200",
    features: [
      "Responsive Layout & Deployment",
      "Pre-built UI with Minor Edits",
      "Basic Contact Form Integration",
      "SEO-Ready Setup",
      "Hosting Support",
      "Interactive Work Samples"
    ]
  },
  {
    title: "Online Store",
    subtitle: "Launch and grow your business with ease",
    image: assets.pricing_image,
    price: "300",
    features: [
      "Product Management Dashboard",
      "Admin Panel & Authentication",
      "Basic Payment Integration",
      "Responsive Design",
      "Hosting Support",
      "Interactive Work Samples"
    ]
  }
];

const Pricing = () => {
  const swiperRef = useRef(null); // <-- added this line

  useEffect(() => {
    if (!swiperRef.current) return;

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // Move to first slide
      swiperRef.current.swiper.slideToLoop(0);
      // Start autoplay
      swiperRef.current.swiper.autoplay.start();
    }
  },
  { threshold: 0.3 }
);

    observer.observe(swiperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center mb-10
        w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl"
      id="pricing"
    >
      <Title
        title="Your Pricing Plan"
        subtitle="Here is the prices of each service that we offer"
      />

      {/* Desktop grid (>=1024px) */}
      <div className="hidden lg:flex justify-between items-stretch mt-10 gap-6 w-full">
        {cardsData.map((card, i) => (
          <PricingCard key={i} {...card} />
        ))}
      </div>

      {/* Swiper slider for <1024px */}
      <div className="lg:hidden w-full mt-10">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
          loop={true}
          grabCursor={true}
          className="!pb-12"
        >
          {cardsData.map((card, i) => (
            <SwiperSlide key={i}>
              <PricingCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Pricing;
