"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

const Videos = () => {
  const t = useTranslations("Homepage.BlogSection");
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Video listesi
  const videos = [
    "https://www.youtube.com/embed/xKoFPg_YVAQ",
    "https://www.youtube.com/embed/MWN_dPBNxAo",
    "https://www.youtube.com/embed/DIFkRzFypmQ",
     "https://www.youtube.com/embed/ZwjIut57DIs",
    "https://www.youtube.com/embed/HNQSvlrIfNc",
    "https://www.youtube.com/embed/R6SQEPcvW-s",
    "https://www.youtube.com/embed/YQW-gIJ-B1A",
    "https://www.youtube.com/embed/K2tkTncyJF0",
    "https://www.youtube.com/embed/Dj2usmVynqk",
    "https://www.youtube.com/embed/2ajlwNLxK9k",
    "https://www.youtube.com/embed/ZNshwRBHyUw",
    "https://www.youtube.com/embed/MwpZepIQ2kU",
    "https://www.youtube.com/embed/9HH5HkOEUxc",
    "https://www.youtube.com/embed/HBnFXas7f5w",
    "https://www.youtube.com/embed/19zw8e3lMlc",
    "https://www.youtube.com/embed/Xm2X04PjGzA",
    "https://www.youtube.com/embed/vbbSELRfnVU",
    "https://www.youtube.com/embed/dG-TzTjFOI0",
    "https://www.youtube.com/embed/mLWqP00V568"
  ];

  return (
    <div
      ref={containerRef}
      className="flex w-screen lg:h-[50vh] items-center justify-center my-[50px] lg:my-[100px]"
    >
      <div className="flex flex-col w-[90%] xl:w-[70%] items-center justify-center text-center gap-[50px] lg:gap-[70px]">
        <div className="flex flex-col text-center items-center justify-center gap-[5px] font-montserrat">
          <h5 className="text-[#232323] text-[32px] mb-[15px] font-bold leading-[40px]">
            {t("videos")}
          </h5>
          <p className="text-[#939393] text-[12px] leading-[20px] font-medium ">
            {t("testimonials")}
          </p>
          <div className="flex w-[100px] h-[1px] bg-[#FF214F]"></div>
        </div>

        {/* Embla Carousel */}
        <div className="w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[20px]">
              {videos.map((src, index) => (
                <div
                  key={index}
                  className={`
                    flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_32.333%] xl:flex-[0_0_32.333%]
                  `}
                >
                  <iframe
                    className={`w-full h-[280px] transition-all duration-700 transform ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    src={src}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasyon butonları (tasarımı bozmayacak şekilde basit tuttum) */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={scrollPrev}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
