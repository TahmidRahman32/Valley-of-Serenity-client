
import { createBrowserRouter} from "react-router-dom";
import Home from "../AllPages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../LayOut/Root/Root";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />,
         }
      ]
   },
]);

export default router;