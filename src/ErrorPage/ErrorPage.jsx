import { Link, useRouteError } from "react-router-dom";
import Error  from '../assets/error/472-removebg.png';
import bg from "../assets/error/Backgrounds_2.jpg";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
   const error = useRouteError();
   console.log(error.message);
   return (
      <div className="">
         <section className="h-screen text-gray-100">
            <img className="md:w-full relative" src={bg} alt="" />
            <div className="absolute bottom-0 right-[740px] top-[250px]">
               <div className="max-w-md text-center">
                  <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                     {/* <span className="sr-only">Error</span>404 */}
                     <img className="" src={Error} alt="" />
                  </h2>
                  {/* <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p> */}
                  <p className="mt-4 mb-8 text-pink-700 font-bold">{error.message.slice(0,60)}</p>
                  <Link to={'/'} className="relative inline-block text-lg group">
                     <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-white rounded-lg group-hover:text-black">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-black"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                        <span className="relative flex items-center gap-1">
                           <FaArrowLeft /> Back to Home
                        </span>
                     </span>
                     <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ErrorPage;
