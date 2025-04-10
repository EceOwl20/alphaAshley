"use client"
import React, { useState, useEffect, useRef } from 'react'

const VideoGrid = () => {
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
    <div ref={containerRef} className="flex w-screen items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[92%] lg:w-[90%] xl:w-[80%] gap-[20px]">
        <iframe
          className={`w-full h-[380px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src="https://www.youtube.com/embed/xKoFPg_YVAQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className={`w-full h-[380px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src="https://www.youtube.com/embed/MWN_dPBNxAo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className={`w-full h-[380px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src="https://www.youtube.com/embed/DIFkRzFypmQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className={`w-full h-[380px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src="https://www.youtube.com/embed/eMEHEsDbG1E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className={`w-full h-[380px] transition-all duration-700 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src="https://www.youtube.com/embed/Y1FG3fPVvPk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoGrid;
