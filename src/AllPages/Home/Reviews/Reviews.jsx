// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ClipLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
   const {
      isPending,
      isError,
      error,
      data: reviews = [],
   } = useQuery({
      queryKey: ["reviews"],
      queryFn: async () => {
         const res = await fetch("https://assignment-11-server-delta-ruddy.vercel.app/reviews");
         return res.json();
      },
   });

   if (isPending) {
      return (
         <div className="text-center">
            <ClipLoader />
         </div>
      );
   }

   if (isError) {
      return (
         <div className="text-center">
            <p>{error.message}</p>
         </div>
      );
   }
   return (
      <div className="">
         <div className="text-center text-3xl my-8 font-bold font-classic">
            <h2>User Reviews</h2>
         </div>
         <div className="bg-reviewPic bg-center bg-cover h-96">
            <div className="bg-gradient-to-r flex items-center from-[#000a0eCC] to-[#02080dA8] h-96">
               <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  speed={1300}
                  autoplay
                  coverflowEffect={{
                     rotate: 50,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
               >
                  <div className="">
                     {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                           <div className="flex justify-center items-center  max-w-2xl mx-auto text-white">
                              <div className="text-center text-white">
                                 <div className="space-x-4 mx-auto">
                                    <img src={review.url} alt="" className="object-cover w-16 h-16 rounded-full bg-gray-500 mx-auto" />
                                    <div>
                                       <h4 className="font-bold">
                                          {review.name} (<span className="text-xs font-normal">Guest</span>)
                                       </h4>
                                    </div>
                                    <div className="flex justify-center space-x-2 text-yellow-500">
                                       <FaStar></FaStar>
                                       <FaStar></FaStar>
                                       <FaStar></FaStar>
                                       <FaStar></FaStar>
                                       <FaStar></FaStar>
                                    </div>
                                 </div>

                                 <div className="md:px-28 my-8 text-sm ">
                                    <p>{review.description}</p>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </div>
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
