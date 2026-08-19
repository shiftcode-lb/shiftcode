import React,{useEffect, useState} from 'react'
import CardSmall from './CardSmall'
import { assets } from '../assets/assests'

const Statics = () => {


  return (
    <div className=' relative flex flex-col md:flex-row justify-between items-center mt-10 gap-6 my-10
    section-x'>
     
      <CardSmall 
      cardImage={assets.samll_card1}
      cardNumber= "3"
      tag="+"
      cardTitle="Client Project"
      />
      <CardSmall 
      cardImage={assets.samll_card2}
      cardNumber= "24/7"
      cardTitle="Availability"
      />
      <CardSmall 
      cardImage={assets.samll_card3}
      cardNumber= "100%"
      cardTitle="Services Guarantee"
      />
      <CardSmall 
      cardImage={assets.samll_card4}
      cardNumber= "4"
      tag="+" 
      cardTitle="Team Members"
      />
    </div>
  )
}

export default Statics
