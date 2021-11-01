import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      name: 'Books',
      path: '/',
    },
    {
      name: 'Categories',
      path: '/categories',
    },
  ];

  return (
    <nav className='navbar'>
      <div className='logo'>
        <p>Here goes my logo</p>
      </div>
      <ul className='navbarLinks home'>
        {links.map((link) => {
          return (
            <li>
              <NavLink to={link.path} exact>
                {link.name}
              </NavLink>
            </li>
          );
        })}
        <div className='iconContainer'>
          <p className='icon'>
            Here goes an icon
          </p>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;