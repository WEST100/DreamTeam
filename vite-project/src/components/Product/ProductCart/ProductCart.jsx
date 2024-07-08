import React from "react";

const ProductCart = ({ product }) => {
  return (
    <>
      <img src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="product-image" />
      <p>{product.title}</p>
      <span>{product.price}</span>
      <span>{product.discont_price}</span>
    </>
  );
};

export default ProductCart;
