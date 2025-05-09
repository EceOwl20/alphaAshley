"use client"
import React, { useState, useEffect } from "react";
import Form from "../GeneralComponents/Form";

const Section2 = () => {
  const [animate, setAnimate] = useState(false);

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
      
      <div className={`flex w-[100%] lg:w-[50%] bg-[#1C1C1C] h-[420px] lg:h-[70vh] items-center justify-center transform transition-all duration-700 ease-out ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className='flex flex-col w-[92%] lg:w-[70%] gap-[25px] items-start justify-center text-satrt'>
          <h5 className='text-[#D6D5D5] text-[20px] lg:text-[32px] leading-[40px] font-montserrat font-medium'>Kliniğinizin kapıları İngiltere'ye açılsın!</h5>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>Alpha Ashley Danışmanlık, sağlık kuruluşlarına uçtan uca sağlık turizmi hizmetini sunan bir danışmanlık şirketidir. Sağlık turizminde satış personelinin eğitiminden, kurumun dijital mecrada varlığının oluşturulmasına;</p>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>Reklam stratejisinin belirlenmesinden sosyal medya ve arama motorlarında(SEO) reklamlarının yönetilmesine kadar geçen tüm süreçlerin yönetimini sağlar. Diğer danışmanlık şirketlerinden farkı, aynı zamanda sağlık turizmi alanında tecrübeli satış ekibi ile yurt dışındaki hastalarınızla dental meeting yapma imkanı sunarak, hasta sayısında ve klinik bilinirlik oranında garanti artış sağlamaktadır.</p>
          <p className='text-[#6F6F6F] text-[14px] font-roboto'>Detaylı bilgi için bizimle şimdi iletişime geçiniz.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Section2
