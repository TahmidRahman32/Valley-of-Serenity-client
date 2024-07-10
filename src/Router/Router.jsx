
import { createBrowserRouter} from "react-router-dom";
import Home from "../AllPages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../LayOut/Root/Root";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import SuiteRoom from "../AllPages/Home/Room/SuiteRoom";
import DeluxeRoom from "../AllPages/Home/Room/DeluxeRoom";
import LivingRoom from "../AllPages/Home/Room/LivingRoom";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
            children: [
               {
                  index: true,
                  element: <SuiteRoom />,
               },
               {
                  path: "deluxe",
                  element: <DeluxeRoom />,
               },
               {
                  path: "living",
                  element: <LivingRoom/>,
               },
              
            ],
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         // {
         //    path: "/room",
         //    element: <Room />,
         // },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
      ],
   },
]);

export default router;