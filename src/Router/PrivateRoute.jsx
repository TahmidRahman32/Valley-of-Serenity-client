import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { RiseLoader } from "react-spinners";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const { user, loading } = useContext(AuthContext);
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
   return <Navigate to={'/login'} replace/>
};

export default PrivateRoute;