import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";
import Rental from "./components/Rental.jsx";
import Collection from "./components/Collection.jsx";
import Gloves from "./components/Gloves.jsx";
import Shoes from "./components/Shoes.jsx";
import Helmet from "./components/Helmet.jsx";
import Bag from "./components/Bag.jsx";

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
          <Route path="/helmets" element={<Helmet />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bags" element={<Bag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
