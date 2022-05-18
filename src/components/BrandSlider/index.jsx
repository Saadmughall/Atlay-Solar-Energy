import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Brand_Slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
      };
  return (
    <div className='container p-10 mx-auto '>
    <div className=' h-44'>
    
    <Slider {...settings} >
      <div className='bg-gray-100 h-36 w-80'>
        <img src="/images/canadianSolar.png" className='object-cover h-32 justify-self-center w-80' alt="" />
      </div>
      <div className='bg-gray-100 h-36 w-44'>
      <img src="/images/inverexSolar.png" className='object-cover h-32 w-80'   alt="" />
      </div>
      <div className='bg-gray-100 h-36 w-44'>
      <img src="/images/jinkoSolar.png" className='object-cover h-32 w-80' alt="" />
      </div>
      <div className='bg-gray-100 h-36 w-44'>
      <img src="/images/OsakaLogo.png" className='object-cover h-32 w-80' alt="" />
      </div>
      <div className='bg-gray-100 h-36 w-44'>
      <img src="/images/phoenix.png" className='object-cover h-32 w-80' alt="" />
      </div>
      
    </Slider>
    </div>
  </div>
  )
}

export default Brand_Slider