import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import TextSection from '../saglikturizmi/components/TextSection'

const page = () => {
  return (
    <div>
      <Banner/>
      <TextSection header="İnsan Kaynakları" text="Alpha Ashley Danışmanlık olarak, insan kaynakları alanında sunduğumuz hizmetlerle, şirketlerin yetenek yönetimi süreçlerini en etkin şekilde yönetmelerine yardımcı oluyoruz. İnsan odaklı yaklaşımımızla, doğru adayları doğru pozisyonlarla buluşturuyor, çalışan memnuniyeti ve verimliliğini artırmayı hedefliyoruz. İK stratejilerimizi, şirketlerin ihtiyaçlarına göre özelleştiriyor ve uzun vadeli başarıyı destekleyen çözümler sunuyoruz." link={true}/>
    </div>
  )
}

export default page
