import React from 'react'
import About from '../Component/About'
import Fact from '../Component/Fact'
import Testinomial from '../Component/Testinomial'
import HeroSection from '../Component/HeroSection'

export default function AboutUsPage() {
  return (
    <>
    <HeroSection title="About Us"/>
    <About/>
    {/* <Fact/> */}
    <Testinomial/>
    </>
  )
}
