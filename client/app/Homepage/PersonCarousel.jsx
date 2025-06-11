"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/homepage/person1.png"
import img2 from "@/public/images/homepage/person2.png"
import img3 from "@/public/images/homepage/person3.png"
import img4 from "@/public/images/homepage/person4.png"
import img5 from "@/public/images/homepage/person5.png"
import img6 from "@/public/images/homepage/person6.jpeg"
import img7 from "@/public/images/homepage/person7.png"
import img8 from "@/public/images/homepage/person8.png"
import img9 from "@/public/images/homepage/person9.png"
import img10 from "@/public/images/homepage/person10.png"
import img11 from "@/public/images/homepage/person11.png"
import img12 from "@/public/images/homepage/person12.png"
import img13 from "@/public/images/homepage/person13.png"
import img14 from "@/public/images/homepage/person14.png"
import img15 from "@/public/images/homepage/person15.png"
import img16 from "@/public/images/homepage/Laura.png"

const images =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16]

const PersonCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({  loop: true,
        align: "start",
        startIndex: 0, },
        [
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            playDirection: "forward",
          }),
        ]
      );
    
      const [selectedIndex, setSelectedIndex] = useState(0);
        
      const scrollPrev = useCallback(() => {
        if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
      }, [emblaApi]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
      }, [emblaApi]);
    
      useEffect(() => {
        if (emblaApi) {
          emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
          });
          setSelectedIndex(emblaApi.selectedScrollSnap());
        }
      }, [emblaApi]);

  return (
    <div className="flex w-screen items-center justify-center h-auto lg:h-[70vh] my-[50px]">
      <div className="flex flex-col w-[80%] md:w-[70%] lg:w-[65%] items-center justify-center gap-[30px] lg:gap-[50px] lg:min-w-[960px]">

        {/* embla carousel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-start justify-start w-full">
            {images.map((image,index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_95%] md:max-h-auto md:flex-[0_0_50%] lg:flex-[0_0_31%] xl:flex-[0_0_31.5%] min-w-0 mr-[2.5%]"
              >
                <div className="flex flex-col w-full items-start text-start justify-center gap-[15px] lg:gap-[20px] font-jost text-black ">
                  <Image
                    src={image}
                    alt="ekip"
                    width={image.width}
                    height={image.height}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-[0px] md:mt-[20px] xl:mt-[30px] relative gap-[8px]">
  {images.map((_, i) => (
    <div
      key={i}
      className={`transition-all w-[9px] h-[9px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[1px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}
</div>
 <Link href="/" className="flex text-[#242424] text-[13px] font-montserrat font-semibold transition duration-300 ease-in-out uppercase whitespace-nowrap border-[2px] border-[#242424] items-center justify-center bg-white hover:bg-[#242424] hover:text-white py-[9px] px-[34px] leading-[25px]">EKİPLE TANIŞIN</Link>

      </div>
    </div>
  )
}

export default PersonCarousel
