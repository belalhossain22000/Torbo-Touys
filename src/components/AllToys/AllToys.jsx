import React, { useState } from "react";

const AllToysPage = () => {
  const [selectedToyId, setSelectedToyId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toys = [
    {
      id: 1,
      seller: "John Doe",
      name: "Sports Car",
      subcategory: "Toy Cars",
      price: 29.99,
      quantity: 10,
    },
    {
      id: 2,
      seller: "Jane Smith",
      name: "Marvel Superhero",
      subcategory: "Action Figures",
      price: 12.99,
      quantity: 5,
    },
    // Add more toy objects as needed
  ];

  const handleViewDetails = (toyId) => {
    setSelectedToyId(toyId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedToy = toys.find((toy) => toy.id === selectedToyId);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by toy name"
          className="px-4 py-2 border border-gray-300 focus:outline-none"
          value={searchTerm}
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
          {filteredToys.map((toy) => (
            <tr key={toy.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{toy.seller}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subcategory}</td>
              <td className="py-2 px-4 border-b">${toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-blue-500 underline focus:outline-none"
                  onClick={() => handleViewDetails(toy.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedToy && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Toy Details</h2>
          <p>
            Seller: {selectedToy.seller}
            <br />
            Toy Name: {selectedToy.name}
            <br />
            Sub-category: {selectedToy.subcategory}
            <br />
            Price: ${selectedToy.price}
            <br />
            Available Quantity: {selectedToy.quantity}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllToysPage;
