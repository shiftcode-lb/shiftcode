import React, { useEffect, useRef } from 'react';
import Title from './Title';
import Card from './Card';
import { assets } from '../assets/assests';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  const swiperRef = useRef(null);

  const services = [
    {
      name: "Web Development",
      description: "We build fast, responsive, and scalable websites — whether it's an e-commerce platform, business portfolio, or a custom solution tailored to your needs.",
      image: assets.coding
    },
    {
      name: "UI/UX design",
      description: "We design intuitive interfaces that deliver a seamless experience and reflect your brand. From wireframes to high-fidelity designs — we do it all.",
      image: assets.ui
    },
    {
      name: "Penetration Testing",
      description: "Ensure your website is secure before launch. We identify vulnerabilities and help protect your platform from cyber threats with thorough security testing.",
      image: assets.testing
    },
    {
      name: "Localization",
      description: "We translate your website content between English and Arabic, ensuring it resonates with the local culture and audience — without losing clarity or meaning.",
      image: assets.translation
    },
    {
      name: "Hosting",
      description: "We offer fast, reliable, and secure hosting services. Your website stays online, performs well, and is protected — without you having to manage the technical details.",
      image: assets.hosting
    },
    {
      name: "Integration and Maintenance",
      description: "We handle ongoing updates, feature integrations, and technical maintenance to keep your website running smoothly long after launch.",
      image: assets.maintainance
    }
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current.swiper.slideToLoop(0);
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
      className="flex flex-col justify-center items-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl"
      id="services"
    >
      <Title
        title="Services"
        subtitle="Explore the range of expert solutions we provide to help your business grow and succeed"
      />

      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center mt-10 gap-6 w-full flex-wrap">
        {services.map((service) => (
          <Card
            key={service.name}
            cardTitle={service.name}
            cardText={service.description}
            cardImage={service.image}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full mt-10">
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
          loop
          grabCursor
          className="!pb-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service.name}>
              <Card
                cardTitle={service.name}
                cardText={service.description}
                cardImage={service.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
