import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><button className="navbar-button">Home</button></li>
        <li className="navbar-item"><button className="navbar-button">About</button></li>
        <li className="navbar-item relative">
          <button className="navbar-button" onClick={toggleDropdown}>Categories</button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/mens-clothing">Men's Clothing</Link></li>
              <li className="dropdown-item"><Link to="/womens-clothing">Women's Clothing</Link></li>
              <li className="dropdown-item"><Link to="/electronics">Electronics</Link></li>
              <li className="dropdown-item"><Link to="/jewelry">Jewelry</Link></li>
            </ul>
          )}
        </li>
        <li className="navbar-item"><button className="navbar-button">Contact Us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
