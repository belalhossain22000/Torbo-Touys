import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Table from "./Table";
import useTitle from "../../useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  useTitle("MyToy");

  const [myToys, setMyToys] = useState([]);
  const [remainings, setRemainings] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fetch(`https://assaignment-11-server.vercel.app/toyByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, remainings]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };
 //delete btn
  const handleDelete = (id) => {
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
              const remaining = myToys.filter((ty) => ty._id !== id);

              setRemainings(remaining);
              console.log(data,remaining);
            }
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full ">
      <div className="my-10 text-center flex gap-3 items-center justify-center">
        <h1 className="font-bold ">Sort by :</h1>
        <select
          className="p-2 border w-1/3  border-gray-300 rounded"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="">Select a car</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <table className="table w-full sm:table-auto">
        {/* head */}
        <thead>
          <tr>
            <th className="sm:w-auto">delete</th>
            <th>Picture</th>
            <th>Name</th>
            <th className="sm:w-1/5">Toy Name</th>
            <th className="sm:w-1/5">Seller Name</th>
            <th className="sm:w-1/4">Seller Email</th>
            <th className="sm:w-1/4">Sub-category</th>
            <th className="sm:w-1/6">Price</th>
            <th>Rating</th>
            <th className="sm:w-1/6">Quantity</th>
            <th className="sm:w-1/6">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((myToy) => (
            <Table
              key={myToy._id}
              myToy={myToy}
              myToys={myToys}
              // setMyToys={setMyToys}
              handleDelete={handleDelete}
            ></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
