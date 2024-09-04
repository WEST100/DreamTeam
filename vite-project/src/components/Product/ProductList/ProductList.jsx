import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import { ThemeContext } from "../../Theme/ThemeContext";

const ProductList = () => {
  const { theme } = useContext(ThemeContext);

  const { products, isLoading, filteredProducts, minValue, maxValue } = useSelector((state) => state.products);

  const data = filteredProducts.length > 0 || minValue !== 0 || maxValue !== Infinity ? filteredProducts : products;

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
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.length > 0 ? data.map((item) => <ProductCard key={item.id} product={item} />) : <p>No products available</p>}</div>

      </div>
    </section>
  );
};

export default ProductList;
