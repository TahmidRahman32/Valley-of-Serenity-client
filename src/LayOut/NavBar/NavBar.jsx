import {   NavLink } from "react-router-dom";
import logo from "../../assets/fevIcon.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const NavBar = () => {
   const [theme, setTheme] = useState("light");
   const { user, logOut } = useContext(AuthContext);

   const handleTheme = (e) => {
      const check = e.target.checked;
      if (check) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   const handleLogOutBtn = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "Do you want to logout of the website?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, LogOut",
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
               title: "LogOut",
               text: "Your access has been disable.",
               icon: "success",
            });
            logOut()
               .then(() => {})
               .then((error) => {
                  console.log(error);
               });
         }
      });
   };

    const updateProfileBtn = (e) => {
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const photo = form.photo.value;
       updateProfile(user, {
          displayName: name,
          photoURL: photo,
       })
          .then(() => {
             toast.success("Your Profile Updated!!");
          })
          .catch(() => {});
    };

   const NavLinks = (
      <div className="flex gap-10">
         <NavLink to={"/"} className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}>
            Home
         </NavLink>
         {user && (
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}>
               about
            </NavLink>
         )}

         <NavLink
            to={user ? "/MyBookings" : "/login"}
            className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}
         >
            MyBookings
         </NavLink>
         <NavLink to={"/Rooms"} className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}>
            Rooms
         </NavLink>
      </div>
   );
   return (
      <div>
         {/* update Profile */}
         <div className="z-50">
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
               <div className="modal-box">
                  <h1 className="text-2xl text-center font-classic">Update Profile</h1>
                  <div className="card bg-base-100 w-full shrink-0 ">
                     <form onSubmit={updateProfileBtn} className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">User Name</span>
                           </label>
                           <input type="text" name="name" placeholder="Your FullName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">PhotoURL</span>
                           </label>
                           <input type="url" name="photo" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                           <button className="w-2/5  font-semibold rounded-r-lg sm:w-1/3 relative flex h-[50px] items-center mx-auto justify-center overflow-hidden border-blue-800 border text-gray-700 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-600 hover:text-white hover:before:h-56 hover:before:w-56 rounded-lg">
                              <span className="relative z-10 font-classic flex items-center gap-2 uppercase">Submit</span>
                           </button>
                        </div>
                     </form>
                  </div>
                  <div className="modal-action">
                     <label htmlFor="my_modal_6" className="btn bg-red-300 text-xl">
                        Close!
                     </label>
                  </div>
               </div>
            </div>
         </div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     {NavLinks}
                  </ul>
               </div>
               <div className="text-center">
                  <img className=" w-24 mx-auto rounded-lg" src={logo} alt="" />
                  <h1 className="font-classic font-medium">VALLEY OF SERENITY</h1>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
            </div>
            <div className="navbar-end flex gap-4">
               <div className="md:text-center hidden md:flex">
                  <div>
                     <h2 className="font-bold">{user?.displayName}</h2>
                     <h2>{user?.email}</h2>
                  </div>
               </div>

               {/* handle? */}

               <div className="dropdown dropdown-end z-50">
                  <div title="Edit" tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className={user?.photoURL && "w-10 rounded-full"}>
                        <img src={user?.photoURL || null} />
                     </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     <li>
                        {/* The button to open modal */}

                        {/* <Link to={"/editPage"}> </Link> */}

                        <label htmlFor="my_modal_6" className="btn">
                           {" "}
                           Edit
                        </label>

                        {/* Put this part before </body> tag */}
                     </li>
                     <li>
                        <a className="btn">Logout</a>
                     </li>
                  </ul>
               </div>

               {user ? (
                  <NavLink
                     to={"/login"}
                     onClick={handleLogOutBtn}
                     className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}
                  >
                     LogOut
                  </NavLink>
               ) : (
                  <NavLink to={"/login"} className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}>
                     LogIn
                  </NavLink>
               )}
               <NavLink to={"/register"} className={({ isActive }) => (isActive ? "font-bold text-xl text-blue-600 font-style hover:scale-x-110 hover:transition-opacity" : "font-bold text-xl font-style hover:scale-x-110 hover:transition-opacity")}>
                  Register
               </NavLink>

               {/* theme controller */}
               <label className="grid cursor-pointer place-items-center">
                  <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                  <svg
                     className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="12" cy="12" r="5" />
                     <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                     className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
               </label>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
