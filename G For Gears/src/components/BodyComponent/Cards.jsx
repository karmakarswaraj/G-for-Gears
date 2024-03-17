import React from "react";

function Cards({ index, product }) {
  // Destructure props here
  return (
    <div
      key={index}
      className="relative p-4 rounded-lg shadow-lg"
      style={{ maxWidth: "30vw", backgroundColor: "#363636" }}
    >
      {product.isNew && (
        <span className="absolute top-0 right-0 px-2 py-1 text-white bg-orange-700 rounded-tr-lg">
          New
        </span>
      )}
      <div
        style={{
          height: "30vh",
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="object-cover w-full h-full mb-2"
        />
      </div>
      <h3 className="text-lg font-bold" style={{ filter: "invert(100%)" }}>
        {product.name}{" "}
      </h3>
      <p className="text-gray-600" style={{ filter: "invert(100%)" }}>
        {product.brand}
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <p
          className="text-gray-500 line-through "
          style={{ filter: "invert(100%)" }}
        >
          ${product.originalPrice}
        </p>
        <p className="font-bold text-orange-700">${product.salePrice}</p>
        <span className="px-2 py-1 text-xs text-white bg-orange-700 rounded">
          30% OFF
        </span>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="text-gray-500 hover:text-red-500"
          onMouseEnter={(e) => {
            e.target.style.color = "#C2410C";
          }} // Change color on hover
          onMouseLeave={(e) => {
            e.target.style.color = "#ffffff";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14 17H22M18 13L18 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 6H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="6"
              cy="20"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="17"
              cy="20"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 20L15 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Add
        </button>
      </div>
    </div>
  );
}

export default Cards;
