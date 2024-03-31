import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/3687550/pexels-photo-3687550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "dress",
      isNew: true,
      oldPrice: 2000,
      price: 1500,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/991679/pexels-photo-991679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "skirt",
      isNew: true,
      oldPrice: 1500,
      price: 1100,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/712883/pexels-photo-712883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "boots",
      oldPrice: 2500,
      price: 1900,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/210106/pexels-photo-210106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "hat",
      oldPrice: 1000,
      price: 700,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          laborum et architecto, porro totam perferendis minus, nobis impedit
          facilis doloremque ipsam aliquid autem minima sit. Repellat, voluptas
          esse! Laudantium, doloremque?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
