import React from 'react'
import CardSmall from './CardSmall'
import { assets } from '../assets/assests'

const Statics = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-6
    px-3 py-10 md:px-16 lg:px-24 xl:px-32'>
      <CardSmall 
      cardImage={assets.samll_card1}
      cardNumber= "4+"
      cardTitle="Client Project"
      />
      <CardSmall 
      cardImage={assets.samll_card2}
      cardNumber= "2+"
      cardTitle="Global Projects"
      />
      <CardSmall 
      cardImage={assets.samll_card3}
      cardNumber= "100%"
      cardTitle="Services Guarantee"
      />
      <CardSmall 
      cardImage={assets.samll_card4}
      cardNumber= "3+"
      cardTitle="Team Members"
      />
    </div>
  )
}

export default Statics
