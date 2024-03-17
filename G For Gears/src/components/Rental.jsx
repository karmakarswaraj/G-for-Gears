import React, { useState } from "react";
import RCardComp from "../components/BodyComponent/RCardComp"; // Import the Card component
import { nanoid } from "nanoid";

const Rental = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: "",
      name: "Scooter",
      description: "A convenient way to get around town",
      category: "scooters",
      rentalCost: 8,
      totalCost: 0,
      brand: "Brand 4",
    },
    {
      id: nanoid(),
      img: "",
      name: "Rollerblades",
      description: "Experience the thrill of gliding",
      category: "skates",
      rentalCost: 12,
      totalCost: 0,
      brand: "Brand 5",
    },
    {
      id: nanoid(),
      img: "",
      name: "Kayak",
      description: "Explore the waters with ease",
      category: "boats",
      rentalCost: 20,
      totalCost: 0,
      brand: "Brand 6",
    },
    {
      id: nanoid(),
      img: "",
      name: "Tent",
      description: "Enjoy camping under the stars",
      category: "camping",
      rentalCost: 25,
      totalCost: 0,
      brand: "Brand 7",
    },
    {
      id: nanoid(),
      img: "",
      name: "Snowboard",
      description: "Hit the slopes with style",
      category: "snowboards",
      rentalCost: 18,
      totalCost: 0,
      brand: "Brand 8",
    },

    // Add more products here
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
        className="grid justify-center grid-cols-1 gap-7 sm:grid-cols-1 lg:grid-cols-5"
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
