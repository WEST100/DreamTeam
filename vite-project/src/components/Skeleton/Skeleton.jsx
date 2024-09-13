import React from "react";
import styles from "./Skeleton.module.scss";
// import "./Skeleton.scss";

const Skeleton = ({ count = 1, type = "product" }) => {
  // console.log(count);
  
  // console.log([...Array(count)].map((_, index) => (console.log(index)
  // )));
  
  return (
    <>
      {count > 1 ? (
        <ul className={type === "product" ? styles.skeletonProductList : styles.skeletonCategoryList}>
        {/* <ul className={type === "product" ? "skeletonProductList" : "skeletonCategoryList"}> */}
          {[...Array(count)].map((_, index) => (
            <li key={index} className={type === "product" ? styles.product : styles.category}></li>
            // <li key={index} className={type === "product" ? "product" : "category"}></li>
          ))}
        </ul>
      ) : (
        <li className={type === "product" ? styles.product : styles.category}></li>
        // <li className={type === "product" ? "product" : "category"}></li>
      )}
      ;
    </>
  );
};

export default Skeleton;
