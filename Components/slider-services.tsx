
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";

const SliderServices = () => {
    return ( 
        <Swiper
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 15  
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 15
            },
        }}
        
        freeMode={true}
        pagination={{
            clickable : true
        }}
        modules={[Pagination]}
        className='h-[280px] mb-9 md:h-[340px] w-[270px] md:w-[550px]'>
            {serviceData.map((item, index) =>(
                <SwiperSlide key={index}>
                <div
                  className="flex flex-col sm:flex-col md:flex-row items-start gap-4 px-6 py-8 h-auto md:h-[290px] rounded-lg 
                  cursor-pointer bg-[rgba(21,63,101,0.15)] group 
                  hover:bg-[rgba(112,189,249,0.15)] hover:border hover:border-secondary 
                  transition-all duration-300"
                >
                  <div className="text-4xl text-secondary">{item.icon}</div>
              
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
     );
}
 
export default SliderServices;