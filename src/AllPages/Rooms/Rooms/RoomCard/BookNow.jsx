import { useContext } from "react";

import { AuthContext } from "../../../../Router/AuthProvider";
// import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const BookNow = ({ bookNow }) => {
   const { room_description, room_images, title, room_size } = bookNow;

   console.log(bookNow);
   const { user } = useContext(AuthContext);
   const handleRoomConfirm = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const date = form.date.value;
      const guest = form.guest.value;
      const bookings = { name, email, date, guest, roomImg: room_images[0], room_size: room_size, title: title, description: room_description };
      console.log(bookings);
      if (guest < 1) {
         toast.error("Please Guest List add");
         return;
      }

      axios.post("http://localhost:5000/bookings").then((data) => {
         if (data.insertedId) {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Your Booking successfully",
               showConfirmButton: false,
               timer: 1500,
            });
         }
      });

 
   };

   return (
      <div className="max-w-5xl mx-auto">
         <form onSubmit={handleRoomConfirm} className="card-body">
            <div className="form-control">
               <label className="label">
                  <span className="label-text">User Name</span>
               </label>
               <input type="text" readOnly="readonly" name="name" value={user?.displayName} defaultValue={user?.displayName} className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input type="email" readOnly="readonly" name="email" value={user?.email} defaultValue={user?.email} className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Date</span>
               </label>
               <input type="date" name="date" placeholder="photoURL" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Guest</span>
               </label>
               {/* <input type="tel" name="guest" placeholder="Guest" className="input input-bordered" required /> */}
               <input type="number" step="any" className="input input-bordered " name="guest" placeholder="Guest" aria-invalid="false"></input>
            </div>

            <div className="">
               <div className="flex justify-between">
                  <div className="mt-5"></div>
               </div>
               <div className="text-center">
                  {/* <form method="dialog"> */}

                  <button className="w-2/5 mx-auto  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg">
                     {/* <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span> */}

                     {/* if there is a button in form, it will close the modal */}
                     <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default BookNow;
