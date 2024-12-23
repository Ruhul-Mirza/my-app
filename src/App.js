import React from 'react'
import VerticalPills from './components/verticalpills'
import TestimonialSlider from './components/testimonial'
import HeroSection from './components/herosectionfoot'
import Footer from './components/footer'
import Hero from './components/hero'
import Header from './components/header'
import EcommerceSection from './components/ecommercesection'
import ProductSection from './components/productsection'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <EcommerceSection/>
    <ProductSection/>
    <VerticalPills/>
    <TestimonialSlider/>
    <HeroSection/>
    <Footer/>
    </>
  )
}

export default App