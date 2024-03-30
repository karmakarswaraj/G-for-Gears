import React from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Auth0Provider } from '@auth0/auth0-react';

import {
  Body,
  Collection,
  Gloves,
  Helmets,
  Rental,
  Shoes,
  Bags,
  Login,
  Signup,
  ForgotPassword,
  Cart,
  Wishlist,
  Admin,
} from "./components/index.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-3wzbp3u0ptjmk1x7.us.auth0.com"
    clientId="EcHgx76FLjot2NW5xDvwlzRQzPtfVi0b"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
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
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
