import Link from 'next/link'
import React from 'react'
import { useTranslations } from "next-intl";

const TextSection = () => {
  const t = useTranslations("ServicesPage");

  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[92%] lg:w-[70%] max-w-[975px] items-start justify-start text-start gap-[20px] lg:gap-[25px] font-roboto text-darkGray'>
        <h4 className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray'>{t("meetingTitle")}</h4>
        <p className='text-[16px] leading-[30px]  '>{t("meetingP1")}</p>
        <p className='text-[16px] leading-[30px] '>{t("meetingP2")}</p>
        <p className='text-[16px] leading-[30px] '>{t("meetingP3")}</p>
        <p className='text-[16px] leading-[30px] '>{t("meetingP4")}</p>
        <p className='text-[16px] leading-[30px] '>{t("meetingP5")}</p>
        
        <h4  className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray  mt-[20px]'>{t("salesTitle")}</h4>
        <p className='text-[16px] leading-[30px] '>{t("salesP1")}</p>
        <p className='text-[16px] leading-[30px] '>{t("salesP2")}</p>
        <p className='text-[16px] leading-[30px] '>{t("salesP3")}</p>
        <p className='text-[16px] leading-[30px] '>{t("salesP4")}</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>{t("detailsLink")}
        </Link>
        <h4  className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray  mt-[20px]'>{t("detailsLink")}</h4>
        <p className='text-[16px] leading-[30px] '>{t("marketingP1")}</p>
        <p className='text-[16px] leading-[30px] '>{t("marketingP2")}</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>{t("detailsLink")}
        </Link>
        <h4 className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray mt-[20px]'>{t("promotionTitle")}</h4>
        <p className='text-[16px] leading-[30px] '>{t("promotionP1")}</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>{t("detailsLink")}
        </Link>
      </div>
    </div>
  )
}

export default TextSection
