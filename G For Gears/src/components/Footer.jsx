import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const links = [
    { href: "#", title: "About Us" },
    { href: "#", title: "Contact" },
    { href: "#", title: "Help" },
  ];

  const socialLinks = [
    {
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#ffffff"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
        </svg>
      ),
    },
  ];

  return (
    <footer className="px-1 py-1 text-white bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <span className="mr-4 text-xl font-bold">G For Gears</span>
          <img style={{ height: "50px", width: "50px", filter: "invert(100%)" }} src={Logo} alt="" />
        </div>
        <nav className="flex-wrap hidden space-x-4 md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white underline hover:text-gray-400"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ul className="flex-wrap items-center hidden space-x-4 md:flex">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white hover:text-gray-400">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="pt-4 text-center md:pt-0">
          © G For Gears @ {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
