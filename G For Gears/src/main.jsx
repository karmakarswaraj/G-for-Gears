import React from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import {Body, Collection, Gloves, Helmets, Rental, Shoes, Bags } from "./components/index.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Body />} />
          <Route path="/rent" element={<Rental />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/gloves" element={<Gloves />} />
          <Route path="/helmets" element={<Helmets />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bags" element={<Bags />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
