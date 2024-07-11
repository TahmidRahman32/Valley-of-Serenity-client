import roomVideo from "../../../../assets/rooms/video1.mp4";
import { useEffect, useRef } from "react";
const RoomBanner = () => {
   const vidRef = useRef();
   useEffect(() => {
      vidRef.current.muted = false;
   }, []);
   return (
      <div className=" h-1/2 w-[90%] mx-auto ">
         {/* min-h-[calc(100vh-220px)] */}
         <video className=" mb-16" autoPlay controls loop muted ref={vidRef}>
            <source src={roomVideo} type="video/mp4" />
         </video>
       
      </div>
   );
};

export default RoomBanner;
