import React, { useContext, useEffect, useState } from "react";
import "./Filter.scss";
import { ThemeContext } from "../Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { sortByPayload, sortByCheckBox, sortByMinMax } from "../../store/Reducers/ProductsReducer";

const Filter = () => {
  const { theme } = useContext(ThemeContext);

  const products = useSelector((store) => store.products.products);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(Infinity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByMinMax({ min: fromPrice, max: toPrice }));
  }, [fromPrice, toPrice]);

  function handleSelect(e) {
    dispatch(sortByPayload(e.target.value));
  }

  // function handleInputs(e) {
  //   let formData = new FormData(e.target.parentElement);
  //   let data = Object.fromEntries(formData);
  //   dispatch(sortByMinMax({data}));
  // }

  const currentUrl = window.location.href;

  let hideDiscountedItems = () => (currentUrl === "http://localhost:5173/discounted" || currentUrl === "http://localhost:5173/favorites" ? "discountedHide" : "");

  const sortItemsByCheckBox = (e) => {
    dispatch(sortByCheckBox(e.target.checked));
    dispatch(sortByMinMax({ min: fromPrice, max: toPrice }));
  };

  return (
    <section className={`filter ${theme ? "filter-dark" : "filter-light"}`}>
      <div className="container">
        <div className="filter__box">
          <form className="price__block">
            <label htmlFor="price-from" className="box__label">
              Price
            </label>
            <input className="price__input" id="price-from" type="number" name="min" placeholder="from" min="0" step="1" onChange={(e) => setFromPrice(e.target.value)} />
            <input className="price__input" type="number" name="max" placeholder="to" min="0" step="1" onChange={(e) => setToPrice(e.target.value)} />
          </form>
          <div className={`discounted ${hideDiscountedItems()}`}>
            <label htmlFor="checkbox" className="box__label">
              Discounted items
            </label>
            <input onClick={sortItemsByCheckBox} type="checkbox" id="checkbox" className="discounted__input" />
            <label htmlFor="checkbox" className="discounted__custom-checkbox"></label>
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
