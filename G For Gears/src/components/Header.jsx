import React from "react";

function BasicExample() {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-white text-lg font-bold">
              G
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#link"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Rent
              </a>
              <div className="relative">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring">
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
