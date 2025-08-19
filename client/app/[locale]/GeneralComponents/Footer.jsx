"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Form from "./Form";
import logoImg from "@/public/images/alpha-ashey-logo.png"
import Image from "next/image";
import DgtlfaceSvg from "./DgtlfaceSvg";
import { useTranslations } from "next-intl";

const Footer = () => {
   const t = useTranslations("Footer");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // Component mount olduğunda animasyonu tetikliyoruz.
      setAnimate(true);
    }, []);

  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center bg-white overflow-hidden">
      {/* Section 1 */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-[90%] lg:w-[80%] py-[40px] lg:py-[82px] items-center md:items-start justify-center md:justify-start text-start gap-[40px] text-lightGray">
        <div className="flex flex-col w-full lg:w-[25%] lg:max-w-[295px] items-center text-center justify-center md:items-start md:text-start md:justify-start gap-[25px]">
          <p className="text-[12px] font-roboto font-roboto font-normal leading-[20px]">
          {t("highlight")}
          </p>
          <div className="flex w-full gap-[10px] items-center justify-center md:items-start md:justify-start">
            <a rel="norefferer nofollower" href="https://wa.me/447538893032"
                  target="_blank" className="cursor-pointer">
              {" "}
            <FaWhatsapp />
        
            </a>
            <Link href="https://www.linkedin.com/company/94114251/admin/feed/posts/" rel="norefferer nofollower"
                  target="_blank" className="cursor-pointer">
              {" "}
              <FaLinkedinIn />
            </Link>
            <Link href="https://www.facebook.com/alphaashleydanismanlik" rel="norefferer nofollower"
                  target="_blank" className="cursor-pointer">
              {" "}
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/alphaashleydanismanlik/" rel="norefferer nofollower"
                  target="_blank" className="cursor-pointer">
              {" "}
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex h-[150px] w-[1px] bg-[#EDEDED]"></div>
        <div className="flex flex-col w-full  lg:w-[25%] lg:max-w-[300px] items-center text-center md:items-start md:text-start justify-center gap-[10px]">
          <p className="text-[12px] font-montserrat font-semibold leading-[20px] uppercase text-darkGray">
            E-MAIL
          </p>
          <a
            href="mailto:info.alphaashley@gmail.com"
            className="text-[12px] font-roboto font-normal leading-[20px]"
          >
            Email: info.alphaashley@gmail.com
          </a>
        </div>
        <div className="hidden lg:flex h-[150px] w-[1px] bg-[#EDEDED]"></div>

        <div className="flex flex-col w-full md:w-[50%] lg:w-[25%] lg:max-w-[300px] items-center text-center md:items-start md:text-start  justify-center">
          <p className="text-[12px] font-montserrat font-semibold leading-[20px] uppercase text-darkGray mb-[15px]">
            {t("callUs")}
          </p>
          <a href="tel:+905491961911" className="text-[12px] font-roboto font-normal leading-[20px]">
            TR No: +90 549 196 19 11
          </a>
          <a href="tel:+447538893032" className="text-[12px] font-roboto font-normal leading-[20px] ">
            UK No:+44 7538 893032
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <div id="iletisim" className="flex flex-col lg:flex-row w-full ">
      <div
        className={`flex w-screen py-[50px] lg:py-0 lg:w-[50%] bg-black items-center justify-center transform transition-all duration-700 ease-out ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}>
            <Image src={logoImg} alt="logo" width={480} height={589.16} className="w-[99%] h-[441.88px] lg:w-[480px] lg:h-[589.16px] "/>
        </div>
        <div
        className={`flex w-screen lg:w-[50%] items-center justify-center transform transition-all duration-700 ease-out ${
          animate ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Form />
      </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-center bg-[#f7f7f7] h-[120px]">
        <div className="flex flex-col lg:flex-row w-[95%] lg:w-[80%] items-center justify-between">
            <span className="text-[12px] text-lightGray font-roboto font-normal leading-[20px] flex flex-row">Powered by <Link href="https://dgtlface.com" rel="norefferer nofollower"
                  target="_blank"><DgtlfaceSvg className="flex" width={90} height={20} /></Link></span>
            <div className="flex gap-[7px] items-center justify-center">
           
              <a  href="https://wa.me/447538893032" 
  target="_blank" 
  rel="noopener noreferrer" className='flex items-center justify-center cursor-pointer '>
            <FaWhatsapp size={15} color='black'/>
        </a>
            
            <Link href="https://www.linkedin.com/company/94114251/admin/feed/posts/" className="cursor-pointer" rel="norefferer nofollower"
                  target="_blank">
              {" "}
              <FaLinkedinIn size={15}/>
            </Link>
            <Link href="https://www.facebook.com/alphaashleydanismanlik" rel="norefferer nofollower"
                  target="_blank" className="cursor-pointer">
              {" "}
              <FaFacebookF size={14}/>
            </Link>
            <Link href="https://www.instagram.com/alphaashleydanismanlik/" className="cursor-pointer" rel="norefferer nofollower"
                  target="_blank">
              {" "}
              <FaInstagram size={14}/>
            </Link>
                <Link href="/" className="text-[#626262] text-[12px] font-roboto leading-[20px] font-normal hover:text-[#ff214f] cursor-pointer mx-[5px]"> Terms and Conditions</Link>
                <div className="flex h-[10px] w-[1px] bg-[#626262]"></div>
                <Link href="/privacy-policy" className="text-[#626262] text-[12px] font-roboto leading-[20px] font-normal hover:text-[#ff214f] cursor-pointer ml-[5px]"> KVKK</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
