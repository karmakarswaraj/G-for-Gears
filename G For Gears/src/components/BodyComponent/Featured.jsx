import React from "react";
import { FshoeImg, FbagImg, FshoeImg2 } from "../../assets/imgIdx.js";
import { Cards } from "../index.js";

function Featured() {
  const products = [
    {
      img: FshoeImg,
      name: "Premium Luxury Product 1",
      brand: "Exclusive Brand 1",
      originalPrice: 140,
      salePrice: 80,
      isNew: true,
    },
    {
      img: FbagImg,
      name: "Premium Luxury Product 2",
      brand: "Exclusive Brand 2",
      originalPrice: 150,
      salePrice: 90,
      isNew: false,
    },
    {
      img: FshoeImg2,
      name: "Premium Luxury Product 3",
      brand: "Exclusive Brand 3",
      originalPrice: 160,
      salePrice: 100,
      isNew: true,
    },
  ];

  return (
    <div className="p-4">
      <h1
        className="mb-4 text-5xl font-bold"
        style={{ marginTop: "10px", filter: "invert(100%)" }}
      >
        Featured Products
      </h1>
      <div className="grid justify-center grid-cols-1 gap-7 sm:grid-cols-1 lg:grid-cols-3">
        {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
