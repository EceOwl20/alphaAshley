"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

// ModalPortal Componenti: Modal içeriği body içerisine taşır.
const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-screen lg:w-[715px] lg:h-[651px] bg-[rgba(35,35,35,1)] backdrop-blur-[10px]"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
    // hasMounted state'i ekliyoruz
    const [hasMounted, setHasMounted] = useState(false);
  const buttonsData = [
    { id: 0, label: "Çerez Politikası" },
    { id: 1, label: "Çerez Açıklama Metni" },
    { id: 2, label: "Çerezler Nedir?" },
  ];

  const [selectedContent, setSelectedContent] = React.useState(0);

  // Aktif butonu listenin başına alacak şekilde yeniden sıralama
  const orderedButtons = [
    buttonsData.find((btn) => btn.id === selectedContent),
    ...buttonsData.filter((btn) => btn.id !== selectedContent),
  ];

  const [cookies, setCookies] = useState({
    necessary: true, // Zorunlu çerezler her zaman aktiftir.
    performance: false,
    functional: false,
    targeting: false,
  });

    // Sayfa yüklendiğinde tercihleri yükle
    useEffect(() => {
      setHasMounted(true);
      const savedPreferences = loadPreferences();
      if (savedPreferences) {
        // Tercihler kaydedilmişse popup'ı gösterme
        setIsVisible(false);
      } else {
        // Tercihler kaydedilmemişse popup'ı göster
        setIsVisible(true);
      }
    }, []);
  
    // Tercihleri kaydet ve popup'ı kapat
    const handleConfirm = () => {
      savePreferences(cookies);
      console.log("Kullanıcı Tercihleri Onaylandı:", cookies);
      setIsVisible(false);
    };

        // Tüm çerezleri kabul et ve popup'ı kapat
        const handleAcceptAll = () => {
          const allAccepted = {
            necessary: true,
            performance: true,
            functional: true,
            targeting: true,
          };
          setCookies(allAccepted);
          savePreferences(allAccepted);
          console.log("Tüm Çerezler Kabul Edildi:", allAccepted);
          setIsVisible(false);
        };
      
        // Tüm çerezleri reddet ve popup'ı kapat
        const handleDenyAll = () => {
          const allDenied = {
            necessary: true, // Zorunlu çerezler her zaman aktiftir
            performance: false,
            functional: false,
            targeting: false,
          };
          setCookies(allDenied);
          savePreferences(allDenied);
          console.log("Tüm Çerezler Reddedildi:", allDenied);
          setIsVisible(false);
        }
  const handleToggle = (type) => {
    setCookies((prevCookies) => ({
      ...prevCookies,
      [type]: !prevCookies[type],
    }));
  };

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  
  // Çerez silme fonksiyonu
  const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  
  // Çerez yükleme fonksiyonu
  const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };

  const savePreferences = (preferences) => {
    // Tercihleri çerez olarak kaydet
    setCookie("cookiePreferences", JSON.stringify(preferences), 365);
  
    // Konsola kaydedilen tercihleri yazdır
    console.log("Çerez Tercihleri Kaydedildi:", preferences);
    // Tercihlere göre çerezleri ayarla
    if (preferences.performance) {
      setCookie("performanceCookie", "active", 365);
      console.log("Performance Çerezi Aktif Edildi.");
    } else {
      deleteCookie("performanceCookie");
      console.log("Performance Çerezi Silindi.");
    }
    if (preferences.functional) {
      setCookie("functionalCookie", "active", 365);
      console.log("Functional Çerezi Aktif Edildi.");
    } else {
      deleteCookie("functionalCookie");
      console.log("Functional Çerezi Silindi.");
    }
    if (preferences.targeting) {
      setCookie("targetingCookie", "active", 365);
      console.log("Targeting Çerezi Aktif Edildi.");
    } else {
      deleteCookie("targetingCookie");
      console.log("Targeting Çerezi Silindi.");
    }
  };
  const loadPreferences = () => {
    const preferences = getCookie("cookiePreferences");
    if (preferences) {
      console.log("Kaydedilmiş Çerez Tercihleri Yüklendi:", JSON.parse(preferences));
      return JSON.parse(preferences);
    }
    console.log("Kaydedilmiş Çerez Tercihi Bulunamadı. Varsayılan Tercihler Kullanılıyor.");
    return null
  };
  const contents = [
    // third button
    <div className="flex flex-col h-full w-[96%] text-start font-roboto items-start justify-start  gap-[7.5px] overflow-y-auto thin-scrollbar max-h-[590px] ">
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6] pr-[2%]">
        <div
          onClick={() => setIsDropdown1Open(!isDropdown1Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown1Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px]">
          1. Zorunlu Çerezler
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 bg-[#34a853] `}
          onClick={() => handleToggle("necessary")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.necessary ? "translate-x-[16px]" : "translate-x-[14px]"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown1Open
            ? "max-h-[270px] min-h-[242px] lg:min-h-[140px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0 ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-roboto leading-[150%] w-[92%] h-auto ">
        Web sitesinin kullanımı ve işlevselliği için elzem olan çerezlerdir. Bu çerezler devre dışı bırakıldığında, web sitesinin tamamına veya bir kısmına erişim mümkün olmayabilir. Zorunlu çerezler aracılığıyla işlenen kişisel veriler, ürün ve hizmetlerin sunulabilmesi ve mevzuata uygun şekilde faaliyetlerin yürütülmesi için gereklidir. Bu nedenle, KVKK Madde 5/2e hükümleri gereğince bir hakkın tesis edilmesi, kullanılması veya korunması amacıyla zorunlu veri işleme gerekliliği olduğunda bu çerezler kullanılmaktadır.

        </p>
      </div>
      {/* 2.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6] pr-[2%]">
        <div
          onClick={() => setIsDropdown2Open(!isDropdown2Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown2Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          2. Pazarlama Çerezleri 
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.performance ? "bg-[#34a853]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("performance")}>
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.performance ? "translate-x-[16px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown2Open
            ? "max-h-[370px] min-h-[360px] lg:min-h-[205px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-roboto leading-[150%]">
         Pazarlama amaçlı çerezler ile internet ortamında kullanıcıların çevrim içi hareketleri takip edilerek kişisel ilgi alanlarının saptanıp bu ilgi alanlarına yönelik internet ortamında kullanıcılara reklam gösterilmesi hedeflenen çerezlerdir. Kullanıcıların ilgi alanlarına göre reklam ve kampanyaların sunulması, pazarlama çalışmalarının etkinliğinin ölçülmesi amacıyla kullanılan çerezlerdir. Pazarlama çerezleri aracılığıyla işlenen kişisel veriler, ürün ve hizmetlerin pazarlama süreçlerinin yönetilmesi, pazarlama analiz çalışmalarının yürütülmesi, reklam, kampanya ve promosyon süreçlerinin yönetilmesi amacıyla KVKK Madde 5/1 ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenmektedir. Bu veriler, uluslararası çerez sağlayıcılarıyla paylaşılmaktadır, ancak açık bir şekilde belirtmek gerekirse, bu bilgilerin korunması ve gizliliği önemlidir. 
        </p>
      </div>
      {/* 3.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6]">
        <div
          onClick={() => setIsDropdown3Open(!isDropdown3Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown3Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          3. Analitik Çerezler

          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.functional ? "bg-[#34a853]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("functional")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.functional ? "translate-x-[15px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown3Open
            ? "max-h-[370px] min-h-[360px] lg:min-h-[210px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-roboto leading-[150%]">
        İnternet sitelerinde, kullanıcı davranışlarını analiz etmek amacıyla kullanılan çerezlerdir. Bu çerezler, genellikle web sitesinin iyileştirilmesine yardımcı olmak için kullanılır ve bu kapsamda reklamların kullanıcılar üzerindeki etkisinin ölçülmesi de dahil edilebilir. Analitik çerezler, kullanıcıların web sitesini nasıl kullandıkları hakkında bilgi toplamak amacıyla kullanılır. Bu tür çerezler, kullanıcı deneyimini geliştirmeyi amaçlar ve kullanıcıların hangi sayfaları ziyaret ettikleri, hangi sayfalara tıkladıkları, sayfaları nasıl kaydırdıkları ve hangi saatlerde siteyi ziyaret ettikleri gibi bilgileri toplar. Analitik çerezler aracılığıyla işlenen kişisel veriler, pazarlama analiz çalışmalarının yürütülmesi, ziyaretçi kayıtlarının oluşturulması ve takip edilmesi gibi amaçlarla KVKK Madde 5/1 ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenir ve bu veriler yurt dışındaki çerez sağlayıcılarıyla paylaşılabilir.

        </p>
      </div>
      {/* 4.toggle */}
      <div className="flex w-full p-[10px] items-center justify-start gap-[14px] border-b border-[#a6a6a6]">
        <div
          onClick={() => setIsDropdown4Open(!isDropdown4Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[530px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowDown
              className={`w-[25px] h-[26px] transform transition-transform duration-300 ${
                isDropdown4Open ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] lg:text-[16px] font-medium leading-[26.667px] ">
          4. Fonksiyonel Çerezler
          </h4>
        </div>
        <div
          className={`w-[36px] h-[22px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.targeting ? "bg-[#34a853]" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("targeting")}
        >
          <div
            className={`w-[15px] h-[15px] bg-white rounded-full transition-transform duration-300 ${
              cookies.targeting ? "translate-x-[15px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown4Open
            ? "max-h-[200px] min-h-[60px] opacity-100 py-[10px] ml-[5%]"
            : "max-h-0 opacity-0  ml-[5%]"
        }`} >
        <p className="text-[#FFF] text-[13px] font-roboto leading-[150%]">
        İnternet sitemizdeki sistemlerin düzgün işleyişine yardımcı olmak adına kullanılan çerezlerdir.
        </p>
      </div>
    </div>,
    <div className="flex flex-col h-full w-[96%] ml-[2%] sm:w-[95%] lg:w-[99%] text-start text-[#FBFBFB] overflow-y-scroll overflow-x-hidden z-[9999] font-roboto thin-scrollbar pr-[2.5%] lg:pr-[5%]">
      <p className="text-[13px] font-normal leading-[19.5px] "></p>
      <span className='text-[12px] lg:text-[14px] font-roboto text-white  leading-[24px] font-normal'>Alpha Ashley Çerez Bilgilendirme ve Yönetim Sayfası        </span>
        <span>   * Çerez Politikası</span>
        <h4 className='lg:text-[15px] text-[13px] text-white font-semibold font-montserrat my-4'>WEB SİTESİ KULLANIMINA İLİŞKİN ÇEREZ AYDINLATMA METNİ</h4> 
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'><span className='font-semibold text-white'>ALPHA ASHLEY EĞİTİM DANIŞMANLIK LİMİTED ŞİRKETİ</span> olarak, ulusal veri koruma kanunumuz 6698 Sayılı Kişisel Verilerin Korunması Kanunu madde 10 gereğince, doğan aydınlatma yükümlülüğümüzü yerine getirmek için kişisel verileriniz hakkında yerinde bilgilendirme yapmak isteriz. </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'> İnternet sitemizin kullanımını daha basit bir hale getirmek, internet sitemizde sizin ve kurumumuzun hukuki ve ticari güvenliğinin sağlamak, internet sitemiz üzerinden yeni özellikler sunmak ve içeriğimizle etkileşim yolunuzu daha iyi tanımlamak ve internet sitemizin kullanımını kişiselleştirmek amacıyla çerezler kullanmaktayız. İnternet sitemizde neden çerez kullanıldığı, çerezleri kontrol etmeniz isteğinizin olması durumunda size yardımcı olmak istiyoruz.
        </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Birçok internet tarayıcısı çerezleri desteklemektedir; kullanıcılar tarayıcılarını çerez türlerine ya da özel çerezleri reddedecek ayarlamaları yapmakta özgürdürler. Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek, çerezleri engellemek ya da silmek için tarayıcınızın ayarlarını değiştirmek yeterli olacaktır. Önemle belirtmek gerekir ki, çerezlerin kullanımı reddedildiği takdirde internet sitesinin bazı işlevleri tam olarak etkilerini göstermeyebilir. Çerezler hakkında daha fazla bilgi için, “www.allaboutcookies.org” adresini ziyaret edebilirsiniz.</p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Veri Sorumlusu: <span className='font-semibold text-white'>ALPHA ASHLEY EĞİTİM DANIŞMANLIK LİMİTED </span> veri sorumlusudur.
        </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Siz değerli kullanıcılarımız dilediğiniz zaman cihazlarınızdaki program ve/veya işletim sistemi ve/veya internet tarayıcısının ayarlarından çerezleri düzenleyip kaldırabilirsiniz buna ek olarak anlık  bildirimleri durdurabilirsiniz. ( Bu durumda web sitemizden istediğiniz verimi alamayabilir ve anlık bildirimlerden haberdar olamayacağınızı hatırlatırız. ) 
        </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'><span className='font-semibold text-white'>ALPHA ASHLEY EĞİTİM DANIŞMANLIK LİMİTED ŞİRKETİ</span> olarak, internet sitemizde kullandığımız çerezlerin tür ve fonksiyonları değiştirebilir, farklı çerez türleri ekleyebilir ya da çerezleri kullanmaktan vazgeçebiliriz. İş bu <span className='font-semibold text-white'>“Çerez Aydınlatma Metni”</span> üzerinde dilediğimiz zaman değişiklik yapma hakkını saklı tutmaktayız. Güncel aydınlatma metnimiz üzerinde gerçekleştirilen her türlü değişiklik internet sitemizde ya da herhangi bir kamuya açık mecrada yayınlanmasını takriben yürürlük kazanacaktır. Güncel çerez aydınlatma metnimiz  için, belirli periyotlarla bu sayfayı kontrol etmenizi öneririz.
        </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'> Çerezler, web sitemizi ziyaretinizin ve buradaki deneyiminizin stabil bir şekilde gerçekleştirilmesinin ve bir sonraki kullanımınızda bilgilerinizin hatırlanmasının sağlanması, sitenin işleyişinin ve içeriğinin geliştirilmesi, site kullanımlarının istatistiksel olarak değerlendirilmesi, sitede yer alan içeriğin sizin ve cihazınız için en etkili şekilde sunulması ile kullanıcılara tercih ve kullanım alışkanlıkları doğrultusunda özelleştirilmiş hizmetler ve reklamlar sunulması amaçlarıyla kullanılmaktadır. Çerezler kullanım amaçları ve fonksiyonlarına göre çeşitli kategorilere ayrılmaktadır. 
        </p>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'><span className='font-semibold text-white'>ALPHA ASHLEY EĞİTİM DANIŞMANLIK LİMİTED ŞİRKETİ</span> olarak, tarafımızdan kullanılan çerezler; Aşağıda kategorilerine göre web sitemizde kullanılan çerezler ile ilgili çerezleri sağlayanlar, çerezler ile kullanım amaçlarına ve hukuki sebeplerine yer verilmiştir:</p>
       
        <h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>1. Zorunlu Çerezler</h5>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Web sitesinin kullanımı ve işlevselliği için elzem olan çerezlerdir. Bu çerezler devre dışı bırakıldığında, web sitesinin tamamına veya bir kısmına erişim mümkün olmayabilir. Zorunlu çerezler aracılığıyla işlenen kişisel veriler, ürün ve hizmetlerin sunulabilmesi ve mevzuata uygun şekilde faaliyetlerin yürütülmesi için gereklidir. Bu nedenle, KVKK Madde 5/2e hükümleri gereğince bir hakkın tesis edilmesi, kullanılması veya korunması amacıyla zorunlu veri işleme gerekliliği olduğunda bu çerezler kullanılmaktadır. <span className='font-semibold text-white'>Web sitemizde kullanılan zorunlu çerezlerin sağlayıcıları ve kullanım amaçları aşağıda belirtilmiştir:</span> </p>

        <h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>2. Pazarlama Çerezleri</h5>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Pazarlama amaçlı çerezler ile internet ortamında kullanıcıların çevrim içi hareketleri takip edilerek kişisel ilgi alanlarının saptanıp bu ilgi alanlarına yönelik internet ortamında kullanıcılara reklam gösterilmesi hedeflenen çerezlerdir. Kullanıcıların ilgi alanlarına göre reklam ve kampanyaların sunulması, pazarlama çalışmalarının etkinliğinin ölçülmesi amacıyla kullanılan çerezlerdir. Pazarlama çerezleri aracılığıyla işlenen kişisel veriler, ürün ve hizmetlerin pazarlama süreçlerinin yönetilmesi, pazarlama analiz çalışmalarının yürütülmesi, reklam, kampanya ve promosyon süreçlerinin yönetilmesi amacıyla KVKK Madde 5/1 ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenmektedir. Bu veriler, uluslararası çerez sağlayıcılarıyla paylaşılmaktadır, ancak açık bir şekilde belirtmek gerekirse, bu bilgilerin korunması ve gizliliği önemlidir.<span className='font-semibold'>Web sitemizde kullanılan pazarlama çerezlerinin sağlayıcıları ve kullanım amaçları aşağıda belirtilmiştir:</span></p>
       
        <h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>3. Analitik Çerezler</h5>
        <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>İnternet sitelerinde, kullanıcı davranışlarını analiz etmek amacıyla kullanılan çerezlerdir. Bu çerezler, genellikle web sitesinin iyileştirilmesine yardımcı olmak için kullanılır ve bu kapsamda reklamların kullanıcılar üzerindeki etkisinin ölçülmesi de dahil edilebilir. Analitik çerezler, kullanıcıların web sitesini nasıl kullandıkları hakkında bilgi toplamak amacıyla kullanılır. Bu tür çerezler, kullanıcı deneyimini geliştirmeyi amaçlar ve kullanıcıların hangi sayfaları ziyaret ettikleri, hangi sayfalara tıkladıkları, sayfaları nasıl kaydırdıkları ve hangi saatlerde siteyi ziyaret ettikleri gibi bilgileri toplar. Analitik çerezler aracılığıyla işlenen kişisel veriler, pazarlama analiz çalışmalarının yürütülmesi, ziyaretçi kayıtlarının oluşturulması ve takip edilmesi gibi amaçlarla KVKK Madde 5/1 ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenir ve bu veriler yurt dışındaki çerez sağlayıcılarıyla paylaşılabilir.
<span className='font-semibold'> Web sitemizde kullanılan analitik çerezler, sağlayıcıları ve kullanım amaçları aşağıda belirtilmiştir:</span>
</p>
<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>4. Fonksiyonel Çerezler</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>İnternet sitemizdeki sistemlerin düzgün işleyişine yardımcı olmak adına kullanılan çerezlerdir.</p>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Web sitemizden yapılan üçüncü taraf yönlendirmeler aşağıda belirtilmiştir:</p>
<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Diğer internet sitelerine bağlantılar</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>İnternet sitemizdeki içerikler üçüncü taraflara ait internet sitelerine bağlantılar içerebilir ve bu internet siteleri için, ilgili internet sitelerinin ve tüzel kişiliklerin veri koruma düzenlemeleri geçerli olup, şirketimizin düzenlemeleri geçerli değildir. Bu internet sitelerine ilişkin hiçbir sorumluluk kabul etmiyoruz. Üçüncü kişilere ait internet siteleriyle verilerinizi paylaşmadan önce onların veri koruma düzenlemelerine ilişkin yasal dökümanları okumalısınız.</p>
<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>İşlem Güvenliği</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verilerin korunması ve yetkisiz erişimin önlenmesi, <span className='font-semibold text-white'>ALPHA ASHLEY EĞİTİM DANIŞMANLIK LİMİTED ŞİRKETİ</span> tarafından son derece ciddi bir şekilde ele alınmaktadır. Danışanlar ve potansiyel danışanların  mağduriyet yaşamaması için gerekli teknik ve idari tedbirler titizlikle uygulanmaktadır. Bu tedbirler, yazılımların endüstri standartlarına uygunluğunu sağlamak, üçüncü tarafları dikkatle seçmek ve şirket içinde veri koruma politikasına sıkı bir şekilde uymak gibi unsurları içerir. Güvenlik önlemleri sürekli olarak gözden geçirilmekte ve iyileştirilmektedir. </p>

<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Sitemizi ziyaretinizle birlikte birtakım kişisel verileriniz çerezler dışında başka tanımlayıcılar aracılığıyla da işlenmektedir. Aşağıda sitemizde gezinme sürecinde işlenen kişisel verileriniz, verilerin işleme amaçları ve kanuni gerekçeleri hakkında detaylı bilgilendirileceksiniz. Sitemizde tüm gezinme süreçleri başlık halinde belirtilmiş olup, belirtilen süreçler içerisinde yer almanız durumunda ilgili başlığın alt kısmını okuyup doğrudan süreçler hakkında bilgi sahibi olabilirsiniz. </p>
<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Süreçlere Göre İşlenen Kişisel Verileriniz, İşlenme Amaçları ve Hukuki Sebepleri</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Web sitesi ziyaretinde birtakım logların alınması sürecinde;</p>

<table className="w-[98%] border-collapse mt-[15px] mb-[20px] text-[12px] lg:text-[14px] font-roboto">
    <thead>
      <tr className="color-[#232323]">
        <th className="border border-white p-[5px] text-left leading-normal">İşlenen Kişisel Verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal">İşleme Amaçları</th>
        <th className="border border-white p-[5px] text-left leading-normal">Hukuki Sebepleri</th>
        
      </tr>
    </thead>
    <tbody>
      <tr className=" text-gray-300 font-medium">
      <th className="border border-white p-[5px] text-left leading-normal  font-medium">İşlem Güvenliği (IP numarası ve IP Protokolü, URL, Ne Kadar Süre ile sayfada Kalındığı, MAC Adresi, Bağlantı başlangıç ve bitiş zamanı) verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">Bilgi Güvenliği Süreçlerinin Yürütülmesi (5651 Sayılı Kanun’da öngörülen log kayıtları için anılan bilgilerinizin elde edilmesi) amacıyla</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">KVKK Md.5/2(a): Kanunlarda açıkça öngörülme bendine istinaden (5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun m.5’te anılan yer sağlayıcının sorumluluğu başlığı altında anılan veri işleme faaliyetini gerçekleştirmemiz açıkça öngörülmektedir.)</th>
      
      </tr>
      <tr className=" text-gray-300 font-medium">
      <th className="border border-white p-[5px] text-left leading-normal  font-medium">İşlem Güvenliği (IP numarası ve IP Protokolü, URL, Ne Kadar Süre ile sayfada Kalındığı, MAC Adresi, Bağlantı başlangıç ve bitiş zamanı) verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">Saklama Ve Arşiv Faaliyetlerinin Yürütülmesi (5651 Sayılı Kanunda öngörülen log kayıtları için anılan bilgilerinizin saklanması) amacıyla</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">KVKK Md.5/2(a): Kanunlarda açıkça öngörülme bendine istinaden (5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun m.5’te anılan yer sağlayıcının sorumluluğu başlığı altında anılan verileri saklamamız kanunda açıkça öngörülmektedir.)</th>
      </tr>
      </tbody>
  </table>

  <p className='text-[14px] lg:text-[12px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>  Tarafımızca çerezlere ek olarak işlenmektedir.</p>

  <h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Anılan Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h5>
  <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verileriniz KVKK Md.28/1 çerçevesinde talep edilmesi halinde aydınlatma yükümlülüğü olmadan ve açık rızanız aranmadan ilgili makamlara aktarılabilir.
Bunun dışında öngörülemeyen durumlarda da kişisel verileriniz kanunlarda açıkça belirtilmiş durumlarda talep edilmesi halinde kanunlarda belirtilen kamu kurumlarına (Bakanlıklar gibi idari makamlara) kanunda öngörülen amaç ve sınırlamalar dahilinde aktarılabilir.
Aydınlatma yükümlülüğü olmayan ve açık rızanızı gerektirmeyen yasal yükümlülüklerimizin dışında; kişisel verilerinizin yurtiçine ya da yurtdışına aktarımı yapılmamaktadır.</p>

<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Kişisel verileri toplama yöntemleri </h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verileriniz, web sitemizi ziyaret etmeniz yoluyla otomatik yöntemlerle elde edilmektedir.Sitemizde danışma talebiniz için aranmak istiyorsanız:</p>

<table className="w-[98%] border-collapse mt-[15px] mb-[20px] text-[12px] lg:text-[14px] font-roboto">
    <thead>
      <tr className="color-white">
        <th className="border border-white p-[5px] text-left leading-normal">İşlenen Kişisel Verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal">İşleme Amaçları</th>
        <th className="border border-white p-[5px] text-left leading-normal">Hukuki Sebepleri</th>
        
      </tr>
    </thead>
    <tbody>
      <tr className=" text-gray-300 font-medium">
      <th className="border border-white p-[5px] text-left leading-normal  font-medium">Kimlik (Ad, Soyad, Cinsiyet, Uyruk, Doğum Tarihi), İletişim (Telefon, E-Posta), Müşteri İşlem (Hizmet Seçimi) verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">Hizmet Satış Süreçlerinin Yürütülmesi Amacıyla</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">KVKK Md.5/2(c): Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması bendine istinaden (Hizmet sözleşmemizi ifa edebilmemiz için rezervasyon/randevu bilgilerinizi işlememiz gereklidir.)</th>
      
      </tr>
      <tr className=" text-gray-300 font-medium">
      <th className="border border-white p-[5px] text-left leading-normal  font-medium">Kimlik (Ad, Soyad, Cinsiyet, Uyruk, Doğum Tarihi), İletişim (Telefon, E-Posta), Müşteri İşlem (Hizmet Seçimi) verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">Saklama Ve Arşiv Faaliyetlerinin Yürütülmesi (Randevu ve geri aranma) Amacıyla</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">KVKK Md.5/2(e): Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması bendine istinaden (Olası bir uyuşmazlıkta haklarımızı koruyabilmemiz için rezervasyon/randevu/geri aranma kayıtlarını makul sürelerle saklamaktayız.)</th>
      </tr>

      <tr className=" text-gray-300 font-medium">
      <th className="border border-white p-[5px] text-left leading-normal  font-medium">İletişim (GSM,Email) verileriniz</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">Bilgi Güvenliği Süreçlerinin Yürütülmesi (Bilgilerinizin Doğrulanması) Amacıyla</th>
        <th className="border border-white p-[5px] text-left leading-normal  font-medium">KVKK Md.5/2(e): Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması bendine istinaden (Bilgilerinizi doğrulamamız veri sorumlusu olarak bir hakkın tesisi, kullanılması ve korunması için gereklidir.)</th>
      </tr>
      </tbody>
  </table>

  <p className='text-[14px] lg:text-[12px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>  Tarafımızca ek olarak işlenmektedir.</p>
  <h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Anılan Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği  </h5>
  <p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verileriniz KVKK Md.28/1 çerçevesinde talep edilmesi halinde aydınlatma yükümlülüğü olmadan ve açık rızanız aranmadan ilgili makamlara aktarılabilir.
Bunun dışında öngörülemeyen durumlarda da kişisel verileriniz kanunlarda açıkça belirtilmiş durumlarda talep edilmesi halinde kanunlarda belirtilen kamu kurumlarına öngörülen amaç ve sınırlamalar dahilinde aktarılabilir.
Aydınlatma yükümlülüğü olmayan ve açık rızanızı gerektirmeyen yasal yükümlülüklerimizin dışında; kişisel verilerinizin aktarımı yapılmamaktadır.</p>

<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Kişisel Verilerin Elde Edilme Yöntemleri  </h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verileriniz internet ortamında otomatik yöntemlerle elde edilmektedir.</p>

<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Çerezler aracılığıyla elde edilen kişisel verilerinize;</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Kişisel verilerinizin işlenip işlenmediğini öğrenme, (b) Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme, (c) Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, (ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme, (d) Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, (e) Kişisel verilerinizin işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerinizin silinmesini veya yok edilmesini isteme, (f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, (g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme, (ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.

Kişisel verilerinize ilişkin işbu haklarınızı <span className='font-semibold'>VERİ SORUMLUSUNA BAŞVURU FORMUMUZU</span>doldurmak suretiyle yazılı olarak ya da kayıtlı elektronik posta  adresi, güvenli elektronik imza, mobil imzanızı kullanmak suretiyle tarafımıza iletebilirsiniz.
</p>

<h5 className='text-[12px] lg:text-[14px] font-roboto text-white my-[10px] lg:my-[20px] leading-[24px] font-medium'>Çerezlerin Kullanımını Nasıl Engellersiniz?</h5>
<p className='text-[12px] lg:text-[14px] font-roboto text-gray-300 my-[10px] lg:my-[20px] leading-[24px] font-normal'>Çerezlerin kullanılması, web sitesinin daha iyi hizmet vermesine yardımcı olur, ancak isterseniz çerezlerin kullanımını engelleyebilirsiniz. Çerezleri engellemek için internet tarayıcınızın ayarlarını değiştirmeniz gerekmektedir. Bu ayarlar, kullandığınız cihaza ve tarayıcıya göre değişiklik gösterebilir. Aşağıda, çerezlerin kullanımını engellemek için farklı internet tarayıcıları üzerinden izlenmesi gereken adımlar hakkında bilgiler bulunmaktadır:</p>

<ol className='font-semibold text-white text-[12px] lg:text-[14px] font-roboto items-start text-start justify-start w-[80%] my-4 list-decimal list-inside ml-2'>Microsoft Edge
  <li className='font-normal text-gray-300'>Microsoft Edge tarayıcınızın sağ üst köşesinde bulunan üç nokta simgesine tıklayın ve Ayarlar'a gidin.</li>
  <li className='font-normal text-gray-300'>Temizlenecek Öğeleri Seç seçeneğine tıklayın ve temizlemek istediğiniz bölümleri seçin.</li>
  <li className='font-normal text-gray-300'> Seçiminizi yaparak temizleme işlemine başlayabilirsiniz.</li>
</ol>

<ol className='font-semibold text-white text-[12px] lg:text-[14px] font-roboto items-start text-start justify-start w-[80%] my-4 list-decimal list-inside ml-2'>Google Chrome
  <li className='font-normal text-gray-300'>Bilgisayarınızda Chrome'u açın.</li>
  <li className='font-normal text-gray-300'>Sağ üst köşede bulunan Diğer Ayarlar'ı tıklayın </li>
  <li className='font-normal text-gray-300'> Gelişmiş'i tıklayın.</li>
  <li className='font-normal text-gray-300'> Gizlilik ve Güvenlik" altında İçerik Ayarları'nı seçin.</li>
  <li className='font-normal text-gray-300'>Çerezler'e tıklayın.</li>
  <li className='font-normal text-gray-300'>"Tüm çerezler ve site verileri" altında istediğiniz web sitesini bulun.</li>
  <li className='font-normal text-gray-300'> Sitenin yanındaki Kaldır simgesine tıklayın.</li>
</ol>



<ol className='font-semibold text-white text-[12px] lg:text-[14px] font-roboto items-start text-start justify-start w-[80%] my-4 list-decimal list-inside ml-2'>Mozilla Firefox

  <li className='font-normal text-gray-300'>Firefox Menü düğmesine tıklayın ve Seçenekler'i seçin.</li>
  <li className='font-normal text-gray-300'>Gizlilik ve Güvenlik bölümünü seçin, ardından Geçmiş bölümüne gidin.  </li>
  <li className='font-normal text-gray-300'> "Firefox, geçmiş için özel ayarları kullan" seçeneğini işaretleyin.</li>
  <li className='font-normal text-gray-300'> Çerezleri göster... düğmesine tıklayın.</li>
  <li className='font-normal text-gray-300'>Arama: alanına, silmek istediğiniz web sitesinin adını yazın.  </li>
  <li className='font-normal text-gray-300'>Silmek istediğiniz çerezleri seçin ve Seçilenleri Sil'e tıklayın.  </li>
  <li className='font-normal text-gray-300'> Çerezler penceresini kapatın ve ardından about:preferences sayfasını kapatın.  </li>
</ol>

<ol className='font-semibold text-white text-[12px] lg:text-[14px] font-roboto items-start text-start justify-start w-[80%] my-4 list-decimal list-inside ml-2'>Safari
  <li className='font-normal text-gray-300'>Safari `{'>'}` Tercihler'i seçin.</li>
  <li className='font-normal text-gray-300'>Gizlilik öğesini tıklayın. </li>
  <li className='font-normal text-gray-300'> Web Sitesi Verilerini tıklayın.</li>
  <li className='font-normal text-gray-300'> Bir veya daha fazla web sitesi seçin ve sonra Sil veya Tümünü Sil'e tıklayın.  </li>
</ol>

<ol className='font-semibold text-white text-[12px] lg:text-[14px] font-roboto items-start text-start justify-start w-[80%] my-4 list-decimal list-inside ml-2'>Internet Explorer
  <li className='font-normal text-gray-300'>Bilgisayarınızın masaüstünde Internet Explorer simgesine tıklayın.</li>
  <li className='font-normal text-gray-300'>Araçlar düğmesine ve ardından İnternet Seçenekleri'ne tıklayın.  </li>
  <li className='font-normal text-gray-300'> Gizlilik sekmesine tıklayın, sonra tüm tanımlama bilgilerini engellemek için Ayarlar altında bulunan kaydırıcıyı yukarıya çekin ve Tamam düğmesine tıklayın.</li>
</ol>
      
    </div>,
    // second text
    <div className="flex flex-col h-full text-start items-start justify-start w-[96%]">
      <p className="text-[13px] font-normal leading-[150%] font-montserrat">
      Web sitemizi ziyaret ettiğinizde, tarayıcınıza çerezler aracılığıyla bazı bilgiler kaydedilebilir. Bu bilgiler siteyi daha verimli kullanmanızı sağlar ve deneyiminizi kişiselleştirmek için kullanılır. Dilerseniz bazı çerez türlerini devre dışı bırakabilirsiniz; ancak bu, sitenin bazı işlevlerini etkileyebilir. Tercihlerinizi çerez kategorileri üzerinden kolayca yönetebilirsiniz.
      </p>
    </div>,
  ];
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
    // Eğer component henüz mount olmadıysa, hiçbir şey render etmeyelim.
    if (!hasMounted) {
      return null;
    }
  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0 bg-[rgba(29,29,27,0.70)] backdrop-blur-[10px] right-0 left-0 w-screen items-center justify-center">
        <div className="flex flex-col md:flex-row w-[94%] md:w-[99%] lg:w-[94%] xl:w-[80%] xl:max-w-[1270px] py-[25px] gap-[20px] font-montserrat text-center items-center justify-center text-[#FBFBFB] font-roboto">
          <p className="md:hidden text-[13px] lg:text-[14px] leading-[130%] text-[#FBFBFB] font-normal font-roboto text-center md:min-w-[39%] lg:w-[]">
            <span className="font-medium underline">Çerez Kullanıyoruz: </span>  İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerini kullanıyoruz.<br />
            <Link href="/cookies" className="font-medium underline">
            Daha fazlasını oku{" "}
            </Link>
            çerezler hakkında</p>
          <div className="md:flex hidden text-[14px] leading-[130%] text-[#FBFBFB] font-normal font-roboto text-center xl:text-start sm:w-[45%] md:min-w-[38%] ml-[2%] ">
            <p>
              <span className="font-medium underline">Çerez Kullanıyoruz: </span> İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerini kullanıyoruz.
              <Link href="/" className="font-medium underline">
              Daha fazlasını oku{" "}
              </Link>
              çerezler hakkında
            </p>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-row md:gap-[20px] xl:gap-[30px] w-full items-center justify-center gap-[13px] lg:gap-[1vw] mr-[2%]  ">
            <button
              className="text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap lg:px-[20px] py-[10px] cursor-pointer  "
              onClick={handleDenyAll}>
            Tüm Çerezleri Reddet
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex lg:hidden text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] md:px-[20px] cursor-pointer  ">
             Tüm Çerezleri Kabul Et
            </button>
            <button
              onClick={handleModalToggle}
              className="text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer col-span-2 ">
              Çerez Tercihlerini Yönet
            </button>
            <button
              onClick={handleAcceptAll}
              className="hidden lg:flex text-[13px] lg:text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] md:px-[20px] cursor-pointer  ">
              Tüm Çerezleri Kabul Et
            </button>
            {isModalOpen && (
              <ModalPortal onClose={handleModalToggle}>
                <div className="flex flex-col items-center justify-center gap-[15px] lg:gap-[39px]">
                  <div className="flex w-[90%] items-start justify-between lg:mt-[27px] lg:gap-[23px] mt-[10%] md:mt-[83px] lg:h-[39px] h-[52px]">
                   
                    <div className="hidden lg:flex flex-row w-[98%] md:w-[90%] lg:w-auto text-center items-center text-[16px] font-bold ml-[11%] lg:ml-0 gap-[23px] h-[29px]">
                      {[
                        "Çerez Politikası",
                        "Çerez Açıklama Metni",
                        "Çerezler Nedir?",
                      ].map((buttonLabel, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedContent(index)}
                          className={
                            selectedContent === index
                              ? "text-white text-[15px] lg:text-[16px] font-roboto leading-normal font-medium w-[60%] max-w-[191px] cursor-pointer p-[10px] border-b  whitespace-nowrap  items-start justify-start text-start underline] h-[48px] lg:h-[37px]"
                              : " text-[15px] lg:text-[16px] font-roboto leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer p-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px]"}>
                          {buttonLabel}
                        </button>
                      ))}
                    </div>
                    <button
                      className="flex text-[40px] text-stoneLight text-white items-center justify-center h-full"
                      onClick={handleModalToggle}>
                      <RxCross2 size={24} color="#fff" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center pb-2 lg:pb-0 md:h-[100%] text-[#FBFBFB] max-w-screen  h-auto">
                    <div className="flex flex-col w-[95%] lg:w-[100%] justify-center items-center lg:items-start lg:justify-start gap-[14.5px] lg:gap-[15px] ">
                      <div className="flex flex-row lg:hidden text-start text-[16px] lg:-ml-[4%] font-bold gap-[10px] w-[90%] lg:w-[100%] lg:mb-[36px] items-center justify-start overflow-x-auto scrollbar-thin">
                        {orderedButtons.map((button) => (
                          <button
                            key={button.id}
                            onClick={() => setSelectedContent(button.id)}
                            className={
                              selectedContent === button.id
                                ? "text-white text-[15px] lg:text-[16px] font-roboto leading-normal font-medium w-fit cursor-pointer pt-[10px] px-[10px] border-b whitespace-nowrap items-start justify-start text-start h-[48px] lg:h-[37px]"
                                : "text-[15px] lg:text-[16px] font-roboto leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer pt-[10px] px-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px] w-fit"
                            }
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                      {/* Dinamik Başlık */}
                      <button className="hidden lg:flex text-[16px] font-medium text-[#FBFBFB] font-roboto leading-normal border-b border-[#FBFBFB] lg:ml-[7%]">
                        {["Çerez Politikası", "Çerez Açıklama Metni","Çerezler Nedir?", ][selectedContent] }
                      </button>
                      <div className="flex flex-col w-[88%] h-[54vh] md:h-[55vh] lg:h-[376px] lg:w-[85%] ml-[2%] lg:ml-[7%] mt-[2vw] lg:mt-0 items-start justify-start text-start ">
                        {/* Dinamik Başlık */}
                        {/* İçerik */}
                        {contents[selectedContent]}
                      </div>
                      <div className="hidden lg:flex items-center justify-center w-[100%] gap-[13px] lg:gap-[37px] mb-[20px] lg:mt-[21.5px] lg:mb-6 font-roboto">
                        <button onClick={handleDenyAll} className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[170px]">
                        Tüm Çerezleri Reddet
                        </button>
                        <button onClick={handleAcceptAll} className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[184px]">
                        Tüm Çerezleri Kabul Et
                        </button>
                      </div>
                      <div className="absolute bottom-[14vh] sm:bottom-[12%] flex lg:hidden items-center justify-center w-[100%] gap-[13px] font-roboto">
                        <button onClick={handleDenyAll} className="text-[12px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[170px] w-[44vw]">
                        Tüm Çerezleri Reddet
                        </button>
                        <button onClick={handleAcceptAll} className="text-[12px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap min-w-[184px] w-[44vw]">
                        Tüm Çerezleri Kabul Et
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalPortal>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;