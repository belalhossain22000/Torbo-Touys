import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../useTitle";

const Registration = () => {
  useTitle("Registration");
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    // console.log(data);
    const { email, name, password, photoUrl } = data;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
            navigate("/login");
            console.log("Profile updated successfully!");
          })
          .catch((error) => {
            setError(error.message);
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2"
      >
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
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
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
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
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL
          </label>
          <input
            {...register("photoUrl", { required: "Photo URL is required" })}
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
              errors.photoUrl ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Photo URL"
          />
          {errors.photoUrl && (
            <p className="text-red-500 text-xs italic">
              {errors.photoUrl.message}
            </p>
          )}
        </div>
        <p className="text-red-500 text-xs italic my-5">{error}</p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className=" bg-purple-900 hover:bg-purple-950 w-full text-xl text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-200 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300 hover:text-blue-700">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
