"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import img1 from "@/public/images/homepage/1.png"
import img2 from "@/public/images/homepage/2.png"
import img3 from "@/public/images/homepage/3.png"
import img4 from "@/public/images/homepage/4.png"
import img5 from "@/public/images/homepage/5.png"
import img6 from "@/public/images/homepage/6.png"
import img7 from "@/public/images/homepage/7.png"
import img8 from "@/public/images/homepage/8.png"

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Sadece mobil için Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='flex w-screen items-center justify-center mt-[50px]'>
      <div className='w-[98%] bg-white'>

        {/* --- Mobil: Embla Carousel (tek görsel) --- */}
        <div className="block sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[15px]">
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`
                    flex-[0_0_100%]
                    transition-all duration-700 transform
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <Image
                    alt="gallery"
                    src={imgSrc}
                    width={imgSrc.width}
                    height={imgSrc.height}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobil nav butonları (isteğe bağlı, sade) */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              onClick={scrollPrev}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
              aria-label="Önceki"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
              aria-label="Sonraki"
            >
              →
            </button>
          </div>
        </div>

        {/* --- Tablet & Desktop: Mevcut grid düzeni --- */}
        <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]'>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <Image
                alt='gallery'
                src={imgSrc}
                width={imgSrc.width}
                height={imgSrc.height}
                className='w-full object-cover'
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default GallerySection;
