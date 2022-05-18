import React from 'react'

const HeroSection = () => {
  return (
    <div >
        <div className='container flex flex-col items-center justify-between lg:p-10 h-[50rem]  mx-auto lg:flex-row'>
            <div className="flex flex-col justify-center w-full space-y-10 lg:p-10 h-3/4">
                <h1 className='text-4xl font-bold text-center text-white lg:text-left lg:text-6xl'>We Invest Energy For <br /> Brighter Future</h1>
                <p className='text-base font-light text-center text-gray-200 lg:text-left lg:text-xl'>We invest in the future of planet and explore our range of services <br /> and get started by calling us today!</p>
            </div>
            <div className="relative flex justify-center w-full lg:p-10 h-3/4">
                <div className='absolute top-0 w-40 h-32 right-8 lg:w-44 lg:h-44 lg:right-20'>
                    <img src="/images/sun.png" className='object-cover lg:h-48 animate-bounce' alt="" />
                </div>
                <div className='absolute top-0 flex justify-center w-full h-full lg:w-full lg:h-full lg:left-0'>
                    <img src="/images/solar-banner.png" className='object-cover h-full'  alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection