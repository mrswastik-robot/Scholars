'use client'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Camp from "@/components/Camp";
import Card from "@/components/Card";
import Features from "@/components/Features";

import Hero from "@/components/Hero";

import Events from "@/components/Events";
import Newsletter from "@/components/Newsletter";
import BackToTopButton from '@/components/BackToTopButton';




export default function Home({ }) {
  useEffect(() => {
    AOS.init({
         duration: 2000,
         once: true,
       })
 }, [])
  return (
    <>
      
      <Hero />
      
      <Camp />
      
      <Events/>
      
      {/* <Guide /> */}
      <Features />
      
      <Newsletter/>
      <BackToTopButton/>
      
     
    </>
  )
}
