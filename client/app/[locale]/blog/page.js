import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import BlogGrid from './components/BlogGrid'

const page = () => {
  return (
    <div className='flex flex-col gap-[50px] lg:gap-[100px]'>
      <Banner/>
      <BlogGrid/>
    </div>
  )
}

export default page
