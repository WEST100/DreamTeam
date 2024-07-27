import React, { useContext, useEffect, useState } from "react";
import "./Header.scss";
import logo from "/src/assets/images/home_img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Button from "../../Buttons/Button";
import ModalCartOneDayDiscount from "../../Modal/ModalCartOneDayDiscount/ModalCartOneDayDiscount";
import { addProductFromOneDayDiscount, addProductToCart } from "../../../store/Reducers/ProductsReducer";
import ProductCardOneDayDiscount from "../../Product/ProductCardOneDayDiscount/ProductCardOneDayDiscount";

const Header = () => {
  const dispatch = useDispatch();

  const { products, favoritesProducts, cartProducts } = useSelector((state) => state.products);

  let filteredProducts = products.filter((item) => item.discont_price === null);

  let date = new Date();
  let day = date.getDate();

  let findOneDayDiscountProduct = () => {
    if (day >= 1 && day <= 5) {
      return filteredProducts.slice(0, 1);
    } else if (day >= 6 && day <= 10) {
      return filteredProducts.slice(1, 2);
    } else if (day >= 11 && day <= 15) {
      return filteredProducts.slice(2, 3);
    } else if (day >= 16 && day <= 20) {
      return filteredProducts.slice(3, 4);
    } else if (day >= 21 && day <= 25) {
      return filteredProducts.slice(4, 5);
    } else if (day >= 26 && day <= 31) {
      return filteredProducts.slice(5, 6);
    }
  };

  let discountProductOfTheDay = findOneDayDiscountProduct();

  // метод случайной сортировки массива и слайс 1-го товара (метод работает, но при клике на сердечко, компонент постоянно обновляется, пришлось решить через new Date)
  // let randomProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 1);
  // console.log(randomProducts[0]);

  // функция сравнения есть ли товар со скидкой 50% уже в корзине или нет
  let checkForUniqueProductInCart = () => {
    let title = discountProductOfTheDay[0].title;
    let arrTitle = cartProducts.map((item) => item.title);
    let answer = arrTitle.filter((item) => item === title);
    if (answer[0] === title) {
      console.log("product already been in cart");
    } else {
      dispatch(addProductFromOneDayDiscount(discountProductOfTheDay[0]));
    }
  };

  // установка класса для активных ссылок
  const setActiveLink = ({ isActive }) => (isActive ? "navbar__item navbar__item-active" : "navbar__item");

  // переключатель темы
  const { theme, toggleTheme } = useContext(ThemeContext);

  // состояние отвечающее за видимость модального окна
  const [modalActive, setModalActive] = useState(false);

  // стейт для отслеживания состояния нажатия на бургер
  const [isBurgerMenuOn, setIsBurgerMenuOn] = useState(false);

  // функция для темы, которая забирает состояние переключателя
  const handleChangeSwitch = (e) => {
    toggleTheme(e.target.checked);
  };

  return (
    <header className={`header ${theme ? "header-dark" : "header-light"}`}>
      <div className="container">
        <div className="company-style">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="header__action">
            <label className={`switch ${theme ? "" : "switch-active"}`}>
              <input type="checkbox" onChange={handleChangeSwitch} value={theme} />
              <div>
                <span className="iconChangeColor">
                  <IoMoonOutline />
                </span>
                <span>
                  <IoSunnyOutline />
                </span>
              </div>
              <span className="switch__slider"></span>
            </label>
          </div>
        </div>

        <div className={isBurgerMenuOn ? "menu-opacity" : ""}>
          <div className="menu">
            <div className="menu__button">
              <button className="menu__button_small" onClick={() => setModalActive(true)}>
                1 day discount!
              </button>
            </div>
            <nav className="nav">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/" className={setActiveLink}>
                    Main Page
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/categories" className={setActiveLink}>
                    Categories
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/products" className={setActiveLink}>
                    All products
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/discounted" className={setActiveLink}>
                    All sales
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="users-menu">
          <Link to={"/favorites"}>
            {favoritesProducts ? <span>{`${favoritesProducts.length}`}</span> : ""}
            <svg className="heart" width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.4 25.2222C42.678 22.14 46 18.4456 46 13.6111C46 10.5317 44.7252 7.57832 42.456 5.40082C40.1868 3.22331 37.1091 2 33.9 2C30.028 2 27.3 3.05556 24 6.22222C20.7 3.05556 17.972 2 14.1 2C10.8909 2 7.8132 3.22331 5.54401 5.40082C3.27482 7.57832 2 10.5317 2 13.6111C2 18.4667 5.3 22.1611 8.6 25.2222L24 40L39.4 25.2222Z" />
            </svg>
          </Link>
          <Link to={"/shopping-cart"}>
            {cartProducts ? <span className="countProductsInCart">{`${cartProducts.length}`}</span> : ""}
            <svg className="cart" width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 0C16.4961 0 12.0565 4.37373 12.0565 9.79592V11.7551H4.19492L4.10169 12.6122L0.124294 46.898L0 48H44L43.8757 46.898L39.8983 12.6122L39.8051 11.7551H31.9435V9.79592C31.9435 4.37373 27.5039 0 22 0ZM22 1.95918C26.4396 1.95918 29.9548 5.42219 29.9548 9.79592V11.7551H14.0452V9.79592C14.0452 5.42219 17.5604 1.95918 22 1.95918ZM5.99717 13.7143H12.0565V15.949C11.4622 16.2895 11.0621 16.9094 11.0621 17.6327C11.0621 18.7156 11.9516 19.5918 13.0508 19.5918C14.1501 19.5918 15.0395 18.7156 15.0395 17.6327C15.0395 16.9094 14.6395 16.2895 14.0452 15.949V13.7143H29.9548V15.949C29.3605 16.2895 28.9605 16.9094 28.9605 17.6327C28.9605 18.7156 29.8499 19.5918 30.9492 19.5918C32.0484 19.5918 32.9379 18.7156 32.9379 17.6327C32.9379 16.9094 32.5378 16.2895 31.9435 15.949V13.7143H38.0028L41.7627 46.0408H2.23729L5.99717 13.7143Z" />
            </svg>
          </Link>
          <RxHamburgerMenu onClick={() => setIsBurgerMenuOn(!isBurgerMenuOn)} className="burger-menu" />
        </div>
        {modalActive && (
          <ModalCartOneDayDiscount active={modalActive} setActive={setModalActive}>
            <div className="modalHeader">
              <div className="modalHeader__items">
                <div className="modalHeader__items_title">
                  <h3>50% discount on product of the day</h3>
                </div>
                <div className="modalHeader__items_close">
                  <IoMdClose onClick={() => setModalActive(false)} />
                </div>
              </div>
              <div className="modalHeader__product">
                <div className="product__container">{discountProductOfTheDay && discountProductOfTheDay.map((prod) => <ProductCardOneDayDiscount key={prod.id} product={prod} />)}</div>
              </div>
              {/* <Button className={"btn-white"} name={"Add to cart"} newDispatch={randomProducts[0]} onClick={() => setModalActive(false)} /> */}
              <Link to={"/shopping-cart"}>
                <button
                  className="modalHeader__btn"
                  onClick={() => {
                    setModalActive(false);
                    checkForUniqueProductInCart();
                  }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </ModalCartOneDayDiscount>
        )}
      </div>
    </header>
  );
};

export default Header;
