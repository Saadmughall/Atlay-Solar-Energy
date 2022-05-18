import React from 'react'
import DetailCard from '../DetailCard'
import {AiOutlineArrowDown} from 'react-icons/ai';
import {BsFillCalculatorFill} from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';

const WhyGoSolar = () => {
  return (
    <div className='container flex flex-col items-center justify-center p-5 mx-auto lg:items-start lg:flex-row '>
      <div className="p-10 lg:w-2/5 ">
        <img src="/images/solar-plate.png" className='object-cover w-full h-full' alt="" />
      </div>
      <div className="flex flex-col p-10 space-y-5 lg:space-y-5 lg:w-1/2">
        <h1 className='text-5xl font-light text-gray-200 lg:mt-10 '>Why Go Solar ?</h1>
        <h1 className='text-2xl font-light text-gray-400'>Turn your energy into an asset</h1>
        <p className='text-sm text-gray-500 lg:text-base'>With all time low rates, you can finance solar for less than your current power bill.</p>
        <DetailCard icon={<AiOutlineArrowDown size={"30"} className="transition-colors duration-300 ease-out delay-75 group group-hover:transition-colors group-hover:duration-300 group-hover:delay-75 group-hover:ease-in group-hover:text-blue-400 text-amber-400 " strokeWidth={40}/>} title={"Eliminate your electricity bill."} desc={"For Canadians, electricity is one of the largest monthly expenses after the mortgage. You can invest in your future and eliminate your electricity bill by going solar today."}/>
        <DetailCard icon={<BsFillCalculatorFill size={"30"} className="transition-colors duration-300 ease-out delay-75 group-hover:transition-colors group-hover:duration-300 group-hover:delay-75 group-hover:ease-in group-hover:text-blue-400 text-amber-400 "/>} title={"Earn A Great Return On Investment"} desc={"Under normal conditions, a solar panel installation will reliably provide about a 10% return on investment annually."}/>
        <DetailCard icon={<FaReact size={"30"} className="transition-colors duration-300 ease-out delay-75 group-hover:transition-colors group-hover:duration-300 group-hover:delay-75 group-hover:ease-in group-hover:text-blue-400 text-amber-400 " strokeWidth={10}/>} title={"Avoid Rising Electricity Costs"} desc={"By going solar you are essentially freezing your electricity cost while normal electricity rates continue to rise over time."}/>
      </div>
    </div>
  )
}

export default WhyGoSolar