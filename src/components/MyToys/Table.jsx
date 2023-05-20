import React, { useEffect, useState } from "react";
import ToyUpdateForm from "./ToyUpdateForm";
import Swal from "sweetalert2";

const Table = ({ myToy, myToys, setMyToys }) => {
  const [toy, setToy] = useState({});
  // const [remaining, setRemaining] = useState([]);
  useEffect(() => {
    setToy(myToy);
  }, [myToy]);
  const {
    _id,
    description,
    subcategory,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
  } = toy || {};

  //delete btn

  const handleDelete = (id) => {
    const remaining = myToys.filter((ty) => ty.id !== id);
   

    fetch(`https://assaignment-11-server.vercel.app/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              setMyToys(remaining);
              console.log(data);
            }
          });
        }
       
      });
  };

  return (
    <tr>
      <th className="sm:w-auto">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline border-2 hover:border-white  text-red-400 hover:bg-red-700"
        >
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
        {/* The button to open modal */}
        <label
          htmlFor="update-data-modal"
          className="text-blue-500 underline focus:outline-none"
        >
          Update
        </label>
        <ToyUpdateForm myToy={myToy}></ToyUpdateForm>
      </th>
    </tr>
  );
};

export default Table;
