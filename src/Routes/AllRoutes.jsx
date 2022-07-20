import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Shopping } from "../Pages/Shopping";
import { Signup } from "../Pages/Signup";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
      </Routes>
    </div>
  );
};
