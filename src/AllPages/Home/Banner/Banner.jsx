// import slider1 from '../../../assets/slider/lobby1.png'
// import slider2 from '../../../assets/slider/lobby2.png'
// import slider3 from '../../../assets/slider/lobby3.png'
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { ReactTyped } from "react-typed";
import MovingText from "react-moving-text";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Banner = () => {
   return (
      <div className="">
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide className="bg-slider1 min-h-[calc(100vh-112px)] bg-center bg-cover rounded-md">
               <div className="flex justify-center items-center min-h-[calc(100vh-112px)] rounded-md bg bg-gradient-to-r from-[#01091380] to-[#20215130]">
                  <div className="text-white text-center">
                     <h5 className="text-2xl font-sc">Welcome to Luxeliving</h5>
                     <h1 className="text-6xl font-style font-bold">
                        <ReactTyped strings={["Discover the art of"]} typeSpeed={300} loop />
                     </h1>

                     <MovingText type="blur" duration="5000ms" delay="index * 1000ms" direction="normal" timing="ease-in-out" iteration="infinite" fillMode="backwards">
                        <h1 className="text-6xl font-style font-bold text-yellow-500"> Vacationing</h1>
                     </MovingText>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-slider2 min-h-[calc(100vh-112px)] bg-center bg-cover">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-slider3 min-h-[calc(100vh-112px)] bg-center bg-cover">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-slider4 min-h-[calc(100vh-112px)] bg-center bg-cover">Slide 4</SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
