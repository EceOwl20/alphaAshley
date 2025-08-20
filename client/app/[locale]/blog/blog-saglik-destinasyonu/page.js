import React from 'react'
import img4 from "@/public/images/homepage/blog-4.jpg"
import SubBlogSection from "../components/SubBlogSection"
import { useTranslations } from "next-intl";

const page = () => {
    const t = useTranslations("BlogAntalyaWellness");
    const array = t.raw("items"); 
    
  return (
    <div>
      <SubBlogSection img={img4} header={t("header")}text={t("text")} text2={t("text2")} array={array}/>
    </div>
  )
}

export default page
