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
    <section
      className={`shoppingCart ${
        theme ? "shoppingCart-dark" : "shoppingCart-light"
      }`}
    >
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Shopping cart</h2>
          <hr />
          <button onClick={goBack} className="breadcrumbs__button">
            Back to the store
          </button>
        </div>
        <div className="shop">
          <div className="list">
            {!data ? (
              <div>no items!!!!!!!!!!!!!!!!!!!!!!!!!</div>
            ) : (
              <div className="shop__ListCartContainer">
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  cartProducts &&
                  cartProducts.map((prod) => (
                    <ProductCart key={prod.id} product={prod} />
                  ))
                )}
              </div>
            )}
          </div>
          <div className="shop__form">
            <div className="shop__form__text">
              <h2>Order details</h2>
              <div className="shop__form__text__frame">
                <p>3 items</p>
                <div className="shop__form__text__frame__price">
                  <p>Total</p>
                  <span>$541,00</span>
                </div>
              </div>
            </div>
            <div className="shop__form__container">
              <form>
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
