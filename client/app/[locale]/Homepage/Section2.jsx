"use client"
import React, { useState, useEffect } from "react";
import Form from "../GeneralComponents/Form";
import { useTranslations } from "next-intl";

const Section2 = () => {
  const [animate, setAnimate] = useState(false);
    const t = useTranslations("Homepage.Section2");

  useEffect(() => {
    // Component mount olduğunda animasyonu tetikliyoruz.
    setAnimate(true);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row w-screen items-start justify-center h-auto'>
      <div className={`flex transform transition-all duration-700 ease-out ${
          animate ? "translate-x-0" : "-translate-x-full"
        }`}>
       <Form/>
      </div>
      
      <div className={`flex w-[100%] lg:w-[50%] bg-[#1C1C1C] h-[420px] lg:h-[70vh] items-center justify-center  min-h-[460px] transform transition-all duration-700 ease-out ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className='flex flex-col w-[92%] lg:w-[70%] gap-[25px] items-start justify-center text-start'>
           <h5 className='text-[#D6D5D5] text-[20px] lg:text-[32px] leading-[40px] font-montserrat font-medium'>
            {t("title")}
          </h5>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>{t("p1")}</p>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>{t("p2")}</p>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>{t("p3")}</p>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>{t("p4")}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Section2
