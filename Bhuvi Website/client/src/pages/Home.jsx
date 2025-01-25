import React from 'react'
import Services from '../components/Services'
import Hero from '../components/Hero'
import CTA from '../components/CTA'



const Home = () => {
  return (
    <main className='main'>
      <div className='home'>
        <Hero />
        <Services />
        <CTA />
      </div>
    </main>
  )
}

export default Home