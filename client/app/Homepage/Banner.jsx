import React from 'react'
import ingBanner from "@/public/images/homepage/alpha-anasayfa.png"

const Banner = () => {
  return (
    <div className='flex w-screen h-screen bg-cover bg-center' style={{ backgroundImage: `url(${ingBanner.src})` }} >
      
    </div>
  )
}

export default Banner
