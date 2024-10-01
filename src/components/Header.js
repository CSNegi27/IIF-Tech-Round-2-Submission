import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>XYZ Company</h1>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Event Gallery</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Event Registration</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
