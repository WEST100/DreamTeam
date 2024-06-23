import React from "react";

export default function ItemsFromCategory({ product, categoryId }) {
  return (
    <div className="productCardContainer">
      {product &&
        product.filter((item) => {
          if (item.id === categoryId) {
            <>
              <img className="productCardImg" src={`/src/assets/images${product.image}`} alt="Product img" />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.discont_price}</p>
              <p>{product.description}</p>
            </>;
          }
        })}
    </div>
  );
}
