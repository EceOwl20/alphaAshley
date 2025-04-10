import React from 'react'
import img1 from "@/public/images/homepage/blog-1.jpg"
import img2 from "@/public/images/homepage/blog-2.jpg"
import img3 from "@/public/images/homepage/blog-3.jpg"
import img4 from "@/public/images/homepage/blog-4.jpg"
import Image from 'next/image'
import Link from 'next/link'

const BlogGrid = () => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[92%] lg:w-[90%] xl:w-[80%] gap-[20px]'>
        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img1} alt='blog' width={img1.width} height={img1.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/blog/blog-antalya" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>2023’ün En Harika Tatil Şehri: Antalya</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>Antalya, Türkiye'nin güney kıyısında yer alan bir tatil cennetidir. Yerli ve yabancı turistlerin uğrak noktasıdır. İngilizlerin gözdesi olan bu cennet şehirde yapılacak şey çok fazla! Tatilin ve sağlık turizminin en güzel buluşma yeri Antalya'da tatil yapmayı düşünenler için bazı önemli bilgiler:...<Link href="/blog/blog-antalya" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img2} alt='blog' width={img2.width} height={img2.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>Türkiye'de Sağlık Turizmi: Keşfedilmeyi Bekleyen Bir Hazine</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>Türkiye, tarih boyunca farklı medeniyetlere ev sahipliği yapmış zengin kültürel mirasıyla tanınırken, son yıllarda sağlık turizmi alanında da dikkatleri üzerine çekiyor. Peki, Türkiye'nin bu alandaki potansiyeli nedir ve sağlık turizminde neden tercih edilmeye başlandı?...<Link href="/" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img3} alt='blog' width={img3.width} height={img3.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>Antalya'yı Keşfetmek: Sağlık Destinasyonua</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>Akdeniz'in muhteşem sahil şeridi boyunca yer alan Antalya, sadece nefes kesen doğal güzelliği ile değil, aynı zamanda yenilenme ve rahatlama arayan gezginler için çeşitli sağlık ve wellness deneyimleri sunmasıyla da dikkat çekiyor. İşte Antalya'nın neden sağlık...<Link href="/" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
            </div>
        </div>

        <div className='flex flex-col border border-[#CCCCCC] items-center justify-start'>
            <Image src={img4} alt='blog' width={img4.width} height={img4.height} className='w-full object-cover max-h-[300px]'/>
            <div className='flex flex-col w-[90%] items-start justify-start text-start gap-[23px] p-[35px]'>
                <Link href="/" className='text-[16px] text-[#232323] font-montserrat leading-[23px] hover:text-[#ff214f] mb-[5px]'>Türkiye'de Sağlık Turizmi: İyileşme ve Keşif İçin Mükemmel Bir Durak</Link>
                <div className='flex h-[1px] w-full bg-[#CCCCCC]'></div>
                <p className='text-[14px] font-roboto line-clamp6 leading-[24px] font-normal text-lightGray'>Türkiye, son yıllarda sağlık turizminde giderek artan bir popülerlik kazanmaktadır. Doğal güzellikleri, tarihi zenginlikleri ve yüksek kaliteli sağlık hizmetleri ile Türkiye, dünya genelinde sağlık turistlerinin dikkatini çekmektedir. Peki, Türkiye'de sağlık turizmi ne sunuyor ve bu alandaki devlet teşvikleri nelerdir? İşte bu konuda daha fazla bilgi:...<Link href="/" className="font-montserrat text-[14px] font-roboto leading-[24px] font-normal text-[#939393] hover:text-[#FF214F] cursor-pointer">Devamını Oku</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid
