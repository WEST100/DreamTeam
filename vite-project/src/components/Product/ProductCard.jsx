import React from "react";
import "./ProductCard.scss";
import whiteheart from "/src/assets/images/home_img/white_heart.svg";
import cart from "/src/assets/images/home_img/white_cart.svg";


export default function ProductCard({ product }) {
  return (
    <div className="product__card">
      <div className="product__img">
        <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
      </div>
      <div className="product__discount">
        <div className="product__discount__text">
          <p>{product.title}</p>
        </div>
        <div className="product__price">
          <p className="product__price__real">${product.price}</p>
          <p className="product__price__old">${product.discont_price}</p>
        </div>
      </div>
      <div className="product__discount__Perc">
        <p>-50%</p>
      </div>
      <div className="product__icons">
        <img src={whiteheart} alt="Icon Heart" />
        <img src={cart} alt="Icon Bag" />
      </div>
    </div>
  );
}
