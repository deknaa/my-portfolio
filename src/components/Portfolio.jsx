import React from 'react'

const Portfolio = () => {
  return (
    <div className='bg-thirdColor'>
        <div className='flex items-center justify-center flex-col text-white pt-11'>
            <h2 className='text-6xl font-bold'>Portfolio</h2>
        </div>
        <div className='flex items-center justify-center text-secondaryColor mt-2 pb-10'>
          <hr className='w-1/12 mr-3' />
          <p>There is all of my portfolio</p>
          <hr className='w-1/12 ms-3' />
        </div>

        {/* Portfolio Section */}
        <div className='ms-[10%] me-[10%] pb-20'>
          <div className='flex gap-3 mb-3 items-center'>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              <p className='flex items-center justify-center text-center'>Kotak 1</p>
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 2
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 3
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 4
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 5
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 6
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 7
            </div>
            <div className='bg-white w-[25%] h-[25vh] rounded-lg'>
              kotak 8
            </div>
          </div>
        </div>

    </div>
  )
}

export default Portfolio