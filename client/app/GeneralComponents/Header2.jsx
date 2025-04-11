"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/images/alpha-logo.png";
import Link from "next/link";
import { IoMenu,IoClose } from "react-icons/io5";


const Header2 = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Eğer scrollY eşik değerinin (örneğin 100px) altındaysa isNearTop true
      setIsNearTop(currentScrollY < 100);

      // Scroll yönüne göre showHeader ayarla
      if (currentScrollY < prevScrollY.current) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Eğer sayfa en üstteyse (isNearTop true), header2 sabit header'ın altına (top:50px) konumlanır.
   * Eğer sayfa scrollY >= 100:
   *   - Yukarı scroll yapılırsa (showHeader true) header2, top:0'da görünür.
   *   - Aşağı scroll yapılırsa (showHeader false) header2, top:0'da tamamen gizlenir (örn. -translate-y-full).
   */
  const headerClass = isNearTop
    ? "top-[50px] translate-y-0" 
    : showHeader 
      ? "top-0 translate-y-0" 
      : "top-0 -translate-y-full";

  return (
    <div
      className={`flex fixed w-screen items-center justify-center  bg-white h-[66px] lg:h-[72px] transition-transform duration-300 z-[999] shadow-md  ${headerClass}`}
    >
      <div className="flex items-center justify-between w-[95%]">
        <div className="flex items-center justify-center gap-[15px]">
          <Image src={logo} alt="logo" width={32} height={32} />
          <h2 className="text-[18px] text-[#6F6F6F] font-bold">
            Alpha Ashley Danışmanlık
          </h2>
        </div>
      {/* Mobil menü butonu sadece lg'de gizli */}
      <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <IoClose size={26} color="#6f6f6f" />
            ) : (
              <IoMenu size={26} color="#6f6f6f" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-[50px] text-[12px] text-[#232323] uppercase font-semibold font-montserrat">
          <Link href="/">ANASAYFA</Link>
          <Link href="/hakkimizda">HAKKIMIZDA</Link>
          <Link href="/hizmetlerimiz">HİZMETLERİMİZ</Link>
          <Link href="/saglikturizmi">SAĞLIK TURİZMİ</Link>
          <Link href="/referanslarimiz">REFERANSLARIMIZ</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/insankaynaklari">İNSAN KAYNAKLARI</Link>
        </div>
      </div>

      {/* Mobil Menü: lg dışı görünür */}
      {mobileMenuOpen && (
  <div 
    className={`flex flex-col w-full bg-[rgba(23,23,23,0.95)] absolute top-full overflow-y-auto left-0 max-h-[335px] font-montserrat items-start justify-start text-start z-[999] 
      !transform !transition-[margin-right] !duration-500 !ease-in-out 
      ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
  >
    <Link 
      href="/" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex items-center justify-start pl-[15px] py-[12px] text-start border-b border-[#6F6F6F]/50"
    >
      ANASAYFA
    </Link>
   
    <Link 
      href="/hakkimizda" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      HAKKIMIZDA
    </Link>
   
    <Link 
      href="/hizmetlerimiz" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      HİZMETLERİMİZ
    </Link>
  
    <Link 
      href="/saglikturizmi" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      SAĞLIK TURİZMİ
    </Link>
   
    <Link 
      href="/referanslarimiz" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      REFERANSLARIMIZ
    </Link>
  
    <Link 
      href="/blog" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      BLOG
    </Link>
    
    <Link 
      href="/insankaynaklari" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
      İNSAN KAYNAKLARI
    </Link>
    <Link 
      href="/videolar" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
     VİDEOLAR
    </Link>
    <Link 
      href="#iletisim" 
      onClick={() => setMobileMenuOpen(false)} 
      className="text-[12px] w-full text-white font-medium uppercase h-[50px] flex pl-[15px] py-[12px] border-b border-[#6F6F6F]/50"
    >
     İLETİŞİM
    </Link>
  </div>
)}


    </div>
  );
};

export default Header2;
