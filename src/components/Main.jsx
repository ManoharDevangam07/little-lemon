import React from "react";
import "../components/css/main.css";
import Banner from "../assets/icons_assets/restauranfood.jpg";
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
        <button className="primary-btn">Reserve a Table</button>
      </article>
      <img src={Banner} alt="" />
    </main>
  );
};

export default Main;
