import React, { useContext } from "react";
import "./Filter.scss";
import { ThemeContext } from "../Theme/ThemeContext";
const Filter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`filter ${theme ? "filter-dark" : "filter-light"}`}>
      <div className="container">
        <div className="price__block">
          <label htmlFor="price-from">Price</label>
          <input type="number" id="price-from" name="price-from" placeholder="from" min="0" step="1" />
          <input type="number" id="price-to" name="price-to" placeholder="to" min="0" step="1" />
        </div>
        <div className="discounted">
          <label htmlFor="discounted-items">Discounted items</label>
          <input type="checkbox" id="discounted-items" name="discounted-items" />
        </div>
        <div className="sort">
          <label htmlFor="sort">Sorted</label>
          <select id="sort" name="sort">
            <option value="default">by default</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
