import { useLoaderData } from "react-router-dom";
import horizontal from "../../../../assets/gallery/hr-geo-sukarno-1-removebg-preview.png";
import { IoIosCheckmarkCircle, IoMdPricetags } from "react-icons/io";
import roomVideo from "../../../../assets/rooms/video1.mp4";
import { BiSolidOffer } from "react-icons/bi";
import { SiZelle } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import welcome from '../../../../assets/rooms/welcomePic.png'
const RoomDetails = () => {
   const roomDetails = useLoaderData();
   console.log(roomDetails);
   const { room_images, room_size, price_per_night, room_description, title, special_offers } = roomDetails;
   console.log(room_images[3]);
   return (
      <div>
         {/* Modal page */}
         {/* You can open the modal using document.getElementById('ID').showModal() method */}

         <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
               </form>

               <img src={room_images[0]} alt="" />
               <div className="">
                  <div className="flex justify-between">
                     <div className="mt-5">
                        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">#Valley of Serenity</p>
                        <h3 className="text-2xl uppercase font-classic">Room Details:</h3>
                        <p className="font-style text-2xl">
                           <span className="font-bold"></span>
                        </p>
                        <p className="font-style text-2xl flex items-center">
                           <span className="font-bold flex gap-1 items-center">
                              <SiZelle color="#E6C704" /> Price:
                           </span>{" "}
                           {room_size}
                        </p>
                        <p className="font-style text-2xl flex items-center">
                           <span className="font-bold flex gap-1 items-center">
                              <IoMdPricetags color="#E6C704" /> Room Size:
                           </span>{" "}
                           {price_per_night}
                        </p>
                        <p className="font-style text-2xl flex items-center">
                           <span className="font-bold flex gap-1 items-center">
                              <FaUserFriends color="#E6C704" /> Guest:
                           </span>{" "}
                           <span className="font-bold "></span> 2/<span className="text-xs">person</span>
                        </p>
                     </div>
                     <div className="my-4 flex items-end justify-end ">
                        <h3 className="text-xl font-classic absolute font-bold left-1/2 ">welcome sir</h3>
                        <img className="w-4/5 " src={welcome} alt="" />
                     </div>
                  </div>
                  <div className="text-center">
                     <button className="w-2/5 mx-auto  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg">
                        <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span>
                     </button>
                  </div>
               </div>
            </div>
         </dialog>

         <article className="max-w-7xl px-6 py-24 mx-auto space-y-12 ">
            <div className="w-full mx-auto space-y-4 text-center">
               <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">#Valley of Serenity</p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="relative">
                     <img className="w-[580px] h-[330px] rounded-lg " src={room_images[0]} alt="" />
                     <h2 className="bg-[#8A8C8CB3] px-5 py-2 bottom-5 rounded-l-md right-5 absolute text-xl font-classic text-white">Bad Room</h2>
                  </div>
                  <div className="relative">
                     <img className="w-[580px] h-[330px] rounded-lg " src={room_images[1]} alt="" />
                     <h2 className="bg-[#8A8C8CB3] px-5 py-2 bottom-5 rounded-l-md right-5 absolute text-xl font-classic text-white">BathRoom</h2>
                  </div>
                  <div className="relative">
                     <img className="w-[580px] h-[330px] rounded-lg " src={room_images[2]} alt="" />
                     <h2 className="bg-[#8A8C8CB3] px-5 py-2 bottom-5 rounded-l-md right-5 absolute text-xl font-classic text-white">living Room</h2>
                  </div>
                  <div className="relative">
                     <img className="w-[580px] h-[330px] rounded-lg " src={room_images[3]} alt="" />
                     <h2 className="bg-[#8A8C8CB3] px-5 py-2 bottom-5 rounded-l-md right-5 absolute text-xl font-classic text-white">Window</h2>
                  </div>
               </div>
               <p className="text-sm text-gray-400">
                  <img className="mx-auto w-1/2" src={horizontal} alt="" />
               </p>
            </div>

            <div className="pt-12 border-t border-gray-700">
               <div className="grid grid-cols-2">
                  <div>
                     <h2 className="text-3xl mb-8 font-bold font-classic">{title}</h2>
                     <p className="my-6 font-style">
                        <span className="font-bold">Description:</span> {room_description}
                     </p>
                     <p className="flex items-center gap-2 ">
                        <IoIosCheckmarkCircle size={25} color="#EAC20C" />
                        Exceptional Amenities Making You Feel Valued
                     </p>
                     <p className="flex items-center gap-2 ">
                        <IoIosCheckmarkCircle size={25} color="#EAC20C" />
                        Services That Exceed Your Expectations
                     </p>
                     <p className="flex items-center gap-2 ">
                        <IoIosCheckmarkCircle size={25} color="#EAC20C" />
                        Spectacular Views to Refresh Your Senses
                     </p>
                     <div className="my-5">
                        <h3 className="text-2xl uppercase font-classic">Room Details:</h3>
                        <p className="font-style text-2xl">
                           <span className="font-bold">Room Size:</span> {room_size}
                        </p>
                        <p className="font-style text-2xl">
                           <span className="font-bold">Price:</span> {price_per_night}
                        </p>
                        <p className="font-style text-2xl">
                           <span className="font-bold ">Guest:</span> 2/<span className="text-xs">person</span>
                        </p>
                     </div>
                     <button
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                        className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg"
                     >
                        <span className="relative z-10 font-classic flex items-center gap-2">BOOk NOW</span>
                     </button>
                  </div>
                  <div>
                     <div className=" mx-auto ">
                        {/* min-h-[calc(100vh-220px)] */}
                        <video className="rounded-2xl" autoPlay controls loop>
                           <source src={roomVideo} type="video/mp4" />
                        </video>
                     </div>
                     <div className=" my-2">
                        {special_offers ? (
                           <h3 className="py-4 px-3 rounded-xl text-center font-classic text-xl bg-yellow-400 flex">
                              <span className="font-bold flex items-center">
                                 <BiSolidOffer color="#0C38EA " /> Special Offers:
                              </span>{" "}
                              {special_offers}
                           </h3>
                        ) : null}
                     </div>
                  </div>
               </div>
            </div>
         </article>
      </div>
   );
};

export default RoomDetails;
