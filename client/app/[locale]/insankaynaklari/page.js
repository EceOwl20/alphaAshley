import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import TextSection from '../saglikturizmi/components/TextSection'
import { useTranslations } from "next-intl";

const page = () => {
   const t = useTranslations("HumanResourcesPage");

  return (
    <div>
      <Banner/>
      <TextSection header={t("title")} text={t("description")} link={true}/>
    </div>
  )
}

export default page
