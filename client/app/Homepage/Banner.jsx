import React from 'react'
import imgBanner from "@/public/images/homepage/alpha-anasayfa.png"

const Banner = () => {
  return (
    <div className='flex w-screen h-[50vh] lg:h-screen bg-cover bg-center mt-20 lg:mt-10' style={{ backgroundImage: `url(${imgBanner.src})` }} >
      
    </div>
  )
}

export default Banner
