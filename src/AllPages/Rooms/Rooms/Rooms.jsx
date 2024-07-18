import { Link, useLoaderData } from "react-router-dom";
import RoomBanner from "./RoomBanner/RoomBanner";
import RoomCard from "./RoomCard/RoomCard";
import horizontal from "../../../assets/gallery/hr-geo-sukarno-1-removebg-preview.png";
import { Helmet } from "react-helmet";
// import { useEffect, useState } from "react";

const Rooms = () => {
   const roomsData = useLoaderData();
   console.log(roomsData);
   //  const [high, setHigh] = useState([]);
   //  console.log(high);
  const handleHighPriceBtn =()=>{
   
  }
   // useEffect(() => {
   //    fetch("http://localhost:5000/roomSort")
   //       .then((res) => res.json())
   //       .then((data) => {
   //          console.log(data);
   //          setHigh(data)
   //       });
   // }, []);

   return (
      <div>
         <Helmet>
            <title>Valley of Serenity Rooms</title>
         </Helmet>
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
         {/* navbar? */}

         <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="flex-1">
               <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal px-">
                  <li>
                     <details>
                        <summary className="text-2xl font-classic">Room Sort</summary>
                        <ul className="bg-base-100 text-center w-full rounded-t-none p-2 z-50">
                           <li>
                              <Link onClick={handleHighPriceBtn} className="text-sm font-bold">
                                 High Price
                              </Link>
                           </li>
                           <li>
                              <Link className="font-bold">Low Price</Link>
                           </li>
                        </ul>
                     </details>
                  </li>
               </ul>
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
