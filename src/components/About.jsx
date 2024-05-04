import React from 'react'
import deknaImage from '../assets/images/dekna.png'

// Logo Social Media
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'
import dribbble from '../assets/icons/dribbble.png'
import instagram from '../assets/icons/instagram.png'
import behance from '../assets/icons/behance.png'

// Logo Skills
import reactIcons from '../assets/icons/reactjs.png'
import bootstrap from '../assets/icons/bootstrap.png'
import tailwind from '../assets/icons/TailwindCSS.png'
import laravel from '../assets/icons/laravel.png'
import nextjs from '../assets/icons/next-js.png'
import vue from '../assets/icons/vue-js.png'

const About = () => {
  return (
    <div className='bg-primaryColor'>
        <div className='flex items-center flex-col pt-[20%] md:ms-[20%] md:flex-row md:pt-[8%]'>

            <div className='w-1/2'>
              <div className='flex items-center'>
                <h2 className='text-white text-6xl font-bold'>About Me</h2>
                <hr className='w-1/5 mt-5 ms-5'/>
              </div>
              <div className='text-secondaryColor'>
                <p>Kadek Krisna | Junior Front End Developer</p>
              </div>
              <div>
                <p className='text-white mt-4'>My name is <b>Kadek Krisna</b>, I am a student who is currently studying for a bachelor's degree by taking the information systems study program, I am someone who likes learning new things, especially in honing my hard skills and soft skills, I also like doing business and am currently focused on to learn more about <b>Front End Development</b></p>
              </div>
              <div className='text-white flex items-center gap-5 mt-10' id='social_media'>
                <a href="#"><img src={github} alt="Github" className='w-[45px]' /></a>
                <a href="#"><img src={instagram} alt="Instagram" className='w-[45px]' /></a>
                <a href="#"><img src={behance} alt="Behance" className='w-[45px]' /></a>
                <a href="#"><img src={dribbble} alt="Dribbble" className='w-[45px]' /></a>
                <a href="#"><img src={linkedin} alt="Linkedin" className='w-[45px]' /></a>
                <a href="#" className='bg-secondaryColor text-primaryColor p-2 font-bold rounded-md'>Download CV</a>
              </div>
              <div className='flex gap-16 items-center'>
              <div className='text-white mt-10' id='tech_stack'>
                <h2 className='text-secondaryColor text-3xl font-bold'>My Skill</h2>
                <div className='flex gap-6 mt-4'>
                  <img src={reactIcons} alt="" className='w-[45px]' />
                  <img src={bootstrap} alt="" className='w-[45px]' />
                  <img src={tailwind} alt="" className='w-[45px]' />
                  <img src={laravel} alt="" className='w-[45px]' />
                </div>
              </div>
              <div className='text-white'>
                <h2 className='text-secondaryColor text-3xl font-bold mt-8'>Currently Learning</h2>
                <div className='flex gap-6 mt-4'>
                  <img src={nextjs} alt="" className='w-[45px]' />
                  <img src={vue} alt="" className='w-[45px]' />
                </div>
              </div>
              </div>
            </div>

            <div className='w-1/2'>
                <img src={deknaImage} alt=""/>
            </div>

        </div>
    </div>
  )
}

export default About