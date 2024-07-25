import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ name, link, dispatch, className }) => {
  return (
    <>
      <Link to={link}>
        <button className={`btn ${className}`} onClick={() => dispatch}>
          {name}
        </button>
      </Link>
    </>
  );
};

export default Button;
