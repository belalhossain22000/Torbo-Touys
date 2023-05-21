import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ToyUpdateForm = ({ myToy }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  } = myToy || {};

  const onSubmit = (data) => {
    // console.log(data);
    //updatet start
    fetch(`https://assaignment-11-server.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="update-data-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-7xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-6xl mx-auto p-6 bg-gray-100 border border-gray-300 rounded"
          >
            <h1 className="text-2xl text-center mb-4">Update A Toy</h1>

            <div className="grid md:grid-cols-2 gap-5">
              {/* <div className="mb-4">
                <label htmlFor="pictureUrl" className="block font-bold">
                  Picture URL of the toy:
                </label>
                <input
                  defaultValue={pictureUrl}
                  id="pictureUrl"
                  {...register("pictureUrl", { required: true })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.pictureUrl && (
                  <p className="text-red-500">Picture URL is required.</p>
                )}
              </div> */}

              {/* <div className="mb-4">
                <label htmlFor="name" className="block font-bold">
                  Toy Name:
                </label>
                <input
                  defaultValue={name}
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500">Name is required.</p>
                )}
              </div> */}

              {/* <div className="mb-4">
                <label htmlFor="sellerName" className="block font-bold">
                  Seller name:
                </label>
                <input
                  defaultValue={sellerName}
                  id="sellerName"
                  {...register("sellerName")}
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div> */}

              {/* <div className="mb-4">
                <label htmlFor="sellerEmail" className="block font-bold">
                  Seller email:
                </label>
                <input
                  value={user.email}
                  id="sellerEmail"
                  {...register("sellerEmail")}
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div> */}

              {/* <div className="mb-4">
                <label htmlFor="subcategory" className="block font-bold">
                  Sub-category:
                </label>
                <select
                  id="subcategory"
                  {...register("subcategory", { required: true })}
                  className="w-full p-4 border border-gray-300 rounded"
                >
                  <option value="">Select a sub-category</option>
                  <option value="sports-car">Sports car</option>
                  <option value="mini-police car">Mini police car</option>
                  <option value="regular-car">Regular car</option>
                </select>
                {errors.subcategory && (
                  <p className="text-red-500">Sub-category is required.</p>
                )}
              </div> */}

              <div className="mb-4">
                <label htmlFor="price" className="block font-bold">
                  Price:
                </label>
                <input
                  defaultValue={price}
                  id="price"
                  {...register("price", { required: true, pattern: /\d+/ })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.price && (
                  <p className="text-red-500">Please enter a valid price.</p>
                )}
              </div>

              {/* <div className="mb-4">
                <label htmlFor="rating" className="block font-bold">
                  Rating:
                </label>
                <input
                  defaultValue={rating}
                  id="rating"
                  {...register("rating", { required: true, pattern: /\d+/ })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.rating && (
                  <p className="text-red-500">Please enter a valid rating.</p>
                )}
              </div> */}

              <div className="mb-4">
                <label htmlFor="quantity" className="block font-bold">
                  Available quantity:
                </label>
                <input
                  defaultValue={quantity}
                  id="quantity"
                  {...register("quantity", { required: true, pattern: /\d+/ })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.quantity && (
                  <p className="text-red-500">Please enter a valid quantity.</p>
                )}
              </div>

              <div className="mb-4 w-[100%] ">
                <label htmlFor="description" className="block font-bold">
                  Detail description:
                </label>
                <textarea
                  defaultValue={description}
                  id="description"
                  {...register("description", { required: true })}
                  className="w-full p-4 border border-gray-300 rounded"
                />
                {errors.description && (
                  <p className="text-red-500">Description is required.</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full md:h-28 md:text-3xl py-2 px-4 bg-purple-700 hover:bg-purple-950 text-white font-bold  rounded"
              >
                Add Toy
              </button>
            </div>
          </form>
          <div className="modal-action ">
            <label
              htmlFor="update-data-modal"
              className="btn hover:bg-purple-900  bg-purple-800"
            >
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyUpdateForm;
