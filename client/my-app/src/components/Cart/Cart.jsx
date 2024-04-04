import React from "react";
import "./cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/3687550/pexels-photo-3687550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "dress",
      desc: "This is my dress",
      isNew: true,
      oldPrice: 2000,
      price: 1500,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/991679/pexels-photo-991679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "skirt",
      desc: "skirt",
      isNew: true,
      oldPrice: 1500,
      price: 1100,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹4,500</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
