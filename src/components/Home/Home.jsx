import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import GallerySection from "../GallerySecton/GellerySection";
import ShopByCategorySection from "../ShopByCategorySetion/ShopByCategorySetion";
import FeaturedToysSection from "../FeaturedToysSection/FeaturedToysSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import useTitle from "../../useTitle";

const Home = () => {
  useTitle('TurboToy')
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
