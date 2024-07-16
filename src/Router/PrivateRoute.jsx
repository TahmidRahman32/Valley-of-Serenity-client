import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { RiseLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   
   if(user?.email){
      return children;
   }
   if(loading){
      return (
         <div className="flex justify-center items-center h-screen">
            <RiseLoader size={30} color="#181EA1" />
         </div>
      );
   }
   return <Navigate state={location.pathname} to={'/login'} replace/>
};

export default PrivateRoute;