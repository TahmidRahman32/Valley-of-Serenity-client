import { useLoaderData } from "react-router-dom";
import RoomBanner from "./RoomBanner/RoomBanner";
import RoomCard from "./RoomCard/RoomCard";
import horizontal from "../../../assets/gallery/hr-geo-sukarno-1-removebg-preview.png";

const Rooms = () => {
   const roomsData = useLoaderData();

   return (
      <div>
         <RoomBanner></RoomBanner>

         <div className="text-center space-y-2">
            <h1 className="text-4xl font-classic">Valley of Serenity Best Rooms</h1>
            <p className="font-style">Providing the best service to customers is our religion</p>

            <div className="inline-flex items-center justify-center w-full">
               <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
               <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                  <img className="w-1/3 mx-auto" src={horizontal} alt="" />
               </div>
            </div>
         </div>

         <div className="space-y-4">
            {roomsData.map((room, inx) => (
               <RoomCard key={inx} room={room}></RoomCard>
            ))}
         </div>
      </div>
   );
};

export default Rooms;
