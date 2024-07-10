import React from "react";
import "./ProductCart.scss";
import x from "/src/assets/images/ic x.png";
import Quantity from "../../Quantity/Quantity";

const ProductCart = ({ product }) => {
  return (
    <div className="shop">
      <div className="shop__list">
        <div className="list__item">
          <img
            className="list__image"
            src={`https://exam-server-5c4e.onrender.com${product.image}`}
            alt="product-image"
          />
          <div className="list__content">
            <div className="content__title">
              <h3>{product.title} </h3>
              <img src={x} alt="Icon X" />
            </div>
            <div className="content__price">
              <Quantity />
              <div className="price__block">
                  <h3>${product?.price}</h3>
                  <h6>
                    {product?.discont_price > 0 ? `$${product?.discont_price}` : product?.discont_price}
                  </h6>
                </div>

              {/* <span>{product.price}</span>
              <span>{product.discont_price}</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="shop__form">
        <div className="shop__text">
          <h2>Order details</h2>
          <div className="text__frame">
            <p>3 items</p>
            <div className="frame__price">
              <p>Total</p>
              <span>$541,00</span>
            </div>
          </div>
        </div>
        <div className="discount__form__container">
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
