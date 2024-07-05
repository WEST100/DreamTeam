import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className={`shoppingCart ${theme ? "shoppingCart-dark" : "shoppingCart-light"}`}>
        <div className="container">
          <div className="pageSectionTitle">
            <h2>Shopping cart</h2>
            <hr />
            <button className="breadcrumbs__button">
              <Link to={"/"}>Back to the store</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
