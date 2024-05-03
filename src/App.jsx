import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Portfolio from './components/Portfolio'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Portfolio></Portfolio>
    </>
  )
}

export default App