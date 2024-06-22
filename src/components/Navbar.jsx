import React from "react";
import './css/navbar.css';
import Logo from '../assets/icons_assets/Logo.svg'


const Navbar = () => {
  return (
    
      <nav className="nav-container">
        <img src={Logo} alt="logo-img" />
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="book.html">Reservations</a>
          </li>
          <li>
            <a href="book.html">order online</a>
          </li>
          <li>
            <a href="book.html">Login</a>
          </li>
        </ul>
      </nav>
   
  );
};

export default Navbar;
