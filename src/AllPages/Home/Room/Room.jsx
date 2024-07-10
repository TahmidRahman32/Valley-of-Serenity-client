
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Room = () => {
    const [tabIndex, setTabIndex] = useState(0);
   return (
      <div>
         <div>
            <h1 className="text-6xl font-bold font-classic text-center">Best Offer on Our Rooms</h1>
         </div>
         <div className="max-w-6xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
               <div className="flex  items-center -mx-4 overflow-x-auto overflow-y-hidden justify-between flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                  <Link to={""} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border-b-2 border-blue-700 font-style" : "border-b font-style"} rounded-t-lg dark:text-gray-900`}>
                     <span>SUITEROOM</span>
                  </Link>
                  <Link to={"deluxe"} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border-b-2 border-blue-700 font-style" : "border-b font-style"} rounded-t-lg  dark:text-gray-900`}>
                     <span>DELUXEROOM</span>
                  </Link>
                  <Link to={"living"} onClick={() => setTabIndex(2)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 2 ? "border-b-2 border-blue-700 font-style" : "border-b font-style"} rounded-t-lg  dark:text-gray-900`}>
                     <span className="uppercase">living room</span>
                  </Link>
               </div>
               <Outlet></Outlet>
            </article>
            <div></div>
         </div>
      </div>
   );
};

export default Room;
