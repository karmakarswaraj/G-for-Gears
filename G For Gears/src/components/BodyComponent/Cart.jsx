import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
const Cart = () => {
  
  
  const items = useSelector((state) => state.cart);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto mt-4">
      <h2>Shopping Cart</h2>
      {/* {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="pl-4 list-disc">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="text-gray-700">{item.name} - ${item.price}</div>
              <div className="text-gray-500">{item.quantity}</div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )} */}
      {items.map((items, index) => (
          <Cards key={index} product={items} />
        ))}
    </div>
  );
};

export default Cart;
