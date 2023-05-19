import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategorySection = () => {

//fetch data by category
const [categoryData,setCategoryData]= useState([])

const handleFetchByCategory=(category)=>{
  fetch(`http://localhost:5000/allToysByTex/${category}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setCategoryData(data)
  
  })

}

  const toyCars = [
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Sports Car",
      price: 29.99,
      rating: 4.5,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Truck",
      price: 19.99,
      rating: 4.0,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Truck",
      price: 19.99,
      rating: 4.0,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Truck",
      price: 19.99,
      rating: 4.0,
    },
  ];

  const actionFigures = [
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Marvel Superhero",
      price: 12.99,
      rating: 4.8,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Star Wars Character",
      price: 15.99,
      rating: 4.2,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Star Wars Character",
      price: 15.99,
      rating: 4.2,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Star Wars Character",
      price: 15.99,
      rating: 4.2,
    },
  ];

  const animalToys = [
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Teddy Bear",
      price: 9.99,
      rating: 4.6,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Dinosaur",
      price: 14.99,
      rating: 4.1,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Dinosaur",
      price: 14.99,
      rating: 4.1,
    },
    {
      picture:
        "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
      name: "Dinosaur",
      price: 14.99,
      rating: 4.1,
    },
  ];

  return (
    <section className="shop-by-category">
      <h2 className="text-center text-2xl mb-6">Shop by Category</h2>
      <Tabs className="text-center">
        <TabList className="flex justify-center mb-4">
          <Tab onClick={()=>handleFetchByCategory('sports-car')} className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out">
            Sports Car
          </Tab>
          <Tab onClick={()=>handleFetchByCategory('mini-police car')} className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out">
            Mini Police Car
          </Tab>
          <Tab onClick={()=>handleFetchByCategory('regular-car')} className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out">
            Regular Car
          </Tab>
        </TabList>


{/* sports car */}

        <TabPanel>
          <h3 className="text-xl mb-4">Toy Cars Sub-Categories</h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{toy.name}</h4>
                  <p className="text-gray-600">Price: ${toy.price}</p>
                  <p className="text-gray-600">Rating: {toy.rating}</p>
                  <button className="btn mt-4">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

{/* mini police car */}

        <TabPanel>
          <h3 className="text-xl mb-4">Action Figures Sub-Categories</h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{toy.name}</h4>
                  <p className="text-gray-600">Price: ${toy.price}</p>
                  <p className="text-gray-600">Rating: {toy.rating}</p>
                  <button className="btn mt-4">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

{/* regular car */}

        <TabPanel>
          <h3 className="text-xl mb-4">Animal Toys Sub-Categories</h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy) => (
              <div
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{toy.name}</h4>
                  <p className="text-gray-600">Price: ${toy.price}</p>
                  <p className="text-gray-600">Rating: {toy.rating}</p>
                  <button className="btn mt-4">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ShopByCategorySection;
