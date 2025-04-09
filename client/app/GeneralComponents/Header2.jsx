"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/images/alpha-logo.png";
import Link from "next/link";

const Header2 = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
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
      className={`flex fixed w-screen items-center justify-center bg-white h-[72px] transition-transform duration-300 z-[999] shadow-md ${headerClass}`}
    >
      <div className="flex items-center justify-between w-[95%]">
        <div className="flex items-center justify-center gap-[15px]">
          <Image src={logo} alt="logo" width={32} height={32} />
          <h2 className="text-[18px] text-[#6F6F6F] font-bold">
            Alpha Ashley Danışmanlık
          </h2>
        </div>
        <div className="flex items-center justify-center gap-[50px] text-[12px] text-[#232323] uppercase font-semibold font-montserrat">
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
  );
};

export default Header2;
