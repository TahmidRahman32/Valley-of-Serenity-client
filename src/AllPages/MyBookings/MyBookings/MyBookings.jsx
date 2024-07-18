import { useEffect, useState } from "react";

import BookingCard from "../BookingCard/BookingCard";
import DataFound from "../../../LayOut/DataFound/DataFound";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const MyBookings = () => {
   const [bookings, setBooking] = useState([]);
   const [update, setUpdate] = useState([]);
   console.log(update);
   

   const { user } = useAuth();
   const url = `http://localhost:5000/bookings?email=${user?.email}`;

   useEffect(() => {
      axios.get(url, { withCredentials: true }).then((res) => {
         // console.log(res.data);
         setBooking(res.data);
      });
   }, [url]);
   const handleDeleted = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                     });
                     const remaining = bookings.filter((book) => book._id !== id);
                     setBooking(remaining);
                  }
               });
         }
      });
   };
   const handleUpdateBtn = (id) => {
      console.log(id);
      fetch(`http://localhost:5000/bookings/${id}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setUpdate(data);
         });
   };

  

   return (
      <div className=" mx-5 h-screen">
         <Helmet>
            <title>Valley of Serenity MyBooking</title>
         </Helmet>
         {bookings.length > 0 ? (
            <section className="py-6 sm:py-12 ">
               <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-classic font-bold">Valley of Serenity Booking Rooms</h2>
                  <p className="font-serif text-sm text-gray-400">Providing the best service to customers is our religion</p>
               </div>
               <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {bookings.map((booking) => (
                     <BookingCard 
                     key={booking._id}
                      booking={booking} 
                      handleDeleted={handleDeleted} 
                      handleUpdateBtn={handleUpdateBtn} 
                      update={update}
                      ></BookingCard>
                  ))}
               </div>
            </section>
         ) : (
            <DataFound></DataFound>
         )}
      </div>
   );
};

export default MyBookings;
