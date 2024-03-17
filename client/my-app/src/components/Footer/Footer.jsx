import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>About Us</h1>
          <span>Who We Are</span>
          <span>Join Our Team</span>
          <span>Terms & Conditions</span>
          <span>Fees & Payment</span>
          <span>Returns & Refund Policy</span>
        </div>
        <div className="item">
          <h1>Help</h1>
          <span>Track your Order</span>
          <span>Returns</span>
          <span>Cancellations</span>
          <span>Payments</span>
          <span>Customer Care</span>
        </div>
        <div className="item">
          <h1>Shop by</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Indie</span>
        </div>
        <div className="item">
          <h1>Follow Us</h1>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Pinterest</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">VastraAstra</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
