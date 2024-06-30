import React from "react";
import "./SectionSale.scss";
import bridge from "/src/assets/images/home_img/Bridge.png";
import flowers from "/src/assets/images/home_img/Flowers.png";
import cutters from "/src/assets/images/home_img/Wire_cutters.png";
import castle from "/src/assets/images/home_img/Castle.png";
import whiteheart from "/src/assets/images/home_img/white_heart.svg";
import cart from "/src/assets/images/home_img/white_cart.svg";

const SectionSale = () => {
  return (
    <section className="sale container">
      <div className="categories__title">
        <h2>Sale</h2>
        <hr />
        <button className="categories__button">All sales</button>
      </div>
      <div className="sale__block">
        <div className="sale__block__item">
          <div className="sale__img">
            <img src={bridge} alt="Bridge" />
          </div>
          <div className="sale__discount">
            <div className="sale__discount__text">
              <p>Decorative forged bridge</p>
            </div>
            <div className="sale__price">
              <p className="sale__price__real">$500</p>
              <p className="sale__price__old">$1000</p>
            </div>
          </div>
          <div className="sale__discount__Perc">
            <p>-50%</p>
          </div>
          <div className="sale__icons">
            <img src={whiteheart} alt="Icon Heart" />
            <img src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__block__item">
          <div className="sale__img">
            <img src={flowers} alt="flowers" />
          </div>
          <div className="sale__discount">
            <div className="sale__discount__text">
              <p>Aquarium lock</p>
            </div>
            <div className="sale__price">
              <p className="sale__price__real">$100</p>
              <p className="sale__price__old">$150</p>
            </div>
          </div>
          <div className="sale__discount__Perc">
            <p>-34%</p>
          </div>
          <div className="sale__icons">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img id="sale__icons-bag" className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__block__item">
          <div className="sale__img">
            <img src={castle} alt="castle" />
          </div>
          <div className="sale__discount">
            <div className="sale__discount__text">
              <p>Flower basket</p>
            </div>
            <div className="sale__price">
              <p className="sale__price__real">$150</p>
              <p className="sale__price__old">$200</p>
            </div>
          </div>
          <div className="sale__discount__Perc">
            <p>-25%</p>
          </div>
          <div className="sale__icons">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__block__item">
          <div className="sale__img">
            <img src={cutters} alt="Wire cutters" />
          </div>
          <div className="sale__discount">
            <div className="sale__discount__text">
              <p>Secateurs</p>
            </div>
            <div className="sale__price">
              <p className="sale__price__real">$199</p>
              <p className="sale__price__old">$240</p>
            </div>
          </div>
          <div className="sale__discount__Perc">
            <p>-17%</p>
          </div>
          <div className="sale__icons">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSale;
