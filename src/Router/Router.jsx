
import { createBrowserRouter} from "react-router-dom";
import Home from "../AllPages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../LayOut/Root/Root";
import Login from "../Auth/Login";
import Register from "../Auth/Register";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/login',
            element: <Login />,
         },
         {
            path: '/register',
            element: <Register />,
         },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
         // {
         //    path: '/',
         //    element: <Home />,
         // },
      ]
   },
]);

export default router;