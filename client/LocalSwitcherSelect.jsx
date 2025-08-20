"use client";

import React, { useState, useEffect, useTransition } from "react";
// ⭐️ next/navigation yerine navigation.ts’den alıyoruz:
import { redirect, usePathname } from "@/i18n/navigation";
import { IoMdArrowDropdown } from "react-icons/io";

export default function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  // 🔑 burada internal rota anahtarını (ör: "/aboutus") alır
  const routeKey = usePathname();

  useEffect(() => {
    const saved = sessionStorage.getItem("scrollPosition");
    if (saved) {
      window.scrollTo(0, Number(saved));
      sessionStorage.removeItem("scrollPosition");
    }
  }, [routeKey]);

  function handleLangChange(lang) {
    // scroll pozisyonunu sakla
    sessionStorage.setItem("scrollPosition", window.scrollY);
    setIsOpen(false);

    startTransition(() => {
      // Next-Intl’in redirect’i ile doğru URL’e (ör: "/de/uber-uns") yönlendirir
      redirect({ href: routeKey, locale: lang });
    });
  }

  return (
    <div className="relative z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-[2px] lg:gap-2 rounded-md px-[10px] py-[10px] lg:py-4 font-medium mix-blend-difference bg-transparent uppercase w-full text-[12px] lg:text-[14px] font-montserrat cursor-pointer"
      >
        {label}
        <IoMdArrowDropdown color="#ffffff" />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-0 rounded bg-black shadow-lg left-0 w-full text-white">
          <ul className="py-0">
            {React.Children.map(children, (child) => {
              if (child.props.value === defaultValue) return null;
              return (
                <li
                  key={child.props.value}
                  className="cursor-pointer px-[1px] lg:px-[3px] py-[4px] py-[6px] mt-0 bg-black text-white hover:bg-white hover:text-black text-center items-center justify-center uppercase font-montserrat text-[12px] lg:text-[14px]"
                  onClick={() => handleLangChange(child.props.value)}
                >
                  {child.props.value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
