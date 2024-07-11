import { FaSwimmingPool } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdSoupKitchen } from "react-icons/md";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// img slider
import livingimg1 from '../../../assets/livingrooms/pexels-fotoaibe-1571453.jpg';
import livingimg2 from '../../../assets/livingrooms/pexels-fotoaibe-1571470.jpg';
import livingimg3 from '../../../assets/livingrooms/pexels-fotoaibe-1643383.jpg';
import livingimg4 from '../../../assets/livingrooms/pexels-fotoaibe-1669799.jpg';
import livingimg5 from '../../../assets/livingrooms/pexels-itsterrymag-2988860.jpg';
import livingimg6 from '../../../assets/livingrooms/pexels-jvdm-1457842.jpg';
import livingimg7 from '../../../assets/livingrooms/pexels-pixabay-276724.jpg';

const LivingRoom = () => {
   return (
      <div>
         <div>
            <div className="flex gap-4">
               <div className="border w-1/2 ">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination, Autoplay]}
                     spaceBetween={50}
                     slidesPerView={1}
                     autoplay
                  >
                     <SwiperSlide className="relative ">
                        <img className="h-[830px] " src={livingimg1} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg2} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg3} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg4} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg5} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg6} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl">ROOM</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <img className="h-[830px]" src={livingimg7} alt="" />
                        <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                           <h3 className="text-3xl font-bold font-classic">10+</h3>
                           <p className="font-classic  text-xl"> LIVING ROOM</p>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
               <div className="space-y-7">
                  <h1 className="text-5xl font-semibold font-classic">LIVING ROOM</h1>
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
                  <div className="flex gap-16 pt-10">
                     <button className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-black border text-gray-500 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg">
                        <span className="relative z-10 font-classic flex items-center gap-2">BOOk NOW</span>
                     </button>
                     <button className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-black border text-gray-500 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg">
                        <span className="relative z-10 font-classic flex items-center gap-2 uppercase">view details</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LivingRoom;
