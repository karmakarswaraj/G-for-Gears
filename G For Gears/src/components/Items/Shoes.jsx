import { useState } from "react";
import { RCardComp } from "../index.js";
import { nanoid } from "nanoid";
import {
  shoeImg1,
  shoeImg2,
  shoeImg3,
  shoeImg4,
  shoeImg5,
  shoeImg6,
  shoeImg7,
} from "../../assets/imgIdx.js";

const Shoes = () => {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      img: shoeImg1,
      name: "Winter Shoes",
      description: "Stay warm and comfortable on the slopes",
      category: "Shoes",
      rentalCost: 5,
      totalCost: 0,
      brand: "Brand 1",
    },
    {
      id: nanoid(),
      img: shoeImg2,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: shoeImg3,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: shoeImg4,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: shoeImg5,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: shoeImg6,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
      rentalCost: 3,
      totalCost: 0,
      brand: "Brand 2",
    },
    {
      id: nanoid(),
      img: shoeImg7,
      name: "Summer Shoes",
      description: "Lightweight and breathable for active use",
      category: "Shoes",
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

export default Shoes;
