import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../useTitle";

const Login = () => {
  useTitle("Login");
  const { loginUser, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(googleLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");

    console.log(data);
    const { password, email } = data;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user, "login success fully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  console.log(email);
  //google login

  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

 

  return (
    <div className="flex justify-center items-center bg-purple-300  h-scree p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-600 w-full  shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2"
      >
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className={`shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            className={`shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <p className="text-red-500 text-xs italic my-5">{error}</p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-purple-900 hover:bg-purple-950 w-full text-white font-bold py-3 text-2xl px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </div>

        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-200 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:btn-link hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-circle   btn-primary bg-purple-700 hover:bg-purple-900 w-full md:w-1/2"
          >
            <span className="mr-5 text-2xl text-yellow-500">
              <FaGoogle></FaGoogle>{" "}
            </span>{" "}
            <span className="font-bold md:text-md">login with google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
