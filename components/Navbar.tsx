"use client"

import { useState } from "react"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import {auth, db} from '@/utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {

  const [user , loading] = useAuthState(auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignout = () => {
    auth.signOut(); // Sign out the user when the "Signout" button is clicked
  };


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/scholar.svg" alt="logo" width={104} height={49} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {user ? (
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Image src={user.photoURL} alt="user.ico" width={40} height={40} className=" rounded-full"/>
          </div>) : (
          <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_green"
        />

        )}
        {/* Dropdown menu */}
        {isDropdownOpen && user && (
          <div className="absolute right-0 mt-[6rem] bg-white p-2 rounded-xl shadow-2xl">
            <button
              onClick={handleSignout}
              className="w-full text-red-600 text-center py-2 hover:font-bold"
            >
              Signout
            </button>
          </div>
        )}
        
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar