import React, {useEffect} from 'react'

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const textLink = document.getElementById('text-link');
            const logo = document.getElementById('logo');
            if(window.scrollY > 50)
                {
                    navbar?.classList.add('bg-white');
                    textLink?.classList.add('text-black');
                    logo?.classList.add('text-black');
                    
                }else {
                    navbar?.classList.remove('bg-white');
                    textLink?.classList.remove('text-black');
                    logo?.classList.remove('text-black');
                }
        };

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className='bg-thirdColor text-secondaryColor h-16 flex justify-evenly items-center sticky top-0' id='navbar'>
        <div>
            <h1 id='logo'>Kadek Krisna</h1>
        </div>
        <div>
            <ul className='flex gap-5' id='text-link'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar