import React from 'react'
import img2 from "@/public/images/homepage/blog-2.jpg"
import SubBlogSection from "../components/SubBlogSection"

const array = [
    {
      heading: "1. Yüksek Kaliteli Sağlık Hizmetleri: ",
      text: "Türkiye, uluslararası standartlara uygun modern tıbbi altyapısıyla donatılmış birçok sağlık kuruluşuna ev sahipliği yapar. Bu kurumlar, deneyimli ve uzman doktorlarıyla yüksek kaliteli sağlık hizmetleri sunarlar."
    },
    {
      heading: "2. Rekabetçi Fiyatlar: ",
      text: "Türkiye'deki sağlık hizmetleri, Avrupa ve Amerika Birleşik Devletleri gibi diğer ülkelere kıyasla daha uygun fiyatlarla sunulur. Bu durum, Türkiye'yi sağlık turizmi açısından cazip hale getirir."
    },
    {
        heading: "3. Estetik Cerrahi ve Diş Turizmi:  ",
        text: " Türkiye, özellikle estetik cerrahi ve diş tedavileri gibi alanlarda uluslararası alanda tanınmış bir üne sahiptir. Uygun fiyatlar, yüksek kalite ve deneyimli doktorlar, Türkiye'yi bu alanlarda tercih edilen bir destinasyon haline getirir."
      },
      {
        heading: "4. Kültürel ve Tarihi Zenginlik:",
        text: "Sağlık turizmiyle birleştirildiğinde, Türkiye'nin zengin kültürel ve tarihi mirasıyla birleşen bir tatil deneyimi sunması da önemli bir avantajdır. Tedavi sürecinin ardından hastalar, tarihi yerleri keşfedebilir, lezzetli yöresel yemeklerin tadını çıkarabilir ve eşsiz doğal güzellikleri keşfedebilirler."
      },
      {
        heading: "5. Kolay Erişim:  ",
        text: "Türkiye, birçok Avrupa ve Orta Doğu ülkesinden kolayca ulaşılabilir konumdadır. Modern havaalanları, iyi geliştirilmiş ulaşım ağı ve kolay vize politikaları, sağlık turistlerinin Türkiye'yi tercih etmelerini kolaylaştırır."
      },
      {
        heading: "",
        text: "Türkiye'de sağlık turizmi, her geçen gün daha da popüler hale gelirken, ülkenin sunduğu kaliteli hizmetler, uygun fiyatlar ve benzersiz tatil deneyimi, bu sektördeki büyümeyi desteklemeye devam ediyor. Türkiye'yi sağlık turizmi için bir destinasyon olarak keşfetmek, hem sağlık sorunlarıyla başa çıkmak hem de unutulmaz bir tatil deneyimi yaşamak isteyenler için mükemmel bir seçenektir."
      },
     
    
  ];

const page = () => {
    
  return (
    <div>
      <SubBlogSection img={img2} header="2023’ün En Harika Tatil Şehri: Antalya"
       text="Türkiye, tarih boyunca farklı medeniyetlere ev sahipliği yapmış zengin kültürel mirasıyla tanınırken, son yıllarda sağlık turizmi alanında da dikkatleri üzerine çekiyor. Peki, Türkiye'nin bu alandaki potansiyeli nedir ve sağlık turizminde neden tercih edilmeye başlandı? İşte Türkiye'nin sağlık turizmi açısından sunduğu ilginç özellikler:" 
       text2="Siz de Türkiye'de sağlık turizmi hakkında daha fazla bilgi edinmek ve sağlık sorunlarınızı çözmek için Türkiye'yi tercih edebilirsiniz. Sağlık turizminde Türkiye'nin sunduğu avantajları keşfedin ve kendinizi evinizde hissedeceğiniz kaliteli hizmetlerle şımartın!" array={array}/>
    </div>
  )
}

export default page
