import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const AllToysPage = () => {
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState({});
  console.log(toy);

  const allToys = useLoaderData();
  useEffect(() => {
    setToys(allToys);
  }, [allToys]);

  const handleViewDetails = (toyId) => {
    console.log(toyId);
    fetch(`http://localhost:5000/toy/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  };

  const handleSearch = (event) => {
    fetch(`http://localhost:5000/allToysByTex/${event.target.value}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by toy name"
          className="px-4 py-2 border border-gray-300 focus:outline-none"
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
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">${toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-5"
                  className="text-blue-500 underline focus:outline-none"
                  onClick={() => handleViewDetails(toy._id)}
                >
                  Vew Details
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      <Modal toy={toy}></Modal>
    </div>
  );
};

export default AllToysPage;
