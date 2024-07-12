import { useContext} from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../../Router/AuthProvider";
import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
   console.log(room);
   const { hotel_name,room_description, room_images, _id,special_offers, title, price_per_night } = room;
  const {user} = useContext(AuthContext)
   return (
      <div>
         <section className=" max-w-7xl mx-auto text-gray-100 my-10  ">
            <div className="block relative max-w-sm gap-3 shadow-2xl  mx-auto rounded-xl  sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
               <img src={room_images[0]} alt="" className="object-cover  w-full h-96 rounded-xl sm:h-96 lg:col-span-7 bg-gray-500" />
               <div className="absolute left-2 top-2 bg-yellow-600 py-2 px-6 ">
                  <h3 className="text-3xl font-bold font-classic">{price_per_night}/-</h3>
                  <p className="font-style">per Night</p>
               </div>
               <div className="p-6 space-y-4 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-2xl font-classic ">
                     Hotel: <span className="text-xl text-blue-600">{hotel_name}</span>
                  </h3>
                  <h3 className="text-2xl font-semibold sm:text-2xl group-hover:underline group-focus:underline font-classic">
                     {" "}
                     <span className="sm:text-4xl font-style"></span> {title}
                  </h3>

                  <p className="font-classic mt-7">{room_description}</p>
                  <p className="font-classic mt-7 flex items-center gap-2">
                     5/
                     <span className="flex items-center text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </span>
                  </p>
                  <div className="bg-yellow-500 px-2 py-3 rounded-xl">
                     <h4 className="text-black">
                        <span className="text-xl font-classic text-white">Special Offers:</span> {special_offers}
                     </h4>
                  </div>
                  <div className="flex gap-16 pt-2">
                     <Link
                        to={user ? "/MyBookings" : "/login"}
                        className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg"
                     >
                        <span className="relative z-10 font-classic flex items-center gap-2">BOOk NOW</span>
                     </Link>
                     <Link
                        to={`/roomDetails/${_id}`}
                        className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg"
                     >
                        <span className="relative z-10 font-classic flex items-center gap-2 uppercase">view details</span>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default RoomCard;