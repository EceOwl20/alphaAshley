import React from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import img2 from "@/public/images/homepage/blog-2.jpg"
import img3 from "@/public/images/homepage/blog-3.jpg"
import img4 from "@/public/images/homepage/blog-4.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from "next-intl";

const BlogGrid = () => {
    const t = useTranslations("BlogPage.BlogGrid");

  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[92%] lg:w-[90%] xl:w-[80%] gap-[20px]'>
        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img1} alt='blog' width={img1.width} height={img1.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/blog/blog-antalya" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>{t("blog1Title")}</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>{t("blog1Description")}<Link href="/blog/blog-antalya" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img2} alt='blog' width={img2.width} height={img2.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/blog/blog-saglik-turizmi" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>{t("blog2Title")}</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>{t("blog2Description")}<Link href="/blog/blog-saglik-turizmi" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img3} alt='blog' width={img3.width} height={img3.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/blog/blog-saglik-destinasyonu" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>{t("blog3Title")}</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>{t("blog3Description")}<Link href="/blog/blog-saglik-destinasyonu" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img4} alt='blog' width={img4.width} height={img4.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/blog/blog-iyilesme-ve-kesif" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>{t("blog4Title")}</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>{t("blog4Description")}<Link href="/blog/blog-iyilesme-ve-kesif" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">{t("readMore")}</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid
