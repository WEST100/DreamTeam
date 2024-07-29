import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DiscountedItems.scss";
import { getAllProductAction } from "../../store/asyncActions/product";
import ProductCard from "../Product/ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";

const DiscountedItems = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { products, isLoading, filteredProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const data = filteredProducts.length > 0 ? filteredProducts : products;

  const findDiscountedItems = data.filter((item) => {
    if (item.discont_price != null) {
      return item;
    }
  });

  return (
    <section className={`discountedItems ${theme ? "discountedItems-dark" : "discountedItems-light"}`}>
      <div className="container">
        <div className="breadcrumbs__navigation">
          <button className="breadcrumbs__button">
            <Link to={"/"}>Main page</Link>
          </button>
          <span>—</span>
          <button className="breadcrumbs__button">All sales</button>
        </div>
        <div className="allPagesTitle">
          <h2>Discounted items</h2>
        </div>
        <Filter />
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : findDiscountedItems && findDiscountedItems.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
      </div>
    </section>
  );
};

export default DiscountedItems;
