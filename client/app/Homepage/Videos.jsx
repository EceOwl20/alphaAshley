import React from 'react'

const Videos = () => {
  return (
    <div className='flex w-screen lg:h-[50vh] items-center justify-center my-[100px]'>
      <div className='flex flex-col w-[90%] lg:w-[70%] items-center justify-center text-center gap-[50px] lg:gap-[100px]'>
        <div className='flex flex-col text-center items-center justify-center gap-[5px] font-montserrat'>
            <h5 className='text-[#232323] text-[32px] mb-[15px] font-bold leading-[40px]'>VİDEOLAR</h5>
            <p className='text-[#939393] text-[12px] leading-[20px] font-medium '>Bizimle Çalışmaktan Mutlu Olanlar</p>
            <div className='flex w-[100px] h-[1px] bg-[#FF214F]'></div>
        </div>
        <div className='flex flex-col sm:grid-cols-2 md:grid grid-cols-3 w-full items-center justify-center gap-[20px]'>
        <iframe
        className="w-full h-[280px]"
        src="https://www.youtube.com/watch?v=DIFkRzFypmQ&ab_channel=alphaashleydan%C4%B1%C5%9Fmanl%C4%B1k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

<iframe
        className="w-full h-[280px]"
        src="https://www.youtube.com/watch?v=DIFkRzFypmQ&ab_channel=alphaashleydan%C4%B1%C5%9Fmanl%C4%B1k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

<iframe
        className="w-full h-[280px]"
        src="https://www.youtube.com/watch?v=DIFkRzFypmQ&ab_channel=alphaashleydan%C4%B1%C5%9Fmanl%C4%B1k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
        
      </div>
    </div>
  )
}

export default Videos
