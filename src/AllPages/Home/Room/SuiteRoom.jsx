import { FaSwimmingPool } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdSoupKitchen } from "react-icons/md";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// img slider
import roomSlider1 from "../../../assets/rooms/slider1.jpg";
import roomSlider2 from "../../../assets/rooms/slider2.jpg";
import roomSlider3 from "../../../assets/rooms/slider3.jpg";
import roomSlider4 from "../../../assets/rooms/slider4.jpg";
import roomSlider5 from "../../../assets/rooms/slider5.jpg";
import roomSlider6 from "../../../assets/rooms/slider6.jpg";
import roomSlider7 from "../../../assets/rooms/slider7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const SuiteRoom = () => {
   return (
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
                     <img className="h-[830px] " src={roomSlider1} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider2} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider3} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider4} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider5} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider6} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img className="h-[830px]" src={roomSlider7} alt="" />
                     <div className="absolute top-4  bg-[#0A238930] text-white py-2 px-10 text-center ">
                        <h3 className="text-3xl font-bold font-classic">10+</h3>
                        <p className="font-classic  text-xl">ROOM</p>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
            <div className="space-y-7">
               <h1 className="text-5xl font-semibold font-classic">SUITE ROOM</h1>
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
                  <Link
                     to={"/rooms"}
                     className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-black border text-gray-500 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg"
                  >
                     <span className="relative z-10 font-classic flex items-center gap-2">BOOk NOW</span>
                  </Link>

                  <button className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-black border text-gray-500 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg">
                     <span className="relative z-10 font-classic flex items-center gap-2 uppercase">view details</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SuiteRoom;
