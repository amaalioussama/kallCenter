import Image from "next/image";
import startup from "../../public/dzonexp.png";
import amex from "../../public/amex.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Sclivraison = () => {
  return (
    <div className="bg-white items-center justify-center text-white relative overflow-hidden shadow-2xl">  
      <div className="mt-9">
        <h1 id="tit" className="text-center text-5xl font-arabic mt-9 text-firstbule">شركات التوصيل الشريكة</h1>
      </div>
      <div className=" flex justify-center mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1} 
          autoplay={{ delay: 2000 }} 
          loop={true} 
          className="flex justify-between"
        >
          <SwiperSlide id="swip">
            <Image src={startup} className=" h-14 w-32" alt="Startup Logo" id="startup" objectFit="contain"  style={{marginLeft : '600px'}} />
          </SwiperSlide>
          <SwiperSlide  id="swip">
            <Image src={amex} className="  h-14 w-32" alt="Startup Logo" id="startup" objectFit="contain" style={{marginLeft : '600px'}} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-white h-11"></div>
    </div>
  );
};

export default Sclivraison;
