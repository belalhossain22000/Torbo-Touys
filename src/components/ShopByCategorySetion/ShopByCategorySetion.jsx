import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ShopByCategorySection = () => {
  const { user } = useContext(AuthContext);
  //fetch data by category
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    handleFetchByCategory("sports-car");
  }, []);

  const handleFetchByCategory = (category) => {
    fetch(`https://assaignment-11-server.vercel.app/allToysByTex/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      });
  };

  const notify = () => toast("“You have to log in first to view details”");
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="shop-by-category bg-purple-300 py-8 my-12"
    >
      <h2 className="text-center text-5xl mb-6 font-bold">Shop by Category</h2>
      <Tabs className="">
        <TabList className="flex justify-center mb-4">
          <Tab
            onClick={() => handleFetchByCategory("sports-car")}
            className="font-bold  text-white cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-gray-200 hover:text-white rounded-md  bg-purple-700 border-white border-2 "
          >
            Sports Car
          </Tab>
          <Tab
            onClick={() => handleFetchByCategory("mini-police car")}
            className="font-bold text-white cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-gray-200 hover:text-white rounded-md  bg-purple-700 border-white border-2"
          >
            Mini Police Car
          </Tab>
          <Tab
            onClick={() => handleFetchByCategory("regular-car")}
            className="font-bold text-white cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-gray-200 hover:text-white rounded-md  bg-purple-700 border-white border-2"
          >
            Regular Car
          </Tab>
        </TabList>

        {/* sports car */}

        <TabPanel>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Sports Car Sub-Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full  object-cover rounded-t-lg"
                />
                <div className="p-4 flex justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{toy.name}</h4>
                    <p className="">Price: ${toy.price}</p>

                    <Rating
                      style={{ maxWidth: 150 }}
                      value={Math.round(toy.rating)}
                      readOnly
                    />
                  </div>
                  <button
                    onClick={!user && notify}
                    className="btn-outlines btn mt-4"
                  >
                    <Link to={`/details/${toy._id}`}>View Details</Link>
                  </button>
                  <ToastContainer />
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* mini police car */}

        <TabPanel>
          <h3 className="text-xl mb-4 font-semibold text-center">
            Mini Police Car Sub-Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full  object-cover rounded-t-lg"
                />
                <div className="p-4 flex justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{toy.name}</h4>
                    <p className="">Price: ${toy.price}</p>
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={Math.round(toy.rating)}
                      readOnly
                    />
                  </div>
                  <button
                    onClick={!user && notify}
                    className="btn btn-outlines mt-4"
                  >
                    <Link to={`/details/${toy._id}`}>View Details</Link>
                  </button>
                  <ToastContainer></ToastContainer>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* regular car */}

        <TabPanel>
          <h3 className="text-xl mb-4 text-center font-semibold">
            Regular Car Sub-Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {categoryData.map((toy) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                key={toy._id}
                className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="toy-image w-full object-cover rounded-t-lg"
                />
                <div className="p-4 flex justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{toy.name}</h4>
                    <p className="">Price: ${toy.price}</p>
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={Math.round(toy.rating)}
                      readOnly
                    />
                  </div>
                  <button
                    onClick={!user && notify}
                    className="btn btn-outlines mt-4"
                  >
                    <Link to={`/details/${toy._id}`}>View Details</Link>
                  </button>
                  <ToastContainer></ToastContainer>
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
