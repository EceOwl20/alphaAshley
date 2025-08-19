import Link from 'next/link'
import React from 'react'

const TextSection = ({header,text,link}) => {
  return (
    <div className='flex w-screen items-center justify-center py-5 lg:py-0 lg:h-[70vh]'>
      <div className='flex flex-col w-[90%] lg:w-[50%] items-center justify-center text-center gap-[20px] lg:gap-[45px]'>
        <h4 className='text-[24px] lg:text-[32px] font-semibold text-darkGray leading-[40px]'>{header}</h4>
        <p className='max-w-[912px] text-[20px] lg:text-[24px] text-lightGray font-normal leading-[24px]'>{text}</p>
        {link && (
           <p className='max-w-[912px] text-[20px] lg:text-[24px] text-lightGray font-normal leading-[24px]'> - CV'lerinizi  <Link  href="mailto:info.alphaashley@gmail.com" className='hover:text-[#ff214f]'>info.alphaashley@gmail.com{" "}</Link>mail adresine gönderebilirsiniz.</p>
        )}
      </div>
    </div>
  )
}

export default TextSection
