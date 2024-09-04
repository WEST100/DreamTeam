import React, { useContext, useEffect, useState } from "react";
import "./Filter.scss";
import { ThemeContext } from "../Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { sortByPayload, sortByCheckBox, sortByMinMax, setMinValue, setMaxValue, setMinMaxByDefault } from "../../store/Reducers/ProductsReducer";
import { useLocation } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const {minValue, maxValue, product} = useSelector(state => state.products)
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  // const [fromPrice, setFromPrice] = useState(0);
  // const [toPrice, setToPrice] = useState(Infinity);
  const [isChecked, setIsChecked] = useState(false);
  const [select, setSelect] = useState("default");

  useEffect(() => {
    dispatch(sortByCheckBox({ value: isChecked }));
    dispatch(sortByMinMax({ min: minValue, max: maxValue }));
    dispatch(sortByPayload({ value: select }));
  }, [isChecked, minValue, maxValue, select, dispatch]);

    // установление значений min и max в default. чтобы решить проблему запоминания данных в инпутах при фильтрации и переходе на другую страницу
  useEffect(() => {
    dispatch(setMinMaxByDefault({ min: minValue, max: maxValue }));
  }, []);

  function handleSelect(e) {
    setSelect(e.target.value);
  }

    // function handleFromPriceChange(e) {
    //   const value = e.target.value;
    //   setFromPrice(value === "" ? 0 : Number(value));
    // }

    // function handleToPriceChange(e) {
    //   const value = e.target.value;
    //   setToPrice(value === "" ? Infinity : Number(value));
    // }

    function handleFromPriceChange(e) {
      const value = e.target.value;
      dispatch(setMinValue(value === "" ? 0 : Number(value)))
    }
  
    function handleToPriceChange(e) {
      const value = e.target.value;
      dispatch(setMaxValue(value === "" ? Infinity : Number(value)))
    }

  // вытягиваем локацию url и на странице товаров со скидкой скрываем div с чекбоксом, не надо писать отдельный фильтр для страницы discountedItems (p.s работает и без - const location = useLocation(); только вот почему не пойму)) )
  let hideDiscountedItems = () => (location.pathname === "/discounted" ? "discountedHide" : "");

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
          <div className={`discounted ${hideDiscountedItems()}`}>
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

export default Filter;
