import React, { useContext } from "react";
import "./Filter.scss";
import { ThemeContext } from "../Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { sortByPayload, sortByCheckBox, sortByMinMax } from "../../store/Reducers/ProductsReducer";

const Filter = () => {
  const { theme } = useContext(ThemeContext);

  const products = useSelector((store) => store.products.products);
  console.log(products);

  const dispatch = useDispatch();

  function handleSelect(e) {
    dispatch(sortByPayload(e.target.value));
  }

  function handleInputs(e) {
    let formData = new FormData(e.target.parentElement);
    let data = Object.fromEntries(formData);
    dispatch(sortByMinMax(data));
  }

const currentUrl = window.location.href;

  let hideDiscountedItems = () => (currentUrl === "http://localhost:5173/discounted" || currentUrl === "http://localhost:5173/favorites" ? "discountedHide" : "");

  return (
    <section className={`filter ${theme ? "filter-dark" : "filter-light"}`}>
      <div className="container">
        <form className="price__block" onChange={handleInputs}>
          <label htmlFor="price-from">Price</label>
          <input type="number" id="price-from" name="min" placeholder="from" min="0" step="1" />
          <input type="number" id="price-to" name="max" placeholder="to" min="0" step="1" />
        </form>
        <div className={`discounted ${hideDiscountedItems()}`}>
          <label htmlFor="discounted-items">Discounted items</label>
          <input onClick={() => dispatch(sortByCheckBox())} type="checkbox" id="discounted-items" name="discounted-items" />
        </div>
        <div className="sort">
          <label htmlFor="sort">Sorted</label>
          <select id="sort" name="sort" onChange={handleSelect}>
            <option value={"default"}>by default</option>
            <option value={"newest"}>newest</option>
            <option value={"high"}>price: high-low</option>
            <option value={"low"}>price: low-high</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
