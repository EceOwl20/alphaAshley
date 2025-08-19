"use client"
import React, { useState, useEffect, useRef } from 'react'
import img1 from "@/public/images/referanslar/ref1.png"
import img2 from "@/public/images/referanslar/ref2.png"
import img3 from "@/public/images/referanslar/ref3.png"
import img4 from "@/public/images/referanslar/ref4.png"
import img5 from "@/public/images/referanslar/ref5.png"
import img6 from "@/public/images/referanslar/ref6.png"
import img7 from "@/public/images/referanslar/ref7.png"
import img8 from "@/public/images/referanslar/ref8.png"
import img9 from "@/public/images/referanslar/ref9.png"
import img10 from "@/public/images/referanslar/ref10.png"
import img11 from "@/public/images/referanslar/ref11.png"
import img12 from "@/public/images/referanslar/ref12.png"
// import img13 from "@/public/images/referanslar/ref13.png"
import img15 from "@/public/images/referanslar/ref15.png"
import img16 from "@/public/images/referanslar/ref16.png"
import img17 from "@/public/images/referanslar/ref17.png"
import img18 from "@/public/images/referanslar/ref18.png"
import img19 from "@/public/images/referanslar/ref19.png"
import img20 from "@/public/images/referanslar/ref20.png"
import img21 from "@/public/images/referanslar/ref21.png"
// import img23 from "@/public/images/referanslar/ref23.jpg"
import img24 from "@/public/images/referanslar/ref24.png"
import img25 from "@/public/images/referanslar/ref25.png"
// import img26 from "@/public/images/referanslar/ref26.png"
import img27 from "@/public/images/referanslar/ref27.png"
import Image from 'next/image'
import Link from 'next/link'

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img15,img16,img17,img18,img19,img20,img21,img24,img25,img27];
const links = ["https://antalyasmiledesigns.com/","https://orisdentalturkey.com/","https://antalyasmiledesigns.com/","https://www.qualitypremium.dental/","https://ozdemirdentalcenter.com/","https://exclusivedentalturkey.com/","https://www.dentarmaturkey.com/tr/",
  "https://www.newerasmile.com/tr","https://dentprecious.com/","https://bronzedentalclinic.com/","https://www.andepol.com/","https://amazingsmileturkey.com/","https://goclinicturkey.com/",
  "https://yalindentalclinic.com/tr/","https://www.ozeldenaclinic.com/tr","https://idclinictr.com/","https://www.umutdentalclinicantalya.com/en","https://oriondentalhealth.com/","https://www.ortodentclinic.com/en","https://www.habitat-health.com/","https://www.dentlaracity.com/","https://www.panoramikdis.com.tr/"
] 

const GridSection = () => {
    const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // İlk kez görünür olduğunda disconnect et
        }
      });
    }, { threshold: 0.2 });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='flex w-screen items-center justify-center py-[80px]'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] sm:w-[85%] md:w-[85%] lg:w-[960px] xl:w-[1170px] gap-4 md:gap-16 lg:gap-6'>
    {images.map((image,index) => (
        <Link href={links[index]} target="_blank" 
        rel="noopener noreferrer" key={index} className={`flex bg-white items-center justify-center w-[100%] md:h-[330px] lg:w-[289.98px] lg:h-[289.98px] xl:w-[360px] xl:h-[360px] transition-all duration-700 transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" 
            }`}  style={{ transitionDelay: `${index * 0.2}s` }}>
          <Image src={image} alt='referance' width={image.width} height={image.height}/>
      </Link>
    ))}
      
    </div>
  </div>
  )
}

export default GridSection
