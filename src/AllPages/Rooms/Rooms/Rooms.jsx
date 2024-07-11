import { useLoaderData } from "react-router-dom";
import RoomBanner from "./RoomBanner/RoomBanner";
import RoomCard from "./RoomCard/RoomCard";


const Rooms = () => {
   const roomsData = useLoaderData();
   console.log(roomsData);
   return (
      <div>
         <RoomBanner></RoomBanner>

         <div className="space-y-4">
            {
               roomsData.map((room ,inx) => <RoomCard key={inx} room={room}></RoomCard> )
            }
         </div>
      </div>
   );
};

export default Rooms;