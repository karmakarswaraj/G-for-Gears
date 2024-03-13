import React from "react";
import glovesImg from "../../assets/gloves.png";
import shoesImg from "../../assets/shoes.png";
import helmetImg from "../../assets/helmet.png";
import backpackImg from "../../assets/backpack.png";

function Categories() {
  return (
    <>
      <h1 className="mb-4 text-5xl font-bold" style={{marginTop: "10px", filter: "invert(100%)"}}>Explore</h1>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center p-2 rounded-lg">
          <img
            src={glovesImg}
            alt="Gloves"
            style={{ width: "350px", height: "350px" }}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 font-bold text-center" style={{ filter: "invert(100%)"}}>Gloves</p>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg" >
          <img
            src={shoesImg}
            alt="Gloves"
            style={{ width: "350px", height: "350px" }}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 font-bold text-center" style={{ filter: "invert(100%)"}}>Shoes</p>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg" >
          <img
            src={helmetImg}
            alt="Gloves"
            style={{ width: "350px", height: "350px" }}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 font-bold text-center" style={{ filter: "invert(100%)"}}>Helmet</p>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg" >
          <img
            src={backpackImg}
            alt="Gloves"
            style={{ width: "350px", height: "350px" }}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 font-bold text-center" style={{ filter: "invert(100%)"}}>Bags</p>
        </div>
      </div>
    </>
  );
}

export default Categories;
