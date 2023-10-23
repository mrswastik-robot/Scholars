'use client'

import React from 'react'
import { Link} from 'react-scroll'

function Navbar() {
  return (
    <>
      <nav className=''>
        <ul className='flex flex-row space-x-12 justify-center mt-6'>
      <li>
        <img src="/public/scholar.svg" alt="" />
        </li>
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
      <button className='bg-purple-500 p-2 rounded-2xl -mt-1 px-8 text-white hover:bg-purple-700'>Sign Up</button>
    </ul>
    </nav>
    </>
  )
}

export default Navbar