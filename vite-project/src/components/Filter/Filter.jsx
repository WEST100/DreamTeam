import React from 'react'
import "./Filter.scss"
const Filter = () => {
  return (
    <div className="filter-container">
    <div className="price__block">
      <label for="price-from">Price</label>
      <input
        type="number"
        id="price-from"
        name="price-from"
        placeholder="from"
        min="0"
        step="1"
      />
      <input
        type="number"
        id="price-to"
        name="price-to"
        placeholder="to"
        min="0"
        step="1"
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
  )
}

export default Filter
