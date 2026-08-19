import React from 'react'
import Hero from '../components/Hero'
import ProcessSection from '../components/ProcessSection'
import Services from '../components/Services'
import CTASection from '../components/CTASection'
import ProjectsSection from '../components/ProjectsSection'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='pt-[100px] md:pt-[88px]'>
      <Hero />
      <ProcessSection />
      <Services />
      <CTASection />
      <ProjectsSection />
      <Team />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
