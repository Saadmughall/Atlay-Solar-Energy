import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import HeroSection from '../HeroSection';
import ElementorSection from '../ElementorSection/index';
import WhyGoSolar from '../WhyGoSolar';
import Product from '../Products';
import Brand_Slider from '../BrandSlider';
import Footer from '../Footer';




const NavItem = props =>{
   return <ul>
       <li className='px-2 py-1 text-lg font-light tracking-wider text-white uppercase transition-colors duration-500 ease-linear delay-75 rounded hover:transition-colors hover:duration-500 hover:delay-75 hover:ease-linear hover:text-white hover:underline hover:underline-offset-8 hover:decoration-yellow-400'>
            <Link to={props.to}>
                {props.text}
            </Link>
       </li>
   </ul>
}


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className='mx-auto '>
        <nav className= 'sticky top-0 left-0 right-0 z-50 bg-gray-900 '>
          <div className={`p-3 px-4 mx-2 lg:mx-32 sm:px-6 lg:px-8`}>
            <div className="flex items-center justify-between h-16">
              <div className="container flex items-center justify-between mx-auto">
                <div className="flex items-center justify-center text-center ">
                    <h1 className='text-3xl font-normal text-white lg:text-white lg:text-xl'>Atlay <span className='font-bold text-yellow-400 uppercase lg:text-4xl'>Solar</span> Energy</h1>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <NavItem text={"Home"} to={"/"}/>
                    <NavItem text={"About"} to={"About"}/>
                    <NavItem text={"Contact Us"} to={"Contact"}/>
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavItem text={"Home"} to={"/"}/>
                    <NavItem text={"About"} to={"About"}/>
                    <NavItem text={"Contact Us"} to={"Contact"}/>
                </div>
              </div>
            )}
          </Transition>
        </nav>
        <HeroSection/>
        <ElementorSection/>
        <WhyGoSolar/>
        <Product/>
        <Brand_Slider/>
        <Footer/>
       </div>

    );
  }
  
  export default Nav;