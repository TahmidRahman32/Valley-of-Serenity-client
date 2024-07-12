import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import Swal from "sweetalert2";

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
               .then((result) => {})
               .then((error) => {
                  console.log(error);
               });
         }
      });
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
               <img className="bg-white w-48 rounded-lg" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
            </div>
            <div className="navbar-end flex gap-4">
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
