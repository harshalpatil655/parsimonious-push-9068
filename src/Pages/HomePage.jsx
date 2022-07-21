import React from "react";
import FooterPart from "../Components/Home/Navbar/FooterPart";
import Navbar from "../Components/Home/Navbar/Navbar";
import { ProductGrid } from "../Components/Home/Navbar/ProductGrid";
import { SwiperGrid } from "../Components/Home/Navbar/SwiperGrid";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ProductGrid />
      <SwiperGrid />
      <FooterPart />
    </div>
  );
};
