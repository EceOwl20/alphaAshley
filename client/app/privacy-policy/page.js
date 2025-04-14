import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-start text-center w-[90%] md:w-[80%] lg:w-[78%] lg:max-w-[1170px] py-20 lg:py-24'>
        <div className='flex w-[90%] lg:w-[60%] items-center justify-center mb-8 gap-[20px] md:gap-[10%]'>
          <Link href="/cookies" className="px-[18px] md:px-[34px] py-[6px] md:py-[9px] lg:min-w-[135px] bg-white mt-5 hover:bg-[#232323] border-[2px] border-[#232323] text-[#232323] hover:text-white text-[12px] md:text-[13px] leading-[25px] cursor-pointer font-semibold transition duration-300 ease-in-out uppercase tracking-[4px] font-montserrat whitespace-nowrap">Cookie Politikası</Link>
          <Link href="/privacy-policy" className="px-[20px] md:px-[34px] py-[4px] md:py-[9px] lg:min-w-[135px] bg-white mt-5 hover:bg-[#232323] border-[2px] border-[#232323] text-[#232323] hover:text-white text-[12px] md:text-[13px] leading-[25px] cursor-pointer font-semibold transition duration-300 ease-in-out uppercase tracking-[4px] font-montserrat">KVKK</Link>
        </div>
        <h4 className='lg:text-[32px] text-[20px] text-darkGray font-semibold font-montserrat'>Kişisel Verilerin Korunması Metni</h4>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>Alpha Ashley, müşterilerine sağlık turizmi alanında danışmanlık hizmeti sunan bir şirkettir. Müşteri memnuniyetini ön planda tutan ve gizliliğe saygı duyan bir anlayışla hizmet verir. Bu nedenle, kişisel verilerinizi koruma konusundaki hassasiyetimizi önemsiyoruz. Aşağıda, kişisel verilerinizin nasıl işlendiği, korunduğu ve kullanıldığına dair bilgi bulacaksınız:</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'> Kişisel Veri Türleri ve İşleme Amaçları: Alpha Ashley, müşteri ilişkilerini yönetmek, hizmet sunmak, talepleri karşılamak ve yasal gerekliliklere uygun şekilde faaliyetlerini yürütmek amacıyla kişisel verilerinizi toplar ve işler. Bu veriler genellikle isim, iletişim bilgileri, tıbbi geçmiş ve seyahat bilgileri gibi müşteri ile ilgili bilgileri içerebilir.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>Veri Güvenliği: Alpha Ashley, kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemleri alır. Bu önlemler, yetkisiz erişimi önlemek, veri bütünlüğünü korumak ve veri işleme süreçlerini denetlemek gibi konuları kapsar.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>Üçüncü Taraf Paylaşımı: Alpha Ashley, hizmet sunmak amacıyla gerekli olduğunda, yasal düzenlemelere uygun olarak, üçüncü taraflarla kişisel verilerinizi paylaşabilir. Ancak, bu paylaşımların müşteri onayı olmadan yapılmayacağını ve müşteri verilerinin gizliliğine saygı gösterileceğini taahhüt ederiz.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>Veri Saklama Süresi: Kişisel verilerinizi, hizmet sunma süreci boyunca ve yasal gereklilikler doğrultusunda saklarız. Veri işleme amacı sona erdiğinde veya yasal bir saklama süresi dolması durumunda, verilerinizi güvenli bir şekilde imha ederiz.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>Kişisel Veri Sahiplerinin Hakları: Kişisel veri sahipleri olarak, verilerinizin işlenmesi ile ilgili bazı haklara sahipsiniz. Bu haklar arasında kişisel veriye erişim, düzeltme, silme, işleme itiraz etme ve veri taşınabilirliği gibi haklar bulunmaktadır. Bu hakları kullanmak için bizimle iletişime geçebilirsiniz.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'> Alpha Ashley, kişisel verilerinizin gizliliğini korumak ve kişisel veri işleme faaliyetlerini şeffaf bir şekilde yürütmek için azami çaba göstermektedir. Bu metin, kişisel verilerinizin nasıl işlendiği ve korunduğu konusunda genel bir bilgilendirme sağlamak amacıyla hazırlanmıştır. Daha fazla bilgi için lütfen bizimle iletişime geçin.</p>
        <p className='text-[16px] lg:text-[24px] font-roboto text-lightGray my-[15px] lg:my-[25px] leading-[24px] font-normal'>İletişim Bilgileri: Alpha Ashley Sağlık Turizmi Danışmanlık Şirketi <a href="mailto:info.alphaashley@gmail.com" className='font-semibold'>info.alphaashley@gmail.com</a></p>
   
      </div>
    </div>
  )
}

export default page
