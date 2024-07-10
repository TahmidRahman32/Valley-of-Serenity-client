import { FaSwimmingPool } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdSoupKitchen } from "react-icons/md";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SuiteRoom = () => {
   return (
      <div>
         <div className="flex gap-16">
            <div className="border w-1/2">
               <Swiper
                  // install Swiper modules
                  modules={[Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  
               >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  ...
               </Swiper>
            </div>
            <div className="space-y-7">
               <h1 className="text-5xl font-semibold font-classic">SUPERIOR ROOM</h1>
               <p className="font-classic">
                  Enjoy a comfortable stay in our cozy Superior Room. With a queen-size bed and modern amenities, it’s perfect for solo travelers or couples looking for a convenient and affordable accommodation option. The room features a private
                  bathroom with shower, complimentary toiletries, and a work desk.
               </p>
               <p className="font-classic">Stay connected with complimentary Wi-Fi and unwind with selection of cable channels on the flat-screen TV. Wake up to a complimentary continental breakfast to start your day right. </p>
               <div className="flex gap-8">
                  <div className="border-2  py-12 px-6 text-center hover:bg-[#205d9f1A]">
                     <IoBedOutline size={40} className="mx-auto " />
                     <p className="text-xl font-style">Queen Bed Qualities</p>
                  </div>
                  <div className="border-2  py-12 px-6 text-center hover:bg-[#205d9f1A]">
                     <FaSwimmingPool size={40} className="mx-auto " />
                     <p className="text-xl font-style">With Pool Access</p>
                  </div>
                  <div className="border-2  py-12 px-6 text-center hover:bg-[#205d9f1A]">
                     <MdSoupKitchen size={40} className="mx-auto " />
                     <p className="text-xl font-style">Full Kitchen Facility</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SuiteRoom;
