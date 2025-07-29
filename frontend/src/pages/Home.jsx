import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Section from '../components/Section'
import { assets } from '../assets/assests'
import Statics from '../components/Statics'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Section 
      Title="1st Section"
      text={assets.section1_text1}
      text2={assets.section1_text2}
      image={assets.container2_image}
      />
      <Statics />
      <Services />
      <Section 
      Title="1st Section"
      text={assets.section2_text2}
      image={assets.container2_image}
      flex="reverse"
      text2={assets.section2_text2}
      />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home
