import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Events/>
      {/* <Guide /> */}
      <Features />
      <GetApp />
    </>
  )
}
