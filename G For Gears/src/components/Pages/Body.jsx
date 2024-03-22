import React from "react";
import { Categories, Featured, CarouselItem, OnSale } from "../index";

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
