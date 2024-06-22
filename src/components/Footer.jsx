import React from "react";
import Logo from "../assets/icons_assets/Asset 18@4x.png";
import '../components/css/footer.css';
const Footer = () => {
  return (
    <footer>
      <section>
        <img src={Logo} alt="footer-logo" />
      </section>
      <section>
        <h4>Doormat <br /> Navigation</h4>
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
      </section>
      <section>
      <h4>Contact </h4>
      <ul>
          <li>
            <a href="index.html">Adress</a>
          </li>
          <li>
            <a href="about.html">Phone </a>
          </li>
          <li>
            <a href="menu.html">Email</a>
          </li>
         
        </ul>
      </section>
      <section>
      <h4>Social Media Links</h4>
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
          
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
