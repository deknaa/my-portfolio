import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-primaryColor text-secondaryColor h-16 flex justify-evenly items-center'>
        <div>
            <h1>Kadek Krisna</h1>
        </div>
        <div>
            <ul className='flex gap-5'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar