import React from 'react';
import { pageLinks } from '../Data/data';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-7">
      <div className="flex justify-around items-center gap-14">
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-10">
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
