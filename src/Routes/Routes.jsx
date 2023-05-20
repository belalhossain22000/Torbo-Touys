import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import Home from "../components/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Error from "../components/Error/Error";
import AddToyPage from "../components/AddToyPage/AddToyPage";
import ToyDetails from "../components/ShopByCategorySetion/ToyDetails";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader:()=>fetch('https://assaignment-11-server.vercel.app/allToys')
      },
      {
        path: "/my-toys",
        element: <PrivetRout><MyToys></MyToys></PrivetRout>,
      },
      {
        path: "/add-toy",
        element: <PrivetRout><AddToyPage></AddToyPage></PrivetRout>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        element: <PrivetRout><ToyDetails></ToyDetails></PrivetRout>,
        loader:({params})=>fetch(`https://assaignment-11-server.vercel.app/toy/${params.id}`)
      },
    ],
  },
]);
