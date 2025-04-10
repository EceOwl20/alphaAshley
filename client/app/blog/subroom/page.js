import React from 'react'
import Image from 'next/image'

const Page = ({ img, header, array }) => {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex flex-col w-[80%] items-center justify-start border border-[#CCCCCC] p-[50px]">
        <Image src={img} alt="image" width={img.width} height={img.height} />
        <div className="flex flex-col gap-[15px] items-start justify-start text-start text-[18px] leading-[26px] font-montserrat text-darkGray">
          <h5 className="font-bold">{header}</h5>
          <p className="font-medium">
            Türkiye, son yıllarda sağlık turizminde giderek artan bir popülerlik kazanmaktadır.
            Doğal güzellikleri, tarihi zenginlikleri ve yüksek kaliteli sağlık hizmetleri ile Türkiye,
            dünya genelinde sağlık turistlerinin dikkatini çekmektedir. Peki, Türkiye'de sağlık
            turizmi ne sunuyor ve bu alandaki devlet teşvikleri nelerdir? İşte bu konuda daha fazla bilgi:
          </p>
          {array.map((item, index) => (
            <p key={index} className="font-medium">
              <span className="font-bold">{item.heading}: </span>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
