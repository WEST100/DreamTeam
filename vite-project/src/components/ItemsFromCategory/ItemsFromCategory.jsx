import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

export default function ItemsFromCategory({ product }) {
  const { categoryId } = useParams();
  console.log(product.image);

  newProductsArray = [product];

  return {
  
  };
  // <>
  // <ProductCard/>
  // </>

  // <div className="productCardContainer">
  //   <img className="productCardImg" src={`/src/assets/images${product.image}`} alt="Product img" />
  //   <h2>{product.title}</h2>
  //   <p>{product.price}</p>
  //   <p>{product.discont_price}</p>
  // </div>
}

      
        // if (product.categoryId === categoryId) {
        //     <>
        //       <img className="productCardImg" src={`/src/assets/images${product.image}`} alt="Product img" />
        //       <h2>{product.title}</h2>
        //       <p>{product.price}</p>
        //       <p>{product.discont_price}</p>
        //       <p>{product.description}</p>
        //     </>;
        //   }
      