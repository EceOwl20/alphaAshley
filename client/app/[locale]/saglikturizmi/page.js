import React from 'react'
import Banner from '../hakkimizda/components/Banner'
import TextSection from './components/TextSection'

const page = () => {
  return (
    <div>
      <Banner/>
      <TextSection header="Sağlık Turizmi" text="Sağlık turizmi, dünya genelinde hızla büyüyen ve giderek daha fazla insanın tercih ettiği bir seyahat ve tedavi biçimi haline gelmektedir. Alpha Ashley Danışmanlık olarak, sağlık turizmi sektöründe yer alan tesisler, hastaneler, klinikler ve sağlık hizmeti sağlayıcıları için stratejik planlama, pazar araştırması ve operasyonel destek gibi alanlarda danışmanlık hizmetleri sunuyoruz. Sunduğumuz çözümler, müşterilerimizin uluslararası pazarda rekabet edebilirliğini artırmak, hedef kitlelerine ulaşmak ve kaliteli sağlık hizmetlerini etkili bir şekilde sunmak için tasarlanmıştır. Sağlık turizmi sektöründeki deneyimimiz ve uzmanlığımızla, müşterilerimizin başarılı olmalarına yardımcı olmak için çalışıyoruz ve bu alanda gelecekteki büyüme ve fırsatları yakalamalarına destek sağlıyoruz." link={false}/>
    </div>
  )
}

export default page
