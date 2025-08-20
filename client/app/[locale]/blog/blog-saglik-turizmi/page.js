'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import img2 from "@/public/images/homepage/blog-2.jpg"
import SubBlogSection from "../components/SubBlogSection"

const Page = () => {
  const t = useTranslations("BlogHealthTourism");

 const array = t.raw("items"); 

  return (
    <div>
      <SubBlogSection
        img={img2}
        header={t("header")}
        text={t("text")}
        text2={t("text2")}
        array={array}
      />
    </div>
  )
}

export default Page;
