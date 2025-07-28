import React from 'react'

const CardSmall = ({cardImage, cardTitle, cardNumber}) => {
  return (
    <div className="group w-full md:w-[260px] h-[260px] rounded-[5px] py-[37px] px-[28px] border-2 border-borderColor bg-coprimary box-border
    items-center md:items-start text-center md:text-left
    hover:bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-coprimary)_15%,_var(--color-coprimary)_100%)] 
    cursor-pointer flex flex-col justify-between">
        <div className="inline-block mb-[30px]">
            <figure className="mb-0 ">
              <img src={cardImage} alt="card image" className='bg-background py-[11px] px-[10px] rounded-[5px]'/>
            </figure>
        </div>
        <h3 className="text-background mb-[8px] text-[40px] leading-7 font-bold">{cardNumber}</h3>
        <h5 className="text-primary text-[18px] font-semibold">{cardTitle}</h5>
    </div>
  )
}

export default CardSmall
