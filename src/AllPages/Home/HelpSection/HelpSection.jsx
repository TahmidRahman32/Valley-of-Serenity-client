import { RiCustomerService2Fill } from "react-icons/ri";
import helpImg1 from "../../../assets/Home/pexels-ron-lach-8681895.jpg";
import helpImg2 from "../../../assets/Home/pexels-shkrabaanthony-5467586.jpg";
import { PiHashStraightBold } from "react-icons/pi";
import { GrFlows } from "react-icons/gr";
import { IoCallSharp, IoPersonAdd } from "react-icons/io5";


const HelpSection = () => {
   return (
      <div className="my-10">
         
         <div className="flex gap-16 justify-center  md:my-20">
            <div className="space-y-7 mt-8 relative animate__animated animate__slideInLeft animate__slow">
               <h1 className="text-6xl font-bold font-style">
                  We can help you feel <br /> more comfortable
               </h1>
               <p className="text-gray-500 font-style">
                  Lorem ipsum dolor sit amet consectetur. Dui lacus nulla tortor vel leo <br />
                  tristique aliquam mauris pellentesque. Donec orci ut facilisi dictum aliquam sit nisi.
                  <br /> Tortor condimentum porta fames id in viverra massa et sed.
               </p>
               <div className="grid grid-cols-2 gap-16">
                  <p className="flex items-center gap-3 text-xl font-style">
                     {" "}
                     <PiHashStraightBold size={40} /> Classy Amenities
                  </p>
                  <p className="flex items-center gap-3 text-xl font-style">
                     <GrFlows size={40} /> Luxury Lifestyle
                  </p>
                  <p className="flex items-center gap-3 text-xl font-style">
                     <RiCustomerService2Fill size={40} /> Friendly Services
                  </p>
                  <p className="flex items-center gap-3 text-xl font-style">
                     {" "}
                     <IoPersonAdd size={40} /> Lifeguard 24/7
                  </p>
               </div>

               <button className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-black border text-gray-500 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg">
                  <span className="relative z-10 font-style flex items-center gap-2">
                     <IoCallSharp size={20} color="#209F32" /> Help 161616
                  </span>
               </button>
            </div>
            <div className="relative animate__animated animate__slideInRight animate__slow">
               <img className="w-[450px]" src={helpImg2} alt="" />
               <img className="w-96 absolute -bottom-12 -left-16 border-8 border-white rounded-xl" src={helpImg1} alt="" />
               <div className="absolute top-16 -right-16 bg-black text-white py-8 px-10 text-center">
                  <h3 className="text-3xl font-bold font-style">10+</h3>
                  <p className="font-style text-xl">YEARS</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HelpSection;
