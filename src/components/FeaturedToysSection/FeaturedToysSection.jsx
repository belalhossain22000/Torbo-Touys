import React from "react";

const FeaturedToysSection = () => {
  return (
    <div className=" bg-purple-200 py-5">
      <h1 className="font-bold text-5xl text-center my-10 ">Why chose us</h1>
      <div className="grid grid-cols-4 gap-14 p-20 h-[50vh] bg-purple-700 text-center">
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20"
            src="https://cdn-icons-png.flaticon.com/512/833/833926.png?w=740&t=st=1684557519~exp=1684558119~hmac=7ee2d52435fe5feca817c1bbcf876dd6633aacaa5f18c23db808ac0628eb02ce"
            alt=""
          />
          <h1 className="font-bold text-4xl">Fast Delivery</h1>
          <p className="font-semibold">
            Fast Delivery Find tracking information and order details from Your
            Orders.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20"
            src="https://cdn-icons-png.flaticon.com/512/1101/1101550.png?w=740&t=st=1684557668~exp=1684558268~hmac=1eb677f45f3ec944cebbd4aba1b054a7da7a071822b911c33bb65d43f496bbe0"
            alt=""
          />
          <h1 className="font-bold text-4xl">Save Money</h1>
          <p className="font-semibold">
            Save $5 every year compared to the monthly plan by paying yearly.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20"
            src="https://cdn-icons-png.flaticon.com/512/249/249167.png?w=740&t=st=1684557751~exp=1684558351~hmac=ad05838fc86ce3e29bba6c0a50af19292af2b0bca668d0719bac8cb38a41f9e0"
            alt=""
          />
          <h1 className="font-bold text-4xl">Fast Returns</h1>
          <p className="font-semibold">Money back. If the item didn’t suit you</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20"
            src="https://cdn-icons-png.flaticon.com/512/950/950781.png?w=740&t=st=1684557820~exp=1684558420~hmac=14051e124cbc5a7320bb9ff35676073c0f4ea4f8c207dde3450db3a1f033c46d"
            alt=""
          />
          <h1 className="font-bold text-4xl">Online Support</h1>
          <p className="font-semibold">
            Use our 24/7 customer hotline so you’re not alone if you have a
            question
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToysSection;
