import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='container flex flex-col items-center justify-center p-10 mx-auto space-y-10 '>
        <h1 className='text-5xl font-light text-center text-gray-200 uppercase'>Shop for <span className='text-5xl font-semibold text-yellow-400'>Solar</span> Products </h1>
        <div className='flex flex-col justify-center p-10 space-x-0 space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row'>
            <ProductCard img={"/images/aerox.png"} title={"CROWN Inverter 3.6KW"} prize={"1,50000 PK"}/>
            <ProductCard img={"/images/solar-plate.png"} title={"Inverex Aerox 1.2KW"} prize={"1,50000 PK"}/>
            <ProductCard img={"/images/nitrox.png"} title={"NitroX Hybrid 10KW 3PH"} prize={"1,50000 PK"}/>
        </div>
    </div>
  )
}

export default Product