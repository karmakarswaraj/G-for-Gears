import  { useState } from "react";
import RCardComp from "../components/BodyComponent/RCardComp";
import { nanoid } from "nanoid";
import helmetImg1 from "../assets/helmet1.png";
import helmetImg2 from "../assets/helmet2.png";
import helmetImg3 from "../assets/helmet3.png";
import helmetImg4 from "../assets/helmet4.png";
import helmetImg5 from "../assets/helmet5.png";
import helmetImg6 from "../assets/helmet6.png";
import helmetImg7 from "../assets/helmet7.png";

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
