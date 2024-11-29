import React from 'react';
import { pageLinks } from '../Data/data';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';
  return (
    <nav className="p-7 w-full absolute top-10 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 z-[1000]">
      <div
        className={`flex justify-around items-center gap-20 ${
          isHomePage ? 'text-white' : 'text-black'
        }`}
      >
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-10">
          {pageLinks.splice(1).map((link) => (
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
