import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProductAction } from "../../store/asyncActions/product";
import "./ProductCard.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <div className="container">
      <div className="categories__navigation">
        <button className="categories__button">Main page</button>
        <span>—</span>
        <button className="categories__button">All products</button>
      </div>
      <div className="categories__title">
        <h2>All products</h2>
      </div>
      <div className="filter-container">
        <div className="price__block">
          <label for="price-from">Price</label>
          <input
            type="number"
            id="price-from"
            name="price-from"
            placeholder="from"
            min="0"
          />
          <input
            type="number"
            id="price-to"
            name="price-to"
            placeholder="to"
            min="0"
          />
        </div>
        <div className="discounted">
          <label for="discounted-items">Discounted items</label>
          <input
            type="checkbox"
            id="discounted-items"
            name="discounted-items"
          />
        </div>
        <div className="sort">
          <label for="sort">Sorted</label>
          <select id="sort" name="sort">
            <option value="default">by default</option>
          </select>
        </div>
      </div>
      <div className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          products &&
          products.map((prod) => <ProductCard key={prod.id} product={prod} />)
        )}
      </div>
    </div>
  );
};

export default ProductList;
