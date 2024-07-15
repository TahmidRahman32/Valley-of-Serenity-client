import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Router/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";
import DataFound from "../../../LayOut/DataFound/DataFound";
import Swal from "sweetalert2";

const MyBookings = () => {
   const [bookings, setBooking] = useState([]);
   const { date, guest, _id } = bookings;
   const { user } = useContext(AuthContext);
   const url = `http://localhost:5000/bookings?email=${user?.email}`;

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setBooking(data);
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



   return (
      <div className=" mx-5 h-screen">
         {bookings.length > 0 ? (
            <section className="py-6 sm:py-12 ">
               <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-classic font-bold">Valley of Serenity Booking Rooms</h2>
                  <p className="font-serif text-sm text-gray-400">Providing the best service to customers is our religion</p>
               </div>
               <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {bookings.map((booking) => (
                     <BookingCard key={booking._id} booking={booking} handleDeleted={handleDeleted} ></BookingCard>
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
