import React from "react";
import "./Home.scss";
import logo from "/src/assets/images/home_img/logo.png";
import heart from "/src/assets/images/home_img/heart.svg";
import cart from "/src/assets/images/home_img/cart.svg";
import header from "/src/assets/images/home_img/header.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="company-style">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="theme">
              <input type="text" />
            </div>
          </div>
          <div className="menu">
            <div className="menu__button">
              <button className="menu__button_small">1 day discount!</button>
            </div>
            <nav className="nav">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/">Main Page</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/products">All products</NavLink>
                </li>
                <li className="menu__item">
                  <a href="#">All sales</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="users-menu">
            <a href="#">
              <img src={heart} alt="favourite" />
            </a>
            <a href="#">
              <img src={cart} alt="cart" />
            </a>
          </div>
        </div>
      </header>
      <section className="main-content">
        <div className="main-content__items">
            <img className="main-image" src={header} alt="header_image" />
          <div className="main-content__item">
            <div className="container">
              <h1 className="main__text">
                Amazing Discounts <br />
                on Garden Products!
              </h1>
              <button className="main__button_large">Check out</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
