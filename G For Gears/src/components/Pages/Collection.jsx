import React from "react";
import { Bags, Gloves, Helmets, Shoes } from "../index";
function Collection() {
  return (
    <div >
      <h1
        className="text-5xl font-bold "
        style={{ marginTop: "10px", filter: "invert(100%)" }}
      >
        BAGS
      </h1>
      <Bags />
      <h1
        className="text-5xl font-bold "
        style={{ marginTop: "10px", filter: "invert(100%)" }}
      >
        GLOVES
      </h1>
      <Gloves />
      <h1
        className="text-5xl font-bold "
        style={{ marginTop: "10px", filter: "invert(100%)" }}
      >
        HELMETS
      </h1>
      <Helmets />
      <h1
        className="text-5xl font-bold"
        style={{ marginTop: "10px", filter: "invert(100%)" }}
      >
        SHOES
      </h1>
      <Shoes />
    </div>
  );
}

export default Collection;
