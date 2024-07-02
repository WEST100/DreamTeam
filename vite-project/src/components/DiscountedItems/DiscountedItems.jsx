import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DiscountedItems.scss";
import { getAllProductAction } from "../../store/asyncActions/product";
import ProductCard from "../Product/ProductCard";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const DiscountedItems = () => {
  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const findDiscountedItems = products.filter((item) => {
    if (item.discont_price != null) {
      return item;
    }
  });

  return (
    <div className="discountedItems container">
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
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> : findDiscountedItems && findDiscountedItems.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
    </div>
  );
};

export default DiscountedItems;
