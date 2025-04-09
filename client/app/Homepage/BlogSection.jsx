"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import img2 from "@/public/images/homepage/blog-2.jpg"
import img3 from "@/public/images/homepage/blog-3.jpg"
import Link from "next/link";

const BlogSection = () => {
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
    <div className="flex w-screen items-center justify-center my-[100px]">
      <div className="flex flex-col w-[90%] lg:w-[70%] max-w-[1200px] items-center justify-center gap-[50px] lg:gap-[100px]">
        <div className="flex flex-col text-center items-center justify-center gap-[5px] font-montserrat">
          <h5 className="text-[#232323] text-[32px] mb-[15px] font-bold leading-[40px]">
            Blog
          </h5>
          <p className="text-[#939393] text-[12px] leading-[20px] font-medium ">
          Sizler için Araştırdık, İnceledik ve Yazdık
          </p>
          <div className="flex w-[100px] h-[1px] bg-[#FF214F]"></div>
        </div>

        <div className={`flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-[20px] text-[#6F6F6F] transition-transform duration-500 transform ease-out ${
              visible ? " translate-y-0" : " translate-y-10"
            }`}>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img1} alt="Antalya" width={img1.width} height={img1.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">2023’ün En Harika Tatil Şehri: Antalya</Link></div>
                </div>
                <div className="flex flex-col items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-7 leading-[24px] font-normal">Türkiye, son yıllarda sağlık turizminde giderek artan bir popülerlik kazanmaktadır. Doğal güzellikleri, tarihi zenginlikleri ve yüksek kaliteli sağlık hizmetleri ile Türkiye, dünya genelinde sağlık turistlerinin dikkatini çekmektedir. Peki, Türkiye'de sağlık turizmi ne sunuyor ve bu alandaki devlet teşvikleri nelerdir? İşte bu konuda daha fazla bilgi:.. </p><Link href="/" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link>
                </div>
            </div>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img2} alt="Antalya" width={img2.width} height={img2.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] pl-[20px] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">Türkiye'de Sağlık Turizmi: Keşfedilmeyi Bekleyen Bir Hazine</Link></div>
                </div>
                <div className="flex items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-6 leading-[24px] font-normal">Türkiye, tarih boyunca farklı medeniyetlere ev sahipliği yapmış zengin kültürel mirasıyla tanınırken, son yıllarda sağlık turizmi alanında da dikkatleri üzerine çekiyor. Peki, Türkiye'nin bu alandaki potansiyeli nedir ve sağlık turizminde neden tercih edilmeye başlandı?.. <Link href="/" className="text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
                </div>
            </div>

            <div className="flex flex-col w-full h-[478px] items-center justify-center py-[10px] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="flex w-full h-[238px] relative">
                <Image src={img3} alt="Antalya" width={img3.width} height={img3.height} className="w-full object-cover h-full"/>
                <div className="flex w-[80%] py-[10px] bg-white items-center justify-center absolute left-0 bottom-0"><Link href="/" className="text-[11px] font-montserrat hover:text-[#FF214F] cursor-pointer uppercase">Antalya'yı Keşfetmek: Sağlık Destinasyonu
                </Link></div>
                </div>
                <div className="flex items-start justify-center text-start p-[35px]">
                    <p className=" text-[14px] font-roboto line-clamp-6 leading-[24px] font-normal">Akdeniz'in muhteşem sahil şeridi boyunca yer alan Antalya, sadece nefes kesen doğal güzelliği ile değil, aynı zamanda yenilenme ve rahatlama arayan gezginler için çeşitli sağlık ve wellness deneyimleri sunmasıyla da dikkat çekiyor. İşte Antalya'nın neden sağlık... <Link href="/" className="text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
