import React from "react";
import ProductCard from "../Product/ProductCard";
import { useSelector } from "react-redux";

export default function ItemsFromCategory({ }) {

   const { products } = useSelector((state) => state.products);


  return (
    <div className="productCardContainer">
      {products &&
        products.map(
          (item) => <ProductCard key={item.id} product={item} />
        )}
    </div>
  );
}