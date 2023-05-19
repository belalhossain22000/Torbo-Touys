import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategorySection = () => {
  //fetch data by category
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    handleFetchByCategory("sports-car");
  }, []);

  const handleFetchByCategory = (category) => {
    fetch(`http://localhost:5000/allToysByTex/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      });
  };

  return (
    // <section className="shop-by-category">
    //   <h2 className="text-center text-2xl mb-6">Shop by Category</h2>
    //   <Tabs className="text-center">
    //     <TabList className="flex justify-center mb-4">
    //       <Tab
    //         onClick={() => handleFetchByCategory("sports-car")}
    //         className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
    //       >
    //         Sports Car
    //       </Tab>
    //       <Tab
    //         onClick={() => handleFetchByCategory("mini-police car")}
    //         className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
    //       >
    //         Mini Police Car
    //       </Tab>
    //       <Tab
    //         onClick={() => handleFetchByCategory("regular-car")}
    //         className="text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
    //       >
    //         Regular Car
    //       </Tab>
    //     </TabList>

    //     {/* sports car */}

    //     <TabPanel>
    //       <h3 className="text-xl mb-4">Sports Car Sub-Categories</h3>
    //       <div className="grid grid-cols-3 gap-4">
    //         {categoryData.map((toy, index) => (
    //           <div
    //             key={toy._id}
    //             className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
    //           >
    //             <img
    //               src={toy.pictureUrl}
    //               alt={toy.name}
    //               className="toy-image w-full h-40 object-cover rounded-t-lg"
    //             />
    //             <div className="p-4">
    //               <h4 className="text-lg font-semibold">{toy.name}</h4>
    //               <p className="text-gray-600">Price: ${toy.price}</p>
    //               <p className="text-gray-600">Rating: {toy.rating}</p>
    //               <button className="btn mt-4">View Details</button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </TabPanel>

    //     {/* mini police car */}

    //     <TabPanel>
    //       <h3 className="text-xl mb-4">Mini Police Car Sub-Categories</h3>
    //       <div className="grid grid-cols-3 gap-4">
    //         {categoryData.map((toy, index) => (
    //           <div
    //             key={toy._id}
    //             className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
    //           >
    //             <img
    //               src={toy.pictureUrl}
    //               alt={toy.name}
    //               className="toy-image w-full h-40 object-cover rounded-t-lg"
    //             />
    //             <div className="p-4">
    //               <h4 className="text-lg font-semibold">{toy.name}</h4>
    //               <p className="text-gray-600">Price: ${toy.price}</p>
    //               <p className="text-gray-600">Rating: {toy.rating}</p>
    //               <button className="btn mt-4">View Details</button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </TabPanel>

    //     {/* regular car */}

    //     <TabPanel>
    //       <h3 className="text-xl mb-4">Regular Car Sub-Categories</h3>
    //       <div className="grid grid-cols-3 gap-4">
    //         {categoryData.map((toy) => (
    //           <div
    //             key={toy._id}
    //             className="toy bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
    //           >
    //             <img
    //               src={toy.pictureUrl}
    //               alt={toy.name}
    //               className="toy-image w-full h-40 object-cover rounded-t-lg"
    //             />
    //             <div className="p-4">
    //               <h4 className="text-lg font-semibold">{toy.name}</h4>
    //               <p className="text-gray-600">Price: ${toy.price}</p>
    //               <p className="text-gray-600">Rating: {toy.rating}</p>
    //               <button className="btn mt-4">View Details</button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </TabPanel>
    //   </Tabs>
    // </section>
    <section className="shop-by-category bg-purple-100 py-8 my-12">
      <h2 className="text-center text-5xl mb-6 font-bold">Shop by Category</h2>
      <Tabs className="">
        <TabList className="flex justify-center mb-4">
          <Tab
            onClick={() => handleFetchByCategory("sports-car")}
            className="font-bold text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-purple-600 border-purple-600 "
          >
            Sports Car
          </Tab>
          <Tab
            onClick={() => handleFetchByCategory("mini-police car")}
            className="font-bold text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-purple-600 border-purple-600"
          >
            Mini Police Car
          </Tab>
          <Tab
            onClick={() => handleFetchByCategory("regular-car")}
            className="font-bold text-gray-600 cursor-pointer hover:text-gray-800 px-4 py-2 border-b-2 border-transparent hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            selectedClassName="text-purple-600 border-purple-600"
          >
            Regular Car
          </Tab>
        </TabList>

        {/* sports car */}

        <TabPanel>
          <h3 className="text-xl mb-4 text-center">
            Sports Car Sub-Categories
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
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
                  <p className="text-gray-600">Price: ${toy.price}</p>
                  <p className="text-gray-600">Rating: {toy.rating}</p>
                 </div>
                  <button className="btn-outlines btn mt-4">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* mini police car */}

        <TabPanel>
          <h3 className="text-xl mb-4 text-center">
            Mini Police Car Sub-Categories
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy, index) => (
              <div
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
                    <p className="text-gray-600">Price: ${toy.price}</p>
                    <p className="text-gray-600">Rating: {toy.rating}</p>
                  </div>
                  <button className="btn btn-outlines mt-4">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* regular car */}

        <TabPanel>
          <h3 className="text-xl mb-4 text-center">
            Regular Car Sub-Categories
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((toy) => (
              <div
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
                  <p className="text-gray-600">Price: ${toy.price}</p>
                  <p className="text-gray-600">Rating: {toy.rating}</p>
                  </div>
                  <button className="btn btn-outlines mt-4">
                    View Details
                  </button>
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
