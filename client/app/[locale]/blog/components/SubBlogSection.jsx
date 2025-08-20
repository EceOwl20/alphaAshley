import React from 'react'
import Image from 'next/image'

const Page = ({ img, header,text,text2, array }) => {
  return (
    <div className="flex w-screen items-center justify-center mt-24">
      <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[60%] items-center justify-start border border-[#CCCCCC]">
        <Image src={img} alt="image" width={img.width} height={img.height} className='w-[70%] mt-10'/>
        <div className="flex flex-col gap-[15px] items-start justify-start text-start text-[18px] leading-[26px] font-montserrat text-darkGray p-4 md:p-8 lg:p-[50px]">
          <h5 className="font-bold">{header}</h5>
          <p className="font-medium">
          {text}
          </p>
          {array.map((item, index) => (
            <p key={index} className="font-medium">
              <span className="font-bold">{item.heading}: </span>
              {item.text}
            </p>
          ))}
           <p className="font-medium">
          {text2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;
