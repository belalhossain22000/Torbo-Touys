import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Pagination]);

const BannerSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="banner">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div data-aos="zoom-out"
            data-aos-duration="1000"  className="banner-slide">
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
