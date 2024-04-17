import Image from "next/image";
import startup from "../../public/dzonexp.png";
import Marquee from "react-fast-marquee";
import amex from "../../public/amex.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sclivraison = () => {
  return (
    <div className="bg-white items-center justify-center text-white relative overflow-hidden shadow-2xl">  
      <div className="mt-9">
        <h1 className="text-center text-5xl font-arabic mt-9 text-firstbule">شركات التوصيل الشريكة</h1>
      </div>
      <div className="mt-12 flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true} 
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Image src={startup} className="h-14 w-32"alt="Startup Logo" objectFit="contain"/></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" objectFit="contain"/></SwiperSlide>
          <SwiperSlide><Image src={startup} className="h-14 w-32"  objectFit="contain"  alt="Startup Logo"  /></SwiperSlide>
             <SwiperSlide><Image src={amex} className="h-14 w-32" alt="Startup Logo" /></SwiperSlide>

        </Swiper>
      </div>
      <div className="bg-white h-11"></div>
    </div>
  );
};

export default Sclivraison;
