"use client"

import Image from 'next/image'
import Button from './Button'

import { useEffect } from 'react';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth, db} from '@/utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  getDoc,
  getDocs,
  setDoc
} from "firebase/firestore";

import Spline from '@splinetool/react-spline';
import { toast } from './ui/use-toast';

import {gilroyFont} from '@/fonts/font'
import {montserratFont} from '@/fonts/font'

const Hero = () => {

  const [user , loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        variant: "success",
      })

    } catch (error) {
      console.log(error);

      toast({
        title: "Error creating account.",
        description: "There was an error creating your account.",
        variant: "destructive",
      })
      
    }
  }

  useEffect(() => {
    if (user) {
      const createUserDocument = async () => {
        const userRef = doc(db, "users", user.uid);
        const docSnapshot = await getDoc(userRef);

        if (!docSnapshot.exists()) {
          try {
            await setDoc(userRef, {
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            });
          } catch (error) {
            console.error("Error creating user document:", error);
          }
        }
      };

      createUserDocument();
    }
  }, [user]);



  return (

    <>
    
    <section className=" max-container overflow-visible padding-container flex flex-col gap-20 py-10  md:gap-28 lg:pt-20 xl:flex-row" data-aos="fade-up"
     data-aos-duration="3000">
      {/* <div className="hero-map" /> */}
      

      <div className="   relative z-20 flex flex-1 lg:ml-20 flex-col xl:w-1/2 mt-5">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}

        <h1 className={` ${montserratFont.className} bold-52 lg:bold-88`}>Scholars.</h1>
        <p className={` ${gilroyFont.className} md:text-xl mt-6  xl:max-w-[520px]`}>
        Join our platform and unlock a world of innovation and events! Explore and participate in college events and hackathons from all over, empowering students from any campus to showcase their talents and compete in major events. Don't miss out on this opportunity to connect, create, and conquer.
        </p>



        <div className="flex flex-col w-full gap-3 mt-8 sm:flex-row hover:scale-95 transition">
          {user ? ('you are logged in wao') : (
            <Button 
            type="button" 
            title="Get started" 
            variant="btn_green" 
            onClick={GoogleLogin}
          />

          )}

        </div>
      </div>

      <div className="relative flex flex-1 items-end  overflow-visible">
        {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div> */}

        <div className='   sm:block hidden '>
        {/* <Image
        src="/charMain.png"
        alt='hero-main'
        width={600}
        height={600}
        className="transform -scale-x-100 mr-20"
        
        /> */}
        <Spline scene="https://prod.spline.design/29EN4TASRCYssAJo/scene.splinecode" />
      </div>

      <div className=' md:hidden'>
          <img
          src="/mbscreens-removebg.png"
          alt='hero-main'
          className=' w-full h-full'
          />
        </div>

      </div>
    </section>
    </>
  )
}

export default Hero