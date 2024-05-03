import React from 'react'
import deknaImage from '../assets/images/dekna.png'

const HeroSection = () => {
  return (
    <div className='bg-thirdColor flex justify-center items-center h-[85vh]'>
      <div className='flex flex-col ms-[10%] me-[10%]'>
        <h1 className='text-white text-5xl md:text-6xl text-center'>Hi I'm <br /><span className='text-secondaryColor'>Kadek Krisna</span></h1>
        <p className='text-white text-sm md:text-base mt-3 text-center'>I am a student who likes the world of IT, I really like learning new things <br />especially in my hard skills and soft skills, I have the desire to become a <br /> software engineer</p>
        <a href="#" className='bg-secondaryColor text-primaryColor p-2 rounded-lg inline-block mt-7 text-center font-bold'>See My Work</a>
      </div>
    </div>
  )
}

export default HeroSection