import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DiscountedItems.scss";
import { getAllProductAction } from "../../store/asyncActions/product";
import ProductCard from "../Product/ProductCard";
import Filter from "../Filter/Filter";

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
      <div className="categories__navigation">
        <button className="categories__button">Main page</button>
        <span>—</span>
        <button className="categories__button">All sales</button>
      </div>
      <div className="categories__title">
        <h2>Discounted items</h2>
      </div>
      <Filter />
      <div className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          findDiscountedItems &&
          findDiscountedItems.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        )}
      </div>
    </div>
  );
};

export default DiscountedItems;
