import React, { useEffect, useState } from "react";
import BannerSection from "../BannerSection/BannerSection";
import GallerySection from "../GallerySecton/GellerySection";
import ShopByCategorySection from "../ShopByCategorySetion/ShopByCategorySetion";
import FeaturedToysSection from "../FeaturedToysSection/FeaturedToysSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import useTitle from "../../useTitle";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useTitle("TurboToy");

  if (loading) {
    return (
      <div className="flex justify-center mt-[20%] mb-[20%] ">
        <button className="btn loading text-xl text-purple-600 bg-white  border-none">
          loading...
        </button>
      </div>
    );
  }
  // useTitle('TurboToy')
  return (
    <div>
      <BannerSection></BannerSection>
      <GallerySection></GallerySection>
      <ShopByCategorySection></ShopByCategorySection>
      <FeaturedToysSection></FeaturedToysSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
