import React from 'react';
import Rental from './RentalCard'; 
import shoeImg2 from "../../assets/shoes3.png";
const RCardComp = () => {
  const bikeData = {
    img: shoeImg2,
    name: 'Mountain Bike',
    description: 'A sturdy bike designed for off-road cycling.',
    category: 'Mountain',
    costPerDay: 25, 
  };

  return (
    <div className="grid justify-center grid-cols-1 gap-7 sm:grid-cols-1 lg:grid-cols-3">
      {products.map((product, index) => (
      <Rental bikeData={bikeData} />
      ))}
    </div>
  );
};

export default RCardComp;
