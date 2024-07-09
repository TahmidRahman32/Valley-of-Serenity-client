import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
   return (
      <div className="mx-4">
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default Root;