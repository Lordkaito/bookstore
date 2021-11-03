import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h2>Bookstore</h2>
      <ul className="d-flex">
        <li>
          <Link to="/"> BOOKS </Link>
        </li>
        <li>
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;