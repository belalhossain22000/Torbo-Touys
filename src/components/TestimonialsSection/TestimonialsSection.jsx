import React from "react";

const TestimonialsSection = () => {
  return (
    <div className="carousel w-full text-white mt-14">
      <div
        id="slide1"
        className="carousel-item relative w-full space-y-5 flex flex-col justify-center items-center text-center  bg-purple-700 h-[60vh]"
      >
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">What our Happy Clients Say</h1>
          <p className="font-semibold">
            'I'm thrilled with the quality and variety of toys available here.
            The perfect place to find gifts for my little ones!'
          </p>
        </div>
        <div className="flex items-center gap-5 space-y-5">
          <img
            src="https://img.freepik.com/free-photo/smiling-pleased-asian-male-student-with-braces-showing-thumbs-up-recommend-product-service-with-excellent-quality-like-approve-idea-man-nod-approval-agree-with-person-white-background_1258-55402.jpg?w=740&t=st=1684556047~exp=1684556647~hmac=e84fe686029a5088754b8b49210d57f86757d495659cc67ae979321846e1860d "
            className="w-36 h-36 rounded-[100%]"
          />
          <div className=" text-left">
            <p className="text-2xl font-bold">Ratul hasan</p>
            <p>customer</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full space-y-5 flex flex-col justify-center items-center text-center  bg-purple-700 h-[60vh]"
      >
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">What our Happy Clients Say</h1>
          <p className="font-semibold">
          'Great selection of toys and excellent customer service. Highly recommended!',.
            The perfect place to find gifts for my little ones!'
          </p>
        </div>
        <div className="flex items-center gap-5 space-y-5">
          <img
            src="https://img.freepik.com/free-photo/smiling-asian-girl-showing-thumbs-up-looking-pleased-approve-smth-standing-white-background-copy-space_1258-94551.jpg?w=996&t=st=1684556097~exp=1684556697~hmac=22e9640abfa2a1126df768f310323d5ca000d8f64cf08108ad579550ac5c6e74 "
            className="w-36 h-36 rounded-[100%]"
          />
          <div className=" text-left">
            <p className="text-2xl font-bold">Sabrina khan</p>
            <p>customer</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full space-y-5 flex flex-col justify-center items-center text-center  bg-purple-700 h-[60vh]"
      >
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">What our Happy Clients Say</h1>
          <p className="font-semibold">
            'I'm thrilled with the quality and variety of toys available here.
            The perfect place to find gifts for my little ones!'
          </p>
        </div>
        <div className="flex items-center gap-5 space-y-5">
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-male-teenager_171337-904.jpg?w=740&t=st=1684556225~exp=1684556825~hmac=545b75bd46ca557d80b5b6d6829342ff4a120be77c56b1dbea5297a91adea66e "
            className="w-36 h-36 rounded-[100%]"
          />
          <div className=" text-left">
            <p className="text-2xl font-bold">Belal hossain</p>
            <p>customer</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full space-y-5 flex flex-col justify-center items-center text-center  bg-purple-700 h-[60vh]"
      >
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">What our Happy Clients Say</h1>
          <p className="font-semibold">
          The toys I bought from this marketplace are amazing! My kids love them.',
          </p>
        </div>
        <div className="flex items-center gap-5 space-y-5">
          <img
            src="https://img.freepik.com/free-photo/blond-businessman-happy-expression_1194-3897.jpg?w=740&t=st=1684556421~exp=1684557021~hmac=489f30ebfe7f9621d2251b7c59afb82687107613af81912bd57b0e982850123c  "
            className="w-36 h-36 rounded-[100%]"
          />
          <div className=" text-left">
            <p className="text-2xl font-bold">Json Roy</p>
            <p>customer</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
