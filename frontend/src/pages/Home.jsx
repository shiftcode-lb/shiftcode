import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Section from '../components/Section'
import { assets } from '../assets/assests'
import Statics from '../components/Statics'


const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Section 
      Title="1st Section"
      text={assets.section1_text1}
      text2={assets.section1_text2}
      image={assets.container1_image}
      />
      <Statics />
      <Section 
      Title="1st Section"
      text={assets.section2_text2}
      image={assets.container1_image}
      flex="reverse"
      text2={assets.section2_text2}
      />
    </div>
  )
}

export default Home
