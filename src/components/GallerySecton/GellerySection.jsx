import React from "react";

const GallerySection = () => {
  const images = [
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
    "https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9",
  ];

  return (
    <section className="bg-purple-100 py-8 my-12">
      <h2 className="text-5xl font-bold text-center mb-6 ">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
