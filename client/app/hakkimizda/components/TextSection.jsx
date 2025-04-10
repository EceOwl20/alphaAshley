import React from 'react'

const TextSection = () => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[92%] lg:w-[70%] max-w-[1170px] items-start justify-start text-start gap-[17px] lg:gap-[25px] font-normal font-roboto'>
        <h2 className='text-[24px] lg:text-[40px] text-darkGray leading-[46px]'>HAKKIMIZDA</h2>
        <p className='w-[100%] lg:w-[80%] text-[16px] text-[#939393] leading-[30px]'>Alpha Ashley Danışmanlık, sağlık sektöründe faaliyet gösteren firmalara stratejik danışmanlık hizmetleri sunan öncü bir kuruluştur. Sağlık turizmi alanında uzmanlaşmış olan şirketimiz, müşterilerimize yenilikçi çözümler ve sektördeki en güncel bilgi birikimini sağlayarak, onların başarılarını artırmaya odaklanmaktadır. Global sağlık pazarındaki dinamikleri yakından takip eden deneyimli ekibimiz, müşteri odaklı yaklaşımıyla iş ortaklarımıza stratejik yönlendirme, pazar araştırması, rekabet analizi ve operasyonel destek gibi kapsamlı hizmetler sunmaktadır. Alpha Ashley Danışmanlık, sektördeki değişen ihtiyaçlara hızlı ve etkili çözümler sunarak müşterilerinin rekabet avantajını artırmayı hedeflemektedir. Rekabetin fazla olduğu sağlık sektöründe, reklamların yetersiz kaldığı noktada kliniğinizin İngiltere’de ve Avrupa’da potansiyel hastalarına direkt ulaşmasını istiyorsanız, sizleri de hemen görüşmeye davet ediyoruz. Kliniğiniz için dental meeting paketleri hakkında bugün daha fazla bilgi alın.</p>
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
