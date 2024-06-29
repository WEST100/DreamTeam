import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="productCardContainer">
      <img className="productCardImg" src={`https://exam-server-5c4e.onrender.com${product.image}`} alt="Product img" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.discont_price}</p>
    </div>
  );
}
