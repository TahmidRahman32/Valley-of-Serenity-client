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

   const { user } = useAuth();
   const url = `https://assignment-11-server-delta-ruddy.vercel.app/bookings?email=${user?.email}`;

   useEffect(() => {
      axios.get(url, { withCredentials: true }).then((res) => {
         setBooking(res.data);
         console.log(res.data);
         
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
            axios.delete(`https://assignment-11-server-delta-ruddy.vercel.app/bookings/${id}`).then((data) => {
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
            fetch(`https://assignment-11-server-delta-ruddy.vercel.app/bookings/${id}`, {
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
      axios.get(`https://assignment-11-server-delta-ruddy.vercel.app/bookings/${id}`).then((data) => {
         setUpdate(data.data);
      });
   };

   return (
      <div className=" mx-5 ">
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
                     <BookingCard key={booking._id} booking={booking} handleDeleted={handleDeleted} handleUpdateBtn={handleUpdateBtn} update={update}></BookingCard>
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
