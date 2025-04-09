import React from 'react'
import img from "@/public/images/homepage/video_kapak.png"
import playIcon from "@/public/images/homepage/icon-play.png"
import Image from 'next/image'
import Link from 'next/link'

const VideoSection = () => {
  return (
    <div className='flex w-screen min-h-[253px] lg:h-[50vh] bg-cover bg-center parallax items-center justify-center relative mt-[50px] lg:mt-[100px]' style={{ backgroundImage: `url(${img.src})` }}>
      <div className='absolute bg-black/30 inset-0 z-[1]'></div>
     <Link href="/https://www.youtube.com/watch?v=Y1FG3fPVvPk&ab_channel=alphaashleydan%C4%B1%C5%9Fmanl%C4%B1k" className='z-20 flex'  rel="norefferer nofollower"
                  target="_blank"> <Image src={playIcon} alt="playIcon" width={166} height={166} /></Link>
    </div>
  )
}

export default VideoSection
