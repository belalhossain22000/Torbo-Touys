import React from 'react';

const Table = ({myToy}) => {
    return (
        <tr>
        <th className="sm:w-auto">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>Toy Name</td>
        <td className="sm:w-1/5">Seller Name</td>
        <td className="sm:w-1/4">Seller Email</td>
        <td className="sm:w-1/4">Sub-category</td>
        <td className="sm:w-1/6">$Price</td>
        <td>Rating</td>
        <td className="sm:w-1/6">Quantity</td>
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
        </th>
      </tr>
    );
};

export default Table;