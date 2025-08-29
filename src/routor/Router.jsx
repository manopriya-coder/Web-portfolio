import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Page/Homepage";
import Navbar from "../Navbar/Navbar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
