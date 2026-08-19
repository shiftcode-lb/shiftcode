import {React, useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const CardSmall = ({cardImage, cardTitle, cardNumber,tag}) => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
          once: false, // animate every time element enters the viewport
    })
  },[]);

  return (
    <div className="group w-full rounded-xl py-[37px] px-[28px] border border-borderColor bg-coprimary box-border
    items-center md:items-start text-center md:text-left pl-3
    lg:w-[210px] xl:w-[255px] lg:h-[248px] xl:h-[256px] md:w-[140px] md:h-[269px]
    hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_50px_-15px_rgba(47,214,108,0.35)]
    transition-all duration-300
    flex flex-col justify-between" 
    data-aos="fade-up" data-aos-delay="300"
    >
        <div className="inline-block mb-[30px] bg-light py-[11px] px-[10px] rounded-[5px]
        group-hover:bg-primary transition-colors duration-300">
            <figure className="mb-0 ">
              <img src={cardImage} alt="card image" className='
              filter grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300'/>
            </figure>
        </div>
        <h3 className="text-text mb-[8px] text-[30px] leading-7 font-bold group-hover:text-primary transition-colors duration-300">{cardNumber}{tag}</h3>
        <h5 className="text-muted text-[18px]">{cardTitle}</h5>
    </div>
  )
}

export default CardSmall
