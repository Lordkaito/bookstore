import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className='navContainer'>
        <h2>Bookstore</h2>
        <ul className="linksUl">
          <li>
            <Link className='link' to="/"> BOOKS </Link>
          </li>
          <li>
            <Link className='link' to="/categories"> CATEGORIES </Link>
          </li>
        </ul>
      </div>
      <div className='iconContainer'>
        <FaUserCircle className='icon' />
      </div>
    </nav>
  </>
);

export default Navbar;