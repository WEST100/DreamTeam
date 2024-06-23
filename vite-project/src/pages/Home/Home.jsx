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
import insta from "/src/assets/images/home_img/insta.svg";
import whatsapp from "/src/assets/images/home_img/whatsapp.svg";
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
          <img className="main-content__image" src={header} alt="header_image" />
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

      <section className="categories container">
        <div className="categories__title">
          <h2>Categories</h2>
          <hr />
          <button className="categories__button">All categories</button>
        </div>
        <div className="categories__card">
          <div className="categories__card__images">
            <img src={img1} alt="Fertilizer" />
            <p>Fertilizer</p>
          </div>
          <div className="categories__card__images">
            <img src={img2} alt="Protective products and septic tanks" />
            <p>Protective products and septic tanks</p>
          </div>
          <div className="categories__card__images">
            <img src={img3} alt="Planting material" />
            <p>Planting material</p>
          </div>
          <div className="categories__card__images">
            <img src={img4} alt="Planting material" />
            <p>Planting material</p>
          </div>
        </div>
      </section>

      <section className="discount container">
        <div className="discount__form">
          <h3>5% off on the first order</h3>
          <div className="discount__content">
            <div className="discount__image">
              <img src={imageForm} alt="Hands holding garden tools" />
            </div>
            <div className="discount__form__container">
              <form>
                <input type="text" name="name" placeholder="Name" required />
                <input type="tel" name="phone" placeholder="Phone number" required />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Get a discount</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sale container">
        <div className="sale__block">
          <div>
            <h2 className="sale__all">Sale</h2>
          </div>
          <div className="sale_block-butlin">
            <div className="sale_item-line">
              <hr className="sale__line" />
            </div>
            <div className="sale__button-item">
              <button className="all__sales">All sales</button>
            </div>
          </div>
        </div>

        <div className="sale__main-section">
          <div className="sale__priceBlock">
            <div className="sale__img">
              <img className="sale__img-item" src={bridge} alt="Bridge" />
            </div>

            <div className="sale__description">
              <div className="sale__discount">
                <p>Decorative forged bridge</p>
              </div>

              <div className="sale__prices">
                <p className="sale__realPrice">$500</p>
                <p className="sale__oldPrice">$1000</p>
              </div>
            </div>

            <div className="sale__discountPerc">
              <p>-50%</p>
            </div>
          </div>

          <div className="sale__priceBlock">
            <div className="sale__img">
              <img className="sale__img-item" src={flowers} alt="flowers" />
            </div>

            <div className="sale__description">
              <div className="sale__discount">
                <p>Aquarium lock</p>
              </div>

              <div className="sale__prices">
                <p className="sale__realPrice">$100</p>
                <p className="sale__oldPrice">$150</p>
              </div>
            </div>

            <div className="sale__discountPerc">
              <p>-34%</p>
            </div>
          </div>

          <div className="sale__priceBlock">
            <div className="sale__img">
              <img className="sale__img-item" src={castle} alt="castle" />
            </div>

            <div className="sale__description">
              <div className="sale__discount">
                <p>Flower basket</p>
              </div>

              <div className="sale__prices">
                <p className="sale__realPrice">$150</p>
                <p className="sale__oldPrice">$200</p>
              </div>
            </div>

            <div className="sale__discountPerc">
              <p>-25%</p>
            </div>
          </div>

          <div className="sale__priceBlock">
            <div className="sale__img">
              <img className="sale__img-item" src={cutters} alt="Wire cutters" />
            </div>

            <div className="sale__description">
              <div className="sale__discount">
                <p>Secateurs</p>
              </div>

              <div className="sale__prices">
                <p className="sale__realPrice">$199</p>
                <p className="sale__oldPrice">$240</p>
              </div>
            </div>

            <div className="sale__discountPerc">
              <p>-17%</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2 className="footer__title">Contact</h2>
          <div className="footer__items">
            <div className="footer__item">
              <p className="footer__item_descr">Phone</p>
              <p className="footer__item_info">+49 999 999 99 99</p>
            </div>
            <div className="footer__item">
              <p className="footer__item_descr">Socials</p>
              <a href="#">
                <img className="footer__item_image" src={insta} alt="instagram" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
            <div className="footer__item">
              <p className="footer__item_descr">Address</p>
              <p className="footer__item_info">Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
            </div>
            <div className="footer__item">
              <p className="footer__item_descr">Working Hours</p>
              <p className="footer__item_info">24 hours a day</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.896610618105!2d13.377704099999999!3d52.516274599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2z0JHRgNCw0L3QtNC10L3QsdGD0YDQs9GB0LrQuNC1INCy0L7RgNC-0YLQsA!5e0!3m2!1sru!2sde!4v1718793769656!5m2!1sru!2sde" width="1360" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </footer>
    </>
  );
};

export default Home;
