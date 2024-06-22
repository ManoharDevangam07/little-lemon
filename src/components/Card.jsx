import React from "react";
import DishIcon from "../assets/icons_assets/Dish icon.svg";
import '../components/css/card.css'
function Card(props) {
  return (
    <article className="card-container">
      <img src={props.img} alt="" />

      <div style={{padding:"15px"}}>
      <div className="price-container">
        <span className="title">{props.title}</span>
        <span className="price">{props.price}$</span>
      </div>
      <p>{props.description}</p>
      <div className="flex-row">
        {/* order a delivery <DishIcon /> */}
      </div>
      </div>
    </article>
  );
}

export default Card;
