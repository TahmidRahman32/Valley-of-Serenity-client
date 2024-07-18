import { Link, useLocation, useNavigate } from "react-router-dom";
import LogInLogo from "../assets/login/img-12-removebg-preview.png";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const { login, googleLogin, gitHubLogin } = useAuth();
   const location = useLocation();
   
   const navigate = useNavigate();

   const loginHandleBtn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
         .then((result) => {
            console.log(result.user);
            const loggedUser = result.user;
            console.log(loggedUser);
            const user = { email };
            axios.post("http://localhost:5000/jwt", user, { withCredentials: true }).then((res) => {
               console.log(res.data);
               if (res.data.success) {
                  navigate(location?.state ? location?.state : "/login");
                  navigate('/')
               }
            });
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            console.log(result.user.email);
            const email = result.user.email;
            const user = { email };
            axios.post("http://localhost:5000/jwt", user, { withCredentials: true }).then((res) => {
               console.log(res.data);
               if (res.data.success) {
                  navigate(location?.state ? location?.state : "/login");
                 
               }
            });
            // navigate(location?.state ? location?.state : "/login");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleGitHubBtn =()=>{
     gitHubLogin()
     .then(result =>{
      console.log(result.user);
     })
     .catch(error =>{
      console.log(error);
     })
   }

   // const handleFacebookLogin = () => {
   //    facebookLogin()
   //       .then((result) => {
   //          console.log(result.user);
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //       });
   // };
   return (
      <div>
         <Helmet>
            <title>Valley of Serenity Login</title>
         </Helmet>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-28">
               <div className="text-center lg:text-left animate__animated animate__backInLeft animate__slow">
                  <img className="md:w-[850px]" src={LogInLogo} alt="" />
               </div>

               <div className="flex justify-center my-2 mx-4 md:mx-0">
                  <div className="w-full max-w-xl  rounded-lg shadow-md p-6">
                     <div className="text-center">
                        <div className="flex items-center justify-center"></div>
                        <h2 className="text-4xl tracking-tight font-bold font-joss">Sign in into your account</h2>
                        <span className="text-sm">
                           or{" "}
                           <Link to={"/register"} className="text-blue-500">
                              register a new account
                           </Link>
                        </span>
                     </div>
                     <div className="flex flex-wrap -mx-3 mb-6">
                        <form onSubmit={loginHandleBtn} className="flex flex-wrap -mx-3 mb-6">
                           <div className="w-full md:w-full px-3 mb-6">
                              <div className="form-control">
                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <span className="label-text">Email</span>
                                 </label>
                                 <input type="email" name="email" placeholder="email" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" required />
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
                                    className=" appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                    required
                                 />
                                 <span onClick={() => setShowPass(!showPass)} className="absolute right-4 bottom-3">
                                    {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                                 </span>
                              </div>
                           </div>

                           <div className="text-center md:w-full px-3 mb-6">
                              <button className="relative flex w-1/2 h-[50px] mx-auto items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56 rounded-lg">
                                 <span className="relative z-10 font-style text-xl">LogIn</span>
                              </button>
                           </div>
                        </form>
                        <div className="mx-auto -mb-6 pb-1">
                           <span className="text-center text-xs text-gray-400">or sign up with</span>
                        </div>
                        <div className="flex items-center w-full mt-2">
                           <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                              <button
                                 // onClick={handleFacebookLogin}
                                 className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                              >
                                 <FaFacebookSquare size={24} color="#1579F0" />
                              </button>
                           </div>
                           <div onClick={handleGoogleLogin} className="w-full md:w-1/3 px-3 pt-4 mx-2">
                              <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                 <FcGoogle size={24} />
                              </button>
                           </div>
                           <div onClick={handleGitHubBtn} className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                              <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                 <FaGithub size={24} />
                              </button>
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

export default Login;
