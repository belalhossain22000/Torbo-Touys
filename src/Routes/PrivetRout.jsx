import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRout = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation()

  if(loading){
    return <div className="flex justify-center items-center mt-[20%] mb-[20%]">
        <button className="btn btn-square loading "></button>
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivetRout;