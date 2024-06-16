import React from 'react'
import Header from './Components/Header'
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'

const App = () => {
  return (
    <>
    <div>
        <Header />
        <ButtonGradient/>
        <Hero />
        <Benefits/>
    </div>
    </>
  )
}

export default App