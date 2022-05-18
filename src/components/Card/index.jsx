import React from 'react'

const Card = (props) => {
    
  return (
    <div className={`flex flex-col items-center  transition-all duration-300 delay-75 ease-linear lg:hover:shadow-xl lg:hover:transition-all lg:hover:duration-500 lg:hover:delay-75 lg:hover:ease-linear lg:hover:-translate-y-3 lg:hover:shadow-gray-700 justify-center w-full py-8 space-y-5 text-center align-bottom bg-yellow-400 rounded-lg lg:justify-start lg:${props.space} justify-self-center h-96 lg:h-72 lg:w-52`}>
        {props.icon}
        <h1 className='text-3xl font-medium text-gray-800 lg:whitespace-pre-line lg:text-3xl '>{props.title}</h1>
        <p className='flex flex-col text-base font-semibold text-gray-700 whitespace-pre-line lg:text-base '>{props.desc}</p>
    </div>
  )
}

export default Card