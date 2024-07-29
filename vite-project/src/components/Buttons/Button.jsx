import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ name, link, className }) => {

  return (
    <>
      <Link to={link}>
        <button className={`btn ${className}`}>
          {name}
        </button>
      </Link>
    </>
  );
};

export default Button;
