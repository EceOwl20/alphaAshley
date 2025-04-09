import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Form from "./Form";
import logoImg from "@/public/images/alpha-ashey-logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center bg-white">
      {/* Section 1 */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row w-[90%] lg:w-[80%] py-[40px] lg:py-[82px] items-center md:items-start justify-center md:justify-start text-start gap-[40px] text-lightGray">
        <div className="flex flex-col w-full lg:w-[25%] lg:max-w-[295px] items-center text-center justify-center md:items-start md:text-start md:justify-start gap-[25px]">
          <p className="text-[12px] font-roboto font-roboto font-normal leading-[20px]">
            Sağlık Turizmi yetki belgenizde, kliniğinizin kapılarını
            İngiltere'ye açmanın tam zamanı! Alpha Ashley Danışmanlık, yüz yüze
            görüşmelerle İngiltere'deki hastalarınıza doğrudan ulaşma fırsatı
            sunar.
          </p>
          <div className="flex w-full gap-[10px] items-center justify-center md:items-start md:justify-start">
            <Link href="" className="cursor-pointer">
              {" "}
              <FaWhatsapp />
            </Link>
            <Link href="" className="cursor-pointer">
              {" "}
              <FaLinkedinIn />
            </Link>
            <Link href="" className="cursor-pointer">
              {" "}
              <FaFacebookF />
            </Link>
            <Link href="" className="cursor-pointer">
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
          <Link
            href="/"
            className="text-[12px] font-roboto font-normal leading-[20px]"
          >
            Email: info.alphaashley@gmail.com
          </Link>
        </div>
        <div className="hidden lg:flex h-[150px] w-[1px] bg-[#EDEDED]"></div>

        <div className="flex flex-col w-full md:w-[50%] lg:w-[25%] lg:max-w-[300px] items-center text-center md:items-start md:text-start  justify-center">
          <p className="text-[12px] font-montserrat font-semibold leading-[20px] uppercase text-darkGray mb-[15px]">
            BİZİ ARAYIN
          </p>
          <p className="text-[12px] font-roboto font-normal leading-[20px]">
            TR No: +90 549 196 19 11
          </p>
          <p className="text-[12px] font-roboto font-normal leading-[20px] ">
            UK No: +44 7555 744506
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="flex w-screen py-[50px] lg:py-0 lg:w-[50%] bg-black items-center justify-center">
            <Image src={logoImg} alt="logo" width={480} height={589.16}/>
        </div>
        <Form/>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-center bg-[#f7f7f7] h-[120px]">
        <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between">
            <span className="text-[12px] text-lightGray font-roboto font-normal leading-[20px] ">© 2023 Alpha Ashley Danışmanlık, Web Tasarım: Berker Melih</span>
            <div className="flex gap-[7px] items-center justify-center">
            <Link href="" className="cursor-pointer">
              {" "}
              <FaWhatsapp size={15}/>
            </Link>
            <Link href="" className="cursor-pointer">
              {" "}
              <FaLinkedinIn size={15}/>
            </Link>
            <Link href="" className="cursor-pointer">
              {" "}
              <FaFacebookF size={14}/>
            </Link>
            <Link href="" className="cursor-pointer">
              {" "}
              <FaInstagram size={14}/>
            </Link>
                <Link href="/" className="text-[#626262] text-[12px] font-roboto leading-[20px] font-normal hover:text-[#ff214f] cursor-pointer mx-[5px]"> Terms and Conditions</Link>
                <div className="flex h-[10px] w-[1px] bg-[#626262]"></div>
                <Link href="/" className="text-[#626262] text-[12px] font-roboto leading-[20px] font-normal hover:text-[#ff214f] cursor-pointer ml-[5px]"> KVKK</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
