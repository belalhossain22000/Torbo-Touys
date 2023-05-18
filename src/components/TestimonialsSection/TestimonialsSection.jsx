import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      comment: 'The toys I bought from this marketplace are amazing! My kids love them.',
      image: 'https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9',
    },
    {
      name: 'Jane Smith',
      comment: 'Great selection of toys and excellent customer service. Highly recommended!',
      image: 'https://img.freepik.com/free-vector/three-kids-playing-road_1308-73202.jpg?w=740&t=st=1684377493~exp=1684378093~hmac=8902e3bb6a848e0100c12585ee0bba2bdda1f0f5d93845d566f26a0d857168a9',
    },
  ];

  return (
    <section className="testimonials">
      <h2 className='text-5xl'>What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="customer-info">
              <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
              <p className="name">- {testimonial.name}</p>
            </div>
            <p className="comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
