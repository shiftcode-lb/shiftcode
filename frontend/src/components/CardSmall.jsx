import {React, useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const CardSmall = ({cardImage, cardTitle, cardNumber}) => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
          once: false, // animate every time element enters the viewport
    })
  },[]);

  return (
    <div className="group w-full rounded-[5px] py-[37px] px-[28px] border-2 border-borderColor bg-coprimary box-border
    items-center md:items-start text-center md:text-left pl-3
    lg:w-[210px] xl:w-[255px] lg:h-[248px] xl:h-[256px] md:w-[140px] md:h-[269px]
    hover:bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-coprimary)_15%,_var(--color-coprimary)_100%)] 
    cursor-pointer flex flex-col justify-between" 
    data-aos="fade-left" data-aos-delay="300"
    >
        <div className="inline-block mb-[30px] bg-background py-[11px] px-[10px] rounded-[5px]
        group-hover:bg-primary transition-colors duration-300">
            <figure className="mb-0 ">
              <img src={cardImage} alt="card image" className='
              filter grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300'/>
            </figure>
        </div>
        <h3 className="text-background mb-[8px] text-[30px] leading-7 font-bold group-hover:text-primary transition-colors duration-300">{cardNumber}</h3>
        <h5 className="text-background text-[18px]">{cardTitle}</h5>
    </div>
  )
}

export default CardSmall
