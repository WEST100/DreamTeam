import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product__card">
      <div className="sale__img">
        <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
      </div>
      <div className="sale__discount">
        <div className="sale__discount__text">
          <p>{product.title}</p>
        </div>
        <div className="sale__price">
          <p className="sale__price__real">${product.price}</p>
          <p className="sale__price__old">${product.discont_price}</p>
        </div>
      </div>
      <div className="sale__discount__Perc">
        <p>-50%</p>
      </div>
      <div className="sale__icons">
        <img src={whiteheart} alt="Icon Heart" />
        <img src={cart} alt="Icon Bag" />
      </div>
    </div>
  );
}
