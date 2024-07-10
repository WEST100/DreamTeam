import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import "./ShoppingCart.scss";
import { useSelector } from "react-redux";
import ProductCart from "../../components/Product/ProductCart/ProductCart";

const ShoppingCart = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { cartProducts, isLoading } = useSelector((state) => state.products);

  let data = cartProducts.length > 0 ? true : false;
  return (
    <section className={`shoppingCart ${theme ? "shoppingCart-dark" : "shoppingCart-light"}`}>
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Shopping cart</h2>
          <hr />
          <button onClick={goBack} className="breadcrumbs__button">
            Back to the store
          </button>
        </div>
        {!data
          ?
          <div>no items!!!!!!!!!!!!!!!!!!!!!!!!!</div>
          :
          <div className="productListCartContainer">{isLoading ? <div className="loader"></div> : cartProducts && cartProducts.map((prod) => <ProductCart key={prod.id} product={prod} />)}</div>}
      </div>
    </section>
  );
};

export default ShoppingCart;
