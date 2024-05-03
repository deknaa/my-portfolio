import React from 'react'
import deknaImage from '../assets/images/dekna.png'

const HeroSection = () => {
  return (
    <div className='bg-primaryColor'>

    <div className='flex items-center flex-col pt-[20%] md:ms-[20%] md:flex-row md:pt-0'>

      <div className='w-1/2'>
        <h1 className='text-white text-6xl'>Hi I'm <br /><span className='font-bold text-secondaryColor'>Kadek Krisna</span></h1>
        <p className='text-white mt-4'>I am a student who likes the world of IT, I really like learning new things <br />especially in my hard skills and soft skills, I have the desire to become a <br /> software engineer</p>
        <a href="#" className='bg-secondaryColor text-primaryColor p-2 rounded-lg inline-block mt-3'>See My Work</a>
      </div>

      <div className='w-1/2 text-white'>
        <img src={deknaImage} alt="" />
      </div>

    </div>

    </div>
  )
}

export default HeroSection