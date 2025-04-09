import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import TextSection from './components/TextSection'

const page = () => {
  return (
    <div className='flex flex-col gap-[40px] lg:gap-[60px]'>
      <Banner/>
      <TextSection/>
    </div>
  )
}

export default page
