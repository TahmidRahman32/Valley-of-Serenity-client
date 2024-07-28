import { Helmet } from "react-helmet";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Reviews from "../../Home/Reviews/Reviews";

const About = () => {
   return (
      <div className="">
         <Helmet>
            <title>Valley of Serenity About</title>
         </Helmet>

         <div className="bg-aboutLogo bg-cover bg-center ">
            <div className="flex justify-center items-center min-h-[calc(100vh-550px)] rounded-md bg bg-gradient-to-t from-[#01091380] to-[#20215130] ">
               <div className="text-white text-center">
                  <h5 className="text-4xl font-stylec font-bold animate__animated animate__zoomInDown animate__fast">About Us</h5>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2   gap-16 my-10 max-w-7xl mx-auto ">
            <div className="space-y-6 ">
               <h2 className="text-center text-5xl font-bold font-classic">Find Our Exclusive Room Packages</h2>
               <div className="space-y-6 ">
                  <p className="text-gray-500 font-style">
                     Explore our selection of meticulously crafted packages designed to Strengthen your stay. Each package offers a unique blend of luxury, convenience, and also unforgettable experiences. Whether you’re dreaming of a romantic escape,
                     a family adventure, or a weekend of relaxation, our packages cater to diverse.
                  </p>
                  <p className="text-gray-500 font-style">
                     {" "}
                     sit amet consectetur. Dui lacus nulla tortor vel leo tristique aliquam mauris pellentesque. Donec orci ut facilisi dictum aliquam sit nisi. Tor condimentum porta fames id in viverra massa et sed.
                  </p>
               </div>
            </div>
            <div className="space-y-10 ">
               <div className="bg-black shadow-xl text-white px-8 py-6 space-y-8 rounded-xl">
                  <h2 className="text-gray-300">
                     <span className="text-3xl font-classic text-yellow-500">$120</span> /Night
                  </h2>
                  <h3 className="text-4xl font-classic">Honeymoon suite Package</h3>
                  <div className="grid grid-cols-3">
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Decoration Bed
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Private Pool
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Living Room
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Spa / Massage
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Breakfast
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Candle Light Dinner
                        </p>
                     </div>
                  </div>
                  <Link
                     to={"/Rooms"}
                     className="relative flex w-full h-[50px] mx-auto items-center justify-center overflow-hidden bg-[#D8A300] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-[450px] hover:before:w-[550px] rounded-lg"
                  >
                     <span className="relative z-10 font-classic text-xl uppercase">contact Us</span>
                  </Link>
               </div>
               <div className="border shadow-xl px-8 py-6 space-y-8 rounded-xl">
                  <h2 className="text-gray-300">
                     <span className="text-3xl font-classic text-yellow-500">$150</span> /Night
                  </h2>
                  <h3 className="text-4xl font-classic">Suite Room Package</h3>
                  <div className="grid grid-cols-3">
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Decoration Bed
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Private Pool
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Living Room
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Spa / Massage
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Breakfast
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Candle Light Dinner
                        </p>
                     </div>
                  </div>
                  <Link
                     to={"/Rooms"}
                     className="relative flex w-full h-[50px] mx-auto items-center justify-center overflow-hidden bg-[#D8A300] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-[450px] hover:before:w-[550px] rounded-lg"
                  >
                     <span className="relative z-10 font-classic text-xl uppercase">contact Us</span>
                  </Link>
               </div>
               <div className="bg-black shadow-xl text-white px-8 py-6 space-y-8 rounded-xl">
                  <h2 className="text-gray-300">
                     <span className="text-3xl font-classic text-yellow-500">$200</span> /Night
                  </h2>
                  <h3 className="text-4xl font-classic">Deluxe Room Package</h3>
                  <div className="grid grid-cols-3">
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Decoration Bed
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Private Pool
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Living Room
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Spa / Massage
                        </p>
                     </div>
                     <div>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Breakfast
                        </p>
                        <p className="flex items-center gap-1 font-style">
                           {" "}
                           <IoCheckmarkSharp color="#F3BA08" />
                           Candle Light Dinner
                        </p>
                     </div>
                  </div>
                  <Link
                     to={"/Rooms"}
                     className="relative flex w-full h-[50px] mx-auto items-center justify-center overflow-hidden bg-[#D8A300] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-[450px] hover:before:w-[550px] rounded-lg"
                  >
                     <span className="relative z-10 font-classic text-xl uppercase">contact Us</span>
                  </Link>
               </div>
            </div>
         </div>
         <hr />
         <Reviews></Reviews>
         <div className="bg bg-gradient-to-t from-[#010913b7] to-[#0704049a] flex items-center justify-center h-[350px] ">
            <div className="space-y-4 text-white">
               <h1 className="text-center text-5xl font-classic font-semibold">
                  Book Now for Unforgettable <br /> Luxury <span className=" ">and</span> Tranquility!
               </h1>
               <p className="text-sm font-style text-center text-gray-400">
                  Take advantage of our exclusive limited-time offer and make your dream stay a reality. <br /> With this special promotion, you can experience the epitome of comfort, luxury, and convenience at a <br /> discounted rate that won’t
                  last long. Whether you’re seeking a relaxing escape, a romantic rendezvous,
                  <br /> or a memorable family vacation, now is the perfect moment to secure your reservation.
               </p>
               <button className="relative flex w-1/3 h-[50px] mx-auto items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56 rounded-lg">
                  <span className="relative z-10 font-classic text-xl uppercase">contact Us</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default About;
