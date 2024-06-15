import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="productCardContainer">
      <img className="productCardImg" src={`./assets/images${product.image}`} alt="Product img" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.discont_price}</p>
      <p>{product.description}</p>
    </div>
  );
}
