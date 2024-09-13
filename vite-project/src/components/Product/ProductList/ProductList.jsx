import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import { ThemeContext } from "../../Theme/ThemeContext";
import Skeleton from "../../Skeleton/Skeleton";

const ProductList = () => {
  const { theme } = useContext(ThemeContext);

  const { products, isLoading, filteredProducts, minValue, maxValue } = useSelector((state) => state.products);

  // пробую передать число продуктов для скелетона но передается так только 8-9 а не 35 ????????????????????????????????
  // let countOfProducts = setTimeout(() => {
  //   console.log(products.length);
  //   return products.length
  // }, 100);

  const data = filteredProducts.length > 0 || minValue !== 0 || maxValue !== Infinity ? filteredProducts : products;

  //  Локальное состояние для хранения количества скелетонов
   const [productCount, setProductCount] = useState(0);

// это все не работает, так как по логике просто не возможно, проще передать в count просто число
// Обновляем количество продуктов только после загрузки данных
useEffect(() => {
  if (isLoading) {
    // Задаем некоторое фиксированное количество для скелетонов во время загрузки
    setProductCount(12);  // Тут можно задать любое число для скелетонов
  } else if (products.length > 0) {
    // Когда продукты загружены, обновляем счетчик до количества продуктов
    setProductCount(products.length);
  }
}, [products, isLoading]);

  // console.log(productCount);
  

  return (
    <section className={`all_products ${theme ? "all_products-dark" : "all_products-light"}`}>
      <div className="container">
        <div className="breadcrumbs__navigation">
          <button className="breadcrumbs__button">
            <Link to={"/"}>Main page</Link>
          </button>
          <span>—</span>
          <button className="breadcrumbs__button">All products</button>
        </div>
        <div className="allPagesTitle">
          <h2>All products</h2>
        </div>
        <Filter />
        {/* <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.length > 0 ? data.map((item) => <ProductCard key={item.id} product={item} />) : <p>No products available</p>}</div> */}
        <div className={isLoading ? "skeletonListContainer" : "productListContainer"}>{isLoading ? <Skeleton type={"product"} count={productCount}/> : data && data.length > 0 ? data.map((item) => <ProductCard key={item.id} product={item} />) : <p>No products available</p>}</div>
      </div>
    </section>
  );
};

export default ProductList;
