import Image from 'next/image'
import React from 'react'
import img1 from "@/public/images/homepage/1.png"
import img2 from "@/public/images/homepage/2.png"
import img3 from "@/public/images/homepage/3.png"
import img4 from "@/public/images/homepage/4.png"
import img5 from "@/public/images/homepage/5.png"
import img6 from "@/public/images/homepage/6.png"
import img7 from "@/public/images/homepage/7.png"
import img8 from "@/public/images/homepage/8.png"

const GallerySection = () => {
  return (
    <div className='flex w-screen items-cneter justify-center'>
      <div className='grid grid-cols-4 w-[98%] bg-white gap-[15px]'>
        <Image alt='gallery' src={img1} width={img1.width} height={img1.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img2} width={img2.width} height={img2.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img3} width={img3.width} height={img3.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img4} width={img4.width} height={img4.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img5} width={img5.width} height={img5.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img6} width={img6.width} height={img6.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img7} width={img7.width} height={img7.height} className='w-full object-cover'/>
        <Image alt='gallery' src={img8} width={img8.width} height={img8.height} className='w-full object-cover'/>
      </div>
    </div>
  )
}

export default GallerySection
