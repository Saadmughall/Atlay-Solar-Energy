import React from 'react'
import Card from '../Card'
import {AiFillHome} from 'react-icons/ai'
import {FaHardHat} from 'react-icons/fa'
import {FaHammer} from 'react-icons/fa'

const ElementorSection = () => {
  return (
    <div className='container grid gap-10 p-3 mx-auto lg:px-80 lg:py-10 lg:grid-cols-3 lg:grid-flow-row lg:bottom-52'>
        <Card icon={<AiFillHome size={50} color={'white'}/>} title={"Solar Readiness"} desc={`Roof Suitability  \nConsumption  \nIncentives`} space={"space-y-3"}/>
        <Card icon={<FaHardHat size={50} color={'white'}/>} title={"Project \nDesign"} desc={`Visual Renderings \nEnergy Production \nCosts & Savings`} space={"space-y-3"}/>
        <Card icon={<FaHammer size={50} color={'white'}/>} title={"Installation"} desc={`Grid Approval \nEngineering \nMunicipal Permits`} space={"space-y-7"}/>
        
    </div>
  )
}

export default ElementorSection