import React from 'react'
import Header from './Header'
import HeaderOne from './HeaderOne'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import SevenSection from './SevenSection'
import Slider from './Carousel/Slider'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <HeaderOne />
     <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Slider />
    <SixthSection />
    <SevenSection />
    <Footer />
    </>
  )
}

export default Home