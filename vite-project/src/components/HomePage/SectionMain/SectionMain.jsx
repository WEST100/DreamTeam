import React from 'react'
import header from "/src/assets/images/home_img/header.jpg";
import "./SectionMain.scss";

const SectionMain = () => {
  return (
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
  );
}

export default SectionMain
