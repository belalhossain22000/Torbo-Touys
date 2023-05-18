import React from "react";
import Navbar from "./components/Navbar.jsx/Navbar";
import BannerSection from "./components/BannerSection/BannerSection";
import GallerySection from "./components/GallerySecton/GellerySection";
import ShopByCategorySection from "./components/ShopByCategorySetion/ShopByCategorySetion";
import FeaturedToysSection from "./components/FeaturedToysSection/FeaturedToysSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Footer from "./components/Footer/Footer";



const App = () => {
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

export default App;
