import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}
      

      <div className="relative z-20 flex flex-1 ml-20 flex-col xl:w-1/2">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}

        <h1 className="bold-52 lg:bold-88">Scholars.</h1>
        <p className="regular-20 mt-6 text-gray-30 xl:max-w-[520px]">
        Join our platform and unlock a world of innovation and events! Explore and participate in college events and hackathons from all over, empowering students from any campus to showcase their talents and compete in major events. Don't miss out on this opportunity to connect, create, and conquer.
        </p>

        <div className="flex flex-col w-full gap-3 mt-8 sm:flex-row">
          <Button 
            type="button" 
            title="Get started" 
            variant="btn_green" 
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
        src="/charMain.png"
        alt='hero-main'
        width={600}
        height={600}
        className="transform -scale-x-100 mr-20"
        
        />
      </div>

      </div>
    </section>
  )
}

export default Hero