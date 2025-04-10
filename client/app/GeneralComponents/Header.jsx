"use client"
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn,FaFacebookF,FaInstagram,FaWhatsapp } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const phoneNumber = '+447538893032';
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsApp = () => {
    const phoneNumber = "+447538893032"; 
    window.location.href=`whatsapp://send?phone=${phoneNumber}`;
  };

  return (
    <div className='flex sticky w-screen bg-black h-[50px] text-white items-center justify-center z-[999]'>
      <div className='flex w-[90%] lg:w-[70%] items-center justify-between leading-normal'>
       <div className='flex gap-[15px] items-center justify-center font-montserrat'>
        <Link href="https://www.linkedin.com/company/94114251/admin/feed/posts/" rel="norefferer nofollower"
                  target="_blank" className='hidden lg:flex'><FaLinkedinIn size={12}/></Link>
        <Link href="https://www.facebook.com/alphaashleydanismanlik" rel="norefferer nofollower"
                  target="_blank" className='hidden lg:flex'><FaFacebookF size={12}/></Link>
        <Link href="https://www.instagram.com/alphaashleydanismanlik/" rel="norefferer nofollower"
                  target="_blank" className='hidden lg:flex'><FaInstagram size={13}/></Link>
       <a href="tel:+905491961911" className='text-[10px] hover:text-[#ff214f]  cursor-pointer'>+90 549 196 19 11</a>
       <div className='flex h-[10px] w-[1px] bg-[#757575]'></div>
       <a href="tel:+447538893032" className='text-[10px] hover:text-[#ff214f]  cursor-pointer'>+44 7538 893032</a>
       <div className='flex h-[10px] w-[1px] bg-[#757575]'></div>
       <a
            href="mailto:info.alphaashley@gmail.com"
           className='text-[10px] hover:text-[#ff214f]  cursor-pointer font-medium uppercase'
          >
            info.alphaashley@gmail.com
          </a>
       </div>

       <div className='hidden lg:flex items-center justify-center gap-[15px]'>
        <a  href="https://wa.me/447538893032" 
  target="_blank" 
  rel="noopener noreferrer" className='flex items-center justify-center bg-[#34A853] cursor-pointer p-[4px] rounded-md'>
            <FaWhatsapp size={25} color='black'/>
        </a>
        <Link href="/videolar" className='text-[14px] uppercase font-normal leading-[24px]  cursor-pointer font-roboto'>VİDEOLAR</Link>
        <Link href="#iletisim" className='text-[14px] uppercase font-normal leading-[24px]  cursor-pointer font-roboto'>İLETİŞİM</Link>
        <div className='flex h-[10px] w-[1px] bg-[#757575]'></div>
        <h4 className='text-[11px] font-normal  cursor-pointer'>TURKISH</h4>
        <IoMdArrowDropdown />
       </div>
      </div>
    </div>
  )
}

export default Header
