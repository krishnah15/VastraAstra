import React, { useState } from "react";
import "./product.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3687550/pexels-photo-3687550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">₹1500</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptates sequi distinctio provident tempora doloremque similique
          cumque quos, cum optio? Veritatis, corrupti reprehenderit alias
          commodi ad pariatur animi accusamus quas.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartOutlinedIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceOutlinedIcon />
            ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
