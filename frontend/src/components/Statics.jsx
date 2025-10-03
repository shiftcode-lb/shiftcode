import React,{useEffect, useState} from 'react'
import CardSmall from './CardSmall'
import { assets } from '../assets/assests'
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;



const Statics = () => {


  return (
    <div className=' relative flex flex-col md:flex-row justify-between items-center mt-10 gap-6 my-10
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
     
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
