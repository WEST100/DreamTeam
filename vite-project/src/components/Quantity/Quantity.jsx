import React from "react";
import "./Quantity.scss";
import minus from "/src/assets/images/minus.png";
import plus from "/src/assets/images/plus.png";

const Quantity = () => {
  return (
    <div className="quantity">
      <button className="quantity__action">
        <img src={minus} alt="Icon Minus" />
      </button>
      <input type="text" value={1} disabled className="quantity__input" />
      <button className="quantity__action">
        <img src={plus} alt="Icon Plus" />
      </button>
    </div>
  );
};

export default Quantity;
