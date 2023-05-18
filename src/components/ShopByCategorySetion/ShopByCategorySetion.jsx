import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategorySection = () => {
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
  ];

  return (
    <section className="shop-by-category">
      <h2>Shop by Category</h2>
      <Tabs>
        <TabList>
          <Tab>Toy Cars</Tab>
          <Tab>Action Figures</Tab>
          <Tab>Animal Toys</Tab>
        </TabList>

        <TabPanel>
          <h3>Toy Cars Sub-Categories</h3>
          {toyCars.map((toy, index) => (
            <div key={index} className="toy ">
              <img src={toy.picture} alt={toy.name} className="toy-image" />
              <h4>{toy.name}</h4>
              <p>Price: ${toy.price}</p>
              <p>Rating: {toy.rating}</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </TabPanel>

        <TabPanel>
          <h3>Action Figures Sub-Categories</h3>
          {actionFigures.map((toy, index) => (
            <div key={index} className="toy">
              <img src={toy.picture} alt={toy.name} className="toy-image" />
              <h4>{toy.name}</h4>
              <p>Price: ${toy.price}</p>
              <p>Rating: {toy.rating}</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </TabPanel>

        <TabPanel>
          <h3>Animal Toys Sub-Categories</h3>
          {animalToys.map((toy, index) => (
            <div key={index} className="toy">
              <img src={toy.picture} alt={toy.name} className="toy-image" />
              <h4>{toy.name}</h4>
              <p>Price: ${toy.price}</p>
              <p>Rating: {toy.rating}</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ShopByCategorySection;
