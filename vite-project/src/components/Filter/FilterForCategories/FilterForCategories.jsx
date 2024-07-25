import React, { useContext, useEffect, useState } from "react";
import "./FilterForCategories.scss";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../Theme/ThemeContext";
import { sortByMinMaxFromCategories, sortByPayloadFromCategories, sortByCheckBoxFromCategories } from "../../../store/Reducers/ProductsReducer";

const FilterForCategories = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(Infinity);
  const [isChecked, setIsChecked] = useState(false);
  const [select, setSelect] = useState("default");

  // как??? как такое может быть??? почему?? не работает два на вид одинаковых useEffect'a
  // useEffect(() => {
  //   dispatch(sortByMinMaxFromCategories({ min: fromPrice, max: toPrice }));
  //   dispatch(sortByPayloadFromCategories({ value: select }));
  //   dispatch(sortByCheckBoxFromCategories({ value: isChecked }));
  // }, [fromPrice, toPrice, select, isChecked, dispatch]);

  useEffect(() => {
    dispatch(sortByCheckBoxFromCategories({ value: isChecked }));
    dispatch(sortByMinMaxFromCategories({ min: fromPrice, max: toPrice }));
    dispatch(sortByPayloadFromCategories({ value: select }));
  }, [isChecked, fromPrice, toPrice, select, dispatch]);

  function handleSelect(e) {
    setSelect(e.target.value);
  }

  return (
    <section className={`filter ${theme ? "filter-dark" : "filter-light"}`}>
      <div className="container">
        <div className="filter__box">
          <form className="price__block">
            <label htmlFor="price-from" className="box__label">
              Price
            </label>
            <input className="price__input" id="price-from" type="number" name="min" placeholder="from" min="0" step="1" onChange={(e) => setFromPrice(+e.target.value)} />
            <input value={toPrice} className="price__input" type="number" name="max" placeholder="to" min="0" step="1" onChange={(e) => setToPrice(+e.target.value)} />
          </form>
          <div className="discounted">
            <label htmlFor="checkbox" className="box__label">
              Discounted items
            </label>
            <input onClick={() => setIsChecked(!isChecked)} type="checkbox" id="checkbox" className="discounted__input" />
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
              <option className="sort__opt" value={"name"}>
                name: A-Z
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterForCategories;
