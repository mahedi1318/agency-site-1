import React from 'react'
import Hero from '../components/Home part/Hero'
import Service from '../components/Home part/service part/Service'
import Project from '../components/Home part/Project part/Project'
import OurClient from '../components/Home part/OurClint-part/OurClient'
import HowItWorks from '../components/Home part/How It Works section/HowItWorks'

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <HowItWorks />
      <Project />
      <OurClient />
    </>
  )
}

export default Home
