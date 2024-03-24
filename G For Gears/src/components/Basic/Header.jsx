import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets/imgIdx.js";
import { useAuth0 } from "@auth0/auth0-react";
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToggleDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let username = "";
  if (user && user.name && user.name.includes("@")) {
    username = user.name.split("@")[0];
  }

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
          <div className="flex items-center gap-5 lg:order-2">
            {isAuthenticated && (
              //Wishlist
              <div>
                <NavLink
                  to="/wishlist"
                  className="block text-white rounded-lg "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    color="#ffffff"
                    fill="none"
                    className="svg-hover"
                  >
                    <path
                      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </NavLink>
              </div>
            )}
            {isAuthenticated && (
              //CART
              <div>
                <NavLink
                  to="/cart"
                  className="block text-white rounded-lg "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    color="#ffffff"
                    fill="none"
                    transform="scale(-1, 1)"
                    className="svg-hover"
                  >
                    <path
                      d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </NavLink>
              </div>
            )}
            {isAuthenticated && (
              <NavLink
                to="/profile"
                className="relative inline-block text-left cursor-pointer"
                onClick={handleToggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  color="#ffffff"
                  fill="none"
                  className="svg-hover"
                >
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NavLink>
            )}

            {isAuthenticated ? (
              <button
                className="text-white  font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="25"
                  height="25"
                  color="#ffffff"
                  fill="none"
                  className="svg-hover"
                >
                  <path
                    d="M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
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
                    <ul className="absolute left-0 py-2 bg-gray-800 rounded-lg shadow-md top-full">
                      <li>
                        <NavLink
                          to="/gloves"
                          className="block px-4 py-2 text-white hover:bg-orange-600"
                        >
                          Gloves
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shoes"
                          className="block px-4 py-2 text-white hover:bg-orange-600"
                        >
                          Shoes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/helmets"
                          className="block px-4 py-2 text-white hover:bg-orange-600"
                        >
                          Helmets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/bags"
                          className="block px-4 py-2 text-white hover:bg-orange-600"
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
