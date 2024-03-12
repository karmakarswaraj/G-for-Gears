import React from "react";
import Categories from "./Categories";
import Featured from "./Featured";
import Hero from "./Hero";
import OnSale from "./OnSale";

function Body() {
  return (
    <>
      <Hero />
      <Categories />
      <OnSale />
      <Featured />
    </>
  );
}

export default Body;
