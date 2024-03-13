import React from "react";
import Logo from "../assets/Logo.png";
function BasicExample() {
  return (
    <nav className="bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-bold text-white">
            <img style={{ height: "50px", width: "50px", filter: "invert(100%)" }} src={Logo} alt="" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <a
                href="#home"
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white"
              >
                Home
              </a>
              <a
                href="#link"
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white"
              >
                Rent
              </a>
              <div className="relative">
                <button className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring">
                  Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
