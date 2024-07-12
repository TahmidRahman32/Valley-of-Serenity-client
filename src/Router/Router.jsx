import { createBrowserRouter } from "react-router-dom";
import Home from "../AllPages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../LayOut/Root/Root";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import SuiteRoom from "../AllPages/Home/Room/SuiteRoom";
import DeluxeRoom from "../AllPages/Home/Room/DeluxeRoom";
import LivingRoom from "../AllPages/Home/Room/LivingRoom";

import MyBookings from "../AllPages/MyBookings/MyBookings/MyBookings";
import Rooms from "../AllPages/Rooms/Rooms/Rooms";
import PrivateRoute from "./PrivateRoute";

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
                  element: (
                     <PrivateRoute>
                        <DeluxeRoom />
                     </PrivateRoute>
                  ),
               },
               {
                  path: "living",
                  element: (
                     <PrivateRoute>
                        <LivingRoom />
                     </PrivateRoute>
                  ),
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

         {
            path: "/MyBookings",
            element: (
               <PrivateRoute>
                  <MyBookings />
               </PrivateRoute>
            ),
         },
         {
            path: "/Rooms",
            element: <Rooms />,
            loader: () => fetch("http://localhost:5000/rooms"),
         },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
      ],
   },
]);

export default router;
