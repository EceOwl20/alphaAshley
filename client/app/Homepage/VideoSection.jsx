import React from 'react'
import img from "@/public/images/homepage/video_kapak.png"
import playIcon from "@/public/images/homepage/icon-play.png"
import Image from 'next/image'
import Link from 'next/link'

const VideoSection = () => {
  return (
    <div className='flex w-screen lg:min-h-[253px] bg-contain lg:bg-cover bg-center lg:h-[50vh] parallax items-center justify-center relative mt-[50px] lg:mt-[100px] h-[200px]' style={{ backgroundImage: `url(${img.src})` }} >
      {/* <Image alt='' src={img} width={img.width} height={img.height} className='object-cover h-[30vh] md:h-[38vh] object-center min-h-[200px] w-full lg:h-[50vh] xl:h-[54vh] '/> */}
      <div className='absolute bg-black/30 inset-0 z-[1]'></div>
     <Link href="https://www.youtube.com/watch?v=Y1FG3fPVvPk&ab_channel=alphaashleydan%C4%B1%C5%9Fmanl%C4%B1k" className='z-20 flex absolute inset-0 items-center justify-center'  rel="norefferer nofollower"
                  target="_blank"> <Image src={playIcon} alt="playIcon" width={166} height={166} className='w-[108px] h-[108px] lg:w-[166px] lg:h-[166px]'/></Link>
    </div>
  )
}

export default VideoSection
