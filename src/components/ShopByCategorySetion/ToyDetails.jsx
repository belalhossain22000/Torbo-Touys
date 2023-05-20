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
  } = toy || {};

  const notify = () => toast("Wow so easy !");
  return (
    <div className="card lg:card-side my-14 md:w-[80%] mx-auto bg-purple-200 shadow-md">
      <figure className="w-[60%]">
        <img src={pictureUrl} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>

        <p className="mt-0 font-bold">price:$ {price}</p>
        <p className="mt-0 font-bold">Quantity: {quantity}</p>
        <p className="mt-0 font-bold">{description}</p>
        <Rating style={{ maxWidth: 150 }} value={Math.floor(rating)} readOnly />
      </div>
    </div>
  );
};

export default ToyDetails;
