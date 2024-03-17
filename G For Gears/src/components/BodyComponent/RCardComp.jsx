import React, { useState } from "react";

const RCardComp = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle increase quantity
  const increaseQuantity = () => {
    // You can set a maximum limit if needed
    setQuantity(quantity + 1);
  };
  return (
    <div
      className="w-[350px] rounded-md justify-center p-4 mx-1"
      style={{ backgroundColor: "#363636" }}
    >
      <img
        src={product.img}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4 pt-2 pb-1">
        <h1 className="inline-flex items-center pb-2 text-3xl font-semibold">
          {product.name}
        </h1>
        <br />
        <span className="text-md inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 font-medium text-gray-800">
          {product.brand}
        </span>

        <p className="mt-3 text-white text-md">{product.description}</p>

        <div className="flex items-center justify-around px-2 py-1 mt-4 rounded-md">
          <span className="inline-block px-3 py-1 mt-2 mb-2 mr-2 text-xl font-semibold text-gray-900 bg-gray-100 rounded-full">
            ${product.rentalCost}/day
          </span>
          <div className="p-2 bg-gray-700 rounded-lg">
            <button
              type="button"
              className="text-white semibold focus:outline-none "
              onClick={decreaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M20 12L4 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span className="px-2 text-2xl font-semibold text-white">
              {quantity}
            </span>
            <button
              type="button"
              className="font-semibold text-white focus:outline-none "
              onClick={increaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M12 7V21M19 14H5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <button onClick={() => setQuantity(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9.5 16.5L9.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14.5 16.5L14.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div
          className="px-2 py-1 text-white bg-gray-800 rounded-lg bg-opacity-70"
          style={{ marginTop: "20px" }}
        >
          Total Cost: ${product.rentalCost * quantity}
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-orange-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add For Rent
        </button>
      </div>
    </div>
  );
};

export default RCardComp;
