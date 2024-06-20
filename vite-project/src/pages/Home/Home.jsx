import React from "react";
import "./Home.scss";
import logo from "/src/assets/images/home_img/logo.png";
import heart from "/src/assets/images/home_img/heart.svg";
import cart from "/src/assets/images/home_img/cart.svg";
import header from "/src/assets/images/home_img/header.jpg";
import bridge from "/src/assets/images/home_img/Bridge.png";
import flowers from "/src/assets/images/home_img/Flowers.png";
import cutters from "/src/assets/images/home_img/Wire_cutters.png";
import castle from "/src/assets/images/home_img/Castle.png";
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

      <section className='sale'>

        <div className='sale__block'>
          <div>
            <p className='sale__all'>Sale</p>
          </div>
          <div className="sale_block-butlin">
          <div className="sale_item-line">
            <hr className='sale__line' />
          </div>
          <div className="sale__button-item">
            <button className='all__sales'>All sales</button>
          </div>
          </div>
        </div>

        <div className='sale__main-section'>

          <div className='sale__priceBlock'>

            <div className="sale__img">
              <img className='sale__img-item' src={bridge} alt="Bridge" />
            </div>

            <div className='sale__description'>
              <div className='sale__discount'>
                <p>Decorative forged bridge</p>
              </div>

              <div className='sale__prices'>
                <p className='sale__realPrice'>$500</p>
                <p className='sale__oldPrice'>$1000</p>
              </div>
            </div>


            <div className='sale__discountPerc'>
              <p>-50%</p>
            </div>

          </div>


          <div className='sale__priceBlock'>


            <div className="sale__img">
              <img className='sale__img-item' src={flowers} alt="flowers" />
            </div>

            <div className='sale__description'>
              <div className='sale__discount'>
                <p>Aquarium lock</p>
              </div>

              <div className='sale__prices'>
                <p className='sale__realPrice'>$100</p>
                <p className='sale__oldPrice'>$150</p>
              </div>
            </div>


            <div className='sale__discountPerc'>
              <p>-34%</p>
            </div>

          </div>


          <div className='sale__priceBlock'>


            <div className="sale__img">
              <img className='sale__img-item' src={castle} alt="castle" />
            </div>

            <div className='sale__description'>
              <div className='sale__discount'>
                <p>Flower basket</p>
              </div>

              <div className='sale__prices'>
                <p className='sale__realPrice'>$150</p>
                <p className='sale__oldPrice'>$200</p>
              </div>
            </div>


            <div className='sale__discountPerc'>
              <p>-25%</p>
            </div>

          </div>


          <div className='sale__priceBlock'>


            <div className="sale__img">
              <img className='sale__img-item' src={cutters} alt="Wire cutters" />
            </div>

            <div className='sale__description'>
              <div className='sale__discount'>
                <p>Secateurs</p>
              </div>

              <div className='sale__prices'>
                <p className='sale__realPrice'>$199</p>
                <p className='sale__oldPrice'>$240</p>
              </div>
            </div>


            <div className='sale__discountPerc'>

              <p>-17%</p>

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
