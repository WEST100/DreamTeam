import React, { useEffect, useState } from "react";
import "./ProductCart.scss";
import { IoMdClose } from "react-icons/io";
import "../../Quantity/Quantity.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { decrementProduct, incrementProduct, removeProductFromCart } from "../../../store/Reducers/ProductsReducer";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state) => state.products);

  // установка счетчика кол-ва товара
  useEffect(() => {
    let cartFound = cartProducts.find((item) => item.id === product?.id);
    if (cartFound) {
      setCount(cartFound.count);
    } else {
      setCount(0);
    }
  }, [cartProducts, product]);

  // функция подсчета цены
  function priceCalculate() {
    if (product?.discont_price > 0) {
      if (count === 0) {
        return (product?.discont_price).toFixed(2);
      } else {
        return (product?.discont_price * count).toFixed(2);
      }
    } else if (product?.discont_price === null) {
      if (count === 0) {
        return (product?.price).toFixed(2);
      } else {
        return (product?.price * count).toFixed(2);
      }
    } else {
      return (product?.price).toFixed(2);
    }
  }

  // функция подсчета перечеркнутой цены
  function crossedOutPriceCalculate() {
    if (product?.discont_price > 0) {
      if (count === 0) {
        return (product?.price).toFixed(2);
      } else {
        return (product?.price * count).toFixed(2);
      }
    } else {
      return "";
    }
  }

  // функция обрезания длины текста
  const shortText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)} ...` : text;
  };

  return (
    <div className="list__item">
      <img className="list__item__image" src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="product-image" />
      <div className="list__content">
        <div className="list__content__title">
          <Link to={`/products/${product.id}`}>
            <h3>{shortText(product.title, 17)}</h3>
            {/* <h3>{product.title}</h3> */}
          </Link>
          <div className="closeImage">
            <IoMdClose onClick={() => dispatch(removeProductFromCart(product))} />
          </div>
        </div>
        <div className="list__content__price">
          {count > 0 && (
            <div className="quantity">
              <button onClick={() => dispatch(decrementProduct(product?.id))} className="quantity__action">
                <FaMinus />
              </button>
              <input type="text" value={count} disabled className="quantity__input" />
              <button onClick={() => dispatch(incrementProduct(product?.id))} className="quantity__action">
                <FaPlus />
              </button>
            </div>
          )}
          <div className="list__content__price__block">
            <h3>${priceCalculate()}</h3>
            <h6>{crossedOutPriceCalculate()}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
