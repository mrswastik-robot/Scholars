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


const Hero = () => {

  const [user , loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
      
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
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}
      

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}

        <h1 className="bold-52 lg:bold-88">Scholars.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          {user ? ('you are logged in wao') : (
            <Button 
            type="button" 
            title="Get started" 
            variant="btn_green" 
            onClick={GoogleLogin}
          />
          )}
          
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
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

        <div>
        <Image
        src="/hero-main2.png"
        alt='hero-main'
        width={700}
        height={700}
        
        />
      </div>

      </div>
    </section>
  )
}

export default Hero