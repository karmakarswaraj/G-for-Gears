import React from "react";

function Featured() {
  const products = [
    {
      name: "Premium Luxury Product",
      brand: "Exclusive Brand",
      originalPrice: 140,
      salePrice: 80,
      isNew: true,
    },
    {
      name: "Premium Luxury Product",
      brand: "Exclusive Brand",
      originalPrice: 140,
      salePrice: 80,
      isNew: true,
    },
    {
      name: "Premium Luxury Product",
      brand: "Exclusive Brand",
      originalPrice: 140,
      salePrice: 80,
      isNew: true,
    },{
      name: "Premium Luxury Product",
      brand: "Exclusive Brand",
      originalPrice: 140,
      salePrice: 80,
      isNew: true,
    }
  
    // Add more products here
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-orange-500 shadow p-4 relative"
          >
            {product.isNew && (
              <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg">
                New
              </span>
            )}
            <img
              src={`UploadedImage${index + 1}.jpg`} // Replace with actual image path
              alt={product.name}
              className="w-full h-auto mb-2"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.brand}</p>
            <div className="mt-2">
              <p className="text-gray-500 line-through">
                ${product.originalPrice}
              </p>
              <p className="text-red-500 font-bold">${product.salePrice}</p>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                30% OFF
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 0 0-1 1v5H6a1 1 0 0 0 0 2h3v5a1 1 0 0 0 2 0v-5h3a1 1 0 0 0 0-2h-3V3a1 1 0 0 0-1-1z"
                  />
                </svg>
                Add
              </button>
              <button className="text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 0 0-1 1v5H6a1 1 0 0 0 0 2h3v5a1 1 0 0 0 2 0v-5h3a1 1 0 0 0 0-2h-3V3a1 1 0 0 0-1-1z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
