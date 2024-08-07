import React, { useContext, useState } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, addFavoritesProducts, removeProductFromCart, removeProductFromFavorites } from "../../../store/Reducers/ProductsReducer";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state) => state.products);
  const { favoritesProducts } = useSelector((state) => state.products);

  const { theme } = useContext(ThemeContext);

  const shortText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)} ...` : text;
  };

  // стейты для смены фона иконок, раньше были мной использованы пока я не перешел на функции. Если хватит время то использую их потом.
  // const [isColoredHeart, setIsColoredHeart] = useState(false);
  // const [isColoredCart, setIsColoredCart] = useState(false);

  // const handleSvgClickHeart = () => {
  //   setIsColoredHeart(!isColoredHeart);
  // };

  // const handleSvgClickCart = () => {
  //   setIsColoredCart(!isColoredCart);
  // };

  // функция сравнения при клике на сумку, если продукт есть в корзине то удаляем, если нету то добавляем
  function compareProductsFromCart() {
    let foundProduct = cartProducts.find((item) => item.id === product.id);

    if (cartProducts.length > 0) {
      if (foundProduct) {
        dispatch(removeProductFromCart(product));
      } else {
        dispatch(addProductToCart(product));
      }
    } else {
      dispatch(addProductToCart(product));
    }
  }

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

  const IsColoredHeartFill = () => {
    const foundProduct = favoritesProducts.find((item) => item.id === product.id);
    return foundProduct ? "#92a134" : "white";
  };
  
  // старый вариант функции IsColoredHeartFill оставлю здесь для себя на память))
  // function IsColoredHeartFill() {
  //   let foundProduct = favoritesProducts.find((item) => item.id === product.id);

  //   if (favoritesProducts.length > 0) {
  //     if (foundProduct) {
  //       return "#92a134";
  //     } else {
  //       return "white";
  //     }
  //   } else {
  //     return "white";
  //   }
  // }

  const IsColoredHeartStroke = () => {
    const foundProduct = favoritesProducts.find((item) => item.id === product.id);
    return foundProduct ? "#92a134" : "#424436";
  };
  // старый вариант функции IsColoredHeartStroke оставлю здесь для себя на память))
  // function IsColoredHeartStroke() {
  //   let foundProduct = favoritesProducts.find((item) => item.id === product.id);

  //   if (favoritesProducts.length > 0) {
  //     if (foundProduct) {
  //       return "#92a134";
  //     } else {
  //       return "#424436";
  //     }
  //   } else {
  //     return "#424436";
  //   }
  // }

  const IsColoredCartFill = () => {
    const foundProduct = cartProducts.find((item) => item.id === product.id);
    return foundProduct ? "#92a134" : "white";
  };

  // старый вариант функции IsColoredCartFill оставлю здесь для себя на память))
  // function IsColoredCartFill() {
  //   let foundProduct = cartProducts.find((item) => item.id === product.id);
  //   if (cartProducts.length > 0) {
  //     if (foundProduct) {
  //       return "#92a134";
  //     } else {
  //       return "white";
  //     }
  //   } else {
  //     return "white";
  //   }
  // }

  const IsColoredCartFill2 = () => {
    const foundProduct = cartProducts.find((item) => item.id === product.id);
    return foundProduct ? "#92a134" : "#424436";
  };

  // старый вариант функции IsColoredCartFill2 оставлю здесь для себя на память))
  // function IsColoredCartFill2() {
  //   let foundProduct = cartProducts.find((item) => item.id === product.id);
  //   if (cartProducts.length > 0) {
  //     if (foundProduct) {
  //       return "#92a134";
  //     } else {
  //       return "#424436";
  //     }
  //   } else {
  //     return "#424436";
  //   }
  // }

  return (
    <div className={`product__card ${theme ? "product__card-dark" : "product__card-light"}`}>
      <div className="product__img">
        <Link to={`/products/${product.id}`}>
          <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
        </Link>
      </div>
      <div className="product__discount">
        <div className="product__discount__text">
          <Link to={`/products/${product.id}`}>{shortText(product.title, 17)}</Link>
        </div>
        <div className="product__price">
          <p className="product__price__real">${product.discont_price > 0 ? product.discont_price : product.price}</p>
          <p className="product__price__old">{product.discont_price > 0 ? `$${product.price}` : ""}</p>
        </div>
      </div>
      <div className={product.discont_price === null ? "" : "product__discount__Perc"}>
        <p>{product.discont_price ? `${Math.round((product.discont_price / product.price) * 100 - 100)}%` : ""}</p>
      </div>
      <div className="product__icons">
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

        <svg
          onClick={() => {
            // handleSvgClickCart();
            compareProductsFromCart();
          }}
          className="cart"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="cart__item_firstElem" d="M40.5 13H7L3 47H44.5L40.5 13Z" fill={IsColoredCartFill()} />
          <path className="cart__item_secondElem" d="M24 0C18.4961 0 14.0565 4.37372 14.0565 9.79592V11.7551H6.19492L6.10169 12.6122L2.12429 46.898L2 48H46L45.8757 46.898L41.8983 12.6122L41.8051 11.7551H33.9435V9.79592C33.9435 4.37372 29.5039 0 24 0ZM24 1.95918C28.4396 1.95918 31.9548 5.42219 31.9548 9.79592V11.7551H16.0452V9.79592C16.0452 5.42219 19.5604 1.95918 24 1.95918ZM7.99717 13.7143H14.0565V15.949C13.4622 16.2895 13.0621 16.9094 13.0621 17.6327C13.0621 18.7156 13.9516 19.5918 15.0508 19.5918C16.1501 19.5918 17.0395 18.7156 17.0395 17.6327C17.0395 16.9094 16.6395 16.2895 16.0452 15.949V13.7143H31.9548V15.949C31.3605 16.2895 30.9605 16.9094 30.9605 17.6327C30.9605 18.7156 31.8499 19.5918 32.9492 19.5918C34.0484 19.5918 34.9379 18.7156 34.9379 17.6327C34.9379 16.9094 34.5378 16.2895 33.9435 15.949V13.7143H40.0028L43.7627 46.0408H4.23729L7.99717 13.7143Z" fill={IsColoredCartFill2()} />
        </svg>
      </div>
    </div>
  );
}
