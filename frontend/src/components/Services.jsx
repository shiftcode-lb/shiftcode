import React, { useEffect, useRef, useState } from 'react';
import Title from './Title';
import Card from './Card';
import { assets } from '../assets/assests';
const baseURL = import.meta.env.VITE_API_URL;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';

// ===== OLD CODE FOR FETCHING (commented, kept for reference) =====
// import { fetchServices } from '../services/servicesServices';
// const [services, setServices] = useState([]);
// useEffect(() => {
//   const loadData = async () => {
//     const data = await fetchServices();
//     setServices(data.services);
//   };
//   loadData();
// }, []);
// ================================================================

// ===== CURRENTLY USING STATIC DATA INSTEAD =====
const Services = () => {
  // const services = [
  //   {
  //     "_id": { "$oid": "688a14b00cab16fc657389c5" },
  //     "name": "Web Development",
  //     "description": "We build fast, responsive, and scalable websites — whether it's an e-commerce platform, business portfolio, or a custom solution tailored to your needs.)",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/coding.png?updatedAt=1754569552662"
  //   },
  //   {
  //     "_id": { "$oid": "688a14f20cab16fc657389cb" },
  //     "name": "UI/UX design",
  //     "description": "We design intuitive interfaces that deliver a seamless experience and reflect your brand. From wireframes to high-fidelity designs — we do it all.",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/ui-ux.png?updatedAt=1754569552401"
  //   },
  //   {
  //     "_id": { "$oid": "688a150d0cab16fc657389cd" },
  //     "name": "Penetration Testing",
  //     "description": "Ensure your website is secure before launch. We identify vulnerabilities and help protect your platform from cyber threats with thorough security testing.",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/testing.png?updatedAt=1754569552358"
  //   },
  //   {
  //     "_id": { "$oid": "688a15240cab16fc657389cf" },
  //     "name": "Localization",
  //     "description": "We translate your website content between English and Arabic, ensuring it resonates with the local culture and audience — without losing clarity or meaning.",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/translation.png?updatedAt=1754569552417"
  //   },
  //   {
  //     "_id": { "$oid": "688a15370cab16fc657389d1" },
  //     "name": "Hosting",
  //     "description": "We offer fast, reliable, and secure hosting services. Your website stays online, performs well, and is protected — without you having to manage the technical details.",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/hosting.png?updatedAt=1754569552440"
  //   },
  //   {
  //     "_id": { "$oid": "688a154d0cab16fc657389d3" },
  //     "name": "Integration and Maintenance",
  //     "description": "We handle ongoing updates, feature integrations, and technical maintenance to keep your website running smoothly long after launch.",
  //     "image": "https://ik.imagekit.io/shiftCode/ShiftCode/maintainance.png?updatedAt=1754569552400"
  //   }
  // ];
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
    const response = await axios.get(`${baseURL}/services`);
    setServices(response.data.services);
  };
  loadData();
}, []);

  const swiperRef = useRef(null); // ref for Swiper

  // ===== KEEPING INTERSECTION OBSERVER =====
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
  }, []); // using static services now

  const ServicesImage = {
    "Web Development": assets.coding,
    "UI/UX design": assets.ui,
    "Penetration Testing": assets.testing,
    "Localization": assets.translation,
    "Hosting": assets.hosting,
    "Integration and Maintenance": assets.maintainance
  };

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
            cardImage={ServicesImage[service.name]}
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
          loop={true}
          grabCursor={true}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card
                cardTitle={service.name}
                cardText={service.description}
                cardImage={ServicesImage[service.name]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
