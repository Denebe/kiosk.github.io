import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import SlideSection from '../../components/SlideSection/SlideSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Home = () => {
    return (
      <>
          <HeroSection />
          <SlideSection {...homeObjOne}/>
          <SlideSection {...homeObjTwo}/>
          <SlideSection {...homeObjThree}/>
      </>
    )
}

export default Home
