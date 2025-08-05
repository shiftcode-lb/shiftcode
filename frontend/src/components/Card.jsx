import {React, useEffect} from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({cardTitle, cardText, cardImage}) => {
  useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, // animate every time element enters the viewport
        });
      }, []);
  return (
    <div
  className="group bg-coprimary rounded-[5px] px-10 py-5 border-2 border-coprimary
    transform transition-transform duration-300 pl-6 
    items-center md:items-start text-center md:text-left
    lg:w-[290px] xl:w-[350px] lg:h-[346px] md:w-[240px] md:h-[3px] w-full
    hover:bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-coprimary)_15%,_var(--color-coprimary)_100%)]"
  data-aos="fade-up" data-aos-delay="300"
>
  <div className="flex flex-col h-full justify-between">
    {/* Icon Container */}
    <div className="p-3 rounded-md mb-3 group-hover:bg-primary transition-colors duration-300 bg-background w-max">
  <figure className="mb-0">
    <img
      src={cardImage}
      alt=""
      className="w-10 h-10 object-contain filter grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300"
    />
  </figure>
</div>

    {/* Title */}
    <h4 className="text-background group-hover:text-primary transition-colors duration-300 text-lg font-semibold mb-4 min-h-[48px]">
      {cardTitle}
    </h4>

    {/* Paragraph */}
    <p className="leading-[26px] font-normal text-background text-[14px] min-h-[80px] mb-5">
      {cardText}
    </p>
  </div>
</div>


  )
}

export default Card
