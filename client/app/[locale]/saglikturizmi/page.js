import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import TextSection from './components/TextSection'
import { useTranslations } from "next-intl";

const page = () => {
   const t = useTranslations("HealthTourismPage");

  return (
    <div>
      <Banner/>
      <TextSection header={t("title")} text={t("description")} link={false}/>
    </div>
  )
}

export default page
