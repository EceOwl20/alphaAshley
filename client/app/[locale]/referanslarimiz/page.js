import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import GridSection from './components/GridSection'

const page = () => {
  return (
    <div className='flex flex-col bg-[#f7f7f7]'>
      <Banner/>
      <GridSection/>
    </div>
  )
}

export default page
