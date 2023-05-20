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
        loader:()=>fetch('http://localhost:5000/allToys')
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/add-toy",
        element: <AddToyPage></AddToyPage>,
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
        loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
    ],
  },
]);
