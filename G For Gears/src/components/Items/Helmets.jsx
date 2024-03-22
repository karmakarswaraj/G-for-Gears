import { useState } from "react";
import { RCardComp } from "../index.js";
import { nanoid } from "nanoid";
import {
  helmetImg1,
  helmetImg2,
  helmetImg3,
  helmetImg4,
  helmetImg5,
  helmetImg6,
  helmetImg7,
} from "../../assets/imgIdx.js";
const Helmets = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: helmetImg1,
      name: "Winter Helmet",
      description: "Stay warm and comfortable on the slopes",
      category: "Helmet",
      rentalCost: 5,
      totalCost: 0,
      brand: "Brand 1",
    },
    {
      id: nanoid(),
      img: helmetImg2,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: helmetImg3,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: helmetImg4,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: helmetImg5,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: helmetImg6,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: helmetImg7,
      name: "Summer Helmet",
      description: "Lightweight and breathable for active use",
      category: "Helmet",
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

export default Helmets;
