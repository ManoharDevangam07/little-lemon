import React from "react";
import './css/navbar.css';
import Logo from '../assets/icons_assets/Logo.svg'


const Navbar = () => {
  return (
    
      <nav className="nav-container">
        <img src={Logo} alt="logo-img" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">order online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
   
  );
};

export default Navbar;
