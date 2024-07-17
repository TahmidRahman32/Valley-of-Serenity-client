import { ReactTyped } from "react-typed";
import MovingText from "react-moving-text";
import "animate.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const BannerText = () => {
   return (
      <div className="flex justify-center items-center min-h-[calc(100vh-112px)] rounded-md bg bg-gradient-to-r from-[#01091380] to-[#20215130] animate__animated animate__zoomInDown animate__fast">
         <div className="text-white text-center">
            <h5 className="text-2xl font-sc animate__animated animate__zoomInDown animate__fast">Welcome to Luxeliving</h5>
            <h1 className="text-6xl font-style font-bold">
               <ReactTyped strings={["Discover the art of"]} typeSpeed={300} loop />
            </h1>
            <MovingText type="blur" duration="5000ms" delay="index * 1000ms" direction="normal" timing="ease-in-out" iteration="infinite" fillMode="backwards">
               <h1 className="text-6xl font-style font-bold text-yellow-500"> Vacationing</h1>
            </MovingText>
            <div className="w-full  rounded-full mt-3">
               <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-16 mx-auto md:p-4">
                  <div>
                     <div className="flex flex-row mb-2">
                        <input type="text" placeholder="Search" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black" />
                        <button
                           type="button"
                           className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3   relative flex  h-[50px] mx-auto items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56 rounded-lg"
                        >
                           <span className="relative z-10 font-style ">Search</span>
                        </button>
                     </div>

                     <div className="bg-[#ABABAB99] w-2/3 px-6 py-1 rounded-md mx-auto ">
                        <Link className="text-blue-800 text-center flex items-center font-classic gap-1" to={"/map"}>
                           <FaMapMarkerAlt color="#B81207" /> Hotel Location
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BannerText;
