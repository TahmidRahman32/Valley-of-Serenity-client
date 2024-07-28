import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const ReviewsFrom = () => {
   const { user } = useAuth();
   const HandleReviews = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const url = form.url.value;
      const description = form.description.value;
      const review = { name, url, description };

      fetch(`https://assignment-11-server-delta-ruddy.vercel.app/reviews`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(review),
      })
         .then((res) => res.json())
         .then((data) => {
          
            if (data.insertedId) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Booking Update successfully",
                  showConfirmButton: false,
                  timer: 1500,
               });
            }
         });
   };
   return (
      <div className="max-w-6xl mx-auto">
         <Helmet>
            <title>Valley of Serenity Review</title>
         </Helmet>
         <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold font-classic">Please Add Your Review</h2>
            <p className="font-bold font-style text-gray-600">You can tell us about your experience during your stay at our hotel</p>
         </div>
         <form onSubmit={HandleReviews} className="card-body">
            <div className="form-control">
               <label className="label">
                  <span className="label-text">User Name</span>
               </label>
               <input type="text" readOnly="readonly" name="name" value={user?.displayName} defaultValue={user?.displayName} className="input input-bordered" required />
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Photo</span>
               </label>
               <input type="url" name="url" placeholder="Url" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea className="border rounded-md px-3" placeholder="Please Add Your comment" name="description" id="" cols="10" rows="4"></textarea>
            </div>

            <div className="">
               <div className="flex justify-between"></div>
               <div className="text-center">
                  {/* <form method="dialog"> */}

                  <button className="w-2/5 mx-auto  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center justify-center overflow-hidden border-blue-800 border bg-blue-800 text-gray-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:text-black hover:before:h-56 hover:before:w-96 rounded-lg">
                     {/* <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Confirm</span> */}

                     {/* if there is a button in form, it will close the modal */}
                     <span className="relative z-10 font-classic flex items-center gap-2 text-xl">Add Review</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default ReviewsFrom;
