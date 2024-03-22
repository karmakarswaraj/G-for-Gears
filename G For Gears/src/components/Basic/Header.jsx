import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets/imgIdx.js";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center">
            <img
              style={{ height: "50px", width: "50px", filter: "invert(100%)" }}
              src={Logo}
              className="h-12 mr-3"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white hover:bg-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log In
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rent"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Rent
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/collection"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Collection
                  {isDropdownOpen && (
                    <ul className="absolute left-0 py-2 bg-white shadow-md top-full">
                      <li>
                        <NavLink
                          to="/gloves"
                          className="block px-4 py-2 text-gray-800 hover:bg-orange-400"
                        >
                          Gloves
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shoes"
                          className="block px-4 py-2 text-gray-800 hover:bg-orange-400"
                        >
                          Shoes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/helmets"
                          className="block px-4 py-2 text-gray-800 hover:bg-orange-400"
                        >
                          Helmets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/backpacks"
                          className="block px-4 py-2 text-gray-800 hover:bg-orange-400"
                        >
                          Backpacks
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
