import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProductAction } from "../../store/asyncActions/product";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <div className="all_products container">
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
      <div className="productListContainer">{isLoading ? <div className="loader"></div> : products && products.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
    </div>
  );
};

export default ProductList;
