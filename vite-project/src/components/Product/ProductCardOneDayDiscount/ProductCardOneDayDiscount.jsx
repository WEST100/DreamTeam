import React, { useContext, useState } from "react";
import "./ProductCardOneDayDiscount.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritesProducts, removeProductFromFavorites } from "../../../store/Reducers/ProductsReducer";

export default function ProductCardOneDayDiscount({ product }) {
  const dispatch = useDispatch();

  const { favoritesProducts } = useSelector((state) => state.products);

  const { theme } = useContext(ThemeContext);

  const shortText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)} ...` : text;
  };

  // функция сравнения при клике на сердечко, если продукт есть в избранном то удаляем, если нету то добавляем
  function compareProductsFromFavorites() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct) {
        dispatch(removeProductFromFavorites(product));
      } else {
        dispatch(addFavoritesProducts(product));
      }
    } else {
      dispatch(addFavoritesProducts(product));
    }
  }

  function IsColoredHeartFill() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct) {
        return "#92a134";
      } else {
        return "white";
      }
    } else {
      return "white";
    }
  }

  function IsColoredHeartStroke() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct) {
        return "#92a134";
      } else {
        return "#424436";
      }
    } else {
      return "#424436";
    }
  }

  return (
    <div className={`product__card_oneday ${theme ? "product__card_oneday-dark" : "product__card_oneday-light"}`}>
      <div className="product__img_oneday">
        <Link to={`/products/${product.id}`}>
          <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
        </Link>
      </div>
      <div className="product__discount__oneday">
        <div className="product__discount__oneday__text">
          <Link to={`/products/${product.id}`}>{shortText(product.title, 27)}</Link>
        </div>
        <div className="product__price_oneday">
          <p className="product__price_oneday__real">${(product.price / 2).toFixed(2)}</p>
          <p className="product__price_oneday__old">${product.price}</p>
        </div>
      </div>
      <div className="product__discount__oneday__Perc">
        <p>-50%</p>
      </div>
      <div className="product__icons_oneday">
        <svg
          onClick={() => {
            // handleSvgClickHeart();
            compareProductsFromFavorites();
          }}
          className="heart"
          width="48"
          height="41"
          viewBox="0 0 48 41"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M39.4 25.2222C42.678 22.14 46 18.4456 46 13.6111C46 10.5317 44.7252 7.57832 42.456 5.40082C40.1868 3.22331 37.1091 2 33.9 2C30.028 2 27.3 3.05556 24 6.22222C20.7 3.05556 17.972 2 14.1 2C10.8909 2 7.8132 3.22331 5.54401 5.40082C3.27482 7.57832 2 10.5317 2 13.6111C2 18.4667 5.3 22.1611 8.6 25.2222L24 40L39.4 25.2222Z" fill={IsColoredHeartFill()} stroke={IsColoredHeartStroke()} />
        </svg>
      </div>
    </div>
  );
}
