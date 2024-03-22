import { useState } from "react";
import { RCardComp } from "../index.js";
import { nanoid } from "nanoid";
import {
  BagImg1,
  BagImg2,
  BagImg3,
  BagImg4,
  BagImg5,
  BagImg6,
  BagImg7,
} from "../../assets/imgIdx.js";

const Bags = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: BagImg1,
      name: "Winter Bag",
      description: "Stay warm and comfortable on the slopes",
      category: "Bag",
      rentalCost: 5,
      totalCost: 0,
      brand: "Brand 1",
    },
    {
      id: nanoid(),
      img: BagImg2,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: BagImg3,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: BagImg4,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: BagImg5,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: BagImg6,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: BagImg7,
      name: "Summer Bag",
      description: "Lightweight and breathable for active use",
      category: "Bag",
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

export default Bags;
