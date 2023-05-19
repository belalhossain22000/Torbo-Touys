import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684489448~exp=1684490048~hmac=cb9446859071239a41db9587135e411d413a1b5bbfcd20cfc6d9676c02d3e585"
        alt="Error"
        className="mb-8 w-96 h-auto"
      />
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
