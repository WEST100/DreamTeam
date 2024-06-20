import React from "react";
import "./Home.scss";
import logo from "/src/assets/images/home_img/logo.png";
import heart from "/src/assets/images/home_img/heart.svg";
import cart from "/src/assets/images/home_img/cart.svg";
import header from "/src/assets/images/home_img/header.jpg";
import { NavLink } from "react-router-dom";
import img1 from "/src/assets/images/category_img/1.jpeg";
import img2 from "/src/assets/images/category_img/2.jpeg";
import img3 from "/src/assets/images/category_img/3.jpeg";
import img4 from "/src/assets/images/category_img/4.jpeg";
import imageForm from "/src/assets/images/imageForm.jpeg";

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
              <button className="menu__button_small montserrat-main">
                1 day discount!
              </button>
            </div>
            <nav className="nav">
              <ul className="menu__list montserrat-main">
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
        <div className="container">
          <div className="main-content__items">
            <div className="main-content__item">
              <h1 className="main__text">
                Amazing Discounts <br />
                on Garden Products!
              </h1>
              <button className="main__button_large montserrat-main">
                Check out
              </button>
            </div>
          </div>
        </div>
        <div className="main-content__image">
          <img className="main-image" src={header} alt="header_image" />
        </div>
      </section>
      
      <section className="categories">
        <div className="container">
          <div className="categories__title">
            <h1>Categories</h1>
            <hr />
            <button className="categories__button">
              <a href="https://example.com">All categories</a>
            </button>
          </div>
          <div className="categories__card">
            <div className="categories__card__imegs">
              <img src={img1} alt="Fertilizer" />
              <p>Fertilizer</p>
            </div>
            <div className="categories__card__imegs">
              <img src={img2} alt="Protective products and septic tanks" />
              <p>Protective products and septic tanks</p>
            </div>
            <div className="categories__card__imegs">
              <img src={img3} alt="Planting material" />
              <p>Planting material</p>
            </div>
            <div className="categories__card__imegs">
              <img src={img4} alt="Planting material" />
              <p>Planting material</p>
            </div>
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="discount__form">
          <h1>5% off on the first order</h1>
          <div className="discount__content">
            <div className="discount__image">
              <img
                src={imageForm}
                alt="Hands holding garden tools"
              />
            </div>
            <div className="discount__form__container">
              <form>
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Get a discount</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
