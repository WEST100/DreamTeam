import React from "react";
import "./ProductCart.scss";
import x from "/src/assets/images/ic x.png";
import Quantity from "../../Quantity/Quantity";

const ProductCart = ({ product }) => {
  return (
        <div className="list__item">
          <img
            className="list__item__image"
            src={`https://exam-server-5c4e.onrender.com${product.image}`}
            alt="product-image"
          />
          <div className="list__content">
            <div className="list__content__title">
              <h3>{product.title} </h3>
              <img src={x} alt="Icon X" />
            </div>
            <div className="list__content__price">
              <Quantity />
              <div className="list__content__price__block">
                <h3>${product?.price}</h3>
                <h6>
                  {product?.discont_price > 0
                    ? `$${product?.discont_price}`
                    : product?.discont_price}
                </h6>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProductCart;
