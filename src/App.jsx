import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
    </>
  )
}

export default App