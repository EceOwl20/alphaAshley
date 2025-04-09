"use client";
import { useState, useEffect } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        marka:'',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form gönderildi")
        // const res = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData),
        // });
    
        if (res.ok) {
          alert(`${t("popupMessage")}`);
        } else {
          alert(`${t("popupError")}`);
        }
      };

  return (
    <div>
       <div className='flex flex-col w-screen lg:w-[50vw] lg:h-[70vh] items-center justify-center bg-white py-[20px]'>
        <div className='flex flex-col items-center justify-center gap-[15px] lg:gap-[25px] mb-[25px] lg:mb-[52px]'>
            <h5 className='text-[#232323] font-bold text-[32px] leading-[40px] uppercase'>BİZE ULAŞIN</h5>
            <span className='text-[14px] leading-[24px] font-normal text-[#6F6F6F]'>Detaylar için hemen görüşelim.</span>
        </div>
        <form onSubmit={handleSubmit}  className="flex flex-col gap-4 w-[90%] text-start items-center text-[14px] font-montserrat">
      
     <div className="flex flex-col lg:flex-row w-full gap-[30px] items-center justify-center">
     <div className="flex flex-col w-full">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="İsim soyad"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-[25px] py-[18px] border border-gray-300 text-black placeholder:text-[#808080]"
          required
        />
      </div>
      <div className="flex flex-col w-full">
     
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-[25px] py-[18px] border border-gray-300 text-black placeholder:text-[#808080]"
        />
      </div>
     </div>

  <div className="flex flex-col lg:flex-row w-full gap-[30px] items-center justify-center">
  <div className="flex flex-col w-full">
        <input
          type="email"
          id="email"
          name="email"
           placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-[25px] py-[18px] border border-gray-300 text-black placeholder:text-[#808080]"
          required
        />
      </div>

      <div className="flex flex-col w-full">
        <input
          id="marka"
          name="marka"
          placeholder="Marka"
          value={formData.marka}
          onChange={handleChange}
          className="w-full px-[25px] py-[18px] border border-gray-300 text-black placeholder:text-[#808080]"
          required
        />
      </div>
  </div>
    
      <div className="flex flex-col w-full">
      
        <textarea
          id="message"
          name="message"
           placeholder="Mesaj"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-[25px] py-[18px] border border-gray-300 text-black placeholder:text-[#808080] h-[200px]"
          required
        />
      </div>
      <button className="px-[34px] py-[9px] min-w-[135px] bg-white mt-5 hover:bg-[#232323] border-[2px] border-[#232323] text-[#232323] hover:text-white text-[13px] leading-[25px] cursor-pointer font-semibold transition duration-300 ease-in-out uppercase tracking-[5px] font-montserrat">
        Gönder
      </button>
    </form>
    </div>
    </div>
  )
}

export default Form
