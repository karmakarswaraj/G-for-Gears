import React from 'react';

const Footer = () => {
  const links = [
    { href: '#', title: 'About Us' },
    { href: '#', title: 'Contact' },
    { href: '#', title: 'Help' },
  ];

  const socialLinks = [
    { href: '#', icon: 'fa fa-facebook' },
    { href: '#', icon: 'fa fa-twitter' },
    { href: '#', icon: 'fa fa-instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <span className="mr-4 text-xl font-bold">G For Gears</span>
          {/* Add your logo here if needed */}
        </div>
        <nav className="hidden md:flex flex-wrap space-x-4">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.title}
              className="text-white hover:text-gray-400 underline"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ul className="hidden md:flex flex-wrap items-center space-x-4">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a href={link.href} className="text-white hover:text-gray-400">
                <i className={link.icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center pt-4 md:pt-0">
          © G For Gears @ {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;