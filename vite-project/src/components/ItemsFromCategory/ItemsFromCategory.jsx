import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

export default function ItemsFromCategory({ product }) {
  const { categoryId } = useParams();

  let newProductsArray = [product];
  // console.log(newProductsArray);

  return (
    <div className="productCardContainer">
      {newProductsArray &&
        newProductsArray.filter((item) => {
          if (item.categoryId == categoryId) {
            <ProductCard />;
            // console.log('ok');
            // <>
            //   <img className="productCardImg" src={`/src/assets/images${item.image}`} alt="Product img" />
            //   <h2>{item.title}</h2>
            //   <p>{item.price}</p>
            //   <p>{item.discont_price}</p>
            //   <p>{item.description}</p>
            // </>;
          }
        })}
    </div>
  );
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
