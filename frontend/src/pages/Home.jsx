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
import Team from '../components/Team'
import Form from '../components/Form'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Section 
      Title="Build, Design, and Launch — All in One Place"
      text={assets.section1_text1}
      text2={assets.section1_text2}
      image={assets.container2_image}
      />
      <Statics />
      <Services />
      <Section 
      Title="More Than Launch — We Stay With You"
      text={assets.section2_text2}
      image={assets.container2_image}
      flex="reverse"
      text2={assets.section2_text2}
      />
      <FAQ />
      <Team />
      <Pricing />
      <Form />
      <Footer />
    </div>
  )
}

export default Home
