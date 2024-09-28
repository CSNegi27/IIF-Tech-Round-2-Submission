import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => (
  <header className="header">
    <h1>XYZ Company</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/gallery">Event Gallery</Link>
      <Link to="/register">Event Registration</Link>
    </nav>
  </header>
);

export default Header;