'use client'

import React from 'react'
import { Link} from 'react-scroll'

function Navbar() {
  return (
    <>
    
      <nav className='flex flex-row justify-center gap-36 mt-4' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <a href="/">
        <img src="/scholar.svg" alt="" className='w-24 h-24 -mt-4 hover:scale-125 transition' />
        </a>
        <ul className='flex flex-row space-x-12 justify-center mt-6'>
        
      <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
        <Link to='/'>Home</Link>
        </li>
      <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
       <Link to='cards' smooth={true} duration={1000} > Events </Link>
        </li>
      <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
        <Link to='about' smooth={true} duration={1000}>About</Link>
        </li>
      <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
       <Link to='feature' smooth={true} duration={1000}> Features </Link>
        </li>
        <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
       <Link to='newsletter' smooth={true} duration={1000}> Newsletter </Link>
        </li>
      
    </ul>
    <button className='bg-[#9333EA] p-2 h-14 mt-2 rounded-full px-8 text-white hover:bg-purple-700'>Sign Up</button>
    </nav>
   
    </>
  )
}

export default Navbar