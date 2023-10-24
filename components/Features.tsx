import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center  bg-no-repeat py-24" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" ata-aos-duration="8000" id='feature'>
      <div className="max-container padding-container relative bg-transparent w-full flex justify-end">
        
        <div className="flex flex-1 -rotate-[14deg]  lg:min-h-[900px]">
          <Image
            src="/char1.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone "
          />
        
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%] bg-transparent">
          <div className='relative' >
            
            <h2 className="bold-40 lg:bold-64" >Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-purple-500">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-tran text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features