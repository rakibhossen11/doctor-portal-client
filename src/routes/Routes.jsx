import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddService from "../admin/AddService/AddService";
import Login from "../authentication/Login";
import Signin from "../authentication/Signin";
import BookServices from "../BookServices/BookServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/serviceAdd',
        element: <AddService></AddService>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/book/:id',
        element: <BookServices></BookServices>,
        loader: ({params}) => fetch(`https://doctor-portal-server-woad.vercel.app/services/${params.id}`)
      }
    ],
  },
]);

export default router;
