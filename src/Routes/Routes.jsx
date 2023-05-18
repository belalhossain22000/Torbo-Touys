import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import Home from "../components/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/allToys",
            element:<AllToys></AllToys>
        },
        {
            path:"/my-toys",
            element:<MyToys></MyToys>
        },
        {
            path:"/add-toy",
            element:<AddToy></AddToy>
        },
        {
            path:"/blogs",
            element:<Blog></Blog>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Registration></Registration>
        }
      ]
    },
  ]);