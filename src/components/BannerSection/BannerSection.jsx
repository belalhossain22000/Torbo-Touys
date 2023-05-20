import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
            <img
              className="w-full md:h-[90vh] h-[50vh]"
              src="https://i.ibb.co/NsDZ1xP/banner-image.jpg"
              alt="Banner Slide 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSection;
