import React from "react";

const Admin = () => {
  const handleBoxClick = (text) => {
    // console.log(${text} clicked);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div
        className="p-8 m-4 bg-gray-200 rounded-lg shadow-md cursor-pointer box "
        onClick={() => handleBoxClick("Add/Remove Items")}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="400"
          height="400"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          xml:space="preserve"
        >
          <line
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            x1="39"
            y1="43"
            x2="25"
            y2="29"
          />
          <line
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            x1="25"
            y1="43"
            x2="39"
            y2="29"
          />
          <polyline
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            points="23,8 10,8 10,63 54,63 54,8 41,8 "
          />
          <polygon
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            points="36,5 36,1 28,1 28,5 24,5 22,13 42,13 40,5 
	"
          />
        </svg>

        <h2 className="text-lg font-semibold">Add/Remove Items</h2>
        <p className="text-sm">Click to add or remove items</p>
      </div>
      <div
        className="p-8 m-4 bg-gray-200 rounded-lg shadow-md cursor-pointer box"
        onClick={() => handleBoxClick("Retention Analysis")}
      >
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="100%" height="100%" fill="#f0f0f0" />

          <line
            x1="50"
            y1="350"
            x2="550"
            y2="350"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="350"
            stroke="black"
            stroke-width="2"
          />

          <text x="30" y="50" font-family="Arial" font-size="12" fill="black">
            100%
          </text>
          <text x="30" y="150" font-family="Arial" font-size="12" fill="black">
            75%
          </text>
          <text x="30" y="250" font-family="Arial" font-size="12" fill="black">
            50%
          </text>
          <text x="30" y="350" font-family="Arial" font-size="12" fill="black">
            25%
          </text>

          <line
            x1="80"
            y1="250"
            x2="120"
            y2="250"
            stroke="#ff6600"
            stroke-width="2"
          />
          <line
            x1="120"
            y1="250"
            x2="160"
            y2="150"
            stroke="#ff6600"
            stroke-width="2"
          />
          <line
            x1="160"
            y1="150"
            x2="200"
            y2="150"
            stroke="#ff6600"
            stroke-width="2"
          />
          <line
            x1="200"
            y1="150"
            x2="240"
            y2="100"
            stroke="#ff6600"
            stroke-width="2"
          />
          <line
            x1="240"
            y1="100"
            x2="280"
            y2="100"
            stroke="#ff6600"
            stroke-width="2"
          />

          <text x="80" y="370" font-family="Arial" font-size="12" fill="black">
            Week 1
          </text>
          <text x="160" y="370" font-family="Arial" font-size="12" fill="black">
            Week 2
          </text>
          <text x="240" y="370" font-family="Arial" font-size="12" fill="black">
            Week 3
          </text>
          <text x="320" y="370" font-family="Arial" font-size="12" fill="black">
            Week 4
          </text>
        </svg>

        <h2 className="text-lg font-semibold">Retention Analysis</h2>
        <p className="text-sm">Click to view retention analysis</p>
      </div>
      <div
        className="p-8 m-4 bg-gray-200 rounded-lg shadow-md cursor-pointer box"
        onClick={() => handleBoxClick("Orders")}
      >
        <svg
          width="400px"
          height="400px"
          viewBox="0 0 1024 1024"
          fill="#000000"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z"
            fill=""
          />
          <path
            d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z"
            fill=""
          />
        </svg>

        <h2 className="text-lg font-semibold">Orders</h2>
        <p className="text-sm">Click to view orders</p>
      </div>
      <div
        className="p-8 m-4 bg-gray-200 rounded-lg shadow-md cursor-pointer box"
        onClick={() => handleBoxClick("Settings")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="400"
          height="400"
          color="#000000"
          fill="none"
        >
          <path
            d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
            stroke="currentColor"
            stroke-width="1"
          />
          <path
            d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm">Click to view or edit settings</p>
      </div>
    </div>
  );
};

export default Admin;
