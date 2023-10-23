'use client'

import Camp from "@/components/Camp";
import Card from "@/components/Card";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

import Events from "@/components/Events";


export default function Home() {
  return (
    <>
      <Hero />
      <Card/>
      <Camp />

      <Events/>
      {/* <Guide /> */}
      <Features />
      <GetApp />
     
    </>
  )
}
