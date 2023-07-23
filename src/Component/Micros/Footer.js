import React from "react";
import { logo } from '../../Asset/index';
import { company, feature, contact } from '../../Contans';

export default function Footer() {
  return (
    <>
      <section className="bg-[#232340] pb-5 pt-10 font-LexendDeca">
        <footer className="overflow-hidden w-screen container py-10 md:h-auto sm:h-auto sm:gap-5 sm:px-5 lg:h-[400px] md:px-10 mx-auto grid grid-cols-12 flex lg:gap-20 md:gap-5 sm:flex-col">
        <div className="sm:col-span-12 lg:col-span-3 md:col-span-12 flex-col gap-5 flex w-full">
            <img src={logo} alt="" style={{ width: '170px', height: '80px' }} />
            <p className="w-full sm:text-[15px] lg:px-10 text-white md:text-[15px] lg:text-[17px]">Collaboration platform <br className="hidden sm:block" />for modern teams</p>
          </div>
          <div className="sm:order-3 sm:col-span-12 lg:col-span-2 md:col-span-4 gap-2 flex-col flex justify-start items-start">
            <div className="w-full justify-start flex items-start md:text-[20px] lg:text-[26px] pt-4 text-[#5468E7]">Company</div>
            {company.map((item, index) => (
              <a className="text-white text-[15px]" href="" key={index}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="sm:order-4 sm:col-span-12 lg:col-span-2 md:col-span-4 gap-2 flex-col flex justify-start items-start">
            <div className="w-full justify-start flex items-start md:text-[20px] lg:text-[26px] pt-4 text-[#5468E7]">Features</div>
            {feature.map((item, index) => (
              <a className="text-white text-[15px]" href="" key={index}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="sm:order-5 sm:col-span-12 lg:col-span-2 md:col-span-4 gap-2 flex-col flex justify-start items-start">
            <div className="w-full justify-start flex items-start md:text-[20px] lg:text-[26px] pt-4 text-[#5468E7]">Contact Us</div>
            {contact.map((item, index) => (
              <a className="text-white text-[15px]" href="" key={index}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:order-last lg:order-last sm:order-2 sm:col-span-12 lg:col-span-3 md:col-span-12 gap-2 flex-col flex justify-start items-start">
            <div className="w-full justify-start flex items-start text-[26px] pt-4 text-[#5468E7]">Stay up to date</div>
            <p className="text-white">Subscribe to our newsletter</p>
            <div className="w-full lg:w-[100%] sm:w-[200%] md:w-[55%] h-5 my-4 relative justify-between flex items-center">
        <input
  type="text"
  className="text-white px-2 bg-opacity-50 bg-[#f5f5f5] lg:w-full sm:w-full md:w-full py-2 placeholder:text-white rounded-md focus:outline-none"
  placeholder="Email"
/>

       <div className="absolute top-1/2 transform -translate-y-1/2 px-2 right-0 text-white">
  
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      id="_24x24_On_Light_Next"
      data-name="24x24/On Light/Next"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="view-box" width="24" height="24" fill="#141124" opacity="0" />
      <path
        id="Shape"
        d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
        transform="translate(4.25 7.25)"
        fill="#ffffff"
      />
    </svg>
</div>


        </div>
          </div>
        </footer>
        <div className="flex justify-center items-center">
          <p className="text-[15px] text-white">© Copyright Team Inc.</p>
        </div>
      </section>
    </>
  )
}
