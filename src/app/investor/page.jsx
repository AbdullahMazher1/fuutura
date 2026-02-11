import Hero from '@/components/investor/Hero'
import About from '@/components/investor/About'
import Approach from '@/components/investor/Approach'
import Model from '@/components/investor/Model'
import Opportunity from '@/components/investor/Opportunity'
import Overview from '@/components/investor/Overview'
import Vision from '@/components/investor/Vision'
import React from 'react'
import Control from '@/components/investor/Control'
import SubHero from '@/components/investor/SubHero'
import Explore from '@/components/investor/Explore'
import ProblemSection from '@/components/investor/ProblemSection'

const page = () => {
  return (
    <div>
      <SubHero/>
      <Hero />
      <ProblemSection/>
      <Overview/>
      <About/>
      <Model/>
      <Control/>
      <Approach />
      <Opportunity/>
      <Vision/>
      <Explore/>
    </div>
  )
}

export default page
