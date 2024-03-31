import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span className="new">New Season</span>}
          <img src={item.img} className="mainImg" alt="" />
          <img src={item.img2} className="secondImg" alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>₹{item.oldPrice}</h3>
          <h3>₹{item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
