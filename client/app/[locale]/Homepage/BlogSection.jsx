"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import img2 from "@/public/images/homepage/blog-2.jpg"
import img3 from "@/public/images/homepage/blog-3.jpg"
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogSection = () => {
  const t = useTranslations("Homepage.BlogSection");
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
    <div ref={containerRef} className="flex w-screen items-center justify-center my-[100px]">
      <div className="flex flex-col w-[90%] lg:w-[70%] max-w-[1200px] items-center justify-center gap-[50px] lg:gap-[100px]">
        <div className="flex flex-col text-center items-center justify-center gap-[5px] font-montserrat">
          <h5 className="text-[#232323] text-[32px] mb-[15px] font-bold leading-[40px]">
            {t("blogTitle")}
          </h5>
          <p className="text-[#939393] text-[12px] leading-[20px] font-medium ">
          {t("blogSubtitle")}
          </p>
          <div className="flex w-[100px] h-[1px] bg-[#FF214F]"></div>
        </div>

        <div className={`flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-[20px] text-[#6F6F6F] transition-transform duration-500 transform ease-out ${
              visible ? " translate-y-0" : " translate-y-24"
            }`}>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img1} alt="Antalya" width={img1.width} height={img1.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/blog/blog-antalya" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">{t("article1.title")}</Link></div>
                </div>
                <div className="flex flex-col items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-7 leading-[24px] font-normal">{t("article1.description")} </p><Link href="/blog/blog-antalya" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link>
                </div>
            </div>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img2} alt="Antalya" width={img2.width} height={img2.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] pl-[20px] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/blog/blog-saglik-turizmi" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">{t("article2.title")}</Link></div>
                </div>
                <div className="flex items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-6 leading-[24px] font-normal">{t("article2.description")} <Link href="/blog/blog-saglik-turizmi" className="text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
                </div>
            </div>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img3} alt="Antalya" width={img3.width} height={img3.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/blog/blog-saglik-destinasyonu" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">{t("article3.title")}
                </Link></div>
                </div>
                <div className="flex items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-6 leading-[24px] font-normal">{t("article3.description")}<Link href="/blog/blog-saglik-destinasyonu" className="text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
