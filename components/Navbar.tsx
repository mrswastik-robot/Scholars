'use client'

import React from 'react'
import Image from 'next/image';
import { Link} from 'react-scroll'

import { ThemeToggler } from './ThemeToggle'

import {db ,auth} from '@/utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import MobileSidebar from './MobileSidebar';


function Navbar() {

  const [user , loading] = useAuthState(auth);

  return (
    <>
    
      <nav className='flex flex-row justify-between mx-auto md:max-w-7xl md:gap-36 mt-4' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

      <div className=' lg:hidden'>
          <MobileSidebar />
      </div>

      <div className=' sm:block hidden'>
        <a href="/">
          <img src="/scholar.svg" alt="" className='w-24 h-24 -mt-4 hover:scale-125 transition' />
        </a>
      </div>
      


      <div className=' hidden lg:flex'>
          <ul className='flex flex-row space-x-12 justify-center mt-6 '>
            
            <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
              <Link to='/'>Home</Link>
              </li>
            <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
              <Link to='about' smooth={true} duration={1000}>Glimpses</Link>
              </li>
            <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
            <Link to='cards' smooth={true} duration={1000} > Events </Link>
              </li>
            <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
            <Link to='feature' smooth={true} duration={1000}> Features </Link>
              </li>
              <li className='cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold'>
            <Link to='newsletter' smooth={true} duration={1000}> Newsletter </Link>
              </li>
            
          </ul>
      </div>


      <div className=' flex gap-4 '>
          <ThemeToggler className='my-auto'/>
          {user ? (
          // <Image className='rounded-full' src={user.photoURL} width={40} height={40} alt='user'/>
          <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user.photoURL!} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
          <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=' text-red-600' onClick={() => auth.signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>

          </DropdownMenu>          
          ) : (
            <button className='bg-[#9333EA] p-2 h-14 my-auto rounded-full px-8 text-white hover:bg-purple-700 hover:scale-95 transition'>Sign Up</button>
          )}
      </div>  
     
    </nav>
   
    </>
  )
}

export default Navbar