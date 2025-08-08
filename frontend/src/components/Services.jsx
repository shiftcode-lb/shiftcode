import React, { useEffect, useState, useRef } from 'react';
import Title from './Title';
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { fetchServices } from '../services/servicesServices';

const Services = () => {
  const [services, setServices] = useState([]);
  const swiperRef = useRef(null); // <-- ref for Swiper

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchServices();
      setServices(data.services);
    };
    loadData();
  }, []);

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
  }, [services]); // wait until services are loaded

  return (
    <div
      className="flex flex-col justify-center items-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl"
      id="services"
    >
      <Title
        title="Services"
        subtitle="Explore the range of expert solutions we provide to help your business grow and succeed"
      />

      {/* Desktop grid (≥768px) */}
      <div className="hidden md:flex justify-between items-center mt-10 gap-6 w-full flex-wrap">
        {services.map((service, index) => (
          <Card
            key={index}
            cardTitle={service.name}
            cardText={service.description}
            cardImage={service.image}
          />
        ))}
      </div>

      {/* Swiper slider for mobile (<768px) */}
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
          loop={true} // only loop if enough slides
          grabCursor={true}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
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
