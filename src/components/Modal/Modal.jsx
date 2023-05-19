import React from "react";

const Modal = ({ toy }) => {
  const {
    description,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
  } = toy;
  console.log(pictureUrl)
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="toy-detail-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-1/2">
                <img
                  src={pictureUrl}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-3">{sellerName}</p>
                <p className="py-3">{sellerEmail}</p>
                <p className="py-3">{price}</p>
                <p className="py-3">{rating}</p>
                <p className="py-3">{quantity}</p>
                <p className="py-3">{description}</p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="toy-detail-modal" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
