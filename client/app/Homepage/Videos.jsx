"use client"
import React, { useState, useEffect, useRef } from 'react'

const Videos = () => {
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
    <div ref={containerRef} className="flex w-screen lg:h-[50vh] items-center justify-center my-[100px]">
      <div className="flex flex-col w-[90%] lg:w-[70%] items-center justify-center text-center gap-[50px] lg:gap-[100px]">
        <div className="flex flex-col text-center items-center justify-center gap-[5px] font-montserrat">
          <h5 className="text-[#232323] text-[32px] mb-[15px] font-bold leading-[40px]">
            VİDEOLAR
          </h5>
          <p className="text-[#939393] text-[12px] leading-[20px] font-medium ">
            Bizimle Çalışmaktan Mutlu Olanlar
          </p>
          <div className="flex w-[100px] h-[1px] bg-[#FF214F]"></div>
        </div>
        <div className="flex flex-col sm:grid-cols-2 sm:grid md:grid md:grid-cols-3 w-full items-center justify-center gap-[20px]">
          <iframe
            className={`w-full h-[280px] transition-all duration-700 transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" 
            }`}
            src="https://www.youtube.com/embed/xKoFPg_YVAQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className={`w-full h-[280px] transition-all duration-700 transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" 
            }`}
            src="https://www.youtube.com/embed/MWN_dPBNxAo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
           className={`w-full h-[280px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" 
          }`}
            src="https://www.youtube.com/embed/DIFkRzFypmQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
