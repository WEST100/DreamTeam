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
        <div className="filter__box" onChange={handleInputs}>
          <form className="price__block">
            <label htmlFor="price-from" className="box__label">
              Price
            </label>
            <input
              className="price__input"
              type="number"
              id="price-from"
              name="price-from"
              placeholder="from"
              min="0"
              step="1"
            />
            <input
              className="price__input"
              type="number"
              id="price-to"
              name="price-to"
              placeholder="to"
              min="0"
              step="1"
            />
          </form>
          <div className={`discounted ${hideDiscountedItems()}`}>
            <label htmlFor="checkbox" className="box__label">
              Discounted items
            </label>
            <input onClick={() => dispatch(sortByCheckBox())}
              type="checkbox"
              id="checkbox"
              className="discounted__input"
            />
            <label
              for="checkbox"
              className="discounted__custom-checkbox"
            ></label>
          </div>
          <div className="sort">
            <label htmlFor="sort" className="box__label">
              Sorted
            </label>
            <select className="sort__select" id="sort" name="sort" onChange={handleSelect}>
              <option className="sort__opt__first" value={"default"}>
                by default
              </option>
              <option className="sort__opt" value={"newest"}>
                newest
              </option>
              <option className="sort__opt" value={"high"}>
                price: high-low
              </option>
              <option className="sort__opt" value={"low"}>
                price: low-high
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
