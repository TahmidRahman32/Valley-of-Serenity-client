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
import RoomDetails from "../AllPages/Rooms/Rooms/RoomDetails/RoomDetails";
import EditPage from "../LayOut/NavBar/EditPage";
import About from "../AllPages/AboutUs/About/About";
import BookNow from "../AllPages/Rooms/Rooms/RoomCard/BookNow";
import ReviewsFrom from "../AllPages/MyBookings/MyBookings/ReviewsFrom/ReviewsFrom";

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
            // loader: () => fetch("https://assignment-11-server-delta-ruddy.vercel.app/rooms"),
         },
         {
            path: "/roomDetails/:id",
            element: (
               <PrivateRoute>
                  <RoomDetails />
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`https://assignment-11-server-delta-ruddy.vercel.app/room/${params.id}`),
         },
         {
            path: "/editPage",
            element: <EditPage />,
         },
         {
            path: "/about",
            element: <About />,
         },

         {
            path: "/bookNow/:id",
            element: <BookNow />,
            loader: ({ params }) => fetch(`https://assignment-11-server-delta-ruddy.vercel.app/room/${params.id}`),
         },
         {
            path: "/map",
            element: <EditPage />,
         },
         {
            path: "/reviews",
            element: <ReviewsFrom />,
         },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
      ],
   },
]);

export default router;
