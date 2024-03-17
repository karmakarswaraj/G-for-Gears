import React from "react";

const RCardComp = ({ product }) => {
  return (
    <div className="w-[350px] rounded-md border justify-center p-4 mx-1">
      <img
        src={product.img}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.name}
        </h1>
        <br />
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
          {product.brand}
        </span>

        <p className="mt-3 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            ${product.rentalCost} per day
          </span>
          <div className="flex items-center px-2 py-1 border rounded-md">
        <button
          type="button"
          className="mr-2 text-xs font-semibold focus:outline-none hover:bg-gray-200"
          onClick={() => { /* handle decrease quantity */ }}
        >
          -
        </button>
        <span className="px-2 text-sm font-semibold">{/* quantity state */}</span>
        <button
          type="button"
          className="text-xs font-semibold focus:outline-none hover:bg-gray-200"
          onClick={() => { /* handle increase quantity */ }}
        >
          +
        </button>
      </div>
          {/* <br />
          <span>Total Cost: ${product.rentalCost * 7}</span> */}
          
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
