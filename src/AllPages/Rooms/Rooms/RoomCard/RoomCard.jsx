import { FaMapMarkerAlt, FaStar, } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../../../Router/AuthProvider";
// import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


import "react-day-picker/dist/style.css";

import "react-day-picker/dist/style.css";
import axios from "axios";


const RoomCard = ({ room }) => {
   const { user } = useContext(AuthContext);
   const { hotel_name, room_description, room_images, _id, special_offers, title, price_per_night, room_size } = room;
   console.log(room);
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
// axios
axios.post("http://localhost:5000/bookings", bookings)
 .then(data => {
          if (data.data.insertedId) {
             Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Booking successfully",
                showConfirmButton: false,
                timer: 1500,
             });
          }
       });

// fetch?
   //  fetch("http://localhost:5000/bookings", {
   //     method: "POST",
   //     headers: {
   //        "content-type": "application/json",
   //     },
   //     body: JSON.stringify(bookings),
   //  })
   //     .then((res) => res.json())
   //     .then((data) => {
   //        if (data.insertedId) {
   //           Swal.fire({
   //              position: "top-end",
   //              icon: "success",
   //              title: "Your Booking successfully",
   //              showConfirmButton: false,
   //              timer: 1500,
   //           });
   //        }
   //     });
 };
   return (
      <div>
         <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
               </form>
               <img src={room_images} alt="" />
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
                        <button className="w-2/5 mx-auto  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg">
                           {/* <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span> */}

                           {/* if there is a button in form, it will close the modal */}
                           <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </dialog>

         <section className=" max-w-7xl mx-auto text-gray-100 my-10  ">
            <div className="block relative max-w-sm gap-3 shadow-2xl  mx-auto rounded-xl  sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
               <img src={room_images[0] ? room_images[0] : <div className="skeleton h-32 w-32"></div>} alt="" className="object-cover  w-full h-96 rounded-xl sm:h-96 lg:col-span-7 bg-gray-500" />
               <div className="absolute left-2 top-2 bg-yellow-600 py-2 px-6 ">
                  <h3 className="text-3xl font-bold font-classic">${price_per_night}/-</h3>
                  <p className="font-style">per Night</p>
               </div>
               <div className="p-3 space-y-4 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-2xl font-classic ">
                     Hotel: <span className="text-xl text-blue-600">{hotel_name}</span>
                  </h3>
                  <h3 className="text-2xl font-semibold sm:text-2xl group-hover:underline group-focus:underline font-classic">
                     {" "}
                     <span className="sm:text-4xl font-style"></span> {title}
                  </h3>

                  <p className="font-classic mt-3">{room_description}</p>
                  <p className="font-classic mt-3 flex items-center gap-2">
                     5/
                     <span className="flex items-center text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </span>
                  </p>
                  <div className="bg-[#ABABAB99] w-1/2 px-6 py-1 rounded-md ">
                     <Link className="text-blue-800 text-center flex items-center font-classic gap-1" to={"/map"}>
                        <FaMapMarkerAlt color="#B81207" /> Hotel Location
                     </Link>
                  </div>

                  {special_offers ? (
                     <h3 className="py-2 px-2  rounded-xl text-center font-classic text-black bg-yellow-400 flex">
                        <span className="font-bold flex items-center">Special Offers:</span> {special_offers}
                     </h3>
                  ) : null}

                  <div className="flex gap-16 pt-2">
                     <Link
                        to={`/roomDetails/${_id}`}
                        // onClick={() => document.getElementById("my_modal_3").showModal()}
                        className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-56 rounded-lg"
                     >
                        <span className="relative z-10 font-classic flex items-center gap-2">BOOk NOW</span>
                     </Link>
                     <Link
                        to={`/roomDetails/${_id}`}
                        className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg"
                     >
                        <span className="relative z-10 font-classic flex items-center gap-2 uppercase">view details</span>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default RoomCard;
