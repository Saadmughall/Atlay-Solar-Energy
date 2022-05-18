import React from 'react'

const ProductCard = (props) => {
  return (
    <div class="flex lg:space-x-5 hover:transition-transform hover:-translate-y-5 hover:duration-300 hover:delay-75 hover:ease-linear transition-transform duration-300 delay-75">
      <div class="w-96  xl:w-96 md:w-80 ">
        <div class="bg-yellow-400 p-6 rounded-lg flex flex-col justify-center items-center">
          <img class="h-80 rounded  object-cover object-center mb-6" src={props.img} alt="content"/>
          <h3 class="tracking-wide text-gray-800 text-xl font-medium ">{props.title}</h3>
          <h2 class="text-lg text-gray-800 font-medium title-font mb-4">{props.prize}</h2>
          <button className='px-16 py-5 text-white uppercase transition-colors duration-300 ease-linear delay-75 bg-gray-900 rounded-md hover:font-semibold hover:text-gray-800 hover:transition-colors hover:duration-300 hover:delay-75 hover:bg-white'>Buy Now</button>  
        </div>
      </div>
    </div>  
  )
}

export default ProductCard