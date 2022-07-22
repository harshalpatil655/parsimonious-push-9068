import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Product } from "../Pages/Product";
import { Shopping } from "../Pages/Shopping";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
        <Route path="/shopping/:id" element={<Product />}>
          Product
        </Route>
      </Routes>
    </div>
  );
};
