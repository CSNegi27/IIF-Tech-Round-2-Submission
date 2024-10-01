import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './assets/xyz.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="XYZ Company Logo" className="logo" />
      <h1>XYZ Company</h1>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)} className={location.pathname === '/gallery' ? 'active' : ''}>Event Gallery</Link>
        <Link to="/register" onClick={() => setIsOpen(false)} className={location.pathname === '/register' ? 'active' : ''}>Event Registration</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu} aria-expanded={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
