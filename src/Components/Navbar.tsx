import React from 'react';
import { pageLinks } from '../Data/data';
import { Link, useLocation } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';
  return (
    <nav className="w-full fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
      <div
        className={`flex justify-around items-center gap-[31rem] ${
          isHomePage ? 'text-white' : 'text-black'
        }`}
      >
        <ul className="flex items-center justify-between lg:w-0 w-full lg:px-0 px-10">
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li className="lg:hidden block">
            <button
              className="text-4xl"
              title="Menu Button"
              type="button"
              onClick={() => {}}
            >
              <FiAlignRight />
            </button>
          </li>
        </ul>

        <ul className="lg:flex items-center justify-between gap-10 hidden">
          {pageLinks.slice(1).map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
