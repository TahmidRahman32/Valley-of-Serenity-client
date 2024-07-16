import { Link, useNavigate } from "react-router-dom";
import LogInLogo from "../assets/login/img-12-removebg-preview.png";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../Router/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
   const [showPass, setShowPass] = useState(false);
   const { createUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleSignUpBtn = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password, name);

      if (password.length < 6) {
         toast.error("Password must be 6 Character");
         return;
      } else if (!/[A-Z]/.test(password)) {
         toast.error("Please Add Minimum one Uppercase");
         return;
      } else if (!/[a-z]/.test(password)) {
         toast.error("Please Add Minimum one lowercase");
         return;
      }
      createUser(email, password)
         .then((result) => {
            updateProfile(result.user, {
               displayName: name,
            });
            navigate('/')

         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div>
         <div>
            <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row gap-28">
                  <div className="text-center lg:text-left animate__animated animate__backInLeft animate__slow">
                     <img className="md:w-[850px]" src={LogInLogo} alt="" />
                  </div>

                  <div className="flex justify-center my-2 mx-4 md:mx-0">
                     <div className="w-full max-w-xl  rounded-lg shadow-md p-6">
                        <div className="text-center">
                           <div className="flex items-center justify-center"></div>
                           <h2 className="text-4xl tracking-tight font-bold font-joss">Sign Up your account</h2>
                           <span className="text-sm">
                              or{" "}
                              <Link to={"/login"} className="text-blue-500">
                                 Google a new account
                              </Link>
                           </span>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                           <form onSubmit={handleSignUpBtn} className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-full px-3 mb-6">
                                 <div className="form-control">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text">Name</span>
                                    </label>
                                    <input
                                       type="text"
                                       name="name"
                                       placeholder="Full Name"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="w-full md:w-full px-3 mb-6">
                                 <div className="form-control">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text">Email</span>
                                    </label>
                                    <input
                                       type="email"
                                       name="email"
                                       placeholder="email"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="w-full md:w-full px-3 mb-6">
                                 <div className="form-control relative">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text">Password</span>
                                    </label>
                                    <input
                                       type={showPass ? "text" : "password"}
                                       name="password"
                                       placeholder="Password"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute right-4 bottom-3">
                                       {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                                    </span>
                                 </div>
                              </div>

                              <div className="text-center md:w-full px-3 mb-6">
                                 <button className="relative flex w-1/2 h-[50px] mx-auto items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56 rounded-lg">
                                    <span className="relative z-10 font-style text-xl">Register</span>
                                 </button>
                              </div>
                           </form>
                           <div className="mx-auto -mb-6 pb-1">
                              <Link to={"/login"} className="text-center text-ms text-gray-400">
                                 or sign up with
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
