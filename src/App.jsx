import React from 'react'
import Header from './Components/Header'
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'
import Footer from './Components/Footer'
import Gall from './Components/Gall'
import ContactUs from './Components/Contact'
import Testimonial from './Components/Testimonial'

const App = () => {
  return (
    <>
    <div>
        <Header />
        <ButtonGradient/>
        <Hero />
        <Benefits/>
        <Gall/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
    </div>
    </>
  )
}

export default App