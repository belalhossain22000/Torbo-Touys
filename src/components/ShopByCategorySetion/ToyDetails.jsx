import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    description,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
  } = toy || {};

  const notify = () => toast("Wow so easy !");
  return (
    // <div className="card lg:card-side my-14 md:w-[80%] mx-auto bg-purple-300 shadow-md">
    //   <figure className="w-[60%]">
    //     <img src={pictureUrl} alt="Album" />
    //   </figure>
    //   <div className="card-body ">
    //     <h2 className="card-title">{name}</h2>

    //     <p className="mt-0 font-bold">price:$ {price}</p>
    //     <p className="mt-0 font-bold">Quantity: {quantity}</p>
    //     <p className="mt-0 font-bold">{description}</p>
    //     <Rating style={{ maxWidth: 150 }} value={Math.floor(rating)} readOnly />
    //   </div>
    // </div>
    <div className="card lg:card-side my-14 md:w-2/3  mx-auto bg-gray-100 shadow-md rounded-lg p-8">
      <div className="flex flex-col md:flex-row">
        <figure className="md:w-1/2">
          <img className="rounded-lg" src={pictureUrl} alt="Album" />
        </figure>
        <div className="md:w-1/2 md:px-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">{name}</h2>
          <p className="text-lg mb-4">Price: $ {price}</p>
          <p className="text-lg mb-4">Quantity: {quantity}</p>
          <p className="text-lg mb-4">Seller Name: {sellerName}</p>
          <p className="text-lg mb-4">Seller Email: {sellerEmail}</p>
          <p className="text-lg mb-4">{description}</p>
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating)}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
