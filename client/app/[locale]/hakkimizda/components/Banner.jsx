import React from 'react'
import imgBanner from "@/public/images/hakkimizda/aboutBanner.jpg"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex w-screen h-[500px] lg:h-[400px] bg-black  mt-16 items-center justify-center' >
      <Image src={imgBanner} alt='' width="full" height={400} className='object-cover max-h-[400px] h-[400px] '/>
    </div>
  )
}

export default Banner
