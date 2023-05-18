import React from 'react';

const FeaturedToysSection = () => {
  const featuredToys = [
    {
      picture: 'https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9',
      name: 'Superhero Action Figure',
      price: 19.99,
    },
    {
      picture: 'https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9',
      name: 'Remote Control Car',
      price: 39.99,
    },
    {
      picture: 'https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9',
      name: 'Plush Unicorn',
      price: 14.99,
    },
  ];

  return (
    <section className="featured-toys">
      <h2 className='text-5xl '>Featured Toys</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuredToys.map((toy, index) => (
          <div key={index} className="featured-toy">
            <img src={toy.picture} alt={toy.name} className="toy-image" />
            <h4>{toy.name}</h4>
            <p>Price: ${toy.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedToysSection;
