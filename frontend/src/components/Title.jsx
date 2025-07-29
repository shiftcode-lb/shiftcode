import React from 'react'

const Title = ({title, subtitle, align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center
    ${align === "left" && "md:items-center md:text-left"}`}>
      <h1 className='font-semibold text-3xl md:text-[40px] text-primary mb-2'>{title}</h1>
      <p className='text:sm md:text-base text-coprimary mt-2 max-w-156 text-[18px]'>{subtitle}</p>
    </div>
  )
}

export default Title
