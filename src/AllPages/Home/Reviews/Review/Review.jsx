
// import Swiper core and required modules
// import { Pagination, Autoplay } from "swiper/modules";
// import { Swiper, } from "swiper/react";

// img slider

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
   
   const { name, url, description } = review;
   return (
      <div className="">
         <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
         >
            <SwiperSlide className="">
               {/* <p className="text-white text-center md:px-[580px] ">{description}</p>
               <div>
                  <img className="w-20 h-20 mx-auto rounded-full" src={url} alt="" />
                  <div className="  text-white py-2 px-10 text-center ">
                     <h3 className="text-xl font-bold font-classic">{name}</h3>
                     <p className="text-sm font-style flex items-center gap-2 justify-center">
                        Riding:
                        <span className="flex items-center text-yellow-500 ">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </span>
                     </p>
                  </div>
               </div> */}
               <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                  <div className="flex justify-between p-4">
                     <div className="flex space-x-4">
                        <div>
                           <img src={url} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                           <h4 className="font-bold">{name}</h4>
                           <span className="text-xs text-gray-400">Guest</span>
                        </div>
                     </div>
                     <div className="flex items-center space-x-2 text-yellow-500">
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                        
                     </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm text-gray-400">
                     <p>{description}</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
      // <div>
      //    <div className="flex gap-4">
      //       <div className="border w-1/2 ">
      //          <Swiper
      //             // install Swiper modules
      //             modules={[Pagination, Autoplay]}
      //             spaceBetween={50}
      //             slidesPerView={1}
      //             autoplay
      //          ></Swiper>
      //       </div>
      //    </div>
      // </div>
   );
};

export default Review;
