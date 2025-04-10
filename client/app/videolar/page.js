import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import VideoGrid from './components/VideoGrid'

const page = () => {
  return (
    <div className='flex flex-col gap-[50px] lg:gap-[100px]'>
      <Banner/>
      <VideoGrid/>
    </div>
  )
}

export default page
