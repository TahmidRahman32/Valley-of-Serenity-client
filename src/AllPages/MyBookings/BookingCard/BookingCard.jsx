import { FaStar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdRateReview } from "react-icons/md";

import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const BookingCard = ({ booking, handleDeleted, handleUpdateBtn, update }) => {
   const { user } = useAuth();
  
   const { name, email, date, guest, roomImg, room_size, _id } = booking;
   const HandleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const formDate = form.formDate.value;
      const formGuest = form.formGuest.value;

      axios.put(`https://assignment-11-server-delta-ruddy.vercel.app/bookings/${update._id}`, { date: formDate, guest: formGuest }).then((data) => {
     
         if (data.data.modifiedCount > 0) {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your Booking Update successfully",
               showConfirmButton: false,
               timer: 1500,
            });
         }
      });

      // fetch(`https://assignment-11-server-delta-ruddy.vercel.app/bookings/${update._id}`, {
      //    method: "PUT",
      //    headers: {
      //       "content-type": "application/json",
      //    },
      //    body: JSON.stringify({
      //       date: formDate,
      //       guest: formGuest,
      //    }),
      // })
      //    .then((res) => res.json())
      //    .then((data) => {
      //       
      //       if (data.modifiedCount > 0) {
      //          Swal.fire({
      //             position: "top-end",
      //             icon: "success",
      //             title: "Your Booking Update successfully",
      //             showConfirmButton: false,
      //             timer: 1500,
      //          });
      //       }
      //    });
   };

   return (
      <div>
         {/* You can open the modal using document.getElementById('ID').showModal() method */}

         <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
               <div className="text-center">
                  <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">#Valley of Serenity</p>
                  <h2 className="font-classic  text-3xl">Update Your Information</h2>
               </div>
               <form onSubmit={HandleUpdate} className="card-body">
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
                     <input type="date" name="formDate" defaultValue={update.date} className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Guest</span>
                     </label>
                     {/* <input type="tel" name="guest" placeholder="Guest" className="input input-bordered" required /> */}
                     <input type="number" step="any" className="input input-bordered " name="formGuest" placeholder="Guest" defaultValue={update.guest} aria-invalid="false"></input>
                  </div>

                  <div className="">
                     <div className="flex justify-between"></div>
                     <div className="text-center">
                        {/* <form method="dialog"> */}

                        <button className="w-2/5 mx-auto  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-96 rounded-lg">
                           {/* <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span> */}

                           {/* if there is a button in form, it will close the modal */}
                           <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span>
                        </button>
                     </div>
                  </div>
               </form>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button, it will close the modal */}
                     <button className="btn bg-red-600 text-white text-xl">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         <div className="card card-side bg-base-100 shadow-xl ">
            <img className="w-64 rounded-lg" src={roomImg} alt="Movie" />

            <div className="card-body">
               <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">#Valley of Serenity</p>
               <h2 className="card-title">{name}</h2>
               <p>{email}</p>
               <div className="flex justify-between">
                  <div>
                     <p className="text-sm font-style">
                        <span className="font-bold">Date:</span> {date}
                     </p>
                     <p className="text-sm font-style">
                        <span className="font-bold">Guest: </span>
                        {guest}
                     </p>
                  </div>
                  <div>
                     <p className="text-sm font-style">
                        <span className="font-bold">Room Size: </span>
                        {room_size}
                     </p>
                     <p className="text-sm font-style flex items-center gap-2">
                        Riding:
                        <span className="flex items-center text-yellow-500">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </span>
                     </p>
                  </div>
               </div>
               <div className=" grid grid-cols-2 gap-x-6 ">
                  <div onClick={() => handleDeleted(_id)} className="flex items-center text-sm font-style  w-2/3 hover:bg-blue-600 hover:text-white hover:py-1 hover:px-3 rounded ">
                     <button className="font-bold flex items-center gap-1 text-center">
                        Delete <MdDeleteForever />
                     </button>
                  </div>
                  <div onClick={() => handleUpdateBtn(_id)} className="flex items-center text-sm font-style  w-2/3 rounded   hover:bg-blue-600 hover:text-white hover:py-1 hover:px-3">
                     <button className="font-bold flex items-center gap-1 text-center" onClick={() => document.getElementById("my_modal_4").showModal()}>
                        Update <GrUpdate size={10} />
                     </button>
                  </div>
                  <div></div>
                  <div className="flex items-center text-sm font-style bg-blue-700 py-1  w-2/3 hover:bg-gray-200  rounded mt-1">
                     <Link to={"/reviews"} className="font-bold flex items-center gap-1 text-center text-white hover:text-black mx-auto">
                        Review <MdRateReview size={15} color="#F3BA08" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingCard;
