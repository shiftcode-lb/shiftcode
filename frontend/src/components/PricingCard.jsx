import React from 'react'

const PricingCard = ({image, title, price, features }) => {
    const currancy = import.meta.env.VITE_CURRENCY;
  return (
    <div className='group w-full bg-coprimary rounded-md flex flex-col justify-between cursor-pointer
    items-center md:items-start text-center md:text-left 
    lg:w-[290px] xl:w-[350px] lg:h-[543px] xl:h-[669px] md:w-[210px] md:h-[463px]
    md:py-[30px] md:px-[15px] lg:px-[14px] lg:py-[30px] xl:py-[55px] xl:pl-[48px] xl:pr-[64px]
    px-[60px] pt-[28px] pb-[36px]
    hover:bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-coprimary)_15%,_var(--color-coprimary)_100%)]
    '>
        
      <div className="bg-background p-3 inline-block rounded-md mb-6
       group-hover:bg-primary transition-colors duration-300">
            <figure className="mb-0">
                <img
                src={image}
                alt=""
                className="filter grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
            </figure>
        </div>
        <h4 className='text-[22px] leading-6 mb-[10px] text-background font-bold
        group-hover:text-primary transition-colors duration-300'>{title}</h4>
        <h3 className='text-[26px] leading-[38px] font-bold text-background'>Starting {price}{currancy}</h3>
        <p className="text-[14px] leading-6 mb-[30px] text-background">
            {features.map((feature, index) => (
                <span key={index} className="block">{feature}</span>
        ))}
        </p>
        <div className="">
            <a href="pricing.html" className="text-[16px] leading-4 py-2.5 px-8 rounded font-bold
            bg-background group-hover:bg-primary transition-all duration-300 text-coprimary">Order Now</a>
        </div>
    </div>
  )
}

export default PricingCard
