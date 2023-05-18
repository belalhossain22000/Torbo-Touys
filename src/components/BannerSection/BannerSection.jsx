import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const BannerSection = () => {
  return (
    <section className="banner">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="banner-slide">
            <img className='w-full h-[100vh]' src="https://img.freepik.com/premium-vector/outdoor-scene-with-children-racing-car_1308-80333.jpg?w=826" alt="Banner Slide 1" />
            {/* <div className="banner-content">
              <h2>Discover the Excitement</h2>
              <p>Find the perfect toy for your little one.</p>
              <a href="/toys" className="btn btn-primary">Shop Now</a>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <img className='w-full h-[500px]' src="https://img.freepik.com/premium-vector/outdoor-scene-with-children-racing-car_1308-80333.jpg?w=826" alt="Banner Slide 2" />
            <div className="banner-content">
              <h2>Unleash Your Imagination</h2>
              <p>Explore a world of creativity with our toys.</p>
              <a href="/toys" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide">
            <img className='w-full h-[500px]' src="https://img.freepik.com/premium-vector/outdoor-scene-with-children-racing-car_1308-80333.jpg?w=826" alt="Banner Slide 3" />
            <div className="banner-content">
              <h2>Quality and Fun Combined</h2>
              <p>Experience hours of joy with our top-notch toys.</p>
              <a href="/toys" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSection;
