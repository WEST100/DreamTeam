import React from "react";
import "./ProductCard.scss";
import whiteheart from "/src/assets/images/home_img/white_heart.svg";
import cart from "/src/assets/images/home_img/white_cart.svg";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

  const shortText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)} ...` : text
  }

  return (
    <div className="product__card">
      <div className="product__img">
        <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
      </div>
      <div className="product__discount">
        <div className="product__discount__text">
          <Link to={`/products/${product.id}`}>{shortText(product.title, 30)}</Link>
        </div>
        <div className="product__price">
          <p className="product__price__real">${product.price}</p>
          <p className="product__price__old">{product.discont_price > 0 ? `$${product.discont_price}` : product.discont_price}</p>
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
