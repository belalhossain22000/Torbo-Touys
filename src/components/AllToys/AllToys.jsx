import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import PrivetRout from "../../Routes/PrivetRout";
import useTitle from "../../useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AllToysPage = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState({});
  console.log(toy);

  useTitle("AllToy");

  const allToys = useLoaderData();
  useEffect(() => {
    setToys(allToys);
  }, [allToys]);

  const handleSearch = (event) => {
    fetch(
      `https://assaignment-11-server.vercel.app/allToysByTex/${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const notify = () => toast("“You have to log in first to view details”");

  return (
    <div className="container mx-auto my-14 bg-purple-300">
      <h1 className="text-4xl  font-bold mb-4 text-center ">All Toys</h1>
      <div className="mb-4 text-center">
        <h4 className="text-2xl font-bold my-5">Search By Toy Name :</h4>
        <input
          type="text"
          placeholder="Search by toy name"
          className="p-4 w-2/3 border rounded  border-purple-800 focus:outline-none"
          onChange={handleSearch}
        />
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Vew Details</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="hover:bg-gray-100">
              <td className="py-2 text-center px-4 border-b">
                {toy.sellerName}
              </td>
              <td className="py-2 text-center px-4 border-b">{toy.name}</td>
              <td className="py-2 text-center px-4 border-b">
                {toy.subcategory}
              </td>
              <td className="py-2 text-center px-4 border-b">${toy.price}</td>
              <td className="py-2 text-center   px-4 border-b">
                {toy.quantity}
              </td>
              <td className="py-2 text-center px-4 border-b">
                <label className="text-purple-900 underline focus:outline-none">
                  <Link to={`/details/${toy._id}`}> Vew Details</Link>
                </label>
                <ToastContainer></ToastContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToysPage;
