import React from 'react'
import Banner from './components/Banner'
import TextSection from './components/TextSection'
import PersonCarousel from '../Homepage/PersonCarousel'

const page = () => {
  return (
    <div className='flex flex-col items-center overflow-hidden overflow-x-hidden gap-[50px] lg:gap-[100px]'>
      <Banner/>
      <TextSection/>
      <PersonCarousel/>
    </div>
  )
}

export default page
