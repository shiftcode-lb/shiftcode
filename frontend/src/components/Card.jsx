import React from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({cardTitle, cardText, cardImage}) => {
  return (
    <div className="group bg-coprimary rounded-[5px] px-10 py-10 border-2 border-coprimary
    cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 pl-6 
    items-center md:items-start text-center md:text-left
    lg:w-[290px] xl:w-[350px] lg:h-[339px] xl:h-[346px] md:w-[210px] md:h-[328px]
    hover:bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-coprimary)_15%,_var(--color-coprimary)_100%)]">
  
  <div className="bg-background p-3 inline-block rounded-md mb-6 group-hover:bg-primary transition-colors duration-300">
    <figure className="mb-0">
      <img
        src={cardImage}
        alt=""
        className="filter grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300"
      />
    </figure>
  </div>

  <h4 className="mb-8 text-background group-hover:text-primary transition-colors duration-300 text-lg font-semibold">
   {cardTitle}
  </h4>

  <p className=" leading-[26px] font-normal text-background mb-7 text-[14px]">
    {cardText}
  </p>

  <a
    href="/about"
    className="text-background text-[16px] leading-[26px] font-normal transition-colors duration-300">
    Learn More
    <FontAwesomeIcon icon={faAngleRight} className="text-xs" />
  </a>
</div>

  )
}

export default Card
