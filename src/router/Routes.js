import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ControlRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ControlRouter;
