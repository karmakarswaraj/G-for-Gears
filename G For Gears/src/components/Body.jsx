import React from "react";
import Categories from "./BodyComponent/Categories";
import Featured from "./BodyComponent/Featured";
import CarouselItem from "./BodyComponent/CarouselItem";
import OnSale from "./BodyComponent/OnSale";

function Body() {
  return (
    <>
      <CarouselItem />
      <Categories />
      <OnSale />
      <Featured />
    </>
  );
}

export default Body;
