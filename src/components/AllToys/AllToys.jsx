import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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

  const handleViewDetails = (toyId) => {
    console.log(toyId);
    fetch(`https://assaignment-11-server.vercel.app/toy/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  };

  const handleSearch = (event) => {
    fetch(
      `https://assaignment-11-server.vercel.app/allToysByTex/${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const notify = () => toast("“You have to log in first to view details”");

  return (
    <div className="container mx-auto my-14 bg-purple-200">
      <h1 className="text-4xl  font-bold mb-4 text-center ">All Toys</h1>
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by toy name"
          className="p-5 w-2/3 border rounded  border-gray-300 focus:outline-none"
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
                {/* The button to open modal */}

                <label
                  htmlFor="toy-detail-modal"
                  className="text-purple-900 underline focus:outline-none"
                  onClick={() =>{
                   if(!user){
                    notify()
                   }
                     handleViewDetails(toy._id)
                    }}
                >
                  Vew Details
                </label>
                <ToastContainer></ToastContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {user && <Modal toy={toy}></Modal>}
    </div>
  );
};

export default AllToysPage;
