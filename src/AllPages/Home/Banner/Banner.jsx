// import slider1 from '../../../assets/slider/lobby1.png'
// import slider2 from '../../../assets/slider/lobby2.png'
// import slider3 from '../../../assets/slider/lobby3.png'
// import Swiper core and required modules
import { Navigation, Pagination ,Autoplay} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "react-datepicker/dist/react-datepicker.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerText from "../BannerText/BannerText";

const Banner = () => {
   return (
      <div className="">
         <Swiper
            // install Swiper modules
            modules={[ Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
           speed={1500}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide className="bg-slider1 md:min-h-[calc(100vh-112px)] bg-center bg-cover rounded-md">
               <BannerText></BannerText>
            </SwiperSlide>
            <SwiperSlide className="bg-slider2 min-h-[calc(100vh-112px)] bg-center bg-cover">
               <BannerText></BannerText>
            </SwiperSlide>
            <SwiperSlide className="bg-slider3 min-h-[calc(100vh-112px)] bg-center bg-cover">
               <BannerText></BannerText>
            </SwiperSlide>
            <SwiperSlide className="bg-slider4 min-h-[calc(100vh-112px)] bg-center bg-cover">
               <BannerText></BannerText>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
