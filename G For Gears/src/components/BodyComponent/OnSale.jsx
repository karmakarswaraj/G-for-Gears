import React from "react";
import { bigImg } from "../../assets/imgIdx.js";

function OnSale() {
  return (
    <div
      style={{
        backgroundImage: `url(${bigImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "78vh",
        width: "100%",
        display: "inline-block",
      }}
    ></div>
  );
}

export default OnSale;
