import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">India</div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            VASTRA-ASTRA
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            {" "}
            <SearchOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              {" "}
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
