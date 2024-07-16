import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ name, link, dispatch }) => {
  return (
    <>
      <Link to={link}>
        <button className="btn" onClick={() => dispatch}>
          {name}
        </button>
      </Link>
    </>
  );
};

export default Button;
