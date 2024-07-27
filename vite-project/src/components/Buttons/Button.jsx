import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../store/Reducers/ProductsReducer";
import { useDispatch } from "react-redux";

const Button = ({ name, link, newDispatch, className }) => {

  const dispatch = useDispatch();

  return (
    <>
      <Link to={link}>
        <button className={`btn ${className}`} onClick={() => {dispatch(addProductToCart(newDispatch));}}>
          {name}
        </button>
      </Link>
    </>
  );
};

export default Button;
