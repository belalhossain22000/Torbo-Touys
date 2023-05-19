import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Table from "./Table";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toyByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-full sm:table-auto">
        {/* head */}
        <thead>
          <tr>
            <th className="sm:w-auto">
              delete
            </th>
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
            <Table key={myToy._id} myToy={myToy}></Table>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
