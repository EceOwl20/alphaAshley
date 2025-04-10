import React from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import SubBlogSection from "../../blog/components/SubBlogSection"

const array = [
    {
      heading: "1. Doğal İyileştirici Yöntemler",
      text: "Antalya, termal kaynaklar ve mineral açısından zengin sularıyla tanınan doğal kaplıcalarıyla mübarek bir coğrafyadır. Ziyaretçiler, geleneksel Türk hamamlarında veya iyileştirici çamur banyolarında bedenlerini ve ruhlarını yenileyebilirler."
    },
    {
      heading: "2. Yoga ve Meditasyon Geri Çekilmeleri: ",
      text: "Sessiz kıyı geri çekilmelerinden huzurlu dağ manzaralarına kadar, Antalya, iç huzur ve rahatlama arayanlar için bir dizi yoga ve meditasyon geri çekilme imkanı sunar. Uzman eğitmenlerin rehberliğinde uygulayıcıları bilinçli pratiklerle yönlendirmesiyle, ziyaretçiler nefes kesen doğal manzaralar eşliğinde kendilerini gevşetip yeniden bağlanabilirler."
    },
    {
        heading: "3. Sağlıklı Mutfak:  ",
        text: " Antalya'nın canlı mutfak sahnesi, lezzetli ve besleyici Akdeniz mutfağı ile tanınan taze ve yerel kaynaklı malzemelerle doludur. Ziyaretçiler, deniz veya dağ manzaralarının tadını çıkarırken sağlıklı ve lezzetli Akdeniz mutfağından zevk alabilirler."
      },
      {
        heading: "4. Açık Hava Aktiviteleri:  ",
        text: "Ilıman iklimi ve çeşitli arazisiyle Antalya, sağlık ve wellness'i teşvik eden bir dizi açık hava etkinliği için sonsuz fırsatlar sunar. Ziyaretçiler, nefes kesen doğal güzellikler eşliğinde yapılan manzara yürüyüşlerinden berrak sularında heyecan verici su sporlarına kadar aktif kalabilirler."
      },
      {
        heading: "5. Spa ve Wellness Tesisleri: ",
        text: "Antalya, lüks spa ve wellness tesislerine ev sahipliği yapar ve burada sunulan çeşitli holistik tedaviler ve terapilerle rahatlama ve refahı teşvik eder. Canlandırıcı masajlardan yenileyici yüz bakımlarına veya holistik iyileştirme ritüellerine kadar her türlü tedavide, ziyaretçiler eşsiz manzaralar eşliğinde mükemmel bir şekilde şımartılabilirler."
      },
      {
        heading: "6. Kültürel Deneyim: ",
        text: "Doğal güzellik ve wellness tekliflerinin yanı sıra, Antalya ziyaretçilerini zengin kültürel mirasına da davet eder. Antik kalıntıları keşfetmek, tarihi mekanları ziyaret etmek ve yerel gelenek ve görenekleri deneyimlemek, wellness yolculuğuna derinlik katıp ziyaretçilere bağlantı ve bilinçli yaşam hissi sağlar."
      },

      {
        heading: "7. Erişilebilirlik:  ",
        text: "Antalya, uluslararası bir havalimanı aracılığıyla kolayca ulaşılabilir durumdadır, bu da dünyanın dört bir yanından sağlık ve wellness gezginleri için uygun bir destinasyon haline gelir. Geniş konaklama seçenekleri ile ziyaretçiler tercih ve bütçelerine uygun mükemmel bir geri çekilme yeri bulabilirler."
      },
    
  ];

const page = () => {
    
  return (
    <div>
      <SubBlogSection img={img1} header="Antalya'yı Keşfetmek: Sağlık Destinasyonu" text="Akdeniz'in muhteşem sahil şeridi boyunca yer alan Antalya, sadece nefes kesen doğal güzelliği ile değil, aynı zamanda yenilenme ve rahatlama arayan gezginler için çeşitli sağlık ve wellness deneyimleri sunmasıyla da dikkat çekiyor. İşte Antalya'nın neden sağlık ve wellness turizminin önde gelen bir destinasyonu haline geldiğine dair bazı nedenler:" text2="Antalya'nın doğal güzelliği, kültürel zenginliği ve wellness tekliflerinin uyumlu birleşimi, bedeninizi, ruhunuzu ve zihninizizi yenilemek isteyenler için ideal bir destinasyon yapar. Bakir plajlarda dinlenmek, holistik wellness geri çekilmelerine katılmak veya antik kalıntıları keşfetmek istiyorsanız, Antalya, sağlık ve refah yolculuğunuzda dönüştürücü bir deneyim sunar." array={array}/>
    </div>
  )
}

export default page
