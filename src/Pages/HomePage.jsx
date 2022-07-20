import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import { ProductGrid } from "../Components/Home/Navbar/ProductGrid";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ProductGrid />
    </div>
  );
};
