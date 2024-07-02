import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProductAction } from "../../store/asyncActions/product";
import Filter from "../Filter/Filter";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <div className="all_products container">
      <div className="breadcrumbs__navigation">
        <button className="breadcrumbs__button">Main page</button>
        <span>—</span>
        <button className="breadcrumbs__button">All products</button>
      </div>
      <div className="allPagesTitle">
        <h2>All products</h2>
      </div>
      <Filter />
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> : products && products.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
    </div>
  );
};

export default ProductList;
