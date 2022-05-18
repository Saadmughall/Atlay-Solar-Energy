import React from 'react'

const DetailCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-5 lg:space-y-0 lg:items-start lg:justify-start lg:flex-row'>
        <div className="flex items-center justify-around p-5 transition-colors duration-300 ease-out delay-75 bg-gray-900 border-4 rounded-full hover:transition-colors hover:border-4 hover:bg-white group hover:duration-300 hover:delay-75 hover:ease-in hover:border-blue-400 border-amber-400 ">
            {props.icon}
        </div>
        <div className="w-full space-y-4 lg:px-5 lg:py-2 ">
            <h1 className='text-2xl font-medium text-center text-gray-200 lg:text-left'>{props.title}</h1>
            <p className='text-base leading-loose text-center text-gray-300 lg:leading-6 lg:text-left'>{props.desc}</p>
        </div>
    </div>
  )
}

export default DetailCard