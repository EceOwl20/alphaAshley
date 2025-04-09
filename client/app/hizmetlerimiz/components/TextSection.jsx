import Link from 'next/link'
import React from 'react'

const TextSection = () => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[92%] lg:w-[70%] max-w-[975px] items-start justify-start text-start gap-[20px] lg:gap-[25px] font-roboto text-darkGray'>
        <h4 className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray'>YURT DIŞI MEETING HİZMETLERİ</h4>
        <p className='text-[16px] leading-[30px]  '>Alpha Ashley Danışmanlık sizlere Full Paket Meeting Programı sayesinde hastalarınızla yurt dışında yüz yüze görüşme ve kaliteli satış olanağı sağlamaktadır. Sağlık turizmi alanındaki uzman kadromuzla kliniğinizin kapılarını İngiltere’ye açıyoruz!</p>
        <p className='text-[16px] leading-[30px] '>- İngiltere'de ve Avrupa’da Meeting yapılacak otellerin ayarlanması</p>
        <p className='text-[16px] leading-[30px] '>- Sağlık Turizmi alanında anadili İngilizce uzman satış personeli desteğinin sağlanması</p>
        <p className='text-[16px] leading-[30px] '>- Kliniğinizin en iyi şekilde tanıtılması</p>
        <p className='text-[16px] leading-[30px] '>- Yasal evrakların ve dosyaların hazırlanmasını sağlıyoruz.Detaylar için bizlerle iletişime geçebilirsiniz.</p>
        
        <h4  className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray  mt-[20px]'>SATIŞ PERSONELİ EĞİTİMİ</h4>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley, sağlık sektöründeki satış personellerinin eğitimine odaklanan öncü bir danışmanlık şirketidir. Şirket, sağlık sektöründeki satış faaliyetleri konusunda uzmanlaşmış bir ekip tarafından yönetilmektedir.</p>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley, sağlık kuruluşlarının satış personellerinin en iyi şekilde eğitilmesini sağlamak için özelleştirilmiş çözümler sunar. Şirket, satış personellerinin müşteri odaklı bir yaklaşım benimsemesini ve müşteri memnuniyetini artırmak için etkili iletişim stratejileri geliştirmelerini sağlar.</p>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley'nin sağlık sektöründeki müşterileri arasında hastaneler, klinikler ve sağlık merkezleri bulunmaktadır. Şirket, müşterilerinin ihtiyaçlarını anlamak için bir araştırma ve analiz süreci uygular ve eğitim programlarını bu ihtiyaçlara göre tasarlar.</p>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley, sağlık sektöründeki satış personellerinin eğitimi konusunda uzmanlaşmış bir danışmanlık şirketi olarak, müşterilerinin başarısını en üst düzeye çıkarmak için çalışır. Şirket, müşterilerine özel çözümler sunarak, satış personellerinin performansını artırmak ve işletmelerinin büyümesine katkıda bulunmak için çalışır.</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>Detaylar için bizlerle iletişime geçebilirsiniz.
        </Link>
        <h4  className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray  mt-[20px]'>DİJİTAL PAZARLAMA</h4>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley, sağlık sektöründeki kuruluşlara dijital pazarlama konusunda uzman danışmanlık hizmetleri sunmaktadır. Şirket, sosyal medya platformlarındaki reklam kampanyalarının tasarımı, yönetimi ve optimizasyonu, Google reklamlarının yönetimi konularında müşterilerine destek vermektedir. Alpha Ashley, müşterilerinin ihtiyaçlarına özel çözümler sunar ve işletmelerinin dijital pazarlama stratejilerinin başarısını en üst düzeye çıkarmayı hedefler.</p>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley'nin sağlık sektöründeki müşteri portföyü oldukça geniştir ve hastaneler, klinikler ve diğer sağlık kuruluşlarını kapsar. Şirket, müşterilerinin ihtiyaçlarına özel olarak tasarlanmış çözümler sunar ve onların dijital pazarlama stratejilerinin başarısını en üst düzeye çıkarmak için çalışır.</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>Detaylar için bizlerle iletişime geçebilirsiniz.
        </Link>
        <h4 className='text-[20px] lg:text-[32px] font-roboto leading-[40px] font-normal text-lightGray mt-[20px]'>YURT DIŞI TANITIM HİZMETLERİ</h4>
        <p className='text-[16px] leading-[30px] '>Alpha Ashley çok yönlü bir danışmanlık şirketidir ve aynı zamanda sağlık sektöründeki kuruluşlara reklam danışmanlığı hizmetleri sunan bir şirkettir. Şirket, müşterilerinin yurt içi ve yurt dışı tanıtımlarını, televizyon, toplu taşıma araçları, radyo, dergi, gazete gibi farklı mecralarda gerçekleştirerek, müşterilerinin markalarını daha geniş kitlelere ulaştırmalarını sağlar. Alpha Ashley'nin uzman ekibi, müşterilerine en iyi stratejileri önererek, reklam kampanyalarının tasarımı, planlaması ve yürütülmesi konularında destek verir.</p>
        <Link href="/" className='text-[16px] leading-[30px]  cursor-pointer'>Detaylar için bizlerle iletişime geçebilirsiniz.
        </Link>
      </div>
    </div>
  )
}

export default TextSection
