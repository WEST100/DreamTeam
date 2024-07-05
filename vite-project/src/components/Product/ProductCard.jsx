import React, { useContext } from "react";
import "./ProductCard.scss";
import whiteheart from "/src/assets/images/home_img/white_heart.svg";
import cart from "/src/assets/images/home_img/white_cart.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";

export default function ProductCard({ product }) {
  const { theme } = useContext(ThemeContext);

  const shortText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)} ...` : text;
  };

  let selectDiscountItems = () => {
    if (product.discont_price === null) {
      return "";
    } else {
      return "product__discount__Perc";
    }
  };

  return (
    <div className={`product__card ${theme ? "product__card-dark" : "product__card-light"}`}>
      <div className="product__img">
        <Link to={`/products/${product.id}`}>
          <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
        </Link>
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
      <div className={selectDiscountItems()}>
        <p>{product.discont_price ? `${parseInt(((product.discont_price / product.price) * 100)-100)}%` : ""}</p>
      </div>
      <div className="product__icons">
        <img src={whiteheart} alt="Icon-Heart" />
        <img src={cart} alt="Icon-Bag" />
      </div>
    </div>
  );
}
