import { useForm } from "react-hook-form";

function AddToyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform any additional actions, such as submitting the form data to a server
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto p-6 bg-gray-100 border border-gray-300 rounded"
    >
      <h1 className="text-2xl text-center mb-4">Add A Toy</h1>

      <div className="grid grid-cols-2 gap-5">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block font-bold">
            Picture URL of the toy:
          </label>
          <input
            id="pictureUrl"
            {...register("pictureUrl", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.pictureUrl && (
            <p className="text-red-500">Picture URL is required.</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block font-bold">
            Name:
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">Name is required.</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-bold">
            Seller name:
          </label>
          <input
            id="sellerName"
            {...register("sellerName")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-bold">
            Seller email:
          </label>
          <input
            id="sellerEmail"
            {...register("sellerEmail")}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subcategory" className="block font-bold">
            Sub-category:
          </label>
          <select
            id="subcategory"
            {...register("subcategory", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
          {errors.subcategory && (
            <p className="text-red-500">Sub-category is required.</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-bold">
            Price:
          </label>
          <input
            id="price"
            {...register("price", { required: true, pattern: /\d+/ })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.price && (
            <p className="text-red-500">Please enter a valid price.</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold">
            Rating:
          </label>
          <input
            id="rating"
            {...register("rating", { required: true, pattern: /\d+/ })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.rating && (
            <p className="text-red-500">Please enter a valid rating.</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-bold">
            Available quantity:
          </label>
          <input
            id="quantity"
            {...register("quantity", { required: true, pattern: /\d+/ })}
            className="w-full p-2 border border-gray-300 rounded"
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
            id="description"
            {...register("description", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.description && (
            <p className="text-red-500">Description is required.</p>
          )}
        </div>
       

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded"
        >
          Add Toy
        </button>
      </div>
    </form>
  );
}

export default AddToyPage;
