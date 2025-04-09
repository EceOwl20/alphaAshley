import React from 'react'
import imgBanner from "@/public/images/homepage/alpha-anasayfa.png"

const Banner = () => {
  return (
    <div className='flex w-screen h-screen bg-cover bg-center' style={{ backgroundImage: `url(${imgBanner.src})` }} >
      
    </div>
  )
}

export default Banner
