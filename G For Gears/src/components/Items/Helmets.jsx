import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/helmet");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, totalCost: product.rentalCost }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div >
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
