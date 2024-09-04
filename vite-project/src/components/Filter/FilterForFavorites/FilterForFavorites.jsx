import React, { useContext, useEffect, useState } from "react";
import "./FilterForFavorites.scss";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../Theme/ThemeContext";
import { setMaxValue, setMinMaxByDefault, setMinValue, sortByMinMaxFromFavorites, sortByPayloadFromFavorites } from "../../../store/Reducers/ProductsReducer";

const FilterForFavorites = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const {minValue, maxValue} = useSelector(state => state.products)

  const [select, setSelect] = useState("default");

  useEffect(() => {
    dispatch(sortByMinMaxFromFavorites({ min: minValue, max: maxValue }));
    dispatch(sortByPayloadFromFavorites({ value: select }));
  }, [minValue, maxValue, select, dispatch]);

    // установление значений min и max в default. чтобы решить проблему запоминания данных в инпутах при фильтрации и переходе на другую страницу
  useEffect(() => {
    dispatch(setMinMaxByDefault({ min: minValue, max: maxValue }));
  }, []);

  function handleSelect(e) {
    setSelect(e.target.value);
  }

  function handleFromPriceChange(e) {
    const value = e.target.value;
    dispatch(setMinValue(value === "" ? 0 : Number(value)))
  }

  function handleToPriceChange(e) {
    const value = e.target.value;
    dispatch(setMaxValue(value === "" ? Infinity : Number(value)))
  }

  return (
    <section className={`filter ${theme ? "filter-dark" : "filter-light"}`}>
      <div className="container">
        <div className="filter__box">
          <form className="price__block">
            <label htmlFor="price-from" className="box__label">
              Price
            </label>
            <input value={minValue === 0 ? "" : minValue} className="price__input" id="price-from" type="number" name="min" placeholder="from" min="0" step="1" onChange={handleFromPriceChange} />
            <input value={maxValue === Infinity ? "" : maxValue} className="price__input" type="number" name="max" placeholder="to" min="0" step="1" onChange={handleToPriceChange} />
          </form>
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

export default FilterForFavorites;
