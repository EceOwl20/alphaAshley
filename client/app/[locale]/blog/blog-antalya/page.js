import React from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import SubBlogSection from "../components/SubBlogSection"
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("BlogAntalya");

 const array = t.raw("items"); 
    
  return (
    <div>
      <SubBlogSection img={img1} header={t("header")} text={t("text")} text2={t("text2")} array={array}/>
    </div>
  )
}

export default page
