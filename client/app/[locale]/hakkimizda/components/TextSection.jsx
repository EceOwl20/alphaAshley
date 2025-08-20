import React from 'react'
import { useTranslations } from "next-intl";

const TextSection = () => {
   const t = useTranslations("AboutPage");

  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[92%] lg:w-[70%] max-w-[1170px] items-start justify-start text-start gap-[17px] lg:gap-[25px] font-normal font-roboto'>
        <h2 className='text-[24px] lg:text-[40px] text-darkGray leading-[46px]'>{t("title")}</h2>
        <p className='w-[100%] lg:w-[80%] text-[16px] text-[#939393] leading-[30px]'>{t("description")}</p>
        <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/eMEHEsDbG1E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  )
}

export default TextSection
