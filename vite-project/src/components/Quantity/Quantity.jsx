import React, { useEffect, useState } from "react";
import "./Quantity.scss";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrementProduct, incrementProduct } from "../../store/Reducers/ProductsReducer";

const Quantity = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const { product, cartProducts } = useSelector((state) => state.products);

  useEffect(() => {
    let cartFound = cartProducts.find((item) => item.id === product?.id);
    if (cartFound) {
      setCount(cartFound.count);
    } else {
      setCount(0);
    }
  }, [cartProducts, product]);

  return (
    <>
      {count > 0 && (
        <div className="quantity">
          <button onClick={() => dispatch(decrementProduct(product?.id))} className="quantity__action">
            <FaMinus />
          </button>
          <input type="text" value={count} disabled className="quantity__input" />
          <button onClick={() => dispatch(incrementProduct(product?.id))} className="quantity__action">
            <FaPlus />
          </button>
        </div>
      )}
    </>
  );
};

export default Quantity;
