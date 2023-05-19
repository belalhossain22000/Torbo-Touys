import React from "react";

const Table = ({ myToy }) => {
  const {
    description,
    subcategory,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
  } = myToy || {};
  return (
    <tr>
      <th className="sm:w-auto">
        <button className="btn btn-circle btn-outline border-2 hover:border-white  text-red-400 hover:bg-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureUrl} alt="image car" />
            </div>
          </div>
        </div>
      </td>
      <td>Toy Name</td>
      <td className="sm:w-1/5">{name}</td>
      <td className="sm:w-1/5">{sellerName}</td>
      <td className="sm:w-1/4">{sellerEmail}</td>
      <td className="sm:w-1/4">{subcategory}</td>
      <td className="sm:w-1/6">${price}</td>
      <td>{rating}</td>
      <td className="sm:w-1/6">{quantity}</td>
      <td className="sm:w-1/6">
        {description && description.substring(0, 30)}...
      </td>

      <th>
        <button className="text-blue-500 underline focus:outline-none">
          Details
        </button>
      </th>
    </tr>
  );
};

export default Table;
