import React, { useState } from "react";
import { nanoid } from "nanoid";
import { RCardComp } from "../index.js";

import { shoeImg2 } from "../../assets/imgIdx.js";
const Rental = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Scooter",
      description: "A convenient way to get around town",
      category: "scooters",
      rentalCost: 8,
      totalCost: 0,
      brand: "Brand 4",
    },
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Rollerblades",
      description: "Experience the thrill of gliding",
      category: "skates",
      rentalCost: 12,
      totalCost: 0,
      brand: "Brand 5",
    },
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Kayak",
      description: "Explore the waters with ease",
      category: "boats",
      rentalCost: 20,
      totalCost: 0,
      brand: "Brand 6",
    },
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Tent",
      description: "Enjoy camping under the stars",
      category: "camping",
      rentalCost: 25,
      totalCost: 0,
      brand: "Brand 7",
    },
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Snowboard",
      description: "Hit the slopes with style",
      category: "snowboards",
      rentalCost: 18,
      totalCost: 0,
      brand: "Brand 8",
    },
  ]);

  const handleAddToCart = (productId) => {
    // Add product to cart logic here
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, totalCost: product.rentalCost }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div style={{ minHeight: "84vh" }}>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
        className="grid flex-wrap justify-center grid-cols-1 gap-7 sm:grid-cols-1 lg:grid-cols-5"
      >
        {products.map((product) => (
          <RCardComp
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product.id)}
          /> // Pass product and handleAddToCart
        ))}
      </div>
    </div>
  );
};

export default Rental;
