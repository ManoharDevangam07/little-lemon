import React from "react";
import "../components/css/main.css";
import Banner from "../assets/icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h4>
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        <Link to="/reserve"> <button className="primary-btn">Reserve a Table</button></Link>
      </article>
      <img src={Banner} alt="" />
    </main>
  );
};

export default Main;
