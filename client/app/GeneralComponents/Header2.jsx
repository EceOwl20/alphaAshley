"use client"
import { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import logo from "@/public/images/alpha-logo.png"
import Link from 'next/link'

const Header2 = () => {

    const [showHeader, setShowHeader] = useState(true);
    const prevScrollY = useRef(0);
  
    useEffect(() => {
      const handleScroll = () => {
        // Mevcut scroll pozisyonunu al
        const currentScrollY = window.scrollY;
  
        // Eğer yukarı kaydırıyorsa (yeni scroll konumu eski değerinden küçükse) header'ı göster, aksi halde gizle
        if (currentScrollY < prevScrollY.current) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
        // Önceki scroll konumunu güncelle
        prevScrollY.current = currentScrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className={`flex top-[50px] fixed w-screen items-center justify-center bg-white h-[72px] transition-transform duration-300 z-[999] ${
        showHeader ?  "translate-y-0" : "-translate-y-[calc(100%+50px)]"
      } bg-white shadow-md`}>
      <div className='flex items-center justify-between w-[95%]'>

        <div className='flex items-center justify-center gap-[15px]'>
            <Image src={logo} alt='logo' width={32} height={32}/>
            <h2 className='text-[18px] text-[#6F6F6F] font-bold'>Alpha Ashley Danışmanlık</h2>
        </div>

        <div className='flex items-center justify-center gap-[50px] text-[12px] text-[#232323] uppercase font-semibold font-montserrat' >
            <Link href="/">ANASAYFA</Link>
            <Link href="/hakkimizda">HAKKIMIZDA</Link>
            <Link href="/hizmetlerimiz">HİZMETLERİMİZ</Link>
            <Link href="/saglıkturizmi">SAĞLIK TURİZMİ</Link>
            <Link href="/referanslarimiz">REFERANSLARIMIZ</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/insankaynaklari">İNSAN KAYNAKLARI</Link>
        </div>


      </div>
    </div>
  )
}

export default Header2
