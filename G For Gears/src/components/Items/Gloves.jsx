import { RCardComp } from "../index.js";
import { nanoid } from "nanoid";
import {
  gloveImg1,
  gloveImg2,
  gloveImg3,
  gloveImg4,
  gloveImg5,
  gloveImg6,
  gloveImg7,
} from "../../assets/imgIdx.js";
import { useState } from "react";

const Gloves = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: gloveImg1,
      name: "Winter Gloves",
      description: "Stay warm and comfortable on the slopes",
      category: "gloves",
      rentalCost: 5,
      totalCost: 0,
      brand: "Brand 1",
    },
    {
      id: nanoid(),
      img: gloveImg2,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: gloveImg3,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: gloveImg4,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: gloveImg5,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: gloveImg6,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: gloveImg7,
      name: "Summer Gloves",
      description: "Lightweight and breathable for active use",
      category: "gloves",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
  ]);

  const handleAddToCart = (productId) => {
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ margin: "10px" }}>
            <RCardComp
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gloves;
