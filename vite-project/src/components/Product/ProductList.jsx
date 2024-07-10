import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProductAction } from "../../store/asyncActions/product";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import { ThemeContext } from "../Theme/ThemeContext";

const ProductList = () => {

  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { products, isLoading, filteredProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);


  const data = filteredProducts.length > 0 ? filteredProducts : products;

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
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
      </div>
    </section>
  );
};

export default ProductList;
