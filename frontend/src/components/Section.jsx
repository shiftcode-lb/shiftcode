import React from 'react'

const Section = ({Title, image, text, text2, flex}) => {
  return (
    <div className={`flex flex-col  md:flex-row ${flex === "reverse" ? "md:flex-row-reverse" : ""}
    justify-between items-center px-3 py-10 gap-10 md:px-16 lg:px-24 xl:px-32  `}>
      {/** Left banner  */}
      <div className='flex flex-col gap-3 md:w-1/2 w-full'>
                        <h3 className='text-[40px] bold text-coprimary mb-[27px] leading-[40px]'>{Title}</h3>
                        <p className='text-[18px] text-primary font-normal leading-relaxed mb-[31px]'>{text}</p>
                        <br />
                        <p className='text-[18px] text-primary font-normal leading-relaxed mb-[31px]'>{text2}</p>
                        <div className="mt-5">
                            <a href="/contact-us" className="px-6 py-3 border-2 border-coprimary text-background rounded-[3px] bg-primary hover:bg-coprimary">
                              Contact Us
                            </a>
                        </div>
      </div>
      {/** Right banner */}
      <div className='md:w-1/2 w-full rounded-2xl'>
        <img src={image} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Section
